import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Speak to Us',
  description: 'Whether you\'re hiring or ready to be found — get in touch with Bridge Talent Partners.',
}

export default function Contact() {
  return (
    <>
      <section style={{ background:'var(--navy-d)', minHeight:'80vh' }}>
        <div className="section">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }}>
            <div>
              <div className="eyebrow">Speak to Us</div>
              <h1 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:700, color:'#fff', lineHeight:1.08, letterSpacing:'-0.025em', marginBottom:14 }}>
                Whether you're hiring<br/>or ready to be found.
              </h1>
              <p style={{ fontSize:16, fontWeight:300, color:'rgba(255,255,255,0.4)', lineHeight:1.8, marginTop:12 }}>
                We review every submission personally. If there's a fit — we'll be in touch.
              </p>
              <div style={{ marginTop:40 }}>
                <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:8 }}>Or email us directly</div>
                <a href="mailto:hello@bridgegtp.com" style={{ fontFamily:"'Montserrat',sans-serif", fontSize:18, fontWeight:700, color:'#fff' }}>hello@bridgegtp.com</a>
              </div>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
