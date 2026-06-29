// Donar — Red SUMA RSE Coahuila
const HOME = 'Red SUMA RSE Coahuila.html';

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
function DonHeader() {
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
          <Button variant="secondary" size="sm" leadingIcon={<Icon name="mail" size={16} />} onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
          <Button variant="cta" size="sm" leadingIcon={<Icon name="heart" size={16} />} disabled>Donar</Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- DONAR MODULE ---------- */
function DonarModule() {
  const { Button, Card, Input, Checkbox, Switch, Badge, ProgressBar, Alert, Select } = window.SUMARSEDesignSystem_6dc1cb;
  const mobile = window.useIsMobile();
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;

  const amounts = [500, 1000, 2500, 5000];
  const [amount, setAmount] = React.useState(1000);
  const [custom, setCustom] = React.useState('');
  const [monthly, setMonthly] = React.useState(true);
  const [done, setDone] = React.useState(false);
  const value = custom ? Number(custom) || 0 : amount;

  const impact = {
    500: 'Materiales socioemocionales para una o un docente en formación.',
    1000: 'Una sesión de capacitación para profesionales de la educación.',
    2500: 'Un taller completo de bienestar para un grupo de docentes.',
    5000: 'Acompañamiento a un aula durante un ciclo de la Iniciativa 3.0.',
  }[amount] || 'Tu aportación impulsa la inversión social conjunta de la Red.';

  if (done) {
    return (
      <section style={{ background: 'var(--lavender)', minHeight: 600, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto', padding: 'var(--section-y) var(--gutter)', textAlign: 'center' }}>
          <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Icon name="check" size={40} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', color: 'var(--text-heading)', margin: 0 }}>¡Gracias por sumar!</h1>
          <p style={{ fontSize: 'var(--size-lg)', color: 'var(--text-body)', lineHeight: 1.55, margin: '16px 0 28px' }}>
            Tu aportación {monthly ? 'mensual ' : ''}de <strong>${value.toLocaleString('es-MX')} MXN</strong> impulsa la inversión social conjunta de la Red. Te enviaremos tu recibo deducible por correo.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => { window.location.href = HOME; }}>Volver al inicio</Button>
            <Button variant="secondary" size="lg" onClick={() => setDone(false)}>Hacer otra aportación</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: 'var(--canvas-white)' }}>
      {/* intro */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter) var(--space-7)' }}>
        <DEyebrow>Donar</DEyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', color: 'var(--text-heading)', margin: '14px 0 8px', letterSpacing: '-0.02em', maxWidth: 720 }}>
          Suma tu aportación a la inversión social
        </h1>
        <p style={{ color: 'var(--text-body)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: 0, maxWidth: 600 }}>
          Cada peso se suma a la inversión social conjunta de la Red y llega a las iniciativas que transforman a Coahuila. Es seguro y deducible de impuestos.
        </p>
      </div>

      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.1fr 0.9fr', gap: 48, alignItems: 'start',
      }}>
        {/* LEFT — form */}
        <div>
          <div style={{ fontSize: 'var(--size-sm)', fontWeight: 700, color: 'var(--text-body)', marginBottom: 10 }}>Monto (MXN)</div>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 10, marginBottom: 14 }}>
            {amounts.map((a) => {
              const on = !custom && a === amount;
              return (
                <button key={a} onClick={() => { setAmount(a); setCustom(''); }} style={{
                  padding: '16px 0', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--size-lg)',
                  color: on ? 'var(--purple-700)' : 'var(--text-body)',
                  background: on ? 'var(--purple-50)' : 'var(--surface-card)',
                  border: `2px solid ${on ? 'var(--purple-500)' : 'var(--border-default)'}`,
                  transition: 'all var(--dur-fast) var(--ease-out)',
                }}>${a.toLocaleString('es-MX')}</button>
              );
            })}
          </div>
          <Input placeholder="Otro monto" value={custom} onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ''))}
            leadingIcon={<span style={{ fontWeight: 700, color: 'var(--text-muted)' }}>$</span>} />

          <div style={{ margin: '20px 0', padding: '14px 16px', background: 'var(--surface-soft)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-body)' }}>Aportación mensual</div>
              <div style={{ fontSize: 'var(--size-sm)', color: 'var(--text-muted)' }}>Apoyo constante, mayor impacto.</div>
            </div>
            <Switch checked={monthly} onChange={(e) => setMonthly(e.target.checked)} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <Input label="Nombre" placeholder="Tu nombre" />
            <Input label="Correo" placeholder="tu@correo.com" leadingIcon={<Icon name="mail" size={18} />} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Input label="Empresa u organización (opcional)" placeholder="Nombre de tu empresa" leadingIcon={<Icon name="building" size={18} />} />
          </div>
          <Checkbox label="Quiero recibir noticias de la Red SUMA RSE" defaultChecked />

          <div style={{ marginTop: 24 }}>
            <Button variant="cta" size="lg" fullWidth leadingIcon={<Icon name="heart" size={18} />} onClick={() => setDone(true)}>
              Donar ${value.toLocaleString('es-MX')} {monthly ? 'al mes' : 'ahora'}
            </Button>
          </div>
        </div>

        {/* RIGHT — context */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: mobile ? 'static' : 'sticky', top: 90 }}>
          <Card variant="brand" padding="lg" style={{ position: 'relative', overflow: 'hidden' }}>
            <Mosaic size={140} color="rgba(226,211,0,0.18)" style={{ position: 'absolute', top: -16, right: -16 }} />
            <Badge variant="accent">Tu impacto</Badge>
            <p style={{ position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--size-xl)', lineHeight: 1.3, color: 'var(--canvas-white)', margin: '14px 0 0' }}>{impact}</p>
          </Card>
          <Card variant="default" padding="lg">
            <Badge variant="success" dot>En curso</Badge>
            <div style={{ fontWeight: 700, color: 'var(--text-heading)', margin: '12px 0 4px', fontSize: 'var(--size-md)' }}>Iniciativa 3.0 · Educación para el Bienestar</div>
            <p style={{ margin: '0 0 16px', color: 'var(--text-muted)', fontSize: 'var(--size-sm)' }}>Meta de inversión social para el ciclo actual.</p>
            <ProgressBar value={2800000} max={4200000} showValue valueText="$2.8 MDP / $4.2 MDP" />
            <div style={{ display: 'flex', gap: 28, marginTop: 18 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-xl)', color: 'var(--honey-flower)', lineHeight: 1 }}>+12</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 'var(--size-sm)', marginTop: 4 }}>empresas aportando</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-xl)', color: 'var(--honey-flower)', lineHeight: 1 }}>67%</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 'var(--size-sm)', marginTop: 4 }}>de la meta</div>
              </div>
            </div>
          </Card>
          <Alert variant="success" icon={<Icon name="check-circle" size={20} />}>Pago seguro · Recibo deducible de impuestos.</Alert>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function DonFooter() {
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

function DonApp() {
  return (
    <React.Fragment>
      <window.SiteHeader current="donar" />
      <main><DonarModule /></main>
      <window.SiteFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DonApp />);
