'use client'

const CONCERTS = [
  {
    id: 'franglish',
    artiste: 'Franglish',
    role: 'Première partie',
    lieu: 'Yaoundé, Cameroun',
    annee: '2022',
    type: 'premiere',
    desc: 'Première partie du rappeur franco-congolais Franglish lors de sa date camerounaise.',
  },
  {
    id: 'limo',
    artiste: 'Limo',
    role: 'Première partie',
    lieu: 'Yaoundé, Cameroun',
    annee: '2022',
    type: 'premiere',
    desc: 'Ouverture de scène pour l\'artiste Limo devant un public de Yaoundé.',
  },
  {
    id: 'hiro',
    artiste: 'Hiro',
    role: 'Première partie',
    lieu: 'Yaoundé, Cameroun',
    annee: '2023',
    type: 'premiere',
    desc: 'Première partie de Hiro, l\'un des artistes africains les plus streamés sur Spotify.',
  },
  {
    id: 'maalhox',
    artiste: 'Maalhox Le Vibeur',
    role: 'Première partie',
    lieu: 'Yaoundé, Cameroun',
    annee: '2023',
    type: 'premiere',
    desc: 'Scène en ouverture pour Maalhox Le Vibeur, star de la scène camerounaise.',
  },
  {
    id: 'tenor',
    artiste: 'Ténor',
    role: 'Première partie',
    lieu: 'Yaoundé, Cameroun',
    annee: '2024',
    type: 'premiere',
    desc: 'Ouverture pour Ténor, le chanteur afrobeat camerounais aux millions de streams.',
  },
  {
    id: 'khalifa-premier',
    artiste: 'Khalifa Premier',
    role: 'Première partie',
    lieu: 'Yaoundé, Cameroun',
    annee: '2024',
    type: 'premiere',
    desc: 'Première partie du rappeur Khalifa Premier, grande figure du rap camerounais.',
  },
]

const COLLABS = [
  {
    id: 'khalifa-collab',
    artiste: 'Khalifa Premier',
    titre: 'Collaboration artistique',
    type: 'Feat',
    annee: '2024',
    desc: 'Collaboration directe avec Khalifa Premier — une fusion rap/trap qui scelle la crédibilité de Simba sur la scène nationale.',
  },
  {
    id: 'mel-michele',
    artiste: 'Mel Michèle',
    titre: 'Collaboration artistique',
    type: 'Feat',
    annee: '2024',
    desc: 'Feat avec Mel Michèle, artiste féminine reconnue de Yaoundé. Une collab qui démontre la polyvalence de Simba Draken.',
  },
  {
    id: 'zamazu-collab',
    artiste: 'Zamazu',
    titre: 'ZAMAZU × SIMBA DRAKEN × 45 Moshino',
    type: 'Collab',
    annee: '2023',
    desc: 'Triple collaboration avec Zamazu et 45 Moshino — 1,8K vues YouTube. Trois styles, une cohésion totale.',
    youtubeId: '_gDcexjRLsE',
  },
  {
    id: 'le-roy-tsala',
    artiste: 'Le Roy Tsala',
    titre: 'Collaboration artistique',
    type: 'Feat',
    annee: '2024',
    desc: 'Feat avec Le Roy Tsala, artiste issu de la scène camerounaise underground — une alliance de deux univers distincts.',
  },
  {
    id: 'nls-237',
    artiste: 'NLS 237',
    titre: 'Kadji Champagne du Pays',
    type: 'Feat',
    annee: '2024',
    desc: 'Feat sur "Kadji Champagne du Pays" avec NLS 237 — 30 000 vues YouTube, le résultat le plus viral de ces collaborations.',
    youtubeId: 'HMhgodPyPsI',
    vues: '30K',
  },
]

