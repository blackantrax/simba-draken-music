'use client'
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react'

const NKUMU_URL = 'https://nkumu-music.vercel.app'

const ALBUMS = [
  {
    id: 'oshitsu',
    titre: 'Ōshitsu No Kaidan',
    sousTitre: '王室の階段 — Les Escaliers du Palais Royal',
    annee: '2024',
    label: 'Win Concept Industry',
    nbTitres: 10,
    cover: '/photos/simba-picture.jpg',
    type: 'EP',
    youtubePlaylist: 'https://www.youtube.com/@SIMBADRAKEN',
  },
  {
    id: 'rbmn1',
    titre: 'RBMN 1',
    sousTitre: 'Retenez Bien Mon Nom — Première Époque',
    annee: '2024',
    label: 'Indépendant',
    nbTitres: 1,
    cover: '/photos/simba-image.jpg',
    type: 'Single',
    youtubePlaylist: 'https://www.youtube.com/watch?v=IL-pqZrMZds',
  },
]

const TRACKS = [
  { id: 'magnetic',       titre: 'Magnetic',        feat: '',               src: '/audio/magnetic.mp3',       cover: '/photos/simba-front.jpg',   annee: '2024', duree: '—', tags: ['Pop'], album: 'Ōshitsu No Kaidan' },
  { id: 'briller',        titre: 'Briller',          feat: '',               src: '/audio/briller.mp3',        cover: '/photos/simba-front.jpg',   annee: '2024', duree: '—', tags: ['Hip-Hop'], album: 'Ōshitsu No Kaidan' },
  { id: 'bsv',            titre: 'BSV',              feat: '',               src: '/audio/bsv.mp3',            cover: '/photos/simba-picture.jpg', annee: '2024', duree: '—', tags: ['Rap'], album: 'Ōshitsu No Kaidan' },
  { id: 'new-day',        titre: 'New Day',          feat: '',               src: '/audio/new-day.mp3',        cover: '/photos/simba-picture.jpg', annee: '2024', duree: '—', tags: ['Pop Urbaine'], album: 'Ōshitsu No Kaidan' },
  { id: 'fake',           titre: 'Fake',             feat: '',               src: '/audio/fake.mp3',           cover: '/photos/simba-picture.jpg', annee: '2024', duree: '—', tags: ['Trap'], album: 'Ōshitsu No Kaidan' },
  { id: 'karisme',        titre: 'Karisme',          feat: '',               src: '/audio/karisme.mp3',        cover: '/photos/simba-picture.jpg', annee: '2024', duree: '—', tags: ['Hip-Hop'], album: 'Ōshitsu No Kaidan' },
  { id: 'la-cale',        titre: 'La Cale',          feat: '',               src: '/audio/la-cale.mp3',        cover: '/photos/simba-picture.jpg', annee: '2024', duree: '—', tags: ['Sombre'], album: 'Ōshitsu No Kaidan' },
  { id: 'on-ne-rit-pas',  titre: 'On Ne Rit Pas',   feat: '',               src: '/audio/on-ne-rit-pas.mp3',  cover: '/photos/simba-picture.jpg', annee: '2024', duree: '—', tags: ['Émotionnel'], album: 'Ōshitsu No Kaidan' },
  { id: 'pigeon',         titre: 'Pigeon',           feat: '',               src: '/audio/pigeon.mp3',         cover: '/photos/simba-picture.jpg', annee: '2024', duree: '—', tags: ['Street'], album: 'Ōshitsu No Kaidan' },
  { id: 'stopper',        titre: 'STOPPER',          feat: '',               src: '/audio/stopper.mp3',        cover: '/photos/simba-image.jpg',   annee: '2025', duree: '—', tags: ['Rap', 'Street'], album: 'Single' },
]

