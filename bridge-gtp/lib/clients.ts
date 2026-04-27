/**
 * Companies Bridge has worked with. Used in the homepage proof bar
 * and on service pages.
 *
 * Logo files live in /public/clients/ — to add a new client:
 *   1. Add the logo to /public/clients/<slug>.<ext>
 *   2. Add an entry below
 */
export type Client = {
  name: string;
  slug: string;
  logo: string;       // path under /public
  url: string;
  /** Hint to render the logo on a light or dark background */
  bg: 'light' | 'dark';
  /** Optional override of intrinsic logo aspect (defaults to 5:1 horizontal) */
  width?: number;
  height?: number;
};

export const CLIENTS: Client[] = [
  {
    name: 'Starks Associates',
    slug: 'starks',
    logo: '/clients/starks.svg',
    url: 'https://starksassociate.com',
    bg: 'dark',
  },
  {
    name: 'Doss Law',
    slug: 'doss-law',
    logo: '/clients/doss-law.png',
    url: 'https://dosslaw.ca',
    bg: 'light',
  },
  {
    name: 'Alexander Tax Law',
    slug: 'alexander-tax-law',
    logo: '/clients/alexander-tax-law.webp',
    url: 'https://alexandertaxlaw.com',
    bg: 'light',
  },
  {
    name: 'Initio Capital',
    slug: 'initio',
    // No logo file yet — will need to fetch from initiocapital.com
    logo: '',
    url: 'https://initiocapital.com',
    bg: 'light',
  },
  {
    name: 'RDL Consulting',
    slug: 'rdl-consulting',
    logo: '/clients/rdl-consulting.webp',
    url: 'https://rdlconsultingllc.com',
    bg: 'light',
  },
  {
    name: 'RMS Management Group',
    slug: 'rms-mg',
    logo: '/clients/rms-mg.svg',
    url: 'https://www.rmsmg.com',
    bg: 'dark',
  },
];

// Convenience subsets
export const CLIENTS_WITH_LOGOS = CLIENTS.filter((c) => c.logo);
