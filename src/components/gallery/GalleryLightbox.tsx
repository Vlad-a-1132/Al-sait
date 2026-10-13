'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { GalleryPhoto } from './gallery-data';
import styles from './gallery.module.css';

export default function GalleryLightbox({ photos, initialIndex, onClose }: {
  photos: GalleryPhoto[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const [loadedId, setLoadedId] = useState('');
  const [failedId, setFailedId] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const photo = photos[index];
  const move = (direction: number) => setIndex(current => (current + direction + photos.length) % photos.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const scrollY = window.scrollY;
    const body = document.body;
    const previous = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow };
    // Fixed-body locking also prevents background scrolling in iOS Safari.
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    dialog?.showModal();
    return () => {
      dialog?.close();
      Object.assign(body.style, previous);
      const root = document.documentElement;
      const behavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      opener?.focus({ preventScroll: true });
      root.style.scrollBehavior = behavior;
    };
  }, []);

  useEffect(() => {
    // Only prefetch one adjacent large image, after the current image has loaded.
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (loadedId !== photo.id || photos.length < 2 || connection?.saveData) return;
    const nextImage = new window.Image();
    nextImage.decoding = 'async';
    nextImage.src = photos[(index + 1) % photos.length].variants[1800].src;
  }, [index, loadedId, photo.id, photos]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.lightbox}
      aria-labelledby="gallery-viewer-title"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onKeyDown={event => {
        if (event.key === 'Tab') {
          const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]'))
            .filter(element => element.getClientRects().length > 0);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      }}
    >
      <div className={styles.lightboxHeader}>
        <div><span className={styles.lightboxBrand}>Альтамед-С</span><span className={styles.lightboxLabel}>Фотогалерея</span></div>
        <button type="button" onClick={onClose} className={styles.lightboxClose} aria-label="Закрыть просмотр фотографий" autoFocus>
          <span aria-hidden="true">×</span><span className={styles.closeLabel}>Закрыть</span>
        </button>
      </div>
      <div
        className={styles.lightboxStage}
        onClick={event => { if (event.target === event.currentTarget) onClose(); }}
        onTouchStart={event => { touch.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; }}
        onTouchMove={event => { if (event.touches.length > 1) touch.current = null; }}
        onTouchEnd={event => {
          const end = event.changedTouches[0];
          if (touch.current && end) {
            const dx = end.clientX - touch.current.x;
            const dy = end.clientY - touch.current.y;
            if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) {
              event.preventDefault();
              move(dx < 0 ? 1 : -1);
            }
          }
          touch.current = null;
        }}
        onTouchCancel={() => { touch.current = null; }}
      >
        {loadedId !== photo.id && failedId !== photo.id && <span role="status" className={styles.loadingLabel}>Загружаем фотографию…</span>}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={photo.id} src={photo.variants[1800].src} alt={photo.title}
          width={photo.variants[1800].width} height={photo.variants[1800].height}
          decoding="async" draggable={false}
          className={`${styles.fullImage} ${loadedId === photo.id ? styles.imageLoaded : ''}`}
          onLoad={() => { setLoadedId(photo.id); setFailedId(''); }} onError={() => setFailedId(photo.id)} />
        {failedId === photo.id && (
          <div className={styles.loadError} role="status">
            <p>Фотография не загрузилась.</p>
            <a href={photo.source} target="_blank" rel="noopener noreferrer">Открыть исходное фото ↗</a>
          </div>
        )}
      </div>
      <div className={styles.lightboxFooter}>
        <div className={styles.lightboxCaption} aria-live="polite" aria-atomic="true">
          <span className={styles.lightboxCategory}>{photo.category} · {index + 1} / {photos.length}</span>
          <h2 id="gallery-viewer-title">{photo.title}</h2>
        </div>
        <div className={styles.viewerArrows}>
          <button type="button" onClick={() => move(-1)} aria-label="Предыдущая фотография">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Следующая фотография">→</button>
        </div>
      </div>
    </dialog>, document.body,
  );
}
