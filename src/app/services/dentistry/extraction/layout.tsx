import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Удаление зубов в Одинцово - Простое и сложное удаление | Альтамед-с',
  description: 'Удаление зубов в Одинцово. Простое и сложное удаление зубов, удаление ретинированных зубов, сопутствующие процедуры. Безболезненное удаление в клинике Альтамед-с.',
  keywords: [
    'удаление зубов одинцово',
    'удаление зуба одинцово',
    'сложное удаление зуба одинцово',
    'удаление ретинированного зуба одинцово',
    'удаление зуба мудрости одинцово'
  ],
  openGraph: {
    title: 'Удаление зубов в Одинцово - Простое и сложное удаление | Альтамед-с',
    description: 'Удаление зубов в Одинцово. Простое и сложное удаление зубов, удаление ретинированных зубов.',
    url: 'https://altamed-c.ru/services/dentistry/extraction',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/extraction',
  },
};

export default function ExtractionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

