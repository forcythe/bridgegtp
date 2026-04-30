import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Graduate Trainee Program',
  description: 'We design and run your graduate trainee program — from sourcing to training to deployment.',
}

export default function GraduateTrainee() {
  return (
    <>
      {/* HERO — session-3.jpg */}
      <section style={{ position:'relative', minHeight:'76vh', display:'flex', flexDirection:'column', justifyContent:'flex-end', overflow:'hidden' }}>
        <Image src="/photos/session-3.jpg" alt="" fill style={{ objectFit:'cover', objectPosition:'center 40%' }} priority/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(4,18,32,0.97) 0%,rgba(7,30,51,0.88) 35%,rgba(7,30,51,0.5) 100%)' }}/>
        <div style={{ position:'relative', zIndex:2, maxWidth:1200, margin:'0 auto', padding:'0 48px 80px', width:'100%' }}>
          <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#C9A044', display:'flex', alignItems:'center', gap:12, marginBottom:22 }}>
            <span style={{ display:'block', width:36, height:2, background:'#C9A044', flexShrink:0 }}/>Graduate Trainee Program
          </div>
          <h1 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(44px,7vw,88px)', fontWeight:700, color:'#fff', lineHeight:0.97, letterSpacing:'-0.03em', marginBottom:20 }}>For Companies<br/>That Want to Win.</h1>
          <p style={{ fontSize:19, fontWeight:300, color:'rgba(255,255,255,0.6)', lineHeight:1.7, maxWidth:500, marginBottom:36 }}>We run your graduate program — properly.</p>
          <Link href="/contact" className="btn-red">Speak to Us</Link>
        </div>
      </section>

      <Divider/>

      {/* PROOF — logos + 5-photo mosaic */}
      <section style={{ background:'#fff' }}>
        <div className="section tight">
          <div className="eyebrow">Worked With</div>
          <div style={{ display:'flex', alignItems:'center', gap:40, flexWrap:'wrap', marginBottom:44 }}>
            {['/clients/alexander-tax-law.webp','/clients/doss-law.png','/clients/rdl-consulting.webp'].map((src,i) => (
              <Image key={i} src={src} alt="" width={120} height={28} style={{ height:28, width:'auto', objectFit:'contain', opacity:0.75, filter:'grayscale(30%)' }}/>
            ))}
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:13, fontWeight:700, color:'var(--gray-500)', padding:'4px 14px', border:'1.5px solid var(--gray-100)', borderRadius:3 }}>Young Finance Leaders</span>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:13, fontWeight:700, color:'#C9A044', padding:'4px 14px', border:'1.5px solid var(--navy)', borderRadius:3, background:'var(--navy)' }}>Starks Associates</span>
          </div>
          {/* 5-photo mosaic */}
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gridTemplateRows:'1fr 1fr', gap:6, height:480, borderRadius:6, overflow:'hidden' }}>
            <div style={{ position:'relative', gridRow:'span 2' }}><Image src="/photos/session-1.jpg" alt="" fill style={{ objectFit:'cover', filter:'brightness(1.05) contrast(1.06)' }}/></div>
            <div style={{ position:'relative' }}><Image src="/photos/candidate-1.jpg" alt="" fill style={{ objectFit:'cover', filter:'brightness(1.05) contrast(1.06)' }}/></div>
            <div style={{ position:'relative' }}><Image src="/photos/candidate-2.jpg" alt="" fill style={{ objectFit:'cover', filter:'brightness(1.05) contrast(1.06)' }}/></div>
            <div style={{ position:'relative' }}><Image src="/photos/session-2.jpg" alt="" fill style={{ objectFit:'cover', filter:'brightness(1.05) contrast(1.06)' }}/></div>
            <div style={{ position:'relative' }}><Image src="/photos/candidate-5.jpg" alt="" fill style={{ objectFit:'cover', filter:'brightness(1.05) contrast(1.06)' }}/></div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* WHAT WE DO */}
      <section style={{ background:'var(--navy)' }}>
        <div className="section">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
            <div>
              <div className="eyebrow muted">What We Do</div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(26px,3.5vw,44px)', fontWeight:700, color:'#fff', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:20 }}>We take it off your plate.</h2>
              <p style={{ fontSize:17, fontWeight:300, color:'rgba(255,255,255,0.55)', lineHeight:1.85 }}>You don't have time to build talent systems. We design and run your graduate trainee program — from sourcing to training to deployment.</p>
            </div>
            <div style={{ borderRadius:4, overflow:'hidden', aspectRatio:'4/3', position:'relative' }}>
              <Image src="/photos/session-3.jpg" alt="Bridge session" fill style={{ objectFit:'cover' }}/>
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* WHY US */}
      <section style={{ background:'#fff' }}>
        <div className="section">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, height:440 }}>
              {['/photos/candidate-4.jpg','/photos/session-4.jpg'].map((src,i) => (
                <div key={i} style={{ position:'relative', borderRadius:4, overflow:'hidden' }}>
                  <Image src={src} alt="" fill style={{ objectFit:'cover', filter:'brightness(1.04)' }}/>
                </div>
              ))}
            </div>
            <div style={{ maxWidth:520 }}>
              <div className="eyebrow">Why Us</div>
              <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(18px,2vw,22px)', fontWeight:600, color:'var(--navy)', lineHeight:1.45, marginBottom:20 }}>We don't start at hiring.</div>
              <p style={{ fontSize:16, fontWeight:300, color:'var(--gray-500)', lineHeight:1.85 }}>We've been tracking top candidates since their undergraduate years — how they think, how they work, how they perform. By the time they enter your program, they are already tested.</p>
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* CASE STUDY */}
      <section style={{ background:'var(--navy)' }}>
        <div className="section">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>
            <div style={{ borderRadius:4, overflow:'hidden', aspectRatio:'16/11', position:'relative' }}>
              <Image src="/photos/session-2.jpg" alt="Starks Associates training" fill style={{ objectFit:'cover', filter:'brightness(1.04) contrast(1.04)' }}/>
            </div>
            <div>
              <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--red)', marginBottom:14 }}>Case Study — Starks Associates</div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(22px,2.8vw,32px)', fontWeight:700, color:'#fff', lineHeight:1.2, marginBottom:24 }}>We built their graduate pipeline from scratch.</h2>
              {['Designed the hiring and selection process','Drew from our long-tracked candidate pool','Structured training and desk rotations','Evaluated performance under real conditions'].map((t,i) => (
                <div key={i} style={{ display:'flex', alignItems:'baseline', gap:12, padding:'10px 0', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color:'var(--red)', fontWeight:700, flexShrink:0 }}>→</span>
                  <span style={{ fontSize:15, color:'rgba(255,255,255,0.65)', lineHeight:1.6 }}>{t}</span>
                </div>
              ))}
              <div style={{ marginTop:28, background:'rgba(229,57,53,0.15)', borderLeft:'3px solid var(--red)', padding:'18px 22px', borderRadius:'0 3px 3px 0' }}>
                <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--red)', marginBottom:6 }}>Outcome</div>
                <div style={{ fontSize:15, color:'rgba(255,255,255,0.65)', lineHeight:1.7 }}>High-performing hires from day one. Reduced hiring risk. A repeatable system.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* CLOSING CTA */}
      <section style={{ background:'#05111D' }}>
        <div className="section tight" style={{ textAlign:'center' }}>
          <div style={{ maxWidth:680, margin:'0 auto' }}>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(32px,5vw,60px)', fontWeight:700, color:'#fff', lineHeight:1.06, letterSpacing:'-0.025em', marginBottom:20 }}>Build your next generation of talent properly.</h2>
            <p style={{ fontSize:17, fontWeight:300, color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginBottom:36 }}>We review every submission personally. If there's a fit — we'll be in touch.</p>
            <Link href="/contact" className="btn-red">Speak to Us</Link>
          </div>
        </div>
      </section>

      <Divider/>

      {/* SPEAK TO US */}
      <section style={{ background:'var(--navy-d)' }}>
        <div className="section tight">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }}>
            <div>
              <div className="eyebrow">Speak to Us</div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(28px,4vw,44px)', fontWeight:700, color:'#fff', lineHeight:1.1, letterSpacing:'-0.025em', marginBottom:14 }}>Start the conversation.</h2>
              <p style={{ fontSize:16, fontWeight:300, color:'rgba(255,255,255,0.4)', lineHeight:1.8, marginTop:12 }}>We review every submission personally.</p>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}
