import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeDataProvider } from './context/HomeDataContext';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { JobRedirectPage } from './pages/JobRedirectPage';

export default function App() {
  return (
    <ThemeProvider>
      <HomeDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/job/:jobId" element={<JobRedirectPage />} />
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
              <Route path="/terms-conditions" element={<TermsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HomeDataProvider>
    </ThemeProvider>
  );
}
