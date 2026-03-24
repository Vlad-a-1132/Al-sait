import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Гинеколог в Одинцово — приём врача, цены, запись | Альтамед-С',
  description: 'Приём гинеколога в Одинцово в клинике Альтамед-С. Опытные врачи, диагностика и лечение, акушер-гинеколог, гинеколог-эндокринолог, цены на услуги, удобная запись на приём.',
  robots: { index: false, follow: false },
};

export default function TestGinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
