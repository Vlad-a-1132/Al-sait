import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HILT-лазер в Одинцово - Высокоинтенсивный лазер, лечение боли | Альтамед-с',
  description: 'HILT-лазер в Одинцово - высокоинтенсивный лазер, лечение боли, лечение заболеваний суставов и позвоночника, спортивных травм. Безоперационное лечение. Запись на HILT-лазер в клинике Альтамед-с.',
  keywords: [
    'HILT-лазер Одинцово',
    'высокоинтенсивный лазер Одинцово',
    'лечение боли Одинцово',
    'лечение суставов лазером Одинцово',
    'лечение позвоночника лазером Одинцово',
    'лечение спортивных травм Одинцово',
    'HILT-лазер Альтамед-с',
    'записаться на HILT-лазер Одинцово',
    'Московская область HILT-лазер',
    'Одинцовский район HILT-лазер'
  ],
  openGraph: {
    title: 'HILT-лазер в Одинцово - Высокоинтенсивный лазер, лечение боли | Альтамед-с',
    description: 'HILT-лазер в Одинцово - высокоинтенсивный лазер, лечение боли, лечение заболеваний суставов и позвоночника, спортивных травм.',
    url: 'https://altamed-c.ru/services/hilt-laser',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/hilt-laser',
  },
};

export default function HiltLaserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

