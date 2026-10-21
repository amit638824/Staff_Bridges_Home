import { APP_URL } from '../../config/constants';

const STEPS = [
  { num: '01', title: 'Create profile', text: 'Sign up free on app.staffbridges.com as seeker or recruiter.', href: APP_URL },
  { num: '02', title: 'Search or post', text: 'Filter by city & category, or post a hiring need in minutes.' },
  { num: '03', title: 'Connect & hire', text: 'Apply, talk to HR, and move interviews forward — no apply fee.' },
];

export function HowSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head text-center mx-auto" data-aos="fade-up" style={{ maxWidth: 520 }}>
          <div className="eyebrow">Simple flow</div>
          <h2>How Staff Bridges works</h2>
          <p className="mx-auto">From profile to interview in three clear steps.</p>
        </div>
        <div className="row g-4">
          {STEPS.map((step, index) => (
            <div key={step.num} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="how-card">
                <div className="num">{step.num}</div>
                <h5 className="fw-bold themeBlue">{step.title}</h5>
                <p className="small text-muted mb-0">
                  {step.href ? (
                    <>
                      Sign up free on{' '}
                      <a className="themeBlue" href={step.href} target="_blank" rel="noopener">app.staffbridges.com</a>
                      {' '}as seeker or recruiter.
                    </>
                  ) : step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
