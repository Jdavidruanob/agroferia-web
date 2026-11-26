# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static site). Chosen by the user over plain HTML and Next.js so the base can grow into more pages (product detail, routes, news) and deploy as static files.

## Users

- **General public / brand audience (primary for v1):** families, buyers, allies and institutions (SENA, IMCA, ProPacífico, Alquería) who need to understand who Agroferia is and what it produces.
- **Recreational mountain bikers of Valle del Cauca (Pal' Arranque audience):** mixed-gender groups aged 20 to 50+, organised in clubs, riding weekends from 5–6 a.m. on rural routes from town to town. They plan via social media and Wikiloc, value community over competition ("no dejar a nadie atrás"), and stop at rural shops for a "tercer tiempo" (coffee, breakfast, conversation). They want to know where products come from.

## Product Purpose

A base corporate website for Agroferia (Asociación Agropecuaria La Feria) that explains the association, its dairy catalogue and the Pal' Arranque cyclist programme. It is a v1 scaffold: real photos, logos, final copy and exact nutrition data will arrive later and replace placeholders. Success for v1 = the client (a team of design students working for Agroferia) can see exactly how the final distribution, navigation and product detail pages will look.

## Positioning

Dairy and agroecological food produced by 30 campesino families of the La Feria corregimiento (Pradera, Valle del Cauca), sold without intermediaries, from a mountain territory at 1.600–2.200 m s. n. m. with clean water from the Bolo Azul river. Pal' Arranque turns that origin into a stop on the cyclists' route: food for the ride made by the people who live there.

## Operating Context

- Navigation has exactly four sections: **Inicio, Productos, Pal' Arranque, Nosotros**.
- Productos follows Alquería's mega-menu pattern (columns of categories with product lists). Reference: https://www.alqueria.com.co/ and `Screenshot From 2026-11-13 00-29-48.png`.
- Portfolio (designer spec, 25 Nov 2026), two lines:
  - **Pal' Arranque** — Portables: Snack de queso relleno con arequipe o bocadillo; Snack de panelita de leche con quesillo; Doypack de yogur griego con frutas de temporada; Termo plegable (dinámica de puntos). Para consumo en punto físico: Batido tipo smoothie; Cuchareable; Yogur de frutas de temporada (vaso ecológico).
  - **Agroferia Tradicional** — Queso campesino (1.000 g y 400 g); Quesillo (400 g); Yogur natural de frutas de temporada (botella); Yogur griego artesanal; Postres (yogur griego + mermelada).
- Pal' Arranque page has an interactive "Mapa del recorrido": 8 points (start, 6 flagged stops, finish at the acopio) with the cyclist character and a prize message at the finish. Stop names are reference values pending the official route.
- Every product detail page must show nutrition facts and ingredients (sport focus).
- Point of sale: Centro de Acopio, corregimiento La Feria, 12 km from Pradera.
- Official cyclist route (Wikiloc, shared by the client): circular from La Feria toward Bolo Negro, 13,95 km, +881 m, altitude 1.568–2.262 m, difficulty "Difícil". Screenshot: `wikiloc-ruta-original.jpeg`. Wikiloc link still pending.

## Capabilities and Constraints

- Static site, no e-commerce, no login.
- Nutrition values, prices and product copy are **temporary placeholders** and must be visibly marked as such in code so they can be replaced.
- Pal' Arranque has its own logo in progress; v1 uses a typographic placeholder mark.
- Undecided: final domain, contact phone/WhatsApp, social handles, route GPX file and Wikiloc link.

## Brand Commitments

- Name: AGROFERIA / Asociación Agropecuaria – La Feria. Logo stays top-left in the navbar.
- Visual identity (designer spec, 25 Nov 2026; assets from `Recurso 6.pdf`, cut into `src/assets/marca/`):
  - Base white `#FFFFFF`, dark neutral text. **No greens or yellows in the UI.** No pastel, neon or fluorescent colours.
  - **Pal' Arranque** line: blue `#114A9B` with white text, cow-on-bike character, official lettering (image).
  - **Agroferia Tradicional** line: orange `#F2AE30` with blue `#114A9B` titles/labels or near-black small text, cow-on-tractor character.
  - Colour bands end in a milk-drip edge (goteo).
  - Every product card shows two badges in the top corners: line badge + "100% Artesanal" / "Producto Artesanal" ("Edición Especial · Ecológico" for the termo).
- Philosophy: "Amor y Abundancia". Motto of solidarity: "uno para todos y todos para uno" — always in quotation marks.

## Evidence on Hand

- `REGISTRO GRUPAL - AGROFERIA (2).pdf`: history, mission, vision, territory, governance, values, channels, allies.
- `Nicho.pdf`: MTB niche research, affinity diagram, action plan stages.
- Real photos extracted from the registro PDF: murals at the acopio centre, Río Bolo, mountains, frailejones, cattle on slopes, community meeting. Plus WhatsApp photos (cyclist group in front of the mural, meeting, mural).
- Facts: 30 associated families (17 active dairy producers); allied with Alquería for 6 years; women lead presidency and legal representation and the agroecological greenhouse; solar PV at the acopio centre; COP16 energy governance award (Conservamos SAS, Fundación Sura, Fundación Davivienda, ProPacífico); 99% of farms silvopastoral; 64% forest cover in the watershed; Festival del Queso 2022 with SENA; three funds (educativo 20%, solidario 20%, rotatorio).
- **Absent:** product photos, real nutrition data, testimonials, prices, social accounts. Do not fabricate testimonials or customer claims.

## Product Principles

1. Origin is the product: always show who makes it and where.
2. Direct relationship, no intermediaries: what you buy goes to the families.
3. Everyone belongs: inclusive language, no competitive or elitist sport tone.
4. Honest placeholders: temporary data is labelled, never passed off as final.

## Accessibility & Inclusion

Spanish (es-CO). Audience includes adults 50+ and rural users on mobile with weak connectivity: readable sizes, strong contrast, light pages.
