// Emmany — Développeurs (maquette) : hero animé, parcours, toggle Sandbox/Production, exemples.
const { useState: useStateDv } = React;

function DevArt() {
  const rings = [[210, 22, 'var(--cyan-400)'], [160, 15, 'var(--color-primary)'], [110, 40, 'var(--cyan-400)']];
  const icons = [['webhook', 250, 55], ['key-round', 40, 90], ['smartphone', 250, 250], ['shield-check', 30, 240]];
  return (
    <div style={{ position: 'relative', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,66,236,.12), transparent 65%)' }} />
      {rings.map(([d, dur, c], i) => (
        <div key={i} style={{ position: 'absolute', width: d, height: d, borderRadius: '50%', border: '1.5px dashed var(--blue-100)', animation: `devOrbit ${dur}s linear infinite ${i % 2 ? 'reverse' : ''}` }}>
          <span style={{ position: 'absolute', top: -5, left: '50%', width: 10, height: 10, borderRadius: 999, background: c, marginLeft: -5, boxShadow: '0 0 0 4px rgba(0,66,236,.08)' }} />
        </div>
      ))}
      <div style={{ position: 'relative', width: 92, height: 92, borderRadius: 24, background: 'var(--gradient-flow)', boxShadow: 'var(--shadow-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'floatY 5s var(--ease-in-out) infinite', zIndex: 2 }}>
        <img src={MARK} style={{ height: 50, filter: 'brightness(0) invert(1)' }} />
      </div>
      {icons.map(([ic, l, top], i) => (
        <span key={ic} style={{ position: 'absolute', left: l, top: top, width: 40, height: 40, borderRadius: 11, background: 'var(--surface)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', animation: `floatY ${4 + i}s var(--ease-in-out) ${i * 0.4}s infinite` }}><Icon name={ic} size={19} color="var(--color-primary)" /></span>
      ))}
    </div>
  );
}

function Stepper() {
  const steps = ['Créer un compte', 'Activer la sandbox', 'Créer un projet', 'Générer une clé API', 'Initier un paiement', 'Suivre une transaction', 'Configurer un webhook', 'Passer en production'];
  const active = 3;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', overflowX: 'auto', paddingBottom: 8 }}>
      {steps.map((s, i) => {
        const done = i < active, cur = i === active;
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', flex: i < steps.length - 1 ? 1 : '0 0 auto', minWidth: 96 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 96, flexShrink: 0 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 999, fontWeight: 700, fontSize: 14, background: cur ? 'var(--success)' : done ? 'var(--color-primary)' : '#fff', color: cur || done ? '#fff' : 'var(--gray-500)', border: cur || done ? 'none' : '1.5px solid var(--border-default)', boxShadow: cur ? '0 0 0 5px var(--success-soft)' : 'none' }}>{done ? <Icon name="check" size={16} color="#fff" /> : i + 1}</span>
              <span style={{ fontSize: 11.5, lineHeight: 1.35, textAlign: 'center', marginTop: 8, color: cur ? 'var(--ink)' : 'var(--text-muted)', fontWeight: cur ? 600 : 500 }}>{s}</span>
            </div>
            {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: i < active ? 'var(--color-primary)' : 'var(--border-default)', marginTop: 16 }} />}
          </div>
        );
      })}
    </div>
  );
}

const ENV = {
  sandbox: { base: 'https://sandbox.api.emmany.com', key: 'emy_test_••••••••••••••••', full: 'emy_test_9f2a7c1e4b8d0a6f3e5c1d', dot: 'var(--warning)', note: 'Environnement de test : aucun mouvement d\'argent réel. Utilisez les numéros et cartes de simulation.', badge: 'Aucune transaction réelle' },
  production: { base: 'https://api.emmany.com', key: 'emy_live_••••••••••••••••', full: 'emy_live_3d7b2f9a1c6e8054ad2b4f', dot: 'var(--success)', note: 'Environnement de production : les transactions sont réelles et débitées. Vérifiez vos webhooks et la conformité avant d\'activer.', badge: 'Transactions réelles' },
};

