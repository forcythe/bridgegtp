import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SITE_CONFIG, SITE_URL } from '@/lib/site-config';
import './globals.css';

// Local font loading via next/font/local — subset + preload automatically,
// produces a CSS variable we can consume in Tailwind's font-family config.
const montserrat = localFont({
  src: [
    { path: '../public/fonts/Montserrat-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/Montserrat-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
});

const lato = localFont({
  src: [
    { path: '../public/fonts/Lato-Thin.ttf', weight: '200', style: 'normal' },
    { path: '../public/fonts/Lato-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Lato-LightItalic.ttf', weight: '300', style: 'italic' },
    { path: '../public/fonts/Lato-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Lato-Italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-lato',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
});

/**
 * Viewport configuration.
 * `themeColor` drives mobile browser chrome color.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B2C4A' },
    { media: '(prefers-color-scheme: dark)', color: '#0B2C4A' },
  ],
  colorScheme: 'light',
};

/**
 * Root metadata. Every page inherits these defaults; pages that need their
 * own title/description export their own `metadata` which will merge via
 * the title.template below.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s · ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url }],
  generator: 'Next.js',
  keywords: [...SITE_CONFIG.keywords],
  referrer: 'origin-when-cross-origin',
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/logos/logo-navy-red-cropped.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/assets/logos/logo-navy-red-cropped.svg' },
    ],
  },
  category: 'business',
};

/**
 * Organization schema (JSON-LD). Rendered in the <head> so crawlers pick it up.
 * This is the single most impactful structured-data signal for a corporate site.
 */
function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/logos/logo-navy-red-cropped.svg`,
      width: 300,
      height: 180,
    },
    description: SITE_CONFIG.description,
    slogan: SITE_CONFIG.tagline,
    sameAs: [SITE_CONFIG.social.linkedin, SITE_CONFIG.social.twitter],
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contact.email,
      contactType: 'Customer Support',
      availableLanguage: ['English'],
    },
    areaServed: [
      { '@type': 'Place', name: 'Africa' },
      { '@type': 'Place', name: 'West Africa' },
      { '@type': 'Place', name: 'East Africa' },
      { '@type': 'Place', name: 'Southern Africa' },
      { '@type': 'Place', name: 'North Africa' },
      { '@type': 'Place', name: 'MENA' },
    ],
    knowsAbout: [
      'Executive Search',
      'Retained Search',
      'Talent Development',
      'Leadership Recruitment',
      'Emerging Markets Talent',
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Using dangerouslySetInnerHTML is the standard pattern for JSON-LD in Next.
      // The content is a fully-controlled server-generated string with no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * WebSite schema — enables sitelinks search box in Google and establishes
 * the site entity for other structured-data relationships.
 */
function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-GB',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
