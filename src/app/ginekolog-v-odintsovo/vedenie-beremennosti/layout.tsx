import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ведение беременности в Одинцово — клиника Альтамед-С',
  description: 'Ведение беременности в Одинцово. Наблюдение, УЗИ, анализы. Комплексный подход в клинике Альтамед-С.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
