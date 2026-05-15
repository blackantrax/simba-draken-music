'use client'
/* eslint-disable @next/next/no-img-element */

const NKUMU_URL = 'https://nkumu-music.vercel.app'

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100svh',
      display: 'flex', alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      {/* Photo de fond */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/photos/simba-front.jpg"
          alt="Simba Draken"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #070709 0%, rgba(7,7,9,0.82) 35%, rgba(7,7,9,0.35) 65%, rgba(7,7,9,0.1) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(7,7,9,0.8) 0%, rgba(7,7,9,0.3) 55%, transparent 100%)',
        }} />
        {/* Glow rouge bas-gauche — signature pressbook */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 10% 95%, rgba(200,0,0,0.18) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 40% at 80% 10%, rgba(200,0,0,0.06) 0%, transparent 60%)',
        }} />
      </div>

      {/* Contenu */}
      <div className="container" style={{ position: 'relative', zIndex: 5, paddingBottom: 'clamp(4rem, 10vh, 7rem)', width: '100%' }}>
        <div style={{ maxWidth: 820 }}>

          {/* Badge Win Concept */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            background: 'rgba(200,0,0,0.15)', border: '1px solid rgba(200,0,0,0.45)',
            borderRadius: 6, padding: '.35rem 1rem', marginBottom: '1.75rem',
            fontSize: '.7rem', fontWeight: 800, letterSpacing: '.2em', color: 'var(--blue)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', animation: 'pulse 2s infinite' }} />
            WIN CONCEPT INDUSTRY · YAOUNDÉ
          </div>

          {/* Titre */}
          <h1 style={{ color: '#fff', marginBottom: '.5rem', textShadow: '0 4px 40px rgba(0,0,0,0.9)', lineHeight: 1.0 }}>
            SIMBA<br />
            <span style={{ color: 'var(--blue)' }}>DRAKEN</span>
          </h1>

          {/* Tagline dorée */}
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.4rem)', fontWeight: 700,
            color: 'var(--gold)', letterSpacing: '.08em', textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Retenez Bien Mon Nom
          </p>

          <p style={{
            fontSize: 'clamp(.95rem, 1.8vw, 1.1rem)', maxWidth: 540,
            color: 'rgba(255,255,255,0.72)', marginBottom: '2.5rem', lineHeight: 1.85,
          }}>
            Hip-Hop · Pop Urbaine · Ethnique — L&apos;artiste schizophrène de Yaoundé.
            De <strong style={{ color: '#fff' }}>RBMN</strong> à <strong style={{ color: '#fff' }}>Ōshitsu No Kaidan</strong>,
            chaque son porte la dualité de{' '}
            <strong style={{ color: 'var(--blue)' }}>Simba</strong> &amp;{' '}
            <strong style={{ color: 'var(--blue)' }}>Draken</strong>.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#videos" className="btn btn-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
              Voir les clips
            </a>
            <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              ▶ Stream sur NKUMU
            </a>
            <a href="#about" className="btn btn-outline">
              Découvrir l&apos;artiste
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)',
            marginTop: '3.5rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            flexWrap: 'wrap',
          }}>
            {[
              { val: '641',   label: 'YouTube',    sub: '@SIMBADRAKEN' },
              { val: '12,6K', label: 'TikTok',     sub: 'Simba Draken' },
              { val: '30M+',  label: 'Vues TikTok',sub: 'Trend on est beau' },
              { val: '63K',   label: 'Collab NLS', sub: 'Kadji ft Simba' },
              { val: '2',     label: 'Albums',     sub: 'RBMN · Ōshitsu' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.9rem)', fontWeight: 900, color: s.label === 'Vues TikTok' ? 'var(--gold)' : 'var(--blue)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.25rem', fontWeight: 700 }}>{s.label}</div>
                <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,0.22)', marginTop: '.1rem' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', right: 'clamp(1.5rem, 4vw, 3rem)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: 'rgba(255,255,255,0.3)', fontSize: '.6rem', letterSpacing: '.12em',
        textTransform: 'uppercase', zIndex: 5,
      }}>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(200,0,0,0.7))', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        <span>Scroll</span>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes scrollPulse { 0%,100%{opacity:0.3;transform:scaleY(0.5)} 50%{opacity:1;transform:scaleY(1)} }
      `}</style>
    </section>
  )
}
