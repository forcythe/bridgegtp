'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
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
  const reduced = useReducedMotion()
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [shineX, setShineX] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !tilt || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const rx = ((e.clientY - cy) / rect.height) * -6
    const ry = ((e.clientX - cx) / rect.width) * 6
    setRotate({ x: rx, y: ry })
    setShineX(((e.clientX - rect.left) / rect.width) * 100)
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setShineX(50)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : 'hidden'}
      animate={inView ? 'visible' : 'hidden'}
      variants={reduced ? undefined : slideUp}
      transition={{ delay, ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
      whileHover={reduced ? undefined : { y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 120, damping: 24 } }}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        perspective: 800,
        rotateX: reduced ? 0 : rotate.x,
        rotateY: reduced ? 0 : rotate.y,
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 300ms ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shine swipe */}
      {!reduced && (
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 10,
            background: `radial-gradient(circle at ${shineX}% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
            pointerEvents: 'none',
            transition: 'background 150ms ease-out',
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
