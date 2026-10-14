import { configuration, seal, unseal, cookie, cookieValue, getUser, idIsValid, normalizeNews,
  github, decodeFile, NEWS_PATH, UPLOAD_PATH, imageExtension, randomId } from '../lib/equipo-cms.js'
import { createHash } from 'node:crypto'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'no-referrer')
  try {
    const config = configuration()
    const url = new URL(req.url, config.origin)
    const action = url.searchParams.get('action') || 'session'
    const post = ['save', 'upload', 'logout', 'delete'].includes(action)
    if (req.method !== (post ? 'POST' : 'GET')) return res.status(405).json({ error: 'Método no permitido.' })
    if (post && (req.headers.origin !== config.origin || !String(req.headers['content-type']).startsWith('application/json'))) {
      return res.status(403).json({ error: 'Solicitud no permitida.' })
    }
    if (action === 'login') {
      const state = randomId()
      const verifier = randomId() + randomId()
      res.setHeader('Set-Cookie', cookie('equipo_oauth', seal({ kind: 'oauth', state, verifier, exp: Date.now() + 600000 }), 600))
      const google = new URL('https://accounts.google.com/o/oauth2/v2/auth')
      Object.entries({
        client_id: process.env.GOOGLE_CLIENT_ID, redirect_uri: config.origin + '/api/equipo?action=callback',
        response_type: 'code', scope: 'openid email', state, prompt: 'select_account',
        code_challenge: createHash('sha256').update(verifier).digest('base64url'), code_challenge_method: 'S256',
      }).forEach(([key, value]) => google.searchParams.set(key, value))
      return res.redirect(302, google.href)
    }
    if (action === 'callback') {
      const flow = unseal(cookieValue(req, 'equipo_oauth'))
      res.setHeader('Set-Cookie', cookie('equipo_oauth', '', 0))
      if (!flow || flow.kind !== 'oauth' || flow.state !== url.searchParams.get('state')) {
        return res.redirect(302, '/equipo/?error=sesion')
      }
      if (url.searchParams.has('error') || !url.searchParams.get('code')) return res.redirect(302, '/equipo/?error=cancelado')
      const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ client_id: process.env.GOOGLE_CLIENT_ID, client_secret: process.env.GOOGLE_CLIENT_SECRET,
          code: url.searchParams.get('code'), code_verifier: flow.verifier, grant_type: 'authorization_code',
          redirect_uri: config.origin + '/api/equipo?action=callback' }),
        signal: AbortSignal.timeout(10000),
      })
      if (!tokenResponse.ok) return res.redirect(302, '/equipo/?error=google')
      const token = await tokenResponse.json()
      if (!token.access_token) return res.redirect(302, '/equipo/?error=google')
      const userResponse = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
        headers: { Authorization: 'Bearer ' + token.access_token }, signal: AbortSignal.timeout(10000),
      })
      if (!userResponse.ok) return res.redirect(302, '/equipo/?error=google')
      const identity = await userResponse.json()
      const email = String(identity.email || '').toLowerCase()
      if (!identity.email_verified || !identity.sub || (!email.endsWith('@gmail.com') && !identity.hd)
        || !config.emails.includes(email)) {
        return res.redirect(302, '/equipo/?error=permiso')
      }
      res.setHeader('Set-Cookie', [cookie('equipo_oauth', '', 0),
        cookie('equipo_session', seal({ kind: 'session', email, sub: identity.sub, exp: Date.now() + 28800000 }))])
      return res.redirect(302, '/equipo/')
    }
    if (action === 'logout') {
      res.setHeader('Set-Cookie', cookie('equipo_session', '', 0))
      return res.json({ ok: true })
    }
    const user = getUser(req, config)
    if (!user) return res.status(401).json({ error: 'Inicia sesión con un correo autorizado.' })
    if (action === 'session') return res.json({ user })
    if (action === 'list') {
      const entries = await github(NEWS_PATH) || []
      if (!Array.isArray(entries)) throw new Error('Colección inválida.')
      const noticias = []
      // Limita solicitudes simultáneas a GitHub.
      const candidates = entries.filter(file => file.type === 'file' && file.name.endsWith('.json') && idIsValid(file.name.slice(0, -5)))
      for (let index = 0; index < candidates.length; index += 5) {
        noticias.push(...await Promise.all(candidates.slice(index, index + 5).map(async file => {
          const data = await github(NEWS_PATH + '/' + file.name)
          return { id: file.name.slice(0, -5), sha: data.sha, ...decodeFile(data) }
        })))
      }
      return res.json({ noticias: noticias.sort((a, b) => (a.orden ?? 100) - (b.orden ?? 100)) })
    }
    if (action === 'upload') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      if (typeof body?.content !== 'string' || body.content.length > 2796204 || !/^[a-zA-Z0-9+/]+={0,2}$/.test(body.content)) {
        return res.status(400).json({ error: 'Selecciona una foto JPG, PNG o WebP de hasta 2 MB.' })
      }
      const buffer = Buffer.from(body.content, 'base64')
      const extension = imageExtension(buffer)
      if (!extension) return res.status(400).json({ error: 'Solo se permiten imágenes JPG, PNG o WebP de hasta 2 MB.' })
      const name = randomId() + '.' + extension
      await github(UPLOAD_PATH + '/' + name, 'PUT', {
        message: 'CMS: subir fotografía (' + user.email + ')', content: buffer.toString('base64'),
      })
      return res.json({ src: '/uploads/novedades/' + name })
    }
    if (action === 'delete') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      if (!body || !idIsValid(body.id) || typeof body.sha !== 'string' || !body.sha) {
        return res.status(400).json({ error: 'Identificador de borrador inválido.' })
      }
      const path = NEWS_PATH + '/' + body.id + '.json'
      const file = await github(path)
      if (!file) return res.status(404).json({ error: 'El borrador ya no existe. Actualiza el listado.' })
      if (file.sha !== body.sha) {
        return res.status(409).json({ error: 'El borrador cambió. Actualiza el listado antes de eliminarlo.' })
      }
      if (decodeFile(file).publicada !== false) {
        return res.status(403).json({ error: 'Solo se pueden eliminar borradores o noticias ocultas.' })
      }
      await github(path, 'DELETE', { sha: file.sha,
        message: 'CMS: eliminar borrador (' + user.email + ')' })
      return res.json({ ok: true })
    }
    if (action === 'save') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      if (!body || !body.noticia) return res.status(400).json({ error: 'Falta el contenido de la noticia.' })
      const id = body.id || 'noticia-' + randomId()
      if (!idIsValid(id)) return res.status(400).json({ error: 'Identificador inválido.' })
      const path = NEWS_PATH + '/' + id + '.json'
      const previousFile = await github(path)
      if ((previousFile && previousFile.sha !== body.sha) || (!previousFile && body.id)) {
        return res.status(409).json({ error: 'La noticia cambió. Recarga el listado antes de editarla.' })
      }
      const noticia = normalizeNews(body.noticia, previousFile ? decodeFile(previousFile) : null, user.email)
      const saved = await github(path, 'PUT', {
        message: 'CMS: ' + (previousFile ? 'actualizar' : 'crear') + ' novedad (' + user.email + ')',
        content: Buffer.from(JSON.stringify(noticia, null, 2) + '\n').toString('base64'),
        ...(previousFile ? { sha: previousFile.sha } : {}),
      })
      return res.json({ id, sha: saved.content.sha, noticia })
    }
    return res.status(404).json({ error: 'Acción no disponible.' })
  } catch (error) {
    return res.status(error.status || 502).json({ error: error.status ? error.message : 'No se pudo completar la operación. Intenta nuevamente.' })
  }
}
