"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from "@/components/AppointmentForm";

export type EndocrinologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: EndocrinologyServiceRow[];
};

function normalizePriceForUi(s: EndocrinologyServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function EndocrinologyPageClient({ serviceRows }: Props) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-800">Эндокринология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Эндокринология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний эндокринной системы в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/yslugi/endokrinjlog.webp"
                    alt="Эндокринология"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Эндокринология</div>
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
                <Image
                  src="/images/yslugi/endokrinjlog.webp"
                  alt="Эндокринология"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Эндокринология</h2>
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
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему «Альтамед-С»?
          </h2>
          {/* Мобильная версия - вертикальный список */}
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>
          {/* Десктопная версия - 4 колонки */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Полный прайс + CTA */}
      <section className="py-16 bg-white" aria-labelledby="endocrinology-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="endocrinology-services-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Эндокринолог в Одинцово — услуги и цены
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
              <div className="overflow-y-auto max-h-[360px] sm:max-h-[480px]">
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

      {/* Role of endocrine system */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Роль эндокринной системы в организме</h2>
          <div className="bg-blue-50 rounded-[20px] p-8 shadow-lg border-l-4 border-emerald-600">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Эндокринная система</strong> — это сложная система желез внутренней секреции, которые вырабатывают гормоны — биологически активные вещества, регулирующие практически все процессы в организме человека. Эндокринные железы включают щитовидную железу, поджелудочную железу, надпочечники, гипофиз, гипоталамус, паращитовидные железы, половые железы.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Гормоны эндокринной системы контролируют обмен веществ, рост и развитие, репродуктивную функцию, настроение, адаптацию к стрессовым ситуациям, регулируют уровень глюкозы в крови, артериальное давление, водно-солевой баланс. Любое нарушение в работе эндокринных желез может привести к серьезным заболеваниям и значительному ухудшению качества жизни.
            </p>
            <p className="text-gray-700 leading-relaxed">
              В медицинском центре «Альтамед-С» в Одинцово врачи-эндокринологи диагностируют и лечат заболевания всех желез внутренней секреции, помогая восстановить гормональный баланс и нормализовать работу эндокринной системы. Своевременное обращение к специалисту позволяет предупредить развитие тяжелых осложнений и значительно улучшить состояние здоровья пациента.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms for consultation */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Какие симптомы говорят о том, что необходима консультация эндокринолога?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Общие симптомы</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Быстрая утомляемость, постоянная слабость и сонливость</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Резкие изменения массы тела без видимых причин</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Частые головные боли и головокружения</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Нарушения сна (бессонница или постоянная сонливость)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Изменения настроения, раздражительность, депрессия</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Специфические симптомы</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Увеличение объема шеи, ощущение "комка в горле"</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Постоянная жажда и сухость во рту</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Частое мочеиспускание, особенно в ночное время</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Тремор (дрожь) в руках и ногах</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Выпадение волос или избыточный рост волос на теле</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-[20px] p-6">
            <p className="text-gray-700 italic text-center">
              При появлении одного или нескольких симптомов следует обратиться к эндокринологу. Ранняя диагностика заболеваний эндокринной системы позволяет начать своевременное лечение и избежать осложнений. В клинике «Альтамед-С» в Одинцово опытные специалисты проведут комплексное обследование и назначат эффективное лечение.
            </p>
          </div>
        </div>
      </section>

      {/* How appointment works */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Как проходит прием у эндокринолога?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Сбор анамнеза и осмотр</h3>
              <p className="text-gray-600 leading-relaxed">
                Эндокринолог внимательно выслушивает жалобы пациента, выясняет историю заболевания, оценивает общее состояние здоровья. Проводится пальпация щитовидной железы, измерение артериального давления, пульса, температуры тела.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Дополнительная диагностика</h3>
              <p className="text-gray-600 leading-relaxed">
                Назначаются необходимые лабораторные анализы (анализ крови на гормоны, сахар, гликированный гемоглобин), УЗИ щитовидной железы и других органов, дополнительные инструментальные исследования по показаниям.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Составление плана лечения</h3>
              <p className="text-gray-600 leading-relaxed">
                На основе полученных данных эндокринолог ставит диагноз и разрабатывает индивидуальный план лечения, включающий медикаментозную терапию, коррекцию образа жизни, диету, рекомендации по физической активности.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 rounded-[20px] p-8 border-l-4 border-emerald-600">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>В медицинском центре «Альтамед-С» в Одинцово</strong> прием эндокринолога длится 30-40 минут, что позволяет специалисту максимально подробно разобраться в проблеме пациента. Врач объясняет результаты обследования, отвечает на все вопросы, дает рекомендации по профилактике и контролю заболевания.
            </p>
            <p className="text-gray-700 leading-relaxed">
              При необходимости назначаются повторные консультации для контроля эффективности лечения и корректировки терапии. Эндокринологи клиники «Альтамед-С» в Одинцово имеют многолетний опыт работы с пациентами всех возрастных категорий и готовы помочь в решении любых проблем, связанных с эндокринной системой.
            </p>
          </div>
        </div>
      </section>

      {/* What we treat section */}
      <section className="py-16 bg-gray-50" aria-labelledby="what-we-treat-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="what-we-treat-heading" className="text-2xl font-bold text-gray-800 mb-8">
            Что мы лечим
          </h2>
          
          <div className="space-y-6 text-gray-700 mb-8">
            <p>
              Условно все заболевания эндокринной системы можно разделить на несколько категорий в зависимости от того, с какой из желез внутренней секреции наблюдаются проблемы. Наши врачи-эндокринологи успешно проводят лечение заболеваний щитовидной железы и гипоталамо-гипофизарной системы (шишковидная железа и гипофиз), а также заболеваний поджелудочной железы и надпочечников.
            </p>
          </div>

          {/* Alphabetical list of conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
              <div className="space-y-1 text-sm">
                <div>Авитаминоз</div>
                <div>Агалактия</div>
                <div>Аденоз молочной железы</div>
                <div>Аденома гипофиза</div>
                <div>Антифосфолипидный синдром</div>
                <div>Аутоиммунный тиреоидит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Г</div>
              <div className="space-y-1 text-sm">
                <div>Галакторея</div>
                <div>Гинекомастия</div>
                <div>Гиперальдостеронизм</div>
                <div>Гиперандрогения у женщин</div>
                <div>Гиперпаратиреоз</div>
                <div>Гиперпролактинемия</div>
                <div>Гипертиреоз</div>
                <div>Гипертрихоз</div>
                <div>Гиперхолестеринемия</div>
                <div>Гиперэстрогения</div>
                <div>Гипогликемическая кома</div>
                <div>Гипопаратиреоз</div>
                <div>Гипотиреоз</div>
                <div>Гирсутизм</div>
                <div>Гормонально-активные опухоли поджелудочной железы</div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">Д</div>
              <div className="space-y-1 text-sm">
                <div>Диабетическая стопа</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">З</div>
              <div className="space-y-1 text-sm">
                <div>Замедленное срастание переломов</div>
                <div>Зоб</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">И</div>
              <div className="space-y-1 text-sm">
                <div>Инсулинорезистентность</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">К</div>
              <div className="space-y-1 text-sm">
                <div>Климакс</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">М</div>
              <div className="space-y-1 text-sm">
                <div>Метаболический синдром</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Н</div>
              <div className="space-y-1 text-sm">
                <div>Надпочечниковая недостаточность</div>
                <div>Нарушение обмена веществ</div>
                <div>Нейроэндокринные опухоли (Карциноид)</div>
                <div>Несахарный диабет</div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">О</div>
              <div className="space-y-1 text-sm">
                <div>Ожирение</div>
                <div>Остеопения</div>
                <div>Остеопороз</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">П</div>
              <div className="space-y-1 text-sm">
                <div>Первичный гиперальдостеронизм</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">С</div>
              <div className="space-y-1 text-sm">
                <div>Сахарный диабет</div>
                <div>Синдром Иценко-Кушинга</div>
                <div>Синдром Клайнфельтера</div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">Т</div>
              <div className="space-y-1 text-sm">
                <div>Тиреоидит</div>
                <div>Тиреотоксикоз</div>
                <div>Токсический зоб</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">У</div>
              <div className="space-y-1 text-sm">
                <div>Узловой зоб</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
              <div className="space-y-1 text-sm">
                <div>Экзофтальм</div>
                <div>Эндемический зоб</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Block */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Консультация хорошего врача-эндокринолога в Одинцово
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Более 60% жителей города сталкиваются с заболеваниями, связанными с нарушениями в работе эндокринной системы. Диабет, ожирение, заболевания щитовидной железы - это те проблемы, которые требуют не паники, а активных действий. В «Альтамед-С» действуют эффективные программы профилактики, диагностики и лечения заболеваний эндокринной системы.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Каждый человек после 35 лет должен проходить обследование у эндокринолога хотя бы раз в 5-7 лет, а анализ крови на сахар - раз в 2-3 года (если у вас лишний вес, то ежегодно). Также поводом обратиться к эндокринологу могут служить симптомы, которые указывают на нарушение функции желез внутренней секреции.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Частный эндокринолог ведет работу не только с явными (и часто уже запущенными) патологиями, но и с людьми, которые делают приоритетом своего здоровья систематические профилактические осмотры.
              </p>
              <p className="text-lg text-gray-600">
                Записаться к эндокринологу можно в любое удобное время. Специалисты «Альтамед-С» - врачи высшей категории с многолетним опытом работы, готовые решить любую проблему, связанную с заболеваниями желез внутренней секреции. Эндокринологи в Москве доступны в будние и выходные дни, а также в праздничные дни.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/yslugi/endokrinjlog.webp" 
                alt="Эндокринология" 
                className="w-full h-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for consultation */}
      <section className="py-16 bg-white" aria-labelledby="reasons-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
            Поводы обращения к врачу-эндокринологу
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">отклонение веса от нормы и его резкое изменение;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">сухость глаз, слезотечение, появление отеков;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">снижение работоспособности в результате общей слабости;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">участившиеся головные боли;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">нерегулярность менструального цикла, климактерические «приливы»;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">угревая сыпь;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">ощущение сдавливания при дыхании, затруднения при глотании;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">постоянная жажда, сухость во рту;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">нарушение памяти;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">появление болевых ощущений в позвоночнике, мышцах рук, суставах;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">проблемы с зачатием, выкидыши;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">если у их родственников есть проблемы с щитовидкой, сахарный диабет, ранние инсульты, инфаркты и другие проблемы;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">увеличение объема передней части шеи;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">частые позывы к мочеиспусканию, усиливающиеся в ночное время;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">бессонница;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">дрожь в пальцах без причины;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">потеря или интенсивный рост волос;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">в случае планирования беременности, а также на ее ранних сроках, до или после УЗИ.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы о эндокринологии
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Какими заболеваниями занимается эндокринолог</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openAccordion === 0 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 0 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    Эндокринолог диагностирует и лечит заболевания эндокринной системы, включая:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Заболевания щитовидной железы (гипертиреоз, гипотиреоз, зоб)</li>
                    <li>• Сахарный диабет 1-го и 2-го типа</li>
                    <li>• Заболевания надпочечников</li>
                    <li>• Нарушения гормонального баланса</li>
                    <li>• Ожирение и метаболические синдромы</li>
                    <li>• Заболевания гипофиза и гипоталамуса</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Диагностика эндокринных заболеваний</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openAccordion === 1 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 1 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    Наши специалисты проводят комплексную диагностику эндокринных заболеваний с использованием современных методов:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Лабораторные анализы гормонов и биохимии крови</li>
                    <li>• Ультразвуковое исследование щитовидной железы и других органов</li>
                    <li>• Сцинтиграфия щитовидной железы</li>
                    <li>• МРТ и КТ гипофиза и надпочечников</li>
                    <li>• Глюкозотолерантный тест</li>
                    <li>• Определение уровня гликированного гемоглобина</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Консервативное лечение эндокринных заболеваний</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openAccordion === 2 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 2 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    Врачи-эндокринологи нашей клиники назначают индивидуальные схемы лечения:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Заместительная гормональная терапия</li>
                    <li>• Медикаментозная коррекция уровня гормонов</li>
                    <li>• Инсулинотерапия при сахарном диабете</li>
                    <li>• Назначение препаратов для нормализации обмена веществ</li>
                    <li>• Диетотерапия и коррекция образа жизни</li>
                    <li>• Мониторинг показателей и корректировка лечения</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(3)}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">Хирургическое лечение</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openAccordion === 3 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 3 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 mb-4">
                    При необходимости наши хирурги проводят операции на эндокринных органах:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Удаление узлов щитовидной железы</li>
                    <li>• Тиреоидэктомия (полное или частичное удаление щитовидной железы)</li>
                    <li>• Удаление паращитовидных желез</li>
                    <li>• Адреналэктомия (удаление надпочечников)</li>
                    <li>• Операции на гипофизе</li>
                    <li>• Малоинвазивные хирургические методы с использованием эндоскопии</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}

