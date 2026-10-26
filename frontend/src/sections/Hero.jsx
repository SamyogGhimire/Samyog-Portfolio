import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { RESUME_LINK } from '../data'
import { scrollTo } from '../components/Navbar'

const ease = [0.22, 1, 0.36, 1]

const Line = ({ children, delay }) => (
  <span className="line">
    <motion.span
      initial={{ y: '105%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
)

const Fade = ({ children, delay, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay, ease }}
  >
    {children}
  </motion.div>
)

export default function Hero() {
  const { scrollY } = useScroll()
  const photoY = useTransform(scrollY, [0, 900], [0, 140])
  const textY = useTransform(scrollY, [0, 900], [0, -60])

  return (
    <header id="home" className="hero">
      <motion.img
        src="/Photo.png"
        alt="Samyog Ghimire"
        className="hero-photo"
        style={{ y: photoY }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
      />

      <motion.div className="wrap hero-content" style={{ y: textY }}>
        <h1 className="display hero-name">
          <Line delay={0.15}>Samyog</Line>
          <Line delay={0.3}>Ghimire</Line>
        </h1>
        <Fade delay={0.7}>
          <p className="hero-sub">
            I build cloud infrastructure that recovers on its own, and the full-stack apps that run on it.
          </p>
          <div className="hero-ctas">
            <button className="pill pill-white" onClick={() => scrollTo('work')}>
              <span className="dot" /> View my work
            </button>
            <a className="pill pill-ghost" href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
              Resume <ArrowUpRight size={18} />
            </a>
          </div>
        </Fade>
        <Fade delay={0.9} className="hero-tags-m">
          <p>DevOps &amp; Cloud Engineer</p>
          <p>Full-Stack Developer</p>
        </Fade>
      </motion.div>

      <Fade delay={0.9} className="hero-tags">
        <p>DevOps &amp;<br />Cloud Engineer</p>
        <p>Full-Stack<br />Developer</p>
      </Fade>

      <div className="hero-scroll" aria-hidden="true">Scroll<i /></div>
    </header>
  )
}
