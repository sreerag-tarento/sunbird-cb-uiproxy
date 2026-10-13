import axios from 'axios'
import express from 'express'
import { UploadedFile } from 'express-fileupload'
import FormData from 'form-data'
import lodash from 'lodash'
import { allocationService } from '../authz'
import { axiosRequestConfig } from '../configs/request.config'
import { CONSTANTS } from '../utils/env'
import { logDebug, logError } from '../utils/logger'
import {
  ilpProxyCreatorRoute,
  // proxyCreatorDiscussion,
  proxyAssessmentRead,
  proxyAssessmentReadV2,
  proxyAssessmentReadV7,
  proxyContent,
  proxyContentLearnerVM,
  proxyCreatorForms,
  proxyCreatorKnowledge,
  proxyCreatorLearner,
  proxyCreatorQML,
  proxyCreatorRoute,
  proxyCreatorSunbird,
  proxyCreatorSunbirdSearch,
  proxyCreatorToAppentUserId,
  proxyQuestionRead,
  scormProxyCreatorRoute
} from '../utils/proxyCreator'
import { extractUserIdFromRequest, extractUserToken } from '../utils/requestExtract'
import { chatBotGenericAPIIntegration } from './chatBotGenericAPIIntegration'
import { chatBotIntegrationAPI } from './chatBotIntegration'
import { contentTranscodeAPIIntegration } from './contentTranscodeAPIIntegration'
import { frameworksApi } from './frameworks'
import { jwtUserTokenHelper } from './jwtUserTokenHelper'
import { lookerDashboard } from './lookerIntegration'

const API_END_POINTS = {
  batchParticipantsApi: `${CONSTANTS.KONG_API_BASE}/course/v1/batch/participants/list`,
  programBatchParticipantsApi: `${CONSTANTS.KONG_API_BASE}/program/v1/batch/participants/list`,
  contentNotificationEmail: `${CONSTANTS.NOTIFICATION_SERVIC_API_BASE}/v1/notification/send/sync`,
  externalContentbatchParticipantsApi: `${CONSTANTS.KONG_API_BASE}/externaltraining/v1/batch/participants/list`,
  kongExtOrgSearch: `${CONSTANTS.KONG_API_BASE}/org/v1/cb/ext/search`,
  kongSearchOrg: `${CONSTANTS.KONG_API_BASE}/org/v1/search`,
  // tslint:disable-next-line: all
  kongSearchUser: `${CONSTANTS.KONG_API_BASE}/user/v1/search`,
  orgTypeListEndPoint: `${CONSTANTS.KONG_API_BASE}/data/v1/system/settings/get/orgTypeList`,
}
export const proxiesV8 = express.Router()
const _ = require('lodash')

const FILE_NOT_FOUND_ERR = 'File not found in the request'
// tslint:disable-next-line: no-duplicate-string
const PROXIES_V8_PREFIX = '/proxies/v8'
// tslint:disable-next-line: no-duplicate-string
const HEADER_USER_CHANNEL = 'x-authenticated-user-channel'
// tslint:disable-next-line: no-duplicate-string
const HEADER_USER_ORGID = 'x-authenticated-user-orgid'
// tslint:disable-next-line: no-duplicate-string
const HEADER_USER_ORGNAME = 'x-authenticated-user-orgname'
// tslint:disable-next-line: no-duplicate-string
const SESSION_ROOT_ORG_ID = 'session.rootOrgId'
// tslint:disable-next-line: no-duplicate-string
const SESSION_CHANNEL = 'session.channel'

const unknownError = 'Failed due to unknown reason'

/* tslint:disable:no-any */
function handleFormDataResponse(
  routeLabel: string, res: any, err: any,
  response: any
) {
  /* tslint:enable:no-any */
  if (err || !response) {
    logError(`FormData submit error in ${routeLabel}`, String(err))
    if (!res.headersSent) {
      res.status(502).json({ error: 'Request failed', message: String(err) })
    }
    return
  }
  const chunks: Buffer[] = []
  response.on('error', (streamErr: Error) => {
    logError(`Response stream error in ${routeLabel}`, String(streamErr))
    if (!res.headersSent) {
      res.status(502).json({ error: 'Stream failed' })
    }
  })
  response.on('data', (chunk: Buffer) => chunks.push(chunk))
  response.on('end', () => {
    const fullData = Buffer.concat(chunks)
    const statusCode = response.statusCode || 500
    if (statusCode === 200 || statusCode === 201) {
      try {
        res.status(statusCode).json(JSON.parse(fullData.toString('utf8')))
      } catch (_e) {
        res.status(statusCode).send(fullData.toString('utf8'))
      }
    } else {
      res.status(statusCode).send(fullData.toString('utf8'))
    }
  })
}

proxiesV8.get('/', (_req, res) => {
  res.json({
    type: 'PROXIES Route',
  })
})

proxiesV8.post('/upload/*', (req, res) => {
  if (req.files && req.files.data) {
    const url = removePrefix('/proxies/v8/upload/action', req.originalUrl)
    const file: UploadedFile = req.files.data as UploadedFile
    const formData = new FormData()
    formData.append('file', Buffer.from(file.data), {
      contentType: file.mimetype,
      filename: file.name,
    })
    formData.submit(
      {
        headers: {
          // tslint:disable-next-line:max-line-length
          Authorization: CONSTANTS.SB_API_KEY,
          org: 'dopt',
          rootorg: 'igot',
          // tslint:disable-next-line: all
          'x-authenticated-user-token': extractUserToken(req),
          // tslint:disable-next-line: all
          'x-authenticated-userid': extractUserIdFromRequest(req),
        },
        host: 'content-service',
        path: url,
        port: 9000,
      },
      // tslint:disable-next-line: no-any
      (err: any, response: any) => handleFormDataResponse('/upload/*', res, err, response)
    )
  } else {
    res.send(FILE_NOT_FOUND_ERR)
  }
})

