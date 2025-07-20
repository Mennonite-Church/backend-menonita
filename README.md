## Mennonite Church API

Esta API, desarrollada con NestJS y TypeScript, está diseñada para servir como backend para la landing informativa y el backoffice administrativo de la Iglesia Menonita. Su objetivo es gestionar sucursales (iglesias locales), miembros asociados y publicar contenido dinámico.

### Funcionalidades principales

- Gestión de sucursales por país, estado y ciudad (CRUD)
- Gestión de miembros vinculados a sucursales
- Publicación y consulta de noticias/eventos para la landing
- Autenticación y roles de usuario
- Integración con el backoffice para administración interna

### Endpoints esperados

#### /api/branches

- GET: Listar sucursales (filtrar por país, estado, ciudad)
- POST: Crear sucursal
- PUT: Actualizar sucursal
- DELETE: Eliminar sucursal

#### /api/members

- GET: Listar miembros (filtrar por sucursal)
- POST: Crear miembro (asociado a sucursal)
- PUT: Actualizar miembro
- DELETE: Eliminar miembro

#### /api/news

- GET: Listar noticias/eventos
- POST: Publicar noticia/evento
- PUT: Editar noticia/evento
- DELETE: Eliminar noticia/evento

#### /api/auth

- POST: Login
- GET: Validar sesión
- POST: Registro de usuario (si aplica)

#### /api/content

- GET: Consultar contenido dinámico para la landing
- POST/PUT: Publicar/editar contenido desde el backoffice

### Próximos pasos

- Documentar la API con Swagger/OpenAPI
- Implementar pruebas unitarias y de integración
- Configurar seguridad y roles
