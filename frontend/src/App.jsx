import React, { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './sections/Hero'
import Work from './sections/Work'
import Why from './sections/Why'
import About from './sections/About'
import Skills from './sections/Skills'
import Faq from './sections/Faq'
import Contact from './sections/Contact'

const initialTheme = () => {
  try {
    return localStorage.getItem('theme') || 'dark'
  } catch {
    return 'dark'
  }
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch { /* private mode */ }
  }, [theme])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar theme={theme} toggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))} />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Work />
        <Why />
        <About theme={theme} />
        <Skills />
        <Faq />
      </main>
      <Contact />
    </MotionConfig>
  )
}
