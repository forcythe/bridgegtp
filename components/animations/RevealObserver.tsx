'use client'
import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    // Mark body so CSS knows JS is running — this enables the hidden state
    document.body.classList.add('js-loaded')

    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    )

    // Small timeout ensures elements that are already in viewport also animate
    const t = setTimeout(() => els.forEach(el => io.observe(el)), 80)
    return () => { clearTimeout(t); io.disconnect() }
  }, [])

  return null
}
