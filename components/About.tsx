'use client'
/* eslint-disable @next/next/no-img-element */

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, transparent, var(--blue) 20%, var(--blue) 80%, transparent)', opacity: .4 }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 7vw, 6rem)', alignItems: 'start' }} className="about-grid">

          {/* Photos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '6rem' }}>
            {/* Portrait principal */}
            <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src="/photos/simba-cover.jpg"
                alt="Simba Draken — portrait officiel"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(6,6,8,0.7) 0%, rgba(6,6,8,0.1) 40%, transparent 70%)',
              }} />
              {/* Badge Winconcept */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem',
                background: 'rgba(6,6,8,0.9)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(26,111,255,0.35)',
                borderRadius: 12, padding: '.875rem 1.125rem',
              }}>
                <div style={{ fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '.3rem' }}>
                  Production
                </div>
                <div style={{ fontSize: '.9rem', fontWeight: 800, color: 'var(--blue)' }}>Winconcept Studio</div>
                <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,0.4)', marginTop: '.2rem' }}>Mezik Record · Douala</div>
              </div>
            </div>

            {/* Deux photos secondaires */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src="/photos/simba-fan.jpg" alt="Simba Draken avec un fan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src="/photos/simba-all.jpg" alt="Simba Draken"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Texte */}
          <div style={{ paddingTop: '1rem' }}>
            <div className="eyebrow">L&apos;Artiste</div>
            <h2 style={{ marginBottom: '1.5rem' }}>
              Rise.<br />
              <span style={{ color: 'var(--blue)' }}>Shine.</span>
              <span style={{ color: 'var(--gold)' }}> Conquer.</span>
            </h2>

            <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
              <strong style={{ color: 'var(--text-1)' }}>Simba Draken</strong> est un artiste originaire de{' '}
              <strong style={{ color: 'var(--text-1)' }}>Douala, Cameroun</strong>, produit par{' '}
              <strong style={{ color: 'var(--blue)' }}>Winconcept Studio</strong> et{' '}
              <strong style={{ color: 'var(--blue)' }}>Mezik Record</strong>. Son univers musical fusionne
              Trap, Afrorap et Pop en un son unique, à la fois ancré dans la rue et tourné vers l&apos;international.
            </p>

            <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
              Sa musique parle de montée en puissance — <em>Briller</em>, <em>New Day</em>, <em>Magnetic</em>.
              Des titres qui résonnent autant dans les clubs de Douala que dans la diaspora camerounaise
              à Paris, Montréal ou Bruxelles.
            </p>

            <p style={{ fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)', marginBottom: '2.5rem' }}>
              Avec son collab <em>BSV</em> co-produit par Winconcept &amp; Mezik Record,
              et <em>Magnetic</em> feat. JKS, Simba Draken impose un son pluriel et mature.
              Sa philosophie : <strong style={{ color: 'var(--text-1)' }}>Rise &amp; Shine</strong> —
              peu importe d&apos;où tu viens, tu peux briller.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '2rem' }}>
              {['Trap', 'Afrorap', 'Pop', 'Winconcept', 'Douala', 'Mezik Record'].map(tag => (
                <span key={tag} style={{
                  padding: '.35rem .875rem', borderRadius: 100,
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '.78rem', color: 'var(--text-2)',
                  background: 'rgba(255,255,255,0.03)',
                }}>{tag}</span>
              ))}
            </div>

            {/* Stats sociales */}
            <div style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-md)', padding: '1.5rem',
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem',
              marginBottom: '2rem',
            }}>
              {[
                { icon: '🎵', val: '10',    label: 'Titres',   sub: 'Singles disponibles' },
                { icon: '🎬', val: '2',     label: 'Clips',    sub: 'Vidéos officielles' },
                { icon: '🌍', val: '25K+',  label: 'Fans',     sub: 'Communauté totale' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', marginBottom: '.3rem' }}>{s.icon}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--blue)', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--text-1)', marginTop: '.2rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>{s.label}</div>
                  <div style={{ fontSize: '.65rem', color: 'var(--text-3)', marginTop: '.15rem' }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* CTA NKUMU */}
            <a href="https://nkumu-music.vercel.app" target="_blank" rel="noopener noreferrer"
              className="btn btn-blue" style={{ width: '100%', justifyContent: 'center' }}>
              Écouter Simba Draken sur NKUMU →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
