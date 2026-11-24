# Portafolio jorgenehmer.com — Traspaso a código

Nov 23, 2026 · @Caco

## Resumen y decisiones

El portafolio se construye en Claude Code con Astro y archivos MDX, sin CMS, y se publica en Vercel con el dominio jorgenehmer.com. El diseño vive en Figma y esta conversación queda para cambios de diseño, imágenes y textos.

| Tema | Decisión |
| --- | --- |
| Herramienta | Claude Code para el código; Claude + Figma para el diseño |
| Framework | Astro. Las páginas se generan de antemano (carga muy rápida) y el JavaScript de las animaciones y del header corre en el navegador como en cualquier sitio |
| Contenido | Un archivo MDX por caso y por exploración (content collections), sin CMS |
| Header | Se integra el artefacto "Header circuito JN" casi tal cual: HTML, CSS, Canvas 2D y WebGL, sin frameworks |
| Responsive | Un solo código responsive; el mobile de Figma es la referencia de 375 px |
| Imágenes | Exportadas desde Figma en ×2 y optimizadas por Astro a WebP o AVIF |
| Hosting | Vercel, con jorgenehmer.com |

Decidido en la etapa 7: la versión en inglés llega más adelante (por ahora solo español) y por ahora no hay analítica; se evalúa más adelante.

## Fuentes

Todo el diseño del sitio está en un solo archivo de Figma, en la página Portafolio; Claude Code puede leerlo con el conector de Figma.

