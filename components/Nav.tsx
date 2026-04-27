'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/executive-talent', label: 'Executive Talent' },
  { href: '/graduate-trainee', label: 'Graduate Trainee' },
  { href: '/blog', label: 'Insights' },
] as const;

type NavTheme = 'light' | 'dark';

export function Nav({ theme = 'light' }: { theme?: NavTheme }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Mobile menu side-effects: scroll lock + Escape + focus
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstMobileLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Theme-aware classes
  const isDark = theme === 'dark' && !scrolled;
  const navBg = isDark
    ? 'bg-transparent border-transparent'
    : scrolled
    ? 'bg-cream/95 backdrop-blur-md border-navy/10 shadow-elev-1'
    : 'bg-cream border-transparent';
  const linkColor = isDark ? 'text-white/85 hover:text-white' : 'text-navy hover:text-red';
  const logoSrc = isDark
    ? '/assets/logos/logo-red-white-refined-cropped.svg'
    : '/assets/logos/logo-navy-red-cropped.svg';
  const burgerColor = isDark ? 'bg-white' : 'bg-navy';

  return (
    <>
      <nav
        aria-label="Primary"
        className={[
          'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
          navBg,
        ].join(' ')}
      >
        <div className="container-wide h-[72px] flex items-center justify-between">
          <Link href="/" aria-label="Bridge Global Talent Partners — Home" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Bridge Global Talent Partners"
              width={140}
              height={40}
              priority
              className="h-9 md:h-10 w-auto"
            />
          </Link>

          <ul className="hidden md:flex gap-8 items-center">
            {LINKS.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + '/');
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'relative py-1.5 font-heading text-[13px] font-bold tracking-[0.04em] transition-colors duration-200',
                      linkColor,
                      'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0',
                      'after:h-[2px] after:bg-red after:origin-left after:transition-transform after:duration-200',
                      active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                    ].join(' ')}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/contact" className="btn-primary !py-3 !px-6 !text-[13px]">
                Speak to Us
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px] rounded-sm hover:bg-navy/5 transition-colors"
          >
            <span className={`block w-5 h-[2px] ${burgerColor}`} aria-hidden />
            <span className={`block w-5 h-[2px] ${burgerColor}`} aria-hidden />
            <span className={`block w-5 h-[2px] ${burgerColor}`} aria-hidden />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="md:hidden fixed inset-0 z-[60] bg-cream flex flex-col animate-fadeUp"
        >
          <div className="h-[72px] container-wide flex items-center justify-between border-b border-navy/10">
            <Image
              src="/assets/logos/logo-navy-red-cropped.svg"
              alt="Bridge Global Talent Partners"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-11 h-11 flex items-center justify-center rounded-sm hover:bg-navy/5 transition-colors text-navy"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto container-wide py-8 flex flex-col gap-1">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <Link
                  ref={i === 0 ? firstMobileLinkRef : undefined}
                  href={l.href}
                  className="block py-5 font-heading text-2xl font-bold text-navy border-b border-navy/10 hover:text-red transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-8">
              <Link href="/contact" className="btn-primary w-full">
                Speak to Us
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Spacer so fixed nav doesn't overlap content. Themed=dark navs are over-laid (hero handles spacing) */}
      <div className={theme === 'dark' ? '' : 'h-[72px]'} aria-hidden />
    </>
  );
}
