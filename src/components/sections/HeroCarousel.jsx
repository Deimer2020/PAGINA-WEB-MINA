import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, A11y, Keyboard } from 'swiper/modules'
import { Link } from 'react-router-dom'
import ita from '../../assets/images/ita.jpeg'
import ita1 from '../../assets/images/ita1.jpeg'
import ita2 from '../../assets/images/ita2.jpeg'
import ita3 from '../../assets/images/ita3.jpeg'
import ita4 from '../../assets/images/ita4.jpeg'
import ita5 from '../../assets/images/ita5.jpeg'
import 'swiper/css'
import 'swiper/css/pagination'
import './HeroCarousel.css'

const HeroCarousel = () => {
  const swiperRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = (event) => setReducedMotion(event.matches)
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper || swiper.destroyed) return
    if (paused || hovered || focused || reducedMotion) swiper.autoplay.stop()
    else swiper.autoplay.start()
  }, [paused, hovered, focused, reducedMotion])
  const slides = [
    {
      imagen: ita,
      titulo: 'Agrícola La Mina',
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
    <section className="mina-hero" aria-label="Nuestra institución"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <div className="mina-hero__frame">
        <Swiper modules={[Pagination, Autoplay, A11y, Keyboard]}
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          centeredSlides slidesPerView={1} spaceBetween={20}
          breakpoints={{ 768: { slidesPerView: 1.25, spaceBetween: 24 }, 1024: { slidesPerView: 1.65, spaceBetween: 28 } }}
          loop grabCursor speed={reducedMotion ? 0 : 500}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={reducedMotion ? false : { delay: 6500, disableOnInteraction: false }}
          a11y={{ slideLabelMessage: 'Imagen {{index}} de {{slidesLength}}', paginationBulletMessage: 'Ir a la imagen {{index}}' }}
          className="mina-hero__carousel">
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.titulo}>
              {({ isActive }) => (
                <article className="mina-hero__card">
                  <img className="mina-hero__photo" src={slide.imagen} alt="Instalaciones de la Institución Educativa Agrícola La Mina" loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} />
                  <div className="mina-hero__content">
                    <span className="mina-hero__eyebrow">{index === 0 ? 'Institución Educativa' : 'Educación · Campo · Comunidad'}</span>
                    {index === 0 ? <h1>{slide.titulo}</h1> : <h2>{slide.titulo}</h2>}
                    <p>{slide.subtitulo}</p>
                    {index === 0 || index === 3 ? <Link className="mina-hero__cta" to="/nosotros" tabIndex={isActive ? 0 : -1}>{slide.boton}<span aria-hidden="true">↗</span></Link> : <a className="mina-hero__cta" href="#programas" tabIndex={isActive ? 0 : -1}>{slide.boton}<span aria-hidden="true">↓</span></a>}
                  </div>
                </article>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="mina-hero__arrow mina-hero__arrow--prev" type="button" aria-label="Imagen anterior" onClick={() => swiperRef.current?.slidePrev()}>←</button>
        <button className="mina-hero__arrow mina-hero__arrow--next" type="button" aria-label="Imagen siguiente" onClick={() => swiperRef.current?.slideNext()}>→</button>
      </div>
      {!reducedMotion && <button className="mina-hero__pause" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Reanudar carrusel' : 'Pausar carrusel'}</button>}
    </section>
  )
}
export default HeroCarousel