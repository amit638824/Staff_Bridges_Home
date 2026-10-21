import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_URL, LOGO_URL, PLAY_STORE_SEEKER } from '../../config/constants';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Cities', to: '/#cities' },
  { label: 'Categories', to: '/#categories' },
  { label: 'Jobs', to: '/#jobs' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/#contact' },
] as const;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.slice(1);
    return location.pathname === to;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-sb sticky-top py-2" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
          <img className="logo-img" src={LOGO_URL} alt="Staff Bridges" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${open ? ' show' : ''}`} id="navMain">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.label}>
                <Link
                  className={`nav-link sb-nav-link${isActive(item.to) ? ' active' : ''}`}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                <i className={theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'} />
              </button>
            </li>
            <li className="nav-item">
              <a className="btn btn-sb-outline-dark btn-sm px-3" href={APP_URL} target="_blank" rel="noopener noreferrer">
                Hire staff
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-sb btn-sm px-3" href={PLAY_STORE_SEEKER} target="_blank" rel="noopener noreferrer">
                Get a Job
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
