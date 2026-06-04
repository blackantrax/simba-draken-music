'use client'

const NKUMU_URL = 'https://nkumu-music.vercel.app'
const WA_URL = 'https://wa.me/14384927278'
const EMAIL = 'winconceptindustrystudios@gmail.com'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)', borderTop: '1px solid rgba(200,0,0,0.15)',
      padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 3.5rem)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-main">

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--blue)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#fff',
                letterSpacing: '.04em', flexShrink: 0,
              }}>WCI</div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1rem', color: '#fff', lineHeight: 1.1 }}>WIN CONCEPT INDUSTRY</div>
                <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '.15em', textTransform: 'uppercase', marginTop: 2 }}>Management · Production · Artistes</div>
              </div>
            </div>
            <p style={{ fontSize: '.82rem', color: 'var(--text-3)', marginBottom: '1.25rem', maxWidth: 280, lineHeight: 1.75 }}>
              Label de management et production musicale. Nous développons des artistes qui portent notre marque dans chaque son.
            </p>
            {/* Artists managed */}
            <div style={{ fontSize: '.7rem', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.625rem' }}>
              Artistes gérés
            </div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              <a href="#about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                background: 'rgba(200,0,0,0.1)', border: '1px solid rgba(200,0,0,0.25)',
                borderRadius: 100, padding: '.3rem .75rem',
                fontSize: '.75rem', fontWeight: 700, color: 'var(--blue)', textDecoration: 'none',
              }}>● Simba Draken</a>
              <a href="#about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.25)',
                borderRadius: 100, padding: '.3rem .75rem',
                fontSize: '.75rem', fontWeight: 700, color: 'var(--gold)', textDecoration: 'none',
              }}>● Diablit</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '.7rem', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
              {[
                { href: '#about', label: 'Artistes' },
                { href: '#musique', label: 'Musique' },
                { href: '#videos', label: 'Vidéos' },
                { href: '#concerts', label: 'Concerts' },
                { href: '#galerie', label: 'Galerie' },
                { href: '#contact', label: 'Contact' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: '.85rem', color: 'var(--text-3)', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <div style={{ fontSize: '.7rem', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* WhatsApp */}
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '.625rem',
                textDecoration: 'none', transition: 'opacity .2s',
              }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '.8rem', fontWeight: 700, color: '#25D366', lineHeight: 1.2 }}>+1 (438) 492-7278</div>
                  <div style={{ fontSize: '.65rem', color: 'var(--text-3)' }}>Canada 🇨🇦 · WhatsApp</div>
                </div>
              </a>

              {/* Cameroun */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '.625rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(200,0,0,0.12)', border: '1px solid rgba(200,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.9rem', flexShrink: 0 }}>📞</div>
                <div>
                  <div style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--text-2)', lineHeight: 1.2 }}>+237 656 422 854</div>
                  <div style={{ fontSize: '.65rem', color: 'var(--text-3)' }}>Yaoundé 🇨🇲 · Cameroun</div>
                </div>
              </div>

              {/* Email */}
              <a href={`mailto:${EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: '.625rem', textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(200,0,0,0.12)', border: '1px solid rgba(200,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.9rem', flexShrink: 0 }}>✉️</div>
                <div>
                  <div style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--blue)', lineHeight: 1.2, wordBreak: 'break-all' }}>{EMAIL}</div>
                </div>
              </a>

              {/* NKUMU */}
              <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.25)',
                borderRadius: 6, padding: '.35rem .875rem',
                fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', color: 'var(--blue)',
                textDecoration: 'none', textTransform: 'uppercase',
              }}>
                🎵 NKUMU Music
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '1.75rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>
            © 2025 Win Concept Industry — Tous droits réservés · Simba Draken · Diablit
          </span>
          <span style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>
            Stream sur{' '}
            <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>NKUMU Music</a>
            {' '} · {' '}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>WhatsApp</a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-main { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
