import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

export function useAos(active = true) {
  const location = useLocation();

  useEffect(() => {
    if (!active) return;
    AOS.init({ duration: 650, once: true, disable: 'mobile' });
  }, [active]);

  useEffect(() => {
    if (!active) return;
    AOS.refresh();
  }, [location.pathname, active]);
}
