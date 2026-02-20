"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from '@/components/AppointmentForm';

export default function PregnancyScreeningPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const screenings = [
    {
      trimester: "Первый скрининг",
      weeks: "11-14 недель",
      description: "УЗИ плода и биохимический анализ крови. Оценка риска хромосомных аномалий."
    },
    {
      trimester: "Второй скрининг",
      weeks: "18-21 неделя",
      description: "УЗИ для оценки анатомии плода, диагностики пороков развития."
    },
    {
      trimester: "Третий скрининг",
      weeks: "30-34 недели",
      description: "Оценка роста и развития плода, плаценты, количества околоплодных вод."
    }
  ];

  const indications = [
    "Подтверждение беременности",
    "Оценка сроков беременности",
    "Выявление аномалий развития плода",
    "Контроль роста и развития плода",
    "Оценка состояния плаценты",
    "Определение пола ребенка",
    "Двойня или многоплодная беременность",
    "Наблюдение за состоянием матери",
    "Подготовка к родам",
    "Оценка предлежания плода"
  ];

  const advantages = [
    "Безопасность для матери и плода",
    "Высокая точность диагностики",
    "Раннее выявление патологий",
    "Профессиональная расшифровка результатов",
    "Психологический комфорт"
  ];

  const faqItems = [
    {
      question: "Когда нужно делать первый скрининг?",
      answer: "Первый скрининг рекомендуется проводить на сроке 11-14 недель беременности. Он включает УЗИ плода и биохимический анализ крови матери для оценки риска хромосомных аномалий."
    },
    {
      question: "Безопасно ли УЗИ при беременности?",
      answer: "Да, ультразвуковое исследование абсолютно безопасно для беременной женщины и плода. УЗИ не использует ионизирующее излучение. ВОЗ и международные организации здравоохранения рекомендуют плановые УЗИ-скрининги во время беременности."
    },
    {
      question: "Как часто можно делать УЗИ при беременности?",
      answer: "Плановые скрининги проводятся трижды за беременность (по одному в каждом триместре). Дополнительные УЗИ врач может назначить при необходимости (например, для контроля состояния матери или плода)."
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Скрининг при беременности</span>
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
              Скрининг при беременности в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Комплексное наблюдение беременности в Одинцово
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-[#E91E63] relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/services/Screenshot_1835.png"
                    alt="Скрининг при беременности"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Скрининг при беременности</div>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#E91E63] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-[#d11a56] transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-[#E91E63] relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/services/Screenshot_1835.png"
                  alt="Скрининг при беременности в Одинцово"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Скрининг при беременности</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Безопасное наблюдение за развитием малыша</p>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#E91E63] text-white rounded-full px-8 py-3 font-medium hover:bg-[#d11a56] transition-colors"
                >
                  Консультация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Три скрининга */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Плановые скрининги беременности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {screenings.map((screening, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-xl font-semibold text-[#E91E63] mb-2">{screening.trimester}</h3>
                <p className="text-sm text-gray-600 mb-3 font-medium">{screening.weeks}</p>
                <p className="text-gray-700">{screening.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему Альтамед-С*/}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему «Альтамед-С»?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">Экспертное УЗИ-оборудование</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">Опытные акушеры-гинекологи</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">Комфортная атмосфера</p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Скрининг при беременности</h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Скрининг при беременности - это комплексное обследование, направленное на выявление возможных рисков и аномалий развития плода на разных сроках беременности.
            </p>
            <p className="text-gray-600">
              В нашей клинике вы можете пройти все необходимые скрининговые исследования с использованием современного оборудования. Мы обеспечиваем внимательное наблюдение за здоровьем будущей мамы и малыша.
            </p>
          </div>
        </div>
      </section>

      {/* Показания */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда назначают скрининг</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Преимущества скрининга</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#E91E63] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className={`w-5 h-5 text-[#E91E63] transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
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

