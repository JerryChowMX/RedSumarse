// Red SUMA RSE Coahuila — landing page sections
const RSE_NAV = [
  { id: 'inicio', label: 'Inicio', current: true },
  { href: 'Iniciativas.html', label: 'Iniciativas' },
  { href: 'Nosotros.html', label: 'Nosotros' },
];

function Eyebrow({ children, onDark }) {
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

function goToSection(id) {
  // Use the browser's native anchor navigation (robust across contexts).
  if (window.location.hash === '#' + id) window.location.hash = '';
  window.location.hash = '#' + id;
}

/* ---------- HEADER ---------- */
function RseHeader() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
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
        <a href="#inicio" style={{ display: 'flex' }}>
          <window.SumaLogo height={38} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {RSE_NAV.map((l) => (
            <a key={l.label} href={l.href || `#${l.id}`}
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
          <Button variant="secondary" size="sm" onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
          <Button variant="cta" size="sm" leadingIcon={<Icon name="heart" size={16} />} onClick={() => { window.location.href = 'Donar.html'; }}>Donar</Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function RseHero() {
  const { Button, Stat } = window.SUMARSEDesignSystem_6dc1cb;
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Photo = window.SumaPhoto;
  const Mosaic = window.SumaMosaic;
  return (
    <section id="inicio" style={{ background: 'var(--canvas-white)', position: 'relative', overflow: 'hidden' }}>
      <Mosaic size={240} color="var(--lavender)" style={{ position: 'absolute', top: -36, right: -48, opacity: 0.85 }} />
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.05fr 0.95fr', gap: 56, alignItems: 'center', position: 'relative',
      }}>
        <div>
          <Eyebrow>Red de empresas socialmente responsables · Coahuila</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 1.02,
            letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: '18px 0 0',
          }}>Sumamos empresas que<br/>transforman Coahuila</h1>
          <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.55, color: 'var(--text-body)', margin: '20px 0 0', maxWidth: 500 }}>
            Unimos a empresas comprometidas con la responsabilidad social para crear un impacto positivo en la economía, la sociedad y el medio ambiente.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
            <Button variant="cta" size="lg" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = 'Iniciativas.html'; }}>Conocer iniciativas</Button>
            <Button variant="secondary" size="lg" leadingIcon={<Icon name="mail" size={18} />} onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 38 }}>
            <Stat value="9.2K" label="personas beneficiadas" />
            <div style={{ width: 1, background: 'var(--border-default)' }} />
            <Stat value="$4.2 MDP" label="inversión social" />
          </div>
        </div>
        <Photo tone="purple" label="Comunidad · Coahuila" style={{ height: 460 }} />
      </div>
    </section>
  );
}

