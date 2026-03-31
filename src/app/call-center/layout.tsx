import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Колл-центр - Медицинский центр Альтамед-С в Одинцово | Запись по телефону',
  description: 'Колл-центр медицинского центра Альтамед-С в Одинцово - запись на прием по телефону, консультации, справки о записях. Запись на прием: +7 (495) 255-44-50',
  keywords: [
    'колл-центр Альтамед-с',
    'запись по телефону Одинцово',
    'телефон клиники Одинцово',
    'записаться по телефону Одинцово',
    'консультация по телефону Одинцово',
    'справки о записях Одинцово',
    'Московская область запись по телефону',
    'Одинцовский район колл-центр'
  ],
  openGraph: {
    title: 'Колл-центр - Медицинский центр Альтамед-С в Одинцово',
    description: 'Колл-центр медицинского центра Альтамед-С в Одинцово - запись на прием по телефону, консультации, справки о записях.',
    url: 'https://altamed-c.ru/call-center',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/call-center',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CallCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

