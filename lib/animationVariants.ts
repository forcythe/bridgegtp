import type { Variants } from 'framer-motion'

// ─── TIMING ───────────────────────────────────────────────────
export const SPRING_GENTLE = { type: 'spring', stiffness: 60, damping: 20 }
export const SPRING_SNAPPY = { type: 'spring', stiffness: 120, damping: 24 }
export const EASE_OUT = [0.22, 1, 0.36, 1]

// ─── LEVEL 1 — Subtle (150-250ms) ────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: EASE_OUT } },
}

export const slideUpSubtle: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_OUT } },
}

// ─── LEVEL 2 — Standard (250-400ms) ──────────────────────────
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE_OUT } },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT } },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT } },
}

// ─── LEVEL 3 — Dramatic (400-700ms) ──────────────────────────
export const heroWord: Variants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_OUT },
  },
}

export const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

// ─── STAGGER CONTAINERS ───────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

// ─── CARD HOVER ───────────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: '0 2px 12px rgba(11,44,74,0.10)' },
  hover: {
    y: -8, scale: 1.02,
    boxShadow: '0 20px 48px rgba(11,44,74,0.22)',
    transition: SPRING_SNAPPY,
  },
}

// ─── BUTTON HOVER ─────────────────────────────────────────────
export const buttonTap = { scale: 0.96 }
export const buttonHover = { scale: 1.03, transition: SPRING_SNAPPY }

// ─── IMAGE REVEAL ─────────────────────────────────────────────
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE_OUT } },
}
