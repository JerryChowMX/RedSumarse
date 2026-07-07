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
          <window.SumaButtonRow center>
            <Button variant="primary" size="lg" onClick={() => { window.location.href = HOME; }}>Volver al inicio</Button>
            <Button variant="secondary" size="lg" onClick={() => setDone(false)}>Hacer otra aportación</Button>
          </window.SumaButtonRow>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: 'var(--canvas-white)' }}>
      {/* intro */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter) var(--space-7)' }}>
        <window.SumaReveal>
          <DEyebrow>Donar</DEyebrow>
        </window.SumaReveal>
        <window.SumaReveal delay={120}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', color: 'var(--text-heading)', margin: '14px 0 8px', letterSpacing: '-0.02em', maxWidth: 720 }}>
            Suma tu aportación a la inversión social
          </h1>
        </window.SumaReveal>
        <window.SumaReveal delay={240}>
          <p style={{ color: 'var(--text-body)', fontSize: 'var(--size-lg)', lineHeight: 1.55, margin: 0, maxWidth: 600 }}>
            Cada peso se suma a la inversión social conjunta de la Red y llega a las iniciativas que transforman a Coahuila. Es seguro y deducible de impuestos.
          </p>
        </window.SumaReveal>
      </div>

      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) var(--section-y)',
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.1fr 0.9fr', gap: 48, alignItems: 'start',
      }}>
        {/* LEFT — form */}
        <window.SumaReveal y={24} style={{ minWidth: 0 }}>
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
        </window.SumaReveal>

        {/* RIGHT — context (sticky container — do NOT wrap it in SumaReveal) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: mobile ? 'static' : 'sticky', top: 90 }}>
          <window.SumaReveal delay={100}>
          <Card variant="brand" padding="lg" style={{ position: 'relative', overflow: 'hidden' }}>
            <Mosaic size={140} color="rgba(226,211,0,0.18)" style={{ position: 'absolute', top: -16, right: -16 }} />
            <Badge variant="accent">Tu impacto</Badge>
            <p style={{ position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--size-xl)', lineHeight: 1.3, color: 'var(--canvas-white)', margin: '14px 0 0' }}>{impact}</p>
          </Card>
          </window.SumaReveal>
          <window.SumaReveal delay={200}>
          <Card variant="default" padding="lg">
            <Badge variant="success" dot>En curso</Badge>
            <div style={{ fontWeight: 700, color: 'var(--text-heading)', margin: '12px 0 4px', fontSize: 'var(--size-md)' }}>Iniciativa 3.0 · Educación para el Bienestar</div>
            <p style={{ margin: '0 0 16px', color: 'var(--text-muted)', fontSize: 'var(--size-sm)' }}>Meta de inversión social para el ciclo actual.</p>
            <ProgressBar value={2800000} max={4200000} showValue valueText="$2.8 MDP / $4.2 MDP" />
            <div style={{ display: 'flex', gap: 28, marginTop: 18 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-xl)', color: 'var(--honey-flower)', lineHeight: 1 }}><window.SumaCountUp value="+12" /></div>
                <div style={{ color: 'var(--text-muted)', fontSize: 'var(--size-sm)', marginTop: 4 }}>empresas aportando</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-xl)', color: 'var(--honey-flower)', lineHeight: 1 }}><window.SumaCountUp value="67%" /></div>
                <div style={{ color: 'var(--text-muted)', fontSize: 'var(--size-sm)', marginTop: 4 }}>de la meta</div>
              </div>
            </div>
          </Card>
          </window.SumaReveal>
          <window.SumaReveal delay={300}>
            <Alert variant="success" icon={<Icon name="check-circle" size={20} />}>Pago seguro · Recibo deducible de impuestos.</Alert>
          </window.SumaReveal>
        </div>
      </div>
    </section>
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
