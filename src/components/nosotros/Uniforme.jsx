// src/components/nosotros/Uniformes.jsx
import { Container, Row, Col } from 'react-bootstrap'
import { FaMale, FaFemale, FaRunning, FaTshirt, FaClock, FaSun, FaMoon, FaTree, FaCalendarAlt } from 'react-icons/fa'
import { GiFarmer } from 'react-icons/gi'

const Uniformes = () => {
  const horarios = [
    { hora: "6:00 - 7:00 am", actividad: "Primera Clase", icono: "📚" },
    { hora: "7:00 - 8:00 am", actividad: "Segunda Clase", icono: "📖" },
    { hora: "8:00 - 9:00 am", actividad: "Tercera Clase", icono: "✏️" },
    { hora: "9:00 - 10:00 am", actividad: "Cuarta Clase", icono: "📝" },
    { hora: "10:00 - 10:20 am", actividad: "Descanso", icono: "🥪", destacado: true },
    { hora: "10:20 - 11:20 am", actividad: "Quinta Clase", icono: "🔬" },
    { hora: "11:20 - 12:20 pm", actividad: "Sexta Clase", icono: "🧪" },
    { hora: "12:20 - 1:00 pm", actividad: "Descanso", icono: "🍽️", destacado: true },
    { hora: "1:00 - 2:00 pm", actividad: "Séptima Clase", icono: "💻" },
    { hora: "2:00 - 3:00 pm", actividad: "Octava Clase", icono: "🎨" }
  ]

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#F8F9FA' }}>
      <Container>
        {/* Título con decoración */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-3 mb-3">
            <FaClock size={30} color="#2E7D32" />
            <FaTshirt size={30} color="#2E7D32" />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2E7D32',
            fontSize: '2.5rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            Horarios y Uniformes
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #2E7D32, #A5D6A7, #2E7D32)',
            margin: '15px auto 0',
            borderRadius: '2px'
          }} />
          <p className="text-muted mt-3">Organiza tu día y conoce nuestra identidad institucional</p>
        </div>

        <Row className="g-4">
          {/* Horario Escolar */}
          <Col lg={6}>
            <div className="p-4 rounded-4 shadow-lg h-100" style={{
              background: 'white',
              transition: 'transform 0.3s ease',
              borderTop: '5px solid #2E7D32'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FaClock size={25} color="white" />
                </div>
                <div>
                  <h3 className="mb-0" style={{ color: '#2E7D32', fontWeight: 'bold' }}>Horario Escolar</h3>
                  <small className="text-muted">Jornada continua - Lunes a Viernes</small>
                </div>
              </div>

              {/* Pestañas de niveles */}
              <div className="d-flex gap-2 mb-4">
                {['Secundaria y Media', 'Primaria'].map((nivel, idx) => (
                  <div key={idx} className="px-3 py-1 rounded-pill" style={{
                    background: idx === 0 ? '#2E7D32' : '#E8F5E9',
                    color: idx === 0 ? 'white' : '#2E7D32',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    {nivel}
                  </div>
                ))}
              </div>

              {/* Lista de horarios */}
              <div className="mb-4">
                {horarios.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center py-2 border-bottom" style={{
                    backgroundColor: item.destacado ? '#FFF8E1' : 'transparent',
                    borderRadius: '8px',
                    padding: '8px 12px'
                  }}>
                    <div style={{ width: '60px', fontSize: '1.2rem' }}>{item.icono}</div>
                    <div style={{ width: '100px', fontWeight: '500' }}>{item.hora}</div>
                    <div className="flex-grow-1 d-flex justify-content-between align-items-center">
                      <span>{item.actividad}</span>
                      {item.destacado && (
                        <span className="badge bg-warning text-dark px-2 py-1 rounded-pill">
                          ⏸️ Recreo
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Primaria simplificado */}
              <div className="mt-3 p-3 rounded-3" style={{ backgroundColor: '#E8F5E9' }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <FaSun size={20} color="#2E7D32" />
                    <strong>Primaria:</strong>
                  </div>
                  <div>6:00 am - 8:00 am</div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <div className="d-flex align-items-center gap-2">
                    <FaMoon size={20} color="#2E7D32" />
                    <strong>Descanso:</strong>
                  </div>
                  <div>10:00 am - 10:20 am</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Uniformes */}
          <Col lg={6}>
            <div className="p-4 rounded-4 shadow-lg h-100" style={{
              background: 'white',
              transition: 'transform 0.3s ease',
              borderTop: '5px solid #FF9800'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #FF9800, #FFB74D)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FaTshirt size={25} color="white" />
                </div>
                <div>
                  <h3 className="mb-0" style={{ color: '#FF9800', fontWeight: 'bold' }}>Uniformes</h3>
                  <small className="text-muted">Identidad y pertenencia institucional</small>
                </div>
              </div>

              {/* Uniforme de Diario */}
              <div className="mb-4 p-3 rounded-3" style={{ backgroundColor: '#FFF8E1' }}>
                <h5 className="mb-3 d-flex align-items-center gap-2">
                  <FaTshirt style={{ color: '#FF9800' }} /> Uniforme de Diario
                </h5>
                <Row>
                  <Col sm={6}>
                    <div className="p-2 rounded-3" style={{ backgroundColor: 'white' }}>
                      <p className="mb-2 fw-bold d-flex align-items-center gap-1">
                        <FaMale /> Hombres
                      </p>
                      <ul className="small mb-0 ps-3">
                        <li>Pantalón azul turquí clásico</li>
                        <li>Camisa guayabera blanca con escudo</li>
                        <li>Zapatos negros en cuero</li>
                        <li>Medias oscuras o blancas</li>
                        <li>Correa negra</li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="p-2 rounded-3" style={{ backgroundColor: 'white' }}>
                      <p className="mb-2 fw-bold d-flex align-items-center gap-1">
                        <FaFemale /> Mujeres
                      </p>
                      <ul className="small mb-0 ps-3">
                        <li>Jardinera azul turquí</li>
                        <li>Camisa de dacrón blanco</li>
                        <li>Zapatos negros en cuero</li>
                        <li>Medias blancas a media pierna</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Uniforme de Educación Física */}
              <div className="mb-4 p-3 rounded-3" style={{ backgroundColor: '#E8F5E9' }}>
                <h5 className="mb-2 d-flex align-items-center gap-2">
                  <FaRunning style={{ color: '#2E7D32' }} /> Uniforme de Educación Física
                </h5>
                <div className="d-flex flex-wrap gap-2 mb-2">
                  {['Camiseta blanca con cuello y bies verde', 'Sudadera verde', 'Tenis totalmente blancos', 'Medias blancas'].map((item, idx) => (
                    <span key={idx} className="badge bg-white text-dark border px-3 py-2 rounded-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <small className="text-muted">*La camiseta debe llevar el escudo institucional</small>
              </div>

              {/* Uniforme de Campo */}
              <div className="p-3 rounded-3" style={{ backgroundColor: '#E3F2FD' }}>
                <h5 className="mb-2 d-flex align-items-center gap-2">
                  <GiFarmer style={{ color: '#2196F3' }} /> Uniforme de labores pedagógicas en el campo
                </h5>
                <div className="d-flex flex-wrap gap-2">
                  {['Camisa azul claro manga larga con escudo', 'Jean azul (sin rotos)', 'Botas de trabajo'].map((item, idx) => (
                    <span key={idx} className="badge bg-white text-dark border px-3 py-2 rounded-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nota adicional */}
              <div className="mt-4 p-2 text-center">
                <small className="text-muted">
                  <FaCalendarAlt className="me-1" /> El uso correcto del uniforme es obligatorio durante toda la jornada escolar
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Uniformes