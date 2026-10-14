# Panel para profesores con Google

Panel: https://ieagricolalamina.edu.co/equipo/

El profesor inicia sesión con su correo Google autorizado. El servidor escribe exclusivamente noticias JSON e imágenes en el repositorio; no entrega credenciales de GitHub al navegador. La cuenta del profesor no necesita GitHub ni Vercel. Todos los correos autorizados pueden editar todas las novedades y publicar. No hay aprobación previa por un administrador en esta versión.

La lista de correos funciona como autorización, no envía invitaciones por correo. El administrador comparte el enlace con los profesores. Retirar un correo impide las siguientes solicitudes incluso si su sesión sigue vigente. Las sesiones duran ocho horas. Se aceptan cuentas Gmail y Google Workspace.

## Configuración en Google (una vez)

1. Abre https://console.cloud.google.com/ y selecciona o crea un proyecto de la institución.
2. Configura Google Auth Platform: Branding, Audience y Data Access. Solo se solicitan openid y email.
3. Si Audience está en Testing, añade los correos autorizados como Test users. Para uso estable, configura la publicación de la aplicación; si Google solicita verificaciones, sigue sus instrucciones.
4. Crea un cliente OAuth de tipo Web application.
5. URI de redirección autorizada exacta:
   https://ieagricolalamina.edu.co/api/equipo?action=callback
6. Guarda Client ID y Client Secret directamente en Vercel.

## Conexión del servidor con GitHub

En GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens, crea un token restringido al repositorio PAGINA-WEB-MINA con permiso Contents: Read and write. No necesita Workflows. Configura una caducidad y renueva el token antes de que expire.

El token tiene permisos sobre los contenidos del repositorio; el API del panel restringe las operaciones a src/content/novedades/*.json y public/uploads/novedades/*. El token nunca se envía a los profesores.

## Variables en Vercel → Production

- CMS_SITE_URL: https://ieagricolalamina.edu.co (ya configurada).
- GOOGLE_CLIENT_ID: ID del cliente web de Google.
- GOOGLE_CLIENT_SECRET: secreto del cliente web de Google (tipo Secret).
- CMS_SESSION_SECRET: clave aleatoria de al menos 32 caracteres, tipo Secret. Puedes generar una en PowerShell: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))". Copia solo a Vercel.
- CMS_GITHUB_TOKEN: token restringido de GitHub, tipo Secret.
- CMS_ALLOWED_EMAILS: correos autorizados separados por comas; incluye primero el del administrador.

Nunca pongas secretos en variables VITE_, archivos del repositorio, capturas ni el chat. Los cambios de variables requieren un nuevo despliegue.

## Publicación y comprobación

Publica los archivos preparados, espera Ready en Vercel y prueba /equipo/ con el correo administrador. Comprueba que un correo no autorizado recibe rechazo, y que guardar un borrador no lo muestra en la web. Luego publica una novedad real y verifica su tarjeta, Leer más y las fotografías después de Ready.

Las fotos admiten JPG, PNG o WebP de hasta 2 MB. Al subir una imagen queda guardada aunque abandones la edición; no se publica una tarjeta hasta guardar la noticia. Para retirar una noticia, desactiva Publicada. El botón Eliminar borrador permite borrar definitivamente una noticia oculta, después de confirmar. Las fotografías permanecen guardadas para evitar eliminar archivos usados por otras noticias. Las noticias publicadas no se pueden borrar con este botón; primero hay que ocultarlas y guardar.

El panel /admin con GitHub continúa disponible para el administrador durante la transición. No retires las variables GITHUB_CLIENT_ID y GITHUB_CLIENT_SECRET hasta decidir cerrar ese acceso.

Fuentes:
- https://developers.google.com/identity/openid-connect/openid-connect
- https://docs.github.com/en/rest/repos/contents
