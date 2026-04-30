'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { Variants } from 'framer-motion'
import { slideUp } from '@/lib/animationVariants'

interface Props {
  children: React.ReactNode
  variants?: Variants
  className?: string
  style?: React.CSSProperties
  delay?: number
  once?: boolean
  threshold?: number
}

export default function ScrollReveal({
  children,
  variants = slideUp,
  className,
  style,
  delay = 0,
  once = true,
  threshold = 0.15,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount: threshold })
  const reduced = useReducedMotion()

  const finalVariants: Variants = reduced
    ? { hidden: {}, visible: {} }
    : variants

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={finalVariants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}
