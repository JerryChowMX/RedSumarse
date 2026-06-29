# Red SUMA RSE Coahuila

Sitio web e identidad de marca de **SUMA RSE Coahuila** — una organización sin fines de lucro en Saltillo, Coahuila, México que ofrece **educación social gratuita** a niñas, niños, jóvenes, personas adultas y familias de bajos recursos.

> **Súmate a abrir oportunidades.**
> Cuando una persona aprende, toda la comunidad avanza.

---

## Ver el sitio

- **Rápido (sin servidor):** abre [`index.html`](index.html) directamente en tu navegador. Es la versión *standalone* autocontenida (todo el sitio en un solo archivo).
- **Con servidor local** (recomendado para desarrollo, usa los archivos fuente):

  ```bash
  # Python
  python -m http.server 8080
  # luego abre http://localhost:8080/
  ```

`index.html` y `Red SUMA RSE Coahuila (standalone).html` son la misma compilación autocontenida. El archivo de entrada multi-archivo es [`Red SUMA RSE Coahuila.html`](Red%20SUMA%20RSE%20Coahuila.html), que carga los tokens del sistema de diseño y los componentes JSX (`brand.jsx`, `chrome.jsx`, `Landing.jsx`).

> Nota: el archivo de entrada multi-archivo transpila JSX en el navegador con Babel y necesita servirse vía HTTP (no `file://`). Para abrir con doble clic sin servidor, usa `index.html`.

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
