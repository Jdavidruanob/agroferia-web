---
name: Agroferia
description: Sitio base de la Asociación Agropecuaria La Feria, con gramática Alquería y colores tomados del logo.
colors:
  white: "#ffffff"
  primary: "#114a9b"
  primary-hover: "#0d3a7b"
  blue-pal-arranque: "#114a9b"
  blue-soft: "#e9eff8"
  ink-on-blue-muted: "#dbe4f3"
  orange-tradicional: "#f2ae30"
  orange-tradicional-hover: "#e09c18"
  on-orange: "#114a9b"
  on-orange-ink: "#1a1f29"
  dark: "#172033"
  paper: "#f4f6f9"
  panel: "#f1f3f7"
  line: "#e3e7ee"
  ink: "#161b26"
  ink-muted: "#4b5363"
typography:
  display:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "clamp(2.3rem, 4.6vw, 3.9rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  sport-display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 7vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.01em"
rounded:
  small: "10px"
  card: "16px"
  frame: "28px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 32px)"
  section: "clamp(64px, 9vw, 120px)"
  container: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "5px 5px 5px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-sun:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue-pal-arranque}"
    rounded: "{rounded.pill}"
  product-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "18px"
  badge-tradicional:
    backgroundColor: "{colors.orange-tradicional}"
    padding: "4px 16px 5px"
  chip:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-muted}"
    rounded: "6px"
---

# Design System: Agroferia

## Overview

Gramática de sitio corporativo de lácteos tomada de Alquería (navbar flotante en píldora con el logo en insignia, botones píldora con flecha en círculo, mega-menú, ficha de producto con tabla nutricional) sobre una **base blanca**. La marca vive en dos líneas que se distinguen por color y personaje (especificación de la diseñadora, 25 nov. 2026, recursos de `Recurso 6.pdf`):
- **Pal' Arranque**: azul `#114A9B`, texto blanco, vaca en bici, letras oficiales en imagen.
- **Agroferia Tradicional**: naranja `#F2AE30`, títulos y etiquetas en azul `#114A9B`, texto pequeño casi negro, vaca en tractor.

Los bloques de color terminan en una franja de **goteo de leche** (`goteo-azul.png`, `goteo-naranja.png`) que los funde con el blanco.

## Colors

### Primary
- **Azul `#114A9B`**: color de la línea Pal' Arranque y también de la interfaz general (botones primarios, enlaces, íconos, tabla nutricional de Pal' Arranque).
- **Naranja `#F2AE30`**: color de la línea Agroferia Tradicional (hero de Inicio, bloque "Amor y abundancia", banda de su catálogo, hero de sus fichas, etiqueta de línea).

### Neutral
- Fondo blanco `#ffffff`; superficies suaves `#f4f6f9` / `#f1f3f7`; línea `#e3e7ee`; tinta `#161b26` y `#4b5363`; bloque oscuro `#172033` (footer, botón "Visítanos").
- Acento azul suave `#e9eff8` para fondos amplios (lienzo del mapa, vitrina, íconos de características).

### Named Rules
- **Regla de línea:** azul = Pal' Arranque, naranja = Agroferia Tradicional. Nunca se mezclan en un mismo bloque, salvo la meta del mapa (punto de acopio en naranja) y el cartel de premio.
- **Regla de contraste sobre naranja:** títulos y etiquetas en azul (contraste 4,4:1, solo texto grande o negrita); texto de párrafo en `#1a1f29`. Nunca texto blanco sobre naranja.
- **Sin verdes ni amarillos** en la interfaz (las fotos y el logo de Agroferia quedan como están).
- **Personaje por bloque:** cada bloque de color lleva su personaje (`personaje-pal-arranque.png`, `personaje-tradicional.png`).
- **Doble etiqueta:** toda tarjeta de producto lleva arriba a la izquierda la etiqueta de línea y arriba a la derecha la etiqueta artesanal (borde del color de la línea).

## Typography

- **Bitter** (slab, eco de las letras de la cinta del logo) para h1 y h2.
- **Figtree** para texto, navegación, botones y títulos pequeños.
- **Barlow Condensed** 700–800 en mayúsculas, **solo** dentro de Pal' Arranque para subtítulos, datos de ruta y chips. El nombre de la línea no se escribe en Barlow: usa las letras de la etiqueta en imagen.
- **Coustard** 400 (`--font-tradicional`, clase `.title-tradicional`) **solo** para el nombre "Agroferia Tradicional" (banda del catálogo, mega-menú, pestaña). Es la Clarendon ancha libre más cercana a las letras de la cinta "AGROFERIA" del logo.
- **Letras y logos de etiqueta** (imagen, exportados del PDF vectorial): `pal-arranque-letras.png`, `pal-arranque-logo.png`, `tradicional-logo.png`.

### Hierarchy
display 2.3–3.9rem · headline 1.85–2.7rem · title 1.2rem · body 1.0625rem/1.6 · lead 1.08–1.22rem en tinta secundaria. Tracking mínimo -0.02em. Los números en tablas usan `tabular-nums`.

## Layout

Contenedor de 1180px con gutter fluido de 16 a 32px. Secciones con 64–120px de padding vertical. Los encabezados de sección van a dos columnas (título a la izquierda, texto a la derecha) y se apilan por debajo de 800px. Los marcos de foto y texto se parten en dos columnas y en móvil la foto pasa arriba. En móvil, el navbar se reduce a insignia, "Visítanos" y botón de menú.

## Elevation & Depth

