import type { Metadata } from 'next';
import { SITE_CONFIG, SITE_URL } from '@/lib/site-config';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ClientLogoBar } from '@/components/ClientLogoBar';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhoWeAre } from '@/components/WhoWeAre';
import { AfricaView } from '@/components/AfricaView';
import { CtaBanner } from '@/components/CtaBanner';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  alternates: { canonical: '/' },
  openGraph: { url: SITE_URL },
};

function ProfessionalServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    description: SITE_CONFIG.description,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    serviceType: ['Executive Search', 'Graduate Talent Development'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bridge Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Executive Talent',
            description: 'Hire leaders who can operate in Africa. We run focused executive searches for critical roles across the continent.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Graduate Trainee Program',
            description: 'We design and run graduate trainee programs — from sourcing to training to deployment.',
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
      <Nav theme="dark" />
      <main id="main">
        <Hero
          eyebrow="Africa · Executive Search · Graduate Trainee"
          title={
            <>
              Hire <em className="not-italic text-gold">proven</em> talent.
            </>
          }
          description="We build and deploy African leaders who perform anywhere — through executive search and a graduate trainee program for the companies serious about Africa."
          primaryCta={{ label: 'Speak to Us', href: '/contact' }}
          secondaryCta={{ label: 'See Our Work', href: '#services' }}
          proof={
            <div className="pt-8 border-t border-white/10 max-w-4xl">
              <ClientLogoBar variant="on-dark" label="Companies we've worked with" />
            </div>
          }
        />
        <ServicesGrid />
        <WhoWeAre />
        <AfricaView />
        <CtaBanner
          title="Ready to hire talent that actually works in Africa?"
          ctaLabel="Speak to Us"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
