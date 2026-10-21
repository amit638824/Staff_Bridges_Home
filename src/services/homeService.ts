import api from './api';
import type { ApiListResponse, Category, City, Job } from '../types/api';

export async function getCities(page = 1, limit = 200) {
  const { data } = await api.get<ApiListResponse<City>>('/api/master-city', {
    params: { page, limit },
  });
  return data;
}

export async function getCategories(page = 1, limit = 200) {
  const { data } = await api.get<ApiListResponse<Category>>('/api/master-category', {
    params: { page, limit },
  });
  return data;
}

export interface JobListParams {
  page?: number | string;
  limit?: number | string;
  search?: string;
  cityName?: string;
}

export async function getJobs(params: JobListParams) {
  const { data } = await api.get<ApiListResponse<Job>>('/api/job-list', { params });
  return data;
}
