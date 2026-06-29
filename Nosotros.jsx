// Nosotros — Red SUMA RSE Coahuila
const HOME = 'Red SUMA RSE Coahuila.html';

function NEyebrow({ children, onDark }) {
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
function NosHeader() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const links = [
    { label: 'Inicio', href: HOME },
    { label: 'Iniciativas', href: 'Iniciativas.html' },
    { label: 'Nosotros', href: '#', current: true },
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
              onClick={l.current ? (e) => e.preventDefault() : undefined}
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
          <Button variant="secondary" size="sm" leadingIcon={<Icon name="mail" size={16} />}
            onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
          <Button variant="cta" size="sm" leadingIcon={<Icon name="heart" size={16} />}
            onClick={() => { window.location.href = 'Donar.html'; }}>Donar</Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function NosHero() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  const mobile = window.useIsMobile();
  return (
    <section style={{ background: 'var(--canvas-white)', position: 'relative', overflow: 'hidden' }}>
      {!mobile && <Mosaic size={240} color="var(--lavender)" style={{ position: 'absolute', top: -36, right: -48, opacity: 0.85 }} />}
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)', textAlign: 'center', position: 'relative' }}>
        <NEyebrow>Nosotros</NEyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 1.04,
          letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: '18px 0 0',
        }}>Una red con propósito</h1>
        <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.6, color: 'var(--text-body)', margin: '20px auto 0', maxWidth: 580 }}>
          Somos un equipo dedicado a promover el bienestar social, fomentando actividades de alto impacto que transforman nuestra sociedad.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
          <Button variant="cta" size="lg" leadingIcon={<Icon name="mail" size={18} />}
            onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- MISIÓN / VISIÓN / OBJETIVOS ---------- */
