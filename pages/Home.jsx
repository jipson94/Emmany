// Emmany — Accueil (maquette) avec card animée, sélecteur de jours et compteurs.
const { useState: useStateH } = React;

const RANGES = {
  '24 heures': { pts: [60, 30, 68, 26, 72, 34, 80, 28, 62, 40, 74, 44, 88, 50, 82], vol: 8420600, dv: 4.2, tx: 1204, dtx: 3.1, sr: 98.9, dsr: 0.4, axis: ['-24 h', '-12 h', 'Maintenant'], tip: 'Maintenant' },
  '7 derniers jours': { pts: [34, 20, 46, 30, 52, 28, 60, 42, 55, 38, 70, 50, 64, 74, 88], vol: 256780300, dv: 18.6, tx: 24763, dtx: 16.2, sr: 98.6, dsr: 2.1, axis: ['J-7', 'J-4', "Aujourd'hui"], tip: "Auj." },
  '30 derniers jours': { pts: [30, 34, 40, 38, 48, 52, 60, 58, 66, 70, 76, 80, 84, 90, 96], vol: 1024300000, dv: 22.4, tx: 98420, dtx: 19.8, sr: 98.4, dsr: 1.7, axis: ['J-30', 'J-15', "Aujourd'hui"], tip: "Auj." },
  '90 derniers jours': { pts: [20, 48, 26, 60, 34, 70, 30, 78, 44, 86, 40, 92, 56, 96, 74], vol: 3180900000, dv: 31.2, tx: 291540, dtx: 27.5, sr: 98.1, dsr: 3.4, axis: ['J-90', 'J-45', "Aujourd'hui"], tip: "Auj." },
};

function LineChart({ pts, k, tip, axis }) {
  const w = 380, h = 150;
  const max = Math.max(...pts), min = Math.min(...pts), span = (max - min) || 1;
  const x = i => (i / (pts.length - 1)) * w;
  const y = v => 18 + (1 - (v - min) / span) * (h - 42);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;
  const lx = x(pts.length - 1), ly = y(pts[pts.length - 1]);
  return (
    <div key={k} style={{ position: 'relative', width: '100%' }}>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
        <defs><linearGradient id="lc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.26" /><stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" /></linearGradient></defs>
        <line x1="0" y1={ly} x2={w} y2={ly} stroke="var(--border-default)" strokeWidth="1" strokeDasharray="4 5" />
        <path d={area} fill="url(#lc)" style={{ animation: 'fadeUp .8s var(--ease-out) both' }} />
        <path d={line} pathLength="100" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 100, animation: 'drawLine 1.4s var(--ease-out) forwards' }} />
        <circle cx={lx} cy={ly} r="11" fill="var(--color-primary)" opacity="0.18" style={{ animation: 'devPulse 2s var(--ease-in-out) infinite', transformOrigin: `${lx}px ${ly}px` }} />
        <circle cx={lx} cy={ly} r="5" fill="var(--color-primary)" stroke="var(--surface)" strokeWidth="2" />
      </svg>
      <span style={{ position: 'absolute', left: '84%', top: -4, transform: 'translateX(-50%)', background: 'var(--surface)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', borderRadius: 8, padding: '3px 9px', fontSize: 11.5, fontWeight: 600, color: 'var(--ink)', animation: 'fadeUp .5s var(--ease-out) .3s both' }}>{tip}</span>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, letterSpacing: '.02em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{axis.map(a => <span key={a}>{a}</span>)}</div>
    </div>
  );
}

