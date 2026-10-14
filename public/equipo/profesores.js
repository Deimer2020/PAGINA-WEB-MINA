const $ = id => document.getElementById(id)
let sha = ''
let current = null
let dirty = false
let busy = false
let role = ''
const textFields = ['nombre', 'cargo', 'area', 'correo', 'presentacion']
function status(message, error = false) { $('status').textContent = message; $('status').className = error ? 'error' : '' }
function element(tag, text) { const node = document.createElement(tag); node.textContent = text; return node }
async function api(action, body, endpoint = 'profesores') {
  const response = await fetch('/api/' + endpoint + '?action=' + action, { method: body ? 'POST' : 'GET',
    credentials: 'same-origin', ...(body ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}) })
  const data = await response.json()
  if (!response.ok) {
    if (response.status === 401) { $('login').hidden = false; $('listing').hidden = true; $('editor').hidden = true }
    throw new Error(data.error || 'No se pudo completar la operación.')
  }
  return data
}
function setBusy(value) { busy = value; document.querySelectorAll('button,input,textarea,select').forEach(node => { node.disabled = value }) }
async function load() {
  const data = await api('list'); sha = data.sha
  $('profiles').replaceChildren()
  data.profesores.sort((a, b) => a.orden - b.orden || a.nombre.localeCompare(b.nombre, 'es')).forEach(profile => {
    const row = element('div', ''); row.className = 'profile'
    const copy = element('div', ''); copy.append(element('strong', profile.nombre), element('p', profile.cargo + ' · ' + (profile.publicado ? 'Publicado' : 'Oculto / borrador')))
    const button = element('button', 'Editar'); button.className = 'secondary'; button.onclick = () => edit(profile)
    row.append(copy, button); $('profiles').append(row)
  })
  if (!data.profesores.length) $('profiles').append(element('p', 'Todavía no hay perfiles. Añade al primer profesor.'))
  $('create').hidden = role !== 'admin' && data.profesores.length > 0
  $('listing').hidden = false
}
function preview(src) {
  $('fotoPreview').hidden = !src; $('fotoPreview').src = src || ''; $('removePhoto').hidden = !src
}
function edit(profile) {
  if (busy) return
  current = structuredClone(profile || { nombre: '', cargo: '', area: '', correo: '', foto: '', presentacion: '', orden: 100, publicado: false })
  textFields.forEach(name => { $(name).value = current[name] || '' })
  $('propietarioId').value = current.propietarioId || ''
  $('orden').hidden = role !== 'admin'; $('orden').previousElementSibling.hidden = role !== 'admin'
  $('orden').value = current.orden; $('publicado').checked = current.publicado === true
  $('editorTitle').textContent = profile ? 'Editar profesor' : 'Añadir profesor'
  $('delete').hidden = !current.id || current.publicado !== false
  $('fotoUpload').value = ''; preview(current.foto); dirty = false
  $('listing').hidden = true; $('editor').hidden = false; status('')
}
$('form').oninput = () => { dirty = true }
$('fotoUpload').onchange = async event => {
  const file = event.target.files[0]
  if (!file) return
  if (file.size > 2097152 || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return status('Selecciona una foto JPG, PNG o WebP de hasta 2 MB.', true)
  setBusy(true); status('Subiendo foto…')
  try {
    const content = await new Promise((resolve, reject) => {
      const reader = new FileReader(); reader.onload = () => resolve(reader.result.split(',')[1]); reader.onerror = reject; reader.readAsDataURL(file)
    })
    const data = await api('upload', { content }, 'equipo')
    current.foto = data.src; dirty = true; preview(URL.createObjectURL(file))
    status('Foto subida. Guarda el perfil para incluirla.')
  } catch (error) { status(error.message, true) } finally { setBusy(false) }
}
$('removePhoto').onclick = () => { current.foto = ''; $('fotoUpload').value = ''; dirty = true; preview('') }
$('form').onsubmit = async event => {
  event.preventDefault(); if (busy) return
  textFields.forEach(name => { current[name] = $(name).value })
  current.orden = Number($('orden').value); current.publicado = $('publicado').checked
  setBusy(true); status('Guardando perfil…')
  try {
    const data = await api('save', { sha, id: current.id, profesor: current, ...(role === 'admin' ? { propietarioId: $('propietarioId').value } : {}) })
    sha = data.sha; current = data.profesor; dirty = false
    $('editorTitle').textContent = 'Editar profesor'; $('delete').hidden = current.publicado !== false
    status(current.publicado ? 'Perfil guardado. Aparecerá en la web cuando termine el despliegue.' : 'Perfil guardado como borrador. No aparecerá en la web.')
  } catch (error) { status(error.message, true) } finally { setBusy(false) }
}
$('delete').onclick = async () => {
  if (busy || !confirm('¿Eliminar definitivamente este perfil oculto? No se puede deshacer desde el panel.')) return
  setBusy(true); status('Eliminando perfil…')
  let deleted = false
  try {
    await api('delete', { sha, id: current.id }); deleted = true; current = null; dirty = false
    $('editor').hidden = true; await load(); status('Perfil eliminado.')
  } catch (error) { status(deleted ? 'El perfil se eliminó. Actualiza el listado para recargarlo.' : error.message, true) } finally { setBusy(false) }
}
$('create').onclick = () => edit()
$('back').onclick = async () => {
  if (busy || (dirty && !confirm('¿Volver al listado y descartar los cambios sin guardar?'))) return
  setBusy(true)
  try { await load(); $('editor').hidden = true; dirty = false; status('') } catch (error) { status(error.message, true) } finally { setBusy(false) }
}
$('refresh').onclick = async () => {
  if (busy) return; setBusy(true)
  try { await load(); status('Listado actualizado.') } catch (error) { status(error.message, true) } finally { setBusy(false) }
}
window.addEventListener('beforeunload', event => { if (dirty || busy) { event.preventDefault(); event.returnValue = '' } })
async function start() {
  try {
    const session = await api('session', undefined, 'accesos')
    role = session.user.rol
    if (role === 'solicitante') { location.replace('/equipo/acceso.html'); return }
    $('identity').textContent = session.user.email
    $('ownerField').hidden = role !== 'admin'
    if (role === 'admin') {
      const permissions = await api('list', undefined, 'accesos')
      for (const user of permissions.usuarios.filter(item => item.estado === 'aprobado')) {
        const option = element('option', user.nombre + ' · ' + user.email)
        option.value = user.propietarioId; $('propietarioId').append(option)
      }
    } else {
      document.querySelector('nav a[href="/equipo/"]').hidden = true
    }
    await load()
  } catch (error) { status(error.message, true) }
}
start()
