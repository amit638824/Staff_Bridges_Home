import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FALLBACK_CATEGORY_ICON } from '../../config/constants';
import { useHomeData } from '../../context/HomeDataContext';
import { chunkPairs } from '../../utils/format';

export function CategoriesSection() {
  const { filteredCategories, categorySearch, setCategorySearch, selectCategory } = useHomeData();
  const pairs = chunkPairs(filteredCategories);

  return (
    <section id="categories" className="section section-alt">
      <div className="container">
        <div className="section-head d-flex flex-wrap justify-content-between align-items-end gap-3">
          <div data-aos="fade-up">
            <div className="eyebrow">Roles</div>
            <h2>Jobs by category</h2>
            <p>Browse popular industries — live from Staff Bridges.</p>
          </div>
          <div className="section-tools" data-aos="fade-up">
            <div className="toolbar">
              <i className="bi bi-search sb-search-icon" />
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search category..."
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
              />
            </div>
            <div className="swiper-nav-btns">
              <button type="button" className="swiper-btn cat-prev" aria-label="Previous categories">
                <i className="bi bi-chevron-left" />
              </button>
              <button type="button" className="swiper-btn cat-next" aria-label="Next categories">
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          className="catSwiper"
          modules={[Navigation]}
          navigation={{ prevEl: '.cat-prev', nextEl: '.cat-next' }}
          slidesPerView={1.6}
          spaceBetween={12}
          grabCursor
          breakpoints={{
            480: { slidesPerView: 2.2 },
            576: { slidesPerView: 2.8 },
            768: { slidesPerView: 3.6 },
            992: { slidesPerView: 4.4 },
            1200: { slidesPerView: 5.1 },
          }}
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {pairs.length ? pairs.map(([a, b]) => (
            <SwiperSlide key={a.name}>
              <div className="dual-col">
                <button type="button" className="cat-slide" onClick={() => { selectCategory(a.name); document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <span className="cat-icon-wrap">
                    <img src={a.image || FALLBACK_CATEGORY_ICON} alt="" loading="lazy" onError={(e) => { e.currentTarget.src = FALLBACK_CATEGORY_ICON; }} />
                  </span>
                  <h6>{a.name}</h6>
                </button>
                {b ? (
                  <button type="button" className="cat-slide" onClick={() => { selectCategory(b.name); document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    <span className="cat-icon-wrap">
                      <img src={b.image || FALLBACK_CATEGORY_ICON} alt="" loading="lazy" onError={(e) => { e.currentTarget.src = FALLBACK_CATEGORY_ICON; }} />
                    </span>
                    <h6>{b.name}</h6>
                  </button>
                ) : (
                  <div className="cat-slide cat-slide--spacer" aria-hidden="true" />
                )}
              </div>
            </SwiperSlide>
          )) : (
            <SwiperSlide><div className="cat-slide">No categories found</div></SwiperSlide>
          )}
        </Swiper>
        <p className="page-info mt-3 mb-0">
          {filteredCategories.length ? `${filteredCategories.length} categories — 2 rows · swipe or arrows` : 'No match'}
        </p>
      </div>
    </section>
  );
}
