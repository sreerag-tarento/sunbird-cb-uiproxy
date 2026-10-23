const ENV_KEYS = [
  'HTTPS_HOST',
  'KEYCLOAK_SESSION_TTL',
  'PORTAL_PORT',
  'NODE_ENV',
  'CASSANDRA_AUTH_ENABLED',
  'UPSTREAM_MAX_CONNECTIONS',
  'RESTRICTED_CHARACTERS',
  'KONG_API_BASE',
  'MNRE_PORTAL_HOST',
  'MNRE_REDIRECT_PATH',
  'MNRE_DESTINATION_PORTAL_HOST',
]

const originalEnv: Record<string, string | undefined> = {}

beforeEach(() => {
  ENV_KEYS.forEach((key) => {
    originalEnv[key] = process.env[key]
  })
})

afterEach(() => {
  ENV_KEYS.forEach((key) => {
    if (originalEnv[key] === undefined) {
      delete process.env[key]
    } else {
      process.env[key] = originalEnv[key]
    }
  })
})

// tslint:disable-next-line: no-any
function loadEnvModule(): any {
  let mod: unknown
  jest.isolateModules(() => {
    // tslint:disable-next-line: no-var-requires
    mod = require('../../../src/utils/env')
  })
  return mod
}

describe('CONSTANTS defaults', () => {
  it('falls back to documented defaults when no env vars are set', () => {
    ENV_KEYS.forEach((key) => delete process.env[key])
    const { CONSTANTS } = loadEnvModule()
    expect(CONSTANTS.HTTPS_HOST).toBe('https://igot-dev.in')
    expect(CONSTANTS.KEYCLOAK_SESSION_TTL).toBe(24 * 60 * 60 * 1000)
    expect(CONSTANTS.PORTAL_PORT).toBe(3003)
    expect(CONSTANTS.IS_DEVELOPMENT).toBe(false)
    expect(CONSTANTS.IS_CASSANDRA_AUTH_ENABLED).toBe(false)
    expect(CONSTANTS.UPSTREAM_MAX_CONNECTIONS).toBe(Infinity)
    expect(CONSTANTS.KONG_API_BASE).toBe('https://portal.karmayogi.nic.in/api')
  })

  it('defines MNRE portal defaults mirroring the ADI portal settings', () => {
    ENV_KEYS.forEach((key) => delete process.env[key])
    const { CONSTANTS } = loadEnvModule()
    expect(CONSTANTS.MNRE_PORTAL_HOST).toBe('https://mnre-portal.igotkarmayogi.gov.in')
    expect(CONSTANTS.MNRE_REDIRECT_PATH).toBe('/page/home')
    expect(CONSTANTS.MNRE_DESTINATION_PORTAL_HOST).toBe('mnre.igotkarmayogi.gov.in')
  })

  it('derives USER_ANALYTICS from HTTPS_HOST', () => {
    process.env.HTTPS_HOST = 'https://custom.example.com'
    const { CONSTANTS } = loadEnvModule()
    expect(CONSTANTS.USER_ANALYTICS).toBe('https://custom.example.com/LA1')
  })
})

describe('CONSTANTS env overrides', () => {
  it('respects an explicit KONG_API_BASE', () => {
    process.env.KONG_API_BASE = 'https://kong.internal'
    const { CONSTANTS } = loadEnvModule()
    expect(CONSTANTS.KONG_API_BASE).toBe('https://kong.internal')
  })

  it('respects explicit MNRE env overrides', () => {
    process.env.MNRE_PORTAL_HOST = 'https://mnre-portal.example.com'
    process.env.MNRE_REDIRECT_PATH = '/custom'
    process.env.MNRE_DESTINATION_PORTAL_HOST = 'mnre.example.com'
    const { CONSTANTS } = loadEnvModule()
    expect(CONSTANTS.MNRE_PORTAL_HOST).toBe('https://mnre-portal.example.com')
    expect(CONSTANTS.MNRE_REDIRECT_PATH).toBe('/custom')
    expect(CONSTANTS.MNRE_DESTINATION_PORTAL_HOST).toBe('mnre.example.com')
  })

  it('parses KEYCLOAK_SESSION_TTL as an integer, falling back on 0/invalid', () => {
    process.env.KEYCLOAK_SESSION_TTL = '5000'
    expect(loadEnvModule().CONSTANTS.KEYCLOAK_SESSION_TTL).toBe(5000)

    process.env.KEYCLOAK_SESSION_TTL = '0'
    expect(loadEnvModule().CONSTANTS.KEYCLOAK_SESSION_TTL).toBe(24 * 60 * 60 * 1000)
  })

  it('parses PORTAL_PORT as an integer, falling back to 3003 when invalid', () => {
    process.env.PORTAL_PORT = '8080'
    expect(loadEnvModule().CONSTANTS.PORTAL_PORT).toBe(8080)

    process.env.PORTAL_PORT = 'not-a-number'
    expect(loadEnvModule().CONSTANTS.PORTAL_PORT).toBe(3003)
  })

  it('flags development mode only when NODE_ENV is exactly "development"', () => {
    process.env.NODE_ENV = 'development'
    expect(loadEnvModule().CONSTANTS.IS_DEVELOPMENT).toBe(true)

    process.env.NODE_ENV = 'production'
    expect(loadEnvModule().CONSTANTS.IS_DEVELOPMENT).toBe(false)
  })

  it('enables cassandra auth only when CASSANDRA_AUTH_ENABLED is set to a truthy string', () => {
    process.env.CASSANDRA_AUTH_ENABLED = 'true'
    expect(loadEnvModule().CONSTANTS.IS_CASSANDRA_AUTH_ENABLED).toBe(true)

    delete process.env.CASSANDRA_AUTH_ENABLED
    expect(loadEnvModule().CONSTANTS.IS_CASSANDRA_AUTH_ENABLED).toBe(false)
  })

  it('uses a finite UPSTREAM_MAX_CONNECTIONS when configured', () => {
    process.env.UPSTREAM_MAX_CONNECTIONS = '128'
    expect(loadEnvModule().CONSTANTS.UPSTREAM_MAX_CONNECTIONS).toBe(128)
  })
})

describe('RESTRICTED_PYTHON_STMT', () => {
  it('is empty when RESTRICTED_CHARACTERS is not set', () => {
    delete process.env.RESTRICTED_CHARACTERS
    expect(loadEnvModule().RESTRICTED_PYTHON_STMT).toEqual([])
  })

  it('splits RESTRICTED_CHARACTERS on the ### delimiter', () => {
    process.env.RESTRICTED_CHARACTERS = 'import###exec###eval'
    expect(loadEnvModule().RESTRICTED_PYTHON_STMT).toEqual(['import', 'exec', 'eval'])
  })
})
