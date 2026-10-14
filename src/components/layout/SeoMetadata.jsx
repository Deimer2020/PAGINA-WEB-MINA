import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const base = 'https://ieagricolalamina.edu.co'
const pages = {
  '/': ['Institución Educativa Agrícola La Mina | Cesar', 'Sitio oficial de la Institución Educativa Agrícola La Mina, en Cesar. Conoce nuestras novedades, programas educativos, historia y equipo docente.'],
  '/nosotros': ['Nosotros | I.E. Agrícola La Mina', 'Conoce la historia, misión, visión, símbolos y principios de la Institución Educativa Agrícola La Mina, en Cesar.'],
  '/equipo-docente': ['Equipo docente | I.E. Agrícola La Mina', 'Conoce al equipo docente de la Institución Educativa Agrícola La Mina: profesores, cargos, asignaturas y correos de contacto.'],
  '/gobierno-escolar': ['Gobierno escolar | I.E. Agrícola La Mina', 'Conoce el gobierno escolar y la participación de la comunidad educativa de la Institución Educativa Agrícola La Mina.'],
  '/perfiles': ['Perfiles institucionales | I.E. Agrícola La Mina', 'Consulta los perfiles institucionales de la Institución Educativa Agrícola La Mina.'],
}
function meta(attribute, name, value) {
  let node = document.head.querySelector('meta[' + attribute + '="' + name + '"]')
  if (!node) { node = document.createElement('meta'); node.setAttribute(attribute, name); document.head.append(node) }
  node.setAttribute('content', value)
}
export default function SeoMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const path = pathname.toLowerCase().replace(/\/$/, '') || '/'
    const page = pages[path]
    const [title, description] = page || ['Página no encontrada | I.E. Agrícola La Mina', 'La página solicitada no está disponible.']
    document.title = title
    meta('name', 'description', description)
    meta('name', 'robots', page ? 'index, follow' : 'noindex, follow')
    meta('property', 'og:title', title)
    meta('property', 'og:description', description)
    meta('property', 'og:url', base + (path === '/' ? '/' : path))
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
    canonical.href = base + (path === '/' ? '/' : path)
  }, [pathname])
  return null
}
