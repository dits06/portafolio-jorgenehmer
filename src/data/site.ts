/**
 * Datos globales del sitio.
 * [Confirmar] = dato que no está en Figma ni en el documento de traspaso.
 */
export const site = {
  name: 'Jorge Nehmer',
  role: 'UX/UI designer',
  url: 'https://jorgenehmer.com',
  email: 'jorgenehmer06@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jorge-nehmer-71493325/',
  // PDF en public/curriculum.pdf; /curriculum redirige a él (vercel.json).
  // [Confirmar] falta subir el archivo.
  curriculum: '/curriculum.pdf',
} as const;
