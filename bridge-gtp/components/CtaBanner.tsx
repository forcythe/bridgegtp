import Link from 'next/link';

type CtaBannerProps = {
  /** Big closing line — e.g. "Build your next generation of talent properly." */
  title: string;
  /** Smaller follow-up — e.g. "Speak to Us." */
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Use ink (black) rather than navy for a stronger close */
  tone?: 'navy' | 'ink';
};

export function CtaBanner({
  title,
  subtitle,
  ctaLabel = 'Speak to Us',
  ctaHref = '/contact',
  tone = 'navy',
}: CtaBannerProps) {
  const bg = tone === 'ink' ? 'bg-section-ink' : 'bg-section-deep';
  return (
    <section className={`${bg} section-y-tight`} aria-labelledby="cta-banner-heading">
      <div className="container-wide text-center">
        <div className="gold-rule mx-auto mb-8" />
        <h2
          id="cta-banner-heading"
          className="font-heading font-bold text-white leading-[1.05] tracking-[-0.025em] mx-auto max-w-[26ch]"
          style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-white/65 text-lg md:text-xl">{subtitle}</p>
        )}
        <div className="mt-10 flex justify-center">
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
