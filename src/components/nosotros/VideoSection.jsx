// src/components/nosotros/VideoSection.jsx
import { Container } from 'react-bootstrap'

const VideoSection = () => {
  return (
    <Container id="video" className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem'
      }}>
        Conoce Nuestra Historia
      </h2>
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
          title="Video Institucional"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <p className="text-center mt-3 text-muted">
        *Próximamente: Video institucional oficial
      </p>
    </Container>
  )
}

export default VideoSection