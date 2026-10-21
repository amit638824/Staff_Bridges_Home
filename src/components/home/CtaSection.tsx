import { APP_URL, LOGO_URL, PLAY_STORE_RECRUITER, PLAY_STORE_SEEKER } from '../../config/constants';

export function CtaSection() {
  return (
    <section className="section cta-section">
      <div className="container" data-aos="zoom-in">
        <div className="cta-band text-center">
          <img
            src={LOGO_URL}
            alt=""
            style={{ height: 40, filter: 'brightness(0) invert(1)', opacity: 0.95, marginBottom: '1rem' }}
          />
          <h3 className="display-font h3 fw-bold mb-2">Ready for your next local job?</h3>
          <p className="mb-4 opacity-90">Continue on the Staff Bridges app — hiring and applying made simple.</p>
          <a
            className="btn btn-light fw-bold px-4 me-2 rounded-pill"
            href={PLAY_STORE_SEEKER}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Job Now
          </a>
          <a
            className="btn btn-sb-outline px-4"
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Post A Job
          </a>
        </div>
      </div>
    </section>
  );
}
