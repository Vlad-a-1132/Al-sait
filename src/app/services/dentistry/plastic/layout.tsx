import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Пластическая хирургия в Одинцово - Пластика мягких тканей | Альтамед-с',
  description: 'Пластическая хирургия в Одинцово. Пластика уздечек, вестибулопластика, гингивопластика, лоскутные операции. Пластика мягких тканей в клинике Альтамед-с.',
  keywords: [
    'пластическая хирургия одинцово',
    'пластика уздечки одинцово',
    'вестибулопластика одинцово',
    'гингивопластика одинцово',
    'лоскутные операции одинцово'
  ],
  openGraph: {
    title: 'Пластическая хирургия в Одинцово - Пластика мягких тканей | Альтамед-с',
    description: 'Пластическая хирургия в Одинцово. Пластика уздечек, вестибулопластика, гингивопластика, лоскутные операции.',
    url: 'https://altamed-c.ru/services/dentistry/plastic',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/plastic',
  },
};

export default function PlasticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

