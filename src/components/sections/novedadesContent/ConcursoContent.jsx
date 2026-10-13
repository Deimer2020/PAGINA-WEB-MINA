// src/components/sections/NovedadesContent/ConcursoContent.jsx
import { Badge, Button, Form } from 'react-bootstrap'
import { FaCalendarAlt, FaRegCalendarAlt, FaWhatsapp, FaTrophy, FaMicrophone } from 'react-icons/fa'

const ConcursoContent = ({ data, formData, handleInputChange, handleSubmit }) => {
  return (
    <>
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
            <source src={data.videoPromocional} type="video/mp4" />
          </video>
        </div>
        <p className="text-center text-muted small">📹 Video promocional</p>
      </div>

      <div className="mb-4 text-center">
        <Badge bg="danger" className="px-3 py-2 me-2">
          <FaRegCalendarAlt className="me-2" /> Inscripciones: {data.fechaInscripcion}
        </Badge>
        <Badge bg="success" className="px-3 py-2">
          <FaCalendarAlt className="me-2" /> Evento: {data.fechaEvento}
        </Badge>
      </div>

      <h3 className="text-center mb-3" style={{ color: '#E91E63', fontFamily: "'Playfair Display', serif" }}>
        {data.subtitulo}
      </h3>
      <p className="lead" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        {data.introduccion}
      </p>

      <div style={{
        background: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD9 100%)',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <h5 style={{ color: '#E91E63' }}>📋 Requisitos</h5>
        <ul className="mb-0">
          {data.requisitos.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      <div style={{
        background: '#FFF3E0',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        <FaTrophy size={40} color="#FF9800" />
        <h5 style={{ color: '#E91E63' }}>{data.premio.titulo}</h5>
        <p>{data.premio.descripcion}</p>
        <p className="fw-bold mb-0">{data.premio.adicional}</p>
      </div>

      <div className="mb-4">
        <h5 style={{ color: '#E91E63' }}>🎭 Jurado</h5>
        <ul>
          {data.jurado.map((juez, idx) => (
            <li key={idx}>{juez}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 p-3 bg-light rounded-3">
        <h5 className="text-center">🎤 ¡Inscríbete aquí!</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Control type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="text" name="grado" placeholder="Grado" value={formData.grado} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" name="cancion" placeholder="Canción" value={formData.cancion} onChange={handleInputChange} required />
          </Form.Group>
          <Button variant="danger" type="submit" className="w-100">
            <FaWhatsapp className="me-2" /> Inscribirme
          </Button>
        </Form>
        <p className="text-center small text-muted mt-2">*Inscripciones gratuitas</p>
      </div>
    </>
  )
}

export default ConcursoContent