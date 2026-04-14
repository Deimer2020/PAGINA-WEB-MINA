// src/components/sections/SitiosInteres.jsx
import { Container, Row, Col } from 'react-bootstrap'

// Importar imágenes de los logos
import logoAlcaldia from '../../assets/images/sitios/alcaldia1.png'
import gobernacion from '../../assets/images/sitios/gobernacion.png'
import humano from '../../assets/images/sitios/humanoenlinea.png'
import icbf from '../../assets/images/sitios/icbf.jpg'
import Ministerio from '../../assets/images/sitios/ministerio.png'
import sena1 from '../../assets/images/sitios/sena1.jpg'

const SitiosInteres = () => {
  const sitios = [
    { nombre: 'Alcaldía de Valledupar', url: 'https://www.semvalledupar.gov.co/', imagen: logoAlcaldia, descripcion: 'Portal oficial del municipio', color: '#2E7D32' },
    { nombre: 'Secretaría de Educación', url: 'https://www.mineducacion.gov.co/portal/', imagen: Ministerio, descripcion: 'Dirección de educación departamental', color: '#2196F3' },
    { nombre: 'Humano en Línea', url: 'https://rrhh.gestionsecretariasdeeducacion.gov.co/humanoEL/Ingresar.aspx?Ent=Valledupar', imagen: humano, descripcion: 'Desprendibles de pagos y más', color: '#FF9800' },
    { nombre: 'ICBF', url: 'https://www.icbf.gov.co/', imagen: icbf, descripcion: 'Bienestar familiar', color: '#E91E63' },
    { nombre: 'Gobernación del Cesar', url: 'https://www.educacion.cesar.gov.co/index.php/es/', imagen: gobernacion, descripcion: 'Secretaría de Educación Departamental', color: '#00BCD4' },
    { nombre: 'SENA', url: 'https://betowa.sena.edu.co/', imagen: sena1, descripcion: 'Formación técnica y laboral', color: '#9C27B0' }
  ]

  const colores = ['#2E7D32', '#2196F3', '#FF9800', '#E91E63', '#00BCD4', '#9C27B0']

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem'
      }}>
        🌐 Sitios de interés
        <div style={{ width: '80px', height: '3px', background: '#2E7D32', margin: '15px auto 0', borderRadius: '2px' }} />
      </h2>

      <Row className="g-4">
        {sitios.map((sitio, index) => (
          <Col md={4} lg={2} key={index}>
            <a href={sitio.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="rounded-4 overflow-hidden h-100 shadow-sm" style={{
                transition: 'all 0.3s ease',
                background: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 30px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)'
              }}>
                {/* Borde superior colorido */}
                <div style={{ height: '5px', background: colores[index % colores.length] }} />
                <div className="p-4 text-center">
                  {/* Contenedor de imagen más grande */}
                  <div style={{ 
                    height: '130px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '15px',
                    background: '#F8F9FA',
                    borderRadius: '12px',
                    padding: '10px'
                  }}>
                    <img 
                      src={sitio.imagen} 
                      alt={sitio.nombre} 
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100px', 
                        objectFit: 'contain'
                      }} 
                    />
                  </div>
                  <h6 className="fw-bold mb-1" style={{ color: '#333', fontSize: '0.85rem' }}>{sitio.nombre}</h6>
                  <small className="text-muted" style={{ fontSize: '0.7rem' }}>{sitio.descripcion}</small>
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SitiosInteres