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
        {/* Dégradés */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #060608 0%, rgba(6,6,8,0.8) 35%, rgba(6,6,8,0.35) 65%, rgba(6,6,8,0.1) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(6,6,8,0.75) 0%, rgba(6,6,8,0.3) 55%, transparent 100%)',
        }} />
        {/* Glow bleu subtil */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 40% at 15% 90%, rgba(26,111,255,0.12) 0%, transparent 70%)',
        }} />
      </div>

      {/* Contenu */}
      <div className="container" style={{ position: 'relative', zIndex: 5, paddingBottom: 'clamp(4rem, 10vh, 7rem)', width: '100%' }}>
        <div style={{ maxWidth: 800 }}>

          {/* Badge Winconcept */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            background: 'rgba(26,111,255,0.15)', border: '1px solid rgba(26,111,255,0.4)',
            borderRadius: 6, padding: '.35rem 1rem', marginBottom: '1.75rem',
            fontSize: '.7rem', fontWeight: 800, letterSpacing: '.18em', color: 'var(--blue)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', animation: 'pulse 2s infinite' }} />
            WINCONCEPT · DOUALA
          </div>

          {/* Titre */}
          <h1 style={{ color: '#fff', marginBottom: '.5rem', textShadow: '0 4px 40px rgba(0,0,0,0.9)' }}>
            SIMBA<br />
            <span style={{ color: 'var(--blue)' }}>DRAKEN</span>
          </h1>

          {/* Tagline dorée */}
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.4rem)', fontWeight: 700,
            color: 'var(--gold)', letterSpacing: '.06em', textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Rise &amp; Shine
          </p>

          <p style={{
            fontSize: 'clamp(.95rem, 1.8vw, 1.1rem)', maxWidth: 520,
            color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.8,
          }}>
            Trap · Afrorap · Pop — L&apos;artiste aux multiples facettes de Douala.
            De <strong style={{ color: '#fff' }}>Magnetic</strong> à <strong style={{ color: '#fff' }}>Briller</strong>,
            chaque son est un voyage entre la rue et les étoiles.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#musique" className="btn btn-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
              Écouter la musique
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
            display: 'flex', gap: 'clamp(1.5rem, 4vw, 3.5rem)',
            marginTop: '3.5rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            flexWrap: 'wrap',
          }}>
            {[
              { val: '10',    label: 'Singles',    sub: 'Disponibles' },
              { val: '2',     label: 'Vidéos',     sub: 'Clips officiels' },
              { val: '25K+',  label: 'Fans',        sub: 'Communauté' },
              { val: 'NKUMU', label: 'Plateforme', sub: 'Stream officiel' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2rem)', fontWeight: 900, color: s.label === 'Plateforme' ? 'var(--gold)' : 'var(--blue)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.25rem', fontWeight: 700 }}>{s.label}</div>
                <div style={{ fontSize: '.62rem', color: 'rgba(255,255,255,0.25)', marginTop: '.1rem' }}>{s.sub}</div>
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
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(26,111,255,0.7))', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        <span>Scroll</span>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes scrollPulse { 0%,100%{opacity:0.3;transform:scaleY(0.5)} 50%{opacity:1;transform:scaleY(1)} }
      `}</style>
    </section>
  )
}
