// src/components/sections/NovedadesContent/MicrofutbolContent.jsx
import { Row, Col, Badge } from 'react-bootstrap'
import { FaCalendarAlt, FaMapPin, FaClock, FaUserTie, FaTrophy, FaFutbol } from 'react-icons/fa'

const MicrofutbolContent = ({ data }) => {
  return (
    <>
      <div className="mb-4 text-center">
        <Badge bg="primary" className="px-3 py-2 me-2">
          <FaCalendarAlt className="me-2" /> {data.fechaEvento}
        </Badge>
        <Badge bg="secondary" className="px-3 py-2 me-2">
          <FaMapPin className="me-2" /> {data.lugar}
        </Badge>
        <Badge bg="success" className="px-3 py-2">
          <FaClock className="me-2" /> {data.hora}
        </Badge>
      </div>

      <h3 className="mb-3" style={{ color: '#2196F3', fontFamily: "'Playfair Display', serif" }}>
        {data.subtitulo}
      </h3>
      <p className="lead" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        {data.introduccion}
      </p>

      <div style={{
        background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px 0',
        borderLeft: '5px solid #2196F3'
      }}>
        <div className="d-flex align-items-center gap-3">
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '3px solid #2196F3',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem'
          }}>
            👨‍🏫
          </div>
          <div>
            <h5 style={{ color: '#1565C0', margin: 0 }}>
              <FaUserTie className="me-2" />
              {data.docenteACargo.nombre}
            </h5>
            <p className="mb-0 small">
              <strong>{data.docenteACargo.especialidad}</strong>
            </p>
            <small className="text-muted">{data.docenteACargo.años}</small>
            <p className="mt-2 fst-italic mb-0" style={{ color: '#0d47a1' }}>
              "{data.docenteACargo.mensaje}"
            </p>
          </div>
        </div>
      </div>

      <div style={{
        background: '#FFF8E1',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <h4 style={{ color: '#FF8F00' }}>🏆 Categorías</h4>
        <Row>
          {data.categorias.map((cat, idx) => (
            <Col md={6} key={idx}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <FaTrophy className="text-warning" />
                <strong>{cat.nombre}:</strong>
                <small className="text-muted">{cat.grados} - {cat.equipos}</small>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{
        background: '#E8F5E9',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <h4 style={{ color: '#2E7D32' }}>📋 Cronograma</h4>
        {data.cronograma.map((item, idx) => (
          <div key={idx} className="d-flex justify-content-between align-items-center py-1 border-bottom">
            <span className="fw-bold">{item.dia}</span>
            <span>{item.actividad}</span>
          </div>
        ))}
      </div>

      {data.galeria?.imagenes && (
        <>
          <h4 className="mt-4 mb-3" style={{ color: '#2196F3' }}>📸 Momentos del Torneo</h4>
          <Row className="g-3 mb-4">
            {data.galeria.imagenes.map((img, idx) => (
              <Col md={6} key={idx}>
                <div style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}>
                  <img 
                    src={img.src} 
                    alt={img.titulo}
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
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
        <FaFutbol className="text-primary me-2" />
        <strong>Impacto:</strong> {data.impacto}
      </div>
    </>
  )
}

export default MicrofutbolContent