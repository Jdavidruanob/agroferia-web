// Datos de contacto de Agroferia. Se usan en la barra superior, el pie de página y "Visítanos".
export const whatsapp = {
  principal: { etiqueta: '318 772 4968', numero: '573187724968' },
  alterno: { etiqueta: '314 610 3902', numero: '573146103902' },
};

export const correo = 'agroferia12@gmail.com';

export function waUrl(numero: string, mensaje = 'Hola Agroferia, quiero más información.') {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
