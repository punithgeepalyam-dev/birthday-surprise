import React, { useMemo } from 'react';

const PETAL_COLORS = ['#E8A0AC', '#F2C4CB', '#D4708A', '#F5D5DC', '#B8935A', '#C2657A'];

export default function FloatingPetals({ count = 18 }) {
  const petals = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 10 + Math.random() * 22,
      left: Math.random() * 100,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 12,
      shape: Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%',
    })),
  [count]);

  return (
    <>
      <style>{`
        @keyframes floatPetal {
          0%   { transform: translateY(110vh) rotate(0deg);   opacity: 0; }
          8%   { opacity: 0.22; }
          92%  { opacity: 0.22; }
          100% { transform: translateY(-10vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {petals.map(p => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.left}%`,
              bottom: 0,
              width: p.size,
              height: p.size,
              background: p.color,
              borderRadius: p.shape,
              opacity: 0,
              animation: `floatPetal ${p.duration}s ${p.delay}s linear infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}
