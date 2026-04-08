import { Carousel, Button } from 'react-bootstrap'
import ita from '../../assets/images/ita.jpeg'
import ita1 from '../../assets/images/ita1.jpeg'
import ita2 from '../../assets/images/ita2.jpeg'
import ita3 from '../../assets/images/ita3.jpeg'
import ita4 from '../../assets/images/ita4.jpeg'
import ita5 from '../../assets/images/ita5.jpeg'

const HeroCarousel = () => {
  const images = [
    {
      src: ita,
      title: 'Institución Educativa Agrícola La Mina',
      subtitle: 'Formando líderes del campo con innovación y tradición',
      buttonText: 'CONOCE MÁS',
      isMain: true
    },
    {
      src: ita1,
      title: 'Educación de Calidad',
      subtitle: 'Aprendizaje práctico en cultivos sostenibles',
      buttonText: 'VER PROGRAMAS',
      isMain: false
    },
    {
      src: ita2,
      title: 'Innovación Rural',
      subtitle: 'Tecnología aplicada al campo colombiano',
      buttonText: 'DESCUBRE MÁS',
      isMain: false
    },
    {
      src: ita3,
      title: 'Compromiso con el Campo',
      subtitle: 'Formamos líderes que transforman su entorno',
      buttonText: 'CONÓCENOS',
      isMain: false
    },
    {
      src: ita4,
      title: 'Proyectos Productivos',
      subtitle: 'Aprendizaje práctico en agricultura moderna',
      buttonText: 'VER PROYECTOS',
      isMain: false
    },
    {
      src: ita5,
      title: 'Futuro Sostenible',
      subtitle: 'Tecnología e innovación para el campo',
      buttonText: 'DESCUBRE MÁS',
      isMain: false
    }
  ]

  return (
    <div style={{ marginTop: '-76px' }}>
      <Carousel 
        interval={5000}
        pause={false}
        className="hero-carousel"
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.title}
              style={{ 
                height: '100vh', 
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <Carousel.Caption style={{ 
              bottom: '25%',  /* CAMBIADO: antes estaba en 30%, ahora en 15% (más abajo) */
              background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%)',
              borderRadius: '28px', 
              padding: image.isMain ? '2rem 3rem' : '1.8rem 2.5rem',
              maxWidth: image.isMain ? '75%' : '65%',
              margin: '0 auto',
              left: '12.5%',
              right: '12.5%',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.25)',
              boxShadow: '0 25px 45px rgba(0,0,0,0.4)'
            }}>
              <h1 style={{ 
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: image.isMain ? '2.8rem' : '2.5rem',
                fontWeight: '800',
                letterSpacing: '-0.01em',
                marginBottom: '1rem',
                textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
                color: 'white',
                lineHeight: '1.2'
              }}>
                {image.title}
              </h1>
              <p style={{ 
                fontFamily: "'Lato', sans-serif",
                fontSize: image.isMain ? '1.2rem' : '1.1rem',
                fontWeight: '400',
                marginBottom: '1.5rem',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: '1.5'
              }}>
                {image.subtitle}
              </p>
              <Button 
                variant="success" 
                size="lg" 
                className="px-4 py-2"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  borderRadius: '50px',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  backgroundColor: '#2E7D32',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(46, 125, 50, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)'
                  e.target.style.backgroundColor = '#1B5E20'
                  e.target.style.boxShadow = '0 8px 25px rgba(46, 125, 50, 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.backgroundColor = '#2E7D32'
                  e.target.style.boxShadow = '0 4px 15px rgba(46, 125, 50, 0.4)'
                }}
              >
                {image.buttonText}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <style>{`
        .hero-carousel .carousel-control-prev,
        .hero-carousel .carousel-control-next {
          width: 5%;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        
        .hero-carousel .carousel-control-prev:hover,
        .hero-carousel .carousel-control-next:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        
        .hero-carousel .carousel-indicators {
          bottom: 20px;
        }
        
        .hero-carousel .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 8px;
          background-color: white;
          opacity: 0.5;
          transition: all 0.3s ease;
          border: none;
        }
        
        .hero-carousel .carousel-indicators button.active {
          opacity: 1;
          background-color: #2E7D32;
          transform: scale(1.3);
        }
        
        /* Responsive para tablets */
        @media (max-width: 992px) {
          .hero-carousel .carousel-caption {
            max-width: 85% !important;
            padding: 1.5rem 2rem !important;
            bottom: 12% !important;
          }
          
          .hero-carousel .carousel-caption h1 {
            font-size: 2rem !important;
          }
          
          .hero-carousel .carousel-caption p {
            font-size: 1rem !important;
          }
        }
        
        /* Responsive para móviles */
        @media (max-width: 768px) {
          .hero-carousel .carousel-caption {
            max-width: 90% !important;
            padding: 1rem 1.2rem !important;
            bottom: 10% !important;
          }
          
          .hero-carousel .carousel-caption h1 {
            font-size: 1.4rem !important;
          }
          
          .hero-carousel .carousel-caption p {
            font-size: 0.85rem !important;
            margin-bottom: 0.8rem !important;
          }
          
          .hero-carousel .carousel-caption .btn {
            padding: 6px 16px !important;
            font-size: 0.7rem !important;
          }
        }
        
        /* Responsive para móviles pequeños */
        @media (max-width: 480px) {
          .hero-carousel .carousel-caption {
            bottom: 8% !important;
          }
          
          .hero-carousel .carousel-caption h1 {
            font-size: 1.2rem !important;
          }
          
          .hero-carousel .carousel-caption p {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroCarousel