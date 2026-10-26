jest.mock('keycloak-connect', () => {
  return jest.fn().mockImplementation(() => ({
    config: { clientId: 'portal', realmUrl: 'https://mock-kc.example.com/realms/mock-realm' },
    middleware: jest.fn(() => (_req: never, _res: never, next: () => void) => next()),
    protect: jest.fn(() => (_req: never, _res: never, next: () => void) => next()),
  }))
})

jest.mock('../../../src/utils/permissionHelper', () => ({
  PERMISSION_HELPER: { getCurrentUserRoles: jest.fn() },
}))

jest.mock('../../../src/utils/request-adapter', () => ({
  request: { get: jest.fn(), post: jest.fn() },
}))

import { CustomKeycloak, deauthenticateKeycloakSession, resolvePostLogoutRedirect } from '../../../src/utils/custom-keycloak'
import { CONSTANTS } from '../../../src/utils/env'
import { PERMISSION_HELPER } from '../../../src/utils/permissionHelper'
import { request } from '../../../src/utils/request-adapter'

const mockedGetCurrentUserRoles = PERMISSION_HELPER.getCurrentUserRoles as jest.Mock
const mockedRequestPost = request.post as jest.Mock
const mockedRequestGet = request.get as jest.Mock

function buildKeycloak() {
  return new CustomKeycloak({ resave: false, saveUninitialized: false, secret: 'test' })
}

// tslint:disable-next-line: no-any
function buildSession(overrides: any = {}): any {
  return {
    destroy: jest.fn((cb?: (err: unknown) => void) => cb && cb(null)),
    ...overrides,
  }
}

// tslint:disable-next-line: no-any
function buildReq(overrides: any = {}): any {
  return {
    cookies: {},
    get: jest.fn().mockReturnValue('host.example.com'),
    header: () => undefined,
    headers: {},
    hostname: 'localhost',
    protocol: 'https',
    query: {},
    session: buildSession(),
    url: '/',
    ...overrides,
  }
}

describe('resolvePostLogoutRedirect', () => {
  const keys = [
    'IIM_PORTAL_HOST', 'IIIDEM_PORTAL_HOST', 'ADI_PORTAL_HOST', 'ADIKARMAYOGI_PORTAL_HOST',
    'MNRE_PORTAL_HOST', 'MNRE_DESTINATION_PORTAL_HOST', 'LOGOUT_PUBLIC_HOME_HOSTS',
  ]
  // tslint:disable-next-line: no-any
  const constants = CONSTANTS as any
  // tslint:disable-next-line: no-any
  const saved: any = {}

  beforeEach(() => {
    keys.forEach((k) => { saved[k] = constants[k]; constants[k] = '' })
  })

  afterEach(() => {
    keys.forEach((k) => { constants[k] = saved[k] })
  })

  it('maps a dedicated portal host to its destination host', () => {
    constants.MNRE_PORTAL_HOST = 'https://mnre-portal.uat.example.net'
    constants.MNRE_DESTINATION_PORTAL_HOST = 'mnre.example.gov.in'
    expect(resolvePostLogoutRedirect('MNRE-Portal.uat.example.net')).toBe('https://mnre.example.gov.in/')
  })

  it('strips the leading portal subdomain', () => {
    expect(resolvePostLogoutRedirect('portal.uat.example.net')).toBe('https://uat.example.net/')
  })

  it('appends /public/home for hosts in LOGOUT_PUBLIC_HOME_HOSTS', () => {
    constants.LOGOUT_PUBLIC_HOME_HOSTS = 'spv.uat.example.net, Other.example.net'
    expect(resolvePostLogoutRedirect('spv.uat.example.net')).toBe('https://spv.uat.example.net/public/home')
  })

  it('falls back to the host root when no rule matches', () => {
    expect(resolvePostLogoutRedirect('other.example.net')).toBe('https://other.example.net/')
  })
})

describe('getKeyCloakObject', () => {
  it('falls back to the "common" keycloak instance when there is no matching tenant', () => {
    const keycloak = buildKeycloak()
    const req = buildReq({ hostname: 'unrelated-host.example.com' })
    const instance = keycloak.getKeyCloakObject(req)
    expect(instance).toBeDefined()
    expect(keycloak.getKeyCloakObject(req)).toBe(instance)
  })

  it('resolves a tenant by rootOrg header when it matches a configured multi-tenant domain', () => {
    const keycloak = buildKeycloak()
    const req = buildReq({ header: (name: string) => (name === 'rootOrg' ? 'igot' : undefined) })
    const tenantInstance = keycloak.getKeyCloakObject(req)
    const commonInstance = keycloak.getKeyCloakObject(buildReq({ hostname: 'no-match.example.com' }))
    expect(tenantInstance).not.toBe(commonInstance)
  })

  it('resolves a tenant directly when req.hostname matches a configured domain key', () => {
    const keycloak = buildKeycloak()
    const byHostname = keycloak.getKeyCloakObject(buildReq({ hostname: 'igot' }))
    const byHeader = keycloak.getKeyCloakObject(
      buildReq({ header: (name: string) => (name === 'rootOrg' ? 'igot' : undefined) })
    )
    expect(byHostname).toBe(byHeader)
  })

  it('reads rootOrg from the cookie when no header is present', () => {
    const keycloak = buildKeycloak()
    const req = buildReq({ cookies: { rootorg: 'igot' } })
    const commonInstance = keycloak.getKeyCloakObject(buildReq({ hostname: 'no-match.example.com' }))
    expect(keycloak.getKeyCloakObject(req)).not.toBe(commonInstance)
  })
})

describe('authenticated', () => {
  beforeEach(() => {
    mockedGetCurrentUserRoles.mockImplementation((_reqObj, cb) => cb(null))
  })

  it('extracts the userId from the KC24 content.sub format', () => {
    const keycloak = buildKeycloak()
    const req = buildReq({ content: { sub: 'f:org:user-24' } })
    const next = jest.fn()
    keycloak.authenticated(req, next)
    expect(req.session.userId).toBe('user-24')
    expect(next).toHaveBeenCalledWith(null, 'loggedin')
  })

  it('extracts the userId from the KC7 kauth format when content is absent', () => {
    const keycloak = buildKeycloak()
    const req = buildReq({ kauth: { grant: { access_token: { content: { sub: 'f:org:user-7' } } } } })
    const next = jest.fn()
    keycloak.authenticated(req, next)
    expect(req.session.userId).toBe('user-7')
    expect(next).toHaveBeenCalledWith(null, 'loggedin')
  })

  it('persists the id_token from kauth when present', () => {
    const keycloak = buildKeycloak()
    const req = buildReq({
      kauth: { grant: { access_token: { content: { sub: 'f:org:user-7' } }, id_token: { token: 'id-token-1' } } },
    })
    keycloak.authenticated(req, jest.fn())
    expect(req.session.idToken).toBe('id-token-1')
  })

  it('does not throw and still logs in when neither token format is present', () => {
    const keycloak = buildKeycloak()
    const req = buildReq()
    const next = jest.fn()
    expect(() => keycloak.authenticated(req, next)).not.toThrow()
    expect(req.session.userId).toBeUndefined()
    expect(next).toHaveBeenCalledWith(null, 'loggedin')
  })

  it('propagates an error from the roles lookup to next', () => {
    mockedGetCurrentUserRoles.mockImplementation((_reqObj, cb) => cb('roles lookup failed'))
    const keycloak = buildKeycloak()
    const req = buildReq({ content: { sub: 'f:org:user-1' } })
    const next = jest.fn()
    keycloak.authenticated(req, next)
    expect(next).toHaveBeenCalledWith('roles lookup failed', null)
  })
})

describe('deauthenticatedNew', () => {
  it('clears session role/id fields and destroys the session', () => {
    const keycloak = buildKeycloak()
    const req = buildReq({
      session: buildSession({ keycloakClientId: 'x', keycloakClientSecret: 'y', userId: 'user-1', userRoles: ['PUBLIC'] }),
    })
    keycloak.deauthenticatedNew(req)
    expect(req.session.userRoles).toBeUndefined()
    expect(req.session.userId).toBeUndefined()
    expect(req.session.destroy).toHaveBeenCalledTimes(1)
  })

  it('is a no-op when there is no session', () => {
    const keycloak = buildKeycloak()
    expect(() => keycloak.deauthenticatedNew({ session: undefined })).not.toThrow()
  })
})

