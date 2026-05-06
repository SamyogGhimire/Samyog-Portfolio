import React, { useState, useEffect } from 'react'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
  { label: 'Resume', id: 'resume' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const found = links.map(l => document.getElementById(l.id))
        .findLast(el => el && el.getBoundingClientRect().top <= 100)
      if (found) setActive(found.id)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.25s',
    }}>
      <style>{`
        .nav-wrap {
          max-width: 860px; margin: 0 auto;
          padding: 0 1.5rem; height: 60px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-brand {
          font-size: 1.05rem; font-weight: 700;
          color: var(--text); cursor: pointer;
          display: flex; align-items: center; gap: 8px;
        }
        .nav-brand span { color: var(--purple); }
        .nav-links { display: flex; align-items: center; gap: 0.25rem; }
        .nav-links button {
          background: none; border: none; cursor: pointer;
          font-family: 'Inter', sans-serif; font-size: 0.88rem;
          color: var(--text-sub); padding: 6px 12px; border-radius: 6px;
          transition: all 0.15s;
        }
        .nav-links button:hover { color: var(--text); background: var(--bg-card); }
        .nav-links button.active { color: var(--purple); font-weight: 500; }
        .theme-btn {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 6px; width: 34px; height: 34px;
          cursor: pointer; font-size: 0.9rem;
          display: flex; align-items: center; justify-content: center;
          margin-left: 0.5rem; transition: border-color 0.15s;
        }
        .theme-btn:hover { border-color: var(--purple); }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; color: var(--text-sub); font-size: 1.2rem;
        }
        .mobile-nav {
          border-top: 1px solid var(--border);
          background: var(--nav-bg); backdrop-filter: blur(10px);
          padding: 0.75rem 1.5rem 1rem;
          display: flex; flex-direction: column; gap: 2px;
        }
        .mobile-nav button {
          background: none; border: none; cursor: pointer;
          font-family: 'Inter', sans-serif; font-size: 0.95rem;
          color: var(--text-sub); padding: 10px 0; text-align: left;
          border-bottom: 1px solid var(--border);
        }
        .mobile-nav button.active { color: var(--purple); font-weight: 500; }
        @media (max-width: 700px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
        }
      `}</style>
      <div className="nav-wrap">
        <div className="nav-brand" onClick={() => go('home')}>
          Samyog<span>.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="nav-links">
            {links.map(l => (
              <button key={l.id} className={active === l.id ? 'active' : ''} onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          {links.map(l => (
            <button key={l.id} className={active === l.id ? 'active' : ''} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
