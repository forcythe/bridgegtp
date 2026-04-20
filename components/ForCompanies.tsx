const POINTS = [
  {
    num: '01',
    title: 'Retained Mandate',
    body: 'We take on your search exclusively, commit a dedicated team, and deliver a shortlist of three to five thoroughly assessed candidates. No contingency. No noise.',
  },
  {
    num: '02',
    title: 'GT Pool Access',
    body: 'Companies working with Bridge get direct access to our assessed talent pool and leaderboard — a pipeline of professionals who have already been through rigorous development.',
  },
  {
    num: '03',
    title: 'Market Intelligence',
    body: 'We know these markets. Compensation benchmarks, talent density by function, competitive landscape — we bring context, not just candidates.',
  },
];

export function ForCompanies() {
  return (
    <section className="bg-navy text-white" aria-labelledby="companies-heading">
      <div className="section">
        <p className="eyebrow eyebrow-white">For Companies</p>
        <h2 id="companies-heading" className="section-title !text-white">
          You don&apos;t need more CVs.
          <br />
          You need the right person.
        </h2>
        <p className="section-intro !text-white/60">
          We work with a small number of companies at any one time on a retained basis. If you are
          building seriously in Africa or an emerging market and need senior talent — talk to us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POINTS.map((p) => (
            <article
              key={p.num}
              className="p-8 rounded-lg bg-white/[0.05] border border-white/[0.08]"
            >
              <div className="font-heading text-[32px] font-extrabold text-white/[0.08] leading-none mb-4 tracking-[-0.02em]">
                {p.num}
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2.5">{p.title}</h3>
              <p className="text-sm text-white/50 leading-[1.75]">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
