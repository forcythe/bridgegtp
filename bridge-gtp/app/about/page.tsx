import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { CtaBanner } from '@/components/CtaBanner';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Bridge — Your Talent Partner in Africa',
  description:
    'Bridge exists because most companies misunderstand how talent works in Africa. We are on the ground. We know who can operate. We are your talent partner.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Nav theme="dark" />
      <main id="main">
        <Hero
          size="standard"
          eyebrow="About"
          title={
            <>
              We are your <em className="not-italic text-gold">talent partner.</em>
            </>
          }
          description="Bridge exists because most companies misunderstand how talent works in Africa."
        />

        <section className="bg-section-cream section-y" aria-labelledby="about-thesis">
          <div className="container-wide max-w-3xl">
            <h2 id="about-thesis" className="sr-only">Our thesis</h2>

            <div className="space-y-5 mb-12">
              {[
                'They hire on resumes.',
                'They assume experience translates.',
                'They get it wrong.',
              ].map((line) => (
                <p
                  key={line}
                  className="font-heading font-bold text-navy/70 leading-[1.3]"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}
                >
                  {line}
                </p>
              ))}
              <p
                className="font-heading font-bold text-red leading-[1.3] pt-3"
                style={{ fontSize: 'clamp(26px, 2.8vw, 38px)' }}
              >
                We don&apos;t.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6 space-y-4 mb-12">
              {[
                'We are on the ground.',
                'We know how these markets actually work.',
                'We know who can operate.',
                'We build operators into leaders.',
              ].map((line) => (
                <p key={line} className="font-body text-navy/85 leading-[1.5] text-xl md:text-2xl">
                  {line}
                </p>
              ))}
              <p className="font-heading font-bold text-navy text-2xl md:text-3xl pt-3">
                We are your talent partner.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-section-deep section-y" aria-labelledby="about-markets">
          <div className="container-wide">
            <p className="eyebrow eyebrow-light mb-5">Where We Work</p>
            <h2
              id="about-markets"
              className="font-heading font-bold text-white leading-[1.08] tracking-[-0.02em] mb-10 max-w-[20ch]"
              style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}
            >
              Across the markets that matter.
            </h2>
            <div className="flex flex-wrap gap-3">
              {SITE_CONFIG.markets.map((m) => (
                <span
                  key={m}
                  className="px-5 py-3 border border-white/15 rounded-sm font-heading font-bold text-white/90 text-sm md:text-base tracking-[0.02em]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Looking to hire in Africa?"
          ctaLabel="Speak to Us"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
