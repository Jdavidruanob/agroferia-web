---
name: Agroferia
description: Sitio base de la Asociación Agropecuaria La Feria, con gramática Alquería y colores tomados del logo.
colors:
  green-ribbon: "#0e5f36"
  green-ribbon-hover: "#0b4f2d"
  green-deep: "#093723"
  green-field: "#2b8f3d"
  earth-soil: "#5f4210"
  sky: "#2199d3"
  sky-ink: "#13699a"
  sun: "#ebd568"
  paper: "#f6f4ec"
  surface: "#ffffff"
  panel: "#eeeadd"
  line: "#ddd8c8"
  ink: "#142019"
  ink-muted: "#4a574e"
  ink-on-dark: "#f3f1e6"
  ink-on-dark-muted: "#c4ccbf"
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
    backgroundColor: "{colors.green-ribbon}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "5px 5px 5px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.green-ribbon-hover}"
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-sun:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.pill}"
  product-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "18px"
  chip:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-muted}"
    rounded: "6px"
---

# Design System: Agroferia

## Overview

Gramática de sitio corporativo de lácteos tomada de Alquería (referencia explícita del cliente): navbar flotante en píldora con el logo en una insignia circular, marcos redondeados grandes que contienen foto y texto, botones píldora con flecha dentro de un círculo, mega-menú por columnas y ficha de producto con tabla nutricional. Todo vestido con la paleta del logo de Agroferia. La idea que manda: **origen a la vista**, cada pantalla ata el producto a La Feria y a sus 30 familias.

Pal' Arranque es un mundo dentro del mismo sistema: mismos tokens, pero en verde profundo con amarillo sol y tipografía condensada deportiva.

## Colors

Estrategia de paleta completa con roles fijos. Cada color sale del logo; no se agregan pasteles, neones ni fluorescentes.

### Primary
- **Verde cinta** `#0e5f36`: botones, iconos, enlaces activos, la cinta "AGROFERIA" del logo.
- **Verde profundo** `#093723`: marcos oscuros (hero de Inicio, Pal' Arranque, footer, ruta).

### Secondary
- **Tierra** `#5f4210`: el suelo del logo. Color de la categoría Snacks, avisos de dato temporal y el bloque de fondos en Nosotros.

### Tertiary
- **Cielo** `#2199d3` y su versión con contraste `#13699a` (texto, anillos de foco, categoría Leches).
- **Sol** `#ebd568`: solo sobre verde profundo. Es el acento de Pal' Arranque y del lema "Amor y abundancia".
- **Verde pasto** `#2b8f3d`: puntos de estado activo y la línea del proceso.

### Neutral
- **Papel** `#f6f4ec` de fondo, **superficie** blanca para tarjetas, **panel** `#eeeadd` detrás de los íconos de producto, **línea** `#ddd8c8`.
- Tinta `#142019` y tinta secundaria `#4a574e`; sobre oscuro, `#f3f1e6` y `#c4ccbf`.

### Named Rules
- **Regla del sol:** el amarillo nunca va sobre papel ni blanco; solo sobre verde profundo o verde cinta.
- **Regla del logo:** un color nuevo solo entra si sale del logo.
- **Color por categoría:** Leches cielo-tinta, Bebidas verde cinta, Snacks tierra, Pal' Arranque verde profundo, Postres `#2b6f37`. El color pinta el hero del producto y el trazo del ícono.

## Typography

- **Bitter** (slab, eco de las letras de la cinta del logo) para h1 y h2.
- **Figtree** para texto, navegación, botones y títulos pequeños.
- **Barlow Condensed** 700–800 en mayúsculas, **solo** dentro de Pal' Arranque (wordmark, títulos de sección, datos de ruta, chips de la línea).

### Hierarchy
display 2.3–3.9rem · headline 1.85–2.7rem · title 1.2rem · body 1.0625rem/1.6 · lead 1.08–1.22rem en tinta secundaria. Tracking mínimo -0.02em. Los números en tablas usan `tabular-nums`.

## Layout

Contenedor de 1180px con gutter fluido de 16 a 32px. Secciones con 64–120px de padding vertical. Los encabezados de sección van a dos columnas (título a la izquierda, texto a la derecha) y se apilan por debajo de 800px. Los marcos de foto y texto se parten en dos columnas y en móvil la foto pasa arriba. En móvil, el navbar se reduce a insignia, "Visítanos" y botón de menú.

## Elevation & Depth

Dos sombras, siempre con desplazamiento y desenfoque suave, tintadas de verde profundo:
- **Flotante** (navbar, insignia, mega-menú): `0 10px 30px -12px rgb(9 55 35 / .22)`.
- **Tarjeta**: `0 6px 20px -10px rgb(9 55 35 / .18)`.
Cada elemento declara su elevación una sola vez: borde o sombra, nunca ambos.

## Shapes

Marco 28px (heros, bloques de color, mapa), tarjeta 16px, panel interno 12–14px, chips 6px, botones y navegación en píldora. Los íconos de interfaz usan trazo de 1.75 sobre una retícula de 24; los de producto, trazo 2 sobre 64.

## Components

### Buttons
Píldora con texto a la izquierda y flecha dentro de un círculo de 38px a la derecha. Al pasar el cursor, la flecha se mueve 3px. Variantes: primario verde, claro (blanco con flecha verde), sol (Pal' Arranque) y fantasma (círculo con contorno). Los enlaces que todavía no existen usan `aria-disabled` con la palabra "próximamente".

### Chips
Etiqueta de categoría con fondo panel y radio de 6px. En Pal' Arranque: verde profundo con texto sol en Barlow Condensed.

### Cards / Containers
La **tarjeta de producto** lleva nombre, chip de categoría, un panel con el ícono del producto y su presentación, y el botón "Ver más". Su panel reemplaza la foto del empaque hasta que exista. Nunca hay tarjetas anidadas.

### Navigation
Insignia circular blanca con el logo, más una píldora blanca con Inicio · Productos · Pal' Arranque · Nosotros y el botón "Visítanos". Productos abre un mega-menú de 5 columnas; la columna de Pal' Arranque va en verde profundo e incluye "Descripción de ruta". El enlace activo se marca con un punto verde pasto.

### Ficha nutricional (componente firma)
Tarjeta fija a la izquierda (ícono, presentación, porción, "Dónde encontrarlo") y, a la derecha, ingredientes, alérgenos, conservación, el aviso de dato temporal y la tabla con columnas Por 100 g/ml y Por porción, con las filas clave en negrita. Los productos de Pal' Arranque suman el bloque "En la ruta".

### Perfil de ruta (componente firma)
SVG de altimetría en verde profundo con línea sol que se dibuja una sola vez al entrar en pantalla; las paradas aparecen escalonadas. Con movimiento reducido o sin JS se muestra completo. En móvil tiene un ancho mínimo de 720px y se desplaza en horizontal.

## Do's and Don'ts

### Do:
- Usar fotos reales de La Feria; si falta una, el ícono de producto en su panel.
- Marcar en el código con `PENDIENTE` y en pantalla con el aviso en tierra todo dato temporal.
- Mantener Pal' Arranque dentro de los mismos tokens y diferenciarlo con tipografía y verde profundo.

### Don't:
- Colores pastel, neón o fluorescentes, ni el amarillo sol sobre fondos claros.
- Inventar testimonios, precios o alianzas.
- Usar etiquetas pequeñas encima de los títulos, texto con degradado o tarjetas anidadas.
- Usar Barlow Condensed fuera de Pal' Arranque.
