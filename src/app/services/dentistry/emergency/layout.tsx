import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Экстренная хирургия в Одинцово - Гнойная хирургия | Альтамед-с',
  description: 'Экстренная и гнойная хирургия в Одинцово. Хирургическая обработка ран, вскрытие абсцессов, лечение альвеолита. Экстренная помощь в клинике Альтамед-с.',
  keywords: [
    'экстренная хирургия одинцово',
    'гнойная хирургия одинцово',
    'лечение альвеолита одинцово',
    'вскрытие абсцесса одинцово',
    'хирургическая обработка раны одинцово'
  ],
  openGraph: {
    title: 'Экстренная хирургия в Одинцово - Гнойная хирургия | Альтамед-с',
    description: 'Экстренная и гнойная хирургия в Одинцово. Хирургическая обработка ран, вскрытие абсцессов, лечение альвеолита.',
    url: 'https://altamed-c.ru/services/dentistry/emergency',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/emergency',
  },
};

export default function EmergencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

