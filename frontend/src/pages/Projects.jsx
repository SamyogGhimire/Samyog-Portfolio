import React from 'react'

const projects = [
  {
    id: 1,
    title: 'AWS CICD Project',
    description: 'Configuring and running AWS CodeBuild for a simple python project, including defining build specifications and integrating with other AWS services.',
    tags: ['AWS', 'AWS CodeBuild'],
    github: 'https://github.com/SamyogGhimire/AWS-CICD-Project',
    live: '',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Terraform AWS Project',
    description: 'Terraform project that provisions an AWS VPC with public subnets, EC2 web servers behind an Application Load Balancer, and an S3 bucket for storage.',
    tags: ['Docker', 'AWS', 'Linux'],
    github: 'https://github.com/SamyogGhimire/Terraform-AWS-Project',
    live: '',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'This portfolio — React + Vite frontend with an Express.js backend.',
    tags: ['React', 'Node.js', 'Vite'],
    github: 'https://github.com/SamyogGhimire/Samyog-Portfolio',
    live: 'https://samyogghimire.com.np',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Fitness Website',
    description: 'A full-stack gym management website built with React, Node.js, MongoDB, and Socket.IO. Features include online membership booking, Razorpay payment integration, QR code based gym entry, real-time crowd tracking, trainer hiring, and an admin scanner panel.',
    tags: ['React', 'NodeJS', 'MongoDB','Socket.IO'],
    github: 'https://github.com/SamyogGhimire/Fitness-Webpage',
    live: 'https://fitness-webpage-nine.vercel.app/',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Ansible Realtime Project',
    description: 'Automated AWS EC2 provisioning using Ansible with secure credential management via Ansible Vault, passwordless SSH setup, and conditional shutdown of Ubuntu instances.',
    tags: ['Ansible', 'AWS EC2', 'Ansible Vault'],
    github: 'https://github.com/SamyogGhimire/Ansible-Realtime-Project',
    live: '',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Jenkins Docker Project',
    description: 'Docker image and Jenkins CI/CD implementation of a node todo application.',
    tags: ['Jenkins', 'Docker', 'DockerHub'],
    github: 'https://github.com/SamyogGhimire/Jenkins-Docker-Project',
    live: '',
    status: 'Completed',
  },
]

export default function Projects() {
  return (
    <div id="projects" className="page-section">
      <style>{`
        .projects-list { display: flex; flex-direction: column; gap: 1rem; }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 10px; padding: 1.5rem;
          transition: border-color 0.15s;
        }
        .project-card:hover { border-color: var(--purple); }
        .project-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 0.6rem; }
        .project-title { font-size: 1rem; font-weight: 600; color: var(--text); }
        .project-status {
          font-size: 0.72rem; padding: 2px 10px; border-radius: 20px;
          background: var(--bg); border: 1px solid var(--border);
          color: var(--text-muted); white-space: nowrap; flex-shrink: 0;
        }
        .project-desc { font-size: 0.9rem; color: var(--text-sub); line-height: 1.65; margin-bottom: 1rem; }
        .project-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; }
        .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tag {
          font-size: 0.75rem; padding: 3px 10px; border-radius: 5px;
          background: var(--bg); border: 1px solid var(--border);
          color: var(--text-muted);
        }
        .project-links { display: flex; gap: 0.5rem; }
        .plink {
          font-size: 0.82rem; color: var(--purple);
          padding: 4px 12px; border-radius: 6px;
          border: 1px solid var(--border);
          transition: background 0.15s;
        }
        .plink:hover { background: var(--bg-card-hover); }
      `}</style>

      <p className="section-title">Projects</p>

      <div className="projects-list">
        {projects.map(p => (
          <div className="project-card" key={p.id}>
            <div className="project-top">
              <h3 className="project-title">{p.title}</h3>
              <span className="project-status">{p.status}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-bottom">
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="project-links">
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="plink">GitHub →</a>}
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="plink">Live →</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}