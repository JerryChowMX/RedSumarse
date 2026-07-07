// Contacto — Red SUMA RSE Coahuila
const HOME = 'Red SUMA RSE Coahuila.html';

function CEyebrow({ children, onDark }) {
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

/* ---------- CONTACT (WhatsApp-first, no form) ---------- */
function ConModule() {
  const { Button, Alert } = window.SUMARSEDesignSystem_6dc1cb;
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  const Photo = window.SumaPhoto;

  const info = [
    { icon: 'map-pin', k: 'Dónde estamos', v: 'Blvd. Venustiano Carranza 2905-A, Col. La Salle, Saltillo, Coahuila. C.P. 25240' },
    { icon: 'mail', k: 'Correo', v: 'contacto@redsumarse.info', href: 'mailto:contacto@redsumarse.info' },
    { icon: 'phone', k: 'Teléfono', v: '(844) 592-3466', href: 'tel:+528445923466' },
  ];

  return (
    <React.Fragment>
      {/* HERO */}
      <section style={{ background: 'var(--canvas-white)', position: 'relative', overflow: 'hidden' }}>
        {!mobile && <Mosaic size={240} color="var(--lavender)" style={{ position: 'absolute', top: -36, right: -48, opacity: 0.85 }} />}
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter) var(--space-6)', position: 'relative' }}>
          <window.SumaReveal>
            <CEyebrow>Contacto</CEyebrow>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: '18px 0 0' }}>Hablemos</h1>
          </window.SumaReveal>
          <window.SumaReveal delay={120}>
            <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.6, color: 'var(--text-body)', margin: '20px 0 0', maxWidth: 560 }}>
              ¿Tu empresa quiere sumar, te interesa el voluntariado o tienes una pregunta? Escríbenos por WhatsApp y te respondemos pronto.
            </p>
          </window.SumaReveal>
        </div>
      </section>

      {/* CONTACT CARD + PHOTO */}
      <section style={{ background: 'var(--canvas-white)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)',
          display: 'grid', gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : '1.1fr 0.9fr', gap: mobile ? 24 : 48, alignItems: 'start',
        }}>
          {/* LEFT — WhatsApp / datos de contacto */}
          <window.SumaReveal y={24} style={{ minWidth: 0 }}>
            <div style={{ background: 'var(--honey-flower)', borderRadius: 'var(--radius-xl)', padding: mobile ? 'var(--space-7)' : 'var(--space-8)', position: 'relative', overflow: 'hidden' }}>
              <Mosaic size={160} color="rgba(226,211,0,0.16)" style={{ position: 'absolute', top: -18, right: -18 }} />
              <Mosaic size={120} color="rgba(255,255,255,0.08)" style={{ position: 'absolute', bottom: -14, left: -16 }} />
              <div style={{ position: 'relative' }}>
                <CEyebrow onDark>Datos de contacto</CEyebrow>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h3)', color: 'var(--canvas-white)', margin: '14px 0 0' }}>
                  El camino más corto: WhatsApp
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 24 }}>
                  {info.map((row) => (
                    <div key={row.k} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ width: 42, height: 42, flex: 'none', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.12)', color: 'var(--sunflower)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name={row.icon} size={20} strokeWidth={1.9} />
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 'var(--size-xs)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--purple-200)' }}>{row.k}</div>
                        {row.href
                          ? <a href={row.href} style={{ color: 'var(--canvas-white)', fontWeight: 600, fontSize: 'var(--size-md)', marginTop: 3, overflowWrap: 'anywhere', display: 'inline-block', textDecoration: 'none' }}>{row.v}</a>
                          : <div style={{ color: 'var(--canvas-white)', fontWeight: 600, fontSize: 'var(--size-md)', marginTop: 3, overflowWrap: 'anywhere' }}>{row.v}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="cta" fullWidth size="lg" leadingIcon={<Icon name="whatsapp" size={20} />} style={{ marginTop: 28 }}
                  onClick={() => { window.open('https://wa.link/m1vblc', '_blank', 'noopener'); }}>
                  Escríbenos por WhatsApp
                </Button>
                <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                  {[
                    { name: 'instagram', href: 'https://www.instagram.com/redsumarsecoahuila/' },
                    { name: 'facebook', href: 'https://www.facebook.com/RedSumaRSE/' },
                    { name: 'linkedin', href: 'https://www.linkedin.com/company/red-sumarse-coahuila/' },
                  ].map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={s.name} style={{
                      width: 40, height: 40, borderRadius: 'var(--radius-md)', display: 'inline-flex',
                      alignItems: 'center', justifyContent: 'center', color: 'var(--purple-900)', background: 'var(--sunflower)',
                    }}><Icon name={s.name} size={20} /></a>
                  ))}
                </div>
              </div>
            </div>
          </window.SumaReveal>

          {/* RIGHT — photo + note */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <window.SumaReveal delay={150}>
              <Photo tone="lavender" label="Saltillo, Coahuila" style={{ height: mobile ? 220 : 320 }} />
            </window.SumaReveal>
            <window.SumaReveal delay={250}>
              <Alert variant="info" icon={<Icon name="check-circle" size={20} />}>Respondemos en un plazo de 2 a 3 días hábiles.</Alert>
            </window.SumaReveal>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function ConApp() {
  return (
    <React.Fragment>
      <window.SiteHeader current="contacto" />
      <main><ConModule /></main>
      <window.SiteFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ConApp />);
