import { useHomeData } from '../../context/HomeDataContext';
import { getJobApplyHref, openJobInSeekerApp } from '../../utils/deeplink';
import { money } from '../../utils/format';

export function JobModal() {
  const { selectedJob, closeJob } = useHomeData();
  if (!selectedJob) return null;

  const loc = [selectedJob.locality_name, selectedJob.city_name].filter(Boolean).join(', ');

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content border-0" style={{ borderRadius: '1.15rem' }}>
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold themeBlue">{selectedJob.job_title_name || 'Job details'}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={closeJob} />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <span className="badge badge-soft rounded-pill me-1">{loc || '—'}</span>
                <span className="badge text-bg-light rounded-pill me-1">{selectedJob.job_type_name || ''}</span>
                <span className="badge text-bg-light rounded-pill">{selectedJob.work_location || ''}</span>
              </div>
              <p className="job-salary mb-2">{money(selectedJob.salary_min)} – {money(selectedJob.salary_max)} / month</p>
              <ul className="list-unstyled small text-muted mb-3">
                <li><strong>Category:</strong> {selectedJob.category_name || '—'}</li>
                <li><strong>Openings:</strong> {selectedJob.openings ?? '—'}</li>
                <li><strong>Shift:</strong> {selectedJob.shift || '—'}</li>
              </ul>
              <div
                className="border-top pt-3"
                dangerouslySetInnerHTML={{
                  __html: selectedJob.description || "<p class='text-muted'>No description</p>",
                }}
              />
            </div>
            <div className="modal-footer border-0">
              <a
                className="btn btn-sb"
                href={getJobApplyHref(selectedJob)}
                onClick={(e) => {
                  e.preventDefault();
                  openJobInSeekerApp(selectedJob);
                }}
              >
                Apply on Staff Bridges <i className="bi bi-arrow-up-right ms-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={closeJob} />
    </>
  );
}
