export default function FmtTeamLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      fill="#D7FB04"
      className={className}
      role="img"
      aria-label="FMT Competition Team"
    >
      {/* ── Left outer bar ── */}
      <rect x="30"  y="55" width="44" height="238" rx="4" />
      {/* ── Left inner bar ── */}
      <rect x="90"  y="55" width="44" height="238" rx="4" />

      {/* ── Right inner bar ── */}
      <rect x="266" y="55" width="44" height="238" rx="4" />
      {/* ── Right outer bar ── */}
      <rect x="326" y="55" width="44" height="238" rx="4" />

      {/* ── Head ── */}
      <circle cx="200" cy="55" r="52" />

      {/* ── Upper body bar ── */}
      <rect x="154" y="126" width="92" height="43" rx="3" />
      {/* ── Lower body bar ── */}
      <rect x="158" y="176" width="84" height="32" rx="3" />

      {/* ── Triangle (lower body) ── */}
      <polygon points="154,210 246,210 200,288" />

      {/* ── FMT ── */}
      <text
        x="200"
        y="436"
        textAnchor="middle"
        style={{
          fontFamily: "'Arial Black', 'Arial Bold', Gadget, sans-serif",
          fontWeight: 900,
          fontSize: '148px',
          letterSpacing: '-4px',
        }}
      >
        FMT
      </text>

      {/* ── COMPETITION TEAM ── */}
      <text
        x="200"
        y="480"
        textAnchor="middle"
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontWeight: 700,
          fontSize: '24px',
          letterSpacing: '5px',
        }}
      >
        COMPETITION TEAM
      </text>
    </svg>
  )
}
