import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ClientLogoBar } from '@/components/ClientLogoBar';
import { CtaBanner } from '@/components/CtaBanner';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Executive Talent — Hire Leaders Who Can Win in Africa',
  description:
    'Bridge runs focused executive searches for critical roles. Country managers, senior operators, leadership teams. We work with companies entering or scaling across Africa.',
  alternates: { canonical: '/executive-talent' },
  openGraph: {
    url: `${SITE_CONFIG.author.url}/executive-talent`,
    title: 'Executive Talent — Bridge Global Talent Partners',
    description: 'We hire leaders who can win in Africa.',
  },
};

function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Executive Talent',
    provider: { '@id': `${SITE_CONFIG.author.url}/#organization` },
    description: 'Retained executive search for senior leaders, country managers, and leadership teams across Africa.',
    areaServed: { '@type': 'Place', name: 'Africa' },
    audience: { '@type': 'BusinessAudience', name: 'Companies entering or scaling across Africa' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function ExecutiveTalentPage() {
  const placedMarkets = ['Côte d\u2019Ivoire', 'Cameroon', 'Ghana', 'Malawi'];

  return (
    <>
      <ServiceJsonLd />
      <Nav theme="dark" />
      <main id="main">
        <Hero
          size="standard"
          eyebrow="Executive Talent"
          title={
            <>
              Hire leaders who can win in <em className="not-italic text-gold">Africa.</em>
            </>
          }
          description="We work with companies entering or scaling across the continent."
          primaryCta={{ label: 'Speak to Us', href: '/contact' }}
        />

        {/* PROOF — countries placed */}
        <section className="bg-section-cream section-y" aria-labelledby="exec-proof-heading">
          <div className="container-wide">
            <p className="eyebrow mb-5">Where We&apos;ve Placed</p>
            <h2 id="exec-proof-heading" className="section-title text-navy mb-10 max-w-[24ch]">
              Country managers across:
            </h2>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
              {placedMarkets.map((m) => (
                <li
                  key={m}
                  className="bg-white border border-navy/10 rounded-md py-7 px-6
                             font-heading font-bold text-navy text-xl md:text-2xl
                             tracking-[-0.01em] flex items-center gap-3 transition-all
                             hover:border-gold hover:shadow-elev-2"
                >
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden />
                  {m}
                </li>
              ))}
            </ul>

            <p className="font-heading text-2xl md:text-3xl font-bold text-navy leading-[1.3] tracking-[-0.015em] max-w-[24ch] mb-12">
              They performed from day one.
            </p>

            <div className="pt-8 border-t border-navy/10">
              <ClientLogoBar variant="on-light" label="Companies we've worked with" />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="bg-section-light section-y" aria-labelledby="exec-what-heading">
          <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5">What We Do</p>
              <h2 id="exec-what-heading" className="section-title text-navy">
                We run focused executive searches for critical roles.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <ul className="space-y-4">
                {['Country managers', 'Senior operators', 'Leadership teams'].map((role) => (
                  <li
                    key={role}
                    className="flex items-baseline gap-4 pb-4 border-b border-navy/8 last:border-b-0"
                  >
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 translate-y-[-3px]" />
                    <p className="font-heading text-2xl md:text-3xl font-bold text-navy leading-[1.25] tracking-[-0.015em]">
                      {role}.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="bg-section-deep section-y" aria-labelledby="exec-why-heading">
          <div className="container-wide max-w-3xl">
            <p className="eyebrow eyebrow-light mb-6">Why Us</p>
            <h2 id="exec-why-heading" className="display-title text-white mb-12 max-w-[14ch]">
              We&apos;re on the <em className="not-italic text-gold">ground.</em>
            </h2>

            <div className="space-y-5 mb-10 max-w-[40ch]">
              {[
                'We\u2019ve seen what works and what doesn\u2019t.',
                'We know who can actually do the job.',
              ].map((line) => (
                <p
                  key={line}
                  className="font-heading font-bold text-white/85 leading-[1.3]"
                  style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="border-l-2 border-gold pl-6">
              <p
                className="font-heading font-bold text-gold leading-[1.25] mb-2"
                style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}
              >
                So when we bring someone,
              </p>
              <p
                className="font-heading font-bold text-white leading-[1.2]"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
              >
                it&apos;s not a guess.
              </p>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Hiring senior in Africa? Talk to us."
          ctaLabel="Speak to Us"
          ctaHref="/contact"
          tone="ink"
        />
      </main>
      <Footer />
    </>
  );
}
