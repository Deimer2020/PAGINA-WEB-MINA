// src/components/sections/CarruselModalidades.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { FaChalkboardTeacher, FaLaptopCode, FaGlobeAmericas } from 'react-icons/fa'

// Importar estilos de Swiper
import 'swiper/css'
import 'swiper/css/pagination'

const CarruselModalidades = () => {
  const modalidades = [
    {
      icono: <FaChalkboardTeacher />,
      titulo: 'Presencial',
      descripcion: 'Aprendizaje en aula con instructores especializados y talleres prácticos en nuestros centros de formación.',
      color: '#2E7D32',
      bgLight: '#E8F5E9'
    },
    {
      icono: <FaLaptopCode />,
      titulo: 'Virtual',
      descripcion: 'Clases en vivo por videoconferencia, materiales digitales y acompañamiento remoto personalizado.',
      color: '#1565C0',
      bgLight: '#E3F2FD'
    },
    {
      icono: <FaGlobeAmericas />,
      titulo: 'A Distancia',
      descripcion: 'Estudio autónomo con guías y recursos en línea, ideal para quienes necesitan horarios flexibles.',
      color: '#FF8F00',
      bgLight: '#FFF8E1'
    }
  ]

  return (
    <div className="py-5" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container">
        {/* Título de sección */}
        <div className="text-center mb-5">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#1a3c2c',
            letterSpacing: '-0.3px'
          }}>
            Elige tu Modalidad de Estudio
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#5a6e5a',
            maxWidth: '600px',
            margin: '0.5rem auto 0'
          }}>
            Formación flexible adaptada a tus necesidades
          </p>
        </div>

        {/* Swiper Carrusel */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          className="pb-5"
        >
          {modalidades.map((modalidad, index) => (
            <SwiperSlide key={index}>
              <div className="card h-100 border-0 rounded-4 shadow-sm" style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                backgroundColor: 'white',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 30px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                {/* Borde superior colorido */}
                <div style={{ height: '4px', backgroundColor: modalidad.color }} />
                
                <div className="card-body text-center p-4">
                  {/* Icono circular */}
                  <div style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: modalidad.bgLight,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.2rem',
                    fontSize: '2rem',
                    color: modalidad.color
                  }}>
                    {modalidad.icono}
                  </div>
                  
                  {/* Título */}
                  <h3 className="h4 fw-bold mb-2" style={{ color: '#2c3e2f' }}>
                    {modalidad.titulo}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-muted small" style={{ lineHeight: '1.5', fontSize: '0.85rem' }}>
                    {modalidad.descripcion}
                  </p>
                  
                  {/* Badde simulador */}
                  <span className="badge rounded-pill px-3 py-2 mt-2" style={{
                    backgroundColor: modalidad.bgLight,
                    color: modalidad.color,
                    fontSize: '0.7rem',
                    fontWeight: '500'
                  }}>
                    Más información →
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Estilos adicionales para los dots de Swiper */}
      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #2E7D32;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #2E7D32;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  )
}

export default CarruselModalidades