# Trabajo Integrador - Angular - SANTINO TASSARA

## Instalación

Antes de incializar el proyecto se debera instalar las dependencias del mismo con el siguiente comando:

```bash
npm install
```

## Ejecución

Para arrancar el servidor de desarrollo:

```bash
ng serve
```

Una vez iniciado, abre tu navegador en `http://localhost:4200/`. La aplicación detectará cambios en los archivos y se recargará automáticamente.

## Estructura del Proyecto

El código fuente principal se organiza dentro de `src/app`:

- **components/**: Contiene la lógica visual y maquetación.
  - `chats-component`: Listado de conversaciones.
  - `chat-detail-component`: Detalle de una conversación específica.
  - `new-chat-component`: Interfaz para crear nuevas conversaciones.
  - `empty-chat`: Componente mostrado cuando no se ha seleccionado ninguna ruta válida o contenido.
- **services/**: Contiene los servicios encargados de la lógica de negocio y llamadas a APIs/datos.
- **pipes/**: Pipes personalizados para transformación de datos en los templates.

## Rutas

Las rutas de navegación están definidas de la siguiente manera:

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | - | Redirección automática a `/chats`. |
| `/chats` | `ChatDetailComponent` | Vista principal de chats. |
| `/chats/:id` | `ChatDetailComponent` | Vista de detalle de un chat específico (donde `:id` es el identificador). |
| `/nuevo` | `NewChatComponent` | Página para crear una nueva conversación. |
| `**` | `EmptyChatComponent` | Ruta por defecto para URLs no existentes (404). |

### Verificación Manual

1. Ejecuta `ng serve` para levantar el proyecto.
2. Ingresa a `http://localhost:4200`.
3. Verifica que la URL cambie automáticamente a `/chats`.
4. Pruebe navegar a `/nuevo` o seleccionar el boton "Nuevo Chat" y verifica que se muestre el componente de nuevo chat.
5. Pruebe seleccionar un chat existente y verifica que se muestre el detalle del chat.
6. Enviar un mensaje desde el chat y ver la respuesta automatica y el cambio de estado del chat.
7. Navegar entre los chats y verificar que se muestre el detalle del chat y enviar mensajes en los mismos.
8. Prueba de responsive: Toque f12 y verifique que funcione la aplicacion correctamente en dispositivos moviles.


