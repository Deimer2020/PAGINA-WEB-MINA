import { Container, Row, Col } from 'react-bootstrap'

const Values = () => {
  const values = [
    { icon: '🌱', title: 'Responsabilidad', description: 'Compromiso con el campo y la comunidad' },
    { icon: '🤝', title: 'Respeto', description: 'Por la tierra, los animales y las personas' },
    { icon: '💪', title: 'Esfuerzo', description: 'Trabajo constante para alcanzar metas' },
    { icon: '🌟', title: 'Excelencia', description: 'Buscando siempre la mejora continua' }
  ]

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif", fontWeight: '700' }}>
        Nuestros Valores
      </h2>
      <Row>
        {values.map((value, index) => (
          <Col md={3} key={index} className="text-center mb-4">
            <div className="display-4 mb-3">{value.icon}</div>
            <h4 className="mt-2" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif", fontWeight: '600' }}>
              {value.title}
            </h4>
            <p className="text-muted" style={{ fontFamily: "'Lato', sans-serif" }}>
              {value.description}
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Values