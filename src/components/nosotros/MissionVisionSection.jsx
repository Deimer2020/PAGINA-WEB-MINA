// src/components/nosotros/MissionVisionSection.jsx
import { Container, Row, Col, Button } from 'react-bootstrap'
import { GiFarmer, GiWheat } from 'react-icons/gi'
import { FaBookOpen, FaFilePdf, FaDownload } from 'react-icons/fa'

const MissionVisionSection = () => {
  return (
    <Container id="mision-vision" fluid style={{ backgroundColor: '#F9F9F9', padding: '80px 0' }}>
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <div style={{
              background: 'white',
              borderRadius: '30px',
              padding: '40px',
              height: '100%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px'
              }}>
                <GiFarmer size={35} color="white" />
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                color: '#2E7D32',
                marginBottom: '20px',
                fontSize: '1.8rem'
              }}>
                Misión
              </h2>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.7',
                color: '#555'
              }}>
                Nuestra Institución Educativa tiene como misión «Formar y Educar». Está orientada
a garantizar la permanencia cultural, formando personas con principios y valores
propios de la cultura establecidos en la ley de Origen; e impartiendo una enseñanza
intercultural, integral y permanente donde prevalezcan los principios culturales,
territoriales y del trabajo colectivo para el fortalecimiento de la identidad y la
autodeterminación, articulados a la realidad del pueblo Indígena kankuamo.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div style={{
              background: 'white',
              borderRadius: '30px',
              padding: '40px',
              height: '100%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px'
              }}>
                <GiWheat size={35} color="white" />
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                color: '#2E7D32',
                marginBottom: '20px',
                fontSize: '1.8rem'
              }}>
                Visión
              </h2>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.7',
                color: '#555'
              }}>
                Ser líderes en la formación de valores y el aprendizaje significativo a nivel
Institucional y Departamental, teniendo como base los cuatro pilares fundamentales
de la Educación, ser, aprender a hacer, comprender y transformar, para contribuir
con el desarrollo de la región y el país; mediante la reflexión, participación y
concentración de la comunidad educativa, para alcanzar la «excelencia educativa»,
garantizando su gran desempeño en los procesos fundamentales que se
desarrollan para la preparación del hombre del futuro.
              </p>
            </div>
          </Col>
        </Row>

        {/* Manual de Convivencia */}
        <div id="manual-convivencia" className="mt-5" style={{
          background: 'white',
          borderRadius: '30px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{
            width: '70px',
            height: '70px',
            background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 25px'
          }}>
            <FaBookOpen size={35} color="white" />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2E7D32',
            marginBottom: '20px',
            fontSize: '1.8rem'
          }}>
            Manual de Convivencia
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto 25px'
          }}>
            Conoce las normas, derechos y deberes que rigen nuestra comunidad educativa. 
            Un documento fundamental para la sana convivencia y el desarrollo integral 
            de nuestros estudiantes.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button 
              variant="success" 
              size="lg"
              href="/documentos/manual-de-convivencia.pdf"
              target="_blank"
              style={{ borderRadius: '50px', padding: '12px 30px' }}
            >
              <FaFilePdf className="me-2" /> Ver Manual (PDF)
            </Button>
            <Button 
              variant="outline-success" 
              size="lg"
              href="/documentos/manual-de-convivencia.pdf"
              download
              style={{ borderRadius: '50px', padding: '12px 30px' }}
            >
              <FaDownload className="me-2" /> Descargar PDF
            </Button>
          </div>
          <div className="mt-4">
            <small className="text-muted">
              📖 Versión actualizada - Año 2026
            </small>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default MissionVisionSection