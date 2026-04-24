"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export type DentistryXrayDiagnosticsServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

export type DentistryXrayDiagnosticsPriceSectionUi = {
  sectionKey: string;
  title: string;
  rows: DentistryXrayDiagnosticsServiceRow[];
};

type Props = {
  priceSections: DentistryXrayDiagnosticsPriceSectionUi[];
};

function normalizePriceForUi(s: DentistryXrayDiagnosticsServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function XrayDiagnosticsPageClient({ priceSections }: Props) {
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
            <span className="text-gray-900">Рентгенография и диагностические исследования</span>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Рентгенография и диагностические исследования в Одинцово — «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современная рентген-диагностика в стоматологии Одинцово. Точная диагностика заболеваний зубов и челюстей с помощью передового оборудования.
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] relative overflow-hidden">
                <Image 
                  src="/images/dentisrty/Rentgenografiya.webp"
                  alt="Рентгенография и диагностика"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Рентген-диагностика в Одинцово</div>
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Записаться на прием
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] relative overflow-hidden rounded-[20px] shadow-lg">
              <Image 
                src="/images/dentisrty/Rentgenografiya.webp"
                alt="Рентгенография и диагностика"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Рентгенография и диагностика в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Точная диагностика заболеваний зубов и челюстей</p>
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">
                  Записаться на прием
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Виды рентген-диагностики в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Прицельный снимок (радиовизиография)</h3>
                <p className="text-gray-600 mb-4">Цифровой прицельный снимок одного или нескольких зубов. Используется для диагностики кариеса, состояния корневых каналов, оценки качества пломбирования.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Низкая лучевая нагрузка
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Мгновенный результат
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Высокое качество изображения
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Панорамный снимок (ОПТГ)</h3>
                <p className="text-gray-600 mb-4">Обзорный снимок всех зубов и челюстей. Необходим для планирования лечения, оценки состояния всех зубов, выявления скрытых патологий.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Полная картина состояния зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Выявление ретинированных зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Планирование ортодонтического лечения
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Телерентгенография (ТРГ)</h3>
                <p className="text-gray-600 mb-4">Рентгеновский снимок черепа в боковой проекции. Используется в ортодонтии для анализа строения челюстей, планирования исправления прикуса.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Анализ лицевых пропорций
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Планирование ортодонтического лечения
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Оценка роста челюстей
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3D-модель (цифровая диагностика)</h3>
                <p className="text-gray-600 mb-4">Цифровая 3D-модель челюстей создается на основе КТ. Позволяет визуализировать планируемое лечение без необходимости снятия слепков.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Точное планирование лечения
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Без необходимости слепков
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Визуализация результата
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" aria-labelledby="dentistry-xray-diagnostics-prices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-6 md:p-10">
            <h2
              id="dentistry-xray-diagnostics-prices-heading"
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center"
            >
              Прайс-лист диагностики в Одинцово
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
              Почему важна рентген-диагностика в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Точная диагностика скрытых проблем",
                  text: "Рентген-снимки позволяют выявить проблемы, которые невозможно увидеть при визуальном осмотре: кариес между зубами, состояние корней, кисты, абсцессы, ретинированные зубы. В клинике «Альтамед-с» Одинцово мы используем современное цифровое оборудование с минимальной лучевой нагрузкой.",
                  icon: "🔍"
                },
                {
                  title: "Контроль качества лечения",
                  text: "Рентгенография позволяет контролировать качество пломбирования корневых каналов, правильность установки имплантов, эффективность ортодонтического лечения. Регулярные снимки в стоматологии Одинцово помогают своевременно корректировать лечение.",
                  icon: "✅"
                },
                {
                  title: "Планирование сложных вмешательств",
                  text: "Перед имплантацией, хирургическими операциями, ортодонтическим лечением необходима точная диагностика. Рентген-снимки позволяют врачам стоматологии Одинцово составить детальный план лечения и предвидеть возможные осложнения.",
                  icon: "📋"
                },
                {
                  title: "Безопасность пациента",
                  text: "Современное цифровое рентген-оборудование в «Альтамед-с» Одинцово имеет минимальную лучевую нагрузку, что делает диагностику безопасной даже для детей и беременных женщин (при необходимости).",
                  icon: "🛡️"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
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
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Современное оборудование для диагностики в Одинцово
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Цифровые визиографы",
                  desc: "В клинике «Альтамед-с» Одинцово используются современные цифровые визиографы, которые позволяют получать снимки высокого качества при минимальной лучевой нагрузке. Результат доступен мгновенно.",
                  benefits: ["Мгновенный результат", "Высокое качество", "Минимальная лучевая нагрузка"]
                },
                {
                  title: "Панорамные аппараты",
                  desc: "Современные ортопантомографы позволяют получать качественные панорамные снимки всей зубочелюстной системы за несколько секунд.",
                  benefits: ["Быстрота выполнения", "Полная картина", "Комфорт для пациента"]
                },
                {
                  title: "3D-визуализация",
                  desc: "Возможность создания трехмерных моделей челюстей на основе КТ-данных открывает новые возможности для планирования лечения в стоматологии Одинцово.",
                  benefits: ["Точное планирование", "Визуализация результата", "Повышение точности"]
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Когда необходима рентген-диагностика в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🦷", title: "Перед лечением кариеса", desc: "Для оценки глубины поражения" },
                { icon: "🔧", title: "При лечении пульпита", desc: "Для оценки состояния корневых каналов" },
                { icon: "🦴", title: "Перед удалением зуба", desc: "Для оценки сложности операции" },
                { icon: "💎", title: "Перед имплантацией", desc: "Для планирования установки имплантов" },
                { icon: "😬", title: "Ортодонтическое лечение", desc: "Для планирования исправления прикуса" },
                { icon: "🔍", title: "Профилактический осмотр", desc: "Для выявления скрытых патологий" },
                { icon: "🩺", title: "После травм", desc: "Для оценки повреждений" },
                { icon: "📋", title: "Перед протезированием", desc: "Для планирования ортопедического лечения" },
                { icon: "✅", title: "Контроль лечения", desc: "Для оценки эффективности" }
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

      {/* Стоимость рентген-диагностики */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость рентген-диагностики в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на рентгенографию и диагностические исследования в клинике «Альтамед-с» Одинцово зависят от вида снимка и сложности процедуры. Мы используем современное цифровое оборудование, которое обеспечивает минимальную лучевую нагрузку и высокое качество изображений.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Панорамная рентгенография в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Панорамный снимок (ОПТГ) в стоматологии Одинцово позволяет получить полную картину состояния всех зубов и челюстей. Это незаменимая диагностическая процедура для планирования лечения.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Панорамный снимок от 720₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Панорамный снимок с распечаткой от 780₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Панорамный снимок с диском от 880₽
                    </li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Радиовизиография в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Прицельные снимки на визиографе в стоматологии Одинцово используются для детальной диагностики отдельных зубов. Процедура занимает считанные секунды и дает мгновенный результат.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Радиовизиография от 400₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Снимок с распечаткой от 510₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Телерентгенография (ТРГ) от 5050₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость рентген-диагностики в стоматологии Одинцово можно узнать после консультации. Мы предлагаем комплексные программы диагностики по доступным ценам. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Когда нужна рентген-диагностика */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Когда необходима рентген-диагностика в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🦷", title: "Перед лечением кариеса", desc: "Для оценки глубины поражения и выбора метода лечения" },
                { icon: "🔍", title: "При планировании имплантации", desc: "Оценка костной ткани и выбор места для импланта" },
                { icon: "👨‍⚕️", title: "Перед эндодонтическим лечением", desc: "Изучение строения и количества корневых каналов" },
                { icon: "🦷", title: "Ортодонтическое лечение", desc: "Планирование исправления прикуса и оценки роста челюстей" },
                { icon: "⚕️", title: "Выявление скрытых патологий", desc: "Обнаружение кист, гранулем и других образований" },
                { icon: "📋", title: "Контроль качества лечения", desc: "Оценка результатов пломбирования каналов и установки имплантов" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-purple-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Рентген-диагностика в клинике «Альтамед-с» Одинцово является важнейшей частью современного стоматологического лечения. Современное цифровое оборудование обеспечивает минимальную лучевую нагрузку при максимальной информативности снимков. Опытные рентгенологи стоматологии Одинцово проводят все виды исследований с высокой точностью, что позволяет врачам составить оптимальный план лечения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Безопасность рентген-диагностики */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Безопасность рентген-диагностики в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Минимальная лучевая нагрузка</h3>
                <p className="text-gray-700 mb-4">
                  Современное цифровое оборудование в клинике «Альтамед-с» Одинцово обеспечивает минимальную лучевую нагрузку. Цифровая радиовизиография дает дозу облучения в 10 раз меньше, чем традиционные пленочные снимки.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Доза облучения сравнима с двухчасовым полетом на самолете
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Безопасно для детей и беременных женщин
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование защитных средств (фартуки, воротники)
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Высокое качество изображений</h3>
                <p className="text-gray-700 mb-4">
                  Цифровая рентген-диагностика в стоматологии Одинцово обеспечивает высокое разрешение и четкость изображений. Врачи могут увеличивать изображения, менять контрастность и делать точные измерения.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Мгновенное получение результатов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Возможность сохранения в электронном виде
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Точная диагностика для эффективного лечения
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-purple-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                В клинике «Альтамед-с» Одинцово мы строго соблюдаем все нормы радиационной безопасности. Все рентген-исследования проводятся по медицинским показаниям с использованием современного оборудования последнего поколения. Наши специалисты прошли специальное обучение и имеют соответствующие сертификаты для работы с рентген-аппаратурой. Рентген-диагностика в стоматологии Одинцово абсолютно безопасна при соблюдении рекомендаций врача.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Безопасна ли рентген-диагностика в стоматологии?",
                  a: "Современное цифровое рентген-оборудование имеет минимальную лучевую нагрузку, которая в десятки раз ниже, чем при традиционной пленочной рентгенографии. В клинике «Альтамед-с» Одинцово мы используем только современное оборудование, соответствующее всем стандартам безопасности."
                },
                {
                  q: "Как часто можно делать рентген-снимки?",
                  a: "При необходимости рентген-снимки можно делать достаточно часто. Современное цифровое оборудование в стоматологии Одинцово обеспечивает минимальную лучевую нагрузку, которая не представляет опасности для здоровья."
                },
                {
                  q: "Можно ли делать рентген беременным?",
                  a: "В первом триместре беременности рентген-диагностику стараются избегать. При острой необходимости используется защита и минимальные дозы облучения. В клинике «Альтамед-с» Одинцово мы индивидуально подходим к каждому случаю и консультируемся с пациенткой."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full bg-gray-50 p-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 text-left">{faq.q}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openAccordion === idx && (
                    <div className="p-4 bg-white">
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

