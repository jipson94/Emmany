// Emmany — Tarifs & frais (maquette) : contenu distinct par onglet + estimateur interactif.
const { useState: useStatePr } = React;

// Moyens de paiement + frais réels par pays/opérateur — repris de « Pays & frais ».
// { n: nom, op: frais opérateur (%), psp: frais PSP Emmany (%) }. op:0 = frais fixe (virement).
const COUNTRY_METHODS = {
  'République du Congo (CG)': [{ n: 'MTN Mobile Money Congo', op: 1.50, psp: 0.70 }, { n: 'Airtel Money Congo', op: 1.50, psp: 0.70 }, { n: 'Virement bancaire (Banques locales)', op: 0, psp: 0.50 }, { n: 'Cartes (Visa/Mastercard)', op: 2.50, psp: 0.80 }],
  'Cameroun (CM)': [{ n: 'Orange Money Cameroun', op: 1.55, psp: 0.75 }, { n: 'MTN Mobile Money Cameroun', op: 1.60, psp: 0.75 }, { n: 'Virement bancaire (Banques locales)', op: 0, psp: 0.50 }, { n: 'Cartes (Visa/Mastercard)', op: 2.50, psp: 0.80 }],
  'Gabon (GA)': [{ n: 'Airtel Money Gabon', op: 1.60, psp: 0.75 }, { n: 'Moov Money Gabon', op: 1.65, psp: 0.75 }, { n: 'Virement bancaire (Banques locales)', op: 0, psp: 0.50 }, { n: 'Cartes (Visa/Mastercard)', op: 2.50, psp: 0.80 }],
  'Bénin (BJ)': [{ n: 'MTN Mobile Money Bénin', op: 1.50, psp: 0.70 }, { n: 'Moov Money Bénin', op: 1.55, psp: 0.70 }, { n: 'Virement bancaire (Banques locales)', op: 0, psp: 0.50 }, { n: 'Cartes (Visa/Mastercard)', op: 2.50, psp: 0.80 }],
  'Togo (TG)': [{ n: 'T-Money (Togocom)', op: 1.55, psp: 0.70 }, { n: 'Moov Money (Flooz)', op: 1.55, psp: 0.70 }, { n: 'Virement bancaire (Banques locales)', op: 0, psp: 0.50 }, { n: 'Cartes (Visa/Mastercard)', op: 2.50, psp: 0.80 }],
  'Sénégal (SN)': [{ n: 'Orange Money Sénégal', op: 1.50, psp: 0.65 }, { n: 'Wave Sénégal', op: 1.00, psp: 0.60 }, { n: 'Virement bancaire (Banques locales)', op: 0, psp: 0.50 }, { n: 'Cartes (Visa/Mastercard)', op: 2.50, psp: 0.80 }],
  "Côte d'Ivoire (CI)": [{ n: 'Orange Money Côte d\'Ivoire', op: 1.50, psp: 0.65 }, { n: 'MTN Mobile Money Côte d\'Ivoire', op: 1.50, psp: 0.70 }, { n: 'Virement bancaire (Banques locales)', op: 0, psp: 0.50 }, { n: 'Cartes (Visa/Mastercard)', op: 2.50, psp: 0.80 }],
};

