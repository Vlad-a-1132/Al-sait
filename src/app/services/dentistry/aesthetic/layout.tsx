import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Эстетическая стоматология в Одинцово - Отбеливание зубов ZOOM4 | Альтамед-с',
  description: 'Эстетическая стоматология в Одинцово. Профессиональное отбеливание зубов системой PHILIPS ZOOM4. Улучшение внешнего вида зубов в клинике Альтамед-с.',
  keywords: [
    'эстетическая стоматология одинцово',
    'отбеливание зубов одинцово',
    'zoom4 одинцово',
    'отбеливание zoom одинцово',
    'профессиональное отбеливание зубов одинцово',
    'philips zoom одинцово'
  ],
  openGraph: {
    title: 'Эстетическая стоматология в Одинцово - Отбеливание зубов ZOOM4 | Альтамед-с',
    description: 'Эстетическая стоматология в Одинцово. Профессиональное отбеливание зубов системой PHILIPS ZOOM4.',
    url: 'https://altamed-c.ru/services/dentistry/aesthetic',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/aesthetic',
  },
};

export default function AestheticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

