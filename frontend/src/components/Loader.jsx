import React from 'react'

export default function Loader() {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#0f0f0f',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '1.5rem'
    }}>
      <style>{`
        @keyframes roll {
          0%   { transform: translateX(-60px) rotate(0deg); }
          50%  { transform: translateX(60px) rotate(360deg); }
          100% { transform: translateX(-60px) rotate(720deg); }
        }
        @keyframes blink { 50% { opacity: 0.3; } }
        .ball { font-size: 2.5rem; animation: roll 1.1s ease-in-out infinite; }
        .ltxt { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #555; animation: blink 1.4s ease infinite; }
      `}</style>
      <div className="ball">⚽</div>
      <p className="ltxt">Loading...</p>
    </div>
  )
}