| Qué | Dónde |
| --- | --- |
| Diseño del sitio | [Figma del portafolio](https://www.figma.com/design/T7Vm19O2v6y37uSAoBLw5D), página Portafolio |
| Imágenes de los casos | Mismo archivo, página imagenes |
| Imágenes de TCG League Tracker | [Figma de la app](https://www.figma.com/design/yEnivCAV5djbzpun6cZjEF), página Portafolio — imágenes |
| Header animado | [Header circuito JN](https://claude.ai/artifact/NjoBgVpDWTxpLcXjFkFQ1r), un archivo HTML de unas 560 líneas |

### Frames de cada página (desktop / mobile)

| Página | Desktop | Mobile |
| --- | --- | --- |
| Home | 1:2 | 103:302 |
| Caso — Registro y verificación | 8:10 | 104:175 |
| Caso — Visión general | 106:328 | 168:540 |
| Caso — Design system | 170:637 | 203:950 |
| Caso — Pagos masivos B2B | 209:775 | 286:918 |
| Caso — TCG League Tracker | 291:1062 | 296:1223 |
| Exploración — 36 Days of Type | 157:634 | 305:1345 |
| Exploración — Loomer | 308:14132 | 308:14205 |
| Exploración — Logofolio | 313:1318 | 313:1538 |
| Exploración — Ilustraciones 3D | 316:1614 | 316:1737 |
| Exploración — Al Paladar | 318:1386 | 318:1492 |
| Exploración — Happ | 320:1392 | 320:1497 |

En la URL de Figma el id va con guion: 8:10 se escribe node-id=8-10.

### Portadas de los casos (página Portadas, 356:13222)

| Caso | Desktop (1440 × 640) | Mobile (375 × 380) |
| --- | --- | --- |
| TCG League Tracker | 356:13412 | 356:13756 |
| Registro y verificación | 356:14529 | 356:14534 |
| Visión general | 356:14542 | 356:14540 |
| Design system | 356:14569 | 356:14637 |
| Pagos masivos B2B | — (todavía no tiene) | — |

## Fundamentos visuales

El sitio usa una sola familia, TikTok Sans, sobre fondo blanco con grises neutros; el color fuerte vive en el header azul y en las imágenes. No hay variables ni estilos definidos en Figma, así que estos valores salen de medir las páginas y se convierten en tokens CSS.

### Color

| Token sugerido | Valor | Uso |
| --- | --- | --- |
| --ink | #000000 | Títulos y texto principal |
| --ink-2 | #1A1A1A / #333333 | Texto de cuerpo fuerte |
| --muted | #737373 | Eyebrows, metadatos, pies de imagen |
| --muted-2 | #666666 | Descripciones de cards |
| --line | #E5E5E5 | Divisores y bordes suaves |
| --surface | #F8F8F8 | Bandas de fondo (nav entre exploraciones, cards) |
| --placeholder | #D9D9D9 | Fondos de imagen mientras carga |
| --hero-bg | #000956 a #0014BC | Degradado radial del header |
| --accent | #00B995 | Acento verde (pocos usos) |

### Tipografía (TikTok Sans)

| Rol | Desktop | Mobile | Peso y detalle |
| --- | --- | --- | --- |
| Hero del home | 56/62 | 34–56 fluido | Bold, tracking -2% |
| Título de caso | 48/55 | 32/37 | Bold, tracking -1.5% |
| Título de sección | 36/43 | 26/31 | Bold, tracking -1% |
| Subtítulo | 24/31 | 20/26 | SemiBold |
| Título de card | 18/25 | 16/22 | SemiBold |
| Cuerpo largo | 18/29 | 16/26 | Regular |
| Cuerpo | 16/26 | 15/24 | Regular |
| Texto de card | 15/23 | 14/21 | Regular |
| Eyebrow | 13/18 | 12/16 | SemiBold, mayúsculas, tracking 1.3 px |
| Pie de imagen | 13/18 | 12/16 | Regular |

### Espaciado y layout

- Ancho de diseño 1440 px; contenido de 1120 px con márgenes de 160 px. En los casos, nav lateral de 220 px + 100 px de separación + columna de 800 px.
- Mobile de referencia: 375 px con márgenes de 20 px (contenido de 335 px).
- Secciones: 80 px arriba y abajo en desktop, 48 px en mobile. Entre secciones del cuerpo de un caso: 160 px en desktop, 88 px en mobile.
- Grilla de proyectos del home: 2 columnas, 24 px entre columnas y 16 px entre filas; imágenes con radio de 16 px.
- Breakpoints sugeridos: 375, 768, 1024 y 1440 px.

## Mapa del sitio y plantillas

El sitio son 12 páginas, pero solo 3 plantillas: home, caso y exploración. Cada caso y cada exploración es un archivo de contenido que la plantilla dibuja.

| Ruta | Plantilla | Contenido |
| --- | --- | --- |
| / | Home | Header animado, Proyectos (5), Exploraciones (6), footer |
| /casos/tcg-league-tracker | Caso | casos/tcg-league-tracker.mdx |
| /casos/registro-y-verificacion | Caso | casos/registro-y-verificacion.mdx |
| /casos/vision-general | Caso | casos/vision-general.mdx |
| /casos/pagos-masivos-b2b | Caso | casos/pagos-masivos-b2b.mdx |
| /casos/design-system | Caso | casos/design-system.mdx |
| /exploraciones/loomer, /36-days-of-type, /logofolio, /ilustraciones-3d, /al-paladar, /happ | Exploración | exploraciones/\*.mdx |
| /curriculum | PDF | PDF descargable; el link del nav abre el archivo en una pestaña nueva |

### Plantilla Home

1. Nav: nombre + "UX/UI designer", links Proyectos y Currículum; en mobile, menú hamburguesa.
2. Header circuito JN (componente aparte).
3. Proyectos: título con línea, grilla de 2 columnas; la quinta card ocupa las 2 columnas. Cada card: imagen, nombre + subtítulo (Skipo o Proyecto propio) y 3 tags.
4. Exploraciones: título, filtros (Todo, 3D, Tipografía, Logos, UI, Publicidad), grilla de 3 columnas en desktop y 2 en mobile, link "Ver todas las exploraciones".
5. Footer: © 2026 Jorge Nehmer, mail y LinkedIn.

### Plantilla Caso

1. Portada a todo el ancho (ver "Portada en banda" más abajo).
2. Título y bajada.
3. Intro: metadatos (Rol, Año, Alcance, Herramientas), Resumen + Qué hice, En números (2 o 3 métricas).
4. Diseño final: 3 destacados que alternan imagen y texto.
5. Cuerpo: nav lateral fijo con la sección activa + secciones (eyebrow, título, texto e imagen; o cards numeradas, cards de proceso, pares de imágenes con pie).
6. Siguientes casos: 3 cards.
7. Footer.

Componentes del caso: Card/Numerada, Card/Proceso, Métrica, Imagen con pie, Par de imágenes, Destacado.

#### Portada en banda

Cambio posterior a las 7 etapas (noviembre de 2026). Rehace la portada según los frames de la página Portadas. Componente: `src/components/PortadaBanda.astro`. Los datos van en el campo `banda` del MDX (`desktop` y `mobile`).

- Banda a todo el ancho: alto `clamp(420px, 62vh, 720px)` (token `--portada-alto`) y overflow oculto. Bajo 768 px usa la versión mobile.
- Tres capas, de abajo hacia arriba:
  1. **Fondo**, en CSS (`fondo` en el MDX): el color o degradado del frame y los brillos radiales. Las elipses "Glow" de Figma (relleno al 35, 25 o 18 % y desenfoque de 160 o 180) se pasan a `radial-gradient` en px, con la caída de un círculo desenfocado. Los degradados del frame van en %, así que se estiran con la banda. Las columnas de Design system (1 px de blanco al 4 %, cada 240 px) también van en el fondo.
  2. **Líneas decorativas** (`lineas`, solo Visión general y el playmat de TCG): un SVG para desktop y otro para mobile, con el grupo completo, sin el recorte del frame. Van a tamaño real, centradas respecto del frame y ancladas a su borde inferior, como el contenido. `x` e `y` son la esquina superior izquierda respecto del frame. No escalan con el ancho y solo las recorta la banda.
  3. **Contenido** (`contenido`): la capa "Contenido (PNG transparente…)" de cada frame, en PNG ×2 sin fondo y recortada en el borde inferior del frame. En Visión general es la capa "portadacel 1". En Design system el PNG se completa con transparente hasta el borde inferior del frame.
- `caja`: ancho y alto del contenido en Figma (sin sombras), desde su borde superior hasta el borde inferior del frame. En desktop, la caja va centrada y anclada abajo. Mide como máximo su tamaño real y 1040 px (`--portada-contenido-max`), no pasa del margen lateral y deja 136 px libres arriba (`--portada-aire`). En pantallas grandes no crece: solo se extiende el fondo. En mobile ocupa la misma proporción que en el frame de 375 y escala con el ancho. Las sombras del PNG pueden sobresalir de la caja.
- Cómo se exportó: `download_assets` devuelve los PNG con el fondo del frame incluido. Por eso, cada capa de contenido se copió escalada ×2 a un frame temporal transparente del mismo tamaño ×2, se capturó solo el contenido y después se borró el frame temporal. El SVG que exporta Figma deja afuera lo que cae fuera del frame. El playmat de TCG se armó a partir de la geometría de cada forma (trazo interior, blanco al 16 %), y las líneas de Visión general salieron de los trazos completos del export.
- El campo `portada` (imagen única) se mantiene: es la imagen para compartir y la portada de Pagos masivos B2B, que todavía no tiene frame en la página Portadas.
- La transición desde la card del home apunta a la banda completa.

### Plantilla Exploración

1. Volver a Exploraciones.
2. Eyebrow ("Exploraciones · categoría"), título y descripción.
3. Metadatos: Año, Tipo y Herramientas.
4. Galería: imágenes grandes, pares lado a lado o grilla de 2 columnas, cada una con su pie.
5. Navegación anterior / siguiente.
6. Footer.

En mobile todas las columnas se apilan en una sola y el nav lateral del caso desaparece.

## Contenido

Los textos se copian tal cual desde Figma; Claude Code los lee del frame de cada página y los pasa a MDX. Estos son los datos de cabecera de cada archivo, en el orden en que aparecen en el home.

### Casos

| Caso | Subtítulo | Tags | Año | Card en el home |
| --- | --- | --- | --- | --- |
| TCG League Tracker | Proyecto propio | Diseño y desarrollo, Caso de estudio, IA | 2026 | 1 |
| Registro y verificación | Skipo | Diseño de producto, Caso de estudio, App mobile | 2025 | 2 |
| Visión general | Skipo | Diseño de producto, Caso de estudio, App y webapp | 2021–2026 | 3 |
| Pagos masivos B2B | Skipo | Diseño de producto, Caso de estudio, Webapp B2B | 2024 | 4 |
| Design system | Skipo | Design system, Caso de estudio, Componentes | 2024 | 5, a todo el ancho |

### Exploraciones

| Exploración | Categoría (filtro) | Año | Tipo | Herramientas |
| --- | --- | --- | --- | --- |
| Loomer | UI | 2019 | Ejercicio de UI | Adobe XD |
| 36 Days of Type | Tipografía | 2018 | Proyecto personal | Illustrator |
| Logofolio | Logos | 2016–2018 | Identidad visual | Illustrator |
| Ilustraciones 3D | 3D | 2022 | Práctica personal | Blender |
| Al Paladar | UI | 2021 | Ejercicio de estudio | Figma |
| Happ | UI | 2022 | Landing page | Figma |

Navegación entre exploraciones, en ciclo: Logofolio → 36 Days of Type → Loomer → Ilustraciones 3D → Al Paladar → Happ → Logofolio.

El filtro Publicidad no tiene piezas todavía: se oculta hasta que haya una.

### Campos de cada archivo MDX

- Caso: título, bajada, rol, año, alcance, herramientas, resumen, qué hice, métricas, destacados, secciones, siguientes casos, imagen de portada, imagen de card y tags.
- Exploración: título, categoría, descripción, año, tipo, herramientas, galería (imagen, pie y si va a todo el ancho o en par), anterior y siguiente.

## Imágenes

Cada imagen se exporta una sola vez, en PNG ×2, con un nombre en minúsculas y guiones dentro de la carpeta de su página. Astro genera los tamaños y formatos (AVIF y WebP) para desktop y mobile a partir de ese archivo.

```
src/assets/
  home/            card-tcg.png, card-registro.png, ...
  casos/
    tcg-league-tracker/   portada.png, destacado-tips.png, ...
    registro-y-verificacion/
    vision-general/
    pagos-masivos-b2b/
    design-system/
  exploraciones/
    loomer/      portada.png, inicio-y-calendario.png, ...
    logofolio/   cosmos-media.png, 251media.png, ...
    ...
```

Reglas:

- El nombre del archivo = el pie de imagen en minúsculas y con guiones ("Detalle: agua y rocas" → detalle-agua-y-rocas.png).
- Exportar desde el placeholder de la página desktop, no desde la composición original, para que el recorte sea el mismo.
- Las portadas de exploración del home (mosaico de Logofolio, mitad y mitad de Al Paladar) son composiciones: se exportan como imagen única.
- Las imágenes que en mobile cambian de proporción (la tabla de comparación de TCG) se exportan en dos versiones: nombre.png y nombre-mobile.png.
- Cada imagen lleva un texto alternativo; por defecto, el pie de imagen.

## Animaciones

El único momento llamativo es el header; el resto del sitio usa cuatro movimientos cortos y consistentes, para que no se vea genérico. Todo se apaga con prefers-reduced-motion.

| Movimiento | Dónde | Cómo |
| --- | --- | --- |
| Header circuito JN | Home | Ya resuelto en el artefacto; se pausa fuera de pantalla |
| Aparición al hacer scroll | Títulos de sección, imágenes grandes, grupos de cards | Opacidad 0 → 1 y 16 px hacia arriba, 500 ms, ease-out; cards con 60 ms de diferencia entre sí; una sola vez por elemento |
| Sección activa | Nav lateral de los casos | La sección visible se marca en el nav mientras se hace scroll; clic con scroll suave |
| Hover de cards | Proyectos y exploraciones del home, siguientes casos | La imagen escala a 1.03 en 400 ms y el título se subraya |
| Transición entre páginas | Home → caso o exploración | View Transitions de Astro: la imagen de la card se convierte en la portada |

No usar: parallax en el texto, animaciones en cada párrafo, contadores animados en las métricas ni cursores personalizados.

Implementación: CSS + IntersectionObserver para las apariciones y la sección activa, sin librerías. Si más adelante se quiere algo más complejo, se evalúa Motion One o GSAP.

## Etapas en Claude Code

Son 7 etapas, una sesión de Claude Code por etapa y un commit al cerrar cada una. Ninguna etapa empieza hasta que la anterior se ve bien en desktop y en 375 px.

1. **Base del proyecto.** Crear el proyecto Astro, el CLAUDE.md, los tokens de la sección Fundamentos, la tipografía TikTok Sans, el layout con nav y footer, y conectar el repo a Vercel.
   - Prompt: "Lee el CLAUDE.md y el documento de traspaso. Crea un proyecto Astro con los tokens de Fundamentos visuales, la fuente TikTok Sans y un layout base con el nav y el footer del frame 1:2 de Figma. Deja el deploy en Vercel listo."
2. **Home.** Integrar el header circuito JN como componente, la grilla de proyectos y la de exploraciones con filtros.
   - Prompt: "Integra el header del artefacto (te paso el HTML) como componente Astro sin cambiar su comportamiento. Luego arma Proyectos y Exploraciones según los frames 1:2 y 103:302."
3. **Plantilla de caso + Registro y verificación.** Construir la plantilla completa y el primer MDX, con el nav lateral y la sección activa.
4. **Los otros 4 casos.** Solo contenido: un MDX por caso, copiando textos desde Figma.
5. **Plantilla de exploración + las 6 exploraciones.** Galería, filtros del home conectados y navegación en ciclo.
6. **Pasada de animaciones.** Aplicar la tabla de Animaciones en todo el sitio, con reduced motion.
7. **Cierre.** Lighthouse sobre 90 en las cuatro categorías, metadatos e imagen para compartir de cada página, favicon, 404, sitemap, dominio jorgenehmer.com.

Antes de la etapa 3 tienen que estar exportadas las imágenes de Registro; antes de la 4 y la 5, las del resto.

## CLAUDE.md

Este archivo va en la raíz del repo. Claude Code lo lee al empezar cada sesión, así no hay que repetir las reglas.

```markdown
# Portafolio de Jorge Nehmer (jorgenehmer.com)

## Proyecto
- Astro + MDX, sitio estático, deploy en Vercel.
- Diseño: Figma T7Vm19O2v6y37uSAoBLw5D, página Portafolio. Ids de frames en el documento de traspaso.
- 3 plantillas: Home, Caso, Exploración. El contenido vive en src/content/.

## Reglas de contenido
- Todo en español, tratando al lector de "tú". Nada de voseo ni modismos argentinos.
- Copiar los textos de Figma tal cual. No inventar datos, cifras ni nombres: si falta algo, dejarlo como [Confirmar] y avisar.
- Números con formato de EE. UU.: coma para miles y punto para decimales (126,530 USDT).
- En Skipo, a los ledgers se les dice "cartolas".

## Reglas de diseño
- Usar los tokens CSS; no escribir colores ni tamaños sueltos.
- Evitar el look genérico de IA: nada de "→" agregado a links que no lo tienen en Figma, ni tiles idénticos sin razón, ni animaciones en cada elemento.
- Animaciones solo las del documento de traspaso, siempre con prefers-reduced-motion.
- Mobile primero en el CSS; revisar siempre en 375 px y en 1440 px.

## Forma de trabajo
- Una etapa por sesión. Al terminar: revisar con capturas contra Figma, listar diferencias y hacer commit.
- No cambiar el header circuito JN salvo para integrarlo.
```
