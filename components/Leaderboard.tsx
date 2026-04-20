'use client';

import { useMemo, useState } from 'react';
import { PROFESSIONALS, FUNCTIONS, REGIONS, type Professional } from '@/lib/leaderboard-data';

type FnFilter = 'all' | Professional['fn'];
type RegionFilter = 'all' | Professional['region'];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p.replace('.', '').trim())
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function avatarClass(rank: number) {
  if (rank === 1) return 'bg-red';
  if (rank === 2) return 'bg-navy-mid';
  if (rank === 3) return 'bg-[#3a6fa0]';
  return 'bg-navy';
}

function rankBadgeClass(rank: number) {
  if (rank === 1) return 'bg-red text-white';
  if (rank <= 3) return 'bg-navy text-white';
  return 'bg-gray-100 text-navy';
}

function barClass(rank: number) {
  return rank <= 3 ? 'bg-red' : 'bg-navy';
}

export function Leaderboard() {
  const [fnFilter, setFnFilter] = useState<FnFilter>('all');
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('all');

  const ranked = useMemo(() => {
    return PROFESSIONALS
      .filter((p) => fnFilter === 'all' || p.fn === fnFilter)
      .filter((p) => regionFilter === 'all' || p.region === regionFilter)
      .sort((a, b) => b.score - a.score);
  }, [fnFilter, regionFilter]);

  return (
    <section id="leaderboard" className="bg-white" aria-labelledby="leaderboard-heading">
      <div className="section section-tight">
        <p className="eyebrow">Talent Pool</p>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-10">
          <div className="flex-1 min-w-[300px]">
            <h2 id="leaderboard-heading" className="section-title !mb-4">
              The standard set by performance.
            </h2>
            <p className="section-intro !mb-0">
              A live, ranked community of assessed professionals. Updated monthly. The best talent
              rises.
            </p>
          </div>
          <dl className="flex flex-wrap">
            {[
              { v: '340', unit: '+', k: 'Assessed' },
              { v: '14', unit: '', k: 'Markets' },
              { v: '4', unit: '', k: 'Cohorts' },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`px-5 md:px-7 ${i !== 2 ? 'border-r border-gray-300' : ''} ${
                  i === 0 ? 'pl-0' : ''
                } ${i === 2 ? 'pr-0' : ''}`}
              >
                <dd className="font-heading text-[30px] font-bold text-navy tracking-[-0.02em] leading-none mb-1.5">
                  {s.v}
                  {s.unit && <span className="text-base text-red font-semibold ml-0.5">{s.unit}</span>}
                </dd>
                <dt className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  {s.k}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-5">
          {/* Function tabs */}
          <div role="tablist" aria-label="Filter by function" className="flex gap-1 bg-gray-100 p-1 rounded-md overflow-x-auto">
            {(['all', ...FUNCTIONS] as const).map((f) => {
              const active = fnFilter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFnFilter(f)}
                  className={[
                    'font-heading text-xs font-semibold px-3.5 py-2 rounded transition-all duration-200 whitespace-nowrap',
                    active ? 'bg-white text-navy shadow-elev-1' : 'text-gray-500 hover:text-navy',
                  ].join(' ')}
                >
                  {f === 'all' ? 'All Functions' : f}
                </button>
              );
            })}
          </div>

          {/* Region filters */}
          <div role="group" aria-label="Filter by region" className="flex gap-2 flex-wrap">
            {(['all', ...REGIONS] as const).map((r) => {
              const active = regionFilter === r;
              return (
                <button
                  key={r}
                  onClick={() => setRegionFilter(r)}
                  className={[
                    'font-heading text-[11.5px] font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 tracking-[0.02em]',
                    active
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-gray-500 border-gray-300 hover:border-navy hover:text-navy',
                  ].join(' ')}
                >
                  {r === 'all' ? 'All Regions' : r}
                </button>
              );
            })}
          </div>
        </div>

        {/* TABLE — md+ */}
        <div className="hidden md:block bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <div
            role="row"
            className="grid grid-cols-[56px_1.5fr_1fr_0.9fr_0.7fr_120px] gap-3 px-6 py-3.5 bg-navy items-center"
          >
            {['Rank', 'Professional', 'Function', 'Region', 'Δ 30d', 'Score'].map((h, i) => (
              <div
                key={h}
                role="columnheader"
                className={`font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-white/45 ${
                  i === 5 ? 'text-right' : ''
                }`}
              >
                {h}
              </div>
            ))}
          </div>

          {ranked.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-sm">
              No professionals match these filters. Try a different combination.
            </div>
          ) : (
            ranked.map((p, i) => {
              const rank = i + 1;
              return (
                <div
                  key={p.handle}
                  role="row"
                  className={`grid grid-cols-[56px_1.5fr_1fr_0.9fr_0.7fr_120px] gap-3 px-6 py-4 border-b border-gray-100 last:border-b-0 items-center transition-colors hover:bg-gray-50/60 ${
                    rank % 2 === 1 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-sm font-bold ${rankBadgeClass(rank)}`}
                  >
                    {rank}
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-[38px] h-[38px] rounded-full ${avatarClass(rank)} text-white flex items-center justify-center font-heading text-xs font-bold shrink-0`}
                      aria-hidden
                    >
                      {initials(p.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-heading text-sm font-bold text-navy leading-tight truncate">
                        {p.name}
                      </div>
                      <div className="text-[11.5px] text-gray-500 mt-0.5">
                        {p.handle} · Cohort {p.cohort}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-[13px] font-semibold text-navy">{p.fn}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{p.spec}</div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 font-heading text-[11.5px] font-semibold text-navy px-2.5 py-1 rounded-full bg-gray-100 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-red">
                      {p.city}
                    </span>
                  </div>
                  <div>
                    <DeltaPill delta={p.delta} />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barClass(rank)}`}
                        style={{ width: `${p.score}%` }}
                      />
                    </div>
                    <span className="font-heading text-[13px] font-bold text-navy w-6 text-right">
                      {p.score}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* CARDS — mobile */}
        <div className="md:hidden flex flex-col gap-3">
          {ranked.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-sm bg-gray-50 rounded-lg">
              No professionals match these filters. Try a different combination.
            </div>
          ) : (
            ranked.map((p, i) => {
              const rank = i + 1;
              return (
                <article
                  key={p.handle}
                  className="bg-white rounded-lg border border-gray-100 p-4 shadow-elev-1"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-heading text-sm font-bold shrink-0 ${rankBadgeClass(rank)}`}
                    >
                      {rank}
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full ${avatarClass(rank)} text-white flex items-center justify-center font-heading text-xs font-bold shrink-0`}
                      aria-hidden
                    >
                      {initials(p.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading text-sm font-bold text-navy leading-tight">
                        {p.name}
                      </div>
                      <div className="text-[11.5px] text-gray-500 mt-0.5">
                        {p.handle} · Cohort {p.cohort}
                      </div>
                    </div>
                    <DeltaPill delta={p.delta} />
                  </div>
                  <div className="mb-3">
                    <div className="font-heading text-[13px] font-semibold text-navy">{p.fn}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{p.spec}</div>
                  </div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 font-heading text-[11.5px] font-semibold text-navy px-2.5 py-1 rounded-full bg-gray-100 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-red">
                      {p.city}
                    </span>
                    <span className="font-heading text-sm font-bold text-navy">
                      Score {p.score}
                    </span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${barClass(rank)}`}
                      style={{ width: `${p.score}%` }}
                    />
                  </div>
                </article>
              );
            })
          )}
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-4">
          <p className="text-xs text-gray-500 max-w-[62ch] leading-[1.7]">
            Names and scores shown are illustrative. The live leaderboard — with full profiles,
            assessments, and contact routes — is visible to partnered companies only.
          </p>
          <p className="inline-flex items-center gap-2 font-heading text-[11px] font-semibold text-gray-500 tracking-[0.02em]">
            <span
              aria-hidden
              className="w-1.5 h-1.5 rounded-full bg-[#2d7a4a] shadow-[0_0_0_3px_rgba(45,122,74,0.18)]"
            />
            Updated April 2026
          </p>
        </div>
      </div>
    </section>
  );
}

function DeltaPill({ delta }: { delta: number }) {
  if (delta === 0) {
    return <span className="font-heading text-xs font-bold text-gray-500 inline-flex items-center gap-1">—</span>;
  }
  const up = delta > 0;
  return (
    <span
      className={`font-heading text-xs font-bold inline-flex items-center gap-1 ${up ? 'text-[#2d7a4a]' : 'text-[#b8472b]'}`}
      aria-label={up ? `Up ${Math.abs(delta)} places` : `Down ${Math.abs(delta)} places`}
    >
      <span aria-hidden>{up ? '▲' : '▼'}</span>
      {Math.abs(delta)}
    </span>
  );
}
