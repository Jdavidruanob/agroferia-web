/**
 * Aliados de Agroferia: productores y marcas que colaboran en la elaboración de ciertos productos.
 *
 * PENDIENTE: son tarjetas de ejemplo. Para cada aliado real, reemplazar `nombre`, `aporte` y
 * `descripcion`, y poner su logo o foto en `public/aliados/` con la ruta en `logo`
 * (p. ej. logo: '/aliados/trapiche-el-cedro.png'). Mientras `logo` esté vacío se muestra el ícono.
 * `productos` usa los slugs de src/data/productos.ts.
 */
export interface Aliado {
  nombre: string;
  /** Qué aporta, en dos o tres palabras (va en la etiqueta naranja). */
  aporte: string;
  descripcion: string;
  logo?: string;
  /** Ícono de respaldo mientras no hay logo (nombre de src/components/icons.ts). */
  icono: 'sun' | 'droplet' | 'heart' | 'leaf';
  productos: string[];
  enlace?: string;
}

export const aliados: Aliado[] = [
  {
    nombre: 'Nombre del aliado frutero',
    aporte: 'Frutas de temporada',
    descripcion:
      'Finca o asociación vecina que cosecha la fruta de cada temporada. La recibimos fresca para los yogures, el doypack y el batido.',
    icono: 'sun',
    productos: ['yogur-natural-frutas', 'doypack-yogur-griego', 'batido-smoothie'],
  },
  {
    nombre: 'Nombre del trapiche aliado',
    aporte: 'Panela de caña',
    descripcion:
      'Trapiche panelero de la región que nos provee la panela con la que se cocina la panelita de leche.',
    icono: 'droplet',
    productos: ['snack-panelita-quesillo'],
  },
  {
    nombre: 'Nombre del aliado de dulces',
    aporte: 'Arequipe y bocadillo',
    descripcion:
      'Productores artesanales de arequipe y bocadillo de guayaba para el relleno del snack de queso y las mermeladas de los postres.',
    icono: 'heart',
    productos: ['snack-queso-relleno', 'postres'],
  },
  {
    nombre: 'Nombre del aliado de empaques',
    aporte: 'Empaques ecológicos',
    descripcion:
      'Marca que fabrica los vasos ecológicos y el termo plegable de la dinámica de puntos de Pal’ Arranque.',
    icono: 'leaf',
    productos: ['yogur-frutas-temporada', 'termo-plegable'],
  },
];
