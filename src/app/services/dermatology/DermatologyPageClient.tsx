'use client';

import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export type DermatologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

function normalizePriceForUi(s: DermatologyServiceRow): string {
  if (s.priceIsZero) return 'Цена по запросу';
  const raw = String(s.priceLabel ?? '').trim();
  if (!raw || raw === '—') return 'Цена по запросу';
  if (/^0\s*руб\.?$/i.test(raw)) return 'Цена по запросу';
  return raw;
}

export function DermatologyPricesSection({ serviceRows }: { serviceRows: DermatologyServiceRow[] }) {
  return (
    <section className="py-16" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Дерматолог в Одинцово — услуги диагностики и лечения кожных заболеваний
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Полный спектр услуг дерматологии</p>
          <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять
            актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
            <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">
              +7 (495) 255-44-50
            </a>
            . Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white">
            <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
              <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
            </div>
            <div className="overflow-y-auto max-h-[480px] sm:max-h-[480px]">
              <table className="w-full text-sm sm:text-base table-fixed">
                <thead className="sticky top-0 z-10 bg-gray-100">
                  <tr>
                    <th className="text-left py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">Услуга</th>
                    <th className="text-right py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceRows.map((s, i) => (
                    <tr key={s.key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}>
                      <td className="py-3.5 px-3 sm:px-4 text-gray-800 leading-snug break-words">{s.name}</td>
                      <td className="py-3.5 px-3 sm:px-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                        {normalizePriceForUi(s)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm order-1 lg:order-2">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 relative">
              <Image
                src="/images/promo/task_01kmc5pqv4egd8vgfksjjp1zzd_1774230180_img_1.webp"
                alt=""
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
            <p className="text-gray-700 text-sm mb-1">Заполните форму</p>
            <h3 className="font-bold text-lg text-gray-900 text-center mb-1">«Записаться в клинику»</h3>
            <p className="text-gray-600 text-sm text-center mb-4">чтобы выбрать время приема и уточнить стоимость услуги.</p>
            <p className="text-gray-700 text-sm mb-4">Администратор подберёт врача и удобное время</p>
            <Link
              href="https://online.altamed-c.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-medium text-sm mb-1 hover:underline"
            >
              Записаться онлайн
            </Link>
            <a href="tel:+74952554450" className="text-gray-700 text-sm mb-6 hover:underline">
              +7 (495) 255-44-50
            </a>
            <Link
              href="https://online.altamed-c.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700"
            >
              Записаться в клинику
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DermatologyPageClient() {
  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">
              Главная
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">
              Услуги
            </Link>
            <span>/</span>
            <span className="text-gray-900">Дерматология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Дерматология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение кожных заболеваний у взрослых и детей в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/images allergoly/Dermat1ology.webp"
                    alt="Лечение кожных заболеваний"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Лечение кожных заболеваний</div>
                <Link
                  href="https://online.altamed-c.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <Image
                  src="/images/images allergoly/Dermat1ology.webp"
                  alt="Лечение кожных заболеваний"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Лечение кожных заболеваний</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современные методы диагностики и лечения</p>
                <Link
                  href="https://online.altamed-c.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors"
                >
                  Консультация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Консультация дерматолога в Одинцово — профессиональная диагностика кожных заболеваний
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Дерматолог в Одинцово — это медицинский специалист, который занимается диагностикой, лечением и профилактикой заболеваний кожи, волос и
                ногтей. В клинике «Альтамед-с» в Одинцово консультируют высококвалифицированные дерматовенерологи с многолетним стажем работы и глубокими
                знаниями в области кожных заболеваний. Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук,
                активно участвующие в научно-исследовательской деятельности. Для получения качественной дерматологической помощи в Одинцово и Московской
                области рекомендуем обратиться именно в «Альтамед-с».
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Консультация дерматолога в Одинцово требуется при появлении высыпаний, изменений кожи, зуда, шелушения или других симптомов кожных
                заболеваний. Кожные заболевания требуют профессионального подхода, поэтому самостоятельная диагностика крайне нежелательна. Наиболее
                эффективным решением станет обращение к опытному дерматологу в «Альтамед-с» в Одинцово. Наши специалисты проведут комплексное
                обследование, включая дерматоскопию, лабораторные анализы, установят точный диагноз, разработают индивидуальную схему терапии и дадут
                рекомендации по уходу за кожей.
              </p>
            </div>
            <div className="relative">
              <img src="/images/images allergoly/Dermat1ology.webp" alt="Дерматология" className="w-full h-auto rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
