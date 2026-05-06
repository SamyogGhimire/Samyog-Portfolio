import React from 'react'

const RESUME_LINK = 'https://drive.google.com/file/d/YOUR_FILE_ID/view'

export default function Resume() {
  return (
    <div id="resume" className="page-section" style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '6rem' }}>
      <style>{`
        .resume-box {
          max-width: 480px; margin: 0 auto;
          display: flex; flex-direction: column;
          align-items: center; gap: 1.25rem;
        }
        .resume-icon { font-size: 3rem; }
        .resume-box h2 { font-size: 1.4rem; font-weight: 600; color: var(--text); }
        .resume-box p { font-size: 0.92rem; color: var(--text-sub); line-height: 1.7; }
        .resume-btn {
          background: var(--purple); color: #fff; border: none;
          padding: 12px 28px; border-radius: 8px;
          font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 500;
          cursor: pointer; transition: opacity 0.15s; text-decoration: none;
          display: inline-block; margin-top: 0.5rem;
        }
        .resume-btn:hover { opacity: 0.85; }
        .resume-hint {
          font-size: 0.78rem; color: var(--text-muted);
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 8px; padding: 1rem 1.25rem;
          text-align: left; line-height: 1.8; width: 100%; margin-top: 0.5rem;
        }
        .resume-hint code { color: var(--purple); font-size: 0.75rem; }
      `}</style>

      <p className="section-title" style={{ textAlign: 'center' }}>Resume</p>

      <div className="resume-box">
        <div className="resume-icon">📄</div>
        <h2>My Resume</h2>
        <p>Click below to view or download my resume from Google Drive.</p>
        <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="resume-btn">
          View Resume →
        </a>
        <div className="resume-hint">
          <strong style={{ color: 'var(--text)' }}>To set up:</strong><br />
          1. Upload your PDF to Google Drive<br />
          2. Share → <em>Anyone with the link</em><br />
          3. Paste the link as <code>RESUME_LINK</code> in Resume.jsx
        </div>
      </div>
    </div>
  )
}
