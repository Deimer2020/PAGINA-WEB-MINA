import { useState, useEffect } from 'react'
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import escudo from '../../assets/images/ESCUDOMINA.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Cambiar color del navbar
      setScrolled(currentScrollY > 50)
      
      // Ocultar/mostrar navbar al hacer scroll (solo después de 100px)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll hacia abajo - ocultar navbar
        setHidden(true)
      } else if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba - mostrar navbar
        setHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Función para desplazamiento suave a una sección
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 70
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  // Manejar clic en enlaces de la página principal
  const handleHomeLinkClick = (e, sectionId) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    } else {
      scrollToSection(sectionId)
    }
  }

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      style={{ 
        backgroundColor: scrolled ? 'white' : 'transparent',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        padding: scrolled ? '8px 0' : '12px 0',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        zIndex: 1000
      }}
    >
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div style={{
              backgroundColor: scrolled ? 'transparent' : 'rgba(255,255,255,0.15)',
              borderRadius: '50%',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={escudo} 
                alt="Escudo Institucional" 
                style={{ 
                  height: '50px', 
                  width: '50px',
                  filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                  transition: 'filter 0.3s ease'
                }}
              />
            </div>
            <div>
              <span style={{ 
                color: scrolled ? '#2E7D32' : 'white', 
                fontWeight: '600', 
                fontSize: scrolled ? '1.1rem' : '1rem',
                display: 'block',
                lineHeight: '1.2',
                transition: 'color 0.3s ease',
                fontFamily: "'Playfair Display', 'Georgia', serif",
                letterSpacing: '-0.01em'
              }}>
                INSTITUCION EDUCATIVA AGRICOLA LA MINA
              </span>
              <small style={{ 
                color: scrolled ? '#666' : 'rgba(255,255,255,0.9)', 
                fontSize: '0.65rem',
                display: 'block',
                transition: 'color 0.3s ease',
                fontFamily: "'Lato', sans-serif",
                fontWeight: '400',
                letterSpacing: '0.02em'
              }}>
                Formar y Educar
              </small>
            </div>
          </div>
        </Link>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Inicio - va a la página principal */}
            <Nav.Link 
              as={Link}
              to="/"
              style={{ 
                color: scrolled ? '#333' : 'white', 
                fontWeight: '500', 
                transition: 'color 0.3s ease',
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.9rem',
                margin: '0 5px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}>
              Inicio
            </Nav.Link>
            
            {/* Nosotros - va a la página independiente */}
            <Nav.Link 
              as={Link}
              to="/nosotros"
              style={{ 
                color: scrolled ? '#333' : 'white', 
                fontWeight: '500', 
                transition: 'color 0.3s ease',
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.9rem',
                margin: '0 5px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}>
              Nosotros
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/gobierno-escolar"
              style={{ 
                color: scrolled ? '#333' : 'white', 
                fontWeight: '500', 
                transition: 'color 0.3s ease',
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.9rem',
                margin: '0 5px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}>
              Gobierno Escolar
            </Nav.Link>
            
             <Nav.Link 
              as={Link}
              to="/perfiles"
              style={{ 
                color: scrolled ? '#333' : 'white', 
                fontWeight: '500', 
                transition: 'color 0.3s ease',
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.9rem',
                margin: '0 5px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}>
              Perfiles
            </Nav.Link>
           
            
          
            
            
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar