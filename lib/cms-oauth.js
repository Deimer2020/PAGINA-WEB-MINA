import { randomBytes, timingSafeEqual } from 'node:crypto'

export function settings() {
  const { CMS_SITE_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env
  if (!CMS_SITE_URL || !GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    throw new Error('Configura CMS_SITE_URL, GITHUB_CLIENT_ID y GITHUB_CLIENT_SECRET en Vercel.')
  }
  const site = new URL(CMS_SITE_URL)
  if (site.protocol !== 'https:' || site.username || site.password) {
    throw new Error('CMS_SITE_URL debe ser la URL HTTPS de producción.')
  }
  return { origin: site.origin, clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }
}

export function prepare(res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Referrer-Policy', 'no-referrer')
  res.setHeader('X-Content-Type-Options', 'nosniff')
}

export function stateCookie(value, maxAge = 600) {
  return 'cms_oauth_state=' + value + '; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=' + maxAge
}

export function newState() {
  return randomBytes(32).toString('hex')
}

export function validState(req, state) {
  const saved = (req.headers.cookie || '').split(';')
    .map(item => item.trim()).find(item => item.startsWith('cms_oauth_state='))?.slice(16)
  if (!saved || !state || !/^[a-f0-9]{64}$/.test(state) || saved.length !== state.length) return false
  return timingSafeEqual(Buffer.from(saved), Buffer.from(state))
}

export function resultPage(res, origin, status, payload) {
  const nonce = randomBytes(16).toString('base64')
  const message = JSON.stringify('authorization:github:' + status + ':' + JSON.stringify(payload))
    .replace(/</g, '\\u003c')
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Content-Security-Policy', "default-src 'none'; script-src 'nonce-" + nonce + "'; base-uri 'none'; frame-ancestors 'none'")
  res.status(200).send(`<!doctype html><html lang="es"><meta charset="utf-8"><title>Acceso al CMS</title>
<p>Completando acceso. Si esta ventana no se cierra, regresa al panel.</p>
<script nonce="${nonce}">
const origin = ${JSON.stringify(origin)};
const openerWindow = window.opener;
if (openerWindow) {
  window.addEventListener('message', function receive(event) {
    if (event.origin !== origin || event.source !== openerWindow || event.data !== 'authorizing:github') return;
    window.removeEventListener('message', receive);
    openerWindow.postMessage(${message}, origin);
    window.close();
  });
  openerWindow.postMessage('authorizing:github', origin);
}
</script></html>`)
}
