// src/components/sections/Values.jsx
import { Container, Row, Col } from 'react-bootstrap'

const Values = () => {
  const valores = [
    { 
      icono: 'bi-tree-fill', 
      titulo: 'Responsabilidad', 
      descripcion: 'Compromiso con el campo y la comunidad',
      color: '#2E7D32'
    },
    { 
      icono: 'bi-heart-fill', 
      titulo: 'Respeto', 
      descripcion: 'Por la tierra, los animales y las personas',
      color: '#4CAF50'
    },
    { 
      icono: 'bi-lightbulb-fill', 
      titulo: 'Esfuerzo', 
      descripcion: 'Trabajo constante para alcanzar metas',
      color: '#FF9800'
    },
    { 
      icono: 'bi-star-fill', 
      titulo: 'Excelencia', 
      descripcion: 'Buscando siempre la mejora continua',
      color: '#2196F3'
    }
  ]

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem',
        position: 'relative'
      }}>
        Nuestros Valores
        <div style={{
          width: '80px',
          height: '4px',
          background: '#2E7D32',
          margin: '15px auto 0',
          borderRadius: '2px'
        }} />
      </h2>
      
      <Row className="g-4">
        {valores.map((valor, index) => (
          <Col md={3} sm={6} key={index}>
            <div className="text-center p-4 rounded-4 shadow-sm h-100" style={{
              backgroundColor: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 30px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <div className="mb-3">
                <i className={`${valor.icono} display-1`} style={{ color: valor.color }}></i>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#2E7D32' }}>
                {valor.titulo}
              </h3>
              <p className="text-muted small mb-0">
                {valor.descripcion}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Values