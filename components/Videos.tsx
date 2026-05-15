'use client'
/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react'

const NKUMU_URL = 'https://nkumu-music.vercel.app'

const VIDEOS = [
  {
    id: 'vybe',
    titre: 'Simba Vybe',
    desc: 'L\'énergie pure de Simba Draken. Un shoot spontané, brut et authentique qui capture l\'essence de l\'artiste.',
    src: '/videos/simba-vybe.mp4',
    cover: '/photos/simba-front.jpg',
    annee: '2024',
    duree: '—',
  },
  {
    id: 'sabrina-remix',
    titre: 'Sabrina Remix',
    desc: 'La collaboration avec Sabrina — deux univers qui fusionnent sur un remix explosif. Trap meets Afropop.',
    src: '/videos/simba-sabrina-remix.mp4',
    cover: '/photos/simba-cover.jpg',
    annee: '2025',
    duree: '—',
  },
]

export default function Videos() {
  const [actif, setActif] = useState(VIDEOS[0].id)
  const videoRef = useRef<HTMLVideoElement>(null)

  const current = VIDEOS.find(v => v.id === actif) ?? VIDEOS[0]

  function handleSelect(id: string) {
    setActif(id)
    setTimeout(() => videoRef.current?.play(), 100)
  }

  return (
    <section id="videos" className="section">
      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="eyebrow">Vidéos</div>
          <h2 style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--blue)' }}>Voir</span> Simba Draken
          </h2>
          <p style={{ maxWidth: 480, fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            Clips et sessions de l&apos;artiste. Nouveaux clips en préparation — abonne-toi sur NKUMU.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '2rem', alignItems: 'start' }} className="videos-grid">

          {/* Lecteur principal */}
          <div>
            <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: '#000', aspectRatio: '16/9' }}>
              <video
                ref={videoRef}
                key={current.src}
                src={current.src}
                controls
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
                poster={current.cover}
              />
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.5rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>{current.titre}</h3>
                <span style={{
                  fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em',
                  background: 'rgba(26,111,255,0.15)', border: '1px solid rgba(26,111,255,0.3)',
                  color: 'var(--blue)', borderRadius: 4, padding: '.2rem .5rem',
                }}>{current.annee}</span>
              </div>
              <p style={{ fontSize: 'clamp(.88rem, 1.6vw, 1rem)', marginBottom: '1.25rem' }}>{current.desc}</p>
              <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" className="btn btn-blue">
                Plus de contenu sur NKUMU →
              </a>
            </div>
          </div>

          {/* Liste */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
            {VIDEOS.map(v => (
              <button key={v.id} onClick={() => handleSelect(v.id)} style={{
                display: 'flex', gap: '.875rem', alignItems: 'center',
                background: actif === v.id ? 'rgba(26,111,255,0.1)' : 'var(--card)',
                border: `1px solid ${actif === v.id ? 'rgba(26,111,255,0.4)' : 'var(--border)'}`,
                borderRadius: 'var(--r-sm)', padding: '.875rem',
                cursor: 'pointer', textAlign: 'left', transition: 'all .2s', width: '100%',
              }}>
                <div style={{ position: 'relative', width: 72, height: 54, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={v.cover} alt={v.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: actif === v.id ? 'rgba(26,111,255,0.5)' : 'rgba(0,0,0,0.35)',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '.88rem', color: actif === v.id ? 'var(--blue)' : 'var(--text-1)', marginBottom: '.2rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.titre}</div>
                  <div style={{ fontSize: '.7rem', color: 'var(--text-3)' }}>{v.annee}</div>
                </div>
              </button>
            ))}

            {/* CTA plus de clips à venir */}
            <div style={{
              background: 'rgba(212,160,23,0.06)', border: '1px solid rgba(212,160,23,0.2)',
              borderRadius: 'var(--r-sm)', padding: '.875rem', textAlign: 'center',
            }}>
              <div style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '.25rem' }}>+ Clips en préparation</div>
              <div style={{ fontSize: '.68rem', color: 'var(--text-3)' }}>Abonne-toi sur NKUMU</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .videos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
