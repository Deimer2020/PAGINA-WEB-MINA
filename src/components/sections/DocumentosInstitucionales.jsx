// src/components/sections/DocumentosInstitucionales.jsx
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { FaFilePdf, FaDownload, FaBook, FaScroll, FaEye, FaFileAlt } from 'react-icons/fa'

const DocumentosInstitucionales = () => {
  const documentos = [
    {
      id: 'pei',
      titulo: 'Proyecto Educativo Institucional (PEI)',
      descripcion: 'Documento que orienta la identidad, los principios y el quehacer pedagógico de nuestra institución. Contiene el modelo educativo, los enfoques curriculares y los lineamientos para la formación integral de nuestros estudiantes.',
      icono: <FaBook size={30} />,
      archivo: null,
      color: '#2E7D32',
      fecha: '2026',
      tamanio: '2.4 MB'
    },
    {
      id: 'manual',
      titulo: 'Manual de Convivencia',
      descripcion: 'Normas, derechos, deberes y protocolos que rigen la convivencia en nuestra comunidad educativa. Incluye el sistema de estímulos, sanciones y la ruta de atención para situaciones de conflicto.',
      icono: <FaScroll size={30} />,
      archivo: '/documentos/manual-de-convivencia.pdf',
      color: '#FF9800',
      fecha: '2026',
      tamanio: '1.8 MB'
    },
    {
      id: 'plan-estudios',
      titulo: 'Plan de Estudios',
      descripcion: 'Distribución curricular por áreas y grados, con las intensidades horarias, competencias y logros esperados en cada nivel educativo.',
      icono: <FaFileAlt size={30} />,
      archivo: null,
      color: '#2196F3',
      fecha: '2026',
      tamanio: '3.1 MB'
    }
  ]

  return (
    <Container id="documentos" className="py-5" style={{ backgroundColor: '#F8F9FA' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2E7D32',
            fontSize: '2.5rem'
          }}>
            📄 Documentos Institucionales
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2E7D32, #A5D6A7)',
            margin: '15px auto 0',
            borderRadius: '2px'
          }} />
          <p className="text-muted mt-3">
            Accede a los documentos oficiales de nuestra institución
          </p>
        </div>
        
        <Row className="g-4 justify-content-center">
          {documentos.map((doc) => (
            <Col md={6} lg={4} key={doc.id}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{
                transition: 'all 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                {/* Borde superior colorido */}
                <div style={{ height: '4px', background: doc.color }} />
                
                <Card.Body className="p-4 text-center">
                  {/* Icono circular */}
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: `${doc.color}15`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: doc.color,
                    fontSize: '1.8rem'
                  }}>
                    {doc.icono}
                  </div>
                  
                  <h4 style={{ color: doc.color, fontSize: '1.1rem', fontWeight: '700' }}>
                    {doc.titulo}
                  </h4>
                  
                  <p className="text-muted small" style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
                    {doc.descripcion}
                  </p>
                  
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    <Badge bg="light" text="secondary" className="px-3 py-2">
                      📅 {doc.fecha}
                    </Badge>
                    <Badge bg="light" text="secondary" className="px-3 py-2">
                      📄 {doc.archivo ? doc.tamanio : 'Pendiente de publicación'}
                    </Badge>
                  </div>
                  
                  {doc.archivo ? (
                  <div className="d-flex gap-2 justify-content-center">
                    <Button 
                      variant="success" 
                      size="sm"
                      href={doc.archivo}
                      target="_blank" rel="noopener noreferrer"
                      className="rounded-pill px-4"
                      style={{ backgroundColor: doc.color, borderColor: doc.color }}
                    >
                      <FaEye className="me-2" /> Ver PDF
                    </Button>
                    <Button 
                      variant="outline-success" 
                      size="sm"
                      href={doc.archivo}
                      download
                      className="rounded-pill px-4"
                      style={{ color: doc.color, borderColor: doc.color }}
                    >
                      <FaDownload className="me-2" /> Descargar
                    </Button>
                  </div>
                  ) : (
                    <Badge bg="secondary" className="px-3 py-2">Próximamente</Badge>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default DocumentosInstitucionales