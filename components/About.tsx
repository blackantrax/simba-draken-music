'use client'
/* eslint-disable @next/next/no-img-element */

const WA_URL = 'https://wa.me/14384927278'
const NKUMU_URL = 'https://nkumu-music.vercel.app'

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="red-line" />

      <div className="container">

        {/* Section header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Win Concept Industry · Nos Artistes</div>
          <h2 style={{ marginBottom: '1rem' }}>
            Le talent que nous <span style={{ color: 'var(--blue)' }}>représentons.</span>
          </h2>
          <p style={{ maxWidth: 580, margin: '0 auto', fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            Chaque artiste signé chez WCI porte la marque dans sa musique — une symbiose entre
            l&apos;art et le business, au service de l&apos;exposition internationale.
          </p>
        </div>

        {/* ── ARTISTE 1 : SIMBA DRAKEN ── */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-lg)', overflow: 'hidden', marginBottom: '2rem',
        }}>
          {/* Artist header band */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(200,0,0,0.12) 0%, rgba(200,0,0,0.04) 100%)',
            borderBottom: '1px solid rgba(200,0,0,0.2)',
            padding: '1.25rem 2rem',
            display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
          }}>
            <div style={{
              fontSize: '.62rem', fontWeight: 800, letterSpacing: '.18em',
              color: 'var(--blue)', textTransform: 'uppercase',
              background: 'rgba(200,0,0,0.12)', border: '1px solid rgba(200,0,0,0.3)',
              borderRadius: 4, padding: '.25rem .625rem',
            }}>Artiste WCI · Signé</div>
            <div style={{ fontSize: '.75rem', color: 'var(--text-3)', fontWeight: 600 }}>EP 2024 · 10 titres · Win Concept Industry</div>
            <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" style={{
              marginLeft: 'auto', fontSize: '.72rem', fontWeight: 700, color: 'var(--gold)',
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '.35rem',
            }}>🎵 Stream sur NKUMU →</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 4rem)', padding: 'clamp(2rem, 4vw, 3rem)', alignItems: 'start' }} className="about-grid">

            {/* Colonne photos — 3 photos */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '6rem' }}>
              {/* Photo principale */}
              <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '3/4' }}>
                <img
                  src="/photos/simba-cover.jpg"
                  alt="Simba Draken — portrait officiel"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(7,7,9,0.85) 0%, rgba(7,7,9,0.1) 45%, transparent 70%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
                }}>
                  <div style={{ fontWeight: 900, fontSize: '1.5rem', color: '#fff', textShadow: '0 2px 20px rgba(0,0,0,0.9)', lineHeight: 1 }}>SIMBA<br /><span style={{ color: 'var(--blue)' }}>DRAKEN</span></div>
                  <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,0.5)', marginTop: '.35rem', letterSpacing: '.12em', textTransform: 'uppercase' }}>Win Concept Industry · Yaoundé 🇨🇲</div>
                </div>
              </div>

              {/* 2 photos secondaires */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src="/photos/simba-fan.jpg" alt="Simba Draken — avec les fans"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
                <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src="/photos/simba-all.jpg" alt="Simba Draken"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
              </div>

              {/* Photo scène */}
              <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', aspectRatio: '16/7' }}>
                <img src="/photos/simba-image.jpg" alt="Simba Draken — studio"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transition: 'transform .5s ease' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
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
                signe en <strong style={{ color: 'var(--text-1)' }}>2019</strong> puis revient avec la série{' '}
                <strong style={{ color: 'var(--blue)' }}>RBMN (Retenez Bien Mon Nom)</strong>, et l&apos;EP{' '}
                <em>Ōshitsu No Kaidan</em> (10 titres) en 2024 — un projet 100 % sous bannière{' '}
                <strong style={{ color: 'var(--gold)' }}>Win Concept Industry</strong>.
              </p>

              <p style={{ fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)', marginBottom: '2rem' }}>
                Son trend <em>&quot;on est beau × 2&quot;</em> cumule{' '}
                <strong style={{ color: 'var(--gold)' }}>+40 000 reprises et +30 millions de vues TikTok</strong>.
                Dans ses sons, il cite et met en valeur <strong style={{ color: 'var(--blue)' }}>Win Concept Industry</strong> —
                chaque écoute est une publicité directe pour le label.
              </p>

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
                  <div style={{ fontSize: '.88rem', color: 'var(--text-2)', lineHeight: 1.6 }}>La lumière. Le sourire. L&apos;artiste charismatique et accessible.</div>
                </div>
                <div style={{ width: 1, background: 'rgba(200,0,0,0.25)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 120 }}>
                  <div style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '.4rem' }}>Draken</div>
                  <div style={{ fontSize: '.88rem', color: 'var(--text-2)', lineHeight: 1.6 }}>L&apos;ombre. La rage. Le rappeur qui frappe et ne s&apos;excuse pas.</div>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '2rem' }}>
                {['Hip-Hop', 'Pop Urbaine', 'Ethnique', 'RBMN', 'Ōshitsu No Kaidan', '12,6K TikTok', '30M+ vues'].map(tag => (
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
                marginBottom: '1.5rem',
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

              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer"
                  className="btn btn-blue" style={{ flex: 1, justifyContent: 'center', minWidth: 160 }}>
                  Écouter sur NKUMU →
                </a>
                <a href="#musique" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', minWidth: 160 }}>
                  Voir la discographie
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── ARTISTE 2 : DIABLIT ── */}
        <div style={{
          background: 'var(--surface)', border: '1px solid rgba(212,160,23,0.2)',
          borderRadius: 'var(--r-lg)', overflow: 'hidden',
        }}>
          {/* Artist header band */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(212,160,23,0.1) 0%, rgba(212,160,23,0.03) 100%)',
            borderBottom: '1px solid rgba(212,160,23,0.2)',
            padding: '1.25rem 2rem',
            display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
          }}>
            <div style={{
              fontSize: '.62rem', fontWeight: 800, letterSpacing: '.18em',
              color: 'var(--gold)', textTransform: 'uppercase',
              background: 'rgba(212,160,23,0.12)', border: '1px solid rgba(212,160,23,0.3)',
              borderRadius: 4, padding: '.25rem .625rem',
            }}>Artiste WCI · En Développement</div>
            <div style={{ fontSize: '.75rem', color: 'var(--text-3)', fontWeight: 600 }}>Win Concept Industry · Production 2025</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(2rem, 5vw, 4rem)', padding: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center' }} className="diablit-grid">

            {/* Placeholder visuel Diablit */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Portrait placeholder */}
              <div style={{
                width: 'clamp(180px, 25vw, 280px)', aspectRatio: '3/4',
                borderRadius: 'var(--r-lg)', overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(212,160,23,0.15) 0%, rgba(200,0,0,0.12) 50%, rgba(7,7,9,0.9) 100%)',
                border: '1px solid rgba(212,160,23,0.3)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '1rem', position: 'relative',
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(212,160,23,0.4), rgba(200,0,0,0.4))',
                  border: '3px solid rgba(212,160,23,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', fontWeight: 900, color: 'var(--gold)',
                  boxShadow: '0 0 40px rgba(212,160,23,0.2)',
                }}>D</div>
                <div style={{ textAlign: 'center', padding: '0 1.5rem' }}>
                  <div style={{ fontWeight: 900, fontSize: '1.4rem', color: 'var(--gold)', letterSpacing: '.04em' }}>DIABLIT</div>
                  <div style={{ fontSize: '.62rem', color: 'rgba(255,255,255,0.4)', marginTop: '.35rem', letterSpacing: '.12em', textTransform: 'uppercase' }}>Win Concept Industry</div>
                </div>
                <div style={{
                  position: 'absolute', bottom: '1.25rem',
                  background: 'rgba(7,7,9,0.85)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(212,160,23,0.3)',
                  borderRadius: 8, padding: '.5rem 1rem',
                  fontSize: '.65rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '.08em',
                }}>BIENTÔT · 2025</div>
              </div>

              {/* Mini gallery avec simba photos */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', width: 'clamp(180px, 25vw, 280px)' }}>
                <div style={{ borderRadius: 'var(--r-sm)', overflow: 'hidden', aspectRatio: '1', background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.6rem', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                  Photo<br />à venir
                </div>
                <div style={{ borderRadius: 'var(--r-sm)', overflow: 'hidden', aspectRatio: '1', background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.6rem', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                  Photo<br />à venir
                </div>
              </div>
            </div>

            {/* Texte Diablit */}
            <div>
              <div className="eyebrow" style={{ color: 'var(--gold)' }}>Nouvel Artiste</div>
              <h2 style={{ marginBottom: '1.5rem' }}>
                Diablit —<br />
                <span style={{ color: 'var(--gold)' }}>La montée.</span>
              </h2>

              <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
                <strong style={{ color: 'var(--text-1)' }}>Diablit</strong> est le nouvel artiste développé et managé par{' '}
                <strong style={{ color: 'var(--gold)' }}>Win Concept Industry</strong>. Avec une identité musicale forte,
                un univers visuel affirmé et une énergie unique, Diablit est en pleine ascension.
              </p>

              <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
                Comme Simba Draken, Diablit intègre le nom <strong style={{ color: 'var(--gold)' }}>Win Concept Industry</strong> dans
                sa musique — une stratégie délibérée : chaque titre, chaque écoute, chaque partage
                est une exposition directe pour la marque.
              </p>

              <p style={{ fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)', marginBottom: '2rem' }}>
                Les prochaines sorties de Diablit s&apos;annoncent comme un tournant pour le label.
                Restez à l&apos;écoute — la musique de Win Concept Industry ne fait que commencer.
              </p>

              {/* Feature highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { icon: '🎯', title: 'Management', desc: 'Suivi artistique complet par WCI' },
                  { icon: '🎵', title: 'Production', desc: 'Sons originaux en préparation' },
                  { icon: '🌍', title: 'Exposition', desc: 'Distribution internationale' },
                  { icon: '📢', title: 'Marketing', desc: 'Stratégie digitale WCI' },
                ].map(f => (
                  <div key={f.title} style={{
                    background: 'var(--card)', border: '1px solid rgba(212,160,23,0.12)',
                    borderRadius: 'var(--r-sm)', padding: '1rem',
                  }}>
                    <div style={{ fontSize: '1.1rem', marginBottom: '.35rem' }}>{f.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '.88rem', color: 'var(--text-1)', marginBottom: '.2rem' }}>{f.title}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>{f.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="btn btn-whatsapp" style={{ flex: 1, justifyContent: 'center', minWidth: 160 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Nous contacter sur WhatsApp
                </a>
                <a href="#contact" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', minWidth: 160 }}>
                  Booking Diablit →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .diablit-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
