const NoticiaContent = ({ novedad }) => (
  <article>
    <p className="text-muted">{novedad.fecha}</p>
    {novedad.imagen && (
      <img src={novedad.imagen} alt={novedad.imagenAlt || novedad.titulo}
        className="img-fluid rounded mb-4 d-block mx-auto" />
    )}
    <p style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
      {novedad.contenido || novedad.descripcion}
    </p>
    {novedad.galeria?.length > 0 && (
      <div className="row g-3">
        {novedad.galeria.map((foto, index) => (
          <figure className="col-sm-6 mb-0" key={index}>
            <img src={foto.src} alt={foto.alt || ''} className="img-fluid rounded"
              loading="lazy" />
            {foto.alt && <figcaption className="small text-muted mt-2">{foto.alt}</figcaption>}
          </figure>
        ))}
      </div>
    )}
  </article>
)

export default NoticiaContent
