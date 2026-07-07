// Aliados — Red SUMA RSE Coahuila

function AliEyebrow({ children, onDark }) {
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
function AliHero() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  const mobile = window.useIsMobile();
  return (
    <section style={{ background: 'var(--canvas-white)', position: 'relative', overflow: 'hidden' }}>
      {!mobile && <Mosaic size={240} color="var(--lavender)" style={{ position: 'absolute', top: -36, right: -48, opacity: 0.85 }} />}
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)', textAlign: 'center', position: 'relative' }}>
        <window.SumaReveal>
          <AliEyebrow>Aliados</AliEyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 1.04,
            letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: '18px 0 0',
          }}>Sumando fuerzas</h1>
        </window.SumaReveal>
        <window.SumaReveal delay={120}>
          <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.6, color: 'var(--text-body)', margin: '20px auto 0', maxWidth: 580 }}>
            Empresas, organizaciones e instituciones que suman esfuerzos para transformar Coahuila a través de la sostenibilidad y el impacto colectivo.
          </p>
        </window.SumaReveal>
        <window.SumaReveal delay={240}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
            <Button variant="cta" size="lg" leadingIcon={<Icon name="mail" size={18} />}
              onClick={() => { window.location.href = 'Contacto.html'; }}>Súmate a la Red</Button>
          </div>
        </window.SumaReveal>
      </div>
    </section>
  );
}

