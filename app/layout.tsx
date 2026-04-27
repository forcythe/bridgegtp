import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SITE_CONFIG, SITE_URL } from '@/lib/site-config';
import './globals.css';

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0D1B4B' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1B4B' },
  ],
  colorScheme: 'light',
};

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
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
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
    icon: [{ url: '/assets/logos/logo-navy-red-cropped.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/assets/logos/logo-navy-red-cropped.svg' }],
  },
  category: 'business',
};

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
    sameAs: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.tiktok,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contact.email,
      contactType: 'Customer Support',
      availableLanguage: ['English'],
    },
    areaServed: SITE_CONFIG.markets.map((m) => ({ '@type': 'Place', name: m })),
    knowsAbout: [
      'Executive Search Africa',
      'Graduate Talent Programs',
      'Country Manager Recruitment',
      'African Leadership',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

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
