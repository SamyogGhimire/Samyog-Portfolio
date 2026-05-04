import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  if (loading) return <Loader theme={theme} />

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <section id="home"><Home /></section>
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color), transparent)', maxWidth: '1200px', margin: '0 auto' }} />
        <section id="about"><About /></section>
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color), transparent)', maxWidth: '1200px', margin: '0 auto' }} />
        <section id="skills"><Skills /></section>
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color), transparent)', maxWidth: '1200px', margin: '0 auto' }} />
        <section id="projects"><Projects /></section>
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color), transparent)', maxWidth: '1200px', margin: '0 auto' }} />
        <section id="contact"><Contact /></section>
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color), transparent)', maxWidth: '1200px', margin: '0 auto' }} />
        <section id="resume"><Resume /></section>
      </main>
    </div>
  )
}
