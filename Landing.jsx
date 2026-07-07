// Red SUMA RSE Coahuila — landing page sections
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

/* ---------- HERO ---------- */
function RseHero() {
  const { Button, Stat } = window.SUMARSEDesignSystem_6dc1cb;
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  return (
    <section id="inicio" style={{ background: 'var(--canvas-white)', position: 'relative', overflow: 'hidden' }}>
      {!mobile && <Mosaic size={240} color="var(--lavender)" style={{ position: 'absolute', top: -36, right: -48, opacity: 0.85 }} />}
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.05fr 0.95fr', gap: mobile ? 36 : 56, alignItems: 'center', position: 'relative',
      }}>
        <div>
          <window.SumaReveal>
            <Eyebrow>Red de empresas socialmente responsables · Coahuila</Eyebrow>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 1.04,
              letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: '18px 0 0',
            }}>{mobile ? 'Sumamos empresas que transforman Coahuila' : <React.Fragment>Sumamos empresas que<br/>transforman Coahuila</React.Fragment>}</h1>
          </window.SumaReveal>
          <window.SumaReveal delay={120}>
            <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.55, color: 'var(--text-body)', margin: '20px 0 0', maxWidth: 500 }}>
              Impulsamos la sostenibilidad, el liderazgo empresarial y el impacto colectivo en Coahuila. Unimos a empresas comprometidas con la cultura Ambiental, Social y de Gobernanza (ASG).
            </p>
          </window.SumaReveal>
          <window.SumaReveal delay={240}>
            <window.SumaButtonRow style={{ marginTop: 30 }}>
              <Button variant="cta" size="lg" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = 'Iniciativas.html'; }}>Conocer iniciativas</Button>
              <Button variant="secondary" size="lg" leadingIcon={<Icon name="mail" size={18} />} onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
            </window.SumaButtonRow>
          </window.SumaReveal>
          <window.SumaReveal delay={360}>
            <div style={{ display: 'flex', gap: 28, marginTop: 38 }}>
              <Stat value={<window.SumaCountUp value="9.2K" />} label="personas beneficiadas" />
              <div style={{ width: 1, background: 'var(--border-default)' }} />
              <Stat value={<window.SumaCountUp value="$4.2 MDP" />} label="inversión social" />
            </div>
          </window.SumaReveal>
        </div>
        <window.SumaReveal delay={150} y={28}>
          <img src="assets/iniciativas/1-0/recorrido-grupo.webp" alt="Niñas y niños saludando durante un recorrido en la Sierra de Zapalinamé" style={{
            width: '100%', height: mobile ? 300 : 460, objectFit: 'cover', display: 'block',
            borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)',
          }} />
        </window.SumaReveal>
      </div>
    </section>
  );
}

