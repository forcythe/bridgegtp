import Footer from '@/components/Footer'
export default function Blog() {
  return (
    <>
      <div style={{ background: 'var(--navy)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Insights</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>Coming soon.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
