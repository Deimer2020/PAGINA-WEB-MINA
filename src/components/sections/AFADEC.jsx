// src/components/sections/AFADEC.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaSeedling, FaUsers, FaHandsHelping, FaTrophy, FaCalendarAlt } from 'react-icons/fa'

const AFADEC = () => {
  const actividades = [
    { 
      icono: <FaSeedling />, 
      titulo: 'Proyectos Productivos', 
      descripcion: 'Desarrollo de huertas, cultivos y granjas integrales',
      color: '#2E7D32'
    },
    { 
      icono: <FaUsers />, 
      titulo: 'Liderazgo Juvenil', 
      descripcion: 'Formación de líderes para el desarrollo rural',
      color: '#FF9800'
    },
    { 
      icono: <FaHandsHelping />, 
      titulo: 'Trabajo Comunitario', 
      descripcion: 'Proyección social y apoyo a la comunidad',
      color: '#2196F3'
    },
    { 
      icono: <FaTrophy />, 
      titulo: 'Concursos y Ferias', 
      descripcion: 'Participación en eventos agropecuarios',
      color: '#9C27B0'
    }
  ]

  return (
    <Container className="py-5">
      <Row className="align-items-center g-4">
        {/* Columna Izquierda - Tarjeta de presentación */}
        <Col lg={5}>
          <div className="bg-success rounded-4 p-4 p-xl-5 text-white shadow-lg">
            <div className="text-center mb-4">
              <i className="bi bi-tree-fill display-1"></i>
              <h2 className="display-5 fw-bold mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Asociación de Futuros Agricultores
              </h2>
            </div>
            <p className="text-center fst-italic fs-5 mt-3">
              AFADEC es nuestra organización juvenil que forma líderes para el campo colombiano.
            </p>
            <p className="text-center fst-italic fs-5 mt-3">
              "Cabeza, Corazón para los Campos Colombianos"
            </p>
            <div className="mt-4 text-center">
              <Button variant="light" size="lg" className="px-4 py-2 fw-bold text-success">
                Conoce AFADEC
              </Button>
            </div>
          </div>
        </Col>

        {/* Columna Derecha - Actividades */}
        <Col lg={7}>
          <h3 className="mb-4" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif" }}>
            Nuestras Actividades
          </h3>
          <Row className="g-3">
            {actividades.map((act, idx) => (
              <Col md={6} key={idx}>
                <div className="d-flex align-items-start p-3 bg-white rounded-3 shadow-sm h-100">
                  <div className="fs-1 me-3" style={{ color: act.color }}>
                    {act.icono}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ color: '#2E7D32' }}>{act.titulo}</h5>
                    <p className="small text-muted mb-0">{act.descripcion}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          
          <div className="mt-4 p-3 bg-light rounded-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="d-flex align-items-center">
              <FaCalendarAlt className="text-success me-2" />
              <strong>Próximo evento:</strong>
              <span className="ms-2">Feria Agropecuaria AFADEC - 25 de abril de 2026</span>
            </div>
            <Button variant="outline-success" size="sm">
              Ver más eventos
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AFADEC