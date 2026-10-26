import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data'
import Reveal from '../components/Reveal'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="wrap">
        <Reveal><h2 className="display h-lg">Frequently Asked Questions</h2></Reveal>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05} y={20} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                {f.q}
                <span className="icon-btn" aria-hidden="true"><Plus size={18} /></span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-${i}`}
                    className="faq-a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
