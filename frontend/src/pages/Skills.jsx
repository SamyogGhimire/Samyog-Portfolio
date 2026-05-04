import React, { useState } from 'react'

const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', adapt: true },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
]

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`skill-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={skill.icon} alt={skill.name} className={skill.adapt ? 'adapt-icon' : ''} />
      {hovered && <div className="tooltip">{skill.name}</div>}
    </div>
  )
}

export default function Skills() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem; margin-top: 2rem;
        }
        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px; aspect-ratio: 1;
          display: flex; align-items: center; justify-content: center;
          position: relative; cursor: pointer;
          transition: all 0.25s ease; overflow: visible;
        }
        .skill-card:hover, .skill-card.hovered {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(124,58,237,0.2);
        }
        .skill-card img { width: 52%; height: 52%; object-fit: contain; transition: transform 0.2s; }
        .adapt-icon { filter: var(--github-filter, none); }
        [data-theme="light"] .adapt-icon { filter: invert(1) sepia(1) saturate(3) hue-rotate(220deg); }
        [data-theme="dark"] .adapt-icon { filter: invert(1); }
        .skill-card.hovered img { transform: scale(1.1); }
        .tooltip {
          position: absolute; top: -42px; left: 50%; transform: translateX(-50%);
          background: #7c3aed; color: #f0eeff;
          font-family: 'Fira Code', monospace; font-size: 0.78rem;
          padding: 5px 14px; border-radius: 6px; white-space: nowrap;
          pointer-events: none; z-index: 10;
          box-shadow: 0 4px 12px rgba(124,58,237,0.4);
        }
        .tooltip::after {
          content: ''; position: absolute; top: 100%; left: 50%;
          transform: translateX(-50%); border: 5px solid transparent;
          border-top-color: #7c3aed;
        }
        .tech-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.3rem, 2.5vw, 1.7rem);
          font-weight: 700; color: var(--text-primary);
          letter-spacing: 0.08em; margin-bottom: 0.5rem;
          margin-top: 1.5rem; text-align: center;
        }
        .skills-hint {
          font-family: 'Fira Code', monospace;
          font-size: 0.88rem; color: var(--text-muted);
        }
        @media (max-width: 768px) { .skills-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 480px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ${skills.map((_, i) => `.skill-card:nth-child(${i+1}) { animation: fadeUp 0.4s ease ${i * 0.04}s both; }`).join('\n')}
      `}</style>

      <h2 className="section-tag">{'</Skills>'}</h2>
      <p className="skills-hint"></p>
      <h3 className="tech-title">Tech Stack</h3>

      <div className="skills-grid">
        {skills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
      </div>

      <p style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2.5rem', textAlign: 'center' }}>
      </p>
    </div>
  )
}
