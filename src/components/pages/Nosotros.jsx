// src/pages/Nosotros.jsx
import { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, Modal, Button, Carousel } from 'react-bootstrap'
import { 
  FaTree, FaGraduationCap, FaHeart, FaHandsHelping, FaLightbulb, 
  FaSeedling, FaCalendarAlt, FaUsers, FaAward, FaLandmark, FaMusic, 
  FaFlag, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserTie,
  FaHistory, FaUserGraduate, FaChalkboardTeacher, FaUserFriends,
  FaPlay, FaPause
} from 'react-icons/fa'
import { GiFarmer, GiPlantRoots, GiWheat } from 'react-icons/gi'

// Importar componentes divididos
import QuickNav from '../nosotros/QuickNav'
import HeroSection from '../nosotros/HeroSection'
import StatisticsSection from '../nosotros/StatisticsSection'
import HistorySection from '../nosotros/HistorySection'
import MissionVisionSection from '../nosotros/MissionVisionSection'
import StudentProfileSection from '../nosotros/StudentProfileSection'
import ValuesSection from '../nosotros/ValuesSection'
import SymbolsSection from '../nosotros/SymbolsSection'
import HistoricalGallery from '../nosotros/HistoricalGallery'
import VideoSection from '../nosotros/VideoSection'
import PrinciplesSection from '../nosotros/PrinciplesSection'
import DirectorsSection from '../nosotros/DirectorsSection'
import CurrentDirectorsSection from '../nosotros/CurrentDirectorsSection'
import HimnoModal from '../nosotros/HimnoModal.jsx'
import Uniformes from '../nosotros/Uniforme.jsx'

// Importar medios
import videoInstitucional from '../../assets/videos/institucional.mp4'
import himnoAudio from '../../assets/audio/himno.mp3'
import heroFoto1 from '../../assets/images/hero-fachada.jpeg'
import heroFoto2 from '../../assets/images/hero-estudiantes.jpeg'
import heroFoto3 from '../../assets/images/hero-granja.jpeg'

