// src/components/nosotros/ValuesSection.jsx
import { Container, Row, Col } from 'react-bootstrap'
import { FaHandsHelping, FaTree, FaLightbulb, FaHeart } from 'react-icons/fa'

const ValuesSection = () => {
  const valores = [
    { icono: <FaHandsHelping />, titulo: 'Solidaridad', descripcion: 'Colaboración y ayuda mutua entre toda la comunidad educativa.', color: '#2E7D32' },
    { icono: <FaTree />, titulo: 'Responsabilidad', descripcion: 'Compromiso con el campo, la familia y el desarrollo sostenible.', color: '#4CAF50' },
    { icono: <FaLightbulb />, titulo: 'Creatividad', descripcion: 'Soluciones innovadoras para los desafíos del agro.', color: '#FFC107' },
    { icono: <FaHeart />, titulo: 'Respeto', descripcion: 'Por la tierra, los animales, las personas y las tradiciones Kankuamas.', color: '#E91E63' },
  ]

  return (
    <Container id="valores" fluid style={{ backgroundColor: '#F9F9F9', padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{
          fontFamily: "'Playfair Display', serif",
          color: '#2E7D32',
          fontSize: '2.5rem'
        }}>
          Nuestros Valores
        </h2>
        <Row>
          {valores.map((valor, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px 20px',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 20px 30px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  color: valor.color,
                  marginBottom: '20px'
                }}>
                  {valor.icono}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {valor.titulo}
                </h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  {valor.descripcion}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default ValuesSection