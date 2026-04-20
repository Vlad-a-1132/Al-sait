"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from "@/components/AppointmentForm";

/** Статический список (как раньше): код / название / цена вручную */
const allergologyServices = [
  {
    id: 1,
    code: "В04.002.001",
    name: "Диспансерный прием (осмотр, консультация) врача-аллерголога-иммунолога",
    price: "3 310 руб.",
  },
  {
    id: 2,
    code: "А12.09.002.002",
    name: "Исследование дыхательных объемов при провокации физической нагрузкой",
    price: "2 330 руб.",
  },
  {
    id: 3,
    code: "А12.09.002.001",
    name: "Исследование дыхательных объемов с применением лекарственных препаратов",
    price: "2 330 руб.",
  },
  {
    id: 4,
    code: "А12.09.001",
    name: "Исследование неспровоцированных дыхательных объемов и потоков",
    price: "1 660 руб.",
  },
  {
    id: 5,
    code: "В03.002.004",
    name: "Комплекс исследований для выявления аллергена",
    price: "0 руб.",
  },
  {
    id: 6,
    code: "А12.06.006",
    name: "Накожные исследования реакции на аллергены",
    price: "1 000 руб.",
  },
  {
    id: 7,
    code: "В01.002.001",
    name: "Прием (осмотр, консультация) врача-аллерголога-иммунолога первичный",
    price: "4 310 руб.",
  },
  {
    id: 8,
    code: "В01.002.002",
    name: "Прием (осмотр, консультация) врача-аллерголога-иммунолога повторный",
    price: "3 310 руб.",
  },
  {
    id: 9,
    code: "В04.002.002",
    name: "Профилактический прием (осмотр, консультация) врача-аллергологаиммунолога",
    price: "3 310 руб.",
  },
  {
    id: 10,
    code: "В03.037.001",
    name: "Функциональное тестирование легких",
    price: "2 210 руб.",
  },
];

