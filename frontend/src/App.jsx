import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

const Divider = () => <div className="section-divider" />

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <div>
      <Navbar theme={theme} toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <Home />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Divider />
      <Resume />
    </div>
  )
}