/* ---------- ALIADOS (member / affiliate logos) ---------- */
function RseAfiliados() {
  const aliados = [
    { name: 'Aguas de Saltillo', file: 'Aguas_de_Saltillo.png' },
    { name: 'Arca Continental', file: 'Arca_Continental.png' },
    { name: 'BorgWarner', file: 'BorgWarner.png' },
    { name: 'CEMEX', file: 'CEMEX.png' },
    { name: 'Coconsa', file: 'Coconsa.png' },
    { name: 'Eichelmann Asesores', file: 'Eichelmann_Asesores.png' },
    { name: 'GIS', file: 'GIS.png' },
    { name: 'Grupo Dimakers', file: 'Grupo_Dimakers.png' },
    { name: 'Holcim', file: 'Holcim.png' },
    { name: 'Il Mercato', file: 'Il_Mercato.png' },
    { name: 'Magna', file: 'Magna.png' },
    { name: 'Vanguardia MX', file: 'Vanguardia_MX.png' },
  ];
  const enter = (e) => {
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    e.currentTarget.style.transform = 'translateY(-3px)';
    const img = e.currentTarget.querySelector('img');
    if (img) { img.style.filter = 'none'; img.style.opacity = '1'; }
  };
  const leave = (e) => {
    e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
    e.currentTarget.style.transform = 'none';
    const img = e.currentTarget.querySelector('img');
    if (img) { img.style.filter = 'grayscale(100%)'; img.style.opacity = '0.72'; }
  };
  // Scroll-linked horizontal drift: the two rows slide in opposite directions
  // as the section travels through the viewport (disabled for reduced motion).
  const sectionRef = React.useRef(null);
  const row1Ref = React.useRef(null);
  const row2Ref = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      let p = (vh - rect.top) / (rect.height + vh); // 0 entering bottom → 1 leaving top
      p = Math.max(0, Math.min(1, p));
      const range = Math.min(180, window.innerWidth * 0.22);
      const shift = (p - 0.5) * 2 * range; // -range … +range
      if (row1Ref.current) row1Ref.current.style.transform = `translate3d(${-shift}px,0,0)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translate3d(${shift}px,0,0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const card = (a, key) => (
    <div key={key} title={a.name} onMouseEnter={enter} onMouseLeave={leave} style={{
      flex: 'none', width: 188, height: 104,
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 22px',
      transition: 'box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    }}>
      <img src={`assets/afiliados/${a.file}`} alt={a.name} loading="lazy" style={{
        maxWidth: '100%', maxHeight: 64, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block',
        filter: 'grayscale(100%)', opacity: 0.72,
        transition: 'filter var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
      }} />
    </div>
  );

  const rowA = aliados.slice(0, 6);
  const rowB = aliados.slice(6, 12);
  // Triple each row so it always overflows the viewport (no blank edges while sliding).
  const fill = (arr) => [...arr, ...arr, ...arr];
  const rowStyle = { display: 'flex', gap: 16, width: 'max-content', margin: '0 auto', willChange: 'transform' };

  return (
    <section ref={sectionRef} id="aliados" style={{ background: 'var(--lavender)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-9) var(--gutter) var(--space-7)' }}>
        <div style={{ textAlign: 'center' }}>
          <Eyebrow>Aliados</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>
            Empresas que ya suman
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: '14px auto 0', maxWidth: 560 }}>
            Organizaciones de Coahuila comprometidas con la responsabilidad social que hacen posible el trabajo de la Red.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '0 0 var(--space-9)' }}>
        <div ref={row1Ref} style={rowStyle}>{fill(rowA).map((a, i) => card(a, 'a' + i))}</div>
        <div ref={row2Ref} style={rowStyle}>{fill(rowB).map((a, i) => card(a, 'b' + i))}</div>
      </div>
    </section>
  );
}

/* ---------- RESULTADOS (impact band) ---------- */
function RseResultados() {
  const mobile = window.useIsMobile();
  const Mosaic = window.SumaMosaic;
  const metrics = [
    { value: '9.2K', label: 'personas beneficiadas' },
    { value: '$4.2 MDP', label: 'inversión social' },
    { value: '+12', label: 'miembros del equipo' },
    { value: '+400', label: 'educadores' },
  ];
  return (
    <section id="resultados" style={{ background: 'var(--honey-flower)', color: 'var(--canvas-white)', position: 'relative', overflow: 'hidden' }}>
      <Mosaic size={200} color="rgba(226,211,0,0.16)" style={{ position: 'absolute', top: -24, left: '6%' }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-9) var(--gutter)', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <Eyebrow onDark>Resultados</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--canvas-white)', margin: '12px 0 0' }}>
            Compromiso que se vuelve impacto real
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 24 }}>
          {metrics.map((m) => (
            <div key={m.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 6 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--sunflower)' }}>{m.value}</span>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 'var(--size-md)', color: 'var(--purple-100)' }}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QUIÉNES SOMOS (who / what / why) ---------- */
function RseQuienes() {
  const mobile = window.useIsMobile();
  const Photo = window.SumaPhoto;
  const Icon = window.SumaIcon;
  const blocks = [
    { kicker: 'Quiénes somos', icon: 'building', text: 'Una red de empresas de Coahuila unidas por la responsabilidad social empresarial, que deciden trabajar juntas en lugar de hacerlo por separado.' },
    { kicker: 'Qué hacemos', icon: 'target', text: 'Convertimos el compromiso de cada empresa en inversión social, programas educativos y alianzas con impacto medible en la comunidad.' },
    { kicker: 'Por qué lo hacemos', icon: 'heart', text: 'Porque creemos que cuando las empresas suman, la economía, la sociedad y el medio ambiente avanzan al mismo tiempo.' },
  ];
  return (
    <section id="quienes" style={{ background: 'var(--canvas-white)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.05fr 0.95fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <Eyebrow>Quiénes somos</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 8px' }}>
            Una red, un mismo propósito
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 28 }}>
            {blocks.map((b) => (
              <div key={b.kicker} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 46, height: 46, flex: 'none', borderRadius: 'var(--radius-md)',
                  background: 'var(--purple-50)', color: 'var(--purple-600)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={b.icon} size={22} strokeWidth={1.9} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--honey-flower)', marginBottom: 4 }}>{b.kicker}</div>
                  <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 1.6, fontSize: 'var(--size-md)', maxWidth: 460 }}>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Photo tone="lavender" label="Empresas de la Red" style={{ height: 420 }} />
      </div>
    </section>
  );
}

/* ---------- INICIATIVAS ---------- */
function RseIniciativas() {
  const { Button, Badge } = window.SUMARSEDesignSystem_6dc1cb;
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;

  const featured = {
    version: 'Iniciativa 3.0', status: 'En curso', icon: 'graduation',
    title: 'Educación para el Bienestar',
    desc: 'Capacitación a profesionales de la educación para desarrollar sus capacidades socioemocionales, mejorando su desempeño docente, el clima de las aulas y el cuidado y aprendizaje de niñas, niños y jóvenes.',
  };
  const completed = [
    { version: 'Iniciativa 2.0', status: 'Terminada', icon: 'leaf', file: 'Iniciativa-2-0.html', title: 'Conciencia y Conservación', desc: 'Llevamos a cabo programas de formación a brigadistas infantiles, juveniles y guardaparques capacitados.', stat: null },
    { version: 'Iniciativa 1.0', status: 'Terminada', icon: 'map-pin', file: 'Iniciativa-1-0.html', title: 'Zapalinamé como salón de clases', desc: 'Recorridos escolares informativos y de concientización con niñas y niños de 5.º de primaria de escuelas públicas.', stat: { value: '+4,800', label: 'niñas y niños' } },
  ];

  return (
    <section id="iniciativas" style={{ background: 'var(--lavender)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 'var(--space-7)' }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>Iniciativas</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>
              Acciones y resultados
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: '14px 0 0' }}>
              Sumando esfuerzos para una mayor capacidad de actuar como propulsores de cambio en la sociedad.
            </p>
          </div>
          <Button variant="ghost" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = 'Iniciativas.html'; }}>Ver todas</Button>
        </div>

        {/* Featured active initiative */}
        <div style={{
          background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)',
          display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.15fr 0.85fr', alignItems: 'stretch', marginBottom: 20,
        }}>
          <div style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <Badge variant="success" dot>{featured.status}</Badge>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{featured.version}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h3)', color: 'var(--text-heading)', margin: 0, letterSpacing: '-0.01em' }}>{featured.title}</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.65, fontSize: 'var(--size-md)', margin: '14px 0 28px', maxWidth: 520 }}>{featured.desc}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 'auto', flexWrap: 'wrap' }}>
              <Button variant="primary" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = 'Iniciativa-3-0.html'; }}>Leer más</Button>
              <Button variant="cta" leadingIcon={<Icon name="heart" size={18} />} onClick={() => { window.location.href = 'Donar.html'; }}>Donar</Button>
            </div>
          </div>
          {/* Version panel */}
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--honey-flower)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'var(--space-8)' }}>
            <Mosaic size={150} color="rgba(226,211,0,0.18)" style={{ position: 'absolute', top: -16, right: -20 }} />
            <Mosaic size={110} color="rgba(255,255,255,0.10)" style={{ position: 'absolute', bottom: -12, left: -14 }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'inline-flex', width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.12)', color: 'var(--sunflower)', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Icon name={featured.icon} size={28} strokeWidth={1.9} />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', lineHeight: 0.95, color: 'var(--sunflower)', letterSpacing: '-0.03em' }}>3.0</div>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--purple-100)', marginTop: 8 }}>Iniciativa actual</div>
            </div>
          </div>
        </div>

        {/* Completed initiatives */}
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2,1fr)', gap: 20 }}>
          {completed.map((c) => (
            <div key={c.version} onClick={() => { window.location.href = c.file; }} style={{
              background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-7)',
              border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', cursor: 'pointer',
              display: 'flex', gap: 22, alignItems: 'flex-start', transition: 'box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ width: 52, height: 52, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--purple-50)', color: 'var(--purple-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={c.icon} size={26} strokeWidth={1.9} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <Badge variant="neutral" dot>{c.status}</Badge>
                  <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{c.version}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--size-xl)', color: 'var(--text-heading)', margin: '0 0 8px' }}>{c.title}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}>{c.desc}</p>
                {c.stat && (
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-xl)', color: 'var(--honey-flower)' }}>{c.stat.value}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--size-sm)' }}>{c.stat.label}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HISTORIA / TIMELINE ---------- */
function RseHistoria() {
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  const milestones = [
    { year: '2019', title: 'Nace la Red', desc: 'Las primeras empresas fundadoras se suman en Saltillo con una idea: hacer más, juntas.' },
    { year: '2021', title: 'Gobernanza y comités', desc: 'Se conforman los comités de trabajo y la primera estructura de gobernanza de la Red.' },
    { year: '2023', title: 'Inversión social multifase', desc: 'Arrancan los programas educativos y ambientales con financiamiento por etapas.' },
    { year: '2025', title: 'Una comunidad que crece', desc: '+12 miembros del equipo y +400 educadores acompañan a la comunidad de Coahuila.' },
  ];
  return (
    <section id="historia" style={{ background: 'var(--canvas-white)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr', gap: 56, alignItems: 'flex-start',
      }}>
        <div style={{ position: 'relative' }}>
          <Eyebrow>Nuestra historia</Eyebrow>
          <Icon name="quote" size={44} style={{ color: 'var(--sunflower)', marginTop: 18 }} />
          <blockquote style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h2)', lineHeight: 1.15,
            letterSpacing: '-0.01em', color: 'var(--text-heading)', margin: '14px 0 0',
          }}>
            Donde hay unidad, siempre hay victoria.
          </blockquote>
          <p style={{ color: 'var(--text-body)', fontSize: 'var(--size-md)', lineHeight: 1.65, margin: '24px 0 0', maxWidth: 420 }}>
            A lo largo de los años, la Red ha fortalecido su gobernanza, evolucionado sus comités de trabajo y lanzado iniciativas de inversión social en múltiples fases. Cada empresa que se suma vuelve más sólida a toda la comunidad.
          </p>
          <Mosaic size={150} color="var(--lavender)" style={{ marginTop: 36 }} />
        </div>
        <div style={{ position: 'relative', paddingLeft: 6 }}>
          <div style={{ position: 'absolute', left: 13, top: 8, bottom: 8, width: 2, background: 'var(--border-default)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {milestones.map((m) => (
              <div key={m.year} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 20, alignItems: 'flex-start', position: 'relative' }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%', background: 'var(--sunflower)',
                  border: '3px solid var(--canvas-white)', boxShadow: '0 0 0 1px var(--border-default)',
                  display: 'block', marginTop: 2, position: 'relative', zIndex: 1,
                }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-xl)', color: 'var(--honey-flower)', lineHeight: 1 }}>{m.year}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-body)', margin: '8px 0 4px', fontSize: 'var(--size-md)' }}>{m.title}</div>
                  <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA FINAL ---------- */
function RseCTA() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  return (
    <section id="contacto" style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{
          background: 'var(--plum-gray)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative',
          padding: 'var(--space-9) var(--space-8)', textAlign: 'center',
        }}>
          <Mosaic size={200} color="rgba(226,211,0,0.16)" style={{ position: 'absolute', bottom: -24, right: 28 }} />
          <Mosaic size={150} color="rgba(255,255,255,0.06)" style={{ position: 'absolute', top: -16, left: 32 }} />
          <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
            <Eyebrow onDark>Súmate a la Red</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--canvas-white)', margin: '14px 0 0' }}>
              ¿Tu empresa quiere sumar?
            </h2>
            <p style={{ color: 'var(--neutral-300)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: '14px auto 28px', maxWidth: 520 }}>
              Conversemos sobre cómo tu empresa puede formar parte de una red que genera impacto en la economía, la sociedad y el medio ambiente de Coahuila.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="cta" size="lg" leadingIcon={<Icon name="mail" size={18} />} onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function RseFooter() {
  const Icon = window.SumaIcon;
  const col = (title, items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--sunflower)', textTransform: 'uppercase', letterSpacing: '.1em' }}>{title}</div>
      {items.map((it) => (
        <a key={it.label} href={it.href || `#${it.id || ''}`}
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
        {col('Red', [{ label: 'Quiénes somos', id: 'quienes' }, { label: 'Aliados', id: 'aliados' }, { label: 'Iniciativas', href: 'Iniciativas.html' }, { label: 'Resultados', id: 'resultados' }, { label: 'Historia', id: 'historia' }])}
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

function RseApp() {
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const t = setTimeout(() => {
        if (document.getElementById(id)) { window.location.hash = ''; window.location.hash = '#' + id; }
      }, 160);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <React.Fragment>
      <window.SiteHeader current="inicio" />
      <main>
        <RseHero />
        <RseAfiliados />
        <RseResultados />
        <RseQuienes />
        <RseIniciativas />
        <RseHistoria />
        <RseCTA />
      </main>
      <window.SiteFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RseApp />);
