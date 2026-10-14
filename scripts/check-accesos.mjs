import assert from 'node:assert/strict'
import { seal, cookie } from '../lib/equipo-cms.js'
import { encryptAccess, decryptAccess, ownerKey } from '../lib/accesos-cms.js'
import accessHandler from '../api/accesos.js'
import teacherHandler from '../api/profesores.js'
import newsHandler from '../api/equipo.js'
Object.assign(process.env, { CMS_SITE_URL:'https://mina.example', GOOGLE_CLIENT_ID:'google-id',
  GOOGLE_CLIENT_SECRET:'google-secret', CMS_SESSION_SECRET:'a'.repeat(64), CMS_GITHUB_TOKEN:'github-token',
  CMS_ALLOWED_EMAILS:'admin@gmail.com' })
const headers = (email, sub) => ({origin:'https://mina.example','content-type':'application/json',
  cookie:cookie('equipo_session',seal({kind:'session',email,sub,exp:Date.now()+60000}))})
const staff = headers('teacher@gmail.com','teacher-sub')
const admin = headers('admin@gmail.com','admin-sub')
const other = headers('other@gmail.com','other-sub')
function response(){return {code:200,setHeader(){},status(n){this.code=n;return this},json(data){this.body=data;return this}}}
let accessData={usuarios:[]}
let accessSha='access-1'
let profiles=[]
let profileSha='profiles-1'
globalThis.fetch=async(url,options)=>{
  const accessPath=String(url).includes('/.cms/accesos.json')
  if(options.method==='GET')return {ok:true,json:async()=>({type:'file',encoding:'base64',
    sha:accessPath?accessSha:profileSha,content:Buffer.from(JSON.stringify(accessPath?encryptAccess(accessData):{profesores:profiles})).toString('base64')})}
  const input=JSON.parse(options.body)
  if(accessPath){accessData=decryptAccess(JSON.parse(Buffer.from(input.content,'base64').toString()));accessSha+='x'}
  else {profiles=JSON.parse(Buffer.from(input.content,'base64').toString()).profesores;profileSha+='x'}
  return {ok:true,json:async()=>({content:{sha:accessPath?accessSha:profileSha}})}
}
const envelope=encryptAccess({usuarios:[{email:'secret@gmail.com'}]})
assert(!JSON.stringify(envelope).includes('secret@gmail.com'))
assert.equal(decryptAccess(envelope).usuarios[0].email,'secret@gmail.com')
assert.throws(()=>decryptAccess({...envelope,tag:Buffer.alloc(16).toString('base64')}))
let res=response()
await accessHandler({method:'POST',url:'/api/accesos?action=request',headers:staff,body:{nombre:'Profesor de prueba',email:'fake@gmail.com'}},res)
assert.equal(res.code,200);assert.equal(accessData.usuarios[0].email,'teacher@gmail.com')
res=response()
await accessHandler({method:'GET',url:'/api/accesos?action=list',headers:staff},res)
assert.equal(res.code,403)
res=response()
await accessHandler({method:'POST',url:'/api/accesos?action=approve',headers:staff,body:{sha:accessSha,propietarioId:ownerKey('teacher-sub')}},res)
assert.equal(res.code,403)
res=response()
await teacherHandler({method:'GET',url:'/api/profesores',headers:staff},res)
assert.equal(res.code,403)
res=response()
await accessHandler({method:'POST',url:'/api/accesos?action=approve',headers:admin,body:{sha:'stale',propietarioId:ownerKey('teacher-sub')}},res)
assert.equal(res.code,409)
res=response()
await accessHandler({method:'POST',url:'/api/accesos?action=approve',headers:admin,body:{sha:accessSha,propietarioId:ownerKey('teacher-sub')}},res)
assert.equal(res.code,200)
const profile={nombre:'Docente',cargo:'Profesor',area:'Matemáticas',correo:'',foto:'',presentacion:'',orden:999,publicado:false}
res=response()
await teacherHandler({method:'POST',url:'/api/profesores?action=save',headers:staff,
  body:{sha:profileSha,profesor:profile,propietarioId:ownerKey('other-sub')}},res)
assert.equal(res.code,200);assert.equal(profiles[0].propietarioId,ownerKey('teacher-sub'));assert.equal(profiles[0].orden,100)
assert.equal(profiles[0].actualizadoPor,'docente')
const own=profiles[0].id
profiles.push({...profiles[0],id:'other-profile',propietarioId:ownerKey('other-sub')})
res=response()
await teacherHandler({method:'GET',url:'/api/profesores',headers:staff},res)
assert.equal(res.body.profesores.length,1);assert.equal(res.body.profesores[0].id,own)
for(const action of ['save','delete']){
  res=response()
  await teacherHandler({method:'POST',url:'/api/profesores?action='+action,headers:staff,body:{sha:profileSha,id:'other-profile',profesor:profile}},res)
  assert.equal(res.code,403)
}
res=response()
await teacherHandler({method:'POST',url:'/api/profesores?action=save',headers:staff,body:{sha:profileSha,profesor:profile}},res)
assert.equal(res.code,409)
res=response()
await newsHandler({method:'GET',url:'/api/equipo?action=list',headers:staff},res)
assert.equal(res.code,401)
res=response()
await accessHandler({method:'POST',url:'/api/accesos?action=revoke',headers:admin,body:{sha:accessSha,propietarioId:ownerKey('teacher-sub')}},res)
assert.equal(res.code,200)
res=response()
await teacherHandler({method:'POST',url:'/api/profesores?action=save',headers:staff,body:{sha:profileSha,id:own,profesor:profile}},res)
assert.equal(res.code,403)
res=response()
await newsHandler({method:'POST',url:'/api/equipo?action=upload',headers:staff,body:{content:'fake'}},res)
assert.equal(res.code,403)
res=response()
await accessHandler({method:'POST',url:'/api/accesos?action=request',headers:{...other,origin:'https://evil.example'},body:{nombre:'Otro'}},res)
assert.equal(res.code,403)
res=response()
await accessHandler({method:'GET',url:'/api/accesos?action=session',headers:other},res)
assert.equal(res.body.user.rol,'solicitante')
assert(!JSON.stringify(res.body).includes('teacher@gmail.com'))
console.log('OK: solicitudes cifradas, identidad verificada, aprobación administrativa, perfil propio, rechazo de cambios ajenos y revocación inmediata.')
