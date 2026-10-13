import type { Metadata } from 'next';
import LabPreview from './LabPreview';

export const metadata: Metadata = {
  title: 'Анализы — концепция нового каталога | Альтамед-С',
  description: 'Отдельный демонстрационный вариант раздела лабораторных исследований.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://altamed-c.ru/services/lab-tests' },
};

export default function LabTestsPreviewPage() {
  return <LabPreview />;
}
