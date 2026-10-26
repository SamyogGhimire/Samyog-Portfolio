import React from 'react'
import { Rocket, ShieldCheck, Layers } from 'lucide-react'
import Reveal from '../components/Reveal'

const points = [
  {
    Icon: Rocket,
    title: 'Built to Ship',
    text: 'I don’t stop at localhost. My projects come with Docker, CI/CD pipelines, infrastructure as code and a real deployment path.',
  },
  {
    Icon: ShieldCheck,
    title: 'Reliability & Security',
    text: 'Self-healing clusters, guardrails for AI agents, IaC security scanning. I design for what happens when things go wrong.',
  },
  {
    Icon: Layers,
    title: 'End-to-End Ownership',
    text: 'From React interfaces and APIs to Kubernetes, Terraform and monitoring, I understand the whole path a request takes.',
  },
]

export default function Why() {
  return (
    <section className="why">
      <div className="wrap">
        <Reveal><h2 className="display h-xl">Why Work With Me?</h2></Reveal>
        <Reveal delay={0.1}><p>Infrastructure-minded. Product-focused.</p></Reveal>
        <div className="why-grid">
          {points.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <Icon size={42} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