export default function Concerts() {
  return (
    <section id="concerts" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="red-line" />

      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="eyebrow">Scène & Collaborations</div>
          <h2 style={{ marginBottom: '1rem' }}>
            Simba sur <span style={{ color: 'var(--blue)' }}>scène.</span>
          </h2>
          <p style={{ maxWidth: 520, fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            Premières parties d&apos;artistes majeurs et collaborations — la preuve que Simba Draken
            s&apos;impose sur toutes les scènes.
          </p>
        </div>

        {/* Premières parties */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            <div style={{
              background: 'rgba(200,0,0,0.12)', border: '1px solid rgba(200,0,0,0.3)',
              borderRadius: 8, padding: '.5rem 1rem',
              fontSize: '.7rem', fontWeight: 800, color: 'var(--blue)', letterSpacing: '.15em', textTransform: 'uppercase',
            }}>
              Premières Parties
            </div>
            <div style={{ height: 1, flex: 1, background: 'var(--border)' }} />
            <div style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>{CONCERTS.length} concerts</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {CONCERTS.map((c) => (
              <div key={c.id} className="card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.875rem' }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: '.15rem' }}>{c.artiste}</div>
                    <div style={{ fontSize: '.72rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>{c.role}</div>
                  </div>
                  <div style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 6, padding: '.3rem .6rem',
                    fontSize: '.65rem', fontWeight: 800, color: 'var(--gold)',
                  }}>{c.annee}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.35rem', marginBottom: '.625rem' }}>
                  <span style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>📍</span>
                  <span style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>{c.lieu}</span>
                </div>
                <p style={{ fontSize: '.82rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborations */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            <div style={{
              background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.3)',
              borderRadius: 8, padding: '.5rem 1rem',
              fontSize: '.7rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '.15em', textTransform: 'uppercase',
            }}>
              Collaborations
            </div>
            <div style={{ height: 1, flex: 1, background: 'var(--border)' }} />
            <div style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>{COLLABS.length} collabs</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {COLLABS.map((c) => (
              <div key={c.id} className="card" style={{ padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
                {/* Gold accent left border */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
                  background: 'linear-gradient(to bottom, transparent, var(--gold) 30%, var(--gold) 70%, transparent)',
                  opacity: .6,
                }} />
                <div style={{ paddingLeft: '.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.75rem' }}>
                    <div>
                      <div style={{ fontWeight: 900, fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: '.15rem' }}>{c.artiste}</div>
                      {c.titre !== 'Collaboration artistique' && (
                        <div style={{ fontSize: '.78rem', color: 'var(--text-2)', fontStyle: 'italic', marginBottom: '.15rem' }}>
                          &ldquo;{c.titre}&rdquo;
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                        <span style={{
                          fontSize: '.62rem', fontWeight: 800, letterSpacing: '.1em',
                          background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.3)',
                          color: 'var(--gold)', borderRadius: 4, padding: '.15rem .45rem', textTransform: 'uppercase',
                        }}>{c.type}</span>
                        <span style={{ fontSize: '.65rem', color: 'var(--text-3)' }}>{c.annee}</span>
                        {'vues' in c && c.vues && (
                          <span style={{ fontSize: '.72rem', fontWeight: 800, color: 'var(--gold)' }}>{c.vues} vues</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '.82rem', color: 'var(--text-2)', lineHeight: 1.6, marginBottom: '.875rem' }}>{c.desc}</p>
                  {'youtubeId' in c && c.youtubeId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${c.youtubeId}`}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                        fontSize: '.75rem', fontWeight: 700, color: 'var(--blue)',
                        textDecoration: 'none',
                        transition: 'opacity .2s',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                      Voir le clip
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner booking */}
        <div style={{
          marginTop: 'clamp(3rem, 6vw, 5rem)',
          background: 'linear-gradient(135deg, rgba(200,0,0,0.08), rgba(200,0,0,0.03))',
          border: '1px solid rgba(200,0,0,0.2)',
          borderRadius: 'var(--r-md)', padding: '2rem 2.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '1.5rem', flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: '.68rem', fontWeight: 800, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '.5rem' }}>
              Programmer nos artistes
            </div>
            <div style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', fontWeight: 900, color: 'var(--text-1)', marginBottom: '.4rem' }}>
              Simba Draken &amp; Diablit — Disponibles pour concerts
            </div>
            <p style={{ fontSize: '.9rem', color: 'var(--text-2)' }}>
              Bookings via Win Concept Industry · Yaoundé 🇨🇲 · Canada 🇨🇦 · WhatsApp +1 438 492-7278
            </p>
          </div>
          <a href="#contact" className="btn btn-blue">
            Contacter pour booking →
          </a>
        </div>

      </div>
    </section>
  )
}
