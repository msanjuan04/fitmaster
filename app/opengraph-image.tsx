import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fitmaster — Método, Disciplina, Resultados'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Diagonal green block top right */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '420px',
            height: '630px',
            background: '#D7FB04',
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 0.08,
          }}
        />

        {/* Green accent line top left */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '100%',
            background: '#D7FB04',
          }}
        />

        {/* Top: logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              background: '#D7FB04',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 900, color: '#000', letterSpacing: '-0.5px' }}>
              FM
            </span>
          </div>
          <span style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', letterSpacing: '4px', textTransform: 'uppercase' }}>
            Fitmaster
          </span>
          <span style={{ fontSize: '13px', color: '#D7FB04', letterSpacing: '3px', textTransform: 'uppercase', marginLeft: '8px', opacity: 0.8 }}>
            · Gijón
          </span>
        </div>

        {/* Center: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span
            style={{
              fontSize: '96px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 0.88,
              textTransform: 'uppercase',
              letterSpacing: '-2px',
            }}
          >
            Deja de entrenar
          </span>
          <span
            style={{
              fontSize: '96px',
              fontWeight: 900,
              color: '#D7FB04',
              lineHeight: 0.88,
              textTransform: 'uppercase',
              letterSpacing: '-2px',
            }}
          >
            sin dirección.
          </span>
        </div>

        {/* Bottom: tagline + location */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', margin: 0, letterSpacing: '1px' }}>
              Asesoramiento · Suplementación · Seguimiento real
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              {['Método', 'Disciplina', 'Resultados'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#D7FB04',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    border: '1px solid rgba(215,251,4,0.3)',
                    padding: '6px 14px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>
              Avd Portugal 9 · Gijón, Asturias
            </span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>
              fitmaster.es
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
