import Image from 'next/image';
import { CLIENTS_WITH_LOGOS } from '@/lib/clients';

type ClientLogoBarProps = {
  label?: string;
  /** Light = inline on dark hero (white text). Dark = on light section. */
  variant?: 'on-dark' | 'on-light';
  /** Duplicate logos for an infinite-scroll marquee effect. */
  marquee?: boolean;
};

export function ClientLogoBar({
  label = 'Trusted by',
  variant = 'on-dark',
  marquee = false,
}: ClientLogoBarProps) {
  const onDark = variant === 'on-dark';
  const labelClass = onDark ? 'text-white/45' : 'text-navy/55';
  const dividerClass = onDark ? 'bg-white/15' : 'bg-navy/10';
  // Logo rendering — most uploaded files are designed for light backgrounds.
  // On dark, we apply a brightness/invert filter as a fallback so they read.
  const logoFilter = onDark ? 'brightness-0 invert opacity-70 hover:opacity-100' : 'opacity-65 hover:opacity-100';

  return (
    <div className="relative">
      <div className={`flex items-center gap-3 mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.2em] ${labelClass}`}>
        <span>{label}</span>
        <span aria-hidden className={`flex-1 max-w-[80px] h-px ${dividerClass}`} />
      </div>

      {marquee ? (
        // Infinite-scroll marquee: list rendered twice for seamless loop
        <div className="overflow-hidden">
          <div className="flex gap-12 md:gap-16 animate-marquee w-max">
            {[...CLIENTS_WITH_LOGOS, ...CLIENTS_WITH_LOGOS].map((c, i) => (
              <a
                key={`${c.slug}-${i}`}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.name}
                className={`flex items-center justify-center transition-all duration-300 ${logoFilter}`}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={140}
                  height={40}
                  className="h-9 md:h-10 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      ) : (
        // Static row
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-6 md:gap-x-14">
          {CLIENTS_WITH_LOGOS.map((c) => (
            <li key={c.slug}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.name}
                className={`flex items-center transition-all duration-300 ${logoFilter}`}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={140}
                  height={40}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
