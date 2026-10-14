import { configuration, github } from '../lib/equipo-cms.js'
import { identity, access, readAccess, encryptAccess, ACCESS_PATH } from '../lib/accesos-cms.js'
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  try {
    const config = configuration()
    const action = new URL(req.url, config.origin).searchParams.get('action') || 'session'
    if (!['session', 'list', 'request', 'approve', 'reject', 'revoke'].includes(action)) return res.status(404).json({ error: 'Acción no disponible.' })
    const post = !['session', 'list'].includes(action)
    if (req.method !== (post ? 'POST' : 'GET')) return res.status(405).json({ error: 'Método no permitido.' })
    if (post && (req.headers.origin !== config.origin || !String(req.headers['content-type']).startsWith('application/json'))) return res.status(403).json({ error: 'Solicitud no permitida.' })
    const user = identity(req)
    if (!user) return res.status(401).json({ error: 'Inicia sesión con Google.' })
    const admin = config.emails.includes(user.email)
    if (action === 'session') {
      const permission = await access(req, config)
      return res.json({ user: { email: user.email, rol: permission.rol, estado: permission.estado } })
    }
    if (action !== 'request' && !admin) return res.status(403).json({ error: 'Solo el administrador puede gestionar accesos.' })
    const { file, data } = await readAccess()
    if (action === 'list') return res.json({ sha: file.sha, usuarios: data.usuarios })
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    if (action === 'request') {
      if (typeof body?.nombre !== 'string' || !body.nombre.trim() || body.nombre.length > 180) return res.status(400).json({ error: 'Escribe tu nombre completo.' })
      const existing = data.usuarios.find(item => item.propietarioId === user.propietarioId)
      if (existing) return res.json({ ok: true, estado: existing.estado })
      if (data.usuarios.length >= 1000) return res.status(400).json({ error: 'Contacta al administrador para solicitar acceso.' })
      data.usuarios.push({ propietarioId: user.propietarioId, email: user.email, nombre: body.nombre.trim(), estado: 'pendiente', solicitadoEn: new Date().toISOString() })
    } else {
      if (!body || body.sha !== file.sha) return res.status(409).json({ error: 'Las solicitudes cambiaron. Actualiza el listado.' })
      const record = data.usuarios.find(item => item.propietarioId === body.propietarioId)
      if (!record) return res.status(404).json({ error: 'Solicitud no encontrada.' })
      record.estado = { approve: 'aprobado', reject: 'rechazado', revoke: 'revocado' }[action]
      record.actualizadoPor = user.email; record.actualizadoEn = new Date().toISOString()
    }
    const saved = await github(ACCESS_PATH, 'PUT', { sha: file.sha,
      content: Buffer.from(JSON.stringify(encryptAccess(data), null, 2) + '\n').toString('base64'),
      message: 'CMS: actualizar solicitudes de acceso' })
    return res.json({ ok: true, sha: saved.content.sha })
  } catch (error) {
    return res.status(error.status || 502).json({ error: error.status ? error.message : 'No se pudo completar la operación. Intenta nuevamente.' })
  }
}
