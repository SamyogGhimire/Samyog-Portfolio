import React, { useEffect, useState } from 'react'

export default function Home() {
  const [typed, setTyped] = useState('')
  const phrase = 'Full Stack Developer | DevOps Learner | Cloud Enthusiast'

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(phrase.slice(0, ++i))
      if (i >= phrase.length) clearInterval(t)
    }, 50)
    return () => clearInterval(t)
  }, [])

  return (
    <div id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <style>{`
        .hero { max-width: 1100px; margin: 0 auto; padding: 6rem 1.5rem 4rem; }
        .hero-greeting { font-size: 1rem; color: var(--text-muted); margin-bottom: 1rem; }
        .hero-name {
          font-size: clamp(2.4rem, 6vw, 3.8rem);
          font-weight: 700; line-height: 1.1;
          color: var(--text); margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .hero-name span { color: var(--purple); }
        .hero-role {
          font-size: 1.1rem; color: var(--text-sub);
          margin-bottom: 1.5rem; min-height: 1.6em;
        }
        .cursor { display: inline-block; width: 2px; height: 1em; background: var(--purple); vertical-align: middle; margin-left: 2px; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .hero-desc { font-size: 1rem; color: var(--text-sub); max-width: 520px; line-height: 1.75; margin-bottom: 2.5rem; }
        .hero-btns { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 3.5rem; }
        .btn-fill {
          background: var(--purple); color: #fff; border: none;
          padding: 11px 24px; border-radius: 8px; font-family: 'Inter', sans-serif;
          font-size: 0.9rem; font-weight: 500; cursor: pointer;
          transition: opacity 0.15s; text-decoration: none; display: inline-block;
        }
        .btn-fill:hover { opacity: 0.85; }
        .btn-ghost {
          background: none; color: var(--text-sub);
          border: 1px solid var(--border); padding: 11px 24px;
          border-radius: 8px; font-family: 'Inter', sans-serif;
          font-size: 0.9rem; cursor: pointer; transition: all 0.15s;
          text-decoration: none; display: inline-block;
        }
        .btn-ghost:hover { border-color: var(--purple); color: var(--text); }
        .stats { display: flex; gap: 2.5rem; flex-wrap: wrap; }
        .stat-val { font-size: 1.6rem; font-weight: 700; color: var(--text); }
        .stat-lbl { font-size: 0.82rem; color: var(--text-muted); margin-top: 2px; }

        /* Photo section */
        .hero-inner { display: grid; grid-template-columns: 1fr auto; gap: 3rem; align-items: center; }
        .photo-box {
          width: 280px; height: 320px; border-radius: 16px;
          background: var(--bg-card); border: 1px solid var(--border);
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 8px; flex-shrink: 0;
          overflow: hidden;
        }
        .photo-box img { width: 100%; height: 100%; object-fit: cover; border-radius: 15px; }
        .photo-hint { font-size: 0.72rem; color: var(--text-muted); text-align: center; padding: 0 12px; line-height: 1.5; }
        .photo-hint code { color: var(--purple); font-size: 0.68rem; }
        @media (max-width: 600px) {
          .hero-inner { grid-template-columns: 1fr; }
          .photo-box { display: none; }
          .stats { gap: 1.5rem; }
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; } }
        .hero > * { animation: fadeUp 0.5s ease both; }
        .hero > *:nth-child(1) { animation-delay: 0.05s; }
        .hero > *:nth-child(2) { animation-delay: 0.12s; }
        .hero > *:nth-child(3) { animation-delay: 0.19s; }
        .hero > *:nth-child(4) { animation-delay: 0.26s; }
        .hero > *:nth-child(5) { animation-delay: 0.33s; }
        .hero > *:nth-child(6) { animation-delay: 0.4s; }
      `}</style>

      <div className="hero">
        <p className="hero-greeting">👋 Hi, I'm</p>
        <div className="hero-inner">
          <div>
            <h1 className="hero-name">Samyog <span>Ghimire</span></h1>
            <p className="hero-role">
              {typed}<span className="cursor" />
            </p>
            <p className="hero-desc">
              I build end-to-end web applications and explore DevOps practices to make them scalable, reliable and efficient.
            </p>
            <div className="hero-btns">
              <a
                className="btn-fill"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                href="#projects"
              >
                View Projects
              </a>
              <a className="btn-ghost" href="https://drive.google.com/file/d/1uZypSX378pgDcdUt4kfd5B-bJrF4VfAh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
            <div className="stats">
              {[
                { val: '5+', lbl: 'Projects Built' },
                { val: '10+', lbl: 'Technologies' },
                { val: '8+', lbl: 'DevOps Tools' },
              ].map(s => (
                <div key={s.lbl}>
                  <div className="stat-val">{s.val}</div>
                  <div className="stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="photo-box">
            <img src="./Photo.jpeg" alt="Samyog Ghimire" />
          </div>
        </div>
      </div>
    </div>
  )
}
