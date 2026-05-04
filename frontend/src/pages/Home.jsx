import React, { useEffect, useState } from 'react'

const stats = [
  { icon: '◈', value: '5+', label: 'Projects Built' },
  { icon: '</>', value: '10+', label: 'Technologies' },
  { icon: '☁', value: '8+', label: 'DevOps Tools' },
  { icon: '★', value: '100%', label: 'Learning Focus' },
]

export default function Home() {
  const [typed, setTyped] = useState('')
  const phrase = 'Full Stack Developer | DevOps Learner'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setTyped(phrase.slice(0, i + 1))
      i++
      if (i >= phrase.length) clearInterval(timer)
    }, 55)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .hero-wrapper {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 5rem 0 2rem;
          position: relative;
          z-index: 1;
          gap: 3rem;
        }
        .hero-left { display: flex; flex-direction: column; gap: 1.5rem; }
        .greeting {
          font-family: 'Fira Code', monospace;
          font-size: 1.05rem;
          color: #a855f7;
          display: flex; align-items: center; gap: 8px;
        }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          font-weight: 800; line-height: 1.15;
          color: var(--text-primary); letter-spacing: -0.02em;
        }
        .hero-title .highlight { color: #7c3aed; }
        .hero-subtitle {
          font-family: 'Fira Code', monospace;
          font-size: 0.95rem; color: var(--text-secondary);
          line-height: 1.75; max-width: 480px;
        }
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
        .btn-primary {
          background: #7c3aed; color: #f0eeff; border: none;
          padding: 13px 26px; border-radius: 8px;
          font-family: 'Fira Code', monospace; font-size: 0.9rem;
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          transition: all 0.2s; box-shadow: 0 0 20px rgba(124,58,237,0.4);
          text-decoration: none;
        }
        .btn-primary:hover { background: #6d28d9; transform: translateY(-2px); box-shadow: 0 0 30px rgba(124,58,237,0.6); }
        .btn-outline {
          background: transparent; color: var(--text-secondary);
          border: 1px solid var(--border-color);
          padding: 13px 26px; border-radius: 8px;
          font-family: 'Fira Code', monospace; font-size: 0.9rem;
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          transition: all 0.2s; text-decoration: none;
        }
        .btn-outline:hover { color: var(--text-primary); border-color: #a855f7; background: rgba(124,58,237,0.1); }
        .stats-row { display: flex; gap: 2rem; margin-top: 1rem; flex-wrap: wrap; }
        .stat-item { display: flex; flex-direction: column; gap: 2px; }
        .stat-value { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 700; color: #7c3aed; }
        .stat-label { font-family: 'Fira Code', monospace; font-size: 0.8rem; color: var(--text-muted); }
        .stat-icon { font-size: 0.95rem; color: var(--purple-dim); margin-bottom: 4px; }
        .hero-right { position: relative; display: flex; justify-content: center; align-items: center; }
        .photo-container { position: relative; width: 380px; height: 480px; }
        .photo-frame {
          width: 100%; height: 100%; border-radius: 20px;
          border: 2px dashed var(--border-color);
          background: var(--bg-card);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 1rem; position: relative; overflow: hidden;
        }
        .photo-frame img {
          width: 100%; height: 100%; object-fit: cover;
          border-radius: 18px; position: absolute; inset: 0;
        }
        .photo-placeholder {
          display: flex; flex-direction: column;
          align-items: center; gap: 12px;
          color: var(--text-muted); z-index: 1;
        }
        .photo-placeholder .icon { font-size: 3rem; }
        .photo-placeholder p {
          font-family: 'Fira Code', monospace; font-size: 0.82rem;
          text-align: center; line-height: 1.7;
          color: var(--text-muted); padding: 0 1.5rem;
        }
        .photo-placeholder code {
          background: rgba(124,58,237,0.15); color: #a855f7;
          padding: 2px 8px; border-radius: 4px; font-size: 0.78rem;
        }
        .photo-glow {
          position: absolute; inset: -20px;
          background: radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 65%);
          pointer-events: none; border-radius: 50%;
        }
        .corner-tag {
          position: absolute; font-family: 'Fira Code', monospace;
          font-size: 0.7rem; color: rgba(124,58,237,0.5);
        }
        .corner-tag.tl { top: 12px; left: 12px; }
        .corner-tag.br { bottom: 12px; right: 12px; }
        .cursor {
          display: inline-block; width: 2px; height: 1em;
          background: #7c3aed; margin-left: 2px;
          vertical-align: middle; animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .typewriter-line {
          font-family: 'Fira Code', monospace; font-size: 0.9rem;
          color: var(--text-muted); display: flex; align-items: center; gap: 4px;
        }
        .badge-row {
          position: absolute; bottom: -16px; left: 50%;
          transform: translateX(-50%);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 40px; padding: 8px 20px;
          font-family: 'Fira Code', monospace; font-size: 0.78rem;
          color: #a855f7; white-space: nowrap; backdrop-filter: blur(8px);
        }
        @media (max-width: 900px) {
          .hero-wrapper { grid-template-columns: 1fr; text-align: center; }
          .hero-right { display: none; }
          .stats-row { justify-content: center; }
          .hero-btns { justify-content: center; }
          .hero-subtitle { margin: 0 auto; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .fade-2 { animation: fadeUp 0.6s ease 0.25s both; }
        .fade-3 { animation: fadeUp 0.6s ease 0.4s both; }
        .fade-4 { animation: fadeUp 0.6s ease 0.55s both; }
        .fade-5 { animation: fadeUp 0.6s ease 0.7s both; }
        .fade-6 { animation: fadeUp 0.6s ease 0.85s both; }
      `}</style>

      <div className="hero-wrapper">
        <div className="hero-left">
          <div className="greeting fade-1">
            <span>👋</span><span>Hi, I'm Samyog Ghimire</span>
          </div>
          <div className="typewriter-line fade-1" style={{ marginTop: '-8px' }}>
            <span style={{ color: '#4c1d95' }}>{'>'}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{typed}</span>
            <span className="cursor" />
          </div>
          <h1 className="hero-title fade-2">
            Building scalable systems &{' '}
            <span className="highlight">modern web experiences</span>
          </h1>
          <p className="hero-subtitle fade-3">
            I build end-to-end web applications and explore DevOps
            practices to make them scalable, reliable and efficient.
          </p>
          <div className="hero-btns fade-4">
            <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary">
              ◈ View Projects →
            </a>
            <a href="YOUR_RESUME_LINK_HERE" target="_blank" rel="noopener noreferrer" className="btn-outline">
              ↓ Download Resume
            </a>
          </div>
          <div className="stats-row fade-5">
            {stats.map(s => (
              <div className="stat-item" key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right fade-6">
          <div className="photo-container">
            <div className="photo-glow" />
            <div className="photo-frame">
              {

              }
              <div className="photo-placeholder">
                <span className="icon">🧑‍💻</span>
                <p>
                <br />
                  <code></code><br />
                  <br />
                  <code>{<img src="./public/luffy.webp"/>}</code>
                </p>
              </div>
              {/* <span className="corner-tag tl">{''}</span> */}
              <span className="corner-tag br">{'// samyog.dev'}</span>
            </div>
            <div className="badge-row">⚡ Available for opportunities</div>
          </div>
        </div>
      </div>
    </div>
  )
}
