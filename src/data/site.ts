/**
 * Datos globales del sitio.
 * [Confirmar] = dato que no está en Figma ni en el documento de traspaso.
 */
export const site = {
  name: 'Jorge Nehmer',
  role: 'UX/UI designer',
  url: 'https://jorgenehmer.com',
  // [Confirmar] correo de contacto
  email: '[Confirmar]',
  // [Confirmar] URL del perfil de LinkedIn
  linkedin: '[Confirmar]',
  // PDF en public/curriculum.pdf; /curriculum redirige a él (vercel.json).
  // [Confirmar] falta subir el archivo.
  curriculum: '/curriculum.pdf',
} as const;
