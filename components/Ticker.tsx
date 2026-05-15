'use client'

const ITEMS = [
  '🎵 Nouvel album en préparation — 2025',
  '🔥 MAGNETIC ft. JKS — Disponible maintenant',
  '⭐ BRILLER — En exclusivité sur NKUMU',
  '🎬 Clip SIMBA VYBE maintenant en ligne',
  '🌍 La musique camerounaise sur tous les continents',
  '🤝 Winconcept & Mezik Record — Collab BSV',
  '▶ Stream et achète sur NKUMU — nkumu-music.vercel.app',
  '🎤 SIMBA DRAKEN ft. Sabrina — Remix disponible',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
