import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Pagination, Autoplay, Keyboard } from 'swiper/modules'
import NovedadCard from './NovedadCard'
import 'swiper/css'
import 'swiper/css/pagination'
import './novedades.css'

const NovedadesCarousel = ({ novedades, onLeerMas }) => {
  const swiperRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = (event) => setReducedMotion(event.matches)
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper || swiper.destroyed) return
    if (paused || hovered || focused || reducedMotion) {
      swiper.autoplay.stop()
    } else {
      swiper.autoplay.start()
    }
  }, [paused, hovered, focused, reducedMotion])

  return (
    <div
      className="novedades-slider"
      role="region"
      aria-label="Últimas novedades"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
      }}
    >
      <Swiper
        modules={[A11y, Pagination, Autoplay, Keyboard]}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        slidesPerView={1}
        spaceBetween={20}
        rewind
        watchOverflow
        grabCursor
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        speed={reducedMotion ? 0 : 400}
        a11y={{
          paginationBulletMessage: 'Ir a la novedad {{index}}',
          slideLabelMessage: 'Novedad {{index}} de {{slidesLength}}',
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className="novedades-carousel"
      >
        {novedades.map((novedad) => (
          <SwiperSlide key={novedad.id}>
            <NovedadCard novedad={novedad} onLeerMas={onLeerMas} />
          </SwiperSlide>
        ))}
      </Swiper>
      {novedades.length > 1 && (
        <div className="novedades-slider__controls">
          <button type="button" className="novedades-slider__arrow" aria-label="Novedad anterior" onClick={() => swiperRef.current?.slidePrev()}>
            <span aria-hidden="true">←</span>
          </button>
          {!reducedMotion && (
            <button type="button" className="novedades-slider__pause" aria-pressed={paused} onClick={() => setPaused(!paused)}>
              {paused ? 'Reanudar carrusel' : 'Pausar carrusel'}
            </button>
          )}
          <button type="button" className="novedades-slider__arrow" aria-label="Novedad siguiente" onClick={() => swiperRef.current?.slideNext()}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default NovedadesCarousel