const Nosotros = () => {
  const [counters, setCounters] = useState({ estudiantes: 0, docentes: 0, egresados: 0, años: 0 })
  const [showHimno, setShowHimno] = useState(false)
  const [showPioneros, setShowPioneros] = useState(false)
  const [showPrimeraPromocion, setShowPrimeraPromocion] = useState(false)
  const statsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mostrarVideo, setMostrarVideo] = useState(true)
  
  const fotosHero = [heroFoto1, heroFoto2, heroFoto3]

  // Animación de contadores
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const animateNumber = (target, setter, duration = 2000) => {
        let start = 0
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            setter(target)
            clearInterval(timer)
          } else {
            setter(Math.floor(start))
          }
        }, 16)
      }
      animateNumber(557, (val) => setCounters(prev => ({ ...prev, estudiantes: val })), 2000)
      animateNumber(30, (val) => setCounters(prev => ({ ...prev, docentes: val })), 1500)
      animateNumber(61, (val) => setCounters(prev => ({ ...prev, egresados: val })), 1800)
      animateNumber(39, (val) => setCounters(prev => ({ ...prev, años: val })), 2000)
    }
  }, [isVisible])

  return (
    <div style={{ marginTop: '0px', overflowX: 'hidden' }}>
      <HeroSection 
        mostrarVideo={mostrarVideo} 
        setMostrarVideo={setMostrarVideo} 
        fotosHero={fotosHero} 
        videoInstitucional={videoInstitucional} 
      />
      
      <QuickNav />
      
      <StatisticsSection counters={counters} statsRef={statsRef} />
      
      {/* Botones para ver historia */}
      <Container className="py-4 text-center">
        <Row className="justify-content-center g-3">
          <Col xs="auto">
            <Button variant="outline-success" onClick={() => setShowPioneros(true)}>
              <FaHistory className="me-2" /> Ver Pioneros y Fundadores
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="outline-success" onClick={() => setShowPrimeraPromocion(true)}>
              <FaUserGraduate className="me-2" /> Primera Promoción (1992)
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Modal Pioneros */}
      <Modal show={showPioneros} onHide={() => setShowPioneros(false)} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#2E7D32', color: 'white' }}>
          <Modal.Title style={{ fontFamily: "'Playfair Display', serif" }}>
            <FaHistory className="me-2" /> Pioneros y Fundadores
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          <h5 className="mb-3" style={{ color: '#2E7D32' }}>📋 Comité Pro-Desarrollo (1985)</h5>
          <Row className="mb-4">
            {[
              { nombre: "Ignacio Medrano López", cargo: "Presidente", periodo: "1985-1986" },
              { nombre: "Yadira Elena Montero Zuleta", cargo: "Vicepresidenta", periodo: "1985-1986" },
              { nombre: "Tulio Rafael Pacheco", cargo: "Secretario", periodo: "1985-1986" },
              { nombre: "Faustino Ramírez", cargo: "Tesorero", periodo: "1985-1986" },
              { nombre: "Eudes Rodríguez", cargo: "Fiscal", periodo: "1985-1986" },
              { nombre: "Alcides Luquez", cargo: "Fiscal", periodo: "1985-1986" },
              { nombre: "Andrés Ortiz Murillo", cargo: "Coordinador", periodo: "1985-1986" },
              { nombre: "Ariel Pacheco Maestre", cargo: "Coordinador", periodo: "1985-1986" },
              { nombre: "Rafael Luquez Montero", cargo: "Coordinador", periodo: "1985-1986" }
            ].map((miembro, idx) => (
              <Col md={6} key={idx} className="mb-2">
                <div className="p-2 bg-light rounded">
                  <strong>{miembro.nombre}</strong> - {miembro.cargo}
                  <br /><small className="text-muted">Periodo: {miembro.periodo}</small>
                </div>
              </Col>
            ))}
          </Row>
          
          <h5 className="mb-3" style={{ color: '#2E7D32' }}>👨‍🏫 Exrectores</h5>
          <div className="mb-3 p-3 bg-light rounded">
            <strong>Lic. José Domingo Martínez Soto</strong> (1986-1993)
            <p className="mb-0 mt-1 small">Fundador y primer rector. Logró la aprobación inicial del plantel y la primera promoción de bachilleres.</p>
          </div>
          <div className="mb-3 p-3 bg-light rounded">
            <strong>Lic. Andrés Alirio Ortiz Murillo</strong> (1993-2024)
            <p className="mb-0 mt-1 small">Consolidó la institución, logró la municipalización, impulsó la Unidad Básica con escuelas rurales.</p>
          </div>
          
          <h5 className="mb-3 mt-4" style={{ color: '#2E7D32' }}>👨‍🏫 Primeros Docentes</h5>
          {[
            { nombre: "Lenis Canales", cargo: "Coordinadora", periodo: "1986" },
            { nombre: "Rafael Luquez", cargo: "Docente", periodo: "1986" },
            { nombre: "Rosmiro Escalante", cargo: "Docente", periodo: "1986" }
          ].map((docente, idx) => (
            <div key={idx} className="mb-2">
              <strong>{docente.nombre}</strong> - {docente.cargo} ({docente.periodo})
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowPioneros(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Primera Promoción */}
      <Modal show={showPrimeraPromocion} onHide={() => setShowPrimeraPromocion(false)} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#2E7D32', color: 'white' }}>
          <Modal.Title style={{ fontFamily: "'Playfair Display', serif" }}>
            <FaAward className="me-2" /> Primera Promoción - 1992
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center mb-3">
            <strong>14 bachilleres agrícolas</strong> hicieron historia el 17 de noviembre de 1992.
          </p>
          <Row>
            {[
              "Juan Carlos Arias", "María Eugenia Carrascal", "Donaldo Maestre",
              "José Enrique Maestre", "Eliecer Maestre", "Norma Irina Montero",
              "Cristóbal Luquez", "Jorge Luquez", "Sandra Ramírez",
              "Mariela Gómez", "Edinson Maestre", "Noris Medrano",
              "Davinso Ramírez", "Alcides Luquez"
            ].map((estudiante, idx) => (
              <Col md={6} key={idx} className="mb-1">
                <FaUserGraduate className="me-2 text-success" /> {estudiante}
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowPrimeraPromocion(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <HistorySection />
      <MissionVisionSection />
      <StudentProfileSection />
      <ValuesSection />
      <SymbolsSection setShowHimno={setShowHimno} />
      <HistoricalGallery />
      <VideoSection />
      <Uniformes></Uniformes>
      <PrinciplesSection />
      <DirectorsSection />
      <CurrentDirectorsSection />

      {/* Modal del Himno con reproductor profesional */}
      <HimnoModal 
        show={showHimno} 
        onHide={() => setShowHimno(false)} 
        himnoAudio={himnoAudio} 
      />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .timeline-card { animation: fadeInUp 0.6s ease-out; animation-fill-mode: both; }
        .timeline-card:nth-child(1) { animation-delay: 0.1s; }
        .timeline-card:nth-child(2) { animation-delay: 0.2s; }
        .timeline-card:nth-child(3) { animation-delay: 0.3s; }
        .timeline-card:nth-child(4) { animation-delay: 0.4s; }
        .timeline-card:nth-child(5) { animation-delay: 0.5s; }
        .timeline-card:nth-child(6) { animation-delay: 0.6s; }
        @media (max-width: 768px) {
          .display-3 { font-size: 2rem !important; }
          .lead { font-size: 1rem !important; }
        }
      `}</style>
    </div>
  )
}

export default Nosotros