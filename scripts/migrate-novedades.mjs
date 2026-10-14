import fs from 'node:fs'
import path from 'node:path'

const read = file => fs.readFileSync(file, 'utf8')
const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text) }
const original = read('src/components/sections/novedades/novedadesData.jsx')
const cards = [
  ['aniversario-40', 'aniversario', '/images/aniversario-40/portada.jpeg', '2026-09-21'],
  ['microfutbol', 'microfutbol', '/uploads/novedades/microfutbol.JPG', '2026-08-28'],
  ['elecciones', 'elecciones', '/uploads/novedades/elecciones-card.jpeg', '2026-03-18'],
  ['concurso', 'concurso', '/uploads/novedades/concurso-card.jpeg', '2026-04-15'],
  ['feria', 'feria', '/uploads/novedades/feria-card.jpeg', '2026-04-21'],
]
for (const [index, [id, legacyTipo, imagen, fechaPublicacion]] of cards.entries()) {
  const start = original.indexOf("id: '" + id + "'")
  if (start < 0) throw new Error('Noticia no encontrada: ' + id)
  const section = original.slice(start)
  const field = name => {
    const match = section.match(new RegExp(name + ':\\s*([\x27\x22])([^\\n]*?)\\1'))
    if (!match) throw new Error('Campo no encontrado: ' + name)
    return match[2]
  }
  const data = { titulo: field('titulo'), fecha: field('fecha'), descripcion: field('descripcion'),
    imagen, imagenAlt: field('imagenAlt'), fechaPublicacion, publicada: true, destacado: true,
    orden: index + 1, color: field('color'), legacyTipo, contenido: '', galeria: [],
    imagenCompleta: id === 'aniversario-40', etiqueta: id === 'aniversario-40' ? '40.º aniversario' : '' }
  const destination = 'src/content/novedades/' + id + '.json'
  if (fs.existsSync(destination)) throw new Error('No se sobrescribe: ' + destination)
  write(destination, JSON.stringify(data, null, 2) + '\n')
}
const copies = [
  ['src/assets/images/juegos/801.JPG', 'microfutbol.JPG'],
  ...['elecciones-card.jpeg','concurso-card.jpeg','feria-card.jpeg'].map(name => ['src/assets/images/novedades/' + name, name]),
]
fs.mkdirSync('public/uploads/novedades', { recursive: true })
for (const [source, name] of copies) fs.copyFileSync(source, 'public/uploads/novedades/' + name)

let file = 'src/components/sections/UltimasNovedades.jsx'
let text = read(file).replace("from './novedades/novedadesData'", "from './novedades/cmsNovedades'")
text = text.replace("import { Container, Button }", "import { Container, Button, Modal, Row, Col }")
text = text.replace("import NovedadesModal from './novedades/NovedadesModal'", "import NovedadesModal from './novedades/NovedadesModal'\nimport NovedadCard from './novedades/NovedadCard'")
text = text.replace("const [modalAbierto, setModalAbierto] = useState(null)", "const [modalAbierto, setModalAbierto] = useState(null)\n  const [verTodas, setVerTodas] = useState(false)")
text = text.replace("n => n.modalTipo === modalAbierto", "n => n.id === modalAbierto")
text = text.replace('novedades={novedadesData}', 'novedades={novedadesData}')
text = text.replace('<NovedadesCarousel ', "{novedadesData.length === 0 ? <p className=\"text-center text-muted\">No hay novedades publicadas.</p> : <NovedadesCarousel ")
text = text.replace('onLeerMas={abrirModal} \n        />', 'onLeerMas={abrirModal} \n        />}')
text = text.replace('className="px-5">', 'className="px-5" onClick={() => setVerTodas(true)} disabled={novedadesData.length === 0}>')
text = text.replace('      <NovedadesModal ', `      <Modal show={verTodas} onHide={() => setVerTodas(false)} size="xl" centered>
        <Modal.Header closeButton><Modal.Title>Todas las noticias</Modal.Title></Modal.Header>
        <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
          <Row className="g-4">
            {novedadesData.map(novedad => (
              <Col md={6} lg={4} key={novedad.id}>
                <NovedadCard novedad={novedad} onLeerMas={id => { setVerTodas(false); abrirModal(id) }} />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>

      <NovedadesModal `)
write(file, text)

file = 'src/components/sections/novedades/NovedadCard.jsx'
write(file, read(file).replace('onLeerMas(novedad.modalTipo)', 'onLeerMas(novedad.id)'))

file = 'src/components/sections/novedades/NovedadesModal.jsx'
text = read(file).replace("import AniversarioContent from '../novedadesContent/AniversarioContent'", "import AniversarioContent from '../novedadesContent/AniversarioContent'\nimport NoticiaContent from '../novedadesContent/NoticiaContent'")
text = text.replace('const renderContent = () => {', "const renderContent = () => {\n    if (novedad.contenido?.trim() || novedad.galeria?.length || !novedad.legacyTipo) {\n      return <NoticiaContent novedad={novedad} />\n    }")
text = text.replace('<p>Contenido no disponible</p>', '<NoticiaContent novedad={novedad} />')
text = text.replace('novedad.modalContent.titulo || "Novedad"', 'novedad.titulo || "Novedad"')
write(file, text)
console.log('Cinco novedades migradas; tarjetas y modales conectados al CMS.')
