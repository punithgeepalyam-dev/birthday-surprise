import React from 'react';
import FloatingPetals from './FloatingPetals';
import Bujji from "../assets/Bujji3.jpeg";

// ─────────────────────────────────────────────
//  STEP 1: Put Bujji's hero photo in src/assets/
//  Then replace the src below with your import:
//
//  import heroBg from '../assets/hero-bg.jpg';
//  and use:  backgroundImage: `url(${heroBg})`
// ─────────────────────────────────────────────
const HERO_BG = Bujji;

const Heart = ({ delay = 0, color = '#C2657A' }) => (
  <span style={{
    display: 'inline-block',
    width: 14, height: 14,
    background: color,
    position: 'relative',
    transform: 'rotate(45deg)',
    borderRadius: '0 0 2px 0',
    animation: `heartbeat 1.4s ${delay}s ease-in-out infinite`,
    flexShrink: 0,
  }}>
    <span style={{ position: 'absolute', background: color, borderRadius: '50%', width: 14, height: 14, top: -7, left: 0 }} />
    <span style={{ position: 'absolute', background: color, borderRadius: '50%', width: 14, height: 14, top: 0, left: -7 }} />
  </span>
);

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: rotate(45deg) scale(1); }
          50%       { transform: rotate(45deg) scale(1.4); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,147,90,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(184,147,90,0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(10px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes kenBurns {
          0%   { transform: scale(1)    translate(0, 0); }
          50%  { transform: scale(1.06) translate(-1%, -1%); }
          100% { transform: scale(1)    translate(0, 0); }
        }
      `}</style>

      <section style={{
        minHeight: '100svh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* ── Background image with Ken Burns effect ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          animation: 'kenBurns 18s ease-in-out infinite',
          filter: 'brightness(0.45) saturate(1.15)',
          willChange: 'transform',
        }} />

        {/* ── Gradient overlay ── */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(61,43,43,0.25) 0%, rgba(61,43,43,0.5) 55%, rgba(61,43,43,0.88) 100%)',
        }} />

        {/* ── Floating petals ── */}
        <FloatingPetals count={22} />

        {/* ── Content ── */}
        <div style={{
          position: 'relative', zIndex: 2,
          textAlign: 'center',
          padding: 'clamp(1.5rem, 5vw, 2.5rem)',
          maxWidth: 640, width: '100%',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: '#F0DEC0',
            border: '1px solid rgba(240,222,192,0.5)',
            padding: '0.4rem 1.3rem',
            borderRadius: 50,
            marginBottom: '1.5rem',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(8px)',
            animation: 'heroFadeUp 1.2s 0.2s ease both, badgePulse 3s 2s ease-in-out infinite',
          }}>
            ✦ 10 Years of Love ✦
          </div>

          {/* Happy Birthday */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 11vw, 6rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#FDF0F2',
            lineHeight: 1.05,
            animation: 'heroFadeUp 1.2s 0.4s ease both',
            textShadow: '0 4px 30px rgba(194,101,122,0.5)',
          }}>
            Happy Birthday
          </h1>

          {/* Name — shimmer gold */}
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.2rem, 16vw, 8.5rem)',
            fontWeight: 700,
            fontStyle: 'italic',
            background: 'linear-gradient(90deg, #F5D5DC, #F0DEC0, #E8A0AC, #F0DEC0, #F5D5DC)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'heroFadeUp 1.2s 0.6s ease both, shimmer 3s 1.8s linear infinite',
            lineHeight: 1.08,
            marginTop: '0.05em',
          }}>
            Bujji 💕
          </h2>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1rem, 3.5vw, 1.35rem)',
            fontStyle: 'italic',
            color: 'rgba(253,240,242,0.85)',
            marginTop: '1.2rem',
            lineHeight: 1.75,
            animation: 'heroFadeUp 1.2s 0.8s ease both',
          }}>
            To the one who makes every day feel like the first day…
          </p>

          {/* Heartbeat row */}
          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center',
            marginTop: '1.6rem', flexWrap: 'wrap',
            animation: 'heroFadeUp 1.2s 1s ease both',
          }}>
            {[
              { c: '#C2657A', d: 0    },
              { c: '#F2C4CB', d: 0.12 },
              { c: '#B8935A', d: 0.24 },
              { c: '#F2C4CB', d: 0.36 },
              { c: '#C2657A', d: 0.48 },
            ].map((h, i) => <Heart key={i} color={h.c} delay={h.d} />)}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '1.8rem',
          left: '50%',
          fontSize: '0.68rem', letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(253,240,242,0.5)',
          animation: 'scrollBounce 2s ease-in-out infinite',
          zIndex: 2, whiteSpace: 'nowrap',
        }}>
          scroll ↓
        </div>
      </section>
    </>
  );
}
