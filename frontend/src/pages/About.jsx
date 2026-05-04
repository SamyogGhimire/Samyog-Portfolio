import React from 'react'

const GITHUB_USERNAME = 'samyogGhimire'
const LEETCODE_USERNAME = 'samyogGhimire'

export default function About() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: start;
        }
        .about-text p {
          font-family: 'Fira Code', monospace;
          font-size: 0.92rem; color: var(--text-secondary);
          line-height: 1.85; margin-bottom: 1.2rem;
        }
        .about-text .hl { color: #a855f7; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
        .info-item {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px; padding: 1rem 1.25rem;
        }
        .info-label { font-family: 'Fira Code', monospace; font-size: 0.72rem; color: var(--text-muted); margin-bottom: 4px; }
        .info-value { font-family: 'Fira Code', monospace; font-size: 0.9rem; color: var(--text-primary); }
        .about-right { display: flex; flex-direction: column; gap: 2rem; }
        .contrib-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px; overflow: hidden;
        }
        .contrib-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex; align-items: center; gap: 10px;
          font-family: 'Fira Code', monospace;
          font-size: 0.88rem; color: var(--text-secondary);
        }
        .contrib-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #7c3aed; box-shadow: 0 0 6px #7c3aed;
        }
        .contrib-body { padding: 1rem; }
        .contrib-body img { width: 100%; border-radius: 8px; }
        .contrib-note {
          font-family: 'Fira Code', monospace;
          font-size: 0.75rem; color: var(--text-muted);
          margin-top: 8px; text-align: center;
        }
        .contrib-note a { color: #7c3aed; text-decoration: underline; }
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .about-text { animation: fadeUp 0.6s ease 0.1s both; }
        .about-right { animation: fadeUp 0.6s ease 0.3s both; }
      `}</style>

      <h2 className="section-tag">{'</AboutMe>'}</h2>

      <div className="about-grid">
        <div className="about-text">
          <p>Hey! I'm <span className="hl">Samyog Ghimire</span>, a passionate <span className="hl">Full Stack Developer</span> and DevOps learner based in India. I love building things that live on the internet.</p>
          <p>I specialize in building end-to-end web applications — from crafting clean, responsive frontends to designing scalable backend architectures. I'm also exploring the DevOps world — CI/CD, containers, and cloud deployments.</p>
          <p>When I'm not coding, you'll find me on the football field, contributing to open source, or grinding <span className="hl">LeetCode</span> to sharpen my algorithmic thinking.</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          {''}
          <code style={{ color: '#7c3aed' }}></code>
          {''}
          </p>

          <div className="info-grid">
            {[
              { label: 'Name', value: 'Samyog Ghimire' },
              { label: 'Current Location', value: 'Bengaluru, India' },
              { label: 'Role', value: 'Full Stack Developer and Devops' },
              { label: 'Status', value: 'Open to work' },
              { label: 'Education', value: 'B.Tech CSE' },
              { label: 'Email', value: 'samyog.ghimire04@gmail.com' },
            ].map(i => (
              <div className="info-item" key={i.label}>
                <div className="info-label">{i.label}</div>
                <div className="info-value">{i.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="contrib-card">
            <div className="contrib-header">
              <span className="contrib-dot" />
              GitHub Contributions
            </div>
            <div className="contrib-body">
              <img
                src={`https://ghchart.rshah.org/7c3aed/SamyogGhimire`}
                alt="GitHub contributions"
                onError={e => { e.target.style.display = 'none' }}
              />
              <p className="contrib-note">
                Contributions in the last year - {' '}
                <a href={`https://github.com/SamyogGhimire`} target="_blank" rel="noopener noreferrer">Github profile</a>
              </p>
            </div>
          </div>

          <div className="contrib-card">
            <div className="contrib-header">
              <span className="contrib-dot" style={{ background: '#f89f1b', boxShadow: '0 0 6px #f89f1b' }} />
              LeetCode Stats
            </div>
            <div className="contrib-body">
              <img
                src={`https://leetcard.jacoblin.cool/SamyogGhimire?theme=dark&font=Fira%20Code&ext=heatmap&border=0&radius=8`}
                alt="LeetCode stats"
                onError={e => { e.target.style.display = 'none' }}
              />
              <p className="contrib-note">
                <a href={`https://leetcode.com/SamyogGhimire`} target="_blank" rel="noopener noreferrer">LeetCode profile</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
