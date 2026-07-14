// src/components/sections/NovedadesCMS.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const NovedadesCMS = () => {
  const [novedades, setNovedades] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // Función para cargar novedades desde el CMS
    const cargarNovedades = async () => {
      try {
        // En producción, los archivos .md estarán disponibles como módulos
        const modules = import.meta.glob('/src/content/novedades/*.md')
        const novedadesData = await Promise.all(
          Object.keys(modules).map(async (path) => {
            const mod = await modules[path]()
            const { attributes, body } = mod
            return {
              ...attributes,
              id: path,
              body: body
            }
          })
        )
        // Ordenar por fecha (más reciente primero)
        novedadesData.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        setNovedades(novedadesData)
        setCargando(false)
      } catch (error) {
        console.error('Error cargando novedades:', error)
        setCargando(false)
      }
    }

    cargarNovedades()
  }, [])

  if (cargando) {
    return (
      <Container className="py-5 text-center">
        <p>Cargando novedades...</p>
      </Container>
    )
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Playfair Display', serif",
        color: '#2E7D32',
        fontSize: '2.5rem'
      }}>
        Últimas Novedades
        <div style={{
          width: '80px',
          height: '4px',
          background: '#2E7D32',
          margin: '15px auto 0',
          borderRadius: '2px'
        }} />
      </h2>

      <Row className="g-4">
        {novedades.length === 0 ? (
          <Col>
            <p className="text-center text-muted">No hay novedades disponibles.</p>
          </Col>
        ) : (
          novedades.map((novedad) => (
            <Col md={4} key={novedad.id}>
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <Card.Body>
                  <h5 className="mb-2">{novedad.titulo}</h5>
                  <small className="text-muted">{novedad.fecha}</small>
                  <p className="mt-3">{novedad.descripcion}</p>
                  <Button variant="outline-success" size="sm">
                    Leer más
                  </Button>
                  //deimer jose
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  )
}

export default NovedadesCMS