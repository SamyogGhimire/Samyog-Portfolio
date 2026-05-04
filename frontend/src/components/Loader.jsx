import React from 'react'

export default function Loader() {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#06060f',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, gap: '1.5rem'
    }}>
      <style>{`
        @keyframes bounce {
          0%   { transform: translateX(-80px) rotate(0deg) scaleY(1); }
          45%  { transform: translateX(80px) rotate(360deg) scaleY(1); }
          50%  { transform: translateX(80px) rotate(400deg) scaleY(0.82); }
          55%  { transform: translateX(80px) rotate(440deg) scaleY(1); }
          100% { transform: translateX(-80px) rotate(720deg) scaleY(1); }
        }
        @keyframes shadow-pulse {
          0%, 100% { transform: translateX(-80px) scaleX(0.5); opacity: 0.25; }
          50%       { transform: translateX(80px) scaleX(1); opacity: 0.55; }
        }
        @keyframes dots {
          0%   { content: ''; }
          25%  { content: '.'; }
          50%  { content: '..'; }
          75%  { content: '...'; }
          100% { content: ''; }
        }
        .football {
          font-size: 54px; line-height: 1;
          animation: bounce 1.2s ease-in-out infinite;
          filter: drop-shadow(0 0 14px rgba(124,58,237,0.7));
        }
        .loader-shadow {
          width: 42px; height: 8px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.55), transparent);
          border-radius: 50%;
          animation: shadow-pulse 1.2s ease-in-out infinite;
          margin-top: -6px;
        }
        .loader-text {
          font-family: 'Fira Code', monospace;
          color: #7c3aed; font-size: 0.95rem; letter-spacing: 0.15em;
        }
        .loader-text::after { content: ''; animation: dots 1.5s steps(4, end) infinite; }
      `}</style>
      <div className="football">⚽</div>
      <div className="loader-shadow" />
      <p className="loader-text">// loading portfolio</p>
    </div>
  )
}
