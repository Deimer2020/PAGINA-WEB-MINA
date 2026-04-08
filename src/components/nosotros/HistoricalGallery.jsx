// src/components/nosotros/HistoricalGallery.jsx
import { Container, Carousel } from 'react-bootstrap'

const HistoricalGallery = () => {
  const galeriaFotos = [
    { src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800', titulo: 'Primeros años', descripcion: 'Inicios del colegio en 1986' },
    { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800', titulo: 'Primera Promoción', descripcion: 'Graduación 1992' },
    { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800', titulo: 'Antiguas Instalaciones', descripcion: 'Edificio original' },
    { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800', titulo: 'Clases en el Campo', descripcion: 'Prácticas agrícolas' },
    { src: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800', titulo: 'Talleres', descripcion: 'Aprendizaje técnico' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', titulo: 'Eventos Culturales', descripcion: 'Celebraciones institucionales' },
  ]

  return (
    <Container id="galeria-historica" fluid style={{ backgroundColor: '#F9F9F9', padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{
          fontFamily: "'Playfair Display', serif",
          color: '#2E7D32',
          fontSize: '2.5rem'
        }}>
          Galería Histórica
          <div style={{
            width: '80px',
            height: '4px',
            background: '#2E7D32',
            margin: '15px auto 0',
            borderRadius: '2px'
          }} />
        </h2>
        <Carousel interval={4000} className="shadow-lg rounded-4 overflow-hidden">
          {galeriaFotos.map((foto, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={foto.src}
                alt={foto.titulo}
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '10px', bottom: '20%' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif" }}>{foto.titulo}</h3>
                <p>{foto.descripcion}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  )
}

export default HistoricalGallery