function TxOverview() {
  const [range, setRange] = useStateH('7 derniers jours');
  const [open, setOpen] = useStateH(false);
  const d = RANGES[range];
  return (
    <div className="reveal in" style={{ background: 'var(--surface)', borderRadius: 18, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xl)', padding: 26, aspectRatio: '1 / 1', display: 'flex', flexDirection: 'column', animation: 'floatY 7s var(--ease-in-out) infinite' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>Aperçu des transactions</span>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setOpen(o => !o)} onBlur={() => setTimeout(() => setOpen(false), 150)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: 'var(--ink-3)', border: '1px solid var(--border-default)', borderRadius: 8, padding: '6px 11px', background: 'var(--surface)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{range}<Icon name="chevron-down" size={14} color="var(--gray-400)" /></button>
          {open && (
            <div style={{ position: 'absolute', top: '110%', right: 0, zIndex: 20, background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 10, boxShadow: 'var(--shadow-lg)', padding: 6, minWidth: 180, animation: 'fadeUp .18s var(--ease-out) both' }}>
              {Object.keys(RANGES).map(r => (
                <button key={r} onMouseDown={() => { setRange(r); setOpen(false); }} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', borderRadius: 7, border: 'none', background: r === range ? 'var(--blue-50)' : 'transparent', color: r === range ? 'var(--color-primary)' : 'var(--ink-2)', fontSize: 13.5, fontWeight: r === range ? 600 : 500, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{r}</button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>Volume total</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 2 }}>
        <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}><CountUp key={range + 'v'} value={d.vol} /> <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-muted)' }}>XAF</span></span>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: 2 }}><Icon name="arrow-up" size={13} color="var(--success)" />{d.dv}%</span>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', margin: '16px 0 16px' }}><LineChart pts={d.pts} k={range} tip={d.tip} axis={d.axis} /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, borderTop: '1px solid var(--border-subtle)', paddingTop: 18 }}>
        <div>
          <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>Transactions réussies</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 3 }}><span style={{ fontSize: 21, fontWeight: 800, color: 'var(--ink)' }}><CountUp key={range + 't'} value={d.tx} /></span><span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: 1 }}><Icon name="arrow-up" size={12} color="var(--success)" />{d.dtx}%</span></div>
        </div>
        <div>
          <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>Taux de succès</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 3 }}><span style={{ fontSize: 21, fontWeight: 800, color: 'var(--ink)' }}><CountUp key={range + 's'} value={d.sr} decimals={1} suffix="%" /></span><span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: 1 }}><Icon name="arrow-up" size={12} color="var(--success)" />{d.dsr}%</span></div>
        </div>
      </div>
    </div>
  );
}

