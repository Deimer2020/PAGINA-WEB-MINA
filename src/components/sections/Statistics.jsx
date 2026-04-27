// src/components/sections/Estadisticas.jsx
import { Container, Row, Col } from 'react-bootstrap'

// Importar imagen de estudiantes (PNG sin fondo)
import estudiantesImg from '../../assets/images/MINAFOTO2.png'

const Estadisticas = () => {
  const stats = [
    { numero: '300 +', descripcion: 'Estudiantes actualmente en formación' },
    { numero: '30 +', descripcion: 'Docentes comprometidos con la educación' },
    { numero: '61 +', descripcion: 'Egresados transformando el campo' },
    { numero: '98%', descripcion: 'Tasa de satisfacción de nuestros estudiantes' }
  ]

  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a2b0e 0%, #0a1a0c 50%, #000000 100%)',
      overflow: 'hidden',
      padding: '80px 0',
      minHeight: '600px'
    }}>
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 0
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="zigzag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L20 0 L40 20" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#zigzag)" />
      </svg>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="text-center mb-5" style={{
          fontFamily: "'Poppins', 'Inter', sans-serif",
          fontSize: '2.5rem',
          fontWeight: '800',
          color: 'white',
          letterSpacing: '-0.5px'
        }}>
          Nuestra Institución en Números
        </h2>

        <Row className="align-items-stretch gy-5 justify-content-center">
          {/* Columna izquierda - Estadísticas */}
          <Col lg={4} md={12} className="d-flex align-items-center">
            <div className="d-flex flex-column gap-4 w-100">
              {stats.slice(0, 2).map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '25px',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#FFD700',
                    marginBottom: '10px'
                  }}>
                    {stat.numero}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.4'
                  }}>
                    {stat.descripcion}
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Columna centro - Imagen ajustada: más a la derecha y más arriba */}
          <Col lg={4} md={12} className="d-flex align-items-center justify-content-center" style={{ minHeight: '320px' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
              {/* Forma orgánica verde */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '280px',
                height: '280px',
                background: 'linear-gradient(135deg, #2E7D32, #4CAF50, #81C784)',
                borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%',
                filter: 'blur(25px)',
                opacity: 0.6,
                zIndex: 0,
                animation: 'blobMove 8s ease-in-out infinite'
              }} />
              
              {/* Segunda capa */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '240px',
                height: '240px',
                background: 'linear-gradient(135deg, #1B5E20, #388E3C)',
                borderRadius: '40% 60% 45% 55% / 55% 45% 55% 45%',
                filter: 'blur(20px)',
                opacity: 0.4,
                zIndex: 0,
                animation: 'blobMoveReverse 10s ease-in-out infinite'
              }} />

              {/* Imagen - Tamaño intacto, solo movida a la derecha y arriba */}
              <img
                src={estudiantesImg}
                alt="Estudiantes"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '750px',
                  maxWidth: '500%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))',
                  marginLeft: '90px',   /* Mueve la imagen a la derecha */
                  marginTop: '-40px'    /* Sube la imagen */
                }}
              />
            </div>
          </Col>

          {/* Columna derecha - Estadísticas */}
          <Col lg={4} md={12} className="d-flex align-items-center">
            <div className="d-flex flex-column gap-4 w-100">
              {stats.slice(2, 4).map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '25px',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#FFD700',
                    marginBottom: '10px'
                  }}>
                    {stat.numero}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.4'
                  }}>
                    {stat.descripcion}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <p style={{
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '1px',
            marginBottom: 0
          }}>
            Información actualizada: 13 de Abril 2026
          </p>
        </div>
      </Container>

      <style>{`
        @keyframes blobMove {
          0% { border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%; transform: translate(-50%, -50%) rotate(0deg); }
          50% { border-radius: 45% 55% 40% 60% / 55% 45% 60% 40%; transform: translate(-50%, -50%) rotate(5deg); }
          100% { border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%; transform: translate(-50%, -50%) rotate(0deg); }
        }
        
        @keyframes blobMoveReverse {
          0% { border-radius: 40% 60% 45% 55% / 55% 45% 55% 45%; transform: translate(-50%, -50%) rotate(0deg); }
          50% { border-radius: 55% 45% 50% 50% / 45% 55% 50% 50%; transform: translate(-50%, -50%) rotate(-5deg); }
          100% { border-radius: 40% 60% 45% 55% / 55% 45% 55% 45%; transform: translate(-50%, -50%) rotate(0deg); }
        }
      `}</style>
    </div>
  )
}

export default Estadisticas