// Shared responsive site chrome — header (with mobile hamburger) + footer.
// Used by every page. Loads after brand.jsx.
const SITE_HOME = 'Red SUMA RSE Coahuila.html';
const SITE_NAV = [
  { key: 'inicio', label: 'Inicio', href: SITE_HOME },
  { key: 'iniciativas', label: 'Iniciativas', href: 'Iniciativas.html' },
  { key: 'nosotros', label: 'Nosotros', href: 'Nosotros.html' },
];

function SiteHeader({ current }) {
  const { Button } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const mobile = window.useIsMobile();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (!mobile) setOpen(false); }, [mobile]);

  const navLink = (l, block) => {
    const on = current === l.key;
    return (
      <a key={l.key} href={l.href} onClick={() => setOpen(false)}
        style={{
          padding: block ? '13px 14px' : '8px 14px', borderRadius: 'var(--radius-md)', textDecoration: 'none',
          fontFamily: 'var(--font-text)', fontSize: block ? 'var(--size-md)' : 'var(--size-base)',
          fontWeight: on ? 700 : 500, display: block ? 'block' : 'inline-block',
          color: on ? 'var(--text-heading)' : 'var(--text-body)',
          background: on ? 'var(--surface-soft)' : 'transparent',
        }}
        onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = 'var(--surface-soft)'; }}
        onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = 'transparent'; }}
      >{l.label}</a>
    );
  };

  const contacto = (full) => (
    <Button variant="secondary" size={full ? 'md' : 'sm'} fullWidth={full} leadingIcon={<Icon name="mail" size={16} />}
      disabled={current === 'contacto'} onClick={() => { window.location.href = 'Contacto.html'; }}>Contacto</Button>
  );
  const donar = (full) => (
    <Button variant="cta" size={full ? 'md' : 'sm'} fullWidth={full} leadingIcon={<Icon name="heart" size={16} />}
      disabled={current === 'donar'} onClick={() => { window.location.href = 'Donar.html'; }}>Donar</Button>
  );

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'color-mix(in srgb, var(--canvas-white) 92%, transparent)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '12px var(--gutter)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <a href={SITE_HOME} style={{ display: 'flex' }}><window.SumaLogo height={mobile ? 32 : 38} /></a>

        {!mobile && (
          <React.Fragment>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {SITE_NAV.map((l) => navLink(l, false))}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {contacto(false)}{donar(false)}
            </div>
          </React.Fragment>
        )}

        {mobile && (
          <button aria-label="Menú" aria-expanded={open} onClick={() => setOpen((o) => !o)} style={{
            width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: open ? 'var(--surface-soft)' : 'transparent', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)', color: 'var(--text-heading)', cursor: 'pointer',
          }}>
            <Icon name={open ? 'x' : 'menu'} size={24} />
          </button>
        )}
      </div>

      {/* mobile dropdown panel */}
      {mobile && open && (
        <div style={{
          borderTop: '1px solid var(--border-subtle)', background: 'var(--canvas-white)',
          padding: '10px var(--gutter) 18px', display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: 'var(--shadow-md)',
        }}>
          {SITE_NAV.map((l) => navLink(l, true))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
            {contacto(true)}{donar(true)}
          </div>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  const Icon = window.SumaIcon;
  const mobile = window.useIsMobile();
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
        display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.6fr 1fr 1fr 1.1fr', gap: mobile ? 32 : 40,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 340 }}>
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
        {col('Red', [{ label: 'Quiénes somos', href: SITE_HOME + '#quienes' }, { label: 'Iniciativas', href: 'Iniciativas.html' }, { label: 'Resultados', href: SITE_HOME + '#resultados' }, { label: 'Nosotros', href: 'Nosotros.html' }])}
        {col('Impacto', [{ label: 'Economía' }, { label: 'Sociedad' }, { label: 'Medio ambiente' }, { label: 'Transparencia' }])}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--sunflower)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Contacto</div>
          <a href="Contacto.html" style={{ display: 'flex', gap: 8, color: 'var(--purple-100)', fontSize: 'var(--size-base)', textDecoration: 'none' }}><Icon name="map-pin" size={18} /> Saltillo, Coahuila</a>
          <a href="Contacto.html" style={{ display: 'flex', gap: 8, color: 'var(--purple-100)', fontSize: 'var(--size-base)', textDecoration: 'none' }}><Icon name="mail" size={18} /> contacto@redsumarse.org</a>
          <a href="Contacto.html" style={{ display: 'flex', gap: 8, color: 'var(--purple-100)', fontSize: 'var(--size-base)', textDecoration: 'none' }}><Icon name="phone" size={18} /> (844) 000 0000</a>
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

// Responsive action-button row: side-by-side on desktop, stacked full-width on
// mobile (so pairs never wrap into uneven widths). Clones Button children to set
// fullWidth on mobile.
function ButtonRow({ children, center = false, style }) {
  const mobile = window.useIsMobile();
  const kids = React.Children.toArray(children).filter(Boolean).map((c, i) =>
    React.isValidElement(c)
      ? React.cloneElement(c, { key: c.key != null ? c.key : i, fullWidth: mobile ? true : c.props.fullWidth })
      : c
  );
  return (
    <div style={{
      display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 12,
      alignItems: mobile ? 'stretch' : 'center',
      justifyContent: center ? 'center' : 'flex-start',
      flexWrap: 'wrap', ...style,
    }}>{kids}</div>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, SumaButtonRow: ButtonRow });
