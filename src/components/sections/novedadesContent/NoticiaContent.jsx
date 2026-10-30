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
    {novedad.reconocimiento && (
      <section className="my-4" aria-label="Reconocimiento obtenido">
        <h3 className="h4">Mejor Grupo Coreográfico</h3>
        <figure>
          <a href={novedad.reconocimiento.src} target="_blank" rel="noopener noreferrer" aria-label="Abrir diploma en tamaño completo">
            <img src={novedad.reconocimiento.src} alt={novedad.reconocimiento.alt} className="img-fluid rounded" loading="lazy" />
          </a>
          <figcaption className="small text-muted mt-2">Modalidad Tradicional Abierta · Hatonuevo, La Guajira. Pulsa el diploma para ampliarlo.</figcaption>
        </figure>
      </section>
    )}
    {(novedad.videos || (novedad.video?.src ? [novedad.video] : [])).map(video => (
      <section key={video.src} className="my-4" aria-label="Video de la participación">
        <h3 className="h4">{video.titulo || 'Video de la presentación'}</h3>
        <video controls preload="none" playsInline poster={video.poster} className="w-100 rounded" style={{ maxHeight: '65vh', backgroundColor: '#192c50' }} aria-label={video.titulo || 'Video de la presentación'}>
          <source src={video.src} type="video/mp4" />
          Tu navegador no permite reproducir este video. <a href={video.src}>Descargar video</a>
        </video>
      </section>
    ))}
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
