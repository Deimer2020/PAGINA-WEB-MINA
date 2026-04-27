// src/components/sections/HeroCarouselModerno.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import { Button } from 'react-bootstrap'

// Importar imágenes locales
import ita from '../../assets/images/ita.jpeg'
import ita1 from '../../assets/images/ita1.jpeg'
import ita2 from '../../assets/images/ita2.jpeg'
import ita3 from '../../assets/images/ita3.jpeg'
import ita4 from '../../assets/images/ita4.jpeg'
import ita5 from '../../assets/images/ita5.jpeg'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const HeroCarousel = () => {
  const slides = [
    {
      imagen: ita,
      titulo: 'INSTITUCIÓN EDUCATIVA AGRÍCOLA LA MINA',
      subtitulo: 'Formando líderes del campo con innovación y tradición',
      boton: 'CONOCE MÁS',
      color: '#2E7D32'
    },
    {
      imagen: ita1,
      titulo: 'Educación de Calidad',
      subtitulo: 'Aprendizaje práctico en cultivos sostenibles',
      boton: 'VER PROGRAMAS',
      color: '#FF9800'
    },
    {
      imagen: ita2,
      titulo: 'Innovación Rural',
      subtitulo: 'Tecnología aplicada al campo colombiano',
      boton: 'DESCUBRE MÁS',
      color: '#2196F3'
    },
    {
      imagen: ita3,
      titulo: 'Compromiso con el Campo',
      subtitulo: 'Formamos líderes que transforman su entorno',
      boton: 'CONÓCENOS',
      color: '#9C27B0'
    },
    {
      imagen: ita4,
      titulo: 'Proyectos Productivos',
      subtitulo: 'Aprendizaje práctico en agricultura moderna',
      boton: 'VER PROYECTOS',
      color: '#E91E63'
    },
    {
      imagen: ita5,
      titulo: 'Futuro Sostenible',
      subtitulo: 'Tecnología e innovación para el campo',
      boton: 'DESCUBRE MÁS',
      color: '#00BCD4'
    }
  ]

  return (
    <div style={{ 
      position: 'relative', 
      overflow: 'hidden',
      background:'linear-gradient(135deg, #223628 0%, #085034 100%)', 
      padding: '20px 0 50px 0',
      marginTop: '0px'  
    }}>
     
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        paddingTop: '30px'
      }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20, centeredSlides: true },
              768: { slidesPerView: 1.5, spaceBetween: 25, centeredSlides: true },
              1024: { slidesPerView: 2.2, spaceBetween: 30, centeredSlides: true },
              1280: { slidesPerView: 2.5, spaceBetween: 35, centeredSlides: true }
            }}
            className="hero-carousel-moderno"
            style={{ padding: '20px 0 50px 0' }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} style={{ width: '480px', maxWidth: '75vw' }}>
                <div className="card-slide" style={{
                  position: 'relative',
                  height: '480px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
                  transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  cursor: 'pointer',
                  backgroundColor: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 25px 40px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)'
                }}>
                  {/* Imagen de fondo */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${slide.imagen})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                  
                  {/* Overlay suave */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)'
                  }} />
                  
                  {/* Contenido */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: 0,
                    right: 0,
                    padding: '25px 30px',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 2
                  }}>
                    <div style={{
                      display: 'inline-block',
                      width: '50px',
                      height: '3px',
                      backgroundColor: slide.color,
                      marginBottom: '15px',
                      borderRadius: '3px'
                    }} />
                    
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '10px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                      lineHeight: '1.3'
                    }}>
                      {slide.titulo}
                    </h3>
                    
                    <p style={{
                      fontSize: '0.85rem',
                      opacity: 0.95,
                      marginBottom: '20px',
                      maxWidth: '90%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      lineHeight: '1.4'
                    }}>
                      {slide.subtitulo}
                    </p>
                    
                    <Button
                      variant="outline-light"
                      size="sm"
                      style={{
                        borderRadius: '50px',
                        padding: '7px 24px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease',
                        borderWidth: '1.5px',
                        backdropFilter: 'blur(4px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = slide.color
                        e.currentTarget.style.borderColor = slide.color
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.borderColor = 'white'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      {slide.boton}
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Estilos */}
      <style>{`
        .hero-carousel-moderno .swiper-slide {
          transition: all 0.4s ease;
          opacity: 0.65;
          transform: scale(0.88);
        }
        
        .hero-carousel-moderno .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
          z-index: 10;
        }
        
        .hero-carousel-moderno .swiper-slide-active .card-slide {
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .hero-carousel-moderno .swiper-pagination {
          bottom: 10px !important;
          position: relative !important;
          margin-top: 15px;
        }
        
        .hero-carousel-moderno .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #2E7D32;
          opacity: 0.4;
          transition: all 0.3s ease;
          margin: 0 5px !important;
        }
        
        .hero-carousel-moderno .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #2E7D32;
          transform: scale(1.3);
          width: 20px;
          border-radius: 10px;
        }
        
        @media (max-width: 768px) {
          .hero-carousel-moderno .swiper-slide {
            transform: scale(0.92);
            opacity: 0.8;
          }
          .hero-carousel-moderno .swiper-slide-active {
            transform: scale(1);
          }
          .card-slide {
            height: 420px !important;
          }
        }
        
        @media (max-width: 480px) {
          .card-slide {
            height: 380px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroCarousel