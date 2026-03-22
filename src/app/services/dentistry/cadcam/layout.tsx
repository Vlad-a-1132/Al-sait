import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CAD/CAM-технологии в Одинцово - Керамические вкладки, виниры, коронки | Альтамед-с',
  description: 'CAD/CAM-технологии в Одинцово. Керамические вкладки, виниры e-max, коронки из диоксида циркония, прозрачный цирконий Prettau. Современное протезирование в клинике Альтамед-с.',
  keywords: [
    'cad cam технологии одинцово',
    'керамические вкладки одинцово',
    'виниры e-max одинцово',
    'циркониевые коронки одинцово',
    'prettau одинцово',
    'cad cam протезирование одинцово'
  ],
  openGraph: {
    title: 'CAD/CAM-технологии в Одинцово - Керамические вкладки, виниры, коронки | Альтамед-с',
    description: 'CAD/CAM-технологии в Одинцово. Керамические вкладки, виниры e-max, коронки из диоксида циркония, прозрачный цирконий Prettau.',
    url: 'https://altamed-c.ru/services/dentistry/cadcam',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/cadcam',
  },
};

export default function CADCAMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