/* ---------- ALIADOS (member / affiliate logos) ---------- */
function RseAfiliados() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
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
  const mobile = window.useIsMobile();
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
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      let p = (vh - rect.top) / (rect.height + vh); // 0 entering bottom → 1 leaving top
      p = Math.max(0, Math.min(1, p));
      const range = Math.min(160, window.innerWidth * 0.18);
      const shift = reduce ? 0 : (p - 0.5) * 2 * range; // -range … +range
      const cw = el.clientWidth;
      // Center each over-wide row (margin:auto can't, since the row overflows),
      // then drift around that center so the shift never exposes a blank edge.
      const place = (node, dir) => {
        if (!node) return;
        const base = (cw - node.scrollWidth) / 2;
        node.style.transform = `translate3d(${base + dir * shift}px,0,0)`;
      };
      place(row1Ref.current, -1);
      place(row2Ref.current, 1);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('resize', onScroll);
    if (!reduce) window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const card = (a, key) => (
    <div key={key} title={a.name} onMouseEnter={mobile ? undefined : enter} onMouseLeave={mobile ? undefined : leave} style={{
      flex: 'none', width: 188, height: 104,
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 22px',
      transition: 'box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    }}>
      <img src={`assets/afiliados/${a.file}`} alt={a.name} loading="lazy" style={{
        maxWidth: '100%', maxHeight: 64, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block',
        // Touch has no hover to reveal color — show logos in full color on mobile.
        filter: mobile ? 'none' : 'grayscale(100%)', opacity: mobile ? 1 : 0.72,
        transition: 'filter var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
      }} />
    </div>
  );

  const rowA = aliados.slice(0, 6);
  const rowB = aliados.slice(6, 12);
  // Triple each row so it always overflows the viewport (no blank edges while sliding).
  const fill = (arr) => [...arr, ...arr, ...arr];
  const rowStyle = { display: 'flex', gap: 16, width: 'max-content', willChange: 'transform' };

  return (
    <section ref={sectionRef} id="aliados" style={{ background: 'var(--lavender)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-9) var(--gutter) var(--space-7)' }}>
        <window.SumaReveal style={{ textAlign: 'center' }}>
          <Eyebrow>Aliados</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 0' }}>
            Empresas que ya suman
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: '14px auto 0', maxWidth: 560 }}>
            Organizaciones de Coahuila comprometidas con la responsabilidad social que hacen posible el trabajo de la Red.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
            <Button variant="ghost" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = 'Aliados.html'; }}>Ver todos los aliados</Button>
          </div>
        </window.SumaReveal>
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
        <window.SumaReveal style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <Eyebrow onDark>Resultados</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--canvas-white)', margin: '12px 0 0' }}>
            Compromiso que se vuelve impacto real
          </h2>
        </window.SumaReveal>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 24 }}>
          {metrics.map((m, i) => (
            <window.SumaReveal key={m.label} delay={i * 90}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--sunflower)' }}><window.SumaCountUp value={m.value} /></span>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 'var(--size-md)', color: 'var(--purple-100)' }}>{m.label}</span>
              </div>
            </window.SumaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QUIÉNES SOMOS (who / what / why) ---------- */
function RseQuienes() {
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const blocks = [
    { kicker: 'Quiénes somos', icon: 'building', text: 'Una red de empresas de Coahuila unidas por la sostenibilidad y la cultura ASG (Ambiental, Social y de Gobernanza), que deciden trabajar juntas en lugar de hacerlo por separado.' },
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
          <window.SumaReveal>
            <Eyebrow>Quiénes somos</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 8px' }}>
              Una red, un mismo propósito
            </h2>
          </window.SumaReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 28 }}>
            {blocks.map((b, i) => (
              <window.SumaReveal key={b.kicker} delay={i * 110} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
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
              </window.SumaReveal>
            ))}
          </div>
        </div>
        <window.SumaReveal delay={150}>
          <img src="assets/iniciativas/2-0/brigadistas-panoramica.webp" alt="Brigadistas de la Red reunidos en campo" style={{
            width: '100%', height: 420, objectFit: 'cover', display: 'block',
            borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)',
          }} />
        </window.SumaReveal>
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
        <window.SumaReveal style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', alignItems: mobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', gap: mobile ? 14 : 24, marginBottom: 'var(--space-7)' }}>
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
        </window.SumaReveal>

        {/* Featured active initiative */}
        <window.SumaReveal y={26} style={{ marginBottom: 20 }}>
        <div style={{
          background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)',
          display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.15fr 0.85fr', alignItems: 'stretch',
        }}>
          <div style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <Badge variant="success" dot>{featured.status}</Badge>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{featured.version}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h3)', color: 'var(--text-heading)', margin: 0, letterSpacing: '-0.01em' }}>{featured.title}</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.65, fontSize: 'var(--size-md)', margin: '14px 0 28px', maxWidth: 520 }}>{featured.desc}</p>
            <window.SumaButtonRow style={{ marginTop: 'auto' }}>
              <Button variant="primary" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={() => { window.location.href = 'Iniciativa-3-0.html'; }}>Leer más</Button>
            </window.SumaButtonRow>
          </div>
          {/* Version panel — compact banner on top for mobile, side panel on desktop */}
          <div style={{
            position: 'relative', overflow: 'hidden', background: 'var(--honey-flower)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: mobile ? 'var(--space-6) var(--space-7)' : 'var(--space-8)',
            order: mobile ? -1 : 0,
          }}>
            <Mosaic size={150} color="rgba(226,211,0,0.18)" style={{ position: 'absolute', top: -16, right: -20 }} />
            <Mosaic size={110} color="rgba(255,255,255,0.10)" style={{ position: 'absolute', bottom: -12, left: -14 }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: mobile ? 'row' : 'column', alignItems: mobile ? 'center' : 'flex-start', gap: mobile ? 16 : 0 }}>
              <div style={{ display: 'inline-flex', width: 56, height: 56, flex: 'none', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.12)', color: 'var(--sunflower)', alignItems: 'center', justifyContent: 'center', marginBottom: mobile ? 0 : 20 }}>
                <Icon name={featured.icon} size={28} strokeWidth={1.9} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: mobile ? '2.6rem' : 'clamp(3.5rem, 6vw, 5.5rem)', lineHeight: 0.95, color: 'var(--sunflower)', letterSpacing: '-0.03em' }}>3.0</div>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--purple-100)', marginTop: mobile ? 2 : 8 }}>Iniciativa actual</div>
              </div>
            </div>
          </div>
        </div>
        </window.SumaReveal>

        {/* Completed initiatives */}
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2,1fr)', gap: 20 }}>
          {completed.map((c, i) => (
            <window.SumaReveal key={c.version} delay={i * 110}>
            <div onClick={() => { window.location.href = c.file; }} style={{
              background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-7)',
              border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', cursor: 'pointer', height: '100%', boxSizing: 'border-box',
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
            </window.SumaReveal>
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
    { year: '2015', title: 'Nace la Red', desc: 'Firma del convenio de integración de la Red SumaRSE Coahuila.' },
    { year: '2017', title: 'Iniciativa 1.0', desc: 'Lanzamiento de la primera iniciativa de impacto colectivo: Zapalinamé como tu salón de clases.' },
    { year: '2019', title: 'Iniciativa 2.0', desc: 'Formación de brigadistas juveniles e infantiles y guardaparques.' },
    { year: '2024', title: 'Iniciativa 3.0', desc: 'Arranque operativo de Educar para el Bienestar junto a AtentaMente.' },
    { year: '2026', title: 'Nueva estrategia', desc: 'Transición hacia la sostenibilidad empresarial, los criterios ASG y el impacto medible.' },
  ];
  return (
    <section id="historia" style={{ background: 'var(--canvas-white)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr', gap: 56, alignItems: 'flex-start',
      }}>
        <window.SumaReveal style={{ position: 'relative' }}>
          <Eyebrow>Nuestra historia</Eyebrow>
          <Icon name="quote" size={44} style={{ color: 'var(--sunflower)', marginTop: 18 }} />
          <blockquote style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h2)', lineHeight: 1.15,
            letterSpacing: '-0.01em', color: 'var(--text-heading)', margin: '14px 0 0',
          }}>
            Sumando para transformar.
          </blockquote>
          <p style={{ color: 'var(--text-body)', fontSize: 'var(--size-md)', lineHeight: 1.65, margin: '24px 0 0', maxWidth: 420 }}>
            Desde 2015, la Red ha evolucionado: fortaleció su gobernanza, lanzó iniciativas de impacto colectivo en múltiples fases y hoy transita hacia la sostenibilidad y los criterios ASG. Cada empresa que se suma vuelve más sólida a toda la comunidad.
          </p>
          <Mosaic size={150} color="var(--lavender)" style={{ marginTop: 36 }} />
        </window.SumaReveal>
        <div style={{ position: 'relative', paddingLeft: 6 }}>
          <div style={{ position: 'absolute', left: 13, top: 8, bottom: 8, width: 2, background: 'var(--border-default)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {milestones.map((m, i) => (
              <window.SumaReveal key={m.year} delay={i * 100} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 20, alignItems: 'flex-start', position: 'relative' }}>
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
              </window.SumaReveal>
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
        <window.SumaReveal y={30}>
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
        </window.SumaReveal>
      </div>
    </section>
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
