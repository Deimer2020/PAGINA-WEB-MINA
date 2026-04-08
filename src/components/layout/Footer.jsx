// src/components/layout/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const añoActual = new Date().getFullYear()

  return (
    <footer className="bg-success text-white pt-5 pb-4" style={{ backgroundColor: '#1B5E20' }}>
      <Container>
        <Row className="gy-4">
          {/* Columna 1 - Institución */}
          <Col lg={4} md={6}>
            <div className="mb-3">
              <h3 className="h4 mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: '600' }}>
                I.E. Agrícola La Mina
              </h3>
              <p className="mb-2 small text-white-50">
                Formando líderes del campo con innovación y tradición.
              </p>
              <p className="mb-0 small text-white-50">
                Resolución de aprobación No. 001105-10-XI-2014
              </p>
            </div>
          </Col>

          {/* Columna 2 - Información de contacto */}
          <Col lg={4} md={6}>
            <h5 className="h6 mb-3 text-uppercase fw-semibold" style={{ letterSpacing: '1px' }}>Contacto</h5>
            <div className="mb-2 d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-2 text-white-50"></i>
              <span className="small text-white-50">Resguardo Indígena Kankuamo<br />La Mina - Cesar, Colombia</span>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <i className="bi bi-telephone-fill me-2 text-white-50"></i>
              <span className="small text-white-50">(605) 123 4567</span>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <i className="bi bi-envelope-fill me-2 text-white-50"></i>
              <span className="small text-white-50">contacto@ieagricolalamina.edu.co</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-clock-fill me-2 text-white-50"></i>
              <span className="small text-white-50">Lunes a viernes: 7:00 AM - 3:00 PM</span>
            </div>
          </Col>

          {/* Columna 3 - Accesos directos */}
          <Col lg={4} md={12}>
            <h5 className="h6 mb-3 text-uppercase fw-semibold" style={{ letterSpacing: '1px' }}>Accesos</h5>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Link to="/" className="text-white text-decoration-none small text-white-50 hover-link">Inicio</Link>
              <Link to="/nosotros" className="text-white text-decoration-none small text-white-50 hover-link">Nosotros</Link>
              <Link to="/gobierno-escolar" className="text-white text-decoration-none small text-white-50 hover-link">Gobierno Escolar</Link>
              <Link to="/perfiles" className="text-white text-decoration-none small text-white-50 hover-link">Perfiles</Link>
              <a href="/documentos/manual-de-convivencia.pdf" className="text-white text-decoration-none small text-white-50 hover-link">Manual de Convivencia</a>
            </div>
            <div className="mt-3 pt-2">
              <h5 className="h6 mb-3 text-uppercase fw-semibold" style={{ letterSpacing: '1px' }}>Legal</h5>
              <div className="d-flex flex-wrap gap-3">
                <span className="small text-white-50">Nit: 824.000.809</span>
                <span className="small text-white-50">DANE: 220001066820</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Línea divisoria y copyright */}
        <hr className="my-4 bg-white opacity-25" />
        <div className="text-center">
          <p className="small text-white-50 mb-0">
            © {añoActual} Institución Educativa Agrícola La Mina - Todos los derechos reservados.
          </p>
        </div>
      </Container>

      {/* Estilos adicionales */}
      <style>{`
        .hover-link {
          transition: all 0.2s ease;
        }
        .hover-link:hover {
          opacity: 1 !important;
          text-decoration: underline !important;
          color: white !important;
        }
        .text-white-50 {
          color: rgba(255, 255, 255, 0.7) !important;
        }
      `}</style>
    </footer>
  )
}

export default Footer