import Image from 'next/image';
import Link from 'next/link';
import { GYNEC_ARTICLES_LIST } from '@/data/gynec-articles-images';

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
  const posts = GYNEC_ARTICLES_LIST;

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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="statyi" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scroll-mt-24">
            {posts.map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-teal-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h2 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide leading-snug line-clamp-2">
                    {a.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                    {a.desc}
                  </p>
                  <span className="w-full py-2.5 px-4 text-center border-2 border-teal-700 text-teal-700 font-medium text-sm rounded-lg hover:bg-teal-50 transition">
                    Читать подробнее
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 