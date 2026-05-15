'use client'
import { useState } from 'react'

const NKUMU_URL = 'https://nkumu-music.vercel.app'
const EMAIL = 'simbadraken51@gmail.com'
const PHONE = '+237 656 422 854'
const YT_CHANNEL = 'https://www.youtube.com/@SIMBADRAKEN'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', sujet: 'booking', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--card)',
    border: '1px solid var(--border)', borderRadius: 'var(--r-sm)',
    padding: '.875rem 1rem', color: 'var(--text-1)',
    fontSize: '.92rem', outline: 'none',
    transition: 'border-color .2s', fontFamily: 'inherit',
  }

  return (
    <section id="contact" className="section section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="red-line" />

      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="eyebrow">Contact & Booking</div>
          <h2 style={{ marginBottom: '1rem' }}>
            Travaillons <span style={{ color: 'var(--blue)' }}>ensemble</span>
          </h2>
          <p style={{ maxWidth: 520, fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            Booking, collaborations, interviews, partenariats. Contacte l&apos;équipe
            de Simba Draken directement via Win Concept Industry.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 5rem)' }} className="contact-grid">

          {/* Formulaire */}
          <div>
            {sent ? (
              <div style={{
                background: 'rgba(200,0,0,0.08)', border: '1px solid rgba(200,0,0,0.25)',
                borderRadius: 'var(--r-md)', padding: '2.5rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ marginBottom: '.75rem' }}>Message envoyé !</h3>
                <p>L&apos;équipe Win Concept Industry reviendra vers toi rapidement.</p>
                <button
                  onClick={() => { setSent(false); setForm({ nom: '', email: '', sujet: 'booking', message: '' }) }}
                  className="btn btn-outline"
                  style={{ marginTop: '1.5rem', fontSize: '.85rem' }}
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input style={inputStyle} placeholder="Ton nom" required
                    value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} />
                  <input style={inputStyle} type="email" placeholder="Ton email" required
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <select style={{ ...inputStyle }}
                  value={form.sujet} onChange={e => setForm(f => ({ ...f, sujet: e.target.value }))}>
                  <option value="booking">Booking / Concert</option>
                  <option value="collab">Collaboration musicale</option>
                  <option value="presse">Presse / Médias / Interview</option>
                  <option value="sponsor">Partenariat / Sponsor</option>
                  <option value="autre">Autre demande</option>
                </select>
                <textarea style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
                  placeholder="Décris ton projet, ta demande, les dates envisagées..." required
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                <button type="submit" className="btn btn-blue" style={{ justifyContent: 'center' }}>
                  Envoyer le message →
                </button>
                <p style={{ fontSize: '.72rem', color: 'var(--text-3)', textAlign: 'center', margin: 0 }}>
                  Ou contactez directement :{' '}
                  <a href={`mailto:${EMAIL}`} style={{ color: 'var(--blue)' }}>{EMAIL}</a>
                </p>
              </form>
            )}
          </div>

          {/* Infos contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Contacts directs */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '1.5rem' }}>
              <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '1rem' }}>
                Contacts directs
              </div>

              <a href={`mailto:${EMAIL}`} style={{
                display: 'flex', alignItems: 'center', gap: '.875rem',
                padding: '.875rem 0', borderBottom: '1px solid var(--border)',
                textDecoration: 'none', transition: 'color .2s',
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(200,0,0,0.12)', border: '1px solid rgba(200,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                  ✉️
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.85rem', color: 'var(--text-1)' }}>Email</div>
                  <div style={{ fontSize: '.78rem', color: 'var(--blue)' }}>{EMAIL}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: '.8rem' }}>→</span>
              </a>

              <a href={`tel:${PHONE.replace(/\s/g, '')}`} style={{
                display: 'flex', alignItems: 'center', gap: '.875rem',
                padding: '.875rem 0',
                textDecoration: 'none', transition: 'color .2s',
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(200,0,0,0.12)', border: '1px solid rgba(200,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                  📞
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.85rem', color: 'var(--text-1)' }}>Téléphone</div>
                  <div style={{ fontSize: '.78rem', color: 'var(--text-2)' }}>{PHONE}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: '.8rem' }}>→</span>
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '1.5rem' }}>
              <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '1rem' }}>
                Réseaux sociaux
              </div>
              {[
                { icon: '▶', label: 'YouTube', handle: '@SIMBADRAKEN · 641 abonnés', href: YT_CHANNEL },
                { icon: '📘', label: 'Facebook', handle: 'Simba Draken · 1,9K fans', href: 'https://facebook.com/simbadrakenoff' },
                { icon: '🎵', label: 'TikTok', handle: 'Simba Draken · 12,6K abonnés', href: 'https://tiktok.com/@simbadrakenoff' },
                { icon: '📸', label: 'Instagram', handle: '@simbadraken · 70 abonnés', href: 'https://instagram.com/simbadraken' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '.875rem',
                  padding: '.625rem 0', borderBottom: '1px solid var(--border)',
                  textDecoration: 'none', transition: 'color .2s',
                }}>
                  <span style={{ fontSize: '1.1rem', width: 24, textAlign: 'center' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '.85rem', color: 'var(--text-1)' }}>{s.label}</div>
                    <div style={{ fontSize: '.72rem', color: 'var(--text-3)' }}>{s.handle}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: '.8rem' }}>→</span>
                </a>
              ))}
            </div>

            {/* Win Concept badge */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(200,0,0,0.08), rgba(200,0,0,0.03))',
              border: '1px solid rgba(200,0,0,0.2)',
              borderRadius: 'var(--r-md)', padding: '1.25rem 1.5rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(200,0,0,0.15)', border: '1px solid rgba(200,0,0,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', flexShrink: 0,
              }}>🏢</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '.95rem', color: 'var(--text-1)', marginBottom: '.15rem' }}>Win Concept Industry</div>
                <div style={{ fontSize: '.78rem', color: 'var(--text-2)' }}>Management & Production · Yaoundé, Cameroun 🇨🇲</div>
              </div>
            </div>

            {/* NKUMU */}
            <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(135deg, rgba(200,0,0,0.06), rgba(212,160,23,0.04))',
              border: '1px solid rgba(212,160,23,0.2)',
              borderRadius: 'var(--r-md)', padding: '1.25rem 1.5rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              textDecoration: 'none', transition: 'border-color .2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,160,23,0.5)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,160,23,0.2)' }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', flexShrink: 0,
              }}>🎵</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '.95rem', color: 'var(--text-1)', marginBottom: '.15rem' }}>Stream sur NKUMU</div>
                <div style={{ fontSize: '.78rem', color: 'var(--text-2)' }}>nkumu-music.vercel.app — Plateforme officielle</div>
              </div>
              <span style={{ marginLeft: 'auto', color: 'var(--gold)', fontSize: '1.2rem' }}>→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, select:focus, textarea:focus { border-color: var(--blue) !important; }
      `}</style>
    </section>
  )
}
