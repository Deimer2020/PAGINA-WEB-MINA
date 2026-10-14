import { configuration, github, decodeFile, idIsValid, randomId } from '../lib/equipo-cms.js'
import { access, readAccess } from '../lib/accesos-cms.js'
import { TEACHERS_PATH, normalizeTeacher } from '../lib/profesores-cms.js'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  try {
    const config = configuration()
    const action = new URL(req.url, config.origin).searchParams.get('action') || 'list'
    if (!['list', 'save', 'delete'].includes(action)) return res.status(404).json({ error: 'Acción no disponible.' })
    if (req.method !== (action === 'list' ? 'GET' : 'POST')) return res.status(405).json({ error: 'Método no permitido.' })
    if (action !== 'list' && (req.headers.origin !== config.origin || !String(req.headers['content-type']).startsWith('application/json'))) {
      return res.status(403).json({ error: 'Solicitud no permitida.' })
    }
    const user = await access(req, config)
    if (!user) return res.status(401).json({ error: 'Inicia sesión con un correo autorizado.' })
    if (user.rol === 'solicitante') return res.status(403).json({ error: 'Solicita acceso y espera la aprobación del administrador.' })
    const file = await github(TEACHERS_PATH)
    if (!file) return res.status(503).json({ error: 'La colección de profesores todavía no está publicada.' })
    const collection = decodeFile(file)
    if (!Array.isArray(collection.profesores)) throw new Error('Colección inválida.')
    if (action === 'list') return res.json({ sha: file.sha, profesores: user.rol === 'admin' ? collection.profesores : collection.profesores.filter(profile => profile.propietarioId === user.propietarioId) })
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    if (!body || body.sha !== file.sha) return res.status(409).json({ error: 'Otro usuario actualizó los perfiles. Vuelve al listado y recarga antes de guardar.' })
    if (body.id && !idIsValid(body.id)) return res.status(400).json({ error: 'Identificador inválido.' })
    const index = collection.profesores.findIndex(profile => profile.id === body.id)
    if (body.id && index < 0) return res.status(404).json({ error: 'El perfil ya no existe.' })
    const previous = index < 0 ? null : collection.profesores[index]
    if (user.rol !== 'admin' && previous && previous.propietarioId !== user.propietarioId) {
      return res.status(403).json({ error: 'Solo puedes administrar tu propio perfil.' })
    }
    if (user.rol !== 'admin' && !previous && collection.profesores.some(item => item.propietarioId === user.propietarioId)) {
      return res.status(409).json({ error: 'Ya tienes un perfil. Edita el existente.' })
    }
    let profile
    if (action === 'delete') {
      if (index < 0) return res.status(400).json({ error: 'Selecciona un perfil.' })
      if (collection.profesores[index].publicado !== false) return res.status(403).json({ error: 'Primero oculta el perfil y guarda los cambios.' })
      collection.profesores.splice(index, 1)
    } else {
      if (index < 0 && collection.profesores.length >= 300) return res.status(400).json({ error: 'Se alcanzó el límite de 300 perfiles.' })
      let propietarioId = user.rol === 'admin' ? (previous?.propietarioId || '') : user.propietarioId
      if (user.rol === 'admin' && typeof body.propietarioId === 'string') {
        propietarioId = body.propietarioId
        if (propietarioId) {
          const { data } = await readAccess()
          if (!data.usuarios.some(record => record.propietarioId === propietarioId && record.estado === 'aprobado')) {
            return res.status(400).json({ error: 'Selecciona un docente aprobado.' })
          }
          if (collection.profesores.some(item => item.id !== body.id && item.propietarioId === propietarioId)) {
            return res.status(409).json({ error: 'Ese docente ya tiene un perfil asignado.' })
          }
        }
      }
      const fields = user.rol === 'admin' ? body.profesor : { ...body.profesor, orden: previous?.orden ?? 100 }
      profile = { ...normalizeTeacher(fields, user.rol === 'admin' ? user.email : 'docente'),
        propietarioId, id: body.id || 'profesor-' + randomId() }
      if (index < 0) collection.profesores.push(profile)
      else collection.profesores[index] = profile
    }
    const saved = await github(TEACHERS_PATH, 'PUT', { sha: file.sha,
      content: Buffer.from(JSON.stringify(collection, null, 2) + '\n').toString('base64'),
      message: 'CMS: ' + (action === 'delete' ? 'eliminar' : 'guardar') + ' perfil docente' })
    return res.json({ ok: true, sha: saved.content.sha, profesor: profile })
  } catch (error) {
    return res.status(error.status || 502).json({ error: error.status ? error.message : 'No se pudo completar la operación. Intenta nuevamente.' })
  }
}
