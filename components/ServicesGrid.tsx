import Link from 'next/link';

const SERVICES = [
  {
    href: '/executive-talent',
    label: 'Executive Talent',
    blurb: 'Hire leaders who can operate in Africa.',
    image: null as string | null,
  },
  {
    href: '/graduate-trainee',
    label: 'Graduate Trainee Program',
    blurb: 'We turn top graduates into professionals companies can rely on.',
    image: null as string | null,
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="bg-section-light section-y"
      aria-labelledby="services-heading"
    >
      <div className="container-wide">
        <p className="eyebrow mb-5">What We Do</p>
        <h2 id="services-heading" className="section-title text-navy mb-16 max-w-[20ch]">
          Two ways we partner with the companies serious about Africa.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative overflow-hidden rounded-md bg-navy text-white p-10 md:p-14 lg:p-16
                         min-h-[360px] md:min-h-[440px]
                         transition-all duration-500 ease-bridge
                         hover:bg-navy-700 hover:-translate-y-1 hover:shadow-elev-3
                         flex flex-col justify-between"
            >
              {/* Decorative corner number */}
              <div
                aria-hidden
                className="absolute top-6 right-8 font-heading text-[14px] font-bold tracking-[0.2em] text-gold"
              >
                0{i + 1} / 02
              </div>

              {/* Decorative gold rule */}
              <div aria-hidden className="gold-rule mb-8" />

              <div className="flex-1 flex flex-col justify-end">
                <h3 className="font-heading font-bold leading-[1.0] tracking-[-0.025em] mb-5"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                  {s.label}
                </h3>
                <p className="font-body font-light text-white/70 text-lg md:text-xl leading-[1.55] mb-10 max-w-[28ch]">
                  {s.blurb}
                </p>
                <span className="link-arrow text-gold group-hover:text-gold-light">
                  View Details
                  <span className="arrow" aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
