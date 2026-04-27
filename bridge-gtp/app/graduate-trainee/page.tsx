import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ClientLogoBar } from '@/components/ClientLogoBar';
import { CtaBanner } from '@/components/CtaBanner';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Graduate Trainee Program — For Companies That Want to Win',
  description:
    "Bridge designs and runs your graduate trainee program — from sourcing to training to deployment. We've been tracking top candidates since their undergraduate years.",
  alternates: { canonical: '/graduate-trainee' },
  openGraph: {
    url: `${SITE_CONFIG.author.url}/graduate-trainee`,
    title: 'Graduate Trainee Program — Bridge Global Talent Partners',
    description: 'We run your graduate program — properly. From sourcing to training to deployment.',
  },
};

function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Graduate Trainee Program',
    provider: { '@id': `${SITE_CONFIG.author.url}/#organization` },
    description: 'Bridge designs and runs graduate trainee programs — from sourcing and selection to structured training and deployment.',
    areaServed: { '@type': 'Place', name: 'Africa' },
    audience: { '@type': 'BusinessAudience', name: 'Companies operating in Africa' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function GraduateTraineePage() {
  return (
    <>
      <ServiceJsonLd />
      <Nav theme="dark" />
      <main id="main">
        <Hero
          size="standard"
          eyebrow="Graduate Trainee Program"
          title={
            <>
              For companies that want to <em className="not-italic text-gold">win.</em>
            </>
          }
          description="We run your graduate program — properly."
          primaryCta={{ label: 'Speak to Us', href: '/contact' }}
        />

        {/* PROOF */}
        <section className="bg-section-light section-y-tight border-b border-navy/8" aria-labelledby="gt-proof-heading">
          <div className="container-wide">
            <h2 id="gt-proof-heading" className="sr-only">Companies we&apos;ve worked with</h2>
            <ClientLogoBar variant="on-light" label="Worked with" />
          </div>
        </section>

        {/* CANDIDATE / PRESENTATION IMAGE GRID — placeholders for now */}
        <section className="bg-section-light pb-20" aria-label="Programme imagery">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: 'Cohort 04 induction', tone: 'navy' },
                { label: 'Case work session', tone: 'gold' },
                { label: 'Final presentation', tone: 'warm' },
                { label: 'Mentor review', tone: 'navy' },
              ].map((p, i) => (
                <div
                  key={i}
                  aria-hidden
                  className={[
                    'relative rounded-md overflow-hidden flex items-end p-4 aspect-[4/5]',
                    p.tone === 'navy' && 'bg-gradient-to-br from-navy-700 to-navy',
                    p.tone === 'gold' && 'bg-gradient-to-br from-gold to-gold-dark',
                    p.tone === 'warm' && 'bg-gradient-to-br from-cream-warm to-cream',
                  ].filter(Boolean).join(' ')}
                >
                  <span
                    className={[
                      'font-heading text-[10px] font-bold tracking-[0.2em] uppercase',
                      p.tone === 'warm' ? 'text-navy/40' : 'text-white/65',
                    ].join(' ')}
                  >
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-navy/50">
              Real photography from cohorts and presentations coming soon.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="bg-section-cream section-y" aria-labelledby="gt-what-heading">
          <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5">What We Do</p>
              <h2 id="gt-what-heading" className="section-title text-navy">
                We take it off your plate.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-navy/85 text-lg md:text-xl leading-[1.6] max-w-[55ch]">
                You don&apos;t have time to build talent systems. We design and run your graduate
                trainee program — from sourcing to training to deployment.
              </p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="bg-section-deep section-y" aria-labelledby="gt-why-heading">
          <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-light mb-5">Why Us</p>
              <h2 id="gt-why-heading" className="section-title text-white">
                We don&apos;t start at hiring.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-white/75 text-lg md:text-xl leading-[1.6] max-w-[55ch]">
                We&apos;ve been tracking top candidates since their undergraduate years — how they
                think, how they work, how they perform. By the time they enter your program, they
                are already tested.
              </p>
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="bg-section-light section-y" aria-labelledby="gt-case-heading">
          <div className="container-wide">
            <p className="eyebrow mb-5">Case Study</p>
            <h2 id="gt-case-heading" className="section-title text-navy mb-10 max-w-[26ch]">
              Starks Associates — we built their graduate pipeline from scratch.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7">
                <ol className="space-y-6">
                  {[
                    { num: '01', text: 'Designed the hiring and selection process.' },
                    { num: '02', text: 'Drew from our long-tracked candidate pool.' },
                    { num: '03', text: 'Structured training and desk rotations.' },
                    { num: '04', text: 'Evaluated performance under real conditions.' },
                  ].map((step) => (
                    <li key={step.num} className="flex gap-6 items-start pb-6 border-b border-navy/8">
                      <span className="font-heading text-[14px] font-bold text-gold tracking-[0.05em] pt-1.5 shrink-0">
                        {step.num}
                      </span>
                      <p className="font-heading text-xl md:text-2xl font-bold text-navy leading-[1.35] tracking-[-0.015em]">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-navy text-white rounded-md p-8 md:p-10 sticky top-24">
                  <p className="eyebrow eyebrow-light mb-5">Outcome</p>
                  <ul className="space-y-5">
                    <li>
                      <p className="font-heading text-lg font-bold text-gold mb-1">High-performing hires</p>
                      <p className="text-white/65 text-sm leading-[1.65]">From day one.</p>
                    </li>
                    <li>
                      <p className="font-heading text-lg font-bold text-gold mb-1">Reduced hiring risk</p>
                      <p className="text-white/65 text-sm leading-[1.65]">Tested candidates only.</p>
                    </li>
                    <li>
                      <p className="font-heading text-lg font-bold text-gold mb-1">A repeatable system</p>
                      <p className="text-white/65 text-sm leading-[1.65]">Year on year, cohort on cohort.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Build your next generation of talent properly."
          ctaLabel="Speak to Us"
          ctaHref="/contact"
          tone="ink"
        />
      </main>
      <Footer />
    </>
  );
}
