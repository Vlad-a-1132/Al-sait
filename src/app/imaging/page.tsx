import type { Metadata } from 'next';
import ImagingApp from './ImagingApp';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Архив исследований — Альтамед-С',
  description: 'Закрытый архив файлов исследований для сотрудников.',
  robots: { index: false, follow: false, noarchive: true },
  referrer: 'no-referrer',
  alternates: { canonical: '/imaging' },
};

export default function ImagingPage() {
  const testMode = process.env.IMAGING_TEST_MODE === '1' || (process.env.IMAGING_TEST_MODE !== '0' && process.env.NODE_ENV !== 'production');
  return <ImagingApp testMode={testMode} />;
}
