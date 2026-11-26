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
  /** Composición o aclaración, p. ej. "leche entera, cultivos lácticos". */
  detalle?: string;
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
    receta:
      'Leche del ordeño de la mañana, cuajada y prensada a mano como se ha hecho siempre en La Feria. Fresco, suave y con el punto justo de sal para la arepa, el chocolate o el desayuno.',
    resumen: 'Fresco y suave, en 1.000 g y 400 g.',
    descripcion: 'Queso fresco de receta campesina, hecho en La Feria con leche del día.',
    presentacion: 'Bloque 1.000 g · 400 g',
    ingredientes: [
      { nombre: 'Leche entera' },
      { nombre: 'Sal' },
      { nombre: 'Cuajo' },
      { nombre: 'Cloruro de calcio' },
    ],
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Consúmase en máximo 8 días.',
    caracteristicas: [
      { icono: 'users', titulo: 'Saber campesino', texto: 'Receta que pasa de una generación a otra.' },
      { icono: 'package', titulo: 'Dos tamaños', texto: '1.000 g para la familia, 400 g para la semana.' },
      origen,
      directo,
    ],
  },
  {
    slug: 'quesillo',
    nombre: 'Quesillo',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'quesillo',
    receta:
      'Queso especial de pasta hilada: la cuajada se amasa en agua caliente hasta formar hebras largas y elásticas. Funde parejo sobre la arepa y el pandebono.',
    resumen: 'Queso especial de hebra, 400 g.',
    descripcion: 'Quesillo de pasta hilada, elástico y suave, hecho a mano en La Feria.',
    presentacion: '400 g',
    ingredientes: [
      { nombre: 'Leche entera' },
      { nombre: 'Sal' },
      { nombre: 'Cuajo' },
      { nombre: 'Cloruro de calcio' },
    ],
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
    receta:
      'Yogur fermentado lentamente con la leche de las 30 familias y pulpa de fruta de temporada. Bebible y en botella, para la lonchera o la nevera de la casa.',
    resumen: 'Bebible, en botella.',
    descripcion: 'Yogur natural con fruta de temporada, en botella para toda la familia.',
    presentacion: 'Botella 1.000 ml (por confirmar)',
    ingredientes: [
      { nombre: 'Leche entera' },
      { nombre: 'Pulpa de fruta de temporada' },
      { nombre: 'Azúcar' },
      { nombre: 'Cultivos lácticos' },
    ],
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
    receta:
      'Yogur colado en tela durante horas hasta quedar espeso y cremoso, sin azúcar añadida. Alto en proteína y con el sabor ácido suave de la leche de montaña.',
    resumen: 'Espeso, natural y alto en proteína.',
    descripcion: 'Yogur colado de textura espesa, sin azúcar añadida.',
    presentacion: 'Vaso 150 g',
    ingredientes: [
      { nombre: 'Leche entera' },
      { nombre: 'Cultivos lácticos' },
    ],
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado entre 2 °C y 6 °C.',
    caracteristicas: [
      { icono: 'zap', titulo: 'Alto en proteína', texto: 'Casi el triple que un yogur tradicional.' },
      { icono: 'sprout', titulo: 'Sin azúcar añadida', texto: 'Solo leche y cultivos.' },
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
    receta:
      'Yogur griego con mermelada de fruta de temporada cocinada en la finca, en vaso individual. Un dulce sencillo para cerrar el almuerzo.',
    resumen: 'Yogur griego con mermelada de fruta.',
    descripcion: 'Postre de yogur griego con mermelada de fruta de temporada, en vaso individual.',
    presentacion: 'Vaso 150 g',
    ingredientes: [
      { nombre: 'Yogur griego', detalle: 'leche entera, cultivos lácticos' },
      { nombre: 'Mermelada de fruta de temporada', detalle: 'fruta, azúcar' },
    ],
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
    receta:
      'Queso campesino prensado a mano con la leche del ordeño de la mañana, con un corazón de arequipe cremoso o de bocadillo de guayaba. Salado por fuera, dulce por dentro, en un empaque que no se aplasta en la cangurera.',
    resumen: 'Salado y dulce para la mitad de la subida.',
    descripcion:
      'Queso campesino relleno de arequipe o de bocadillo de guayaba, en porción individual para llevar. El sodio del queso y el azúcar del relleno dan energía rápida en la ruta.',
    presentacion: 'Paquete 40 g · con arequipe o con bocadillo',
    ingredientes: [
      { nombre: 'Queso campesino', detalle: 'leche entera, sal, cuajo' },
      { nombre: 'Relleno a elegir', detalle: 'arequipe (leche, azúcar) o bocadillo de guayaba (pulpa de guayaba, azúcar)' },
    ],
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase en las siguientes 4 horas.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Cabe en la cangurera', texto: 'Empaque firme que no se aplasta.' },
      { icono: 'zap', titulo: 'Salado y dulce', texto: 'Sodio y energía rápida en una porción.' },
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
    receta:
      'Panelita de leche cocida a fuego lento con panela, como se hace en las cocinas de la vereda, acompañada de hebras de quesillo suave. El dulce de siempre, en porción para el camino.',
    resumen: 'El dulce de la finca con quesillo.',
    descripcion:
      'Panelita de leche hecha con leche de La Feria y panela, acompañada de quesillo en hebras. Carbohidrato para seguir pedaleando y un toque salado.',
    presentacion: 'Paquete 40 g',
    ingredientes: [
      { nombre: 'Leche entera' },
      { nombre: 'Panela' },
      { nombre: 'Quesillo', detalle: 'leche entera, sal, cuajo' },
    ],
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase en lugar fresco. El quesillo, refrigerado.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Para llevar', texto: 'Porción individual para el bolsillo.' },
      { icono: 'zap', titulo: 'Energía para subir', texto: 'Carbohidrato de la panela y la leche.' },
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
    receta:
      'Yogur griego colado lentamente hasta quedar espeso, mezclado con pulpa de las frutas que estén dando las fincas esa semana. Viene con tapa de rosca para tomarlo en marcha.',
    resumen: 'Yogur griego para tomar sin bajarse de la bici.',
    descripcion:
      'Yogur griego con fruta de temporada en doypack con tapa. Cabe en el bolsillo trasero del jersey y se abre con una mano.',
    presentacion: 'Doypack 150 g con tapa',
    ingredientes: [
      { nombre: 'Yogur griego', detalle: 'leche entera, cultivos lácticos' },
      { nombre: 'Pulpa de fruta de temporada' },
      { nombre: 'Miel de abejas' },
    ],
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase el mismo día.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Cabe en el jersey', texto: 'Empaque flexible para el bolsillo trasero.' },
      { icono: 'hand', titulo: 'Se abre con una mano', texto: 'Tapa de rosca, sin detener la marcha.' },
      { icono: 'zap', titulo: '10,5 g de proteína', texto: 'Por doypack.' },
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
      { icono: 'zap', titulo: '21 g de proteína', texto: 'Por vaso, para recuperar después de rodar.' },
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
    receta:
      'Capas de yogur griego, mermelada de fruta de temporada hecha en la finca, granola crocante y miel. Se arma al momento, para comer con cuchara sentado con el grupo.',
    resumen: 'Yogur griego, mermelada de temporada, granola y miel.',
    descripcion:
      'Yogur griego con mermelada de fruta de temporada, granola y miel, servido en el punto de acopio. Proteína y carbohidrato para el tercer tiempo.',
    presentacion: 'Vaso 200 g, servido en el punto de acopio',
    ingredientes: [
      { nombre: 'Yogur griego' },
      { nombre: 'Mermelada de fruta de temporada' },
      { nombre: 'Granola comercial' },
      { nombre: 'Miel de abejas' },
    ],
    alergenos: 'Contiene leche y avena. Puede contener trazas de frutos secos.',
    conservacion: 'Consúmase en el punto de venta.',
    caracteristicas: [
      { icono: 'zap', titulo: '15 g de proteína', texto: 'Por porción, gracias al yogur griego.' },
      { icono: 'sprout', titulo: 'Granola y miel', texto: 'Energía que dura el resto del día.' },
      { icono: 'sun', titulo: 'Mermelada de temporada', texto: 'Fruta de la región, cocinada en la finca.' },
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
    receta:
      'Yogur natural fermentado en la asociación con trozos de fruta de temporada, servido frío en vaso ecológico de presentación personal.',
    resumen: 'Presentación personal, en vaso ecológico.',
    descripcion:
      'Yogur con frutas de temporada servido frío en vaso ecológico, para tomar en la parada mientras el grupo se reagrupa.',
    presentacion: 'Vaso ecológico 200 g, presentación personal',
    ingredientes: [
      { nombre: 'Yogur natural', detalle: 'leche entera, cultivos lácticos' },
      { nombre: 'Fruta de temporada' },
      { nombre: 'Azúcar' },
    ],
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
