// src/components/nosotros/SymbolsSection.jsx
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaMusic, FaFlag, FaShieldAlt } from 'react-icons/fa'
import escudo from '../../assets/images/ESCUDOMINA.png'
import bandera from '../../assets/images/bandera.jpg'

const SymbolsSection = ({ setShowHimno }) => {
  return (
    <Container id="simbolos" className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem'
      }}>
        Nuestros Símbolos
      </h2>
      <Row>
        {/* Escudo */}
        <Col md={4} className="text-center mb-4">
          <div style={{
            width: '180px',
            height: '180px',
            margin: '0 auto 20px',
            background: '#E8F5E9',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img 
              src={escudo} 
              alt="Escudo Institucional" 
              style={{ 
                width: '140px', 
                height: '140px',
                objectFit: 'contain'
              }}
            />
          </div>
          <h3 className="mt-3" style={{ color: '#2E7D32', fontSize: '1.3rem', fontWeight: 'bold' }}>Escudo</h3>
          <p style={{ color: '#666', maxWidth: '250px', margin: '0 auto' }}>
            Representa la tradición, la sabiduría y el compromiso con el campo colombiano.
          </p>
          <small className="text-muted">*Símbolo oficial desde 1986</small>
        </Col>
        
        {/* Bandera */}
       {/* Bandera */}
<Col md={4} className="text-center mb-4">
  <div style={{
    width: '180px',
    height: '180px',
    margin: '0 auto 20px',
    background: 'linear-gradient(135deg, #2E7D32 0%, #A5D6A7 100%)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}>
    <img 
      src={bandera} 
      alt="Bandera Institucional" 
      style={{ 
        width: '100%', 
        height: '100%',
        objectFit: 'cover'
      }}
    />
  </div>
  <h3 className="mt-3" style={{ color: '#2E7D32', fontSize: '1.3rem', fontWeight: 'bold' }}>Bandera</h3>
  <p style={{ color: '#666', maxWidth: '250px', margin: '0 auto' }}>
    Verde, blanco y azul: campos colombianos, paz y ríos Badillo y Candela.
  </p>
  <small className="text-muted">*Colores institucionales</small>
</Col>
        
        {/* Himno */}
        <Col md={4} className="text-center mb-4">
          <div style={{
            width: '180px',
            height: '180px',
            margin: '0 auto 20px',
            background: '#E8F5E9',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}
          onClick={() => setShowHimno(true)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <FaMusic size={80} color="#2E7D32" />
          </div>
          <h3 className="mt-3" style={{ color: '#2E7D32', fontSize: '1.3rem', fontWeight: 'bold' }}>Himno</h3>
          <p style={{ color: '#666', maxWidth: '250px', margin: '0 auto' }}>
            Himno institucional que nos identifica y enaltece.
          </p>
          <Button variant="outline-success" onClick={() => setShowHimno(true)} className="mt-2">
            🎵 Escuchar himno
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default SymbolsSection