"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type DentistryCtServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

export type DentistryCtPriceSectionUi = {
  sectionKey: string;
  title: string;
  rows: DentistryCtServiceRow[];
};

type Props = {
  priceSections: DentistryCtPriceSectionUi[];
};

function normalizePriceForUi(s: DentistryCtServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function CtPageClient({ priceSections }: Props) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

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
            <span className="text-gray-900">Компьютерная томография</span>
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
                Компьютерная томография в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Трехмерная диагностика для точного планирования имплантации и лечения в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/kt stomatologu.webp" 
                alt="Компьютерная томография" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое компьютерная томография в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Трехмерная визуализация</h3>
                <p className="text-gray-600 mb-4">
                  Компьютерная томография (КТ) — это современный метод диагностики, который позволяет получить трехмерное изображение зубов и челюстей. В отличие от обычного рентгена, КТ дает возможность увидеть структуры в трех измерениях, что крайне важно для точного планирования лечения.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Трехмерное изображение челюстей
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Оценка плотности костной ткани
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Определение точного положения структур
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Когда необходима КТ</h3>
                <p className="text-gray-600 mb-4">
                  КТ-диагностика незаменима при планировании имплантации, ортодонтического лечения, хирургических операций. В клинике «Альтамед-с» Одинцово мы используем КТ для максимально точного планирования лечения.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Планирование имплантации
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ортодонтическое лечение
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Хирургические операции
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" aria-labelledby="dentistry-ct-prices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-6 md:p-10">
            <h2 id="dentistry-ct-prices-heading" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Прайс-лист КТ-диагностики в Одинцово
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
                              <td className="py-3 px-3 sm:px-4 text-gray-800 leading-snug break-words">
                                <span className="block">{s.name}</span>
                                {s.code ? <span className="block text-xs text-gray-500 mt-1">{s.code}</span> : null}
                              </td>
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
              Преимущества КТ в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Точное планирование имплантации",
                  text: "КТ позволяет точно определить место установки импланта, оценить качество и объем костной ткани, спланировать костную пластику при необходимости. В клинике «Альтамед-с» Одинцово мы используем КТ для 100% успешной имплантации.",
                  icon: "💎"
                },
                {
                  title: "Планирование ортодонтического лечения",
                  text: "Трехмерное изображение помогает ортодонту точно определить положение зубов, планировать их перемещение, предвидеть результаты лечения. В стоматологии Одинцово КТ незаменима для сложных случаев.",
                  icon: "😬"
                },
                {
                  title: "Диагностика сложных случаев",
                  text: "КТ выявляет ретинированные зубы, кисты, новообразования, патологии ВНЧС, которые невозможно диагностировать с помощью обычного рентгена. В «Альтамед-с» Одинцово мы используем КТ для диагностики сложных патологий.",
                  icon: "🔍"
                },
                {
                  title: "Виртуальное планирование",
                  text: "На основе КТ-данных можно создать виртуальную 3D-модель и спланировать лечение виртуально, без необходимости снятия слепков. Это особенно удобно для протезирования и имплантации в Одинцово.",
                  icon: "💻"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
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
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Как проводится КТ в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Подготовка", desc: "Снимаются металлические предметы" },
                { step: "2", title: "Сканирование", desc: "Быстрое и безболезненное сканирование" },
                { step: "3", title: "Обработка", desc: "Создание 3D-модели" },
                { step: "4", title: "Результат", desc: "Анализ врачом и планирование" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-white rounded-lg p-6">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Стоимость КТ-диагностики */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость компьютерной томографии в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на КТ-диагностику в клинике «Альтамед-с» Одинцово зависят от объема исследования: одна или две челюсти, необходимость изучения ВНЧС. Мы используем современное оборудование с низкой лучевой нагрузкой.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">КТ одной челюсти в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Компьютерная томография одной челюсти в стоматологии Одинцово позволяет получить детальное трехмерное изображение верхней или нижней челюсти. Необходима для планирования лечения отдельных сегментов.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ одной челюсти от 3500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ одного сегмента от 3000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух-трех зубов от 1900₽
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">КТ двух челюстей в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Полное исследование обеих челюстей в стоматологии Одинцово необходимо для комплексного планирования лечения, имплантации и ортодонтической коррекции. Дает полную картину состояния всего зубочелюстного аппарата.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух челюстей от 4400₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух челюстей для детей от 3400₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух челюстей и ВНЧС от 4600₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость КТ-диагностики в стоматологии Одинцово можно узнать после консультации. Мы предлагаем комплексные программы диагностики по доступным ценам. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества КТ перед обычным рентгеном */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Преимущества КТ перед обычной рентгенографией в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Трехмерное изображение</h3>
                <p className="text-gray-700 mb-4">
                  В отличие от обычного рентгена, который дает плоское двухмерное изображение, КТ в стоматологии Одинцово создает объемную 3D-модель. Это позволяет врачу видеть зубы и челюсти со всех сторон, оценить толщину костной ткани и точно спланировать лечение.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Полная картина анатомии челюстей
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Точное измерение костной ткани
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Обнаружение скрытых патологий
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Высокая точность диагностики</h3>
                <p className="text-gray-700 mb-4">
                  Компьютерная томография в клинике «Альтамед-с» Одинцово позволяет выявить патологии, которые невозможно увидеть на обычном рентгене: скрытые каналы, дополнительные корни, кисты небольших размеров, особенности строения челюстей.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Выявление ретинированных зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Диагностика патологий ВНЧС
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Обнаружение новообразований
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-indigo-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Компьютерная томография в стоматологии Одинцово — это современный золотой стандарт диагностики. В клинике «Альтамед-с» Одинцово мы используем КТ для точного планирования имплантации, ортодонтического лечения и диагностики сложных случаев. Трехмерное изображение позволяет врачам стоматологии Одинцово видеть полную картину и принимать оптимальные решения для достижения наилучших результатов лечения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Компьютерная томография в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает услуги компьютерной томографии в Одинцово — трехмерную диагностику
                для точного планирования имплантации, ортодонтического лечения и хирургических операций. Мы применяем
                современное оборудование с низкой лучевой нагрузкой и обеспечиваем высокое качество 3D-изображений.
              </p>
              <p>
                Врач-стоматолог проводит КТ-диагностику для оценки костной ткани, планирования имплантации и
                диагностики сложных случаев. У нас можно пройти КТ одной или двух челюстей, КТ ВНЧС, ОПТГ
                и другие виды томографии.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость КТ в Одинцово
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
                  Трехмерную диагностику с высокой точностью для планирования лечения.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Оценку костной ткани и точное планирование имплантации.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных специалистов, работающих с современным КТ-оборудованием.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Виртуальное планирование лечения на основе 3D-моделей.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Показания для КТ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Показания для компьютерной томографии в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🦷", title: "Планирование имплантации", desc: "Оценка костной ткани, выбор места для импланта, планирование костной пластики" },
                { icon: "😬", title: "Ортодонтическое лечение", desc: "Планирование исправления прикуса, оценка положения зубов и роста челюстей" },
                { icon: "🔍", title: "Ретинированные зубы", desc: "Выявление и оценка положения непрорезавшихся зубов" },
                { icon: "⚕️", title: "Кисты и новообразования", desc: "Диагностика кист, гранулем и других патологических образований" },
                { icon: "🦴", title: "Заболевания ВНЧС", desc: "Диагностика патологий височно-нижнечелюстного сустава" },
                { icon: "🔧", title: "Травмы челюстей", desc: "Оценка переломов и других повреждений после травм" },
                { icon: "💎", title: "Виртуальное протезирование", desc: "Создание 3D-моделей для планирования протезирования" },
                { icon: "📋", title: "Контроль лечения", desc: "Оценка результатов имплантации и других хирургических вмешательств" },
                { icon: "🦷", title: "Сложные эндодонтические случаи", desc: "Диагностика дополнительных каналов и особенностей строения" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-indigo-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Компьютерная томография в клинике «Альтамед-с» Одинцово назначается врачом по строгим медицинским показаниям. Наши специалисты стоматологии Одинцово проводят КТ только когда это действительно необходимо для точной диагностики и качественного планирования лечения. Современное оборудование обеспечивает минимальную лучевую нагрузку при максимальной информативности результатов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс проведения КТ */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Как проводится компьютерная томография в стоматологии Одинцово
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Подготовка к КТ</h3>
                <p className="text-gray-700 mb-4">
                  Специальная подготовка к компьютерной томографии в клинике «Альтамед-с» Одинцово не требуется. Перед процедурой необходимо снять металлические предметы (серьги, пирсинг, съемные протезы, брекеты). Процедура занимает от 20 секунд до нескольких минут в зависимости от объема исследования.
                </p>
                <p className="text-gray-700">
                  В стоматологии Одинцово мы используем современные КТ-аппараты с открытой конструкцией, что делает процедуру комфортной даже для пациентов с клаустрофобией.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Процесс сканирования</h3>
                <p className="text-gray-700 mb-4">
                  Во время КТ в стоматологии Одинцово пациент находится в комфортном положении, аппарат делает серию снимков вокруг головы. Процедура полностью безболезненна и не требует обезболивания. Во время сканирования необходимо сохранять неподвижность для получения качественных снимков.
                </p>
                <p className="text-gray-700">
                  Современное оборудование в клинике «Альтамед-с» Одинцово обеспечивает высокую скорость сканирования, что особенно важно для маленьких детей и пациентов с повышенной тревожностью.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Результаты КТ</h3>
                <p className="text-gray-700 mb-4">
                  После сканирования в стоматологии Одинцово специалисты обрабатывают данные и создают трехмерную модель. Результаты могут быть предоставлены на диске, распечатаны или отправлены на электронную почту. Врач анализирует полученные данные и использует их для планирования лечения.
                </p>
                <p className="text-gray-700">
                  КТ-данные в клинике «Альтамед-с» Одинцово хранятся в электронном виде и могут быть использованы для дальнейшего лечения и консультаций. Трехмерные модели позволяют точно спланировать имплантацию, ортодонтическое лечение и другие процедуры.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о компьютерной томографии в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают качество 3D-изображений, точность диагностики
                и эффективность планирования лечения на основе КТ.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Точное планирование</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После КТ врачи получают полную информацию о состоянии костной ткани и могут точно спланировать
                имплантацию и лечение, что соответствует ожиданиям пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная процедура</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После КТ в Одинцове пациенты отмечают отсутствие дискомфорта; врачи дают
                подробные объяснения результатов и плана лечения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о компьютерной томографии в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Чем КТ отличается от обычного рентгена?
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
                КТ дает трехмерное изображение зубов и челюстей, в то время как обычный рентген показывает
                только плоское двухмерное изображение. КТ позволяет точно оценить объем костной ткани,
                положение структур и спланировать лечение с высокой точностью.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Когда необходима КТ для имплантации?
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
                КТ необходима для планирования имплантации, так как позволяет точно оценить качество и объем
                костной ткани, выбрать оптимальное место для установки импланта и спланировать костную пластику
                при необходимости.
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
                Компьютерная томография в Одинцово — получите точную диагностику
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на КТ в клинику «Альтамед-С», чтобы получить трехмерные изображения
                для точного планирования имплантации и лечения.
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
                name: "Клиника «Альтамед-С» — компьютерная томография в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/ct",
                image: "https://altamed-c.ru/images/dentisrty/kt stomatologu.webp",
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
                serviceType: "Компьютерная томография",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Компьютерная томография в Одинцово: трехмерная диагностика для точного планирования имплантации, ортодонтического лечения и хирургических операций.",
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

