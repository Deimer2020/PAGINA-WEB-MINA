# Solicitudes y perfiles propios

## Flujo docente

Comparte https://ieagricolalamina.edu.co/equipo/acceso.html. El docente entra con Google, escribe su nombre y pulsa Enviar solicitud. La solicitud queda pendiente. Después de tu aprobación, pulsa Comprobar estado y Administrar mi perfil.

Cada cuenta aprobada puede crear un único perfil y editarlo, publicar u ocultarlo y eliminarlo mientras esté oculto. No puede editar perfiles ajenos ni administrar las novedades. El servidor comprueba la autorización en cada petición, incluidas las fotos. El correo de contacto es opcional y puede ser distinto del correo usado para entrar.

## Administración

Entra con tu cuenta actual y abre Solicitudes de acceso. Puedes aprobar, rechazar o retirar accesos. Al retirarlo, la siguiente operación del docente será rechazada; su perfil no se oculta automáticamente. Puedes ocultarlo desde Profesores.

Desde Profesores, el campo Docente que puede editar este perfil permite asignar un perfil existente a un docente aprobado. Un docente no puede tener dos perfiles asignados.

CMS_ALLOWED_EMAILS ahora se conserva como lista de administradores. No agregues allí profesores: apruébalos desde el panel. Tu cuenta actual sigue como administradora, sin variables nuevas.

## Google: requisito pendiente

La aplicación sigue en Prueba. Antes de invitar a profesores sin añadirlos a Usuarios de prueba, completa Información de la marca en Google Auth Platform y publica la aplicación desde Público. Si Google pide validación del dominio o información adicional, completa los pasos que indique.

El panel solicita solo openid y email; publicar la aplicación de Google no concede automáticamente permiso al CMS. Tu aprobación sigue siendo necesaria.

## Almacenamiento

Las solicitudes se guardan cifradas con AES-256-GCM en .cms/accesos.json; el archivo no se sirve como recurso público de Vite. Los perfiles públicos solo incluyen un identificador de propietario derivado con HMAC, no el identificador de Google ni el correo de acceso del docente. Las solicitudes no envían correos automáticos.

CMS_SESSION_SECRET también protege esos datos. Conserva esta clave en Vercel: cambiarla invalidaría las sesiones y requeriría migrar la colección cifrada y sus asignaciones. No la compartas ni la pongas en el repositorio.

## Publicación y comprobación

Sube estos archivos junto con los cambios pendientes del carrusel y espera Ready. Prueba el flujo con una segunda cuenta real después de permitirla en Google o publicar la aplicación. Confirma que no pueda acceder antes de aprobarla ni modificar otro perfil, y que retirar su acceso bloquee el guardado.

Las pruebas locales usan GitHub simulado; no han enviado solicitudes ni cambiado usuarios reales.
