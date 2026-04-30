import Link from 'next/link'
import Image from 'next/image'

const socials = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@bridgetalentpartners', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.76a4.85 4.85 0 01-1.02-.07z"/></svg> },
  { label: 'Instagram', href: 'https://www.instagram.com/bridgeafrica98', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: 'YouTube', href: 'https://www.youtube.com/@BridgeAfrica-q4h', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cfo-africa/', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-d)', padding: '64px 48px 36px', position: 'relative', overflow: 'hidden' }}>
      {/* Watermark */}
      <Image
        src="/assets/logos/logo-bridge-main.svg"
        alt="" aria-hidden
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.06, pointerEvents: 'none' }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 44, borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 28 }}>
          <div>
            <Image src="/assets/logos/logo-bridge-main.svg" alt="Bridge Talent Partners" width={200} height={72} style={{ height: 72, width: 'auto', marginBottom: 20 }} />
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, maxWidth: 260 }}>
              A premium executive search and talent development firm built exclusively for Africa and emerging markets.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}
                  style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4, color: 'rgba(255,255,255,0.45)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 16 }}>Services</div>
            <Link href="/executive-talent" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.42)', marginBottom: 10 }}>Executive Talent</Link>
            <Link href="/graduate-trainee" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.42)', marginBottom: 10 }}>Graduate Trainee</Link>
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 16 }}>Company</div>
            <Link href="/" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.42)', marginBottom: 10 }}>About</Link>
            <Link href="/contact" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.42)', marginBottom: 10 }}>Speak to Us</Link>
            <a href="https://www.youtube.com/@BridgeAfrica-q4h" target="_blank" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.42)', marginBottom: 10 }}>Our View on Africa</a>
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 16 }}>Markets</div>
            {['West Africa','East Africa','Southern Africa','North Africa','MENA'].map(m => (
              <span key={m} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.42)', marginBottom: 10 }}>{m}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)' }}>© 2026 Bridge Global Talent Partners. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy','Terms'].map(l => <Link key={l} href={`/${l.toLowerCase()}`} style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)' }}>{l}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
