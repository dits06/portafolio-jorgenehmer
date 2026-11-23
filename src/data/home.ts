/**
 * Contenido de las grillas del home — Figma: frame 1:2 (desktop) y 103:302 (mobile).
 * Textos copiados tal cual de Figma. Las piezas de Exploraciones se leen de la
 * colección exploraciones (src/content/exploraciones/*.mdx, campos card y orden).
 */
import type { ImageMetadata } from 'astro';

import cardTcg from '../assets/home/card-tcg-league-tracker.png';
import cardVision from '../assets/home/card-vision-general.png';
import cardRegistro from '../assets/home/card-registro-y-verificacion.png';
import cardPagos from '../assets/home/card-pagos-masivos-b2b.png';
import cardDesignSystem from '../assets/home/card-design-system.png';
import cardDesignSystemMobile from '../assets/home/card-design-system-mobile.png';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: [string, string, string];
  image: ImageMetadata;
  /** Recorte distinto para mobile (solo la card a todo el ancho). */
  imageMobile?: ImageMetadata;
  /** Ocupa las 2 columnas en desktop. */
  wide?: boolean;
}

/** Orden de Figma: de izquierda a derecha y de arriba abajo; en mobile, el mismo. */
export const projects: Project[] = [
  {
    slug: 'tcg-league-tracker',
    title: 'TCG League Tracker',
    subtitle: 'Proyecto propio',
    tags: ['Diseño y desarrollo', 'Caso de estudio', 'IA'],
    image: cardTcg,
  },
  {
    slug: 'vision-general',
    title: 'Visión general',
    subtitle: 'Skipo',
    tags: ['Diseño de producto', 'Caso de estudio', 'App y webapp'],
    image: cardVision,
  },
  {
    slug: 'registro-y-verificacion',
    title: 'Registro y verificación',
    subtitle: 'Skipo',
    tags: ['Diseño de producto', 'Caso de estudio', 'App mobile'],
    image: cardRegistro,
  },
  {
    slug: 'pagos-masivos-b2b',
    title: 'Pagos masivos B2B',
    subtitle: 'Skipo',
    tags: ['Diseño de producto', 'Caso de estudio', 'Webapp B2B'],
    image: cardPagos,
  },
  {
    slug: 'design-system',
    title: 'Design system',
    subtitle: 'Skipo',
    tags: ['Design system', 'Caso de estudio', 'Componentes'],
    image: cardDesignSystem,
    imageMobile: cardDesignSystemMobile,
    wide: true,
  },
];

/** Orden de los filtros en Figma. Los que no tienen piezas se ocultan (Publicidad). */
export const explorationCategories = ['3D', 'Tipografía', 'Logos', 'UI', 'Publicidad'] as const;
export type ExplorationCategory = (typeof explorationCategories)[number];

/**
 * Destino de "Ver todas las exploraciones →": el inicio de la sección
 * Exploraciones del home (no hay página de índice de exploraciones).
 */
export const allExplorationsHref = '/#exploraciones';
