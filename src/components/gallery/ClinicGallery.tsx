'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import GalleryImage from './GalleryImage';
import { galleryCategories, galleryPhotos } from './gallery-data';
import styles from './gallery.module.css';

const GalleryLightbox = dynamic(() => import('./GalleryLightbox'), { ssr: false });
const PAGE_SIZE = 12;

export default function ClinicGallery() {
  const [category, setCategory] = useState<string>('Все фотографии');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const filtered = useMemo(() => category === 'Все фотографии' ? galleryPhotos : galleryPhotos.filter(photo => photo.category === category), [category]);
  const closeViewer = useCallback(() => setOpenIndex(null), []);
  const visible = filtered.slice(0, visibleCount);

  function showMore() {
    const firstNewIndex = visibleCount;
    const scrollTop = window.scrollY;
    setVisibleCount(count => Math.min(count + PAGE_SIZE, filtered.length));
    // Continue keyboard navigation with the newly revealed cards, without moving the page.
    requestAnimationFrame(() => {
      gridRef.current?.querySelectorAll<HTMLButtonElement>('button')[firstNewIndex]?.focus({ preventScroll: true });
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollTop);
      root.style.scrollBehavior = previousBehavior;
    });
  }

  return (
    <section id="clinic-gallery" className={styles.gallery} aria-labelledby="clinic-gallery-title">
      <div className={styles.heading}>
        <div>
          <span className={styles.eyebrow}><span /> Знакомство с клиникой</span>
          <h2 id="clinic-gallery-title">Альтамед-С <span>в деталях</span></h2>
          <p>Пространство, люди и оборудование. Загляните к нам ещё до первого визита.</p>
        </div>
        <div className={styles.photoCount}><strong>{galleryPhotos.length}</strong><span>фотографий<br />из жизни центра</span></div>
      </div>
      <div className={styles.filters} role="group" aria-label="Категории фотографий">
        {galleryCategories.map(item => (
          <button key={item} type="button" aria-pressed={category === item}
            onClick={() => { setCategory(item); setVisibleCount(PAGE_SIZE); }}>
            {item}
          </button>
        ))}
      </div>
      <div ref={gridRef} id="clinic-gallery-grid" className={styles.grid}>
        {visible.map((photo, index) => (
          <button key={photo.id} type="button"
            className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
            aria-label={`Открыть фото: ${photo.title}`} aria-haspopup="dialog" onClick={() => setOpenIndex(index)}>
            <GalleryImage photo={photo} sizes={index === 0 ? '(max-width: 639px) calc(100vw - 64px), (max-width: 1023px) 60vw, 630px' : '(max-width: 639px) calc(50vw - 40px), (max-width: 1023px) 30vw, 310px'} />
            <span className={styles.cardShade} />
            <span className={styles.expandIcon} aria-hidden="true">↗</span>
            <span className={styles.cardCaption}><span>{photo.category}</span><strong>{photo.title}</strong></span>
          </button>
        ))}
      </div>
      <div className={styles.galleryFooter}>
        <p role="status">Показано {visible.length} из {filtered.length} фотографий</p>
        {visible.length < filtered.length && <button type="button" className={styles.moreButton} aria-controls="clinic-gallery-grid" onClick={showMore}>Показать ещё <span aria-hidden="true">+</span></button>}
        <span className={styles.viewHint}>Нажмите на фото, чтобы рассмотреть ближе</span>
      </div>
      {openIndex !== null && <GalleryLightbox photos={filtered} initialIndex={openIndex} onClose={closeViewer} />}
    </section>
  );
}