function Estimator() {
  const [amount, setAmount] = useStatePr(100000);
  const [country, setCountry] = useStatePr('République du Congo (CG)');
  const [method, setMethod] = useStatePr(COUNTRY_METHODS['République du Congo (CG)'][0].n);
  const methods = COUNTRY_METHODS[country] || [];
  const onCountry = e => { const c = e.target.value; setCountry(c); setMethod((COUNTRY_METHODS[c] || [{}])[0].n); };
  const sel = methods.find(m => m.n === method) || methods[0] || { op: 0, psp: 0 };
  const opRate = sel.op / 100, pspRate = sel.psp / 100;
  const pct = v => v.toFixed(2) + '%';
  const fmt = n => Math.round(n).toLocaleString('fr-FR').replace(/\u202f/g, ',');
  const op = amount * opRate, psp = amount * pspRate, net = amount - op - psp;
  const inp = { width: '100%', height: 44, padding: '0 12px', border: '1.5px solid var(--border-default)', borderRadius: 8, fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--ink)', outline: 'none', background: 'var(--surface)', boxSizing: 'border-box' };
  return (
    <div style={{ background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: 28 }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 18 }}>Estimez vos frais</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 24, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>Pays</span><select value={country} onChange={onCountry} style={{ ...inp, appearance: 'none' }}>{Object.keys(COUNTRY_METHODS).map(c => <option key={c}>{c}</option>)}</select></label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>Moyen de paiement</span><select value={method} onChange={e => setMethod(e.target.value)} style={{ ...inp, appearance: 'none' }}>{methods.map(m => <option key={m.n}>{m.n}</option>)}</select></label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>Montant de transaction</span>
            <div style={{ position: 'relative' }}><input type="number" value={amount} onChange={e => setAmount(Number(e.target.value) || 0)} style={inp} /><span style={{ position: 'absolute', right: 34, top: '50%', transform: 'translateY(-50%)', fontSize: 12.5, color: 'var(--text-muted)', pointerEvents: 'none' }}>XAF</span></div>
          </label>
        </div>
        <Icon name="arrow-right" size={22} color="var(--gray-400)" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Frais opérateur</div><div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink)' }}>{fmt(op)} <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>XAF</span> <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>{sel.op ? '(' + pct(sel.op) + ')' : '(frais fixe)'}</span></div></div>
          <div><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Frais PSP</div><div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink)' }}>{fmt(psp)} <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>XAF</span> <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-primary)' }}>({pct(sel.psp)})</span></div></div>
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Montant net estimé</div><div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--success)' }}>{fmt(net)} XAF</div></div>
        </div>
      </div>
    </div>
  );
}

