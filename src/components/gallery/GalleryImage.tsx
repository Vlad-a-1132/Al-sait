'use client';

import { useState } from 'react';
import type { GalleryPhoto } from './gallery-data';
import styles from './gallery.module.css';

// These responsive files are optimized offline. A native srcSet avoids processing
// 6K originals on the web server and also works before JavaScript hydrates.
export default function GalleryImage({ photo, sizes, eager = false }: {
  photo: GalleryPhoto;
  sizes: string;
  eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <span className={styles.imageShell} style={{ backgroundImage: `url("${photo.blur}")` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.variants[960].src}
        srcSet={`${photo.variants[480].src} 480w, ${photo.variants[960].src} 960w`}
        sizes={sizes}
        alt={photo.title}
        width={photo.variants[960].width}
        height={photo.variants[960].height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className={`${styles.image} ${loaded ? styles.imageLoaded : ''}`}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
      {failed && <span className={styles.imageError}>Не удалось загрузить превью. Откройте фото.</span>}
    </span>
  );
}
