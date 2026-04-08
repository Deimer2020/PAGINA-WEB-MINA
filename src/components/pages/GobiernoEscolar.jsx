// src/pages/GobiernoEscolar.jsx
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import { 
  FaUserTie, FaUsers, FaChalkboardTeacher, FaUserGraduate, 
  FaHandsHelping, FaGavel, FaSchool, FaBalanceScale
} from 'react-icons/fa'

const GobiernoEscolar = () => {
  const organos = [
    {
      icono: <FaUserTie size={40} />,
      titulo: "Rector",
      color: "#2E7D32",
      funciones: [
        "Presidir el Consejo Directivo y el Consejo Académico",
        "Representar el establecimiento ante autoridades educativas",
        "Formular planes anuales de acción y mejoramiento",
        "Dirigir el trabajo de los equipos docentes",
        "Administrar el personal asignado a la institución",
        "Realizar la evaluación anual de desempeño"
      ]
    },
    {
      icono: <FaGavel size={40} />,
      titulo: "Consejo Directivo",
      color: "#FF9800",
      integrantes: [
        "Rector (preside)",
        "2 representantes de los docentes",
        "2 representantes de los padres de familia",
        "1 estudiante de grado once",
        "1 representante de los egresados",
        "1 representante del sector productivo"
      ],
      funciones: [
        "Tomar decisiones que afectan el funcionamiento institucional",
        "Resolver conflictos entre docentes y estudiantes",
        "Adoptar el Manual de Convivencia",
        "Fijar criterios para asignación de cupos",
        "Establecer estímulos y sanciones",
        "Participar en la evaluación anual de docentes"
      ]
    },
    {
      icono: <FaSchool size={40} />,
      titulo: "Consejo Académico",
      color: "#2196F3",
      integrantes: [
        "Rector (preside)",
        "Coordinador Académico",
        "Coordinador de Convivencia",
        "Un docente por cada área",
        "Psicoorientadora",
        "Representante de preescolar",
        "Representante de básica primaria"
      ],
      funciones: [
        "Organizar el plan de estudios",
        "Orientar el proceso pedagógico",
        "Participar en la evaluación institucional",
        "Recibir y decidir reclamos sobre evaluación",
        "Promover estrategias para elevar rendimiento académico",
        "Fomentar la integración de las áreas del saber"
      ]
    },
    {
      icono: <FaUserGraduate size={40} />,
      titulo: "Personero Estudiantil",
      color: "#9C27B0",
      requisitos: [
        "Ser estudiante de grado once",
        "Mínimo 3 años en la institución",
        "Excelente rendimiento académico y comportamiento"
      ],
      funciones: [
        "Promover el cumplimiento de derechos y deberes de los estudiantes",
        "Recibir y valorar quejas y reclamos",
        "Presentar solicitudes ante el Rector",
        "Apelar decisiones ante el Consejo Directivo"
      ]
    },
    {
      icono: <FaUsers size={40} />,
      titulo: "Consejo de Estudiantes",
      color: "#E91E63",
      integrantes: [
        "Un representante de cada grado de secundaria",
        "Un representante de preescolar a tercero",
        "Un representante de cuarto y quinto"
      ],
      funciones: [
        "Darse su propia organización interna",
        "Elegir el representante ante el Consejo Directivo",
        "Invitar a estudiantes con iniciativas",
        "Organizar eventos sociales, culturales y deportivos"
      ]
    }
  ]

  const comiteConvivencia = {
    integrantes: [
      "Rector (preside)",
      "Personero estudiantil",
      "Docente con función de orientación",
      "Coordinador",
      "Presidente del Consejo de Padres de Familia",
      "Presidente del Consejo de Estudiantes",
      "Un docente líder en convivencia escolar"
    ],
    funciones: [
      "Identificar, documentar y resolver conflictos",
      "Liderar acciones que fomenten la convivencia",
      "Promover la vinculación a estrategias de convivencia",
      "Convocar espacios de conciliación",
      "Activar la Ruta de Atención Integral",
      "Hacer seguimiento al Manual de Convivencia"
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
            Gobierno Escolar
          </h1>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#2E7D32',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }} />
          <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#555' }}>
            Conoce los órganos que conforman nuestro Gobierno Escolar, sus funciones 
            y los mecanismos de participación democrática en nuestra institución.
          </p>
        </div>

        {/* Órganos del Gobierno Escolar */}
        <Row className="g-4 mb-5">
          {organos.map((organo, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Header style={{
                  backgroundColor: organo.color,
                  color: 'white',
                  padding: '20px',
                  textAlign: 'center',
                  borderBottom: 'none'
                }}>
                  {organo.icono}
                  <h3 className="mt-2 mb-0" style={{ fontSize: '1.3rem' }}>{organo.titulo}</h3>
                </Card.Header>
                <Card.Body>
                  {organo.integrantes && (
                    <>
                      <h6 style={{ color: '#2E7D32', fontWeight: 'bold' }}>👥 Integrantes:</h6>
                      <ul className="mb-3">
                        {organo.integrantes.map((item, idx) => (
                          <li key={idx} style={{ fontSize: '0.9rem' }}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {organo.requisitos && (
                    <>
                      <h6 style={{ color: '#2E7D32', fontWeight: 'bold' }}>📋 Requisitos:</h6>
                      <ul className="mb-3">
                        {organo.requisitos.map((item, idx) => (
                          <li key={idx} style={{ fontSize: '0.9rem' }}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <h6 style={{ color: '#2E7D32', fontWeight: 'bold' }}>⚙️ Funciones:</h6>
                  <ul className="mb-0">
                    {organo.funciones.map((funcion, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem' }}>{funcion}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Comité Escolar de Convivencia */}
        <div className="mt-5">
          <h2 className="text-center mb-4" style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2E7D32',
            fontSize: '2rem'
          }}>
            <FaBalanceScale className="me-2" /> Comité Escolar de Convivencia
          </h2>
          <div className="p-4 bg-white rounded-4 shadow-sm">
            <Row>
              <Col md={6}>
                <h5 style={{ color: '#2E7D32' }}>👥 Integrantes:</h5>
                <ul>
                  {comiteConvivencia.integrantes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col md={6}>
                <h5 style={{ color: '#2E7D32' }}>⚙️ Funciones:</h5>
                <ul>
                  {comiteConvivencia.funciones.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
        </div>

        {/* Ruta de Atención */}
        <div className="mt-5 p-4 bg-light rounded-4">
          <h3 className="text-center mb-4" style={{ color: '#2E7D32' }}>
            🚦 Ruta de Atención Integral para la Convivencia Escolar
          </h3>
          <Row className="text-center g-3">
            <Col md={4}>
              <div className="p-3 bg-white rounded-3">
                <div className="display-4">🟢</div>
                <h5 className="mt-2">Situaciones Tipo I</h5>
                <p className="small text-muted">Conflictos manejados inadecuadamente. Se resuelven con diálogo y mediación pedagógica.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 bg-white rounded-3">
                <div className="display-4">🟡</div>
                <h5 className="mt-2">Situaciones Tipo II</h5>
                <p className="small text-muted">Agresión escolar, acoso (bullying) o ciberacoso. Requiere intervención del Comité de Convivencia.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 bg-white rounded-3">
                <div className="display-4">🔴</div>
                <h5 className="mt-2">Situaciones Tipo III</h5>
                <p className="small text-muted">Constitutivas de presuntos delitos. Se activa la Ruta con autoridades competentes.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default GobiernoEscolar