describe('protect', () => {
  it('delegates to the resolved keycloak instance protect() middleware', () => {
    const keycloak = buildKeycloak()
    const next = jest.fn()
    keycloak.protect(buildReq(), {} as never, next)
    expect(next).toHaveBeenCalledTimes(1)
  })
})

describe('middleware', () => {
  it('delegates non-/logout requests to the keycloak middleware chain', () => {
    const keycloak = buildKeycloak()
    const next = jest.fn()
    keycloak.middleware(buildReq({ path: '/callback' }), {} as never, next)
    expect(next).toHaveBeenCalledTimes(1)
  })

  describe('/logout', () => {
    // tslint:disable-next-line: no-any
    function buildLogoutRes(): any {
      return { clearCookie: jest.fn(), redirect: jest.fn() }
    }

    it('skips the Keycloak round-trip and redirects locally when there is no authenticated session', () => {
      const keycloak = buildKeycloak()
      const req = buildReq({ hostname: 'spv.dev.karmayogibharat.net', path: '/logout' })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.clearCookie).toHaveBeenCalled()
      expect(res.redirect).toHaveBeenCalledWith('https://spv.dev.karmayogibharat.net/public/home')
      expect(mockedRequestPost).not.toHaveBeenCalled()
    })

    it('redirects the MNRE portal host to the MNRE destination host on logout', () => {
      const originalHost = CONSTANTS.MNRE_PORTAL_HOST
      const originalDestination = CONSTANTS.MNRE_DESTINATION_PORTAL_HOST
      CONSTANTS.MNRE_PORTAL_HOST = 'https://mnre-portal.example.gov.in'
      CONSTANTS.MNRE_DESTINATION_PORTAL_HOST = 'mnre.example.gov.in'
      try {
        const keycloak = buildKeycloak()
        const req = buildReq({ hostname: 'mnre-portal.example.gov.in', path: '/logout' })
        const res = buildLogoutRes()

        keycloak.middleware(req, res, jest.fn())

        expect(res.redirect).toHaveBeenCalledWith('https://mnre.example.gov.in/')
      } finally {
        CONSTANTS.MNRE_PORTAL_HOST = originalHost
        CONSTANTS.MNRE_DESTINATION_PORTAL_HOST = originalDestination
      }
    })

    it('strips the leading "portal" subdomain for the default post-logout redirect', () => {
      const keycloak = buildKeycloak()
      const req = buildReq({ hostname: 'portal.dev.example.net', path: '/logout' })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.redirect).toHaveBeenCalledWith('https://dev.example.net/')
    })

    it('performs backchannel deauthentication and redirects to the KC logout URL when the session is authenticated', async () => {
      mockedRequestPost.mockImplementation((_opts, cb) => cb(null, { statusCode: 200 }, '{}'))
      const keycloak = buildKeycloak()
      const req = buildReq({
        hostname: 'unrelated-host.example.com',
        path: '/logout',
        session: buildSession({ 'keycloak-token': JSON.stringify({ refresh_token: 'refresh-1' }) }),
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())
      await new Promise((resolve) => setImmediate(resolve))
      await new Promise((resolve) => setImmediate(resolve))

      expect(mockedRequestPost).toHaveBeenCalledWith(
        expect.objectContaining({ form: expect.objectContaining({ refresh_token: 'refresh-1' }) }),
        expect.any(Function)
      )
      expect(res.redirect).toHaveBeenCalled()
      const redirectedTo = res.redirect.mock.calls[0][0]
      expect(redirectedTo).toContain('/protocol/openid-connect/logout')
      expect(redirectedTo).toContain('client_id=')
    })

    it('still redirects to the KC logout URL when backchannel deauthentication fails', async () => {
      mockedRequestPost.mockImplementation((_opts, cb) => cb(new Error('kc unreachable'), null, null))
      const keycloak = buildKeycloak()
      const req = buildReq({
        hostname: 'unrelated-host.example.com',
        path: '/logout',
        session: buildSession({ 'keycloak-token': JSON.stringify({ refresh_token: 'refresh-1' }) }),
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())
      await new Promise((resolve) => setImmediate(resolve))
      await new Promise((resolve) => setImmediate(resolve))

      expect(res.redirect).toHaveBeenCalled()
    })

    it('appends id_token_hint to the KC front-channel logout url when present on the session', async () => {
      mockedRequestPost.mockImplementation((_opts, cb) => cb(null, { statusCode: 200 }, '{}'))
      const keycloak = buildKeycloak()
      const req = buildReq({
        hostname: 'unrelated-host.example.com',
        path: '/logout',
        session: buildSession({
          idToken: 'id-token-1',
          'keycloak-token': JSON.stringify({ refresh_token: 'refresh-1' }),
        }),
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())
      await new Promise((resolve) => setImmediate(resolve))
      await new Promise((resolve) => setImmediate(resolve))

      const redirectedTo = res.redirect.mock.calls[0][0]
      expect(redirectedTo).toContain('id_token_hint=id-token-1')
    })

    it('accepts a same-domain redirect_uri query param as the post-logout destination', () => {
      const keycloak = buildKeycloak()
      const req = buildReq({
        hostname: 'app.example.com',
        path: '/logout',
        query: { redirect_uri: 'https://sub.example.com/landing' },
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.redirect).toHaveBeenCalledWith('https://sub.example.com/landing')
    })

    it('rejects a cross-domain redirect_uri query param', () => {
      const keycloak = buildKeycloak()
      const req = buildReq({
        hostname: 'app.example.com',
        path: '/logout',
        query: { redirect_uri: 'https://evil.attacker.com/phish' },
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.redirect).toHaveBeenCalledWith('https://app.example.com/')
    })

    it('ignores a redirect_uri query param that is not a valid URL', () => {
      const keycloak = buildKeycloak()
      const req = buildReq({
        hostname: 'app.example.com',
        path: '/logout',
        query: { redirect_uri: 'not a url' },
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.redirect).toHaveBeenCalledWith('https://app.example.com/')
    })

    it('ignores a non-string redirect_uri query param', () => {
      const keycloak = buildKeycloak()
      const req = buildReq({
        hostname: 'app.example.com',
        path: '/logout',
        query: { redirect_uri: ['https://a.example.com', 'https://b.example.com'] },
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.redirect).toHaveBeenCalledWith('https://app.example.com/')
    })

    it('uses a single-label host as its own base domain for redirect_uri validation', () => {
      const keycloak = buildKeycloak()
      const req = buildReq({
        hostname: 'intranet',
        path: '/logout',
        query: { redirect_uri: 'https://intranet/landing' },
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.redirect).toHaveBeenCalledWith('https://intranet/landing')
    })

    it.each([
      ['localhost', 'localhost'],
      ['portal.dev.example.net', '.dev.example.net'],
      ['example', 'example'],
    ])('clears the session cookie for the right domain when host is %s', (host, expectedDomain) => {
      const keycloak = buildKeycloak()
      const req = buildReq({ get: jest.fn().mockReturnValue(host), hostname: 'app.example.com', path: '/logout' })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.clearCookie).toHaveBeenCalledWith(
        'connect.sid',
        expect.objectContaining({ domain: expectedDomain })
      )
    })

    it('clears the session cookie with an empty domain when the host header is missing', () => {
      const keycloak = buildKeycloak()
      const req = buildReq({ get: jest.fn().mockReturnValue(undefined), hostname: 'app.example.com', path: '/logout' })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())

      expect(res.clearCookie).toHaveBeenCalledWith('connect.sid', expect.objectContaining({ domain: '' }))
    })

    it('redirects to the post-logout destination when the keycloak object has no logoutUrl helper', async () => {
      const keycloak = buildKeycloak()
      const kc = keycloak.getKeyCloakObject(buildReq()) as any
      const original = kc.logoutUrl
      kc.logoutUrl = undefined
      jest.spyOn(keycloak, 'deauthenticated').mockResolvedValue(undefined as never)
      const req = buildReq({
        hostname: 'app.example.com',
        path: '/logout',
        session: buildSession({ idToken: 'id-token-1' }),
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())
      await new Promise((resolve) => setImmediate(resolve))

      expect(res.redirect).toHaveBeenCalledWith('https://app.example.com/')
      kc.logoutUrl = original
    })

    it('still redirects via the KC logout URL when deauthenticated rejects', async () => {
      const keycloak = buildKeycloak()
      jest.spyOn(keycloak, 'deauthenticated').mockRejectedValue(new Error('boom') as never)
      const req = buildReq({
        hostname: 'app.example.com',
        path: '/logout',
        session: buildSession({ idToken: 'id-token-1' }),
      })
      const res = buildLogoutRes()

      keycloak.middleware(req, res, jest.fn())
      await new Promise((resolve) => setImmediate(resolve))

      expect(res.clearCookie).toHaveBeenCalled()
      expect(res.redirect).toHaveBeenCalledTimes(1)
    })
  })
})

describe('deauthenticateKeycloakSession', () => {
  it('returns early and logs when there is no session', async () => {
    await expect(deauthenticateKeycloakSession({ session: undefined })).resolves.toBeUndefined()
    expect(mockedRequestPost).not.toHaveBeenCalled()
  })

  it('cleans up the session even when there is no keycloak-token property', async () => {
    const session = buildSession()
    await deauthenticateKeycloakSession({ session })
    expect(session.destroy).toHaveBeenCalled()
    expect(mockedRequestPost).not.toHaveBeenCalled()
  })

  it('cleans up without calling keycloak logout when the token has no refresh_token', async () => {
    const session = buildSession({ 'keycloak-token': JSON.stringify({ access_token: 'abc' }) })
    await deauthenticateKeycloakSession({ session })
    expect(mockedRequestPost).not.toHaveBeenCalled()
    expect(session.destroy).toHaveBeenCalled()
  })

  it('calls the keycloak logout endpoint with the refresh token', async () => {
    mockedRequestPost.mockImplementation((_opts, cb) => cb(null, { statusCode: 200 }, '{}'))
    const session = buildSession({ 'keycloak-token': JSON.stringify({ refresh_token: 'refresh-1' }) })
    await deauthenticateKeycloakSession({ session })
    expect(mockedRequestPost).toHaveBeenCalledWith(
      expect.objectContaining({
        form: expect.objectContaining({ client_id: 'portal', refresh_token: 'refresh-1' }),
        url: expect.stringContaining(`/realms/${CONSTANTS.KEYCLOAK_REALM}/protocol/openid-connect/logout`),
      }),
      expect.any(Function)
    )
    expect(session.destroy).toHaveBeenCalled()
  })

  it('continues cleanup when the keycloak logout request errors', async () => {
    mockedRequestPost.mockImplementation((_opts, cb) => cb(new Error('down'), null, null))
    const session = buildSession({ 'keycloak-token': JSON.stringify({ refresh_token: 'refresh-1' }) })
    await expect(deauthenticateKeycloakSession({ session })).resolves.toBeUndefined()
    expect(session.destroy).toHaveBeenCalled()
  })

  it('also revokes a Parichay session when one is present', async () => {
    mockedRequestPost.mockImplementation((_opts, cb) => cb(null, { statusCode: 200 }, '{}'))
    mockedRequestGet.mockImplementation((_opts, cb) => cb(null, { statusCode: 200 }, 'ok'))
    const session = buildSession({
      'keycloak-token': JSON.stringify({ refresh_token: 'refresh-1' }),
      parichayToken: { access_token: 'parichay-token' },
    })
    await deauthenticateKeycloakSession({ session })
    expect(mockedRequestGet).toHaveBeenCalledWith(
      expect.objectContaining({ headers: { Authorization: 'parichay-token' }, url: CONSTANTS.PARICHAY_REVOKE_URL }),
      expect.any(Function)
    )
  })

  it('does not attempt session.destroy when the session has no destroy function', async () => {
    const session = { hasOwnProperty: Object.prototype.hasOwnProperty }
    await expect(deauthenticateKeycloakSession({ session })).resolves.toBeUndefined()
  })
})
