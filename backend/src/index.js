require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailerPkg = require('nodemailer')
const nodemailer = nodemailerPkg.default || nodemailerPkg

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// ── Contact Form ─────────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    // Configure your email in .env:
    // EMAIL_USER=your@gmail.com
    // EMAIL_PASS=your_app_password   (use Gmail App Password, not your main password)
    // EMAIL_TO=your@gmail.com
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `📬 New message from ${name} - Portfolio`,
      html: `
        <div style="font-family: monospace; background: #06060f; color: #f0eeff; padding: 2rem; border-radius: 12px;">
          <h2 style="color: #a855f7;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border-color: #7c3aed44; margin: 1rem 0;" />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })

    res.json({ success: true, message: 'Email sent!' })
  } catch (err) {
    console.error('Mail error:', err)
    // Still return success to not expose server details
    // Remove this in production and handle properly
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`\n⚡ Portfolio backend running on http://localhost:${PORT}`)
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`)
})
