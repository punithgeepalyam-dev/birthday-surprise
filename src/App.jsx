import React, { useEffect, useRef, useState } from 'react';
import Confetti from './components/Confetti';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import Footer from './components/Footer';

export default function App() {
  const [launchConfetti, setLaunchConfetti] = useState(0);
  const [started, setStarted] = useState(false);
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
      <audio ref={audioRef} src="/music.mp3" loop />
      
      <div style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #3D2B2B, #5A3040)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem' }}>
          I made something for you 💖
        </h1>

        <button
          onClick={handleStart}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            borderRadius: '30px',
            border: 'none',
            background: '#C2657A',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Tap to Open 💌
        </button>
      </div>
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
    <h2 style={{
      textAlign: "center",
      margin: "2rem 1rem",
      color: "#C2657A",
      fontFamily: "cursive"
    }}>
      {display}
    </h2>
  );
}