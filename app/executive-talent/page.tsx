import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Executive Talent',
  description: 'Retained executive search for senior leaders across Africa and emerging markets.',
}

const countryFlags = [
  { name:"Côte d'Ivoire", region:'West Africa', flag: <svg width="36" height="24" viewBox="0 0 36 24" style={{borderRadius:2,display:'block'}}><rect width="12" height="24" fill="#F77F00"/><rect x="12" width="12" height="24" fill="#fff"/><rect x="24" width="12" height="24" fill="#009A44"/></svg> },
  { name:'Cameroon',      region:'Central Africa', flag: <svg width="36" height="24" viewBox="0 0 36 24" style={{borderRadius:2,display:'block'}}><rect width="12" height="24" fill="#007A5E"/><rect x="12" width="12" height="24" fill="#CE1126"/><rect x="24" width="12" height="24" fill="#FCD116"/><polygon points="18,5 19.5,10 24,10 20.5,13 22,18 18,15 14,18 15.5,13 12,10 16.5,10" fill="#FCD116"/></svg> },
  { name:'Ghana',         region:'West Africa', flag: <svg width="36" height="24" viewBox="0 0 36 24" style={{borderRadius:2,display:'block'}}><rect width="36" height="8" fill="#006B3F"/><rect y="8" width="36" height="8" fill="#FCD116"/><rect y="16" width="36" height="8" fill="#EF3340"/><polygon points="18,8.5 19.4,13 24,13 20.3,15.8 21.7,20.3 18,17.5 14.3,20.3 15.7,15.8 12,13 16.6,13" fill="#000"/></svg> },
  { name:'Malawi',        region:'Southern Africa', flag: <svg width="36" height="24" viewBox="0 0 36 24" style={{borderRadius:2,display:'block'}}><rect width="36" height="8" fill="#000"/><rect y="8" width="36" height="8" fill="#CE1126"/><rect y="16" width="36" height="8" fill="#339E35"/><circle cx="18" cy="5" r="4" fill="#CE1126"/><path d="M18,1.2 A3.8,3.8 0 0,1 21.5,7.8 A3.8,3.8 0 0,1 14.5,7.8 A3.8,3.8 0 0,1 18,1.2Z" fill="#FCD116"/></svg> },
]

