import React from 'react'

const GITHUB_USERNAME = 'samyogGhimire'
const LEETCODE_USERNAME = 'samyogGhimire'

export default function About() {
  return (
    <div id="about" className="page-section">
      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .about-bio p { font-size: 0.97rem; color: var(--text-sub); line-height: 1.8; margin-bottom: 1rem; }
        .about-bio .hl { color: var(--purple); font-weight: 500; }
        .info-list { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; }
        .info-row { display: flex; gap: 0.75rem; font-size: 0.88rem; }
        .info-key { color: var(--text-muted); width: 90px; flex-shrink: 0; }
        .info-val { color: var(--text); }
        .contrib-block { display: flex; flex-direction: column; gap: 1.5rem; }
        .contrib-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
        .contrib-head { padding: 0.75rem 1rem; border-bottom: 1px solid var(--border); font-size: 0.85rem; font-weight: 500; color: var(--text-sub); }
        .contrib-body { padding: 1rem; }
        .contrib-body img { width: 100%; border-radius: 6px; display: block; }
        .contrib-link { font-size: 0.78rem; color: var(--text-muted); margin-top: 8px; display: block; text-align: right; }
        .contrib-link a { color: var(--purple); }
        @media (max-width: 700px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>

      <p className="section-title">About Me</p>

      <div className="about-grid">
        <div className="about-bio">
          <p>
            I'm <span className="hl">Samyog Ghimire</span>, a <span className="hl">Full Stack Developer</span> and DevOps learner based in India. I love building things that live on the internet.
          </p>
          <p>
            I work on end-to-end web applications — clean frontends, scalable backends, and I'm exploring CI/CD, containers, and cloud deployments.
          </p>
          <p>
            Outside of code, I'm on the football field or grinding LeetCode problems.
          </p>
          <div className="info-list">
            {[
              { k: 'Name', v: 'Samyog Ghimire' },
              { k: 'Location', v: 'India' },
              { k: 'Role', v: 'Full Stack Dev' },
              { k: 'Education', v: 'B.Tech CSE' },
              { k: 'Status', v: 'Open to work ⚡' },
              { k: 'Email', v: 'you@email.com' },
            ].map(r => (
              <div className="info-row" key={r.k}>
                <span className="info-key">{r.k}</span>
                <span className="info-val">{r.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contrib-block">
          <div className="contrib-card">
            <div className="contrib-head">GitHub Contributions</div>
            <div className="contrib-body">
              <img
                src={`https://ghchart.rshah.org/7c3aed/${GITHUB_USERNAME}`}
                alt="GitHub contributions"
                onError={e => { e.target.style.display = 'none' }}
              />
              <span className="contrib-link">
                <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                  View GitHub profile →
                </a>
              </span>
            </div>
          </div>

          <div className="contrib-card">
            <div className="contrib-head">LeetCode Stats</div>
            <div className="contrib-body">
              <img
                src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Inter&ext=heatmap&border=0&radius=6`}
                alt="LeetCode stats"
                onError={e => { e.target.style.display = 'none' }}
              />
              <span className="contrib-link">
                <a href={`https://leetcode.com/${LEETCODE_USERNAME}`} target="_blank" rel="noopener noreferrer">
                  View LeetCode profile →
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
