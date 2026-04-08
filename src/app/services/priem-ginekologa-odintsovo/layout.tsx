import { Metadata } from 'next';
import { GYNEC_SEO_PAGES } from '@/data/gynec-seo-pages';

const c = GYNEC_SEO_PAGES['priem-ginekologa-odintsovo'];

export const metadata: Metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: c.canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: c.title,
    description: c.description,
    url: c.canonical,
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
