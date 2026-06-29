// Iniciativas — Red SUMA RSE Coahuila
const HOME = 'Red SUMA RSE Coahuila.html';

function IEyebrow({ children, onDark }) {
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
function IniHeader() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const links = [
    { label: 'Inicio', href: HOME },
    { label: 'Iniciativas', href: '#', current: true },
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
            <a key={l.label} href={l.href} onClick={l.current ? (e) => e.preventDefault() : undefined}
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
function IniHero() {
  const Mosaic = window.SumaMosaic;
  const mobile = window.useIsMobile();
  return (
    <section style={{ background: 'var(--canvas-white)', position: 'relative', overflow: 'hidden' }}>
      {!mobile && <Mosaic size={240} color="var(--lavender)" style={{ position: 'absolute', top: -36, right: -48, opacity: 0.85 }} />}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter) var(--space-7)', position: 'relative' }}>
        <IEyebrow>Iniciativas</IEyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 1.04,
          letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: '18px 0 0', maxWidth: 760,
        }}>Acciones y resultados</h1>
        <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.6, color: 'var(--text-body)', margin: '20px 0 0', maxWidth: 600 }}>
          Sumando esfuerzos para una mayor capacidad de actuar como propulsores de cambio en la sociedad. Cada iniciativa es una fase de nuestra inversión social conjunta.
        </p>
      </div>
    </section>
  );
}

/* ---------- DIRECTORIO DE INICIATIVAS ---------- */
function IniList() {
  const { Button, Badge } = window.SUMARSEDesignSystem_6dc1cb;
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;

  const items = [
    {
      num: '3.0', version: 'Iniciativa 3.0', status: 'En curso', active: true, icon: 'graduation', file: 'Iniciativa-3-0.html',
      title: 'Educación para el Bienestar', focus: 'Educación · Bienestar socioemocional',
      desc: 'Capacitación a profesionales de la educación para desarrollar sus capacidades socioemocionales, mejorando su desempeño docente, el clima de las aulas y el cuidado y aprendizaje de niñas, niños y jóvenes.',
      stat: null,
    },
    {
      num: '2.0', version: 'Iniciativa 2.0', status: 'Terminada', active: false, icon: 'leaf', file: 'Iniciativa-2-0.html',
      title: 'Conciencia y Conservación', focus: 'Medio ambiente · Formación',
      desc: 'Llevamos a cabo programas de formación a brigadistas infantiles, juveniles y guardaparques capacitados para el cuidado de nuestros entornos naturales.',
      stat: null,
    },
    {
      num: '1.0', version: 'Iniciativa 1.0', status: 'Terminada', active: false, icon: 'map-pin', file: 'Iniciativa-1-0.html',
      title: 'Zapalinamé como salón de clases', focus: 'Educación ambiental · Niñez',
      desc: 'Realizamos recorridos escolares informativos y de concientización con niñas y niños de 5.º de primaria de escuelas públicas, usando la sierra como aula viva.',
      stat: { value: '+4,800', label: 'niñas y niños participantes' },
    },
  ];

  return (
    <section style={{ background: 'var(--lavender)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {items.map((it) => (
            <article key={it.num} style={{
              background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
              border: it.active ? '2px solid var(--purple-300)' : '1px solid var(--border-subtle)',
              boxShadow: it.active ? 'var(--shadow-md)' : 'var(--shadow-xs)',
              display: 'grid', gridTemplateColumns: mobile ? '1fr' : '260px 1fr', alignItems: 'stretch',
            }}>
              {/* version panel */}
              <div style={{
                position: 'relative', overflow: 'hidden',
                background: it.active ? 'var(--honey-flower)' : 'var(--lavender)',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'var(--space-7)',
              }}>
                <Mosaic size={120} color={it.active ? 'rgba(226,211,0,0.18)' : 'var(--purple-200)'} style={{ position: 'absolute', top: -14, right: -18, opacity: it.active ? 1 : 0.7 }} />
                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'inline-flex', width: 50, height: 50, borderRadius: 'var(--radius-md)', background: it.active ? 'rgba(255,255,255,0.12)' : 'var(--surface-card)', color: it.active ? 'var(--sunflower)' : 'var(--purple-600)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon name={it.icon} size={26} strokeWidth={1.9} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.75rem, 4vw, 3.75rem)', lineHeight: 0.95, color: it.active ? 'var(--sunflower)' : 'var(--honey-flower)', letterSpacing: '-0.03em' }}>{it.num}</div>
                  <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: it.active ? 'var(--purple-100)' : 'var(--text-muted)', marginTop: 8 }}>{it.version}</div>
                </div>
              </div>
              {/* content */}
              <div style={{ padding: 'var(--space-7) var(--space-8)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
                  <Badge variant={it.active ? 'success' : 'neutral'} dot>{it.status}</Badge>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: 'var(--size-sm)', fontWeight: 600 }}>
                    <Icon name="target" size={15} /> {it.focus}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h3)', color: 'var(--text-heading)', margin: 0, letterSpacing: '-0.01em' }}>{it.title}</h2>
                <p style={{ color: 'var(--text-body)', lineHeight: 1.65, fontSize: 'var(--size-md)', margin: '12px 0 0', maxWidth: 620 }}>{it.desc}</p>
                {it.stat && (
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-xl)', color: 'var(--honey-flower)' }}>{it.stat.value}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--size-sm)' }}>{it.stat.label}</span>
                  </div>
                )}
                <window.SumaButtonRow style={{ marginTop: 24 }}>
                  <Button variant="primary" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = it.file; }}>Leer más</Button>
                </window.SumaButtonRow>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function IniCTA() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  return (
    <section style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{
          background: 'var(--plum-gray)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative',
          padding: 'var(--space-9) var(--space-8)', textAlign: 'center',
        }}>
          <Mosaic size={200} color="rgba(226,211,0,0.16)" style={{ position: 'absolute', bottom: -24, right: 28 }} />
          <Mosaic size={150} color="rgba(255,255,255,0.06)" style={{ position: 'absolute', top: -16, left: 32 }} />
          <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
            <IEyebrow onDark>Próxima fase</IEyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--canvas-white)', margin: '14px 0 0' }}>
              Suma tu empresa a la siguiente iniciativa
            </h2>
            <p style={{ color: 'var(--neutral-300)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: '14px auto 28px', maxWidth: 520 }}>
              Cada fase suma más empresas, más alianzas y más impacto. Conversemos sobre cómo participar en la inversión social conjunta de la Red.
            </p>
            <window.SumaButtonRow center>
              <Button variant="cta" size="lg" leadingIcon={<Icon name="mail" size={18} />} onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
            </window.SumaButtonRow>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function IniFooter() {
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
        {col('Red', [{ label: 'Quiénes somos', href: HOME + '#quienes' }, { label: 'Iniciativas', href: 'Iniciativas.html' }, { label: 'Resultados', href: HOME + '#resultados' }, { label: 'Nosotros', href: 'Nosotros.html' }])}
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

function IniApp() {
  return (
    <React.Fragment>
      <window.SiteHeader current="iniciativas" />
      <main>
        <IniHero />
        <IniList />
        <IniCTA />
      </main>
      <window.SiteFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<IniApp />);
