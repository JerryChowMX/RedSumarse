# Red SUMA RSE Coahuila

Sitio web e identidad de marca de **SUMA RSE Coahuila** — una organización sin fines de lucro en Saltillo, Coahuila, México que ofrece **educación social gratuita** a niñas, niños, jóvenes, personas adultas y familias de bajos recursos.

> **Súmate a abrir oportunidades.**
> Cuando una persona aprende, toda la comunidad avanza.

---

## Ver el sitio

El sitio en vivo (Cloudflare Pages) sirve [`index.html`](index.html), que ahora es el **entry multi-archivo editable**: carga los tokens del sistema de diseño y los componentes JSX (`brand.jsx`, `chrome.jsx`, `Landing.jsx`) y los transpila en el navegador con Babel. Para cambiar el contenido (p. ej. el Home), edita **`Landing.jsx`** y haz push — Cloudflare redespliega solo.

- **Con servidor local** (recomendado, así funcionan los imports relativos):

  ```bash
  python -m http.server 8080
  # luego abre http://localhost:8080/
  ```

> Nota: como transpila JSX en el navegador con Babel, necesita servirse vía **HTTP** (no `file://`). Para abrir con doble clic sin servidor, usa el snapshot autocontenido [`Red SUMA RSE Coahuila (standalone).html`](Red%20SUMA%20RSE%20Coahuila%20(standalone).html) — ojo: es una foto fija del handoff original y **no** incluye cambios posteriores como el banner de aliados.

---

## Páginas

| Página | Entrada | Componente |
|---|---|---|
| Inicio | `Red SUMA RSE Coahuila.html` | `Landing.jsx` |
| Nosotros | `Nosotros.html` | `Nosotros.jsx` |
| Iniciativas | `Iniciativas.html` | `Iniciativas.jsx` |
| Detalle de iniciativa | `Iniciativa-1-0.html` … `Iniciativa-3-0.html` | `IniciativaDetalle.jsx` |
| Donar | `Donar.html` | `Donar.jsx` |
| Contacto | `Contacto.html` | `Contacto.jsx` |

Componentes compartidos: `brand.jsx` (logo, mosaico, placeholders) y `chrome.jsx` (header/footer/navegación).

---

## Sistema de diseño

Vive en [`_ds/suma-rse-design-system-6dc1cbea-9c5d-4bc9-9d73-ed7c7cc7d529/`](_ds/suma-rse-design-system-6dc1cbea-9c5d-4bc9-9d73-ed7c7cc7d529/). Ver su [`readme.md`](_ds/suma-rse-design-system-6dc1cbea-9c5d-4bc9-9d73-ed7c7cc7d529/readme.md) para la doctrina completa de marca.

**Color**
- Honey Flower (morado) `#58296E` — color primario / héroe
- Sunflower (amarillo lima) `#E2D300` — acento reservado para CTAs y métricas clave
- Plum-Gray `#211826` · Canvas White `#FBFBFA` · Lavender `#F2EEF5`

Doctrina: *los neutros mandan, el morado es el héroe, el amarillo es el acento*. Sin degradados; el interés visual viene del mosaico de teselas.

**Tipografía**
- Display: Bricolage Grotesque
- Texto: Plus Jakarta Sans
- (Cargadas desde Google Fonts; si hay tipografías oficiales de marca, se pueden sustituir.)

**Tokens:** `_ds/.../tokens/` → `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.

---

## Assets

- `assets/` — lockups del logo (completo, transparente, reverse para fondos oscuros) y el isotipo (mosaico).
- `assets/afiliados/` — logos de las empresas aliadas que aparecen en el banner "Empresas que ya suman" del Home (optimizados para web).
- `uploads/` — referencias originales del proceso de diseño.

> **Pendiente:** el sitio usa paneles de "placeholder" honestos donde corresponden fotografías reales. Comparte fotos reales de la comunidad en Saltillo para reemplazarlos.

---

## Estructura

```
.
├── index.html                              # Sitio standalone (para Pages / abrir directo)
├── Red SUMA RSE Coahuila.html              # Entrada multi-archivo (Inicio)
├── Red SUMA RSE Coahuila (standalone).html # Compilación autocontenida
├── *.html / *.jsx                          # Páginas y componentes
├── assets/                                 # Logos
├── uploads/                                # Referencias de diseño
└── _ds/.../                                # Sistema de diseño (tokens, componentes, manifest)
```

---

## Créditos

Identidad de marca y diseño creados con [Claude Design](https://claude.ai/design) y entregados como handoff para implementación. Tipografía e iconografía (Lucide) son sustituciones libres pendientes de confirmar contra los assets oficiales de marca.
