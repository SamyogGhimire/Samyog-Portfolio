import React from 'react'

const RESUME_LINK = 'https://drive.google.com/file/d/YOUR_FILE_ID/view'

export default function Resume() {
  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .resume-center {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 2rem; padding: 3rem 2rem; text-align: center;
        }
        .resume-icon {
          font-size: 5rem;
          filter: drop-shadow(0 0 20px rgba(124,58,237,0.5));
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .resume-title {
          font-family: 'Syne', sans-serif; font-size: clamp(1.7rem, 3vw, 2.3rem);
          font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em;
        }
        .resume-sub {
          font-family: 'Fira Code', monospace; font-size: 0.92rem;
          color: var(--text-secondary); line-height: 1.75; max-width: 500px;
        }
        .resume-btn {
          background: #7c3aed; color: #f0eeff; border: none;
          padding: 16px 42px; border-radius: 12px;
          font-family: 'Fira Code', monospace; font-size: 1rem;
          cursor: pointer; display: flex; align-items: center; gap: 10px;
          transition: all 0.25s ease; box-shadow: 0 0 30px rgba(124,58,237,0.4);
          text-decoration: none;
        }
        .resume-btn:hover { background: #6d28d9; transform: translateY(-3px); box-shadow: 0 0 50px rgba(124,58,237,0.6); }
        .resume-note { font-family: 'Fira Code', monospace; font-size: 0.8rem; color: var(--text-muted); }
        .config-box {
          background: var(--bg-card); border: 1px solid var(--border-color);
          border-radius: 12px; padding: 1.25rem 2rem;
          font-family: 'Fira Code', monospace; font-size: 0.82rem;
          color: var(--text-secondary); max-width: 500px; line-height: 1.85; text-align: left;
        }
        .config-box code { color: #a855f7; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .resume-center > * { animation: fadeUp 0.5s ease both; }
        .resume-center > *:nth-child(1) { animation-delay: 0.1s; }
        .resume-center > *:nth-child(2) { animation-delay: 0.2s; }
        .resume-center > *:nth-child(3) { animation-delay: 0.3s; }
        .resume-center > *:nth-child(4) { animation-delay: 0.4s; }
        .resume-center > *:nth-child(5) { animation-delay: 0.5s; }
        .resume-center > *:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <h2 className="section-tag">{'</Resume>'}</h2>

      <div className="resume-center">
        <div className="resume-icon">📄</div>
        <h2 className="resume-title">My Resume</h2>
        <p className="resume-sub">
        </p>
        <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="resume-btn">
          ↗ View Resume
        </a>
        <p className="resume-note">Opens in Google Drive · Can also be downloaded from there</p>
      </div>
    </div>
  )
}
