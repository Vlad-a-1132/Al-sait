import { GYNEC_ARTICLES_LIST } from '@/data/gynec-articles-images';
import { ALLERGOLOGY_ARTICLES_LIST } from '@/data/allergology-articles';
import { GASTROENTEROLOGY_ARTICLES_LIST } from '@/data/gastroenterology-articles';
import BlogIndexClient, { type BlogPostCard } from './BlogIndexClient';
import { Suspense } from 'react';

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

export default function BlogPage() {
  const posts: BlogPostCard[] = [
    ...GASTROENTEROLOGY_ARTICLES_LIST.map((a) => ({ ...a, direction: 'gastroenterology' as const })),
    ...ALLERGOLOGY_ARTICLES_LIST.map((a) => ({ ...a, direction: 'allergology' as const })),
    ...GYNEC_ARTICLES_LIST.map((a) => ({ ...a, direction: 'gynecology' as const })),
  ];

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
      <Suspense fallback={<div className="py-16 bg-white" />}>
        <BlogIndexClient posts={posts} />
      </Suspense>
    </div>
  );
} 