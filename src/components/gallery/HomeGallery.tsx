'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { galleryPhotos } from './gallery-data';
import GalleryImage from './GalleryImage';
import styles from './gallery.module.css';

const GalleryLightbox = dynamic(() => import('./GalleryLightbox'), { ssr: false });

export default function HomeGallery() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const closeViewer = useCallback(() => setOpen(false), []);
  const move = (step: number) => { setPaused(true); setIndex(current => (current + step + galleryPhotos.length) % galleryPhotos.length); };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.15), { threshold: 0.15 });
    if (rootRef.current) observer.observe(rootRef.current);
    const visibility = () => setPageVisible(!document.hidden);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => setReducedMotion(media.matches);
    visibility(); motion();
    document.addEventListener('visibilitychange', visibility);
    media.addEventListener('change', motion);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); media.removeEventListener('change', motion); };
  }, []);

  useEffect(() => {
    if (!inView || !pageVisible || reducedMotion || paused || open) return;
    const timer = window.setInterval(() => {
      // Inspect actual focus/hover: portal close and scroll can change these
      // without delivering a React mouseleave event to the carousel.
      const region = rootRef.current;
      if (region?.matches(':hover') || region?.contains(document.activeElement)) return;
      setIndex(current => (current + 1) % galleryPhotos.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [inView, pageVisible, reducedMotion, paused, open]);

  const photo = galleryPhotos[index];
  return (
    <section ref={rootRef} className={styles.homeGallery} aria-labelledby="home-gallery-title">
      <div className={styles.homeVisual}>
        <button type="button" className={styles.homePhoto} aria-label={`Открыть фото: ${photo.title}`} aria-haspopup="dialog"
          onClick={() => { if (!swiped.current) { setPaused(true); setOpen(true); } swiped.current = false; }}
          onTouchStart={event => { swiped.current = false; touch.current = event.touches.length === 1 ? {x: event.touches[0].clientX, y: event.touches[0].clientY} : null; }}
          onTouchMove={event => { if (event.touches.length > 1) touch.current = null; }}
          onTouchCancel={() => { touch.current = null; }}
          onTouchEnd={event => {
            const end = event.changedTouches[0];
            if (touch.current && end) {
              const dx = end.clientX - touch.current.x;
              if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(end.clientY - touch.current.y) * 1.5) { swiped.current = true; move(dx < 0 ? 1 : -1); }
            }
            touch.current = null;
          }}>
          <GalleryImage key={photo.id} photo={photo} sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1279px) 48vw, 620px" />
          <span className={styles.cardShade} />
          <span className={styles.homePhotoCaption}>{photo.title}</span>
          <span className={styles.expandIcon} aria-hidden="true">↗</span>
        </button>
        <div className={styles.homeControls}>
          <span className={styles.slideCounter}>{String(index + 1).padStart(2, '0')} <span>/ {galleryPhotos.length}</span></span>
          <div className={styles.homeArrows}>
            {!reducedMotion && <button type="button" aria-label={paused ? 'Включить автопоказ фотографий' : 'Приостановить автопоказ фотографий'} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? '▷' : 'Ⅱ'}</button>}
            <button type="button" aria-label="Предыдущее фото в слайдере" onClick={() => move(-1)}>←</button>
            <button type="button" aria-label="Следующее фото в слайдере" onClick={() => move(1)}>→</button>
          </div>
        </div>
      </div>
      <div className={styles.homeCopy}>
        <span className={styles.eyebrow}><span /> Знакомство до визита</span>
        <h3 id="home-gallery-title">Место, где о вас <span>заботятся.</span></h3>
        <p>Посмотрите, как устроен «Альтамед-С»: кабинеты, диагностическое оборудование и повседневная работа наших специалистов.</p>
        <div className={styles.homeTags}><span>Пространство клиники</span><span>Люди и технологии</span></div>
        <Link href="/about?section=photogallery#clinic-gallery" className={styles.galleryLink}>Вся фотогалерея <span aria-hidden="true">↗</span></Link>
      </div>
      {open && <GalleryLightbox photos={galleryPhotos} initialIndex={index} onClose={closeViewer} />}
    </section>
  );
}
