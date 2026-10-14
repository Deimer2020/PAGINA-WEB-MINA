import { useState } from 'react'
import { Container } from 'react-bootstrap'
import data from '../../content/profesores.json'
import './EquipoDocente.css'

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
  const profesores = data.profesores.filter(profile => profile.publicado === true)
    .sort((a, b) => a.orden - b.orden || a.nombre.localeCompare(b.nombre, 'es'))
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
          : <div className="docentes-grid">
            {profesores.map(profesor => (
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
          </div>}
      </Container>
    </main>
  )
}
