export function About() {
  return (
    <section id="about" className="bg-white" aria-labelledby="about-heading">
      <div className="section">
        <p className="eyebrow">Who We Are</p>
        <h2 id="about-heading" className="sr-only">
          Who we are
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-heading font-bold text-navy leading-[1.3] tracking-[-0.01em] mb-7" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              Bridge exists because the best talent in emerging markets is invisible to the
              companies that need it most.
            </p>
            <p className="text-base text-gray-500 leading-[1.8] mb-5">
              We are a premium executive search and talent development firm built specifically for
              Africa and emerging markets. We work on both sides of the equation — building deep
              talent pipelines through our GT Program, and placing exceptional leaders through
              retained search mandates.
            </p>
            <p className="text-base text-gray-500 leading-[1.8]">
              Our clients are companies serious about building in hard markets. Our candidates are
              professionals serious about reaching their potential. We are the bridge between them.
            </p>
          </div>

          <aside className="bg-navy rounded-lg p-8">
            <h3 className="font-heading text-lg font-bold text-white leading-[1.3] mb-3">
              Not a recruiter.
              <br />
              A talent partner.
            </h3>
            <p className="text-sm text-white/60 leading-[1.75] mt-4">
              Most executive search firms pull from a static database. Bridge builds its talent pool
              continuously through the GT Program — so when a mandate lands, the candidates are
              already assessed, already ranked, and already known to us.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
