import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/lib/site-config';

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
          background: '#070E26',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -200,
            top: -200,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(201,169,97,0.18) 0%, rgba(201,169,97,0.04) 45%, transparent 70%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 16,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(201,169,97,0.85)',
            fontWeight: 600,
          }}
        >
          <div style={{ width: 56, height: 2, background: '#C9A961' }} />
          <span>Executive Talent · Graduate Trainee · Africa</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: '-0.035em',
            maxWidth: 1000,
          }}
        >
          <span>Hire <span style={{ color: '#C9A961' }}>proven</span> talent.</span>
          <span style={{ fontSize: 40, fontWeight: 400, marginTop: 16, color: 'rgba(255,255,255,0.7)' }}>
            We build and deploy African leaders who perform anywhere.
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 28,
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '0.04em' }}>BRIDGE</div>
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
              color: 'rgba(201,169,97,0.7)',
              textTransform: 'uppercase',
            }}
          >
            bridgegtp.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
