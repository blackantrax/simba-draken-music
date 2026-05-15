'use client'
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

const YT_CHANNEL = 'https://www.youtube.com/@SIMBADRAKEN'

const VIDEOS = [
  {
    id: 'moins-cheres',
    youtubeId: 'GIIbbbaOiRY',
    titre: 'Moins Chères',
    feat: '(On est beau × 2)',
    vues: '14K',
    annee: '2024',
    badge: 'Trend',
    desc: 'Le trend qui a explosé TikTok — +40 000 reprises et +30 millions de vues. Le son de l\'été camerounais.',
  },
  {
    id: 'rbmn-1',
    youtubeId: 'IL-pqZrMZds',
    titre: 'RBMN 1',
    feat: 'Retenez Bien Mon Nom',
    vues: '3,3K',
    annee: '2023',
    badge: '4K',
    desc: 'Le retour en indépendant. RBMN — une déclaration d\'intention en trois épisodes. La naissance du dragon.',
  },
  {
    id: 'rbmn-2',
    youtubeId: 'kPbknOWpsuI',
    titre: 'RBMN 2',
    feat: 'Retenez Bien Mon Nom',
    vues: '2,6K',
    annee: '2024',
    badge: null,
    desc: 'Le second chapitre de la série RBMN. La dualité Simba / Draken se confirme, le flow s\'intensifie.',
  },
  {
    id: 'zamazu',
    youtubeId: '_gDcexjRLsE',
    titre: 'ZAMAZU × SIMBA DRAKEN',
    feat: 'ft. 45 Moshino',
    vues: '1,8K',
    annee: '2023',
    badge: 'Collab',
    desc: 'Une collision de styles. Zamazu, Simba Draken et 45 Moshino sur un seul son — trois univers, une onde.',
  },
  {
    id: 'kadji',
    youtubeId: 'HMhgodPyPsI',
    titre: 'Kadji Champagne du Pays',
    feat: 'NLS 237 ft. Simba',
    vues: '30K',
    annee: '2024',
    badge: 'NLS',
    desc: 'La collaboration avec NLS 237 qui comptabilise 30 000 vues. Simba Draken s\'impose sur la scène nationale.',
  },
  {
    id: 'rbmn-3',
    youtubeId: null,
    titre: 'RBMN 3',
    feat: 'Retenez Bien Mon Nom',
    vues: '—',
    annee: '2025',
    badge: 'Récent',
    desc: 'Le troisième et dernier volet de la trilogie RBMN. La conclusion d\'un cycle, l\'annonce d\'une ère nouvelle.',
  },
]

