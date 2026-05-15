'use client'
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react'

const NKUMU_URL = 'https://nkumu-music.vercel.app'

const TRACKS = [
  { id: 'magnetic',      titre: 'Magnetic',          feat: 'ft. JKS',       src: '/audio/magnetic.mp3',     cover: '/photos/simba-cover.jpg',   annee: '2025', duree: '3:45', tags: ['Trap', 'Collab'] },
  { id: 'briller',       titre: 'Briller',            feat: '',              src: '/audio/briller.mp3',      cover: '/photos/simba-front.jpg',   annee: '2024', duree: '3:40', tags: ['Afrorap', 'Motivation'] },
  { id: 'bsv',           titre: 'B.S.V',              feat: 'Winconcept × Mezik Record', src: '/audio/bsv.mp3', cover: '/photos/simba-picture.jpg', annee: '2024', duree: '4:20', tags: ['Trap', 'Collab'] },
  { id: 'new-day',       titre: 'New Day',            feat: '',              src: '/audio/new-day.mp3',      cover: '/photos/simba-image.jpg',   annee: '2024', duree: '3:30', tags: ['Pop', 'Motivation'] },
  { id: 'karisme',       titre: 'Karisme',            feat: '',              src: '/audio/karisme.mp3',      cover: '/photos/simba-all.jpg',     annee: '2024', duree: '3:15', tags: ['Trap'] },
  { id: 'fake',          titre: 'Fake',               feat: '',              src: '/audio/fake.mp3',         cover: '/photos/simba-cover.jpg',   annee: '2024', duree: '3:10', tags: ['Trap', 'Street'] },
  { id: 'la-cale',       titre: 'La Cale',            feat: '',              src: '/audio/la-cale.mp3',      cover: '/photos/simba-fan.jpg',     annee: '2024', duree: '3:20', tags: ['Street'] },
  { id: 'pigeon',        titre: 'Pigeon',             feat: '',              src: '/audio/pigeon.mp3',       cover: '/photos/simba-front.jpg',   annee: '2024', duree: '3:05', tags: ['Trap'] },
  { id: 'stopper',       titre: 'Stopper',            feat: '',              src: '/audio/stopper.mp3',      cover: '/photos/simba-image.jpg',   annee: '2024', duree: '2:55', tags: ['Afrorap'] },
  { id: 'on-ne-rit-pas', titre: "On Ne Rit Pas",     feat: '',              src: '/audio/on-ne-rit-pas.mp3',cover: '/photos/simba-picture.jpg', annee: '2024', duree: '3:00', tags: ['Trap', 'Street'] },
]

