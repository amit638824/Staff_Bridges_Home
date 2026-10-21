import { useHomeData } from '../../context/HomeDataContext';

export function TrustSection() {
  const { cityMeta } = useHomeData();

  return (
    <div className="container trust-wrap">
      <div className="trust-card" data-aos="fade-up">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="trust-item">
              <div className="trust-icon"><i className="bi bi-shield-check" /></div>
              <strong className="d-block themeBlue">Free &amp; verified</strong>
              <span className="small text-muted">No fee to apply for jobs</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="trust-item">
              <div className="trust-icon"><i className="bi bi-geo-alt" /></div>
              <strong className="d-block themeBlue">Near your locality</strong>
              <span className="small text-muted">{cityMeta}</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="trust-item">
              <div className="trust-icon"><i className="bi bi-telephone-outbound" /></div>
              <strong className="d-block themeBlue">Talk to HR</strong>
              <span className="small text-muted">Fix interviews faster</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
