// Respeita o `base` do Astro (ex.: GitHub Pages em /madga-imoveis). Em produção o base é "/".
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const u = (path: string) => (path === '/' ? `${base}/` : `${base}${path}`);

export const stripBase = (pathname: string) =>
  base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
