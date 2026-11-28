import type { ImageMetadata } from 'astro';

/**
 * Imagen de cada producto, ya compuesta: fondo de ingredientes, etiqueta de línea, personaje, sello
 * "Producto Lácteo Artesanal" y la foto del empaque (src/assets/productos/tarjetas/<slug>.jpg).
 * Una segunda versión del producto (p. ej. el snack con bocadillo) va en <slug>-2.jpg.
 *
 * Para cambiar una foto: volver a componerla con el fondo de la diseñadora y reemplazar el archivo.
 * PENDIENTE: foto del quesillo (por ahora muestra solo el fondo con el ícono provisional).
 */
const archivos = import.meta.glob<ImageMetadata>('../assets/productos/tarjetas/*.jpg', { eager: true, import: 'default' });

/** Productos cuya imagen aún no incluye el empaque. */
const sinEmpaque = new Set(['quesillo']);

export function fotosDe(slug: string): ImageMetadata[] {
  return Object.entries(archivos)
    .filter(([ruta]) => new RegExp(`/${slug}(-\\d+)?\\.jpg$`).test(ruta))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, img]) => img);
}

export const faltaEmpaque = (slug: string) => sinEmpaque.has(slug);

/** Nombre de cada versión cuando un producto tiene más de una foto. */
export const versiones: Record<string, string[]> = {
  'snack-queso-relleno': ['Con arequipe', 'Con bocadillo'],
};
