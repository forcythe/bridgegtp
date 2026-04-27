import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // Punched-up navy — richer than #0B2C4A per the brief
        navy: {
          50: '#E8EBF2',
          100: '#C4CCDC',
          300: '#5C6F94',
          500: '#1A2D5C',
          DEFAULT: '#0D1B4B',
          700: '#0A1538',
          800: '#070E26',
          900: '#040818',
        },
        red: {
          DEFAULT: '#E53935',
          dark: '#C62828',
          light: '#EF5350',
          muted: '#FFEBEE',
        },
        // NEW — warm gold for highlights only (not body text, not large fills)
        gold: {
          DEFAULT: '#C9A961',
          light: '#D9BB7A',
          dark: '#A8893F',
          muted: '#F5EFE0',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
        },
        cream: {
          DEFAULT: '#FAF8F4',
          warm: '#F5F0E8',
        },
        gray: {
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#E5E5E5',
          300: '#D1D1D1',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          900: '#111827',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-lato)', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
        prose: '68ch',
      },
      // Heavier shadows for stronger contrast between cards/sections
      boxShadow: {
        'elev-1': '0 1px 4px rgba(13,27,75,0.08)',
        'elev-2': '0 4px 16px rgba(13,27,75,0.12)',
        'elev-3': '0 12px 40px rgba(13,27,75,0.18)',
        'elev-4': '0 24px 64px rgba(13,27,75,0.24)',
        'red-glow': '0 8px 24px rgba(229,57,53,0.32)',
        'gold-glow': '0 8px 24px rgba(201,169,97,0.28)',
      },
      transitionTimingFunction: {
        bridge: 'cubic-bezier(.2,.7,.2,1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms cubic-bezier(.2,.7,.2,1) both',
        marquee: 'marquee 40s linear infinite',
        kenBurns: 'kenBurns 18s ease-out forwards',
      },
      // Point72-scale display sizes — these should hit you
      fontSize: {
        'display-sm': ['clamp(36px, 4.5vw, 56px)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['clamp(44px, 6vw, 80px)', { lineHeight: '1.0', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-lg': ['clamp(56px, 8vw, 112px)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '700' }],
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.navy.700'),
            '--tw-prose-headings': theme('colors.navy.DEFAULT'),
            '--tw-prose-lead': theme('colors.navy.500'),
            '--tw-prose-links': theme('colors.red.DEFAULT'),
            '--tw-prose-bold': theme('colors.navy.DEFAULT'),
            '--tw-prose-counters': theme('colors.gold.DEFAULT'),
            '--tw-prose-bullets': theme('colors.gold.DEFAULT'),
            '--tw-prose-hr': theme('colors.gray.200'),
            '--tw-prose-quotes': theme('colors.navy.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.gold.DEFAULT'),
            '--tw-prose-captions': theme('colors.gray.500'),
            '--tw-prose-code': theme('colors.navy.DEFAULT'),
            '--tw-prose-pre-code': theme('colors.navy.50'),
            '--tw-prose-pre-bg': theme('colors.navy.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.gray.300'),
            '--tw-prose-td-borders': theme('colors.gray.200'),
            fontFamily: theme('fontFamily.body').toString(),
            h1: { fontFamily: theme('fontFamily.heading').toString(), letterSpacing: '-0.02em' },
            h2: { fontFamily: theme('fontFamily.heading').toString(), letterSpacing: '-0.015em', marginTop: '2.5em' },
            h3: { fontFamily: theme('fontFamily.heading').toString(), letterSpacing: '-0.01em' },
            'a:hover': { color: theme('colors.red.dark') },
          },
        },
      }),
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
  ],
};

export default config;
