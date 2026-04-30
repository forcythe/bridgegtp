'use client'
import { useScroll, useSpring, motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, #C9A044, #E53935, #0B2C4A)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  )
}
