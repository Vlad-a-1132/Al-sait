"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type DentistryProsthodonticsServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

export type DentistryProsthodonticsPriceSectionUi = {
  sectionKey: string;
  title: string;
  rows: DentistryProsthodonticsServiceRow[];
};

type Props = {
  priceSections: DentistryProsthodonticsPriceSectionUi[];
};

function normalizePriceForUi(s: DentistryProsthodonticsServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function ProsthodonticsPageClient({ priceSections }: Props) {
  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-600">Стоматология</Link>
            <span>/</span>
            <span className="text-gray-900">Ортопедическая стоматология</span>
          </nav>
        </div>
      </section>

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ортопедическая стоматология в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Протезирование зубов коронками, винирами и мостами в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb59j9wbe6ma7c4wg6n4yecp_1764335787_img_0.webp" 
                alt="Ортопедическая стоматология" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое ортопедическая стоматология в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Виды протезирования</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Несъемное протезирование (коронки, виниры, мосты)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Съемное протезирование (бюгельные, акриловые протезы)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Протезирование на имплантах
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Микропротезирование (вкладки, виниры)
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Преимущества в «Альтамед-с»</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Современные материалы и технологии CAD/CAM
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Опытные ортопеды с многолетним стажем
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Высокая эстетика и функциональность
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Гарантия на все виды протезов
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" aria-labelledby="dentistry-prosthodontics-prices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-6 md:p-10">
            <h2 id="dentistry-prosthodontics-prices-heading" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Услуги ортопедической стоматологии в Одинцово
            </h2>
            <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Полный прайс по разделам ниже. Указанные цены не являются офертой; актуальную стоимость уточняйте по телефону{" "}
              <a href="tel:+74952554450" className="text-emerald-700 font-medium hover:underline">
                +7 (495) 255-44-50
              </a>
              .
            </p>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-lg">
                <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
                  <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
                </div>
                <div className="overflow-y-auto max-h-[min(70vh,720px)]">
                  <table className="w-full text-sm sm:text-base table-fixed">
                    <thead className="sticky top-0 z-10 bg-gray-100">
                      <tr>
                        <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">Услуга</th>
                        <th className="text-right py-3 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceSections.map((sec) => (
                        <Fragment key={sec.sectionKey}>
                          <tr className="bg-emerald-50/90">
                            <td colSpan={2} className="py-3 px-3 sm:px-4 font-semibold text-gray-900 border-t border-emerald-100">
                              {sec.title}
                            </td>
                          </tr>
                          {sec.rows.map((s, i) => (
                            <tr key={s.key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}>
                              <td className="py-3 px-3 sm:px-4 text-gray-800 leading-snug break-words">{s.name}</td>
                              <td className="py-3 px-3 sm:px-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                                {normalizePriceForUi(s)}
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col items-center rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm order-1 lg:order-2 h-fit">
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
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Современные технологии протезирования в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "CAD/CAM технологии",
                  text: "В клинике «Альтамед-с» Одинцово используются современные CAD/CAM системы для точного изготовления коронок, виниров и вкладок. Это обеспечивает идеальную посадку и высокую эстетику протезов.",
                  icon: "💻"
                },
                {
                  title: "Диоксид циркония",
                  text: "Протезы из диоксида циркония обладают высокой прочностью, биосовместимостью и естественной эстетикой. В стоматологии Одинцово мы используем только проверенные материалы.",
                  icon: "💎"
                },
                {
                  title: "Керамика E-max",
                  text: "Керамика E-max идеально подходит для виниров и коронок на передние зубы. Высокая эстетика и долговечность делают эти протезы популярными в Одинцово.",
                  icon: "✨"
                },
                {
                  title: "Бюгельное протезирование",
                  text: "Современные бюгельные протезы в «Альтамед-с» Одинцово изготавливаются с использованием микрозамков и кламмеров, обеспечивая комфорт и надежную фиксацию.",
                  icon: "🔧"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Этапы протезирования в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Консультация", desc: "Осмотр, планирование, выбор метода протезирования" },
                { step: "2", title: "Подготовка", desc: "Подготовка зубов, снятие слепков" },
                { step: "3", title: "Изготовление", desc: "Изготовление протеза в лаборатории" },
                { step: "4", title: "Установка", desc: "Примерка и фиксация готового протеза" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость протезирования */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость протезирования зубов в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на протезирование в клинике «Альтамед-с» Одинцово зависят от типа протеза, используемых материалов и объема работы. Мы предлагаем различные варианты протезирования: от доступных металлокерамических коронок до премиальных протезов из диоксида циркония.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Несъемное протезирование в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Коронки и мосты в стоматологии Одинцово — это надежный способ восстановления зубов. Цены зависят от материала: металлокерамика — доступный вариант, диоксид циркония — премиум-решение с максимальной эстетикой.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Металлокерамическая коронка от 9420₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Коронка из диоксида циркония от 28500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Виниры e-max от 25000₽
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Съемное протезирование в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Съемные протезы в клинике «Альтамед-с» Одинцово используются при отсутствии большого количества зубов. Бюгельные протезы с микрозамками обеспечивают комфорт и надежную фиксацию.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Бюгельный протез от 53010₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Полный съемный протез от 31280₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Частичный съемный протез от 21000₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость протезирования в стоматологии Одинцово можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и комплексные программы протезирования. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Виды протезов подробно */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Виды протезов в ортопедической стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Коронки в стоматологии Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Коронки в клинике «Альтамед-с» Одинцово используются для восстановления сильно разрушенных зубов. Металлокерамические коронки сочетают прочность и доступную цену. Коронки из диоксида циркония в стоматологии Одинцово обеспечивают максимальную эстетику и долговечность, идеально подходят для передних зубов.
                </p>
                <p className="text-gray-700">
                  В клинике Одинцово мы используем CAD/CAM технологии для изготовления коронок, что обеспечивает идеальную посадку и высокое качество. Все коронки в стоматологии Одинцово изготавливаются индивидуально с учетом особенностей прикуса пациента.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Виниры в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Виниры в стоматологии Одинцово — это тонкие керамические пластинки, которые устанавливаются на переднюю поверхность зубов для улучшения их внешнего вида. В клинике «Альтамед-с» Одинцово мы используем виниры e-max, которые имеют высокую прочность и естественную прозрачность.
                </p>
                <p className="text-gray-700">
                  Виниры в Одинцово идеально подходят для исправления цвета, формы зубов, закрытия промежутков между зубами. Процедура установки виниров в стоматологии Одинцово требует минимального препарирования зубов и обеспечивает долгосрочный результат.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Мостовидные протезы в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Мостовидные протезы в стоматологии Одинцово используются для восстановления одного или нескольких отсутствующих зубов. Мост крепится на соседние зубы или импланты. В клинике «Альтамед-с» Одинцово мы изготавливаем мосты из различных материалов.
                </p>
                <p className="text-gray-700">
                  Современные мостовидные протезы в Одинцово неотличимы от естественных зубов и обеспечивают полноценную жевательную функцию. Протезирование мостами в стоматологии Одинцово — это надежный способ восстановления утраченных зубов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Съемные протезы в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Съемные протезы в клинике «Альтамед-с» Одинцово применяются при отсутствии большого количества зубов или полной адентии. Бюгельные протезы с кламмерами или микрозамками обеспечивают надежную фиксацию и комфорт при ношении.
                </p>
                <p className="text-gray-700">
                  Современные съемные протезы в стоматологии Одинцово изготавливаются из гипоаллергенных материалов и не вызывают дискомфорта. Протезирование в клинике Одинцово включает подгонку протеза и обучение пациента правильному уходу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Уход за протезами */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Уход за протезами в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Уход за несъемными протезами</h3>
                <p className="text-gray-700 mb-4">
                  Несъемные протезы (коронки, виниры, мосты) в стоматологии Одинцово требуют такого же ухода, как и естественные зубы. Регулярная чистка дважды в день, использование зубной нити и ирригатора помогут сохранить протезы в идеальном состоянии.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярная чистка мягкой щеткой и пастой
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование зубной нити для очистки межзубных промежутков
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная чистка в клинике Одинцово раз в полгода
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Уход за съемными протезами</h3>
                <p className="text-gray-700 mb-4">
                  Съемные протезы в стоматологии Одинцово требуют особого ухода: ежедневная чистка специальными средствами, хранение в чистом состоянии. Врачи клиники «Альтамед-с» Одинцово дают подробные инструкции по уходу.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Чистка после каждого приема пищи
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование специальных таблеток для очистки
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярная перебазировка в клинике Одинцово
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-amber-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Правильный уход за протезами в клинике «Альтамед-с» Одинцово обеспечивает их долговечность и комфорт при использовании. Специалисты стоматологии Одинцово обучают пациентов правильным техникам ухода и проводят регулярные контрольные осмотры для своевременной коррекции протезов. При правильном уходе протезы в стоматологии Одинцово прослужат многие годы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Стоматолог-ортопед в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает услуги ортопедической стоматологии в Одинцово — протезирование зубов
                коронками, винирами, мостами, съемными протезами. Мы применяем современные технологии, качественные
                материалы и обеспечиваем долговечность протезов.
              </p>
              <p>
                Врач-стоматолог-ортопед проводит консультации, планирование протезирования, установку коронок,
                виниров и других протезов. У нас можно пройти протезирование на имплантах, восстановление зубов
                коронками и другие процедуры ортопедической стоматологии.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость ортопедической стоматологии в Одинцово
                фиксируется заранее, а пациенты получают подробную информацию о процедурах.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Протезирование с использованием современных материалов и технологий.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Восстановление зубов коронками, винирами, мостами и съемными протезами.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных ортопедов, специализирующихся на протезировании зубов.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Протезирование на имплантах для надежной фиксации протезов.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о стоматологе-ортопеде в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают качество протезов, эстетику и долговечность
                коронок и виниров, установленных ортопедами.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эффективное протезирование</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После протезирования пациенты чувствуют себя комфортно, что соответствует
                ожиданиям и обеспечивает функциональность и эстетику зубов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Долговечный результат</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После протезирования в Одинцове пациенты отмечают долговечность протезов; ортопеды дают
                подробные рекомендации по уходу за протезами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о стоматологе-ортопеде в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Какие виды протезирования доступны?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Доступны различные виды протезирования: коронки, виниры, мостовидные протезы, съемные протезы,
                протезирование на имплантах. Врач-ортопед подберет оптимальный вариант в зависимости от клинической ситуации.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько служат коронки и виниры?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Срок службы коронок и виниров зависит от материала и ухода. Металлокерамические коронки служат
                10-15 лет, керамические виниры — 10-20 лет. Правильный уход и регулярные осмотры продлевают срок службы.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Стоматолог-ортопед в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость протезирования,
                подобрать подходящие протезы и получить индивидуальный план лечения.
              </p>
            </div>
            <Link
              href="https://online.altamed-c.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#4A5568] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Записаться на приём
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Клиника «Альтамед-С» — ортопедическая стоматология в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/prosthodontics",
                image: "https://altamed-c.ru/images/dentisrty/task_01kb59j9wbe6ma7c4wg6n4yecp_1764335787_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "280"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Ортопедическая стоматология",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Ортопедическая стоматология в Одинцово: протезирование зубов коронками, винирами, мостами, съемными протезами. Опытные ортопеды в клинике «Альтамед-С».",
                sameAs: [
                  "https://altamed-c.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

