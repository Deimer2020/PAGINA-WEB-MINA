// src/components/nosotros/StudentProfileSection.jsx
import { Container, Row, Col } from 'react-bootstrap'

const StudentProfileSection = () => {
  return (
    <Container id="perfil-estudiante" className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem'
      }}>
        Perfil del Estudiante
        <div style={{
          width: '80px',
          height: '4px',
          background: '#2E7D32',
          margin: '15px auto 0',
          borderRadius: '2px'
        }} />
      </h2>
      <Row>
        <Col md={3} className="text-center mb-4">
          <div style={{
            background: '#E8F5E9',
            borderRadius: '20px',
            padding: '30px',
            height: '100%',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>✨</div>
            <h3 style={{ color: '#2E7D32', fontSize: '1.2rem' }}>Ético</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Aprecio y respeto por sí mismo y los demás, deseo de superación, amor al trabajo y búsqueda del bien común.</p>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div style={{
            background: '#E8F5E9',
            borderRadius: '20px',
            padding: '30px',
            height: '100%',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🇨🇴</div>
            <h3 style={{ color: '#2E7D32', fontSize: '1.2rem' }}>Nacionalista</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Valoración de la cultura Kankuama, identificación con los símbolos patrios e institucionales.</p>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div style={{
            background: '#E8F5E9',
            borderRadius: '20px',
            padding: '30px',
            height: '100%',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📚</div>
            <h3 style={{ color: '#2E7D32', fontSize: '1.2rem' }}>Formal e Integral</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Responsable, con espíritu investigativo, creativo, democrático y crítico.</p>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div style={{
            background: '#E8F5E9',
            borderRadius: '20px',
            padding: '30px',
            height: '100%',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌾</div>
            <h3 style={{ color: '#2E7D32', fontSize: '1.2rem' }}>Tecnológico</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Cualidades de liderazgo, participación en programas de desarrollo socio-económico de la comunidad.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default StudentProfileSection