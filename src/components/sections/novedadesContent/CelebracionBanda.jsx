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
      {Array.from({ length: 96 }, (_, i) => <i key={i} style={{ '--x': ((i * 37) % 100) + '%', '--delay': ((i % 12) * 0.1) + 's', '--deriva': ((i % 2 ? 1 : -1) * (20 + (i * 13) % 90)) + 'px', '--giro': ((i * 47) % 360) + 'deg', '--tono': ['#e8bf62', '#fff0be', '#72c7a0', '#ffffff'][i % 4] }} />)}
    </div>, document.body)}
    <FaTrophy className="banda-celebracion__trofeo" aria-hidden="true" />
    <div><p className="banda-celebracion__lema">¡ESTAMOS DE CELEBRACIÓN!</p><h3>Un logro que nos une</h3><p className="mb-0">¡Felicitaciones a nuestra banda por el reconocimiento a Mejor Grupo Coreográfico!</p></div>
  </div>
  )
}
export default CelebracionBanda
