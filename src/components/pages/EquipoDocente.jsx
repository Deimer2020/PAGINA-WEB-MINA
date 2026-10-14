import { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import data from '../../content/profesores.json'
import './EquipoDocente.css'

const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

function FotoDocente({ profesor }) {
  const [failed, setFailed] = useState(false)
  const initials = profesor.nombre.trim().split(/\s+/).filter(Boolean).slice(0, 2).map(word => word[0]).join('').toUpperCase()
  return (
    <div className="docente-foto">
      {profesor.foto && !failed
        ? <img src={profesor.foto} alt={profesor.nombre} loading="lazy" onError={() => setFailed(true)} />
        : <span aria-label="Perfil sin fotografía">{initials}</span>}
    </div>
  )
}
export default function EquipoDocente() {
  const [query, setQuery] = useState('')
  const [bounds, setBounds] = useState({ start: true, end: true })
  const carousel = useRef(null)
  const profesores = data.profesores.filter(profile => profile.publicado === true)
    .sort((a, b) => a.orden - b.orden || a.nombre.localeCompare(b.nombre, 'es'))
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean)
  const filtered = profesores.filter(profile => {
    const text = normalize(profile.nombre + ' ' + profile.area + ' ' + profile.cargo)
    return terms.every(term => text.includes(term))
  })

  useEffect(() => {
    const node = carousel.current
    if (!node) return
    node.scrollLeft = 0
    const update = () => setBounds({
      start: node.scrollLeft <= 2,
      end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 2,
    })
    update()
    node.addEventListener('scroll', update, { passive: true })
    const resize = new ResizeObserver(update)
    resize.observe(node)
    return () => { node.removeEventListener('scroll', update); resize.disconnect() }
  }, [query])

  const move = direction => {
    const node = carousel.current
    if (!node) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    node.scrollBy({ left: direction * node.clientWidth, behavior: reduced ? 'instant' : 'smooth' })
  }

  return (
    <main className="docentes-page">
      <Container>
        <header className="docentes-heading">
          <p className="docentes-eyebrow">Institución Educativa Agrícola La Mina</p>
          <h1>Equipo docente</h1>
          <p>Conoce a las personas que acompañan la formación de nuestra comunidad educativa.</p>
        </header>
        {profesores.length === 0
          ? <p className="docentes-empty">Próximamente compartiremos los perfiles de nuestro equipo docente.</p>
          : <>
            <div className="docentes-search">
              <label htmlFor="buscar-docente">Buscar por nombre o asignatura</label>
              <div className="docentes-search-row">
                <input id="buscar-docente" type="search" value={query}
                  onChange={event => setQuery(event.target.value)} placeholder="Nombre, asignatura o cargo" />
                {query && <button type="button" onClick={() => setQuery('')}>Limpiar búsqueda</button>}
              </div>
              <p role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'perfil encontrado' : 'perfiles encontrados'}</p>
            </div>
            {filtered.length === 0
              ? <p className="docentes-empty">No encontramos profesores con esa búsqueda. Prueba con otro nombre o asignatura.</p>
              : <>
                <div ref={carousel} id="docentes-carrusel" className="docentes-carousel"
                  role="region" aria-label="Tarjetas del equipo docente" tabIndex={0}>
                  {filtered.map(profesor => (
                    <article className="docente-card" key={profesor.id}>
                      <FotoDocente profesor={profesor} />
                      <div className="docente-info">
                        <h2>{profesor.nombre}</h2>
                        <p className="docente-cargo">{profesor.cargo}</p>
                        {profesor.area && <p className="docente-area">{profesor.area}</p>}
                        {profesor.presentacion && <p className="docente-presentacion">{profesor.presentacion}</p>}
                        {profesor.correo && <a className="docente-correo" href={'mailto:' + encodeURIComponent(profesor.correo)}
                          aria-label={'Escribir a ' + profesor.nombre}>{profesor.correo}</a>}
                      </div>
                    </article>
                  ))}
                </div>
                {filtered.length > 1 && <div className="docentes-controls">
                  <button type="button" onClick={() => move(-1)} disabled={bounds.start}
                    aria-controls="docentes-carrusel" aria-label="Ver profesores anteriores">← Anteriores</button>
                  <span>Desliza las tarjetas o usa las flechas</span>
                  <button type="button" onClick={() => move(1)} disabled={bounds.end}
                    aria-controls="docentes-carrusel" aria-label="Ver siguientes profesores">Siguientes →</button>
                </div>}
              </>}
          </>}
      </Container>
    </main>
  )
}
