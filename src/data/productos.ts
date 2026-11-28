/**
 * Portafolio de AGROFERIA (versión de la diseñadora, 25 nov. 2026).
 *
 * Dos líneas:
 *   · Pal' Arranque (azul) → Portables y Para consumo en punto físico.
 *   · Agroferia Tradicional (naranja).
 *
 * ⚠️ DATOS TEMPORALES: presentaciones, ingredientes y materiales son valores
 * de referencia para la maqueta. Reemplazar por los datos reales que confirme
 * Agroferia antes de publicar. No se publica tabla nutricional.
 */
import type { GlyphName, IconName } from '../components/icons';

export type LineaKey = 'pal-arranque' | 'tradicional';
export type GrupoKey = 'portables' | 'punto-fisico' | 'tradicional';

export interface Linea {
  key: LineaKey;
  nombre: string;
  descripcion: string;
}

export interface Grupo {
  key: GrupoKey;
  linea: LineaKey;
  nombre: string;
  descripcion: string;
}

export const lineas: Linea[] = [
  {
    key: 'tradicional',
    nombre: 'Agroferia Tradicional',
    descripcion:
      'Quesos, yogures y postres de siempre, hechos a mano con la leche de las 30 familias de La Feria.',
  },
  {
    key: 'pal-arranque',
    nombre: "Pal' Arranque",
    descripcion:
      'La línea para ciclistas de montaña: energía de origen para llevar en la rodada y para el tercer tiempo en el punto de acopio.',
  },
];

export const grupos: Grupo[] = [
  {
    key: 'tradicional',
    linea: 'tradicional',
    nombre: 'Agroferia Tradicional',
    descripcion: 'Quesos, yogures y postres artesanales para la mesa de la casa.',
  },
  {
    key: 'portables',
    linea: 'pal-arranque',
    nombre: 'Portables',
    descripcion: 'Para el bolsillo del jersey o la cangurera: los llevas y te acompañan el resto de la rodada.',
  },
  {
    key: 'punto-fisico',
    linea: 'pal-arranque',
    nombre: 'Para consumo en punto físico',
    descripcion: 'Se preparan y se sirven en el punto de acopio, para comer con el grupo en el tercer tiempo.',
  },
];

export interface Caracteristica {
  icono: IconName;
  titulo: string;
  texto: string;
}

export interface Ingrediente {
  nombre: string;
  /** Cantidad por unidad de producto, p. ej. "70 g" o "80 %". */
  cantidad?: string;
  /** De qué está hecho, p. ej. "leche y cultivos lácteos". */
  detalle?: string;
  /** Solo para productos con dos versiones, p. ej. "Con bocadillo". */
  version?: string;
}

export interface Producto {
  slug: string;
  nombre: string;
  linea: LineaKey;
  grupo: GrupoKey;
  glyph: GlyphName;
  /** Muestra el sello "Producto Lácteo Artesanal". Falso solo en productos no lácteos (termo). */
  sello?: boolean;
  /** Párrafo de receta e ingredientes que va en la tarjeta. */
  receta: string;
  resumen: string;
  descripcion: string;
  presentacion: string;
  /**
   * PENDIENTE: lista de referencia. Agroferia debe confirmar ingredientes y receta de cada producto;
   * al confirmarlos, poner `ingredientesConfirmados: true` y desaparece el aviso de "por confirmar".
   */
  ingredientes: Ingrediente[];
  ingredientesConfirmados?: boolean;
  alergenos?: string;
  conservacion: string;
  caracteristicas: Caracteristica[];
  /** Solo para el termo plegable. */
  material?: {
    material: string;
    capacidad: string;
    dinamica: string;
  };
  /** Solo productos Pal' Arranque. */
  ruta?: {
    momento: 'En el bolsillo' | 'Tercer tiempo';
    consumo: 'Para llevar' | 'En el punto de venta';
    nota: string;
  };
}

const origen: Caracteristica = {
  icono: 'map-pin',
  titulo: 'Origen La Feria',
  texto: 'Leche de fincas entre 1.600 y 2.200 m s. n. m., en Pradera, Valle del Cauca.',
};
const artesanal: Caracteristica = {
  icono: 'hand',
  titulo: 'Hecho a mano',
  texto: 'Lo preparan las familias de la asociación, en pequeñas tandas.',
};
const directo: Caracteristica = {
  icono: 'scale',
  titulo: 'Sin intermediarios',
  texto: 'Lo que pagas llega a las familias que producen.',
};

