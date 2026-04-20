import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Executive Search', href: '#services' },
      { label: 'GT Program', href: '#gt-program' },
      { label: 'Talent Pool', href: '#leaderboard' },
      { label: 'Leaderboard', href: '#leaderboard' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'For Companies', href: '#about' },
      { label: 'For Candidates', href: '#gt-program' },
      { label: 'Contact', href: '#join' },
    ],
  },
  {
    title: 'Markets',
    links: [
      { label: 'West Africa', href: '#' },
      { label: 'East Africa', href: '#' },
      { label: 'Southern Africa', href: '#' },
      { label: 'North Africa', href: '#' },
      { label: 'MENA', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-dark" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      {/* Watermark logo — decorative */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none opacity-[0.07]">
        <Image
          src="/assets/logos/logo-red-white-cropped.svg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 pb-11 border-b border-white/[0.07] mb-7">
          <div>
            <Image
              src="/assets/logos/logo-red-white-refined-cropped.svg"
              alt={SITE_CONFIG.name}
              width={160}
              height={44}
              className="h-11 w-auto mb-4"
            />
            <p className="text-[13px] text-white/40 leading-[1.75] max-w-[280px]">
              {SITE_CONFIG.shortDescription}
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-white/30 mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-white/55 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 flex-wrap">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/privacy"
                className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
