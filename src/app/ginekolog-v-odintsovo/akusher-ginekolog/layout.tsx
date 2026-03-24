import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Акушер-гинеколог в Одинцово — приём, запись | Альтамед-С',
  description: 'Акушер-гинеколог в Одинцово. Наблюдение при беременности, подготовка к зачатию, репродуктивное здоровье.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
