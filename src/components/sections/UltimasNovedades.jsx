import { useState } from 'react'
import { Container, Row, Col, Card, Button, Badge, Modal, Form } from 'react-bootstrap'
import { 
  FaCalendarAlt, FaNewspaper, FaVoteYea, FaLaptopCode, 
  FaChartLine, FaShieldAlt, FaUsers, FaUserTie, FaTrophy, FaMusic, 
  FaGuitar, FaUserFriends, FaStar, FaMicrophoneAlt, FaMapPin,
  FaMicrophone, FaWhatsapp, FaRegCalendarAlt
} from 'react-icons/fa'

// Importar imágenes de las tarjetas
import imgElecciones from '../../assets/images/novedades/elecciones-card.jpeg'
import imgFeria from '../../assets/images/novedades/feria-card.jpeg'
import imgConcurso from '../../assets/images/novedades/concurso-card.jpeg'
// Importar fotos de los ganadores
import fotoYcleinis from '../../assets/images/ganadores/8.png'
import fotoNacler from '../../assets/images/ganadores/9.png'

// Importar imágenes y video de las elecciones
import imgElecciones1 from '../../assets/images/eventos/elecciones/foto1.jpeg'
import imgElecciones2 from '../../assets/images/eventos/elecciones/foto2.jpeg'
import imgElecciones3 from '../../assets/images/eventos/elecciones/foto3.jpeg'
import imgElecciones4 from '../../assets/images/eventos/elecciones/foto4.jpeg'
import videoElecciones from '../../assets/videos/elecciones-2026.mp4'

// Video del concurso
import videoConcurso from '../../assets/videos/concurso-promo.mp4'

