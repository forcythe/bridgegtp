'use client';

import { useState, type FormEvent } from 'react';

type Interest = 'executive' | 'graduate' | 'other';

const INTERESTS: { value: Interest; label: string; desc: string }[] = [
  { value: 'executive', label: 'Hiring senior leadership', desc: 'Country managers, CFOs, leadership teams.' },
  { value: 'graduate',  label: 'Running a graduate program', desc: 'We design and run it end to end.' },
  { value: 'other',     label: 'Something else', desc: 'Press, partnerships, general enquiries.' },
];

export function ContactForm() {
  const [interest, setInterest] = useState<Interest>('executive');
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire to a real handler (Formspree / your API) when ready.
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" aria-live="polite" className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="font-heading text-3xl font-bold text-white mb-3">Thanks — message received.</h2>
        <p className="text-white/65 text-lg leading-[1.65] max-w-[34ch] mx-auto">
          We read every message personally. We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <fieldset className="mb-8">
        <legend className="form-label !mb-4">What can we help with?</legend>
        <div className="space-y-2">
          {INTERESTS.map((i) => {
            const selected = interest === i.value;
            return (
              <label
                key={i.value}
                className={[
                  'block cursor-pointer rounded-sm px-5 py-4 transition-all',
                  'bg-white/[0.04] hover:bg-white/[0.07]',
                  selected ? 'border-[1.5px] border-gold' : 'border-[1.5px] border-white/[0.1]',
                ].join(' ')}
              >
                <input
                  type="radio"
                  name="interest"
                  value={i.value}
                  checked={selected}
                  onChange={() => setInterest(i.value)}
                  className="sr-only"
                />
                <div className="font-heading text-[14px] font-bold text-white mb-1">{i.label}</div>
                <div className="text-xs text-white/50 leading-[1.6]">{i.desc}</div>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input id="firstName" name="firstName" type="text" autoComplete="given-name" required className="form-input" />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input id="lastName" name="lastName" type="text" autoComplete="family-name" required className="form-input" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required className="form-input" />
      </div>

      <div className="mb-4">
        <label htmlFor="organisation" className="form-label">Organisation</label>
        <input id="organisation" name="organisation" type="text" autoComplete="organization" className="form-input" />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="form-label">Tell us briefly what you&apos;re looking for</label>
        <textarea id="message" name="message" rows={4} className="form-input resize-y" />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>

      <p className="mt-5 text-xs text-white/40 text-center">
        We respond within 48 hours. By submitting, you agree to our privacy notice.
      </p>
    </form>
  );
}
