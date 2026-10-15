import { useState } from 'react'
import { Container } from 'react-bootstrap'
import logoAlcaldia from '../../assets/images/sitios/alcaldia1.png'
import gobernacion from '../../assets/images/sitios/gobernacion.png'
import humano from '../../assets/images/sitios/humanoenlinea.png'
import icbf from '../../assets/images/sitios/icbf.jpg'
import Ministerio from '../../assets/images/sitios/ministerio.png'
import sena1 from '../../assets/images/sitios/Sena1.jpg'
import './SitiosInteres.css'

const sitios = [
  { nombre: 'Alcaldía de Valledupar', url: 'https://www.semvalledupar.gov.co/', imagen: logoAlcaldia, descripcion: 'Portal oficial del municipio' },
  { nombre: 'Secretaría de Educación', url: 'https://www.mineducacion.gov.co/portal/', imagen: Ministerio, descripcion: 'Dirección de educación departamental' },
  { nombre: 'Humano en Línea', url: 'https://rrhh.gestionsecretariasdeeducacion.gov.co/humanoEL/Ingresar.aspx?Ent=Valledupar', imagen: humano, descripcion: 'Desprendibles de pagos y más' },
  { nombre: 'ICBF', url: 'https://www.icbf.gov.co/', imagen: icbf, descripcion: 'Bienestar familiar' },
  { nombre: 'Gobernación del Cesar', url: 'https://www.educacion.cesar.gov.co/index.php/es/', imagen: gobernacion, descripcion: 'Secretaría de Educación Departamental' },
  { nombre: 'SENA', url: 'https://betowa.sena.edu.co/', imagen: sena1, descripcion: 'Formación técnica y laboral' },
]

const SitiosInteres = () => {
  const [paused, setPaused] = useState(false)
  return (
    <section className="interes-section" aria-labelledby="interes-title">
      <Container>
        <h2 id="interes-title" className="interes-title">Sitios de interés</h2>
        <p className="interes-description">Accede a los portales y servicios de nuestras entidades aliadas.</p>
        <div id="interes-logos" className={`interes-marquee${paused ? ' interes-marquee--paused' : ''}`}
          role="region" aria-label="Enlaces a sitios de interés">
          <div className="interes-track">
            {[false, true].map(copy => (
              <div className="interes-group" key={String(copy)} aria-hidden={copy ? true : undefined}>
                {sitios.map(sitio => (
                  <a className="interes-link" href={sitio.url} key={sitio.nombre}
                    target="_blank" rel="noopener noreferrer" tabIndex={copy ? -1 : 0}
                    aria-label={sitio.nombre + ' (abre en una nueva pestaña)'}
                    title={sitio.nombre + ' · ' + sitio.descripcion}>
                    <img src={sitio.imagen} alt="" decoding="async" loading="lazy" />
                    <span>{sitio.nombre}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="interes-controls">
          <button type="button" className="interes-pause" aria-controls="interes-logos"
            aria-pressed={paused} onClick={() => setPaused(!paused)}>
            {paused ? 'Reanudar movimiento' : 'Pausar movimiento'}
          </button>
        </div>
      </Container>
    </section>
  )
}
export default SitiosInteres
