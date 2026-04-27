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

  const scrollToSection = (sectionId) => {
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
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        boxShadow: scrolled 
          ? '0 8px 25px rgba(0,0,0,0.12)' 
          : '0 6px 20px rgba(0,0,0,0.08)',
        padding: scrolled ? '8px 0' : '16px 0',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(0,0,0,0.04)',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px'
      }}
    >
      <Container style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
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
              <Nav.Link 
                as={Link}
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
              
              <Nav.Link 
                as={Link}
                to="/nosotros"
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
                Nosotros
              </Nav.Link>
              
              <Nav.Link 
                as={Link}
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
              
              <Nav.Link 
                as={Link}
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
        
        .navbar-toggler:focus {
          box-shadow: none;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
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