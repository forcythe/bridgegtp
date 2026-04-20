const STEPS = [
  {
    num: '01',
    title: 'Application & Initial Assessment',
    body: 'Candidates apply and complete a structured assessment covering technical and strategic competencies relevant to their function.',
    active: true,
  },
  {
    num: '02',
    title: 'Development Journey',
    body: 'Selected professionals enter a structured development curriculum — case work, feedback sessions, and live project assignments.',
    active: true,
  },
  {
    num: '03',
    title: 'Ranking & Leaderboard',
    body: 'Performance is continuously scored. The leaderboard reflects real capability — updated monthly, visible to partnered companies.',
    active: true,
  },
  {
    num: '04',
    title: 'Placement',
    body: "When the right mandate arrives, you're already known, assessed, and ready. No cold applications. A call.",
    active: false,
  },
];

export function GTProgram() {
  return (
    <section id="gt-program" className="bg-gray-50" aria-labelledby="gt-heading">
      <div className="section">
        <p className="eyebrow">The GT Program</p>
        <h2 id="gt-heading" className="section-title">
          Develop the talent.
          <br />
          Before the search begins.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-base text-gray-500 leading-[1.8] mb-8">
              The GT (Global Talent) Program is Bridge&apos;s structured talent development track. It
              takes high-potential professionals through a rigorous assessment and development
              journey — producing market-ready talent that companies can trust and candidates can be
              proud of.
            </p>

            {/* Progress rail with dots */}
            <ol className="relative pl-7">
              {/* Vertical rail line, clipped to dot range */}
              <span
                aria-hidden
                className="absolute left-[5px] top-[30px] bottom-[30px] w-px bg-gray-300"
              />

              {STEPS.map((s, i) => (
                <li
                  key={s.num}
                  className={`relative flex gap-5 py-6 ${
                    i < STEPS.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  {/* Dot */}
                  <span
                    aria-hidden
                    className={[
                      'absolute -left-7 top-[30px] w-[11px] h-[11px] rounded-full bg-white border-2 transition-all duration-200',
                      s.active
                        ? 'border-red bg-red shadow-[0_0_0_5px_rgba(229,57,53,0.12)]'
                        : 'border-gray-300',
                    ].join(' ')}
                  />
                  <span className="font-heading text-[13px] font-bold text-red w-7 shrink-0 mt-0.5">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-[15px] font-bold text-navy mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-[1.7]">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-8 border-l-[3px] border-red bg-white shadow-elev-1">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-red mb-2.5">
                Free for candidates
              </p>
              <p className="font-heading text-[17px] font-bold text-navy leading-[1.4]">
                The GT Program is free for candidates. Bridge is retained by the companies that hire
                through us. Your development costs you nothing except effort — which is exactly the
                kind of filter we want.
              </p>
            </div>

            <div className="mt-6 bg-white rounded-lg p-7 shadow-elev-1">
              <h3 className="font-heading text-[13px] font-bold text-navy mb-4">
                Who It&apos;s For
              </h3>
              <div className="pb-3.5 mb-3.5 border-b border-gray-100">
                <p className="font-heading text-[12px] font-bold text-red mb-1">GT Program</p>
                <p className="text-[13px] text-gray-500 leading-[1.65]">
                  Professionals at any stage who want to be assessed, developed, and placed into the
                  right roles.
                </p>
              </div>
              <div>
                <p className="font-heading text-[12px] font-bold text-red mb-1">Executive Track</p>
                <p className="text-[13px] text-gray-500 leading-[1.65]">
                  Directors, CFOs, and C-suite leaders selectively open to new opportunities.
                  Discreet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
