"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type TherapyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: TherapyServiceRow[];
};

function normalizePriceForUi(s: TherapyServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function TherapyPageClient({ serviceRows }: Props) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const reasonsForConsultation = [
    "Общая слабость, недомогание, быстрая утомляемость",
    "Кашель, хрипы в легких, боли в горле",
    "Выделения из носа, ушной раковины, кровохарканье",
    "Онемение или покалывание в конечностях",
    "Бессонница, депрессия, безосновательное чувство тревоги",
    "Признаки простуды, гриппа",
    "Затрудненное дыхание, одышка",
    "Боль или шум в ушах, потеря слуха",
    "Боли в желудке, чрезмерная икота, изжога, тошнота, нарушение стула",
    "Высыпания на коже, изменение ее пигментации",
    "Высокая температура, лихорадка",
    "Ухудшение или потеря зрения",
    "Боли за грудиной, в области сердца",
    "Существенные изменения артериального давления",
    "Воспаление слизистых оболочек глаз, ротовой полости и т. п.",
  ];

  const medicalDocuments = [
    "Справка для посещения бассейна.",
    "Санаторно-курортная карта.",
    "Справка формы 070/у для получения путевки.",
    "Справка о наличии (отсутствии) контактов с больными инфекционными заболеваниями.",
  ];

  const faqItems = [
    {
      question: "Какие заболевания лечит врач-терапевт",
      answer:
        "Терапевт лечит широкий спектр заболеваний внутренних органов: сердечно-сосудистые заболевания, болезни органов дыхания, желудочно-кишечного тракта, эндокринные нарушения, инфекционные заболевания и многое другое.",
    },
    {
      question: "Диагностика в терапии",
      answer:
        "В терапии используются современные методы диагностики: лабораторные анализы, инструментальные исследования, функциональная диагностика, УЗИ, рентгенологические исследования и другие методы.",
    },
    {
      question: "Методы лечения терапевтических заболеваний",
      answer:
        "Лечение включает медикаментозную терапию, физиотерапию, диетотерапию, лечебную физкультуру, санаторно-курортное лечение и другие консервативные методы лечения.",
    },
  ];

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
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
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Терапия</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Терапия в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Консультация хорошего врача-терапевта в Москве
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img src="/images/yslugi/terapiay 1.webp" alt="Общая терапия и лечение" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Общая терапия и лечение</div>
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
                <img src="/images/yslugi/terapiay 1.webp" alt="Терапия в Одинцово" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Терапия в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">
                  Профессиональная диагностика и лечение заболеваний внутренних органов
                </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Следование международным стандартам медицинской помощи",
              "Полная диагностика и индивидуальный подход к лечению",
              "Новейшее оборудование и собственная диагностическая лаборатория",
              "Качественный сервис и доступные цены на медицинские услуги",
            ].map((t, i) => (
              <div key={t} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <img src="/images/yslugi/star 1.webp" alt={`Звезда ${i + 1}`} className="w-full h-full object-contain" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{i + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section — Полный прайс */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Услуги терапевта в Одинцово
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

      {/* Поводы обращения */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Поводы обращения к врачу-терапевту</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasonsForConsultation.map((r) => (
              <div key={r} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-700">
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Документы */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Медицинские справки и документы</h2>
          <p className="text-gray-700 mb-4">
            Люди часто обращаются к терапевту для получения различных медицинских справок и документов для трудоустройства, поступления в
            учебные заведения, посещения спортивных секций или бассейнов и в других ситуациях.
          </p>
          <ul className="space-y-2 text-gray-700">
            {medicalDocuments.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="text-emerald-600">•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={item.question} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleExpanded(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedItems.includes(idx) ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems.includes(idx) && <div className="px-6 pb-4 text-gray-700">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

