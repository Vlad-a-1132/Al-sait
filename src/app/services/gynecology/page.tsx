'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function GynecologyPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Услуги гинекологии по прайсу (коды и цены актуальны)
  const gynecologyServices = [
    {
      category: "Популярные услуги",
      services: [
        { code: "B03.20.001", name: "Пайпель-биопсия эндометрия", price: "от 5 150 руб." },
        { code: "B03.20.002", name: "Медикаментозное прерывание беременности", price: "от 16 280 руб." },
        { code: "A03.20.001", name: "Кольпоскопия расширенная", price: "2 100 руб." },
        { code: "A16.20.001", name: "Введение внутриматочной спирали", price: "7 350 руб." },
        { code: "A16.20.002", name: "Хирургическое лечение заболеваний шейки матки", price: "от 8 930 руб." },
        { code: "B01.001.001", name: "Прием врача-акушера-гинеколога первичный", price: "от 3 780 руб." },
        { code: "B01.001.002", name: "Ведение беременности", price: "от 2 630 руб." },
        { code: "B03.20.003", name: "Лечение эндометриоза", price: "Цена по запросу" },
        { code: "B03.20.004", name: "Лечение вагинита", price: "Цена по запросу" }
      ]
    },
    {
      category: "Консультации и приемы",
      services: [
        { code: "B01.001.001.01", name: "Прием (осмотр, консультация) врача-акушера-гинеколога к.м.н. первичный", price: "4 100 руб." },
        { code: "B01.001.001.02", name: "Прием (осмотр, консультация) врача-акушера-гинеколога, к.м.н. по сексологическим вопросам у женщин", price: "6 200 руб." },
        { code: "B01.001.002.01", name: "Прием (осмотр, консультация) врача-акушера-гинеколога к.м.н. повторный", price: "3 150 руб." },
        { code: "B01.001.001", name: "Прием (осмотр, консультация) врача-акушера-гинеколога первичный", price: "3 780 руб." },
        { code: "B01.001.002", name: "Прием (осмотр, консультация) врача-акушера-гинеколога повторный", price: "2 840 руб." },
        { code: "B01.001.004", name: "Прием (осмотр, консультация) врача-акушера-гинеколога беременной первичный", price: "3 150 руб." },
        { code: "B01.001.004.01", name: "Прием (осмотр, консультация) врача-акушера-гинеколога к.м.н. беременной первичный", price: "4 310 руб." },
        { code: "B01.001.005", name: "Прием (осмотр, консультация) врача-акушера-гинеколога беременной повторный", price: "2 630 руб." },
        { code: "B01.001.005.01", name: "Прием (осмотр, консультация) врача-акушера-гинеколога к.м.н. беременной повторный", price: "3 780 руб." }
      ]
    },
    {
      category: "Гинекологические манипуляции",
      services: [
        { code: "A03.20.001.001", name: "Кольпоскопия расширенная", price: "2 100 руб." },
        { code: "A11.20.003.001", name: "Пайпель-биопсия эндометрия", price: "5 150 руб." },
        { code: "A11.20.041", name: "Введение акушерского разгружающего поддерживающего кольца/пессария", price: "1 470 руб." },
        { code: "A11.20.042", name: "Извлечение акушерского разгружающего поддерживающего кольца/пессария", price: "950 руб." },
        { code: "A11.20.014", name: "Введение внутриматочной спирали", price: "7 350 руб." },
        { code: "A11.20.015", name: "Удаление внутриматочной спирали", price: "7 350 руб." },
        { code: "A11.20.024", name: "Введение лекарственных препаратов интравагинально", price: "530 руб." },
        { code: "A11.20.024.001", name: "Введение лекарственных препаратов интравагинально для лечения патологии шейки матки", price: "2 310 руб." },
        { code: "A11.01.002.001", name: "Подкожное введение лекарственных препаратов в гинекологии (без стоимости препаратов)", price: "2 100 руб." },
        { code: "A11.30.036", name: "Инстилляция полости матки", price: "840 руб." },
        { code: "A16.20.059.001.003", name: "Удаление остроконечных кондилом 1 ед", price: "530 руб." },
        { code: "A16.20.059.001.001", name: "Удаление остроконечных папиллом, полипов, кондилом до 3 ед", price: "2 520 руб." },
        { code: "A11.20.013", name: "Тампонирование лечебное влагалища", price: "840 руб." },
        { code: "A03.20.003.002", name: "Контрастная эхогистеросальпингоскопия", price: "9 660 руб." },
        { code: "A02.20.007", name: "Взятие мазков", price: "530 руб." },
        { code: "A11.20.002", name: "Получение цервикального мазка", price: "530 руб." },
        { code: "A11.20.005", name: "Получение влагалищного мазка", price: "530 руб." },
        { code: "A11.20.025", name: "Получение соскоба с шейки матки", price: "530 руб." },
        { code: "A11.20.039", name: "Получение соскоба с вульвы", price: "530 руб." },
        { code: "A11.20.011.003", name: "Биопсия шейки матки ножевая", price: "2 940 руб." },
        { code: "B03.027.016", name: "Комплекс исследований для диагностики злокачественных новообразований эндометрия", price: "4 520 руб." },
        { code: "A01.20.001", name: "Сбор акушерско-гинекологического анамнеза и жалоб", price: "740 руб." },
        { code: "A03.20.001", name: "Кольпоскопия", price: "1 890 руб." },
        { code: "A11.20.008.002", name: "Раздельное диагностическое выскабливание цервикального канала", price: "7 350 руб." },
        { code: "A11.20.009", name: "Зондирование матки", price: "950 руб." },
        { code: "A14.20.002", name: "Введение, извлечение влагалищного поддерживающего кольца (пессария)", price: "840 руб." },
        { code: "A14.20.003", name: "Подбор влагалищного поддерживающего кольца (пессария)", price: "3 570 руб." },
        { code: "A05.19.004", name: "Манометрия силы мышц тазового дна (перинеометрия)", price: "1 050 руб." },
        { code: "A14.05.001", name: "Постановка пиявок (1 процедура без пиявок)", price: "2 520 руб." },
        { code: "A21.20.001", name: "Гинекологический массаж 1 процедура (30 минут)", price: "3 150 руб." },
        { code: "A15.02.001", name: "Тейпирование мышц (1 зона)", price: "2 000 руб." },
        { code: "A11.01.010", name: "Плазмолифтинг (введение аутологичной плазмы) 1 пробирка", price: "4 620 руб." },
        { code: "A19.20.001.001", name: "Школа тренировки мышц тазового дна (1 занятие)", price: "3 570 руб." },
        { code: "A09.20.011", name: "Определение концентрации водородных ионов (рН) отделяемого слизистой влагалища", price: "420 руб." },
        { code: "A20.20.002.001", name: "Воздействие лечебной грязью вагинально или ректально", price: "1 260 руб." },
        { code: "A16.20.005.001", name: "Расширение шеечного канала", price: "1 680 руб." },
        { code: "A16.20.036", name: "Хирургическое лечение заболеваний шейки матки с использованием различных энергий", price: "8 930 руб." },
        { code: "A16.20.059", name: "Удаление инородного тела из влагалища", price: "2 420 руб." },
        { code: "A16.20.059.001", name: "Удаление новообразования влагалища", price: "5 990 руб." },
        { code: "A16.20.069", name: "Удаление новообразования малой половой губы", price: "1 680 руб." },
        { code: "A16.20.084", name: "Удаление полипа женских половых органов", price: "7 350 руб." },
        { code: "A16.20.090", name: "Снятие швов с шейки матки", price: "1 680 руб." },
        { code: "A25.20.001", name: "Назначение лекарственных препаратов при заболеваниях женских половых органов", price: "2 420 руб." },
        { code: "A01.20.004", name: "Бимануальное ректоабдоминальное исследование", price: "2 420 руб." },
        { code: "A16.20.036.004", name: "Криодеструкция шейки матки", price: "5 990 руб." },
        { code: "B01.003.004.004", name: "Аппликационная анестезия", price: "840 руб." },
        { code: "B01.003.004.005", name: "Инфильтрационная анестезия", price: "950 руб." },
        { code: "B03.001.005", name: "Комплексная услуга по медикаментозному прерыванию беременности", price: "16 280 руб." },
        { code: "B03.001.006", name: "Комплексная услуга по медикаментозному прерыванию беременности (препарат пр-во Франция)", price: "21 420 руб." },
        { code: "A11.20.012", name: "Микроспринцевание (ирригация) влагалища", price: "840 руб." }
      ]
    },
    {
      category: "УЗИ диагностика беременности",
      services: [
        { code: "A04.30.001.001", name: "Ультразвуковое исследование плода в I триместре беременности (до 10 недель)", price: "1 890 руб." },
        { code: "A04.30.001.002", name: "Ультразвуковое исследование плода во II триместре (диагностика пороков развития, 10–16 нед)", price: "2 210 руб." },
        { code: "A04.30.001.003", name: "Ультразвуковое исследование плода в III триместре (диагностика пороков развития, более 16 нед)", price: "2 420 руб." },
        { code: "A04.30.002.001", name: "Ультразвуковая допплерометрия плода при беременности более 16 недель", price: "2 630 руб." },
        { code: "A04.30.002.002", name: "Допплерометрия (многоплодная беременность)", price: "3 780 руб." }
      ]
    },
    {
      category: "Радиоволновая хирургия в гинекологии",
      services: [
        { code: "A11.20.004.001", name: "Влагалищная биопсия радиоволновая", price: "7 350 руб." },
        { code: "A11.20.011.001", name: "Биопсия шейки матки радиоволновая", price: "8 300 руб." },
        { code: "A11.20.011.002", name: "Биопсия шейки матки радиоволновая конусовидная", price: "12 600 руб." },
        { code: "A11.20.037", name: "Биопсия вульвы радиоволновая", price: "3 890 руб." },
        { code: "A16.20.059.001.002", name: "Радиоволновое удаление остроконечных кондилом, папиллом, полипов влагалища до 3 ед", price: "7 350 руб." }
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
            <span className="text-gray-900">Гинекология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Гинекология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний женской репродуктивной системы у женщин всех возрастов в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/images allergoly/ginokologia.webp"
                    alt="Лечение женских заболеваний"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Лечение женских заболеваний</div>
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
                  src="/images/images allergoly/ginokologia.webp"
                  alt="Лечение женских заболеваний"
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
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Лечение женских заболеваний</h2>
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
                <img src="/images/yslugi/star 1.webp" alt="Звезда 1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Лечение в соответствии с мировыми клиническими рекомендациями</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Комплексная оценка заболевания и прогноза лечения</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Современное диагностическое оборудование и собственная диагностическая лаборатория</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">Высокий уровень сервиса и взвешенная ценовая политика</p>
            </div>
          </div>

          {/* Десктопная версия - 4 колонки */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">Лечение в соответствии с мировыми клиническими рекомендациями</p>
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
              <p className="text-gray-700 font-medium">Современное диагностическое оборудование и собственная диагностическая лаборатория</p>
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

      <div className="flex-1">
        {/* Services Section */}
        <section className="py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-black mb-4 text-center ml-0 md:ml-4 lg:ml-8">
              Гинеколог в Одинцово - услуги диагностики и лечения женских заболеваний
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto text-center mb-8 leading-relaxed">
              Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
              <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
            </p>
            <div className="space-y-12" itemScope itemType="https://schema.org/ItemList">
              {gynecologyServices.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-200">
                    <h3 className="text-xl font-semibold text-emerald-800">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service) => (
                        <article
                          key={service.code}
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
                  Консультация гинеколога в Одинцово - профессиональная диагностика женского здоровья
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Гинеколог в Одинцово - это медицинский специалист, который занимается диагностикой, лечением и профилактикой заболеваний женской репродуктивной системы. 
                  В клинике «Альтамед-с» в Одинцово консультируют высококвалифицированные акушеры-гинекологи с многолетним стажем работы и глубокими знаниями в области женского здоровья. 
                  Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук, активно участвующие в научно-исследовательской деятельности. 
                  Для получения качественной гинекологической помощи в Одинцово и Московской области рекомендуем обратиться именно в «Альтамед-с».
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Консультация гинеколога в Одинцово требуется при появлении симптомов заболеваний женской половой системы, для профилактических осмотров и планирования беременности. 
                  Заболевания женской репродуктивной системы требуют профессионального подхода, поэтому самостоятельная диагностика крайне нежелательна. 
                  Наиболее эффективным решением станет обращение к опытному гинекологу в «Альтамед-с» в Одинцово. 
                  Наши специалисты проведут комплексное обследование, включая кольпоскопию, УЗИ, лабораторные анализы, установят точный диагноз, разработают индивидуальную схему терапии и дадут рекомендации по поддержанию женского здоровья.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/images allergoly/ginokologia.webp" 
                  alt="Гинекология" 
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
              Когда нужен гинеколог в Одинцово - симптомы женских заболеваний
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">нарушения менструального цикла;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">боли внизу живота;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">необычные выделения;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">зуд и жжение в области половых органов;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">болезненные менструации;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">проблемы с зачатием;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">боли во время полового акта;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">кровотечения между менструациями;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">симптомы климакса;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">планирование беременности;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">контроль во время беременности;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">профилактические осмотры.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive sections */}
        <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Часто задаваемые вопросы о гинекологии в Одинцово
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
                    Диагностика женских заболеваний
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
                        В клинике «Альтамед-с» применяются современные методы диагностики женских заболеваний, включающие:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Кольпоскопия</h4>
                          <p>
                            Детальное исследование шейки матки с использованием специального микроскопа для выявления предраковых состояний и воспалительных процессов.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">УЗИ органов малого таза</h4>
                          <p>
                            Безболезненное ультразвуковое исследование для оценки состояния матки, яичников и придатков.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Лабораторная диагностика</h4>
                          <p>
                            Комплексные анализы мазков, крови на гормоны, онкомаркеры и инфекции, передающиеся половым путем.
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
                    Лечение гинекологических заболеваний
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
                        Лечение женских заболеваний в «Альтамед-с» включает комплексный подход:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Консервативная терапия</h4>
                            <p>
                              Медикаментозное лечение воспалительных процессов, гормональных нарушений, инфекционных заболеваний.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Радиоволновая хирургия</h4>
                            <p>
                              Малоинвазивные методы лечения эрозии шейки матки, кондилом, полипов с использованием радиоволновой технологии.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Физиотерапия</h4>
                            <p>
                              Вспомогательные методы лечения: гинекологический массаж, плазмолифтинг, лечебные грязи.
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
                    Ведение беременности и планирование семьи
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
                        Комплексное ведение беременности и планирование семьи в «Альтамед-с»:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Планирование беременности</h4>
                            <p>
                              Подготовка к зачатию, обследование обоих партнеров, коррекция хронических заболеваний.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Ведение беременности</h4>
                            <p>
                              Регулярные осмотры, УЗИ-скрининг, контроль анализов, подготовка к родам.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Контрацепция</h4>
                            <p>
                              Подбор подходящего метода контрацепции, установка внутриматочных спиралей.
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
