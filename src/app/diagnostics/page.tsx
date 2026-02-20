"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from '@/components/AppointmentForm';

export default function DiagnosticsPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const diagnosticsServices = [
    {
      id: 'hardware-diagnostics',
      title: 'Аппаратная диагностика',
      description: 'Современные методы инструментальной диагностики для точной постановки диагноза',
      image: '/images/yslugi/Hardware diagnostics.webp',
      link: '/services/hardware-diagnostics'
    },
    {
      id: 'lab-tests',
      title: 'Лабораторные анализы',
      description: 'Полный спектр лабораторных исследований для комплексной диагностики',
      image: '/images/yslugi/Laboratory tests.webp',
      link: '/services/lab-tests'
    },
    {
      id: 'pregnancy-screening',
      title: 'Скрининг при беременности',
      description: 'Комплексное обследование для будущих мам на разных сроках беременности',
      image: '/images/services/Screenshot_1835.png',
      link: '/services/pregnancy-screening'
    },
    {
      id: 'ultrasound',
      title: 'УЗИ',
      description: 'Ультразвуковая диагностика органов и систем организма',
      image: '/images/services/yzi%20new.png',
      link: '/services/ultrasound'
    },
    {
      id: 'ct',
      title: 'КТ',
      description: 'Компьютерная томография для детальной визуализации внутренних органов',
      image: '/images/yslugi/KT.webp',
      link: '/services/ct'
    },
    {
      id: 'endoscopy',
      title: 'Эндоскопия',
      description: 'Исследование внутренних органов с помощью эндоскопических методов',
      image: '/images/services/Screenshot_1831.png',
      link: '/services/endoscopy'
    },
    {
      id: 'xray',
      title: 'Рентген',
      description: 'Рентгенографические исследования различных органов и систем',
      image: '/images/services/Screenshot_1830.png',
      link: '/services/xray'
    },
    {
      id: 'functional-diagnostics',
      title: 'Функциональная диагностика',
      description: 'Оценка функционального состояния органов и систем организма',
      image: '/images/services/Screenshot_1832.png',
      link: '/services/functional-diagnostics'
    }
  ];

  const advantages = [
    "Современное диагностическое оборудование экспертного класса",
    "Опытные врачи-диагносты с высокой квалификацией",
    "Точная и быстрая диагностика за 1 день",
    "Полный спектр диагностических услуг в одной клинике",
    "Индивидуальный подход к каждому пациенту",
    "Получение результатов в электронном виде"
  ];

  const indications = [
    "Плановая диагностика для профилактики заболеваний",
    "Диагностика при появлении симптомов",
    "Уточнение диагноза и контроль эффективности лечения",
    "Подготовка к хирургическим операциям",
    "Ежегодный профилактический осмотр",
    "Скрининговые программы для выявления заболеваний на ранней стадии",
    "Обследование по направлению врача",
    "Диагностика перед началом лечения",
    "Мониторинг хронических заболеваний",
    "Контроль после перенесенных заболеваний"
  ];

  const diagnosticMethods = [
    {
      category: 'Лучевая диагностика',
      methods: [
        'Рентгенография',
        'Компьютерная томография (КТ)',
        'Магнитно-резонансная томография (МРТ)',
        'Ультразвуковая диагностика (УЗИ)',
        'Сцинтиграфия'
      ]
    },
    {
      category: 'Эндоскопические исследования',
      methods: [
        'Гастроскопия',
      
        'Артроскопия'
      ]
    },
    {
      category: 'Функциональная диагностика',
      methods: [
        'Электрокардиография (ЭКГ)',
        'Суточное мониторирование ЭКГ',
        'Спирометрия',
        'Суточное мониторирование АД',
        'Реоэнцефалография'
      ]
    },
    {
      category: 'Лабораторная диагностика',
      methods: [
        'Общеклинические анализы',
        'Биохимические анализы',
        'Гормональные исследования',
        'Иммунологические анализы',
        'Микробиологические исследования'
      ]
    }
  ];

  const faqItems = [
    {
      question: "Какие виды диагностики доступны в клинике «Альтамед-С»?",
      answer: "Клиника «Альтамед-С» в Одинцово предоставляет полный спектр диагностических услуг: лучевая диагностика (рентген, КТ, УЗИ, МРТ), эндоскопические исследования (гастроскопия), функциональная диагностика (ЭКГ, спирометрия, мониторирование), лабораторные анализы всех видов. Все исследования проводятся на современном оборудовании экспертного класса."
    },
    {
      question: "Нужна ли подготовка перед диагностическими процедурами?",
      answer: "Подготовка зависит от вида исследования. Для большинства УЗИ и рентгена специальная подготовка не требуется. Для гастроскопии необходимо голодание 8-12 часов. Для лабораторных анализов часто нужно прийти натощак. Детальную инструкцию по подготовке вы получите при записи на исследование."
    },
    {
      question: "Как быстро можно получить результаты диагностики?",
      answer: "Сроки получения результатов зависят от вида исследования. Результаты УЗИ, ЭКГ, рентгена вы получаете сразу после процедуры. Результаты анализов крови готовы через 1-3 дня. Результаты сложных исследований, требующих описания врачом-рентгенологом или эндоскопистом, готовы в течение 1-2 рабочих дней. Все результаты доступны в электронном виде через личный кабинет."
    },
    {
      question: "Можно ли пройти диагностику без направления врача?",
      answer: "Да, в клинике «Альтамед-С» вы можете пройти большинство диагностических исследований без направления врача в рамках профилактических программ или для уточнения диагноза. Однако для некоторых сложных исследований (например, КТ с контрастом, эндоскопия под наркозом) может потребоваться консультация врача и направление. Все ограничения вам сообщат при записи на исследование."
    },
    {
      question: "Насколько безопасна диагностика для здоровья?",
      answer: "Все диагностические процедуры в клинике «Альтамед-С» проводятся на современном оборудовании, соответствующем международным стандартам безопасности. Лучевая нагрузка при рентгене и КТ минимизируется благодаря современным цифровым аппаратам. УЗИ и МРТ вообще не несут лучевой нагрузки. Перед исследованиями с контрастированием проводится оценка противопоказаний и аллергопробы. Все процедуры максимально безопасны для пациентов."
    },
    {
      question: "Работает ли клиника в выходные дни?",
      answer: "Да, клиника «Альтамед-С» в Одинцово работает в будние дни, выходные и праздничные дни. Время работы и доступность конкретных исследований по дням недели уточняйте при записи. Также доступна онлайн-запись через сайт клиники в любое удобное время."
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
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Диагностика</span>
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
              Диагностика в клинике «<span className="italic">Альтамед-с</span>» в Одинцово
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современные методы диагностики для точной постановки диагноза и контроля лечения
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/img diagnostika/diagnostics.webp"
                    alt="Диагностика в Одинцово"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/yslugi/Hardware diagnostics.webp';
                    }}
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Диагностические исследования</div>
                <Link 
                  href="/appointments" 
                  className="bg-blue-600 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-700 transition-colors"
                >
                  Записаться
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/img diagnostika/diagnostics.webp"
                  alt="Диагностика в Одинцово"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/yslugi/Hardware diagnostics.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Диагностика в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современные методы диагностики</p>
                <Link 
                  href="/appointments" 
                  className="bg-blue-600 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-700 transition-colors"
                >
                  Записаться на исследование
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Диагностические услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр диагностических исследований в клинике «Альтамед-С» в Одинцово
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnosticsServices.map((service) => (
              <Link key={service.id} href={service.link} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/yslugi/Hardware diagnostics.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Подробнее
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Диагностика в Одинцово: современные методы точной диагностики</h2>
          <div className="mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Диагностика</strong> — основа правильного лечения и сохранения здоровья. В медицинском центре «Альтамед-С» в Одинцово вы можете пройти полное диагностическое обследование с использованием современных высокоточных методов. Наша клиника оснащена передовым диагностическим оборудованием экспертного класса, позволяющим выявлять заболевания на самых ранних стадиях, когда лечение наиболее эффективно.
            </p>
       
            <p className="text-gray-700 mb-4 leading-relaxed">
              В клинике «Альтамед-С» диагностика проводится быстро, без очередей, в комфортных условиях. Результаты исследований выдаются в кратчайшие сроки, часто в день проведения исследования. Результаты доступны в электронном виде через личный кабинет пациента, что удобно для дистанционного консультирования с врачами и долгосрочного хранения медицинских данных.
            </p>
            <div className="bg-blue-50 rounded-[20px] p-6 shadow-md border-l-4 border-blue-600 mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Почему выбирают диагностику в клинике «Альтамед-С» в Одинцово?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Современное оборудование мировых лидеров медицинской техники (Siemens, Philips, Toshiba)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Опытные врачи-диагносты высшей категории с многолетним стажем</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Минимальная лучевая нагрузка благодаря современным цифровым технологиям</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Быстрое получение результатов — большинство исследований готово в день обращения</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Электронные результаты, доступные онлайн 24/7 через личный кабинет</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Доступные цены и удобная система записи через сайт или по телефону</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Methods */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Методы диагностики в клинике «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticMethods.map((category, idx) => (
              <div key={idx} className="bg-white rounded-[20px] p-6 shadow-md border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.methods.map((method, methodIdx) => (
                    <li key={methodIdx} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда необходима диагностика в Одинцово?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{indication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Преимущества диагностики в клинике «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation for diagnostics */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Подготовка к диагностическим исследованиям в Одинцово</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-[20px] p-8 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Подготовка к УЗИ в Одинцово</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Правильная подготовка к УЗИ обеспечивает высокую информативность исследования:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>УЗИ брюшной полости:</strong> голодание 6-8 часов, при вздутии — прием энтеросорбентов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>УЗИ органов малого таза:</strong> наполненный мочевой пузырь за 1 час до исследования</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>УЗИ щитовидной железы, суставов:</strong> специальная подготовка не требуется</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-[20px] p-8 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Подготовка к лабораторным анализам</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                От соблюдения правил подготовки зависит точность результатов анализов:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Общий анализ крови, биохимия:</strong> сдача натощак (8-12 часов голодания)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Гормональные исследования:</strong> с учетом дня менструального цикла (для женщин)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Анализ мочи:</strong> утренняя порция, предварительный туалет наружных половых органов</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular diagnostic studies */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Популярные диагностические исследования в Одинцово</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ внутренних органов</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ультразвуковое исследование органов брюшной полости (печень, желчный пузырь, поджелудочная железа, селезенка, почки) — одно из самых востребованных исследований в клинике «Альтамед-С» в Одинцово. Безопасный, быстрый и информативный метод диагностики.
              </p>
              <Link href="/services/ultrasound" className="text-blue-600 hover:text-blue-700 font-medium">
                Подробнее об УЗИ →
              </Link>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Компьютерная томография</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                КТ с контрастированием и без для точной визуализации внутренних органов, сосудов, суставов. В клинике «Альтамед-С» в Одинцово КТ проводится на современном мультиспиральном томографе с минимальной лучевой нагрузкой.
              </p>
              <Link href="/services/ct" className="text-blue-600 hover:text-blue-700 font-medium">
                Подробнее о КТ →
              </Link>
            </div>
       
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Часто задаваемые вопросы о диагностике в Одинцово</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden border border-blue-100">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
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

