"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from '@/components/AppointmentForm';

export default function EndoscopyPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Услуги эндоскопии по прайсу (коды и цены актуальны)
  const endoscopyServices = [
    {
      category: 'Эндоскопия верхних отделов ЖКТ',
      services: [
        { code: "A03.08.003", name: "Эзофагоскопия", price: 5990 },
        { code: "A03.16.001", name: "Эзофагогастродуоденоскопия", price: 6200 },
        { code: "A03.16.003", name: "Эзофагогастроскопия", price: 5780 }
      ]
    },
    {
      category: 'Биопсия при эндоскопии',
      services: [
        { code: "A11.16.003", name: "Биопсия двенадцатиперстной кишки с помощью эндоскопии", price: 2630 },
        { code: "A11.16.001", name: "Биопсия пищевода с помощью эндоскопии", price: 2210 },
        { code: "A11.16.002", name: "Биопсия желудка с помощью эндоскопии", price: 2630 },
        { code: "A11.16.002.001", name: "Биопсия желудка с помощью эндоскопии на хеликобактер и экспресс «Хелпил-тест»", price: 2630 },
        { code: "A11.16.002.002", name: "Биопсия желудка с помощью эндоскопии на хеликобактер с помощью быстрого уреазного теста", price: 2630 }
      ]
    }
  ];

  const indications = [
    "Боли в животе",
    "Тошнота и рвота",
    "Нарушения глотания",
    "Изжога",
    "Кровотечения из ЖКТ",
    "Подозрение на язву",
    "Полипы",
    "Подозрение на опухоли",
    "Диарея или запоры",
    "Подготовка к операции"
  ];

  const advantages = [
    "Высокая точность диагностики",
    "Возможность взятия биопсии",
    "Лечение во время исследования",
    "Минимальная травматичность",
    "Быстрая диагностика"
  ];

  const faqItems = [
    {
      question: "Больно ли делать эндоскопию?",
      answer: "Эндоскопия проводится под местной или общей анестезией, поэтому пациент не чувствует боли. После процедуры возможны незначительные неприятные ощущения, которые быстро проходят."
    },
    {
      question: "Как подготовиться к эндоскопии?",
      answer: "Подготовка зависит от типа исследования. Для гастроскопии требуется голод (6-8 часов). Детальную инструкцию вы получите при записи."
    },
    {
      question: "Сколько длится эндоскопия?",
      answer: "Сама процедура обычно занимает 15-30 минут. Общее время в клинике - около 1-2 часов (включая подготовку и восстановление после анестезии)."
    },
    {
      question: "Можно ли делать биопсию при эндоскопии?",
      answer: "Да, во время эндоскопии врач может взять образцы тканей (биопсию) для дальнейшего гистологического исследования. Это абсолютно безопасно."
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
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
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">Услуги</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Эндоскопия</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main section */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Эндоскопия в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Эндоскопические исследования в Одинцово
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-[#6B8190] relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/services/Screenshot_1831.png"
                    alt="Эндоскопия"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Эндоскопические исследования</div>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#6B8190] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-[#5a6f7a] transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-[#6B8190] relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/services/Screenshot_1831.png"
                  alt="Эндоскопия в Одинцово"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Эндоскопия</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Точная визуальная диагностика внутренних органов</p>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#6B8190] text-white rounded-full px-8 py-3 font-medium hover:bg-[#5a6f7a] transition-colors"
                >
                  Консультация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Прайс-лист */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Услуги эндоскопии
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр эндоскопических исследований и диагностических процедур в Одинцово
            </p>
            <p className="text-gray-600 text-sm mt-2 max-w-2xl mx-auto">
              Цены носят справочный характер. Актуальную стоимость уточняйте в регистратуре или по телефону{' '}
              <a href="tel:+74952554450" className="text-[#6B8190] hover:underline font-medium">+7 (495) 255-44-50</a>.
            </p>
          </div>

          <div className="space-y-8">
            {endoscopyServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#6B8190] to-[#7B919F] px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service) => (
                      <div 
                        key={service.code}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs text-gray-500 font-mono">{service.code}</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <div className="flex-1 pr-2">
                            <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                              {service.name}
                            </h4>
                            <div className="text-[#6B8190] font-semibold text-lg">
                              {service.price.toLocaleString()} ₽
                            </div>
                          </div>
                          <Link 
                            href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer"
                            className="ml-3 bg-[#6B8190] text-white px-3 py-1 rounded-md text-sm hover:bg-[#5a6f7a] transition-colors duration-300 flex-shrink-0 whitespace-nowrap"
                          >
                            Записаться
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center bg-[#6B8190] text-white rounded-full px-8 py-3 font-medium hover:bg-[#5a6f7a] transition-colors"
            >
              Записаться на эндоскопию
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Описание */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Эндоскопия: современная диагностика внутренних органов</h2>
          <div className="mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Эндоскопия</strong> — это современный метод визуального исследования внутренних органов с помощью гибких эндоскопов, оснащенных миниатюрной видеокамерой высокого разрешения и источником света. В клинике «Альтамед-С» в Одинцово эндоскопические исследования проводятся с использованием оборудования экспертного класса.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Основные преимущества эндоскопии в Одинцово — возможность тщательного визуального осмотра слизистых оболочек органов желудочно-кишечного тракта, дыхательной системы, выявления патологических изменений на ранней стадии, проведения биопсии для гистологического исследования и даже выполнения лечебных манипуляций в режиме реального времени.
            </p>
            <div className="bg-white rounded-[20px] p-6 shadow-md border-l-4 border-[#6B8190]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Преимущества эндоскопии в Одинцово:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6B8190] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Высокая информативность и точность диагностики</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6B8190] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Возможность проведения лечебных манипуляций одновременно с диагностикой</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6B8190] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Минимальная инвазивность — отсутствие разрезов и швов</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6B8190] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Быстрое восстановление после процедуры</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6B8190] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Возможность записи исследования для последующего анализа</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Показания */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Показания к эндоскопическому исследованию в Одинцово</h2>
          
          <div className="bg-white rounded-[20px] shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Скрининговые исследования для профилактики</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Эндоскопия в Одинцово применяется не только для диагностики, но и для раннего выявления заболеваний ЖКТ. В странах с высоким уровнем заболеваемости раком желудка (например, Япония) широко применяется скрининговая <strong>гастроскопия</strong>. В России массового скрининга нет, однако специалисты медицинского центра «Альтамед-С» в Одинцово рекомендуют пациентам старшего возраста пройти это исследование для профилактики заболеваний желудочно-кишечного тракта.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Показания к отдельным видам эндоскопической диагностики</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-[#6B8190] mb-3">Гастроскопия (ФГДС)</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Гастроскопия в Одинцово назначается для выявления причин следующих симптомов:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Затруднение при глотании (дисфагия)",
                  "Боли в области желудка",
                  "Потеря веса без видимой причины",
                  "Боль в грудной клетке, не связанная с сердцем",
                  "Изжога и частая отрыжка",
                  "Тошнота и рвота",
                  "Подозрение на гастрит или язвенную болезнь"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-[#6B8190] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-l-4 border-[#6B8190] p-4">
              <p className="text-gray-700 italic">
                Эндоскопические исследования также используются для контроля течения заболевания в динамике и оценки эффективности проведенного лечения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Дополнительные возможности */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Дополнительные процедуры при эндоскопии в Одинцово</h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Во время эндоскопического исследования в клинике «Альтамед-С» врач может выполнить диагностические и лечебные манипуляции без дополнительных оперативных вмешательств:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔬",
                title: "Биопсия тканей",
                description: "Получение образца патологически измененной ткани для гистологического исследования под микроскопом. Позволяет точно определить характер поражения слизистой оболочки."
              },
              {
                icon: "📊",
                title: "Эндосонография",
                description: "Ультразвуковое исследование через стенку полого органа с помощью специального датчика. Обеспечивает высокую точность диагностики новообразований."
              },
              {
                icon: "🩸",
                title: "Остановка кровотечения",
                description: "Эндоскопический гемостаз при язвенных кровотечениях и других источниках кровопотери. Быстрое и эффективное лечение без операции."
              },
              {
                icon: "🔧",
                title: "Установка стента",
                description: "Восстановление проходимости органа при опухолях и других патологических образованиях. Используется при стенозах пищевода, желчевыводящих путей."
              },
              {
                icon: "✂️",
                title: "Удаление новообразований",
                description: "Удаление полипов, доброкачественных образований и злокачественных опухолей на ранней стадии. Минимально инвазивное лечение без разрезов."
              },
              {
                icon: "💊",
                title: "Введение лекарственных препаратов",
                description: "Точечное введение медикаментов непосредственно в очаг поражения. Повышает эффективность лечения воспалительных процессов."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Преимущества эндоскопии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#6B8190] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#6B8190] transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems.includes(index) && (
                  <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

