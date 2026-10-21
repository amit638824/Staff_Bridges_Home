export const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'http://staffbridges.com';
export const APP_URL = import.meta.env.VITE_APP_URL ?? 'https://app.staffbridges.com/';
export const PLAY_STORE_SEEKER =
  import.meta.env.VITE_PLAY_STORE_SEEKER ??
  'https://play.google.com/store/apps/details?id=com.staffbridge_jobseeker&hl=en_IN';
export const PLAY_STORE_RECRUITER =
  import.meta.env.VITE_PLAY_STORE_RECRUITER ??
  'https://play.google.com/store/apps/details?id=com.staffbridge_recruiter&hl=en_IN';
/** @deprecated use PLAY_STORE_SEEKER */
export const PLAY_STORE_URL =
  import.meta.env.VITE_PLAY_STORE_URL ?? PLAY_STORE_SEEKER;
export const COMING_SOON_TOAST =
  'This feature is coming soon. keep in touch will notify soon';
export const LOGO_URL = 'https://app.staffbridges.com/assets/images/logo.png';
export const FALLBACK_CATEGORY_ICON =
  'https://cdn-icons-png.flaticon.com/512/2921/2921222.png';

export const SUPPORT_PHONE = '9196874016';
export const SALES_PHONE = '9196874017';
export const phoneLast10 = (raw: string) =>
  String(raw || '').replace(/\D/g, '').slice(-10);
export const formatInPhone = (raw: string) => {
  const d = phoneLast10(raw);
  return d.length === 10 ? `+91 ${d}` : '';
};
export const SUPPORT_TEL = `+91 ${phoneLast10(SUPPORT_PHONE)}`;
export const SALES_TEL = `+91 ${phoneLast10(SALES_PHONE)}`;
export const SUPPORT_DISPLAY = formatInPhone(SUPPORT_PHONE);
export const SALES_DISPLAY = formatInPhone(SALES_PHONE);
export const SUPPORT_WHATSAPP = `https://wa.me/91${phoneLast10(SUPPORT_PHONE)}`;
export const SALES_WHATSAPP = `https://wa.me/91${phoneLast10(SALES_PHONE)}`;

/** Custom scheme deep link into the seeker app job screen */
export const appSchemeJob = (jobId: string | number) =>
  `staffbridges://job/${jobId}`;

/** Canonical share URL on the marketing apex (App Links host) */
export const jobShareUrl = (jobId: string | number) => {
  const base = SITE_URL.replace(/\/$/, '').replace(/^http:\/\//i, 'https://');
  return `${base}/job/${jobId}`;
};

/** Web landing UI on main app (query form) */
export const jobLandingUrl = (jobId: string | number) => {
  const base = APP_URL.replace(/\/$/, '');
  return `${base}/job?id=${encodeURIComponent(String(jobId))}`;
};

