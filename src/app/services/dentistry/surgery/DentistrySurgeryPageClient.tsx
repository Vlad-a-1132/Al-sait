"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type DentistrySurgeryServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

export type DentistrySurgeryPriceSectionUi = {
  sectionKey: string;
  title: string;
  rows: DentistrySurgeryServiceRow[];
};

type Props = {
  priceSections: DentistrySurgeryPriceSectionUi[];
};

function normalizePriceForUi(s: DentistrySurgeryServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function DentistrySurgeryPageClient({ priceSections }: Props) {
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
            <span className="text-gray-900">Хирургическая стоматология</span>
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
                Хирургическая стоматология в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Удаление зубов, имплантация и хирургические операции в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/stom surgeon.webp" 
                alt="Хирургическая стоматология" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Стоматолог-хирург в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает полный комплекс услуг стоматолога-хирурга в Одинцово — от
                простого удаления зубов до сложных операций имплантации и челюстно-лицевой хирургии. Мы применяем
                передовые методики, современное оборудование и учитываем индивидуальные особенности каждого пациента,
                чтобы обеспечить безопасное и эффективное лечение.
              </p>
              <p>
                Врач-стоматолог-хирург составляет персональный план лечения, учитывая состояние зубов, костной ткани
                и пожелания пациента. У нас можно выполнить простое и сложное удаление зубов, установить импланты,
                провести костную пластику и синус-лифтинг, выполнить пластику мягких тканей и другие хирургические
                вмешательства.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость услуг стоматолога-хирурга в Одинцово
                фиксируется заранее, а пациенты получают подробную смету с поэтапным планом лечения.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персонализированный протокол хирургического лечения с учётом состояния зубов, костной ткани и эстетики.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Подготовку и сопровождение у команды узких специалистов: хирурга, имплантолога и ортопеда.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Цифровое планирование операций, проверка по 3D-модели и пошаговый контроль процесса.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Контрольный график визитов после операции, рекомендации по уходу и профилактике осложнений.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества услуг стоматолога-хирурга в «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные хирурги</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-хирурги с опытом более 15 лет выполняют сложные операции и работают в связке
                с имплантологами и ортопедами для длительного результата.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современные методики</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем атравматичные методики удаления, одномоментную имплантацию, костную пластику и
                пластику мягких тканей по международным протоколам.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Безболезненное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Современная местная анестезия, седация и индивидуальные планы обезболивания минимизируют
                дискомфорт во время и после операции.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед операцией — пациент знает стоимость услуг стоматолога-хирурга до начала лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная реабилитация</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Подробные рекомендации по уходу после операции, контрольные визиты и поддержка врача на всех этапах
                восстановления.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от консультации до контрольных осмотров и рекомендаций
                по профилактике.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" aria-labelledby="dentistry-surgery-prices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-6 md:p-10">
            <h2 id="dentistry-surgery-prices-heading" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Услуги хирургической стоматологии в Одинцово
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Стоматолог-хирург в Одинцово: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед-С» — клиника, где услуги стоматолога-хирурга в Одинцове проводятся по международным
              протоколам. Мы принимаем пациентов из Одинцово и всего Одинцовского городского округа, поэтому
              запрос «стоматолог хирург одинцово область» полностью закрывает наши услуги.
            </p>
            <p>
              Наши пациенты отмечают, что «стоматолог хирург одинцово отзывы» в точности описывают результат:
              аккуратная работа хирургической команды и детальное сопровождение. Если вы ищете стоматологию,
              где «стоматология хирургия одинцово» — это не просто слоган, а комплексная услуга, записывайтесь
              на консультацию стоматолога-хирурга или ознакомьтесь с другими направлениями на{" "}
              <Link href="/services/dentistry" className="text-emerald-600 hover:text-emerald-700 underline">
                странице стоматологии
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Особенности хирургической стоматологии в «Альтамед-с» Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Безболезненное удаление зубов",
                  text: "Современная анестезия позволяет полностью исключить болевые ощущения во время удаления зубов. В клинике «Альтамед-с» Одинцово мы используем только качественные препараты для местной анестезии, что обеспечивает комфорт пациента.",
                  icon: "💉"
                },
                {
                  title: "Имплантация с гарантией",
                  text: "Профессиональная установка имплантов от ведущих производителей. В стоматологии Одинцово мы гарантируем успешную остеоинтеграцию и долгосрочный результат имплантации.",
                  icon: "💎"
                },
                {
                  title: "Миниинвазивные операции",
                  text: "Современные техники позволяют выполнять операции с минимальным травмированием тканей. Быстрое заживление и минимальный дискомфорт после операций в стоматологии Одинцово.",
                  icon: "🔬"
                },
                {
                  title: "Опытные хирурги",
                  text: "Наши врачи-хирурги имеют многолетний опыт выполнения сложных операций. В «Альтамед-с» Одинцово работают специалисты, прошедшие обучение по современным методикам.",
                  icon: "👨‍⚕️"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость хирургических услуг */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость хирургических услуг в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на хирургические услуги в клинике «Альтамед-с» Одинцово зависят от сложности операции, используемых материалов и объема работы. Хирургическая стоматология в Одинцово включает удаление зубов, имплантацию, костную пластику и другие процедуры.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Удаление зубов в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Удаление зубов в стоматологии Одинцово проводится с использованием современной анестезии и инструментов. Простое удаление обходится дешевле, чем сложное с разъединением корней или удаление ретинированных зубов.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Простое удаление от 2060₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Сложное удаление от 4830₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Удаление ретинированного зуба от 9900₽
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Имплантация в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Дентальная имплантация в клинике «Альтамед-с» Одинцово — это современный метод восстановления зубов. Цена включает установку импланта, при необходимости — костную пластику и синус-лифтинг.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Установка импланта от 35020₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Костная пластика от 36230₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Синус-лифтинг от 28980₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость хирургических услуг в стоматологии Одинцово можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и комплексные программы лечения по доступным ценам. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Когда нужна хирургическая стоматология */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Когда необходима помощь хирурга-стоматолога в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🦷", title: "Необходимо удаление зуба", desc: "Когда зуб нельзя сохранить или он мешает лечению" },
                { icon: "💎", title: "Восстановление зубов имплантами", desc: "Современная альтернатива съемным протезам" },
                { icon: "🦴", title: "Недостаток костной ткани", desc: "Костная пластика перед имплантацией" },
                { icon: "😬", title: "Ретинированные зубы мудрости", desc: "Удаление непрорезавшихся зубов, вызывающих проблемы" },
                { icon: "⚕️", title: "Кисты и новообразования", desc: "Хирургическое удаление кист и гранулем" },
                { icon: "🔧", title: "Пластика мягких тканей", desc: "Коррекция уздечек, вестибулопластика" },
                { icon: "🦷", title: "Резекция верхушки корня", desc: "Сохранение зуба при патологиях верхушки корня" },
                { icon: "💉", title: "Синус-лифтинг", desc: "Увеличение объема кости в области верхнечелюстных пазух" },
                { icon: "🏥", title: "Челюстно-лицевая хирургия", desc: "Сложные операции на челюстях и мягких тканях" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-red-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Хирургическая стоматология в клинике «Альтамед-с» Одинцово — это комплекс современных хирургических методов лечения заболеваний зубов и полости рта. Опытные хирурги-стоматологи в Одинцово выполняют операции любой сложности с использованием передовых технологий и качественной анестезии. Все процедуры в стоматологии Одинцово проводятся в стерильных условиях с соблюдением всех стандартов безопасности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Подробное описание хирургических процедур */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Подробное описание хирургических процедур в стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Удаление зубов в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Удаление зубов в клинике «Альтамед-с» Одинцово проводится с использованием современной местной анестезии, что обеспечивает полное отсутствие болевых ощущений. Простое удаление применяется для зубов с полным прорезыванием и простым строением корней. Сложное удаление требуется при ретинированных зубах, зубах с разъединенными корнями или при наличии осложнений.
                </p>
                <p className="text-gray-700">
                  После удаления зуба в стоматологии Одинцово врач проводит кюретаж лунки, накладывает швы при необходимости и дает рекомендации по уходу. Правильное удаление в клинике Одинцово предотвращает развитие осложнений и обеспечивает быстрое заживление.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Дентальная имплантация в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Имплантация зубов в стоматологии Одинцово — это современный метод восстановления утраченных зубов. В клинике «Альтамед-с» Одинцово мы используем импланты премиум-класса, которые полностью имитируют натуральные зубы. Процедура включает вживление титанового импланта в костную ткань челюсти.
                </p>
                <p className="text-gray-700">
                  Перед имплантацией в стоматологии Одинцово обязательно проводится КТ для оценки костной ткани. При недостатке кости выполняется костная пластика или синус-лифтинг. Имплантация в клинике Одинцово позволяет восстановить как один зуб, так и весь зубной ряд с пожизненной гарантией.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Костная пластика и синус-лифтинг в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Костная пластика в стоматологии Одинцово необходима при недостатке костной ткани для установки импланта. В клинике «Альтамед-с» Одинцово мы используем современные методы направленной регенерации кости с применением остеопластических материалов.
                </p>
                <p className="text-gray-700">
                  Синус-лифтинг в Одинцово применяется при имплантации на верхней челюсти, когда требуется увеличить объем кости в области верхнечелюстных пазух. Процедура может быть открытой или закрытой, в зависимости от клинической ситуации. Опытные хирурги стоматологии Одинцово проводят костную пластику с высокой точностью и минимальной травматичностью.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Реабилитация после операций */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Реабилитация после хирургических вмешательств в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">После удаления зуба</h3>
                <p className="text-gray-700 mb-4">
                  После удаления зуба в клинике «Альтамед-с» Одинцово важно соблюдать рекомендации врача для быстрого заживления и предотвращения осложнений. Врачи стоматологии Одинцово дают подробные инструкции по уходу за полостью рта после операции.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Не принимать пищу в течение 2-3 часов после операции
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Полоскание антисептиками по назначению врача
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Исключить физические нагрузки в первые дни
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">После имплантации</h3>
                <p className="text-gray-700 mb-4">
                  Реабилитация после имплантации в стоматологии Одинцово включает несколько этапов: период остеоинтеграции, установка формирователя десны и последующее протезирование. В клинике «Альтамед-с» Одинцово мы обеспечиваем полное сопровождение на всех этапах.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Соблюдение щадящей диеты после операции
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярные контрольные осмотры в клинике Одинцово
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Остеоинтеграция занимает 3-6 месяцев
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-red-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Реабилитация после хирургических вмешательств в клинике «Альтамед-с» Одинцово проходит под контролем опытных специалистов. Врачи стоматологии Одинцово дают подробные рекомендации и проводят контрольные осмотры для мониторинга процесса заживления. Правильная реабилитация обеспечивает успешный результат операции и долгосрочное здоровье полости рта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о стоматологе-хирурге в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Запрос «стоматолог хирург одинцово отзывы» подтверждается историями пациентов: они отмечают
                безболезненность процедур, внимательное отношение и понятный план лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Операции проходят без осложнений, а реабилитация проходит быстро, что соответствует ожиданиям
                по запросу «стоматолог хирург в одинцове цены отзывы».
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная реабилитация</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После операций в Одинцове пациенты отмечают минимальный дискомфорт; врачи на связи 24/7
                и дают подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о стоматологе-хирурге в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько стоит удаление зуба в Одинцово в клинике «Альтамед-С»?
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
                Стоимость зависит от сложности удаления. Простое удаление — от 2 170 ₽, сложное удаление — от 4 830 ₽,
                удаление ретинированного зуба — от 10 400 ₽. Окончательный план лечения формируется после обследования
                и фиксируется в договоре.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Больно ли удалять зуб?
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
                Нет, удаление зубов проводится под местной анестезией, поэтому процедура полностью безболезненна.
                Современные анестетики обеспечивают комфорт на протяжении всей операции.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько времени занимает заживление после удаления зуба?
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
                Заживление лунки после простого удаления занимает 7-10 дней, после сложного удаления — до 2-3 недель.
                При соблюдении рекомендаций врача процесс проходит без осложнений.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Выполняете ли вы имплантацию зубов?
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
                Да, наши стоматологи-хирурги проводят дентальную имплантацию, костную пластику и синус-лифтинг.
                Мы используем импланты Straumann, Osstem, Dentium и другие системы мировых производителей.
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
                Стоматолог-хирург в Одинцово — начните с бесплатного плана лечения
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость услуг стоматолога-хирурга,
                подобрать подходящий метод лечения и получить индивидуальный план с учётом ваших пожеланий.
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
                name: "Клиника «Альтамед-С» — стоматолог-хирург в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/surgery",
                image: "https://altamed-c.ru/images/dentisrty/stom surgeon.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "298"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Хирургическая стоматология",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Стоматолог-хирург в Одинцово: удаление зубов, имплантация, челюстно-лицевая хирургия, костная пластика, синус-лифтинг и пластика мягких тканей.",
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

