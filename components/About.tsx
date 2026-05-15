'use client'
/* eslint-disable @next/next/no-img-element */

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="red-line" />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 7vw, 6rem)', alignItems: 'start' }} className="about-grid">

          {/* Colonne photos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '6rem' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src="/photos/simba-cover.jpg"
                alt="Simba Draken — portrait officiel"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(7,7,9,0.75) 0%, rgba(7,7,9,0.1) 40%, transparent 70%)',
              }} />
              {/* Badge Win Concept */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem',
                background: 'rgba(7,7,9,0.92)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(200,0,0,0.35)',
                borderRadius: 12, padding: '.875rem 1.125rem',
              }}>
                <div style={{ fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '.3rem' }}>
                  Production · Management
                </div>
                <div style={{ fontSize: '.9rem', fontWeight: 800, color: 'var(--blue)', letterSpacing: '.02em' }}>Win Concept Industry</div>
                <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,0.35)', marginTop: '.2rem' }}>Yaoundé · Cameroun 🇨🇲</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src="/photos/simba-fan.jpg" alt="Simba Draken — scène"
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
              Simba.<br />
              <span style={{ color: 'var(--blue)' }}>Draken.</span>
              <span style={{ color: 'var(--gold)' }}> Deux âmes.</span>
            </h2>

            <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
              De son vrai nom <strong style={{ color: 'var(--text-1)' }}>Mbassi Eyebé Stéphane Noël</strong>,{' '}
              <strong style={{ color: 'var(--blue)' }}>Simba Draken</strong> est né le{' '}
              <strong style={{ color: 'var(--text-1)' }}>25 décembre 1998 à Yaoundé</strong>, Cameroun.
              Aîné d&apos;une fratrie de 4 enfants, issu de la tribu des Bêtis, il grandit dans un milieu
              familial stable jusqu&apos;au divorce de ses parents — traumatisme qui donne naissance à sa
              seconde personnalité : <strong style={{ color: 'var(--blue)' }}>Draken</strong>.
            </p>

            <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
              Il découvre la musique en <strong style={{ color: 'var(--text-1)' }}>2012</strong> lors
              d&apos;une kermesse lycéenne et commence à écrire. Après son bac au Lycée de Nkol-Eton, il
              signe en <strong style={{ color: 'var(--text-1)' }}>2019</strong> avec le label{' '}
              <strong style={{ color: 'var(--gold)' }}>AS2PIC</strong> et sort son premier single{' '}
              <em>SIM 1</em> qui crée l&apos;euphorie sur la scène camerounaise.
            </p>

            <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
              Fin 2023, il revient en indépendant avec la série{' '}
              <strong style={{ color: 'var(--blue)' }}>RBMN (Retenez Bien Mon Nom)</strong>, puis sort
              son EP <em>Ōshitsu No Kaidan</em> (10 titres) en 2024. La même année, son trend{' '}
              <em>&quot;on est beau × 2&quot;</em> cumule{' '}
              <strong style={{ color: 'var(--gold)' }}>+40 000 reprises et +30 millions de vues TikTok</strong>.
            </p>

            <p style={{ fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)', marginBottom: '2.5rem' }}>
              Son univers mêle <strong style={{ color: 'var(--text-1)' }}>Hip-hop, Pop urbaine et sonorités ethniques</strong> pour une
              couleur musicale unique — profondément camerounaise et résolument internationale.
              Produit par <strong style={{ color: 'var(--blue)' }}>Win Concept Industry</strong>, il
              est disponible pour concerts, interviews et collaborations.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '2rem' }}>
              {['Hip-Hop', 'Pop Urbaine', 'Ethnique', 'Win Concept', 'Yaoundé', 'RBMN', 'Ōshitsu No Kaidan'].map(tag => (
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
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '.75rem',
              marginBottom: '2rem',
            }}>
              {[
                { icon: '📘', val: '1,9K',  label: 'Facebook' },
                { icon: '🎵', val: '12,6K', label: 'TikTok' },
                { icon: '▶',  val: '641',   label: 'YouTube' },
                { icon: '📸', val: '70',    label: 'Instagram' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '.25rem' }}>{s.icon}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--blue)', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: '.65rem', fontWeight: 700, color: 'var(--text-2)', marginTop: '.2rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Dualité Simba / Draken */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(200,0,0,0.08), rgba(200,0,0,0.03))',
              border: '1px solid rgba(200,0,0,0.2)',
              borderRadius: 'var(--r-md)', padding: '1.25rem 1.5rem',
              marginBottom: '1.5rem',
              display: 'flex', gap: '2rem', flexWrap: 'wrap',
            }}>
              <div style={{ flex: 1, minWidth: 120 }}>
                <div style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '.4rem' }}>Simba</div>
                <div style={{ fontSize: '.88rem', color: 'var(--text-2)', lineHeight: 1.6 }}>La lumière. Le sourire. L&apos;artiste qui monte — souriant, accessible, charismatique.</div>
              </div>
              <div style={{ width: 1, background: 'rgba(200,0,0,0.25)', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 120 }}>
                <div style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '.4rem' }}>Draken</div>
                <div style={{ fontSize: '.88rem', color: 'var(--text-2)', lineHeight: 1.6 }}>L&apos;ombre. La rage. Le rappeur schizophrène qui frappe et ne s&apos;excuse pas.</div>
              </div>
            </div>

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