function CodeTabs({ env }) {
  const [tab, setTab] = useStateDv(0);
  const e = ENV[env];
  const tabs = ['Requête', 'Réponse', 'Webhook (exemple)'];
  const L = ({ children, c }) => <div style={{ color: c || '#e6ecf5' }}>{children}</div>;
  const req = (<>
    <L c="#7ee3d8">curl <span style={{ color: '#ff8a5c' }}>-X POST</span> <span style={{ color: '#e6ecf5' }}>{e.base}/v1/payments</span> \</L>
    <L>&nbsp;&nbsp;-H <span style={{ color: '#9fe6b0' }}>"Authorization: Bearer {env === 'production' ? 'emy_live_••••' : 'emy_test_••••'}"</span> \</L>
    <L>&nbsp;&nbsp;-H <span style={{ color: '#9fe6b0' }}>"Content-Type: application/json"</span> \</L>
    <L>&nbsp;&nbsp;-d '{'{'}</L>
    <L>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"amount"</span>: <span style={{ color: '#ffd479' }}>10000</span>,</L>
    <L>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"currency"</span>: <span style={{ color: '#9fe6b0' }}>"XAF"</span>,</L>
    <L>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"country"</span>: <span style={{ color: '#9fe6b0' }}>"CG"</span>,</L>
    <L>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"paymentMethod"</span>: <span style={{ color: '#9fe6b0' }}>"MTN_MOMO_CG"</span>,</L>
    <L>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"customerPhone"</span>: <span style={{ color: '#9fe6b0' }}>"+242000000000"</span>,</L>
    <L>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"callbackUrl"</span>: <span style={{ color: '#9fe6b0' }}>"https://votre-domaine.com/webhook/payment"</span></L>
    <L>&nbsp;&nbsp;{'}'}'</L>
  </>);
  const res = (<>
    <L>{'{'}</L>
    <L>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"id"</span>: <span style={{ color: '#9fe6b0' }}>"pay_8f2c1a"</span>,</L>
    <L>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"status"</span>: <span style={{ color: '#9fe6b0' }}>"pending"</span>,</L>
    <L>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"environment"</span>: <span style={{ color: '#9fe6b0' }}>"{env}"</span>,</L>
    <L>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"amount"</span>: <span style={{ color: '#ffd479' }}>10000</span></L>
    <L>{'}'}</L>
  </>);
  const hook = (<>
    <L>{'{'}</L>
    <L>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"event"</span>: <span style={{ color: '#9fe6b0' }}>"payment.succeeded"</span>,</L>
    <L>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"id"</span>: <span style={{ color: '#9fe6b0' }}>"pay_8f2c1a"</span>,</L>
    <L>&nbsp;&nbsp;<span style={{ color: '#9fb0cc' }}>"status"</span>: <span style={{ color: '#9fe6b0' }}>"succeeded"</span></L>
    <L>{'}'}</L>
  </>);
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', padding: '0 12px' }}>
        <div style={{ display: 'flex' }}>
          {tabs.map((t, i) => <button key={t} onClick={() => setTab(i)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, padding: '13px 14px', color: tab === i ? 'var(--color-primary)' : 'var(--ink-3)', borderBottom: `2px solid ${tab === i ? 'var(--color-primary)' : 'transparent'}`, marginBottom: -1 }}>{t}</button>)}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: 'var(--ink-3)', border: '1px solid var(--border-default)', borderRadius: 8, padding: '5px 10px' }}>cURL<Icon name="chevron-down" size={14} color="var(--gray-400)" /></span>
      </div>
      <pre key={env + tab} style={{ margin: 0, padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.85, background: '#020c1f', color: '#e6ecf5', overflowX: 'auto', animation: 'fadeUp .3s var(--ease-out) both' }}>{tab === 0 ? req : tab === 1 ? res : hook}</pre>
    </div>
  );
}

function KeyRow({ env, e }) {
  const [copied, setCopied] = useStateDv(false);
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1800); };
    try { navigator.clipboard.writeText(e.full).then(done, () => { fallback(); done(); }); } catch (err) { fallback(); done(); }
    function fallback() { const ta = document.createElement('textarea'); ta.value = e.full; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (x) {} document.body.removeChild(ta); }
  };
  return (
    <button key={env + 'k'} onClick={copy} title="Copier la clé" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, border: '1.5px solid var(--border-default)', borderRadius: 8, padding: '10px 12px', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink-2)', background: 'var(--surface)', cursor: 'pointer', animation: 'fadeUp .3s var(--ease-out) both' }}>{e.key}<span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, color: copied ? 'var(--success)' : 'var(--gray-500)' }}><Icon name={copied ? 'check' : 'copy'} size={16} color={copied ? 'var(--success)' : 'var(--gray-500)'} />{copied ? 'Copié' : ''}</span></button>
  );
}

