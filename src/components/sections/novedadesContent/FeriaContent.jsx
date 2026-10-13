// src/components/sections/NovedadesContent/FeriaContent.jsx
import { Row, Col, Badge, Button } from 'react-bootstrap'
import { FaCalendarAlt, FaMapPin, FaMicrophoneAlt, FaStar, FaGuitar, FaMusic } from 'react-icons/fa'

const FeriaContent = ({ data }) => {
  return (
    <>
      <div className="mb-4 text-center">
        <Badge bg="secondary" className="px-3 py-2 me-2">
          <FaCalendarAlt className="me-2" /> {data.fechaEvento}
        </Badge>
        <Badge bg="secondary" className="px-3 py-2 me-2">
          <FaMicrophoneAlt className="me-2" /> {data.hora}
        </Badge>
        <Badge bg="secondary" className="px-3 py-2">
          <FaMapPin className="me-2" /> {data.lugar}
        </Badge>
      </div>

      <h3 className="text-center mb-4" style={{ color: '#9C27B0', fontFamily: "'Playfair Display', serif" }}>
        {data.subtitulo}
      </h3>
      <p className="lead">{data.introduccion}</p>

      <div style={{
        background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <div className="d-flex align-items-center mb-3">
          <FaStar size={30} color="#9C27B0" className="me-2" />
          <h4 style={{ color: '#9C27B0' }}>Homenajeados</h4>
        </div>
        <Row>
          {data.homenajeados.map((h, idx) => (
            <Col md={4} key={idx} className="text-center">
              <FaGuitar size={30} color="#9C27B0" />
              <h6 className="mt-1">{h.nombre}</h6>
              <small>{h.instrumento}</small>
            </Col>
          ))}
        </Row>
      </div>

      <h4 className="mt-4 mb-3" style={{ color: '#9C27B0' }}>📋 Actividades</h4>
      <Row className="mb-4">
        {data.actividades.map((act, idx) => (
          <Col md={6} key={idx} className="mb-2">
            <div className="d-flex align-items-center">
              <FaMusic className="text-success me-2" />
              <span>{act}</span>
            </div>
          </Col>
        ))}
      </Row>

      <div className="mt-4 p-3 bg-light rounded-3">
        <h5>👥 Organizadores</h5>
        <Row>
          <Col md={6}>
            <strong>Docentes:</strong>
            <ul className="small">
              {data.organizadores.docentes.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </Col>
          <Col md={6}>
            <strong>Estudiantes:</strong>
            <ul className="small">
              {data.organizadores.estudiantes.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>

      <div className="mt-4 text-center">
        <p className="fw-bold">🎵 ¡Los esperamos! 🎵</p>
        <Button variant="success" size="lg">Confirmar asistencia</Button>
      </div>
    </>
  )
}

export default FeriaContent