import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Executive Talent', href: '/executive-talent' },
      { label: 'Graduate Trainee', href: '/graduate-trainee' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Insights', href: '/blog' },
      { label: 'Speak to Us', href: '/contact' },
    ],
  },
];

const SOCIAL = [
  { label: 'LinkedIn', href: SITE_CONFIG.social.linkedin, icon: 'linkedin' as const },
  { label: 'YouTube', href: SITE_CONFIG.social.youtube, icon: 'youtube' as const },
  { label: 'Instagram', href: SITE_CONFIG.social.instagram, icon: 'instagram' as const },
  { label: 'TikTok', href: SITE_CONFIG.social.tiktok, icon: 'tiktok' as const },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>

      {/* Watermark logo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none opacity-[0.05]">
        <Image
          src="/assets/logos/logo-red-white-cropped.svg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-12 pb-12 border-b border-white/[0.07] mb-7">
          {/* Brand */}
          <div>
            <Image
              src="/assets/logos/logo-red-white-refined-cropped.svg"
              alt={SITE_CONFIG.name}
              width={170}
              height={48}
              className="h-12 w-auto mb-5"
            />
            <p className="text-[14px] text-white/45 leading-[1.7] max-w-[300px] mb-6">
              {SITE_CONFIG.shortDescription}
            </p>
            <div className="gold-rule" />
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-5">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-white/60 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-5">
              Follow
            </h3>
            <ul className="flex flex-wrap gap-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/65 hover:text-white hover:border-white/45 hover:bg-white/[0.04] transition-all"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="inline-block mt-6 text-[14px] text-white/60 hover:text-white transition-colors"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 flex-wrap">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li><Link href="/privacy" className="text-xs text-white/30 hover:text-white/70 transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="text-xs text-white/30 hover:text-white/70 transition-colors">Terms</Link></li>
            <li><Link href="/cookies" className="text-xs text-white/30 hover:text-white/70 transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: 'linkedin' | 'youtube' | 'instagram' | 'tiktok' }) {
  const common = { width: 16, height: 16, fill: 'currentColor', 'aria-hidden': true };
  switch (name) {
    case 'linkedin':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.18 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.18 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.85 5.85 0 00-2.13 1.38A5.85 5.85 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.73 1.48 1.38 2.13.65.65 1.33 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.85 5.85 0 002.13-1.38 5.85 5.85 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.85 5.85 0 00-1.38-2.13A5.85 5.85 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.84a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M19.6 6.7a5.7 5.7 0 01-3.3-1V16a6.5 6.5 0 11-5.7-6.5v2.7a3.8 3.8 0 103 3.7V0h2.7a5.6 5.6 0 003.3 5v1.7z"/>
        </svg>
      );
  }
}