function Developers({ onNav }) {
  useLucide('developers');
  const [env, setEnv] = useStateDv('sandbox');
  const e = ENV[env];
  return (
    <section style={{ padding: '40px 0 64px' }}>
      <Container>
        <div className="reveal in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <Eyebrow>Développeurs</Eyebrow>
            <h1 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ink)', margin: '12px 0 0', lineHeight: 1.1 }}>Intégrez en quelques étapes</h1>
            <p style={{ fontSize: 16.5, color: 'var(--ink-3)', margin: '14px 0 0', maxWidth: 440 }}>Suivez notre parcours recommandé pour intégrer Emmany Gateway, du sandbox à la production.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }}>
              <button onClick={() => onNav('docs')} className="em-btn em-btn-primary" style={{ height: 46, padding: '0 22px', borderRadius: 8, border: 'none', background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15 }}>Lire la documentation</button>
              <button onClick={() => onNav('contact')} className="em-btn em-btn-ghost" style={{ height: 46, padding: '0 20px', borderRadius: 8, background: 'var(--surface)', color: 'var(--ink)', border: '1.5px solid var(--border-default)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15 }}>Obtenir mes clés</button>
            </div>
          </div>
          <DevArt />
        </div>
        <div className="reveal" style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 14, padding: '28px 24px', marginBottom: 28 }}><Stepper /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 24, alignItems: 'start' }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>Environnement</div>
              <div style={{ display: 'inline-flex', gap: 4, padding: 5, background: 'var(--gray-100)', borderRadius: 10 }}>
                {[['sandbox', 'Sandbox', 'var(--warning)'], ['production', 'Production', 'var(--success)']].map(([k, l, c]) => (
                  <button key={k} onClick={() => setEnv(k)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 7, border: 'none', background: env === k ? '#fff' : 'transparent', fontSize: 13.5, fontWeight: 600, color: env === k ? 'var(--ink)' : 'var(--text-muted)', boxShadow: env === k ? 'var(--shadow-xs)' : 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'all .18s' }}><span style={{ width: 8, height: 8, borderRadius: 999, background: env === k ? c : 'var(--gray-400)' }} />{l}</button>
                ))}
              </div>
              <div key={env} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 14, background: env === 'production' ? 'var(--success-soft)' : 'var(--warning-soft)', border: `1px solid ${env === 'production' ? '#b7e4cf' : '#f4dca6'}`, borderRadius: 10, padding: '12px 14px', animation: 'fadeUp .3s var(--ease-out) both' }}>
                <Icon name={env === 'production' ? 'shield-check' : 'flask-conical'} size={17} color={e.dot} style={{ marginTop: 1, flexShrink: 0 }} />
                <div><div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink)' }}>{e.badge}</div><div style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--ink-3)', marginTop: 2 }}>{e.note}</div></div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>Clé API active <span style={{ fontWeight: 500, color: 'var(--text-muted)' }}>· {env}</span></div>
              <KeyRow env={env} e={e} />
              <a onClick={() => onNav('contact')} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--color-primary)', marginTop: 10 }}><Icon name="key-round" size={15} color="var(--color-primary)" />Gérer mes clés API</a>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>Ressources rapides</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[['book-open', 'Documentation API'], ['compass', "Guides d'intégration"], ['box', 'Bibliothèques & SDKs'], ['activity', 'API Status']].map(([ic, t]) => (
                  <a key={t} onClick={() => onNav('docs')} className="em-footlink" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-3)' }}><Icon name={ic} size={17} color="var(--color-primary)" />{t}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal">
            <CodeTabs env={env} />
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 16, fontSize: 13, color: 'var(--text-muted)' }}><Icon name="life-buoy" size={16} color="var(--color-primary)" />Besoin d'aide ? Consultez nos guides ou ouvrez un ticket sur notre support développeur.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { Developers });
