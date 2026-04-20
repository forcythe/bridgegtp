import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/lib/site-config';

/**
 * Auto-generated Open Graph image served at /opengraph-image.
 * Rendered by Next.js at request time as a 1200x630 PNG using this component.
 *
 * Any time the tagline or branding changes, this image updates without
 * needing a separate design asset or export step.
 *
 * Runs on the Node runtime so it works on Render, Railway, Fly, and any
 * standard Node host. Next caches the output aggressively in production.
 */

export const runtime = 'nodejs';
export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0B2C4A',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Top-right red glow */}
        <div
          style={{
            position: 'absolute',
            right: -200,
            top: -200,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(229,57,53,0.18) 0%, rgba(229,57,53,0.04) 45%, transparent 70%)',
          }}
        />

        {/* Top row: eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 18,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            fontWeight: 600,
          }}
        >
          <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.35)' }} />
          <span>Executive Search · GT Program · Talent Pool</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            maxWidth: 1000,
          }}
        >
          <span>Your talent partner in</span>
          <span style={{ color: '#EF5350', fontStyle: 'italic' }}>markets that matter.</span>
        </div>

        {/* Bottom row: brand + URL */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 28,
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '0.04em' }}>
              BRIDGE
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.55)',
                textTransform: 'uppercase',
              }}
            >
              Global Talent Partners
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
            }}
          >
            Africa · Emerging Markets
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
