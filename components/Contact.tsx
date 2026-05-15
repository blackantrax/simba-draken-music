'use client'
import { useState } from 'react'

const NKUMU_URL = 'https://nkumu-music.vercel.app'

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
    <section id="contact" className="section">
      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="eyebrow">Contact</div>
          <h2 style={{ marginBottom: '1rem' }}>
            Travaillons <span style={{ color: 'var(--blue)' }}>ensemble</span>
          </h2>
          <p style={{ maxWidth: 520, fontSize: 'clamp(.92rem, 1.7vw, 1.05rem)' }}>
            Booking, collaborations, presse. Contacte Simba Draken directement.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 5rem)' }} className="contact-grid">

          {/* Formulaire */}
          <div>
            {sent ? (
              <div style={{
                background: 'rgba(26,111,255,0.08)', border: '1px solid rgba(26,111,255,0.25)',
                borderRadius: 'var(--r-md)', padding: '2.5rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ marginBottom: '.75rem' }}>Message envoyé !</h3>
                <p>L&apos;équipe de Simba Draken reviendra vers toi rapidement.</p>
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
                  <option value="presse">Presse / Médias</option>
                  <option value="sponsor">Partenariat / Sponsor</option>
                  <option value="autre">Autre</option>
                </select>
                <textarea style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
                  placeholder="Ton message..." required
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                <button type="submit" className="btn btn-blue" style={{ justifyContent: 'center' }}>
                  Envoyer le message →
                </button>
              </form>
            )}
          </div>

          {/* Liens & infos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-md)', padding: '1.5rem',
            }}>
              <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '1rem' }}>
                Réseaux sociaux
              </div>
              {[
                { icon: '📘', label: 'Facebook', handle: 'Simba Draken', href: 'https://facebook.com' },
                { icon: '🎵', label: 'TikTok',   handle: '@simbadrkn',   href: 'https://tiktok.com' },
                { icon: '📸', label: 'Instagram', handle: '@simbadraken', href: 'https://instagram.com' },
                { icon: '▶',  label: 'YouTube',  handle: 'Simba Draken Officiel', href: 'https://youtube.com' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '.875rem',
                  padding: '.75rem 0', borderBottom: '1px solid var(--border)',
                  transition: 'color .2s',
                }}>
                  <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '.88rem', color: 'var(--text-1)' }}>{s.label}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--text-3)' }}>{s.handle}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: '.8rem' }}>→</span>
                </a>
              ))}
            </div>

            {/* NKUMU block */}
            <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(135deg, rgba(26,111,255,0.12), rgba(212,160,23,0.06))',
              border: '1px solid rgba(26,111,255,0.25)',
              borderRadius: 'var(--r-md)', padding: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              textDecoration: 'none', transition: 'border-color .2s',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: 'var(--blue)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0,
              }}>🎵</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '.95rem', color: 'var(--text-1)', marginBottom: '.2rem' }}>Stream sur NKUMU</div>
                <div style={{ fontSize: '.78rem', color: 'var(--text-2)' }}>nkumu-music.vercel.app — Plateforme officielle</div>
              </div>
              <span style={{ marginLeft: 'auto', color: 'var(--blue)', fontSize: '1.2rem' }}>→</span>
            </a>

            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '1.25rem' }}>
              <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '.5rem' }}>Email direct</div>
              <a href="mailto:simbadrakenfop@gmail.com" style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '.9rem' }}>
                simbadrakenfop@gmail.com
              </a>
            </div>
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
