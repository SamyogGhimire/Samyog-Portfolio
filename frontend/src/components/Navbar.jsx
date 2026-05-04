import React, { useState, useEffect } from 'react'

const navItems = [
  { label: '</Home>', id: 'home' },
  { label: '</AboutMe>', id: 'about' },
  { label: '</Skills>', id: 'skills' },
  { label: '</Projects>', id: 'projects' },
  { label: '</Contact>', id: 'contact' },
  { label: '</Resume>', id: 'resume' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = navItems.map(n => document.getElementById(n.id))
      const current = sections.findLast(s => s && s.getBoundingClientRect().top <= 120)
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
    }}>
      <style>{`
        .nav-inner {
          max-width: 1200px; margin: 0 auto; height: 66px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800;
          color: var(--text-primary); display: flex; align-items: center;
          gap: 10px; cursor: pointer; letter-spacing: -0.02em;
        }
        .logo-dot {
          width: 9px; height: 9px; background: #7c3aed;
          border-radius: 50%; box-shadow: 0 0 8px #7c3aed;
        }
        .nav-right { display: flex; align-items: center; gap: 0.25rem; }
        .nav-links { display: flex; gap: 0.15rem; list-style: none; }
        .nav-links button {
          background: none; border: none; cursor: pointer;
          font-family: 'Fira Code', monospace; font-size: 0.82rem;
          color: var(--text-secondary); padding: 7px 13px;
          border-radius: 6px; transition: all 0.2s ease; position: relative;
        }
        .nav-links button:hover { color: var(--text-primary); background: rgba(124,58,237,0.12); }
        .nav-links button.active { color: #a855f7; background: rgba(124,58,237,0.15); }
        .nav-links button.active::after {
          content: ''; position: absolute; bottom: -2px; left: 50%;
          transform: translateX(-50%); width: 4px; height: 4px;
          background: #7c3aed; border-radius: 50%; box-shadow: 0 0 6px #7c3aed;
        }
        .theme-toggle {
          background: var(--bg-card); border: 1px solid var(--border-color);
          border-radius: 8px; width: 38px; height: 38px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; transition: all 0.2s; margin-left: 0.5rem;
          color: var(--text-primary);
        }
        .theme-toggle:hover { border-color: var(--border-hover); background: var(--bg-card-hover); }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 4px; background: none; border: none;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: var(--text-secondary); border-radius: 2px; transition: all 0.3s;
        }
        .mobile-menu {
          display: flex; flex-direction: column;
          padding: 0.75rem 2rem 1rem;
          background: var(--nav-bg);
          border-bottom: 1px solid var(--border-color);
          backdrop-filter: blur(12px);
        }
        .mobile-menu button {
          background: none; border: none; cursor: pointer;
          font-family: 'Fira Code', monospace; font-size: 0.9rem;
          color: var(--text-secondary); padding: 12px 0; text-align: left;
          border-bottom: 1px solid var(--border-color);
        }
        .mobile-menu button.active { color: #a855f7; }
        @media (max-width: 860px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollTo('home')}>
          <div className="logo-dot" />
          Samyog
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={active === item.id ? 'active' : ''}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <button
              key={item.id}
              className={active === item.id ? 'active' : ''}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
