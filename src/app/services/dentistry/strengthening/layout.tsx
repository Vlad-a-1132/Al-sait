import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Укрепление тканей зуба в Одинцово - Фторирование эмали | Альтамед-с',
  description: 'Укрепление тканей зуба в Одинцово. Глубокое фторирование эмали, покрытие фторсодержащими препаратами, запечатывание фиссур. Профилактика кариеса в клинике Альтамед-с.',
  keywords: [
    'фторирование зубов одинцово',
    'укрепление эмали одинцово',
    'глубокое фторирование одинцово',
    'запечатывание фиссур одинцово',
    'профилактика кариеса одинцово',
    'флюокаль гель одинцово'
  ],
  openGraph: {
    title: 'Укрепление тканей зуба в Одинцово - Фторирование эмали | Альтамед-с',
    description: 'Укрепление тканей зуба в Одинцово. Глубокое фторирование эмали, покрытие фторсодержащими препаратами, запечатывание фиссур.',
    url: 'https://altamed-c.ru/services/dentistry/strengthening',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/strengthening',
  },
};

export default function StrengtheningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

