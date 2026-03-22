import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Удаление зубных отложений в Одинцово - Снятие налета и камня | Альтамед-с',
  description: 'Удаление зубных отложений в Одинцово. Ультразвуковое удаление зубного камня, Air Flow для снятия налета. Базовые процедуры гигиены полости рта в клинике Альтамед-с.',
  keywords: [
    'удаление зубного камня одинцово',
    'снятие налета одинцово',
    'air flow одинцово',
    'ультразвуковая чистка одинцово',
    'удаление зубных отложений одинцово'
  ],
  openGraph: {
    title: 'Удаление зубных отложений в Одинцово - Снятие налета и камня | Альтамед-с',
    description: 'Удаление зубных отложений в Одинцово. Ультразвуковое удаление зубного камня, Air Flow для снятия налета.',
    url: 'https://altamed-c.ru/services/dentistry/deposits',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/deposits',
  },
};

export default function DepositsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

