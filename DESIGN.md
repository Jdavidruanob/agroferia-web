---
name: Agroferia
description: Sitio base de la Asociación Agropecuaria La Feria, con gramática Alquería y colores tomados del logo.
colors:
  green-tradicional: "#076332"
  green-tradicional-hover: "#054d27"
  green-tradicional-field: "#49af4c"
  green-field-ink: "#05331a"
  blue-pal-arranque: "#104a9b"
  blue-pal-arranque-hover: "#0c3a7a"
  ink-on-blue-muted: "#d3dcef"
  sun: "#f9c200"
  earth-soil: "#5f4210"
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
    backgroundColor: "{colors.green-tradicional}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "5px 5px 5px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.green-tradicional-hover}"
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-sun:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.blue-pal-arranque}"
    rounded: "{rounded.pill}"
  product-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "18px"
  badge-tradicional:
    backgroundColor: "{colors.green-tradicional-field}"
    padding: "4px 16px 5px"
  chip:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-muted}"
    rounded: "6px"
---

# Design System: Agroferia

## Overview

Gramática de sitio corporativo de lácteos tomada de Alquería (referencia explícita del cliente): navbar flotante en píldora con el logo en una insignia circular, marcos redondeados grandes que contienen foto y texto, botones píldora con flecha dentro de un círculo, mega-menú por columnas y ficha de producto con tabla nutricional. La idea que manda: **origen a la vista**, cada pantalla ata el producto a La Feria y a sus 30 familias.

La marca tiene dos líneas, cada una con la etiqueta que hizo la diseñadora (nov. 2026):
- **Tradicional** (leches, yogures, quesos, snacks, postres): verde de su etiqueta, distintivo de cinta "TRADICIONAL" e ilustración de la vaca en tractor.
- **Pal' Arranque** (ciclistas): azul de su etiqueta, nombre siempre con sus letras oficiales en imagen e ilustración de la vaca en bici.

## Colors

Cada color sale de las etiquetas de línea o del logo. No se agregan pasteles, neones ni fluorescentes.

### Primary
- **Verde Tradicional** `#076332`: el trazo de la etiqueta Tradicional. Botones, enlaces, íconos y bloques oscuros (footer, "Amor y abundancia", tarjeta de Visítanos, hero de las fichas tradicionales).
- **Verde campo Tradicional** `#49af4c`: el fondo de la etiqueta. Grandes superficies (hero de Inicio, panel visual de las fichas tradicionales, distintivo). El texto encima siempre va en `#05331a`; nunca blanco (contraste 2.8:1).

### Secondary
- **Azul Pal' Arranque** `#104a9b`: el fondo de su etiqueta. Todo el mundo Pal' Arranque: su página, el bloque en Inicio, la columna del mega-menú, las tarjetas y fichas de la línea y la ruta. El texto secundario sobre azul va en `#d3dcef`.

### Tertiary
- **Amarillo** `#f9c200`: común a ambas etiquetas. Solo sobre azul o verde oscuro (botón sol, datos de ruta, íconos de Pal' Arranque, el lema del footer).
- **Tierra** `#5f4210`: el suelo del logo. Avisos de dato temporal y bloque de fondos en Nosotros.

### Neutral
- **Papel** `#f6f4ec` de fondo, **superficie** blanca para tarjetas, **panel** `#eeeadd` detrás de los íconos de producto, **línea** `#ddd8c8`.
- Tinta `#142019` y tinta secundaria `#4a574e`; sobre oscuro, `#f3f1e6` y `#c4ccbf`.

### Named Rules
- **Regla de línea:** verde = Tradicional, azul = Pal' Arranque. Nunca se mezclan en un mismo bloque.
- **Regla del amarillo:** nunca sobre papel, blanco ni verde campo.
- **Regla del distintivo:** toda tarjeta o ficha de un producto Tradicional lleva la cinta "TRADICIONAL" (`BadgeTradicional`).
- **Regla del logo Pal' Arranque:** en los bloques grandes (tarjeta de Inicio, portada de su página) va el logo completo `PalArranqueLogo`: letras, estela de leche y vaca en bici. Las letras solas (`PalArranqueLetras`) van en espacios pequeños: la píldora azul del navbar, el título del mega-menú, la sección del catálogo y el hero de las fichas. En texto corrido y chips pequeños el nombre va escrito. Siempre sobre azul.

## Typography

- **Bitter** (slab, eco de las letras de la cinta del logo) para h1 y h2.
- **Figtree** para texto, navegación, botones y títulos pequeños.
- **Barlow Condensed** 700–800 en mayúsculas, **solo** dentro de Pal' Arranque para subtítulos, datos de ruta y chips. El nombre de la línea no se escribe en Barlow: usa las letras de la etiqueta en imagen.
- **Letras de etiqueta** (imagen): `src/assets/marca/pal-arranque-letras.png` y `tradicional-letras.png`. Pendiente pedir a la diseñadora la fuente o un SVG para mayor nitidez.

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
Insignia circular blanca con el logo, más una píldora blanca con Inicio · Productos · Pal' Arranque · Nosotros y el botón "Visítanos". Productos abre un mega-menú de 5 columnas; la columna de Pal' Arranque va en azul, con sus letras oficiales como título, e incluye "Descripción de ruta". El enlace activo se marca con un punto verde. "Pal' Arranque" es una píldora azul con sus letras oficiales, para que se note que es otra línea; su estado activo es un anillo amarillo.

### Ficha nutricional (componente firma)
Tarjeta fija a la izquierda (ícono, presentación, porción, "Dónde encontrarlo") y, a la derecha, ingredientes, alérgenos, conservación, el aviso de dato temporal y la tabla con columnas Por 100 g/ml y Por porción, con las filas clave en negrita. Los productos de Pal' Arranque suman el bloque "En la ruta".

### Perfil de ruta (componente firma)
SVG de altimetría sobre azul Pal' Arranque con línea amarilla que se dibuja una sola vez al entrar en pantalla; las paradas aparecen escalonadas. Con movimiento reducido o sin JS se muestra completo. En móvil tiene un ancho mínimo de 720px y se desplaza en horizontal.

## Do's and Don'ts

### Do:
- Usar fotos reales de La Feria; si falta una, el ícono de producto en su panel.
- Marcar en el código con `PENDIENTE` y en pantalla con el aviso en tierra todo dato temporal.
- Mantener Pal' Arranque dentro de los mismos tokens y diferenciarlo con tipografía y verde profundo.

### Don't:
- Colores pastel, neón o fluorescentes, ni el amarillo sobre fondos claros.
- Texto blanco sobre el verde campo `#49af4c`.
- Inventar testimonios, precios o alianzas.
- Usar etiquetas pequeñas encima de los títulos, texto con degradado o tarjetas anidadas.
- Usar Barlow Condensed fuera de Pal' Arranque, o para escribir el nombre "Pal' Arranque" como título.
