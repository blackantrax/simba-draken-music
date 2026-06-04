'use client'
/* eslint-disable @next/next/no-img-element */

const NKUMU_URL = 'https://nkumu-music.vercel.app'
const WA_URL = 'https://wa.me/14384927278'

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
          alt="Win Concept Industry — Simba Draken"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #070709 0%, rgba(7,7,9,0.88) 35%, rgba(7,7,9,0.45) 65%, rgba(7,7,9,0.15) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(7,7,9,0.9) 0%, rgba(7,7,9,0.35) 55%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 10% 95%, rgba(200,0,0,0.22) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 40% at 80% 10%, rgba(200,0,0,0.07) 0%, transparent 60%)',
        }} />
      </div>

      {/* Contenu */}
      <div className="container" style={{ position: 'relative', zIndex: 5, paddingBottom: 'clamp(4rem, 10vh, 7rem)', width: '100%' }}>
        <div style={{ maxWidth: 860 }}>

          {/* Badge Win Concept Industry */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.75rem',
            background: 'rgba(200,0,0,0.15)', border: '1px solid rgba(200,0,0,0.5)',
            borderRadius: 8, padding: '.5rem 1.25rem', marginBottom: '2rem',
            fontSize: '.72rem', fontWeight: 900, letterSpacing: '.2em',
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '9px', fontWeight: 900, color: '#fff', letterSpacing: '.04em',
            }}>WCI</div>
            <div>
              <div style={{ color: 'var(--blue)', lineHeight: 1.2 }}>WIN CONCEPT INDUSTRY</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '.6rem', letterSpacing: '.12em', fontWeight: 600, marginTop: 1 }}>MANAGEMENT · PRODUCTION · YAOUNDÉ 🇨🇲</div>
            </div>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
          </div>

          {/* Titre principal */}
          <h1 style={{ color: '#fff', marginBottom: '.75rem', textShadow: '0 4px 40px rgba(0,0,0,0.9)', lineHeight: 1.0 }}>
            MUSIC IS<br />
            <span style={{ color: 'var(--blue)' }}>OUR BRAND.</span>
          </h1>

          {/* Tagline */}
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.35rem)', fontWeight: 700,
            color: 'var(--gold)', letterSpacing: '.08em', textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Nos artistes portent notre nom — chaque son, une publicité.
          </p>

          <p style={{
            fontSize: 'clamp(.95rem, 1.8vw, 1.1rem)', maxWidth: 580,
            color: 'rgba(255,255,255,0.72)', marginBottom: '2.5rem', lineHeight: 1.85,
          }}>
            Win Concept Industry — le label qui fait résonner le Cameroun à l&apos;international.
            Nos artistes{' '}
            <strong style={{ color: 'var(--blue)' }}>Simba Draken</strong> &amp;{' '}
            <strong style={{ color: 'var(--gold)' }}>Diablit</strong>{' '}
            incarnent notre vision : une musique qui parle, qui touche, et qui expose la marque.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="#about" className="btn btn-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Découvrir les artistes
            </a>
            <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              ▶ Stream sur NKUMU
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Nous écrire
            </a>
          </div>

          {/* Artist pills */}
          <div style={{
            display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '.625rem',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 100, padding: '.4rem .875rem',
            }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--blue)' }}>
                <img src="/photos/simba-cover.jpg" alt="Simba Draken" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: '.8rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>Simba Draken</div>
                <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>Hip-Hop · Trap · 12,6K TikTok</div>
              </div>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '.625rem',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 100, padding: '.4rem .875rem',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                border: '2px solid var(--gold)',
                background: 'linear-gradient(135deg, rgba(212,160,23,0.3), rgba(200,0,0,0.3))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', fontWeight: 900, color: 'var(--gold)',
              }}>D</div>
              <div>
                <div style={{ fontSize: '.8rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>Diablit</div>
                <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>WCI · En développement</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            flexWrap: 'wrap',
          }}>
            {[
              { val: '2',     label: 'Artistes',     sub: 'Simba · Diablit' },
              { val: '10+',   label: 'Titres',        sub: 'Ōshitsu + Singles' },
              { val: '30M+',  label: 'Vues TikTok',  sub: 'Trend on est beau' },
              { val: '12,6K', label: 'TikTok',        sub: 'Simba Draken' },
              { val: '6',     label: 'Concerts',      sub: 'Premières parties' },
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
