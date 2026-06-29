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

/* ---------- HEADER ---------- */
function ConHeader() {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const links = [
    { label: 'Inicio', href: HOME },
    { label: 'Iniciativas', href: 'Iniciativas.html' },
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
                fontFamily: 'var(--font-text)', fontSize: 'var(--size-base)', fontWeight: 500,
                color: 'var(--text-body)', background: 'transparent',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface-soft)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >{l.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Button variant="secondary" size="sm" leadingIcon={<Icon name="mail" size={16} />} disabled>Contacto</Button>
          <Button variant="cta" size="sm" leadingIcon={<Icon name="heart" size={16} />} onClick={() => { window.location.href = 'Donar.html'; }}>Donar</Button>
        </div>
      </div>
    </header>
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
    { icon: 'map-pin', k: 'Dónde estamos', v: 'Saltillo, Coahuila, México' },
    { icon: 'mail', k: 'Correo', v: 'contacto@redsumarse.org' },
    { icon: 'phone', k: 'Teléfono', v: '(844) 000 0000' },
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
        <Mosaic size={240} color="var(--lavender)" style={{ position: 'absolute', top: -36, right: -48, opacity: 0.85 }} />
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter) var(--space-6)', position: 'relative' }}>
          <CEyebrow>Contacto</CEyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: '18px 0 0' }}>Hablemos</h1>
          <p style={{ fontSize: 'var(--size-lg)', lineHeight: 1.6, color: 'var(--text-body)', margin: '20px 0 0', maxWidth: 560 }}>
            ¿Tu empresa quiere sumar, te interesa el voluntariado o tienes una pregunta? Escríbenos y te respondemos pronto.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section style={{ background: 'var(--canvas-white)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)',
          display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.1fr 0.9fr', gap: 48, alignItems: 'start',
        }}>
          {/* LEFT — form */}
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

          {/* RIGHT — info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: mobile ? 'static' : 'sticky', top: 90 }}>
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
                      <div>
                        <div style={{ fontSize: 'var(--size-xs)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--purple-200)' }}>{row.k}</div>
                        <div style={{ color: 'var(--canvas-white)', fontWeight: 600, fontSize: 'var(--size-md)', marginTop: 3 }}>{row.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="cta" fullWidth size="lg" leadingIcon={<Icon name="whatsapp" size={20} />} style={{ marginTop: 24 }}
                  onClick={() => { window.open('https://wa.link/m1vblc', '_blank', 'noopener'); }}>
                  Escríbenos por WhatsApp
                </Button>
                <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                  {['instagram', 'facebook', 'linkedin'].map((n) => (
                    <a key={n} href="#" onClick={(e) => e.preventDefault()} aria-label={n} style={{
                      width: 40, height: 40, borderRadius: 'var(--radius-md)', display: 'inline-flex',
                      alignItems: 'center', justifyContent: 'center', color: 'var(--purple-900)', background: 'var(--sunflower)',
                    }}><Icon name={n} size={20} /></a>
                  ))}
                </div>
              </div>
            </div>
            <Photo tone="lavender" label="Saltillo, Coahuila" style={{ height: 200 }} />
            <Alert variant="info" icon={<Icon name="check-circle" size={20} />}>Respondemos en un plazo de 2 a 3 días hábiles.</Alert>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ---------- FOOTER ---------- */
function ConFooter() {
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
