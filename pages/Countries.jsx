// Emmany — Pays & moyens de paiement (maquette).
const { useState: useStateCo } = React;

function Globe() {
  // Réseau de paiement : hub Emmany relié aux marchés, avec flux animés (paiements en transit).
  const hub = { x: 150, y: 150 };
  const nodes = [
    { x: 44, y: 60, code: 'SN', c: 'var(--color-primary)' },
    { x: 250, y: 52, code: 'CI', c: 'var(--cyan-500)' },
    { x: 276, y: 150, code: 'CM', c: 'var(--color-primary)' },
    { x: 244, y: 250, code: 'CG', c: 'var(--cyan-500)' },
    { x: 56, y: 250, code: 'GA', c: 'var(--color-primary)' },
    { x: 26, y: 148, code: 'TG', c: 'var(--cyan-500)' },
  ];
  const paths = nodes.map((n, i) => {
    const mx = (hub.x + n.x) / 2 + (n.y - hub.y) * 0.16;
    const my = (hub.y + n.y) / 2 - (n.x - hub.x) * 0.16;
    return { id: 'flow' + i, d: `M${n.x},${n.y} Q${mx.toFixed(0)},${my.toFixed(0)} ${hub.x},${hub.y}`, node: n, dur: 2.4 + i * 0.35 };
  });
  return (
    <div style={{ position: 'relative', width: 380, height: 380, flexShrink: 0 }}>
      {[300, 230, 150].map((d, i) => (
        <div key={i} style={{ position: 'absolute', left: '50%', top: '50%', width: d, height: d, marginLeft: -d / 2, marginTop: -d / 2, borderRadius: '50%', border: '1.5px dashed var(--blue-100)', animation: `devOrbit ${24 + i * 8}s linear infinite ${i % 2 ? 'reverse' : ''}` }} />
      ))}
      <svg viewBox="0 0 300 300" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>{paths.map(p => <path key={p.id} id={p.id} d={p.d} fill="none" />)}</defs>
        {paths.map(p => <path key={'l' + p.id} d={p.d} fill="none" stroke="var(--blue-200)" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.7" />)}
        {paths.map(p => (
          <circle key={'d' + p.id} r="4" fill={p.node.c}>
            <animateMotion dur={p.dur + 's'} repeatCount="indefinite" rotate="0"><mpath href={'#' + p.id} /></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={p.dur + 's'} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      {nodes.map((n, i) => (
        <div key={n.code} style={{ position: 'absolute', left: `${(n.x / 300) * 100}%`, top: `${(n.y / 300) * 100}%`, transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <span style={{ position: 'relative', width: 14, height: 14 }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: 999, background: n.c, zIndex: 2, animation: `blinkDot 2.6s var(--ease-in-out) ${i * 0.3}s infinite` }} />
            <span style={{ position: 'absolute', inset: 0, borderRadius: 999, background: n.c, animation: `ping 2.6s var(--ease-out) ${i * 0.3}s infinite` }} />
          </span>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', background: 'var(--surface)', borderRadius: 5, padding: '1px 5px', boxShadow: 'var(--shadow-xs)' }}>{n.code}</span>
        </div>
      ))}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 130, height: 130, zIndex: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ position: 'absolute', width: 122, height: 122, borderRadius: 999, border: '2px solid var(--cyan-400)', opacity: 0.4, animation: 'ping 3s var(--ease-out) infinite' }} />
        <span style={{ width: 88, height: 88, borderRadius: 999, overflow: 'hidden', background: 'var(--color-primary)', boxShadow: 'var(--shadow-xl)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', animation: 'floatY 5s var(--ease-in-out) infinite' }}>
          <img src={MARK} alt="Emmany" style={{ height: 42, filter: 'brightness(0) invert(1)' }} />
        </span>
      </div>
    </div>
  );
}

const PROVIDERS = {
  Orange: { logo: 'assets/op-orange.png' }, Wave: { logo: 'assets/op-wave.png' }, MTN: { logo: 'assets/op-mtn.png' }, Airtel: { logo: 'assets/op-airtel.png' }, Moov: { logo: 'assets/op-moov.png' }, TMoney: { logo: 'assets/op-tmoney.png' },
  Virement: { c: 'var(--ink-3)', fg: '#fff' }, Cartes: { c: 'var(--gray-600)', fg: '#fff' },
};
function ProviderMark({ p, icon }) {
  const s = PROVIDERS[p] || PROVIDERS.Cartes;
  if (s.logo) return <span style={{ display: 'inline-flex', width: 58, height: 36, borderRadius: 8, overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border-subtle)' }}><img src={s.logo} alt={p} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></span>;
  return <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 8, background: s.c, color: s.fg, flexShrink: 0 }}><Icon name={icon} size={17} color={s.fg} /></span>;
}

// Deux meilleurs opérateurs Mobile Money par pays + virement + cartes.
const COUNTRY_DATA = {
  SN: { name: 'Sénégal', rows: [
    ['Orange', 'phone', 'Orange Money Sénégal', 'Mobile Money', 'actif', '1.50%', '0.65%', ['Production', 'Sandbox']],
    ['Wave', 'phone', 'Wave Sénégal', 'Mobile Money', 'actif', '1.00%', '0.60%', ['Production', 'Sandbox']],
    ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']],
    ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']] ] },
  CI: { name: "Côte d'Ivoire", rows: [
    ['Orange', 'phone', 'Orange Money Côte d\'Ivoire', 'Mobile Money', 'actif', '1.50%', '0.65%', ['Production', 'Sandbox']],
    ['MTN', 'phone', 'MTN Mobile Money Côte d\'Ivoire', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']],
    ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']],
    ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']] ] },
  CM: { name: 'Cameroun', rows: [
    ['Orange', 'phone', 'Orange Money Cameroun', 'Mobile Money', 'actif', '1.55%', '0.75%', ['Production', 'Sandbox']],
    ['MTN', 'phone', 'MTN Mobile Money Cameroun', 'Mobile Money', 'actif', '1.60%', '0.75%', ['Production', 'Sandbox']],
    ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'maintenance', '—', '0.50%', ['Production']],
    ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']] ] },
  CG: { name: 'République du Congo', rows: [
    ['MTN', 'phone', 'MTN Mobile Money Congo', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']],
    ['Airtel', 'phone', 'Airtel Money Congo', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']],
    ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'maintenance', '—', '0.50%', ['Production']],
    ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard) via partenaires', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']] ] },
  GA: { name: 'Gabon', rows: [
    ['Airtel', 'phone', 'Airtel Money Gabon', 'Mobile Money', 'actif', '1.60%', '0.75%', ['Production', 'Sandbox']],
    ['Moov', 'phone', 'Moov Money Gabon', 'Mobile Money', 'actif', '1.65%', '0.75%', ['Production', 'Sandbox']],
    ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']],
    ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']] ] },
  BJ: { name: 'Bénin', rows: [
    ['MTN', 'phone', 'MTN Mobile Money Bénin', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']],
    ['Moov', 'phone', 'Moov Money Bénin', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']],
    ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']],
    ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']] ] },
  TG: { name: 'Togo', rows: [
    ['TMoney', 'phone', 'T-Money (Togocom)', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']],
    ['Moov', 'phone', 'Moov Money (Flooz)', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']],
    ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']],
    ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']] ] },
};

function MethodsTable({ rows }) {
  const th = { textAlign: 'left', fontSize: 11.5, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '0 12px 12px' };
  const td = { padding: '14px 12px', fontSize: 13.5, color: 'var(--ink-3)', borderTop: '1px solid var(--border-subtle)', verticalAlign: 'middle' };
  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', margin: '4px 0 16px' }}>{rows.length} moyens de paiement disponibles</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
        <thead><tr><th style={th}>Moyen de paiement</th><th style={th}>Type</th><th style={th}>Statut</th><th style={th}>Frais opérateur</th><th style={th}>Frais PSP</th><th style={th}>Environnement</th></tr></thead>
        <tbody>
          {rows.map(([p, ic, name, type, status, fo, fp, envs]) => (
            <tr key={name}>
              <td style={td}><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><ProviderMark p={p} icon={ic} /><span style={{ fontWeight: 600, color: 'var(--ink)' }}>{name}</span></div></td>
              <td style={td}>{type}</td>
              <td style={td}><StatusBadge kind={status} /></td>
              <td style={td}>{fo}</td>
              <td style={td}>{fp}</td>
              <td style={td}><div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>{envs.map(e => <span key={e} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12.5 }}><span style={{ width: 6, height: 6, borderRadius: 999, background: e === 'Sandbox' ? 'var(--warning)' : 'var(--success)' }} />{e}</span>)}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CountryRow({ code, name, rows, open, onToggle }) {
  return (
    <div className="em-card" style={{ border: '1px solid var(--border-subtle)', borderRadius: 12, overflow: 'hidden', background: 'var(--surface)' }}>
      <button onClick={onToggle} className="em-row" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ fontSize: 15.5, fontWeight: 700, color: open ? 'var(--color-primary)' : 'var(--ink)' }}>{name} <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>({code})</span></span><span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{rows.length} moyens</span></span>
        <Icon name="chevron-down" size={18} color={open ? 'var(--color-primary)' : 'var(--gray-400)'} style={{ transition: 'transform .25s var(--ease-out)', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      {open && <div style={{ padding: '4px 20px 22px', borderTop: '1px solid var(--border-subtle)', animation: 'fadeUp .3s var(--ease-out) both' }}><MethodsTable rows={rows} /></div>}
    </div>
  );
}

function Countries() {
  useLucide('countries');
  const list = ['SN', 'CI', 'CM', 'CG', 'GA', 'BJ', 'TG'];
  const [open, setOpen] = useStateCo('CG');
  return (
    <section style={{ padding: '40px 0 64px' }}>
      <Container>
        <div className="reveal in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginBottom: 28 }}>
          <div style={{ maxWidth: 540 }}>
            <Eyebrow>Couverture</Eyebrow>
            <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', margin: '12px 0 0' }}>Pays & moyens de paiement</h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-3)', margin: '12px 0 0' }}>Découvrez les moyens de paiement disponibles par pays, leurs statuts et les frais associés.</p>
            <div style={{ display: 'flex', gap: 28, marginTop: 24 }}>
              {[[12, 'Marchés', ''], [40, 'Moyens', '+'], [6, 'Devises', '']].map(([v, l, suf]) => (<div key={l}><div style={{ fontSize: 26, fontWeight: 800, color: 'var(--color-primary)' }}><CountUp value={v} suffix={suf} /></div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{l}</div></div>))}
            </div>
          </div>
          <Globe />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 22 }}>
          {[['actif', 'Disponible en production'], ['bientot', 'Bientôt disponible'], ['maintenance', 'En maintenance'], ['sandbox', 'Sandbox uniquement']].map(([k, l]) => (
            <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: 'var(--ink-3)' }}><StatusBadge kind={k} />{l}</span>
          ))}
        </div>
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {list.map(code => <CountryRow key={code} code={code} name={COUNTRY_DATA[code].name} rows={COUNTRY_DATA[code].rows} open={open === code} onToggle={() => setOpen(open === code ? null : code)} />)}
        </div>
        <div className="reveal" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 24, background: 'var(--blue-50)', border: '1px solid var(--blue-100)', borderRadius: 12, padding: '14px 18px' }}>
          <Icon name="info" size={18} color="var(--color-primary)" style={{ marginTop: 1, flexShrink: 0 }} />
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: 0 }}>Les frais et disponibilités peuvent varier selon votre contrat marchand, l'opérateur et le pays. Contactez votre chargé de compte pour plus de détails.</p>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { Countries });