function fmtTime(s: number) {
  if (!isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  const ss = Math.floor(s % 60)
  return `${m}:${ss.toString().padStart(2, '0')}`
}

const ALBUM_COLORS: Record<string, string> = {
  'Ōshitsu No Kaidan': 'rgba(200,0,0,0.15)',
  'Single':            'rgba(255,255,255,0.05)',
}

export default function Musique() {
  const [playing, setPlaying] = useState<string | null>(null)
  const [progress, setProgress] = useState<Record<string, number>>({})
  const [duration, setDuration] = useState<Record<string, number>>({})
  const [filter, setFilter] = useState<string>('Tout')
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({})

  const FILTERS = ['Tout', 'Ōshitsu No Kaidan', 'Single']
  const filtered = filter === 'Tout' ? TRACKS : TRACKS.filter(t => t.album === filter)

  function handlePlay(id: string) {
    if (playing && playing !== id) audioRefs.current[playing]?.pause()
    const audio = audioRefs.current[id]
    if (!audio) return
    if (playing === id) { audio.pause(); setPlaying(null) }
    else { audio.play(); setPlaying(id) }
  }

  function handleSeek(id: string, e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRefs.current[id]
    if (!audio) return
    audio.currentTime = Number(e.target.value)
  }

  useEffect(() => {
    return () => { Object.values(audioRefs.current).forEach(a => a?.pause()) }
  }, [])

  const activeTrack = TRACKS.find(x => x.id === playing)

  return (
    <section id="musique" className="section section-alt">
      <div className="container">

        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="eyebrow">Discographie · Win Concept Industry</div>
          <h2 style={{ marginBottom: '1rem' }}>
            La musique de <span style={{ color: 'var(--blue)' }}>Simba Draken</span>
          </h2>
          <p style={{ maxWidth: 600, fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            {TRACKS.length} titres disponibles en écoute directe. Dans ces sons, Simba Draken cite et met en valeur{' '}
            <strong style={{ color: 'var(--blue)' }}>Win Concept Industry</strong> — chaque écoute est une exposition pour la marque.
            Stream intégral sur NKUMU.
          </p>
          {/* WCI music banner */}
          <div style={{
            marginTop: '1.5rem',
            background: 'linear-gradient(135deg, rgba(200,0,0,0.08), rgba(212,160,23,0.05))',
            border: '1px solid rgba(200,0,0,0.18)',
            borderRadius: 'var(--r-sm)', padding: '1rem 1.5rem',
            display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
          }}>
            <div style={{ width: 32, height: 32, borderRadius: 7, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 900, color: '#fff', flexShrink: 0 }}>WCI</div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--text-1)' }}>Produit par Win Concept Industry</span>
              <span style={{ fontSize: '.78rem', color: 'var(--text-3)', marginLeft: '.75rem' }}>Yaoundé, Cameroun 🇨🇲 · Chaque son, une publicité pour le label</span>
            </div>
          </div>
        </div>

        {/* Albums cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {ALBUMS.map(a => (
            <a key={a.id} href={a.youtubePlaylist} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', gap: '1rem', alignItems: 'center',
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)', padding: '1rem',
                textDecoration: 'none', transition: 'all .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,0,0,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ width: 72, height: 72, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                <img src={a.cover} alt={a.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '.6rem', fontWeight: 700, letterSpacing: '.12em',
                  color: 'var(--blue)', textTransform: 'uppercase', marginBottom: '.3rem',
                }}>{a.type} · {a.annee}</div>
                <div style={{ fontWeight: 800, fontSize: '.95rem', color: 'var(--text-1)', lineHeight: 1.2, marginBottom: '.2rem' }}>{a.titre}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--text-3)' }}>{a.nbTitres} titre{a.nbTitres > 1 ? 's' : ''} · {a.label}</div>
              </div>
              <span style={{ color: 'var(--text-3)', flexShrink: 0 }}>→</span>
            </a>
          ))}
        </div>

        {/* Lecteur actif */}
        {activeTrack && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(200,0,0,0.12), rgba(200,0,0,0.04))',
            border: '1px solid rgba(200,0,0,0.35)',
            borderRadius: 'var(--r-lg)', padding: '1.5rem',
            marginBottom: '2rem',
            display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap',
          }}>
            <img src={activeTrack.cover} alt={activeTrack.titre}
              style={{ width: 72, height: 72, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: '.2rem' }}>
                {activeTrack.titre}
                {activeTrack.feat && <span style={{ color: 'var(--blue)', fontSize: '.82rem', marginLeft: '.5rem', fontWeight: 400 }}>{activeTrack.feat}</span>}
              </div>
              <div style={{ fontSize: '.75rem', color: 'var(--text-2)', marginBottom: '.75rem' }}>
                Simba Draken · {activeTrack.annee} · {activeTrack.album}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <span style={{ fontSize: '.7rem', color: 'var(--text-3)', minWidth: 36 }}>{fmtTime(progress[activeTrack.id] || 0)}</span>
                <input type="range" min="0" max={duration[activeTrack.id] || 100} value={progress[activeTrack.id] || 0}
                  onChange={e => handleSeek(activeTrack.id, e)}
                  style={{ flex: 1, accentColor: 'var(--blue)', height: 4, cursor: 'pointer' }} />
                <span style={{ fontSize: '.7rem', color: 'var(--text-3)', minWidth: 36, textAlign: 'right' }}>{fmtTime(duration[activeTrack.id] || 0)}</span>
              </div>
            </div>
            <button onClick={() => handlePlay(activeTrack.id)} style={{
              width: 52, height: 52, borderRadius: '50%', background: 'var(--blue)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', border: 'none', color: '#fff', flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                {playing === activeTrack.id
                  ? <><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></>
                  : <path d="M5 3l14 9-14 9V3z"/>}
              </svg>
            </button>
          </div>
        )}

        {/* Filtres */}
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '.4rem 1rem', borderRadius: 100, fontSize: '.78rem', fontWeight: 600,
              background: filter === f ? 'var(--blue)' : 'var(--card)',
              color: filter === f ? '#fff' : 'var(--text-2)',
              border: `1px solid ${filter === f ? 'var(--blue)' : 'var(--border)'}`,
              cursor: 'pointer', transition: 'all .2s',
            }}>{f}</button>
          ))}
        </div>

        {/* Liste des titres */}
        <div style={{ background: 'var(--card)', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
          {filtered.map((t, i) => (
            <div key={t.id}>
              <audio
                ref={el => { audioRefs.current[t.id] = el }}
                src={t.src}
                onTimeUpdate={() => {
                  const a = audioRefs.current[t.id]
                  if (a) setProgress(p => ({ ...p, [t.id]: a.currentTime }))
                }}
                onLoadedMetadata={() => {
                  const a = audioRefs.current[t.id]
                  if (a) setDuration(d => ({ ...d, [t.id]: a.duration }))
                }}
                onEnded={() => setPlaying(null)}
              />
              <div
                className={`track-row ${playing === t.id ? 'playing' : ''}`}
                style={{
                  gridTemplateColumns: '44px 1fr auto auto',
                  borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none',
                  cursor: 'pointer',
                  background: playing === t.id ? ALBUM_COLORS[t.album] : undefined,
                }}
                onClick={() => handlePlay(t.id)}
              >
                <div style={{ position: 'relative', width: 36, height: 36, flexShrink: 0 }}>
                  <img src={t.cover} alt={t.titre}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: 6,
                    background: playing === t.id ? 'rgba(200,0,0,0.7)' : 'rgba(0,0,0,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background .2s',
                  }}>
                    {playing === t.id ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
                      </svg>
                    ) : (
                      <span style={{ fontSize: '.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontWeight: 700, fontSize: '.95rem', color: playing === t.id ? 'var(--blue)' : 'var(--text-1)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {t.titre}
                    {t.feat && <span style={{ color: 'var(--text-3)', fontWeight: 400, fontSize: '.82rem', marginLeft: '.4rem' }}>{t.feat}</span>}
                  </div>
                  <div style={{ fontSize: '.7rem', color: 'var(--text-3)', marginTop: '.15rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                    <span>{t.annee}</span>
                    <span>·</span>
                    <span style={{
                      fontSize: '.6rem', padding: '.1rem .4rem', borderRadius: 3,
                      background: 'rgba(200,0,0,0.1)', color: 'rgba(200,0,0,0.7)',
                      border: '1px solid rgba(200,0,0,0.15)',
                    }}>{t.album}</span>
                  </div>
                </div>

                <div style={{ fontSize: '.78rem', color: 'var(--text-3)', whiteSpace: 'nowrap', textAlign: 'right' }}>
                  {playing === t.id && progress[t.id] ? fmtTime(progress[t.id]) : t.duree}
                </div>

                <a
                  href={NKUMU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{
                    fontSize: '.62rem', fontWeight: 700, letterSpacing: '.08em',
                    padding: '.3rem .6rem', borderRadius: 4,
                    background: 'rgba(200,0,0,0.1)', border: '1px solid rgba(200,0,0,0.25)',
                    color: 'var(--blue)', textTransform: 'uppercase', whiteSpace: 'nowrap',
                    textDecoration: 'none', transition: 'all .2s',
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
