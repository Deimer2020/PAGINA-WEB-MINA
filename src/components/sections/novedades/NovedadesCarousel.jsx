import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Pagination, Autoplay, Keyboard, EffectCoverflow } from 'swiper/modules'
import NovedadCard from './NovedadCard'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import './novedades.css'
import './coverflow.css'

const NovedadesCarousel = ({ novedades, onLeerMas }) => {
  const swiperRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = event => setReducedMotion(event.matches)
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper || swiper.destroyed) return
    if (paused || hovered || focused || reducedMotion) swiper.autoplay.stop()
    else swiper.autoplay.start()
  }, [paused, hovered, focused, reducedMotion])

  return (
    <div className="novedades-slider novedades-slider--coverflow" role="region" aria-label="Últimas novedades"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <Swiper
        modules={[A11y, Pagination, Autoplay, Keyboard, EffectCoverflow]}
        onSwiper={swiper => { swiperRef.current = swiper }}
        onSlideChange={swiper => setActive(swiper.realIndex)}
        slidesPerView="auto" centeredSlides effect="coverflow"
        coverflowEffect={{ rotate: 0, stretch: 135, depth: 170, modifier: 1, scale: 0.9, slideShadows: true }}
        loop={novedades.length >= 5}
        rewind={novedades.length < 5}
        watchOverflow grabCursor
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        speed={reducedMotion ? 0 : 500}
        a11y={{ paginationBulletMessage: 'Ir a la novedad {{index}}', slideLabelMessage: 'Novedad {{index}} de {{slidesLength}}' }}
        breakpoints={{
          0: { coverflowEffect: { stretch: 35, depth: 100, scale: 0.92 } },
          768: { coverflowEffect: { stretch: 105, depth: 150, scale: 0.9 } },
          1200: { coverflowEffect: { stretch: 135, depth: 170, scale: 0.9 } },
        }}
        className="novedades-carousel">
        {novedades.map((novedad, index) => (
          <SwiperSlide key={novedad.id}>
            <NovedadCard novedad={novedad} onLeerMas={onLeerMas} featured active={index === active} />
          </SwiperSlide>
        ))}
      </Swiper>
      {novedades.length > 1 && <>
        <button type="button" className="novedades-slider__arrow novedades-slider__arrow--prev"
          aria-label="Novedad anterior" onClick={() => swiperRef.current?.slidePrev()}>
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" className="novedades-slider__arrow novedades-slider__arrow--next"
          aria-label="Novedad siguiente" onClick={() => swiperRef.current?.slideNext()}>
          <span aria-hidden="true">›</span>
        </button>
        <div className="novedades-slider__controls">
          <span className="novedades-slider__counter">{active + 1} de {novedades.length}</span>
          {!reducedMotion && <button type="button" className="novedades-slider__pause"
            aria-pressed={paused} onClick={() => setPaused(!paused)}>
            {paused ? 'Reanudar carrusel' : 'Pausar carrusel'}
          </button>}
        </div>
      </>}
    </div>
  )
}
export default NovedadesCarousel
