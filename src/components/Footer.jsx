import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#3D2B2B',
      color: 'rgba(255,255,255,0.45)',
      textAlign: 'center',
      padding: '2.5rem 1.5rem',
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '0.95rem',
      fontStyle: 'italic',
    }}>
      <p>
        Made with{' '}
        <span style={{ color: '#C2657A', fontSize: '1.1rem' }}>♥</span>
        {' '}by Sunny, for the most special birthday —{' '}
        <strong style={{ color: '#F5D5DC', fontWeight: 400 }}>yours, Bujji</strong>
        {' '}✦
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.5 }}>
        10 years down, forever to go 💕
      </p>
    </footer>
  );
}
