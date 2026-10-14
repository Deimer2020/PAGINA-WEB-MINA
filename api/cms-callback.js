import { settings, prepare, stateCookie, validState, resultPage } from '../lib/cms-oauth.js'

export default async function handler(req, res) {
  prepare(res)
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).send('Método no permitido.')
  }
  let config
  try { config = settings() } catch (error) { return res.status(503).send(error.message) }
  const query = new URL(req.url, config.origin).searchParams
  const state = query.get('state')
  res.setHeader('Set-Cookie', stateCookie('', 0))
  if (!validState(req, state)) return res.status(400).send('Sesión de acceso inválida o vencida. Intenta iniciar sesión nuevamente.')
  const code = query.get('code')
  if (!code || query.has('error')) {
    return resultPage(res, config.origin, 'error', { message: 'Acceso cancelado en GitHub.' })
  }
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        code, state,
        redirect_uri: config.origin + '/api/cms-callback',
      }),
      signal: AbortSignal.timeout(10000),
    })
    const data = await response.json()
    if (!response.ok || !data.access_token) throw new Error('oauth_failed')
    return resultPage(res, config.origin, 'success', { token: data.access_token, provider: 'github' })
  } catch {
    return resultPage(res, config.origin, 'error', { message: 'No se pudo completar el acceso con GitHub. Intenta nuevamente.' })
  }
}
