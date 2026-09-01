# florecer-cdn

Pantallas del quiz de **Método Florecer**, servidas por GitHub Pages y
embebidas en Inlead con un `<iframe>`.

> **Por qué iframe:** Inlead inserta los bloques HTML con `innerHTML`, y eso
> **no ejecuta los `<script>`**. Cualquier pantalla con JavaScript tiene que ir
> en un iframe, si no se ve en blanco.

---

## Pantallas

| Pantalla | URL | Alto del iframe |
|---|---|---|
| Checkout | https://nazadia18-max.github.io/florecer-cdn/ | `4200px` |
| P13 · Testimonios | https://nazadia18-max.github.io/florecer-cdn/p13.html | `1020px` |

### Checkout

```html
<iframe src="https://nazadia18-max.github.io/florecer-cdn/"
style="width:100%;height:4200px;border:0;display:block"
scrolling="no"></iframe>
```

### P13 · Testimonios

```html
<iframe src="https://nazadia18-max.github.io/florecer-cdn/p13.html"
style="width:100%;height:1020px;border:0;display:block"
scrolling="no"></iframe>
```

---

## Videos

Los dos videos de testimonios **no viven en este repo**: se sirven desde un CDN
propio en Railway, porque GitHub Pages no está pensado para video (no tiene
límite de banda declarado pero tampoco garantías, y no conviene abusar).

- CDN: https://web-production-74085.up.railway.app
- Proyecto Railway: https://railway.com/project/21046493-eada-4306-bffc-6d3bd662886a
- Carpeta local: `../florecer-quiz/`

| Archivo | Qué es |
|---|---|
| `/media/testimonio-1.mp4` | 480×848 · 10 s · 1,6 MB |
| `/media/testimonio-2.mp4` | 480×848 · 10 s · 1,6 MB |
| `/media/testimonio-N.jpg` | Poster (el frame que se ve antes de dar play) |

### Cambiar o agregar videos

```bash
cd ../florecer-quiz
cp /ruta/al/video.mp4 public/media/testimonio-1.mp4
ffmpeg -ss 1.2 -i public/media/testimonio-1.mp4 -frames:v 1 -q:v 4 public/media/testimonio-1.jpg -y
railway up --service web
```

Los archivos se cachean por un año (`immutable`). Si reemplazás un video con el
mismo nombre, usá un nombre nuevo (`testimonio-1-v2.mp4`) y actualizá el `src`
en `p13.html`, si no los navegadores siguen mostrando el viejo.

---

## Cómo funcionan los videos en P13

- Arrancan **pausados**, con un botón de play centrado sobre el poster.
- Al tocar reproducen **con sonido** (es un gesto de la persona, así que el
  navegador lo permite).
- Solo uno suena a la vez: al dar play en uno, el otro se pausa.
- Tocar de nuevo pausa.
- `preload="metadata"`: no descargan el video entero hasta que alguien lo pide.

---

## Ajustar el alto del iframe

El bloque mide ~982px de alto en un celular de 390px de ancho. El `1020px` del
snippet deja un margen. Si ves una franja blanca de más, bajalo; si se corta
el badge oscuro del final, subilo.

| Ancho | Alto del bloque |
|---|---|
| 320px | 919px |
| 360px | 955px |
| 390px | 982px |
| 500px | 1015px |

---

## Checkout: imágenes del carrusel

Las 4 imágenes (`antes-21-dias.jpg`, `antes-1-mes.jpg`, `frontal.jpg`,
`lateral.jpg`) están en este repo y se referencian desde el array `IMGS` en las
primeras líneas de `mf-checkout.js`.
