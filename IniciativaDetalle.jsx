// Iniciativa — detail page (shared template). The HTML file sets window.INICIATIVA_ID.
const HOME = 'Red SUMA RSE Coahuila.html';
const LIST = 'Iniciativas.html';

const INICIATIVAS = {
  '3-0': {
    file: 'Iniciativa-3-0.html', num: '3.0', version: 'Iniciativa 3.0', status: 'Terminada', active: false,
    icon: 'graduation', year: '2024 – 2025', focus: 'Educación · Bienestar socioemocional',
    title: 'Educar para el Bienestar',
    lead: 'Capacitación a profesionales de la educación para desarrollar sus capacidades socioemocionales, mejorando su desempeño docente, el clima de las aulas y el cuidado y aprendizaje de niñas, niños y jóvenes.',
    body: 'Fue la tercera fase de nuestra inversión social conjunta, realizada junto con el aliado AtentaMente. Acompañamos a docentes con formación práctica y herramientas para el bienestar dentro del aula, sabiendo que una o un docente que se siente bien transforma la experiencia de aprendizaje de todo su grupo.',
    highlights: [
      'Formación en habilidades socioemocionales para el profesorado.',
      'Acompañamiento dentro del aula durante el ciclo escolar.',
      'Mejora del clima escolar y del vínculo con las y los estudiantes.',
    ],
    gallery: ['Capacitación docente', 'Sesión en aula', 'Equipo facilitador', 'Comunidad escolar', 'Jornada de bienestar'],
  },
  '2-0': {
    file: 'Iniciativa-2-0.html', num: '2.0', version: 'Iniciativa 2.0', status: 'Terminada', active: false,
    icon: 'leaf', year: '2019', focus: 'Medio ambiente · Formación',
    title: 'Conciencia y Conservación',
    lead: 'Llevamos a cabo programas de formación a brigadistas infantiles, juveniles y guardaparques capacitados para el cuidado de nuestros entornos naturales.',
    body: 'Esta fase puso el foco en el cuidado del medio ambiente como una responsabilidad compartida. Formamos a brigadistas de distintas edades y a guardaparques, fortaleciendo las capacidades locales para conservar los espacios naturales de la región.',
    highlights: [
      'Formación de brigadistas infantiles y juveniles.',
      'Capacitación a guardaparques de la región.',
      'Cultura de conservación y cuidado del entorno.',
    ],
    gallery: ['Brigadistas en campo', 'Taller de formación', 'Guardaparques', 'Entorno natural', 'Jornada ambiental'],
  },
  '1-0': {
    file: 'Iniciativa-1-0.html', num: '1.0', version: 'Iniciativa 1.0', status: 'Terminada', active: false,
    icon: 'map-pin', year: '2017 – 2018', focus: 'Educación ambiental · Niñez',
    title: 'Zapalinamé como tu salón de clases',
    lead: 'Realizamos recorridos escolares informativos y de concientización con niñas y niños de 5.º de primaria de escuelas públicas, usando la sierra como aula viva.',
    body: 'La primera iniciativa de la Red convirtió la Sierra de Zapalinamé en un aula al aire libre. A través de recorridos guiados, las y los estudiantes conocieron de cerca su entorno natural y el valor de cuidarlo.',
    highlights: [
      'Recorridos escolares guiados por la sierra.',
      'Actividades de concientización ambiental.',
      'Participación de escuelas públicas de Saltillo.',
    ],
    stat: { value: '+4,800', label: 'niñas y niños participantes' },
    gallery: ['Recorrido escolar', 'Sierra de Zapalinamé', 'Grupo de 5.º', 'Guías de la Red', 'Actividad al aire libre'],
    // Real photos (assets/iniciativas/1-0). Gallery items may span grid cells (w/h).
    photos: {
      hero: { src: 'assets/iniciativas/1-0/recorrido-grupo.webp', alt: 'Recorrido escolar en la Sierra de Zapalinamé' },
      gallery: [
        { src: 'assets/iniciativas/1-0/lona-zapaliname.webp', alt: 'Zapalinamé como salón de clase', h: 2 },
        { src: 'assets/iniciativas/1-0/presidium.webp', alt: 'Evento de arranque de la iniciativa', w: 2 },
        { src: 'assets/iniciativas/1-0/asistentes.webp', alt: 'Niñas y niños participantes' },
        { src: 'assets/iniciativas/1-0/canon-san-lorenzo.webp', alt: 'Visita al Cañón de San Lorenzo', w: 2 },
        { src: 'assets/iniciativas/1-0/comitiva.webp', alt: 'Comitiva de la Red y aliados' },
        { src: 'assets/iniciativas/1-0/caminata.webp', alt: 'Caminata por la sierra', h: 2 },
        { src: 'assets/iniciativas/1-0/evento.webp', alt: 'Asistentes al evento' },
      ],
    },
  },
};
const ORDER = ['3-0', '2-0', '1-0'];

