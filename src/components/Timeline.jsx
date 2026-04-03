import React, { useEffect, useRef, useState } from 'react';

const MILESTONES = [
  { year: '2016', text: 'The story began — two souls found each other ✨' },
  { year: '2017', text: 'Growing deeper, laughing louder every day 😄' },
  { year: '2018', text: 'Through every challenge, still choosing each other 💪' },
  { year: '2019', text: 'Adventures, dreams and late-night promises 🌙' },
  { year: '2020', text: 'Together through the hardest year — unbreakable 🤝' },
  { year: '2021', text: 'Finding beauty in the quiet, everyday moments 🌸' },
  { year: '2022', text: 'More milestones, more memories, more magic 🎉' },
  { year: '2023', text: 'Still falling, every single day 🌙' },
  { year: '2024', text: 'Everytime we met, it is like first time 💕' },
  { year: '2025', text: 'We fought, we care, we loved unconditionally 🌸' },
  { year: '2026', text: 'A decade of love — and the best is yet to come 🥂' },
];

function TimelineItem({ year, text, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 600px) {
          .timeline-item-desktop { display: none !important; }
          .timeline-item-mobile  { display: flex !important; }
        }
        @media (min-width: 601px) {
          .timeline-item-mobile { display: none !important; }
        }
      `}</style>

      {/* Desktop layout */}
      <div
        ref={ref}
        className="timeline-item-desktop"
        style={{
          display: 'flex',
          gap: 0,
          alignItems: 'center',
          marginBottom: '2.5rem',
          flexDirection: isLeft ? 'row' : 'row-reverse',
          opacity: visible ? 1 : 0,
          animation: visible
            ? `${isLeft ? 'slideInLeft' : 'slideInRight'} 0.7s ${index * 0.08}s ease both`
            : 'none',
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{
            background: 'white',
            border: '1px solid #F5D5DC',
            borderRadius: 14,
            padding: '1.2rem 1.5rem',
            textAlign: isLeft ? 'right' : 'left',
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              color: '#C2657A',
              fontWeight: 700,
              marginBottom: 4,
            }}>{year}</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#7A5555',
              lineHeight: 1.6,
            }}>{text}</div>
          </div>
        </div>

        {/* Dot */}
        <div style={{
          width: 16, height: 16,
          borderRadius: '50%',
          background: '#C2657A',
          border: '3px solid white',
          boxShadow: '0 0 0 2.5px #F5D5DC',
          flexShrink: 0,
          zIndex: 1,
          margin: '0 1.5rem',
        }} />

        <div style={{ flex: 1 }} />
      </div>

      {/* Mobile layout */}
      <div
        className="timeline-item-mobile"
        style={{
          display: 'none',
          gap: '1rem',
          alignItems: 'flex-start',
          marginBottom: '1.8rem',
          opacity: visible ? 1 : 0,
          animation: visible ? `slideInRight 0.6s ${index * 0.07}s ease both` : 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
          <div style={{
            width: 12, height: 12,
            borderRadius: '50%',
            background: '#C2657A',
            border: '2px solid white',
            boxShadow: '0 0 0 2px #F5D5DC',
            flexShrink: 0,
          }} />
          {index < MILESTONES.length - 1 && (
            <div style={{ width: 1, flex: 1, background: '#F5D5DC', minHeight: 40, marginTop: 4 }} />
          )}
        </div>
        <div style={{ flex: 1, paddingBottom: 8 }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.3rem',
            color: '#C2657A',
            fontWeight: 700,
            marginBottom: 2,
          }}>{year}</div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#7A5555',
            lineHeight: 1.6,
          }}>{text}</div>
        </div>
      </div>
    </>
  );
}

export default function Timeline() {
  return (
    <section style={{
      background: 'var(--cream)',
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
    }}>
      <h2 className="section-title">Our <em>Story</em></h2>
      <p className="section-subtitle">A decade woven with beautiful memories</p>
      <div className="divider"><div className="divider-dot" /></div>

      <div style={{
        maxWidth: 740,
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Center line (desktop only) */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0, bottom: 0,
          width: 1,
          background: 'linear-gradient(to bottom, transparent, #F5D5DC 8%, #F5D5DC 92%, transparent)',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }} />

        {/* Left line (mobile only) */}
        <div style={{
          position: 'absolute',
          left: 6,
          top: 0, bottom: 0,
          width: 1,
          background: 'linear-gradient(to bottom, transparent, #F5D5DC 5%, #F5D5DC 95%, transparent)',
          pointerEvents: 'none',
        }} className="timeline-item-mobile" />

        {MILESTONES.map((m, i) => (
          <TimelineItem key={i} {...m} index={i} />
        ))}
      </div>
    </section>
  );
}
