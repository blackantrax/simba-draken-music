'use client'

import { useState, useEffect } from 'react'

const NAV = [
  { href: '#about',    label: 'Artistes' },
  { href: '#musique',  label: 'Musique' },
  { href: '#videos',   label: 'Vidéos' },
  { href: '#concerts', label: 'Concerts' },
  { href: '#galerie',  label: 'Galerie' },
  { href: '#contact',  label: 'Contact' },
]

const NKUMU_URL = 'https://nkumu-music.vercel.app'
const WA_URL = 'https://wa.me/14384927278'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 clamp(1.25rem, 5vw, 3.5rem)',
      height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(6,6,8,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,0,0,0.2)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      {/* Logo Win Concept Industry */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '.625rem', textDecoration: 'none' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: 'var(--blue)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#fff',
          letterSpacing: '.04em', flexShrink: 0,
        }}>WCI</div>
        <div>
          <span style={{ fontWeight: 900, fontSize: '.95rem', letterSpacing: '.06em', color: '#fff', display: 'block', lineHeight: 1.1 }}>WIN CONCEPT</span>
          <span style={{ fontWeight: 600, fontSize: '.6rem', letterSpacing: '.2em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>INDUSTRY</span>
        </div>
      </a>

      {/* Nav desktop */}
      <nav style={{ display: 'flex', gap: '2.25rem', alignItems: 'center' }} className="nav-desktop">
        {NAV.map(n => (
          <a key={n.href} href={n.href} style={{
            fontSize: '.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.65)',
            transition: 'color .2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
          >{n.label}</a>
        ))}
      </nav>

      {/* CTAs + burger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          className="btn btn-whatsapp nav-wa"
          style={{ padding: '.5rem 1.1rem', fontSize: '.8rem', minHeight: 38, gap: '.4rem' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
        <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" className="btn btn-blue nav-nkumu"
          style={{ padding: '.5rem 1.1rem', fontSize: '.8rem', minHeight: 38 }}>
          Écouter sur NKUMU
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="nav-burger"
          style={{
            width: 40, height: 40, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 5,
            background: 'none', border: 'none', cursor: 'pointer',
          }}>
          <span style={{ width: 22, height: 2, background: '#fff', borderRadius: 1, display: 'block', transition: 'all .2s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ width: 22, height: 2, background: '#fff', borderRadius: 1, display: 'block', opacity: open ? 0 : 1, transition: 'opacity .2s' }} />
          <span style={{ width: 22, height: 2, background: '#fff', borderRadius: 1, display: 'block', transition: 'all .2s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div style={{
          position: 'absolute', top: 68, left: 0, right: 0,
          background: 'rgba(6,6,8,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(200,0,0,0.2)',
          padding: '1.5rem clamp(1.25rem, 5vw, 3.5rem) 2rem',
          display: 'flex', flexDirection: 'column', gap: '.25rem',
        }}>
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
              padding: '.875rem 0', fontSize: '1.05rem', fontWeight: 600,
              color: 'rgba(255,255,255,0.8)', borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>{n.label}</a>
          ))}
          <div style={{ display: 'flex', gap: '.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp" style={{ flex: 1, justifyContent: 'center', minWidth: 140 }}>
              WhatsApp →
            </a>
            <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-blue" style={{ flex: 1, justifyContent: 'center', minWidth: 140 }}>
              NKUMU →
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-burger { display: none !important; }
        .nav-wa { display: inline-flex !important; }
        @media (max-width: 1050px) {
          .nav-wa { display: none !important; }
        }
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
          .nav-nkumu { display: none !important; }
        }
      `}</style>
    </header>
  )
}
