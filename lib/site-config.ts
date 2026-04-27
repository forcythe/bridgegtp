/**
 * Central site configuration.
 * Change SITE_URL once and canonical URLs, sitemap, OG image paths, and JSON-LD
 * all update together.
 */
export const SITE_URL = 'https://bridgegtp.com';

export const SITE_CONFIG = {
  name: 'Bridge Global Talent Partners',
  shortName: 'Bridge',
  tagline: 'Hire proven talent.',
  fullTagline: 'We build and deploy African leaders who perform anywhere.',
  description:
    'Bridge Global Talent Partners builds and deploys proven African leaders. We run executive searches and graduate trainee programs for companies entering or scaling across Africa.',
  shortDescription:
    'We build and deploy African leaders who perform anywhere — through executive search and a graduate trainee program.',
  locale: 'en_GB',
  keywords: [
    'executive search Africa',
    'African leaders',
    'graduate trainee program Africa',
    'country manager Africa',
    'talent partner Africa',
    'Nigeria executive search',
    'Ghana executive search',
    'Kenya executive search',
    'senior leadership hiring Africa',
    'African talent development',
  ],
  author: {
    name: 'Bridge Global Talent Partners',
    url: SITE_URL,
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/cfo-africa/',
    instagram: 'https://www.instagram.com/bridgeafrica98',
    tiktok: 'https://www.tiktok.com/@bridgetalentpartners',
    youtube: 'https://www.youtube.com/@BridgeAfrica-q4h',
  },
  contact: {
    email: 'hello@bridgegtp.com',
    ctaLabel: 'Speak to Us',
  },
  /** Markets where Bridge has placed senior leaders */
  markets: ['Côte d\u2019Ivoire', 'Cameroon', 'Ghana', 'Malawi', 'Nigeria', 'Kenya'],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
