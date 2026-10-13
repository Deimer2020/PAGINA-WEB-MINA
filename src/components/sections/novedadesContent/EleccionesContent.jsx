// src/components/sections/NovedadesContent/EleccionesContent.jsx
import { Row, Col, Badge } from 'react-bootstrap'
import { FaCalendarAlt, FaUsers, FaVoteYea, FaChartLine, FaLaptopCode } from 'react-icons/fa'

const EleccionesContent = ({ data }) => {
  return (
    <>
      <div className="mb-4 text-center">
        <Badge bg="success" className="px-3 py-2">
          <FaCalendarAlt className="me-2" /> {data.fechaEvento}
        </Badge>
      </div>

      {data.galeria?.video && (
        <div className="mb-4">
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '15px',
            marginBottom: '10px'
          }}>
            <video controls style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <source src={data.galeria.video} type="video/mp4" />
            </video>
          </div>
          <p className="text-center text-muted small">📹 Resumen de la jornada electoral 2026</p>
        </div>
      )}

      <h3 className="mb-3" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif" }}>
        {data.subtitulo}
      </h3>
      <p className="lead" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        {data.introduccion}
      </p>

      {data.datos && (
        <Row className="mb-4 text-center">
          <Col md={4}>
            <div className="p-3 bg-light rounded-3">
              <FaUsers size={30} className="text-success mb-2" />
              <h4>{data.datos.participantes}</h4>
              <small>Participantes</small>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3 bg-light rounded-3">
              <FaVoteYea size={30} className="text-success mb-2" />
              <h4>{data.datos.votosValidos}</h4>
              <small>Votos válidos</small>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3 bg-light rounded-3">
              <FaChartLine size={30} className="text-success mb-2" />
              <h4>{data.datos.nivelParticipacion}</h4>
              <small>Participación</small>
            </div>
          </Col>
        </Row>
      )}

      <div style={{
        background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <div className="d-flex align-items-center mb-3">
          <FaLaptopCode size={30} color="#2E7D32" className="me-2" />
          <h4 style={{ color: '#2E7D32', margin: 0 }}>{data.innovacion.titulo}</h4>
        </div>
        <p>{data.innovacion.descripcion}</p>
        <Row>
          {data.innovacion.tecnologias.map((tech, idx) => (
            <Col md={6} key={idx} className="mb-2">
              <div className="d-flex align-items-center">
                <FaChartLine className="text-success me-2" />
                <span>{tech}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <h4 className="mt-4 mb-3" style={{ color: '#2E7D32' }}>🏆 Ganadores</h4>
      <Row className="mb-4">
        <Col md={6}>
          <div className="p-3 bg-light rounded-3 text-center h-100">
            <div style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 15px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #2E7D32'
            }}>
              <img src={data.ganadores.personero.foto} alt="Personero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h5>{data.ganadores.personero.nombre}</h5>
            <p className="text-muted">Personero - {data.ganadores.personero.grado}</p>
            <Badge bg="success">🏆 {data.ganadores.personero.votos} votos</Badge>
            <p className="fst-italic mt-2">"{data.ganadores.personero.lema}"</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-3 bg-light rounded-3 text-center h-100">
            <div style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 15px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #2E7D32'
            }}>
              <img src={data.ganadores.contralor.foto} alt="Contralor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h5>{data.ganadores.contralor.nombre}</h5>
            <p className="text-muted">Contralor - {data.ganadores.contralor.grado}</p>
            <Badge bg="success">🏆 {data.ganadores.contralor.votos} votos</Badge>
            <p className="fst-italic mt-2">"{data.ganadores.contralor.lema}"</p>
          </div>
        </Col>
      </Row>

      {data.galeria?.imagenes && (
        <>
          <h4 className="mt-4 mb-3" style={{ color: '#2E7D32' }}>📸 Jornada electoral</h4>
          <Row className="g-3 mb-4">
            {data.galeria.imagenes.map((img, idx) => (
              <Col md={6} key={idx}>
                <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <img src={img.src} alt={img.titulo} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                  <div className="p-2 bg-white">
                    <p className="mb-0 fw-bold">{img.titulo}</p>
                    <small className="text-muted">{img.descripcion}</small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}

      <div className="mt-4 p-3 bg-light rounded-3">
        <FaUsers className="text-success me-2" />
        <strong>Impacto:</strong> {data.impacto}
      </div>
    </>
  )
}

export default EleccionesContent