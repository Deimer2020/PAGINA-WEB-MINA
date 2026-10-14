import { settings, prepare, stateCookie, newState } from '../lib/cms-oauth.js'

export default function handler(req, res) {
  prepare(res)
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).send('Método no permitido.')
  }
  let config
  try { config = settings() } catch (error) { return res.status(503).send(error.message) }
  const state = newState()
  res.setHeader('Set-Cookie', stateCookie(state))
  const url = new URL('https://github.com/login/oauth/authorize')
  url.searchParams.set('client_id', config.clientId)
  url.searchParams.set('redirect_uri', config.origin + '/api/cms-callback')
  url.searchParams.set('scope', 'repo')
  url.searchParams.set('state', state)
  res.redirect(302, url.href)
}
