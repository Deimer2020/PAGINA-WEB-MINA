import assert from 'node:assert/strict'
import { seal, cookie, github } from '../lib/equipo-cms.js'
import { normalizeTeacher } from '../lib/profesores-cms.js'
import handler from '../api/profesores.js'
Object.assign(process.env, { CMS_SITE_URL: 'https://mina.example', GOOGLE_CLIENT_ID: 'google-id',
  GOOGLE_CLIENT_SECRET: 'google-secret', CMS_SESSION_SECRET: 'a'.repeat(64),
  CMS_GITHUB_TOKEN: 'github-secret', CMS_ALLOWED_EMAILS: 'profesor@gmail.com' })
const headers = { origin: 'https://mina.example', 'content-type': 'application/json',
  cookie: cookie('equipo_session', seal({ kind: 'session', email: 'profesor@gmail.com', sub: 'google-user', exp: Date.now() + 60000 })) }
function response() { return { code: 200, setHeader() {}, status(n) { this.code = n; return this }, json(body) { this.body = body; return this } } }
const profile = { nombre: 'Docente de prueba', cargo: 'Docente', area: 'Matemáticas', correo: 'contacto@example.com',
  foto: '', presentacion: 'Presentación breve', publicado: false, orden: 100 }
assert.equal(normalizeTeacher(profile, 'profesor@gmail.com').correo, profile.correo)
assert.equal(normalizeTeacher({ ...profile, correo: '' }, 'x').foto, '')
for (const invalid of [{ correo: 'javascript:alert(1)' }, { correo: 'a@example.com\nBcc: otro@example.com' },
  { foto: '/uploads/novedades/../../secret' }, { publicado: 'true' }, { orden: -1 }, { nombre: '' }]) {
  assert.throws(() => normalizeTeacher({ ...profile, ...invalid }, 'x'), error => error.status === 400)
}
let requests = []
let savedProfiles = []
let fileSha = 'sha-1'
globalThis.fetch = async (url, options) => {
  requests.push({ url: String(url), options })
  if (options.method === 'GET') return { ok: true, json: async () => ({
    type: 'file', encoding: 'base64', sha: fileSha,
    content: Buffer.from(JSON.stringify({ profesores: savedProfiles })).toString('base64'),
  }) }
  const body = JSON.parse(options.body)
  assert.equal(body.branch, 'main')
  assert.equal(body.sha, fileSha)
  savedProfiles = JSON.parse(Buffer.from(body.content, 'base64').toString()).profesores
  fileSha = 'sha-' + (Number(fileSha.split('-')[1]) + 1)
  return { ok: true, json: async () => ({ content: { sha: fileSha } }) }
}
let res = response()
await handler({ method: 'GET', url: '/api/profesores', headers: {} }, res)
assert.equal(res.code, 401); assert.equal(requests.length, 0)
res = response()
await handler({ method: 'POST', url: '/api/profesores?action=save', headers: { ...headers, origin: 'https://evil.example' }, body: {} }, res)
assert.equal(res.code, 403); assert.equal(requests.length, 0)
res = response()
await handler({ method: 'POST', url: '/api/profesores?action=save', headers, body: { sha: fileSha, profesor: profile } }, res)
assert.equal(res.code, 200); assert.equal(savedProfiles.length, 1)
assert(savedProfiles[0].id.startsWith('profesor-'))
assert.equal(savedProfiles[0].actualizadoPor, 'profesor@gmail.com')
assert(!JSON.stringify(res.body).includes('github-secret'))
const id = savedProfiles[0].id
res = response()
await handler({ method: 'POST', url: '/api/profesores?action=save', headers, body: { sha: 'stale', id, profesor: profile } }, res)
assert.equal(res.code, 409); assert.equal(savedProfiles.length, 1)
res = response()
await handler({ method: 'POST', url: '/api/profesores?action=save', headers, body: { sha: fileSha, id: '../../src/App', profesor: profile } }, res)
assert.equal(res.code, 400)
res = response()
await handler({ method: 'POST', url: '/api/profesores?action=save', headers, body: { sha: fileSha, id, profesor: { ...profile, publicado: true } } }, res)
assert.equal(res.code, 200); assert.equal(savedProfiles.length, 1); assert.equal(savedProfiles[0].publicado, true)
res = response()
await handler({ method: 'POST', url: '/api/profesores?action=delete', headers, body: { sha: fileSha, id } }, res)
assert.equal(res.code, 403); assert.equal(savedProfiles.length, 1)
res = response()
await handler({ method: 'POST', url: '/api/profesores?action=save', headers, body: { sha: fileSha, id, profesor: profile } }, res)
assert.equal(res.code, 200)
res = response()
await handler({ method: 'POST', url: '/api/profesores?action=delete', headers, body: { sha: fileSha, id } }, res)
assert.equal(res.code, 200); assert.equal(savedProfiles.length, 0)
assert(requests.every(request => request.url.includes('/contents/src/content/profesores.json')))
await assert.rejects(() => github('src/content/profesores.json/../../App.jsx', 'PUT', {}))
console.log('OK: perfiles con correo y foto opcionales, acceso autorizado, creación, edición, publicación, ocultación, conflictos y eliminación.')
