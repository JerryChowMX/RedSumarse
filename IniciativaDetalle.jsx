// Iniciativa — detail page (shared template). The HTML file sets window.INICIATIVA_ID.
const HOME = 'Red SUMA RSE Coahuila.html';
const LIST = 'Iniciativas.html';

const INICIATIVAS = {
  '3-0': {
    file: 'Iniciativa-3-0.html', num: '3.0', version: 'Iniciativa 3.0', status: 'En curso', active: true,
    icon: 'graduation', year: '2025 – presente', focus: 'Educación · Bienestar socioemocional',
    title: 'Educación para el Bienestar',
    lead: 'Capacitación a profesionales de la educación para desarrollar sus capacidades socioemocionales, mejorando su desempeño docente, el clima de las aulas y el cuidado y aprendizaje de niñas, niños y jóvenes.',
    body: 'Es la fase actual de nuestra inversión social conjunta. Acompañamos a docentes con formación práctica y herramientas para el bienestar dentro del aula, sabiendo que una o un docente que se siente bien transforma la experiencia de aprendizaje de todo su grupo.',
    highlights: [
      'Formación en habilidades socioemocionales para el profesorado.',
      'Acompañamiento dentro del aula durante el ciclo escolar.',
      'Mejora del clima escolar y del vínculo con las y los estudiantes.',
    ],
    gallery: ['Capacitación docente', 'Sesión en aula', 'Equipo facilitador', 'Comunidad escolar', 'Jornada de bienestar'],
  },
  '2-0': {
    file: 'Iniciativa-2-0.html', num: '2.0', version: 'Iniciativa 2.0', status: 'Terminada', active: false,
    icon: 'leaf', year: '2023', focus: 'Medio ambiente · Formación',
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
    icon: 'map-pin', year: '2021', focus: 'Educación ambiental · Niñez',
    title: 'Zapalinamé como salón de clases',
    lead: 'Realizamos recorridos escolares informativos y de concientización con niñas y niños de 5.º de primaria de escuelas públicas, usando la sierra como aula viva.',
    body: 'La primera iniciativa de la Red convirtió la Sierra de Zapalinamé en un aula al aire libre. A través de recorridos guiados, las y los estudiantes conocieron de cerca su entorno natural y el valor de cuidarlo.',
    highlights: [
      'Recorridos escolares guiados por la sierra.',
      'Actividades de concientización ambiental.',
      'Participación de escuelas públicas de Saltillo.',
    ],
    stat: { value: '+4,800', label: 'niñas y niños participantes' },
    gallery: ['Recorrido escolar', 'Sierra de Zapalinamé', 'Grupo de 5.º', 'Guías de la Red', 'Actividad al aire libre'],
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

/* ---------- HEADER ---------- */
function DetHeader() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const links = [
    { label: 'Inicio', href: HOME },
    { label: 'Iniciativas', href: LIST, current: true },
    { label: 'Nosotros', href: 'Nosotros.html' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      background: 'color-mix(in srgb, var(--canvas-white) 88%, transparent)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px var(--gutter)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <a href={HOME} style={{ display: 'flex' }}><window.SumaLogo height={38} /></a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {links.map((l) => (
            <a key={l.label} href={l.href}
              style={{
                padding: '8px 14px', borderRadius: 'var(--radius-md)', textDecoration: 'none',
                fontFamily: 'var(--font-text)', fontSize: 'var(--size-base)', fontWeight: l.current ? 700 : 500,
                color: l.current ? 'var(--text-heading)' : 'var(--text-body)',
                background: l.current ? 'var(--surface-soft)' : 'transparent',
              }}
              onMouseEnter={(e) => { if (!l.current) e.currentTarget.style.background = 'var(--surface-soft)'; }}
              onMouseLeave={(e) => { if (!l.current) e.currentTarget.style.background = 'transparent'; }}
            >{l.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Button variant="secondary" size="sm" leadingIcon={<Icon name="mail" size={16} />} onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
          <Button variant="cta" size="sm" leadingIcon={<Icon name="heart" size={16} />} onClick={() => { window.location.href = 'Donar.html'; }}>Donar</Button>
        </div>
      </div>
    </header>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
            <Badge variant={d.active ? 'success' : 'neutral'} dot>{d.status}</Badge>
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{d.version}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: 0 }}>{d.title}</h1>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--honey-flower)', fontWeight: 600, fontSize: 'var(--size-md)', marginTop: 14 }}>
            <Icon name="target" size={18} /> {d.focus}
          </div>
          <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.6, color: 'var(--text-body)', margin: '18px 0 0', maxWidth: 520 }}>{d.lead}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            {d.active
              ? <Button variant="cta" size="lg" leadingIcon={<Icon name="heart" size={18} />} onClick={() => { window.location.href = 'Donar.html'; }}>Donar</Button>
              : <Button variant="secondary" size="lg" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = INICIATIVAS['3-0'].file; }}>Ver iniciativa actual</Button>}
            <Button variant="ghost" size="lg" leadingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = LIST; }}>Todas las iniciativas</Button>
          </div>
        </div>
        <Photo tone={d.active ? 'purple' : 'lavender'} label={d.gallery[0]} style={{ height: 420 }} />
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
          <DEyebrow>Sobre la iniciativa</DEyebrow>
          <p style={{ fontSize: 'var(--size-md)', lineHeight: 1.7, color: 'var(--text-body)', margin: '18px 0 0', maxWidth: 560 }}>{d.body}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h3)', color: 'var(--text-heading)', margin: '32px 0 16px' }}>Qué hacemos</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {d.highlights.map((h) => (
              <div key={h} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 26, height: 26, flex: 'none', borderRadius: '50%', background: 'var(--purple-50)', color: 'var(--purple-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                  <Icon name="check" size={16} strokeWidth={2.4} />
                </span>
                <span style={{ color: 'var(--text-body)', lineHeight: 1.55, fontSize: 'var(--size-md)' }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
        {/* ficha */}
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
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--sunflower)', lineHeight: 1 }}>{d.stat.value}</div>
                <div style={{ color: 'var(--purple-100)', fontSize: 'var(--size-sm)', marginTop: 6 }}>{d.stat.label}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALERÍA ---------- */
