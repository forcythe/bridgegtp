import type { Metadata } from 'next';
import { SITE_CONFIG, SITE_URL } from '@/lib/site-config';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Offerings } from '@/components/Offerings';
import { About } from '@/components/About';
import { GTProgram } from '@/components/GTProgram';
import { ForCompanies } from '@/components/ForCompanies';
import { Leaderboard } from '@/components/Leaderboard';
import { Join } from '@/components/Join';
import { Footer } from '@/components/Footer';

/**
 * Page-level metadata. These override the root-level defaults in layout.tsx.
 * The title here will be used as-is because it's the homepage (root path).
 */
export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: SITE_URL,
  },
};

/**
 * ProfessionalService schema — tells search engines what kind of business this is
 * and what services are offered. Shows up as rich results for service queries.
 */
function ProfessionalServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    description: SITE_CONFIG.description,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    serviceType: [
      'Executive Search',
      'Talent Development',
      'Retained Executive Recruitment',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bridge Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Executive Search',
            description:
              'Retained search for senior and C-suite talent across all business functions. Specialised mandates requiring genuine market knowledge.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GT Program',
            description:
              'A structured training and assessment program for high-potential professionals across Africa and emerging markets.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Talent Pool & Leaderboard',
            description:
              'A curated, continuously scored network of assessed professionals, visible to partnered companies.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <ProfessionalServiceJsonLd />
      <Nav />
      <main id="main">
        <Hero />
        <Offerings />
        <About />
        <GTProgram />
        <ForCompanies />
        <Leaderboard />
        <Join />
      </main>
      <Footer />
    </>
  );
}
