// src/components/sections/HeroCarousel.jsx
import { Carousel, Button } from 'react-bootstrap'
import ita from '../../assets/images/ita.jpeg'
import ita1 from '../../assets/images/ita1.jpeg'
import ita2 from '../../assets/images/ita2.jpeg'
import ita3 from '../../assets/images/ita3.jpeg'
import ita4 from '../../assets/images/ita4.jpeg'
import ita5 from '../../assets/images/ita5.jpeg'

const HeroCarousel = () => {
  const slides = [
    {
      src: ita,
      titulo: 'INSTITUCIÓN EDUCATIVA AGRÍCOLA LA MINA',
      subtitulo: 'Formar y Educar',
      modalidad: 'Presencial',
      badge: '🌟 Institucional',
      descripcion: 'Formando líderes del campo con innovación y tradición',
      buttonText: 'CONOCE MÁS',
      textoInferior: 'Educación de calidad'
    },
    {
      src: ita1,
    
    },
    {
      src: ita2,
      
    },
    {
      src: ita3,
     
    },
    {
      src: ita4,
    
    },
    {
      src: ita5,
     
    }
  ]

  return (
    <div style={{ marginTop: '-76px' }}>
      <Carousel 
        interval={5000}
        pause={false}
        className="hero-carousel-moderno"
        indicators={true}
        controls={true}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div style={{
              position: 'relative',
              height: '100vh',
              width: '100%',
              backgroundImage: `url(${slide.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
              {/* Overlay oscuro */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.75))'
              }} />
              
              {/* Contenido centrado verticalmente */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                maxWidth: '600px',
                padding: '0 20px',
                textAlign: 'center',
                zIndex: 2
              }}>
                {/* Badge superior (esquina superior del contenido) */}
                <div className="mb-3">
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 18px',
                    borderRadius: '30px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    color: 'white'
                  }}>
                    {slide.badge}
                  </span>
                </div>
                
                {/* Título principal */}
                <h1 className="text-white fw-bold mb-2" style={{
                  fontSize: '2.2rem',
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}>
                  {slide.titulo}
                </h1>
                
                {/* Subtítulo (solo para la primera diapositiva) */}
                {slide.subtitulo && (
                  <p className="text-white mb-3" style={{
                    fontSize: '1.1rem',
                    opacity: 0.9,
                    fontStyle: 'italic'
                  }}>
                    {slide.subtitulo}
                  </p>
                )}
                
                {/* Badge de modalidad (debajo del título, como en la imagen) */}
                <div className="mb-3">
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    padding: '5px 14px',
                    borderRadius: '30px',
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    color: 'white'
                  }}>
                    {slide.modalidad}
                  </span>
                </div>
                
                {/* Descripción */}
                <p className="text-white mb-4" style={{
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  maxWidth: '450px',
                  margin: '0 auto'
                }}>
                  {slide.descripcion}
                </p>
                
                {/* Botón */}
                <Button 
                  className="rounded-pill px-5 py-2 fw-semibold mb-3"
                  style={{
                    backgroundColor: 'white',
                    color: '#2E7D32',
                    border: 'none',
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2E7D32'
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                    e.currentTarget.style.color = '#2E7D32'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {slide.buttonText}
                </Button>
                
                {/* Texto inferior */}
                <p className="text-white mb-0" style={{
                  fontSize: '0.7rem',
                  opacity: 0.7
                }}>
                  {slide.textoInferior}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <style>{`
        .hero-carousel-moderno .carousel-control-prev,
        .hero-carousel-moderno .carousel-control-next {
          width: 5%;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        
        .hero-carousel-moderno .carousel-control-prev:hover,
        .hero-carousel-moderno .carousel-control-next:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        
        .hero-carousel-moderno .carousel-indicators {
          bottom: 30px;
        }
        
        .hero-carousel-moderno .carousel-indicators button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 6px;
          background-color: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .hero-carousel-moderno .carousel-indicators button.active {
          opacity: 1;
          background-color: #2E7D32;
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .hero-carousel-moderno h1 {
            font-size: 1.5rem !important;
          }
          .hero-carousel-moderno .btn {
            padding: 8px 25px !important;
            font-size: 0.75rem !important;
          }
          .hero-carousel-moderno span {
            font-size: 0.65rem !important;
          }
          .hero-carousel-moderno p {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroCarousel