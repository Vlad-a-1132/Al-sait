"use client";

import Link from 'next/link';
import NextImage from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

// Услуги травматологии по прайсу (коды и цены актуальны)
const traumatologyServices = [
  {
    category: "Консультации травматолога-ортопеда",
    services: [
      { code: "B01.050.001", name: "Прием (осмотр, консультация) врача-травматолога-ортопеда первичный", price: "4 410 руб." },
      { code: "B01.050.002", name: "Прием (осмотр, консультация) врача-травматолога-ортопеда повторный", price: "3 570 руб." },
    ]
  },
  {
    category: "Инъекционная терапия",
    services: [
      { code: "A11.03.003", name: "Внутрикостное введение лекарственных препаратов", price: "2 630 руб." },
      { code: "A11.04.004", name: "Внутрисуставное введение лекарственных препаратов", price: "2 630 руб." },
      { code: "A11.04.005", name: "Пункция синовиальной сумки сустава", price: "4 410 руб." },
      { code: "A11.04.006", name: "Околосуставное введение лекарственных препаратов", price: "2 630 руб." },
      { code: "A11.04.006.001", name: "Плазмолифтинг PRP (введение обогащенной тромбоцитами аутоплазмы) пробирка Unique", price: "13 860 руб." },
    ]
  },
  {
    category: "Наложение повязок",
    services: [
      { code: "A15.01.001", name: "Наложение повязки при нарушении целостности кожных покровов", price: "1 790 руб." },
      { code: "A15.01.001.001", name: "Наложение повязки при ожогах", price: "1 790 руб." },
      { code: "A15.02.001", name: "Наложение повязки при заболеваниях мышц", price: "2 630 руб." },
      { code: "A15.03.001", name: "Наложение повязки при переломах костей", price: "2 630 руб." },
      { code: "A15.03.002", name: "Наложение иммобилизационной повязки при переломах костей", price: "3 050 руб." },
      { code: "A15.03.003", name: "Наложение гипсовой повязки при переломах костей", price: "3 050 руб." },
      { code: "A15.03.010", name: "Снятие гипсовой повязки (лонгеты)", price: "1 470 руб." },
      { code: "A15.03.010.001", name: "Снятие циркулярной гипсовой повязки", price: "2 630 руб." },
      { code: "A15.04.001", name: "Наложение повязки при вывихах (подвывихах) суставов", price: "2 630 руб." },
    ]
  },
  {
    category: "Хирургические манипуляции",
    services: [
      { code: "A16.01.008", name: "Сшивание кожи и подкожной клетчатки", price: "3 260 руб." },
      { code: "A16.01.008.001", name: "Наложение вторичных швов", price: "4 940 руб." },
      { code: "A16.01.009", name: "Ушивание открытой раны (без кожной пересадки)", price: "3 260 руб." },
      { code: "A16.01.027", name: "Удаление ногтевых пластинок", price: "3 260 руб." },
      { code: "A16.01.027.001", name: "Удаление ногтевой пластинки с клиновидной резекцией матрикса", price: "5 570 руб." },
    ]
  },
  {
    category: "Анестезия",
    services: [
      { code: "B01.003.004.001", name: "Местная анестезия", price: "840 руб." },
      { code: "B01.003.004.005", name: "Инфильтрационная анестезия", price: "1 050 руб." },
    ]
  }
];

