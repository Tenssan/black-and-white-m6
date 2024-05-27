# Black and White

Este proyecto es una aplicación web que permite a los usuarios procesar imágenes ingresadas a través de una URL. La aplicación convierte la imagen a escala de grises, la redimensiona a 350 píxeles de ancho y almacena la imagen procesada con un nombre que incluye una porción de un UUID y la extensión ".jpg".

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio o descarga los archivos del proyecto.
2. Abre una terminal y navega al directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

    ```bash
    npm install
    ```

## Uso

1. Asegúrate de que el archivo `index.js` esté en el directorio principal del proyecto.
2. Asegúrate de que la estructura de carpetas sea la siguiente:
    ```
    /DesafioBlackAndWhite
    ├── index.js
    ├── index.html
    ├── public
    │   └── styles.css
    └── processed_images
    ```
3. Ejecuta el servidor con el siguiente comando:

    ```bash
    node servidor.js
    ```

4. Abre tu navegador web y ve a `http://localhost:3000`.
5. Ingresa la URL de una imagen en el formulario y haz clic en "Procesar Imagen".