export default function AllergologyPage() {
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
            <span className="text-gray-800">Аллергология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and slider */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Аллергология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение аллергических заболеваний у взрослых и детей в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: "83rem" }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/images allergoly/allergoly (2).webp"
                    alt="Лечение аллергических заболеваний"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Лечение аллергических заболеваний</div>
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
                  src="/images/images allergoly/allergoly (2).webp"
                  alt="Лечение аллергических заболеваний"
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
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Лечение аллергических заболеваний</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современные методы лечения</p>
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
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 4" className="w-full h-full object-contain" />
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
                <img src="/images/yslugi/star 1.webp" alt="Звезда 1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">Комплексная оценка заболевания и прогноза лечения</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">Высокий уровень сервиса и взвешенная ценовая политика</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Услуги аллергологии в Одинцово
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг аллергологии и иммунологии
            </p>
            <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную стоимость в регистратуре или по телефону контакт-центра{" "}
              <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">
                +7 (495) 255-44-50
              </a>
              . Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">Услуги аллергологии</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allergologyServices.map((service) => (
                    <div
                      key={service.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0 pr-2">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">{service.name}</h4>
                          <div className="text-emerald-600 font-semibold text-lg break-words">{service.price}</div>
                        </div>
                        <Link
                          href="https://online.altamed-c.ru/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 bg-emerald-600 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-700 transition-colors duration-300 flex-shrink-0"
                        >
                          Записаться
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Консультация хорошего врача-аллерголога в Одинцово
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Специалист по аллергологии - это медицинский эксперт, который занимается выявлением, предупреждением и терапией различных форм аллергических патологий. В клинике «Альтамед-с» консультируют высококвалифицированные аллергологи с многолетним стажем работы и глубокими знаниями в области иммунологии. Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук, активно участвующие в научно-исследовательской деятельности.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наши специалисты проведут комплексное обследование, включая лабораторные анализы и аллергопробы, установят точный диагноз, разработают индивидуальную схему терапии и дадут рекомендации по предотвращению обострений.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/images allergoly/allergoly (2).webp"
                alt="Аллергология"
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
            Поводы обращения к врачу-аллергологу в Одинцово
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">постоянное или периодическое слезотечение;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">затяжной кашель;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">зуд кожи;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">затрудненное дыхание;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">заложенность носа;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">зуд и покраснение глаз;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">воспаления, отеки, высыпания на коже;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">сезонный насморк;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">выделения из носа;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">резь в глазах;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">периодическая одышка;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">рецидивирующие кожные высыпания.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive sections */}
      <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Часто задаваемые вопросы по аллергологии
          </h2>
          <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
            <div
              className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                aria-expanded={openAccordion === 1}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenAccordion(openAccordion === 1 ? null : 1)}
              >
                <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                  Диагностика аллергических заболеваний
                </h3>
                <div
                  className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 1 ? "rotate-45" : ""}`}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {openAccordion === 1 && (
                <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="space-y-4 text-gray-700" itemProp="text">
                    <p>
                      При первичном обращении в «Альтамед-с» выполняются стандартные клинические анализы крови и мочи для комплексной оценки общего состояния здоровья пациента. При выявлении показаний назначаются специализированные диагностические процедуры:
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Кожное аллергологическое тестирование методом прик-теста
                        </h4>
                        <p>
                          В ходе данного исследования кожа пациента аккуратно прокалывается специальным прик-ланцетом через каплю раствора определенного аллергена на глубину не более 1 мм. Результаты тестирования позволяют специалисту-аллергологу уже через 15-20 минут точно идентифицировать аллергенное вещество, спровоцировавшее развитие заболевания, а также оценить уровень чувствительности организма к различным группам аллергенов.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Определение общих и специфических иммуноглобулинов Е (Ig E) в сыворотке крови
                        </h4>
                        <p>
                          Данная методика предусматривает измерение концентрации иммуноглобулина Е (IgE) в крови пациента, повышенные показатели которого указывают на активную выработку специфических антител организмом. Этот диагностический подход позволяет специалисту проанализировать кровь на наличие реакции более чем к 100 различным аллергенам.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Диагностика лекарственной аллергии по анализу крови</h4>
                        <p>
                          Исследование направлено на выявление причинно-следственной связи между аллергическими реакциями и приемом фармацевтических препаратов. В процессе диагностики оценивается индивидуальная переносимость наиболее распространенных и жизненно важных медикаментов: антибиотических средств, обезболивающих и противовоспалительных препаратов, антикоагулянтов.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Оценка функции внешнего дыхания</h4>
                        <p>
                          Данная процедура позволяет диагностировать наличие и степень выраженности бронхообструкции (нарушение дыхательной функции) при бронхиальной астме или обструктивном бронхите, что является важным для определения тактики лечения.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
                aria-expanded={openAccordion === 2}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenAccordion(openAccordion === 2 ? null : 2)}
              >
                <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                  Какие аллергические заболевания лечит врач?
                </h3>
                <div
                  className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 2 ? "rotate-45" : ""}`}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {openAccordion === 2 && (
                <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="space-y-4 text-gray-700" itemProp="text">
                    <p>
                      В процессе лечения аллергических заболеваний в «Альтамед-с» применяются самые современные и эффективные на сегодняшний день методики, среди которых:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Элиминация аллергенов</h4>
                          <p>
                            Заключается в минимизации воздействия причиннозначимых аллергенов на организм пациента. В «Альтамед-с» применяются наиболее эффективные способы элиминации, включая подбор индивидуальной гипоаллергенной диеты и обучение пациента принципам гипоаллергенного образа жизни.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Лекарственная терапия</h4>
                          <p>
                            Проводится в «Альтамед-с» с использованием современных высокоэффективных антигистаминных препаратов и других медикаментов местного и системного действия, подбираемых индивидуально для каждого пациента.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Аллерген-специфическая иммунотерапия (АСИТ)</h4>
                          <p>
                            Подразумевает введение в организм сверхмалых доз причиннозначимых аллергенов в виде подкожных инъекций или подъязычных капель, что позволяет снизить чувствительность организма к аллергенам.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Физиотерапевтические методы лечения</h4>
                          <p>
                            Включают ингаляционную терапию для купирования обострений бронхиальной астмы и электрофорез (метод электролечения, при котором лекарственные вещества направленно поступают в организм под действием слабых импульсов электрического тока). Оптимальную схему лечения подбирает высококвалифицированный врач-физиотерапевт.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                      <p className="text-gray-700">
                        Записаться на прием аллерголога в «Альтамед-с» можно, позвонив по телефону в Одинцово +7 (495) 255-44-50 или заполнив форму обратной связи на нашем сайте. Наши врачи работают в будние, выходные и праздничные дни. Кроме этого, вы можете вызвать аллерголога на дом в удобное для вас время.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
                aria-expanded={openAccordion === 3}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenAccordion(openAccordion === 3 ? null : 3)}
              >
                <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                  Как проводят профилактику аллергических заболеваний?
                </h3>
                <div
                  className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 3 ? "rotate-45" : ""}`}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {openAccordion === 3 && (
                <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="space-y-4 text-gray-700" itemProp="text">
                    <p>
                      Профилактика обострений и снижение интенсивности проявлений аллергии в «Альтамед-с» базируется на назначении пациентам соблюдения принципов гипоаллергенного образа жизни, специальной диеты и устранении из повседневного обихода факторов и предметов, которые являются источниками причиннозначимых аллергенов.
                    </p>

                    <p>
                      Критически важную роль на данном этапе играет профилактика респираторных заболеваний и санация очагов хронических инфекций, которые способны усугубить тяжесть течения аллергических проявлений.
                    </p>

                    <p>
                      Для предупреждения аллергических реакций на пыльцу растений специалисты-аллергологи «Альтамед-с» проводят неспецифическую гипосенсибилизацию - пациенту вводятся специальные фармацевтические препараты за несколько дней или недель до начала периода цветения растений, что позволяет существенно снизить выраженность аллергической реакции на пыльцу, тополиный пух и другие растительные аллергены.
                    </p>
                  </div>
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
