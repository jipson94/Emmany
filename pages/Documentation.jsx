// Emmany — Documentation (nouveau) : sidebar de navigation + contenu riche.
const { useState: useStateDoc } = React;

const DOC_NAV = [
  ['Démarrage', [['intro', 'Introduction'], ['auth', 'Authentification'], ['env', 'Environnements']]],
  ['Paiements', [['collect', 'Encaisser un paiement'], ['status', 'Statuts & cycle de vie'], ['webhooks', 'Webhooks']]],
  ['Ressources', [['errors', "Codes d'erreur"], ['sdks', 'SDKs & bibliothèques'], ['limits', 'Limites & quotas']]],
];

function DocBlock({ id, title, children }) {
  return <div id={id} style={{ scrollMarginTop: 90, marginBottom: 44 }}><h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', margin: '0 0 14px' }}>{title}</h2>{children}</div>;
}
const P = ({ children }) => <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-3)', margin: '0 0 14px' }}>{children}</p>;
function Code({ children }) {
  return <pre style={{ background: '#020c1f', color: '#e6ecf5', borderRadius: 12, padding: '16px 18px', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.75, overflowX: 'auto', margin: '0 0 18px' }}>{children}</pre>;
}
function Method({ m, path }) {
  const c = { GET: 'var(--success)', POST: 'var(--color-primary)', DELETE: 'var(--danger)' }[m];
  return <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 10, padding: '10px 14px', marginBottom: 14 }}><span style={{ fontSize: 12, fontWeight: 800, color: '#fff', background: c, borderRadius: 6, padding: '3px 9px', fontFamily: 'var(--font-mono)' }}>{m}</span><code style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, color: 'var(--ink)' }}>{path}</code></div>;
}

