import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Съемные ортодонтические аппараты в Одинцово - Элайнеры, каппы | Стоматология Альтамед-с',
  description: 'Съемные ортодонтические аппараты в Одинцово - элайнеры, каппы для исправления прикуса. Лечение элайнерами простого и сложного случая. Запись на консультацию к ортодонту.',
  keywords: [
    'элайнеры Одинцово',
    'съемные аппараты Одинцово',
    'ортодонтические каппы Одинцово',
    'лечение элайнерами Одинцово',
    'исправление прикуса элайнерами Одинцово',
    'ортодонтия Одинцово',
    'записаться на элайнеры Одинцово',
    'Московская область элайнеры',
    'Одинцовский район ортодонтия'
  ],
  openGraph: {
    title: 'Съемные ортодонтические аппараты в Одинцово - Элайнеры, каппы | Альтамед-с',
    description: 'Съемные ортодонтические аппараты в Одинцово - элайнеры, каппы для исправления прикуса.',
    url: 'https://altamed-c.ru/services/dentistry/removable-appliances',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/removable-appliances',
  },
};

export default function RemovableAppliancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

