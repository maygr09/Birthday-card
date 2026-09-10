# 🎁 Tarjeta de regalo — boletos de concierto

Página sencilla en HTML/CSS/JS (sin dependencias) para GitHub Pages:

1. Se ve una tarjeta con el botón **"Ver tu regalo"**.
2. Al presionarlo aparece un sobre.
3. Al tocar el sello del sobre, se abre y salen los boletos (con foto).

## Archivos

```
index.html   → estructura de la página
style.css    → estilos y animaciones (tarjeta, sobre, boletos)
script.js    → la lógica de los 3 clics (ver regalo → tocar sello → boletos salen)
assets/
  boleto-1.jpg  → boleto de ejemplo (PLACEHOLDER)
  boleto-2.jpg  → boleto de ejemplo (PLACEHOLDER)
```

Los dos boletos que están ahora son **marcadores de posición** ("TU FOTO
AQUÍ"), para que sepas exactamente dónde va cada foto.

## 1. Poner tus fotos reales de los boletos

La forma más rápida: reemplaza los archivos `assets/boleto-1.jpg` y
`assets/boleto-2.jpg` por tus fotos reales, **con el mismo nombre**. No
necesitas tocar nada más.

Si prefieres usar otros nombres de archivo, o quieres formato `.png`,
edita en `index.html` estas dos líneas (busca `<div class="tickets">`):

```html
<img src="assets/boleto-1.jpg" alt="Boleto 1" class="ticket ticket-1">
<img src="assets/boleto-2.jpg" alt="Boleto 2" class="ticket ticket-2">
```

y cambia el `src` por el nombre de tu archivo.

### ¿Tienes más de 2 boletos?

Agrega otra línea siguiendo el mismo patrón, por ejemplo:

```html
<img src="assets/boleto-3.jpg" alt="Boleto 3" class="ticket ticket-3">
```

y en `style.css` agrega un bloque parecido a `.ticket-2` / `.tickets.out
.ticket-2` (copia y ajusta un poco la rotación/posición para que no queden
exactamente encima del otro).

## 2. Editar el mensaje de la tarjeta

En `index.html`, dentro de `<section class="card" id="intro-card">`,
cambia el título y el texto:

```html
<h1>¡Tienes un regalo!</h1>
<p class="msg">
  Escribe aquí tu mensaje para quien recibe el regalo.
</p>
```

## 3. Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (público, para que Pages sea
   gratis) — por ejemplo `regalo-conciertos`.
2. Sube todos estos archivos a la raíz del repositorio (index.html,
   style.css, script.js y la carpeta assets/).
3. En el repositorio, ve a **Settings → Pages**.
4. En "Build and deployment", elige **Deploy from a branch**, rama
   `main` y carpeta `/ (root)`. Guarda.
5. Espera 1-2 minutos. Tu página quedará en:
   `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`

Y listo, ya puedes compartir el link. 🎉
