import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { JobModal } from '../home/JobModal';
import { Toast } from '../ui/Toast';
import { useHomeData } from '../../context/HomeDataContext';
import { SUPPORT_WHATSAPP } from '../../config/constants';

export function Layout() {
  const location = useLocation();
  const { toast } = useHomeData();

  useEffect(() => {
    document.body.classList.toggle('sb-legal-view', location.pathname !== '/');
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      document.getElementById('mainNav')?.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <a className="float-whatsapp" href={SUPPORT_WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp support">
        <i className="bi bi-whatsapp" />
      </a>
      {toast && <Toast message={toast} />}
      <JobModal />
    </>
  );
}
