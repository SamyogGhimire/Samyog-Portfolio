import React, { useState } from 'react'

const projects = [
  {
    id: 1, title: 'AWS CICD Project',
    description: 'Configuring and running AWS CodeBuild for a simple python project, including defining build specifications and integrating with other AWS services.',
    tags: ['AWS', 'AWS CodeBuild'],
    github: 'https://github.com/SamyogGhimire/AWS-CICD-Project', live: '', status: 'completed',
  },
  {
    id: 2, title: 'AWS VPC',
    description: 'Creating a VPC using AWS with public-private subnet in production.',
    tags: ['AWS VPC', 'AWS CloudWatch'],
    github: 'https://github.com/SamyogGhimire/AWS-VPC-Project', live: '', status: 'completed',
  },
  {
    id: 3, title: 'Portfolio Website',
    description: 'This very portfolio — built with React + Vite on the frontend and Express.js on the backend, dark purple themed with light mode.',
    tags: ['React', 'Node.js', 'Vite', 'CSS'],
    github: 'https://github.com/samyogGhimire/portfolio', live: '#', status: 'in-progress',
  },
  {
    id: 4, title: 'Jenkins Docker Project',
    description: 'Docker image and Jenkins CI/CD implementation of a node todo application.',
    tags: ['Docker', 'Jenkins', 'CICD'],
    github: 'https://github.com/SamyogGhimire/Jenkins-Docker-Project', live: '', status: 'completed',
  },
    {
    id: 5, title: 'Ansible Realtime Project',
    description: 'Automated AWS EC2 provisioning using Ansible with secure credential management via Ansible Vault, passwordless SSH setup, and conditional shutdown of Ubuntu instances.',
    tags: ['AWS EC2', 'Ansible', 'Linux'],
    github: 'https://github.com/SamyogGhimire/Ansible-Realtime-Project', live: '', status: 'completed',
  },
    {
    id: 6, title: 'Terraform AWS Project',
    description: 'Terraform project that provisions an AWS VPC with public subnets, EC2 web servers behind an Application Load Balancer, and an S3 bucket for storage.',
    tags: ['Terraform', 'AWS VPC', 'AWS EC2', 'AWS S3'],
    github: 'https://github.com/SamyogGhimire/Terraform-AWS-Project', live: '', status: 'completed',
  },
    {
    id: 7, title: 'Fitness Webpage',
    description: 'Custom Salesforce Lightning components and Apex triggers for automating business workflows and CRM data management.',
    tags: ['React', 'NodeJS', 'Tailwind', 'MongoDB'],
    github: 'https://github.com/SamyogGhimire/Fitness-Webpage', live: '', status: 'completed',
  },
]

const statusColors = {
  completed: { bg: 'rgba(29,198,117,0.1)', color: '#1dc675', dot: '#1dc675' },
  'in-progress': { bg: 'rgba(250,169,117,0.1)', color: '#fab87a', dot: '#fab87a' },
}

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        .projects-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 1.5rem; margin-top: 2.5rem;
        }
        .project-card {
          background: var(--bg-card); border: 1px solid var(--border-color);
          border-radius: 16px; padding: 1.85rem;
          display: flex; flex-direction: column; gap: 1rem;
          transition: all 0.25s ease; position: relative; overflow: hidden;
        }
        .project-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: linear-gradient(to right, #7c3aed, transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .project-card.active { border-color: var(--border-hover); background: var(--bg-card-hover); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(124,58,237,0.15); }
        .project-card.active::before { opacity: 1; }
        .project-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }
        .project-title { font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 700; color: var(--text-primary); }
        .status-badge {
          font-family: 'Fira Code', monospace; font-size: 0.68rem;
          padding: 3px 10px; border-radius: 20px;
          display: flex; align-items: center; gap: 5px; white-space: nowrap;
        }
        .status-dot { width: 5px; height: 5px; border-radius: 50%; }
        .project-desc { font-family: 'Fira Code', monospace; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.75; flex: 1; }
        .tags-row { display: flex; flex-wrap: wrap; gap: 6px; }
        .tag {
          background: rgba(124,58,237,0.1); color: #a855f7;
          border: 1px solid rgba(124,58,237,0.22);
          font-family: 'Fira Code', monospace; font-size: 0.72rem;
          padding: 4px 11px; border-radius: 6px;
        }
        .project-links {
          display: flex; gap: 0.75rem; margin-top: auto;
          padding-top: 0.75rem; border-top: 1px solid var(--border-color);
        }
        .proj-link {
          font-family: 'Fira Code', monospace; font-size: 0.8rem;
          color: var(--text-secondary); display: flex; align-items: center; gap: 6px;
          padding: 7px 15px; border-radius: 8px;
          border: 1px solid var(--border-color);
          transition: all 0.2s; text-decoration: none;
        }
        .proj-link:hover { color: var(--text-primary); background: rgba(124,58,237,0.12); border-color: var(--border-hover); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        ${projects.map((_, i) => `.project-card:nth-child(${i+1}) { animation: fadeUp 0.5s ease ${i * 0.1}s both; }`).join('\n')}
      `}</style>

      <h2 className="section-tag">{'</Projects>'}</h2>
      <p style={{ fontFamily: "'Fira Code',monospace", fontSize: '0.9rem', color: 'var(--text-muted)' }}>
      </p>

      <div className="projects-grid">
        {projects.map(p => {
          const sc = statusColors[p.status] || statusColors.completed
          return (
            <div
              key={p.id}
              className={`project-card ${hovered === p.id ? 'active' : ''}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-header">
                <h3 className="project-title">{p.title}</h3>
                <span className="status-badge" style={{ background: sc.bg, color: sc.color }}>
                  <span className="status-dot" style={{ background: sc.dot }} />
                  {p.status}
                </span>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="tags-row">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="project-links">
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">⌥ GitHub</a>}
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link">↗ Live Demo</a>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
