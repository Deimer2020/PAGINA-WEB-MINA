// src/components/sections/Programs.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

// Importar imágenes de fondo para cada programa
import imgAgricola from '../../assets/images/programas/agro.jpg'
import imgPecuaria from '../../assets/images/programas/pecuaria.jpg'
import imgInnovacion from '../../assets/images/programas/tecnologia.jpg'

const Programs = () => {
  const programs = [
    { 
      titulo: 'Técnico Agrícola',
      modalidad: 'Presencial',
      descripcion: 'Aprendizaje práctico en cultivos sostenibles, manejo de cosechas y agricultura orgánica.',
      imagen: imgAgricola,
      color: '#2E7D32'
    },
    { 
      titulo: 'Producción Pecuaria',
      modalidad: 'Presencial',
      descripcion: 'Manejo de ganado, producción animal, técnicas modernas y sanidad animal.',
      imagen: imgPecuaria,
      color: '#FF9800'
    },
    { 
      titulo: 'Innovación Rural',
      modalidad: 'Presencial + Virtual',
      descripcion: 'Tecnología aplicada al campo, proyectos productivos y emprendimiento agrícola.',
      imagen: imgInnovacion,
      color: '#2196F3'
    }
  ]

  return (
    <Container className="py-5" style={{ backgroundColor: '#F9F9F9' }}>
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem',
        position: 'relative'
      }}>
        Nuestros Programas
        <div style={{
          width: '80px',
          height: '3px',
          background: 'linear-gradient(90deg, #2E7D32, #A5D6A7)',
          margin: '15px auto 0',
          borderRadius: '2px'
        }} />
      </h2>
      
      <Row className="g-4">
        {programs.map((program, index) => (
          <Col md={4} key={index}>
            <Card className="border-0 rounded-4 overflow-hidden h-100" style={{
              transition: 'all 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
              e.currentTarget.style.boxShadow = '0 20px 35px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              {/* Imagen de fondo */}
              <div style={{
                position: 'relative',
                height: '280px',
                backgroundImage: `url(${program.imagen})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden'
              }}>
                {/* Overlay oscuro */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
                }}>
                  
                  {/* Contenido sobre la imagen */}
                  <div className="d-flex flex-column justify-content-between h-100 p-4">
                    {/* Badge de modalidad */}
                    <div className="text-end">
                      <span className="badge px-3 py-2 rounded-pill" style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                        color: 'white',
                        fontSize: '0.7rem',
                        fontWeight: '500'
                      }}>
                        {program.modalidad}
                      </span>
                    </div>
                    
                    {/* Título y descripción */}
                    <div className="text-center text-white">
                      <h3 className="fw-bold mb-2" style={{ fontSize: '1.5rem' }}>
                        {program.titulo}
                      </h3>
                      <p className="mb-0 small" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                        {program.descripcion}
                      </p>
                      <Button 
                        variant="outline-light" 
                        size="sm" 
                        className="mt-3 rounded-pill px-4"
                        style={{ fontSize: '0.75rem', borderWidth: '1px' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'white'
                          e.currentTarget.style.color = program.color
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = 'white'
                        }}
                      >
                        Ver más →
                      </Button>
                    </div>
                    
                    {/* Espaciador inferior */}
                    <div></div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Programs