import React, { useEffect, useState } from 'react';
import Confetti from './components/Confetti';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import Footer from './components/Footer';

export default function App() {
  const [launchConfetti, setLaunchConfetti] = useState(0);

  // Fire confetti on first load
  useEffect(() => {
    const t = setTimeout(() => setLaunchConfetti(1), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Confetti trigger={launchConfetti} />
      <Hero />
      <Gallery />
      <VideoSection />
      <Timeline />
      <LoveLetter />
      <Footer />
    </>
  );
}
