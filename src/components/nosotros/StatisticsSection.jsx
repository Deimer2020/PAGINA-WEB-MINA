// src/components/nosotros/StatisticsSection.jsx
import { Container, Row, Col } from 'react-bootstrap'

const StatisticsSection = ({ counters, statsRef }) => {
  return (
    <div id="estadisticas" ref={statsRef} style={{
      background: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
      padding: '60px 0',
      marginTop: '-2px'
    }}>
      <Container>
        <Row className="text-center text-white">
          <Col md={3} sm={6} className="mb-4 mb-md-0">
            <h2 className="display-3 fw-bold">{counters.estudiantes}+</h2>
            <p className="mb-0">Estudiantes</p>
            <small>Formando futuro</small>
          </Col>
          <Col md={3} sm={6} className="mb-4 mb-md-0">
            <h2 className="display-3 fw-bold">{counters.docentes}</h2>
            <p className="mb-0">Docentes</p>
            <small>Guiando el aprendizaje</small>
          </Col>
          <Col md={3} sm={6} className="mb-4 mb-md-0">
            <h2 className="display-3 fw-bold">{counters.egresados}+</h2>
            <p className="mb-0">Egresados</p>
            <small>Transformando el campo</small>
          </Col>
          <Col md={3} sm={6} className="mb-4 mb-md-0">
            <h2 className="display-3 fw-bold">{counters.años}</h2>
            <p className="mb-0">Años de Excelencia</p>
            <small>Trayectoria educativa</small>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StatisticsSection