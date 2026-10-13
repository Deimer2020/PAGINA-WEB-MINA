// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { Container, Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap' 
import { Link, useNavigate, useLocation } from 'react-router-dom'
import escudo from '../../assets/images/ESCUDOMINA.png'

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else if (currentScrollY < lastScrollY) {
        setHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Función para navegar a una sección dentro de "Nosotros"
  const scrollToSection = (sectionId) => {
    // Si estamos en la página de inicio, navegar a /nosotros y luego hacer scroll
    if (location.pathname !== '/nosotros') {
      navigate('/nosotros')
      // Esperar a que cargue la página y luego hacer scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          const offset = 80
          const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: sectionPosition - offset,
            behavior: 'smooth'
          })
        }
      }, 300)
    } else {
      // Si ya estamos en /nosotros, hacer scroll directamente
      const section = document.getElementById(sectionId)
      if (section) {
        const offset = 80
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: 'smooth'
        })
      }
    }
  }

  // Función para navegar a /nosotros y luego a una sección
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setExpanded(false)
    scrollToSection(sectionId)
  }

  return (
    <BootstrapNavbar 
      className="mina-navbar"
      expanded={expanded}
      onToggle={setExpanded}
      collapseOnSelect
      expand="lg" 
      fixed="top" 
      style={{ 
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        boxShadow: scrolled 
          ? '0 8px 25px rgba(0,0,0,0.12)' 
          : '0 6px 20px rgba(0,0,0,0.08)',
        padding: scrolled ? '8px 0' : '16px 0',
        transform: hidden && !expanded ? 'translateY(-100%)' : 'translateY(0)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(0,0,0,0.04)',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px'
      }}
    >
      <Container style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="mina-navbar__row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Link className="mina-navbar__brand" onClick={() => setExpanded(false)} to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src={escudo} 
                alt="Escudo Institucional" 
                style={{ 
                  height: scrolled ? '42px' : '48px', 
                  width: 'auto',
                  transition: 'all 0.3s ease'
                }}
              />
              <div>
                <span style={{ 
                  color: '#2E7D32', 
                  fontWeight: '700', 
                  fontSize: scrolled ? '0.9rem' : '1rem',
                  display: 'block',
                  lineHeight: '1.2',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  letterSpacing: '-0.5px'
                }}>
                  I.E. Agrícola La Mina
                </span>
                <small style={{ 
                  color: '#666', 
                  fontSize: '0.6rem',
                  display: 'block',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: '400',
                  transition: 'all 0.3s ease'
                }}>
                  Formar y Educar
                </small>
              </div>
            </div>
          </Link>
          
          <BootstrapNavbar.Toggle 
            aria-label="Abrir o cerrar menú de navegación"
            aria-controls="basic-navbar-nav"
            style={{
              border: 'none',
              backgroundColor: 'rgba(46,125,50,0.1)',
              borderRadius: '12px',
              padding: '8px 12px'
            }}
          />
          
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ gap: '4px', alignItems: 'center' }}>
              {/* INICIO */}
              <Nav.Link 
                as={Link}
                onClick={() => setExpanded(false)}
                to="/"
                style={{ 
                  color: '#333', 
                  fontWeight: '500', 
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', 'Lato', sans-serif",
                  fontSize: '0.85rem',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  margin: 0,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  position: 'relative'
                }}
                className="nav-link-moderno"
              >
                Inicio
              </Nav.Link>
              
              {/* NOSOTROS - DROPDOWN */}
              <NavDropdown
                title="Nosotros"
                id="nosotros-dropdown"
                style={{
                  color: '#333',
                  fontWeight: '500',
                  fontFamily: "'Inter', 'Lato', sans-serif",
                  fontSize: '0.85rem',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  margin: 0,
                  cursor: 'pointer'
                }}
                className="nav-dropdown-moderno"
                menuVariant="light"
                renderMenuOnMount={false}
              >
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'inicio')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-house-door me-2"></i> Inicio
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'historia')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-clock-history me-2"></i> Historia
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'mision-vision')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-eye me-2"></i> Misión y Visión
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'perfil-estudiante')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-person-badge me-2"></i> Perfil del Estudiante
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'valores')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-gem me-2"></i> Valores
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'simbolos')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-shield-shaded me-2"></i> Símbolos
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'galeria-historica')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-images me-2"></i> Galería Histórica
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'principios')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-journal-bookmark me-2"></i> Principios
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'directivos-actuales')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi bi-star me-2"></i> Directivos
                </NavDropdown.Item>
                <NavDropdown.Item 
                  onClick={(e) => handleNavClick(e, 'documentos')}
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  <i className="bi-file-earmark-pdf"></i> Documentos Institucionales
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item 
                  as={Link}
                  onClick={() => setExpanded(false)}
                  to="/nosotros"
                  style={{ fontSize: '0.85rem', padding: '8px 20px', fontWeight: '600', color: '#2E7D32' }}
                >
                  <i className="bi bi-arrow-right-circle me-2"></i> Ver página completa
                </NavDropdown.Item>
              </NavDropdown>

              {/* GOBIERNO ESCOLAR */}
              <Nav.Link 
                as={Link}
                onClick={() => setExpanded(false)}
                to="/gobierno-escolar"
                style={{ 
                  color: '#333', 
                  fontWeight: '500', 
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', 'Lato', sans-serif",
                  fontSize: '0.85rem',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  margin: 0,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  position: 'relative'
                }}
                className="nav-link-moderno"
              >
                Gobierno Escolar
              </Nav.Link>
              
              {/* PERFILES */}
              <Nav.Link 
                as={Link}
                onClick={() => setExpanded(false)}
                to="/perfiles"
                style={{ 
                  color: '#333', 
                  fontWeight: '500', 
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', 'Lato', sans-serif",
                  fontSize: '0.85rem',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  margin: 0,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  position: 'relative'
                }}
                className="nav-link-moderno"
              >
                Perfiles
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </Container>

      <style>{`
        .mina-navbar__brand { flex-shrink: 0; }
        .mina-navbar .navbar-toggler { flex-shrink: 0; margin-left: auto; }
        @media (max-width: 991.98px) {
          .mina-navbar { padding: 10px 0 !important; }
          .mina-navbar__row { gap: 0; }
          .mina-navbar__brand { max-width: calc(100% - 60px); }
          .mina-navbar__brand > div { gap: 8px !important; }
          .mina-navbar__brand img { height: 38px !important; flex-shrink: 0; }
          .mina-navbar__brand span { font-size: .9rem !important; }
          .mina-navbar .navbar-collapse { flex-basis: 100%; width: 100%; max-height: 70vh; overflow-y: auto; }
          .mina-navbar .navbar-nav { align-items: stretch !important; }
          .mina-navbar .nav-link-moderno { text-align: left; }
          .mina-navbar .nav-dropdown-moderno { padding: 0 !important; }
          .mina-navbar .nav-dropdown-moderno > .dropdown-toggle { padding: 10px 18px; }
          .mina-navbar .dropdown-item { white-space: normal; }
        }

        .nav-link-moderno {
          transition: all 0.3s ease;
        }
        
        .nav-link-moderno::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #2E7D32, #4CAF50);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .nav-link-moderno:hover::after {
          width: calc(100% - 36px);
        }
        
        .nav-link-moderno:hover {
          color: #2E7D32 !important;
          background-color: rgba(46,125,50,0.05);
          transform: translateY(-1px);
        }
        
        /* Estilos para el dropdown */
        .nav-dropdown-moderno .dropdown-toggle {
          color: #333 !important;
          font-weight: 500 !important;
          transition: all 0.3s ease;
        }
        
        .nav-dropdown-moderno .dropdown-toggle::after {
          margin-left: 6px;
          vertical-align: middle;
        }
        
        .nav-dropdown-moderno .dropdown-toggle:hover {
          color: #2E7D32 !important;
          background-color: rgba(46,125,50,0.05);
        }
        
        .nav-dropdown-moderno .dropdown-menu {
          border: none;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          padding: 8px 0;
          margin-top: 8px;
          backdrop-filter: blur(10px);
          background-color: rgba(255,255,255,0.97);
        }
        
        .nav-dropdown-moderno .dropdown-item {
          color: #333;
          transition: all 0.3s ease;
          padding: 10px 20px;
        }
        
        .nav-dropdown-moderno .dropdown-item:hover {
          background-color: rgba(46,125,50,0.08);
          color: #2E7D32;
          padding-left: 26px;
        }
        
        .nav-dropdown-moderno .dropdown-item i {
          width: 18px;
          text-align: center;
          color: #2E7D32;
        }
        
        .navbar-toggler:focus {
          box-shadow: none;
        }
        
        /* Responsive */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            margin-top: 16px;
            padding-top: 12px;
            border-top: 1px solid rgba(0,0,0,0.05);
          }
          
          .nav-link-moderno {
            text-align: center;
            padding: 10px 18px !important;
          }
          
          .nav-link-moderno::after {
            bottom: 6px;
          }
          
          .nav-dropdown-moderno .dropdown-menu {
            background-color: transparent;
            box-shadow: none;
            backdrop-filter: none;
            padding-left: 20px;
          }
          
          .nav-dropdown-moderno .dropdown-item:hover {
            padding-left: 26px;
          }
        }
        
        @media (max-width: 768px) {
          .navbar-brand img {
            height: 38px !important;
          }
        }
      `}</style>
    </BootstrapNavbar>
  )
}

export default Navbar