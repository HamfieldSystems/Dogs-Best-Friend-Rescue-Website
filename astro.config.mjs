// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL: the public address once a domain is chosen, e.g. https://www.dogsbfrescue.org
// BASE_PATH: only needed for a GitHub Pages project site, e.g. /Dogs-Best-Friend-Rescue-Website
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.org',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
