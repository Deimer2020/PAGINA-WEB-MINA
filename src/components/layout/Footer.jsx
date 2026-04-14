// src/components/layout/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import escudo from '../../assets/images/ESCUDOMINA.png'

const Footer = () => {
  const añoActual = new Date().getFullYear()

  return (
    <footer className="position-relative" style={{ 
      background: 'linear-gradient(135deg, #0a2b0e 0%, #0a1a0c 50%, #000000 100%)',
      color: 'rgba(255,255,255,0.85)',
      overflow: 'hidden',
      borderTopLeftRadius: '50px',
      borderTopRightRadius: '50px',
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      marginTop: '60px',
      marginBottom: '20px',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.3)'
    }}>
      
      {/* Decoración superior - onda */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        left: 0,
        right: 0,
        height: '40px',
        background: 'linear-gradient(135deg, #0a2b0e 0%, #000000 100%)',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%'
      }} />
      
      {/* Decoración inferior - onda */}
      <div style={{
        position: 'absolute',
        bottom: '-40px',
        left: 0,
        right: 0,
        height: '40px',
        background: 'linear-gradient(135deg, #0a2b0e 0%, #000000 100%)',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%'
      }} />
      
      {/* Escudo de fondo */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '450px',
        backgroundImage: `url(${escudo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.05,
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))'
      }} />
      
      <Container style={{ position: 'relative', zIndex: 1, paddingTop: '50px', paddingBottom: '40px' }}>
        <Row className="gy-5">
          
          {/* Columna 1 - Logo e institución */}
          <Col lg={3} md={6}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '50%',
                padding: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={escudo} 
                  alt="Escudo" 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    objectFit: 'contain'
                  }} 
                />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'white', letterSpacing: '-0.5px' }}>
                  I.E. Agrícola
                </div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>La Mina</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '0.8rem', opacity: 0.8 }}>
              Formar y Educar
            </p>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '30px',
              padding: '6px 18px',
              fontSize: '0.7rem',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              Resolución No. 001105-10-XI-2014
            </div>
          </Col>

          {/* Columna 2 - Explorar */}
          <Col lg={3} md={6}>
            <div style={{ 
              fontSize: '0.7rem', 
              fontWeight: '700', 
              letterSpacing: '2px', 
              marginBottom: '1.2rem',
              color: '#A5D6A7'
            }}>
              EXPLORAR
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/" className="footer-link" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.85rem', transition: 'all 0.3s ease' }}>
                  Inicio
                </Link>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/nosotros" className="footer-link" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.85rem', transition: 'all 0.3s ease' }}>
                  Nosotros
                </Link>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/gobierno-escolar" className="footer-link" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.85rem', transition: 'all 0.3s ease' }}>
                  Gobierno Escolar
                </Link>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/perfiles" className="footer-link" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.85rem', transition: 'all 0.3s ease' }}>
                  Perfiles
                </Link>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <a href="/documentos/manual-de-convivencia.pdf" className="footer-link" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.85rem', transition: 'all 0.3s ease' }}>
                  Manual de Convivencia
                </a>
              </li>
            </ul>
          </Col>

          {/* Columna 3 - Contacto */}
          <Col lg={3} md={6}>
            <div style={{ 
              fontSize: '0.7rem', 
              fontWeight: '700', 
              letterSpacing: '2px', 
              marginBottom: '1.2rem',
              color: '#A5D6A7'
            }}>
              CONTACTO
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <i className="bi bi-geo-alt-fill" style={{ color: '#A5D6A7', fontSize: '0.9rem' }}></i>
                <span>Resguardo Kankuamo, La Mina - Cesar</span>
              </li>
              <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <i className="bi bi-telephone-fill" style={{ color: '#A5D6A7', fontSize: '0.9rem' }}></i>
                <span>(605) 123 4567</span>
              </li>
              <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <i className="bi bi-envelope-fill" style={{ color: '#A5D6A7', fontSize: '0.9rem' }}></i>
                <span>contacto@ieagricolalamina.edu.co</span>
              </li>
              <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <i className="bi bi-clock-fill" style={{ color: '#A5D6A7', fontSize: '0.9rem' }}></i>
                <span>Lun a Vie: 7:00 AM - 3:00 PM</span>
              </li>
            </ul>
          </Col>

          {/* Columna 4 - Legal */}
          <Col lg={3} md={6}>
            <div style={{ 
              fontSize: '0.7rem', 
              fontWeight: '700', 
              letterSpacing: '2px', 
              marginBottom: '1.2rem',
              color: '#A5D6A7'
            }}>
              LEGAL
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem', fontSize: '0.85rem' }}>Nit: 824.000.809</li>
              <li style={{ marginBottom: '0.5rem', fontSize: '0.85rem' }}>DANE: 220001066820</li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" className="footer-link" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.85rem' }}>
                  Términos y condiciones
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" className="footer-link" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.85rem' }}>
                  Política de privacidad
                </a>
              </li>
            </ul>
            
            {/* Redes sociales con efecto vidrio */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '20px',
              padding: '10px 15px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '40px',
              backdropFilter: 'blur(10px)',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <a href="#" className="social-icon" style={{ color: 'white', opacity: 0.7, transition: 'all 0.3s ease' }}><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="social-icon" style={{ color: 'white', opacity: 0.7, transition: 'all 0.3s ease' }}><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="social-icon" style={{ color: 'white', opacity: 0.7, transition: 'all 0.3s ease' }}><i className="bi bi-twitter-x fs-5"></i></a>
              <a href="#" className="social-icon" style={{ color: 'white', opacity: 0.7, transition: 'all 0.3s ease' }}><i className="bi bi-youtube fs-5"></i></a>
            </div>
          </Col>
        </Row>

        {/* Línea divisoria decorativa */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(165, 214, 167, 0.2), transparent)',
          margin: '30px 0 20px'
        }} />
        
        {/* Copyright */}
        <div className="text-center">
          <p className="small mb-0" style={{ opacity: 0.6, fontSize: '0.75rem' }}>
            © {añoActual} Institución Educativa Agrícola La Mina - Todos los derechos reservados.
          </p>
        </div>
      </Container>

      {/* Estilos adicionales */}
      <style>{`
        .footer-link {
          display: inline-block;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #A5D6A7 !important;
          transform: translateX(5px);
        }
        .social-icon {
          display: inline-block;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          opacity: 1 !important;
          transform: translateY(-3px);
          color: #A5D6A7 !important;
        }
      `}</style>
    </footer>
  )
}

export default Footer