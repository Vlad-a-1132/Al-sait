import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Несъемные ортодонтические аппараты в Одинцово - Ретейнеры, аппарат Forsus | Стоматология Альтамед-с',
  description: 'Несъемные ортодонтические аппараты в Одинцово - ретейнеры, аппарат Forsus. Фиксация ретейнеров, установка и активация аппарата Forsus. Запись на консультацию к ортодонту.',
  keywords: [
    'ретейнеры Одинцово',
    'несъемные аппараты Одинцово',
    'аппарат Forsus Одинцово',
    'фиксация ретейнера Одинцово',
    'ортодонтия Одинцово',
    'записаться к ортодонту Одинцово',
    'Московская область ортодонтия',
    'Одинцовский район ретейнеры'
  ],
  openGraph: {
    title: 'Несъемные ортодонтические аппараты в Одинцово - Ретейнеры, аппарат Forsus | Альтамед-с',
    description: 'Несъемные ортодонтические аппараты в Одинцово - ретейнеры, аппарат Forsus.',
    url: 'https://altamed-c.ru/services/dentistry/fixed-appliances',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/fixed-appliances',
  },
};

export default function FixedAppliancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