Sombras con desplazamiento y desenfoque suave, tintadas de gris azulado (`rgb(17 24 39)`): flotante para navbar e insignia, y una sombra más larga al pasar el cursor sobre las tarjetas. Las tarjetas en reposo llevan borde de 1px y no sombra; al pasar el cursor, el borde toma el color de la línea.

## Shapes

Marco 28px (bandas de línea, heros, mapa, panel), tarjeta 16px, panel interno 14–20px, etiquetas y botones en píldora. Íconos de interfaz con trazo 1.75 en retícula 24; íconos de producto con trazo 2 en retícula 64. Las bandas de color no se redondean abajo: terminan en la franja de goteo.

## Components

### Buttons
Píldora con texto y flecha en un círculo de 38px. Variantes: primario azul (texto blanco), claro (blanco con flecha azul), `btn--sun` (blanco con texto azul, sobre bloques azules), `btn--orange` (naranja con texto casi negro y flecha azul) y fantasma. Los enlaces pendientes usan `aria-disabled` y el texto "próximamente" o "enlace por agregar".

### Etiquetas de producto
`.badge--pa` (azul, texto blanco), `.badge--tradicional` (naranja, texto azul) y `.badge--artesanal` (blanco con borde del color de la línea). En la tarjeta van dentro de `.pcard__badges`, en las esquinas superiores; si no caben, la artesanal baja a una segunda línea y se mantiene a la derecha.

### Tarjeta de producto (`ProductCard`)
Imagen 4:3 (hoy un ícono, con el `<img>` a insertar comentado), sello "Producto Lácteo Artesanal" (`sello-artesanal.png`) en la esquina inferior derecha de la imagen, doble etiqueta, título, párrafo de receta e ingredientes, y pie con la presentación y "Ver ficha" o "Ver detalles". El atributo `compacta` oculta la receta en el carrusel de Inicio.

### Banda de línea (`LineaBanda`)
Bloque de color de la línea con texto a la izquierda, el personaje a la derecha y la franja de goteo abajo. Encabeza cada línea en el catálogo.

### Orden de líneas
Agroferia Tradicional va primero (izquierda en escritorio, arriba en móvil) y Pal' Arranque segundo: catálogo, pestañas, mega-menú, menú móvil y pie de página. El orden sale de `lineas`, `grupos` y `productos` en `src/data/productos.ts`.

### Barra superior y contacto
Franja azul encima del navbar (no fija) con los dos WhatsApp (`wa.me`); el principal en píldora blanca. El pie de página muestra los WhatsApp y el correo `mailto:`. Los datos viven en `src/data/contacto.ts`.

### Aliados (`Aliados`, en Nosotros `#aliados`)
Cuadrícula de tarjetas blancas con borde superior azul o naranja alternado: espacio de logo, etiqueta de aporte, nombre, descripción y los productos en los que colabora. Datos de ejemplo en `src/data/aliados.ts`.

### Navigation
Insignia con el logo de Agroferia; píldora blanca con Inicio · Productos · Pal' Arranque · Nosotros; botón "Visítanos" en `#172033`. "Pal' Arranque" es una píldora azul con sus letras oficiales (anillo blanco y azul cuando está activa). El mega-menú tiene dos columnas: Pal' Arranque en azul, con Portables y Punto físico más el enlace "Mapa del recorrido", y Agroferia Tradicional en naranja.

### Mapa del recorrido (`RutaInteractiva`, componente firma)
Lienzo azul suave con montañas geométricas, un río y un camino curvo (Catmull-Rom) que pasa por 8 puntos: salida (marcador azul), seis banderitas numeradas (SVG; el `<img>` de la ilustración propia va comentado) y la meta en naranja (punto de acopio). El ciclista avanza por el camino con aceleración y desaceleración suaves, se voltea según la dirección y deja dibujada la línea del avance. Se maneja con clic en cada punto, con los botones Anterior y Siguiente o con las flechas del teclado. El panel azul muestra el número de parada, el tipo, km, altitud y descripción. Al llegar al punto 8 aparecen el cartel naranja "¡Ruta completada! Eres ganador de un premio" y el confeti, y se abre la celebración: `<dialog>` modal con fondo oscuro, la vaca "¡Lo lograste! ¡Vamos con toda!" (`celebracion-lo-lograste.png`, con silueta blanca) que crece desde el centro con rebote, rayos naranjas girando detrás y confeti azul, naranja y blanco (papelitos, estrellas y serpentinas) por delante. Se cierra con la X, "Seguir explorando el mapa", clic fuera o Esc; "¡Reclamar mi premio!" cierra y lleva al cartel del premio. Con movimiento reducido, el ciclista salta de punto en punto sin animación.

### Ficha nutricional
Tarjeta fija a la izquierda y, a la derecha, ingredientes, alérgenos, conservación, aviso de dato temporal y tabla Por 100 g/ml · Por porción con la cabecera del color de la línea. El termo reemplaza la tabla por "Material y dinámica de puntos".

## Do's and Don'ts

### Do:
- Usar el color y el personaje de la línea en cada bloque que la represente.
- Marcar todo dato temporal con `PENDIENTE` en el código y con el aviso en pantalla.
- Mantener la base blanca y dejar el color en bloques completos, no en detalles sueltos.

### Don't:
- Verdes, amarillos, pasteles, neón o fluorescentes en la interfaz.
- Texto blanco sobre naranja, o texto azul pequeño sobre naranja.
- Mezclar azul y naranja como fondo dentro de un mismo bloque de línea.
- Inventar testimonios, precios o alianzas.
- Etiquetas pequeñas encima de los títulos, texto con degradado o tarjetas anidadas.
