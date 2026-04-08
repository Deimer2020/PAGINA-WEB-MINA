// src/components/nosotros/PrinciplesSection.jsx
import { Container, Row, Col } from 'react-bootstrap'

const PrinciplesSection = () => {
  const principios = [
    { titulo: 'Integralidad', descripcion: 'Formación holística del ser humano en todas sus dimensiones.' },
    { titulo: 'Autonomía', descripcion: 'Capacidad para decidir y orientar nuestros procesos educativos.' },
    { titulo: 'Identidad', descripcion: 'Sentido de pertenencia a la cultura Kankuama y al campo colombiano.' },
    { titulo: 'Interculturalidad', descripcion: 'Apertura a otras culturas desde nuestras raíces.' },
    { titulo: 'Sustentabilidad', descripcion: 'Equilibrio ecológico y desarrollo sostenible.' },
    { titulo: 'Progresividad', descripcion: 'Mejora continua y adaptación a los desafíos del futuro.' },
  ]

  return (
    <Container id="principios" fluid style={{ backgroundColor: '#E8F5E9', padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{
          fontFamily: "'Playfair Display', serif",
          color: '#2E7D32',
          fontSize: '2.5rem'
        }}>
          Principios Institucionales
        </h2>
        <Row>
          {principios.map((principio, index) => (
            <Col md={4} key={index} className="mb-4">
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <h3 style={{
                  color: '#2E7D32',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}>
                  {principio.titulo}
                </h3>
                <p style={{ color: '#666', marginBottom: 0 }}>
                  {principio.descripcion}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default PrinciplesSection