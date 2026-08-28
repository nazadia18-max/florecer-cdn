# florecer-cdn

Assets del bloque de checkout de Método Florecer, servidos vía jsDelivr.

## Uso

En el sector HTML de la página de checkout, pegar:

```html
<div id="mf-checkout"></div>
<script src="https://cdn.jsdelivr.net/gh/nazadia18-max/florecer-cdn@main/mf-checkout.js" defer></script>
```

## Imágenes del carrusel

Subir las 4 imágenes a este repo y actualizar el array `IMGS` en las
primeras líneas de `mf-checkout.js`.

## Nota sobre caché

jsDelivr cachea por 7 días con `@main`. Para forzar una actualización,
crear un tag nuevo (`v2`, `v3`...) y apuntar el snippet ahí:
`.../florecer-cdn@v2/mf-checkout.js`
