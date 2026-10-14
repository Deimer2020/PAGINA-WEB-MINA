# Equipo docente

Página pública: https://ieagricolalamina.edu.co/equipo-docente
Administración: https://ieagricolalamina.edu.co/equipo/profesores.html

Entra al panel con Google y selecciona Profesores. Usa Añadir profesor para registrar nombre completo y cargo. Área, correo de contacto, foto y presentación son opcionales. Orden menor aparece primero. Los perfiles empiezan ocultos.

El correo de contacto será visible en la página pública y se muestra como enlace para escribir al profesor. Este correo no concede acceso al panel; la autorización sigue controlada por CMS_ALLOWED_EMAILS.

Sin foto, la tarjeta muestra las iniciales. Puedes subir JPG, PNG o WebP de hasta 2 MB o quitar la foto del perfil. Las imágenes se guardan en la carpeta de subidas del CMS; quitar una foto del perfil o eliminar un perfil no borra el archivo de imagen.

Activa Publicar perfil en la web y guarda para mostrarlo después del despliegue en Vercel. Desactiva y guarda para ocultarlo. Los perfiles ocultos se pueden eliminar con confirmación. Todos los usuarios autorizados al panel pueden administrar los perfiles.

La colección src/content/profesores.json empieza vacía; no se han añadido nombres ni correos ficticios. No hacen falta variables nuevas, clientes OAuth nuevos ni cambios en el token de GitHub.

Publica estos cambios en main y espera Ready. Prueba un perfil oculto sin foto, confirma que no aparece en la página pública, y publica un perfil real para verificar la tarjeta y su correo. La compilación y las pruebas de API no sustituyen esa comprobación en el navegador.
