import { useEffect, useRef, useState } from 'react'
import { Modal } from 'react-bootstrap'
import './periodico.css'

export default function PeriodicoModal({ show, onHide }) {
  const [page, setPage] = useState(1)
  const [wide, setWide] = useState(() => window.matchMedia('(min-width: 992px)').matches)
  const [zoom, setZoom] = useState(1)
  const [error, setError] = useState('')
  const reader = useRef(null)
  const viewport = useRef(null)
  const touch = useRef(null)
  const paired = wide && page > 1 && page < 20
  const first = wide && page > 1 && page < 20 ? page - page % 2 : page
  const pages = paired ? [first, first + 1] : [first]
  const go = target => {
    setPage(Math.max(1, Math.min(20, target)))
    setZoom(1)
    setError('')
    viewport.current?.scrollTo(0, 0)
  }
  const next = () => go(paired ? first + 2 : first + 1)
  const previous = () => go(wide ? (first === 20 ? 18 : first <= 2 ? 1 : first - 2) : first - 1)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 992px)')
    const update = e => setWide(e.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const fullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else if (reader.current?.requestFullscreen) await reader.current.requestFullscreen()
      else setError('Usa la opción de ampliar para leer con más detalle en este dispositivo.')
    } catch { setError('No se pudo activar la pantalla completa. Puedes usar el zoom.') }
  }

  return <Modal show={show} onHide={onHide} fullscreen className="periodico-modal" aria-labelledby="periodico-title">
    <div ref={reader} className="periodico-reader" onKeyDown={e => {
      if (e.target.closest('button, select, input, a')) return
      if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); previous() }
    }}>
      <Modal.Header closeButton closeLabel="Cerrar periódico">
        <div><span className="periodico-edition">EDICIÓN CONMEMORATIVA · 40 AÑOS</span>
          <Modal.Title id="periodico-title">El Telar de La Mina</Modal.Title>
          <p className="mb-0">La voz de la comunidad · 20 de septiembre de 2026</p></div>
      </Modal.Header>
      <div className="periodico-toolbar" role="group" aria-label="Controles del periódico">
        <button onClick={previous} disabled={first === 1}>← Anterior</button>
        <label>Ir a página <select value={page} onChange={e => go(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
        </select></label>
        <button onClick={next} disabled={first === 20}>Siguiente →</button>
        <span className="periodico-toolbar__divider" />
        <button aria-label="Reducir zoom" disabled={zoom <= 1} onClick={() => setZoom(z => Math.max(1, z - .25))}>−</button>
        <button aria-label="Restablecer zoom" onClick={() => setZoom(1)}>{Math.round(zoom * 100)} %</button>
        <button aria-label="Ampliar zoom" disabled={zoom >= 3} onClick={() => setZoom(z => Math.min(3, z + .25))}>+</button>
        <button onClick={fullscreen}>Pantalla completa</button>
      </div>
      {error && <p role="status" className="periodico-message">{error}</p>}
      <div ref={viewport} className="periodico-viewport" tabIndex={0} aria-label="Páginas del periódico. Usa las flechas del teclado para navegar."
        onTouchStart={e => { touch.current = e.touches.length === 1 ? e.touches[0].clientX : null }}
        onTouchEnd={e => {
          if (zoom !== 1 || touch.current === null) return
          const distance = touch.current - e.changedTouches[0].clientX
          if (Math.abs(distance) > 70) { if (distance > 0) next(); else previous() }
          touch.current = null
        }}>
        <div key={first} className={`periodico-spread${paired ? ' periodico-spread--double' : ''}`} style={{ '--zoom': zoom }}>
          {pages.map(n => <img key={n} src={`/images/periodico/pagina-${n}.jpeg`} alt={`Página ${n} de El Telar de La Mina`}
            onError={() => setError('No se pudo cargar una página. Revisa tu conexión y vuelve a abrir el periódico.')} />)}
        </div>
      </div>
      <footer className="periodico-footer"><span aria-live="polite">{paired ? `Páginas ${first} y ${first + 1}` : `Página ${first}`} de 20</span>
        <span>Amplía para leer los detalles{!wide && ' · Desliza para pasar de página'}</span></footer>
    </div>
  </Modal>
}
