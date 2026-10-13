import estudiantesImg from '../../assets/images/MINAFOTO3.png'
import './Statistics.css'

const stats = [
  { id: 'students', numero: '300+', descripcion: 'Estudiantes' },
  { id: 'teachers', numero: '30+', descripcion: 'Docentes' },
  { id: 'alumni', numero: '61+', descripcion: 'Egresados' },
  { id: 'history', numero: '40', descripcion: 'Años de trayectoria' },
]

const Estadisticas = () => (
  <section className="institution-stats" aria-labelledby="institution-stats-title">
    <div className="institution-stats__container">
      <header className="institution-stats__header">
        <h2 id="institution-stats-title">
          Nuestra institución <span>en números</span>
        </h2>
        <p>Educación, comunidad y trayectoria</p>
      </header>

      <div className="institution-stats__layout">
        <div className="institution-stats__portrait">
          <img
            src={estudiantesImg}
            alt="Tres estudiantes de la Institución Educativa Agrícola La Mina"
            width="1195"
            height="896"
            loading="lazy"
            decoding="async"
          />
        </div>
        {stats.map((stat) => (
          <div key={stat.id} className={`institution-stats__card institution-stats__card--${stat.id}`}>
            <p className="institution-stats__number">{stat.numero}</p>
            <span className="institution-stats__divider" aria-hidden="true" />
            <p className="institution-stats__label">{stat.descripcion}</p>
          </div>
        ))}
      </div>

      <footer className="institution-stats__footer">
        <p>Estudiantes, docentes y egresados: datos al <time dateTime="2026-04-13">13 de abril de 2026</time>.</p>
        <p>40.º aniversario · Septiembre de 2026</p>
      </footer>
    </div>
  </section>
)

export default Estadisticas