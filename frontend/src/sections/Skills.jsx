import React, { useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { skillGroups } from '../data'
import Reveal from '../components/Reveal'

function SkillCard({ g, i }) {
  return (
    <article className={`scard ${i === 0 ? 'featured' : ''}`}>
      <span className="scard-num">{String(i + 1).padStart(2, '0')}</span>
      <span className="icon-btn" aria-hidden="true"><ArrowUpRight size={16} /></span>
      <h3>{g.title}</h3>
      <ul>
        {g.items.map(s => (
          <li key={s.name}>
            <img src={s.icon} alt="" className={s.mono ? 'mono' : ''} loading="lazy" />
            {s.name}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Skills() {
  const section = useRef(null)
  const track = useRef(null)
  const reduced = useReducedMotion()
  const [distance, setDistance] = useState(0)
  const [pinned, setPinned] = useState(true)

  // Pin the section and turn vertical scroll into horizontal movement on wide screens.
  useLayoutEffect(() => {
    const measure = () => {
      const wide = window.innerWidth > 900 && !reduced
      setPinned(wide)
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [reduced])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  return (
    <section id="skills" className={`skills ${pinned ? '' : 'static'}`}>
      <div className="wrap skills-head">
        <Reveal><h2 className="display h-xl">Toolbox</h2></Reveal>
        <Reveal delay={0.1}><p>The tools I use to build, ship and run software, from the first commit to production.</p></Reveal>
      </div>

      <div ref={section} style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}>
        <div className="skills-sticky">
          <motion.div className="skills-track" ref={track} style={pinned ? { x } : undefined}>
            {skillGroups.map((g, i) => <SkillCard key={g.title} g={g} i={i} />)}
          </motion.div>
          <div className="skills-progress"><motion.i style={{ scaleX: scrollYProgress }} /></div>
        </div>
      </div>
    </section>
  )
}
