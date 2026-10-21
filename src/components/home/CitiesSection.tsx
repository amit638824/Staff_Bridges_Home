import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useHomeData } from '../../context/HomeDataContext';
import { chunkPairs } from '../../utils/format';

export function CitiesSection() {
  const { filteredCities, citySearch, setCitySearch, selectCity } = useHomeData();
  const pairs = chunkPairs(filteredCities);

  return (
    <section id="cities" className="section">
      <div className="container">
        <div className="section-head d-flex flex-wrap justify-content-between align-items-end gap-3">
          <div data-aos="fade-up">
            <div className="eyebrow">Locations</div>
            <h2>Explore jobs by city</h2>
            <p>Swipe cities or search — tap any city to filter jobs.</p>
          </div>
          <div className="section-tools" data-aos="fade-up">
            <div className="toolbar">
              <i className="bi bi-search sb-search-icon" />
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search city..."
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
              />
            </div>
            <div className="swiper-nav-btns">
              <button type="button" className="swiper-btn city-prev" aria-label="Previous cities">
                <i className="bi bi-chevron-left" />
              </button>
              <button type="button" className="swiper-btn city-next" aria-label="Next cities">
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          className="citySwiper"
          modules={[Navigation]}
          navigation={{ prevEl: '.city-prev', nextEl: '.city-next' }}
          slidesPerView={1.4}
          spaceBetween={12}
          grabCursor
          breakpoints={{
            480: { slidesPerView: 1.8 },
            576: { slidesPerView: 2.3 },
            768: { slidesPerView: 3.1 },
            992: { slidesPerView: 3.8 },
            1200: { slidesPerView: 4.2 },
          }}
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {pairs.length ? pairs.map(([a, b]) => (
            <SwiperSlide key={a.name}>
              <div className="dual-col">
                <button type="button" className="city-slide" onClick={() => { selectCity(a.name); document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <span className="ico"><i className="bi bi-geo-alt-fill" /></span>
                  <div>
                    <div className="fw-bold themeBlue">{a.name}</div>
                    <div className="small text-muted">{a.code || 'India'}</div>
                  </div>
                </button>
                {b ? (
                  <button type="button" className="city-slide" onClick={() => { selectCity(b.name); document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    <span className="ico"><i className="bi bi-geo-alt-fill" /></span>
                    <div>
                      <div className="fw-bold themeBlue">{b.name}</div>
                      <div className="small text-muted">{b.code || 'India'}</div>
                    </div>
                  </button>
                ) : (
                  <div className="city-slide city-slide--spacer" aria-hidden="true" />
                )}
              </div>
            </SwiperSlide>
          )) : (
            <SwiperSlide><div className="city-slide">No cities found</div></SwiperSlide>
          )}
        </Swiper>
        <p className="page-info mt-3 mb-0">
          {filteredCities.length ? `${filteredCities.length} cities — 2 rows · swipe or arrows` : 'No match'}
        </p>
      </div>
    </section>
  );
}
