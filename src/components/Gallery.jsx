import React, { useRef, useEffect } from 'react';
// Swiper core + modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import p1 from '../assets/gallery/Img1.jpg';
import p2 from '../assets/gallery/Img2.jpg';
import p3 from '../assets/gallery/Img3.jpg';
import p4 from '../assets/gallery/Img4.jpg';
import p5 from '../assets/gallery/Img5.jpg';
import p6 from '../assets/gallery/Img6.jpg';
import p7 from '../assets/gallery/Img7.jpg';
import p8 from '../assets/gallery/Img8.jpg';
import p9 from '../assets/gallery/Img9.jpg';
import p10 from '../assets/gallery/Img10.jpg';
import p11 from '../assets/gallery/Img11.jpg';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ─────────────────────────────────────────────────────────────
//  ADD YOUR PHOTOS HERE
//  1. Place all images in src/assets/gallery/
//  2. Import them and replace the placeholder src values below
//
//  Example:
//    import p1 from '../assets/gallery/photo1.jpg';
//    import p2 from '../assets/gallery/p1';
//    ...
//    const PHOTOS = [
//      { src: p1, caption: "The day our eyes first met…" },
//      ...
//    ];
// ─────────────────────────────────────────────────────────────

const PHOTOS = [
  { src: p1, caption: "The day our eyes first met… ✨" },
  { src: p2, caption: "First photoshoot we had 🌄" },
  { src: p3, caption: "The day we celebrated with joy 😊" },
  { src: p4, caption: "Side by side, always 🤝" },
  { src: p5, caption: "Two of us together 💃" },
  { src: p6, caption: "The moment we forgot the world ✨" },
  { src: p7, caption: "The Day we are free in our world ✨" },
  { src: p8, caption: "Look how happy we are when we together 🌅" },
  { src: p9, caption: "Growing together, day by day 🌱" },
  { src: p10, caption: "You & Me 💕" },
  { src: p11, caption: "Ten years — and just the beginning 💕" },
];

export default function Gallery() {
  return (
    <>
      <style>{`
        .gallery-section { background: white; padding: clamp(3rem,8vw,5rem) 0; }

        /* Swiper overrides */
        .bujji-swiper { padding: 1rem 0 4rem !important; }

        .bujji-swiper .swiper-slide {
          width: clamp(240px, 70vw, 320px) !important;
          border-radius: 20px;
          overflow: hidden;
          transition: box-shadow 0.4s ease;
        }
        .bujji-swiper .swiper-slide-active {
          box-shadow: 0 28px 70px rgba(194,101,122,0.28) !important;
        }

        /* Pagination bullets */
        .bujji-swiper .swiper-pagination-bullet {
          background: #F5D5DC;
          opacity: 1;
          width: 7px; height: 7px;
          transition: all 0.3s;
        }
        .bujji-swiper .swiper-pagination-bullet-active {
          background: #C2657A;
          width: 22px;
          border-radius: 4px;
        }

        /* Nav arrows */
        .bujji-swiper .swiper-button-prev,
        .bujji-swiper .swiper-button-next {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(253,240,242,0.9);
          border: 1.5px solid #F5D5DC;
          color: #C2657A !important;
          box-shadow: 0 4px 16px rgba(194,101,122,0.15);
          backdrop-filter: blur(6px);
          transition: all 0.3s;
        }
        .bujji-swiper .swiper-button-prev:hover,
        .bujji-swiper .swiper-button-next:hover {
          background: #C2657A;
          color: white !important;
          transform: scale(1.08);
        }
        .bujji-swiper .swiper-button-prev::after,
        .bujji-swiper .swiper-button-next::after {
          font-size: 14px !important;
          font-weight: 700;
        }
        @media (max-width: 480px) {
          .bujji-swiper .swiper-button-prev,
          .bujji-swiper .swiper-button-next { display: none !important; }
        }

        /* Photo card */
        .photo-slide-inner {
          position: relative;
          aspect-ratio: 3/4;
          background: #FDF0F2;
          border-radius: 20px;
          overflow: hidden;
        }
        .photo-slide-inner img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .bujji-swiper .swiper-slide-active .photo-slide-inner img {
          transform: scale(1.04);
        }
        .photo-slide-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(61,43,43,0.82) 0%, transparent 55%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.4rem;
          pointer-events: none;
        }
        .photo-slide-num {
          font-family: 'Playfair Display', serif;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          color: rgba(253,240,242,0.55);
          margin-bottom: 0.35rem;
          font-style: italic;
        }
        .photo-slide-caption {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          color: rgba(253,240,242,0.95);
          line-height: 1.45;
          transform: translateY(4px);
          transition: transform 0.4s ease;
        }
        .bujji-swiper .swiper-slide-active .photo-slide-caption {
          transform: translateY(0);
        }

        /* Rose petal corner accents on active card */
        .photo-slide-inner::before {
          content: '';
          position: absolute;
          top: 12px; right: 12px;
          width: 36px; height: 36px;
          border-top: 1.5px solid rgba(253,240,242,0.3);
          border-right: 1.5px solid rgba(253,240,242,0.3);
          border-radius: 0 8px 0 0;
          z-index: 2;
          pointer-events: none;
        }
        .photo-slide-inner::after {
          content: '';
          position: absolute;
          bottom: 12px; left: 12px;
          width: 36px; height: 36px;
          border-bottom: 1.5px solid rgba(253,240,242,0.3);
          border-left: 1.5px solid rgba(253,240,242,0.3);
          border-radius: 0 0 0 8px;
          z-index: 2;
          pointer-events: none;
        }

        /* Counter badge */
        .slide-counter {
          position: absolute;
          top: 14px; left: 14px;
          background: rgba(255,255,255,0.82);
          color: #C2657A;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 0.22rem 0.6rem;
          border-radius: 50px;
          font-family: 'Cormorant Garamond', serif;
          z-index: 3;
          backdrop-filter: blur(4px);
        }

        @keyframes galleryFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gallery-head { animation: galleryFadeUp 0.7s ease both; }
      `}</style>

      <section className="gallery-section">
        <div className="gallery-head" style={{ textAlign: 'center', padding: '0 1.5rem' }}>
          <h2 className="section-title">Our <em>Moments</em></h2>
          <p className="section-subtitle">Ten years of smiles, adventures & love — swipe through 💕</p>
          <div className="divider"><div className="divider-dot" /></div>
        </div>

        <Swiper
          className="bujji-swiper"
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 38,
            stretch: 0,
            depth: 120,
            modifier: 1.1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={700}
        >
          {PHOTOS.map((photo, i) => (
            <SwiperSlide key={i}>
              <div className="photo-slide-inner">
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <div className="photo-slide-overlay">
                  <div className="photo-slide-num">Memory {String(i + 1).padStart(2, '0')}</div>
                  <div className="photo-slide-caption">{photo.caption}</div>
                </div>
                <div className="slide-counter">{String(i + 1).padStart(2, '0')} / {PHOTOS.length}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
