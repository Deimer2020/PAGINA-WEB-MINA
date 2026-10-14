import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto'

export const NEWS_PATH = 'src/content/novedades'
export const UPLOAD_PATH = 'public/uploads/novedades'

export function configuration() {
  const required = ['CMS_SITE_URL', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'CMS_SESSION_SECRET', 'CMS_GITHUB_TOKEN', 'CMS_ALLOWED_EMAILS']
  if (required.some(key => !process.env[key])) throw Object.assign(new Error('El acceso con Google todavía no está configurado.'), { status: 503 })
  if (process.env.CMS_SESSION_SECRET.length < 32) throw Object.assign(new Error('La clave de sesión debe tener al menos 32 caracteres.'), { status: 503 })
  const url = new URL(process.env.CMS_SITE_URL)
  if (url.protocol !== 'https:') throw Object.assign(new Error('Configura un dominio HTTPS.'), { status: 503 })
  return { origin: url.origin, emails: process.env.CMS_ALLOWED_EMAILS.split(',').map(value => value.trim().toLowerCase()).filter(Boolean) }
}
export function seal(data, secret = process.env.CMS_SESSION_SECRET) {
  const body = Buffer.from(JSON.stringify(data)).toString('base64url')
  return body + '.' + createHmac('sha256', secret).update(body).digest('base64url')
}
export function unseal(value, secret = process.env.CMS_SESSION_SECRET) {
  try {
    const [body, signature, extra] = String(value || '').split('.')
    if (!body || !signature || extra) return null
    const expected = createHmac('sha256', secret).update(body).digest()
    const actual = Buffer.from(signature, 'base64url')
    if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null
    const data = JSON.parse(Buffer.from(body, 'base64url').toString())
    return Number.isFinite(data.exp) && data.exp > Date.now() ? data : null
  } catch { return null }
}
export function cookieValue(req, name) {
  return (req.headers.cookie || '').split(';').map(value => value.trim())
    .find(value => value.startsWith(name + '='))?.slice(name.length + 1)
}
export function cookie(name, value, age = 28800) {
  return name + '=' + value + '; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=' + age
}
export function getUser(req, config) {
  const user = unseal(cookieValue(req, 'equipo_session'))
  if (!user || user.kind !== 'session' || !user.sub || !config.emails.includes(user.email)) return null
  return { email: user.email, sub: user.sub }
}
export function idIsValid(id) {
  return typeof id === 'string' && /^[a-z0-9][a-z0-9-]{0,119}$/.test(id)
}
export function safeImage(value) {
  return typeof value === 'string' && /^\/(?:images|uploads\/novedades)\/[a-zA-Z0-9/_ .-]+$/.test(value)
    && !value.includes('..') && !value.includes('//')
}
export function normalizeNews(input, previous, email) {
  const str = (name, max, required = true) => {
    const value = input[name]
    if (typeof value !== 'string' || value.length > max || (required && !value.trim())) {
      throw Object.assign(new Error('Revisa el campo ' + name + '.'), { status: 400 })
    }
    return value.trim()
  }
  const noticia = {
    titulo: str('titulo', 200), fechaPublicacion: str('fechaPublicacion', 10),
    fecha: str('fecha', 200), descripcion: str('descripcion', 2000),
    imagen: str('imagen', 400), imagenAlt: str('imagenAlt', 300),
    contenido: str('contenido', 40000, false), etiqueta: str('etiqueta', 100, false),
    color: str('color', 7),
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(noticia.fechaPublicacion)
    || !Number.isFinite(Date.parse(noticia.fechaPublicacion))
    || new Date(noticia.fechaPublicacion).toISOString().slice(0, 10) !== noticia.fechaPublicacion
    || !/^#[a-f0-9]{6}$/i.test(noticia.color) || !safeImage(noticia.imagen)) {
    throw Object.assign(new Error('Revisa la fecha, el color y la imagen.'), { status: 400 })
  }
  if (!Number.isInteger(input.orden) || input.orden < 0 || input.orden > 10000) {
    throw Object.assign(new Error('El orden debe ser un número de 0 a 10000.'), { status: 400 })
  }
  for (const name of ['publicada', 'destacado', 'imagenCompleta']) {
    if (typeof input[name] !== 'boolean') throw Object.assign(new Error('Revisa ' + name + '.'), { status: 400 })
    noticia[name] = input[name]
  }
  if (!Array.isArray(input.galeria) || input.galeria.length > 40) throw Object.assign(new Error('Máximo 40 fotos por galería.'), { status: 400 })
  noticia.galeria = input.galeria.map(foto => {
    if (!foto || !safeImage(foto.src) || typeof foto.alt !== 'string' || foto.alt.length > 300) {
      throw Object.assign(new Error('Revisa las fotografías de la galería.'), { status: 400 })
    }
    return { src: foto.src, alt: foto.alt.trim() }
  })
  return { ...noticia, orden: input.orden, legacyTipo: previous?.legacyTipo || '',
    actualizadoPor: email, actualizadoEn: new Date().toISOString() }
}
export function imageExtension(buffer) {
  if (buffer.length > 2097152 || buffer.length < 12) return null
  if (buffer.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return 'png'
  if (buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255) return 'jpg'
  if (buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') return 'webp'
  return null
}
export async function github(path, method = 'GET', body) {
  if (!(path === 'src/content/profesores.json' || path === NEWS_PATH || path.startsWith(NEWS_PATH + '/') || path.startsWith(UPLOAD_PATH + '/'))) throw new Error('Ruta no permitida.')
  const url = new URL('https://api.github.com/repos/Deimer2020/PAGINA-WEB-MINA/contents/' + path.split('/').map(encodeURIComponent).join('/'))
  if (method === 'GET') url.searchParams.set('ref', 'main')
  const response = await fetch(url, {
    method, headers: { Authorization: 'Bearer ' + process.env.CMS_GITHUB_TOKEN,
      Accept: 'application/vnd.github+json', 'Content-Type': 'application/json', 'X-GitHub-Api-Version': '2022-11-28' },
    body: body ? JSON.stringify({ ...body, branch: 'main' }) : undefined,
    signal: AbortSignal.timeout(20000),
  })
  if (response.status === 404 && method === 'GET') return null
  if (!response.ok) throw Object.assign(new Error(response.status === 409 || response.status === 422
    ? 'Hubo otro cambio. Recarga la noticia y vuelve a intentarlo.'
    : 'No se pudo acceder al contenido. Revisa la conexión y los permisos del servidor.'),
    { status: response.status === 409 || response.status === 422 ? 409 : 502 })
  return response.json()
}
export function decodeFile(file) {
  if (!file || file.type !== 'file' || file.encoding !== 'base64') throw Object.assign(new Error('No se pudo leer la noticia.'), { status: 502 })
  return JSON.parse(Buffer.from(file.content.replace(/\s/g, ''), 'base64').toString('utf8'))
}
export function randomId() { return randomBytes(12).toString('hex') }
