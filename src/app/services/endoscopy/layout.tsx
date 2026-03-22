import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Эндоскопия в Одинцово - Гастроскопия (ФГДС) | Альтамед-с',
  description: 'Эндоскопия в Одинцово - гастроскопия на современном оборудовании экспертного класса. Биопсия, диагностика ЖКТ. Запись на эндоскопию в клинике Альтамед-с.',
  keywords: [
    'эндоскопия Одинцово',
    'гастроскопия Одинцово',
    'ФГДС Одинцово',
    'эндоскопия желудка Одинцово',
    
    'эндоскопия в Одинцово где сделать',
    'эндоскопия Одинцово цена',
    'эндоскопия Альтамед-с',
    'эндоскопические исследования Одинцово',
    'биопсия при эндоскопии Одинцово',
    'эндоскопия под наркозом Одинцово',
    'записаться на эндоскопию Одинцово'
  ],
  openGraph: {
    title: 'Эндоскопия в Одинцово - Гастроскопия (ФГДС) | Альтамед-с',
    description: 'Эндоскопия в Одинцово - гастроскопия на современном оборудовании экспертного класса. Биопсия, диагностика ЖКТ.',
    type: 'website',
    url: 'https://altamed-c.ru/services/endoscopy',
    locale: 'ru_RU',
    siteName: 'Альтамед-с',
    images: [
      {
        url: '/images/img diagnostika/endoskop.webp',
        width: 1200,
        height: 630,
        alt: 'Эндоскопия в Одинцово - Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Эндоскопия в Одинцово - Гастроскопия (ФГДС) | Альтамед-с',
    description: 'Эндоскопия в Одинцово - гастроскопия на современном оборудовании экспертного класса. Биопсия, диагностика ЖКТ.',
    images: ['/images/img diagnostika/endoskop.webp'],
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/endoscopy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function EndoscopyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

