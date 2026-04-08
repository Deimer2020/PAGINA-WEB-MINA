import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaUsers, FaHandsHelping, FaSeedling, FaTrophy, FaCalendarAlt } from 'react-icons/fa'

const AFADEC = () => {
  const actividades = [
    { icono: <FaSeedling />, titulo: 'Proyectos Productivos', descripcion: 'Desarrollo de huertas, cultivos y granjas integrales' },
    { icono: <FaUsers />, titulo: 'Liderazgo Juvenil', descripcion: 'Formación de líderes para el desarrollo rural' },
    { icono: <FaHandsHelping />, titulo: 'Trabajo Comunitario', descripcion: 'Proyección social y apoyo a la comunidad' },
    { icono: <FaTrophy />, titulo: 'Concursos y Ferias', descripcion: 'Participación en eventos agropecuarios' },
  ]

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col lg={5} className="mb-4 mb-lg-0">
          <div style={{
            background: 'linear-gradient(135deg, #2E7D32, #1B5E20)',
            borderRadius: '30px',
            padding: '40px',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🌱</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '20px' }}>
              Asociación de Futuros Agricultores
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.9 }}>
              AFADEC es nuestra organización juvenil que forma líderes para el campo colombiano.
              "Cabeza, Corazón para los Campos Colombianos"
            </p>
            <Button variant="light" className="mt-3" style={{ color: '#2E7D32', fontWeight: 'bold' }}>
              Conoce AFADEC
            </Button>
          </div>
        </Col>
        <Col lg={7}>
          <h3 className="mb-4" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif" }}>
            Nuestras Actividades
          </h3>
          <Row>
            {actividades.map((act, idx) => (
              <Col md={6} key={idx} className="mb-3">
                <div className="d-flex align-items-start p-3 bg-white rounded-3 shadow-sm">
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '15px',
                    color: '#2E7D32'
                  }}>
                    {act.icono}
                  </div>
                  <div>
                    <h5 className="mb-1" style={{ fontWeight: 'bold' }}>{act.titulo}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>{act.descripcion}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          
          <div className="mt-4 p-3 bg-light rounded-3">
            <div className="d-flex align-items-center">
              <FaCalendarAlt className="text-success me-2" />
              <strong>Próximo evento:</strong>
              <span className="ms-2">Feria Agropecuaria AFADEC - 25 de abril de 2025</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AFADEC