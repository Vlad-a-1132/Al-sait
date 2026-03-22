import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Поиск по сайту - Медицинский центр Альтамед-Св Одинцово',
  description: 'Поиск по сайту медицинского центра Альтамед-Св Одинцово - найдите нужного врача, услугу или информацию на сайте клиники.',
  keywords: [
    'поиск по сайту Альтамед-с',
    'найти врача Одинцово',
    'поиск услуг клиники Одинцово',
    'поиск на сайте медицинского центра',
    'Московская область поиск врача',
    'Одинцовский район поиск услуг'
  ],
  openGraph: {
    title: 'Поиск по сайту - Медицинский центр Альтамед-Св Одинцово',
    description: 'Поиск по сайту медицинского центра Альтамед-Св Одинцово - найдите нужного врача, услугу или информацию на сайте клиники.',
    url: 'https://altamed-c.ru/search',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/search',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

