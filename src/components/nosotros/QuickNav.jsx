// src/components/nosotros/QuickNav.jsx
import { Container } from 'react-bootstrap'

const QuickNav = () => {
  const items = [
    { nombre: 'Inicio', id: 'inicio', icono: 'bi-house-door-fill' },
    { nombre: 'Estadísticas', id: 'estadisticas', icono: 'bi-bar-chart-fill' },
    { nombre: 'Historia', id: 'historia', icono: 'bi-clock-history' },
    { nombre: 'Misión y Visión', id: 'mision-vision', icono: 'bi-eye-fill' },
    { nombre: 'Perfil del Estudiante', id: 'perfil-estudiante', icono: 'bi-person-badge-fill' },
    { nombre: 'Valores', id: 'valores', icono: 'bi-gem' },
    { nombre: 'Símbolos', id: 'simbolos', icono: 'bi-shield-shaded' },
    { nombre: 'Galería Histórica', id: 'galeria-historica', icono: 'bi-images' },
    { nombre: 'Video Institucional', id: 'video', icono: 'bi-camera-reels-fill' },
    { nombre: 'Principios', id: 'principios', icono: 'bi-journal-bookmark-fill' },
    { nombre: 'Directivos', id: 'directivos', icono: 'bi-people-fill' },
    { nombre: 'Directivos Actuales', id: 'directivos-actuales', icono: 'bi-star-fill' },
    { nombre: 'Manual Convivencia', id: 'manual-convivencia', icono: 'bi-book-fill' },
    { nombre: 'Horarios y Uniformes', id: 'horarios-uniformes', icono: 'bi-calendar-clock-fill' }
  ]

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      const offset = 80
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div style={{
      position: 'sticky',
      top: '70px',
      zIndex: 100,
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      padding: '12px 0',
      borderBottom: '1px solid #E8F5E9'
    }}>
      <Container>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px'
        }}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              style={{
                fontSize: '0.85rem',
                fontWeight: '500',
                color: '#2E7D32',
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: '30px',
                backgroundColor: '#E8F5E9',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2E7D32'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8F5E9'
                e.currentTarget.style.color = '#2E7D32'
              }}
            >
              <i className={`${item.icono} me-1`} style={{ fontSize: '0.85rem' }}></i>
              {item.nombre}
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default QuickNav