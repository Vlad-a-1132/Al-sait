import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { KDL_OFFERS, KDL_PROMOTION, kdlPoster } from '@/data/kdl-promotions';
import { APPOINTMENTS_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Акции на анализы KDL | Альтамед-С в Одинцово',
  description: KDL_PROMOTION.description,
  alternates: { canonical: 'https://altamed-c.ru/promo/kdl' },
  openGraph: {
    title: 'Акции на анализы KDL | Альтамед-С',
    description: KDL_PROMOTION.description,
    url: 'https://altamed-c.ru/promo/kdl',
    images: [{ url: KDL_PROMOTION.image, width: 1536, height: 1024, alt: KDL_PROMOTION.title }],
  },
};

const formatPrice = (price: number) => `${new Intl.NumberFormat('ru-RU').format(price)} ₽`;

export default function KdlPromoPage() {
  return (
    <div className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-2 py-5 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-700">Главная</Link>
          <span aria-hidden="true">/</span>
          <Link href="/promo" className="hover:text-emerald-700">Акции</Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-800">Исследования KDL</span>
        </nav>

        <header className="border-b border-gray-200 pb-7 pt-2 sm:pb-8 sm:pt-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase text-[#9e1558]">
            <span>Альтамед-С</span>
            <span className="h-1 w-1 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>KDL</span>
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">Акции на анализы KDL</h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
                Комплексные исследования по специальным ценам в «Альтамед-С».
              </p>
            </div>
            <a href="tel:+74952554450" className="inline-flex min-h-10 items-center gap-2 border-b-2 border-emerald-500 pb-1 text-sm font-semibold text-gray-900 hover:text-emerald-700">
              +7 (495) 255-44-50 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <section aria-labelledby="offers-heading" className="pt-8">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 sm:mb-6">
            <div className="flex items-baseline gap-3">
              <h2 id="offers-heading" className="text-xl font-bold text-gray-900 sm:text-2xl">Комплексные исследования</h2>
              <span className="text-sm font-semibold text-[#a81360]">{KDL_OFFERS.length}</span>
            </div>
            <p className="text-sm text-gray-500">Состав и условия уточняйте при записи</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KDL_OFFERS.map((offer) => (
              <article key={offer.id} data-kdl-offer={offer.id} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <a
                  href={kdlPoster(offer.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Открыть афишу акции: ${offer.title}`}
                  className="block aspect-[9/16] overflow-hidden bg-[#a20c5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
                >
                  <Image
                    src={kdlPoster(offer.id)}
                    alt=""
                    width={720}
                    height={1280}
                    unoptimized
                    className="h-full w-full object-contain"
                  />
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase text-[#a81360]">Выгода до {offer.discount}%</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">{offer.title}</h3>
                  <p className="mb-4 mt-2 text-sm leading-relaxed text-gray-600">{offer.description}</p>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-gray-100 pt-4">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-xl font-bold text-gray-900">{formatPrice(offer.price)}</span>
                      <span className="text-sm text-gray-400 line-through">{formatPrice(offer.originalPrice)}</span>
                    </div>
                    <a
                      href={APPOINTMENTS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Записаться: ${offer.title}`}
                      className="inline-flex min-h-10 items-center rounded-md bg-[#13a77a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                    >
                      Записаться
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 border-t border-gray-200 pt-6 text-sm leading-relaxed text-gray-600">
          <p>Состав исследований, сроки и условия акций уточняйте у администратора клиники.</p>
          <p className="mt-3 font-semibold text-gray-800">Имеются противопоказания. Требуется консультация специалиста.</p>
        </div>
      </div>
    </div>
  );
}
