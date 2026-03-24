"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from '@/components/AppointmentForm';

export default function RehabilitationPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const rehabilitationServices = [
    {
      id: 'psychology',
      title: 'Психология',
      description: 'Профессиональная психологическая помощь, консультирование и поддержка',
      image: '/images/yslugi/psychology.webp',
      link: '/services/psychology'
    },
    {
      id: 'psychotherapy',
      title: 'Психотерапия',
      description: 'Комплексное лечение психических расстройств и психологических проблем',
      image: '/images/yslugi/psychotherapy.webp',
      link: '/services/psychotherapy'
    },
    {
      id: 'carboxytherapy',
      title: 'Карбокситерапия',
      description: 'Инновационный метод лечения с использованием углекислого газа',
      image: '/images/yslugi/Carboxytherapy.webp',
      link: '/services/carboxytherapy'
    },
    {
      id: 'osteopathy',
      title: 'Остеопатия',
      description: 'Холистический подход к лечению заболеваний опорно-двигательного аппарата',
      image: '/images/yslugi/Osteopathy.webp',
      link: '/services/osteopathy'
    },
    {
      id: 'physiotherapy',
      title: 'Физиотерапия',
      description: 'Физические методы лечения с использованием современных аппаратов',
      image: '/images/yslugi/fizio.webp',
      link: '/services/physiotherapy'
    },
    {
      id: 'family-psychology',
      title: 'Семейная психология',
      description: 'Решение семейных конфликтов и улучшение взаимоотношений',
      image: '/images/yslugi/family-psychology.webp',
      link: '/services/family-psychology'
    },
    {
      id: 'massage',
      title: 'Массаж',
      description: 'Классический и лечебный массаж для восстановления организма',
      image: '/images/yslugi/massage.webp',
      link: '/services/massage'
    },
    {
      id: 'vacuum-massage',
      title: 'Вакуумный массаж',
      description: 'Массаж с использованием вакуумных банок для лимфодренажа',
      image: '/images/yslugi/vacuum-massage.webp',
      link: '/services/vacuum-massage'
    },
    {
      id: 'bioresonance',
      title: 'Биорезонансная терапия',
      description: 'Безмедикаментозное лечение методом биорезонанса',
      image: '/images/yslugi/bioresonance.webp',
      link: '/services/bioresonance'
    },
    {
      id: 'shockwave-therapy',
      title: 'Ударно-волновая терапия',
      description: 'Лечение заболеваний суставов и позвоночника ударными волнами',
      image: '/images/yslugi/shockwave.webp',
      link: '/services/shockwave-therapy'
    }
  ];

  const advantages = [
    "Комплексный подход к восстановлению здоровья",
    "Индивидуальный подбор методов реабилитации",
    "Опытные специалисты с многолетним стажем",
    "Современное оборудование экспертного класса",
    "Удобное расположение в центре Одинцово",
    "Мягкое воздействие без побочных эффектов"
  ];

  const indications = [
    "Восстановление после травм и операций",
    "Хронические боли в спине и суставах",
    "Нарушения осанки и сколиоз",
    "Стресс и эмоциональное выгорание",
    "Семейные конфликты и проблемы в отношениях",
    "Последствия инсульта и неврологических заболеваний",
    "Спаечные процессы и рубцы",
    "Проблемы с координацией движений",
    "Снижение иммунитета и частые простуды",
    "Функциональные нарушения органов"
  ];

  const faqItems = [
    {
      question: "Что включает в себя программа реабилитации?",
      answer: "Программа реабилитации в клинике «Альтамед-С» включает комплексный подход: диагностику состояния пациента, индивидуальный подбор методов реабилитации, курс процедур с использованием современных методов (физиотерапия, массаж, остеопатия, психологическая поддержка), контроль эффективности и корректировку программы при необходимости."
    },
    {
      question: "Сколько длится курс реабилитации?",
      answer: "Длительность курса реабилитации зависит от состояния пациента, диагноза и выбранных методов лечения. Обычно курс составляет от 10 до 20 процедур с частотой 2-3 раза в неделю. Точный план реабилитации врач составляет после первичной консультации и обследования."
    },
    {
      question: "Можно ли совмещать разные методы реабилитации?",
      answer: "Да, в клинике «Альтамед-С» практикуется комплексный подход к реабилитации. Врач может назначить комбинацию различных методов: например, физиотерапию с массажем, остеопатию с психологической поддержкой, ударно-волновую терапию с лечебной физкультурой. Все методы подбираются индивидуально для максимальной эффективности."
    },
    {
      question: "Нужна ли подготовка к реабилитационным процедурам?",
      answer: "Для большинства процедур специальная подготовка не требуется. Рекомендуется приходить в удобной одежде, не переедать за 1-2 часа до процедуры. Для некоторых видов массажа и физиотерапии врач может порекомендовать предварительные меры, о которых вас предупредят при записи."
    },
    {
      question: "Можно ли проходить реабилитацию параллельно с лекарственным лечением?",
      answer: "Да, реабилитационные процедуры часто назначаются в комплексе с медикаментозным лечением для ускорения восстановления и снижения дозы лекарств. Реабилитационные методы улучшают кровоснабжение, обмен веществ, способствуют рассасыванию воспалений. Обязательно сообщите врачу о всех принимаемых препаратах."
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Реабилитация</span>
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
              Реабилитация в клинике «<span className="italic">Альтамед-с</span>» в Одинцово
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Комплексное восстановление здоровья с использованием современных методов реабилитации
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/yslugi/rehabilitation.webp"
                    alt="Реабилитация в Одинцово"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/yslugi/yrolog.webp';
                    }}
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Реабилитационные программы</div>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-purple-600 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-purple-700 transition-colors"
                >
                  Записаться
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/yslugi/rehabilitation.webp"
                  alt="Реабилитация в Одинцово"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/yslugi/yrolog.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Реабилитация в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Комплексное восстановление здоровья</p>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-purple-600 text-white rounded-full px-8 py-3 font-medium hover:bg-purple-700 transition-colors"
                >
                  Записаться на консультацию
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
              Направления реабилитации
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр реабилитационных услуг в клинике «Альтамед-С» в Одинцово
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rehabilitationServices.map((service) => (
              <Link key={service.id} href={service.link} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/yslugi/yrolog.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-medium">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Реабилитация в Одинцово: комплексное восстановление здоровья</h2>
          <div className="mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Реабилитация</strong> — это комплекс медицинских, психологических, социальных мероприятий, направленных на восстановление и поддержание здоровья человека после перенесенных заболеваний, травм, операций или при хронических состояниях. В медицинском центре «Альтамед-С» в Одинцово реабилитация проводится по современным протоколам с использованием передовых методов и технологий.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Наша клиника предлагает широкий спектр реабилитационных услуг: физиотерапию для восстановления функций опорно-двигательного аппарата, психологическую и психотерапевтическую помощь для решения эмоциональных и психических проблем, остеопатию для комплексного воздействия на организм, массаж и вакуумный массаж для улучшения кровообращения и лимфодренажа, биорезонансную терапию для безмедикаментозного лечения, ударно-волновую терапию для лечения заболеваний суставов и позвоночника.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Отличительной особенностью реабилитации в клинике «Альтамед-С» является индивидуальный подход к каждому пациенту. Врач-реабилитолог проводит комплексное обследование, оценивает функциональное состояние, выявляет проблемы и составляет персональную программу восстановления. Реабилитация учитывает особенности пациента, его образ жизни, сопутствующие заболевания и цели лечения.
            </p>
            <div className="bg-purple-50 rounded-[20px] p-6 shadow-md border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Принципы реабилитации в клинике «Альтамед-С»:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Комплексный многофакторный подход — сочетание различных методов реабилитации</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Раннее начало реабилитации — максимальная эффективность восстановления</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Индивидуальный подход — программа разрабатывается персонально для каждого пациента</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Поэтапность — постепенное увеличение нагрузки и сложности упражнений</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Непрерывность — регулярные занятия и контроль динамики</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Активное участие пациента — обучение навыкам самоконтроля и самопомощи</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Показания к реабилитации в Одинцово</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{indication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Преимущества реабилитации в клинике «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is rehabilitation */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Что такое реабилитация и кому она нужна?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[20px] p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Виды реабилитации</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Реабилитация в клинике «Альтамед-С» включает несколько основных направлений:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Медицинская реабилитация</strong> — восстановление нарушенных функций организма с помощью физиотерапии, массажа, ЛФК</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Психологическая реабилитация</strong> — помощь при стрессах, депрессиях, психологических травмах</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Социальная реабилитация</strong> — восстановление социальных связей и адаптация в обществе</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Кому нужна реабилитация?</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Реабилитация необходима в различных ситуациях:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>После травм и операций</strong> — восстановление двигательных функций, устранение болей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>При хронических заболеваниях</strong> — поддержание качества жизни, замедление прогрессирования</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>При психологических проблемах</strong> — коррекция эмоционального состояния, стрессоустойчивость</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Для профилактики</strong> — предотвращение развития заболеваний, укрепление здоровья</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Часто задаваемые вопросы о реабилитации в Одинцово</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden border border-purple-100">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-purple-600 transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
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

