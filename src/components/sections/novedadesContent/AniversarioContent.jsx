import { useEffect, useRef, useState } from 'react'
import './aniversario.css'

const PAGE_SIZE = 6

const AniversarioContent = ({ data }) => {
  const [page, setPage] = useState(0)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const viewerRef = useRef(null)
  const galleryRef = useRef(null)
  const lastSelection = useRef(null)
  const photos = data.galeria
  const pageCount = Math.ceil(photos.length / PAGE_SIZE)
  const firstPhoto = page * PAGE_SIZE

  useEffect(() => {
    if (selectedPhoto !== null) {
      viewerRef.current?.focus()
    } else if (lastSelection.current !== null) {
      galleryRef.current?.querySelector(`[data-photo-index="${lastSelection.current}"]`)?.focus()
    }
  }, [selectedPhoto])

  const openPhoto = (index) => {
    lastSelection.current = index
    setSelectedPhoto(index)
  }

  const movePhoto = (step) => {
    setSelectedPhoto((current) => (current + step + photos.length) % photos.length)
  }

  return (
    <article className="aniversario">
      <div className="aniversario__intro">
        <img className="aniversario__cover" src={data.portada} alt="Conmemoración de los 40 años de la Institución Educativa Agrícola La Mina" />
        <div>
          <p className="aniversario__eyebrow">Nuestra historia, nuestro orgullo</p>
          <h3>40 años formando generaciones</h3>
          <p className="aniversario__date">{data.fechaEvento}</p>
          <p>{data.introduccion}</p>
        </div>
      </div>

      <section className="aniversario__guests" aria-labelledby="aniversario-delegaciones">
        <h4 id="aniversario-delegaciones">Un encuentro entre instituciones</h4>
        <p>{data.delegaciones}</p>
        <div className="aniversario__tags">
          <span>23 y 24 de septiembre</span><span>Media Luna</span><span>Manaure</span>
        </div>
      </section>

      <section aria-labelledby="aniversario-galeria">
        <h4 id="aniversario-galeria">Recuerdos de la celebración</h4>
        {selectedPhoto !== null ? (
          <div
            ref={viewerRef}
            tabIndex={-1}
            className="aniversario__viewer"
            role="group"
            aria-label="Fotografía ampliada"
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') { event.preventDefault(); movePhoto(-1) }
              if (event.key === 'ArrowRight') { event.preventDefault(); movePhoto(1) }
              if (event.key === 'Escape') {
                event.stopPropagation()
                setSelectedPhoto(null)
              }
            }}
          >
            <button type="button" className="aniversario__button" onClick={() => setSelectedPhoto(null)}>← Volver a la galería</button>
            <img src={photos[selectedPhoto].src} alt={photos[selectedPhoto].alt} />
            <div className="aniversario__navigation">
              <button type="button" className="aniversario__button" aria-label="Fotografía anterior" onClick={() => movePhoto(-1)}>← Anterior</button>
              <span role="status">Foto {selectedPhoto + 1} de {photos.length}</span>
              <button type="button" className="aniversario__button" aria-label="Fotografía siguiente" onClick={() => movePhoto(1)}>Siguiente →</button>
            </div>
          </div>
        ) : (
          <>
            <p>Selecciona una fotografía para verla completa.</p>
            <div className="aniversario__gallery" ref={galleryRef}>
              {photos.slice(firstPhoto, firstPhoto + PAGE_SIZE).map((photo, index) => (
                <button
                  type="button"
                  key={photo.src}
                  data-photo-index={firstPhoto + index}
                  className="aniversario__thumbnail"
                  onClick={() => openPhoto(firstPhoto + index)}
                  aria-label={`Ampliar fotografía ${firstPhoto + index + 1}`}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                  <span>Ver foto {firstPhoto + index + 1} ↗</span>
                </button>
              ))}
            </div>
            <nav className="aniversario__navigation" aria-label="Páginas de la galería">
              <button type="button" className="aniversario__button" disabled={page === 0} onClick={() => setPage(page - 1)}>← Anterior</button>
              <span role="status">Página {page + 1} de {pageCount} · {photos.length} fotos</span>
              <button type="button" className="aniversario__button" disabled={page === pageCount - 1} onClick={() => setPage(page + 1)}>Siguiente →</button>
            </nav>
          </>
        )}
      </section>
    </article>
  )
}

export default AniversarioContent