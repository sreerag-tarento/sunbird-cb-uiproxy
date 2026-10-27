jest.mock('axios', () => jest.fn())

import axios from 'axios'
import express, { NextFunction, Request, Response } from 'express'
import supertest from 'supertest'
import { profileDeatailsApi } from '../../../../src/protectedApi_v8/user/profile-details'

const mockedAxios = axios as unknown as jest.Mock

function buildApp(router: express.Router = profileDeatailsApi) {
  const app = express()
  app.use(express.json())
  app.use((req: Request & { kauth?: object }, _res: Response, next: NextFunction) => {
    req.kauth = { grant: { access_token: { content: { sub: 'user-1' }, token: 'tok' } } }
    next()
  })
  app.use(router)
  return app
}

const defaultReadResponse = {
  data: {
    params: { status: 'SUCCESS' },
    result: { response: { firstName: 'user test', identifier: 'u1', rootOrgId: 'org1', userName: 'u1' } },
  },
}

// tslint:disable-next-line: no-any
function setupAxiosMock(mock: jest.Mock, overrides: any = {}, captured: any = {}) {
  // tslint:disable-next-line: no-any
  mock.mockImplementation((config: any) => {
    if (config.url.includes('/user/v5/create')) {
      captured.createUserBody = config.data.request
      return overrides.create ? overrides.create(config) : Promise.resolve({ data: { result: { userId: 'u1' } } })
    }
    if (config.url.includes('/user/v2/read/')) {
      return overrides.read ? overrides.read(config) : Promise.resolve(defaultReadResponse)
    }
    if (config.url.includes('/password/reset')) {
      return overrides.passwordReset
        ? overrides.passwordReset(config)
        : Promise.resolve({ data: { params: { status: 'SUCCESS' }, result: { link: 'http://reset' } } })
    }
    if (config.url.includes('/notification/email')) {
      return overrides.welcomeEmail ? overrides.welcomeEmail(config) : Promise.resolve({ data: { params: { status: 'SUCCESS' } } })
    }
    if (config.url.includes('/user/v1/search')) {
      captured.searchCalled = true
      return overrides.search ? overrides.search(config) : Promise.resolve({ data: { result: { response: { count: 0 } } } })
    }
    if (config.url.includes('/discussion/user/v1/create')) {
      captured.nodebbCalled = true
      return overrides.nodebb ? overrides.nodebb(config) : Promise.resolve({ data: {} })
    }
    return Promise.resolve({ data: {} })
  })
}

const basePersonalDetails = {
  channel: 'Dept of Project management',
  email: 'usertest@yopmail.com',
  firstName: 'user test',
  phone: '6161616161',
  roles: ['PUBLIC'],
}

