import { Link } from 'react-router-dom';
import { APP_URL, LOGO_URL, SITE_URL, SALES_DISPLAY, SALES_TEL, SUPPORT_DISPLAY, SUPPORT_TEL } from '../../config/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <img
              src={LOGO_URL}
              alt="Staff Bridges"
              style={{ height: 40, filter: 'brightness(0) invert(1)', marginBottom: '.85rem' }}
            />
            <p className="small text-white mb-0 lh-base" style={{ color: '#ffffff', opacity: 1 }}>
              Find local jobs with better salary. Hire staff faster on Staff Bridges.
            </p>
          </div>
          <div className="col-6 col-md-2">
            <div className="fw-bold text-white mb-2">Explore</div>
            <ul className="list-unstyled small mb-0">
              <li className="mb-1"><Link to="/">Home</Link></li>
            <li className="mb-1"><Link to="/#cities">Cities</Link></li>
              <li className="mb-1"><Link to="/#categories">Categories</Link></li>
              <li className="mb-1"><Link to="/#jobs">Jobs</Link></li>
              <li className="mb-1"><Link to="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <div className="fw-bold text-white mb-2">Contact</div>
            <ul className="list-unstyled small mb-0">
              <li className="mb-1"><a href="mailto:contact@staffbridges.com">contact@staffbridges.com</a></li>
              <li className="mb-1"><a href={`tel:${SUPPORT_TEL}`}>Support {SUPPORT_DISPLAY}</a></li>
              <li className="mb-1"><a href={`tel:${SALES_TEL}`}>Plan sales {SALES_DISPLAY}</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="fw-bold text-white mb-2">Legal</div>
            <ul className="list-unstyled small mb-0">
              <li className="mb-1"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="mb-1"><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
              <li className="mb-1"><a href={APP_URL} target="_blank" rel="noopener">Open App (app.staffbridges.com)</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-light opacity-25 my-4" />
        <div className="d-flex flex-wrap justify-content-between gap-2">
          <p className="small mb-0 opacity-60">&copy; {year} Staff Bridges · {SITE_URL.replace(/^https?:\/\//, '')}</p>
          <p className="small mb-0 opacity-60">
            <Link to="/privacy-policy">Privacy</Link> · <Link to="/terms-conditions">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
