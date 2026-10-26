import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react'
import { EMAIL, RESUME_LINK, socials } from '../data'
import Reveal from '../components/Reveal'
import { scrollTo } from '../components/Navbar'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, LeetCode: Code2, Email: Mail }

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
    <footer id="contact" className="contact">
      <div className="wrap">
        <Reveal className="contact-card">
          <div className="contact-top">
            <p className="brand">Samyog<span>Ghimire</span></p>
            <h2 className="display h-lg">Ready to Build Something That Lasts?</h2>
          </div>

          <div className="contact-grid">
            <div className="reach">
              <h4>Reach out</h4>
              <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <p>Based in India · open to remote work</p>
              <div className="socials">
                {socials.map(s => {
                  const Icon = socialIcons[s.label]
                  return (
                    <a key={s.label} className="icon-btn" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      <Icon size={18} />
                    </a>
                  )
                })}
                <a className="pill pill-ghost" style={{ height: 44, color: 'inherit', borderColor: 'var(--border-strong)' }} href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                  Resume <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your name" aria-label="Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="your@email.com" aria-label="Email" value={form.email} onChange={handleChange} required />
              </div>
              <textarea name="message" placeholder="Tell me about your project or role…" aria-label="Message" value={form.message} onChange={handleChange} required />
              <div className="form-foot">
                <span className={`form-msg ${status === 'success' ? 'ok' : status === 'error' ? 'err' : ''}`} role="status">
                  {status === 'success' && 'Message sent. I’ll get back to you soon.'}
                  {status === 'error' && 'Something went wrong. Please email me directly.'}
                </span>
                <button className="pill pill-white" type="submit" disabled={status === 'loading'}>
                  <span className="dot" /> {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </form>
          </div>
        </Reveal>

        <div className="copyright">
          <span>© {new Date().getFullYear()} Samyog Ghimire</span>
          <button onClick={() => scrollTo('home')}>Back to top ↑</button>
        </div>
      </div>
    </footer>
  )
}
