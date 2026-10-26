jest.mock('axios', () => jest.fn())

import axios from 'axios'
import express, { NextFunction, Request, Response } from 'express'
import supertest from 'supertest'
import { profileDeatailsApi } from '../../../../src/protectedApi_v8/user/profile-details'

const mockedAxios = axios as unknown as jest.Mock

function buildApp() {
  const app = express()
  app.use(express.json())
  app.use((req: Request & { kauth?: object }, _res: Response, next: NextFunction) => {
    req.kauth = { grant: { access_token: { content: { sub: 'user-1' }, token: 'tok' } } }
    next()
  })
  app.use(profileDeatailsApi)
  return app
}

// tslint:disable-next-line: no-any
function mockCreateUserFlow(captured: { createUserBody?: any }) {
  // tslint:disable-next-line: no-any
  mockedAxios.mockImplementation((config: any) => {
    if (config.url.includes('/user/v5/create')) {
      captured.createUserBody = config.data.request
      return Promise.resolve({ data: { result: { userId: 'u1' } } })
    }
    if (config.url.includes('/user/v2/read/')) {
      return Promise.resolve({
        data: {
          params: { status: 'SUCCESS' },
          result: { response: { firstName: 'user test', identifier: 'u1', rootOrgId: 'org1', userName: 'u1' } },
        },
      })
    }
    if (config.url.includes('/password/reset')) {
      return Promise.resolve({ data: { params: { status: 'SUCCESS' }, result: { link: 'http://reset' } } })
    }
    if (config.url.includes('/notification/email')) {
      return Promise.resolve({ data: { params: { status: 'SUCCESS' } } })
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
    const captured: { createUserBody?: any } = {}
    mockCreateUserFlow(captured)

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
  })

  it('defaults isNgo and personalDetails.additionalProperties when neither source provides them', async () => {
    // tslint:disable-next-line: no-any
    const captured: { createUserBody?: any } = {}
    mockCreateUserFlow(captured)

    await supertest(buildApp())
      .post('/createUser')
      .send({ personalDetails: basePersonalDetails })

    expect(captured.createUserBody.profileDetails.personalDetails.isNgo).toBe(false)
    expect(captured.createUserBody.profileDetails.personalDetails.additionalProperties).toEqual({})
    expect(captured.createUserBody.profileDetails.profileStatus).toBe('NOT-VERIFIED')
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
})
