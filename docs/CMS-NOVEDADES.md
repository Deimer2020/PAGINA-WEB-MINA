# Administrar novedades en Vercel

## Activación (una sola vez)

1. Confirma que Vercel despliega el repositorio Deimer2020/PAGINA-WEB-MINA, rama main, con este directorio como raíz, comando npm run build y salida dist.
2. En GitHub, Settings → Developer settings → OAuth Apps → New OAuth App.
3. Usa la URL HTTPS de producción como Homepage URL. Authorization callback URL: https://TU-DOMINIO/api/cms-callback.
4. En Vercel → proyecto → Settings → Environment Variables → Production, configura:
   - CMS_SITE_URL: https://TU-DOMINIO (sin /admin).
   - GITHUB_CLIENT_ID: Client ID de la aplicación OAuth.
   - GITHUB_CLIENT_SECRET: secreto de la aplicación OAuth.
5. Publica estos cambios y vuelve a desplegar después de añadir las variables.
6. Abre https://TU-DOMINIO/admin e inicia sesión con una cuenta GitHub con permiso de escritura al repositorio.

Nunca guardes el secreto en archivos ni variables VITE_. El backend solicita el scope repo para guardar contenido mediante GitHub; revisa los permisos al autorizar.

## Uso

En Novedades puedes crear, editar y eliminar noticias, subir portada y galería, cambiar fecha, resumen, contenido y orden. Publicada desactivada oculta una noticia de la web; Destacada controla la etiqueta de la tarjeta. Para guardar un borrador usa Publicada desactivada y publícalo en el panel; se guardará en GitHub sin aparecer en la web.

Publicar guarda archivos JSON y las imágenes en GitHub. Vercel reconstruye la web cuando el repositorio tiene despliegues automáticos habilitados. Espera a que ese despliegue termine para ver la actualización.

Las cinco novedades existentes conservan sus presentaciones especiales. Puedes editar sus tarjetas desde el panel. Escribir Contenido completo o añadir una Galería sustituye su presentación especial por la presentación estándar administrable. Los detalles internos de las presentaciones antiguas permanecen en código hasta una migración posterior.

Contenido completo admite texto y saltos de línea, sin HTML. Orden menor aparece primero; en empate aparece primero la fecha de publicación más reciente. El botón Ver todas las noticias abre un listado de todas las noticias publicadas.

## Verificación de activación

- /admin muestra Novedades.
- El acceso con GitHub vuelve al panel sin errores.
- Una noticia publicada aparece después del despliegue automático.
- Dos noticias nuevas abren su propio contenido en Leer más.
- Desactivar Publicada oculta la noticia después del despliegue.
- Las noticias antiguas conservan sus detalles si Contenido completo y Galería están vacíos.

La compilación local verifica la integración de contenido. OAuth y publicación requieren las credenciales y un despliegue real en Vercel.

Fuentes: https://decapcms.org/docs/backends-overview/ y https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
