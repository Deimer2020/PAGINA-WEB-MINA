// src/components/nosotros/CurrentDirectorsSection.jsx
import { Container, Row, Col } from 'react-bootstrap'
import { FaUserTie, FaPhone, FaEnvelope, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa'

const CurrentDirectorsSection = () => {
  return (
    <Container id="directivos-actuales" fluid style={{ backgroundColor: '#F9F9F9', padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{
          fontFamily: "'Playfair Display', serif",
          color: '#2E7D32',
          fontSize: '2.5rem'
        }}>
          Directivos Actuales
        </h2>
        <p className="text-center text-muted mb-5">
          <small>Actualizado: 2025</small>
        </p>
        
        {/* Rector Actual */}
        <div className="mb-5 p-4 bg-white rounded-4 shadow-sm">
          <Row className="align-items-center">
            <Col md={3} className="text-center">
              <div style={{
                width: '120px',
                height: '120px',
                background: '#2E7D32',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <FaUserTie size={60} color="white" />
              </div>
            </Col>
            <Col md={9}>
              <h3 style={{ color: '#2E7D32' }}>Esp. Aquileo Aguilar Ortiz</h3>
              <p className="text-success fw-bold">Rector</p>
              <p>Licenciado en Educación Básica Primaria, especialista en Gerencia Educativa. Ha sido coordinador y rector encargado en varias ocasiones, con amplia trayectoria en la institución.</p>
              <p><FaPhone className="me-2" /> (605) 123 4567</p>
              <p><FaEnvelope className="me-2" /> rectoria@ieagricolalamina.edu.co</p>
              <small className="text-muted">Inicio periodo: 2024</small>
            </Col>
          </Row>
        </div>

        {/* Coordinadores */}
        <h4 className="mb-3" style={{ color: '#2E7D32' }}>Coordinadores</h4>
        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <div className="p-3 bg-white rounded-3 shadow-sm h-100">
              <FaChalkboardTeacher className="text-success me-2" />
              <strong>Lic. Enys Manjarrez Missath</strong>
              <p className="mb-1 text-muted">Coordinadora Académica</p>
              <small><FaPhone /> (605) 123 4568</small><br />
              <small><FaEnvelope /> academica@ieagricolalamina.edu.co</small>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="p-3 bg-white rounded-3 shadow-sm h-100">
              <FaChalkboardTeacher className="text-success me-2" />
              <strong>Lic. Hugo Martínez Córdoba</strong>
              <p className="mb-1 text-muted">Coordinador de Disciplina</p>
              <small><FaPhone /> (605) 123 4569</small><br />
              <small><FaEnvelope /> disciplina@ieagricolalamina.edu.co</small>
            </div>
          </Col>
        </Row>

        {/* Orientación Escolar */}
        <h4 className="mb-3" style={{ color: '#2E7D32' }}>Orientación Escolar</h4>
        <div className="p-3 bg-white rounded-3 shadow-sm mb-4">
          <strong>Lic. Sandra Ramírez Luquez</strong>
          <p className="mb-1 text-muted">Orientadora Escolar</p>
          <small><FaPhone /> (605) 123 4570</small><br />
          <small><FaEnvelope /> orientacion@ieagricolalamina.edu.co</small>
        </div>

        {/* Consejo Directivo */}
        <h4 className="mb-3" style={{ color: '#2E7D32' }}>Consejo Directivo</h4>
        <Row>
          {[
            { nombre: "Esp. Aquileo Aguilar Ortiz", cargo: "Rector - Presidente" },
            { nombre: "Lic. Enys Manjarrez Missath", cargo: "Representante Docente" },
            { nombre: "Lic. Francisco Martínez Ochoa", cargo: "Representante Docente" },
            { nombre: "Ariel Francisco Pacheco Maestre", cargo: "Representante Padres de Familia" },
            { nombre: "Sixto Rodríguez Luquez", cargo: "Representante Padres de Familia" },
            { nombre: "Estudiante por definir", cargo: "Representante Estudiantil" },
            { nombre: "Norma Irina Montero", cargo: "Representante Exalumnos" }
          ].map((miembro, idx) => (
            <Col md={6} key={idx} className="mb-2">
              <div className="p-2 bg-white rounded-3">
                <FaUserFriends className="text-success me-2" />
                <strong>{miembro.nombre}</strong> - {miembro.cargo}
              </div>
            </Col>
          ))}
        </Row>

        {/* Personero y Presidente de Padres */}
        <Row className="mt-4">
          <Col md={6}>
            <h4 className="mb-3" style={{ color: '#2E7D32' }}>Personero Estudiantil</h4>
            <div className="p-3 bg-white rounded-3 shadow-sm">
              <strong>Nacler Arias Arias </strong>
              <p className="mb-0 text-muted">Periodo: 2026</p>
            </div>
          </Col>
          <Col md={6}>
            <h4 className="mb-3" style={{ color: '#2E7D32' }}>Presidente Padres de Familia</h4>
            <div className="p-3 bg-white rounded-3 shadow-sm">
              <strong>Ricardo Miguel Pachecho Luquez</strong>
              <p className="mb-0 text-muted">Periodo: 2026-2027</p>
              <small><FaPhone />3160415575</small>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CurrentDirectorsSection