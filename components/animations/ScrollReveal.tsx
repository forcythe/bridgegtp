'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { slideUp } from '@/lib/animationVariants'

interface Props {
  children: React.ReactNode
  variants?: Variants
  className?: string
  style?: React.CSSProperties
  delay?: number
  threshold?: number
}

export default function ScrollReveal({
  children,
  variants = slideUp,
  className,
  style,
  delay = 0,
  threshold = 0.12,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  const [mounted, setMounted] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setMounted(true)
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  // Before JS hydrates, or if reduced motion: render children fully visible, no animation
  if (!mounted || reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}
