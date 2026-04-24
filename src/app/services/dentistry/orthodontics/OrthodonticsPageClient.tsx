"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type DentistryOrthodonticsServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

export type DentistryOrthodonticsPriceSectionUi = {
  sectionKey: string;
  title: string;
  rows: DentistryOrthodonticsServiceRow[];
};

type Props = {
  priceSections: DentistryOrthodonticsPriceSectionUi[];
};

function normalizePriceForUi(s: DentistryOrthodonticsServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function OrthodonticsPageClient({ priceSections }: Props) {
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
            <span className="text-gray-900">Ортодонтия</span>
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
                Ортодонтия в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Исправление прикуса брекетами, элайнерами и ретейнерами в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp" 
                alt="Ортодонтия" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Методы исправления прикуса в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Брекет-системы</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Вестибулярные брекеты (металлические, керамические, сапфировые)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Лингвальные брекеты (невидимые)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Самолигирующие брекет-системы
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Элайнеры (каппы)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Прозрачные каппы для выравнивания зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Незаметны при ношении
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Съемные для удобства гигиены
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" aria-labelledby="dentistry-orthodontics-prices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-6 md:p-10">
            <h2 id="dentistry-orthodontics-prices-heading" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Услуги ортодонтии в Одинцово
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
              Когда нужна ортодонтическая помощь в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "😬", title: "Неровные зубы", desc: "Скученность или промежутки между зубами" },
                { icon: "🦷", title: "Неправильный прикус", desc: "Глубокий, открытый, перекрестный прикус" },
                { icon: "😣", title: "Выступающие зубы", desc: "Верхние зубы сильно выступают вперед" },
                { icon: "🦷", title: "Проблемы с жеванием", desc: "Трудности при откусывании и пережевывании" },
                { icon: "😰", title: "Щелчки в суставе", desc: "Проблемы с височно-нижнечелюстным суставом" },
                { icon: "💔", title: "Нарушение речи", desc: "Проблемы с произношением из-за прикуса" },
                { icon: "🦷", title: "Стираемость зубов", desc: "Преждевременное стирание эмали" },
                { icon: "😬", title: "Асимметрия лица", desc: "Неравномерное развитие челюстей" },
                { icon: "📅", title: "Профилактика", desc: "Предотвращение проблем в будущем" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Преимущества ортодонтического лечения в «Альтамед-с» Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎯", title: "Индивидуальный план", desc: "Персональный подход для каждого пациента" },
                { icon: "🔬", title: "Современные технологии", desc: "Использование новейших методов лечения" },
                { icon: "💎", title: "Качественные материалы", desc: "Только проверенные брекет-системы" },
                { icon: "✅", title: "Гарантия результата", desc: "Контроль на всех этапах лечения" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-white rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость ортодонтического лечения */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость ортодонтического лечения в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на ортодонтическое лечение в клинике «Альтамед-с» Одинцово зависят от выбранной системы (брекеты или элайнеры), сложности случая и длительности лечения. Ортодонтия в Одинцово позволяет исправить прикус в любом возрасте.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Брекет-системы в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Брекеты в стоматологии Одинцово — это классический метод исправления прикуса. Цены зависят от материала: металлические — наиболее доступные, сапфировые — максимально эстетичные, лингвальные — полностью скрытые.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Металлические брекеты от 40000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Керамические брекеты от 60000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Лингвальные брекеты от 150000₽
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Элайнеры в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Элайнеры в клинике «Альтамед-с» Одинцово — это современная альтернатива брекетам. Прозрачные каппы практически незаметны и обеспечивают комфортное ношение. Цена зависит от сложности случая.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Элайнеры простой случай от 276030₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Элайнеры сложный случай от 352590₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Консультация ортодонта от 1000₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость ортодонтического лечения в стоматологии Одинцово можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и комплексные программы лечения. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Виды ортодонтического лечения */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Виды ортодонтического лечения в стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Брекет-системы в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Брекет-системы в клинике «Альтамед-с» Одинцово — это наиболее эффективный метод исправления прикуса. Металлические брекеты — классический вариант с высокой надежностью. Керамические и сапфировые брекеты в стоматологии Одинцово обеспечивают эстетику, сливаясь с цветом зубов. Лингвальные брекеты устанавливаются с внутренней стороны зубов и полностью незаметны.
                </p>
                <p className="text-gray-700">
                  Лечение на брекетах в стоматологии Одинцово занимает от 1 до 2 лет в зависимости от сложности случая. Регулярные визиты к ортодонту в клинике Одинцово необходимы для активации аппарата и контроля процесса лечения.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Элайнеры в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Элайнеры в стоматологии Одинцово — это прозрачные каппы, которые изготавливаются индивидуально для каждого пациента. В клинике «Альтамед-с» Одинцово мы используем элайнеры для исправления легких и средних нарушений прикуса. Каппы сменяются каждые 1-2 недели, постепенно перемещая зубы в правильное положение.
                </p>
                <p className="text-gray-700">
                  Преимущества элайнеров в Одинцово: полная незаметность, удобство ношения, возможность снятия для гигиены и приема пищи. Лечение элайнерами в стоматологии Одинцово особенно популярно среди взрослых пациентов, ценящих эстетику.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ретейнеры в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  После завершения ортодонтического лечения в стоматологии Одинцово необходимо закрепить результат с помощью ретейнеров. В клинике «Альтамед-с» Одинцово мы устанавливаем как несъемные лингвальные ретейнеры, так и съемные каппы для ночного ношения.
                </p>
                <p className="text-gray-700">
                  Ретенционный период в стоматологии Одинцово может длиться столько же, сколько и само лечение. Ношение ретейнеров в клинике Одинцово предотвращает возврат зубов в исходное положение и закрепляет достигнутый результат.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* В каком возрасте начинать лечение */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              В каком возрасте лучше начинать ортодонтическое лечение в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Детская ортодонтия в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Первая консультация ортодонта в клинике «Альтамед-с» Одинцово рекомендуется в возрасте 6-7 лет, когда начинается смена молочных зубов на постоянные. Раннее ортодонтическое лечение в стоматологии Одинцово может предотвратить развитие серьезных нарушений прикуса и сократить длительность лечения в будущем.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Исправление вредных привычек (сосание пальца, ротовое дыхание)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Коррекция уздечек языка и губ
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование съемных аппаратов для коррекции прикуса
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ортодонтия для взрослых в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Ортодонтическое лечение в стоматологии Одинцово возможно в любом возрасте. Взрослые пациенты в клинике «Альтамед-с» Одинцово часто выбирают элайнеры или лингвальные брекеты из-за эстетических соображений. Лечение во взрослом возрасте может занять больше времени, но результаты не менее эффективны.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Исправление прикуса перед протезированием
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Подготовка к имплантации
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Улучшение эстетики улыбки в любом возрасте
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-pink-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Ортодонтическое лечение в клинике «Альтамед-с» Одинцово эффективно в любом возрасте. Специалисты стоматологии Одинцово подбирают оптимальный метод лечения с учетом индивидуальных особенностей пациента и его пожеланий. Раннее начало лечения позволяет сократить его длительность и избежать осложнений. Однако никогда не поздно начать исправление прикуса в стоматологии Одинцово для улучшения здоровья и эстетики улыбки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Стоматолог-ортодонт в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает услуги ортодонтии в Одинцово — исправление прикуса брекетами,
                элайнерами, ретейнерами. Мы применяем современные технологии, качественные аппараты и обеспечиваем
                эффективное исправление прикуса.
              </p>
              <p>
                Врач-стоматолог-ортодонт проводит диагностику, планирование лечения, установку брекет-систем,
                элайнеров и других ортодонтических аппаратов. У нас можно пройти исправление прикуса брекетами,
                элайнерами и другими методами ортодонтии.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость ортодонтии в Одинцово
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
                  Исправление прикуса с использованием современных брекет-систем и элайнеров.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Диагностику и планирование лечения с использованием КТ и моделей.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных ортодонтов, специализирующихся на исправлении прикуса.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Регулярное обслуживание ортодонтических аппаратов для эффективности лечения.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о стоматологе-ортодонте в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают эффективность исправления прикуса, качество брекет-систем
                и внимательное отношение ортодонтов к процессу лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После исправления прикуса пациенты получают красивую улыбку, что соответствует
                ожиданиям и обеспечивает здоровье зубов и десен.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После установки брекетов в Одинцове пациенты отмечают комфорт; ортодонты дают
                подробные инструкции по уходу за аппаратами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о стоматологе-ортодонте в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  В каком возрасте лучше начинать ортодонтическое лечение?
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
                Первая консультация ортодонта рекомендуется в возрасте 6-7 лет. Раннее лечение может предотвратить
                развитие серьезных нарушений прикуса. Однако ортодонтическое лечение эффективно в любом возрасте.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Что лучше: брекеты или элайнеры?
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
                Выбор между брекетами и элайнерами зависит от сложности случая и пожеланий пациента. Брекеты
                эффективны для сложных случаев, элайнеры — для легких и средних нарушений прикуса. Врач-ортодонт
                подберет оптимальный вариант.
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
                Стоматолог-ортодонт в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость исправления прикуса,
                подобрать подходящие аппараты и получить индивидуальный план лечения.
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
                name: "Клиника «Альтамед-С» — ортодонтия в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/orthodontics",
                image: "https://altamed-c.ru/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "300"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Ортодонтия",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Ортодонтия в Одинцово: исправление прикуса брекетами, элайнерами, ретейнерами. Опытные ортодонты, современные методы. Запишитесь на консультацию в клинику «Альтамед-С».",
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

