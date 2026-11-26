/**
 * Portafolio de AGROFERIA (versión de la diseñadora, 25 nov. 2026).
 *
 * Dos líneas:
 *   · Pal' Arranque (azul) → Portables y Para consumo en punto físico.
 *   · Agroferia Tradicional (naranja).
 *
 * ⚠️ DATOS TEMPORALES: presentaciones, porciones, materiales e información
 * nutricional son valores de referencia para la maqueta. Reemplazar por los
 * datos reales de etiqueta antes de publicar.
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
    key: 'pal-arranque',
    nombre: "Pal' Arranque",
    descripcion:
      'La línea para ciclistas de montaña: energía de origen para llevar en la rodada y para el tercer tiempo en el punto de acopio.',
  },
  {
    key: 'tradicional',
    nombre: 'Agroferia Tradicional',
    descripcion:
      'Quesos, yogures y postres de siempre, hechos a mano con la leche de las 30 familias de La Feria.',
  },
];

export const grupos: Grupo[] = [
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
  {
    key: 'tradicional',
    linea: 'tradicional',
    nombre: 'Agroferia Tradicional',
    descripcion: 'Quesos, yogures y postres artesanales para la mesa de la casa.',
  },
];

export interface FilaNutricional {
  nutriente: string;
  por100: string;
  porPorcion: string;
  destacado?: boolean;
}

export interface Caracteristica {
  icono: IconName;
  titulo: string;
  texto: string;
}

export type EtiquetaArtesanal = '100% Artesanal' | 'Producto Artesanal' | 'Edición Especial · Ecológico';

export interface Producto {
  slug: string;
  nombre: string;
  linea: LineaKey;
  grupo: GrupoKey;
  glyph: GlyphName;
  etiqueta: EtiquetaArtesanal;
  /** Párrafo de receta e ingredientes que va en la tarjeta. */
  receta: string;
  resumen: string;
  descripcion: string;
  presentacion: string;
  ingredientes: string;
  alergenos?: string;
  conservacion: string;
  caracteristicas: Caracteristica[];
  /** Ausente en productos no alimenticios (termo). */
  nutricion?: {
    porcion: string;
    base: '100 g' | '100 ml';
    filas: FilaNutricional[];
  };
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

