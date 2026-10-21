import { SALES_DISPLAY, SALES_TEL, SUPPORT_DISPLAY, SUPPORT_TEL } from '../../config/constants';

export function ContactSection() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-head text-center" data-aos="fade-up">
          <div className="eyebrow">Support</div>
          <h2>Contact us</h2>
          <p className="mx-auto">We help job seekers and recruiters every day.</p>
        </div>
        <div className="row g-3" data-aos="fade-up">
          <div className="col-md-6">
            <div className="contact-card">
              <div className="fw-bold themeBlue mb-1"><i className="bi bi-envelope me-2" />Email</div>
              <a className="themeBlue" href="mailto:contact@staffbridges.com">contact@staffbridges.com</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-card">
              <div className="fw-bold themeBlue mb-1"><i className="bi bi-headset me-2" />Support</div>
              <a className="themeBlue" href={`tel:${SUPPORT_TEL}`}>{SUPPORT_DISPLAY}</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-card">
              <div className="fw-bold themeBlue mb-1"><i className="bi bi-briefcase me-2" />Plan sales</div>
              <a className="themeBlue" href={`tel:${SALES_TEL}`}>{SALES_DISPLAY}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
