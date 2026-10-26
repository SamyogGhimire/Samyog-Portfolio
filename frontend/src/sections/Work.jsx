import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import Reveal from '../components/Reveal'
import { scrollTo } from '../components/Navbar'

const pad = n => String(n + 1).padStart(2, '0')

function ProjectCard({ p, i, cardRef }) {
  return (
    <Reveal>
      <article id={`project-${i}`} className="pcard" ref={cardRef} data-index={i}>
        <div className="pcard-body">
          <div className="pcard-top">
            <span className="pcard-num">{pad(i)} / {pad(projects.length - 1)}</span>
            <span className="pcard-cat">{p.category}</span>
          </div>
          <h3>{p.title}</h3>
          <p className="pcard-desc">{p.description}</p>
          <ul>
            {p.highlights.map(h => <li key={h}>{h}</li>)}
          </ul>
          <div className="chips">
            {p.tags.map(t => <span className="chip" key={t}>{t}</span>)}
          </div>
          <div className="pcard-links">
            <a className="dark" href={p.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> Source
            </a>
            {p.live && (
              <a className="outline" href={p.live} target="_blank" rel="noopener noreferrer">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="pcard-visual" aria-label={`${p.title} pipeline`}>
          <p className="flow-label">How it works</p>
          <ol className="flow">
            {p.flow.map((step, s) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.15 + s * 0.09 }}
              >
                <span className="step">{s + 1}</span>
                {step}
              </motion.li>
            ))}
          </ol>
        </div>
      </article>
    </Reveal>
  )
}

export default function Work() {
  const [active, setActive] = useState(0)
  const cards = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(Number(e.target.dataset.index))),
      { rootMargin: '-45% 0px -45% 0px' }
    )
    cards.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const jump = i => scrollTo(`project-${i}`, 'center')

  return (
    <section id="work" className="work">
      <div className="wrap">
        <Reveal className="work-title">
          <h2 className="display h-xl">Selected Work</h2>
          <p>Infrastructure, security and full-stack projects, from research prototypes to live apps.</p>
        </Reveal>

        <div className="work-grid">
          <ul className="work-list" aria-label="Choose a project">
            {projects.map((p, i) => (
              <li key={p.title} className={active === i ? 'active' : ''}>
                <button type="button" aria-pressed={active === i} onClick={() => jump(i)}>
                  <h3>{p.title}</h3>
                  <p>{p.category}</p>
                </button>
              </li>
            ))}
          </ul>

          <div className="work-cards">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} cardRef={el => (cards.current[i] = el)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
