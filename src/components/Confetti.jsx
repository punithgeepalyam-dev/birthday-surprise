import React, { useEffect, useRef } from 'react';

const COLORS = ['#C2657A', '#B8935A', '#F2C4CB', '#D4708A', '#F0DEC0', '#E8A0AC', '#FDF0F2'];

export default function Confetti({ trigger }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      const size = 5 + Math.random() * 9;
      const isCircle = Math.random() > 0.5;
      piece.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: -10px;
        width: ${size}px;
        height: ${size}px;
        background: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        border-radius: ${isCircle ? '50%' : '2px'};
        opacity: 1;
        pointer-events: none;
        animation: confettiFall ${1.5 + Math.random() * 2.5}s ${Math.random() * 0.6}s linear forwards;
      `;
      container.appendChild(piece);
      setTimeout(() => piece.remove(), 4500);
    }
  }, [trigger]);

  return (
    <>
      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(0) rotate(0deg);    opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
      <div
        ref={containerRef}
        style={{
          position: 'fixed', inset: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          overflow: 'hidden',
        }}
      />
    </>
  );
}
