/**
 * Central site configuration.
 * Change SITE_URL here and canonical URLs, sitemap, OG image paths, and JSON-LD
 * all update together.
 */
export const SITE_URL = 'https://bridgegtp.com';

export const SITE_CONFIG = {
  name: 'Bridge Global Talent Partners',
  shortName: 'Bridge',
  tagline: 'Your talent partner in markets that matter.',
  description:
    'Bridge Global Talent Partners connects world-class organisations with exceptional talent across Africa and emerging markets — through retained executive search, a structured global talent program, and a curated, assessed talent pool.',
  shortDescription:
    'Premium executive search and talent development — built exclusively for Africa and emerging markets.',
  locale: 'en_GB',
  keywords: [
    'executive search Africa',
    'retained executive search',
    'talent development Africa',
    'emerging markets recruitment',
    'C-suite recruitment Africa',
    'global talent program',
    'Nigeria executive search',
    'Kenya executive search',
    'South Africa executive recruitment',
    'senior leadership hiring Africa',
  ],
  author: {
    name: 'Bridge Global Talent Partners',
    url: SITE_URL,
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/bridge-global-talent-partners',
    twitter: 'https://twitter.com/bridgegtp',
  },
  contact: {
    email: 'hello@bridgegtp.com',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
