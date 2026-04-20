import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="absolute inset-0 hero-grid-bg pointer-events-none" />
      <div
        aria-hidden
        className="absolute -right-[200px] -top-[200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none"
      />

      <div className="relative z-10 max-w-container mx-auto w-full px-6 md:px-12 py-20 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span aria-hidden className="block w-8 h-px bg-white/25" />
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
            Executive Search · GT Program · Talent Pool · Africa &amp; Emerging Markets
          </p>
        </div>

        <h1
          id="hero-heading"
          className="font-heading font-bold text-white leading-[1.06] tracking-[-0.025em] max-w-[820px] mb-7"
          style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}
        >
          Your talent partner in
          <br />
          <em className="not-italic text-red-light">markets that matter.</em>
        </h1>

        <p className="font-body font-light text-white/60 leading-[1.8] max-w-[580px] mb-12 text-base md:text-lg">
          Bridge Global Talent Partners connects world-class organisations with exceptional talent
          across Africa and emerging markets — through retained executive search, a structured
          global talent program, and a curated, assessed talent pool.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="#join" className="btn-primary">
            Join the Talent Pool
          </Link>
          <Link href="#about" className="btn-ghost">
            For Companies <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              href: '#services',
              tag: 'Executive Search',
              title: 'Retained. Rigorous. Discreet.',
              body:
                "Specialised search for senior and C-suite roles in markets where talent is genuinely hard to find. We go deep where others won't.",
            },
            {
              href: '#gt-program',
              tag: 'GT Program',
              title: 'Global Talent. Developed.',
              body:
                'A structured training and assessment program that identifies, develops, and certifies outstanding professionals across every function.',
            },
            {
              href: '#leaderboard',
              tag: 'Talent Pool',
              title: 'The standard set by performance.',
              body:
                'A live, ranked community of assessed talent. Candidates are scored, verified, and ready when the right opportunity arrives.',
            },
          ].map((c) => (
            <Link
              key={c.tag}
              href={c.href}
              className="group p-7 rounded-lg bg-white/[0.05] border border-white/[0.08] transition-all duration-200 hover:bg-white/[0.08] hover:border-red/30"
            >
              <div className="font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-red-light mb-2.5">
                {c.tag}
              </div>
              <div className="font-heading text-base font-bold text-white leading-snug mb-2">
                {c.title}
              </div>
              <div className="text-[13px] text-white/50 leading-[1.65]">{c.body}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
