import React, { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.4fr;
          gap: 4rem; align-items: start;
        }
        .contact-info h3 {
          font-family: 'Syne', sans-serif; font-size: 1.6rem;
          font-weight: 700; color: var(--text-primary); margin-bottom: 1rem;
        }
        .contact-info p {
          font-family: 'Fira Code', monospace; font-size: 0.9rem;
          color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;
        }
        .social-links { display: flex; flex-direction: column; gap: 0.75rem; }
        .social-link {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 16px; background: var(--bg-card);
          border: 1px solid var(--border-color); border-radius: 10px;
          font-family: 'Fira Code', monospace; font-size: 0.85rem;
          color: var(--text-secondary); transition: all 0.2s; text-decoration: none;
        }
        .social-link:hover { color: var(--text-primary); border-color: var(--border-hover); background: var(--bg-card-hover); transform: translateX(4px); }
        .form-card {
          background: var(--bg-card); border: 1px solid var(--border-color);
          border-radius: 20px; padding: 2rem;
        }
        .form-card h3 { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem; }
        .form-card > p { font-family: 'Fira Code', monospace; font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1.5rem; }
        .form-group { margin-bottom: 1.25rem; }
        .form-label { font-family: 'Fira Code', monospace; font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 8px; }
        .form-input, .form-textarea {
          width: 100%; background: var(--input-bg);
          border: 1px solid var(--border-color); border-radius: 10px;
          padding: 13px 16px; font-family: 'Fira Code', monospace;
          font-size: 0.88rem; color: var(--text-primary); outline: none;
          transition: border-color 0.2s;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: var(--text-muted); }
        .form-input:focus, .form-textarea:focus { border-color: var(--border-hover); box-shadow: 0 0 0 3px rgba(124,58,237,0.1); }
        .form-textarea { resize: vertical; min-height: 120px; }
        .submit-btn {
          width: 100%; background: #7c3aed; color: #f0eeff; border: none;
          padding: 14px; border-radius: 10px;
          font-family: 'Fira Code', monospace; font-size: 0.92rem;
          cursor: pointer; transition: all 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 0 20px rgba(124,58,237,0.3); margin-top: 0.5rem;
        }
        .submit-btn:hover:not(:disabled) { background: #6d28d9; transform: translateY(-1px); box-shadow: 0 0 30px rgba(124,58,237,0.5); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .msg-success { background: rgba(29,198,117,0.1); border: 1px solid rgba(29,198,117,0.3); border-radius: 8px; padding: 12px 16px; font-family: 'Fira Code', monospace; font-size: 0.85rem; color: #1dc675; margin-bottom: 1rem; }
        .msg-error { background: rgba(220,60,60,0.1); border: 1px solid rgba(220,60,60,0.3); border-radius: 8px; padding: 12px 16px; font-family: 'Fira Code', monospace; font-size: 0.85rem; color: #e06060; margin-bottom: 1rem; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .contact-info { animation: fadeUp 0.5s ease 0.1s both; }
        .form-card { animation: fadeUp 0.5s ease 0.25s both; }
      `}</style>

      <h2 className="section-tag">{'</Contact>'}</h2>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Have a project in mind or just want to say hi? I'm always open to new opportunities, collaborations, and interesting conversations.</p>
          <div className="social-links">
            <a href="https://github.com/samyogGhimire" target="_blank" rel="noopener noreferrer" className="social-link">⌥ GitHub · @SamyogGhimire</a>
            <a href="https://linkedin.com/in/SamyogGhimire" target="_blank" rel="noopener noreferrer" className="social-link">◈ LinkedIn · Samyog Ghimire</a>
            <a href="https://leetcode.com/samyogGhimire" target="_blank" rel="noopener noreferrer" className="social-link">⚡ LeetCode · @SamyogGhimire</a>
            <a href="mailto:samyog.ghimire04@gmail.com" className="social-link">✉ samyog.ghimire04@email.com</a>
          </div>
        </div>

        <div className="form-card">
          <h3>Send a Message</h3>
          {status === 'success' && <div className="msg-success">✓ Message sent! I'll get back to you soon.</div>}
          {status === 'error' && <div className="msg-error">✗ Something went wrong. Try emailing me directly.</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your name</label>
              <input className="form-input" type="text" name="name" placeholder="Samyog Ghimire" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Your email</label>
              <input className="form-input" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Your message</label>
              <textarea className="form-textarea" name="message" placeholder="Hey, I'd love to collaborate on..." value={form.message} onChange={handleChange} required />
            </div>
            <button className="submit-btn" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? '// sending...' : '↗ Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
