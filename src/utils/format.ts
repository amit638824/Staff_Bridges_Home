export function esc(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function money(value: unknown) {
  if (value == null || value === '') return '—';
  const num = Number(value);
  return Number.isNaN(num) ? String(value) : `₹${Math.round(num).toLocaleString('en-IN')}`;
}

export function stripHtml(html: string | undefined) {
  const div = document.createElement('div');
  div.innerHTML = html || '';
  return (div.textContent || '').trim();
}

export function chunkPairs<T>(items: T[]) {
  const pairs: [T, T | null][] = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push([items[i], items[i + 1] ?? null]);
  }
  return pairs;
}
