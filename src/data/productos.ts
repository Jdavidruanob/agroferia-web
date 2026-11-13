/**
 * Catálogo base de AGROFERIA.
 *
 * ⚠️ DATOS TEMPORALES: descripciones, presentaciones, porciones e información
 * nutricional son valores de referencia inventados para la maqueta. Deben
 * reemplazarse por los datos reales de laboratorio/etiqueta antes de publicar.
 */
import type { GlyphName, IconName } from '../components/icons';

export type CategoriaKey = 'leches' | 'bebidas' | 'snacks' | 'pal-arranque' | 'postres';

export interface Categoria {
  key: CategoriaKey;
  nombre: string;
  descripcion: string;
  /** Color sólido del panel de detalle (siempre de la paleta del logo). */
  color: string;
}

/** Orden tomado del cuaderno del cliente. */
export const categorias: Categoria[] = [
  {
    key: 'leches',
    nombre: 'Leches',
    descripcion: 'Leche de montaña, ordeñada en las fincas de La Feria y acopiada en frío el mismo día.',
    color: '#13699a',
  },
  {
    key: 'bebidas',
    nombre: 'Bebidas y alimentos lácteos',
    descripcion: 'Yogures, bebidas y quesos hechos con la leche de las 30 familias asociadas.',
    color: '#0e5f36',
  },
  {
    key: 'snacks',
    nombre: 'Snacks',
    descripcion: 'Queso campesino con lo dulce de siempre, en porciones para llevar.',
    color: '#5f4210',
  },
  {
    key: 'pal-arranque',
    nombre: "Pal' Arranque",
    descripcion: 'La línea para ciclistas: energía de origen para antes, durante y después de la rodada.',
    color: '#093723',
  },
  {
    key: 'postres',
    nombre: 'Postres',
    descripcion: 'Algo dulce para cerrar la comida o el día, con fruta de temporada.',
    color: '#2b6f37',
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

export interface Producto {
  slug: string;
  nombre: string;
  categorias: CategoriaKey[];
  glyph: GlyphName;
  resumen: string;
  descripcion: string;
  presentacion: string;
  porcion: string;
  /** Unidad base de la tabla: "100 g" o "100 ml". */
  base: '100 g' | '100 ml';
  ingredientes: string;
  alergenos: string;
  conservacion: string;
  caracteristicas: Caracteristica[];
  nutricion: FilaNutricional[];
  /** Solo productos Pal' Arranque. */
  ruta?: {
    momento: 'Antes de salir' | 'En el bolsillo' | 'Tercer tiempo';
    consumo: 'Para llevar' | 'En el punto de venta';
    nota: string;
  };
}

/** Atajo para construir la tabla nutricional en el mismo orden siempre. */
function tabla(
  base: [number, number, number, number, number, number, number, number, number],
  factor: number,
): FilaNutricional[] {
  const [kcal, grasa, sat, carb, azuc, anad, prot, sodio, calcio] = base;
  const r = (n: number, d = 1) => {
    const v = Math.round(n * factor * 10 ** d) / 10 ** d;
    return v.toLocaleString('es-CO', { maximumFractionDigits: d });
  };
  const f = (n: number, d = 1) => n.toLocaleString('es-CO', { maximumFractionDigits: d });
  return [
    { nutriente: 'Calorías (kcal)', por100: f(kcal, 0), porPorcion: r(kcal, 0), destacado: true },
    { nutriente: 'Grasa total', por100: `${f(grasa)} g`, porPorcion: `${r(grasa)} g` },
    { nutriente: 'Grasa saturada', por100: `${f(sat)} g`, porPorcion: `${r(sat)} g`, destacado: true },
    { nutriente: 'Carbohidratos totales', por100: `${f(carb)} g`, porPorcion: `${r(carb)} g` },
    { nutriente: 'Azúcares totales', por100: `${f(azuc)} g`, porPorcion: `${r(azuc)} g` },
    { nutriente: 'Azúcares añadidos', por100: `${f(anad)} g`, porPorcion: `${r(anad)} g`, destacado: true },
    { nutriente: 'Proteína', por100: `${f(prot)} g`, porPorcion: `${r(prot)} g`, destacado: true },
    { nutriente: 'Sodio', por100: `${f(sodio, 0)} mg`, porPorcion: `${r(sodio, 0)} mg`, destacado: true },
    { nutriente: 'Calcio', por100: `${f(calcio, 0)} mg`, porPorcion: `${r(calcio, 0)} mg` },
  ];
}

const origen: Caracteristica = {
  icono: 'map-pin',
  titulo: 'Origen La Feria',
  texto: 'Leche de fincas entre 1.600 y 2.200 m s. n. m., en Pradera, Valle del Cauca.',
};
const frio: Caracteristica = {
  icono: 'snowflake',
  titulo: 'Acopio en frío solar',
  texto: 'El tanque del centro de acopio se mantiene frío con energía fotovoltaica.',
};
const directo: Caracteristica = {
  icono: 'scale',
  titulo: 'Sin intermediarios',
  texto: 'Lo que pagas llega a las familias que producen.',
};

export const productos: Producto[] = [
  /* ---------------------------------- Leches --------------------------------- */
  {
    slug: 'leche-normal',
    nombre: 'Leche normal',
    categorias: ['leches'],
    glyph: 'litro',
    resumen: 'Leche entera pasteurizada.',
    descripcion:
      'Leche entera pasteurizada de las fincas asociadas de La Feria, para el consumo de todos los días en casa: el café con leche, el chocolate y las recetas de la familia.',
    presentacion: 'Bolsa 1 L',
    porcion: '200 ml',
    base: '100 ml',
    ingredientes: 'Leche entera de vaca pasteurizada.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerada entre 2 °C y 6 °C. Una vez abierta, consúmase en máximo 3 días.',
    caracteristicas: [
      origen,
      frio,
      { icono: 'shield', titulo: 'Pasteurizada', texto: 'Lista para tomar en casa.' },
      directo,
    ],
    nutricion: tabla([60, 3, 1.9, 4.7, 4.7, 0, 3, 44, 112], 2),
  },
  {
    slug: 'leche-fresca',
    nombre: 'Leche fresca',
    categorias: ['leches'],
    glyph: 'botella',
    resumen: 'Leche entera de montaña.',
    descripcion:
      'Leche entera ordeñada en las fincas asociadas de La Feria y llevada al centro de acopio en frío el mismo día. Pastos de ladera, agua del río Bolo Azul y vacas con sombra en sistemas silvopastoriles.',
    presentacion: 'Bolsa 1 L',
    porcion: '200 ml',
    base: '100 ml',
    ingredientes: 'Leche entera de vaca.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerada entre 2 °C y 6 °C. Una vez abierta, consúmase en máximo 3 días.',
    caracteristicas: [
      origen,
      frio,
      { icono: 'leaf', titulo: 'Ganadería con sombra', texto: 'El 99 % de las fincas asociadas tiene sistemas silvopastoriles.' },
      directo,
    ],
    nutricion: tabla([61, 3.2, 1.9, 4.7, 4.7, 0, 3.1, 45, 113], 2),
  },

  /* ------------------------ Bebidas y alimentos lácteos ----------------------- */
  {
    slug: 'yogurt-natural',
    nombre: 'Yogurt natural',
    categorias: ['bebidas'],
    glyph: 'litro',
    resumen: 'En vaso y en litro.',
    descripcion:
      'Yogurt natural sin azúcar añadida, fermentado con leche de La Feria. Para tomar solo, con fruta o como base de batidos.',
    presentacion: 'Vaso 200 g · Litro 1.000 g',
    porcion: '200 g',
    base: '100 g',
    ingredientes: 'Leche entera, cultivos lácticos.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Una vez abierto, consúmase en máximo 5 días.',
    caracteristicas: [
      { icono: 'sprout', titulo: 'Sin azúcar añadida', texto: 'Solo leche y cultivos lácticos.' },
      { icono: 'package', titulo: 'Dos tamaños', texto: 'Vaso individual o litro para la familia.' },
      origen,
      directo,
    ],
    nutricion: tabla([63, 3, 1.9, 5.5, 5.5, 0, 3.4, 48, 120], 2),
  },
  {
    slug: 'yogurt-griego',
    nombre: 'Yogurt griego',
    categorias: ['bebidas'],
    glyph: 'vaso',
    resumen: 'Espeso, natural y alto en proteína.',
    descripcion: 'Yogurt colado de textura espesa, sin azúcar añadida. Base de los cuchareables y sachets de Pal’ Arranque.',
    presentacion: 'Vaso 150 g',
    porcion: '150 g',
    base: '100 g',
    ingredientes: 'Leche entera, cultivos lácticos.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado entre 2 °C y 6 °C.',
    caracteristicas: [
      { icono: 'zap', titulo: 'Alto en proteína', texto: 'Casi el triple que un yogurt tradicional.' },
      { icono: 'sprout', titulo: 'Sin azúcar añadida', texto: 'Solo leche y cultivos.' },
      origen,
      directo,
    ],
    nutricion: tabla([97, 5, 3.2, 4, 4, 0, 9, 36, 110], 1.5),
  },
  {
    slug: 'cuchareable',
    nombre: 'Cuchareable',
    categorias: ['bebidas', 'postres'],
    glyph: 'cuchara',
    resumen: 'Alimento lácteo para comer con cuchara.',
    descripcion:
      'Alimento lácteo espeso con fruta de temporada, para comer con cuchara. Sirve de algo dulce después del almuerzo o de merienda.',
    presentacion: 'Vaso 150 g',
    porcion: '150 g',
    base: '100 g',
    ingredientes: 'Leche entera, azúcar, fruta de temporada, almidón de maíz, cultivos lácticos.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado entre 2 °C y 6 °C.',
    caracteristicas: [
      { icono: 'sun', titulo: 'Fruta de temporada', texto: 'Cambia según la cosecha de la región.' },
      { icono: 'heart', titulo: 'Para el antojo', texto: 'Postre o merienda en un vaso.' },
      origen,
      directo,
    ],
    nutricion: tabla([105, 2.6, 1.6, 17, 15, 9, 3, 50, 100], 1.5),
  },
  {
    slug: 'yogurt-sachet',
    nombre: 'Yogurt en sachet',
    categorias: ['bebidas'],
    glyph: 'sachet',
    resumen: 'Yogurt bebible en bolsa individual.',
    descripcion: 'Yogurt bebible de fruta en sachet individual, fácil de llevar en la lonchera o en el bolso.',
    presentacion: 'Sachet 200 g',
    porcion: '200 g',
    base: '100 g',
    ingredientes: 'Leche entera, azúcar, pulpa de fruta, cultivos lácticos.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Para llevar', texto: 'Empaque liviano y fácil de abrir.' },
      { icono: 'sun', titulo: 'Sabor a fruta', texto: 'Con pulpa de fruta de la región.' },
      origen,
      directo,
    ],
    nutricion: tabla([85, 2.2, 1.4, 13, 12, 7, 2.8, 45, 95], 2),
  },
  {
    slug: 'bebida-lactea-proteina',
    nombre: 'Bebida láctea con proteína',
    categorias: ['bebidas'],
    glyph: 'proteina',
    resumen: 'Más proteína, menos grasa.',
    descripcion:
      'Bebida láctea semidescremada con proteína de leche añadida. Pensada para personas activas que quieren recuperarse después de entrenar.',
    presentacion: 'Botella 250 ml',
    porcion: '250 ml',
    base: '100 ml',
    ingredientes: 'Leche semidescremada, proteína concentrada de leche, azúcar, cacao o fruta, estabilizante.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerada. Agítese antes de consumir.',
    caracteristicas: [
      { icono: 'zap', titulo: '17,5 g de proteína', texto: 'Por botella, para la recuperación muscular.' },
      { icono: 'bike', titulo: 'Para gente activa', texto: 'Después de entrenar o de una rodada.' },
      origen,
      directo,
    ],
    nutricion: tabla([72, 1.5, 1, 7.5, 7, 3, 7, 55, 160], 2.5),
  },
  {
    slug: 'queso-campesino',
    nombre: 'Queso campesino',
    categorias: ['bebidas'],
    glyph: 'campesino',
    resumen: 'Fresco, suave y de receta de finca.',
    descripcion: 'Queso fresco de receta campesina, hecho en La Feria con leche del día. Para el desayuno, la arepa o el chocolate.',
    presentacion: 'Bloque 500 g',
    porcion: '30 g',
    base: '100 g',
    ingredientes: 'Leche entera, sal, cuajo, cloruro de calcio.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Consúmase en máximo 8 días.',
    caracteristicas: [
      { icono: 'users', titulo: 'Saber campesino', texto: 'Receta que pasa de una generación a otra.' },
      origen,
      frio,
      directo,
    ],
    nutricion: tabla([264, 20, 12.5, 2.5, 0.5, 0, 18, 560, 500], 0.3),
  },
  {
    slug: 'queso-crema',
    nombre: 'Queso crema',
    categorias: ['bebidas'],
    glyph: 'crema',
    resumen: 'Untable y cremoso.',
    descripcion: 'Queso crema untable para pan, galletas y recetas de cocina.',
    presentacion: 'Pote 230 g',
    porcion: '30 g',
    base: '100 g',
    ingredientes: 'Leche, crema de leche, sal, cultivos lácticos, estabilizante.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Una vez abierto, consúmase en máximo 7 días.',
    caracteristicas: [
      { icono: 'heart', titulo: 'Untable', texto: 'Textura suave para el pan o la cocina.' },
      origen,
      frio,
      directo,
    ],
    nutricion: tabla([342, 34, 21, 4.1, 3.2, 0, 6, 320, 98], 0.3),
  },
  {
    slug: 'quesillo',
    nombre: 'Quesillo',
    categorias: ['bebidas'],
    glyph: 'quesillo',
    resumen: 'Queso de hebra, ideal para fundir.',
    descripcion: 'Quesillo de pasta hilada, elástico y suave. Funde bien en arepas, pandebonos y sobre el plato caliente.',
    presentacion: 'Bola 500 g',
    porcion: '30 g',
    base: '100 g',
    ingredientes: 'Leche entera, sal, cuajo, cloruro de calcio.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'sun', titulo: 'Para fundir', texto: 'Se derrite parejo en la arepa.' },
      origen,
      frio,
      directo,
    ],
    nutricion: tabla([280, 21, 13, 2, 0.5, 0, 21, 480, 520], 0.3),
  },
  {
    slug: 'queso-siete-cueros',
    nombre: 'Queso siete cueros',
    categorias: ['bebidas'],
    glyph: 'capas',
    resumen: 'El queso de capas de la tradición.',
    descripcion: 'Queso de capas que se separan en láminas, hecho a mano según la tradición quesera de la región.',
    presentacion: 'Bloque 500 g',
    porcion: '30 g',
    base: '100 g',
    ingredientes: 'Leche entera, sal, cuajo.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'hand', titulo: 'Hecho a mano', texto: 'Capa por capa, como se aprendió en la finca.' },
      { icono: 'users', titulo: 'Saber campesino', texto: 'Receta que guardan las mujeres de la asociación.' },
      origen,
      directo,
    ],
    nutricion: tabla([300, 23, 14.5, 2.2, 0.5, 0, 21, 600, 560], 0.3),
  },

  /* ---------------------------------- Snacks --------------------------------- */
  {
    slug: 'snack-queso-bocadillo',
    nombre: 'Snack de queso con bocadillo',
    categorias: ['snacks'],
    glyph: 'bastones',
    resumen: 'Salado y dulce, en porción para llevar.',
    descripcion: 'Snack de queso campesino con bocadillo de guayaba, la combinación de siempre en un empaque individual.',
    presentacion: 'Paquete 45 g',
    porcion: '45 g',
    base: '100 g',
    ingredientes: 'Queso: leche entera, sal, cuajo. Bocadillo: pulpa de guayaba, azúcar.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'heart', titulo: 'Dulce y salado', texto: 'Queso fresco con bocadillo de guayaba.' },
      { icono: 'pocket', titulo: 'Porción individual', texto: 'Cabe en la lonchera o en el bolsillo.' },
      origen,
      directo,
    ],
    nutricion: tabla([305, 14, 9, 33, 30, 24, 12.5, 290, 420], 0.45),
  },
  {
    slug: 'snack-queso-arequipe',
    nombre: 'Snack de queso con arequipe',
    categorias: ['snacks'],
    glyph: 'bastones',
    resumen: 'Queso fresco con arequipe.',
    descripcion: 'Snack de queso campesino con arequipe hecho con leche de La Feria, en porción individual.',
    presentacion: 'Paquete 45 g',
    porcion: '45 g',
    base: '100 g',
    ingredientes: 'Queso: leche entera, sal, cuajo. Arequipe: leche entera, azúcar, bicarbonato.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado.',
    caracteristicas: [
      { icono: 'heart', titulo: 'Doble lácteo', texto: 'Queso y arequipe de la misma leche.' },
      { icono: 'pocket', titulo: 'Porción individual', texto: 'Para la merienda o el camino.' },
      origen,
      directo,
    ],
    nutricion: tabla([330, 16, 10, 35, 33, 26, 12, 260, 400], 0.45),
  },

  /* ------------------------------- Pal' Arranque ------------------------------ */
  {
    slug: 'batido-proteico',
    nombre: 'Batido proteico tipo smoothie',
    categorias: ['pal-arranque'],
    glyph: 'batido',
    resumen: 'Leche o yogurt natural, fruta de temporada y miel.',
    descripcion:
      'Batido de leche o yogurt natural de La Feria con frutas de temporada y miel, en botella con tapa para llevar en la rodada. Para recuperar energía después de la subida.',
    presentacion: 'Botella 350 ml con tapa',
    porcion: '350 ml',
    base: '100 ml',
    ingredientes: 'Leche entera o yogurt natural, fruta de temporada, miel de abejas.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase el mismo día.',
    caracteristicas: [
      { icono: 'zap', titulo: '21 g de proteína', texto: 'Por vaso, para recuperar después de rodar.' },
      { icono: 'sun', titulo: 'Fruta de temporada', texto: 'Lo que esté dando la tierra esa semana.' },
      { icono: 'pocket', titulo: 'Para llevar', texto: 'Botella con tapa que va en el portacaramañola o la mochila.' },
      directo,
    ],
    nutricion: tabla([92, 1.8, 1.1, 13.5, 12, 3, 6, 50, 130], 3.5),
    ruta: {
      momento: 'En el bolsillo',
      consumo: 'Para llevar',
      nota: 'Se compra en el punto de venta y se toma en la ruta.',
    },
  },
  {
    slug: 'cuchareable-yogurt-griego',
    nombre: 'Cuchareable de yogurt griego',
    categorias: ['pal-arranque'],
    glyph: 'cuchara',
    resumen: 'Con mermelada de fruta, granola y miel.',
    descripcion:
      'Yogurt griego con mermelada de fruta de temporada, granola y miel, servido en el punto de venta. Proteína y carbohidrato para el tercer tiempo.',
    presentacion: 'Vaso 200 g, servido en el punto de venta',
    porcion: '200 g',
    base: '100 g',
    ingredientes: 'Yogurt griego, mermelada de fruta de temporada, granola (avena, panela, semillas), miel de abejas.',
    alergenos: 'Contiene leche y avena. Puede contener trazas de frutos secos.',
    conservacion: 'Consúmase en el punto de venta.',
    caracteristicas: [
      { icono: 'zap', titulo: '15 g de proteína', texto: 'Por porción, gracias al yogurt griego.' },
      { icono: 'sprout', titulo: 'Granola y miel', texto: 'Energía que dura el resto de la ruta.' },
      { icono: 'sun', titulo: 'Mermelada de temporada', texto: 'Fruta de la región.' },
      directo,
    ],
    nutricion: tabla([150, 5.5, 3, 18, 12, 6, 7.5, 45, 100], 2),
    ruta: {
      momento: 'Tercer tiempo',
      consumo: 'En el punto de venta',
      nota: 'Para la parada, sentado con el grupo.',
    },
  },
  {
    slug: 'yogurt-fruta-temporada',
    nombre: 'Yogurt de fruta de temporada',
    categorias: ['pal-arranque'],
    glyph: 'vaso',
    resumen: 'Servido en vaso, en la parada.',
    descripcion: 'Yogurt con fruta de temporada servido en vaso, para tomar en la parada mientras el grupo se reagrupa.',
    presentacion: 'Vaso 200 g, servido en el punto de venta',
    porcion: '200 g',
    base: '100 g',
    ingredientes: 'Yogurt natural, fruta de temporada, azúcar.',
    alergenos: 'Contiene leche.',
    conservacion: 'Consúmase en el punto de venta.',
    caracteristicas: [
      { icono: 'droplet', titulo: 'Hidrata y refresca', texto: 'Frío, después de la subida.' },
      { icono: 'sun', titulo: 'Fruta de temporada', texto: 'Cambia según la cosecha.' },
      origen,
      directo,
    ],
    nutricion: tabla([88, 2.6, 1.7, 13, 12, 6, 3.4, 48, 110], 2),
    ruta: {
      momento: 'Tercer tiempo',
      consumo: 'En el punto de venta',
      nota: 'Se sirve frío en el Centro de Acopio.',
    },
  },
  {
    slug: 'sachet-yogurt-griego',
    nombre: 'Sachet de yogurt griego y fruta',
    categorias: ['pal-arranque'],
    glyph: 'doypack',
    resumen: 'Sachet con tapa para tomar en marcha.',
    descripcion:
      'Yogurt griego con fruta de temporada en sachet con tapa. Cabe en el bolsillo trasero del jersey y se abre con una mano.',
    presentacion: 'Sachet 150 g con tapa',
    porcion: '150 g',
    base: '100 g',
    ingredientes: 'Yogurt griego, pulpa de fruta de temporada, miel de abejas.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase el mismo día.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Cabe en el jersey', texto: 'Empaque flexible para el bolsillo trasero.' },
      { icono: 'hand', titulo: 'Se abre con una mano', texto: 'Tapa de rosca, sin detener la marcha.' },
      { icono: 'zap', titulo: '10,5 g de proteína', texto: 'Por sachet.' },
      directo,
    ],
    nutricion: tabla([105, 4, 2.6, 11, 10, 4, 7, 40, 105], 1.5),
    ruta: {
      momento: 'En el bolsillo',
      consumo: 'Para llevar',
      nota: 'Se compra en el punto de venta y se lleva para la bajada.',
    },
  },
  {
    slug: 'snacks-de-queso',
    nombre: 'Snacks de queso',
    categorias: ['pal-arranque'],
    glyph: 'bastones',
    resumen: 'Con bocadillo o con arequipe.',
    descripcion:
      'Snacks de queso campesino acompañados de bocadillo de guayaba o arequipe. Salado para reponer sodio, dulce para la energía rápida.',
    presentacion: 'Paquete 40 g · con bocadillo o con arequipe',
    porcion: '40 g',
    base: '100 g',
    ingredientes: 'Queso campesino (leche entera, sal, cuajo), bocadillo de guayaba o arequipe.',
    alergenos: 'Contiene leche.',
    conservacion: 'Manténgase refrigerado. Fuera de la nevera, consúmase en las siguientes 4 horas.',
    caracteristicas: [
      { icono: 'pocket', titulo: 'Para el camino', texto: 'Empaque que no se aplasta en la cangurera.' },
      { icono: 'zap', titulo: 'Salado y dulce', texto: 'Sodio y energía rápida en una porción.' },
      origen,
      directo,
    ],
    nutricion: tabla([290, 13, 8.5, 30, 27, 21, 14, 300, 450], 0.4),
    ruta: {
      momento: 'En el bolsillo',
      consumo: 'Para llevar',
      nota: 'Va en la cangurera o en el bolsillo del jersey.',
    },
  },
];

export const categoriaPorKey = Object.fromEntries(categorias.map((c) => [c.key, c])) as Record<
  CategoriaKey,
  Categoria
>;

export function productosDe(key: CategoriaKey) {
  return productos.filter((p) => p.categorias.includes(key));
}

export function productoUrl(p: Producto) {
  return `/productos/${p.slug}`;
}
