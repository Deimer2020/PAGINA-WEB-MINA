import { Container, Row, Col, Modal, Image, Button } from 'react-bootstrap'
import { useState } from 'react'
import { FaCamera, FaInstagram } from 'react-icons/fa'
import foto1 from '../../assets/images/mina.jpeg'
import foto2 from  '../../assets/images/mina1.jpeg'
import foto3 from  '../../assets/images/mina2.jpeg'
import foto4 from  '../../assets/images/mina3.jpeg'
import foto5 from  '../../assets/images/mina4.jpeg'

const GaleriaFotos = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const fotos = [
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
    <Container fluid style={{ backgroundColor: '#F9F9F9', padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{
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
        
        <Row className="g-4">
          {fotos.map((foto) => (
            <Col md={4} key={foto.id}>
              <div 
                onClick={() => abrirModal(foto)}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '1/1',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
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
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <Button variant="success" size="lg" className="px-4">
            <FaInstagram className="me-2" /> Ver más en Instagram
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