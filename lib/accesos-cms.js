import { createCipheriv, createDecipheriv, createHash, createHmac, randomBytes } from 'node:crypto'
import { cookieValue, unseal, github, decodeFile } from './equipo-cms.js'
export const ACCESS_PATH = '.cms/accesos.json'
const key = () => createHash('sha256').update(process.env.CMS_SESSION_SECRET).digest()
export function encryptAccess(data) {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', key(), iv)
  const content = Buffer.concat([cipher.update(JSON.stringify(data), 'utf8'), cipher.final()])
  return { version: 1, iv: iv.toString('base64'), tag: cipher.getAuthTag().toString('base64'), content: content.toString('base64') }
}
export function decryptAccess(envelope) {
  if (envelope.version === 1 && envelope.empty === true) return { usuarios: [] }
  const cipher = createDecipheriv('aes-256-gcm', key(), Buffer.from(envelope.iv, 'base64'))
  cipher.setAuthTag(Buffer.from(envelope.tag, 'base64'))
  return JSON.parse(Buffer.concat([cipher.update(Buffer.from(envelope.content, 'base64')), cipher.final()]).toString('utf8'))
}
export function ownerKey(sub) { return createHmac('sha256', process.env.CMS_SESSION_SECRET).update('docente:' + sub).digest('hex') }
export function identity(req) {
  const user = unseal(cookieValue(req, 'equipo_session'))
  if (!user || user.kind !== 'session' || typeof user.email !== 'string' || typeof user.sub !== 'string') return null
  return { email: user.email, sub: user.sub, propietarioId: ownerKey(user.sub) }
}
export async function readAccess() {
  const file = await github(ACCESS_PATH)
  if (!file) throw Object.assign(new Error('La colección de solicitudes aún no está publicada.'), { status: 503 })
  const data = decryptAccess(decodeFile(file))
  if (!Array.isArray(data.usuarios)) throw new Error('Colección inválida.')
  return { file, data }
}
export async function access(req, config) {
  const user = identity(req)
  if (!user) return null
  if (config.emails.includes(user.email)) return { ...user, rol: 'admin' }
  const { data } = await readAccess()
  const record = data.usuarios.find(item => item.propietarioId === user.propietarioId && item.email === user.email)
  return { ...user, rol: record?.estado === 'aprobado' ? 'profesor' : 'solicitante', estado: record?.estado || 'sin-solicitud' }
}
