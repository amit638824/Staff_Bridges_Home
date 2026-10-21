import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useHomeData } from '../../context/HomeDataContext';
import { getJobApplyHref, openJobInSeekerApp } from '../../utils/deeplink';
import { money, stripHtml } from '../../utils/format';

export function JobsSection() {
  const {
    pagedJobs,
    publishedJobs,
    filters,
    jobsSub,
    loading,
    totalPages,
    clearFilters,
    setPageLimit,
    goToPage,
    openJob,
  } = useHomeData();

  const start = publishedJobs.length ? (filters.page - 1) * filters.limit + 1 : 0;
  const end = publishedJobs.length ? start + pagedJobs.length - 1 : 0;

  return (
    <section id="jobs" className="section">
      <div className="container">
        <div className="section-head d-flex flex-wrap justify-content-between align-items-end gap-3">
          <div data-aos="fade-up">
            <div className="eyebrow">Hiring now</div>
            <h2>Latest openings</h2>
            <p>{jobsSub}</p>
          </div>
          <div className="section-tools" data-aos="fade-up" style={{ width: 'auto', maxWidth: 'none' }}>
            <div className="toolbar" style={{ flex: '0 1 auto', maxWidth: 160 }}>
              <select
                className="form-select form-select-sm"
                aria-label="Jobs per page"
                value={filters.limit}
                onChange={(e) => setPageLimit(Number(e.target.value))}
              >
                <option value={6}>6 / page</option>
                <option value={9}>9 / page</option>
                <option value={12}>12 / page</option>
              </select>
            </div>
            <button type="button" className="btn btn-sb-outline-dark btn-sm px-3" onClick={clearFilters}>
              Clear
            </button>
            <div className="swiper-nav-btns">
              <button type="button" className="swiper-btn job-prev" aria-label="Previous jobs">
                <i className="bi bi-chevron-left" />
              </button>
              <button type="button" className="swiper-btn job-next" aria-label="Next jobs">
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="swiper jobSwiper"><div className="swiper-slide"><div className="skeleton" /></div></div>
        ) : (
          <Swiper
            className="jobSwiper"
            modules={[Navigation]}
            navigation={{ prevEl: '.job-prev', nextEl: '.job-next' }}
            slidesPerView={1.05}
            spaceBetween={14}
            grabCursor
            breakpoints={{ 576: { slidesPerView: 1.4 }, 768: { slidesPerView: 2.05 }, 1200: { slidesPerView: 3 } }}
            data-aos="fade-up"
            data-aos-delay="80"
          >
            {pagedJobs.map((job) => {
              const jobId = job.job_id ?? job.id;
              const loc = [job.locality_name, job.city_name].filter(Boolean).join(', ') || 'India';
              const company = job.company || job.category_name || 'Hiring';
              const initial = String(company).trim().charAt(0).toUpperCase() || 'J';
              const sal = job.salary_min || job.salary_max
                ? `${money(job.salary_min)} – ${money(job.salary_max)}`
                : 'Negotiable';
              const desc = stripHtml(job.description);
              const excerpt = desc
                ? desc.length > 110
                  ? `${desc.slice(0, 110).trim()}…`
                  : desc
                : 'Tap details to see full job description.';

              return (
                <SwiperSlide key={jobId ? `job-${jobId}` : `${job.job_title_name}-${job.city_name}-${company}`}>
                  <article className="job-slide">
                    <div className="job-card-body">
                      <div className="job-card-top">
                        <div className="job-card-brand">
                          <span className="job-avatar" aria-hidden="true">{initial}</span>
                          <div className="min-w-0">
                            <p className="job-company">{company}</p>
                            <h3 className="job-card-title">{job.job_title_name || 'Job opening'}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="job-tags">
                        <span className="job-tag"><i className="bi bi-geo-alt-fill" />{loc}</span>
                        <span className="job-tag type"><i className="bi bi-briefcase" />{job.job_type_name || 'Full Time'}</span>
                        {job.category_name && (
                          <span className="job-tag type"><i className="bi bi-tags" />{job.category_name}</span>
                        )}
                      </div>
                      <p className="job-salary">{sal} <span className="unit">/ month</span></p>
                      <p className="job-excerpt">{excerpt}</p>
                    </div>
                    <div className="job-card-actions">
                      <button type="button" className="btn btn-sb-outline-dark btn-sm btn-detail" onClick={() => openJob(job)}>
                        Details
                      </button>
                      <a
                        className="btn btn-sb btn-sm"
                        href={getJobApplyHref(job)}
                        onClick={(e) => {
                          e.preventDefault();
                          openJobInSeekerApp(job);
                        }}
                      >
                        Apply <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        {!loading && !pagedJobs.length && (
          <p className="text-center text-muted mt-3">No published jobs found.</p>
        )}

        <div className="pager-bar">
          <span className="page-info">
            {publishedJobs.length ? `Showing ${start}–${end} of ${publishedJobs.length}` : '0 results'}
          </span>
          {totalPages > 1 && (
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item${filters.page <= 1 ? ' disabled' : ''}`}>
                <button type="button" className="page-link page-btn" onClick={() => goToPage(filters.page - 1)} disabled={filters.page <= 1}>«</button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => page >= filters.page - 2 && page <= filters.page + 2)
                .map((page) => (
                  <li key={page} className={`page-item${page === filters.page ? ' active' : ''}`}>
                    <button type="button" className={`page-link page-btn${page === filters.page ? ' active' : ''}`} onClick={() => goToPage(page)}>
                      {page}
                    </button>
                  </li>
                ))}
              <li className={`page-item${filters.page >= totalPages ? ' disabled' : ''}`}>
                <button type="button" className="page-link page-btn" onClick={() => goToPage(filters.page + 1)} disabled={filters.page >= totalPages}>»</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
