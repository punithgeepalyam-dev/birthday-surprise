import React, { useEffect, useRef, useState } from "react";

const MILESTONES = [
  { year: "2016", text: "The story began — two souls found each other ✨" },
  { year: "2017", text: "Growing deeper, laughing louder every day 😄" },
  { year: "2018", text: "Through every challenge, still choosing each other 💪" },
  { year: "2019", text: "Adventures, dreams and late-night promises 🌙" },
  { year: "2020", text: "Together through the hardest year — unbreakable 🤝" },
  { year: "2021", text: "Finding beauty in the quiet, everyday moments 🌸" },
  { year: "2022", text: "More milestones, more memories, more magic 🎉" },
  { year: "2023", text: "Still falling, every single day 🌙" },
  { year: "2024", text: "Everytime we met, it is like first time 💕" },
  { year: "2025", text: "We fought, we care, we loved unconditionally 🌸" },
  { year: "2026", text: "A decade of love — and the best is yet to come 🥂" },
];

function TimelineItem({ item, index }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        marginBottom: "2.2rem",
        paddingLeft: "28px",

        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.08}s`,
      }}
    >
      {/* 💓 Pulse Dot */}
      <div
        style={{
          position: "absolute",
          left: "6px",
          top: "6px",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "#C2657A",
          boxShadow: "0 0 0 0 rgba(194,101,122,0.6)",
          animation: "pulse 2s infinite",
        }}
      />

      {/* 🌸 Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "14px",
          padding: "1rem 1.2rem",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          border: "1px solid rgba(245,213,220,0.6)",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem",
            fontWeight: "700",
            color: "#C2657A",
          }}
        >
          {item.year}
        </div>

        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: "#7A5555",
            lineHeight: 1.6,
          }}
        >
          {item.text}
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "clamp(3rem, 8vw, 5rem) 1.5rem",
      }}
    >
      {/* Animation */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(194,101,122,0.6); }
          70% { box-shadow: 0 0 0 10px rgba(194,101,122,0); }
          100% { box-shadow: 0 0 0 0 rgba(194,101,122,0); }
        }
      `}</style>

      <h2 className="section-title">
        Our <em>Story</em>
      </h2>
      <p className="section-subtitle">
        A decade woven with beautiful memories
      </p>
      <div className="divider">
        <div className="divider-dot" />
      </div>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Vertical Line */}
        <div
          style={{
            position: "absolute",
            left: "12px",
            top: 0,
            bottom: 0,
            width: "2px",
            background:
              "linear-gradient(to bottom, transparent, #F5D5DC, transparent)",
          }}
        />

        {MILESTONES.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}