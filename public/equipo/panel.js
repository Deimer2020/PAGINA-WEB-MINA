const $ = id => document.getElementById(id)
let current = null
let noticias = []
let dirty = false
let busy = false
function status(message, error = false) { $('status').textContent = message; $('status').className = error ? 'error' : '' }
async function api(action, body) {
  const response = await fetch('/api/equipo?action=' + action, {
    method: body ? 'POST' : 'GET', credentials: 'same-origin',
    ...(body ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}),
  })
  const data = await response.json()
  if (!response.ok) {
    if (response.status === 401) { $('login').hidden = false; $('listing').hidden = true; $('editor').hidden = true }
    throw new Error(data.error || 'No se pudo completar la operación.')
  }
  return data
}
function make(tag, text) { const element = document.createElement(tag); element.textContent = text; return element }
async function load() {
  const data = await api('list')
  noticias = data.noticias
  $('news').replaceChildren()
  for (const noticia of noticias) {
    const row = make('div', ''); row.className = 'news'
    const text = make('div', '')
    text.append(make('strong', noticia.titulo), make('p', noticia.fecha + ' · ' + (noticia.publicada === false ? 'Borrador / oculta' : 'Publicada')))
    const button = make('button', 'Editar'); button.className = 'secondary'; button.onclick = () => edit(noticia)
    row.append(text, button); $('news').append(row)
  }
  if (!noticias.length) $('news').append(make('p', 'Todavía no hay novedades.'))
  $('listing').hidden = false
}
function renderGallery() {
  $('gallery').replaceChildren()
  current.galeria.forEach((foto, index) => {
    const box = make('div', ''); box.className = 'gallery-item'
    const image = document.createElement('img'); image.className = 'preview'; image.src = foto.src; image.alt = foto.alt || ''
    const label = make('label', 'Descripción de la foto ' + (index + 1)); label.htmlFor = 'foto-' + index
    const description = document.createElement('input'); description.id = 'foto-' + index; description.value = foto.alt || ''; description.maxLength = 300
    description.oninput = () => { foto.alt = description.value; dirty = true }
    const remove = make('button', 'Quitar foto'); remove.type = 'button'; remove.className = 'secondary'
    remove.onclick = () => { current.galeria.splice(index, 1); dirty = true; renderGallery() }
    box.append(image, label, description, remove); $('gallery').append(box)
  })
}
function edit(noticia) {
  if (busy) return
  current = structuredClone(noticia || { titulo: '', fechaPublicacion: new Date(Date.now() - 5 * 3600000).toISOString().slice(0, 10),
    fecha: '', descripcion: '', imagen: '', imagenAlt: '', contenido: '', galeria: [], orden: 100,
    etiqueta: '', color: '#2E7D32', publicada: false, destacado: false, imagenCompleta: false })
  current.galeria ||= []
  $('editorTitle').textContent = noticia ? 'Editar novedad' : 'Crear novedad'
  for (const name of ['titulo','fechaPublicacion','fecha','descripcion','imagenAlt','contenido','orden','etiqueta','color']) $(name).value = current[name] ?? ''
  for (const name of ['publicada','destacado','imagenCompleta']) $(name).checked = current[name] === true
  $('coverPreview').hidden = !current.imagen
  $('coverPreview').src = current.imagen || ''
  $('legacyHint').hidden = !current.legacyTipo
  $('coverUpload').value = ''; $('galleryUpload').value = ''
  renderGallery(); dirty = false
  $('listing').hidden = true; $('editor').hidden = false; status('')
}
function setBusy(value) {
  busy = value
  $('form').querySelectorAll('input,textarea,button').forEach(element => { element.disabled = value })
}
async function upload(file, gallery) {
  if (!file) return
  if (file.size > 2097152 || !['image/jpeg','image/png','image/webp'].includes(file.type)) return status('Selecciona una foto JPG, PNG o WebP de hasta 2 MB.', true)
  if (gallery && current.galeria.length >= 40) return status('Máximo 40 fotos en la galería.', true)
  setBusy(true); status('Subiendo foto…')
  try {
    const content = await new Promise((resolve, reject) => {
      const reader = new FileReader(); reader.onload = () => resolve(reader.result.split(',')[1]); reader.onerror = reject; reader.readAsDataURL(file)
    })
    const result = await api('upload', { content })
    if (gallery) { current.galeria.push({ src: result.src, alt: '' }); renderGallery() }
    else { current.imagen = result.src; $('coverPreview').src = URL.createObjectURL(file); $('coverPreview').hidden = false }
    dirty = true; status('Foto subida. Guarda la noticia para incluirla.')
  } catch (error) { status(error.message, true) } finally { setBusy(false) }
}
$('coverUpload').onchange = event => upload(event.target.files[0], false)
$('galleryUpload').onchange = event => upload(event.target.files[0], true)
$('form').oninput = () => { dirty = true }
$('form').onsubmit = async event => {
  event.preventDefault()
  if (busy) return
  if (!current.imagen) return status('Selecciona una imagen de portada.', true)
  for (const name of ['titulo','fechaPublicacion','fecha','descripcion','imagenAlt','contenido','etiqueta','color']) current[name] = $(name).value
  current.orden = Number($('orden').value)
  for (const name of ['publicada','destacado','imagenCompleta']) current[name] = $(name).checked
  setBusy(true); status('Guardando novedad…')
  try {
    const result = await api('save', { id: current.id, sha: current.sha, noticia: current })
    current = { ...result.noticia, id: result.id, sha: result.sha }; dirty = false
    status(current.publicada ? 'Cambios guardados. La web se actualizará cuando termine el despliegue.' : 'Borrador guardado. Esta noticia no aparecerá en la web.')
  } catch (error) { status(error.message, true) } finally { setBusy(false) }
}
$('create').onclick = () => edit()
$('back').onclick = async () => {
  if (busy || (dirty && !confirm('Hay cambios sin guardar. ¿Volver al listado?'))) return
  try { await load(); $('editor').hidden = true; dirty = false; status('') } catch (error) { status(error.message, true) }
}
$('refresh').onclick = async () => { try { await load(); status('Listado actualizado.') } catch (error) { status(error.message, true) } }
$('logout').onclick = async () => {
  if (dirty && !confirm('Hay cambios sin guardar. ¿Cerrar sesión?')) return
  try { await api('logout', {}); dirty = false; location.reload() } catch (error) { status(error.message, true) }
}
window.addEventListener('beforeunload', event => { if (dirty || busy) { event.preventDefault(); event.returnValue = '' } })
async function start() {
  const errors = { sesion: 'La sesión de acceso venció. Intenta entrar nuevamente.', cancelado: 'El acceso con Google fue cancelado.',
    google: 'No se pudo completar el acceso con Google.', permiso: 'Tu correo no está autorizado. Contacta al administrador de la institución.' }
  const reason = new URLSearchParams(location.search).get('error')
  try {
    const { user } = await api('session'); $('identity').textContent = user.email
    status('Cargando novedades…'); await load(); status('')
  } catch (error) { $('login').hidden = false; status(errors[reason] || error.message, true) }
  if (reason) history.replaceState(null, '', location.pathname)
}
start()
