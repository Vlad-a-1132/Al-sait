'use client';

import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export type OtolaryngologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

function normalizePriceForUi(s: OtolaryngologyServiceRow): string {
  if (s.priceIsZero) return 'Цена по запросу';
  const raw = String(s.priceLabel ?? '').trim();
  if (!raw || raw === '—') return 'Цена по запросу';
  if (/^0\s*руб\.?$/i.test(raw)) return 'Цена по запросу';
  return raw;
}

export function OtolaryngologyPricesSection({ serviceRows }: { serviceRows: OtolaryngologyServiceRow[] }) {
  return (
    <section id="services" className="py-16 bg-gray-50" aria-labelledby="lor-services-heading">
      <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
        <div className="text-center mb-12">
          <h2 id="lor-services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Услуги отоларингологии
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Полный спектр диагностических и лечебных процедур для заболеваний ЛОР-органов</p>
          <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную
            стоимость в регистратуре или по телефону контакт-центра{' '}
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

export default function OtolaryngologyPageClient() {
  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      <section className="py-4" data-lor-legacy="hide">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">
                    Услуги
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Отоларингология</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white" data-lor-legacy="hide">
        <div className="absolute inset-0 bg-black opacity-20" aria-hidden />
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Отоларингология в клинике «Альтамед-с»</h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Диагностика и лечение заболеваний уха, горла и носа у взрослых и детей в Одинцово
              </p>
            </div>
            <div className="relative">
              <img src="/images/images allergoly/otolaryngologia.webp" alt="Отоларингология" className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Отоларинголог в Одинцово — услуги диагностики и лечения ЛОР-органов</h2>
              <p className="text-lg text-gray-600 mb-6">
                В клинике «Альтамед-с» ведут приём опытные отоларингологи, которые занимаются диагностикой и лечением заболеваний уха, горла и носа у
                взрослых и детей. Мы используем современное оборудование и передовые методики для обеспечения качественной медицинской помощи.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наши специалисты проводят комплексное обследование ЛОР-органов, включая эндоскопические исследования, аудиометрию, обследование
                околоносовых пазух и другие диагностические процедуры. Лечение осуществляется как консервативными, так и малоинвазивными методами по
                показаниям.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://online.altamed-c.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 text-center"
                >
                  Записаться на приём
                </Link>
                <a
                  href="tel:+74952554450"
                  className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-300 text-center"
                >
                  Позвонить
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/images allergoly/otolaryngologia.webp" alt="Отоларингология" className="w-full h-auto rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
