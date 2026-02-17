"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import AppointmentForm from '@/components/AppointmentForm';

export default function MassagePage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const indications = [
    "Заболевания опорно-двигательного аппарата",
    "Остеохондроз и межпозвонковые грыжи",
    "Сколиоз и нарушение осанки",
    "Хроническая усталость и напряжение",
    "Головные боли напряжения",
    "Спортивные травмы и их реабилитация",
    "Проблемы с кровообращением",
    "Реабилитация после операций",
    "Стресс и эмоциональное напряжение",
    "Мышечные спазмы и триггерные точки",
    "Артриты и артрозы",
    "Плоскостопие и проблемы со стопами"
  ];

  const typesOfMassage = [
    "Классический лечебный массаж",
    "Массаж спины и шейно-воротниковой зоны",
    "Массаж нижних и верхних конечностей",
    "Точечный массаж (акупрессура)",
    "Спортивный массаж",
    "Релаксирующий массаж"
  ];

  const faqItems = [
    {
      question: "Как часто можно делать массаж?",
      answer: "Частота массажа зависит от показаний. При острых состояниях может требоваться ежедневный массаж, при хронических - 2-3 раза в неделю. Для профилактики достаточно 1-2 раз в месяц."
    },
    {
      question: "Нужна ли подготовка к массажу?",
      answer: "Рекомендуется не есть за 1-2 часа до массажа, принять душ. Важно сообщить массажисту о наличии травм, операций, аллергий и других особенностях здоровья."
    },
    {
      question: "Больно ли делать массаж?",
      answer: "Лечебный массаж может быть немного неприятным при проработке триггерных точек, но не должен причинять острую боль. Обо всех неприятных ощущениях нужно сообщать массажисту."
    },
    {
      question: "Какие есть противопоказания для массажа?",
      answer: "Массаж противопоказан при острых лихорадочных состояниях, воспалительных процессах, онкологических заболеваниях, тромбозах, кожных заболеваниях в острой фазе. Окончательное решение принимает врач."
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Массаж</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Массаж в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Профессиональный лечебный массаж в Одинцово
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-purple-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/yslugi/massaj.webp"
                    alt="Массаж"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Лечебный массаж</div>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-purple-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-purple-600 transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Десктопная версия */}
            <div className="hidden md:block h-[445px] bg-purple-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/yslugi/massaj.webp"
                  alt="Массаж в Одинцово"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Массаж в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональный лечебный и расслабляющий массаж</p>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-purple-500 text-white rounded-full px-8 py-3 font-medium hover:bg-purple-600 transition-colors"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Опытные массажисты с медицинским образованием
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
                Различные виды массажа по показаниям
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
                Комфортные кабинеты и качественные масла
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
                Индивидуальный подход к каждому пациенту
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Показания */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Показания к массажу
          </h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Лечебный массаж оказывает комплексное воздействие на организм: улучшает кровообращение, снимает мышечное напряжение, уменьшает боль, нормализует работу нервной системы и способствует общему оздоровлению.
            </p>
            <p className="text-gray-600">
              Наши специалисты подберут оптимальный вид массажа в зависимости от ваших показаний и состояния здоровья.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{indication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Виды массажа */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Виды массажа
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {typesOfMassage.map((type, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Price List */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Прайс-лист услуг массажа в Одинцово
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center max-w-3xl mx-auto">
            Обратите внимание: цены на услуги могут меняться. Рекомендуем уточнять актуальную стоимость в регистратуре или по телефону{' '}
            <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные цены не являются офертой.
          </p>
          <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                { code: "A21.01.001", name: "Общий массаж медицинский", price: 5040 },
                { code: "A21.01.002", name: "Массаж лица медицинский", price: 840 },
                { code: "A21.01.003", name: "Массаж шеи медицинский", price: 840 },
                { code: "A21.01.004", name: "Массаж рук медицинский", price: 1370 },
                { code: "A21.01.005", name: "Массаж волосистой части головы медицинский", price: 840 },
                { code: "A21.01.006.01", name: "Пилинг-массаж (тело)", price: 2420 },
                { code: "A21.01.007", name: "Вакуумный массаж кожи", price: 840 },
                { code: "A21.01.008", name: "Массаж ног медицинский", price: 1680 },
                { code: "A21.03.001", name: "Массаж при переломе костей", price: 1370 },
                { code: "A21.03.002", name: "Массаж при заболеваниях позвоночника", price: 1680 },
                { code: "A21.03.005", name: "Скелетное вытяжение", price: 1680 },
                { code: "A21.05.002", name: "Массаж при заболеваниях органов системы кровотворения и крови", price: 1680 },
                { code: "A21.09.002", name: "Массаж при хронических неспецифических заболеваниях легких", price: 1050 },
                { code: "A21.24.003", name: "Вытяжение при заболеваниях периферической нервной системы", price: 1680 },
                { code: "A21.24.004", name: "Массаж при заболеваниях периферической нервной системы", price: 1370 },
                { code: "A21.30.001", name: "Массаж живота медицинский", price: 840 },
                { code: "A21.30.002", name: "Массаж и гимнастика у детей раннего возраста", price: 1790 },
                { code: "A21.30.003", name: "Массаж при заболеваниях нервной системы у детей раннего возраста", price: 1790 },
                { code: "A21.30.004", name: "Массаж при заболеваниях опорно-двигательного аппарата у детей раннего возраста", price: 1790 },
                { code: "A21.30.005", name: "Массаж грудной клетки медицинский", price: 1050 },
                { code: "A21.01.003.001", name: "Массаж воротниковой области", price: 1260 },
                { code: "A21.01.004.01", name: "Массаж верхней конечности медицинский", price: 1260 },
                { code: "A21.01.004.001", name: "Массаж верхней конечности, надплечья и области лопатки", price: 1370 },
                { code: "A21.01.004.002", name: "Массаж плечевого сустава", price: 840 },
                { code: "A21.01.004.003", name: "Массаж локтевого сустава", price: 840 },
                { code: "A21.01.004.004", name: "Массаж лучезапястного сустава", price: 840 },
                { code: "A21.01.004.005", name: "Массаж кисти и предплечья", price: 840 },
                { code: "A21.01.009", name: "Массаж нижней конечности медицинский", price: 1260 },
                { code: "A21.01.009.001", name: "Массаж нижней конечности и поясницы", price: 1370 },
                { code: "A21.01.009.002", name: "Массаж тазобедренного сустава и ягодичной области", price: 840 },
                { code: "A21.01.009.003", name: "Массаж коленного сустава", price: 840 },
                { code: "A21.01.009.004", name: "Массаж голеностопного сустава", price: 840 },
                { code: "A21.01.009.005", name: "Массаж стопы и голени", price: 840 },
                { code: "A21.03.002.001", name: "Массаж пояснично-крестцовой области", price: 1580 },
                { code: "A21.03.002.002", name: "Сегментарный массаж пояснично-крестцовой области", price: 1260 },
                { code: "A21.03.002.003", name: "Сегментарный массаж шейно-грудного отдела позвоночника", price: 2210 },
                { code: "A21.03.002.004", name: "Массаж пояснично-крестцового отдела позвоночника", price: 1580 },
                { code: "A21.03.002.004.01", name: "Массаж поясничного отдела позвоночника 1 ед.", price: 950 },
                { code: "A21.03.002.005", name: "Массаж шейно-грудного отдела позвоночника", price: 1580 },
                { code: "A21.03.002.005.01", name: "Массаж грудного отдела позвоночника 1ед.", price: 950 },
                { code: "A21.03.007", name: "Массаж спины медицинский", price: 1260 }
              ].map((service) => (
                <div
                  key={service.code}
                  className="flex flex-col p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      {service.code && (
                        <div className="text-xs text-gray-500 mb-1">{service.code}</div>
                      )}
                      <span className="text-gray-700 font-medium text-sm leading-tight">
                        {service.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold text-emerald-600 text-base whitespace-nowrap">
                      {service.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors inline-block">
                Записаться на консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-purple-500 transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems.includes(index) && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}

