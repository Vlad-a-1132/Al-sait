import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Акушер-гинеколог в Одинцово — планирование, беременность, наблюдение | Альтамед-С',
  description: 'Приём акушера-гинеколога в Одинцово в Альтамед-С. Планирование беременности, подготовка к зачатию, ведение беременности, УЗИ, анализы, наблюдение после родов и консультации по репродуктивному здоровью.',
  alternates: { canonical: 'https://altamed-c.ru/services/akusher-ginekolog-odintsovo' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
