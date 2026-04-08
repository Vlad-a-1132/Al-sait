import { Metadata } from 'next';

const canonical = 'https://altamed-c.ru/ginekolog-v-odintsovo';
const title = 'Гинеколог в Одинцово — врачи, филиалы, цены, запись | Альтамед-С';
const description =
  'Гинекология в Одинцово в клинике Альтамед-С: врачи-гинекологи, два филиала, цены, отзывы. Онлайн-запись и телефон. Отдельные страницы услуг — приём по жалобам, акушер-гинеколог, программа ведения беременности, профилактический осмотр.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function TestGinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