function DEyebrow({ children, onDark }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)',
      fontWeight: 700, fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase',
      color: onDark ? 'var(--sunflower)' : 'var(--honey-flower)',
    }}>
      <span style={{ width: 8, height: 8, background: 'var(--sunflower)', borderRadius: 2 }} />{children}
    </span>
  );
}


/* ---------- HERO ---------- */
function DetHero({ d }) {
  const { Button, Badge } = window.SUMARSEDesignSystem_6dc1cb;
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Photo = window.SumaPhoto;
  return (
    <section style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-7) var(--gutter) 0' }}>
        {/* breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-sm)', color: 'var(--text-muted)', marginBottom: 'var(--space-6)' }}>
          <a href={HOME} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Inicio</a>
          <Icon name="chevron-right" size={14} />
          <a href={LIST} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Iniciativas</a>
          <Icon name="chevron-right" size={14} />
          <span style={{ color: 'var(--text-body)', fontWeight: 600 }}>{d.title}</span>
        </div>
      </div>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.02fr 0.98fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <window.SumaReveal delay={200}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
              <Badge variant={d.active ? 'success' : 'neutral'} dot>{d.status}</Badge>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{d.version}</span>
            </div>
          </window.SumaReveal>
          <window.SumaReveal>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: 0 }}>{d.title}</h1>
          </window.SumaReveal>
          <window.SumaReveal delay={120}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--honey-flower)', fontWeight: 600, fontSize: 'var(--size-md)', marginTop: 14 }}>
              <Icon name="target" size={18} /> {d.focus}
            </div>
            <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.6, color: 'var(--text-body)', margin: '18px 0 0', maxWidth: 520 }}>{d.lead}</p>
          </window.SumaReveal>
          <window.SumaReveal delay={200}>
            <window.SumaButtonRow style={{ marginTop: 28 }}>
              {d.num !== '3.0' && <Button variant="cta" size="lg" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = INICIATIVAS['3-0'].file; }}>Ver iniciativa más reciente</Button>}
              <Button variant="ghost" size="lg" leadingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = LIST; }}>Todas las iniciativas</Button>
            </window.SumaButtonRow>
          </window.SumaReveal>
        </div>
        <window.SumaReveal delay={200} y={26}>
          {d.photos
            ? <img src={d.photos.hero.src} alt={d.photos.hero.alt} style={{
                width: '100%', height: mobile ? 300 : 420, objectFit: 'cover', display: 'block',
                borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)',
              }} />
            : <Photo tone={d.active ? 'purple' : 'lavender'} label={d.gallery[0]} style={{ height: 420 }} />}
        </window.SumaReveal>
      </div>
    </section>
  );
}

/* ---------- DETALLE + HIGHLIGHTS ---------- */
function DetBody({ d }) {
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  return (
    <section style={{ background: 'var(--lavender)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.1fr 0.9fr', gap: 56, alignItems: 'start',
      }}>
        <div>
          <window.SumaReveal>
            <DEyebrow>Sobre la iniciativa</DEyebrow>
            <p style={{ fontSize: 'var(--size-md)', lineHeight: 1.7, color: 'var(--text-body)', margin: '18px 0 0', maxWidth: 560 }}>{d.body}</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h3)', color: 'var(--text-heading)', margin: '32px 0 16px' }}>Qué hacemos</h2>
          </window.SumaReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {d.highlights.map((h, i) => (
              <window.SumaReveal key={h} delay={120 + i * 90} y={16}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ width: 26, height: 26, flex: 'none', borderRadius: '50%', background: 'var(--purple-50)', color: 'var(--purple-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <Icon name="check" size={16} strokeWidth={2.4} />
                  </span>
                  <span style={{ color: 'var(--text-body)', lineHeight: 1.55, fontSize: 'var(--size-md)' }}>{h}</span>
                </div>
              </window.SumaReveal>
            ))}
          </div>
        </div>
        {/* ficha */}
        <window.SumaReveal delay={150} y={26}>
        <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', padding: 'var(--space-7)' }}>
          <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--honey-flower)', marginBottom: 20 }}>Ficha</div>
          {[
            { icon: 'check-circle', k: 'Estado', v: d.status },
            { icon: 'calendar', k: 'Periodo', v: d.year },
            { icon: 'target', k: 'Enfoque', v: d.focus },
          ].map((row, i, arr) => (
            <div key={row.k} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
              <span style={{ width: 38, height: 38, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--purple-50)', color: 'var(--purple-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={row.icon} size={20} strokeWidth={1.9} />
              </span>
              <div>
                <div style={{ fontSize: 'var(--size-xs)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{row.k}</div>
                <div style={{ color: 'var(--text-body)', fontWeight: 600, fontSize: 'var(--size-md)', marginTop: 2 }}>{row.v}</div>
              </div>
            </div>
          ))}
          {d.stat && (
            <div style={{ marginTop: 20, padding: 'var(--space-5)', background: 'var(--honey-flower)', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
              <window.SumaMosaic size={90} color="rgba(226,211,0,0.18)" style={{ position: 'absolute', top: -10, right: -10 }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--sunflower)', lineHeight: 1 }}><window.SumaCountUp value={d.stat.value} /></div>
                <div style={{ color: 'var(--purple-100)', fontSize: 'var(--size-sm)', marginTop: 6 }}>{d.stat.label}</div>
              </div>
            </div>
          )}
        </div>
        </window.SumaReveal>
      </div>
    </section>
  );
}

/* ---------- GALERÍA ---------- */
function DetGallery({ d }) {
  const mobile = window.useIsMobile();
  const Photo = window.SumaPhoto;
  const tones = ['purple', 'lavender', 'lavender', 'plum', 'lavender'];
  const imgStyle = {
    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
    borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)',
  };
  return (
    <section style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <window.SumaReveal style={{ marginBottom: 'var(--space-6)' }}>
          <DEyebrow>Galería</DEyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>Imágenes de la iniciativa</h2>
        </window.SumaReveal>
        {d.photos ? (
          // Real photos: mosaic grid; w/h let an item span columns/rows, dense
          // flow backfills the gaps so no cell is left empty mid-grid.
          <div style={{
            display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gridAutoRows: mobile ? '150px' : '210px', gridAutoFlow: 'dense', gap: 14,
          }}>
            {d.photos.gallery.map((ph, i) => (
              <window.SumaReveal key={ph.src} delay={(i % 3) * 90} y={26} style={{
                gridColumn: ph.w === 2 ? 'span 2' : 'auto',
                gridRow: ph.h === 2 ? 'span 2' : 'auto',
              }}>
                <img src={ph.src} alt={ph.alt} title={ph.alt} loading="lazy" style={imgStyle} />
              </window.SumaReveal>
            ))}
          </div>
        ) : (
          <React.Fragment>
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gridAutoRows: '200px', gap: 14 }}>
              <window.SumaReveal y={26} style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                <Photo tone={tones[0]} label={d.gallery[0]} style={{ height: '100%' }} />
              </window.SumaReveal>
              <window.SumaReveal delay={90} y={26}>
                <Photo tone={tones[1]} label={d.gallery[1]} style={{ height: '100%' }} />
              </window.SumaReveal>
              <window.SumaReveal delay={180} y={26}>
                <Photo tone={tones[2]} label={d.gallery[2]} style={{ height: '100%' }} />
              </window.SumaReveal>
              <window.SumaReveal delay={90} y={26} style={{ gridColumn: 'span 2' }}>
                <Photo tone={tones[3]} label={d.gallery[3]} style={{ height: '100%' }} />
              </window.SumaReveal>
              <window.SumaReveal delay={180} y={26}>
                <Photo tone={tones[4]} label={d.gallery[4]} style={{ height: '100%' }} />
              </window.SumaReveal>
            </div>
            <p style={{ color: 'var(--text-subtle)', fontSize: 'var(--size-sm)', margin: '16px 0 0' }}>
              Las imágenes son marcadores de posición. Comparte las fotos reales de la iniciativa para colocarlas aquí.
            </p>
          </React.Fragment>
        )}
      </div>
    </section>
  );
}

/* ---------- PREV / NEXT ---------- */
function DetMore({ id }) {
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const others = ORDER.filter((k) => k !== id);
  return (
    <section style={{ background: 'var(--lavender)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <window.SumaReveal>
          <DEyebrow>Más iniciativas</DEyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 var(--space-6)' }}>Sigue explorando</h2>
        </window.SumaReveal>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
          {others.map((k, i) => {
            const o = INICIATIVAS[k];
            return (
              <window.SumaReveal key={k} delay={i * 110} y={26}>
              <a href={o.file} style={{
                textDecoration: 'none', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', padding: 'var(--space-6)',
                display: 'flex', gap: 18, alignItems: 'center', transition: 'box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.transform = 'none'; }}
              >
                <span style={{ width: 60, height: 60, flex: 'none', borderRadius: 'var(--radius-md)', background: o.active ? 'var(--honey-flower)' : 'var(--purple-50)', color: o.active ? 'var(--sunflower)' : 'var(--purple-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-xl)' }}>{o.num}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{o.version} · {o.status}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--size-lg)', color: 'var(--text-heading)', margin: '4px 0 0' }}>{o.title}</div>
                </div>
                <Icon name="arrow-right" size={20} style={{ color: 'var(--purple-600)' }} />
              </a>
              </window.SumaReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function DetApp() {
  const id = window.INICIATIVA_ID;
  const d = INICIATIVAS[id];
  if (!d) {
    return (
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>Iniciativa no encontrada</h1>
        <p><a href={LIST} style={{ color: 'var(--text-link)' }}>Ver todas las iniciativas</a></p>
      </div>
    );
  }
  document.title = d.title + ' — Red SUMA RSE Coahuila';
  return (
    <React.Fragment>
      <window.SiteHeader current="iniciativas" />
      <main>
        <DetHero d={d} />
        <DetBody d={d} />
        <DetGallery d={d} />
        <DetMore id={id} />
      </main>
      <window.SiteFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DetApp />);