/* ---------- LOGO GRID SECTION ---------- */
function AliLogoSection({ id, eyebrow, title, subtitle, logos, background }) {
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
  return (
    <section id={id} style={{ background }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
        <window.SumaReveal style={{ maxWidth: 640, marginBottom: 'var(--space-7)' }}>
          <AliEyebrow>{eyebrow}</AliEyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--text-heading)', margin: '12px 0 8px' }}>
            {title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: 0 }}>{subtitle}</p>
        </window.SumaReveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(auto-fill, minmax(170px, 1fr))',
          gap: mobile ? 12 : 16,
        }}>
          {logos.map((a, i) => {
            // On mobile (2 cols) an odd count leaves an orphan: stretch the last
            // card across both columns and let its logo breathe a bit more.
            const orphan = mobile && logos.length % 2 === 1 && i === logos.length - 1;
            return (
              <window.SumaReveal key={a.file} delay={(i % 6) * 55} y={16} style={{ gridColumn: orphan ? 'span 2' : 'auto' }}>
                <div title={a.name} onMouseEnter={mobile ? undefined : enter} onMouseLeave={mobile ? undefined : leave} style={{
                  height: orphan ? 128 : 104, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 22px',
                  transition: 'box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
                }}>
                  <img src={`assets/afiliados/${a.file}`} alt={a.name} loading="lazy" style={{
                    maxWidth: orphan ? '70%' : '100%', maxHeight: orphan ? 88 : 64, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block',
                    // Touch has no hover to reveal color — show logos in full color on mobile.
                    filter: mobile ? 'none' : 'grayscale(100%)', opacity: mobile ? 1 : 0.72,
                    transition: 'filter var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
                  }} />
                </div>
              </window.SumaReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- DATA ---------- */
const ALI_ASAMBLEA = [
  { name: 'Coconsa', file: 'Coconsa.png' },
  { name: 'Magna Powertrain', file: 'Magna.png' },
  { name: 'Universidad Carolina', file: 'Universidad_Carolina.png' },
  { name: 'Arca Continental', file: 'Arca_Continental.png' },
  { name: 'GIS', file: 'GIS.png' },
  { name: 'Vanguardia MX', file: 'Vanguardia_MX.png' },
  { name: 'BorgWarner', file: 'BorgWarner.png' },
  { name: 'CEMEX', file: 'CEMEX.png' },
  { name: 'Eichelmann Asesores', file: 'Eichelmann_Asesores.png' },
  { name: 'AOC Seguridad en Gases', file: 'AOC_Seguridad_en_Gases.png' },
  { name: 'Aguas de Saltillo', file: 'Aguas_de_Saltillo.png' },
  { name: 'Fordemex', file: 'Fordemex.png' },
  { name: 'Ruba', file: 'Ruba.png' },
];

const ALI_EMPRESAS = [
  { name: 'Harmony School', file: 'Harmony_School.png' },
  { name: 'Acero Prime', file: 'Acero_Prime.png' },
  { name: 'Lennox', file: 'Lennox.png' },
  { name: 'Il Mercato Gentiloni', file: 'Il_Mercato.png' },
  { name: 'Holcim', file: 'Holcim.png' },
  { name: 'Grupo Dimakers', file: 'Grupo_Dimakers.png' },
  { name: 'Jaubert Producciones', file: 'Jaubert_Producciones.png' },
  { name: 'Samuel Associated Tube Group', file: 'Samuel_Tube_Group.png' },
  { name: 'Davisa', file: 'Davisa.png' },
  { name: 'Villa Ferré', file: 'Villa_Ferre.png' },
  { name: 'CCP Cuadro Consultores Proyectos', file: 'CCP_Consultores.png' },
  { name: 'Manage Tech', file: 'Manage_Tech.png' },
  { name: 'Colcholandya', file: 'Colcholandya.png' },
];

const ALI_ALIADOS = [
  { name: 'Fundación Merced Coahuila', file: 'Fundacion_Merced.png' },
  { name: 'Profauna México', file: 'Profauna.png' },
  { name: 'Fomento de Oportunidades Educativas A.C.', file: 'FOE.png' },
  { name: 'Universidad Tecnológica de Coahuila', file: 'UTC.png' },
  { name: 'Canaco Saltillo', file: 'Canaco_Saltillo.png' },
  { name: 'Canirac Coahuila', file: 'Canirac_Coahuila.png' },
  { name: 'Comimsa', file: 'Comimsa.png' },
  { name: 'Secretaría de Medio Ambiente', file: 'SMA_Coahuila.png' },
  { name: 'Canacintra Coahuila Sureste', file: 'Canacintra_Coahuila_Sureste.png' },
  { name: 'Cámara de Comercio de Canadá · Capítulo Saltillo', file: 'Camara_Comercio_Canada.png' },
  { name: 'Voluntarios México', file: 'Voluntarios_Mexico.png' },
  { name: 'Cemefi', file: 'Cemefi.png' },
  { name: 'Instituto Mexicano de Contadores Públicos Saltillo', file: 'IMCP_Saltillo.png' },
  { name: 'Cluster de la Industria Automotriz de Coahuila', file: 'CIAC.png' },
  { name: 'San Lorenzo', file: 'San_Lorenzo.png' },
  { name: 'UPRA | BIS Universities', file: 'UPRA_BIS.png' },
  { name: 'AIERA', file: 'AIERA.png' },
  { name: 'Por Amor a Saltillo', file: 'Por_Amor_a_Saltillo.png' },
  { name: 'Ramos Arizpe · Todos por Más', file: 'Ramos_Arizpe.png' },
];

/* ---------- CTA FINAL ---------- */
function AliCTA() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  return (
    <section style={{ background: 'var(--canvas-white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)' }}>
        <window.SumaReveal y={30}>
        <div style={{
          background: 'var(--plum-gray)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative',
          padding: 'var(--space-9) var(--space-8)', textAlign: 'center',
        }}>
          <Mosaic size={200} color="rgba(226,211,0,0.16)" style={{ position: 'absolute', bottom: -24, right: 28 }} />
          <Mosaic size={150} color="rgba(255,255,255,0.06)" style={{ position: 'absolute', top: -16, left: 32 }} />
          <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
            <AliEyebrow onDark>Súmate a la Red</AliEyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', color: 'var(--canvas-white)', margin: '14px 0 0' }}>
              ¿Tu empresa quiere sumar?
            </h2>
            <p style={{ color: 'var(--neutral-300)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: '14px auto 28px', maxWidth: 520 }}>
              Conversemos sobre cómo tu empresa u organización puede formar parte de una red que genera impacto en la economía, la sociedad y el medio ambiente de Coahuila.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="cta" size="lg" leadingIcon={<Icon name="mail" size={18} />}
                onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
            </div>
          </div>
        </div>
        </window.SumaReveal>
      </div>
    </section>
  );
}

function AliadosApp() {
  return (
    <React.Fragment>
      <window.SiteHeader current="aliados" />
      <main>
        <AliHero />
        <AliLogoSection
          id="asamblea"
          eyebrow="Asamblea General"
          title="Asamblea General"
          subtitle="Empresas miembro con voz y voto en el rumbo de la Red."
          logos={ALI_ASAMBLEA}
          background="var(--canvas-white)"
        />
        <AliLogoSection
          id="empresas"
          eyebrow="Empresas"
          title="Empresas"
          subtitle="Empresas afiliadas que suman a las iniciativas."
          logos={ALI_EMPRESAS}
          background="var(--lavender)"
        />
        <AliLogoSection
          id="aliados"
          eyebrow="Aliados"
          title="Aliados"
          subtitle="Organizaciones e instituciones aliadas de la Red."
          logos={ALI_ALIADOS}
          background="var(--canvas-white)"
        />
        <AliCTA />
      </main>
      <window.SiteFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AliadosApp />);
