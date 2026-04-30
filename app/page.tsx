import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Bridge Talent Partners — Hire Proven Talent in Africa',
  description: 'Executive search and graduate trainee programs for companies serious about Africa and emerging markets.',
}

export default function Home() {
  return (
    <>
      {/* ── HERO */}
      <section style={{ position:'relative', minHeight:'92vh', display:'flex', flexDirection:'column', justifyContent:'flex-end', overflow:'hidden' }}>
        <Image src="/photos/session-1.jpg" alt="Bridge session" fill style={{ objectFit:'cover', objectPosition:'center 35%' }} priority />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(4,18,32,0.97) 0%,rgba(7,30,51,0.87) 38%,rgba(7,30,51,0.45) 100%)' }}/>
        <div style={{ position:'relative', zIndex:2, maxWidth:1200, margin:'0 auto', padding:'0 48px 80px', width:'100%' }}>
          <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#C9A044', display:'flex', alignItems:'center', gap:12, marginBottom:22 }}>
            <span style={{ display:'block', width:36, height:2, background:'#C9A044', flexShrink:0 }}/>
            Africa &amp; Emerging Markets · Executive Search · Graduate Trainee Program
          </div>
          <h1 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(60px,9vw,112px)', fontWeight:700, color:'#fff', lineHeight:0.94, letterSpacing:'-0.035em', marginBottom:22 }}>
            Hire Proven<br/>Talent.
          </h1>
          <p style={{ fontSize:20, fontWeight:300, color:'rgba(255,255,255,0.6)', lineHeight:1.7, maxWidth:500, marginBottom:38 }}>
            We build and deploy African leaders who perform anywhere.
          </p>
          <div style={{ display:'flex', gap:14, marginBottom:52 }}>
            <Link href="/contact" className="btn-red">Speak to Us</Link>
            <Link href="/graduate-trainee" className="btn-outline-w">Join the GT Program</Link>
          </div>
          <div style={{ display:'flex', alignItems:'center', paddingTop:32, borderTop:'1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginRight:36, flexShrink:0 }}>Trusted by</span>
            <div style={{ display:'flex', gap:36, alignItems:'center', flexWrap:'wrap' }}>
              {['/clients/alexander-tax-law.webp','/clients/doss-law.png','/clients/rdl-consulting.webp'].map((src,i) => (
                <Image key={i} src={src} alt="" width={120} height={28} style={{ height:28, width:'auto', objectFit:'contain', filter:'brightness(0) invert(1)', opacity:0.55 }}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* ── SERVICES */}
      <section style={{ background:'#fff' }}>
        <div className="section tight">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0 }}>
            <div style={{ padding:'56px 52px', background:'#fff', borderTop:'4px solid var(--red)', position:'relative' }}>
              <div style={{ position:'absolute', top:0, bottom:0, right:0, width:1, background:'var(--gray-100)' }}/>
              <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:48, fontWeight:700, color:'var(--red)', opacity:0.15, lineHeight:1, marginBottom:16 }}>01</div>
              <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--red)', marginBottom:16 }}>Service</div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:700, color:'var(--navy)', marginBottom:16, lineHeight:1.1 }}>Executive Talent</h2>
              <p style={{ fontSize:17, fontWeight:300, color:'var(--gray-500)', lineHeight:1.8, marginBottom:28 }}>Hire leaders who can operate in Africa.</p>
              <Link href="/executive-talent" style={{ fontFamily:"'Montserrat',sans-serif", fontSize:14, fontWeight:700, color:'var(--red)', display:'inline-flex', alignItems:'center', gap:6 }}>→ View Details</Link>
            </div>
            <div style={{ padding:'56px 52px', background:'var(--navy)', borderTop:'4px solid var(--red)' }}>
              <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:48, fontWeight:700, color:'var(--red)', opacity:0.2, lineHeight:1, marginBottom:16 }}>02</div>
              <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--red)', marginBottom:16 }}>Service</div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:700, color:'#fff', marginBottom:16, lineHeight:1.1 }}>Graduate Trainee Program</h2>
              <p style={{ fontSize:17, fontWeight:300, color:'rgba(255,255,255,0.55)', lineHeight:1.8, marginBottom:28 }}>We turn top graduates into professionals companies can rely on.</p>
              <Link href="/graduate-trainee" style={{ fontFamily:"'Montserrat',sans-serif", fontSize:14, fontWeight:700, color:'var(--red)', display:'inline-flex', alignItems:'center', gap:6 }}>→ View Details</Link>
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* ── WHO WE ARE */}
      <section style={{ background:'var(--navy)', overflow:'hidden' }}>
        <div className="section">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 380px', gap:80, alignItems:'start' }}>
            <div>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(17px,1.8vw,21px)', fontWeight:600, color:'rgba(255,255,255,0.45)', lineHeight:1.55, marginBottom:40 }}>
                Bridge exists because most companies misunderstand how talent works in Africa.
              </p>
              {['They hire on resumes.','They assume experience translates.','They get it wrong.'].map(t => (
                <span key={t} style={{ display:'block', fontSize:'clamp(15px,1.5vw,17px)', fontWeight:300, color:'rgba(255,255,255,0.28)', fontStyle:'italic', padding:'3px 0', lineHeight:1.45 }}>{t}</span>
              ))}
              <span style={{ display:'block', fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(38px,5.5vw,68px)', fontWeight:700, color:'var(--red)', lineHeight:1.02, margin:'18px 0 14px', letterSpacing:'-0.025em' }}>We don't.</span>
              {['We are on the ground.','We know how these markets actually work.','We know who can operate.','We build operators into leaders.'].map(t => (
                <span key={t} style={{ display:'block', fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(17px,2vw,22px)', fontWeight:600, color:'rgba(255,255,255,0.8)', padding:'4px 0', lineHeight:1.25 }}>{t}</span>
              ))}
              <span style={{ display:'block', fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(19px,2.4vw,28px)', fontWeight:700, color:'#fff', padding:'12px 0 0', lineHeight:1.1 }}>We are your talent partner.</span>
            </div>
            <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:8, height:560 }}>
              <div style={{ position:'relative', borderRadius:4, overflow:'hidden' }}>
                <Image src="/photos/session-2.jpg" alt="Bridge training session" fill style={{ objectFit:'cover' }}/>
              </div>
              <div style={{ position:'relative', borderRadius:4, overflow:'hidden' }}>
                <Image src="/photos/candidate-6.jpg" alt="Bridge candidate" fill style={{ objectFit:'cover' }}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* ── OUR VIEW ON AFRICA */}
      <section style={{ background:'#05111D' }}>
        <div className="section tight">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:64, alignItems:'start' }}>
            <div>
              <div className="eyebrow muted">Our View on Africa</div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(22px,2.5vw,32px)', fontWeight:700, color:'#fff', lineHeight:1.2, marginBottom:18 }}>We study the markets we operate in.</h2>
              <p style={{ fontSize:17, fontWeight:300, color:'rgba(255,255,255,0.5)', lineHeight:1.85 }}>Our work is grounded in how Africa actually works — history, business, and systems.</p>
              <a href="https://www.youtube.com/@BridgeAfrica-q4h" target="_blank" rel="noopener"
                style={{ fontFamily:"'Montserrat',sans-serif", fontSize:13, fontWeight:700, color:'var(--red)', display:'inline-flex', alignItems:'center', gap:8, marginTop:24, border:'1.5px solid rgba(229,57,53,0.35)', padding:'12px 22px', borderRadius:3 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Watch on YouTube
              </a>
            </div>
            <a href="https://www.youtube.com/@BridgeAfrica-q4h" target="_blank" rel="noopener"
              style={{ display:'block', position:'relative', width:'100%', aspectRatio:'16/9', borderRadius:6, overflow:'hidden' }}>
              <Image src="/photos/session-3.jpg" alt="Bridge Africa YouTube" fill style={{ objectFit:'cover' }}/>
              <div style={{ position:'absolute', inset:0, background:'rgba(4,18,32,0.62)' }}/>
              <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-52%)', width:72, height:72, background:'var(--red)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 24px rgba(229,57,53,0.5)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
              <div style={{ position:'absolute', bottom:16, left:20, right:20, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:12, fontWeight:700, color:'#fff', display:'flex', alignItems:'center', gap:8 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" opacity="0.7"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  @BridgeAfrica
                </span>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.55)', letterSpacing:'0.06em' }}>Watch on YouTube ↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Divider/>

      {/* ── SPEAK TO US */}
      <section style={{ background:'var(--navy-d)' }} id="speak">
        <div className="section tight">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }}>
            <div>
              <div className="eyebrow">Speak to Us</div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:700, color:'#fff', lineHeight:1.08, letterSpacing:'-0.025em', marginBottom:14 }}>Whether you're hiring<br/>or ready to be found.</h2>
              <p style={{ fontSize:16, fontWeight:300, color:'rgba(255,255,255,0.4)', lineHeight:1.8, marginTop:12 }}>We review every submission personally. If there's a fit — we'll be in touch.</p>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}
