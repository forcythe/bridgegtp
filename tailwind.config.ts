import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2C4A',
          dark: '#071E33',
          mid: '#1A4A6E',
          light: '#2D6A9F',
        },
        red: {
          DEFAULT: '#E53935',
          dark: '#C62828',
          light: '#EF5350',
          muted: '#FFEBEE',
        },
        gray: {
          50: '#F5F5F5',
          100: '#F3F4F6',
          300: '#D1D5DB',
          500: '#6B7280',
          700: '#374151',
          900: '#111827',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-lato)', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        'elev-1': '0 1px 4px rgba(11,44,74,0.08)',
        'elev-2': '0 2px 12px rgba(11,44,74,0.10)',
        'elev-3': '0 8px 32px rgba(11,44,74,0.14)',
        'elev-4': '0 16px 48px rgba(11,44,74,0.18)',
        'red-glow': '0 6px 20px rgba(229,57,53,0.30)',
      },
      transitionTimingFunction: {
        bridge: 'cubic-bezier(.2,.7,.2,1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 600ms ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
