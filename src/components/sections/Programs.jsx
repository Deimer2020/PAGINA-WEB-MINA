import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Programs = () => {
  const programs = [
    { icon: '🌾', title: 'Técnico Agrícola', description: 'Aprendizaje práctico en cultivos sostenibles, manejo de cosechas y agricultura orgánica.' },
    { icon: '🐄', title: 'Producción Pecuaria', description: 'Manejo de ganado, producción animal, técnicas modernas y sanidad animal.' },
    { icon: '💡', title: 'Innovación Rural', description: 'Tecnología aplicada al campo, proyectos productivos y emprendimiento agrícola.' }
  ]

  return (
    <Container className="py-5" style={{ backgroundColor: '#F9F9F9' }}>
      <h2 className="text-center mb-5" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif", fontWeight: '700' }}>
        Nuestros Programas
      </h2>
      <Row>
        {programs.map((program, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm text-center card-hover">
              <Card.Body>
                <div className="display-1 mb-3">{program.icon}</div>
                <Card.Title className="h3 mt-2" style={{ fontFamily: "'Playfair Display', serif", color: '#2E7D32' }}>
                  {program.title}
                </Card.Title>
                <Card.Text className="text-muted" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {program.description}
                </Card.Text>
                <Button variant="outline-success">Más información</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Programs