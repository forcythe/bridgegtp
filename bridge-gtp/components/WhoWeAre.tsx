/**
 * BLOCK 3 — Who We Are
 * Per the brief, this is the editorial heart of the homepage.
 * Big, breathing typography. Image grid alongside.
 */
export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="bg-section-cream section-y"
      aria-labelledby="who-heading"
    >
      <div className="container-wide">
        <p className="eyebrow mb-6">Who We Are</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Editorial column */}
          <div className="lg:col-span-7">
            <h2
              id="who-heading"
              className="font-heading font-bold text-navy leading-[1.08] tracking-[-0.025em] mb-10"
              style={{ fontSize: 'clamp(28px, 3.4vw, 46px)' }}
            >
              Bridge exists because most companies misunderstand how talent works in Africa.
            </h2>

            {/* The "wrong / right" rhythm */}
            <div className="space-y-5 mb-12">
              {[
                { emphasis: 'They hire on resumes.', muted: false },
                { emphasis: 'They assume experience translates.', muted: false },
                { emphasis: 'They get it wrong.', muted: false },
              ].map((line) => (
                <p
                  key={line.emphasis}
                  className="font-heading font-bold text-navy/70 leading-[1.3]"
                  style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}
                >
                  {line.emphasis}
                </p>
              ))}

              <p
                className="font-heading font-bold text-red leading-[1.3] pt-2"
                style={{ fontSize: 'clamp(22px, 2.4vw, 34px)' }}
              >
                We don&apos;t.
              </p>
            </div>

            {/* The "we" rhythm */}
            <div className="space-y-3 max-w-[42ch] border-l-2 border-gold pl-6">
              {[
                'We are on the ground.',
                'We know how these markets actually work.',
                'We know who can operate.',
                'We build operators into leaders.',
              ].map((line) => (
                <p
                  key={line}
                  className="font-body text-navy/85 leading-[1.5] text-lg md:text-xl"
                >
                  {line}
                </p>
              ))}
              <p className="font-heading font-bold text-navy text-xl md:text-2xl pt-3">
                We are your talent partner.
              </p>
            </div>
          </div>

          {/* Image collage column */}
          <div className="lg:col-span-5 lg:pt-12">
            <div className="grid grid-cols-2 gap-4">
              {/* Image placeholders. Once the user sends the Drive folder these become real <Image> components. */}
              <ImagePlaceholder ratio="3/4" label="Candidate session" tone="navy" />
              <ImagePlaceholder ratio="3/4" label="Leadership talk" tone="gold" className="mt-12" />
              <ImagePlaceholder ratio="4/5" label="Cohort meeting" tone="warm" />
              <ImagePlaceholder ratio="4/5" label="On the ground" tone="navy" className="mt-12" />
            </div>
            <p className="mt-6 text-xs text-navy/50 leading-relaxed">
              Real photography from cohorts, presentations, and client engagements coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Placeholder component for not-yet-uploaded photography.
 * Once images are in /public/photos/ these get replaced with <Image> calls.
 */
function ImagePlaceholder({
  ratio = '4/5',
  label,
  tone = 'navy',
  className = '',
}: {
  ratio?: string;
  label: string;
  tone?: 'navy' | 'gold' | 'warm';
  className?: string;
}) {
  const palettes: Record<string, string> = {
    navy: 'from-navy-700 to-navy',
    gold: 'from-gold to-gold-dark',
    warm: 'from-cream-warm to-cream',
  };
  const textColor = tone === 'warm' ? 'text-navy/40' : 'text-white/60';
  return (
    <div
      className={[
        `relative rounded-md overflow-hidden bg-gradient-to-br ${palettes[tone]}`,
        'flex items-end p-4',
        className,
      ].join(' ')}
      style={{ aspectRatio: ratio }}
      aria-hidden
    >
      <span className={`font-heading text-[10px] font-bold tracking-[0.2em] uppercase ${textColor}`}>
        {label}
      </span>
    </div>
  );
}
