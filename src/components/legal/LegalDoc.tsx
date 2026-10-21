import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LEGAL_UPDATED, PRIVACY_SECTIONS, TERMS_SECTIONS, PrivacyBody, TermsBody } from './legalCopy';

export function LegalDoc({ kind }: { kind: 'privacy' | 'terms' }) {
  const navigate = useNavigate();
  const isPrivacy = kind === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  const sections = isPrivacy ? PRIVACY_SECTIONS : TERMS_SECTIONS;
  const otherTo = isPrivacy ? '/terms-conditions' : '/privacy-policy';
  const otherLabel = isPrivacy ? 'Terms & Conditions' : 'Privacy Policy';

  useEffect(() => {
    document.title = `${title} | Staff Bridges`;
    window.scrollTo(0, 0);
  }, [title]);

  const goBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };

  return (
    <div className="legal-shell">
      <header className="legal-hero-bar">
        <div className="container">
          <p className="legal-kicker">Legal</p>
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: {LEGAL_UPDATED}</p>
        </div>
      </header>

      <section className="legal-page-full">
        <div className="container">
          <button type="button" className="legal-back" onClick={goBack}>
            ← Back
          </button>
        </div>
        <div className="container legal-layout">
          <aside className="legal-toc">
            <div className="legal-toc-card">
              <p>On this page</p>
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`}>{s.title}</a>
              ))}
              <Link className="legal-toc-other" to={otherTo}>{otherLabel} →</Link>
            </div>
          </aside>

          <article className="legal-block legal-block--full">
            {isPrivacy ? <PrivacyBody /> : <TermsBody />}
          </article>
        </div>
      </section>
    </div>
  );
}
