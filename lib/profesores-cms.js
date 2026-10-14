import { safeImage } from './equipo-cms.js'

export const TEACHERS_PATH = 'src/content/profesores.json'
export function normalizeTeacher(input, email) {
  if (!input || typeof input !== 'object') throw Object.assign(new Error('Falta el perfil.'), { status: 400 })
  const field = (name, max, required = false) => {
    const value = input[name]
    if (typeof value !== 'string' || value.length > max || (required && !value.trim())) {
      throw Object.assign(new Error('Revisa el campo ' + name + '.'), { status: 400 })
    }
    return value.trim()
  }
  const profile = { nombre: field('nombre', 180, true), cargo: field('cargo', 180, true),
    area: field('area', 180), correo: field('correo', 254), foto: field('foto', 400),
    presentacion: field('presentacion', 1500) }
  if (profile.correo && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(profile.correo)) {
    throw Object.assign(new Error('Escribe un correo electrónico válido.'), { status: 400 })
  }
  if ((profile.foto && !safeImage(profile.foto)) || typeof input.publicado !== 'boolean'
    || !Number.isInteger(input.orden) || input.orden < 0 || input.orden > 10000) {
    throw Object.assign(new Error('Revisa la foto, el orden y el estado de publicación.'), { status: 400 })
  }
  return { ...profile, publicado: input.publicado, orden: input.orden,
    actualizadoPor: email, actualizadoEn: new Date().toISOString() }
}
