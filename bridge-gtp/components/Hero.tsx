import Link from 'next/link';

type HeroProps = {
  /** Optional /public path to a hero background image (replaces the gradient) */
  bgImage?: string;
  eyebrow?: string;
  /** Use a string with `<em>...</em>` to highlight in red */
  title: React.ReactNode;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Render proof bar children below the CTAs */
  proof?: React.ReactNode;
  /** Vertical size; default is "tall" (homepage) */
  size?: 'tall' | 'standard';
};

export function Hero({
  bgImage,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  proof,
  size = 'tall',
}: HeroProps) {
  return (
    <section
      className={[
        'relative overflow-hidden bg-navy-800 text-white',
        size === 'tall' ? 'min-h-[92vh]' : 'min-h-[70vh]',
        'flex items-center pt-[72px]',
      ].join(' ')}
      aria-labelledby="hero-heading"
    >
      {/* Background image (Ken Burns subtle zoom) or gradient fallback */}
      {bgImage ? (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center animate-kenBurns"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div aria-hidden className="absolute inset-0 hero-overlay-dark" />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #040818 0%, #070E26 35%, #0A1538 70%, #0D1B4B 100%)',
            }}
          />
          {/* Diagonal grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-[0.5]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 60px)',
            }}
          />
          <div
            aria-hidden
            className="absolute -right-[280px] -top-[200px] w-[800px] h-[800px] rounded-full hero-glow-gold pointer-events-none"
          />
        </>
      )}

      <div className="container-wide relative z-10 py-20 md:py-28 w-full">
        {eyebrow && (
          <p className="eyebrow eyebrow-light mb-6">
            {eyebrow}
          </p>
        )}
        <h1
          id="hero-heading"
          className="display-title text-white mb-6 max-w-[18ch]"
        >
          {title}
        </h1>
        {description && (
          <p className="font-body font-light text-white/75 leading-[1.7] max-w-[42ch] mb-10 text-lg md:text-xl">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4 mb-12">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-ghost-light">
                {secondaryCta.label}
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        )}
        {proof && <div className="mt-2">{proof}</div>}
      </div>
    </section>
  );
}
