# SUMA RSE Coahuila — Design System

A warm, hopeful design system for **SUMA RSE Coahuila**, a non-profit in Saltillo, Coahuila, México offering **free social education** to children, youth, adults and low-income families — helping people build better opportunities.

> Brand line: *"Súmate a abrir oportunidades."* When one person learns, the whole community moves forward.

---

## Sources provided
- **Logo** — `uploads/reupload_zip-1781998256208.png` (the "SUMA RSE COAHUILA" mosaic mark). Processed into `assets/logo-*.png`.
- **Color palette PDF** — `uploads/Paleta de colores.pdf` (defined Sunflower `#E2D300` + Honey Flower `#58296E`).
- **Brand brief** (from the user) — the expanded 5-color palette and usage doctrine (see Colors below).

> ⚠️ The original `Diseño sin título.zip` of brand assets never arrived in the project. We have the **logo** and **colors** only. There are **no brand photographs** — the website kit uses honest, on-brand "photo placeholder" panels (`SumaPhoto`) wherever real photography belongs. **Please share real photos** to replace them.

---

## Brand at a glance
- **Name / mark:** SUMA RSE Coahuila. The signature is a **mosaic of lime-yellow tiles** forming an open square — each tile a person, together a community. The wordmark sets "SUMA" light and "RSE" bold in purple, with letterspaced "COAHUILA" beneath.
- **Primary color:** Honey Flower purple `#58296E`.
- **Accent:** Sunflower lime-yellow `#E2D300` — reserved for CTAs and key accents.
- **Type:** Bricolage Grotesque (display) + Plus Jakarta Sans (text). *(See font note.)*
- **Voice:** Warm, human, hopeful. Spanish-first.

---

## CONTENT FUNDAMENTALS
How SUMA RSE writes.

- **Language:** Spanish (México). Bilingual is possible later, but the system ships Spanish-first.
- **Person:** Inclusive **"nosotros"** for the organization and warm **"tú"** for the reader. *"Súmate", "Tú también puedes", "Acompañamos a…".* Never corporate "usted" walls.
- **Tone:** Warm & human + hopeful & uplifting. Dignifying, never pitying. People are protagonists, not "beneficiaries" — we say *"personas acompañadas"*, *"la comunidad"*.
- **Casing:** Sentence case everywhere (headlines and buttons). Reserve ALL-CAPS only for the letterspaced eyebrow/lockup style (e.g. `NUESTROS PROGRAMAS`, `COAHUILA`).
- **Headlines:** Short, active, verb-forward. *"Súmate a abrir oportunidades"*, *"Educación que cambia historias"*, *"Creemos que la educación abre puertas."*
- **Body:** Plain, concrete, specific. Lead with the human impact, then the number. *"Aprendí a leer a los 54 años. Hoy le leo cuentos a mis nietos."*
- **Numbers:** Use real, modest, honest figures with a "+" for approximations (`+1,200 personas`), `%` for retention (`92% continúan estudiando`). Currency as `$500 MXN`.
- **CTAs:** Direct and generous — *"Donar ahora", "Quiero donar", "Ver programas", "Quiero ser voluntario"*. One primary CTA per view.
- **Emoji:** **Not used.** The mosaic motif and iconography carry the warmth instead.
- **Vibe:** Community, cercanía, dignidad. Hopeful but grounded — concrete stories from Saltillo over abstract slogans.

---