proxiesV8.post('/private/upload/*', (_req, _res) => {
  if (_req.files && _req.files.data) {
    const _url = removePrefix('/proxies/v8/private/upload', _req.originalUrl)
    const _file: UploadedFile = _req.files.data as UploadedFile
    const _formData = new FormData()
    _formData.append('file', Buffer.from(_file.data), {
      contentType: _file.mimetype,
      filename: _file.name,
    })
    _formData.submit(
      {
        headers: {
          // tslint:disable-next-line:max-line-length
          Authorization: CONSTANTS.SB_API_KEY,
          org: 'dopt',
          rootorg: 'igot',
          // tslint:disable-next-line: all
          'x-authenticated-user-token': extractUserToken(_req),
          'x-authenticated-userid': extractUserIdFromRequest(_req),
        },
        host: 'content-service',
        path: _url,
        port: 9000,
      },
      (_err, _response) => {
        if (_err || !_response) {
          logError('FormData submit error in /private/upload/*', String(_err))
          if (!_res.headersSent) {
            _res.status(502).json({ error: 'Upload failed', message: String(_err) })
          }
          return
        }
        _response.on('error', (streamErr) => {
          logError('Response stream error in /private/upload/*', String(streamErr))
          if (!_res.headersSent) {
            _res.status(502).json({ error: 'Upload stream failed' })
          }
        })
        _response.on('data', (_data) => {
          if (_response.statusCode === 200 || _response.statusCode === 201) {
            _res.send(JSON.parse(_data.toString('utf8')))
          } else {
            _res.send(_data.toString('utf8'))
          }
        })
      }
    )
  } else {
    _res.send(FILE_NOT_FOUND_ERR)
  }
})

