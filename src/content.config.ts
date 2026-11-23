/**
 * Content collections — documento de traspaso → "Campos de cada archivo MDX".
 * El cuerpo de cada caso (las secciones) va en el MDX; aquí va la cabecera.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const casos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/casos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      bajada: z.string(),
      /** Nombre corto (card del home, título de la pestaña). */
      nombre: z.string(),
      subtitulo: z.string(),
      tags: z.array(z.string()).length(3),
      portada: image(),
      portadaAlt: z.string(),
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
    }),
});

export const collections = { casos };