export default function ExecutiveTalent() {
  return (
    <>
      {/* HERO — session-4.jpg */}
      <section style={{ position:'relative', minHeight:'80vh', display:'flex', flexDirection:'column', justifyContent:'flex-end', overflow:'hidden' }}>
        <Image src="/photos/session-4.jpg" alt="" fill style={{ objectFit:'cover', objectPosition:'center 30%' }} priority/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(4,18,32,0.98) 0%,rgba(7,30,51,0.9) 35%,rgba(7,30,51,0.55) 100%)' }}/>
        <div style={{ position:'relative', zIndex:2, maxWidth:1200, margin:'0 auto', padding:'0 48px 88px', width:'100%' }}>
          <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#C9A044', display:'flex', alignItems:'center', gap:12, marginBottom:22 }}>
            <span style={{ display:'block', width:36, height:2, background:'#C9A044', flexShrink:0 }}/>Executive Talent
          </div>
          <h1 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(48px,7.5vw,96px)', fontWeight:700, color:'#fff', lineHeight:0.96, letterSpacing:'-0.03em', marginBottom:20 }}>Hire leaders who<br/>can win in Africa.</h1>
          <p style={{ fontSize:19, fontWeight:300, color:'rgba(255,255,255,0.6)', lineHeight:1.75, maxWidth:520, marginBottom:36 }}>We work with companies entering or scaling across the continent.</p>
          <Link href="/contact" className="btn-red">Speak to Us</Link>
        </div>
      </section>

      <Divider/>

      {/* PROOF */}
      <section style={{ background:'#fff' }}>
        <div className="section tight">
          <div className="eyebrow">Track Record</div>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gray-500)', marginBottom:16 }}>Country managers hired across:</p>
          <div style={{ display:'flex', alignItems:'stretch', flexWrap:'wrap', marginBottom:40 }}>
            {countryFlags.map((c,i) => (
              <div key={c.name} style={{ display:'flex', alignItems:'center', gap:10, fontFamily:"'Montserrat',sans-serif", fontSize:14, fontWeight:700, color:'var(--navy)', padding:'10px 20px', border:'1.5px solid var(--gray-100)', marginRight:-1, background:'#fff', borderRadius: i===0?'3px 0 0 3px':i===countryFlags.length-1?'0 3px 3px 0':0 }}>
                {c.flag}{c.name}
              </div>
            ))}
          </div>
          <p style={{ fontSize:16, fontWeight:300, color:'var(--gray-500)', marginBottom:36 }}>They performed from day one.</p>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gray-500)', marginBottom:16 }}>Companies we've worked with:</p>
          <div style={{ display:'flex', alignItems:'center', gap:36, flexWrap:'wrap' }}>
            {['/clients/alexander-tax-law.webp','/clients/doss-law.png','/clients/rdl-consulting.webp'].map((src,i) => (
              <Image key={i} src={src} alt="" width={120} height={28} style={{ height:28, width:'auto', objectFit:'contain', filter:'grayscale(30%)', opacity:0.7 }}/>
            ))}
          </div>
        </div>
      </section>

      <Divider/>

      {/* WHAT WE DO */}
      <section style={{ background:'var(--gray-50)' }}>
        <div className="section">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
            <div>
              <div className="eyebrow">What We Do</div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(26px,3.2vw,40px)', fontWeight:700, color:'var(--navy)', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:18 }}>We run focused executive searches for critical roles.</h2>
              <p style={{ fontSize:17, fontWeight:300, color:'var(--gray-500)', lineHeight:1.85 }}>Country managers. Senior operators. Leadership teams. We take a small number of mandates at any one time — exclusively retained, with a dedicated team committed to your search.</p>
            </div>
            <div style={{ borderRadius:4, overflow:'hidden', aspectRatio:'4/3', position:'relative' }}>
              <Image src="/photos/candidate-3.jpg" alt="Executive candidate" fill style={{ objectFit:'cover' }}/>
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* WHY US */}
      <section style={{ background:'var(--navy)' }}>
        <div className="section">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
            <div>
              <div className="eyebrow muted">Why Us</div>
              {['We\'re on the ground.','We\'ve seen what works and what doesn\'t.','We know who can actually do the job.'].map(t => (
                <span key={t} style={{ display:'block', fontSize:'clamp(15px,1.5vw,17px)', fontWeight:300, color:'rgba(255,255,255,0.3)', fontStyle:'italic', padding:'3px 0', lineHeight:1.4 }}>{t}</span>
              ))}
              <span style={{ display:'block', fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(32px,5vw,56px)', fontWeight:700, color:'var(--red)', lineHeight:1.05, margin:'16px 0 12px', letterSpacing:'-0.02em' }}>So when we bring someone,<br/>it's not a guess.</span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, height:480 }}>
              {['/photos/candidate-4.jpg','/photos/session-4.jpg','/photos/candidate-6.jpg','/photos/candidate-5.jpg'].map((src,i) => (
                <div key={i} style={{ position:'relative', borderRadius:4, overflow:'hidden' }}>
                  <Image src={src} alt="" fill style={{ objectFit:'cover', filter:'brightness(1.04)' }}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* CLOSING CTA */}
      <section style={{ background:'#05111D' }}>
        <div className="section tight" style={{ textAlign:'center' }}>
          <div style={{ maxWidth:700, margin:'0 auto' }}>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(36px,5.5vw,68px)', fontWeight:700, color:'#fff', lineHeight:1.04, letterSpacing:'-0.03em', marginBottom:24 }}>Ready to hire the right person?</h2>
            <p style={{ fontSize:18, fontWeight:300, color:'rgba(255,255,255,0.45)', lineHeight:1.8, marginBottom:36 }}>We work with a small number of companies at any one time. If you're serious about building in Africa — talk to us.</p>
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
              <p style={{ fontSize:16, fontWeight:300, color:'rgba(255,255,255,0.4)', lineHeight:1.8, marginTop:12 }}>Retained search only — no contingency, no noise.</p>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}