function fmtTime(s: number) {
  if (!isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const ss = Math.floor(s % 60)
  return `${m}:${ss.toString().padStart(2, '0')}`
}

export default function Musique() {
  const [playing, setPlaying] = useState<string | null>(null)
  const [progress, setProgress] = useState<Record<string, number>>({})
  const [duration, setDuration] = useState<Record<string, number>>({})
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({})

  function handlePlay(id: string) {
    // Pause tout autre
    if (playing && playing !== id) {
      audioRefs.current[playing]?.pause()
    }
    const audio = audioRefs.current[id]
    if (!audio) return
    if (playing === id) {
      audio.pause()
      setPlaying(null)
    } else {
      audio.play()
      setPlaying(id)
    }
  }

  function handleTimeUpdate(id: string) {
    const audio = audioRefs.current[id]
    if (!audio) return
    setProgress(p => ({ ...p, [id]: audio.currentTime }))
  }

  function handleLoadedMetadata(id: string) {
    const audio = audioRefs.current[id]
    if (!audio) return
    setDuration(d => ({ ...d, [id]: audio.duration }))
  }

  function handleSeek(id: string, e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRefs.current[id]
    if (!audio) return
    audio.currentTime = Number(e.target.value)
  }

  return (
    <section id="musique" className="section section-alt">
      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="eyebrow">Discographie</div>
          <h2 style={{ marginBottom: '1rem' }}>
            La musique de <span style={{ color: 'var(--blue)' }}>Simba Draken</span>
          </h2>
          <p style={{ maxWidth: 520, fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            10 singles disponibles. Écoute les extraits ici — stream et achète en intégralité sur NKUMU.
          </p>
        </div>

        {/* Lecteur principal — track active */}
        {playing && (() => {
          const t = TRACKS.find(x => x.id === playing)!
          return (
            <div style={{
              background: 'linear-gradient(135deg, rgba(26,111,255,0.12), rgba(212,160,23,0.06))',
              border: '1px solid rgba(26,111,255,0.35)',
              borderRadius: 'var(--r-lg)', padding: '1.5rem',
              marginBottom: '2rem',
              display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap',
            }}>
              <img src={t.cover} alt={t.titre}
                style={{ width: 72, height: 72, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: '.2rem' }}>
                  {t.titre} {t.feat && <span style={{ color: 'var(--blue)', fontSize: '.85rem' }}>{t.feat}</span>}
                </div>
                <div style={{ fontSize: '.78rem', color: 'var(--text-2)', marginBottom: '.75rem' }}>Simba Draken · {t.annee}</div>
                {/* Barre de progression */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{ fontSize: '.7rem', color: 'var(--text-3)', minWidth: 36 }}>{fmtTime(progress[t.id] || 0)}</span>
                  <input type="range" min="0" max={duration[t.id] || 100} value={progress[t.id] || 0}
                    onChange={e => handleSeek(t.id, e)}
                    style={{ flex: 1, accentColor: 'var(--blue)', height: 4, cursor: 'pointer' }} />
                  <span style={{ fontSize: '.7rem', color: 'var(--text-3)', minWidth: 36, textAlign: 'right' }}>{fmtTime(duration[t.id] || 0)}</span>
                </div>
              </div>
              <button onClick={() => handlePlay(t.id)} style={{
                width: 52, height: 52, borderRadius: '50%', background: 'var(--blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                border: 'none', color: '#fff', flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  {playing === t.id
                    ? <><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></>
                    : <path d="M5 3l14 9-14 9V3z"/>}
                </svg>
              </button>
            </div>
          )
        })()}

        {/* Liste des titres */}
        <div style={{ background: 'var(--card)', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
          {TRACKS.map((t, i) => (
            <div key={t.id}>
              {/* Audio element caché */}
              <audio
                ref={el => { audioRefs.current[t.id] = el }}
                src={t.src}
                onTimeUpdate={() => handleTimeUpdate(t.id)}
                onLoadedMetadata={() => handleLoadedMetadata(t.id)}
                onEnded={() => setPlaying(null)}
              />

              <div
                className={`track-row ${playing === t.id ? 'playing' : ''}`}
                style={{
                  gridTemplateColumns: '44px 1fr auto auto',
                  borderBottom: i < TRACKS.length - 1 ? '1px solid var(--border)' : 'none',
                }}
                onClick={() => handlePlay(t.id)}
              >
                {/* Play / Numéro */}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: playing === t.id ? 'var(--blue)' : 'rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background .2s', flexShrink: 0,
                }}>
                  {playing === t.id ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
                    </svg>
                  ) : (
                    <span style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--text-3)' }}>{String(i + 1).padStart(2, '0')}</span>
                  )}
                </div>

                {/* Info titre */}
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontWeight: 700, fontSize: '.95rem', color: playing === t.id ? 'var(--blue)' : 'var(--text-1)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {t.titre} {t.feat && <span style={{ color: 'var(--blue)', fontWeight: 400, fontSize: '.82rem' }}>{t.feat}</span>}
                  </div>
                  <div style={{ fontSize: '.72rem', color: 'var(--text-3)', marginTop: '.15rem' }}>
                    Simba Draken · {t.annee} · {t.tags.join(', ')}
                  </div>
                </div>

                {/* Durée */}
                <div style={{ fontSize: '.78rem', color: 'var(--text-3)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                  {playing === t.id && progress[t.id] ? fmtTime(progress[t.id]) : t.duree}
                </div>

                {/* Bouton NKUMU */}
                <a
                  href={NKUMU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{
                    fontSize: '.65rem', fontWeight: 700, letterSpacing: '.08em',
                    padding: '.3rem .7rem', borderRadius: 4,
                    background: 'rgba(26,111,255,0.12)', border: '1px solid rgba(26,111,255,0.3)',
                    color: 'var(--blue)', textTransform: 'uppercase', whiteSpace: 'nowrap',
                    transition: 'all .2s',
                  }}>
                  NKUMU
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner NKUMU */}
        <div className="nkumu-banner" style={{ marginTop: '2.5rem' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: '.3rem' }}>
              Stream intégral sur NKUMU
            </div>
            <p style={{ margin: 0, fontSize: '.88rem' }}>
              Accès complet à tous les sons de Simba Draken. Chaque écoute le soutient directement.
            </p>
          </div>
          <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" className="btn btn-blue" style={{ flexShrink: 0 }}>
            Ouvrir NKUMU →
          </a>
        </div>
      </div>
    </section>
  )
}
