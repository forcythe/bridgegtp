'use client'
import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    // Step 1: tell CSS that JS is running — enables the hidden state on reveal elements
    document.body.classList.add('js-ready')

    // Step 2: observe all reveal elements
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )

    // Tiny delay so elements already in viewport on load still animate in
    setTimeout(() => els.forEach(el => observer.observe(el)), 60)

    return () => observer.disconnect()
  }, [])

  return null
}
