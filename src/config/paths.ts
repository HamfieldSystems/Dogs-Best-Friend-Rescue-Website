// Builds internal links that still work if the site is hosted under a sub-path
// (for example a GitHub Pages project site).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const path = (p: string) => `${base}${p}`;