export const productos: Producto[] = [
  /* ============================== AGROFERIA TRADICIONAL ============================== */
  {
    slug: 'queso-campesino',
    nombre: 'Queso campesino',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'campesino',
    receta: 'Hecho solo con leche, sal y cuajo: la leche del ordeño de la mañana se cuaja, se prensa a mano y se sala. Queso fresco, suave y de sabor limpio, para la arepa, el chocolate o el desayuno.',
    resumen: 'Leche, sal y cuajo. En 1.000 g y 400 g.',
    descripcion: 'Queso campesino fresco hecho con tres ingredientes: leche, sal y cuajo.',
    presentacion: 'Bloque 1.000 g · 400 g',
    ingredientes: [
      { nombre: 'Leche' },
      { nombre: 'Sal' },
      { nombre: 'Cuajo' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Consúmase en máximo 8 días.',
    caracteristicas: [
      { icono: 'users', titulo: 'Saber campesino', texto: 'Receta que pasa de una generación a otra.' },
      { icono: 'sprout', titulo: 'Solo tres ingredientes', texto: 'Leche, sal y cuajo.' },
      { icono: 'package', titulo: 'Dos tamaños', texto: '1.000 g para la familia, 400 g para la semana.' },
      origen,
    ],
  },
  {
    slug: 'quesillo',
    nombre: 'Quesillo',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'quesillo',
    receta: 'Leche, sal y cuajo, nada más. La cuajada se amasa en agua caliente hasta formar hebras largas y elásticas. Funde parejo sobre la arepa y el pandebono.',
    resumen: 'Queso de hebra: leche, sal y cuajo.',
    descripcion: 'Quesillo de pasta hilada, elástico y suave, hecho con leche, sal y cuajo.',
    presentacion: '400 g',
    ingredientes: [
      { nombre: 'Leche' },
      { nombre: 'Sal' },
      { nombre: 'Cuajo' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'sun', titulo: 'Para fundir', texto: 'Se derrite parejo en la arepa.' },
      artesanal,
      origen,
      directo,
    ],
  },
  {
    slug: 'yogur-natural-frutas',
    nombre: 'Yogur natural de frutas de temporada',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'botella',
    receta: 'Yogur de leche y cultivos lácteos con un 20 % de mermelada de la fruta de temporada. Bebible y en botella, para la lonchera o la nevera de la casa.',
    resumen: 'Yogur con mermelada de fruta, en botella.',
    descripcion: 'Yogur de fruta de temporada: 80 % yogur de leche y cultivos lácteos y 20 % mermelada de fruta con azúcar.',
    presentacion: 'Botella 1.000 ml (por confirmar)',
    ingredientes: [
      { nombre: 'Yogur', cantidad: '80 %', detalle: 'leche y cultivos lácteos' },
      { nombre: 'Mermelada de fruta de temporada', cantidad: '20 %', detalle: 'fruta y azúcar' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Una vez abierto, consúmase en máximo 5 días.',
    caracteristicas: [
      { icono: 'sun', titulo: 'Fruta de temporada', texto: 'Cambia según la cosecha de la región.' },
      { icono: 'package', titulo: 'En botella', texto: 'Para servir en casa o llevar.' },
      origen,
      directo,
    ],
  },
  {
    slug: 'yogur-griego-artesanal',
    nombre: 'Yogur griego artesanal',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'vaso',
    receta: 'Yogur griego natural hecho solo con leche y cultivos lácteos: espeso, cremoso y con el sabor ácido suave de la leche de montaña. Sin nada más.',
    resumen: 'Yogur griego natural: leche y cultivos.',
    descripcion: 'Yogur griego natural de 200 g, hecho únicamente con leche y cultivos lácteos.',
    presentacion: 'Vaso 200 g',
    ingredientes: [
      { nombre: 'Yogur griego natural', cantidad: '200 g', detalle: 'leche y cultivos lácteos' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado entre 2 °C y 6 °C.',
    caracteristicas: [
      { icono: 'sprout', titulo: 'Solo leche y cultivos', texto: 'Sin ingredientes añadidos.' },
      { icono: 'droplet', titulo: 'Espeso y cremoso', texto: 'Textura de yogur griego.' },
      artesanal,
      directo,
    ],
  },
  {
    slug: 'postres',
    nombre: 'Postres',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'crema',
    receta: 'Yogur griego de leche y cultivos lácteos con mermelada de la fruta de temporada, en vaso individual. Un dulce sencillo para cerrar el almuerzo.',
    resumen: 'Yogur griego con mermelada de fruta.',
    descripcion: 'Postre de 200 g: 150 g de yogur griego y 50 g de mermelada de fruta de temporada.',
    presentacion: 'Vaso 200 g',
    ingredientes: [
      { nombre: 'Yogur griego', cantidad: '150 g', detalle: 'leche y cultivos lácteos' },
      { nombre: 'Mermelada de fruta de temporada', cantidad: '50 g', detalle: 'fruta y azúcar' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'heart', titulo: 'Para el antojo', texto: 'Postre o merienda en un vaso.' },
      { icono: 'sun', titulo: 'Mermelada de temporada', texto: 'Fruta de la región.' },
      artesanal,
      directo,
    ],
  },

  /* =========================== PAL' ARRANQUE · Portables =========================== */
  {
    slug: 'snack-queso-relleno',
    nombre: 'Snack de queso relleno con arequipe o bocadillo',
    linea: 'pal-arranque',
    grupo: 'portables',
    glyph: 'bocadillo',
    receta: 'Quesillo de hebras suaves hecho con leche, sal y cuajo, relleno de arequipe artesanal de leche y azúcar o de dulce de guayaba. Salado por fuera, dulce por dentro, para comer a mitad de la subida.',
    resumen: 'Quesillo relleno, salado y dulce.',
    descripcion: 'Quesillo de 70 g relleno de arequipe artesanal o de dulce de guayaba, en porción individual para llevar en la cangurera.',
    presentacion: 'Quesillo 70 g · con arequipe o con bocadillo',
    ingredientes: [
      { nombre: 'Quesillo', cantidad: '70 g', detalle: 'leche, sal y cuajo' },
      { nombre: 'Dulce de guayaba (bocadillo)', detalle: 'guayaba y azúcar', version: 'Versión con bocadillo' },
      { nombre: 'Arequipe artesanal', cantidad: '30 g', detalle: 'leche y azúcar', version: 'Versión con arequipe' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase en las siguientes 4 horas.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Cabe en la cangurera', texto: 'Porción individual y firme.' },
      { icono: 'heart', titulo: 'Salado y dulce', texto: 'Quesillo y relleno en una sola porción.' },
      artesanal,
      directo,
    ],
    ruta: { momento: 'En el bolsillo', consumo: 'Para llevar', nota: 'Va en la cangurera o en el bolsillo del jersey.' },
  },
  {
    slug: 'snack-panelita-quesillo',
    nombre: 'Snack de panelita de leche con quesillo',
    linea: 'pal-arranque',
    grupo: 'portables',
    glyph: 'arequipe',
    receta: 'Panelita de leche artesanal, hecha con leche y azúcar, junto a hebras de quesillo de leche, sal y cuajo. El dulce de siempre con un toque salado, en porción para el camino.',
    resumen: 'Panelita de leche y quesillo.',
    descripcion: 'Porción de 50 g con panelita de leche artesanal (20 g) y quesillo (30 g), para llevar en el bolsillo del jersey.',
    presentacion: 'Paquete 50 g',
    ingredientes: [
      { nombre: 'Quesillo', cantidad: '30 g', detalle: 'leche, sal y cuajo' },
      { nombre: 'Panelita de leche artesanal', cantidad: '20 g', detalle: 'leche y azúcar' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase en lugar fresco. El quesillo, refrigerado.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Para llevar', texto: 'Porción individual para el bolsillo.' },
      { icono: 'heart', titulo: 'Dulce y salado', texto: 'Panelita de leche con quesillo.' },
      artesanal,
      directo,
    ],
    ruta: { momento: 'En el bolsillo', consumo: 'Para llevar', nota: 'Para la mitad de la subida.' },
  },
  {
    slug: 'doypack-yogur-griego',
    nombre: 'Doypack de yogur griego con frutas de temporada',
    linea: 'pal-arranque',
    grupo: 'portables',
    glyph: 'doypack',
    receta: 'Yogur griego de leche y cultivos lácteos, espeso y cremoso, con mermelada de la fruta de temporada. Viene en doypack con tapa de rosca para tomarlo en marcha.',
    resumen: 'Yogur griego con mermelada, para tomar en marcha.',
    descripcion: 'Doypack de 120 g: 90 g de yogur griego y 30 g de mermelada de fruta de temporada. Cabe en el bolsillo trasero del jersey y se abre con una mano.',
    presentacion: 'Doypack 120 g con tapa',
    ingredientes: [
      { nombre: 'Yogur griego', cantidad: '90 g', detalle: 'leche y cultivos lácteos' },
      { nombre: 'Mermelada de fruta de temporada', cantidad: '30 g', detalle: 'fruta y azúcar' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase el mismo día.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Cabe en el jersey', texto: 'Empaque flexible para el bolsillo trasero.' },
      { icono: 'hand', titulo: 'Se abre con una mano', texto: 'Tapa de rosca, sin detener la marcha.' },
      { icono: 'sun', titulo: 'Fruta de temporada', texto: 'La mermelada cambia con la cosecha.' },
      directo,
    ],
    ruta: { momento: 'En el bolsillo', consumo: 'Para llevar', nota: 'Se compra en el punto de acopio y se toma en la bajada.' },
  },
  {
    slug: 'termo-plegable',
    nombre: 'Termo plegable',
    linea: 'pal-arranque',
    grupo: 'portables',
    glyph: 'termo',
    receta:
      'Termo de silicona reutilizable que se pliega hasta caber en el bolsillo del jersey. Lo llenas con batido o bebida en el punto de acopio y cada recarga suma puntos: menos plástico de un solo uso en la montaña.',
    resumen: 'Reutilizable, plegable y con puntos por cada recarga.',
    descripcion:
      'El termo de la dinámica de puntos de Pal’ Arranque. Se recarga en el punto de acopio de La Feria y cada recarga acumula puntos canjeables.',
    presentacion: 'Termo plegable 500 ml (por confirmar)',
    sello: false,
    ingredientes: [],
    conservacion: 'Lávese con agua tibia y jabón después de cada uso. Apto para bebidas frías.',
    caracteristicas: [
      { icono: 'leaf', titulo: 'Reutilizable', texto: 'Reemplaza vasos y botellas de un solo uso.' },
      { icono: 'pocket', titulo: 'Plegable', texto: 'Vacío, ocupa lo que un celular.' },
      { icono: 'award', titulo: 'Suma puntos', texto: 'Cada recarga en el punto de acopio acumula puntos.' },
      directo,
    ],
    material: {
      material: 'Silicona grado alimenticio, libre de BPA, con tapa hermética de boca ancha (por confirmar).',
      capacidad: '500 ml (por confirmar).',
      dinamica:
        'Cada vez que recargas el termo en el punto de acopio sumas puntos. Los puntos se cambian por productos de la huerta agroecológica o descuentos en el punto de venta (reglas por definir).',
    },
    ruta: { momento: 'En el bolsillo', consumo: 'Para llevar', nota: 'Se recarga en el punto de acopio al final de la ruta.' },
  },

  /* ===================== PAL' ARRANQUE · Para consumo en punto físico ===================== */
  {
    slug: 'batido-smoothie',
    nombre: 'Batido tipo smoothie',
    linea: 'pal-arranque',
    grupo: 'punto-fisico',
    glyph: 'batido',
    receta:
      'Leche fresca o yogur griego batidos al momento con frutas de temporada y un hilo de miel de abejas de la región. Se prepara en la barra del punto de acopio mientras el grupo deja las bicis.',
    resumen: 'Leche o yogur griego, frutas de temporada y miel.',
    descripcion:
      'Batido preparado al momento en la barra del punto de acopio, con leche fresca o yogur griego de La Feria, frutas de temporada y miel. Para recuperar energía al terminar la ruta.',
    presentacion: 'Vaso 350 ml, preparado al momento',
    ingredientes: [
      { nombre: 'Leche entera o yogur griego' },
      { nombre: 'Fruta de temporada' },
      { nombre: 'Miel de abejas' },
    ],
    alergenos: 'Contiene leche.',
    conservacion: 'Consúmase recién preparado.',
    caracteristicas: [
      { icono: 'zap', titulo: 'Para recuperar', texto: 'Leche o yogur griego con fruta, para después de rodar.' },
      { icono: 'sun', titulo: 'Fruta de temporada', texto: 'Lo que esté dando la tierra esa semana.' },
      { icono: 'cup', titulo: 'Hecho al momento', texto: 'Lo prepara una persona de la asociación.' },
      directo,
    ],
    ruta: { momento: 'Tercer tiempo', consumo: 'En el punto de venta', nota: 'Se prepara en la barra del punto de acopio.' },
  },
  {
    slug: 'cuchareable',
    nombre: 'Cuchareable',
    linea: 'pal-arranque',
    grupo: 'punto-fisico',
    glyph: 'cuchara',
    receta: 'Capas de yogur griego, mermelada de fruta de temporada y granola endulzada con miel natural. Se arma al momento, para comer con cuchara sentado con el grupo.',
    resumen: 'Yogur griego, mermelada y granola con miel.',
    descripcion: 'Yogur griego con mermelada de fruta de temporada y granola endulzada con miel natural, servido en el punto de acopio para el tercer tiempo.',
    presentacion: 'Vaso 200 g, servido en el punto de acopio',
    ingredientes: [
      { nombre: 'Yogur griego' },
      { nombre: 'Mermelada de fruta de temporada' },
      { nombre: 'Granola comercial', detalle: 'endulzada con miel natural' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche. La granola comercial puede contener cereales con gluten y frutos secos: revisar su empaque.',
    conservacion: 'Consúmase en el punto de venta.',
    caracteristicas: [
      { icono: 'sprout', titulo: 'Granola con miel natural', texto: 'Crocante y endulzada con miel.' },
      { icono: 'sun', titulo: 'Mermelada de temporada', texto: 'Fruta de la región, cocinada en la finca.' },
      { icono: 'users', titulo: 'Para compartir', texto: 'El tercer tiempo con el grupo.' },
      directo,
    ],
    ruta: { momento: 'Tercer tiempo', consumo: 'En el punto de venta', nota: 'Para la parada, sentado con el grupo.' },
  },
  {
    slug: 'yogur-frutas-temporada',
    nombre: 'Yogur de frutas de temporada',
    linea: 'pal-arranque',
    grupo: 'punto-fisico',
    glyph: 'vaso',
    receta: 'Yogur de leche y cultivos lácteos con mermelada de fruta de temporada, servido frío en vaso ecológico de presentación personal.',
    resumen: 'Yogur con mermelada, en vaso ecológico.',
    descripcion: 'Yogur de fruta de temporada: 80 % yogur de leche y cultivos lácteos y 20 % mermelada de fruta con azúcar, en vaso ecológico para la parada.',
    presentacion: 'Vaso ecológico 200 g, presentación personal',
    ingredientes: [
      { nombre: 'Yogur', cantidad: '80 %', detalle: 'leche y cultivos lácteos' },
      { nombre: 'Mermelada de fruta de temporada', cantidad: '20 %', detalle: 'fruta y azúcar' },
    ],
    ingredientesConfirmados: true,
    alergenos: 'Contiene leche.',
    conservacion: 'Consúmase en el punto de venta.',
    caracteristicas: [
      { icono: 'droplet', titulo: 'Frío y fresco', texto: 'Después de la subida.' },
      { icono: 'leaf', titulo: 'Vaso ecológico', texto: 'Presentación personal sin plástico de un solo uso.' },
      origen,
      directo,
    ],
    ruta: { momento: 'Tercer tiempo', consumo: 'En el punto de venta', nota: 'Se sirve frío en el punto de acopio.' },
  },
];

export const lineaPorKey = Object.fromEntries(lineas.map((l) => [l.key, l])) as Record<LineaKey, Linea>;
export const grupoPorKey = Object.fromEntries(grupos.map((g) => [g.key, g])) as Record<GrupoKey, Grupo>;

export function productosDeLinea(key: LineaKey) {
  return productos.filter((p) => p.linea === key);
}

export function productosDeGrupo(key: GrupoKey) {
  return productos.filter((p) => p.grupo === key);
}

export function esPalArranque(p: Producto) {
  return p.linea === 'pal-arranque';
}

export function productoUrl(p: Producto) {
  return `/productos/${p.slug}`;
}
