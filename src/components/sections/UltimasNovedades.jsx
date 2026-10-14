// src/components/sections/UltimasNovedades.jsx
import { useState } from 'react'
import { Container, Button, Modal, Row, Col } from 'react-bootstrap'
import { novedadesData } from './novedades/cmsNovedades'
import NovedadesCarousel from './novedades/NovedadesCarousel'
import NovedadesModal from './novedades/NovedadesModal'
import NovedadCard from './novedades/NovedadCard'

const UltimasNovedades = () => {
  const [modalAbierto, setModalAbierto] = useState(null)
  const [verTodas, setVerTodas] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    grado: '',
    telefono: '',
    cancion: ''
  })

  const novedadActual = novedadesData.find(n => n.id === modalAbierto)

  const abrirModal = (tipo) => setModalAbierto(tipo)
  const cerrarModal = () => setModalAbierto(null)

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

        {novedadesData.length === 0 ? <p className="text-center text-muted">No hay novedades publicadas.</p> : <NovedadesCarousel
          novedades={novedadesData}
          onLeerMas={abrirModal} />}

        <div className="text-center mt-5">
          <Button variant="outline-success" size="lg" className="px-5" onClick={() => setVerTodas(true)} disabled={novedadesData.length === 0}>
            Ver todas las noticias
          </Button>
        </div>
      </Container>

      <Modal show={verTodas} onHide={() => setVerTodas(false)} size="xl" centered>
        <Modal.Header closeButton><Modal.Title>Todas las noticias</Modal.Title></Modal.Header>
        <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
          <Row className="g-4">
            {novedadesData.map(novedad => (
              <Col md={6} lg={4} key={novedad.id}>
                <NovedadCard novedad={novedad} onLeerMas={id => { setVerTodas(false); abrirModal(id) }} />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>

      <NovedadesModal
        show={modalAbierto !== null}
        onHide={cerrarModal}
        novedad={novedadActual}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default UltimasNovedades