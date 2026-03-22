import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Стоматологические конструкции в Одинцово - Изготовление и ремонт протезов | Альтамед-с',
  description: 'Стоматологические конструкции в Одинцово. Изготовление съемных протезов, коронок, ремонт и коррекция протезов. Профессиональное изготовление ортопедических конструкций в клинике Альтамед-с.',
  keywords: [
    'стоматологические конструкции одинцово',
    'изготовление протезов одинцово',
    'ремонт протезов одинцово',
    'съемные протезы одинцово',
    'изготовление коронок одинцово'
  ],
  openGraph: {
    title: 'Стоматологические конструкции в Одинцово - Изготовление и ремонт протезов | Альтамед-с',
    description: 'Стоматологические конструкции в Одинцово. Изготовление съемных протезов, коронок, ремонт и коррекция протезов.',
    url: 'https://altamed-c.ru/services/dentistry/constructions',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/constructions',
  },
};

export default function ConstructionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

