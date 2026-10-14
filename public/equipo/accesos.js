const $ = id => document.getElementById(id)
let sha = ''
let busy = false
function status(text, error = false) { $('status').textContent = text; $('status').className = error ? 'error' : '' }
function make(tag, text) { const node = document.createElement(tag); node.textContent = text; return node }
async function api(action, body) {
  const response = await fetch('/api/accesos?action=' + action, { credentials: 'same-origin', method: body ? 'POST' : 'GET',
    ...(body ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}) })
  const data = await response.json()
  if (!response.ok) throw new Error(data.error || 'No se pudo completar la operación.')
  return data
}
function lock(value) { busy = value; document.querySelectorAll('button,input').forEach(node => { node.disabled = value }) }
async function adminList() {
  const data = await api('list'); sha = data.sha; $('requests').replaceChildren()
  for (const record of data.usuarios) {
    const row = make('div', ''); row.className = 'profile'
    const info = make('div', ''); info.append(make('strong', record.nombre), make('p', record.email + ' · ' + record.estado))
    const actions = make('div', ''); actions.className = 'actions'
    const options = record.estado === 'aprobado' ? [['revoke', 'Retirar acceso']] : [['approve', 'Aprobar'], ['reject', 'Rechazar']]
    for (const [action, label] of options) {
      const button = make('button', label); button.className = action === 'approve' ? '' : 'secondary'
      button.onclick = async () => {
        if (busy || !confirm(label + ' para ' + record.email + '?')) return
        lock(true)
        try { await api(action, { sha, propietarioId: record.propietarioId }); await adminList(); status('Acceso actualizado.') }
        catch (error) { status(error.message, true) } finally { lock(false) }
      }
      actions.append(button)
    }
    row.append(info, actions); $('requests').append(row)
  }
  if (!data.usuarios.length) $('requests').append(make('p', 'Todavía no hay solicitudes.'))
}
async function load() {
  const { user } = await api('session'); $('identity').textContent = user.email; $('login').hidden = true
  if (user.rol === 'admin') { $('admin').hidden = false; $('request').hidden = true; await adminList(); return }
  $('request').hidden = false
  const approved = user.rol === 'profesor'
  $('myProfile').hidden = !approved
  $('requestForm').hidden = user.estado !== 'sin-solicitud'
  $('state').textContent = approved ? 'Tu solicitud fue aprobada. Ya puedes administrar tu perfil.' : {
    'sin-solicitud': 'Envía tu nombre para solicitar acceso con este correo.',
    pendiente: 'Tu solicitud está pendiente de aprobación.',
    rechazado: 'Tu solicitud fue rechazada. Contacta al administrador.',
    revocado: 'Tu acceso fue retirado. Contacta al administrador.',
  }[user.estado]
}
$('requestForm').onsubmit = async event => {
  event.preventDefault(); if (busy) return; lock(true)
  try { await api('request', { nombre: $('nombre').value }); await load(); status('Solicitud registrada.') }
  catch (error) { status(error.message, true) } finally { lock(false) }
}
for (const id of ['refresh', 'reload']) $(id).onclick = async () => {
  if (busy) return; lock(true)
  try { await load(); status('Estado actualizado.') } catch (error) { status(error.message, true) } finally { lock(false) }
}
$('logout').onclick = async () => {
  const response = await fetch('/api/equipo?action=logout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' })
  if (response.ok) location.reload(); else status('No se pudo cerrar la sesión.', true)
}
load().catch(error => { $('login').hidden = true; if (error.message === 'Inicia sesión con Google.') $('login').hidden = false; else status(error.message, true) })
