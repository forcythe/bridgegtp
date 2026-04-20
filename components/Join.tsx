'use client';

import { useState, type FormEvent } from 'react';

type TrackKey = 'gt' | 'exec' | 'company';

const TRACKS: Array<{ key: TrackKey; label: string; desc: string }> = [
  {
    key: 'gt',
    label: 'GT Program — All Levels',
    desc: 'For professionals at any stage who want to be assessed, developed, and placed into the right roles.',
  },
  {
    key: 'exec',
    label: 'Executive Track — Senior Leaders',
    desc: 'For directors, CFOs, and C-suite leaders selectively open to new opportunities. Discreet.',
  },
  {
    key: 'company',
    label: 'Companies',
    desc: 'Retained executive search and access to our assessed talent pool. For organisations serious about building in Africa and emerging markets.',
  },
];

export function Join() {
  const [track, setTrack] = useState<TrackKey | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, POST to your handler here.
    setSent(true);
  }

  return (
    <section id="join" className="bg-black text-white" aria-labelledby="join-heading">
      <div className="section section-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="eyebrow eyebrow-white">Get in Touch</p>
            <h2
              id="join-heading"
              className="font-heading font-bold text-white leading-[1.12] tracking-[-0.02em] mb-4"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              Whether you&apos;re hiring
              <br />
              or ready to be found.
            </h2>
            <p className="text-[17px] text-white/60 leading-[1.75] max-w-[42ch]">
              Tell us who you are and what you&apos;re looking for. We review every submission
              personally. If we think there&apos;s a fit — we&apos;ll be in touch.
            </p>

            <div className="mt-10">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-white/30 mb-4">
                Select a Track
              </p>
              <ul className="flex flex-col gap-3">
                {TRACKS.map((t) => {
                  const selected = track === t.key;
                  return (
                    <li key={t.key}>
                      <button
                        type="button"
                        onClick={() => setTrack(t.key)}
                        aria-pressed={selected}
                        className={[
                          'w-full text-left rounded-md px-5 py-4 transition-all duration-200',
                          'bg-white/[0.04] hover:bg-white/[0.08]',
                          selected
                            ? 'border-[1.5px] border-red'
                            : 'border-[1.5px] border-white/[0.08] hover:border-white/[0.2]',
                        ].join(' ')}
                      >
                        <div className="font-heading text-[13px] font-bold text-white mb-1">
                          {t.label}
                        </div>
                        <div className="text-xs text-white/50 leading-[1.6]">{t.desc}</div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div>
            {sent ? (
              <div
                role="status"
                aria-live="polite"
                className="bg-white/[0.05] border border-white/10 rounded-lg p-12 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-red/15 flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E53935"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  Submission received.
                </h3>
                <p className="text-[15px] text-white/50 leading-[1.7]">
                  We review every submission personally. If there&apos;s a fit — you&apos;ll hear
                  from us.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="form-select">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-0">
                  <div>
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      inputMode="text"
                      placeholder="Amara"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      inputMode="text"
                      placeholder="Mensah"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="amara@company.com"
                    required
                    className="form-input"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="organisation" className="form-label">
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    placeholder="e.g. Acme Corp"
                    className="form-input"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    defaultValue=""
                    className="form-input form-select appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 opacity=%220.5%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[length:16px] pr-10"
                    style={{ backgroundPosition: 'right 14px center' }}
                  >
                    <option value="" disabled>
                      Select your role…
                    </option>
                    <optgroup label="C-Suite">
                      <option>Chief Executive Officer (CEO)</option>
                      <option>Chief Financial Officer (CFO)</option>
                      <option>Chief Operating Officer (COO)</option>
                      <option>Chief Technology Officer (CTO)</option>
                      <option>Chief People Officer (CPO)</option>
                      <option>Chief Marketing Officer (CMO)</option>
                    </optgroup>
                    <optgroup label="Director / VP">
                      <option>Managing Director</option>
                      <option>Finance Director</option>
                      <option>Operations Director</option>
                      <option>Technology Director</option>
                      <option>HR Director</option>
                      <option>VP of Finance</option>
                      <option>VP of Engineering</option>
                      <option>VP of Strategy</option>
                    </optgroup>
                    <optgroup label="Senior Manager">
                      <option>Senior Manager — Finance</option>
                      <option>Senior Manager — Operations</option>
                      <option>Senior Manager — Technology</option>
                      <option>Senior Manager — Strategy</option>
                    </optgroup>
                    <optgroup label="Manager / Professional">
                      <option>Finance Manager</option>
                      <option>Financial Analyst</option>
                      <option>Strategy Consultant</option>
                      <option>Operations Manager</option>
                      <option>Software Engineer</option>
                      <option>Product Manager</option>
                      <option>Data Analyst / Scientist</option>
                    </optgroup>
                    <optgroup label="Other">
                      <option>Board Member / Non-Executive Director</option>
                      <option>Founder / Entrepreneur</option>
                      <option>Other</option>
                    </optgroup>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="region" className="form-label">
                    Market / Region
                  </label>
                  <input
                    id="region"
                    name="region"
                    type="text"
                    autoComplete="address-level1"
                    placeholder="e.g. West Africa, East Africa, MENA…"
                    className="form-input"
                  />
                </div>
                <button type="submit" className="btn-primary w-full mt-6">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
