
import { Container, Row, Col } from 'react-bootstrap'
import { FaUserTie, FaPhone, FaEnvelope } from 'react-icons/fa'

const DirectorsSection = () => {
  const contactosDirectivos = [
    { nombre: 'Lic. Andrés Alirio Ortiz Murillo', cargo: 'Rector', telefono: '(605) 123 4567', email: 'rectoria@ieagricolalamina.edu.co' },
    { nombre: 'Esp. Aquileo Aguilar Ortiz', cargo: 'Coordinador General', telefono: '(605) 123 4568', email: 'coordinacion@ieagricolalamina.edu.co' },
    { nombre: 'Lic. Enys Manjarrez Missath', cargo: 'Coordinadora Académica', telefono: '(605) 123 4569', email: 'academica@ieagricolalamina.edu.co' },
    { nombre: 'Lic. Sandra Ramírez Luquez', cargo: 'Orientadora Escolar', telefono: '(605) 123 4570', email: 'orientacion@ieagricolalamina.edu.co' },
  ]

  return (
    <Container id="directivos" className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem'
      }}>
        Directivos
      </h2>
      <Row>
        {contactosDirectivos.map((directivo, index) => (
          <Col md={3} sm={6} key={index} className="mb-4">
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '25px',
              textAlign: 'center',
              height: '100%',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#2E7D32',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px'
              }}>
                <FaUserTie size={30} color="white" />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '5px' }}>{directivo.nombre}</h4>
              <p style={{ color: '#2E7D32', fontWeight: '500', fontSize: '0.85rem' }}>{directivo.cargo}</p>
              <p style={{ fontSize: '0.8rem', marginBottom: '5px' }}>
                <FaPhone size={12} className="me-1" /> {directivo.telefono}
              </p>
              <p style={{ fontSize: '0.8rem' }}>
                <FaEnvelope size={12} className="me-1" /> {directivo.email}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default DirectorsSection