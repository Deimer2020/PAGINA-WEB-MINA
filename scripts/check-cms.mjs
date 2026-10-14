import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import yaml from 'js-yaml'
import auth from '../api/cms-auth.js'
import callback from '../api/cms-callback.js'
import { validState, newState, stateCookie, resultPage } from '../lib/cms-oauth.js'

function response() {
  return { headers: {}, statusCode: 200,
    setHeader(k, v) { this.headers[k] = v },
    status(n) { this.statusCode = n; return this },
    send(body) { this.body = body; return this },
    redirect(n, url) { this.statusCode = n; this.url = url; return this },
  }
}
process.env.CMS_SITE_URL = 'https://mina.example'
process.env.GITHUB_CLIENT_ID = 'test-id'
process.env.GITHUB_CLIENT_SECRET = 'test-secret'
const state = newState()
assert.equal(validState({ headers: { cookie: stateCookie(state) } }, state), true)
assert.equal(validState({ headers: { cookie: stateCookie(state) } }, newState()), false)
assert.equal(validState({ headers: {} }, state), false)
let res = response()
auth({ method: 'GET', headers: {} }, res)
assert.equal(res.statusCode, 302)
assert.equal(new URL(res.url).searchParams.get('redirect_uri'), 'https://mina.example/api/cms-callback')
assert.match(res.headers['Set-Cookie'], /HttpOnly; Secure; SameSite=Lax/)
res = response()
auth({ method: 'POST', headers: {} }, res)
assert.equal(res.statusCode, 405)
let fetched = 0
globalThis.fetch = async () => { fetched++; return { ok: true, json: async () => ({ access_token: 'test-token' }) } }
res = response()
await callback({ method: 'GET', url: '/api/cms-callback?state=' + newState() + '&code=fake', headers: { cookie: stateCookie(state) } }, res)
assert.equal(res.statusCode, 400)
assert.equal(fetched, 0)
res = response()
await callback({ method: 'GET', url: '/api/cms-callback?state=' + state + '&code=fake', headers: { cookie: stateCookie(state) } }, res)
assert.equal(fetched, 1)
assert.match(res.body, /authorization:github:success/)
assert.match(res.headers['Set-Cookie'], /Max-Age=0/)
let handler
const sent = []
const opener = { postMessage: (...args) => sent.push(args) }
const window = { opener, addEventListener: (name, fn) => { handler = fn }, removeEventListener() {}, close() {} }
res = response()
resultPage(res, 'https://mina.example', 'success', { token: 'test-token', provider: 'github' })
const script = res.body.match(/<script nonce="[^"]+">([\s\S]*?)<\/script>/)[1]
vm.runInNewContext(script, { window })
assert.equal(sent.length, 1)
handler({ origin: 'https://evil.example', source: opener, data: 'authorizing:github' })
assert.equal(sent.length, 1)
handler({ origin: 'https://mina.example', source: {}, data: 'authorizing:github' })
assert.equal(sent.length, 1)
handler({ origin: 'https://mina.example', source: opener, data: 'authorizing:github' })
assert.equal(sent.length, 2)
assert.equal(sent[1][1], 'https://mina.example')
globalThis.fetch = async () => { throw new Error('network') }
res = response()
await callback({ method: 'GET', url: '/api/cms-callback?state=' + state + '&code=fake', headers: { cookie: stateCookie(state) } }, res)
assert.match(res.body, /authorization:github:error/)
assert(!res.body.includes('test-secret'))
delete process.env.GITHUB_CLIENT_SECRET
res = response()
auth({ method: 'GET', headers: {} }, res)
assert.equal(res.statusCode, 503)

const config = yaml.load(fs.readFileSync('public/admin/config.yml', 'utf8'))
assert.equal(config.backend.name, 'github')
assert.equal(config.collections[0].format, 'json')
const entries = fs.readdirSync('src/content/novedades').map(name => JSON.parse(fs.readFileSync('src/content/novedades/' + name, 'utf8')))
assert.equal(entries.length, 5)
for (const entry of entries) {
  assert(entry.titulo && entry.legacyTipo)
  assert(fs.existsSync('public' + entry.imagen))
}
console.log('OK: OAuth, estado CSRF, origen de mensajes, errores de GitHub, configuración y cinco novedades.')
