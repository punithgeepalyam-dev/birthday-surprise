import React, { useEffect, useRef, useState } from 'react';

export default function LoveLetter() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes letterFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 20px rgba(240,222,192,0.3); }
          50%       { text-shadow: 0 0 40px rgba(240,222,192,0.7), 0 0 80px rgba(240,222,192,0.2); }
        }
      `}</style>

      <section
        ref={ref}
        style={{
          background: 'linear-gradient(135deg, #C2657A 0%, #A8507A 45%, #8B3B5E 100%)',
          padding: 'clamp(3.5rem, 10vw, 6rem) clamp(1.5rem, 5vw, 3rem)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Big decorative heart bg */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'min(60vw, 400px)',
          lineHeight: 1,
          opacity: 0.04,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>♡</div>

        {/* Petal shapes */}
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 60 + i * 20,
            height: 60 + i * 20,
            borderRadius: i % 2 === 0 ? '50% 0 50% 0' : '0 50% 0 50%',
            background: 'rgba(255,255,255,0.03)',
            top: `${10 + i * 10}%`,
            left: i % 2 === 0 ? `${i * 12}%` : 'auto',
            right: i % 2 !== 0 ? `${i * 8}%` : 'auto',
            pointerEvents: 'none',
          }} />
        ))}

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 6vw, 3.2rem)',
            fontWeight: 400,
            color: 'white',
            marginBottom: '0.4rem',
            opacity: visible ? 1 : 0,
            animation: visible ? 'letterFadeUp 0.8s 0.1s ease both' : 'none',
          }}>
            A Letter <em style={{ color: '#F0DEC0' }}>From My Heart</em>
          </h2>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', margin: '1rem 0 2.5rem',
            opacity: visible ? 1 : 0,
            animation: visible ? 'letterFadeUp 0.8s 0.2s ease both' : 'none',
          }}>
            <div style={{ height: 1, width: 60, background: 'rgba(255,255,255,0.25)' }} />
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
            <div style={{ height: 1, width: 60, background: 'rgba(255,255,255,0.25)' }} />
          </div>

          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            {/* Opening quote */}
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(4rem, 12vw, 7rem)',
              lineHeight: 0.6,
              color: 'rgba(255,255,255,0.12)',
              marginBottom: '1rem',
              opacity: visible ? 1 : 0,
              animation: visible ? 'letterFadeUp 0.8s 0.3s ease both' : 'none',
            }}>"</div>

            {[
              'Ten years ago, the universe conspired to bring two hearts together — and mine has been whole ever since. You are my morning light and my evening calm, the laughter in ordinary days and the courage in difficult ones.',
              'Every day I choose you. Every day I fall a little more. On this day that celebrates the beautiful soul you are, I want you to know — you are the absolute best thing that ever happened to me, Bujji.',
              'Here\'s to you. Here\'s to us. Here\'s to forever. 💕',
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.05rem, 3vw, 1.35rem)',
                lineHeight: 2,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.9)',
                marginBottom: '1.5rem',
                opacity: visible ? 1 : 0,
                animation: visible ? `letterFadeUp 0.8s ${0.4 + i * 0.15}s ease both` : 'none',
              }}>{para}</p>
            ))}

            {/* Signature */}
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
              fontStyle: 'italic',
              color: '#F0DEC0',
              marginTop: '2rem',
              opacity: visible ? 1 : 0,
              animation: visible
                ? 'letterFadeUp 0.8s 0.85s ease both, glowPulse 3s 2s ease-in-out infinite'
                : 'none',
            }}>
              With all my love, always — Sunny 🌹
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
