import { FaTrophy } from 'react-icons/fa'
import './celebracionBanda.css'

const CelebracionBanda = () => (
  <div className="banda-celebracion">
    <div className="banda-celebracion__confeti" aria-hidden="true">
      {Array.from({ length: 32 }, (_, i) => <i key={i} style={{ '--x': ((i * 37) % 100) + '%', '--delay': ((i % 8) * 0.12) + 's', '--giro': ((i * 47) % 360) + 'deg', '--tono': ['#e8bf62', '#fff0be', '#72c7a0', '#ffffff'][i % 4] }} />)}
    </div>
    <FaTrophy className="banda-celebracion__trofeo" aria-hidden="true" />
    <div><p className="banda-celebracion__lema">¡ESTAMOS DE CELEBRACIÓN!</p><h3>Un logro que nos une</h3><p className="mb-0">¡Felicitaciones a nuestra banda por el reconocimiento a Mejor Grupo Coreográfico!</p></div>
  </div>
)
export default CelebracionBanda