export default function Videos() {
  const [actif, setActif] = useState(VIDEOS[0].id)
  const [playing, setPlaying] = useState(false)

  const current = VIDEOS.find(v => v.id === actif) ?? VIDEOS[0]

  function handleSelect(id: string) {
    setActif(id)
    setPlaying(false)
  }

  return (
    <section id="videos" className="section section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="red-line" />

      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="eyebrow">Clips Officiels</div>
          <h2 style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--blue)' }}>Voir</span> Simba Draken
          </h2>
          <p style={{ maxWidth: 520, fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            Clips, visuels et collaborations de l&apos;artiste. Abonne-toi sur YouTube pour ne rien rater.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'start' }} className="videos-grid">

          {/* Lecteur principal */}
          <div>
            <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: '#000', aspectRatio: '16/9' }}>
              {current.youtubeId && playing ? (
                <iframe
                  key={`${current.id}-playing`}
                  src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={current.titre}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                <>
                  {current.youtubeId ? (
                    <img
                      src={`https://img.youtube.com/vi/${current.youtubeId}/maxresdefault.jpg`}
                      alt={current.titre}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${current.youtubeId}/mqdefault.jpg`
                      }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ fontSize: '3rem', opacity: 0.3 }}>🎬</div>
                      <div style={{ fontSize: '.85rem', color: 'var(--text-3)', textAlign: 'center', padding: '0 2rem' }}>Clip disponible sur YouTube</div>
                    </div>
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {current.youtubeId ? (
                      <button
                        onClick={() => setPlaying(true)}
                        style={{
                          width: 72, height: 72, borderRadius: '50%',
                          background: 'var(--blue)', border: 'none', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 0 40px var(--blue-glow)',
                          transition: 'transform .2s, box-shadow .2s',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
                      </button>
                    ) : (
                      <a
                        href={YT_CHANNEL}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-blue"
                      >
                        Voir sur YouTube →
                      </a>
                    )}
                  </div>
                  {current.badge && (
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      background: 'var(--blue)', color: '#fff',
                      fontSize: '.65rem', fontWeight: 800, letterSpacing: '.12em',
                      padding: '.25rem .6rem', borderRadius: 4, textTransform: 'uppercase',
                    }}>{current.badge}</div>
                  )}
                </>
              )}
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.5rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>{current.titre}</h3>
                {current.feat && (
                  <span style={{ fontSize: '.78rem', color: 'var(--text-2)', fontStyle: 'italic' }}>{current.feat}</span>
                )}
                <span style={{
                  fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em',
                  background: 'rgba(200,0,0,0.12)', border: '1px solid rgba(200,0,0,0.3)',
                  color: 'var(--blue)', borderRadius: 4, padding: '.2rem .5rem',
                }}>{current.annee}</span>
                {current.vues !== '—' && (
                  <span style={{ fontSize: '.75rem', color: 'var(--text-2)' }}>
                    <strong style={{ color: 'var(--gold)' }}>{current.vues}</strong> vues
                  </span>
                )}
              </div>
              <p style={{ fontSize: 'clamp(.88rem, 1.6vw, 1rem)', marginBottom: '1.25rem' }}>{current.desc}</p>
              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                {current.youtubeId ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${current.youtubeId}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontSize: '.85rem', padding: '.7rem 1.5rem' }}
                  >
                    ▶ Voir sur YouTube
                  </a>
                ) : (
                  <a href={YT_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '.85rem', padding: '.7rem 1.5rem' }}>
                    Chaîne YouTube →
                  </a>
                )}
                <a href={YT_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn btn-blue" style={{ fontSize: '.85rem', padding: '.7rem 1.5rem' }}>
                  S&apos;abonner @SIMBADRAKEN
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar liste */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
            {VIDEOS.map(v => (
              <button
                key={v.id}
                onClick={() => handleSelect(v.id)}
                style={{
                  display: 'flex', gap: '.875rem', alignItems: 'center',
                  background: actif === v.id ? 'rgba(200,0,0,0.1)' : 'var(--card)',
                  border: `1px solid ${actif === v.id ? 'rgba(200,0,0,0.4)' : 'var(--border)'}`,
                  borderRadius: 'var(--r-sm)', padding: '.875rem',
                  cursor: 'pointer', textAlign: 'left', transition: 'all .2s', width: '100%',
                }}
              >
                <div style={{ position: 'relative', width: 72, height: 54, borderRadius: 6, overflow: 'hidden', flexShrink: 0, background: '#000' }}>
                  {v.youtubeId ? (
                    <img
                      src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                      alt={v.titre}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '1.2rem', opacity: 0.4 }}>🎬</span>
                    </div>
                  )}
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: actif === v.id ? 'rgba(200,0,0,0.5)' : 'rgba(0,0,0,0.3)',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
                  </div>
                  {v.badge && (
                    <div style={{
                      position: 'absolute', top: 3, left: 3,
                      background: v.badge === 'Trend' ? 'var(--gold)' : 'var(--blue)',
                      color: v.badge === 'Trend' ? '#000' : '#fff',
                      fontSize: '.52rem', fontWeight: 800,
                      padding: '1px 4px', borderRadius: 3,
                    }}>{v.badge}</div>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontWeight: 700, fontSize: '.85rem',
                    color: actif === v.id ? 'var(--blue)' : 'var(--text-1)',
                    marginBottom: '.2rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>{v.titre}</div>
                  {v.feat && (
                    <div style={{ fontSize: '.65rem', color: 'var(--text-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: '.15rem' }}>{v.feat}</div>
                  )}
                  <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '.65rem', color: 'var(--text-3)' }}>{v.annee}</span>
                    {v.vues !== '—' && (
                      <span style={{ fontSize: '.65rem', color: 'var(--gold)', fontWeight: 700 }}>{v.vues}</span>
                    )}
                  </div>
                </div>
              </button>
            ))}

            <a
              href={YT_CHANNEL}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem',
                background: 'rgba(212,160,23,0.06)', border: '1px solid rgba(212,160,23,0.2)',
                borderRadius: 'var(--r-sm)', padding: '.875rem', textDecoration: 'none',
                transition: 'all .2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,160,23,0.5)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,160,23,0.2)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4A017">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--gold)' }}>@SIMBADRAKEN</div>
                <div style={{ fontSize: '.6rem', color: 'var(--text-3)' }}>641 abonnés · YouTube</div>
              </div>
            </a>
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