proxiesV8.use('/content/v2/discard',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/content/v5/dictionary',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/content/v2/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/content/v4/*',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/content/v1/retirement/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/content/admin/v1/durationSync/*',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('/content/admin/v1/replaceVideo',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use(
  '/content',
  proxyCreatorRoute(express.Router(), CONSTANTS.CONTENT_API_BASE + '/content')
)
proxiesV8.use(
  '/contentv3',
  proxyCreatorRoute(express.Router(), CONSTANTS.CONTENT_API_BASE + '/contentv3')
)
proxiesV8.use(
  '/fastrack',
  proxyCreatorRoute(express.Router(), CONSTANTS.ILP_FP_PROXY + '/fastrack')
)
proxiesV8.use(
  '/hosted',
  proxyCreatorRoute(express.Router(), CONSTANTS.CONTENT_API_BASE + '/hosted')
)
proxiesV8.use('/ilp-api', ilpProxyCreatorRoute(express.Router(), CONSTANTS.ILP_FP_PROXY))
proxiesV8.use(
  '/scorm-player',
  scormProxyCreatorRoute(express.Router(), CONSTANTS.SCORM_PLAYER_BASE)
)
proxiesV8.use(
  '/LA',
  proxyCreatorRoute(express.Router(), CONSTANTS.APP_ANALYTICS, Number(CONSTANTS.ANALYTICS_TIMEOUT))
)
proxiesV8.use(
  '/FordGamification',
  proxyCreatorRoute(express.Router(), CONSTANTS.GAMIFICATION_API_BASE + '/FordGamification')
)
proxiesV8.use(
  '/static-ilp',
  proxyCreatorRoute(express.Router(), CONSTANTS.STATIC_ILP_PROXY + '/static-ilp')
)
proxiesV8.use(
  '/web-hosted',
  proxyCreatorRoute(express.Router(), CONSTANTS.WEB_HOST_PROXY + '/web-hosted')
)

proxiesV8.use('/contentsearch/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/content/v1/search`)
)

proxiesV8.use('/sunbirdigot/v4/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/composite/v4/search`)
)

proxiesV8.use('/sunbirdigot/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/composite/v1/search`)
)

proxiesV8.use('/v1/content/retire',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KNOWLEDGE_MW_API_BASE}`)
)

proxiesV8.use('/v1/content/copy/*',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KNOWLEDGE_MW_API_BASE}`)
)

proxiesV8.use('/private/content/*',
  proxyContent(express.Router(), `${CONSTANTS.CONTENT_SERVICE_API_BASE}`)
)

proxiesV8.use('/learnervm/private/content/*',
  proxyContentLearnerVM(express.Router(), `${CONSTANTS.VM_LEARNING_SERVICE_URL}`)
)

proxiesV8.use('/content-progres/ngo*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/course/v1/content/state/update/ngo`)
)

proxiesV8.use('/content-progres/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/course/v1/content/state/update`)
)

proxiesV8.use('/read/content-progres/ngo/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/course/v1/content/state/read/ngo`)
)

proxiesV8.use('/read/content-progres/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/course/v1/content/state/read`)
)

proxiesV8.use('/read/user/insights',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/insights`)
)

proxiesV8.use('/trending/content/search',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/trending/search`)
)

proxiesV8.use('/halloffame/read',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/halloffame/read`)
)

proxiesV8.use('/walloffame/read',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/walloffame/read`)
)

proxiesV8.use('/karmapoints/read',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/karmapoints/read`)
)
proxiesV8.use('/karmapoints/user/course/read',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/karmapoints/user/course/read`)
)

proxiesV8.use('/claimkarmapoints',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/claimkarmapoints`)
)
proxiesV8.use('/login/entry*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/v1/user/login`)
)
proxiesV8.use('/user/totalkarmapoints',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/user/totalkarmapoints`)
)

proxiesV8.use('/halloffame/learnerleaderboard',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/halloffame/learnerleaderboard`)
)

proxiesV8.use('/walloffame/learnerleaderboard',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/walloffame/learnerleaderboard`)
)

proxiesV8.use('/microsite/read/insights',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/microsite/read/insights`)
)

proxiesV8.use('/msite/content/aggregation/search',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/msite/content/aggregation/search`)
)

proxiesV8.use('/halloffame/top/learners/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/halloffame/state/top/learners/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/walloffame/top/learners/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/walloffame/state/top/learners/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

// Dedicated handler for AI assessment generation (multipart/form-data)
proxiesV8.post('/ai/assessments/v1/generate', (req, res) => {
  const url = removePrefix(PROXIES_V8_PREFIX, req.originalUrl)
  const formData = new FormData()

  // Append all text fields from the parsed body
  if (req.body) {
    for (const key of Object.keys(req.body)) {
      formData.append(key, req.body[key])
    }
  }

  // Append file(s) if present
  if (req.files) {
    for (const key of Object.keys(req.files)) {
      const fileOrFiles = req.files[key]
      if (Array.isArray(fileOrFiles)) {
        for (const file of fileOrFiles) {
          formData.append(key, Buffer.from(file.data), {
            contentType: file.mimetype,
            filename: file.name,
          })
        }
      } else {
        const file = fileOrFiles
        formData.append(key, Buffer.from(file.data), {
          contentType: file.mimetype,
          filename: file.name,
        })
      }
    }
  }

  const rootOrgId = _.get(req, SESSION_ROOT_ORG_ID) || ''
  const channel = _.get(req, SESSION_CHANNEL) || ''

  const submitReq = formData.submit(
    {
      headers: {
        Authorization: CONSTANTS.SB_API_KEY,
        [HEADER_USER_CHANNEL]: encodeURIComponent(channel),
        [HEADER_USER_ORGID]: rootOrgId,
        [HEADER_USER_ORGNAME]: encodeURIComponent(channel),
        // tslint:disable-next-line: no-duplicate-string
        'x-authenticated-user-token': extractUserToken(req),
        // tslint:disable-next-line: no-duplicate-string
        'x-authenticated-userid': extractUserIdFromRequest(req),
      },
      host: 'kong',
      path: url,
      port: 8000,
    },
    // tslint:disable-next-line: no-any
    (err: any, response: any) => handleFormDataResponse('/ai/assessments/v1/generate', res, err, response)
  )
  // Increase socket timeout for long-running AI generation (5 minutes)
  submitReq.setTimeout(300000)
})

// Remaining AI assessment routes (non-form-data) use generic proxy
proxiesV8.use('/ai/assessments/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/ai/cbp/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.get(['/api/user/v2/read', '/api/user/v2/read/:id'], async (req, res) => {
  const host = req.get('host')
  const originalUrl = req.originalUrl
  const lastIndex = originalUrl.lastIndexOf('/')
  const subStr = originalUrl.substr(lastIndex).substr(1).split('-').length
  const loggedInUserId = extractUserIdFromRequest(req).split(':')[2]
  let urlUserId = ''
  let userId = loggedInUserId
  if (subStr === 5 && (originalUrl.substr(lastIndex).substr(1))) {
    urlUserId = originalUrl.substr(lastIndex).substr(1)
    userId = urlUserId
  }

  await axios({
    ...axiosRequestConfig,
    headers: {
      Authorization: CONSTANTS.SB_API_KEY,
      // tslint:disable-next-line: all
      'x-authenticated-user-token': extractUserToken(req),
    },
    method: 'GET',
    url: `${CONSTANTS.KONG_API_BASE}/user/v2/read/` + userId,
  }).then((response) => {
    if (response.data.responseCode === 'OK') {
      res.status(200).send(response.data)
    } else {
      logError('User Read API.. Received non OK response.' + JSON.stringify(response.data))
      if (urlUserId.length > 1 && urlUserId !== loggedInUserId) {
        res.status(400).send(response.data)
      } else {
        res.redirect(`https://${host}/public/logout?error=` + encodeURIComponent(JSON.stringify(response.data.params.errmsg)))
      }
    }
  }).catch((err) => {
    logError('Failed to do user read API. Received Exception: loggedInUserId : ' + loggedInUserId + ', urlUserId: ' + urlUserId)
    let errMsg = 'Internal Server Error'
    if (err.response && err.response.data) {
      logError('Received error for user read API. Error: ' + JSON.stringify(err.response.data))
      errMsg = err.response.data.params.errmsg
    }
    if (urlUserId.length > 1 && urlUserId !== loggedInUserId) {
      res.status(400).send(err.response.data)
    } else {
      if (req.session) {
        req.session.destroy((dErr) => {
          logError('Failed to clear the session. ERROR: ' + JSON.stringify(dErr))
        })
      }
      res.clearCookie('connect.sid', { path: '/' })
      res.redirect(`https://${host}/public/logout?error=` + encodeURIComponent(errMsg))
    }
  })
})

proxiesV8.use('/api/user/v5/read',
  proxyCreatorToAppentUserId(express.Router(), `${CONSTANTS.KONG_API_BASE}/user/v5/read/`)
)

proxiesV8.use([
  '/action/questionset/v1/*',
  '/action/question/v1/*',
  '/action/object/category/definition/v1/*',
],
  proxyCreatorQML(express.Router(), `${CONSTANTS.KONG_API_BASE}`, '/action/')
)
proxiesV8.use('/action/content/v3/updateReviewStatus',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('private/content/v4/update',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('private/content/v4/system/update',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('/action/content/v3/hierarchyUpdate',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('/action/*',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KNOWLEDGE_MW_API_BASE}`)
)
proxiesV8.use('/mdo/content/*',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/learner/achievement/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/learner/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorLearner(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/notification/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.post('/org/v1/search', async (req, res) => {
  try {
    // tslint:disable-next-line: all
    const roleData = lodash.get(req, 'session.userRoles')
    // tslint:disable-next-line: all
    const rootOrgId = lodash.get(req, 'session.rootOrgId')
    logDebug('org search API call : Users Roles are...')
    logDebug(roleData)
    const urlPath = API_END_POINTS.kongSearchOrg
    if (roleData.includes('STATE_ADMIN')) {
      logDebug('roleData contains state admin')
      req.body.request.filters.ministryOrStateId = rootOrgId
      logDebug('updated urlPath -> ' + urlPath)
    }
    const searchResponse = await axios({
      ...axiosRequestConfig,
      data: req.body,
      headers: {
        Authorization: CONSTANTS.SB_API_KEY,
        // tslint:disable-next-line: all
        'x-authenticated-user-token': extractUserToken(req),
      },
      method: 'POST',
      url: urlPath,
    })
    res.status(200).send(searchResponse.data)
  } catch (err) {
    logError('Org search API failed:', String(err))
    res.status(500).json({ error: 'Failed to search organisations' })
  }
})

proxiesV8.use('/org/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/dashboard/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

// tslint:disable-next-line:max-line-length
proxiesV8.post(['/user/v1/bulkupload', '/storage/profilePhotoUpload/*', '/workflow/admin/transition/bulkupdate', '/cloud-services/mlcore/v1/files/upload', '/calendar/v1/bulkUpload', '/storage/orgStoreUpload', '/workflow/admin/v2/bulkupdate/transition', '/user/v2/bulkupload', '/ciosIntegration/v1/loadContentFromExcel/*', '/storage/v1/uploadCiosIcon', '/storage/v1/uploadCiosContract', '/organisation/v1/competencyDesignationMappings/bulkUpload/*', '/template/api/v1/upload', '/designation/v1/orgMapping/bulkUpload/*', '/storage/v1/uploadCiosLogsFile', '/customselfregistration/upload/logo/gcpcontainer', '/ciosIntegration/v1/loadContentProgressFromExcel/*', '/feedDiscussion/uploadFile/*', '/community/v1/fileUpload/*', '/user/v2/event/bulkonboard/*', '/workflow/blendedprogram/bulkApprovalDataFromCsv/*', '/customFields/v1/masterList/*', '/organisation/v1/hierarchy/bulkUpload/*', '/user/v3/bulkupload', '/user/v1/org-migration/bulk-upload/*', '/user/v2/org-migration/bulk-upload/*', '/storage/v1/bp/assignment/answer/*', '/peersurvey/upload', '/externaltraining/v1/bulkupload/*', '/user/v2/event/bulkonboard', '/user/nongovt/v1/bulkupload', '/program/coordinator/bulk-upload/*'], (req, res) => {
  if (req.files && req.files.data) {
    const url = removePrefix('/proxies/v8', req.originalUrl)
    const file: UploadedFile = req.files.data as UploadedFile
    const formData = new FormData()
    formData.append('file', Buffer.from(file.data), {
      contentType: file.mimetype,
      filename: file.name,
    })

    // Forward the metadata parameter
    if (req.body && req.body.metadata) {
      formData.append('metadata', req.body.metadata)
    }

    let rootOrgId = _.get(req, 'session.rootOrgId')
    if (!rootOrgId) {
      rootOrgId = ''
    }
    let channel = _.get(req, 'session.channel')
    if (!channel) {
      channel = ''
    }

    const uploadHeaders: { [key: string]: string } = {
      // tslint:disable-next-line:max-line-length
      Authorization: CONSTANTS.SB_API_KEY,
      // tslint:disable-next-line: all
      'x-authenticated-user-channel': encodeURIComponent(channel),
      'x-authenticated-user-orgid': rootOrgId,
      'x-authenticated-user-orgname': encodeURIComponent(channel),
      'x-authenticated-user-token': extractUserToken(req) || '',
      'x-authenticated-userid': extractUserIdFromRequest(req),
    }
    const targetOrgId = _.get(req, 'body.targetorgid') || _.get(req, 'headers.targetorgid')
    if (targetOrgId) {
      uploadHeaders.targetorgid = targetOrgId
    }
    formData.submit(
      {
        headers: uploadHeaders,
        host: 'kong',
        path: url,
        port: 8000,
      },
      // tslint:disable-next-line: all
      (err, response) => {
        // tslint:disable-next-line: all
        let chunks: Buffer[] = [];
        response.on('data', (chunk) => chunks.push(chunk))
        // tslint:disable-next-line: all
        response.on('end', () => {
          const fullData = Buffer.concat(chunks)
          if (!err && (response.statusCode === 200 || response.statusCode === 201 || response.statusCode === 406)) {
            if (response.headers['content-type'] === 'text/csv') {
              res.setHeader('Content-Type', 'text/csv')
              res.setHeader('Content-Disposition', 'attachment; filename="report.csv"')
              res.status(response.statusCode).send(fullData)
            } else {
              let parsed
              try {
                parsed = JSON.parse(fullData.toString('utf8'))
                res.status(response.statusCode).json(parsed)
              } catch (e) {
                logDebug('Invalid JSON received as per Json Parse')
                res.status(response.statusCode).type('application/json').send(fullData.toString('utf8'))
              }
            }
          } else {
            res.status(response.statusCode || 500).send(fullData.toString('utf8'))
          }
        })
        if (err) {
          res.status((response && response.statusCode) || 500).send(err)
        }
      }
    )
  } else if (req.files && req.files.file) {
    const url = removePrefix('/proxies/v8', req.originalUrl)
    const file: UploadedFile = req.files.file as UploadedFile
    const formData = new FormData()
    formData.append('file', Buffer.from(file.data), {
      contentType: file.mimetype,
      filename: file.name,
    })

    // Forward the metadata parameter
    if (req.body && req.body.metadata) {
      formData.append('metadata', req.body.metadata)
    }

    let rootOrgId = _.get(req, 'session.rootOrgId')
    if (!rootOrgId) {
      rootOrgId = ''
    }
    let channel = _.get(req, 'session.channel')
    if (!channel) {
      channel = ''
    }
    const uploadHeaders: { [key: string]: string } = {
      // tslint:disable-next-line:max-line-length
      Authorization: CONSTANTS.SB_API_KEY,
      // tslint:disable-next-line: all
      'x-authenticated-user-channel': encodeURIComponent(channel),
      'x-authenticated-user-orgid': rootOrgId,
      'x-authenticated-user-orgname': encodeURIComponent(channel),
      'x-authenticated-user-token': extractUserToken(req) || '',
      'x-authenticated-userid': extractUserIdFromRequest(req),
    }
    const targetOrgId = _.get(req, 'body.targetorgid') || _.get(req, 'headers.targetorgid')
    if (targetOrgId) {
      uploadHeaders.targetorgid = targetOrgId
    }
    formData.submit(
      {
        headers: uploadHeaders,
        host: 'kong',
        path: url,
        port: 8000,
      },
      // tslint:disable-next-line: all
      (err, response) => {
        // tslint:disable-next-line: all
        let chunks: Buffer[] = [];
        response.on('data', (chunk) => chunks.push(chunk))
        // tslint:disable-next-line: all
        response.on('end', () => {
          const fullData = Buffer.concat(chunks)
          if (!err && (response.statusCode === 200 || response.statusCode === 201 || response.statusCode === 406)) {
            if (response.headers['content-type'] === 'text/csv') {
              res.setHeader('Content-Type', 'text/csv')
              res.setHeader('Content-Disposition', 'attachment; filename="report.csv"')
              res.status(response.statusCode).send(fullData)
            } else {
              let parsed
              try {
                parsed = JSON.parse(fullData.toString('utf8'))
                res.status(response.statusCode).json(parsed)
              } catch (e) {
                logDebug('Invalid JSON received as per Json Parse')
                res.status(response.statusCode).type('application/json').send(fullData.toString('utf8'))
              }
            }
          } else {
            res.status(response.statusCode || 500).send(fullData.toString('utf8'))
          }
        })
        if (err) {
          res.status((response && response.statusCode) || 500).send(err)
        }
      }
    )
  } else {
    res.status(500).send(FILE_NOT_FOUND_ERR)
  }
})

proxiesV8.use('/user/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/otp/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/event/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/searchBy/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/staff/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/budget/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/orghistory/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/storage/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/forms/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/masterData/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

// proxiesV8.use('/api/framework/*',
//   // tslint:disable-next-line: max-line-length
//   proxyCreatorQML(express.Router(), `${CONSTANTS.KONG_API_BASE}`, '/api/')
// )

proxiesV8.use('/api/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/dashboard/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/wat/dashboard/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.DASHBOARD_API_BASE}`)
)

proxiesV8.get('/data/v1/system/settings/get/orgTypeList', async (req, res) => {
  try {
    const roleData = lodash.get(req, 'session.userRoles')
    logDebug('orgTypeList API call : Users Roles are...')
    logDebug(roleData)
    const response = await axios({
      ...axiosRequestConfig,
      headers: {
        Authorization: CONSTANTS.SB_API_KEY,
        // tslint:disable-next-line: all
        'x-authenticated-user-token': extractUserToken(req),
      },
      method: 'GET',
      url: API_END_POINTS.orgTypeListEndPoint,
    })
    if (roleData.includes('STATE_ADMIN')) {
      const hiddenList = ['CBC', 'CBP', 'STATE']
      const orgTypeListObj = JSON.parse(response.data.result.response.value)
      const orgTypeList = orgTypeListObj.orgTypeList
      // tslint:disable-next-line: no-any
      orgTypeList.forEach((element: any) => {
        if (hiddenList.includes(element.name)) {
          element.isHidden = true
        }
      })
      orgTypeListObj.orgTypeList = orgTypeList
      response.data.result.response.value = JSON.stringify(orgTypeListObj)
    }
    res.status(200).send(response.data)
  } catch (err) {
    logError('OrgTypeList settings API failed:', String(err))
    res.status(500).json({ error: 'Failed to fetch org type list' })
  }
})

proxiesV8.use('/data/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/assets/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

// proxiesV8.use('/discussion/user/v1/create',
//   // tslint:disable-next-line: max-line-length
//   proxyCreatorDiscussion(express.Router(), `${CONSTANTS.DISCUSSION_HUB_MIDDLEWARE}`)
// )
proxiesV8.use('/discussion/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/assessment/read/*',
  // tslint:disable-next-line: max-line-length
  proxyAssessmentRead(express.Router(), `${CONSTANTS.KONG_API_BASE}` + '/player/questionset/v4/hierarchy')
)

proxiesV8.use('/question/read',
  // tslint:disable-next-line: max-line-length
  proxyQuestionRead(express.Router(), `${CONSTANTS.KONG_API_BASE}` + '/player/question/v4/list')
)

proxiesV8.use('/cbp/question/list',
  // tslint:disable-next-line: max-line-length
  proxyQuestionRead(express.Router(), `${CONSTANTS.KONG_API_BASE}` + '/question/v1/list')
)

proxiesV8.use('/questionset/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/volunteer/ratings/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/ratings/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/moderatoradmin/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/workflow/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/blendedprogram/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/batchsesion/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/faq/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/curatedprogram/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/openprogram/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.post('/program/v1/batch/getParticipants', async (req, res) => {
  try {
    const { batchId, deptName, limit, currentOffSet } = req.body.request.filters
    const reqBody = {
      request: {
        batch: {
          batchId,
          currentOffSet,
          limit,

        },
      },
    }
    const userlist: ICohortsUserBP[] = []
    const response = await axios.post(API_END_POINTS.programBatchParticipantsApi, reqBody, {
      ...axiosRequestConfig,
      headers: {
        Authorization: CONSTANTS.SB_API_KEY,
        /* tslint:disable-next-line */
        'x-authenticated-user-token': extractUserToken(req),
      },
    })
    const totalCount = response.data.result.batch.totalCount != null ? response.data.result.batch.totalCount : 0
    const activeTrueCount = response.data.result.batch.activeCount != null ? response.data.result.batch.activeCount : 0
    const activeFalseCount = response.data.result.batch.inactiveCount != null ? response.data.result.batch.inactiveCount : 0

    const participants = response.data?.result?.batch?.participants ?? []
    if (participants && participants.length > 0) {
      const activeStatusMap: { [key: string]: boolean } = {}
      const userIds: string[] = []
      for (const participant of participants) {
        if (typeof participant === 'string') {
          userIds.push(participant)
        } else if (participant && typeof participant === 'object') {
          const userId = participant.userId || participant.userid
          if (userId) {
            userIds.push(userId)
            if (typeof participant.active !== 'undefined') {
              activeStatusMap[userId] = participant.active
            }
          }
        }
      }

      if (userIds.length > 0) {
        const searchresponse = await axios({
          ...axiosRequestConfig,
          data: { request: { filters: { userId: userIds } } },
          headers: {
            Authorization: CONSTANTS.SB_API_KEY,
            // tslint:disable-next-line: all
            'x-authenticated-user-token': extractUserToken(req),
          },
          method: 'POST',
          // tslint:disable-next-line: all
          url: API_END_POINTS.kongSearchUser,
        })
        if (searchresponse.data.result.response.count > 0) {
          for (const profileObj of searchresponse.data.result.response.content) {
            const existingUser = getUsers(profileObj)
            if (!deptName || (profileObj.channel && profileObj.channel === deptName)) {

              const user: ICohortsUserBP = {
                ...existingUser,
                department: profileObj.rootOrgName,
                active: profileObj.userId
                  ? activeStatusMap[profileObj.userId]
                  : undefined,
              }

              userlist.push(user)
            }
          }
        }
      }
    }

    res.status(response.status).send({ userlist, totalCount, activeCount: activeTrueCount, inactiveCount: activeFalseCount })
  } catch (err) {
    logError(err)

    res.status((err && err.response && err.response.status) || 500).send(
      (err && err.response && err.response.data) || {
        error: unknownError,
      }
    )
  }
})

