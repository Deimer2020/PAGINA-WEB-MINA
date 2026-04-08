// src/pages/Perfiles.jsx
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaHeart, FaLightbulb, FaHandsHelping } from 'react-icons/fa'

const Perfiles = () => {
  const perfilEstudiante = {
    icono: <FaUserGraduate size={50} />,
    titulo: "Perfil del Estudiante",
    color: "#2E7D32",
    descripcion: "El estudiante de la Institución Educativa Agrícola La Mina es una persona Responsable, Respetuosa, leal, autónoma, sensible, racional, con personalidad humana y espiritual que le permite su desarrollo integral.",
    caracteristicas: [
      "Capacidad de corrección, autoevaluación, tolerancia y disciplina",
      "Hábitos de sociabilidad que facilitan adaptación al contexto cultural",
      "Espíritu cívico, solidario, con proyección social",
      "Desarrolla la creatividad y el sentido crítico",
      "Maneja conocimientos académicos y técnicos"
    ]
  }

  const perfilDocente = {
    icono: <FaChalkboardTeacher size={50} />,
    titulo: "Perfil del Docente",
    color: "#FF9800",
    descripcion: "El docente de la Institución Educativa Agrícola La Mina es una persona cuya formación integral, lo lleva a ser un educador justo, racional, capaz de afrontar y orientar los comportamientos de los educandos.",
    caracteristicas: [
      "Preparación académica y pedagógica para orientar hacia el éxito",
      "Maneja altos niveles de autoestima y amor a su profesión",
      "Crítico, reflexivo, creativo, responsable",
      "Generador de valores",
      "Comprometido con la institución a través de actitudes de cambio"
    ]
  }

  const perfilPadre = {
    icono: <FaUsers size={50} />,
    titulo: "Perfil del Padre de Familia",
    color: "#2196F3",
    descripcion: "El padre de familia o acudiente debe ser un ejemplo de vida para con su hijo, orientador en la formación y apoyo en las experiencias de cada día.",
    caracteristicas: [
      "Primer educador de sus hijos",
      "Educa con testimonio de vida: honestidad, sinceridad, lealtad",
      "Promueve el diálogo, la concertación y la sana convivencia",
      "Participa en todos los eventos del Colegio",
      "Trabaja mancomunadamente y apoya las acciones del Colegio",
      "Promueve el sentido de pertenencia y querencia",
      "Es justo, equitativo, amable, cortés y racional",
      "Respetuoso de las decisiones y actuaciones del Colegio"
    ]
  }

  return (
    <div style={{ marginTop: '76px', padding: '40px 0', backgroundColor: '#F9F9F9' }}>
      <Container>
        {/* Hero */}
        <div className="text-center mb-5">
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2E7D32',
            fontSize: '2.5rem',
            marginBottom: '15px'
          }}>
            Perfiles Institucionales
          </h1>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#2E7D32',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }} />
          <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#555' }}>
            Conoce las características y cualidades que definen a los miembros de nuestra comunidad educativa.
          </p>
        </div>

        {/* Perfil Estudiante */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: `${perfilEstudiante.color}10`, borderLeft: `5px solid ${perfilEstudiante.color}` }}>
              <Row className="align-items-center">
                <Col md={2} className="text-center">
                  <div style={{ color: perfilEstudiante.color }}>{perfilEstudiante.icono}</div>
                </Col>
                <Col md={10}>
                  <h2 style={{ color: perfilEstudiante.color }}>{perfilEstudiante.titulo}</h2>
                  <p className="lead" style={{ fontSize: '1rem' }}>{perfilEstudiante.descripcion}</p>
                </Col>
              </Row>
              <Row className="mt-3">
                {perfilEstudiante.caracteristicas.map((item, idx) => (
                  <Col md={6} key={idx} className="mb-2">
                    <div className="d-flex align-items-center">
                      <FaHeart className="text-success me-2" />
                      <span>{item}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Perfil Docente */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: `${perfilDocente.color}10`, borderLeft: `5px solid ${perfilDocente.color}` }}>
              <Row className="align-items-center">
                <Col md={2} className="text-center">
                  <div style={{ color: perfilDocente.color }}>{perfilDocente.icono}</div>
                </Col>
                <Col md={10}>
                  <h2 style={{ color: perfilDocente.color }}>{perfilDocente.titulo}</h2>
                  <p className="lead" style={{ fontSize: '1rem' }}>{perfilDocente.descripcion}</p>
                </Col>
              </Row>
              <Row className="mt-3">
                {perfilDocente.caracteristicas.map((item, idx) => (
                  <Col md={6} key={idx} className="mb-2">
                    <div className="d-flex align-items-center">
                      <FaLightbulb className="text-warning me-2" />
                      <span>{item}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Perfil Padre de Familia */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: `${perfilPadre.color}10`, borderLeft: `5px solid ${perfilPadre.color}` }}>
              <Row className="align-items-center">
                <Col md={2} className="text-center">
                  <div style={{ color: perfilPadre.color }}>{perfilPadre.icono}</div>
                </Col>
                <Col md={10}>
                  <h2 style={{ color: perfilPadre.color }}>{perfilPadre.titulo}</h2>
                  <p className="lead" style={{ fontSize: '1rem' }}>{perfilPadre.descripcion}</p>
                </Col>
              </Row>
              <Row className="mt-3">
                {perfilPadre.caracteristicas.map((item, idx) => (
                  <Col md={6} key={idx} className="mb-2">
                    <div className="d-flex align-items-center">
                      <FaHandsHelping className="text-primary me-2" />
                      <span>{item}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Valores Clave */}
        <div className="mt-5 p-4 bg-white rounded-4 shadow-sm text-center">
          <h3 style={{ color: '#2E7D32' }}>🌱 Valores que nos identifican</h3>
          <Row className="mt-4 g-3">
            {[
              { valor: "Responsabilidad", icono: "✓", color: "#2E7D32" },
              { valor: "Respeto", icono: "✓", color: "#4CAF50" },
              { valor: "Solidaridad", icono: "✓", color: "#FF9800" },
              { valor: "Tolerancia", icono: "✓", color: "#2196F3" },
              { valor: "Honestidad", icono: "✓", color: "#9C27B0" },
              { valor: "Creatividad", icono: "✓", color: "#E91E63" }
            ].map((item, idx) => (
              <Col md={2} key={idx}>
                <div className="p-3 rounded-3" style={{ backgroundColor: `${item.color}20` }}>
                  <span style={{ fontSize: '1.5rem', color: item.color }}>{item.icono}</span>
                  <p className="mt-2 mb-0 fw-bold">{item.valor}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Perfiles