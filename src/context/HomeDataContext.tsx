import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { getCategories, getCities, getJobs } from '../services/homeService';
import type { Category, City, Job } from '../types/api';
import { stripHtml } from '../utils/format';

interface JobFilters {
  search: string;
  cityName: string;
  page: number;
  limit: number;
}

interface HomeDataContextValue {
  cities: City[];
  categories: Category[];
  filteredCities: City[];
  filteredCategories: Category[];
  publishedJobs: Job[];
  pagedJobs: Job[];
  citySearch: string;
  categorySearch: string;
  filters: JobFilters;
  selectedJob: Job | null;
  loading: boolean;
  toast: string | null;
  heroMeta: string;
  jobsSub: string;
  cityMeta: string;
  pillCities: string;
  pillJobs: string;
  totalApiJobs: number;
  totalPages: number;
  setCitySearch: (value: string) => void;
  setCategorySearch: (value: string) => void;
  applySearch: (search: string, cityName: string) => void;
  selectCity: (name: string) => void;
  selectCategory: (name: string) => void;
  clearFilters: () => void;
  setPageLimit: (limit: number) => void;
  openJob: (job: Job) => void;
  closeJob: () => void;
  goToPage: (page: number) => void;
  showToast: (message: string, duration?: number) => void;
}

const HomeDataContext = createContext<HomeDataContextValue | null>(null);

function filterPublishedJobs(items: Job[], filters: Pick<JobFilters, 'search' | 'cityName'>) {
  let result = items.filter((job) => String(job.status).toUpperCase() === 'PUBLISHED');

  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (job) =>
        (job.job_title_name || '').toLowerCase().includes(q) ||
        (job.category_name || '').toLowerCase().includes(q) ||
        (job.company || '').toLowerCase().includes(q) ||
        (job.city_name || '').toLowerCase().includes(q) ||
        stripHtml(job.description).toLowerCase().includes(q),
    );
  }

  if (filters.cityName) {
    const city = filters.cityName.toLowerCase();
    result = result.filter((job) => (job.city_name || '').toLowerCase().includes(city));
  }

  return result;
}

export function HomeDataProvider({ children }: { children: ReactNode }) {
  const [cities, setCities] = useState<City[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [totalApiJobs, setTotalApiJobs] = useState(0);
  const [citySearch, setCitySearch] = useState('');
  const [categorySearch, setCategorySearch] = useState('');
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    cityName: '',
    page: 1,
    limit: 6,
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [loadingMeta, setLoadingMeta] = useState(true);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  const showToast = useCallback((message: string, duration = 2800) => {
    setToast(message);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), duration);
  }, []);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        setLoadingMeta(true);
        const [cityRes, categoryRes] = await Promise.all([getCities(), getCategories()]);
        if (!active) return;
        setCities(cityRes.data?.items ?? []);
        setCategories(categoryRes.data?.items ?? []);
      } catch (error) {
        console.error(error);
        if (active) showToast('API load failed — host over https/http, not file://');
      } finally {
        if (active) setLoadingMeta(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [showToast]);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        setLoadingJobs(true);
        const json = await getJobs({
          page: 1,
          limit: Math.max(filters.limit * 3, 40),
          ...(filters.search ? { search: filters.search } : {}),
          ...(filters.cityName ? { cityName: filters.cityName } : {}),
        });
        if (!active) return;
        setAllJobs(json.data?.items ?? []);
        setTotalApiJobs(json.data?.totalRecords ?? 0);
      } catch (error) {
        console.error(error);
        if (active) showToast('API load failed — host over https/http, not file://');
      } finally {
        if (active) setLoadingJobs(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [filters.search, filters.cityName, filters.limit, showToast]);

  const applySearch = useCallback((search: string, cityName: string) => {
    setFilters((current) => ({ ...current, search, cityName, page: 1 }));
  }, []);

  const selectCity = useCallback((name: string) => {
    setFilters((current) => ({ ...current, cityName: name, page: 1 }));
  }, []);

  const selectCategory = useCallback((name: string) => {
    setFilters((current) => ({ ...current, search: name, page: 1 }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters((current) => ({ ...current, search: '', cityName: '', page: 1 }));
  }, []);

  const setPageLimit = useCallback((limit: number) => {
    setFilters((current) => ({ ...current, limit, page: 1 }));
  }, []);

  const goToPage = useCallback((page: number) => {
    setFilters((current) => ({ ...current, page }));
  }, []);

  const filteredCities = useMemo(() => {
    const q = citySearch.toLowerCase();
    return cities.filter(
      (city) =>
        !q ||
        (city.name || '').toLowerCase().includes(q) ||
        (city.code || '').toLowerCase().includes(q),
    );
  }, [cities, citySearch]);

  const filteredCategories = useMemo(() => {
    const q = categorySearch.toLowerCase();
    return categories.filter((category) => !q || (category.name || '').toLowerCase().includes(q));
  }, [categories, categorySearch]);

  const publishedJobs = useMemo(
    () => filterPublishedJobs(allJobs, filters),
    [allJobs, filters.search, filters.cityName],
  );

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(publishedJobs.length / filters.limit)),
    [publishedJobs.length, filters.limit],
  );

  const currentPage = Math.min(filters.page, totalPages);

  const pagedJobs = useMemo(() => {
    const start = (currentPage - 1) * filters.limit;
    return publishedJobs.slice(start, start + filters.limit);
  }, [publishedJobs, currentPage, filters.limit]);

  const loading = loadingMeta || loadingJobs;

  const value = useMemo<HomeDataContextValue>(
    () => ({
      cities,
      categories,
      filteredCities,
      filteredCategories,
      publishedJobs,
      pagedJobs,
      citySearch,
      categorySearch,
      filters: { ...filters, page: currentPage },
      selectedJob,
      loading,
      toast,
      heroMeta: loadingJobs
        ? 'Fetching live openings...'
        : `${totalApiJobs} in API · ${publishedJobs.length} published match`,
      jobsSub:
        filters.search || filters.cityName
          ? `Filtered · ${publishedJobs.length} published`
          : `Live API · ${publishedJobs.length} published`,
      cityMeta: cities.length ? `${cities.length} cities live` : 'Live city coverage',
      pillCities: loadingMeta ? 'Cities loading...' : `${cities.length}+ cities`,
      pillJobs: loadingJobs ? 'Jobs loading...' : `${publishedJobs.length} published jobs`,
      totalApiJobs,
      totalPages,
      setCitySearch,
      setCategorySearch,
      applySearch,
      selectCity,
      selectCategory,
      clearFilters,
      setPageLimit,
      openJob: setSelectedJob,
      closeJob: () => setSelectedJob(null),
      goToPage,
      showToast,
    }),
    [
      cities,
      categories,
      filteredCities,
      filteredCategories,
      publishedJobs,
      pagedJobs,
      citySearch,
      categorySearch,
      filters,
      currentPage,
      selectedJob,
      loading,
      loadingMeta,
      loadingJobs,
      toast,
      totalApiJobs,
      totalPages,
      applySearch,
      selectCity,
      selectCategory,
      clearFilters,
      setPageLimit,
      goToPage,
      showToast,
    ],
  );

  return <HomeDataContext.Provider value={value}>{children}</HomeDataContext.Provider>;
}

export function useHomeData() {
  const context = useContext(HomeDataContext);
  if (!context) throw new Error('useHomeData must be used within HomeDataProvider');
  return context;
}
