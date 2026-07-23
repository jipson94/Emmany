// Emmany — Connexion & Inscription (distincts, avec visuels générés).
const { useState: useStateC } = React;

const inputStyle = { height: 40, padding: '0 13px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink)', outline: 'none', background: 'var(--surface)', width: '100%', boxSizing: 'border-box' };
function Field({ label, children }) {
  return <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{label}</span>{children}</label>;
}

const MODES = {
  login: {
    img: 'assets/auth-login.png',
    bullets: [['zap', 'Accédez à votre tableau de bord en direct'], ['bar-chart-3', 'Suivez volumes et taux de succès'], ['bell', 'Alertes et webhooks en temps réel']],
    panelTitle: 'Vos paiements, en un coup d’œil',
    panelText: 'Reconnectez-vous pour piloter vos transactions, versements et rapports.',
    formTitle: 'Bon retour', formSub: 'Connectez-vous à votre espace Emmany.',
    cta: 'Se connecter', doneTitle: 'Connexion réussie', accent: 'var(--color-primary)',
  },
  signup: {
    img: 'assets/auth-signup.png',
    bullets: [['flask-conical', 'Accès instantané au sandbox'], ['shield-check', 'Certifié PCI-DSS Niveau 1'], ['headphones', "Ingénieur d'onboarding dédié"]],
    panelTitle: 'Passons à la production',
    panelText: 'Tellez-nous en un peu sur votre activité et lancez votre sandbox en quelques minutes.',
    formTitle: 'Créez votre compte', formSub: 'Gratuit pour commencer · sans carte bancaire.',
    cta: 'Créer mon compte', doneTitle: 'Compte créé !', accent: 'var(--cyan-500)',
  },
};

function Panel({ m }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100%' }}>
      <img src={m.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(4,24,51,.45) 0%, rgba(4,24,51,0) 34%, rgba(4,24,51,.35) 62%, rgba(4,24,51,.92) 100%)' }} />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px 40px 40px' }}>
        <div>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', color: '#fff', margin: 0, lineHeight: 1.15 }}>{m.panelTitle}</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', margin: '12px 0 22px', maxWidth: 380 }}>{m.panelText}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {m.bullets.map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', gap: 11, alignItems: 'center', color: '#fff' }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(4px)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={17} color="var(--cyan-400)" /></span>
                <span style={{ fontSize: 14.5, fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact({ onNav, mode = 'signup' }) {
  useLucide('contact' + mode);
  const m = MODES[mode];
  const [sent, setSent] = useStateC(false);
  const [form, setForm] = useStateC({ name: '', email: '', company: '', password: '', volume: '0 – 50M XAF', agree: false });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
  const canSubmit = mode === 'login' ? (form.email && form.password) : form.agree;
  return (
    <section style={{ height: 'calc(100vh - 80px)', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
      <Panel m={m} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 6%', height: '100%', overflowY: 'auto', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', maxWidth: 400, animation: 'fadeUp .4s var(--ease-out) both' }}>
          <button onClick={() => onNav('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 10, padding: 0 }}><Icon name="arrow-left" size={14} color="var(--text-muted)" />Retour à l'accueil</button>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <span style={{ display: 'inline-flex', width: 72, height: 72, borderRadius: 999, background: 'var(--success-soft)', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}><Icon name="check" size={36} color="var(--success)" /></span>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--ink)', margin: 0 }}>{m.doneTitle}</h2>
              <p style={{ fontSize: 15.5, color: 'var(--ink-3)', margin: '12px 0 0', lineHeight: 1.6 }}>{mode === 'login' ? `Ravi de vous revoir${form.email ? ', ' + form.email : ''} !` : `Merci ${form.name || ''} — vos clés sandbox arrivent par e-mail.`}</p>
              <button onClick={() => onNav('developers')} className="em-btn em-btn-primary" style={{ marginTop: 26, height: 48, padding: '0 26px', borderRadius: 999, border: 'none', background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15.5 }}>Ouvrir la console</button>
            </div>
          ) : (
            <>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: m.accent, background: mode === 'login' ? 'var(--blue-50)' : 'var(--cyan-50)', borderRadius: 999, padding: '3px 11px', marginBottom: 8 }}><Icon name={mode === 'login' ? 'log-in' : 'user-plus'} size={13} color={m.accent} />{mode === 'login' ? 'Connexion' : 'Nouveau compte'}</div>
              <h2 style={{ fontSize: 23, fontWeight: 800, color: 'var(--ink)', margin: 0 }}>{m.formTitle}</h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '5px 0 14px' }}>{m.formSub}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {mode === 'signup' && <Field label="Nom complet"><input style={inputStyle} value={form.name} onChange={set('name')} placeholder="Awa Diop" /></Field>}
                <Field label="E-mail professionnel"><input style={inputStyle} type="email" value={form.email} onChange={set('email')} placeholder="awa@entreprise.com" /></Field>
                {mode === 'login' ? (
                  <Field label="Mot de passe"><input style={inputStyle} type="password" value={form.password} onChange={set('password')} placeholder="••••••••" /></Field>
                ) : (
                  <>
                    <Field label="Entreprise"><input style={inputStyle} value={form.company} onChange={set('company')} placeholder="Nom de l'entreprise" /></Field>
                    <Field label="Volume mensuel estimé">
                      <select style={{ ...inputStyle, appearance: 'none' }} value={form.volume} onChange={set('volume')}>{['0 – 50M XAF', '50M – 500M XAF', '500M – 5 Md XAF', '5 Md+ XAF'].map(o => <option key={o}>{o}</option>)}</select>
                    </Field>
                  </>
                )}
                {mode === 'login' ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13.5 }}>
                    <label style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--ink-3)', cursor: 'pointer' }}><input type="checkbox" style={{ width: 16, height: 16, accentColor: 'var(--color-primary)' }} />Se souvenir de moi</label>
                    <a style={{ cursor: 'pointer', color: 'var(--color-primary)', fontWeight: 600 }}>Mot de passe oublié ?</a>
                  </div>
                ) : (
                  <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--ink-3)', cursor: 'pointer' }}><input type="checkbox" checked={form.agree} onChange={set('agree')} style={{ width: 18, height: 18, accentColor: 'var(--color-primary)' }} />J'accepte les Conditions & la Politique de confidentialité</label>
                )}
                <button disabled={!canSubmit} onClick={() => setSent(true)} className={'em-btn ' + (canSubmit ? 'em-btn-primary' : '')} style={{ height: 48, borderRadius: 999, border: 'none', background: canSubmit ? 'var(--color-primary)' : 'var(--gray-300)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15.5, cursor: canSubmit ? 'pointer' : 'not-allowed', marginTop: 4 }}>{m.cta}</button>
              </div>
              <div style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--ink-3)', marginTop: 12 }}>
                {mode === 'login' ? <>Pas encore de compte ? <a onClick={() => onNav('contact')} style={{ cursor: 'pointer', color: 'var(--color-primary)', fontWeight: 600 }}>Créer un compte</a></> : <>Déjà client ? <a onClick={() => onNav('login')} style={{ cursor: 'pointer', color: 'var(--color-primary)', fontWeight: 600 }}>Se connecter</a></>}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Contact });
