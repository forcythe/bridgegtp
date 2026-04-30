'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'About', href: '/' },
  { label: 'Executive Talent', href: '/executive-talent' },
  { label: 'Graduate Trainee', href: '/graduate-trainee' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'var(--navy)',
      padding: '0 48px', height: 88,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/assets/logos/logo-bridge-main.svg"
          alt="Bridge Talent Partners"
          width={200} height={96}
          style={{ height: 96, width: 'auto' }}
          priority
        />
      </Link>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13, fontWeight: 600,
            color: pathname === l.href ? '#fff' : 'rgba(255,255,255,0.65)',
            letterSpacing: '0.02em',
            paddingBottom: 3,
            borderBottom: pathname === l.href ? '2px solid var(--red)' : '2px solid transparent',
            transition: 'all 200ms ease-out',
          }}>{l.label}</Link>
        ))}
        <Link href="/contact" className="btn-red" style={{ padding: '10px 24px', fontSize: 13 }}>
          Speak to Us
        </Link>
      </div>
    </nav>
  )
}