## VISUAL FOUNDATIONS
- **Color usage doctrine:** Neutrals lead, **purple is the hero**, **yellow is the accent** (CTAs, key metrics, small motif tiles). Avoid large fields of pure yellow — it fatigues the eye. Big color blocks are Honey Flower purple or Plum-Gray; yellow appears in buttons, eyebrow squares, stat figures on dark, and the tile motif.
- **Backgrounds:** Mostly Canvas White `#FBFBFA`. Soft sections use Muted Lavender `#F2EEF5`. Feature/impact bands use Honey Flower purple or Plum-Gray. **No gradients** — flat brand color fields only. Decorative interest comes from the **scattered tile mosaic** (see `SumaMosaic`), used low-opacity in corners, never busy.
- **Imagery (intended):** Warm, candid, documentary photos of real people in Saltillo — learning, teaching, community. Natural light, warm tone, never stocky or staged. *(None provided yet — placeholders stand in.)*
- **Type:** Display = Bricolage Grotesque 700–800, tight tracking (`-0.02em`), sentence case. Text = Plus Jakarta Sans 400–700, line-height 1.55–1.7 for warmth. Eyebrows: 13px, 700, uppercase, `.14em` tracking, preceded by a small yellow square.
- **Spacing:** 4px base scale. Generous section padding (`--section-y`, clamps 56–112px). Container max 1200px; narrow reading column 760px.
- **Corner radii:** Calm and tile-like. `xs 4px` (matches logo tiles) → `lg 16px` (cards) → `xl 24px` (feature panels). `pill` only for tags, chips, avatars, progress bars. Never pill-round large surfaces.
- **Borders:** Hairline `1px` neutral borders on cards (`--border-subtle`). 2px purple borders for selected/emphasis states.
- **Shadows:** Low, soft, and **plum-tinted** (never neutral gray). `xs`–`lg` for elevation; `--shadow-brand` (purple glow) for the primary button hover and brand cards.
- **Cards:** White, `--radius-lg` (16px), 1px subtle border + `shadow-xs`. `elevated` adds `shadow-md`. `interactive` cards lift 3px and deepen the shadow on hover. `soft` = lavender, `brand` = purple with white text.
- **Buttons:** `--radius-md` (12px), weight 700. Primary = purple, **CTA = yellow** (reserve for the single most important action), secondary = purple outline, ghost = transparent.
- **Hover states:** Buttons darken one step + raise shadow; cards lift; nav/ghost gain a soft lavender wash. Links go purple-700.
- **Press states:** Buttons nudge down 1px (`translateY(1px)`) and darken another step. No squashy scale.
- **Motion:** Gentle and hopeful. `--ease-out` `cubic-bezier(.22,.61,.36,1)`, durations 140/220/360ms. Fades and short slides; **no bounces, no infinite loops** on content. Respect `prefers-reduced-motion`.
- **Transparency & blur:** Sticky header uses a translucent Canvas White + `backdrop-filter: blur(10px)`. Otherwise surfaces are opaque.
- **Focus:** 3px purple focus ring (`--focus-ring`) — visible and accessible.

---

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) — clean 2px stroke, round caps/joins, 24×24 grid. It matches the brand's friendly-but-confident feel. *(Substitution flagged: no icon set was provided in the brand assets; Lucide is the closest, freely-licensed match.)*
- **Implementation:** A curated subset of Lucide path data is inlined in `ui_kits/website/Icons.jsx`, exposed as `window.SumaIcon` → `<SumaIcon name="heart" size={20} />`. To add icons, copy the path data from lucide.dev into `SUMA_ICON_PATHS`. For production you can also load Lucide from CDN.
- **Style rules:** Stroke icons only (no filled/duotone), 2px weight, currentColor. Size 16–26px inline. On yellow/lavender chips icons are purple; on purple/plum surfaces they're white or yellow.
- **Emoji / unicode as icons:** Never. Use the icon set.
- **The mosaic** is a brand device, not an icon — use `SumaMosaic` for decoration, `SumaIcon` for UI affordances.

---

## INDEX — what's in this folder

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s the token files.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**`tokens/`** — CSS custom properties
- `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css`

**`assets/`** — logo lockups
- `logo-full.png` / `logo-full-transparent.png` / `logo-full-reverse.png` (white wordmark for dark bg)
- `logo-mark.png` / `logo-mark-transparent.png` / `logo-mark-reverse.png`

**`foundations/`** — specimen cards (Design System tab): brand & scale colors, status, pairings; display/body/eyebrow type; spacing, radii, shadows; logo & tile motif.

**`components/`** — reusable React primitives (namespace `window.SUMARSEDesignSystem_6dc1cb`)
- `core/` — **Button, IconButton, Badge, Tag, Avatar**
- `forms/` — **Input, Select, Checkbox, Radio, Switch**
- `surfaces/` — **Card, Stat, ProgressBar**
- `navigation/` — **Tabs**
- `feedback/` — **Alert**

**`ui_kits/website/`** — marketing website recreation (interactive)
- `index.html` — click-through: Inicio · Programas · Nosotros · Donar (with live donation flow)
- `Header.jsx` `Footer.jsx` `HomeScreen.jsx` `ProgramsScreen.jsx` `NosotrosScreen.jsx` `DonarScreen.jsx`
- `Brand.jsx` (logo, mosaic, photo placeholder) · `Icons.jsx`

---

## Font note (action needed)
No font files were provided. We selected a free Google Fonts pairing that fits the warm/hopeful brief: **Bricolage Grotesque** (display) + **Plus Jakarta Sans** (text), loaded from the Google Fonts CDN in `tokens/fonts.css`. If you have official brand fonts, share them and we'll swap in `@font-face` rules and ship the binaries.
