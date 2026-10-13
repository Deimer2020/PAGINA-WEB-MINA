// src/components/nosotros/CurrentDirectorsSection.jsx
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaUserFriends, FaGraduationCap, FaUsers, FaAward, FaBriefcase } from 'react-icons/fa'

// Importar fotos
import fotoRector from "../../assets/images/directivos/rector.jpeg"
import fotoCoordinador from '../../assets/images/directivos/coordinadora.jpeg'
import fotoOrientadora from '../../assets/images/directivos/orientadora.jpeg'

const CurrentDirectorsSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [imgError, setImgError] = useState({})

  const persons = {
    rector: {
      id: 'rector',
      nombre: "Esp. Aquileo Aguilar Ortiz",
      cargo: "Rector",
      foto: fotoRector,
      color: "#2E7D32",
      experiencia: "+25 años de experiencia educativa",
      titulo: "Especialista en Gerencia Educativa",
      descripcion: "Licenciado en Educación Básica Primaria, especialista en Gerencia Educativa. Ha liderado procesos de transformación institucional durante más de dos décadas.",
      email: "rectoria@ieagricolalamina.edu.co",
      telefono: "(605) 123 4567",
      periodo: "2024",
      frases: '"La educación es el motor de transformación del campo colombiano."',
      iniciales: "AA"
    },
    coordinador: {
      id: 'coordinador',
      nombre: "Mag. Ruth Ester Ruiz Suárez",
      cargo: "Coordinadora Académica",
      foto: fotoCoordinador,
      color: "#FF9800",
      experiencia: "+15 años de experiencia",
      titulo: "Magíster en Educación",
      descripcion: "Especialista en gestión curricular y evaluación educativa. Lidera procesos de mejora académica e innovación pedagógica.",
      email: "academica@ieagricolalamina.edu.co",
      telefono: "(605) 123 4568",
      periodo: "2024",
      frases: '"La excelencia académica se construye con pasión y compromiso."',
      iniciales: "RS"
    },
    orientadora: {
      id: 'orientadora',
      nombre: "Lic. Isilma Rodríguez Oñate",
      cargo: "Orientadora Escolar",
      foto: fotoOrientadora,
      color: "#9C27B0",
      experiencia: "+12 años de experiencia",
      titulo: "Especialista en Psicología Educativa",
      descripcion: "Acompaña a estudiantes y docentes en procesos de bienestar, convivencia y desarrollo socioemocional.",
      email: "orientacion@ieagricolalamina.edu.co",
      telefono: "(605) 123 4570",
      periodo: "2024",
      frases: '"El bienestar emocional es la base del aprendizaje significativo."',
      iniciales: "IR"
    }
  }

  const handleOpenModal = (personKey) => {
    setSelectedPerson(persons[personKey])
    setShowModal(true)
  }

  // Renderizar foto con placeholder de iniciales
  const renderFoto = (person, size = 'normal') => {
    const sizes = {
      small: { container: '60px', fontSize: '1.5rem' },
      normal: { container: '150px', fontSize: '3.5rem' },
      large: { container: '250px', fontSize: '5rem' }
    }
    const currentSize = sizes[size] || sizes.normal

    if (imgError[person.id]) {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${person.color}, ${person.color}dd)`,
          color: 'white',
          fontSize: currentSize.fontSize,
          fontWeight: '700',
          fontFamily: "'Playfair Display', serif",
          letterSpacing: '2px'
        }}>
          {person.iniciales}
        </div>
      )
    }

    return (
      <img 
        src={person.foto} 
        alt={person.cargo}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={() => {
          setImgError(prev => ({ ...prev, [person.id]: true }))
        }}
      />
    )
  }

  // Renderizar foto en el modal
  const renderFotoModal = (person) => {
    if (imgError[person.id]) {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${person.color}, ${person.color}dd)`,
          color: 'white',
          fontSize: '5rem',
          fontWeight: '700',
          fontFamily: "'Playfair Display', serif",
          letterSpacing: '2px'
        }}>
          {person.iniciales}
        </div>
      )
    }

    return (
      <img 
        src={person.foto} 
        alt={person.cargo}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={() => {
          setImgError(prev => ({ ...prev, [person.id]: true }))
        }}
      />
    )
  }

  return (
    <Container id="directivos-actuales" fluid style={{ backgroundColor: '#F9F9F9', padding: '80px 0' }}>
      <Container>
        {/* Título */}
        <h2 className="text-center mb-4" style={{
          fontFamily: "'Playfair Display', serif",
          color: '#2E7D32',
          fontSize: '2.5rem',
          position: 'relative'
        }}>
          Directivos y Estructura de Gobierno
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2E7D32, #A5D6A7)',
            margin: '15px auto 0',
            borderRadius: '2px'
          }} />
        </h2>
        <p className="text-center text-muted mb-5">
          <small>Actualizado: 2026</small>
        </p>

        {/* ==================== NIVEL 1: RECTOR ==================== */}
        <div className="text-center mb-5">
          <div style={{
            display: 'inline-block',
            background: 'white',
            borderRadius: '24px',
            padding: '35px 45px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            maxWidth: '750px',
            width: '100%',
            borderTop: '5px solid #2E7D32',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)'
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'
          }}
          onClick={() => handleOpenModal('rector')}>
            
            <div style={{
              width: '150px',
              height: '150px',
              margin: '0 auto 15px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #2E7D32',
              boxShadow: '0 5px 15px rgba(46,125,50,0.25)',
              background: '#E8F5E9',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              {renderFoto(persons.rector, 'normal')}
            </div>
            
            <h3 style={{ color: '#2E7D32', fontWeight: '700', fontSize: '1.5rem' }}>Rector</h3>
            <h4 style={{ color: '#333', fontWeight: '600', fontSize: '1.1rem' }}>Esp. Aquileo Aguilar Ortiz</h4>
            
            <div className="d-flex justify-content-center gap-4 flex-wrap mt-2">
              <span className="text-muted small d-flex align-items-center gap-1">
                <FaPhone className="text-success" size={12} /> (605) 123 4567
              </span>
              <span className="text-muted small d-flex align-items-center gap-1">
                <FaEnvelope className="text-success" size={12} /> rectoria@ieagricolalamina.edu.co
              </span>
            </div>
            <small className="text-muted">Inicio periodo: 2024</small>
          </div>
        </div>

        {/* Flecha decorativa */}
        <div className="text-center mb-4" style={{ color: '#A5D6A7', fontSize: '1.5rem' }}>
          <i className="bi bi-chevron-down"></i>
        </div>

        {/* ==================== NIVEL 2: COORDINADOR ACADÉMICO ==================== */}
        <h4 className="text-center mb-4" style={{ 
          color: '#2E7D32', 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '1.3rem',
          fontWeight: '600'
        }}>
          Coordinación Académica
        </h4>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 col-md-10">
            <div className="p-4 bg-white rounded-4 shadow-sm" style={{
              borderBottom: '4px solid #FF9800',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)'
            }}
            onClick={() => handleOpenModal('coordinador')}>
              <Row className="align-items-center g-4">
                <Col md={3} className="text-center">
                  <div style={{
                    width: '130px',
                    height: '130px',
                    margin: '0 auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid #FF9800',
                    boxShadow: '0 5px 15px rgba(255,152,0,0.25)',
                    background: '#FFF3E0',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    {renderFoto(persons.coordinador, 'normal')}
                  </div>
                </Col>
                <Col md={9}>
                  <h5 style={{ color: '#2E7D32', fontWeight: '700', fontSize: '1.2rem' }}>
                    Mag. Ruth Ester Ruiz Suárez
                  </h5>
                  <p className="text-warning fw-bold" style={{ color: '#FF9800', fontSize: '0.85rem' }}>
                    <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2">
                      Coordinadora Académica
                    </span>
                  </p>
                  <div className="d-flex flex-wrap gap-3 small text-muted">
                    <span><FaBriefcase className="me-1 text-warning" /> +15 años</span>
                    <span><FaAward className="me-1 text-warning" /> Magíster en Educación</span>
                  </div>
                  <div className="small mt-2">
                    <p className="mb-1"><FaPhone className="me-1 text-muted" /> (605) 123 4568</p>
                    <p className="mb-0"><FaEnvelope className="me-1 text-muted" /> academica@ieagricolalamina.edu.co</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        {/* Flecha decorativa */}
        <div className="text-center mb-4" style={{ color: '#A5D6A7', fontSize: '1.5rem' }}>
          <i className="bi bi-chevron-down"></i>
        </div>

        {/* ==================== NIVEL 3: ORIENTACIÓN ESCOLAR ==================== */}
        <h4 className="text-center mb-4" style={{ 
          color: '#2E7D32', 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '1.3rem',
          fontWeight: '600'
        }}>
          Orientación Escolar
        </h4>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 col-md-10">
            <div className="p-4 bg-white rounded-4 shadow-sm" style={{
              borderBottom: '4px solid #9C27B0',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)'
            }}
            onClick={() => handleOpenModal('orientadora')}>
              <Row className="align-items-center g-4">
                <Col md={3} className="text-center">
                  <div style={{
                    width: '130px',
                    height: '130px',
                    margin: '0 auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid #9C27B0',
                    boxShadow: '0 5px 15px rgba(156,39,176,0.25)',
                    background: '#F3E5F5',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    {renderFoto(persons.orientadora, 'normal')}
                  </div>
                </Col>
                <Col md={9}>
                  <h5 style={{ color: '#2E7D32', fontWeight: '700', fontSize: '1.2rem' }}>
                    Lic. Isilma Rodríguez Oñate
                  </h5>
                  <p className="fw-bold" style={{ color: '#9C27B0', fontSize: '0.85rem' }}>
                    <span className="badge bg-purple bg-opacity-10 px-3 py-2" style={{ backgroundColor: '#F3E5F5', color: '#9C27B0' }}>
                      Orientadora Escolar
                    </span>
                  </p>
                  <div className="d-flex flex-wrap gap-3 small text-muted">
                    <span><FaBriefcase className="me-1" style={{ color: '#9C27B0' }} /> +12 años</span>
                    <span><FaAward className="me-1" style={{ color: '#9C27B0' }} /> Especialista en Psicología Educativa</span>
                  </div>
                  <div className="small mt-2">
                    <p className="mb-1"><FaPhone className="me-1 text-muted" /> (605) 123 4570</p>
                    <p className="mb-0"><FaEnvelope className="me-1 text-muted" /> orientacion@ieagricolalamina.edu.co</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        {/* ==================== MODAL ==================== */}
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)} 
          size="lg" 
          centered
          style={{ zIndex: 1050 }}
        >
          {selectedPerson && (
            <>
              <Modal.Header closeButton style={{ borderBottom: '1px solid #eee', padding: '20px 30px' }}>
                <Modal.Title style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: selectedPerson.color,
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>
                  {selectedPerson.cargo}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ padding: '30px' }}>
                <Row className="align-items-center g-4">
                  <Col md={5} className="text-center">
                    <div style={{
                      width: '220px',
                      height: '220px',
                      margin: '0 auto',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: `6px solid ${selectedPerson.color}`,
                      boxShadow: `0 10px 30px ${selectedPerson.color}30`,
                      background: '#f8f9fa'
                    }}>
                      {renderFotoModal(selectedPerson)}
                    </div>
                    <div className="mt-3 d-flex justify-content-center gap-3">
                      <a href={`tel:${selectedPerson.telefono}`} className="btn btn-outline-success btn-sm rounded-pill px-3">
                        <FaPhone /> Llamar
                      </a>
                      <a href={`mailto:${selectedPerson.email}`} className="btn btn-outline-success btn-sm rounded-pill px-3">
                        <FaEnvelope /> Email
                      </a>
                    </div>
                  </Col>
                  <Col md={7}>
                    <h3 style={{ color: '#2E7D32', fontWeight: '700', fontSize: '1.6rem', marginBottom: '5px' }}>
                      {selectedPerson.nombre}
                    </h3>
                    <h5 style={{ color: selectedPerson.color, fontWeight: '600', fontSize: '1rem', marginBottom: '15px' }}>
                      {selectedPerson.cargo}
                    </h5>
                    
                    <div style={{ 
                      background: '#f8f9fa', 
                      borderRadius: '12px', 
                      padding: '15px', 
                      marginBottom: '15px',
                      borderLeft: `4px solid ${selectedPerson.color}`
                    }}>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <FaBriefcase style={{ color: selectedPerson.color }} />
                        <span><strong>{selectedPerson.experiencia}</strong></span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <FaAward style={{ color: selectedPerson.color }} />
                        <span><strong>{selectedPerson.titulo}</strong></span>
                      </div>
                    </div>
                    
                    <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>
                      {selectedPerson.descripcion}
                    </p>
                    
                    <div style={{ 
                      background: '#E8F5E9', 
                      borderRadius: '10px', 
                      padding: '12px 18px', 
                      margin: '15px 0',
                      fontStyle: 'italic',
                      color: '#2E7D32',
                      fontSize: '0.95rem',
                      borderLeft: `4px solid ${selectedPerson.color}`
                    }}>
                      <span style={{ fontSize: '1.2rem', color: selectedPerson.color }}>"</span>
                      {selectedPerson.frases}
                      <span style={{ fontSize: '1.2rem', color: selectedPerson.color }}>"</span>
                    </div>
                    
                    <small className="text-muted">Inicio periodo: {selectedPerson.periodo}</small>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer style={{ borderTop: '1px solid #eee', padding: '15px 30px' }}>
                <button 
                  className="btn btn-success rounded-pill px-4"
                  onClick={() => setShowModal(false)}
                >
                  Cerrar
                </button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </Container>
  )
}

export default CurrentDirectorsSection