// src/components/nosotros/HistorySection.jsx
import { Container, Row, Col } from 'react-bootstrap'
import { FaUsers, FaGraduationCap, FaLandmark, FaAward, FaSeedling } from 'react-icons/fa'
import { GiPlantRoots } from 'react-icons/gi'

const HistorySection = () => {
  const historiaHitos = [
    { año: '1985', titulo: 'Comité Pro-Desarrollo', descripcion: 'Un grupo de líderes de La Mina se organiza para crear un colegio de bachillerato.', icono: <FaUsers /> },
    { año: '1986', titulo: 'Inicio de Clases', descripcion: '30 estudiantes inician grado sexto con el sueño de transformar el campo.', icono: <FaGraduationCap /> },
    { año: '1991', titulo: 'Municipalización', descripcion: 'El colegio adquiere carácter oficial mediante Acuerdo 058.', icono: <FaLandmark /> },
    { año: '1992', titulo: 'Primera Promoción', descripcion: '14 bachilleres agrícolas se gradúan, forjando el legado institucional.', icono: <FaAward /> },
    { año: '1993', titulo: 'Nuevo Rector', descripcion: 'El Lic. Andrés Alirio Ortiz Murillo asume la rectoría.', icono: <FaSeedling /> },
    { año: '2010', titulo: 'Unidad Básica', descripcion: 'Se consolida la integración con las escuelas rurales de la región.', icono: <GiPlantRoots /> },
  ]

  return (
    <Container id="historia" className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem',
        position: 'relative'
      }}>
        Nuestra Historia
        <div style={{
          width: '80px',
          height: '4px',
          background: '#2E7D32',
          margin: '15px auto 0',
          borderRadius: '2px'
        }} />
      </h2>
      <Row>
        {historiaHitos.map((hito, index) => (
          <Col md={4} key={index} className="mb-4">
            <div className="timeline-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '30px',
              height: '100%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#2E7D32',
                marginBottom: '20px'
              }}>
                {hito.icono}
              </div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#2E7D32',
                fontFamily: "'Playfair Display', serif"
              }}>
                {hito.año}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginTop: '10px',
                marginBottom: '10px'
              }}>
                {hito.titulo}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                {hito.descripcion}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HistorySection