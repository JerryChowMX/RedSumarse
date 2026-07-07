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
        <window.SumaReveal delay={0}>
          <NEyebrow>Nosotros</NEyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 1.04,
            letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: '18px 0 0',
          }}>Una red con propósito</h1>
        </window.SumaReveal>
        <window.SumaReveal delay={120}>
          <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.6, color: 'var(--text-body)', margin: '20px auto 0', maxWidth: 580 }}>
            Somos una red de empresas que impulsa la sostenibilidad, el liderazgo empresarial y el impacto colectivo en Coahuila, fortaleciendo la cultura Ambiental, Social y de Gobernanza (ASG).
          </p>
        </window.SumaReveal>
        <window.SumaReveal delay={240}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
            <Button variant="cta" size="lg" leadingIcon={<Icon name="mail" size={18} />}
              onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
          </div>
        </window.SumaReveal>
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
      text: 'Fortalecer la cultura Ambiental, Social y de Gobernanza (ASG) en nuestra región, impulsando sinergias para un mayor desarrollo sustentable en la comunidad.',
    },
    {
      key: 'Visión', icon: 'sparkles', variant: 'brand',
      text: 'Ser la Red que facilite alianzas y genere impactos sostenibles, donde las empresas tengan Responsabilidad Ambiental, Social y de Gobernanza de clase mundial, intensificando la calidad de vida de nuestra sociedad.',
    },
    {
      key: 'Objetivos', icon: 'trending-up', variant: 'default',
      text: 'Fomentar la Cultura Ambiental, Social y de Gobernanza entre las empresas y organizaciones de Coahuila, a través de la formación e intercambio de buenas prácticas; y generar esfuerzos de Inversión Social Conjunta entre las empresas miembros de la Red, en alianza con actores estratégicos de la comunidad.',
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
          {cards.map((c, i) => {
            const s = styleFor(c.variant);
            const isDefault = c.variant === 'default';
            return (
              <window.SumaReveal key={c.key} delay={i * 110} y={26} style={{ display: 'flex' }}>
              <div style={{
                background: s.bg, borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)',
                border: isDefault ? '1px solid var(--border-subtle)' : 'none',
                boxShadow: isDefault ? 'var(--shadow-xs)' : 'none',
                display: 'flex', flexDirection: 'column', flex: 1,
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
              </window.SumaReveal>
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
    { value: 'Responsabilidad', icon: 'scale', description: 'Esfuerzos conjuntos y participación activa, inspirados en el bien común.', attributes: ['Bien común', 'Participación activa'] },
    { value: 'Compromiso', icon: 'heart', description: 'Participación voluntaria y activa de los representantes de las empresas.', attributes: ['Voluntariado', 'Dedicación'] },
    { value: 'Transparencia', icon: 'check-circle', description: 'Alianza con Fundación Merced para el manejo y transparencia de los fondos.', attributes: ['Rendición de cuentas', 'Fundación Merced'] },
    { value: 'Calidad', icon: 'sparkles', description: 'Iniciativas de alto impacto de la mano de aliados con gran valor para la comunidad.', attributes: ['Alto impacto', 'Aliados'] },
    { value: 'Inclusión', icon: 'users', description: 'Valoramos y respetamos la diversidad.', attributes: ['Diversidad', 'Respeto'] },
  ];
  return (
    <section style={{ background: 'var(--lavender)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <window.SumaReveal style={{ maxWidth: 620, marginBottom: 'var(--space-7)' }}>
          <NEyebrow>Nuestros valores</NEyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>
            Lo que nos mueve cada día
          </h2>
        </window.SumaReveal>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fit, minmax(210px, 1fr))', gap: 20 }}>
          {values.map((v, i) => (
            <window.SumaReveal key={v.value} delay={i * 80} style={{ display: 'flex' }}>
            <div style={{
              background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)',
              border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)',
              display: 'flex', flexDirection: 'column', flex: 1,
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
            </window.SumaReveal>
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
    { name: 'Esteban Garza Fishburn', role: 'Presidente', organization: 'Universidad Carolina', photo: 'esteban-garza.webp' },
    { name: 'Ana Cecy Mata', role: 'Vicepresidenta', organization: 'Universidad Carolina', photo: 'ana-cecy-mata.webp' },
    { name: 'Alejandro Eichelmann', role: 'Vicepresidente', organization: 'Eichelmann Asesores', photo: 'alejandro-eichelmann.webp' },
    { name: 'Juan Manuel Pérez Cuéllar', role: 'Tesorero', organization: 'Fundación Merced Coahuila', photo: 'juan-manuel-perez.webp' },
    { name: 'Mariana Wheelock', role: 'Secretaria', photo: 'mariana-wheelock.webp' },
    { name: 'Mireya Plata', role: 'Vocal', photo: 'mireya-plata.webp' },
    { name: 'Elisa Valdés', role: 'Vocal', organization: 'AIERA', photo: 'elisa-valdez.webp' },
  ];
  const initials = (n) => n.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (
    <section id="equipo" style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <window.SumaReveal style={{ maxWidth: 640, marginBottom: 'var(--space-7)' }}>
          <NEyebrow>Mesa Directiva</NEyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 8px' }}>
            Mesa Directiva 2026–2030
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: 0 }}>
            Las personas que lideran la Red rumbo a una cultura ASG de clase mundial.
          </p>
        </window.SumaReveal>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4,1fr)', gap: mobile ? 14 : 20 }}>
          {team.map((m, i) => {
            // On mobile (2 cols) an odd count leaves an orphan: stretch the last card.
            const orphan = mobile && team.length % 2 === 1 && i === team.length - 1;
            return (
            <window.SumaReveal key={m.name} delay={(i % 4) * 90} style={{ display: 'flex', gridColumn: orphan ? 'span 2' : 'auto' }}>
            <div style={{
              background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)',
              border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 6, flex: 1,
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
              {m.organization && <div style={{ color: 'var(--text-muted)', fontSize: 'var(--size-sm)' }}>{m.organization}</div>}
            </div>
            </window.SumaReveal>
            );
          })}
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
  const collage = [
    { src: 'assets/iniciativas/2-0/brigada-grupo.webp', alt: 'Brigadistas de la Red', span: 2 },
    { src: 'assets/iniciativas/3-0/lanzamiento-podio.webp', alt: 'Lanzamiento de iniciativa' },
    { src: 'assets/iniciativas/1-0/asistentes.webp', alt: 'Comunidad en Zapalinamé' },
    { src: 'assets/iniciativas/2-0/trabajo-comunitario.webp', alt: 'Voluntariado en comunidad', span: 2 },
  ];
  return (
    <section style={{ background: 'var(--lavender)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.95fr 1.05fr', gap: mobile ? 36 : 56, alignItems: 'center' }}>
          <window.SumaReveal>
            <NEyebrow>Comunidad</NEyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>
              Síguenos en Facebook
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: 'var(--size-lg)', lineHeight: 1.6, margin: '16px 0 28px', maxWidth: 440 }}>
              Mantente informado y participa en nuestra comunidad. Únete para recibir las últimas noticias, eventos y oportunidades de involucrarte.
            </p>
            <Button variant="primary" size="lg" leadingIcon={<Icon name="facebook" size={18} />}
              onClick={() => { window.open('https://www.facebook.com/RedSumaRSE/', '_blank', 'noopener'); }}>Síguenos</Button>
          </window.SumaReveal>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gridAutoRows: mobile ? '130px' : '165px', gap: 12 }}>
            {collage.map((ph, i) => (
              <window.SumaReveal key={ph.src} delay={120 + i * 90} y={20} style={{ gridColumn: ph.span === 2 ? 'span 2' : 'auto' }}>
                <img src={ph.src} alt={ph.alt} title={ph.alt} loading="lazy" style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
                }} />
              </window.SumaReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
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
