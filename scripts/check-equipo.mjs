import assert from 'node:assert/strict'
import { configuration, seal, unseal, cookie, getUser, normalizeNews, imageExtension, github } from '../lib/equipo-cms.js'
import handler from '../api/equipo.js'
Object.assign(process.env, { CMS_SITE_URL: 'https://mina.example', GOOGLE_CLIENT_ID: 'google-id',
  GOOGLE_CLIENT_SECRET: 'google-secret', CMS_SESSION_SECRET: 'a'.repeat(64),
  CMS_GITHUB_TOKEN: 'github-private', CMS_ALLOWED_EMAILS: 'profesor@gmail.com' })
function response() { return { headers: {}, statusCode: 200, setHeader(k,v) {this.headers[k]=v},
  status(n) {this.statusCode=n;return this}, json(body) {this.body=body;return this},
  redirect(n, url) {this.statusCode=n;this.url=url;return this} } }
const config = configuration()
const token = seal({kind:'session',email:'profesor@gmail.com',sub:'google-sub',exp:Date.now()+60000})
const headers = {cookie:cookie('equipo_session', token),origin:config.origin,'content-type':'application/json'}
assert.equal(unseal(token).email,'profesor@gmail.com')
assert.equal(unseal(token + 'x'),null)
assert.equal(unseal(seal({exp:Date.now()-1})),null)
assert.equal(getUser({headers},config).email,'profesor@gmail.com')
assert.equal(getUser({headers},{...config,emails:[]}),null)
const news={titulo:'Noticia de prueba',fechaPublicacion:'2026-10-14',fecha:'14 de octubre',descripcion:'Descripción',
  imagen:'/uploads/novedades/foto.jpg',imagenAlt:'Foto',contenido:'Contenido',etiqueta:'',color:'#2e7d32',
  orden:100,publicada:false,destacado:false,imagenCompleta:false,galeria:[]}
assert.equal(normalizeNews({...news,legacyTipo:'elecciones'},null,'profesor@gmail.com').legacyTipo,'')
assert.equal(normalizeNews(news,{legacyTipo:'aniversario'},'profesor@gmail.com').legacyTipo,'aniversario')
assert.throws(()=>normalizeNews({...news,imagen:'/uploads/novedades/../../api/secret.js'},null,'x'))
assert.throws(()=>normalizeNews({...news,fechaPublicacion:'2026-99-99'},null,'x'),error=>error.status===400)
assert.throws(()=>normalizeNews({...news,galeria:[{src:'javascript:alert(1)',alt:''}]},null,'x'))
assert.equal(imageExtension(Buffer.from('<svg><script>bad</script></svg>')),null)
assert.equal(imageExtension(Buffer.from([137,80,78,71,13,10,26,10,0,0,0,0])),'png')
let calls=[]
globalThis.fetch=async(url,options)=>{calls.push({url:String(url),options});return {ok:true,json:async()=>({})}}
let res=response()
await handler({method:'GET',url:'/api/equipo?action=list',headers:{}},res)
assert.equal(res.statusCode,401);assert.equal(calls.length,0)
res=response()
await handler({method:'POST',url:'/api/equipo?action=save',headers:{...headers,origin:'https://evil.example'},body:{noticia:news}},res)
assert.equal(res.statusCode,403);assert.equal(calls.length,0)
res=response()
await handler({method:'POST',url:'/api/equipo?action=save',headers,body:{id:'../../api/secret',noticia:news}},res)
assert.equal(res.statusCode,400);assert.equal(calls.length,0)
await assert.rejects(()=>github('src/App.jsx','PUT',{}))
assert.equal(calls.length,0)
res=response()
await handler({method:'GET',url:'/api/equipo?action=login',headers:{}},res)
assert.equal(res.statusCode,302)
const google=new URL(res.url)
assert.equal(google.searchParams.get('scope'),'openid email')
assert.equal(google.searchParams.get('code_challenge_method'),'S256')
const flowCookie=res.headers['Set-Cookie']
res=response()
await handler({method:'GET',url:'/api/equipo?action=callback&state=bad&code=fake',headers:{cookie:flowCookie}},res)
assert.equal(res.url,'/equipo/?error=sesion');assert.equal(calls.length,0)
globalThis.fetch=async(url,options)=>{
  calls.push({url:String(url),options})
  if(String(url).includes('/token'))return {ok:true,json:async()=>({access_token:'google-access'})}
  return {ok:true,json:async()=>({email:'otro@gmail.com',email_verified:true,sub:'other'})}
}
res=response()
await handler({method:'GET',url:'/api/equipo?action=callback&state='+google.searchParams.get('state')+'&code=fake',headers:{cookie:flowCookie}},res)
assert.equal(res.url,'/equipo/acceso.html')
assert(String(res.headers['Set-Cookie']).includes('equipo_session'))
globalThis.fetch=async(url)=>String(url).includes('/token')
  ? {ok:true,json:async()=>({access_token:'google-access'})}
  : {ok:true,json:async()=>({email:'profesor@gmail.com',email_verified:true,sub:'google-sub'})}
