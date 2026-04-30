'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fl: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: 6,
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const fd = new FormData(e.currentTarget)
    const payload = {
      firstName:    fd.get('firstName'),
      lastName:     fd.get('lastName'),
      email:        fd.get('email'),
      organisation: fd.get('organisation'),
      role:         fd.get('role'),
      market:       fd.get('market'),
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      setError('Something went wrong. Please email us directly at hello@bridgegtp.com')
    } finally {
      setLoading(false)
    }
  }

  if (sent) return (
    <div style={{ border: '1px solid rgba(229,57,53,0.2)', background: 'rgba(229,57,53,0.05)', borderRadius: 4, padding: 48, textAlign: 'center' }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 20px', display: 'block' }}>
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Submission received.</h3>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>We review every submission personally.<br/>If there's a fit — you'll hear from us.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div style={{ marginBottom: 14 }}>
          <label style={fl}>First Name</label>
          <input name="firstName" className="fi" type="text" placeholder="Amara" required />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={fl}>Last Name</label>
          <input name="lastName" className="fi" type="text" placeholder="Mensah" required />
        </div>
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={fl}>Email</label>
        <input name="email" className="fi" type="email" placeholder="amara@company.com" required />
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={fl}>Organisation</label>
        <input name="organisation" className="fi" type="text" placeholder="Company name" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={fl}>Role</label>
        <select name="role" className="fi" defaultValue="">
          <option value="" disabled>Select your role…</option>
          <optgroup label="C-Suite">
            <option>CEO</option><option>CFO</option><option>COO</option><option>CTO</option><option>CPO</option>
          </optgroup>
          <optgroup label="Director / VP">
            <option>Managing Director</option><option>Finance Director</option>
            <option>VP of Finance</option><option>VP of Strategy</option>
          </optgroup>
          <optgroup label="Manager / Professional">
            <option>Senior Manager</option><option>Finance Manager</option>
            <option>Financial Analyst</option><option>Strategy Consultant</option>
            <option>Software Engineer</option><option>Product Manager</option>
          </optgroup>
          <optgroup label="Other">
            <option>Board Member / NED</option><option>Founder / Entrepreneur</option>
            <option>Student / Recent Graduate</option><option>Other</option>
          </optgroup>
        </select>
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={fl}>Market / Region</label>
        <input name="market" className="fi" type="text" placeholder="e.g. West Africa, East Africa, MENA…" />
      </div>
      {error && <p style={{ fontSize: 13, color: '#EF5350', marginBottom: 12 }}>{error}</p>}
      <button type="submit" disabled={loading}
        style={{ background: loading ? '#999' : 'var(--red)', color: '#fff', padding: 14, borderRadius: 3, fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 700, width: '100%', marginTop: 8, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 200ms' }}>
        {loading ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
