import type { Metadata } from 'next';
import AnalyticsDashboard from './AnalyticsDashboard';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Статистика сайта | Альтамед-С',
  description: 'Закрытая статистика посещений и обращений на сайте Альтамед-С',
  robots: { index: false, follow: false, nocache: true },
};

export default function AnalyticsPage() {
  return <AnalyticsDashboard />;
}
