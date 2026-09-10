# 🎁 Tarjeta de cumpleaños — boletos de concierto

Página en HTML/CSS/JS (sin dependencias) para GitHub Pages, con 3 pasos:

1. **Tarjeta cerrada** (una hoja carta doblada, tipo media carta vertical) con
   "Feliz cumpleaños, [Nombre]" en la portada. Se toca para abrir.
2. **Tarjeta abierta**: las dos medias hojas internas, cada una con un
   placeholder para tu foto o mensaje, y el botón **"Abrir regalo"** abajo
   en la hoja derecha.
3. **Sobre**: al tocar el sello se abre y salen 3 boletos (verticales).

## Archivos

```
index.html   → estructura de la página (3 secciones/pantallas)
style.css    → estilos y animaciones
script.js    → lógica de los clics entre pantallas
assets/
  boleto-1.jpg / boleto-2.jpg / boleto-3.jpg  → boletos de ejemplo (PLACEHOLDER)
```

## 1. Cambiar el nombre de la portada

En `index.html`, busca:

```html
<h1>Feliz cumpleaños,<br><span class="nombre">[Nombre]</span></h1>
```

y reemplaza `[Nombre]`.

## 2. Las dos páginas internas (placeholders)

En `index.html`, dentro de `<section class="card-open">`, cada
`.placeholder-box` es donde va tu foto o mensaje. Por ejemplo, para poner
una foto en la página izquierda:

```html
<div class="page page-left">
  <img src="assets/tu-foto.jpg" alt="Foto" style="width:100%;border-radius:10px;">
</div>
```

O simplemente reemplaza el texto del `<span>` si prefieres un mensaje.

## 3. Poner tus fotos reales de los boletos

Reemplaza `assets/boleto-1.jpg`, `boleto-2.jpg` y `boleto-3.jpg` por tus
fotos reales, **con el mismo nombre**. Son verticales — si tus fotos son
horizontales, recórtalas primero para que se vean bien dentro del sobre.

¿Son más o menos de 3 boletos? En `index.html`, dentro de
`<div class="tickets">`, agrega o quita una línea `<img>` (sigue el patrón
`ticket-1`, `ticket-2`, `ticket-3`...). En `style.css`, agrega/quita el
bloque correspondiente `.tickets.out .ticket-N { left: ...%; transform: ...; }`
(ajusta el `left` de cada uno para que se abran en abanico sin quedar
exactamente encima).

## 4. Publicar los cambios en GitHub Pages

Como ya tienes el repositorio conectado, solo necesitas:

1. Reemplazar/actualizar estos archivos en tu carpeta del proyecto.
2. Hacer commit y push a la rama `main` (o la que tengas configurada en
   Settings → Pages).
3. Esperar 1-2 minutos y refrescar tu link de GitHub Pages.
