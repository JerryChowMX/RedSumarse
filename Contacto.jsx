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

/* ---------- CONTACT FORM + INFO ---------- */
function ConModule() {
  const { Button, Checkbox, Input, Select, Alert } = window.SUMARSEDesignSystem_6dc1cb;
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  const Photo = window.SumaPhoto;

  const [form, setForm] = React.useState({ nombre: '', correo: '', empresa: '', asunto: 'Información general', mensaje: '' });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const valid = form.nombre.trim() && /\S+@\S+\.\S+/.test(form.correo) && form.mensaje.trim();

  const asuntos = [
    'Información general',
    'Quiero que mi empresa se sume a la Red',
    'Voluntariado',
    'Donaciones e inversión social',
    'Prensa y medios',
  ];

  const info = [
    { icon: 'map-pin', k: 'Dónde estamos', v: 'Blvd. Venustiano Carranza 2905-A, Col. La Salle, Saltillo, Coahuila. C.P. 25240' },
    { icon: 'mail', k: 'Correo', v: 'contacto@redsumarse.info' },
    { icon: 'phone', k: 'Teléfono', v: '(844) 592-3466' },
  ];

  const textareaStyle = {
    width: '100%', minHeight: 132, resize: 'vertical', padding: '11px 14px',
    fontFamily: 'var(--font-text)', fontSize: 'var(--size-base)', color: 'var(--text-body)', lineHeight: 1.5,
    background: 'var(--surface-card)', border: '1.5px solid var(--border-default)',
    borderRadius: 'var(--radius-md)', outline: 'none', boxSizing: 'border-box',
  };

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
              ¿Tu empresa quiere sumar, te interesa el voluntariado o tienes una pregunta? Escríbenos y te respondemos pronto.
            </p>
          </window.SumaReveal>
        </div>
      </section>

      {/* FORM + INFO */}
      <section style={{ background: 'var(--canvas-white)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)',
          display: 'grid', gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : '1.1fr 0.9fr', gap: mobile ? 24 : 48, alignItems: 'start',
        }}>
          {/* LEFT — form */}
          <window.SumaReveal y={24} style={{ minWidth: 0 }}>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', padding: 'var(--space-8)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-7) 0' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Icon name="check" size={38} />
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h3)', color: 'var(--text-heading)', margin: 0 }}>¡Gracias por escribir!</h2>
                <p style={{ color: 'var(--text-body)', lineHeight: 1.6, margin: '12px auto 24px', maxWidth: 380 }}>
                  Recibimos tu mensaje. Te responderemos al correo <strong>{form.correo}</strong> lo antes posible.
                </p>
                <Button variant="secondary" onClick={() => { setSent(false); setForm({ nombre: '', correo: '', empresa: '', asunto: 'Información general', mensaje: '' }); }}>Enviar otro mensaje</Button>
              </div>
            ) : (
              <React.Fragment>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h3)', color: 'var(--text-heading)', margin: '0 0 6px' }}>Escríbenos</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 24px' }}>Los campos con * son obligatorios.</p>
                <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <Input label="Nombre *" placeholder="Tu nombre" value={form.nombre} onChange={set('nombre')} />
                  <Input label="Correo *" placeholder="tu@correo.com" value={form.correo} onChange={set('correo')} leadingIcon={<Icon name="mail" size={18} />} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <Input label="Empresa u organización" placeholder="Opcional" value={form.empresa} onChange={set('empresa')} leadingIcon={<Icon name="building" size={18} />} />
                  <Select label="Asunto" options={asuntos} value={form.asunto} onChange={set('asunto')} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
                  <label htmlFor="mensaje" style={{ fontSize: 'var(--size-sm)', fontWeight: 600, color: 'var(--text-body)' }}>Mensaje *</label>
                  <textarea id="mensaje" placeholder="Cuéntanos en qué podemos ayudarte..." value={form.mensaje} onChange={set('mensaje')}
                    style={textareaStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--border-focus)'; e.currentTarget.style.boxShadow = 'var(--focus-ring)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
                <Checkbox label="Acepto el aviso de privacidad de la Red SUMA RSE." defaultChecked />
                <div style={{ marginTop: 24 }}>
                  <Button variant="cta" size="lg" fullWidth leadingIcon={<Icon name="mail" size={18} />} disabled={!valid} onClick={() => setSent(true)}>
                    Enviar mensaje
                  </Button>
                </div>
              </React.Fragment>
            )}
          </div>
          </window.SumaReveal>

          {/* RIGHT — info (sticky container — do NOT wrap it in SumaReveal) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: mobile ? 'static' : 'sticky', top: 90 }}>
            <window.SumaReveal delay={100}>
            <div style={{ background: 'var(--honey-flower)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)', position: 'relative', overflow: 'hidden' }}>
              <Mosaic size={140} color="rgba(226,211,0,0.16)" style={{ position: 'absolute', top: -16, right: -16 }} />
              <div style={{ position: 'relative' }}>
                <CEyebrow onDark>Datos de contacto</CEyebrow>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 22 }}>
                  {info.map((row) => (
                    <div key={row.k} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ width: 42, height: 42, flex: 'none', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.12)', color: 'var(--sunflower)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name={row.icon} size={20} strokeWidth={1.9} />
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 'var(--size-xs)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--purple-200)' }}>{row.k}</div>
                        <div style={{ color: 'var(--canvas-white)', fontWeight: 600, fontSize: 'var(--size-md)', marginTop: 3, overflowWrap: 'anywhere' }}>{row.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="cta" fullWidth size="lg" leadingIcon={<Icon name="whatsapp" size={20} />} style={{ marginTop: 24 }}
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
            <window.SumaReveal delay={200}>
              <Photo tone="lavender" label="Saltillo, Coahuila" style={{ height: 200 }} />
            </window.SumaReveal>
            <window.SumaReveal delay={300}>
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
