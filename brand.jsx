// Red SUMA RSE Coahuila — brand helpers (icon set, logo, mosaic motif, photo placeholder)
const SUMA_ICON_PATHS = {
  menu: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  'trending-up': '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
  building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 20.5l1.4-4.6A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9.2 8.4c.15-.35.3-.36.45-.37h.4c.13 0 .3 0 .44.34l.55 1.3c.07.16.04.32-.05.45l-.35.42c-.1.12-.16.25-.07.43.34.7.92 1.27 1.6 1.66.18.1.34.08.46-.04l.43-.45c.13-.13.27-.1.43-.05l1.27.6c.17.08.27.16.28.3 0 .43-.2.88-.55 1.1-.35.22-.86.36-1.4.2a6 6 0 0 1-3.7-3.6c-.18-.5-.1-1.1.18-1.5Z"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
};

function Icon({ name, size = 24, strokeWidth = 2, style, ...rest }) {
  const paths = SUMA_ICON_PATHS[name] || '';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flex: 'none', ...style }}
      dangerouslySetInnerHTML={{ __html: paths }} {...rest} />
  );
}

const ASSET = 'assets';
const R = (typeof window !== 'undefined' && window.__resources) || {};
function Logo({ variant = 'default', height = 38 }) {
  const src = variant === 'reverse'
    ? (R.logoReverse || `${ASSET}/logo-full-reverse.png`)
    : (R.logoFull || `${ASSET}/logo-full-transparent.png`);
  return <img src={src} alt="Red SUMA RSE Coahuila" style={{ height, width: 'auto', display: 'block' }} />;
}

// Decorative tile motif derived from the logo mark: a 5×5 block of tiles with a
// cross-shaped negative space punched through the centre (and two rotated tiles
// top-left, echoing the "people joining" feel of the brandmark).
function Mosaic({ size = 120, color = 'var(--sunflower)', style }) {
  const u = size / 5;
  const t = u * 0.82;
  // [col, row, rotationDeg?] — the empty cells (2,1)(1,2)(2,2)(3,2)(2,3) form a cross.
  const cells = [
    [0, 0, -10], [1, 0, 9], [2, 0], [3, 0], [4, 0],
    [0, 1], [1, 1, -5], [3, 1], [4, 1],
    [0, 2], [4, 2],
    [0, 3], [1, 3], [3, 3], [4, 3],
    [0, 4], [1, 4], [2, 4], [3, 4], [4, 4],
  ];
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: 'none', ...style }} aria-hidden="true">
      {cells.map(([c, r, rot], i) => (
        <span key={i} style={{
          position: 'absolute', left: c * u, top: r * u, width: t, height: t,
          background: color, borderRadius: 3, transform: rot ? `rotate(${rot}deg)` : 'none',
        }} />
      ))}
    </div>
  );
}

// Honest, on-brand photo placeholder. Replace with real photography when available.
function PhotoPlaceholder({ label = 'Fotografía', tone = 'lavender', radius = 'var(--radius-lg)', style, children }) {
  const bg = tone === 'purple' ? 'var(--honey-flower)' : tone === 'plum' ? 'var(--plum-gray)' : 'var(--lavender)';
  const fg = tone === 'lavender' ? 'var(--purple-400)' : 'var(--purple-200)';
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', background: bg, borderRadius: radius,
      display: 'flex', alignItems: 'center', justifyContent: 'center', ...style,
    }}>
      <Mosaic size={140} color={tone === 'lavender' ? 'var(--purple-200)' : 'rgba(226,211,0,0.55)'}
        style={{ position: 'absolute', top: -10, right: -16, opacity: 0.7 }} />
      <Mosaic size={90} color={tone === 'lavender' ? 'var(--sunflower)' : 'rgba(255,255,255,0.18)'}
        style={{ position: 'absolute', bottom: -8, left: -10, opacity: 0.8 }} />
      {children || (
        <span style={{
          position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8,
          color: fg, fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 600,
          letterSpacing: '.04em', textTransform: 'uppercase',
        }}>
          <Icon name="users" size={18} /> {label}
        </span>
      )}
    </div>
  );
}

Object.assign(window, { SumaIcon: Icon, SumaLogo: Logo, SumaMosaic: Mosaic, SumaPhoto: PhotoPlaceholder });

// Crisp footer lockup for dark backgrounds: yellow mosaic mark + solid white wordmark.
function FooterBrand({ markHeight = 46 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <img src={R.logoMark || `${ASSET}/logo-mark-transparent.png`} alt="Red SUMA RSE Coahuila" style={{ height: markHeight, width: 'auto', display: 'block' }} />
      <div style={{ lineHeight: 0.98 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, letterSpacing: '-0.01em', color: 'var(--canvas-white)' }}>
          <span style={{ fontWeight: 400 }}>SUMA</span> <span style={{ fontWeight: 800 }}>RSE</span>
        </div>
        <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 600, letterSpacing: '.34em', color: 'var(--purple-200)', marginTop: 4 }}>COAHUILA</div>
      </div>
    </div>
  );
}
window.SumaFooterBrand = FooterBrand;

// Responsive helper — true when viewport is at or below the breakpoint (mobile).
function useIsMobile(bp = 860) {
  const [m, setM] = React.useState(typeof window !== 'undefined' && window.innerWidth <= bp);
  React.useEffect(() => {
    const on = () => setM(window.innerWidth <= bp);
    on();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [bp]);
  return m;
}
window.useIsMobile = useIsMobile;
