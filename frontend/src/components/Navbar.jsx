import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export const scrollTo = (id, block = 'start') => {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  document.getElementById(id)?.scrollIntoView({ behavior, block })
}

export default function Navbar({ theme, toggleTheme }) {
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > window.innerHeight * 0.85)
      const found = navLinks.map(l => document.getElementById(l.id))
        .filter(el => el && el.getBoundingClientRect().top <= window.innerHeight * 0.4)
        .pop()
      setActive(found ? found.id : '')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = event => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const go = id => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <>
      <nav className={`nav ${solid || open ? 'solid' : ''}`} aria-label="Primary navigation">
        <div className="wrap nav-inner">
          <button className="brand" onClick={() => go('home')} aria-label="Back to top">
            Samyog<span>Ghimire</span>
          </button>

          <div className="nav-links">
            {navLinks.map(l => (
              <button key={l.id} className={active === l.id ? 'active' : ''} onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </div>

          <div className="nav-right">
            <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="pill pill-white nav-cta" onClick={() => go('contact')}>
              <span className="dot" /> Get in Touch
            </button>
            <button
              className="icon-btn nav-menu-btn"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(l => (
              <button key={l.id} onClick={() => go(l.id)}>{l.label}</button>
            ))}
            <button className="pill pill-accent" onClick={() => go('contact')}>Get in Touch</button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
