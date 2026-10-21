import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APP_URL } from '../config/constants';

/** Apex share URL bridge → main Next app job landing */
export function JobRedirectPage() {
  const { jobId } = useParams<{ jobId: string }>();

  useEffect(() => {
    const id = String(jobId || '').trim();
    const base = APP_URL.replace(/\/$/, '');
    if (!id) {
      window.location.replace(base);
      return;
    }
    // Static Next export cannot host /job/:id — query form on main app
    window.location.replace(`${base}/job?id=${encodeURIComponent(id)}`);
  }, [jobId]);

  return (
    <main style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
      <p>Redirecting to Staff Bridges…</p>
    </main>
  );
}
