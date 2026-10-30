import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaTrophy } from 'react-icons/fa'
import './celebracionBanda.css'

const CelebracionBanda = () => {
  const [mostrarConfeti, setMostrarConfeti] = useState(true)
  useEffect(() => {
    const timer = window.setTimeout(() => setMostrarConfeti(false), 4800)
    return () => window.clearTimeout(timer)
  }, [])
  return (
  <div className="banda-celebracion">
    {mostrarConfeti && createPortal(<div className="banda-celebracion__confeti" aria-hidden="true">
      <span className="banda-celebracion__trompeta banda-celebracion__trompeta--izquierda">🎺</span>
      <span className="banda-celebracion__trompeta banda-celebracion__trompeta--derecha">🎺</span>
      <span className="banda-celebracion__trompeta banda-celebracion__tambor">🥁</span>
      <span className="banda-celebracion__trompeta banda-celebracion__platillos">
        <svg viewBox="0 0 120 100" width="1em" height="1em" focusable="false">
          <defs><radialGradient id="banda-platillo-oro"><stop offset="0" stopColor="#fff5b8" /><stop offset="0.5" stopColor="#e8bf62" /><stop offset="1" stopColor="#ad741a" /></radialGradient></defs>
          <g transform="rotate(-22 38 50)"><ellipse cx="35" cy="50" rx="25" ry="39" fill="url(#banda-platillo-oro)" stroke="#ffe5a1" strokeWidth="2" /><ellipse cx="35" cy="50" rx="17" ry="29" fill="none" stroke="#b88023" /><ellipse cx="35" cy="50" rx="7" ry="11" fill="#ffe5a1" /></g>
          <g transform="rotate(22 82 50)"><ellipse cx="85" cy="50" rx="25" ry="39" fill="url(#banda-platillo-oro)" stroke="#ffe5a1" strokeWidth="2" /><ellipse cx="85" cy="50" rx="17" ry="29" fill="none" stroke="#b88023" /><ellipse cx="85" cy="50" rx="7" ry="11" fill="#ffe5a1" /></g>
          <path d="M54 8l5 12M68 8l-5 12M60 83v12" stroke="#fff0be" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </span>
      {Array.from({ length: 96 }, (_, i) => <i key={i} style={{ '--x': ((i * 37) % 100) + '%', '--delay': ((i % 12) * 0.1) + 's', '--deriva': ((i % 2 ? 1 : -1) * (20 + (i * 13) % 90)) + 'px', '--giro': ((i * 47) % 360) + 'deg', '--tono': ['#e8bf62', '#fff0be', '#72c7a0', '#ffffff'][i % 4] }} />)}
    </div>, document.body)}
    <FaTrophy className="banda-celebracion__trofeo" aria-hidden="true" />
    <div><p className="banda-celebracion__lema">¡ESTAMOS DE CELEBRACIÓN!</p><h3>Un logro que nos une</h3><p className="mb-0">¡Felicitaciones a nuestra banda por el reconocimiento a Mejor Grupo Coreográfico!</p></div>
  </div>
  )
}
export default CelebracionBanda