proxiesV8.use('/program/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/competency/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/cbplan/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/ehrms/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('/wheebox/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/operationalreports/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/surveys/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/surveySubmissions/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('/cloud-services/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/observations/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/observationSubmissions/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/demand/content/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/playList/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/question/v5/read',
  // tslint:disable-next-line: max-line-length
  proxyQuestionRead(express.Router(), `${CONSTANTS.KONG_API_BASE}` + '/player/question/v5/list')
)

proxiesV8.use('/assessment/v5/read/*',
  // tslint:disable-next-line: max-line-length
  proxyAssessmentReadV2(express.Router(), `${CONSTANTS.KONG_API_BASE}` + '/player/questionset/v5/hierarchy')
)

proxiesV8.use('/interest/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/assessment/save/',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/assessment/savepoint/',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/announcements/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/cqfquestionset/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/assessment/v7/read/*',
  // tslint:disable-next-line: max-line-length
  proxyAssessmentReadV7(express.Router(), `${CONSTANTS.KONG_API_BASE}` + '/player/questionset/v7/hierarchy')
)
proxiesV8.use('/question/v7/read',
  // tslint:disable-next-line: max-line-length
  proxyQuestionRead(express.Router(), `${CONSTANTS.KONG_API_BASE}` + '/player/question/v7/list')
)

function removePrefix(prefix: string, s: string) {
  return s.substr(prefix.length)
}

proxiesV8.post('/notifyContentState', async (req, res) => {
  const contentStateError = 'It should be one of [sendForReview, reviewCompleted, reviewFailed,' +
    ' sendForPublish, publishCompleted, publishFailed]'
  if (!req.body || !req.body.contentState) {
    res.status(400).send('ContentState is missing in request body. ' + contentStateError)
  }
  logDebug('Received req url is -> ' + req.protocol + '://' + req.get('host') + req.originalUrl)
  let contentBody = ''
  let emailSubject = ''
  switch (req.body.contentState) {
    case 'sendForReview':
      contentBody = `${CONSTANTS.NOTIFY_SEND_FOR_REVIEW_BODY}`
      emailSubject = 'Request to Review Content'
      break
    case 'reviewCompleted':
      contentBody = `${CONSTANTS.NOTIFY_REVIEW_COMPLETED_BODY}`
      emailSubject = 'Content Review Completed'
      break
    case 'reviewFailed':
      contentBody = `${CONSTANTS.NOTIFY_REVIEW_FAILED}`
      emailSubject = 'Content Review Failed'
      break
    case 'sendForPublish':
      contentBody = `${CONSTANTS.NOTIFY_SEND_FOR_PUBLISH_BODY}`
      emailSubject = 'Request to Publish Content'
      break
    case 'publishCompleted':
      contentBody = `${CONSTANTS.NOTIFY_PUBLISH_COMPLETED_BODY}`
      emailSubject = 'Content Publish Completed'
      break
    case 'publishFailed':
      contentBody = `${CONSTANTS.NOTIFY_PUBLIST_FAILED}`
      emailSubject = 'Content Publish Failed'
      break
    default:
      res.status(400).send('Invalid ContentState. ' + contentStateError)
      break
  }

  if (contentBody.includes('#contentLink') && req.body.contentLink && req.body.contentName) {
    contentBody = contentBody.replace('#contentLink', req.body.contentLink)
  }
  logDebug('Composed contentBody -> ' + contentBody)
  const notifyMailRequest = {
    config: {
      sender: req.body.sender,
      subject: emailSubject,
    },
    deliveryType: 'message',
    ids: req.body.recipientEmails,
    mode: 'email',
    template: {
      id: `${CONSTANTS.NOTIFY_EMAIL_TEMPLATE_ID}`,
      params: {
        body: contentBody,
        orgImageUrl: `${CONSTANTS.FRAC_API_BASE}` + '/img/logos/iGOT_logo.png',
        orgName: 'iGOT Support Team',
      },
    },
  }

  const stateEmailResponse = await axios({
    ...axiosRequestConfig,
    data: {
      request:
      {
        notifications: [notifyMailRequest],
      },
    },
    method: 'POST',
    url: API_END_POINTS.contentNotificationEmail,
  })
  logDebug('Response -> ' + JSON.stringify(stateEmailResponse.data))
  if (!stateEmailResponse.data.result.response) {
    res.status(400).send(stateEmailResponse.data)
  } else {
    res.status(200).send(stateEmailResponse.data)
  }
})

proxiesV8.use('/portal/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
// tslint:disable-next-line: all
function getUsers(userprofile: IUserProfile): ICohortsUser {
  let designationValue = ''
  let primaryEmail = ''
  let mobileNumber = 0
  const profileDetails = userprofile.hasOwnProperty('profileDetails') ? userprofile.profileDetails : null
  if (profileDetails != null) {
    const professionalDetails = profileDetails.hasOwnProperty('professionalDetails') ? profileDetails.professionalDetails : null
    if (professionalDetails != null) {
      if (userprofile.profileDetails.professionalDetails[0].designation !== undefined) {
        designationValue = userprofile.profileDetails.professionalDetails[0].designation
      } else {
        designationValue = userprofile.profileDetails.professionalDetails[0].designationOther === undefined ? '' :
          userprofile.profileDetails.professionalDetails[0].designationOther
      }
    }
    if (userprofile.profileDetails.personalDetails !== undefined) {
      primaryEmail = userprofile.profileDetails.personalDetails.primaryEmail
      mobileNumber = userprofile.profileDetails.personalDetails.mobile
    }
  }

  return {
    city: '',
    // department: userprofile.channel === undefined ? '' : userprofile.channel,
    department: userprofile.rootOrgName === undefined ? '' : userprofile.rootOrgName,
    desc: '',
    designation: designationValue,
    email: primaryEmail,
    first_name: userprofile.firstName,
    last_name: userprofile.lastName,
    phone_No: mobileNumber,
    userLocation: '',
    user_id: userprofile.id,
  }
}

proxiesV8.post(['/course/v1/batch/getParticipants', '/course/v1/batch/admin/getParticipants'], async (req, res) => {
  try {
    const { batchId, deptName, limit, currentOffSet } = req.body.request.filters
    const reqBody = {
      request: {
        batch: {
          active: true,
          batchId,
          currentOffSet,
          limit,

        },
      },
    }
    const userlist: ICohortsUser[] = []
    const response = await axios.post(API_END_POINTS.batchParticipantsApi, reqBody, {
      ...axiosRequestConfig,
      headers: {
        Authorization: CONSTANTS.SB_API_KEY,
        /* tslint:disable-next-line */
        'x-authenticated-user-token': extractUserToken(req),
      },
    })
    const totalCount = response.data.result.batch.count != null ? response.data.result.batch.count : 0
    if ((typeof response.data.result.batch.participants !== 'undefined' && response.data.result.batch.participants.length > 0)) {
      const searchresponse = await axios({
        ...axiosRequestConfig,
        data: { request: { filters: { userId: response.data.result.batch.participants } } },
        headers: {
          Authorization: CONSTANTS.SB_API_KEY,
          // tslint:disable-next-line: all
          'x-authenticated-user-token': extractUserToken(req),
        },
        method: 'POST',
        // tslint:disable-next-line: all
        url: API_END_POINTS.kongSearchUser,
      })
      if (searchresponse.data.result.response.count > 0) {
        for (const profileObj of searchresponse.data.result.response.content) {
          const user: ICohortsUser = getUsers(profileObj)
          if (!deptName || (profileObj.channel && profileObj.channel === deptName)) {
            user.department = profileObj.rootOrgName
            userlist.push(user)
          }
        }
      }
    }
    res.status(response.status).send({ userlist, totalCount })
  } catch (err) {
    logError(err)

    res.status((err && err.response && err.response.status) || 500).send(
      (err && err.response && err.response.data) || {
        error: unknownError,
      }
    )
  }
})

proxiesV8.use('/course/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/catalog/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/calendar/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/careers/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/orgBookmark/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/cios/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.get('/cios/v1/content/read/:contentId', async (req, res) => {
  const contentId = req.params.contentId
  const userId = extractUserIdFromRequest(req)
  const token = extractUserToken(req) || ''
  try {
    const response = await allocationService.readByUserIdCourseId(userId, contentId, token)
    if (response) {
      // Assuming the response itself is valid for redirection or contains a redirectUrl
      // If the API returns a redirectUrl, we use it.
      // Example: response.result.redirectUrl or just response if it's the url string.
      // Since I don't have the API contract, I will log and check if response has a redirect url property.
      // If not, I'll comment on what to do.
      // For now, let's assume if we get a successful response, we might redirect to a player or similar.
      // But the user said "read this api for redirecting", maybe the API response IS the redirect.
      // I'll try to redirect to the original content URL if no specific redirect is given, OR
      // if the response contains a location.

      // Let's assume the response is the enrollment details.
      // And we want to redirect to the actual content player if enrolled.
      // But usually "read for redirecting" implies the API gives us the destination.

      // I will trust the API to return the redirect URL or data needed.
      // If response.redirectUrl exists, use it.
      if (response.redirectUrl) {
        res.redirect(response.redirectUrl)
        return
      }
      // If response is just success data, maybe we proceed to some default?
      // I'll send the response back for now if no redirectUrl is obvious, ensuring the client can handle it.
      res.status(200).send(response)
    } else {
      res.status(403).send('Not authorized or enrollment not found.')
    }
  } catch (err) {
    logError('Error in cios enrollment check:', err)
    res.status(500).send('Internal Server Error')
  }
})

proxiesV8.use('/ciosIntegration/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('/tenders/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/framework/*', frameworksApi)

proxiesV8.use('/v1/search/competenciesByOrg',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/mentoring/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/designation/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/competencyArea/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/competencyTheme/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/competencySubTheme/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/halloffame/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/walloffame/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

export interface IUserProfile {
  channel: string
  firstName: string
  id: string
  lastName: string
  profileDetails: IUserProfileDetails
  rootOrgName: string
}

export interface IUserProfileDetails {
  personalDetails: IPersonalDetails
  professionalDetails: IProfessionalDetailsEntity[]
  employmentDetails: IEmploymentDetails
}

export interface IPersonalDetails {
  firstname: string
  middlename: string
  surname: string
  dob: string
  nationality: string
  domicileMedium: string
  gender: string
  maritalStatus: string
  category: string
  countryCode: string
  mobile: number
  telephone: string
  primaryEmail: string
  officialEmail: string
  personalEmail: string
}

export interface IEmploymentDetails {
  departmentName: string
}

export interface IProfessionalDetailsEntity {
  description: string
  industry: string
  designationOther: string
  nameOther: string
  organisationType: string
  responsibilities: string
  name: string
  location: string
  designation: string
  industryOther: string
  completePostalAddress: string
  doj: string
}

export interface ICohortsUser {
  first_name: string
  last_name: string
  email: string
  desc: string
  user_id: string
  department: string
  phone_No: number
  designation: string
  userLocation: string
  city: string
}

export interface ICohortsUserBP {
  first_name: string
  last_name: string
  email: string
  desc: string
  user_id: string
  department: string
  phone_No: number
  designation: string
  userLocation: string
  city: string,
  active: boolean
}


proxiesV8.use('/ext-forms/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorForms(express.Router())
)

proxiesV8.use('/cios-enroll/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/contentpartner/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/serviceregistry/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/comment/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/private/mlsurvey/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/private/mlcore/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/template/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/organisation/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/national/learning/week/insights',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/national/learning/week/insights`)
)

proxiesV8.use('/state/learning/week/insights',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/state/learning/week/insights`)
)

proxiesV8.use('/eventprogress/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/bp/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/customselfregistration',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/feedDiscussion/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/customselfregistration/listallqrs',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/customselfregistration/isregistrationqractive',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/community/v1/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/looker/dashboard', lookerDashboard)

proxiesV8.use('/courseRecommend/v1/courses',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/courseRecommend/v1/courses`)
)

proxiesV8.use('/interface/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/courseRecommendation/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/chatbot/v3/global', chatBotGenericAPIIntegration)

proxiesV8.use('/chatbot/v3', chatBotIntegrationAPI)

proxiesV8.use('/chatbot/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/nlp/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/thumbnail/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/fetchUserToken', jwtUserTokenHelper)

proxiesV8.use('/certificate/dynamic/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/commentTree/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/search/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.get('/youtube/duration/:videoid', async (req, res) => {
  const { videoid } = req.params  // Get videoid from URL path instead of query params
  const apiKey = `${CONSTANTS.YOUTUBE_PLAYLIST_API_KEY}`  // Use your actual API key here

  try {
    const response = await axios.get(
      `${CONSTANTS.YOUTUBE_VIDEOS}?id=${videoid}&part=contentDetails&key=${apiKey}`
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch video data' })
  }
})

proxiesV8.use('/extendedprofile/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/masterdata/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/v1/notifications/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/notificationSetting/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/accessSettings*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/customFields/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/connections/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/support/ai/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/collection/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/moderation/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/pipeline/content/transcode/*', contentTranscodeAPIIntegration)

proxiesV8.use('/assignment/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('/consent/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/v1/notifyAssignment/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/promotionalcontent/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/sso/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/learningpathway/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/extended/content/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/achievement/dynamic/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/knowledge/centre/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/peersurvey/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/batch/v1/enrollment/qrcode/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.post('/externaltraining/v1/batch/getParticipants', async (req, res) => {
  try {
    const { batchId, deptName, limit, currentOffSet } = req.body.request.filters
    const reqBody = {
      request: {
        batch: {
          active: true,
          batchId,
          currentOffSet,
          limit,

        },
      },
    }
    const userlist: ICohortsUser[] = []
    const response = await axios.post(API_END_POINTS.externalContentbatchParticipantsApi, reqBody, {
      ...axiosRequestConfig,
      headers: {
        Authorization: CONSTANTS.SB_API_KEY,
        /* tslint:disable-next-line */
        'x-authenticated-user-token': extractUserToken(req),
      },
    })
    const totalCount = response.data.result.batch.count != null ? response.data.result.batch.count : 0
    if ((typeof response.data.result.batch.participants !== 'undefined' && response.data.result.batch.participants.length > 0)) {
      const searchresponse = await axios({
        ...axiosRequestConfig,
        data: { request: { filters: { userId: response.data.result.batch.participants } } },
        headers: {
          Authorization: CONSTANTS.SB_API_KEY,
          // tslint:disable-next-line: all
          'x-authenticated-user-token': extractUserToken(req),
        },
        method: 'POST',
        // tslint:disable-next-line: all
        url: API_END_POINTS.kongSearchUser,
      })
      if (searchresponse.data.result.response.count > 0) {
        for (const profileObj of searchresponse.data.result.response.content) {
          const user: ICohortsUser = getUsers(profileObj)
          if (!deptName || (profileObj.channel && profileObj.channel === deptName)) {
            user.department = profileObj.rootOrgName
            userlist.push(user)
          }
        }
      }
    }
    res.status(response.status).send({ userlist, totalCount })
  } catch (err) {
    logError(err)

    res.status((err && err.response && err.response.status) || 500).send(
      (err && err.response && err.response.data) || {
        error: unknownError,
      }
    )
  }
})

proxiesV8.use('/externaltraining/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/peervalidation/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)
proxiesV8.use('/badge/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/contenthealth/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/volunteer/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/ai/chatbot/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/formsConfig/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/composite/v5/search',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/composite/v5/search`)
)

proxiesV8.use('/composite/v4/bp/search',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbirdSearch(express.Router(), `${CONSTANTS.KONG_API_BASE}/composite/v4/bp/search`)
)

proxiesV8.use('/scorm/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/karmawallet/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/usergroup/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/ca/*',
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/ca/questionset/*',
  // tslint:disable-next-line: max-line-length
  proxyCreatorSunbird(express.Router(), `${CONSTANTS.KONG_API_BASE}`)
)

proxiesV8.use('/v1/content/ca/retire',
  proxyCreatorKnowledge(express.Router(), `${CONSTANTS.KNOWLEDGE_MW_API_BASE}`)
)
