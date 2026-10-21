export interface ApiListResponse<T> {
  data?: {
    items?: T[];
    totalRecords?: number;
  };
}

export interface City {
  name: string;
  code?: string;
}

export interface Category {
  name: string;
  image?: string;
}

export interface Job {
  id?: number | string;
  job_id?: number | string;
  status?: string;
  job_title_name?: string;
  category_name?: string;
  company?: string;
  city_name?: string;
  locality_name?: string;
  description?: string;
  salary_min?: number | string | null;
  salary_max?: number | string | null;
  job_type_name?: string;
  work_location?: string;
  openings?: number | string | null;
  shift?: string;
}
