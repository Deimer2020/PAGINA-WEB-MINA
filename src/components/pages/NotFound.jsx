// src/pages/NotFound.jsx
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container className="text-center py-5" style={{ minHeight: '60vh', marginTop: '80px' }}>
      <h1 style={{ fontSize: '6rem', color: '#2E7D32' }}>404</h1>
      <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Página no encontrada
      </h2>
      <p className="text-muted mb-4">
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>
      <Link to="/">
        <Button variant="success" size="lg" className="rounded-pill px-5">
          Volver al inicio
        </Button>
      </Link>
    </Container>
  )
}

export default NotFound