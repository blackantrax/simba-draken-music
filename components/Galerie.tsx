'use client'
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

const PHOTOS = [
  { src: '/photos/simba-front.jpg',   alt: 'Simba Draken — Portrait officiel',     size: 'tall' },
  { src: '/photos/simba-cover.jpg',   alt: 'Simba Draken — Cover',                 size: 'normal' },
  { src: '/photos/simba-all.jpg',     alt: 'Simba Draken — Shot complet',          size: 'wide' },
  { src: '/photos/simba-fan.jpg',     alt: 'Simba Draken avec un fan',             size: 'normal' },
  { src: '/photos/simba-image.jpg',   alt: 'Simba Draken — Portrait studio',       size: 'normal' },
  { src: '/photos/simba-picture.jpg', alt: 'Simba Draken — Session',               size: 'tall' },
]

export default function Galerie() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="galerie" className="section section-alt">
      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="eyebrow">Galerie</div>
          <h2 style={{ marginBottom: '1rem' }}>
            L&apos;univers de <span style={{ color: 'var(--blue)' }}>Simba Draken</span>
          </h2>
          <p style={{ maxWidth: 480, fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            Portraits, sessions studio, backstage. La vie de l&apos;artiste en images.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
          gridAutoRows: '260px',
        }}>
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="photo-item"
              onClick={() => setLightbox(p.src)}
              style={{
                cursor: 'zoom-in',
                gridRow: p.size === 'tall' ? 'span 2' : 'span 1',
                gridColumn: p.size === 'wide' ? 'span 2' : 'span 1',
              }}>
              <img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="photo-overlay">
                <span style={{ fontSize: '.78rem', color: '#fff', fontWeight: 600 }}>{p.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2rem', cursor: 'zoom-out',
        }}>
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.25rem', cursor: 'pointer',
          }}>✕</button>
          <img src={lightbox} alt="Simba Draken" onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 'var(--r-md)' }} />
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .photo-item[style*="span 2"] { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
