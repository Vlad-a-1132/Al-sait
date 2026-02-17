"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import AppointmentForm from '@/components/AppointmentForm';

export default function ShockwaveTherapyPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const indications = [
    "Плантарный фасциит (пяточная шпора)",
    "Эпикондилит (локоть теннисиста и гольфиста)",
    "Ахиллодиния (боли в ахилловом сухожилии)",
    "Кальцифицирующий тендинит плеча",
    "Хронические боли в мышцах и сухожилиях",
    "Патологии тазобедренного и коленного суставов",
    "Синдром «замороженного плеча»",
    "Боли в спине и шее",
    "Костные мозоли и ложные суставы",
    "Триггерные точки и мышечные спазмы",
    "Спортивные травмы",
    "Посттравматическая реабилитация"
  ];

  const benefits = [
    "Быстрое устранение боли",
    "Активация регенерации тканей",
    "Улучшение микроциркуляции",
    "Разрушение кальцификатов",
    "Снижение мышечного напряжения",
    "Немедикаментозное лечение"
  ];

  // Услуги УВТ по прайсу (коды и цены актуальны)
  const shockwaveServices = [
    { code: "A22.30.015", name: "Ударно-волновая терапия", price: "2 940 руб." },
    { code: "A22.30.015.002", name: "Ударно-волновая терапия 2 категории", price: "5 250 руб." },
    { code: "A22.30.015.003", name: "Ударно-волновая терапия 3 категории", price: "6 830 руб." },
    { code: "A22.30.015.004", name: "Ударно-волновая терапия 4 категории", price: "9 140 руб." }
  ];

  const faqItems = [
    {
      question: "Как работает ударно-волновая терапия?",
      answer: "УВТ использует акустические волны низкой частоты, которые проникают в ткани и стимулируют процессы регенерации. Волны разрушают патологические образования (кальцификаты, фиброзные тяжи), улучшают кровообращение и запускают естественные механизмы заживления."
    },
    {
      question: "Больно ли делать УВТ?",
      answer: "Процедура может быть немного болезненной, особенно при работе с очагами хронической боли. Неприятные ощущения обычно терпимые и связаны с воздействием волн на пораженные ткани. Интенсивность можно регулировать."
    },
    {
      question: "Сколько нужно процедур УВТ?",
      answer: "Обычно требуется 3-7 процедур с интервалом 3-7 дней. Частота и количество сеансов определяется врачом индивидуально в зависимости от диагноза и степени поражения."
    },
    {
      question: "Какие есть противопоказания?",
      answer: "УВТ противопоказана при беременности, онкологии, острых инфекциях, тромбозах, нарушениях свертываемости крови, в области легких и кишечника. Не применяется на открытых ранах и воспаленной коже."
    },
    {
      question: "Когда наступает эффект от УВТ?",
      answer: "Первые результаты могут ощущаться уже после 1-2 процедур в виде уменьшения боли. Полный эффект развивается постепенно в течение курса лечения и может длиться до 6-12 месяцев."
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Ударно-волновая терапия</span>
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
              Ударно-волновая терапия в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Эффективное лечение без операции
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-purple-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/yslugi/yrolog.webp"
                    alt="Ударно-волновая терапия"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Ударно-волновая терапия</div>
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
                  src="/images/yslugi/yrolog.webp"
                  alt="Ударно-волновая терапия в Одинцово"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Ударно-волновая терапия в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современный метод лечения хронических болей и патологий опорно-двигательного аппарата</p>
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
                Современное оборудование для УВТ
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
                Опытные специалисты по УВТ-терапии
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
                Быстрый эффект и длительный результат
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
                Альтернатива хирургическому лечению
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги УВТ */}
      <section className="py-16 bg-white" aria-labelledby="shockwave-services-heading">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="text-center mb-8">
            <h2 id="shockwave-services-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Ударно-волновая терапия — услуги и цены
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Цены носят справочный характер. Актуальную стоимость уточняйте в регистратуре или по телефону{' '}
              <a href="tel:+74952554450" className="text-purple-600 hover:underline font-medium">+7 (495) 255-44-50</a>.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Ударно-волновая терапия</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shockwaveServices.map((service) => (
                  <div
                    key={service.code}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-gray-500 font-mono block mb-1">{service.code}</span>
                        <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                          {service.name}
                        </h4>
                        <div className="text-purple-600 font-semibold text-lg">
                          {service.price}
                        </div>
                      </div>
                      <Link
                        href="https://online.altamed-c.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 bg-purple-600 text-white px-3 py-1 rounded-md text-sm hover:bg-purple-700 transition-colors duration-300 flex-shrink-0"
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
      </section>

      {/* Показания */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Показания к ударно-волновой терапии
          </h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Ударно-волновая терапия (УВТ) - это современный неинвазивный метод лечения хронических болей и патологий опорно-двигательного аппарата. Акустические волны низкой частоты проникают в ткани, стимулируя процессы регенерации и разрушая патологические образования.
            </p>
            <p className="text-gray-600">
              УВТ эффективна при лечении плантарного фасциита, эпикондилита, хронических тендинитов, спаечных процессов и многих других состояний, часто позволяя избежать хирургического вмешательства.
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

      {/* Преимущества */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Преимущества УВТ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
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

