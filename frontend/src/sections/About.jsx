import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GITHUB_USERNAME, LEETCODE_USERNAME, EMAIL } from '../data'
import Reveal from '../components/Reveal'

const facts = [
  { k: 'Based in', v: 'India' },
  { k: 'Focus', v: 'DevOps · Cloud · Full-Stack' },
  { k: 'Education', v: 'B.Tech, Computer Science' },
  { k: 'Email', v: EMAIL },
]

export default function About({ theme }) {
  const dark = theme === 'dark'
  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="about-top">
          <div>
            <Reveal>
              <h2 className="display h-lg">Engineering That Holds Up Under Pressure</h2>
            </Reveal>
            <Reveal delay={0.1} className="about-bio">
              <p>
                I’m <span className="hl">Samyog Ghimire</span>, a DevOps and cloud engineer who also builds
                full-stack products. I care about the part most demos skip: how software gets deployed,
                monitored, secured and brought back when it fails.
              </p>
              <p>
                Lately that has meant self-healing Kubernetes, security gateways for AI coding agents and
                explainable fraud detection. Outside of code, you’ll find me on the football pitch or
                working through LeetCode.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <ul className="facts">
              <li><span>Status</span><span><i className="status-dot" />Open to work</span></li>
              {facts.map(f => (
                <li key={f.k}><span>{f.k}</span><span>{f.v}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="activity">
          <Reveal className="panel">
            <div className="panel-head">
              <h3>GitHub Activity</h3>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                Profile <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="heatmap">
              <img
                src={`https://ghchart.rshah.org/8b5cf6/${GITHUB_USERNAME}`}
                alt="GitHub contribution heatmap"
                loading="lazy"
                onError={e => { e.target.parentElement.style.display = 'none' }}
              />
            </div>
            <img
              key={theme}
              src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=${dark ? 'dark' : 'default'}&hide_border=true&background=00000000&ring=8b5cf6&fire=c026d3&currStreakLabel=8b5cf6`}
              alt="GitHub streak stats"
              loading="lazy"
              onError={e => { e.target.style.display = 'none' }}
            />
          </Reveal>
          <Reveal className="panel" delay={0.1}>
            <div className="panel-head">
              <h3>LeetCode</h3>
              <a href={`https://leetcode.com/${LEETCODE_USERNAME}`} target="_blank" rel="noopener noreferrer">
                Profile <ArrowUpRight size={14} />
              </a>
            </div>
            <img
              key={theme}
              src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=${dark ? 'dark' : 'light'}&font=Inter&ext=heatmap&border=0&radius=10`}
              alt="LeetCode stats"
              loading="lazy"
              onError={e => { e.target.style.display = 'none' }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