res=response()
await handler({method:'GET',url:'/api/equipo?action=callback&state='+google.searchParams.get('state')+'&code=fake',headers:{cookie:flowCookie}},res)
assert.equal(res.url,'/equipo/')
assert.match(res.headers['Set-Cookie'][1],/HttpOnly; Secure; SameSite=Lax/)
assert(!JSON.stringify(res).includes('google-access'))
let writes=[]
globalThis.fetch=async(url,options)=>{
  if(options.method==='GET') return {status:404}
  writes.push({url:String(url),body:JSON.parse(options.body)})
  return {ok:true,json:async()=>({content:{sha:'new-sha'}})}
}
res=response()
await handler({method:'POST',url:'/api/equipo?action=save',headers,body:{noticia:news}},res)
assert.equal(res.statusCode,200);assert.equal(writes.length,1)
assert.match(writes[0].url,/contents\/src\/content\/novedades\/noticia-[a-f0-9]+\.json$/)
assert.equal(writes[0].body.branch,'main')
assert.equal(JSON.parse(Buffer.from(writes[0].body.content,'base64').toString()).actualizadoPor,'profesor@gmail.com')
assert(!JSON.stringify(res.body).includes('github-private'))
globalThis.fetch=async()=>({ok:true,json:async()=>({sha:'changed',type:'file',encoding:'base64',content:Buffer.from(JSON.stringify(news)).toString('base64')})})
res=response()
await handler({method:'POST',url:'/api/equipo?action=save',headers,body:{id:'existing',sha:'old',noticia:news}},res)
assert.equal(res.statusCode,409)
console.log('OK: sesión firmada, acceso por correo, CSRF, Google con PKCE, rechazo de correos ajenos, rutas restringidas, publicación y conflictos.')

// Eliminación de borradores: GitHub simulado, sin operaciones reales.
let deletedPaths = []
const draftFile = (published = false, sha = 'draft-sha') => ({
  sha, type: 'file', encoding: 'base64', content: Buffer.from(JSON.stringify({ ...news, publicada: published })).toString('base64'),
})
globalThis.fetch = async (url, options) => {
  if (options.method === 'DELETE') { deletedPaths.push({ url: String(url), body: JSON.parse(options.body) }); return { ok: true, json: async () => ({}) } }
  return { ok: true, json: async () => draftFile() }
}
res = response()
await handler({ method: 'POST', url: '/api/equipo?action=delete', headers: {}, body: { id: 'draft', sha: 'draft-sha' } }, res)
assert.equal(res.statusCode, 403)
res = response()
await handler({ method: 'POST', url: '/api/equipo?action=delete', headers: { origin: config.origin, 'content-type': 'application/json' }, body: { id: 'draft', sha: 'draft-sha' } }, res)
assert.equal(res.statusCode, 401)
res = response()
await handler({ method: 'POST', url: '/api/equipo?action=delete', headers, body: { id: '../../api/file', sha: 'draft-sha' } }, res)
assert.equal(res.statusCode, 400)
res = response()
await handler({ method: 'GET', url: '/api/equipo?action=delete', headers }, res)
assert.equal(res.statusCode, 405)
res = response()
await handler({ method: 'POST', url: '/api/equipo?action=delete', headers, body: { id: 'draft', sha: 'old-sha' } }, res)
assert.equal(res.statusCode, 409)
assert.equal(deletedPaths.length, 0)
globalThis.fetch = async () => ({ ok: true, json: async () => draftFile(true) })
res = response()
await handler({ method: 'POST', url: '/api/equipo?action=delete', headers, body: { id: 'draft', sha: 'draft-sha' } }, res)
assert.equal(res.statusCode, 403)
globalThis.fetch = async () => ({ status: 404 })
res = response()
await handler({ method: 'POST', url: '/api/equipo?action=delete', headers, body: { id: 'draft', sha: 'draft-sha' } }, res)
assert.equal(res.statusCode, 404)
globalThis.fetch = async (url, options) => {
  if (options.method === 'DELETE') { deletedPaths.push({ url: String(url), body: JSON.parse(options.body) }); return { ok: true, json: async () => ({}) } }
  return { ok: true, json: async () => draftFile() }
}
res = response()
await handler({ method: 'POST', url: '/api/equipo?action=delete', headers, body: { id: 'draft', sha: 'draft-sha' } }, res)
assert.equal(res.statusCode, 200)
assert.equal(deletedPaths.length, 1)
assert.match(deletedPaths[0].url, /contents\/src\/content\/novedades\/draft\.json$/)
assert.equal(deletedPaths[0].body.sha, 'draft-sha')
assert.equal(deletedPaths[0].body.branch, 'main')
console.log('OK: eliminación de borradores, protección de noticias publicadas, sesión y conflictos.')