const UltimasNovedades = () => {
  const [showEleccionesModal, setShowEleccionesModal] = useState(false)
  const [showFeriaModal, setShowFeriaModal] = useState(false)
  const [showConcursoModal, setShowConcursoModal] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    grado: '',
    telefono: '',
    cancion: ''
  })

  const novedades = [
    {
      id: 1,
      titulo: "🗳️ Resultados Elecciones 2026",
      fecha: "18 de marzo de 2026",
      descripcion: "¡Ya tenemos nuevos líderes estudiantiles! Conoce a nuestro Personero, Contralor y la nueva mesa directiva de AFADEC.",
      imagen: imgElecciones,
      imagenAlt: "Estudiantes votando en elecciones digitales",
      icono: <FaVoteYea />,
      color: "#FF9800",
      destacado: true,
      modalTipo: "elecciones",
      modalContent: {
        titulo: "Elecciones Estudiantiles 2026",
        subtitulo: "Un hito en la historia institucional",
        fechaEvento: "18 de marzo de 2026",
        introduccion: "Por primera vez en la historia de la Institución Educativa Agrícola La Mina, las elecciones estudiantiles se realizaron con un sistema digital innovador que revolucionó el proceso democrático en nuestra institución.",
        datos: {
          participantes: 200,
          votosValidos: 317,
          nivelParticipacion: "85%"
        },
        innovacion: {
          titulo: "✨ Innovación Tecnológica",
          descripcion: "Implementamos un sistema de votación electrónica desarrollado internamente, permitiendo a los estudiantes ejercer su derecho al voto de manera ágil, segura y transparente.",
          tecnologias: [
            "Plataforma web de votación segura",
            "Verificación de identidad estudiantil",
            "Resultados en tiempo real",
            "Transparencia total del proceso"
          ]
        },
        ganadores: {
          personero: {
            nombre: "Yeleinis Arias",
            grado: "11°",
            votos: 153,
            lema: "¡Tu voz, mi compromiso!",
            propuestas: "Mejorar la comunicación estudiantil, más actividades culturales",
            foto: fotoYcleinis
          },
          contralor: {
            nombre: "Nacler Arias Arias",
            grado: "11°",
            votos: 164,
            lema: "Transparencia y equidad",
            propuestas: "Control de recursos, rendición de cuentas mensual",
            foto: fotoNacler
          }
        },
        galeria: {
          imagenes: [
            { src: imgElecciones1, titulo: "Estudiantes votando digitalmente", descripcion: "Jornada electoral digital" },
            { src: imgElecciones2, titulo: "Mesa de votación", descripcion: "Estudiantes emitiendo su voto" },
            { src: imgElecciones3, titulo: "Conteo de votos", descripcion: "Resultados en tiempo real" },
            { src: imgElecciones4, titulo: "Ganadores celebrando", descripcion: "Yeleinis y Nacler junto a sus compañeros" }
          ],
          video: videoElecciones
        },
        impacto: "Este sistema digital marca un antes y después en la participación democrática de nuestra institución, preparando a nuestros estudiantes para los desafíos tecnológicos del futuro."
      }
    },
    {
      id: 2,
      titulo: "🎤 Buscando una Estrella",
      fecha: "Inscripciones hasta el 15 de abril 2026",
      descripcion: "Concurso de Canto Vallenato. Demuestra tu voz e interpreta canciones del Binomio de Oro de América. ¡Gana un gran premio!",
      imagen: imgConcurso,
      imagenAlt: "Concurso de canto vallenato",
      icono: <FaMicrophone />,
      color: "#E91E63",
      destacado: true,
      modalTipo: "concurso",
      modalContent: {
        titulo: "🎤 Buscando una Estrella",
        subtitulo: "Concurso de Canto Vallenato",
        fechaInscripcion: "15 de abril de 2026",
        fechaEvento: "21 de abril de 2026",
        lugar: "Tarima Principal - Encuentro de Carrizos y Acordeones",
        hora: "4:00 PM",
        introduccion: "La Institución Educativa Agrícola La Mina y la organización del Encuentro de Carrizos y Acordeones presentan el concurso de canto vallenato 'Buscando una Estrella', una oportunidad única para descubrir nuevos talentos de nuestra región.",
        requisitos: [
          "Ser estudiante de sexto a once grado de la I.E. Agrícola La Mina",
          "Interpretar una canción del Binomio de Oro de América",
          "Presentarse con vestuario acorde al evento",
          "Máximo 5 minutos de presentación"
        ],
        premio: {
          titulo: "🏆 Gran Premio",
          descripcion: "El ganador se presentará en la tarima especial el día del evento junto a los artistas invitados y recibirá un premio económico de $500.000",
          adicional: "Además, grabación de un video profesional y reconocimiento institucional"
        },
        jurado: [
          "Israel Romero - Acordeonero del Binomio de Oro",
          "Representante de la Casa de la Cultura",
          "Docente de música del colegio"
        ],
        videoPromocional: videoConcurso
      }
    },
    {
      id: 3,
      titulo: "🎶 Tercer Encuentro de Carrizos y Acordeones",
      fecha: "21 de abril de 2026",
      descripcion: "Homenaje a Israel Romero, Rafael Orozco y Rafael Andrés Carrillo. ¡Una noche de música vallenata inolvidable!",
      imagen: imgFeria,
      imagenAlt: "Acordeonistas y carrizos en evento cultural",
      icono: <FaMusic />,
      color: "#9C27B0",
      destacado: true,
      modalTipo: "feria",
      modalContent: {
        titulo: "Tercer Encuentro de Carrizos y Acordeones",
        subtitulo: "Homenaje a las leyendas del vallenato",
        fechaEvento: "21 de abril de 2026",
        lugar: "Plaza Principal - Corregimiento La Mina",
        hora: "6:00 PM",
        introduccion: "La Institución Educativa Agrícola La Mina se enorgullece en presentar el Tercer Encuentro de Carrizos y Acordeones, un evento que celebra nuestra tradición musical y rinde homenaje a grandes exponentes del vallenato.",
        homenajeados: [
          { nombre: "Israel Romero", instrumento: "Acordeonero", descripcion: "Reconocido acordeonero, fundador del Binomio de Oro" },
          { nombre: "Rafael Orozco", instrumento: "Cantante", descripcion: "La voz inolvidable del Binomio de Oro" },
          { nombre: "Rafael Andrés Carrillo", instrumento: "Compositor", descripcion: "Creador de grandes éxitos vallenatos" }
        ],
        actividades: [
          "Desfile de apertura con pendones alusivos",
          "Presentación de acordeonistas invitados",
          "Concurso de carrizos y guacharacas",
          "Presentación del ganador de 'Buscando una Estrella'",
          "Muestra de danza folclórica",
          "Velada musical con agrupaciones locales"
        ],
        organizadores: {
          docentes: [
            "Prof. Carlos Martínez - Coordinador Cultural",
            "Prof. Laura Rodríguez - Directora de Banda",
            "Prof. Andrés Pérez - Gestor Cultural"
          ],
          estudiantes: [
            "Comité Cultural AFADEC",
            "Grupo de Danzas Folclóricas",
            "Banda Marcial Institucional"
          ]
        }
      }
    }
  ]

  const novedadElecciones = novedades.find(n => n.modalTipo === "elecciones")
  const novedadFeria = novedades.find(n => n.modalTipo === "feria")
  const novedadConcurso = novedades.find(n => n.modalTipo === "concurso")

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mensaje = `Hola, me quiero inscribir al concurso "Buscando una Estrella":%0A*Nombre:* ${formData.nombre}%0A*Grado:* ${formData.grado}%0A*Teléfono:* ${formData.telefono}%0A*Canción:* ${formData.cancion}`
    window.open(`https://wa.me/573001234567?text=${mensaje}`, '_blank')
  }

  return (
    <>
      <Container className="py-5">
        <h2 className="text-center mb-5" style={{
          fontFamily: "'Playfair Display', serif",
          color: '#2E7D32',
          fontSize: '2.5rem',
          position: 'relative'
        }}>
          Últimas Novedades
          <div style={{
            width: '80px',
            height: '4px',
            background: '#2E7D32',
            margin: '15px auto 0',
            borderRadius: '2px'
          }} />
        </h2>
        
        <Row className="g-4">
          {novedades.map((novedad) => (
            <Col md={4} key={novedad.id}>
              <Card className="h-100 border-0 shadow-lg rounded-4 overflow-hidden" style={{
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: novedad.destacado ? `2px solid ${novedad.color}` : 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img 
                    src={novedad.imagen} 
                    alt={novedad.imagenAlt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <Badge style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: novedad.color,
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    {novedad.destacado ? '🔥 Destacado' : '📰 Novedad'}
                  </Badge>
                </div>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: `${novedad.color}20`,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px'
                    }}>
                      <span style={{ fontSize: '1.2rem', color: novedad.color }}>{novedad.icono}</span>
                    </div>
                    <div>
                      <small className="text-muted">{novedad.fecha}</small>
                      <h5 className="mb-0" style={{ color: '#2E7D32', fontWeight: 'bold', fontSize: '1rem' }}>
                        {novedad.titulo}
                      </h5>
                    </div>
                  </div>
                  <p className="text-muted" style={{ lineHeight: '1.5', fontSize: '0.9rem' }}>
                    {novedad.descripcion}
                  </p>
                  <Button 
                    variant="link" 
                    className="ps-0 text-success fw-bold" 
                    style={{ textDecoration: 'none', fontSize: '0.9rem' }}
                    onClick={() => {
                      if (novedad.modalTipo === "elecciones") setShowEleccionesModal(true)
                      else if (novedad.modalTipo === "feria") setShowFeriaModal(true)
                      else if (novedad.modalTipo === "concurso") setShowConcursoModal(true)
                    }}
                  >
                    Leer más →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <Button variant="outline-success" size="lg" className="px-5">
            Ver todas las noticias
          </Button>
        </div>
      </Container>

      {/* ==================== MODAL DE ELECCIONES ==================== */}
      <Modal show={showEleccionesModal} onHide={() => setShowEleccionesModal(false)} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#2E7D32', color: 'white' }}>
          <Modal.Title style={{ fontFamily: "'Playfair Display', serif" }}>
            <FaVoteYea className="me-2" /> {novedadElecciones?.modalContent?.titulo || "Elecciones Estudiantiles 2026"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {novedadElecciones?.modalContent && (
            <>
              {/* Fecha */}
              <div className="mb-4 text-center">
                <Badge bg="success" className="px-3 py-2">
                  <FaCalendarAlt className="me-2" /> {novedadElecciones.modalContent.fechaEvento}
                </Badge>
              </div>

              {/* Video destacado */}
              {novedadElecciones.modalContent.galeria?.video && (
                <div className="mb-4">
                  <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '15px',
                    marginBottom: '10px'
                  }}>
                    <video
                      controls
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <source src={novedadElecciones.modalContent.galeria.video} type="video/mp4" />
                      Tu navegador no soporta videos.
                    </video>
                  </div>
                  <p className="text-center text-muted small">📹 Resumen de la jornada electoral 2026</p>
                </div>
              )}

              {/* Introducción */}
              <h3 className="mb-3" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif" }}>
                {novedadElecciones.modalContent.subtitulo}
              </h3>
              <p className="lead" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {novedadElecciones.modalContent.introduccion}
              </p>

              {/* Datos de participación */}
              {novedadElecciones.modalContent.datos && (
                <Row className="mb-4 text-center">
                  <Col md={4}>
                    <div className="p-3 bg-light rounded-3">
                      <FaUsers size={30} className="text-success mb-2" />
                      <h4>{novedadElecciones.modalContent.datos.participantes}</h4>
                      <small>Estudiantes participantes</small>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3 bg-light rounded-3">
                      <FaVoteYea size={30} className="text-success mb-2" />
                      <h4>{novedadElecciones.modalContent.datos.votosValidos}</h4>
                      <small>Votos válidos</small>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3 bg-light rounded-3">
                      <FaChartLine size={30} className="text-success mb-2" />
                      <h4>{novedadElecciones.modalContent.datos.nivelParticipacion}</h4>
                      <small>Participación</small>
                    </div>
                  </Col>
                </Row>
              )}

              {/* Innovación Tecnológica */}
              <div style={{
                background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
                borderRadius: '20px',
                padding: '20px',
                margin: '20px 0'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <FaLaptopCode size={30} color="#2E7D32" className="me-2" />
                  <h4 style={{ color: '#2E7D32', margin: 0 }}>{novedadElecciones.modalContent.innovacion.titulo}</h4>
                </div>
                <p>{novedadElecciones.modalContent.innovacion.descripcion}</p>
                <Row>
                  {novedadElecciones.modalContent.innovacion.tecnologias.map((tech, idx) => (
                    <Col md={6} key={idx} className="mb-2">
                      <div className="d-flex align-items-center">
                        <FaChartLine className="text-success me-2" />
                        <span>{tech}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Ganadores */}
            {/* Ganadores con fotos */}
<h4 className="mt-4 mb-3" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif" }}>
  🏆 Ganadores de las Elecciones 2026
</h4>
<Row className="mb-4">
  {/* Personero */}
  <Col md={6}>
    <div className="p-3 bg-light rounded-3 text-center h-100">
      <div style={{
        width: '120px',
        height: '120px',
        margin: '0 auto 15px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #2E7D32',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
      }}>
        <img 
          src={novedadElecciones.modalContent.ganadores.personero.foto} 
          alt={novedadElecciones.modalContent.ganadores.personero.nombre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h5 className="mb-1">{novedadElecciones.modalContent.ganadores.personero.nombre}</h5>
      <p className="text-muted mb-1">Personero Estudiantil - {novedadElecciones.modalContent.ganadores.personero.grado}</p>
      <Badge bg="success" className="mb-2">🏆 {novedadElecciones.modalContent.ganadores.personero.votos} votos</Badge>
      <p className="fst-italic mt-2">"{novedadElecciones.modalContent.ganadores.personero.lema}"</p>
      <small className="text-muted">{novedadElecciones.modalContent.ganadores.personero.propuestas}</small>
    </div>
  </Col>
  
  {/* Contralor */}
  <Col md={6}>
    <div className="p-3 bg-light rounded-3 text-center h-100">
      <div style={{
        width: '120px',
        height: '120px',
        margin: '0 auto 15px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #2E7D32',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
      }}>
        <img 
          src={novedadElecciones.modalContent.ganadores.contralor.foto} 
          alt={novedadElecciones.modalContent.ganadores.contralor.nombre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h5 className="mb-1">{novedadElecciones.modalContent.ganadores.contralor.nombre}</h5>
      <p className="text-muted mb-1">Contralor Estudiantil - {novedadElecciones.modalContent.ganadores.contralor.grado}</p>
      <Badge bg="success" className="mb-2">🏆 {novedadElecciones.modalContent.ganadores.contralor.votos} votos</Badge>
      <p className="fst-italic mt-2">"{novedadElecciones.modalContent.ganadores.contralor.lema}"</p>
      <small className="text-muted">{novedadElecciones.modalContent.ganadores.contralor.propuestas}</small>
    </div>
  </Col>
</Row>
              

              {/* Galería de fotos */}
              {novedadElecciones.modalContent.galeria?.imagenes && (
                <>
                  <h4 className="mt-4 mb-3" style={{ color: '#2E7D32', fontFamily: "'Playfair Display', serif" }}>
                    📸 Así se vivió la jornada electoral
                  </h4>
                  <Row className="g-3 mb-4">
                    {novedadElecciones.modalContent.galeria.imagenes.map((img, idx) => (
                      <Col md={6} key={idx}>
                        <div style={{
                          borderRadius: '15px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
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

              {/* Impacto */}
              <div className="mt-4 p-3 bg-light rounded-3">
                <FaUsers className="text-success me-2" />
                <strong>Impacto institucional:</strong> {novedadElecciones.modalContent.impacto}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowEleccionesModal(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* ==================== MODAL DEL CONCURSO ==================== */}
      <Modal show={showConcursoModal} onHide={() => setShowConcursoModal(false)} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#E91E63', color: 'white' }}>
          <Modal.Title style={{ fontFamily: "'Playfair Display', serif" }}>
            <FaMicrophone className="me-2" /> {novedadConcurso?.modalContent?.titulo || "Buscando una Estrella"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {novedadConcurso?.modalContent && (
            <>
              {/* Video promocional */}
              <div className="mb-4">
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '15px',
                  marginBottom: '10px'
                }}>
                  <video
                    controls
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <source src={novedadConcurso.modalContent.videoPromocional} type="video/mp4" />
                    Tu navegador no soporta videos.
                  </video>
                </div>
                <p className="text-center text-muted small">📹 Video promocional del concurso</p>
              </div>

              {/* Fechas */}
              <div className="mb-4 text-center">
                <Badge bg="danger" className="px-3 py-2 me-2">
                  <FaRegCalendarAlt className="me-2" /> Inscripciones: {novedadConcurso.modalContent.fechaInscripcion}
                </Badge>
                <Badge bg="success" className="px-3 py-2">
                  <FaCalendarAlt className="me-2" /> Evento: {novedadConcurso.modalContent.fechaEvento}
                </Badge>
              </div>

              <h3 className="text-center mb-3" style={{ color: '#E91E63', fontFamily: "'Playfair Display', serif" }}>
                {novedadConcurso.modalContent.subtitulo}
              </h3>
              <p className="lead" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {novedadConcurso.modalContent.introduccion}
              </p>

              {/* Requisitos */}
              <div style={{
                background: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD9 100%)',
                borderRadius: '20px',
                padding: '20px',
                margin: '20px 0'
              }}>
                <h5 style={{ color: '#E91E63' }}>📋 Requisitos</h5>
                <ul className="mb-0">
                  {novedadConcurso.modalContent.requisitos.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Premio */}
              <div style={{
                background: '#FFF3E0',
                borderRadius: '20px',
                padding: '20px',
                textAlign: 'center',
                margin: '20px 0'
              }}>
                <FaTrophy size={40} color="#FF9800" />
                <h5 style={{ color: '#E91E63' }}>{novedadConcurso.modalContent.premio.titulo}</h5>
                <p>{novedadConcurso.modalContent.premio.descripcion}</p>
                <p className="fw-bold mb-0">{novedadConcurso.modalContent.premio.adicional}</p>
              </div>

              {/* Jurado */}
              <div className="mb-4">
                <h5 style={{ color: '#E91E63' }}>🎭 Jurado Calificador</h5>
                <ul>
                  {novedadConcurso.modalContent.jurado.map((juez, idx) => (
                    <li key={idx}>{juez}</li>
                  ))}
                </ul>
              </div>

              {/* Formulario de inscripción */}
              <div className="mt-4 p-3 bg-light rounded-3">
                <h5 className="text-center">🎤 ¡Inscríbete aquí!</h5>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Control type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleInputChange} required />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control type="text" name="grado" placeholder="Grado" value={formData.grado} onChange={handleInputChange} required />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleInputChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" name="cancion" placeholder="Canción a interpretar" value={formData.cancion} onChange={handleInputChange} required />
                  </Form.Group>
                  <Button variant="danger" type="submit" className="w-100">
                    <FaWhatsapp className="me-2" /> Inscribirme vía WhatsApp
                  </Button>
                </Form>
                <p className="text-center small text-muted mt-2">*Inscripciones gratuitas</p>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConcursoModal(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* ==================== MODAL DE LA FERIA ==================== */}
      <Modal show={showFeriaModal} onHide={() => setShowFeriaModal(false)} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#9C27B0', color: 'white' }}>
          <Modal.Title style={{ fontFamily: "'Playfair Display', serif" }}>
            <FaMusic className="me-2" /> {novedadFeria?.modalContent?.titulo || "Encuentro de Carrizos y Acordeones"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {novedadFeria?.modalContent && (
            <>
              {/* Fecha, lugar y hora */}
              <div className="mb-4 text-center">
                <Badge bg="secondary" className="px-3 py-2 me-2">
                  <FaCalendarAlt className="me-2" /> {novedadFeria.modalContent.fechaEvento}
                </Badge>
                <Badge bg="secondary" className="px-3 py-2 me-2">
                  <FaMicrophoneAlt className="me-2" /> {novedadFeria.modalContent.hora}
                </Badge>
                <Badge bg="secondary" className="px-3 py-2">
                  <FaMapPin className="me-2" /> {novedadFeria.modalContent.lugar}
                </Badge>
              </div>

              <h3 className="text-center mb-4" style={{ color: '#9C27B0', fontFamily: "'Playfair Display', serif" }}>
                {novedadFeria.modalContent.subtitulo}
              </h3>
              <p className="lead">{novedadFeria.modalContent.introduccion}</p>

              {/* Homenajeados */}
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
                  {novedadFeria.modalContent.homenajeados.map((h, idx) => (
                    <Col md={4} key={idx} className="text-center">
                      <FaGuitar size={30} color="#9C27B0" />
                      <h6 className="mt-1">{h.nombre}</h6>
                      <small>{h.descripcion}</small>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Actividades */}
              <h4 className="mt-4 mb-3" style={{ color: '#9C27B0' }}>📋 Actividades</h4>
              <Row className="mb-4">
                {novedadFeria.modalContent.actividades.map((act, idx) => (
                  <Col md={6} key={idx} className="mb-2">
                    <div className="d-flex align-items-center">
                      <FaMusic className="text-success me-2" />
                      <span>{act}</span>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* Organizadores */}
              <div className="mt-4 p-3 bg-light rounded-3">
                <h5>👥 Organizadores</h5>
                <Row>
                  <Col md={6}>
                    <strong>Docentes:</strong>
                    <ul className="small">
                      {novedadFeria.modalContent.organizadores.docentes.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <strong>Estudiantes:</strong>
                    <ul className="small">
                      {novedadFeria.modalContent.organizadores.estudiantes.map((e, i) => (
                        <li key={i}>{e}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>

              {/* Llamada a la acción */}
              <div className="mt-4 text-center">
                <p className="fw-bold">🎵 ¡Los esperamos para celebrar nuestra tradición vallenata! 🎵</p>
                <Button variant="success" size="lg">Confirmar asistencia</Button>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFeriaModal(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UltimasNovedades