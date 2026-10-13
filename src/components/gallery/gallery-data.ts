import photos from '@/data/clinic-gallery.generated.json';

export const galleryPhotos = photos;
export type GalleryPhoto = (typeof photos)[number];
export const galleryCategories = ['Все фотографии', 'Клиника', 'Врачи и приём', 'Диагностика', 'Процедуры'] as const;
