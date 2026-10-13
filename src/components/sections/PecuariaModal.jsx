import { useState } from 'react'
import { Modal, Button, Carousel } from 'react-bootstrap'

const fotos = Array.from({ length: 15 }, (_, index) => ({
  src: `/images/produccion-pecuaria/foto-${index + 1}.jpeg`,
  descripcion: index >= 6 && index <= 8
    ? 'Práctica de manejo de aves con participación de los estudiantes'
    : 'Práctica de manejo de porcinos con participación de los estudiantes',
}))

const PecuariaModal = ({ show, onHide }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Modal show={show} onHide={onHide} onExited={() => setActiveIndex(0)} centered size="lg" scrollable aria-labelledby="pecuaria-titulo">
      <Modal.Header closeButton>
        <Modal.Title id="pecuaria-titulo" style={{ color: '#2E7D32' }}>Producción Pecuaria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3 rounded-3 mb-4" style={{ background: '#edf5ee' }}>
          <small className="text-uppercase text-success fw-bold">Docente encargado</small>
          <h3 className="h5 mt-1 mb-0">Jorge Luis Luquez</h3>
        </div>
        <h4 className="h5">Aprender desde la práctica</h4>
        <p>La Producción Pecuaria forma parte de la educación agrícola de nuestra institución. Integra conocimientos sobre manejo de animales, producción y sanidad animal con experiencias prácticas en el entorno de la granja.</p>
        <p>Las fotografías compartidas muestran la participación de los estudiantes en actividades con aves y porcinos, combinando la observación, el trabajo en equipo y el acompañamiento durante las prácticas.</p>
        <h4 className="h5 mt-4">Nuestras prácticas</h4>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge rounded-pill text-bg-success">Manejo de aves</span>
          <span className="badge rounded-pill text-bg-success">Manejo de porcinos</span>
          <span className="badge rounded-pill text-bg-success">Aprendizaje en la granja</span>
        </div>
        <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} interval={null} indicators={false} prevLabel="Foto anterior" nextLabel="Foto siguiente" variant="dark" className="rounded-3 overflow-hidden" style={{ background: '#e9eeea' }}>
          {fotos.map((foto, index) => (
            <Carousel.Item key={foto.src}>
              <img src={foto.src} alt={`${foto.descripcion}. Fotografía ${index + 1}`} loading="lazy" style={{ width: '100%', height: 'min(420px, 55vh)', objectFit: 'contain', display: 'block' }} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center mt-2" aria-live="polite">
          <small className="text-muted">Foto {activeIndex + 1} de {fotos.length}</small>
          <p className="small mt-1 mb-0">{fotos[activeIndex].descripcion}</p>
        </div>
      </Modal.Body>
      <Modal.Footer><Button variant="success" onClick={onHide}>Cerrar</Button></Modal.Footer>
    </Modal>
  )
}
export default PecuariaModal