function Documentation({ onNav }) {
  useLucide('docs');
  const [active, setActive] = useStateDoc('intro');
  const go = id => { setActive(id); const el = document.getElementById(id); const scr = document.getElementById('site-scroll'); if (el && scr) scr.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); };
  const th = { textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', padding: '0 12px 10px', textTransform: 'uppercase', letterSpacing: '.04em' };
  const td = { padding: '11px 12px', fontSize: 13.5, borderTop: '1px solid var(--border-subtle)', color: 'var(--ink-3)' };
  return (
    <section style={{ padding: '40px 0 64px' }}>
      <Container>
        <div className="reveal in" style={{ marginBottom: 28 }}>
          <Eyebrow>Documentation</Eyebrow>
          <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ink)', margin: '12px 0 0' }}>Référence & guides Emmany Gateway</h1>
          <p style={{ fontSize: 16.5, color: 'var(--ink-3)', margin: '12px 0 0', maxWidth: 600 }}>Tout ce qu'il faut pour intégrer les paiements Mobile Money, cartes et virements via une seule API PSP.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 40, alignItems: 'start' }}>
          <aside style={{ position: 'sticky', top: 88, alignSelf: 'start' }}>
            {DOC_NAV.map(([group, items]) => (
              <div key={group} style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>{group}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderLeft: '2px solid var(--border-subtle)' }}>
                  {items.map(([id, label]) => (
                    <a key={id} onClick={() => go(id)} style={{ cursor: 'pointer', fontSize: 13.5, padding: '6px 12px', marginLeft: -2, borderLeft: `2px solid ${active === id ? 'var(--color-primary)' : 'transparent'}`, color: active === id ? 'var(--color-primary)' : 'var(--ink-3)', fontWeight: active === id ? 600 : 500 }}>{label}</a>
                  ))}
                </div>
              </div>
            ))}
          </aside>
          <div className="reveal">
            <DocBlock id="intro" title="Introduction">
              <P>L'API Emmany est organisée autour de REST. Elle utilise des URL orientées ressources, accepte des corps de requête en JSON, renvoie des réponses en JSON et s'appuie sur les codes de statut HTTP standards. Toutes les requêtes se font en HTTPS.</P>
              <Method m="POST" path="https://api.emmany.com/v1/payments" />
              <P>Chaque compte dispose de deux environnements totalement isolés : <strong>Sandbox</strong> pour tester, et <strong>Production</strong> pour les transactions réelles. Vos clés déterminent l'environnement ciblé.</P>
            </DocBlock>
            <DocBlock id="auth" title="Authentification">
              <P>Authentifiez vos requêtes avec votre clé secrète dans l'en-tête <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--gray-100)', padding: '1px 6px', borderRadius: 5 }}>Authorization</code>. Ne partagez jamais vos clés de production côté client.</P>
              <Code>{`Authorization: Bearer emy_live_••••••••••••••••`}</Code>
            </DocBlock>
            <DocBlock id="env" title="Environnements">
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 14 }}>
                <thead><tr><th style={th}>Environnement</th><th style={th}>Base URL</th><th style={th}>Préfixe de clé</th></tr></thead>
                <tbody>
                  <tr><td style={td}>Sandbox</td><td style={{ ...td, fontFamily: 'var(--font-mono)' }}>sandbox.api.emmany.com</td><td style={{ ...td, fontFamily: 'var(--font-mono)' }}>emy_test_</td></tr>
                  <tr><td style={td}>Production</td><td style={{ ...td, fontFamily: 'var(--font-mono)' }}>api.emmany.com</td><td style={{ ...td, fontFamily: 'var(--font-mono)' }}>emy_live_</td></tr>
                </tbody>
              </table>
            </DocBlock>
            <DocBlock id="collect" title="Encaisser un paiement">
              <P>Créez un paiement en envoyant le montant, la devise, le pays et le moyen de paiement. Le client reçoit une demande de validation (par ex. push Mobile Money) puis vous êtes notifié via webhook.</P>
              <Code>{`curl -X POST https://api.emmany.com/v1/payments \\
  -H "Authorization: Bearer emy_live_••••" \\
  -d '{ "amount": 10000, "currency": "XAF",
        "country": "CG", "paymentMethod": "MTN_MOMO_CG",
        "customerPhone": "+242000000000" }'`}</Code>
            </DocBlock>
            <DocBlock id="status" title="Statuts & cycle de vie">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                {[['pending', 'bientot'], ['succeeded', 'actif'], ['failed', 'maintenance'], ['refunded', 'sandbox']].map(([s, k]) => <StatusBadge key={s} kind={k}>{s}</StatusBadge>)}
              </div>
              <P>Un paiement passe de <code style={{ fontFamily: 'var(--font-mono)' }}>pending</code> à <code style={{ fontFamily: 'var(--font-mono)' }}>succeeded</code> ou <code style={{ fontFamily: 'var(--font-mono)' }}>failed</code>. Ne considérez jamais un paiement comme réglé tant que le webhook <code style={{ fontFamily: 'var(--font-mono)' }}>payment.succeeded</code> n'est pas reçu.</P>
            </DocBlock>
            <DocBlock id="webhooks" title="Webhooks">
              <P>Emmany envoie des événements signés à votre <code style={{ fontFamily: 'var(--font-mono)' }}>callbackUrl</code>. Vérifiez la signature <code style={{ fontFamily: 'var(--font-mono)' }}>Emmany-Signature</code> avant de traiter l'événement.</P>
              <Code>{`{ "event": "payment.succeeded",
  "id": "pay_8f2c1a", "status": "succeeded" }`}</Code>
            </DocBlock>
            <DocBlock id="errors" title="Codes d'erreur">
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 14 }}>
                <thead><tr><th style={th}>Code</th><th style={th}>Signification</th></tr></thead>
                <tbody>
                  {[['400', 'Requête invalide — paramètre manquant ou mal formé'], ['401', 'Clé API invalide ou absente'], ['402', 'Paiement refusé par l\'opérateur'], ['429', 'Trop de requêtes — limite de débit atteinte'], ['500', 'Erreur serveur Emmany']].map(([c, m]) => <tr key={c}><td style={{ ...td, fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--ink)' }}>{c}</td><td style={td}>{m}</td></tr>)}
                </tbody>
              </table>
            </DocBlock>
            <DocBlock id="sdks" title="SDKs & bibliothèques">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, marginBottom: 14 }}>
                {[['Node.js', 'terminal'], ['Python', 'terminal'], ['PHP', 'terminal'], ['Go', 'terminal']].map(([n, ic]) => <div key={n} className="em-card" style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1px solid var(--border-subtle)', borderRadius: 10, padding: '12px 14px' }}><Icon name="box" size={18} color="var(--color-primary)" /><span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{n}</span></div>)}
              </div>
            </DocBlock>
            <DocBlock id="limits" title="Limites & quotas">
              <P>Par défaut : 100 requêtes/seconde en production, 25 en sandbox. Contactez-nous pour relever ces limites selon votre volume.</P>
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                <button onClick={() => onNav('developers')} className="em-btn em-btn-primary" style={{ height: 46, padding: '0 22px', borderRadius: 8, border: 'none', background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15 }}>Ouvrir la console développeur</button>
              </div>
            </DocBlock>
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { Documentation });
