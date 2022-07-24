import express from 'express'
import { CONSTANTS } from '../utils/env'
import { logError, logInfo } from '../utils/logger'
import { getGoogleProfile } from './googleOAuthHelper'
import { createUserWithMailId, fetchUserByEmailId, updateKeycloakSession } from './ssoUserHelper'

export const googleAuth = express.Router()

googleAuth.get('/auth', async (req, res) => {
    logInfo('Received host ? ' + req.hostname)
    const redirectUrlHost = 'https://' + req.hostname + CONSTANTS.GOOGLE_AUTH_CALLBACK_URL
    let oAuthParams = 'client_id=' + CONSTANTS.GOOGLE_CLIENT_ID
    oAuthParams = oAuthParams + '&redirect_uri=' + redirectUrlHost + '&prompt=consent'
    oAuthParams = oAuthParams + '&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email'
    oAuthParams = oAuthParams + '%20https://www.googleapis.com/auth/userinfo.profile'
    const googleUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + oAuthParams
    logInfo('google Url -> ' + googleUrl)
    res.redirect(googleUrl)
})

googleAuth.get('/testauth', async (req, res) => {
    logInfo('Received host ? ' + req.hostname)
    const redirectUrlHost = 'https://' + req.hostname + '/apis/public/v8/google/callback'
    let oAuthParams = 'client_id=' + CONSTANTS.GOOGLE_CLIENT_ID
    oAuthParams = oAuthParams + '&redirect_uri=' + redirectUrlHost + '&prompt=consent'
    oAuthParams = oAuthParams + '&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email'
    oAuthParams = oAuthParams + '%20https://www.googleapis.com/auth/userinfo.profile'
    const googleUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + oAuthParams
    logInfo('google Url -> ' + googleUrl)
    res.redirect(googleUrl)
})

googleAuth.get('/callback', async (req, res) => {
    const host = req.get('host')
    let resRedirectUrl = `https://${host}/page/home`
    try {
        logInfo('Successfully received callback from google. Received query params -> ' + JSON.stringify(req.query))
        const googleProfile = await getGoogleProfile(req)
        logInfo('Successfully got authenticated with google...')
        logInfo('Email: ' + googleProfile.emailId)
        let result: { errMessage: string, userExist: boolean,  }
        result = await fetchUserByEmailId(googleProfile.emailId)
        logInfo('isUserExist ? ' + result.userExist + ', errorMessage ? ' + result.errMessage)
        if (result.errMessage === '') {
            let createResult: { errMessage: string, userCreated: boolean, userId: string }
            if (!result.userExist) {
                createResult = await createUserWithMailId(googleProfile.emailId,
                    googleProfile.firstName, googleProfile.lastName)
                if (createResult.errMessage !== '') {
                    result.errMessage = createResult.errMessage
                }
            }

            if (result.errMessage === '') {
                let keycloakResult: {
                    access_token: string, errMessage: string, keycloakSessionCreated: boolean, refresh_token: string
                }
                keycloakResult = await updateKeycloakSession(googleProfile.emailId, req, res)
                logInfo('Keycloak Session Details:: ' + JSON.stringify(keycloakResult))
                if (keycloakResult.errMessage !== '') {
                    result.errMessage = keycloakResult.errMessage
                }
            }
        }
        if (result.errMessage !== '') {
            logInfo('Received error in processing... Error ' + result.errMessage)
            resRedirectUrl = `https://${host}/public/logout?error=` + encodeURIComponent(JSON.stringify(result.errMessage))
        }
    } catch (err) {
        logError('Failed to process callback event. Error: ' + JSON.stringify(err))
        resRedirectUrl = `https://${host}/public/logout?error=` + encodeURIComponent(JSON.stringify(err))
    }
    res.redirect(resRedirectUrl)
})