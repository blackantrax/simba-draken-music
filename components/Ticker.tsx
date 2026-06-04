'use client'

const ITEMS = [
  '🏢 Win Concept Industry — Management & Production · Yaoundé · Canada',
  '🎵 SIMBA DRAKEN — "Ōshitsu No Kaidan" · 10 titres disponibles sur NKUMU',
  '🌟 DIABLIT — Nouvel artiste WCI · Prochaines sorties 2025',
  '🔥 STOPPER — Le dernier single de Simba Draken · 2025',
  '🌍 30M+ vues TikTok — Simba Draken · Trend "on est beau × 2"',
  '📲 Bookings & Collabs · WhatsApp +1 438 492-7278 · Canada 🇨🇦',
  '▶ Stream l\'intégralité sur NKUMU — nkumu-music.vercel.app',
  '🎤 Simba Draken cite WIN CONCEPT INDUSTRY dans chaque son — la marque dans la musique',
  '🤝 Diablit × Simba Draken — Win Concept Industry · Deux artistes, une vision',
  '🎬 Clip SIMBA VYBE + Sabrina Remix — Disponibles maintenant',
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
