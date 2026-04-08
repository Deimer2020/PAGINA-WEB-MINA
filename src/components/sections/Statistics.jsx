import { Container, Row, Col } from 'react-bootstrap'

const Statistics = () => {
  const stats = [
    { number: '500+', label: 'Estudiantes' },
    { number: '50+', label: 'Docentes' },
    { number: '20+', label: 'Proyectos Productivos' },
    { number: '15', label: 'Años de Excelencia' }
  ]

  return (
    <Container fluid className="py-5 text-center" style={{ backgroundColor: '#E8F5E9' }}>
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col md={3} key={index} className="mb-4 mb-md-0">
              <h2 className="display-4 fw-bold text-success">{stat.number}</h2>
              <p className="lead">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Statistics