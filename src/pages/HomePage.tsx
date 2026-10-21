import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { CitiesSection } from '../components/home/CitiesSection';
import { ContactSection } from '../components/home/ContactSection';
import { CtaSection } from '../components/home/CtaSection';
import { FaqSection } from '../components/home/FaqSection';
import { HeroSection } from '../components/home/HeroSection';
import { HowSection } from '../components/home/HowSection';
import { JobsSection } from '../components/home/JobsSection';
import { TrustSection } from '../components/home/TrustSection';
import { useAos } from '../hooks/useAos';

export function HomePage() {
  const location = useLocation();
  useAos();

  useEffect(() => {
    document.title = 'Staff Bridges | Find local jobs with better salary';
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const timer = window.setTimeout(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <HeroSection />
      <TrustSection />
      <CitiesSection />
      <CategoriesSection />
      <JobsSection />
      <HowSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </>
  );
}
