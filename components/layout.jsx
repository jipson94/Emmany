// Shared website chrome (matched to Emmany mockup): Icon, Container, Nav, Footer, StatusBadge.
const { useState, useEffect, useRef } = React;
const MARK = 'assets/emmany-mark-trim.png';

function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    if (window.lucide) window.lucide.createIcons();
    const svg = el.querySelector('svg');
    if (svg) { svg.setAttribute('width', size); svg.setAttribute('height', size); svg.setAttribute('stroke-width', strokeWidth); svg.style.display = 'block'; }
  }, [name, size, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, color, ...style }}></span>;
}
function useLucide(dep) {
  useEffect(() => {
    if (!window.lucide) return;
    window.lucide.createIcons();
    document.querySelectorAll('i[data-stroke] svg').forEach(svg => svg.setAttribute('stroke-width', svg.parentElement.getAttribute('data-stroke')));
  }, [dep]);
}

// Compteur animé (count-up) à l'apparition à l'écran.
function useCountUp(target, { duration = 2400, decimals = 0 } = {}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current; if (!node) return;
    let raf, started = false;
    const run = () => {
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        const e = 1 - Math.pow(1 - p, 3);
        setVal(target * e);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((es) => es.forEach(en => { if (en.isIntersecting && !started) { started = true; run(); io.disconnect(); } }), { threshold: 0.3, root: document.getElementById('site-scroll') });
    io.observe(node);
    const rect = node.getBoundingClientRect();
    if (!started && rect.top < (window.innerHeight || 900) && rect.bottom > 0) { started = true; run(); io.disconnect(); }
    const fb = setTimeout(() => { if (!started) { started = true; run(); io.disconnect(); } }, 600);
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearTimeout(fb); };
  }, [target]);
  return [ref, val];
}
function CountUp({ value, decimals = 0, prefix = '', suffix = '', style }) {
  const [ref, v] = useCountUp(value, { decimals });
  const txt = v.toLocaleString('fr-FR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).replace(/\u202f/g, ',');
  return <span ref={ref} style={style}>{prefix}{txt}{suffix}</span>;
}

const Container = ({ children, style }) => (
  <div style={{ width: '100%', maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '0 24px', boxSizing: 'border-box', ...style }}>{children}</div>
);
const Eyebrow = ({ children, tone = 'primary', style }) => (
  <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: tone === 'light' ? 'var(--cyan-400)' : 'var(--color-primary)', ...style }}>{children}</span>
);

const STATUS = {
  actif: { label: 'Actif', bg: 'var(--success-soft)', fg: '#00795a' },
  bientot: { label: 'Bientôt disponible', bg: 'var(--blue-50)', fg: 'var(--blue-700)' },
  maintenance: { label: 'En maintenance', bg: 'var(--warning-soft)', fg: '#8a5a00' },
  sandbox: { label: 'Sandbox uniquement', bg: '#fde7d3', fg: '#b45309' },
};
function StatusBadge({ kind, children }) {
  const s = STATUS[kind] || STATUS.actif;
  return <span style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: s.bg, color: s.fg, whiteSpace: 'nowrap' }}>{children || s.label}</span>;
}

function Logo({ tone = 'dark', product, size = 30 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28 }}>
      <img src={MARK} alt="Emmany" style={{ height: size, width: 'auto' }} />
      <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: size * 0.2 }}>
        <span style={{ fontSize: size * 0.8, fontWeight: 800, letterSpacing: '-.02em', color: tone === 'light' ? '#fff' : 'var(--ink)', lineHeight: 1 }}>Emmany</span>
        {product && <><span style={{ color: 'var(--gray-300)', fontWeight: 300, fontSize: size * 0.72 }}>|</span><span style={{ fontSize: size * 0.62, fontWeight: 500, color: 'var(--color-primary)', lineHeight: 1 }}>{product}</span></>}
      </span>
    </span>
  );
}

