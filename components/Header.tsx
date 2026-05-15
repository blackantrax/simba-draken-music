'use client'

import { useState, useEffect } from 'react'

const NAV = [
  { href: '#about',    label: 'À Propos' },
  { href: '#musique',  label: 'Musique' },
  { href: '#videos',   label: 'Vidéos' },
  { href: '#concerts', label: 'Concerts' },
  { href: '#galerie',  label: 'Galerie' },
  { href: '#contact',  label: 'Contact' },
]

const NKUMU_URL = 'https://nkumu-music.vercel.app'

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
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '.625rem', textDecoration: 'none' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: 'var(--blue)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '13px', fontWeight: 900, color: '#fff',
          letterSpacing: '.04em', flexShrink: 0,
        }}>SD</div>
        <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '.04em', color: '#fff' }}>SIMBA DRAKEN</span>
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

      {/* CTA NKUMU + burger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer" className="btn btn-blue"
          style={{ padding: '.55rem 1.25rem', fontSize: '.82rem', minHeight: 40 }}>
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
          <a href={NKUMU_URL} target="_blank" rel="noopener noreferrer"
            className="btn btn-blue" style={{ marginTop: '1rem', justifyContent: 'center' }}>
            Écouter sur NKUMU
          </a>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-burger { display: none !important; }
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