describe('POST /createUser', () => {
  beforeEach(() => {
    mockedAxios.mockReset()
  })

  it('returns 400 when channel is missing', async () => {
    const res = await supertest(buildApp()).post('/createUser').send({ personalDetails: {} })
    expect(res.status).toBe(400)
  })

  it('retains client-supplied profileDetails and merges in server-derived fields', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({
        personalDetails: basePersonalDetails,
        profileDetails: {
          additionalProperties: { tag: [] },
          employmentDetails: { pinCode: '600601' },
          personalDetails: {
            category: 'General',
            dob: '13-6-1998',
            domicileMedium: 'Malayalam',
            gender: 'Male',
          },
          professionalDetails: [{ designation: 'Scientist H', group: 'Group A' }],
        },
      })

    expect(res.status).toBe(200)
    const body = captured.createUserBody
    expect(body.profileDetails.personalDetails).toMatchObject({
      additionalProperties: {},
      category: 'General',
      dob: '13-6-1998',
      domicileMedium: 'Malayalam',
      firstname: basePersonalDetails.firstName,
      gender: 'Male',
      isNgo: false,
      mobile: 6161616161,
      phoneVerified: false,
      primaryEmail: basePersonalDetails.email,
    })
    expect(body.profileDetails.professionalDetails).toEqual([{ designation: 'Scientist H', group: 'Group A' }])
    expect(body.profileDetails.additionalProperties).toEqual({ tag: [] })
    expect(body.profileDetails.employmentDetails).toEqual({ pinCode: '600601' })
    expect(body.profileDetails.profileStatus).toBe('VERIFIED')
    expect(body.profileDetails.profileGroupStatus).toBe('VERIFIED')
    expect(body.profileDetails.profileDesignationStatus).toBe('VERIFIED')
    expect(res.body.userId).toBe('u1')
  })

  it('defaults isNgo and personalDetails.additionalProperties when neither source provides them', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    await supertest(buildApp())
      .post('/createUser')
      .send({ personalDetails: basePersonalDetails })

    expect(captured.createUserBody.profileDetails.personalDetails.isNgo).toBe(false)
    expect(captured.createUserBody.profileDetails.personalDetails.additionalProperties).toEqual({})
    expect(captured.createUserBody.profileDetails.profileStatus).toBe('NOT-VERIFIED')
  })

  it('omits phone and roles from the Kong payload when neither is supplied', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({ personalDetails: { channel: 'Dept of Project management', email: 'nophone@yopmail.com', firstName: 'No Phone' } })

    expect(res.status).toBe(200)
    expect(captured.createUserBody.phone).toBeUndefined()
    expect(captured.createUserBody.roles).toBeUndefined()
    expect(captured.searchCalled).toBeUndefined()
  })

  it('overrides dob/gender/category/domicileMedium/pincode/tags/bpCoTrainer when provided at the flat personalDetails level', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({
        personalDetails: {
          ...basePersonalDetails,
          bpCoTrainer: 'trainer-1',
          category: 'OBC',
          dob: '1-1-2000',
          domicileMedium: 'English',
          gender: 'Female',
          pincode: '560001',
          tags: ['tag1'],
        },
        profileDetails: {
          personalDetails: { category: 'General', dob: '13-6-1998' },
        },
      })

    expect(res.status).toBe(200)
    const personalDetails = captured.createUserBody.profileDetails.personalDetails
    expect(personalDetails.category).toBe('OBC')
    expect(personalDetails.dob).toBe('1-1-2000')
    expect(personalDetails.domicileMedium).toBe('English')
    expect(personalDetails.gender).toBe('Female')
    expect(personalDetails.pincode).toBe('560001')
    expect(personalDetails.tags).toEqual(['tag1'])
    expect(captured.createUserBody.profileDetails.additionalProperties).toEqual({ tag: ['tag1'] })
    expect(captured.createUserBody.profileDetails.bpCoTrainer).toBe('trainer-1')
  })

  it('merges a designation-only professionalDetails entry without a group', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({ personalDetails: { ...basePersonalDetails, designation: 'Scientist H' } })

    expect(res.status).toBe(200)
    expect(captured.createUserBody.profileDetails.professionalDetails).toEqual([{ designation: 'Scientist H' }])
    expect(captured.createUserBody.profileDetails.profileStatus).toBe('NOT-VERIFIED')
  })

  it('merges a group-only professionalDetails entry without a designation', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({ personalDetails: { ...basePersonalDetails, group: 'Group A' } })

    expect(res.status).toBe(200)
    expect(captured.createUserBody.profileDetails.professionalDetails).toEqual([{ group: 'Group A' }])
  })

  it('retains an incoming professionalDetails array as-is when no designation/group can be resolved', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({
        personalDetails: basePersonalDetails,
        profileDetails: { professionalDetails: [{ note: 'no designation or group here' }] },
      })

    expect(res.status).toBe(200)
    expect(captured.createUserBody.profileDetails.professionalDetails).toEqual([{ note: 'no designation or group here' }])
  })

  it('overrides isNgo and personalDetails.additionalProperties when explicitly provided at the flat level', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({
        personalDetails: { ...basePersonalDetails, additionalProperties: { note: 'flat' }, isNgo: true },
        profileDetails: { personalDetails: { additionalProperties: { note: 'incoming' }, isNgo: false } },
      })

    expect(res.status).toBe(200)
    expect(captured.createUserBody.profileDetails.personalDetails.isNgo).toBe(true)
    expect(captured.createUserBody.profileDetails.personalDetails.additionalProperties).toEqual({ note: 'flat' })
  })

  it('returns 500 for a malformed request body that has no personalDetails', async () => {
    const res = await supertest(buildApp()).post('/createUser').send({})
    expect(res.status).toBe(500)
  })

  it('returns 400 when designation conflicts between personalDetails and profileDetails.professionalDetails', async () => {
    const res = await supertest(buildApp())
      .post('/createUser')
      .send({
        personalDetails: { ...basePersonalDetails, designation: 'Scientist G' },
        profileDetails: {
          professionalDetails: [{ designation: 'Scientist H', group: 'Group A' }],
        },
      })

    expect(res.status).toBe(400)
    expect(res.body.params.errmsg).toMatch(/Conflicting designation/)
    expect(mockedAxios).not.toHaveBeenCalled()
  })

  it('returns 400 when group conflicts between personalDetails and profileDetails.professionalDetails', async () => {
    const res = await supertest(buildApp())
      .post('/createUser')
      .send({
        personalDetails: { ...basePersonalDetails, group: 'Group B' },
        profileDetails: {
          professionalDetails: [{ designation: 'Scientist H', group: 'Group A' }],
        },
      })

    expect(res.status).toBe(400)
    expect(res.body.params.errmsg).toMatch(/Conflicting group/)
    expect(mockedAxios).not.toHaveBeenCalled()
  })

  it('returns 400 when an MDO_LEADER already exists for the channel', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, { search: () => Promise.resolve({ data: { params: {}, result: { response: { count: 1 } } } }) }, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({ personalDetails: { ...basePersonalDetails, roles: ['PUBLIC', 'MDO_LEADER'] } })

    expect(res.status).toBe(400)
    expect(res.body.params.errmsg).toMatch(/MDO_LDEADER already exist/)
    expect(captured.searchCalled).toBe(true)
    expect(captured.createUserBody).toBeUndefined()
  })

  it('proceeds to create the user when no MDO_LEADER exists for the channel', async () => {
    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(mockedAxios, {}, captured)

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({ personalDetails: { ...basePersonalDetails, roles: ['PUBLIC', 'MDO_LEADER'] } })

    expect(res.status).toBe(200)
    expect(captured.searchCalled).toBe(true)
    expect(captured.createUserBody).toBeDefined()
  })

  it('passes through a CLIENT_ERROR from the MDO_LEADER search as a 400', async () => {
    setupAxiosMock(mockedAxios, {
      search: () => Promise.resolve({ data: { responseCode: 'CLIENT_ERROR', params: { errmsg: 'search failed' } } }),
    })

    const res = await supertest(buildApp())
      .post('/createUser')
      .send({ personalDetails: { ...basePersonalDetails, roles: ['PUBLIC', 'MDO_LEADER'] } })

    expect(res.status).toBe(400)
    expect(res.body.params.errmsg).toBe('search failed')
  })

  it('returns an error status when Kong rejects user creation', async () => {
    setupAxiosMock(mockedAxios, {
      create: () => Promise.reject({ response: { data: { params: { errmsg: 'boom' }, responseCode: 'SERVER_ERROR' } } }),
    })

    const res = await supertest(buildApp()).post('/createUser').send({ personalDetails: basePersonalDetails })

    expect(res.status).toBe(500)
    expect(res.body.params.errmsg).toBe('boom')
  })

  it('returns 400 when Kong responds with a CLIENT_ERROR on user creation', async () => {
    setupAxiosMock(mockedAxios, {
      create: () => Promise.resolve({ data: { responseCode: 'CLIENT_ERROR', params: { errmsg: 'invalid' } } }),
    })

    const res = await supertest(buildApp()).post('/createUser').send({ personalDetails: basePersonalDetails })

    expect(res.status).toBe(400)
    expect(res.body.params.errmsg).toBe('invalid')
  })

  it('returns 500 when reading the newly created user fails', async () => {
    setupAxiosMock(mockedAxios, {
      read: () => Promise.resolve({ data: { params: { status: 'FAILED' } } }),
    })

    const res = await supertest(buildApp()).post('/createUser').send({ personalDetails: basePersonalDetails })

    expect(res.status).toBe(500)
    expect(res.text).toMatch(/Failed to read newly created user details/)
  })

  it('returns 500 when the password reset fails', async () => {
    setupAxiosMock(mockedAxios, {
      passwordReset: () => Promise.resolve({ data: { params: { status: 'FAILED' } } }),
    })

    const res = await supertest(buildApp()).post('/createUser').send({ personalDetails: basePersonalDetails })

    expect(res.status).toBe(500)
    expect(res.text).toMatch(/Failed to reset the password for user/)
  })

  it('returns 500 when sending the welcome email fails', async () => {
    setupAxiosMock(mockedAxios, {
      welcomeEmail: () => Promise.resolve({ data: { params: { status: 'FAILED' } } }),
    })

    const res = await supertest(buildApp()).post('/createUser').send({ personalDetails: basePersonalDetails })

    expect(res.status).toBe(500)
    expect(res.text).toMatch(/Failed to send Welcome Email/)
  })

  it('creates a NodeBB account when PORTAL_CREATE_NODEBB_USER is enabled', async () => {
    process.env.PORTAL_CREATE_NODEBB_USER = 'true'
    // tslint:disable-next-line: no-any
    let isolatedAxios: any
    // tslint:disable-next-line: no-any
    let isolatedApi: any
    jest.isolateModules(() => {
      isolatedAxios = require('axios')
      // tslint:disable-next-line: no-var-requires
      isolatedApi = require('../../../../src/protectedApi_v8/user/profile-details').profileDeatailsApi
    })
    delete process.env.PORTAL_CREATE_NODEBB_USER

    // tslint:disable-next-line: no-any
    const captured: any = {}
    setupAxiosMock(isolatedAxios, {}, captured)

    const res = await supertest(buildApp(isolatedApi)).post('/createUser').send({ personalDetails: basePersonalDetails })

    expect(res.status).toBe(200)
    expect(captured.nodebbCalled).toBe(true)
  })

  it('still returns 200 when NodeBB account creation fails', async () => {
    process.env.PORTAL_CREATE_NODEBB_USER = 'true'
    // tslint:disable-next-line: no-any
    let isolatedAxios: any
    // tslint:disable-next-line: no-any
    let isolatedApi: any
    jest.isolateModules(() => {
      isolatedAxios = require('axios')
      // tslint:disable-next-line: no-var-requires
      isolatedApi = require('../../../../src/protectedApi_v8/user/profile-details').profileDeatailsApi
    })
    delete process.env.PORTAL_CREATE_NODEBB_USER

    setupAxiosMock(isolatedAxios, { nodebb: () => Promise.reject(new Error('nodebb down')) })

    const res = await supertest(buildApp(isolatedApi)).post('/createUser').send({ personalDetails: basePersonalDetails })

    expect(res.status).toBe(200)
  })
})
