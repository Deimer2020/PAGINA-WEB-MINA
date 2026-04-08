import { Container, Row, Col, Button } from 'react-bootstrap'

const TreeSection = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <div style={{ fontSize: '12rem', animation: 'sway 3s ease-in-out infinite' }}>
            🌳
          </div>
          <p className="mt-3 text-muted" style={{ fontFamily: "'Lato', sans-serif", fontStyle: 'italic' }}>
            "El árbol de la sabiduría"
          </p>
        </Col>
        <Col md={6}>
          <div className="fade-in-up">
            <h2 className="mb-4" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif", fontWeight: '700' }}>
              Nuestro Símbolo: El Árbol de la Sabiduría
            </h2>
            <p className="lead mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
              Así como el árbol crece fuerte, echa raíces profundas y da frutos abundantes, 
              nuestros estudiantes crecen en conocimiento, valores y compromiso social, 
              preparándose para ser líderes transformadores del campo colombiano.
            </p>
            <div className="d-flex gap-3">
              <Button variant="success" size="lg">
                Conoce nuestra historia
              </Button>
              <Button variant="outline-success" size="lg">
                Ver valores institucionales
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TreeSection