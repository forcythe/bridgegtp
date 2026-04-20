const OFFERINGS = [
  {
    num: '01',
    title: 'Executive Search',
    body:
      'Retained search for senior and C-suite talent across all business functions. We specialise in mandates that require genuine market knowledge — roles in markets where the right person is not on a job board.',
    pills: ['C-Suite', 'Directors', 'All Functions', 'Retained'],
  },
  {
    num: '02',
    title: 'GT Program',
    body:
      'A structured training and assessment program for high-potential professionals. Participants are assessed across technical and strategic competencies, ranked on the leaderboard, and positioned for the right opportunities.',
    pills: ['Finance', 'Strategy', 'Operations', 'Technology'],
  },
  {
    num: '03',
    title: 'Talent Pool & Leaderboard',
    body:
      'A curated, continuously scored network of professionals across Africa and emerging markets. The leaderboard is live and updated monthly. The best talent rises — and stays visible to the companies that matter.',
    pills: ['Scored', 'Verified', 'Live Ranking', 'Multi-Market'],
  },
];

export function Offerings() {
  return (
    <section id="services" className="bg-gray-50" aria-labelledby="services-heading">
      <div className="section">
        <p className="eyebrow">Three Offerings. One Ecosystem.</p>
        <h2 id="services-heading" className="section-title">
          Each service reinforces the others.
        </h2>
        <p className="section-intro">
          Executive search is powered by our talent pool. The talent pool is built through the GT
          Program. The leaderboard keeps the standard honest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {OFFERINGS.map((o) => (
            <article
              key={o.num}
              className="group p-9 rounded-lg bg-white shadow-elev-2 border border-transparent transition-all duration-200 hover:shadow-elev-3 hover:-translate-y-1 hover:border-red/10"
            >
              <div className="flex items-center gap-2 mb-5">
                <span aria-hidden className="block w-5 h-[1.5px] bg-red" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-red">
                  {o.num}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-navy leading-[1.25] mb-3.5 tracking-[-0.015em]">
                {o.title}
              </h3>
              <p className="text-sm text-gray-500 leading-[1.75] mb-5">{o.body}</p>
              <div className="flex flex-wrap gap-2">
                {o.pills.map((p) => (
                  <span key={p} className="pill">
                    {p}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
