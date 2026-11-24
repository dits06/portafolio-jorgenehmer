/**
 * Content collections — documento de traspaso → "Campos de cada archivo MDX".
 * El cuerpo de cada caso (las secciones) va en el MDX; aquí va la cabecera.
 */
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const casos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/casos' }),
  schema: ({ image }) => {
    /**
     * Una versión de la portada en banda (Figma, página Portadas): desktop 1440 × 640, mobile 375 × 380.
     * - fondo: valor CSS de `background` (color o degradado del frame y brillos radiales).
     * - contenido: PNG ×2 transparente, recortado en el borde inferior del frame.
     * - caja: ancho y alto del contenido en Figma, desde su borde superior hasta el borde
     *   inferior del frame, sin sombras. Es lo que se limita a 1040 px y a los 136 px libres.
     * - lineas: SVG de las líneas decorativas; x, y = esquina superior izquierda respecto del frame.
     */
    const versionBanda = z.object({
      fondo: z.string(),
      contenido: image(),
      caja: z.tuple([z.number().positive(), z.number().positive()]),
      lineas: z.object({ svg: image(), x: z.number(), y: z.number() }).optional(),
    });
    return z.object({
      titulo: z.string(),
      bajada: z.string(),
      /** Nombre corto (card del home, título de la pestaña). */
      nombre: z.string(),
      subtitulo: z.string(),
      tags: z.array(z.string()).length(3),
      /** Imagen única: se usa para compartir y como portada de los casos sin banda. */
      portada: image(),
      portadaAlt: z.string(),
      /** Portada en banda a todo el ancho. Opcional: Pagos masivos B2B todavía no la tiene en Figma. */
      banda: z.object({ desktop: versionBanda, mobile: versionBanda }).optional(),
      /** Metadatos de la intro, en el orden de Figma (Rol, Equipo, Herramientas, Período…). */
      metadatos: z.array(z.object({ etiqueta: z.string(), valor: z.string() })),
      resumen: z.string(),
      queHice: z.array(z.string()),
      /** "En números" de la intro (2 o 3). */
      metricas: z.object({
        eyebrow: z.string(),
        items: z.array(z.object({ valor: z.string(), descripcion: z.string() })).min(2).max(3),
      }),
      /** Diseño final. Opcional: Visión general y Design system no lo tienen. */
      destacados: z
        .object({
          eyebrow: z.string(),
          titulo: z.string(),
          /** 'vertical': mockup de 440 × 560 (Registro). 'horizontal': 640 × 480 (Pagos, TCG). */
          formato: z.enum(['vertical', 'horizontal']).default('vertical'),
          items: z
            .array(
              z.object({
                eyebrow: z.string(),
                titulo: z.string(),
                texto: z.string(),
                imagen: image(),
                alt: z.string(),
              }),
            )
            .length(3),
        })
        .optional(),
      /** Ítems del nav lateral: id del ancla y texto (el eyebrow de la sección). */
      secciones: z.array(z.object({ id: z.string(), titulo: z.string() })),
      siguientes: z
        .array(
          z.object({
            slug: z.string(),
            titulo: z.string(),
            texto: z.string(),
            imagen: image(),
          }),
        )
        .length(3),
    });
  },
});

/**
 * Exploraciones — documento de traspaso → "Plantilla Exploración" y "Exploraciones".
 * Toda la página sale de la cabecera; el cuerpo del MDX queda vacío.
 */
/** Mismo orden que los filtros del home (src/data/home.ts). */
const categoriasExploracion = ['3D', 'Tipografía', 'Logos', 'UI', 'Publicidad'] as const;

const exploraciones = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/exploraciones' }),
  schema: ({ image }) => {
    const pieza = z.object({ imagen: image(), pie: z.string(), alt: z.string().optional() });
    return z.object({
      titulo: z.string(),
      categoria: z.enum(categoriasExploracion),
      descripcion: z.string(),
      anio: z.string(),
      tipo: z.string(),
      herramientas: z.string(),
      /** Card del home (composición exportada como imagen única). */
      card: image(),
      /** Posición en la grilla del home (orden de Figma). */
      orden: z.number().int(),
      /**
       * Galería, en orden. 'imagen': a todo el ancho; 'par': 2 lado a lado;
       * 'grilla': 2 columnas en varias filas. En mobile todo va en una columna.
       */
      galeria: z.array(
        z.discriminatedUnion('formato', [
          pieza.extend({ formato: z.literal('imagen') }),
          z.object({ formato: z.literal('par'), piezas: z.array(pieza).length(2) }),
          z.object({ formato: z.literal('grilla'), piezas: z.array(pieza).min(2) }),
        ]),
      ),
      anterior: reference('exploraciones'),
      siguiente: reference('exploraciones'),
    });
  },
});

export const collections = { casos, exploraciones };
