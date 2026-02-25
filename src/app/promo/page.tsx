"use client"

import Link from "next/link";

export default function PromoPage() {
  // Данные акций
  const promotions = [
    {
      id: 1,
      category: "diagnostics",
      image: "/images/slides/1-kt.webp",
      startDate: "01.10.2025",
      endDate: "31.12.2025",
      title: "Скидки на компьютерную томографию",
      description: "Понедельник, Среда, Пятница – 20%, Суббота – 25%"
    },
    {
      id: 2,
      category: "diagnostics",
      image: "/images/slides/yzi.webp",
      startDate: "01.10.2025",
      endDate: "31.12.2025",
      title: "Комплексное ультразвуковое исследование для женщин",
      description: "УЗИ органов малого таза + молочных желез + щитовидной железы. Цена: 5000 ₽ (было 6200 ₽)"
    },
    {
      id: 3,
      category: "consultations",
      image: "/images/slides/2-pensia.webp",
      startDate: "01.10.2025",
      endDate: "31.12.2025",
      title: "Скидки для пенсионеров и многодетных",
      description: "– 10% на все услуги, кроме стоматологии"
    },
    {
      id: 4,
      category: "diagnostics",
      image: "/images/slides/3-analizy.webp",
      startDate: "01.10.2025",
      endDate: "31.12.2025",
      title: "Скидки на анализы",
      description: "Понедельник, Среда, Пятница - 10%, Воскресенье - 15%. (скидки не суммируются)"
    },
    {
      id: 5,
      category: "consultations",
      image: "/images/slides/kolpos.webp",
      startDate: "01.01.2025",
      endDate: "31.12.2025",
      title: "При первичном приёме врача акушера-гинеколога - кольпоскопия в подарок!",
      description: "Акция до конца 2025 года"
    },
    {
      id: 6,
      category: "massage",
      image: "/images/promo/task_01kbdkwa0xftb9wh0jek05ksz3_1764615024_img_0.webp",
      startDate: "01.01.2025",
      endDate: "31.01.2026",
      title: "Скидка 30% на общий массаж медицинский",
      description: "А21.01.001 Общий массаж медицинский. Цена: 3430 ₽ (было 4200 ₽)"
    },
    {
      id: 7,
      category: "consultations",
      image: "/images/yslugi/task_01kcqt39h1evj89apdf39y58f8_1766030720_img_1.webp",
      startDate: "01.01.2025",
      endDate: "31.12.2025",
      title: "День пенсионера",
      description: "Понедельник и Пятница – специальные скидки до 25%"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">
              Медицинский центр
            </Link>
            <span className="mx-2">/</span>
            <span className="text-emerald-600 font-medium">Акции</span>
          </nav>
        </div>
      </section>

      {/* Page Title */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Акции
          </h1>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {promotions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {promotions.map((promo) => {
                // Генерируем slug на основе ID
                const slug = `promo-${promo.id}`;
                return (
                  <Link
                    key={promo.id}
                    href={`/promo/${slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          console.error('Failed to load promo image:', promo.image);
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {promo.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {promo.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                Акций в этой категории пока нет
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