export default function TraumatologyPage() {
  const whyChooseUs = [
    {
      text: 'Лечение в соответствии с мировыми клиническими рекомендациями',
    },
    {
      text: 'Комплексная оценка заболевания и прогноза лечения',
    },
    {
      text: 'Современное диагностическое оборудование и собственная лаборатория',
    },
    {
      text: 'Высокий уровень сервиса и взвешенная ценовая политика',
    },
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Травматология</span>
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
              Травматология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Консультация хорошего врача травматолога-ортопеда в Одинцово
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/yslugi/travmatolog.webp"
                    alt="Профессиональная диагностика и лечение заболеваний опорно-двигательного аппарата"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Профессиональная диагностика и лечение заболеваний опорно-двигательного аппарата</div>
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
                <img
                  src="/images/yslugi/travmatolog.webp"
                  alt="Травматология в Одинцово"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Травматология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная диагностика и лечение заболеваний опорно-двигательного аппарата</p>
                <Link 
                  href="https://online.altamed-c.ru/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
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
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">
                Лечение в соответствии с мировыми клиническими рекомендациями
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
                Комплексная оценка заболевания и прогноза лечения
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
                Современное диагностическое оборудование и собственная диагностическая лаборатория
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
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-1">
        {/* Services Section */}
        <section className="py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
              Травматолог-ортопед в Одинцово - услуги диагностики и лечения
            </h2>
            <p className="text-gray-600 text-sm mb-6 text-center max-w-2xl mx-auto">
              Цены носят справочный характер. Актуальную стоимость уточняйте в регистратуре или по телефону{' '}
              <a href="tel:+74952554450" className="text-emerald-600 hover:underline font-medium">+7 (495) 255-44-50</a>.
            </p>
            <div className="space-y-12" itemScope itemType="https://schema.org/ItemList">
              {traumatologyServices.map((category, categoryIndex) => (
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

        {/* What we treat section */}
        <section className="py-16 bg-white" aria-labelledby="what-we-treat-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="what-we-treat-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Что мы лечим
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                К компетенции врачей травматологов-ортопедов «Альтамед-С» относятся различные травматические повреждения, а также врожденные и приобретенные заболевания и деформации костей, суставов, мышц, связок и сухожилий.
              </p>
            </div>

            {/* Alphabetical list of conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Б</div>
                <div className="space-y-1 text-sm">
                  <div>Болезнь Пертеса</div>
                  <div>Болезнь Форестье</div>
                  <div>Бурсит коленного сустава</div>
                  <div>Бурсит плечевого сустава</div>
                  <div>Бурсит стопы</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
                <div className="space-y-1 text-sm">
                  <div>Вальгусная деформация большого пальца стопы (Hallux valgus)</div>
                  <div>Внутрисуставной перелом</div>
                  <div>Воронкообразная грудная клетка</div>
                  <div>Врожденный вывих бедра</div>
                  <div>Вывих бедра</div>
                  <div>Вывих ключицы</div>
                  <div>Вывих коленного сустава</div>
                  <div>Вывих надколенника</div>
                  <div>Вывих пальца стопы/кисти</div>
                  <div>Вывих плеча</div>
                  <div>Вывих предплечья</div>
                  <div>Вывих стопы</div>
                  <div>Вывих запястья</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">К</div>
                <div className="space-y-1 text-sm">
                  <div>Компрессионный перелом позвоночника</div>
                  <div>Конская стопа</div>
                  <div>Контрактура Дюпюитрена</div>
                  <div>Контрактура коленного сустава</div>
                  <div>Контрактура локтевого сустава</div>
                  <div>Косолапость</div>
                  <div>Костный панариций</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Л</div>
                <div className="space-y-1 text-sm">
                  <div>Латеральный эпикондилит</div>
                  <div>Ложный сустав</div>
                  <div>Локтевой бурсит</div>
                  <div>Люмбализация</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">М</div>
                <div className="space-y-1 text-sm">
                  <div>Маршевая стопа</div>
                  <div>Межпозвоночная грыжа</div>
                  <div>Миозит</div>
                  <div>Миозит мышц спины</div>
                  <div>Множественные экзостозы</div>
                  <div>Молоткообразные пальцы стопы</div>
                  <div>Мраморная болезнь</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Н</div>
                <div className="space-y-1 text-sm">
                  <div>Нарушения осанки</div>
                  <div>Неврома Мортона</div>
                  <div>Нестабильность позвоночника</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">О</div>
                <div className="space-y-1 text-sm">
                  <div>О-образные ноги</div>
                  <div>Ожоги</div>
                  <div>Оскольчатый перелом</div>
                  <div>Остеоартрит</div>
                  <div>Остеоартроз (остеоартрит)</div>
                  <div>Остеодистрофии</div>
                  <div>Остеома</div>
                  <div>Остеомаляция</div>
                  <div>Остеомиелит</div>
                  <div>Остеопения</div>
                  <div>Остеопороз</div>
                  <div>Остеосаркома</div>
                  <div>Остеосклероз</div>
                  <div>Остеофиты</div>
                  <div>Остеохондроз</div>
                  <div>Остеохондрома</div>
                  <div>Остеохондропатии</div>
                  <div>Открытый перелом</div>
                </div>
              </div>
            </div>
            
            {/* Additional columns for remaining letters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* Column 4 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">П</div>
                <div className="space-y-1 text-sm">
                  <div>Перелом пальца кисти/стопы</div>
                  <div>Перелом позвоночника</div>
                  <div>Перелом поясничного отдела позвоночника</div>
                  <div>Перелом пястной кости</div>
                  <div>Перелом пяточной кости</div>
                  <div>Перелом ребра</div>
                  <div>Перелом руки</div>
                  <div>Перелом скуловой кости</div>
                  <div>Перелом со смещением</div>
                  <div>Перелом шейки бедра</div>
                  <div>Перелом шейки бедра у пожилых</div>
                  <div>Перелом костей предплечья</div>
                  <div>Перелом костей стопы</div>
                  <div>Периартрит</div>
                  <div>Периостит</div>
                  <div>Перихондрит</div>
                  <div>Плоскостопие</div>
                </div>
              </div>

              {/* Column 5 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">П</div>
                <div className="space-y-1 text-sm">
                  <div>Повреждение ахиллова сухожилия</div>
                  <div>Повреждение мениска коленного сустава</div>
                  <div>Повреждение связок голеностопного сустава</div>
                  <div>Повреждение сухожилий</div>
                  <div>Повреждение связок коленного сустава</div>
                  <div>Подвывих позвонка</div>
                  <div>Подвывих шейного позвонка</div>
                  <div>Полая стопа</div>
                  <div>Политравма</div>
                  <div>Поперечное плоскостопие</div>
                  <div>Посттравматический артроз</div>
                  <div>Поясничный спондилез</div>
                  <div>Поясничный спондилоартроз</div>
                  <div>Привычный вывих</div>
                  <div>Привычный вывих плеча</div>
                  <div>Проблемы опорно-двигательного аппарата</div>
                  <div>Продольное плоскостопие</div>
                  <div>Пролежни</div>
                  <div>Пяточная шпора</div>
                </div>
              </div>

              {/* Column 6 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">С</div>
                <div className="space-y-1 text-sm">
                  <div>Спондилёз</div>
                  <div>Стилоидит</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Т</div>
                <div className="space-y-1 text-sm">
                  <div>Тендинит ахиллова сухожилия</div>
                  <div>Тендинит коленного сустава</div>
                  <div>Тендинит суставов</div>
                  <div>Тендовагинит</div>
                  <div>Травма коленного сустава</div>
                  <div>Травма позвоночника</div>
                  <div>Травма придаточных пазух</div>
                  <div>Травма сустава</div>
                  <div>Траншейная стопа</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">У</div>
                <div className="space-y-1 text-sm">
                  <div>Ушиб колена</div>
                  <div>Ушиб копчика</div>
                  <div>Ушиб ноги</div>
                  <div>Ушиб позвоночника</div>
                </div>
              </div>
            </div>
            
            {/* Additional columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* Column 7 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Х</div>
                <div className="space-y-1 text-sm">
                  <div>Хондрокальциноз</div>
                  <div>Хондрома</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Щ</div>
                <div className="space-y-1 text-sm">
                  <div>Щелкающий палец (стенозирующий лигаментит)</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
                <div className="space-y-1 text-sm">
                  <div>Эпикондилит локтевого сустава</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Консультация врача травматолога-ортопеда в Одинцово - профессиональная диагностика заболеваний опорно-двигательного аппарата
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Травматолог-ортопед в Одинцово - это медицинский специалист, который занимается диагностикой, лечением и профилактикой заболеваний опорно-двигательного аппарата, травм и повреждений костей, суставов, мышц, связок и сухожилий. 
                  В клинике «Альтамед-С» в Одинцово консультируют высококвалифицированные травматологи-ортопеды с многолетним стажем работы и глубокими знаниями в области лечения травм и заболеваний опорно-двигательного аппарата.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Наши специалисты проведут комплексное обследование, включая осмотр, инструментальные исследования, установят точный диагноз, разработают индивидуальную схему терапии и дадут рекомендации по профилактике заболеваний опорно-двигательного аппарата.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/yslugi/travmatolog.webp" 
                  alt="Травматология" 
                  className="w-full h-auto rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Book an Appointment Block */}
      <AppointmentForm />
    </div>
  );
}

