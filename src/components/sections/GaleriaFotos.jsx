import { Container, Modal, Button } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import { FaCamera, FaTiktok } from 'react-icons/fa'
import foto1 from '../../assets/images/mina.jpeg'
import foto2 from  '../../assets/images/mina1.jpeg'
import foto3 from  '../../assets/images/mina2.jpeg'
import foto4 from  '../../assets/images/mina3.jpeg'
import foto5 from  '../../assets/images/mina4.jpeg'

const GaleriaFotos = () => {
  const swiperRef = useRef(null)
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const fotos = [
    { id: 7, src: '/images/galeria-institucional/IMG_0014.JPG', titulo: 'Bienvenida al aniversario de los 40 años', categoria: 'Aniversario institucional' },
    { id: 8, src: '/images/galeria-institucional/IMG_0018.JPG', titulo: 'Escenario del aniversario institucional', categoria: 'Aniversario institucional' },
    { id: 9, src: '/images/galeria-institucional/IMG_0044.JPG', titulo: 'Encuentro de la comunidad educativa', categoria: 'Aniversario institucional' },
    { id: 10, src: '/images/galeria-institucional/IMG_0104.JPG', titulo: 'Presentación de los estudiantes', categoria: 'Aniversario institucional' },
    { id: 11, src: '/images/galeria-institucional/IMG_0109.JPG', titulo: 'Participación infantil en el aniversario', categoria: 'Aniversario institucional' },
    { id: 12, src: '/images/galeria-institucional/IMG_0159.JPG', titulo: 'Participación de la guardia indígena', categoria: 'Aniversario institucional' },
    { id: 13, src: '/images/galeria-institucional/IMG_0213.JPG', titulo: 'Encuentro del equipo deportivo', categoria: 'Aniversario institucional' },
    { id: 14, src: '/images/galeria-institucional/IMG_0218.JPG', titulo: 'Comunidad educativa en la celebración', categoria: 'Aniversario institucional' },
    { id: 15, src: '/images/galeria-institucional/IMG_0243.JPG', titulo: 'Equipo femenino en la cancha', categoria: 'Aniversario institucional' },
    { id: 16, src: '/images/galeria-institucional/IMG_0296.JPG', titulo: 'Integrantes del grupo cultural', categoria: 'Aniversario institucional' },
    { id: 17, src: '/images/galeria-institucional/IMG_0298.JPG', titulo: 'Grupo cultural institucional', categoria: 'Aniversario institucional' },
    { id: 18, src: '/images/galeria-institucional/IMG_0312.JPG', titulo: 'Encuentro del grupo cultural', categoria: 'Aniversario institucional' },
    { id: 1, src: foto1, titulo: 'Nuestra Granja', categoria: 'Proyectos' },
    { id: 2, src: foto2, titulo: 'Estudiantes en clase', categoria: 'Académico' },
    { id: 3, src: foto3, titulo: 'Cultivos', categoria: 'Proyectos' },
    { id: 4, src: foto4, titulo: 'Evento Cultural', categoria: 'Eventos' },
    { id: 5, src: foto5, titulo: 'Taller Práctico', categoria: 'Académico' },
    { id: 6, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', titulo: 'Día del Campesino', categoria: 'Eventos' },
  ]

  const abrirModal = (foto) => {
    setSelectedImage(foto)
    setShowModal(true)
  }

  return (
    <Container fluid style={{ backgroundColor: '#F9F9F9', padding: '48px 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{
          fontFamily: "'Playfair Display', serif",
          color: '#2E7D32',
          fontSize: '2.5rem'
        }}>
          Galería Institucional
          <div style={{
            width: '80px',
            height: '4px',
            background: '#2E7D32',
            margin: '15px auto 0',
            borderRadius: '2px'
          }} />
        </h2>
        
        <Swiper modules={[A11y, Keyboard]} onSwiper={(swiper) => { swiperRef.current = swiper }} slidesPerView={1} spaceBetween={20} breakpoints={{ 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }} rewind keyboard={{ enabled: true, onlyInViewport: true }} a11y={{ slideLabelMessage: 'Foto {{index}} de {{slidesLength}}' }} style={{ padding: '8px 0 16px' }}>
          {fotos.map((foto) => (
            <SwiperSlide key={foto.id}>
              <button type="button" aria-label={`Ampliar: ${foto.titulo}`} 
                onClick={() => abrirModal(foto)}
                style={{
                  border: 0,
                  padding: 0,
                  width: '100%',
                  display: 'block',
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
                onFocus={(e) => { const overlay = e.currentTarget.querySelector('.overlay'); if (overlay) overlay.style.opacity = '1' }} onBlur={(e) => { const overlay = e.currentTarget.querySelector('.overlay'); if (overlay) overlay.style.opacity = '0' }} onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay')
                  if (overlay) overlay.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay')
                  if (overlay) overlay.style.opacity = '0'
                }}>
                <img 
                  src={foto.src} 
                  alt={foto.titulo}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(46,125,50,0.8), rgba(27,94,32,0.8))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  flexDirection: 'column'
                }}>
                  <FaCamera size={40} color="white" />
                  <p className="mt-2 mb-0 text-white fw-bold">{foto.titulo}</p>
                  <small className="text-white">{foto.categoria}</small>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <Button variant="outline-success" aria-label="Fotos anteriores" onClick={() => swiperRef.current?.slidePrev()}>←</Button>
          <span className="text-muted">Explora nuestra galería</span>
          <Button variant="outline-success" aria-label="Fotos siguientes" onClick={() => swiperRef.current?.slideNext()}>→</Button>
        </div>
        
        <div className="text-center mt-4">
          <Button href='https://www.tiktok.com/@italamina' target='_blank'  variant="success" size="lg" className="px-4">
            <FaTiktok className="me-2" /> Ver más en tiktok
          </Button>
        </div>
      </Container>

      {/* Modal para ampliar foto */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Body className="p-0">
          {selectedImage && (
            <img 
              src={selectedImage.src} 
              alt={selectedImage.titulo}
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default GaleriaFotos