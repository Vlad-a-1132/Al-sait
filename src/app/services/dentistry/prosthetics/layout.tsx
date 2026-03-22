import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Протезирование зубов в Одинцово - Коронки на имплантатах, All-on-4 | Альтамед-с',
  description: 'Протезирование зубов в Одинцово. Протезирование на имплантатах, коронки из диоксида циркония, металлокерамика, протез All-on-4. Каппы при бруксизме в клинике Альтамед-с.',
  keywords: [
    'протезирование зубов одинцово',
    'коронки на имплантатах одинцово',
    'протез all-on-4 одинцово',
    'циркониевые коронки одинцово',
    'каппа при бруксизме одинцово'
  ],
  openGraph: {
    title: 'Протезирование зубов в Одинцово - Коронки на имплантатах, All-on-4 | Альтамед-с',
    description: 'Протезирование зубов в Одинцово. Протезирование на имплантатах, коронки из диоксида циркония, металлокерамика, протез All-on-4.',
    url: 'https://altamed-c.ru/services/dentistry/prosthetics',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/services/dentistry/prosthetics',
  },
};

export default function ProstheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

