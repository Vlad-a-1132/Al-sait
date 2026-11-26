'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import styles from './Snowfall.module.css';

export default function Snowfall() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setPaused(document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  return (
    <div className={`${styles.snowfall}${paused ? ` ${styles.paused}` : ''}`} aria-hidden="true" data-snowfall>
      {Array.from({ length: 36 }, (_, index) => (
        <span key={index} style={{
          left: `${(index * 37 + 9) % 100}%`,
          '--flake-size': `${14 + (index % 5) * 3}px`,
          '--flake-duration': `${16 + (index % 8) * 2}s`,
          '--flake-delay': `${index * -1.9}s`,
          '--flake-drift': `${index % 2 ? -24 : 24}px`,
          '--flake-opacity': 0.58 + (index % 4) * 0.08,
        } as CSSProperties} />
      ))}
    </div>
  );
}
