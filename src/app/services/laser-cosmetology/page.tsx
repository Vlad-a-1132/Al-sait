'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function LaserCosmetologyPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Услуги лазерной косметологии разделенные на категории
  const laserCosmetologyServices = [
    {
      category: "Популярные услуги",
      services: [
        { name: "Фотоомоложение фототерапия 1 процедура", price: "8 000 руб." },
        { name: "Лазерная эпиляция ноги полностью", price: "5 500 руб." },
        { name: "Лазерная эпиляция спина", price: "9 500 руб." },
        { name: "Лазерная эпиляция плечи", price: "5 000 руб." },
        { name: "Эпиляция 3-х зон (подмышки, голени, классич.бикини)", price: "5 000 руб." },
        { name: "Фотодинамическая терапия при заболеваниях кожи 1 процедура", price: "5 000 руб." },
        { name: "Лазерная эпиляция лицо полностью", price: "3 500 руб." },
        { name: "Лазерная эпиляция руки полностью", price: "4 000 руб." },
        { name: "Лазерная эпиляция живот", price: "4 000 руб." },
        { name: "Лазерная эпиляция бёдра включая колени", price: "4 000 руб." }
      ]
    },
    {
      category: "Фототерапия и фотоомоложение",
      services: [
        { name: "Фотоокоагуляция щек", price: "3 000 руб." },
        { name: "Фотоокоагуляция сосудов (микрогемангиом, телеангиэктазий - 1 импульс)", price: "530 руб." },
        { name: "Фотоомоложение фототерапия 1 процедура", price: "8 000 руб." },
        { name: "Фотодинамическая терапия при заболеваниях кожи 1 процедура", price: "5 000 руб." },
        { name: "Фотоокоагуляция сосудов (крыльев носа)", price: "1 500 руб." },
        { name: "Фотоокоагуляция сосудов (носа полностью)", price: "2 500 руб." }
      ]
    },
    {
      category: "Удаление татуировок",
      services: [
        { name: "Удаление татуировки 1х1", price: "2 000 руб." },
        { name: "Удаление татуировки 2x2", price: "2 500 руб." },
        { name: "Удаление татуировки 3х3", price: "3 500 руб." },
        { name: "Удаление татуировки 4x4", price: "4 500 руб." },
        { name: "Удаление татуировки 5х5", price: "5 500 руб." },
        { name: "Удаление татуировки 6х6", price: "6 500 руб." },
        { name: "Удаление татуировки 7x7", price: "7 000 руб." },
        { name: "Удаление татуировки 8x8", price: "7 500 руб." },
        { name: "Удаление татуировки 9x9", price: "7 800 руб." },
        { name: "Удаление татуировки 10х10", price: "8 000 руб." },
        { name: "Удаление татуировки 11x11", price: "8 900 руб." },
        { name: "Удаление татуировки 12x12", price: "9 000 руб." }
      ]
    },
    {
      category: "Лазерная эпиляция лица",
      services: [
        { name: "Лазерная эпиляция борода", price: "1 400 руб." },
        { name: "Лазерная эпиляция лицо полностью", price: "3 500 руб." },
        { name: "Лазерная эпиляция баки с двух сторон", price: "2 000 руб." },
        { name: "Лазерная эпиляция верхняя губа", price: "1 000 руб." },
        { name: "Лазерная эпиляция подбородок", price: "1 000 руб." }
      ]
    },
    {
      category: "Лазерная эпиляция тела",
      services: [
        { name: "Лазерная эпиляция декольте", price: "3 500 руб." },
        { name: "Лазерная эпиляция подмышечные области", price: "2 000 руб." },
        { name: "Лазерная эпиляция шея сзади", price: "1 500 руб." },
        { name: "Лазерная эпиляция плечи", price: "5 000 руб." },
        { name: "Лазерная эпиляция предплечья", price: "2 500 руб." },
        { name: "Лазерная эпиляция руки выше локтя", price: "3 000 руб." },
        { name: "Лазерная эпиляция руки полностью", price: "4 000 руб." },
        { name: "Кистей и пальцев рук", price: "2 000 руб." },
        { name: "Лазерная эпиляция ареолы молочных желез", price: "1 800 руб." },
        { name: "Лазерная эпиляция спина", price: "9 500 руб." },
        { name: "Лазерная эпиляция крестец", price: "3 000 руб." },
        { name: "Лазерная эпиляция живот", price: "4 000 руб." },
        { name: "Лазерная эпиляция живот белая линия", price: "2 000 руб." }
      ]
    },
    {
      category: "Лазерная эпиляция ног",
      services: [
        { name: "Лазерная эпиляция бикини тотальное", price: "3 000 руб." },
        { name: "Лазерная эпиляция бикини классическое", price: "2 300 руб." },
        { name: "Лазерная эпиляция ягодицы", price: "4 000 руб." },
        { name: "Лазерная эпиляция меж ягодичная впадина", price: "1 200 руб." },
        { name: "Лазерная эпиляция бёдра включая колени", price: "4 000 руб." },
        { name: "Лазерная эпиляция голени включая колени", price: "3 200 руб." },
        { name: "Лазерная эпиляция подъемы стоп", price: "500 руб." },
        { name: "Лазерная эпиляция пальцы ног", price: "300 руб." },
        { name: "Лазерная эпиляция ноги полностью", price: "5 500 руб." }
      ]
    },
    {
      category: "Комплексные процедуры",
      services: [
        { name: "Эпиляция 3-х зон (подмышки, голени, классич.бикини)", price: "5 000 руб." },
        { name: "Эпиляция 2-х зон (подмышки, классич.бикини)", price: "3 500 руб." },
        { name: "Лазерная эпиляция плеч и предплечий", price: "3 900 руб." },
        { name: "Лазерная эпиляция ушные раковины", price: "800 руб." }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <span className="text-gray-900">Лазерная косметология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Лазерная косметология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Профессиональные процедуры лазерной эпиляции, фотоомоложения и удаления татуировок в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/images allergoly/lazer kosmet.webp"
                    alt="Лазерная косметология"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Лазерная косметология</div>
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
                  src="/images/images allergoly/lazer kosmet.webp"
                  alt="Лазерная косметология"
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
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Лазерная косметология</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современные методы красоты и омоложения</p>
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед-С»?</h2>
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span></div><p className="text-gray-700 font-medium text-left pt-2">Лечение в соответствии с мировыми клиническими рекомендациями</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span></div><p className="text-gray-700 font-medium text-left pt-2">Комплексная оценка заболевания и прогноза лечения</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span></div><p className="text-gray-700 font-medium text-left pt-2">Современное диагностическое оборудование и собственная диагностическая лаборатория</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span></div><p className="text-gray-700 font-medium text-left pt-2">Высокий уровень сервиса и взвешенная ценовая политика</p></div>
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span></div><p className="text-gray-700 font-medium">Лечение в соответствии с мировыми клиническими рекомендациями</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span></div><p className="text-gray-700 font-medium">Комплексная оценка заболевания и прогноза лечения</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span></div><p className="text-gray-700 font-medium">Современное диагностическое оборудование и собственная диагностическая лаборатория</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span></div><p className="text-gray-700 font-medium">Высокий уровень сервиса и взвешенная ценовая политика</p></div>
          </div>
        </div>
      </section>

      <div className="flex-1">
        {/* Services Section */}
        <section className="py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
              Лазерная косметология в Одинцово - услуги лазерной эпиляции и косметологических процедур
            </h2>
            
            <div className="space-y-12" itemScope itemType="https://schema.org/ItemList">
              {laserCosmetologyServices.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-200">
                    <h3 className="text-xl font-semibold text-emerald-800">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <article
                          key={serviceIndex}
                          className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                          itemScope
                          itemType="https://schema.org/MedicalProcedure"
                        >
                          <h4 className="font-medium text-gray-900 mb-2 text-sm leading-relaxed" itemProp="name">
                            {service.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="text-emerald-600 font-semibold" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                              <span itemProp="price">{service.price}</span>
                              <span itemProp="priceCurrency" content="RUB" className="sr-only">RUB</span>
                            </span>
                            <Link 
                              href="https://online.altamed-c.ru/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
                            >
                              Записаться
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Лазерная косметология в Одинцово - современные методы красоты и омоложения
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Лазерная косметология в Одинцово - это современное направление эстетической медицины, которое использует лазерные технологии для решения различных косметологических задач. 
                  В клинике «Альтамед-с» в Одинцово проводятся профессиональные процедуры лазерной эпиляции, фотоомоложения, удаления татуировок, фотоокоагуляции сосудов и других косметологических процедур. 
                  Среди наших специалистов работают высококвалифицированные косметологи с многолетним стажем работы и глубокими знаниями в области лазерных технологий. 
                  Для получения качественной косметологической помощи в Одинцово и Московской области рекомендуем обратиться именно в «Альтамед-с».
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Лазерная косметология в Одинцово позволяет решать множество эстетических проблем: удаление нежелательных волос, омоложение кожи, удаление пигментных пятен, лечение сосудистых образований, удаление татуировок и многое другое. 
                  Современные лазерные технологии обеспечивают высокую эффективность процедур при минимальном дискомфорте и коротком периоде восстановления. 
                  Наиболее эффективным решением станет обращение к опытному косметологу в «Альтамед-с» в Одинцово. 
                  Наши специалисты проведут консультацию, подберут оптимальную программу процедур, проведут лечение с использованием современного оборудования и дадут рекомендации по уходу за кожей.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/images allergoly/lazer kosmet.webp" 
                  alt="Лазерная косметология" 
                  className="w-full h-auto rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reasons for consultation */}
        <section className="py-16 bg-gray-50" aria-labelledby="reasons-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Когда нужна лазерная косметология в Одинцово - показания к процедурам
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">удаление нежелательных волос;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">омоложение кожи лица и тела;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">удаление пигментных пятен;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">лечение сосудистых звездочек;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">удаление татуировок;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">удаление родинок и папиллом;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">лечение рубцов и шрамов;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">улучшение тонуса кожи;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">лечение акне и постакне;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">удаление растяжек;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">лечение гиперпигментации;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">профилактические процедуры.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive sections */}
        <section className="py-16 bg-white" aria-labelledby="faq-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Часто задаваемые вопросы о лазерной косметологии в Одинцово
            </h2>
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              <div className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                  aria-expanded={openAccordion === 1}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setOpenAccordion(openAccordion === 1 ? null : 1)}
                >
                  <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                    Лазерная эпиляция
                  </h3>
                  <div className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 1 ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                
                {openAccordion === 1 && (
                  <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div className="space-y-4 text-gray-700" itemProp="text">
                      <p>
                        Лазерная эпиляция - это современный метод удаления нежелательных волос с использованием лазерного излучения:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Принцип действия</h4>
                          <p>
                            Лазерный луч поглощается пигментом волоса (меланином) и преобразуется в тепло, которое разрушает волосяной фолликул.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Эффективность</h4>
                          <p>
                            После курса процедур (обычно 6-8 сеансов) достигается стойкое удаление волос на 80-95%.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Области применения</h4>
                          <p>
                            Лицо, подмышки, ноги, зона бикини, спина, руки - практически любые зоны тела.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
                  aria-expanded={openAccordion === 2}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setOpenAccordion(openAccordion === 2 ? null : 2)}
                >
                  <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                    Фотоомоложение и фототерапия
                  </h3>
                  <div className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 2 ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                
                {openAccordion === 2 && (
                  <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div className="space-y-4 text-gray-700" itemProp="text">
                      <p>
                        Фотоомоложение и фототерапия используют интенсивный импульсный свет для улучшения состояния кожи:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Фотоомоложение</h4>
                            <p>
                              Улучшение тонуса кожи, уменьшение морщин, выравнивание цвета лица, сужение пор.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Фотоокоагуляция сосудов</h4>
                            <p>
                              Удаление сосудистых звездочек, купероза, гемангиом с помощью селективного воздействия на сосуды.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Фотодинамическая терапия</h4>
                            <p>
                              Лечение акне, предраковых состояний кожи с использованием фотосенсибилизаторов.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
                  aria-expanded={openAccordion === 3}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setOpenAccordion(openAccordion === 3 ? null : 3)}
                >
                  <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                    Удаление татуировок лазером
                  </h3>
                  <div className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 3 ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                
                {openAccordion === 3 && (
                  <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div className="space-y-4 text-gray-700" itemProp="text">
                      <p>
                        Лазерное удаление татуировок - безопасный и эффективный метод избавления от нежелательных татуировок:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Технология Q-switch</h4>
                            <p>
                              Использование лазеров с модуляцией добротности для разрушения пигментных частиц в коже.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Количество процедур</h4>
                            <p>
                              Обычно требуется от 6 до 12 процедур с интервалом 4-6 недель для полного удаления.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Безопасность</h4>
                            <p>
                              Современные лазеры обеспечивают высокую эффективность при минимальном риске рубцевания.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}
