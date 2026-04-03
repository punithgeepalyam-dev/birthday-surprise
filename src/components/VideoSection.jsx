import React, { useRef, useState } from 'react';

// ─────────────────────────────────────────────────────────────
//  ADD YOUR VIDEO HERE
//  1. Place your video in src/assets/ e.g. src/assets/bujji-video.mp4
//  2. Import it:
//       import myVideo from '../assets/bujji-video.mp4';
//  3. Set:  const VIDEO_SRC = myVideo;
// ─────────────────────────────────────────────────────────────
const VIDEO_SRC = '/video.mp4';

export default function VideoSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes videoFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .video-wrapper {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          aspect-ratio: 16/9;
          background: #2A1A1A;
          border: 2px solid #F5D5DC;
          box-shadow: 0 24px 70px rgba(194,101,122,0.22);
          cursor: pointer;
        }
        .video-wrapper video {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .play-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.35s;
        }
        .play-overlay:hover .play-ring { transform: scale(1.1); }
        .play-ring {
          width: clamp(56px, 14vw, 80px);
          height: clamp(56px, 14vw, 80px);
          border-radius: 50%;
          background: rgba(253,240,242,0.92);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.35s ease, background 0.3s;
          box-shadow: 0 8px 30px rgba(194,101,122,0.35);
        }
        .play-ring:hover { background: #FDF0F2; }
        .play-icon {
          font-size: clamp(1.4rem, 5vw, 2rem);
          color: #C2657A;
          margin-left: 4px;
        }
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0;   }
        }
        .ripple-ring {
          position: absolute;
          width: clamp(56px, 14vw, 80px);
          height: clamp(56px, 14vw, 80px);
          border-radius: 50%;
          border: 2px solid rgba(253,240,242,0.5);
          animation: ripple 1.8s ease-out infinite;
          pointer-events: none;
        }
        .ripple-ring:nth-child(2) { animation-delay: 0.6s; }
        .ripple-ring:nth-child(3) { animation-delay: 1.2s; }

        /* Rose corner accents */
        .video-wrapper::before, .video-wrapper::after {
          content: '';
          position: absolute;
          width: 40px; height: 40px;
          z-index: 3; pointer-events: none;
        }
        .video-wrapper::before {
          top: 14px; left: 14px;
          border-top: 2px solid rgba(245,213,220,0.5);
          border-left: 2px solid rgba(245,213,220,0.5);
          border-radius: 6px 0 0 0;
        }
        .video-wrapper::after {
          bottom: 14px; right: 14px;
          border-bottom: 2px solid rgba(245,213,220,0.5);
          border-right: 2px solid rgba(245,213,220,0.5);
          border-radius: 0 0 6px 0;
        }
      `}</style>

      <section style={{
        background: 'var(--cream)',
        padding: 'clamp(3rem,8vw,5rem) clamp(1rem,5vw,2rem)',
        animation: 'videoFadeUp 0.8s ease both',
      }}>
        <h2 className="section-title">Our <em>Special Moment</em></h2>
        <p className="section-subtitle">A little video just for you, my Bujji 🎬</p>
        <div className="divider"><div className="divider-dot" /></div>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {VIDEO_SRC ? (
            <div className="video-wrapper" onClick={handlePlay}>
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                type="video/mp4"
                playsInline
                onEnded={() => setPlaying(false)}
              />
              {/* Play / pause overlay — hide when playing */}
              {!playing && (
                <div className="play-overlay" style={{
                  background: started ? 'rgba(61,43,43,0.35)' : 'rgba(61,43,43,0.5)',
                }}>
                  <div className="ripple-ring" />
                  <div className="ripple-ring" />
                  <div className="ripple-ring" />
                  <div className="play-ring">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Placeholder shown until VIDEO_SRC is set */
            <div className="video-wrapper" style={{ cursor: 'default' }}>
              <div style={{
                width: '100%', height: '100%',
                background: 'linear-gradient(135deg, #3D2B2B 0%, #5A3040 100%)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 16, padding: '2rem',
              }}>
                <div style={{
                  width: 72, height: 72,
                  borderRadius: '50%',
                  border: '2px dashed rgba(245,213,220,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem',
                }}>🎬</div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                  color: '#F5D5DC',
                  fontStyle: 'italic',
                  textAlign: 'center',
                  lineHeight: 1.5,
                }}>
                  Add your special video here
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.9rem',
                  color: 'rgba(245,213,220,0.55)',
                  fontStyle: 'italic',
                  textAlign: 'center',
                }}>
                  Import your .mp4 and set VIDEO_SRC in VideoSection.jsx
                </p>
              </div>
            </div>
          )}

          <p style={{
            textAlign: 'center',
            marginTop: '1.25rem',
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#7A5555',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
            lineHeight: 1.7,
          }}>
            Every second with you is worth a thousand memories ✨
          </p>
        </div>
      </section>
    </>
  );
}