function DetGallery({ d }) {
  const mobile = window.useIsMobile();
  const Photo = window.SumaPhoto;
  const tones = ['purple', 'lavender', 'lavender', 'plum', 'lavender'];
  return (
    <section style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <DEyebrow>Galería</DEyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>Imágenes de la iniciativa</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gridAutoRows: '200px', gap: 14 }}>
          <Photo tone={tones[0]} label={d.gallery[0]} style={{ gridColumn: 'span 2', gridRow: 'span 2' }} />
          <Photo tone={tones[1]} label={d.gallery[1]} />
          <Photo tone={tones[2]} label={d.gallery[2]} />
          <Photo tone={tones[3]} label={d.gallery[3]} style={{ gridColumn: 'span 2' }} />
          <Photo tone={tones[4]} label={d.gallery[4]} />
        </div>
        <p style={{ color: 'var(--text-subtle)', fontSize: 'var(--size-sm)', margin: '16px 0 0' }}>
          Las imágenes son marcadores de posición. Comparte las fotos reales de la iniciativa para colocarlas aquí.
        </p>
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
        <DEyebrow>Más iniciativas</DEyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 var(--space-6)' }}>Sigue explorando</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
          {others.map((k) => {
            const o = INICIATIVAS[k];
            return (
              <a key={k} href={o.file} style={{
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function DetFooter() {
  const Icon = window.SumaIcon;
  const col = (title, items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--sunflower)', textTransform: 'uppercase', letterSpacing: '.1em' }}>{title}</div>
      {items.map((it) => (
        <a key={it.label} href={it.href || '#'} onClick={it.href ? undefined : (e) => e.preventDefault()}
          style={{ color: 'var(--purple-100)', textDecoration: 'none', fontSize: 'var(--size-base)' }}>{it.label}</a>
      ))}
    </div>
  );
  return (
    <footer style={{ background: 'var(--purple-800)', color: 'var(--canvas-white)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--gutter) var(--space-6)',
        display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.1fr', gap: 40,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
          <window.SumaFooterBrand />
          <p style={{ margin: 0, color: 'var(--purple-100)', lineHeight: 1.6, fontSize: 'var(--size-base)' }}>
            Red de empresas socialmente responsables de Coahuila. Donde hay unidad, siempre hay victoria.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {['instagram', 'facebook', 'linkedin'].map((n) => (
              <a key={n} href="#" onClick={(e) => e.preventDefault()} aria-label={n} style={{
                width: 38, height: 38, borderRadius: 'var(--radius-md)', display: 'inline-flex',
                alignItems: 'center', justifyContent: 'center', color: 'var(--purple-900)', background: 'var(--sunflower)',
              }}><Icon name={n} size={20} /></a>
            ))}
          </div>
        </div>
        {col('Red', [{ label: 'Quiénes somos', href: HOME + '#quienes' }, { label: 'Iniciativas', href: LIST }, { label: 'Resultados', href: HOME + '#resultados' }, { label: 'Nosotros', href: 'Nosotros.html' }])}
        {col('Impacto', [{ label: 'Economía' }, { label: 'Sociedad' }, { label: 'Medio ambiente' }, { label: 'Transparencia' }])}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--sunflower)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Contacto</div>
          <span style={{ display: 'flex', gap: 8, color: 'var(--purple-100)', fontSize: 'var(--size-base)' }}><Icon name="map-pin" size={18} /> Saltillo, Coahuila</span>
          <span style={{ display: 'flex', gap: 8, color: 'var(--purple-100)', fontSize: 'var(--size-base)' }}><Icon name="mail" size={18} /> contacto@redsumarse.org</span>
          <span style={{ display: 'flex', gap: 8, color: 'var(--purple-100)', fontSize: 'var(--size-base)' }}><Icon name="phone" size={18} /> (844) 000 0000</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--purple-700)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '18px var(--gutter)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          color: 'var(--purple-200)', fontSize: 'var(--size-sm)',
        }}>
          <span>© 2026 Red SUMA RSE Coahuila.</span>
          <span>Aviso de privacidad · Términos</span>
        </div>
      </div>
    </footer>
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
