import { PLAY_STORE_SEEKER, appSchemeJob } from '../config/constants';
import type { Job } from '../types/api';

/**
 * Extracts a numeric or string job ID safely from a job object.
 */
export const getJobId = (job: Job | null | undefined): string => {
  if (!job) return '';
  const id = job.job_id ?? job.id;
  return id != null ? String(id).trim() : '';
};

/**
 * Returns true if running on an Android device.
 */
export const isAndroidDevice = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  return /Android/i.test(navigator.userAgent || '');
};

/**
 * Redirects DIRECTLY to the Staff Bridges Jobseeker app via deeplink (`staffbridges://job/<jobId>`).
 * If the app is not installed, it falls back directly to Google Play Store.
 * Does NOT open any intermediate web landing page.
 */
export function openJobInSeekerApp(
  jobOrId: Job | string | number | null | undefined,
): void {
  if (typeof window === 'undefined') return;

  const jobId = typeof jobOrId === 'object' ? getJobId(jobOrId) : String(jobOrId || '').trim();

  // If no job id is available, fallback directly to Google Play Store
  if (!jobId) {
    window.location.href = PLAY_STORE_SEEKER;
    return;
  }

  const scheme = appSchemeJob(jobId); // staffbridges://job/<jobId>
  const playStore = PLAY_STORE_SEEKER;

  // On Android devices: use Android Intent URI
  // - If app installed: directly opens the seeker app to the job screen
  // - If app NOT installed: directly opens Google Play Store for com.staffbridge_jobseeker
  if (isAndroidDevice()) {
    const intentUrl = `intent://job/${jobId}#Intent;scheme=staffbridges;package=com.staffbridge_jobseeker;S.browser_fallback_url=${encodeURIComponent(playStore)};end`;
    window.location.href = intentUrl;
    return;
  }

  // iOS, Desktop, and other environments:
  // Directly trigger custom scheme staffbridges://job/<jobId>.
  // If app is not installed, fallback directly to Google Play Store.
  const started = Date.now();
  window.location.href = scheme;

  window.setTimeout(() => {
    if (document.visibilityState === 'visible' && Date.now() - started >= 1400) {
      window.location.href = playStore;
    }
  }, 1500);
}

/**
 * Returns the direct custom app scheme href for the job:
 * `staffbridges://job/<jobId>` (or Play Store fallback if no jobId)
 */
export function getJobApplyHref(jobOrId: Job | string | number | null | undefined): string {
  const jobId = typeof jobOrId === 'object' ? getJobId(jobOrId) : String(jobOrId || '').trim();
  return jobId ? appSchemeJob(jobId) : PLAY_STORE_SEEKER;
}
