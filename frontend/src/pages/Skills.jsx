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

export default function Skills() {
  const [hovered, setHovered] = useState(null)

  return (
    <div id="skills" className="page-section">
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.75rem;
        }
        .skill-tile {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 10px;
          aspect-ratio: 1;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 6px; cursor: default;
          transition: border-color 0.15s, background 0.15s;
          position: relative;
        }
        .skill-tile:hover {
          border-color: var(--purple);
          background: var(--bg-card-hover);
        }
        .skill-tile img { width: 44%; height: 44%; object-fit: contain; }
        [data-theme="dark"] .adapt-icon { filter: invert(1); }
        [data-theme="light"] .adapt-icon { filter: none; }
        .skill-name {
          font-size: 0.65rem; color: var(--text-muted);
          text-align: center; padding: 0 4px;
          line-height: 1.2;
        }
        .skill-tile:hover .skill-name { color: var(--purple); }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 400px) { .skills-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <p className="section-title">Skills</p>

      <div className="skills-grid">
        {skills.map(s => (
          <div
            key={s.name}
            className="skill-tile"
            onMouseEnter={() => setHovered(s.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={s.icon} alt={s.name} className={s.adapt ? 'adapt-icon' : ''} />
            <span className="skill-name">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
