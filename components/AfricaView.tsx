import { SITE_CONFIG } from '@/lib/site-config';

export function AfricaView() {
  return (
    <section className="bg-section-deep section-y-tight" aria-labelledby="africa-view-heading">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex-1 max-w-[60ch]">
            <p className="eyebrow eyebrow-light mb-5">Our View on Africa</p>
            <h2
              id="africa-view-heading"
              className="font-heading font-bold text-white leading-[1.08] tracking-[-0.02em] mb-5"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              We study the markets we operate in.
            </h2>
            <p className="text-white/65 text-lg leading-[1.65] max-w-[52ch]">
              Our work is grounded in how Africa actually works — history, business, and systems.
            </p>
          </div>
          <a
            href={SITE_CONFIG.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow text-gold hover:text-gold-light shrink-0 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
            </svg>
            Watch on YouTube
            <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
