import { useRef, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { FaMusic, FaDrum, FaMusic as FaTrumpet, FaPlay, FaCamera, FaTiktok, FaAward, FaMapMarkerAlt } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import logroBanda from '../../content/novedades/banda-hatonuevo-2026.json'
import NoticiaContent from './novedadesContent/NoticiaContent'

const fotos = ['IMG_0368.JPG','IMG_0312.JPG','IMG_0353.JPG','IMG_0334.JPG','IMG_0352.JPG','IMG_0351.JPG','IMG_0310.JPG','IMG_0333.JPG','IMG_0318.JPG','IMG_0332.JPG','IMG_0366.JPG','IMG_0316.JPG','IMG_0314.JPG','IMG_0346.JPG','IMG_0345.JPG','IMG_0364.JPG','IMG_0344.JPG','IMG_0343.JPG','IMG_0323.JPG','IMG_0340.JPG']
const NuestraBanda = () => {
  const [showLogro, setShowLogro] = useState(false)
  const sliderRef = useRef(null)
  const videoRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const instrumentos = [
    { icono: <FaTrumpet />, nombre: 'Trompetas', color: '#FF9800' },
    { icono: <FaDrum />, nombre: 'Tambores', color: '#2196F3' },
    { icono: <FaMusic />, nombre: 'Liras', color: '#9C27B0' },
  ]
  const cerrarVideo = () => { videoRef.current?.pause(); setShowVideo(false) }
  return (
    <Container fluid style={{ backgroundColor: '#E8F5E9', padding: '56px 0' }}>
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6} className="order-lg-2">
            <div className="rounded-4 overflow-hidden shadow">
              <img src="/images/banda/IMG_0368.JPG" alt="Integrantes de nuestra banda marcial en la institución" loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'contain', background: '#173c29', display: 'block' }} />
              <div className="p-3 bg-white"><h3 className="h5 mb-1 text-success">Banda Marcial</h3><p className="mb-0 text-muted">Talento y orgullo institucional</p></div>
            </div>
          </Col>
          <Col lg={6} className="order-lg-1">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2E7D32', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '20px' }}>Nuestra Banda Marcial</h2>
            <p className="lead" style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.7 }}>La banda marcial del Instituto Agrícola La Mina es un símbolo de disciplina, talento y orgullo institucional. Con más de 15 años de trayectoria, ha representado a nuestra institución en múltiples eventos cívicos y culturales.</p>
            <div className="d-flex gap-3 my-4">
              {instrumentos.map((inst) => <div key={inst.nombre} className="text-center"><div style={{ width: 60, height: 60, background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', boxShadow: '0 5px 10px rgba(0,0,0,0.1)', fontSize: '1.8rem', color: inst.color }}>{inst.icono}</div><small>{inst.nombre}</small></div>)}
            </div>
            <div className="d-flex flex-wrap gap-3">
              <Button variant="success" className="rounded-pill px-4" onClick={() => setShowVideo(true)}><FaPlay className="me-2" />Ver presentaciones</Button>
              <Button variant="outline-success" className="rounded-pill px-4" href="https://www.tiktok.com/@bandacivicalamina" target="_blank" rel="noopener noreferrer"><FaTiktok className="me-2" />Síguenos en TikTok</Button>
            </div>
          </Col>
        </Row>
        <section className="mt-5 rounded-4 overflow-hidden shadow" aria-labelledby="banda-logro-titulo" style={{ background: 'radial-gradient(ellipse at top right, #3b5275, transparent 65%), linear-gradient(135deg, #111d32, #203756)', color: '#fff', padding: 'clamp(24px, 4vw, 48px)', borderTop: '5px solid #e8bf62' }}>
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={5}>
              <a href={logroBanda.reconocimiento.src} target="_blank" rel="noopener noreferrer" className="d-block rounded-4 overflow-hidden shadow" aria-label="Ampliar diploma de Mejor Grupo Coreográfico" style={{ border: '2px solid #e8bf62', background: '#fff', transform: 'rotate(-2deg)' }}>
                <img src={logroBanda.reconocimiento.src} alt={logroBanda.reconocimiento.alt} loading="lazy" style={{ width: '100%', display: 'block' }} />
              </a>
              <p className="small text-center mt-3 mb-0" style={{ color: '#ead8ae' }}>Un reconocimiento que nos llena de orgullo</p>
            </Col>
            <Col lg={7}>
              <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-3" style={{ color: '#ffe1a0', background: 'rgba(232,191,98,0.12)', border: '1px solid rgba(232,191,98,0.5)' }}>
                <FaAward aria-hidden="true" /><span className="small fw-semibold">ORGULLO DE LA MINA</span>
              </div>
              <h3 id="banda-logro-titulo" className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.4rem)', lineHeight: 1.12, color: '#ffe1a0' }}>¡Mejor Grupo Coreográfico!</h3>
              <p className="fw-semibold mb-2" style={{ fontSize: '1.15rem' }}>II Concurso Nacional de Bandas de Marcha</p>
              <p className="mb-3" style={{ color: '#ead8ae' }}>Modalidad Tradicional Abierta</p>
              <p className="mb-4" style={{ lineHeight: 1.8, color: '#e8edf4' }}>Nuestra Banda Cívica Marcial recibió este reconocimiento gracias al talento, la disciplina y el trabajo en equipo de sus integrantes. ¡Celebramos este logro con toda la comunidad educativa!</p>
              <p className="d-flex align-items-center gap-2 mb-4" style={{ color: '#ead8ae' }}><FaMapMarkerAlt aria-hidden="true" /><span>Hatonuevo, La Guajira · 24 de octubre de 2026</span></p>
              <div className="d-flex flex-wrap gap-3">
                <Button className="rounded-pill px-4 py-3 fw-semibold" style={{ background: '#e8bf62', borderColor: '#e8bf62', color: '#111d32' }} onClick={() => setShowLogro(true)}><FaPlay className="me-2" />Ver logro, fotos y videos</Button>
                <Button variant="outline-light" className="rounded-pill px-4 py-3" href={logroBanda.reconocimiento.src} target="_blank" rel="noopener noreferrer"><FaAward className="me-2" />Ampliar diploma</Button>
              </div>
            </Col>
          </Row>
        </section>
        <div className="mt-5">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
            <h3 className="h4 mb-0 text-success"><FaCamera className="me-2" />Momentos de nuestra banda</h3>
            <div className="d-flex gap-2"><Button variant="outline-success" aria-label="Fotos anteriores de la banda" onClick={() => sliderRef.current?.slidePrev()}>←</Button><Button variant="outline-success" aria-label="Fotos siguientes de la banda" onClick={() => sliderRef.current?.slideNext()}>→</Button></div>
          </div>
          <Swiper modules={[A11y, Keyboard]} onSwiper={(swiper) => { sliderRef.current = swiper }} slidesPerView={1} spaceBetween={20} breakpoints={{ 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }} rewind keyboard={{ enabled: true, onlyInViewport: true }} a11y={{ slideLabelMessage: 'Foto {{index}} de {{slidesLength}}' }}>
            {fotos.map((foto, index) => <SwiperSlide key={foto}><button type="button" className="border-0 p-0 rounded-4 overflow-hidden w-100" aria-label={`Ampliar foto ${index + 1} de la banda`} onClick={() => setSelectedPhoto(index)} style={{ background: '#173c29' }}><img src={`/images/banda/${foto}`} alt={`Integrantes de la banda marcial. Fotografía ${index + 1}`} loading="lazy" style={{ width: '100%', height: 250, objectFit: 'contain', display: 'block' }} /></button></SwiperSlide>)}
          </Swiper>
          <p className="small text-muted mt-2 mb-0">20 fotos · Pulsa una foto para ampliarla</p>
        </div>
      </Container>
      <Modal show={showLogro} onHide={() => setShowLogro(false)} centered size="lg" aria-labelledby="banda-logro-modal-titulo">
        <Modal.Header closeButton><Modal.Title id="banda-logro-modal-titulo">¡Orgullo de La Mina!</Modal.Title></Modal.Header>
        <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>{showLogro && <NoticiaContent novedad={logroBanda} />}</Modal.Body>
        <Modal.Footer><Button variant="success" onClick={() => setShowLogro(false)}>Cerrar</Button></Modal.Footer>
      </Modal>
      <Modal show={showVideo} onHide={cerrarVideo} centered size="lg" aria-labelledby="banda-video-titulo">
        <Modal.Header closeButton><Modal.Title id="banda-video-titulo">Presentación de nuestra banda</Modal.Title></Modal.Header>
        <Modal.Body className="p-0">{showVideo && <video ref={videoRef} controls playsInline preload="metadata" aria-label="Video de la banda marcial" style={{ width: '100%', maxHeight: '65vh', display: 'block', background: '#111' }}><source src="/images/banda/presentacion.mp4" type="video/mp4" />Tu navegador no puede reproducir este video. <a href="/images/banda/presentacion.mp4">Abrir video</a></video>}</Modal.Body>
        <Modal.Footer><Button variant="success" onClick={cerrarVideo}>Cerrar</Button></Modal.Footer>
      </Modal>
      <Modal show={selectedPhoto !== null} onHide={() => setSelectedPhoto(null)} centered size="lg" aria-labelledby="banda-foto-titulo">
        <Modal.Header closeButton><Modal.Title id="banda-foto-titulo">Nuestra banda marcial</Modal.Title></Modal.Header>
        <Modal.Body className="p-0">{selectedPhoto !== null && <img src={`/images/banda/${fotos[selectedPhoto]}`} alt={`Foto ${selectedPhoto + 1} de nuestra banda marcial`} style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', background: '#173c29' }} />}</Modal.Body>
        <Modal.Footer className="justify-content-between"><Button variant="outline-success" aria-label="Foto anterior" onClick={() => setSelectedPhoto((selectedPhoto + fotos.length - 1) % fotos.length)}>←</Button><span aria-live="polite">Foto {(selectedPhoto ?? 0) + 1} de {fotos.length}</span><Button variant="outline-success" aria-label="Foto siguiente" onClick={() => setSelectedPhoto((selectedPhoto + 1) % fotos.length)}>→</Button></Modal.Footer>
      </Modal>
    </Container>
  )
}
export default NuestraBanda