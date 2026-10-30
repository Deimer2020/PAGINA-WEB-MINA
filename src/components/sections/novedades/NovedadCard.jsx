import { FaTrophy } from 'react-icons/fa'
import { Card, Button, Badge } from 'react-bootstrap'

const NovedadCard = ({ novedad, onLeerMas, featured = false, active = true }) => (
  <Card className={`novedad-card${novedad.celebracion ? ' novedad-card--celebracion' : ''}${featured ? ' novedad-card--featured' : ''}${novedad.periodico ? ' novedad-card--periodico' : ''}`}
    style={{ '--novedad-color': novedad.color }}>
    <div className={`novedad-card__image${novedad.imagenCompleta ? ' novedad-card__image--contain' : ''}`}>
      <img src={novedad.imagen} alt={novedad.imagenAlt} loading="lazy" decoding="async" />
      {!featured && !novedad.imagenCompleta && <Badge bg="success" className="novedad-card__badge">
        {novedad.destacado ? 'Destacado' : 'Novedad'}
      </Badge>}
    </div>
    <Card.Body className="novedad-card__body" aria-hidden={featured && !active ? true : undefined}>
      {novedad.etiqueta && <span className="novedad-card__anniversary">{novedad.celebracion && <FaTrophy className="me-2" aria-hidden="true" />}{novedad.etiqueta}</span>}
      <div className="novedad-card__date">
        <span className="novedad-card__icon" aria-hidden="true">{novedad.icono}</span>
        <span>{novedad.fecha}</span>
      </div>
      <h3 className="novedad-card__title">{novedad.titulo}</h3>
      {!featured && <p className="novedad-card__description">{novedad.descripcion}</p>}
      <Button variant={featured ? 'success' : 'outline-success'} className="novedad-card__button"
        onClick={() => onLeerMas(novedad.id)} tabIndex={featured && !active ? -1 : 0}
        aria-label={`${novedad.periodico ? "Leer periódico" : "Leer más"}: ${novedad.titulo}`}>
        {novedad.periodico ? 'Leer periódico ' : !featured && 'Leer más '}<span aria-hidden="true">→</span>
      </Button>
    </Card.Body>
  </Card>
)
export default NovedadCard
