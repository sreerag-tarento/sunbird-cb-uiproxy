import * as express from 'express'
import expressSession from 'express-session'
import keycloakConnect from 'keycloak-connect'
import { URL } from 'url'
import { getKeycloakConfig } from '../configs/keycloak.config'
import { CONSTANTS } from './env'
import { logDebug, logError, logInfo } from './logger'
import { PERMISSION_HELPER } from './permissionHelper'
import { request } from './request-adapter'
const async = require('async')

const composable = require('composable-middleware')

const stripProtocol = (host: string | undefined): string =>
  (host || '').replace(/^https?:\/\//, '').toLowerCase()

// Maps the host a user logs out from to the host they should land on, for the
// portals that are served from their own dedicated destination host.
const dedicatedPortalLogoutTargets = (): Array<{ portalHost: string, destinationHost: string }> => [
  { portalHost: stripProtocol(CONSTANTS.IIM_PORTAL_HOST), destinationHost: CONSTANTS.IIIDEM_PORTAL_HOST },
  { portalHost: stripProtocol(CONSTANTS.ADI_PORTAL_HOST), destinationHost: CONSTANTS.ADIKARMAYOGI_PORTAL_HOST },
  { portalHost: stripProtocol(CONSTANTS.MNRE_PORTAL_HOST), destinationHost: CONSTANTS.MNRE_DESTINATION_PORTAL_HOST },
]

// Derive the final destination the browser lands on after KC clears its SSO session.
// Always use https:// — req.protocol is 'http' inside K8s pods (TLS terminated at ingress).
// Keycloak rejects http:// post_logout_redirect_uri values that only have https:// registered.
// IIM / ADI / MNRE portal hosts   -> their dedicated destination host  e.g. https://iiidem.x.net/
// portal.*                        -> strip first subdomain  e.g. portal.dev.x.net -> https://dev.x.net/
// LOGOUT_PUBLIC_HOME_HOSTS list   -> append /public/home  e.g. spv.dev.x.net -> https://spv.dev.x.net/public/home
// all other                       -> root '/'  e.g. https://host/
export function resolvePostLogoutRedirect(logoutHost: string): string {
  const lowerHost = logoutHost.toLowerCase()
  const dedicated = dedicatedPortalLogoutTargets().find((t) => t.portalHost && t.portalHost === lowerHost)
  if (dedicated) {
    return 'https://' + dedicated.destinationHost + '/'
  }
  const hostParts = logoutHost.split('.')
  if (hostParts.length > 2 && hostParts[0].toLowerCase() === 'portal') {
    return 'https://' + hostParts.slice(1).join('.') + '/'
  }
  const publicHomeHosts = (CONSTANTS.LOGOUT_PUBLIC_HOME_HOSTS || '')
    .split(',')
    .map((h: string) => h.trim().toLowerCase())
    .filter(Boolean)
  if (publicHomeHosts.includes(lowerHost)) {
    return 'https://' + logoutHost + '/public/home'
  }
  return 'https://' + logoutHost + '/'
}

// Honour a redirect_uri query param (KC7 clients pass this) when safe (same base domain).
function pickPostLogoutRedirect(rawRedirectUri: unknown, logoutHost: string, defaultRedirect: string): string {
  logInfo('[logout] redirect_uri query param=' + (typeof rawRedirectUri === 'string' && rawRedirectUri ? rawRedirectUri : '(none)'))
  if (!rawRedirectUri || typeof rawRedirectUri !== 'string') {
    return defaultRedirect
  }
  try {
    const redirectParsed = new URL(rawRedirectUri)
    const hostParts = logoutHost.split('.')
    const baseDomain = hostParts.length > 1 ? hostParts.slice(-2).join('.') : logoutHost
    const isSameHost = redirectParsed.hostname === logoutHost
    const isSameDomain = redirectParsed.hostname.endsWith('.' + baseDomain)
    logInfo(
      '[logout] redirect_uri validation' +
      ' parsed.hostname=' + redirectParsed.hostname +
      ' baseDomain=' + baseDomain +
      ' isSameHost=' + isSameHost +
      ' isSameDomain=' + isSameDomain
    )
    if (isSameHost || isSameDomain) {
      logInfo('[logout] redirect_uri accepted -> postLogoutRedirect=' + rawRedirectUri)
      return rawRedirectUri
    }
    logInfo('[logout] redirect_uri rejected (cross-domain), keeping default')
  } catch (err) {
    logInfo('[logout] redirect_uri invalid URL, ignoring: ' + rawRedirectUri + ' (' + err + ')')
  }
  return defaultRedirect
}

// Cookie domain used for clearing connect.sid: '.parent.domain' for hosts with more than two labels.
function resolveCookieDomain(host: string | undefined): string {
  if (host === undefined) {
    return ''
  }
  if (host.includes('localhost')) {
    return 'localhost'
  }
  const hostParts = host.split('.')
  return hostParts.length > 2 ? '.' + hostParts.slice(1).join('.') : host
}

function clearLogoutCookies(req: express.Request, res: express.Response): void {
  const domainUrl = resolveCookieDomain(req.get('host'))
  logInfo('[logout] clearing cookies for domain=' + domainUrl)
  res.clearCookie('connect.sid', { httpOnly: true, secure: true })
  res.clearCookie('connect.sid', { domain: domainUrl, httpOnly: false, path: '/', secure: true })
}

// Build the KC front-channel logout URL. Redirecting the browser through this
// clears the KC SSO browser cookie — backchannel revocation alone does not do this.
function buildKcLogoutUrl(
  keycloak: InstanceType<typeof keycloakConnect>,
  req: express.Request,
  postLogoutRedirect: string
): string {
  if (typeof (keycloak as any).logoutUrl !== 'function') {
    logInfo('[logout] logoutUrl not a function, falling back to postLogoutRedirect')
    return postLogoutRedirect
  }
  let url: string = (keycloak as any).logoutUrl(postLogoutRedirect)
  // Without id_token_hint, KC18+ shows the "Do you want to log out?"
  // confirmation page instead of silently redirecting.
  const idTokenHint = req.session ? (req.session as any).idToken : undefined
  if (idTokenHint) {
    url += '&id_token_hint=' + encodeURIComponent(idTokenHint)
    logInfo('[logout] appended id_token_hint to KC front-channel logout URL')
  } else {
    logInfo('[logout] no id_token in session; KC will show the logout confirmation page')
  }
  logInfo('[logout] KC front-channel logout URL=' + url)
  return url
}

// tslint:disable-next-line: no-any
export async function deauthenticateKeycloakSession(reqObj: any): Promise<void> {
  const keyCloakPropertyName = 'keycloak-token'

  logInfo(`custom-keycloak deauthenticated: Method started for PID ${process.pid}`)

  // Check if session exists before attempting to access its properties
  if (!reqObj.session) {
    logError(`${process.pid}: User Deauthenticated - No session found`)
    return
  }

  if (reqObj.session.hasOwnProperty(keyCloakPropertyName)) {
    const keycloakToken = reqObj.session[keyCloakPropertyName]
    if (keycloakToken) {
      let tokenObject: any
      try {
        tokenObject = JSON.parse(keycloakToken)
      } catch (parseErr) {
        logError('custom-keycloak deauthenticated: Failed to parse keycloak-token: ' + parseErr)
      }

      const refreshToken = tokenObject ? tokenObject.refresh_token : null
      if (refreshToken) {

        const urlValue = `${CONSTANTS.PORTAL_AUTH_SERVER_URL}/realms/${CONSTANTS.KEYCLOAK_REALM}/protocol/openid-connect/logout`
        const formData: Record<string, string> = {
          client_id: 'portal',
          refresh_token: refreshToken,
        }

        if (reqObj.session.hasOwnProperty('keycloakClientId') && reqObj.session.keycloakClientId !== '') {
          formData.client_id = reqObj.session.keycloakClientId
          formData.client_secret = reqObj.session.keycloakClientSecret
        }

        logInfo(
          `custom-keycloak deauthenticated: Calling Keycloak backchannel logout URL: ${urlValue} ` +
          `with client_id: ${formData.client_id}`
        )
        logDebug('formData used in logout: ' + JSON.stringify(formData))

        try {
          await new Promise<void>((resolve, reject) => {
            request.post({
              form: formData,
              url: urlValue,
            }, (err: any, res: any, body: any) => {
              if (err) {
                logError(
                  'custom-keycloak deauthenticated: Keycloak backchannel logout request failed with error: ' +
                  JSON.stringify(err)
                )
                reject(err)
              } else {
                const statusCode = res ? res.statusCode : 'unknown'
                logInfo(`custom-keycloak deauthenticated: Keycloak backchannel logout responded with status code: ${statusCode}`)
                logDebug('Keycloak backchannel logout body: ' + JSON.stringify(body))
                resolve()
              }
            })
          })
        } catch (err) {
          logError('custom-keycloak deauthenticated: Caught exception during Keycloak logout request: ' + err)
        }

        if (reqObj.session.parichayToken) {
          logInfo('custom-keycloak deauthenticated: Parichay login found... trying to logout from Parichay...')
          try {
            await new Promise<void>((resolve) => {
              request.get({
                headers: {
                  Authorization: reqObj.session.parichayToken.access_token,
                },
                url: CONSTANTS.PARICHAY_REVOKE_URL,
              }, (err: any, res: any, body: any) => {
                if (err) {
                  logError('custom-keycloak deauthenticated: Received error when calling Parichay logout: ' + JSON.stringify(err))
                } else {
                  const statusCode = res ? res.statusCode : 'unknown'
                  logInfo(`custom-keycloak deauthenticated: Parichay logout completed with status code: ${statusCode}`)
                  logDebug('Parichay logout body: ' + JSON.stringify(body))
                }
                resolve()
              })
            })
          } catch (err) {
            logError('custom-keycloak deauthenticated: Failed to call parichay revoke API: ' + err)
          }
        }
      } else {
        logError('custom-keycloak deauthenticated: Not able to retrieve refresh_token value from Session. Logout process failed.')
      }
    } else {
      logError('custom-keycloak deauthenticated: Not able to retrieve keycloak-token value from Session. Logout process failed.')
    }
  } else {
    logError('custom-keycloak deauthenticated: Session does not have property with name: ' + keyCloakPropertyName)
  }

  // Clean up session properties if session exists
  if (reqObj.session) {
    logInfo('custom-keycloak deauthenticated: Cleaning session and starting destroy')
    delete reqObj.session.userRoles
    delete reqObj.session.userId
    delete reqObj.session.keycloakClientId
    delete reqObj.session.keycloakClientSecret
    if (typeof reqObj.session.destroy === 'function') {
      try {
        await new Promise<void>((resolve) => {
          reqObj.session.destroy((err: any) => {
            if (err) {
              logError('custom-keycloak deauthenticated: Error destroying session: ' + err)
            } else {
              logInfo('custom-keycloak deauthenticated: Express session successfully destroyed in store')
            }
            resolve()
          })
        })
      } catch (err) {
        logError('custom-keycloak deauthenticated: Exception during session destroy: ' + err)
      }
    }
  }

  logInfo(`custom-keycloak deauthenticated: Method completed for PID ${process.pid}`)
}

export class CustomKeycloak {
  private multiTenantKeycloak = new Map<string, InstanceType<typeof keycloakConnect>>()

  constructor(sessionConfig: expressSession.SessionOptions) {
    if (CONSTANTS.MULTI_TENANT_KEYCLOAK) {
      CONSTANTS.MULTI_TENANT_KEYCLOAK.split(';').forEach((v: string) => {
        const domainUrlMap = v.split(',')
        this.multiTenantKeycloak.set(
          domainUrlMap[0],
          this.generateKeyCloak(sessionConfig, domainUrlMap[1], domainUrlMap[2])
        )
      })
    }
    this.multiTenantKeycloak.set('common', this.generateKeyCloak(sessionConfig))
  }

  middleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const keycloak = this.getKeyCloakObject(req)

    // Intercept /logout before keycloak's middleware chain so we can read the
    // session and inject id_token_hint — required by KC18+ to auto-redirect
    // without showing the Keycloak logout confirmation page.
    if (req.path === '/logout') {
      this.handleLogout(req, res, keycloak)
      return
    }

    const middleware = composable(
      keycloak.middleware({
        admin: '/callback',
        logout: '/logout',
      })
    )
    middleware(req, res, next)
  }

  private handleLogout(
    req: express.Request,
    res: express.Response,
    keycloak: InstanceType<typeof keycloakConnect>
  ): void {
    const logoutHost = req.hostname
    logInfo(
      '[logout] request intercepted' +
      ' host=' + logoutHost +
      ' protocol=' + req.protocol +
      ' url=' + req.url
    )
    logDebug('[logout] headers=' + JSON.stringify(req.headers))
    logDebug('[logout] query=' + JSON.stringify(req.query))
    logDebug('[logout] cookies=' + JSON.stringify(req.cookies))
    logDebug('[logout] referer=' + req.headers.referer)

    const defaultRedirect = resolvePostLogoutRedirect(logoutHost)
    const postLogoutRedirect = pickPostLogoutRedirect(req.query.redirect_uri, logoutHost, defaultRedirect)
    logInfo('[logout] final postLogoutRedirect=' + postLogoutRedirect)

    // A visitor whose local session was never authenticated (no keycloak-token,
    // no idToken) has nothing to log out. Redirecting them through KC's real
    // /logout endpoint anyway would still show the confirmation page (no
    // id_token_hint to silently prove which session to end) and could even
    // tear down an unrelated app's live SSO session on the same KC realm.
    const hasAuthenticatedSession = !!(
      req.session &&
      (req.session.hasOwnProperty('keycloak-token') || (req.session as any).idToken)
    )
    if (!hasAuthenticatedSession) {
      logInfo('[logout] no authenticated keycloak session locally; skipping KC round-trip')
      clearLogoutCookies(req, res)
      res.redirect(postLogoutRedirect)
      return
    }

    // Terminate the Keycloak SSO session server-side via backchannel revocation
    // (POST to KC logout endpoint with refresh_token). This avoids the browser
    // confirmation page entirely and does not require id_token_hint.
    // Whether it succeeds or fails, the browser is then sent through the KC
    // front-channel logout URL so the KC SSO browser cookie is cleared too.
    const finish = (logSuffix: string) => {
      clearLogoutCookies(req, res)
      const kcLogoutUrl = buildKcLogoutUrl(keycloak, req, postLogoutRedirect)
      logInfo('[logout] 302' + logSuffix + ' -> ' + kcLogoutUrl)
      res.redirect(kcLogoutUrl)
    }

    logInfo('[logout] starting backchannel deauthentication')
    this.deauthenticated(req)
      .then(() => {
        logInfo('[logout] backchannel deauthentication succeeded')
        finish('')
      })
      .catch((err) => {
        logError('[logout] backchannel deauthentication failed: ' + err)
        finish(' (after error)')
      })
  }

  getKeyCloakObject(req: express.Request): InstanceType<typeof keycloakConnect> {
    const rootOrg =
      (req.headers ? req.header('rootOrg') : '') || (req.cookies ? req.cookies.rootorg : '')
    let domain = ''
    if (rootOrg) {
      this.multiTenantKeycloak.forEach((_value, key) => {
        if (key.toLowerCase().includes(rootOrg.toLowerCase())) {
          domain = key
        }
      })
    }

    return (this.multiTenantKeycloak.get(req.hostname) ||
      this.multiTenantKeycloak.get(domain) ||
      this.multiTenantKeycloak.get('common'))
  }

  // tslint:disable-next-line: no-any
  authenticated = (reqObj: any, next: any) => {
    logDebug('Step 3: authenticated function', '------', new Date().toString())
    reqObj.session.authenticated = true

    // Persist id_token at login so it remains available at logout time.
    // Keycloak 24+ no longer returns id_token in token-refresh responses,
    // so we cannot rely on session['keycloak-token'] containing it later.
    try {
      // tslint:disable-next-line: whitespace
      const idTokenRaw: string = reqObj.kauth?.grant?.id_token?.token || ''
      if (idTokenRaw) {
        reqObj.session.idToken = idTokenRaw
      }
    } catch (_e) { /* ignore */ }

    try {
      // Log token information safely without circular references
      // tslint:disable: whitespace
      const tokenInfo = {
        contentSub: reqObj.content?.sub,
        hasContent: !!reqObj.content,
        hasKauth: !!reqObj.kauth,
        kauthSub: reqObj.kauth?.grant?.access_token?.content?.sub,
      }

      // tslint:enable: whitespace
      logDebug('KC24 test ::', '------', JSON.stringify(tokenInfo))

      let userId: string

      // Handle Keycloak 24 format (direct token structure)
      if (reqObj.content && reqObj.content.sub) {
        const userIdParts = reqObj.content.sub.split(':')
        userId = userIdParts[userIdParts.length - 1]
        reqObj.session.userId = userId
        logDebug(
          'KC24 format - userId extracted from reqObj.content.sub:',
          userId,
          '------',
          new Date().toString()
        )
      } else if (
        reqObj.kauth &&
        reqObj.kauth.grant &&
        reqObj.kauth.grant.access_token &&
        reqObj.kauth.grant.access_token.content &&
        reqObj.kauth.grant.access_token.content.sub
      ) {
        const userIdParts = reqObj.kauth.grant.access_token.content.sub.split(':')
        userId = userIdParts[userIdParts.length - 1]
        reqObj.session.userId = userId
        logDebug(
          'KC7 format - userId extracted from reqObj.kauth.grant.access_token.content.sub:',
          userId,
          '------',
          new Date().toString()
        )
      } else {
        throw new Error('Unable to extract user ID from token - unsupported token format')
      }

      logDebug('userId ::', userId, '------', new Date().toString())
    } catch (err: any) {
      // tslint:disable: whitespace
      const errorMsg = reqObj.content?.sub ||
        reqObj.kauth?.grant?.access_token?.content?.sub ||
        'unknown token format'
      // tslint:enable: whitespace
      logError(
        'userId conversation error: ' + errorMsg + ' - ' + (err.message || err),
        '------',
        new Date().toString()
      )
      // Set a fallback userId to prevent undefined issues
      // tslint:disable-next-line: whitespace
      if (reqObj.content?.sub) {
        try {
          const userIdParts = reqObj.content.sub.split(':')
          reqObj.session.userId = userIdParts[userIdParts.length - 1]
          logDebug('Fallback userId set from content.sub:', reqObj.session.userId, '------', new Date().toString())
        } catch (fallbackErr) {
          logError('Failed to set fallback userId', '------', new Date().toString())
        }
      }
    }
    const postLoginRequest = []
    // tslint:disable-next-line: no-any
    postLoginRequest.push((callback: any) => {
      PERMISSION_HELPER.getCurrentUserRoles(reqObj, callback)
    })

    // tslint:disable-next-line: no-any
    async.series(postLoginRequest, (err: any) => {
      if (err) {
        logError('error loggin in user', '------', new Date().toString())
        next(err, null)
      } else {
        logDebug(`${process.pid}: User authenticated`, '------', new Date().toString())
        next(null, 'loggedin')
      }
    })
  }

  // tslint:disable-next-line: no-any
  deauthenticatedNew = (reqObj: any) => {
    if (reqObj.session) {
      delete reqObj.session.userRoles
      delete reqObj.session.userId
      delete reqObj.session.keycloakClientId
      delete reqObj.session.keycloakClientSecret
      reqObj.session.destroy()
    }
    logDebug(`${process.pid}: User Deauthenticated New`)
  }

  // tslint:disable-next-line: no-any
  deauthenticated = deauthenticateKeycloakSession

  protect = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const keycloak = this.getKeyCloakObject(req)
    return keycloak.protect()(req, res, next)
  }

  private generateKeyCloak(
    sessionConfig: expressSession.SessionOptions,
    url?: string,
    realm?: string
  ): InstanceType<typeof keycloakConnect> {
    const keycloak = new keycloakConnect(
      { store: sessionConfig.store },
      getKeycloakConfig(url, realm)
    )
      // Override logoutUrl to use OIDC RP-Initiated Logout spec (Keycloak 18+).
      // Keycloak 18+ requires post_logout_redirect_uri + client_id instead of redirect_uri.
      // tslint:disable-next-line: no-any align
      ; (keycloak as any).logoutUrl = (redirectUrl: string): string => {
        // tslint:disable-next-line: no-any
        const cfg = (keycloak as any).config
        logInfo('[logoutUrl] input redirectUrl=' + redirectUrl)
        // portal.* -> strip first subdomain  e.g. portal.dev.x.net -> https://dev.x.net/
        // all other (e.g. spv.*) -> keep original redirectUrl
        let postLogoutRedirect = redirectUrl
        try {
          const parsed = new URL(redirectUrl)
          const hostParts = parsed.hostname.split('.')
          if (hostParts.length > 2 && hostParts[0].toLowerCase() === 'portal') {
            postLogoutRedirect = parsed.protocol + '//' + hostParts.slice(1).join('.') + '/'
            logInfo('[logoutUrl] portal host, stripped subdomain -> ' + postLogoutRedirect)
          } else {
            logInfo('[logoutUrl] non-portal host, keeping redirectUrl -> ' + postLogoutRedirect)
          }
        } catch (_e) {
          logInfo('[logoutUrl] could not parse redirectUrl, keeping as-is -> ' + postLogoutRedirect)
        }
        const kcUrl = cfg.realmUrl +
          '/protocol/openid-connect/logout' +
          '?client_id=' + encodeURIComponent(cfg.clientId) +
          '&post_logout_redirect_uri=' + encodeURIComponent(postLogoutRedirect)
        logInfo('[logoutUrl] built KC logout URL=' + kcUrl)
        return kcUrl
      }
    // tslint:disable-next-line: no-any
    keycloak.authenticated = this.authenticated as any
    keycloak.deauthenticated = this.deauthenticatedNew
    return keycloak
  }
}
