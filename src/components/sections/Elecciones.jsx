import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FaVoteYea, FaUserTie, FaTrophy } from 'react-icons/fa'
// IMPORTAR FOTOS REALES
import fotoPersonero from '../../assets/images/ganadores/8.png'
import fotoContralor from '../../assets/images/ganadores/9.png'
import fotoAfadecPresi from '../../assets/images/ganadores/sivlen.jpg'
import fotoVicepresidente from '../../assets/images/ganadores/juandaniel.jpg'
import secretario from '../../assets/images/ganadores/katia.jpg'
// Importar fotos AFADEC (cuando las tengas)
/* import fotoPresidente from '../assets/images/ganadores/presidente-afadec.jpg'
import fotoVicepresidente from '../assets/images/ganadores/vicepresidente-afadec.jpg'
import fotoSecretario from '../assets/images/ganadores/secretario-afadec.jpg' */
// Placeholder si no hay foto
/* import placeholderFoto from '../assets/images/ganadores/placeholder.jpg' */

const Elecciones = () => {
  // DATOS REALES DE LOS GANADORES - ACTUALIZADOS
  const ganadores = {
    personero: {
      nombre: "Ycleinis Arias",
      grado: "11°",
      lema: "¡Tu voz, mi compromiso!",
      foto: fotoPersonero,
      votos: 153,
      propuestas: "Mejorar la comunicación estudiantil, más actividades culturales"
    },
    contralor: {
      nombre: "Nacler Arias Arias",
      grado: "11°",
      lema: "Transparencia y equidad",
      foto: fotoContralor,
      votos: 164,
      propuestas: "Control de recursos, rendición de cuentas mensual"
    },
    afadec: {
      presidente: {
        nombre: "Sliven Maria Vanegas",
        grado: "",
        lema: "",
        foto: fotoAfadecPresi
      },
      vicepresidente: {
        nombre: "Juan Daniel Balcazar",
        grado: "",
        foto: fotoVicepresidente
      },
      secretario: {
        nombre: "Katia Maestre",
        grado: "",
        foto:secretario
      }
    }
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem',
        position: 'relative'
      }}>
        🗳️ Elecciones Escolares 2026
        <div style={{
          width: '80px',
          height: '4px',
          background: '#2E7D32',
          margin: '15px auto 0',
          borderRadius: '2px'
        }} />
      </h2>
      
      <Row className="g-4">
        {/* Personero */}
        <Col md={6}>
          <Card className="h-100 border-0 shadow-lg rounded-4 overflow-hidden" style={{
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}>
            <div style={{ 
              position: 'relative', 
              height: '280px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={ganadores.personero.foto} 
                alt={ganadores.personero.nombre}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',  // ← CAMBIADO: muestra la imagen completa
                  objectPosition: 'center',
                  backgroundColor: '#E8F5E9'
                }}
              />
              <Badge 
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: '#FFD700',
                  color: '#2E7D32',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  zIndex: 2
                }}
              >
                <FaTrophy className="me-1" /> Ganador
              </Badge>
            </div>
            <Card.Body className="text-center">
              <div style={{
                width: '60px',
                height: '60px',
                background: '#2E7D32',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '-50px auto 15px auto',
                position: 'relative',
                zIndex: 1,
                border: '4px solid white',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
              }}>
                <FaUserTie size={30} color="white" />
              </div>
              <h3 className="mb-1" style={{ color: '#2E7D32', fontWeight: 'bold' }}>
                {ganadores.personero.nombre}
              </h3>
              <p className="text-muted mb-2">Personero Estudiantil - {ganadores.personero.grado}</p>
              <Badge bg="success" className="mb-3">🏆 {ganadores.personero.votos} votos</Badge>
              <p className="mb-2"><strong>Lema:</strong> "{ganadores.personero.lema}"</p>
              <p className="text-muted small">{ganadores.personero.propuestas}</p>
              <hr />
              <div className="d-flex justify-content-center gap-2 mt-2">
                <FaVoteYea className="text-success" />
                <span className="small">Elecciones realizadas: marzo de 2026</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Contralor */}
        <Col md={6}>
          <Card className="h-100 border-0 shadow-lg rounded-4 overflow-hidden" style={{
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}>
            <div style={{ 
              position: 'relative', 
              height: '280px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={ganadores.contralor.foto} 
                alt={ganadores.contralor.nombre}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',  // ← CAMBIADO: muestra la imagen completa
                  objectPosition: 'center',
                  backgroundColor: '#E8F5E9'
                }}
              />
              <Badge 
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: '#FFD700',
                  color: '#2E7D32',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  zIndex: 2
                }}
              >
                <FaTrophy className="me-1" /> Ganador
              </Badge>
            </div>
            <Card.Body className="text-center">
              <div style={{
                width: '60px',
                height: '60px',
                background: '#2E7D32',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '-50px auto 15px auto',
                position: 'relative',
                zIndex: 1,
                border: '4px solid white',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
              }}>
                <FaUserTie size={30} color="white" />
              </div>
              <h3 className="mb-1" style={{ color: '#2E7D32', fontWeight: 'bold' }}>
                {ganadores.contralor.nombre}
              </h3>
              <p className="text-muted mb-2">Contralor Estudiantil - {ganadores.contralor.grado}</p>
              <Badge bg="success" className="mb-3">🏆 {ganadores.contralor.votos} votos</Badge>
              <p className="mb-2"><strong>Lema:</strong> "{ganadores.contralor.lema}"</p>
              <p className="text-muted small">{ganadores.contralor.propuestas}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección AFADEC - Pendiente de datos reales */}
      <h2 className="text-center mt-5 mb-4" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2rem'
      }}>
        🌱 Mesa Directiva AFADEC 2026
      </h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="text-center border-0 shadow-sm rounded-4 h-100">
            <Card.Body>
              <div style={{
                width: '150px',
                height: '150px',
                margin: '0 auto 15px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#E8F5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #2E7D32'
              }}>
                <img 
                  src={ganadores.afadec.presidente.foto}
                  alt={ganadores.afadec.presidente.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 className="mb-1" style={{ color: '#2E7D32' }}>{ganadores.afadec.presidente.nombre}</h4>
              <p className="text-success fw-bold">Presidente AFADEC</p>
              {ganadores.afadec.presidente.grado && (
                <p className="text-muted">Grado {ganadores.afadec.presidente.grado}°</p>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center border-0 shadow-sm rounded-4 h-100">
            <Card.Body>
              <div style={{
                width: '150px',
                height: '150px',
                margin: '0 auto 15px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#E8F5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #2E7D32'
              }}>
                <img 
                  src={ganadores.afadec.vicepresidente.foto}
                  alt={ganadores.afadec.vicepresidente.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 className="mb-1" style={{ color: '#2E7D32' }}>{ganadores.afadec.vicepresidente.nombre}</h4>
              <p className="text-success fw-bold">Vicepresidente AFADEC</p>
              {ganadores.afadec.vicepresidente.grado && (
                <p className="text-muted">Grado {ganadores.afadec.vicepresidente.grado}°</p>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center border-0 shadow-sm rounded-4 h-100">
            <Card.Body>
              <div style={{
                width: '150px',
                height: '150px',
                margin: '0 auto 15px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#E8F5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #2E7D32'
              }}>
                <img 
                  src={ganadores.afadec.secretario.foto}
                  alt={ganadores.afadec.secretario.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 className="mb-1" style={{ color: '#2E7D32' }}>{ganadores.afadec.secretario.nombre}</h4>
              <p className="text-success fw-bold">Secretario AFADEC</p>
              {ganadores.afadec.secretario.grado && (
                <p className="text-muted">Grado {ganadores.afadec.secretario.grado}°</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Mensaje para AFADEC si no hay datos */}
      {!ganadores.afadec.presidente.grado && (
        <p className="text-center text-muted mt-3">
          Próximamente: Resultados de elecciones AFADEC
        </p>
      )}
    </Container>
  )
}

export default Elecciones