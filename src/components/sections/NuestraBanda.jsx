import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaMusic, FaDrum, FaMusic as FaTrumpet, FaCalendarAlt, FaYoutube } from 'react-icons/fa'

const NuestraBanda = () => {
  const instrumentos = [
    { icono: <FaTrumpet />, nombre: 'Trompetas', color: '#FF9800' },
    { icono: <FaDrum />, nombre: 'Tambores', color: '#2196F3' },
    { icono: <FaMusic />, nombre: 'Liras', color: '#9C27B0' },
  ]

  return (
    <Container fluid style={{ backgroundColor: '#E8F5E9', padding: '80px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
            <div style={{
              position: 'relative',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800" 
                alt="Banda Marcial"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: '30px',
                color: 'white'
              }}>
                <h3 className="mb-0">Banda Marcial</h3>
                <p>Orgullo institucional</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-lg-1">
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              color: '#2E7D32',
              fontSize: '2.5rem',
              marginBottom: '20px'
            }}>
              Nuestra Banda Marcial
            </h2>
            <p className="lead" style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7' }}>
              La banda marcial del Instituto Agrícola La Mina es un símbolo de disciplina, 
              talento y orgullo institucional. Con más de 15 años de trayectoria, ha representado 
              a nuestra institución en múltiples eventos cívicos y culturales.
            </p>
            
            <div className="d-flex gap-3 mt-4 mb-4">
              {instrumentos.map((inst, idx) => (
                <div key={idx} className="text-center">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px',
                    boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
                    fontSize: '1.8rem',
                    color: inst.color
                  }}>
                    {inst.icono}
                  </div>
                  <small>{inst.nombre}</small>
                </div>
              ))}
            </div>
            
            <div className="d-flex gap-3">
              <Button variant="success" size="lg">
                <FaYoutube className="me-2" /> Ver presentaciones
              </Button>
              <Button variant="outline-success" size="lg">
                <FaCalendarAlt className="me-2" /> Próximos eventos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default NuestraBanda