function Nav({ current, onNav }) {
  const items = [['gateway', 'Produits'], ['countries', 'Pays & frais'], ['developers', 'Développeurs'], ['docs', 'Documentation'], ['pricing', 'Tarifs']];
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('em-theme') || 'light'; } catch (e) { return 'light'; } });
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (k) => { setMenuOpen(false); onNav(k); };
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); try { localStorage.setItem('em-theme', theme); } catch (e) {} }, [theme]);
  const toggleTheme = () => setTheme(t => {
    const next = t === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('em-theme', next); } catch (e) {}
    return next;
  });
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--nav-bg)', backdropFilter: 'saturate(180%) blur(10px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex', transition: 'transform .18s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}><Logo size={28} /></a>
        <nav className="em-nav-links" style={{ display: 'flex', gap: 2 }}>
          {items.map(([k, l, caret]) => (
            <a key={k} className={'em-navlink' + (current === k ? ' active' : '')} onClick={() => go(k)}
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4, padding: '22px 12px', fontSize: 14.5, fontWeight: 500, whiteSpace: 'nowrap', color: current === k ? 'var(--color-primary)' : 'var(--ink-3)' }}>
              {l}{caret && <Icon name="chevron-down" size={15} color="var(--gray-400)" />}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button onClick={toggleTheme} aria-label="Basculer le thème" className="em-btn" style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--surface)', border: '1.5px solid var(--border-default)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} color="var(--ink-2)" /></button>
          <button onClick={() => onNav('login')} className="em-btn em-btn-ghost em-desktop-cta" style={{ height: 40, padding: '0 16px', borderRadius: 8, background: 'var(--surface)', border: '1.5px solid var(--border-default)', color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name="log-in" size={16} />Connexion</button>
          <button onClick={() => onNav('contact')} className="em-btn em-btn-primary em-desktop-cta" style={{ height: 40, padding: '0 18px', borderRadius: 8, border: 'none', background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name="user-plus" size={16} color="#fff" />Créer un compte</button>
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Menu" className="em-btn em-hamburger" style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--surface)', border: '1.5px solid var(--border-default)', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Icon name={menuOpen ? 'x' : 'menu'} size={18} color="var(--ink-2)" /></button>
        </div>
      </Container>
      {menuOpen && (
        <div className="em-mobile-menu" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--nav-bg)', backdropFilter: 'saturate(180%) blur(10px)' }}>
          <Container style={{ padding: '10px 24px 16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map(([k, l]) => (
              <a key={k} onClick={() => go(k)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', minHeight: 46, fontSize: 15.5, fontWeight: 600, color: current === k ? 'var(--color-primary)' : 'var(--ink)', borderBottom: '1px solid var(--border-subtle)' }}>{l}</a>
            ))}
            <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
              <button onClick={() => go('login')} className="em-btn em-btn-ghost" style={{ flex: 1, height: 46, borderRadius: 8, background: 'var(--surface)', border: '1.5px solid var(--border-default)', color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}><Icon name="log-in" size={16} />Connexion</button>
              <button onClick={() => go('contact')} className="em-btn em-btn-primary" style={{ flex: 1, height: 46, borderRadius: 8, border: 'none', background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}><Icon name="user-plus" size={16} color="#fff" />Créer un compte</button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Footer({ onNav }) {
  const cols = [
    ['Produits', ['Emmany Gateway', 'Fonctionnalités', 'Pays & frais']],
    ['Ressources', ['Documentation', 'Guides', 'API Status']],
    ['Société', ['À propos', 'Carrières', 'Contact']],
  ];
  return (
    <footer style={{ background: 'var(--navy-900)', color: 'var(--text-on-dark-muted)', paddingTop: 56 }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1.1fr', gap: 28, paddingBottom: 44 }}>
          <div>
            <img src="assets/emmany-logo-footer.png" alt="Emmany" style={{ height: 34, width: 'auto', display: 'block' }} />
            <p style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.7, maxWidth: 240 }}>Infrastructure de paiement sécurisée et évolutive pour l'Afrique et le monde.</p>
          </div>
          {cols.map(([h, links]) => (
            <div key={h}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 14 }}>{h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(l => <a key={l} className="em-footlink" onClick={() => onNav && onNav(l === 'Emmany Gateway' ? 'gateway' : l === 'Pays & frais' || l === 'Fonctionnalités' ? 'countries' : l === 'Documentation' || l === 'Guides' || l === 'API Status' ? 'docs' : l === 'Contact' ? 'contact' : 'home')} style={{ cursor: 'pointer', fontSize: 13.5, color: '#9fb0cc' }}>{l}</a>)}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Suivez-nous</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {['at-sign', 'send', 'code'].map((s, i) => <a key={i} className="em-social" style={{ cursor: 'pointer', width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.06)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s} size={17} color="#9fb0cc" /></a>)}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--navy-700)', padding: '20px 0 36px', fontSize: 13 }}>© 2026 Emmany — Infrastructure de paiement · Orchestration sécurisée</div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Icon, useLucide, Container, Eyebrow, Logo, Nav, Footer, StatusBadge, MARK, CountUp });
