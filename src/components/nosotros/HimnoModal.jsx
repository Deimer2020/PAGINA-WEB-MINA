// src/components/nosotros/HimnoModal.jsx
import { useState, useRef, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaPlay, FaPause, FaStop, FaBackward, FaForward, FaMusic, FaHeadphones } from 'react-icons/fa'

const HimnoModal = ({ show, onHide, himnoAudio }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentStrophe, setCurrentStrophe] = useState(-1)
  const audioRef = useRef(null)

  // ⚠️ AJUSTA ESTOS TIEMPOS SEGÚN LA DURACIÓN REAL DE TU AUDIO ⚠️
  // Escucha el audio y modifica los segundos donde comienza cada estrofa
  const letra = [
    { 
      titulo: "🎵 CORO", 
      texto: `Instituto agropecuario
de La Mina con Amor
diariamente vamos al campo
a impulsar nuestra labor

(Bis)`,
      inicio: 0,
      fin: 20
    },
    { 
      titulo: "🎶 I", 
      texto: `Bajo un sol ardiente y fuerte
vamos siempre a trabajar
a poner en práctica siempre
lo que en nociones nos dan`,
      inicio: 20,
      fin: 38
    },
    { 
      titulo: "🎶 II", 
      texto: `Los años nos garantizan
muchos años de luchas van
y nosotros con las mismas
trabajando sin cesar`,
      inicio: 38,
      fin: 54
    },
    { 
      titulo: "🎶 III", 
      texto: `Con sudores en la frente
jóvenes y niñas también
con amor siempre hacia al agro
de nosotros el futuro es`,
      inicio: 54,
      fin: 70
    },
    { 
      titulo: "🎶 IV", 
      texto: `El A.F.A.C nos representa
bajo una coordinación
y el consejero en la mesa
para dar una orientación`,
      inicio: 70,
      fin: 86
    },
    { 
      titulo: "🎶 V", 
      texto: `Cuando se traza una meta
se aspira llegar allá
no decaerá nuestra fuerza
y alcanzaremos a triunfar`,
      inicio: 86,
      fin: 102
    },
    { 
      titulo: "🎶 VI", 
      texto: `No nos sintamos agobiados
que el agro es nuestra misión
ven la mano como hermano
y marchemos sin temor`,
      inicio: 102,
      fin: 120
    }
  ]

  // Actualizar estrofa actual según el tiempo
  useEffect(() => {
    let estrofaActual = -1
    for (let i = 0; i < letra.length; i++) {
      if (currentTime >= letra[i].inicio && currentTime < letra[i].fin) {
        estrofaActual = i
        break
      }
    }
    if (estrofaActual !== currentStrophe) {
      setCurrentStrophe(estrofaActual)
      // Auto-scroll a la estrofa actual
      setTimeout(() => {
        const activeElement = document.querySelector('.estrofa-activa')
        if (activeElement) {
          activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }, [currentTime, currentStrophe])

  // Configurar el audio
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
    //  console.log('Duración del audio:', audio.duration, 'segundos')
    }

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnd = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      setCurrentStrophe(-1)
    }

    audio.addEventListener('loadedmetadata', setAudioData)
    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('ended', handleEnd)

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData)
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('ended', handleEnd)
    }
  }, [])

  // Control de reproducción
  const play = () => {
    audioRef.current?.play()
    setIsPlaying(true)
  }

  const pause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      setCurrentTime(0)
      setCurrentStrophe(-1)
    }
  }

  const backward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10)
    }
  }

  const forward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10)
    }
  }

  const handleProgress = (e) => {
    const newTime = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <Modal show={show} onHide={onHide} size="lg" centered dialogClassName="himno-modal">
      <Modal.Header closeButton style={{ 
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)', 
        color: 'white',
        borderBottom: 'none'
      }}>
        <Modal.Title style={{ fontFamily: "'Playfair Display', serif", display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaHeadphones size={24} /> Himno Institucional
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body style={{ 
        padding: '30px',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)'
      }}>
        <audio ref={audioRef} src={himnoAudio} />
        
        {/* Card del reproductor */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '25px',
          marginBottom: '25px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          {/* Arte del himno */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 5px 15px rgba(46,125,50,0.3)'
            }}>
              <FaMusic size={30} color="white" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: '#2E7D32' }}>
                Institucion Educativa Agricola La Mina
              </h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
                Himno Oficial · Autor: Aroldo Rodríguez (1994)
              </p>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="mb-3">
            <div style={{ position: 'relative', marginBottom: '8px' }}>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleProgress}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: `linear-gradient(to right, #2E7D32 ${progressPercentage}%, #E8F5E9 ${progressPercentage}%)`,
                  cursor: 'pointer',
                  WebkitAppearance: 'none'
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', color: '#999' }}>{formatTime(currentTime)}</span>
              <span style={{ fontSize: '0.75rem', color: '#999' }}>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Botones de control */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
            <button
              onClick={stop}
              style={{
                background: '#f0f0f0',
                border: 'none',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                color: '#555'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#e0e0e0' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#f0f0f0' }}
            >
              <FaStop />
            </button>
            <button
              onClick={backward}
              style={{
                background: '#f0f0f0',
                border: 'none',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                color: '#555'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#e0e0e0' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#f0f0f0' }}
            >
              <FaBackward />
            </button>
            <button
              onClick={isPlaying ? pause : play}
              style={{
                background: '#2E7D32',
                border: 'none',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 5px 15px rgba(46,125,50,0.4)',
                color: 'white'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1B5E20'; e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#2E7D32'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} style={{ marginLeft: '3px' }} />}
            </button>
            <button
              onClick={forward}
              style={{
                background: '#f0f0f0',
                border: 'none',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                color: '#555'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#e0e0e0' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#f0f0f0' }}
            >
              <FaForward />
            </button>
          </div>
        </div>

        {/* Letra del himno con scroll y sincronización */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '20px',
          maxHeight: '380px',
          overflowY: 'auto',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          scrollBehavior: 'smooth'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{
              display: 'inline-block',
              padding: '5px 15px',
              background: '#E8F5E9',
              borderRadius: '20px',
              fontSize: '0.8rem',
              color: '#2E7D32'
            }}>
              🎵 Letra sincronizada
            </div>
          </div>
          
          {letra.map((estrofa, index) => (
            <div 
              key={index}
              className={currentStrophe === index ? 'estrofa-activa' : ''}
              style={{
                background: currentStrophe === index 
                  ? 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)' 
                  : 'transparent',
                color: currentStrophe === index ? 'white' : '#333',
                padding: '20px',
                borderRadius: '20px',
                marginBottom: '15px',
                transition: 'all 0.4s ease',
                boxShadow: currentStrophe === index 
                  ? '0 10px 25px rgba(46,125,50,0.3)' 
                  : '0 2px 8px rgba(0,0,0,0.05)',
                transform: currentStrophe === index ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <div style={{ 
                fontWeight: 'bold', 
                marginBottom: '12px',
                fontSize: currentStrophe === index ? '1.1rem' : '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ 
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  background: currentStrophe === index ? '#FFD700' : '#2E7D32',
                  borderRadius: '50%',
                  animation: currentStrophe === index ? 'pulse 1s infinite' : 'none'
                }}></span>
                {estrofa.titulo}
              </div>
              <p style={{ 
                whiteSpace: 'pre-line', 
                marginBottom: 0, 
                lineHeight: '1.8',
                fontSize: currentStrophe === index ? '1rem' : '0.95rem',
                fontFamily: "'Lato', sans-serif"
              }}>
                {estrofa.texto}
              </p>
            </div>
          ))}
        </div>
      </Modal.Body>
      
      <Modal.Footer style={{ 
        background: '#f5f5f5', 
        borderTop: '1px solid #eee',
        justifyContent: 'center'
      }}>
        <Button 
          variant="success" 
          onClick={onHide}
          style={{ borderRadius: '30px', padding: '10px 30px' }}
        >
          Cerrar
        </Button>
      </Modal.Footer>

      <style>{`
        .himno-modal .modal-content {
          border-radius: 30px;
          overflow: hidden;
        }
        .estrofa-activa {
          animation: slideIn 0.5s ease;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        input[type="range"] {
          -webkit-appearance: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2E7D32;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
      `}</style>
    </Modal>
  )
}

export default HimnoModal