// src/components/sections/Novedades/NovedadesModal.jsx
import { Modal, Button } from 'react-bootstrap'
import MicrofutbolContent from '../novedadesContent/MicrofutbolContent'
import EleccionesContent from '../novedadesContent/EleccionesContent'
import ConcursoContent from '../novedadesContent/ConcursoContent'
import FeriaContent from '../novedadesContent/FeriaContent'
import AniversarioContent from '../novedadesContent/AniversarioContent'
import NoticiaContent from '../novedadesContent/NoticiaContent'

const NovedadesModal = ({ 
  show, 
  onHide, 
  novedad,
  formData,
  handleInputChange,
  handleSubmit
}) => {
  if (!novedad) return null

  const renderContent = () => {
    if (novedad.contenido?.trim() || novedad.galeria?.length || !novedad.legacyTipo) {
      return <NoticiaContent novedad={novedad} />
    }
    switch (novedad.modalTipo) {
      case 'aniversario':
        return <AniversarioContent data={novedad.modalContent} />
      case 'microfutbol':
        return <MicrofutbolContent data={novedad.modalContent} />
      case 'elecciones':
        return <EleccionesContent data={novedad.modalContent} />
      case 'concurso':
        return (
          <ConcursoContent 
            data={novedad.modalContent} 
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        )
      case 'feria':
        return <FeriaContent data={novedad.modalContent} />
      default:
        return <NoticiaContent novedad={novedad} />
    }
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton style={{ backgroundColor: novedad.modalTipo === 'aniversario' ? '#215725' : novedad.color, color: 'white' }}>
        <Modal.Title style={{ fontFamily: "'Playfair Display', serif" }}>
          {novedad.titulo || "Novedad"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        {renderContent()}
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={onHide}
          style={{ backgroundColor: novedad.modalTipo === 'aniversario' ? '#215725' : novedad.color, borderColor: novedad.modalTipo === 'aniversario' ? '#215725' : novedad.color }}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NovedadesModal