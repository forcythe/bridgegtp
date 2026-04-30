'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { slideUp } from '@/lib/animationVariants'

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  delay?: number
  tilt?: boolean
}

export default function AnimatedCard({ children, style, className, delay = 0, tilt = true }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [mounted, setMounted] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [shineX, setShineX] = useState(50)

  useEffect(() => {
    setMounted(true)
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current || reduced) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setRotate({
      x: ((e.clientY - cy) / rect.height) * -6,
      y: ((e.clientX - cx) / rect.width) * 6,
    })
    setShineX(((e.clientX - rect.left) / rect.width) * 100)
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setShineX(50)
  }

  // Before hydration — render fully visible, no animation
  if (!mounted || reduced) {
    return (
      <div ref={ref} className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideUp}
      transition={{ delay, ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
      whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 120, damping: 24 } }}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shine */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
        background: `radial-gradient(circle at ${shineX}% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
        transition: 'background 150ms ease-out',
      }} />
      {children}
    </motion.div>
  )
}