/** Atajo para construir la tabla nutricional en el mismo orden siempre. */
function tabla(
  porcion: string,
  base: '100 g' | '100 ml',
  v: [number, number, number, number, number, number, number, number, number],
  factor: number,
): Producto['nutricion'] {
  const [kcal, grasa, sat, carb, azuc, anad, prot, sodio, calcio] = v;
  const r = (n: number, d = 1) => {
    const x = Math.round(n * factor * 10 ** d) / 10 ** d;
    return x.toLocaleString('es-CO', { maximumFractionDigits: d });
  };
  const f = (n: number, d = 1) => n.toLocaleString('es-CO', { maximumFractionDigits: d });
  return {
    porcion,
    base,
    filas: [
      { nutriente: 'Calorías (kcal)', por100: f(kcal, 0), porPorcion: r(kcal, 0), destacado: true },
      { nutriente: 'Grasa total', por100: `${f(grasa)} g`, porPorcion: `${r(grasa)} g` },
      { nutriente: 'Grasa saturada', por100: `${f(sat)} g`, porPorcion: `${r(sat)} g`, destacado: true },
      { nutriente: 'Carbohidratos totales', por100: `${f(carb)} g`, porPorcion: `${r(carb)} g` },
      { nutriente: 'Azúcares totales', por100: `${f(azuc)} g`, porPorcion: `${r(azuc)} g` },
      { nutriente: 'Azúcares añadidos', por100: `${f(anad)} g`, porPorcion: `${r(anad)} g`, destacado: true },
      { nutriente: 'Proteína', por100: `${f(prot)} g`, porPorcion: `${r(prot)} g`, destacado: true },
      { nutriente: 'Sodio', por100: `${f(sodio, 0)} mg`, porPorcion: `${r(sodio, 0)} mg`, destacado: true },
      { nutriente: 'Calcio', por100: `${f(calcio, 0)} mg`, porPorcion: `${r(calcio, 0)} mg` },
    ],
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
  /* =========================== PAL' ARRANQUE · Portables =========================== */
  {
    slug: 'snack-queso-relleno',
    nombre: 'Snack de queso relleno con arequipe o bocadillo',
    linea: 'pal-arranque',
    grupo: 'portables',
    glyph: 'bocadillo',
    etiqueta: '100% Artesanal',
    receta:
      'Queso campesino prensado a mano con la leche del ordeño de la mañana, con un corazón de arequipe cremoso o de bocadillo de guayaba. Salado por fuera, dulce por dentro, en un empaque que no se aplasta en la cangurera.',
    resumen: 'Salado y dulce para la mitad de la subida.',
    descripcion:
      'Queso campesino relleno de arequipe o de bocadillo de guayaba, en porción individual para llevar. El sodio del queso y el azúcar del relleno dan energía rápida en la ruta.',
    presentacion: 'Paquete 40 g · con arequipe o con bocadillo',
    ingredientes: 'Queso campesino (leche entera, sal, cuajo), arequipe (leche, azúcar) o bocadillo de guayaba (pulpa de guayaba, azúcar).',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase en las siguientes 4 horas.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Cabe en la cangurera', texto: 'Empaque firme que no se aplasta.' },
      { icono: 'zap', titulo: 'Salado y dulce', texto: 'Sodio y energía rápida en una porción.' },
      artesanal,
      directo,
    ],
    nutricion: tabla('40 g', '100 g', [290, 13, 8.5, 30, 27, 21, 14, 300, 450], 0.4),
    ruta: { momento: 'En el bolsillo', consumo: 'Para llevar', nota: 'Va en la cangurera o en el bolsillo del jersey.' },
  },
  {
    slug: 'snack-panelita-quesillo',
    nombre: 'Snack de panelita de leche con quesillo',
    linea: 'pal-arranque',
    grupo: 'portables',
    glyph: 'arequipe',
    etiqueta: 'Producto Artesanal',
    receta:
      'Panelita de leche cocida a fuego lento con panela, como se hace en las cocinas de la vereda, acompañada de hebras de quesillo suave. El dulce de siempre, en porción para el camino.',
    resumen: 'El dulce de la finca con quesillo.',
    descripcion:
      'Panelita de leche hecha con leche de La Feria y panela, acompañada de quesillo en hebras. Carbohidrato para seguir pedaleando y un toque salado.',
    presentacion: 'Paquete 40 g',
    ingredientes: 'Leche entera, panela, quesillo (leche entera, sal, cuajo).',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase en lugar fresco. El quesillo, refrigerado.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Para llevar', texto: 'Porción individual para el bolsillo.' },
      { icono: 'zap', titulo: 'Energía para subir', texto: 'Carbohidrato de la panela y la leche.' },
      artesanal,
      directo,
    ],
    nutricion: tabla('40 g', '100 g', [360, 10, 6.5, 52, 46, 38, 11, 210, 300], 0.4),
    ruta: { momento: 'En el bolsillo', consumo: 'Para llevar', nota: 'Para la mitad de la subida.' },
  },
  {
    slug: 'doypack-yogur-griego',
    nombre: 'Doypack de yogur griego con frutas de temporada',
    linea: 'pal-arranque',
    grupo: 'portables',
    glyph: 'doypack',
    etiqueta: '100% Artesanal',
    receta:
      'Yogur griego colado lentamente hasta quedar espeso, mezclado con pulpa de las frutas que estén dando las fincas esa semana. Viene con tapa de rosca para tomarlo en marcha.',
    resumen: 'Yogur griego para tomar sin bajarse de la bici.',
    descripcion:
      'Yogur griego con fruta de temporada en doypack con tapa. Cabe en el bolsillo trasero del jersey y se abre con una mano.',
    presentacion: 'Doypack 150 g con tapa',
    ingredientes: 'Yogur griego (leche entera, cultivos lácticos), pulpa de fruta de temporada, miel de abejas.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase el mismo día.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Cabe en el jersey', texto: 'Empaque flexible para el bolsillo trasero.' },
      { icono: 'hand', titulo: 'Se abre con una mano', texto: 'Tapa de rosca, sin detener la marcha.' },
      { icono: 'zap', titulo: '10,5 g de proteína', texto: 'Por doypack.' },
      directo,
    ],
    nutricion: tabla('150 g', '100 g', [105, 4, 2.6, 11, 10, 4, 7, 40, 105], 1.5),
    ruta: { momento: 'En el bolsillo', consumo: 'Para llevar', nota: 'Se compra en el punto de acopio y se toma en la bajada.' },
  },
  {
    slug: 'termo-plegable',
    nombre: 'Termo plegable',
    linea: 'pal-arranque',
    grupo: 'portables',
    glyph: 'termo',
    etiqueta: 'Edición Especial · Ecológico',
    receta:
      'Termo de silicona reutilizable que se pliega hasta caber en el bolsillo del jersey. Lo llenas con batido o bebida en el punto de acopio y cada recarga suma puntos: menos plástico de un solo uso en la montaña.',
    resumen: 'Reutilizable, plegable y con puntos por cada recarga.',
    descripcion:
      'El termo de la dinámica de puntos de Pal’ Arranque. Se recarga en el punto de acopio de La Feria y cada recarga acumula puntos canjeables.',
    presentacion: 'Termo plegable 500 ml (por confirmar)',
    ingredientes: 'No aplica.',
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
    etiqueta: '100% Artesanal',
    receta:
      'Leche fresca o yogur griego batidos al momento con frutas de temporada y un hilo de miel de abejas de la región. Se prepara en la barra del punto de acopio mientras el grupo deja las bicis.',
    resumen: 'Leche o yogur griego, frutas de temporada y miel.',
    descripcion:
      'Batido preparado al momento en la barra del punto de acopio, con leche fresca o yogur griego de La Feria, frutas de temporada y miel. Para recuperar energía al terminar la ruta.',
    presentacion: 'Vaso 350 ml, preparado al momento',
    ingredientes: 'Leche entera o yogur griego, fruta de temporada, miel de abejas.',
    alergenos: 'Contiene leche.',
    conservacion: 'Consúmase recién preparado.',
    caracteristicas: [
      { icono: 'zap', titulo: '21 g de proteína', texto: 'Por vaso, para recuperar después de rodar.' },
      { icono: 'sun', titulo: 'Fruta de temporada', texto: 'Lo que esté dando la tierra esa semana.' },
      { icono: 'cup', titulo: 'Hecho al momento', texto: 'Lo prepara una persona de la asociación.' },
      directo,
    ],
    nutricion: tabla('350 ml', '100 ml', [92, 1.8, 1.1, 13.5, 12, 3, 6, 50, 130], 3.5),
    ruta: { momento: 'Tercer tiempo', consumo: 'En el punto de venta', nota: 'Se prepara en la barra del punto de acopio.' },
  },
  {
    slug: 'cuchareable',
    nombre: 'Cuchareable',
    linea: 'pal-arranque',
    grupo: 'punto-fisico',
    glyph: 'cuchara',
    etiqueta: 'Producto Artesanal',
    receta:
      'Capas de yogur griego, mermelada de fruta de temporada hecha en la finca, granola crocante y miel. Se arma al momento, para comer con cuchara sentado con el grupo.',
    resumen: 'Yogur griego, mermelada de temporada, granola y miel.',
    descripcion:
      'Yogur griego con mermelada de fruta de temporada, granola y miel, servido en el punto de acopio. Proteína y carbohidrato para el tercer tiempo.',
    presentacion: 'Vaso 200 g, servido en el punto de acopio',
    ingredientes: 'Yogur griego, mermelada de fruta de temporada, granola comercial, miel de abejas.',
    alergenos: 'Contiene leche y avena. Puede contener trazas de frutos secos.',
    conservacion: 'Consúmase en el punto de venta.',
    caracteristicas: [
      { icono: 'zap', titulo: '15 g de proteína', texto: 'Por porción, gracias al yogur griego.' },
      { icono: 'sprout', titulo: 'Granola y miel', texto: 'Energía que dura el resto del día.' },
      { icono: 'sun', titulo: 'Mermelada de temporada', texto: 'Fruta de la región, cocinada en la finca.' },
      directo,
    ],
    nutricion: tabla('200 g', '100 g', [150, 5.5, 3, 18, 12, 6, 7.5, 45, 100], 2),
    ruta: { momento: 'Tercer tiempo', consumo: 'En el punto de venta', nota: 'Para la parada, sentado con el grupo.' },
  },
  {
    slug: 'yogur-frutas-temporada',
    nombre: 'Yogur de frutas de temporada',
    linea: 'pal-arranque',
    grupo: 'punto-fisico',
    glyph: 'vaso',
    etiqueta: '100% Artesanal',
    receta:
      'Yogur natural fermentado en la asociación con trozos de fruta de temporada, servido frío en vaso ecológico de presentación personal.',
    resumen: 'Presentación personal, en vaso ecológico.',
    descripcion:
      'Yogur con frutas de temporada servido frío en vaso ecológico, para tomar en la parada mientras el grupo se reagrupa.',
    presentacion: 'Vaso ecológico 200 g, presentación personal',
    ingredientes: 'Yogur natural (leche entera, cultivos lácticos), fruta de temporada, azúcar.',
    alergenos: 'Contiene leche.',
    conservacion: 'Consúmase en el punto de venta.',
    caracteristicas: [
      { icono: 'droplet', titulo: 'Frío y fresco', texto: 'Después de la subida.' },
      { icono: 'leaf', titulo: 'Vaso ecológico', texto: 'Presentación personal sin plástico de un solo uso.' },
      origen,
      directo,
    ],
    nutricion: tabla('200 g', '100 g', [88, 2.6, 1.7, 13, 12, 6, 3.4, 48, 110], 2),
    ruta: { momento: 'Tercer tiempo', consumo: 'En el punto de venta', nota: 'Se sirve frío en el punto de acopio.' },
  },

  /* ============================== AGROFERIA TRADICIONAL ============================== */
  {
    slug: 'queso-campesino',
    nombre: 'Queso campesino',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'campesino',
    etiqueta: '100% Artesanal',
    receta:
      'Leche del ordeño de la mañana, cuajada y prensada a mano como se ha hecho siempre en La Feria. Fresco, suave y con el punto justo de sal para la arepa, el chocolate o el desayuno.',
    resumen: 'Fresco y suave, en 1.000 g y 400 g.',
    descripcion: 'Queso fresco de receta campesina, hecho en La Feria con leche del día.',
    presentacion: 'Bloque 1.000 g · 400 g',
    ingredientes: 'Leche entera, sal, cuajo, cloruro de calcio.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Consúmase en máximo 8 días.',
    caracteristicas: [
      { icono: 'users', titulo: 'Saber campesino', texto: 'Receta que pasa de una generación a otra.' },
      { icono: 'package', titulo: 'Dos tamaños', texto: '1.000 g para la familia, 400 g para la semana.' },
      origen,
      directo,
    ],
    nutricion: tabla('30 g', '100 g', [264, 20, 12.5, 2.5, 0.5, 0, 18, 560, 500], 0.3),
  },
  {
    slug: 'quesillo',
    nombre: 'Quesillo',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'quesillo',
    etiqueta: 'Producto Artesanal',
    receta:
      'Queso especial de pasta hilada: la cuajada se amasa en agua caliente hasta formar hebras largas y elásticas. Funde parejo sobre la arepa y el pandebono.',
    resumen: 'Queso especial de hebra, 400 g.',
    descripcion: 'Quesillo de pasta hilada, elástico y suave, hecho a mano en La Feria.',
    presentacion: '400 g',
    ingredientes: 'Leche entera, sal, cuajo, cloruro de calcio.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'sun', titulo: 'Para fundir', texto: 'Se derrite parejo en la arepa.' },
      artesanal,
      origen,
      directo,
    ],
    nutricion: tabla('30 g', '100 g', [280, 21, 13, 2, 0.5, 0, 21, 480, 520], 0.3),
  },
  {
    slug: 'yogur-natural-frutas',
    nombre: 'Yogur natural de frutas de temporada',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'botella',
    etiqueta: '100% Artesanal',
    receta:
      'Yogur fermentado lentamente con la leche de las 30 familias y pulpa de fruta de temporada. Bebible y en botella, para la lonchera o la nevera de la casa.',
    resumen: 'Bebible, en botella.',
    descripcion: 'Yogur natural con fruta de temporada, en botella para toda la familia.',
    presentacion: 'Botella 1.000 ml (por confirmar)',
    ingredientes: 'Leche entera, pulpa de fruta de temporada, azúcar, cultivos lácticos.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Una vez abierto, consúmase en máximo 5 días.',
    caracteristicas: [
      { icono: 'sun', titulo: 'Fruta de temporada', texto: 'Cambia según la cosecha de la región.' },
      { icono: 'package', titulo: 'En botella', texto: 'Para servir en casa o llevar.' },
      origen,
      directo,
    ],
    nutricion: tabla('200 ml', '100 ml', [78, 2.4, 1.5, 11.5, 10.5, 5, 3, 46, 105], 2),
  },
  {
    slug: 'yogur-griego-artesanal',
    nombre: 'Yogur griego artesanal',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'vaso',
    etiqueta: '100% Artesanal',
    receta:
      'Yogur colado en tela durante horas hasta quedar espeso y cremoso, sin azúcar añadida. Alto en proteína y con el sabor ácido suave de la leche de montaña.',
    resumen: 'Espeso, natural y alto en proteína.',
    descripcion: 'Yogur colado de textura espesa, sin azúcar añadida.',
    presentacion: 'Vaso 150 g',
    ingredientes: 'Leche entera, cultivos lácticos.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado entre 2 °C y 6 °C.',
    caracteristicas: [
      { icono: 'zap', titulo: 'Alto en proteína', texto: 'Casi el triple que un yogur tradicional.' },
      { icono: 'sprout', titulo: 'Sin azúcar añadida', texto: 'Solo leche y cultivos.' },
      artesanal,
      directo,
    ],
    nutricion: tabla('150 g', '100 g', [97, 5, 3.2, 4, 4, 0, 9, 36, 110], 1.5),
  },
  {
    slug: 'postres',
    nombre: 'Postres',
    linea: 'tradicional',
    grupo: 'tradicional',
    glyph: 'crema',
    etiqueta: 'Producto Artesanal',
    receta:
      'Yogur griego con mermelada de fruta de temporada cocinada en la finca, en vaso individual. Un dulce sencillo para cerrar el almuerzo.',
    resumen: 'Yogur griego con mermelada de fruta.',
    descripcion: 'Postre de yogur griego con mermelada de fruta de temporada, en vaso individual.',
    presentacion: 'Vaso 150 g',
    ingredientes: 'Yogur griego (leche entera, cultivos lácticos), mermelada de fruta de temporada (fruta, azúcar).',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'heart', titulo: 'Para el antojo', texto: 'Postre o merienda en un vaso.' },
      { icono: 'sun', titulo: 'Mermelada de temporada', texto: 'Fruta de la región.' },
      artesanal,
      directo,
    ],
    nutricion: tabla('150 g', '100 g', [128, 4, 2.6, 17, 16, 10, 6.5, 38, 100], 1.5),
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