function RateTable({ head, rows }) {
  const th = { textAlign: 'left', fontSize: 11.5, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '0 14px 12px' };
  const td = { padding: '13px 14px', fontSize: 14, color: 'var(--ink-2)', borderTop: '1px solid var(--border-subtle)' };
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: 22, overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 460 }}>
        <thead><tr>{head.map((h, i) => <th key={h} style={{ ...th, textAlign: i === 0 ? 'left' : 'right' }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, ri) => <tr key={ri} className="em-row">{r.map((c, ci) => <td key={ci} style={{ ...td, textAlign: ci === 0 ? 'left' : 'right', fontWeight: ci === 0 ? 600 : 500, color: ci === 0 ? 'var(--ink)' : ci === r.length - 1 ? 'var(--color-primary)' : 'var(--ink-2)' }}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

const TABS = [
  { label: 'Frais PSP', pct: '0.50% – 0.80%', cap: 'Selon le moyen de paiement · plafond min. 50 XAF', color: 'var(--color-primary)', desc: 'La commission Emmany prélevée sur chaque transaction réussie. Le taux varie entre 0.50% et 0.80% selon le moyen de paiement.', bullets: ['Appliqué sur le montant de la transaction', 'Pas de frais cachés', 'Facturation en XAF'], right: 'estimator' },
  { label: 'Frais opérateur', pct: '1.50% – 2.50%', cap: 'Selon l\'opérateur & le canal', color: 'var(--cyan-600)', desc: 'Frais reversés aux opérateurs Mobile Money et réseaux de cartes. Variables par pays.', bullets: ['Mobile Money : 1.50% en moyenne', 'Cartes Visa/Mastercard : 2.50%', 'Virement bancaire : frais fixes'], right: 'estimator' },
  { label: 'Frais par pays', pct: '', cap: '', desc: '', bullets: [], right: 'country' },
  { label: 'Frais par moyen de paiement', pct: '', cap: '', desc: '', bullets: [], right: 'method' },
];

function Pricing() {
  useLucide('pricing');
  const [tab, setTab] = useStatePr(0);
  const t = TABS[tab];
  const countryRows = [['République du Congo', '0.70%', '1.50%'], ['Cameroun', '0.75%', '1.60%'], ['Gabon', '0.75%', '1.65%'], ['Bénin', '0.70%', '1.50%'], ['Togo', '0.70%', '1.55%'], ['Sénégal', '0.65%', '1.50%'], ["Côte d'Ivoire", '0.65%', '1.50%']];
  const methodRows = [['MTN / Airtel / Moov Money', '0.70%', '1.50%'], ['Wave', '0.60%', '1.00%'], ['Cartes Visa / Mastercard', '0.80%', '2.50%'], ['Virement bancaire local', '0.50%', 'Fixe'], ['USSD / QR', '0.70%', '1.20%']];
  return (
    <section style={{ padding: '48px 0 64px' }}>
      <Container>
        <div className="reveal in" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 36px' }}>
          <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', margin: 0 }}>Tarification transparente, sans surprise</h1>
          <p style={{ fontSize: 16, color: 'var(--ink-3)', margin: '12px 0 0' }}>Des frais clairs et compétitifs pour tous vos paiements.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, borderBottom: '1px solid var(--border-subtle)', marginBottom: 36, flexWrap: 'wrap' }}>
          {TABS.map((x, i) => (
            <button key={x.label} className="em-navlink" onClick={() => setTab(i)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14.5, fontWeight: 600, padding: '12px 18px', color: tab === i ? 'var(--color-primary)' : 'var(--ink-3)', borderBottom: `2px solid ${tab === i ? 'var(--color-primary)' : 'transparent'}`, marginBottom: -1 }}>{x.label}</button>
          ))}
        </div>
        <div key={tab} style={{ display: 'grid', gridTemplateColumns: t.right === 'estimator' ? '0.85fr 1.15fr' : '0.85fr 1.15fr', gap: 24, alignItems: 'start', animation: 'fadeUp .35s var(--ease-out) both' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: 28 }}>
            {t.pct ? (
              <>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{t.label} <span style={{ fontWeight: 500, color: 'var(--text-muted)' }}>(par transaction)</span></div>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.03em', color: t.color, margin: '8px 0 4px' }}>{t.pct}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)', marginBottom: 18 }}><Icon name="tag" size={14} color="var(--text-muted)" />{t.cap}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-3)', margin: '0 0 18px' }}>{t.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {t.bullets.map(b => <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--ink-3)' }}><Icon name="check" size={17} color="var(--success)" />{b}</div>)}
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>{t.label}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-3)', margin: '10px 0 18px' }}>{tab === 2 ? 'Les taux PSP et opérateur varient selon le marché. Voici les grilles indicatives par pays couvert par Emmany.' : "Chaque moyen de paiement a sa propre grille. Comparez les frais PSP et opérateur par méthode."}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Frais PSP dès 0.50%', 'Frais opérateur transparents', 'Aucun frais d\'installation'].map(b => <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--ink-3)' }}><Icon name="check" size={17} color="var(--success)" />{b}</div>)}
                </div>
              </>
            )}
          </div>
          {t.right === 'estimator' && <Estimator />}
          {t.right === 'country' && <RateTable head={['Pays', 'Frais PSP', 'Frais opérateur']} rows={countryRows} />}
          {t.right === 'method' && <RateTable head={['Moyen de paiement', 'Frais PSP', 'Frais opérateur']} rows={methodRows} />}
        </div>
        <div className="reveal" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 24, background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '14px 18px' }}>
          <Icon name="info" size={18} color="var(--gray-500)" style={{ marginTop: 1, flexShrink: 0 }} />
          <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>Ces frais sont indicatifs et peuvent varier selon votre contrat marchand, l'opérateur et le pays. Les frais opérateur peuvent également inclure la TVA le cas échéant.</p>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { Pricing });
