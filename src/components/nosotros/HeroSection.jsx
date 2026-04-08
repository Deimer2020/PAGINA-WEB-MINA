// src/components/nosotros/HeroSection.jsx
import { useState, useEffect } from 'react'

const HeroSection = ({ mostrarVideo, setMostrarVideo, fotosHero, videoInstitucional }) => {
  const [fotoIndex, setFotoIndex] = useState(0)

  useEffect(() => {
    if (!mostrarVideo) {
      const interval = setInterval(() => {
        setFotoIndex((prev) => (prev + 1) % fotosHero.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [mostrarVideo, fotosHero.length])

  return (
    <div id="inicio" style={{
      position: 'relative',
      height: '100vh',
      minHeight: '500px',
      overflow: 'hidden'
    }}>
      {mostrarVideo && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center 25%',
              zIndex: 0
            }}
          >
            <source src={videoInstitucional} type="video/mp4" />
          </video>
        </div>
      )}

      {!mostrarVideo && fotosHero.map((foto, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${foto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            opacity: fotoIndex === idx ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: fotoIndex === idx ? 0 : -1
          }}
        />
      ))}

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.55)',
        zIndex: 1
      }} />

      <button
        onClick={() => setMostrarVideo(!mostrarVideo)}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 3,
          backgroundColor: 'rgba(46,125,50,0.85)',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          padding: '8px 20px',
          fontSize: '0.85rem',
          cursor: 'pointer',
          backdropFilter: 'blur(4px)',
          fontWeight: '500',
          transition: 'all 0.3s ease'
        }}
      >
        {mostrarVideo ? '📸 Ver galería de fotos' : '🎬 Ver video institucional'}
      </button>

      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '0 20px'
      }}>
        <div>
          <h1 className="display-3 fw-bold mb-4" style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)'
          }}>
            Nuestra Institución
          </h1>
          <p className="lead mb-3" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontStyle: 'italic',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold'
          }}>
            "Cabeza, Corazón para los Campos Colombianos"
          </p>
          <p className="lead" style={{
            fontFamily: "'Lato', sans-serif",
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.1rem'
          }}>
            Forjando líderes del campo desde 1986, con raíces profundas y mirada hacia el futuro
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection