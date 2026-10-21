import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PLAY_STORE_SEEKER } from '../config/constants';
import { openJobInSeekerApp } from '../utils/deeplink';

/** Apex share URL bridge → directly triggers seeker app deeplink with Play Store fallback */
export function JobRedirectPage() {
  const { jobId } = useParams<{ jobId: string }>();

  useEffect(() => {
    const id = String(jobId || '').trim();
    if (!id) {
      window.location.replace(PLAY_STORE_SEEKER);
      return;
    }

    openJobInSeekerApp(id);
  }, [jobId]);

  return (
    <main style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
      <p>Opening Staff Bridges App…</p>
    </main>
  );
}

