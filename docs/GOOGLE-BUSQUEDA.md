# Aparición en Google

La web incluye título y descripción iniciales en index.html, datos estructurados de identificación WebSite y School, descripciones y URLs canónicas por página pública, sitemap.xml y robots.txt. Los paneles mantienen sus etiquetas noindex. El sitemap excluye paneles y API.

La ubicación La Mina, Cesar se tomó del pie de página existente. Google puede elegir otra descripción según la búsqueda. No se puede garantizar indexación ni la primera posición para La Mina.

## Después de publicar y comprobar Ready

1. Abre https://search.google.com/search-console/.
2. Añade la propiedad de dominio ieagricolalamina.edu.co y sigue la verificación DNS con el registro TXT que Google muestre. Alternativamente usa Prefijo de URL https://ieagricolalamina.edu.co/ y el método de verificación que tengas disponible.
3. Envía https://ieagricolalamina.edu.co/sitemap.xml desde Sitemaps.
4. Inspecciona https://ieagricolalamina.edu.co/ y pulsa Solicitar indexación.
5. Revisa la página procesada con la prueba de URL publicada, y comprueba títulos, descripción y contenido renderizado.

El sitio usa React: los metadatos específicos de las páginas internas se actualizan al renderizar JavaScript. La portada contiene los metadatos también en su HTML inicial. No se ha implementado renderizado en servidor o prerenderizado.

Fuentes:
https://developers.google.com/search/docs/appearance/snippet
https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
