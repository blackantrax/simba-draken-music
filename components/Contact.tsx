'use client'
import { useState } from 'react'

const NKUMU_URL = 'https://nkumu-music.vercel.app'
const EMAIL = 'winconceptindustrystudios@gmail.com'
const PHONE_CM = '+237 656 422 854'
const PHONE_CA = '+1 (438) 492-7278'
const WA_URL = 'https://wa.me/14384927278'
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
            Win Concept Industry pour nos artistes — Simba Draken &amp; Diablit.
          </p>
        </div>

        {/* WhatsApp Banner — large CTA */}
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          background: 'linear-gradient(135deg, rgba(37,211,102,0.12) 0%, rgba(37,211,102,0.04) 100%)',
          border: '1px solid rgba(37,211,102,0.35)',
          borderRadius: 'var(--r-md)', padding: '1.5rem 2rem',
          textDecoration: 'none', marginBottom: '2.5rem',
          transition: 'all .25s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,211,102,0.6)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,211,102,0.35)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
        >
          <div style={{
            width: 52, height: 52, borderRadius: 14, flexShrink: 0,
            background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(37,211,102,0.35)',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 900, fontSize: '1.05rem', color: '#fff', marginBottom: '.25rem' }}>
              Écrivez-nous directement sur WhatsApp
            </div>
            <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,0.5)' }}>
              Réponse rapide · Booking, collabs, interviews · Win Concept Industry
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '.25rem', flexShrink: 0 }}>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: '#25D366' }}>{PHONE_CA}</div>
            <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>Canada 🇨🇦 · WhatsApp</div>
          </div>
          <div style={{
            background: '#25D366', color: '#fff', borderRadius: 100,
            padding: '.6rem 1.5rem', fontWeight: 800, fontSize: '.88rem',
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            Ouvrir WhatsApp →
          </div>
        </a>

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
                  <option value="booking">Booking / Concert — Simba Draken</option>
                  <option value="booking-diablit">Booking / Concert — Diablit</option>
                  <option value="collab">Collaboration musicale</option>
                  <option value="presse">Presse / Médias / Interview</option>
                  <option value="sponsor">Partenariat / Sponsor · Win Concept Industry</option>
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

              {/* WhatsApp Canada */}
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '.875rem',
                padding: '.875rem 0', borderBottom: '1px solid var(--border)',
                textDecoration: 'none', transition: 'color .2s',
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.85rem', color: 'var(--text-1)' }}>WhatsApp — Canada 🇨🇦</div>
                  <div style={{ fontSize: '.78rem', color: '#25D366', fontWeight: 700 }}>{PHONE_CA}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: '#25D366', fontSize: '.8rem' }}>→</span>
              </a>

              {/* Email */}
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

              {/* Téléphone Cameroun */}
              <a href={`tel:${PHONE_CM.replace(/\s/g, '')}`} style={{
                display: 'flex', alignItems: 'center', gap: '.875rem',
                padding: '.875rem 0',
                textDecoration: 'none', transition: 'color .2s',
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(200,0,0,0.12)', border: '1px solid rgba(200,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                  📞
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.85rem', color: 'var(--text-1)' }}>Téléphone — Cameroun 🇨🇲</div>
                  <div style={{ fontSize: '.78rem', color: 'var(--text-2)' }}>{PHONE_CM}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: '.8rem' }}>→</span>
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '1.5rem' }}>
              <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '1rem' }}>
                Réseaux sociaux — Simba Draken
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
                background: 'var(--blue)', border: '1px solid rgba(200,0,0,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: 900, color: '#fff', flexShrink: 0, letterSpacing: '.04em',
              }}>WCI</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: '.95rem', color: 'var(--text-1)', marginBottom: '.15rem' }}>Win Concept Industry</div>
                <div style={{ fontSize: '.78rem', color: 'var(--text-2)' }}>Management & Production · Yaoundé 🇨🇲 · Canada 🇨🇦</div>
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