function Hero({ onNav }) {
  return (
    <section style={{ padding: '64px 0 40px', background: 'radial-gradient(1200px 400px at 80% -50px, var(--blue-50), transparent)' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div className="reveal in">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: 'var(--color-primary)', background: 'var(--blue-50)', border: '1px solid var(--blue-100)', borderRadius: 999, padding: '5px 12px', marginBottom: 18 }}><span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--success)' }} />En service dans 12 marchés · 40+ moyens de paiement</span>
            <h1 style={{ fontSize: 46, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.1, margin: 0, color: 'var(--ink)' }}>L'infrastructure de paiement conçue pour connecter les entreprises aux moyens de paiement <span style={{ color: 'var(--color-primary)' }}>africains</span>.</h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-3)', margin: '20px 0 0', maxWidth: 480 }}>Emmany aide les commerçants, plateformes et développeurs à intégrer, orchestrer et suivre les paiements via une API PSP sécurisée, fiable et évolutive.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
              <button onClick={() => onNav('contact')} className="em-btn em-btn-primary" style={{ height: 48, padding: '0 24px', borderRadius: 8, border: 'none', background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15.5 }}>Créer un compte</button>
              <button onClick={() => onNav('gateway')} className="em-btn em-btn-ghost" style={{ height: 48, padding: '0 22px', borderRadius: 8, background: 'var(--surface)', color: 'var(--ink)', border: '1.5px solid var(--border-default)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15.5 }}>Découvrir Emmany Gateway</button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            {[{ ic: 'receipt', left: -34, top: 40, d: 0 }, { ic: 'file-text', left: -42, top: 330, d: 1.1 }, { ic: 'banknote', right: -34, top: 60, d: 0.6 }, { ic: 'file-check', right: -42, top: 310, d: 1.7 }].map((f, i) => (
              <span key={f.ic} style={{ position: 'absolute', left: f.left, right: f.right, top: f.top, width: 46, height: 46, borderRadius: 13, background: 'var(--surface)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', zIndex: 3, animation: `floatY ${4.5 + i}s var(--ease-in-out) ${f.d}s infinite` }}><Icon name={f.ic} size={21} color="var(--color-primary)" /></span>
            ))}
            <TxOverview />
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatBand() {
  const stats = [[240000000, 'Volume traité par an', 'XAF', 0], [24763, 'Transactions / jour', '', 0], [40, 'Moyens de paiement', '+', 0], [99.9, 'Disponibilité SLA', '%', 1]];
  return (
    <Container style={{ paddingBottom: 40 }}>
      <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 16, overflow: 'hidden' }}>
        {stats.map(([v, l, suf, dec], i) => (
          <div key={l} style={{ background: 'var(--surface)', padding: '26px 22px', textAlign: 'center' }}>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--color-primary)' }}><CountUp value={v} decimals={dec} suffix={suf === 'XAF' ? '' : suf} />{suf === 'XAF' && <span style={{ fontSize: 15, color: 'var(--text-muted)' }}> XAF</span>}</div>
            <div style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 6 }}>{l}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function EnvCards() {
  const cards = [
    ['production', 'var(--success)', 'Production', 'Infrastructure en production', 'Haute disponibilité & SLA 99.9%'],
    ['sandbox', 'var(--warning)', 'Sandbox', 'Testez sans risque', 'Environnement isolé & sécurisé'],
  ];
  return (
    <Container style={{ paddingTop: 8, paddingBottom: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {cards.map(([k, c, t, d1, d2], i) => (
          <div key={k} className="reveal em-card" style={{ background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 14, padding: '20px 24px', transitionDelay: `${i * 80}ms` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 9, height: 9, borderRadius: 999, background: c }} /><span style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>{t}</span></div>
            <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 8 }}>{d1}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{d2}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function WhyEmmany() {
  const feats = [
    ['network', 'Connectivité africaine', 'Accédez aux principaux moyens de paiement locaux à travers le continent.'],
    ['git-branch', 'Orchestration intelligente', 'Routage dynamique pour maximiser le succès de chaque paiement.'],
    ['shield-check', 'Sécurité & conformité', 'Données chiffrées, API sécurisées, et conformité réglementaire.'],
    ['activity', 'Traçabilité complète', 'Suivez chaque transaction en temps réel avec des rapports détaillés.'],
  ];
  return (
    <section style={{ padding: '48px 0' }}>
      <Container>
        <h2 className="reveal" style={{ textAlign: 'center', fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', margin: '0 0 36px' }}>Pourquoi choisir Emmany ?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
          {feats.map(([ic, t, d], i) => (
            <div key={t} className="reveal em-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 14, padding: 22, transitionDelay: `${i * 90}ms` }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 12, background: 'var(--blue-50)', marginBottom: 14 }}><Icon name={ic} size={21} color="var(--color-primary)" /></span>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{t}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: '8px 0 0' }}>{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PaymentMethods() {
  const m = [
    ['smartphone', 'Mobile Money', 'MTN, Airtel, Moov…'],
    ['credit-card', 'Cartes & Wallets', 'Visa, Mastercard, Wave'],
    ['building-2', 'Virements bancaires', 'Comptes bancaires locaux'],
    ['ellipsis', 'Autres méthodes', 'USSD, QR, et plus'],
  ];
  return (
    <Container style={{ paddingBottom: 40 }}>
      <div className="reveal" style={{ background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '28px 24px' }}>
        <h3 style={{ textAlign: 'center', fontSize: 18, fontWeight: 700, color: 'var(--ink)', margin: '0 0 22px' }}>Moyens de paiement disponibles</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {m.map(([ic, t, d]) => (
            <div key={t} className="em-card" style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '14px 16px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: 'var(--blue-50)', flexShrink: 0 }}><Icon name={ic} size={19} color="var(--color-primary)" /></span>
              <div><div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{t}</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{d}</div></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function UseCases() {
  const cases = [
    ['shopping-bag', 'E-commerce & marketplaces', 'Encaissez en mobile money et carte, gérez les remboursements et les paiements fractionnés.'],
    ['repeat', 'Abonnements & SaaS', 'Prélèvements récurrents, relances automatiques et gestion fine des échecs.'],
    ['banknote', 'Versements & payouts', 'Payez marchands, chauffeurs et fournisseurs en masse, en temps réel.'],
    ['landmark', 'Banques & institutions', 'Connectez de nouveaux canaux de paiement sans refondre votre core banking.'],
  ];
  return (
    <section style={{ padding: '16px 0 40px' }}>
      <Container>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 32px' }}>
          <Eyebrow>Cas d'usage</Eyebrow>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', margin: '12px 0 0' }}>Une seule intégration, tous vos flux</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
          {cases.map(([ic, t, d], i) => (
            <div key={t} className="reveal em-card" style={{ display: 'flex', gap: 16, background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 14, padding: 22, transitionDelay: `${i * 80}ms` }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 12, background: 'var(--gradient-brand)', flexShrink: 0 }}><Icon name={ic} size={22} color="#fff" /></span>
              <div><h3 style={{ fontSize: 16.5, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{t}</h3><p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: '6px 0 0' }}>{d}</p></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DevBand() {
  return (
    <Container style={{ paddingBottom: 40 }}>
      <div className="reveal" style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', borderRadius: 16, padding: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
        <div style={{ position: 'absolute', right: -30, bottom: -30, width: 180, height: 180, backgroundImage: `url(${MARK})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .08, filter: 'brightness(0) invert(1)' }} />
        <div style={{ position: 'relative' }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: 0 }}>Conçue pour les développeurs</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
            {['API RESTful simple et documentée', 'Webhooks en temps réel', 'SDKs et bibliothèques disponibles'].map(t => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#dfe7f2', fontSize: 14.5 }}><Icon name="check" size={18} color="var(--cyan-400)" />{t}</div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', background: '#020c1f', border: '1px solid var(--navy-700)', borderRadius: 12, padding: '16px 18px', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.8, color: '#e6ecf5' }}>
          <div style={{ color: '#7ee3d8' }}>POST <span style={{ color: '#9fb0cc' }}>/v1/payments</span></div>
          <div>{'{'}</div>
          <div>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"amount"</span>: <span style={{ color: '#ffd479' }}>10000</span>,</div>
          <div>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"currency"</span>: <span style={{ color: '#7ee3d8' }}>"XAF"</span>,</div>
          <div>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"country"</span>: <span style={{ color: '#7ee3d8' }}>"CG"</span></div>
          <div>{'}'}</div>
        </div>
      </div>
    </Container>
  );
}

function SandboxBanner({ onNav }) {
  return (
    <Container style={{ paddingBottom: 64 }}>
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, background: 'var(--warning-soft)', border: '1px solid #f4dca6', borderRadius: 12, padding: '18px 24px' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Icon name="info" size={22} color="var(--warning)" />
          <div><div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--ink)' }}>Testez gratuitement avec notre sandbox</div><div style={{ fontSize: 13.5, color: 'var(--ink-3)' }}>Accédez à l'environnement de test et intégrez en toute confiance.</div></div>
        </div>
        <button onClick={() => onNav('developers')} className="em-btn em-btn-primary" style={{ flexShrink: 0, height: 44, padding: '0 20px', borderRadius: 8, border: 'none', background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5 }}>Activer la sandbox gratuite</button>
      </div>
    </Container>
  );
}

function Home({ onNav }) {
  useLucide('home');
  return (<><Hero onNav={onNav} /><StatBand /><EnvCards /><WhyEmmany /><PaymentMethods /><UseCases /><DevBand /><SandboxBanner onNav={onNav} /></>);
}
Object.assign(window, { Home });
