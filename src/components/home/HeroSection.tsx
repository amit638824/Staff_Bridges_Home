import { type FormEvent, useState } from 'react';
import { APP_URL, LOGO_URL, PLAY_STORE_RECRUITER, PLAY_STORE_SEEKER } from '../../config/constants';
import { useHomeData } from '../../context/HomeDataContext';
import { CitySelect } from '../ui/CitySelect';
import { Typewriter } from '../ui/Typewriter';

export function HeroSection() {
  const { cities, applySearch, heroMeta, pillCities, pillJobs } = useHomeData();
  const [search, setSearch] = useState('');
  const [cityName, setCityName] = useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    applySearch(search.trim(), cityName);
    document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero">
      <div className="hero-orb o1" />
      <div className="hero-orb o2" />
      <div className="hero-pattern" />
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="hero-kicker"><i className="bi bi-lightning-charge-fill" /> Verified local hiring</div>
            <h1 className="hero-title" aria-label="Find local jobs with better salary">
              <span className="hero-title-static">Find local jobs with</span>
              <Typewriter />
            </h1>
            <p className="hero-lead mt-3 mb-4">
              Call HR for free interviews. Discover verified openings near your locality on Staff Bridges.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a
                href={PLAY_STORE_SEEKER}
                className="btn btn-sb-teal"
                target="_blank"
                rel="noopener noreferrer"
              >
                For Job Seeker
              </a>
              <a
                href={APP_URL}
                className="btn btn-sb-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                For Employer
              </a>
            </div>
            <div className="stat-pills">
              <span className="stat-pill">{pillCities}</span>
              <span className="stat-pill">{pillJobs}</span>
              <span className="stat-pill">100% free to apply</span>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="search-panel">
              <div className="search-panel-head">
                <img src={LOGO_URL} alt="" />
                <h5>Search jobs near you</h5>
              </div>
              <form className="search-strip" onSubmit={onSubmit}>
                <div className="search-field">
                  <label htmlFor="qSearch">Keyword</label>
                  <div className="search-field-input">
                    <i className="bi bi-briefcase" aria-hidden="true" />
                    <input
                      id="qSearch"
                      type="search"
                      className="form-control"
                      placeholder="Accountant, developer..."
                      autoComplete="off"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="search-field">
                  <label htmlFor="qCity">City</label>
                  <div className="search-field-input">
                    <i className="bi bi-geo-alt" aria-hidden="true" />
                    <CitySelect
                      id="qCity"
                      cities={cities}
                      value={cityName}
                      onChange={setCityName}
                    />
                  </div>
                </div>
                <button className="btn btn-sb search-submit" type="submit">
                  <i className="bi bi-search me-1" />Search
                </button>
              </form>
              <p className="small text-muted mt-3 mb-0">{heroMeta}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
