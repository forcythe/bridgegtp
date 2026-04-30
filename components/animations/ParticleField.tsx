'use client'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Particle {
  x: number; y: number; vx: number; vy: number
  size: number; opacity: number; hue: number
}

const N = 24

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()
  const mouse = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.12 + 0.04,
      hue: Math.random() > 0.6 ? 35 : 5, // gold or red
    }))

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        // Gentle attract toward mouse
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          p.vx += (dx / dist) * 0.04
          p.vy += (dy / dist) * 0.04
        }
        // Dampen
        p.vx *= 0.97
        p.vy *= 0.97
        // Move
        p.x += p.vx
        p.y += p.vy
        // Wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity})`
        ctx.fill()
      })
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
      }}
    />
  )
}
