// Emmany — Page produit Gateway (maquette).
function GatewayArt() {
  const rails = [
    { ic: 'smartphone', label: 'Mobile Money', top: '20%', y: 70, d: 0 },
    { ic: 'credit-card', label: 'Cartes', top: '50%', y: 150, d: 0.5 },
    { ic: 'building-2', label: 'Virement', top: '80%', y: 230, d: 1 },
  ];
  const paths = [
    { id: 'gw1', d: 'M40,150 L150,150 Q210,150 250,72', dur: 2.4, delay: 0, c: 'var(--cyan-400)' },
    { id: 'gw2', d: 'M40,150 L250,150', dur: 2.4, delay: 0.5, c: 'var(--color-primary)' },
    { id: 'gw3', d: 'M40,150 L150,150 Q210,150 250,228', dur: 2.4, delay: 1, c: 'var(--cyan-400)' },
  ];
  return (
    <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
      {[{ x: 20, y: 10, s: 190, c: 'rgba(1,252,233,.20)', d: 0 }, { x: 200, y: 30, s: 180, c: 'rgba(0,66,236,.18)', d: 1.2 }, { x: 180, y: 160, s: 200, c: 'rgba(0,216,200,.16)', d: 0.6 }, { x: 0, y: 150, s: 170, c: 'rgba(0,66,236,.14)', d: 2 }].map((b, i) => (
        <div key={i} style={{ position: 'absolute', left: b.x, top: b.y, width: b.s, height: b.s, borderRadius: '50%', background: `radial-gradient(circle at 40% 35%, ${b.c}, transparent 68%)`, filter: 'blur(8px)', animation: `gwFloat ${6 + i}s var(--ease-in-out) ${b.d}s infinite` }} />
      ))}
      <svg viewBox="0 0 300 300" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>{paths.map(p => <path key={p.id} id={p.id} d={p.d} fill="none" />)}</defs>
        {paths.map(p => <path key={'l' + p.id} d={p.d} fill="none" stroke="var(--blue-200)" strokeWidth="2" strokeDasharray="3 5" opacity="0.7" />)}
        {paths.map(p => (
          <circle key={'t' + p.id} r="5" fill={p.c}>
            <animateMotion dur={p.dur + 's'} begin={p.delay + 's'} repeatCount="indefinite"><mpath href={'#' + p.id} /></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.8;1" dur={p.dur + 's'} begin={p.delay + 's'} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      {/* Requête entrante */}
      <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--navy-900)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, padding: '6px 10px', borderRadius: 8, boxShadow: 'var(--shadow-md)', whiteSpace: 'nowrap' }}><span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--cyan-400)' }} />POST /payments</span>
      </div>
      {/* Hub Emmany */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
        <span style={{ position: 'absolute', width: 112, height: 112, borderRadius: 999, border: '2px solid var(--cyan-400)', opacity: 0.35, animation: 'ping 3s var(--ease-out) infinite' }} />
        <span style={{ width: 80, height: 80, borderRadius: 999, overflow: 'hidden', background: 'var(--color-primary)', boxShadow: 'var(--shadow-xl)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', animation: 'gwFloat 5s var(--ease-in-out) infinite' }}><img src={MARK} style={{ height: 40, filter: 'brightness(0) invert(1)' }} /></span>
      </div>
      {/* Rails de sortie */}
      {rails.map((r, i) => (
        <div key={r.label} style={{ position: 'absolute', right: 0, top: r.top, transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 8, background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 10, padding: '7px 10px', boxShadow: 'var(--shadow-md)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 7, background: 'var(--blue-50)' }}><Icon name={r.ic} size={15} color="var(--color-primary)" /></span>
          <span style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap' }}>{r.label}</span>
          <span style={{ position: 'relative', width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: 999, background: 'var(--success)', opacity: 0.18, animation: `ping 2.4s var(--ease-out) ${r.d}s infinite` }} />
            <Icon name="check" size={13} color="var(--success)" />
          </span>
        </div>
      ))}
    </div>
  );
}

function Gateway({ onNav }) {
  useLucide('gateway');
  const feats = [
    ['wallet', 'Collecte de paiements', 'Initiez des paiements simples et sécurisés sur tous les canaux.'],
    ['git-branch', 'Orchestration Mobile Money', 'Routez automatiquement vers le meilleur canal pour maximiser le succès.'],
    ['list-checks', 'Suivi transactionnel', 'Suivez chaque transaction en temps réel avec des statuts détaillés.'],
    ['webhook', 'Webhooks marchands', 'Recevez des notifications en temps réel sur les événements clés.'],
    ['key-round', 'API Keys', 'Générez et gérez vos clés API en toute sécurité par projet et environnement.'],
    ['target', 'Sandbox', 'Testez vos intégrations sans risque dans un environnement dédié.'],
    ['layout-dashboard', 'Dashboard', 'Visualisez vos indicateurs clés avec des tableaux de bord intuitifs.'],
    ['download', 'Historique et exports', 'Exportez vos transactions et réconciliations en quelques clics.'],
    ['radar', 'Monitoring', 'Surveillez la performance de vos paiements et alertes en temps réel.'],
  ];
  return (
    <>
      <section style={{ padding: '32px 0 56px' }}>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, marginBottom: 28 }}>
            <a onClick={() => onNav('home')} style={{ cursor: 'pointer', color: 'var(--color-primary)', fontWeight: 600 }}>Produits</a>
            <Icon name="chevron-right" size={15} color="var(--gray-400)" />
            <span style={{ color: 'var(--text-muted)' }}>Emmany Gateway</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div className="reveal in">
              <h1 style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.1, margin: 0, color: 'var(--ink)' }}>Emmany Gateway, une API PSP pour orchestrer vos paiements numériques.</h1>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-3)', margin: '20px 0 0', maxWidth: 460 }}>Une plateforme complète et modulaire pour collecter, router, suivre et réconcilier les paiements à grande échelle.</p>
            </div>
            <GatewayArt />
          </div>
        </Container>
      </section>
      <section style={{ paddingBottom: 40 }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {feats.map(([ic, t, d], i) => (
              <div key={t} className="reveal em-card" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 14, padding: 24, transitionDelay: `${(i % 3) * 70}ms` }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 12, background: 'var(--blue-50)', marginBottom: 16 }}><Icon name={ic} size={21} color="var(--color-primary)" /></span>
                <h3 style={{ fontSize: 16.5, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{t}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: '8px 0 0' }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Container style={{ paddingBottom: 40 }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '28px 32px' }}>
          <div style={{ maxWidth: 620 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink)', margin: 0 }}>Sécurité et traçabilité</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: '10px 0 0' }}>Données chiffrées, journalisation complète et conformité aux exigences réglementaires. Vos paiements sont entre de bonnes mains.</p>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 72, height: 72, borderRadius: 18, background: 'var(--surface)', border: '1px solid var(--border-subtle)', flexShrink: 0 }}><Icon name="shield-check" size={34} color="var(--cyan-500)" /></span>
        </div>
      </Container>
      <Container style={{ paddingBottom: 64 }}>
        <div className="reveal" style={{ textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '40px 24px' }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', margin: 0 }}>Prêt à intégrer Emmany Gateway ?</h3>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
            <button onClick={() => onNav('contact')} className="em-btn em-btn-primary" style={{ height: 48, padding: '0 24px', borderRadius: 8, border: 'none', background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15.5 }}>Créer un compte</button>
            <button onClick={() => onNav('docs')} className="em-btn em-btn-ghost" style={{ height: 48, padding: '0 22px', borderRadius: 8, background: 'var(--surface)', color: 'var(--ink)', border: '1.5px solid var(--border-default)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15.5 }}>Explorer la documentation</button>
          </div>
        </div>
      </Container>
    </>
  );
}
Object.assign(window, { Gateway });
