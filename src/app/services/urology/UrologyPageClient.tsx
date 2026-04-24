"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from "@/components/AppointmentForm";

export type UrologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: UrologyServiceRow[];
};

function normalizePriceForUi(s: UrologyServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function UrologyPageClient({ serviceRows }: Props) {
  // State for accordion (оставляем для существующих FAQ/аккордеона)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-500">
              Главная
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link href="/services" className="hover:text-emerald-500">
              Услуги
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-gray-800">Урология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Урология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение урологических заболеваний у мужчин и женщин в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: "83rem" }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image src="/images/yslugi/yrolog.webp" alt="Урология" fill className="object-cover" unoptimized priority />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Урология</div>
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
            {/* Десктопная версия */}
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <Image src="/images/yslugi/yrolog.webp" alt="Урология" fill className="object-cover" unoptimized priority />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Урология</h2>
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

      {/* Почему Альтамед-С*/}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед-С»?</h2>
          {/* Мобильная версия - вертикальный список */}
          <div className="md:hidden space-y-6">
            {[
              "Лечение в соответствии с мировыми клиническими рекомендациями",
              "Комплексная оценка заболевания и прогноза лечения",
              "Современное диагностическое оборудование и собственная диагностическая лаборатория",
              "Высокий уровень сервиса и взвешенная ценовая политика",
            ].map((text, idx) => (
              <div key={text} className="flex items-start gap-4">
                <div className="w-16 h-16 flex-shrink-0 relative">
                  <img src="/images/yslugi/star 1.webp" alt={`Звезда ${idx + 1}`} className="w-full h-full object-contain" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <p className="text-gray-700 font-medium text-left pt-2">{text}</p>
              </div>
            ))}
          </div>
          {/* Десктопная версия - 4 колонки */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Лечение в соответствии с мировыми клиническими рекомендациями",
              "Комплексная оценка заболевания и прогноза лечения",
              "Современное диагностическое оборудование и собственная диагностическая лаборатория",
              "Высокий уровень сервиса и взвешенная ценовая политика",
            ].map((text, idx) => (
              <div key={text} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <img src="/images/yslugi/star 1.webp" alt={`Звезда ${idx + 1}`} className="w-full h-full object-contain" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section — Полный прайс + CTA */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Услуги уролога
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Полный прайс — ниже</p>
            <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Указанные цены не являются офертой. Актуальную стоимость уточняйте по телефону{" "}
              <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">
                +7 (495) 255-44-50
              </a>
              .
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white">
              <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
                <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
              </div>
              <div className="overflow-y-auto max-h-[560px] sm:max-h-[640px]">
                <table className="w-full text-sm sm:text-base table-fixed">
                  <thead className="sticky top-0 z-10 bg-gray-100">
                    <tr>
                      <th className="text-left py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">Услуга</th>
                      <th className="text-right py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceRows.map((s, i) => (
                      <tr key={s.key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}>
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

            {/* CTA — как на гинекологии */}
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

      {/* Остальные блоки ниже оставляем как есть в текущей странице — тут сохраняем структуру (FAQ/контент) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-gray-600">Ответы на популярные вопросы об урологии</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Когда стоит обратиться к урологу?",
                a: "При боли, дискомфорте, нарушениях мочеиспускания, болях в пояснице, подозрении на инфекции и при профилактических осмотрах.",
              },
              {
                q: "Какие обследования может назначить уролог?",
                a: "По показаниям: анализы, УЗИ, урография, цистография и другие методы диагностики.",
              },
            ].map((item, idx) => (
              <div key={item.q} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${openAccordion === idx ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === idx && <div className="px-6 pb-4 text-gray-700">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

