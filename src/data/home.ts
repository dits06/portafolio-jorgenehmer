/**
 * Contenido de las grillas del home — Figma: frame 1:2 (desktop) y 103:302 (mobile).
 * Textos copiados tal cual de Figma. En las etapas 3–5 esto pasará a leerse de las
 * content collections (casos/*.mdx y exploraciones/*.mdx).
 */
import type { ImageMetadata } from 'astro';

import cardTcg from '../assets/home/card-tcg-league-tracker.png';
import cardVision from '../assets/home/card-vision-general.png';
import cardRegistro from '../assets/home/card-registro-y-verificacion.png';
import cardPagos from '../assets/home/card-pagos-masivos-b2b.png';
import cardDesignSystem from '../assets/home/card-design-system.png';
import cardDesignSystemMobile from '../assets/home/card-design-system-mobile.png';

import expLoomer from '../assets/home/exploracion-loomer.png';
import exp36Days from '../assets/home/exploracion-36-days-of-type.png';
import expLogofolio from '../assets/home/exploracion-logofolio.png';
import expIlustraciones from '../assets/home/exploracion-ilustraciones-3d.png';
import expAlPaladar from '../assets/home/exploracion-al-paladar.png';
import expHapp from '../assets/home/exploracion-happ.png';

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

export interface Exploration {
  slug: string;
  title: string;
  category: ExplorationCategory;
  year: string;
  image: ImageMetadata;
}

export const explorations: Exploration[] = [
  { slug: 'loomer', title: 'Loomer', category: 'UI', year: '2019', image: expLoomer },
  { slug: '36-days-of-type', title: '36 Days of Type', category: 'Tipografía', year: '2018', image: exp36Days },
  { slug: 'logofolio', title: 'Logofolio', category: 'Logos', year: '2016–2018', image: expLogofolio },
  { slug: 'ilustraciones-3d', title: 'Ilustraciones 3D', category: '3D', year: '2022', image: expIlustraciones },
  { slug: 'al-paladar', title: 'Al Paladar', category: 'UI', year: '2021', image: expAlPaladar },
  { slug: 'happ', title: 'Happ', category: 'UI', year: '2022', image: expHapp },
];

/**
 * [Confirmar] destino de "Ver todas las exploraciones →": el mapa del sitio no
 * tiene una página de índice de exploraciones.
 */
export const allExplorationsHref = '/exploraciones';
