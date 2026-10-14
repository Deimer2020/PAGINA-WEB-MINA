import { novedadesData as originales } from './novedadesData'

const archivos = import.meta.glob('/src/content/novedades/*.json', {
  eager: true,
  import: 'default',
})

export const novedadesData = Object.entries(archivos)
  .filter(([, noticia]) => noticia.publicada !== false)
  .map(([ruta, noticia]) => {
    const original = originales.find(item => item.modalTipo === noticia.legacyTipo)
    return {
      ...original,
      ...noticia,
      id: ruta,
      modalTipo: original?.modalTipo || 'noticia',
      modalContent: original?.modalContent || { titulo: noticia.titulo },
      icono: original?.icono,
    }
  })
  .sort((a, b) => (a.orden ?? 100) - (b.orden ?? 100)
    || String(b.fechaPublicacion || '').localeCompare(String(a.fechaPublicacion || '')))
