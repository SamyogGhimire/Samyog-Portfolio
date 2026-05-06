import React, { useState } from 'react'
import emailjs from '@emailjs/browser'


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <div id="contact" className="page-section">
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 3rem; align-items: start; }
        .contact-info h3 { font-size: 1.2rem; font-weight: 600; color: var(--text); margin-bottom: 0.75rem; }
        .contact-info p { font-size: 0.92rem; color: var(--text-sub); line-height: 1.7; margin-bottom: 1.5rem; }
        .social-list { display: flex; flex-direction: column; gap: 0.5rem; }
        .slink {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 8px;
          border: 1px solid var(--border); background: var(--bg-card);
          font-size: 0.88rem; color: var(--text-sub);
          transition: all 0.15s; text-decoration: none;
        }
        .slink:hover { border-color: var(--purple); color: var(--text); }
        .form-wrap { display: flex; flex-direction: column; gap: 1rem; }
        .form-field { display: flex; flex-direction: column; gap: 6px; }
        .form-field label { font-size: 0.82rem; color: var(--text-muted); }
        .form-field input, .form-field textarea {
          background: var(--input-bg); border: 1px solid var(--border);
          border-radius: 8px; padding: 10px 14px;
          font-family: 'Inter', sans-serif; font-size: 0.92rem;
          color: var(--text); outline: none; transition: border-color 0.15s;
          width: 100%;
        }
        .form-field input::placeholder, .form-field textarea::placeholder { color: var(--text-muted); }
        .form-field input:focus, .form-field textarea:focus { border-color: var(--purple); }
        .form-field textarea { resize: vertical; min-height: 110px; }
        .submit-btn {
          background: var(--purple); color: #fff; border: none;
          padding: 11px 24px; border-radius: 8px;
          font-family: 'Inter', sans-serif; font-size: 0.92rem; font-weight: 500;
          cursor: pointer; transition: opacity 0.15s; align-self: flex-start;
        }
        .submit-btn:hover:not(:disabled) { opacity: 0.85; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-msg { font-size: 0.85rem; padding: 10px 14px; border-radius: 8px; }
        .form-msg.ok { background: rgba(29,198,117,0.1); color: #1dc675; border: 1px solid rgba(29,198,117,0.25); }
        .form-msg.err { background: rgba(220,60,60,0.1); color: #e06060; border: 1px solid rgba(220,60,60,0.25); }
        @media (max-width: 700px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>

      <p className="section-title">Contact</p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Have a project in mind or just want to say hi? I'm open to opportunities and collaborations.</p>
          <div className="social-list">
            <a href="https://github.com/Samyogghimire" target="_blank" rel="noopener noreferrer" className="slink">GitHub</a>
            <a href="https://linkedin.com/in/Samyogghimire" target="_blank" rel="noopener noreferrer" className="slink">LinkedIn</a>
            <a href="https://leetcode.com/SamyogGhimire" target="_blank" rel="noopener noreferrer" className="slink">LeetCode</a>
            <a href="mailto:samyog.ghimire04@gmail.com" className="slink">samyog.ghimire04@gmail.com</a>
          </div>
        </div>

        <form className="form-wrap" onSubmit={handleSubmit}>
          {status === 'success' && <div className="form-msg ok">✓ Message sent! I'll get back to you soon.</div>}
          {status === 'error' && <div className="form-msg err">✗ Something went wrong. Try emailing me directly.</div>}
          <div className="form-field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea name="message" placeholder="Your message..." value={form.message} onChange={handleChange} required />
          </div>
          <button className="submit-btn" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}