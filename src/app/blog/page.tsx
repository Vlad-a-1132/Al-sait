import { GYNEC_ARTICLES_LIST } from '@/data/gynec-articles-images';
import { ALLERGOLOGY_ARTICLES_LIST } from '@/data/allergology-articles';
import { GASTROENTEROLOGY_ARTICLES_LIST } from '@/data/gastroenterology-articles';
import { DERMATOLOGY_SERVICE_ARTICLES } from '@/data/dermatology-service-articles';
import { CARDIOLOGY_SERVICE_ARTICLES } from '@/data/cardiology-service-articles';
import { MAMMOLOGY_SERVICE_ARTICLES } from '@/data/mammology-service-articles';
import { NEUROLOGY_SERVICE_ARTICLES } from '@/data/neurology-service-articles';
import { OTOLARYNGOLOGY_SERVICE_ARTICLES } from '@/data/otolaryngology-service-articles';
import { OPHTHALMOLOGY_SERVICE_ARTICLES } from '@/data/ophthalmology-service-articles';
import { PEDIATRICS_SERVICE_ARTICLES } from '@/data/pediatrics-service-articles';
import { PROCTOLOGY_SERVICE_ARTICLES } from '@/data/proctology-service-articles';
import { REHABILITATION_SERVICE_ARTICLES } from '@/data/rehabilitation-service-articles';
import { PRIORITY_SEO_ARTICLE_CARDS } from '@/data/priority-seo-articles';
import BlogIndexClient, { type BlogPostCard } from './BlogIndexClient';

export const metadata = {
  title: 'Блог - Медицинские статьи и новости | Медицинский центр Альтамед-С в Одинцово',
  description: 'Блог медицинского центра Альтамед-С в Одинцово - медицинские статьи, новости о здоровье, советы врачей, полезная информация о профилактике заболеваний и здоровом образе жизни.',
  keywords: [
    'медицинские статьи Одинцово',
    'новости о здоровье Одинцово',
    'советы врачей Одинцово',
    'медицинский блог Одинцово',
    'статьи о здоровье Одинцово',
    'профилактика заболеваний Одинцово',
    'здоровый образ жизни Одинцово',
    'блог Альтамед-с',
    'Московская область медицинские статьи',
    'Одинцовский район новости о здоровье'
  ],
  openGraph: {
    title: 'Блог - Медицинские статьи и новости | Медицинский центр Альтамед-с',
    description: 'Блог медицинского центра Альтамед-С в Одинцово - медицинские статьи, новости о здоровье, советы врачей, полезная информация.',
    url: 'https://altamed-c.ru/blog',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/blog',
  },
};

type BlogPageProps = {
  searchParams?: {
    dir?: string | string[];
    sort?: string | string[];
    limit?: string | string[];
  };
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const rawPosts: BlogPostCard[] = [
    ...PRIORITY_SEO_ARTICLE_CARDS,
    ...GASTROENTEROLOGY_ARTICLES_LIST.map((a) => ({ ...a, direction: 'gastroenterology' as const })),
    ...ALLERGOLOGY_ARTICLES_LIST.map((a) => ({ ...a, direction: 'allergology' as const })),
    ...GYNEC_ARTICLES_LIST.map((a) => ({ ...a, direction: 'gynecology' as const })),
    ...DERMATOLOGY_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'dermatology' as const })),
    ...CARDIOLOGY_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'cardiology' as const })),
    ...MAMMOLOGY_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'mammology' as const })),
    ...NEUROLOGY_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'neurology' as const })),
    ...OTOLARYNGOLOGY_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'otolaryngology' as const })),
    ...OPHTHALMOLOGY_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'ophthalmology' as const })),
    ...PEDIATRICS_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'pediatrics' as const })),
    ...PROCTOLOGY_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'proctology' as const })),
    ...REHABILITATION_SERVICE_ARTICLES.map((a) => ({ ...a, direction: 'rehabilitation' as const })),
  ];

  // Часть SEO-материалов одновременно входит в приоритетный список и список
  // направления. Оставляем одну карточку на URL, чтобы не раздувать DOM.
  const posts = Array.from(
    new Map(rawPosts.map((post) => [post.url, post])).values(),
  );

  const initialDir = Array.isArray(searchParams?.dir)
    ? searchParams?.dir[0]
    : searchParams?.dir;
  const initialSort = Array.isArray(searchParams?.sort)
    ? searchParams?.sort[0]
    : searchParams?.sort;
  const initialLimit = Array.isArray(searchParams?.limit)
    ? searchParams?.limit[0]
    : searchParams?.limit;

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Медицинский блог</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полезные статьи, советы и рекомендации от наших врачей для поддержания вашего здоровья
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <BlogIndexClient
        posts={posts}
        initialDir={initialDir}
        initialSort={initialSort}
        initialLimit={initialLimit}
      />
    </div>
  );
}
