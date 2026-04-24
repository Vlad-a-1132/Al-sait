'use client';

import { useState } from 'react';
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

type Props = {
  serviceRows: OtolaryngologyServiceRow[];
};

function normalizePriceForUi(s: OtolaryngologyServiceRow): string {
  if (s.priceIsZero) return 'Цена по запросу';
  const raw = String(s.priceLabel ?? '').trim();
  if (!raw || raw === '—') return 'Цена по запросу';
  if (/^0\s*руб\.?$/i.test(raw)) return 'Цена по запросу';
  return raw;
}

export default function OtolaryngologyPageClient({ serviceRows }: Props) {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
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
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">
                    Услуги
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Отоларингология</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
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

      {/* Почему Альтамед-С*/}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед-С»?</h2>
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Лечение в соответствии с мировыми клиническими рекомендациями</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Комплексная оценка заболевания и прогноза лечения</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Современное диагностическое оборудование и собственная диагностическая лаборатория</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Высокий уровень сервиса и взвешенная ценовая политика</p>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">Лечение в соответствии с мировыми клиническими рекомендациями</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">Комплексная оценка заболевания и прогноза лечения</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">Современное диагностическое оборудование и собственная диагностическая лаборатория</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">Высокий уровень сервиса и взвешенная ценовая политика</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Услуги отоларингологии</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр диагностических и лечебных процедур для заболеваний ЛОР-органов
            </p>
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

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Отоларинголог в Одинцово - услуги диагностики и лечения ЛОР-органов</h2>
              <p className="text-lg text-gray-600 mb-6">
                В клинике «Альтамед-с» ведут прием опытные отоларингологи, которые занимаются диагностикой и лечением заболеваний уха, горла и носа у
                взрослых и детей. Мы используем современное оборудование и передовые методики для обеспечения качественной медицинской помощи.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наши специалисты проводят комплексное обследование ЛОР-органов, включая эндоскопические исследования, аудиометрию, рентгенографию
                околоносовых пазух и другие диагностические процедуры. Лечение осуществляется как консервативными, так и хирургическими методами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#appointment"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 text-center"
                >
                  Записаться на прием
                </Link>
                <Link
                  href="tel:+74951234567"
                  className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-300 text-center"
                >
                  Позвонить
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="/images/images allergoly/otolaryngologia.webp" alt="Отоларингология" className="w-full h-auto rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-gray-600">Ответы на популярные вопросы об отоларингологии</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleExpanded('diagnosis')}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Диагностика ЛОР-заболеваний</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['diagnosis'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItems['diagnosis'] && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    В клинике «Альтамед-с» проводится комплексная диагностика заболеваний ЛОР-органов с использованием современного оборудования. Врачи-отоларингологи используют различные методы диагностики для точной постановки диагноза и назначения эффективного лечения.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Эндоскопические исследования полости носа, гортани и уха</li>
                    <li>• Аудиометрия и тимпанометрия для оценки слуха</li>
                    <li>• Рентгенография и КТ околоносовых пазух</li>
                    <li>• Лабораторные исследования мазков и биопсийного материала</li>
                    <li>• Функциональные пробы для оценки вестибулярного аппарата</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleExpanded('treatment')}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Лечение ЛОР-заболеваний</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['treatment'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItems['treatment'] && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    Лечение ЛОР-заболеваний в «Альтамед-с» проводится с использованием консервативных и хирургических методов. Наши врачи подбирают индивидуальную схему лечения для каждого пациента, учитывая особенности течения заболевания и общее состояние здоровья.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Медикаментозная терапия с применением современных препаратов</li>
                    <li>• Физиотерапевтические процедуры и массаж</li>
                    <li>• Малоинвазивные хирургические вмешательства</li>
                    <li>• Промывания и инстилляции лекарственных препаратов</li>
                    <li>• Реабилитационные программы после операций</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleExpanded('prevention')}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Профилактика ЛОР-заболеваний</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['prevention'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItems['prevention'] && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    Профилактика ЛОР-заболеваний включает комплекс мероприятий, направленных на укрепление иммунитета и предотвращение развития воспалительных процессов в органах дыхания и слуха.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Регулярное закаливание и укрепление иммунитета</li>
                    <li>• Соблюдение правил личной гигиены</li>
                    <li>• Избегание переохлаждения и сквозняков</li>
                    <li>• Своевременное лечение острых респираторных инфекций</li>
                    <li>• Профилактические осмотры у ЛОР-врача</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}

