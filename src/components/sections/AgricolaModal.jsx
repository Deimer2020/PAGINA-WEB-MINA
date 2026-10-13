import { useState } from 'react'
import { Modal, Button, Carousel } from 'react-bootstrap'

const fotos = [
  { src: '/images/tecnico-agricola/practica-1.jpeg', descripcion: 'Trabajo en el área de cultivos de la institución' },
  { src: '/images/tecnico-agricola/practica-2.jpeg', descripcion: 'Mantenimiento de las zonas de cultivo con herramientas agrícolas' },
  { src: '/images/tecnico-agricola/practica-3.jpeg', descripcion: 'Estudiantes trabajando en el mantenimiento del terreno' },
  { src: '/images/tecnico-agricola/practica-4.jpeg', descripcion: 'Trabajo en equipo durante la preparación de materiales para las prácticas agrícolas' },
]

const AgricolaModal = ({ show, onHide }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Modal show={show} onHide={onHide} onExited={() => setActiveIndex(0)} centered size="lg" scrollable aria-labelledby="agricola-titulo">
      <Modal.Header closeButton><Modal.Title id="agricola-titulo" style={{ color: '#2E7D32' }}>Técnico Agrícola</Modal.Title></Modal.Header>
      <Modal.Body>
        <section aria-labelledby="agricola-docente" className="p-3 rounded-3 mb-4 d-flex flex-wrap align-items-center gap-3" style={{ background: '#edf5ee' }}>
          <img src="/images/tecnico-agricola/jose-enrique-maestre.jpeg" alt="Profesor José Enrique Maestre" className="rounded-3" style={{ width: 110, height: 132, objectFit: 'contain', background: '#d9e6eb' }} />
          <div>
            <small className="text-uppercase text-success fw-bold">Docente encargado</small>
            <h3 id="agricola-docente" className="h5 mt-1 mb-1">José Enrique Maestre</h3>
            <p className="text-muted small mb-0">Programa Técnico Agrícola</p>
          </div>
        </section>
        <h4 className="h5">Aprender cultivando</h4>
        <p>El programa Técnico Agrícola integra el aprendizaje sobre cultivos y el cuidado del entorno con la práctica en la granja institucional.</p>
        <p>Las fotografías muestran a los estudiantes participando en el mantenimiento de las áreas de cultivo, el trabajo del terreno y la preparación de materiales. Estas experiencias conectan los conocimientos del aula con las labores del campo y el trabajo en equipo.</p>
        <h4 className="h5 mt-4">Nuestras prácticas</h4>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge rounded-pill text-bg-success">Cuidado de cultivos</span>
          <span className="badge rounded-pill text-bg-success">Mantenimiento del terreno</span>
          <span className="badge rounded-pill text-bg-success">Trabajo en equipo</span>
        </div>
        <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} interval={null} indicators={false} prevLabel="Foto anterior" nextLabel="Foto siguiente" className="rounded-3 overflow-hidden" style={{ background: '#173c29' }}>
          {fotos.map((foto) => <Carousel.Item key={foto.src}><img src={foto.src} alt={foto.descripcion} loading="lazy" style={{ width: '100%', height: 'min(360px, 50vh)', objectFit: 'contain', display: 'block' }} /></Carousel.Item>)}
        </Carousel>
        <div className="text-center mt-2" aria-live="polite"><small className="text-muted">Foto {activeIndex + 1} de {fotos.length}</small><p className="small mt-1 mb-0">{fotos[activeIndex].descripcion}</p></div>
      </Modal.Body>
      <Modal.Footer><Button variant="success" onClick={onHide}>Cerrar</Button></Modal.Footer>
    </Modal>
  )
}
export default AgricolaModal