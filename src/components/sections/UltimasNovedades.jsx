// src/components/sections/UltimasNovedades.jsx
import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { novedadesData } from './novedades/novedadesData'
import NovedadesCarousel from './novedades/NovedadesCarousel'
import NovedadesModal from './novedades/NovedadesModal'

const UltimasNovedades = () => {
  const [modalAbierto, setModalAbierto] = useState(null)
  const [formData, setFormData] = useState({
    nombre: '',
    grado: '',
    telefono: '',
    cancion: ''
  })

  const novedadActual = novedadesData.find(n => n.modalTipo === modalAbierto)

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

        <NovedadesCarousel 
          novedades={novedadesData} 
          onLeerMas={abrirModal} 
        />
        
        <div className="text-center mt-5">
          <Button variant="outline-success" size="lg" className="px-5">
            Ver todas las noticias
          </Button>
        </div>
      </Container>

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