import React, { useEffect, useRef, useState } from "react";
import Confetti from "./components/Confetti";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import Timeline from "./components/Timeline";
import LoveLetter from "./components/LoveLetter";
import Footer from "./components/Footer";

export default function App() {
  const [launchConfetti, setLaunchConfetti] = useState(0);
  const [started, setStarted] = useState(false);
  const btnStyle = {
    padding: "12px 28px",
    borderRadius: "30px",
    border: "none",
    background: "#C2657A",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    transition: "0.3s",
  };
  const [showVideo, setShowVideo] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const audioRef = useRef(null);

  // Confetti after start
  useEffect(() => {
    if (started) {
      const t = setTimeout(() => setLaunchConfetti(1), 800);
      return () => clearTimeout(t);
    }
  }, [started]);

  // Handle start (VERY IMPORTANT for music)
  const handleStart = () => {
    setStarted(true);

    // small delay to ensure DOM updated
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }, 100);
  };

  // 💌 INTRO SCREEN
  if (!started) {
  return (
    <>
  <style>
    {`
      /* 💓 Floating hearts */
      @keyframes floatHearts {
        0% { transform: translateY(100vh) scale(0.6); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-10vh) scale(1); opacity: 0; }
      }

      /* ❤️ Big glowing heart */
      @keyframes pulseHeart {
        0%,100% { transform: scale(1); opacity: 0.15; }
        50% { transform: scale(1.2); opacity: 0.25; }
      }

      /* ✨ Fade in */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* 💌 Button hover */
      .romantic-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 10px 30px rgba(194,101,122,0.5);
      }
    `}
  </style>

  {showIntroVideo ? (
    <div style={{
      height: "100vh",
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <video
        src="/kiss.mp4"
        autoPlay
        controls
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "16px"
        }}
        onEnded={() => setShowIntroVideo(false)}
      />
    </div>
  ) : (

    <div style={{
      height: "100vh",
      background: "linear-gradient(135deg, #3D2B2B, #5A3040, #C2657A)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* ❤️ BIG BACKGROUND HEART */}
      <div style={{
        position: "absolute",
        fontSize: "200px",
        opacity: 0.1,
        animation: "pulseHeart 4s ease-in-out infinite",
        pointerEvents: "none"
      }}>
        ❤️
      </div>

      {/* 💓 FLOATING HEARTS */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 20}px`,
            animation: `floatHearts ${4 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.8
          }}
        >
          💖
        </div>
      ))}

      {/* TEXT */}
      <h1 style={{
        fontSize: "2.2rem",
        zIndex: 1,
        fontFamily: "cursive",
        animation: "fadeIn 1s ease"
      }}>
        I made something for you 💖
      </h1>

      {/* BUTTONS */}
      <div style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        zIndex: 1,
        animation: "fadeIn 1.5s ease"
      }}>

        <button
          onClick={handleStart}
          style={btnStyle}
          className="romantic-btn"
        >
          Open My Heart 💌
        </button>

        <button
          onClick={() => setShowIntroVideo(true)}
          style={{
            ...btnStyle,
            background: "transparent",
            border: "1px solid #fff"
          }}
          className="romantic-btn"
        >
          Only for Saju ❤️
        </button>

      </div>
    </div>
  )}
</>
  );
}

  return (
    <>
      {/* 🎵 Music */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* 🎉 Confetti */}
      <Confetti trigger={launchConfetti} />

      {/* ✨ Typing Message */}
      <TypingText />

      {/* Your Sections */}
      <Hero />
      <Gallery />
      <VideoSection />
      <Timeline />
      <LoveLetter />
      <Footer />
    </>
  );
}

// ✨ Typing Component (inline for simplicity)
function TypingText() {
  const text = "You are my today, tomorrow and forever 💕";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      style={{
        textAlign: "center",
        margin: "2rem 1rem",
        color: "#C2657A",
        fontFamily: "cursive",
      }}
    >
      {display}
    </h2>
  );
}
