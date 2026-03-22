import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обслуживание ортодонтических аппаратов в Одинцово - Ремонт брекетов | Стоматология Альтамед-с',
  description: 'Обслуживание ортодонтических аппаратов в Одинцово - ремонт брекетов, замена дуг, лигатур, активация аппаратов. Полный спектр услуг по обслуживанию брекет-систем. Запись на прием.',
  keywords: [
    'обслуживание брекетов Одинцово',
    'ремонт брекетов Одинцово',
    'замена дуги брекетов Одинцово',
    'активация брекетов Одинцово',
    'ортодонтия Одинцово',
    'записаться к ортодонту Одинцово',
    'Московская область ортодонтия',
    'Одинцовский район брекеты'
  ],
  openGraph: {
    title: 'Обслуживание ортодонтических аппаратов в Одинцово - Ремонт брекетов | Альтамед-с',
    description: 'Обслуживание ортодонтических аппаратов в Одинцово - ремонт брекетов, замена дуг, лигатур.',
    url: 'https://altamed-c.ru/services/dentistry/orthodontic-maintenance',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/orthodontic-maintenance',
  },
};

export default function OrthodonticMaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

