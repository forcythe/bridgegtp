'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gt-program', label: 'GT Program' },
  { href: '#leaderboard', label: 'Leaderboard' },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  // Scroll shadow + scroll-spy for active section highlight
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const y = window.scrollY + 140;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile-menu: body scroll lock, Escape to close, focus management
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstMobileLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <nav
      aria-label="Primary"
      className={[
        'sticky top-0 z-50 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80',
        'border-b transition-shadow duration-200',
        scrolled ? 'border-gray-300 shadow-elev-2' : 'border-transparent',
      ].join(' ')}
    >
      <div className="max-w-container mx-auto h-[72px] px-6 md:px-12 flex items-center justify-between">
        <Link href="/" aria-label="Bridge Global Talent Partners — Home" className="flex items-center">
          <Image
            src="/assets/logos/logo-navy-red-cropped.svg"
            alt="Bridge Global Talent Partners"
            width={140}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 items-center">
          {LINKS.map((l) => {
            const active = activeId === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active ? 'true' : undefined}
                  className={[
                    'relative py-1.5 font-heading text-[13px] font-semibold text-navy transition-opacity duration-200',
                    active ? 'opacity-100' : 'opacity-75 hover:opacity-100',
                    'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0',
                    'after:h-[2px] after:bg-red after:origin-left after:transition-transform after:duration-200',
                    active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                  ].join(' ')}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#join"
              className="bg-red text-white px-6 py-2.5 rounded font-heading font-bold text-[13px] transition-all duration-200 hover:bg-red-dark hover:-translate-y-px hover:shadow-red-glow active:scale-[0.98]"
            >
              Join
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px] rounded hover:bg-gray-50 transition-colors"
        >
          <span className="block w-5 h-[1.5px] bg-navy" aria-hidden />
          <span className="block w-5 h-[1.5px] bg-navy" aria-hidden />
          <span className="block w-5 h-[1.5px] bg-navy" aria-hidden />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="md:hidden fixed inset-0 z-50 bg-white flex flex-col animate-fadeUp"
        >
          <div className="h-[72px] px-6 flex items-center justify-between border-b border-gray-300">
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
              className="w-11 h-11 flex items-center justify-center rounded hover:bg-gray-50 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a
                  ref={i === 0 ? firstMobileLinkRef : undefined}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-heading text-lg font-semibold text-navy border-b border-gray-100 hover:text-red transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-6">
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Join the Talent Pool
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
