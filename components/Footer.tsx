'use client'

const NKUMU_URL = 'https://nkumu-music.vercel.app'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)', borderTop: '1px solid rgba(26,111,255,0.15)',
      padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 3.5rem)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }} className="footer-grid">
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '.04em', color: '#fff', marginBottom: '.4rem' }}>
              SIMBA <span style={{ color: 'var(--blue)' }}>DRAKEN</span>
            </div>
            <div style={{ fontSize: '.8rem', color: 'var(--text-3)', marginBottom: '1rem' }}>Rise &amp; Shine · Winconcept · Douala</div>
            {/* NKUMU badge */}
            <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.25)',
              borderRadius: 6, padding: '.35rem .875rem',
              fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', color: 'var(--blue)',
              textDecoration: 'none', textTransform: 'uppercase',
            }}>
              🎵 Écouter sur NKUMU
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', textAlign: 'right' }}>
            {['#about', '#musique', '#videos', '#galerie', '#contact'].map(href => (
              <a key={href} href={href} style={{ fontSize: '.82rem', color: 'var(--text-3)', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
                {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
              </a>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>© 2025 Simba Draken — Tous droits réservés</span>
          <span style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>
            Produit par <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>NKUMU Music</a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: left !important; }
        }
      `}</style>
    </footer>
  )
}
