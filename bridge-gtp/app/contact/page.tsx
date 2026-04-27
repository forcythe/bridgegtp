import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Speak to Us — Bridge Global Talent Partners',
  description:
    'Talk to Bridge about hiring senior leadership in Africa, or running a graduate trainee program for your company.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main" className="bg-section-cream">
        <section className="container-wide section-y" aria-labelledby="contact-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="eyebrow eyebrow-red mb-5">Speak to Us</p>
              <h1
                id="contact-heading"
                className="font-heading font-bold text-navy leading-[1.05] tracking-[-0.025em] mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                Tell us who you are.
              </h1>
              <p className="text-navy/75 text-lg md:text-xl leading-[1.65] mb-10 max-w-[42ch]">
                We work with a small number of companies on a retained basis. Tell us what you&apos;re
                trying to build and we&apos;ll be in touch within 48 hours.
              </p>
              <div className="space-y-3 pt-6 border-t border-navy/10">
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Or email us directly
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="font-heading text-xl md:text-2xl font-bold text-navy hover:text-red transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-navy text-white rounded-md p-8 md:p-12 shadow-elev-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
