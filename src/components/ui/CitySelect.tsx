import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { City } from '../../types/api';

interface CitySelectProps {
  id?: string;
  cities: City[];
  value: string;
  onChange: (value: string) => void;
}

interface MenuPos {
  top: number;
  left: number;
  width: number;
}

export function CitySelect({ id = 'qCity', cities, value, onChange }: CitySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [pos, setPos] = useState<MenuPos | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = cities.filter((city) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      (city.name || '').toLowerCase().includes(q) ||
      (city.code || '').toLowerCase().includes(q)
    );
  });

  const label = value || 'All cities';

  const updatePos = () => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: rect.left,
      width: Math.max(rect.width, 220),
    });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updatePos();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onDocClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (rootRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
      setQuery('');
    };

    const onReposition = () => updatePos();

    document.addEventListener('mousedown', onDocClick);
    window.addEventListener('resize', onReposition);
    window.addEventListener('scroll', onReposition, true);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('resize', onReposition);
      window.removeEventListener('scroll', onReposition, true);
    };
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const pick = (next: string) => {
    onChange(next);
    setOpen(false);
    setQuery('');
  };

  return (
    <div className={`city-select${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        id={id}
        type="button"
        className="city-select-trigger form-select text-start"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {label}
      </button>

      {open &&
        pos &&
        createPortal(
          <div
            ref={menuRef}
            className="city-select-menu"
            role="listbox"
            style={{ top: pos.top, left: pos.left, width: pos.width }}
          >
            <div className="city-select-search">
              <i className="bi bi-search" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                className="form-control form-control-sm"
                placeholder="Search city..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setOpen(false);
                    setQuery('');
                  }
                }}
              />
            </div>
            <button
              type="button"
              className={`city-select-option${!value ? ' is-active' : ''}`}
              role="option"
              aria-selected={!value}
              onClick={() => pick('')}
            >
              All cities
            </button>
            {filtered.length ? (
              filtered.map((city) => (
                <button
                  key={city.name}
                  type="button"
                  className={`city-select-option${value === city.name ? ' is-active' : ''}`}
                  role="option"
                  aria-selected={value === city.name}
                  onClick={() => pick(city.name)}
                >
                  {city.name}
                </button>
              ))
            ) : (
              <div className="city-select-empty">No cities found</div>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
}