function NosCore() {
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const cards = [
    {
      key: 'Misión', icon: 'target', variant: 'soft',
      text: 'Fortalecer la cultura de responsabilidad social en nuestra región, impulsando sinergias para un mayor desarrollo sustentable en la comunidad.',
    },
    {
      key: 'Visión', icon: 'sparkles', variant: 'brand',
      text: 'Ser la red que facilite alianzas y genere impactos sostenibles, donde las empresas tengan responsabilidad social de clase mundial, intensificando la calidad de vida de nuestra sociedad.',
    },
    {
      key: 'Objetivos', icon: 'trending-up', variant: 'default',
      text: 'Fomentar una cultura de responsabilidad social entre las empresas y organizaciones de Coahuila a través de la formación e intercambio de buenas prácticas, y generar esfuerzos de Inversión Social Conjunta entre las empresas miembros en alianza con actores estratégicos de la comunidad.',
    },
  ];
  const styleFor = (v) => {
    if (v === 'brand') return { bg: 'var(--honey-flower)', title: 'var(--canvas-white)', body: 'var(--purple-100)', chip: 'rgba(255,255,255,0.12)', chipFg: 'var(--sunflower)', eye: 'var(--sunflower)' };
    if (v === 'soft') return { bg: 'var(--lavender)', title: 'var(--text-heading)', body: 'var(--text-body)', chip: 'var(--surface-card)', chipFg: 'var(--purple-600)', eye: 'var(--honey-flower)' };
    return { bg: 'var(--surface-card)', title: 'var(--text-heading)', body: 'var(--text-body)', chip: 'var(--purple-50)', chipFg: 'var(--purple-600)', eye: 'var(--honey-flower)' };
  };
  return (
    <section style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 20, alignItems: 'stretch' }}>
          {cards.map((c) => {
            const s = styleFor(c.variant);
            const isDefault = c.variant === 'default';
            return (
              <div key={c.key} style={{
                background: s.bg, borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)',
                border: isDefault ? '1px solid var(--border-subtle)' : 'none',
                boxShadow: isDefault ? 'var(--shadow-xs)' : 'none',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 'var(--radius-md)', background: s.chip,
                  color: s.chipFg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <Icon name={c.icon} size={28} strokeWidth={1.9} />
                </div>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: s.eye, marginBottom: 12 }}>{c.key}</div>
                <p style={{ margin: 0, color: s.body, lineHeight: 1.65, fontSize: 'var(--size-md)' }}>{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- VALORES ---------- */
function NosValores() {
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const values = [
    { value: 'Responsabilidad', icon: 'scale', description: 'Actuamos con integridad y rendimos cuentas.', attributes: ['Integridad', 'Rendición de cuentas'] },
    { value: 'Compromiso', icon: 'heart', description: 'Cumplimos nuestras promesas con dedicación.', attributes: ['Dedicación', 'Apoyo a la comunidad'] },
    { value: 'Honestidad y transparencia', icon: 'check-circle', description: 'Operamos de manera abierta y clara.', attributes: ['Transparencia', 'Claridad'] },
    { value: 'Inclusión', icon: 'users', description: 'Valoramos y respetamos la diversidad.', attributes: ['Diversidad', 'Respeto'] },
  ];
  return (
    <section style={{ background: 'var(--lavender)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 620, marginBottom: 'var(--space-7)' }}>
          <NEyebrow>Nuestros valores</NEyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>
            Lo que nos mueve cada día
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4,1fr)', gap: 20 }}>
          {values.map((v) => (
            <div key={v.value} style={{
              background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)',
              border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--purple-50)',
                color: 'var(--purple-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
              }}>
                <Icon name={v.icon} size={24} strokeWidth={1.9} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--size-lg)', color: 'var(--text-heading)', margin: '0 0 8px', lineHeight: 1.2 }}>{v.value}</h3>
              <p style={{ margin: '0 0 16px', color: 'var(--text-muted)', lineHeight: 1.6, fontSize: 'var(--size-base)', flex: 1 }}>{v.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {v.attributes.map((a) => (
                  <span key={a} style={{
                    display: 'inline-flex', alignItems: 'center', padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                    background: 'var(--purple-50)', color: 'var(--purple-700)', fontSize: 'var(--size-xs)', fontWeight: 600,
                  }}>{a}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONOCE AL EQUIPO ---------- */
function NosTeam() {
  const mobile = window.useIsMobile();
  const team = [
    { name: 'Alejandro Eichelmann', role: 'Presidente', organization: 'Eichelmann Asesores', photo: 'alejandro-eichelmann.webp' },
    { name: 'Diana Castilla', role: 'Vicepresidenta', organization: 'Vanguardia', photo: 'diana-castilla.webp' },
    { name: 'Juan Manuel Pérez', role: 'Tesorero', organization: 'Fundación Merced Coahuila', photo: 'juan-manuel-perez.webp' },
    { name: 'Luis Rodríguez', role: 'Comunicación', organization: 'Grupo ALCE', photo: 'luis-rodriguez.webp' },
    { name: 'Ana Cecy Mata', role: 'Comunicación', organization: 'Universidad Carolina', photo: 'ana-cecy-mata.webp' },
    { name: 'Mireya Plata', role: 'Consejera honoraria · Voluntaria', organization: 'Voluntariado', photo: 'mireya-plata.webp' },
    { name: 'Elisa Valdez', role: 'Consejera honoraria', organization: 'AIERA', photo: 'elisa-valdez.webp' },
    { name: 'Rafael Peña', role: 'Consejero honorario · Voluntario', organization: 'Fordemex', photo: 'rafael-pena.webp' },
  ];
  const initials = (n) => n.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (
    <section id="equipo" style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 640, marginBottom: 'var(--space-7)' }}>
          <NEyebrow>Conoce al equipo</NEyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 8px' }}>
            Las personas detrás de la Red
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: 0 }}>
            Nuestra filosofía es simple: facilitar alianzas y generar impactos sostenibles.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4,1fr)', gap: mobile ? 14 : 20 }}>
          {team.map((m) => (
            <div key={m.name} style={{
              background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)',
              border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 6,
            }}>
              <div style={{
                width: 104, height: 104, flex: 'none', borderRadius: '50%', overflow: 'hidden', marginBottom: 10,
                border: '3px solid var(--purple-50)', boxShadow: 'var(--shadow-xs)', background: 'var(--lavender)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {m.photo
                  ? <img src={`assets/equipo/${m.photo}`} alt={m.name} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--purple-400)' }}>{initials(m.name)}</span>}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--size-md)', color: 'var(--text-heading)', lineHeight: 1.2 }}>{m.name}</div>
              <div style={{ color: 'var(--purple-600)', fontWeight: 700, fontSize: 'var(--size-sm)' }}>{m.role}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 'var(--size-sm)' }}>{m.organization}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FACEBOOK / COMUNIDAD ---------- */
function NosFacebook() {
  const mobile = window.useIsMobile();
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Photo = window.SumaPhoto;
  return (
    <section style={{ background: 'var(--lavender)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.95fr 1.05fr', gap: 56, alignItems: 'center' }}>
          <div>
            <NEyebrow>Comunidad</NEyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>
              Síguenos en Facebook
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: 'var(--size-lg)', lineHeight: 1.6, margin: '16px 0 28px', maxWidth: 440 }}>
              Mantente informado y participa en nuestra comunidad. Únete para recibir las últimas noticias, eventos y oportunidades de involucrarte.
            </p>
            <Button variant="primary" size="lg" leadingIcon={<Icon name="facebook" size={18} />}
              onClick={() => { window.open('https://www.facebook.com', '_blank', 'noopener'); }}>Síguenos</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 150px)', gap: 12 }}>
            <Photo tone="purple" label="Equipo" style={{ gridColumn: 'span 2', gridRow: 'span 1' }} />
            <Photo tone="lavender" label="Evento" />
            <Photo tone="lavender" label="Comunidad" />
            <Photo tone="plum" label="Voluntariado" style={{ gridColumn: 'span 2', gridRow: 'span 1' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function NosFooter() {
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
        {col('Red', [{ label: 'Quiénes somos', href: HOME + '#quienes' }, { label: 'Iniciativas', href: 'Iniciativas.html' }, { label: 'Resultados', href: HOME + '#resultados' }, { label: 'Historia', href: HOME + '#historia' }])}
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

function NosApp() {
  return (
    <React.Fragment>
      <window.SiteHeader current="nosotros" />
      <main>
        <NosHero />
        <NosCore />
        <NosValores />
        <NosTeam />
        <NosFacebook />
      </main>
      <window.SiteFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NosApp />);
