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
