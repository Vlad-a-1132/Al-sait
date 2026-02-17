'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function DermatologyPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Услуги дерматологии по прайсу (коды и цены актуальны)
  const dermatologyServices = [
    { id: 1, code: "B01.008.001", name: "Прием (осмотр, консультация) врача-дерматовенеролога первичный", price: "3 260 руб.", image: "/images/yslugi/Dermatology.webp", description: "Первичная консультация и осмотр у врача-дерматовенеролога" },
    { id: 2, code: "B01.008.002", name: "Прием (осмотр, консультация) врача-дерматовенеролога повторный", price: "2 730 руб.", image: "/images/yslugi/Dermatology.webp", description: "Повторная консультация у врача-дерматовенеролога" },
    { id: 3, code: "B04.008.001", name: "Диспансерный прием (осмотр, консультация) врача-дерматовенеролога", price: "2 730 руб.", image: "/images/yslugi/Dermatology.webp", description: "Диспансерный осмотр у врача-дерматовенеролога" },
    { id: 4, code: "B04.008.002", name: "Профилактический прием (осмотр, консультация) врача-дерматовенеролога", price: "2 730 руб.", image: "/images/yslugi/Dermatology.webp", description: "Профилактический осмотр у врача-дерматовенеролога" },
    { id: 5, code: "A01.01.001", name: "Сбор анамнеза и жалоб в дерматологии", price: "530 руб.", image: "/images/yslugi/Dermatology.webp", description: "Сбор анамнеза и жалоб в дерматологии" },
    { id: 6, code: "A02.01.006", name: "Визуальное исследование в дерматологии", price: "1 890 руб.", image: "/images/yslugi/Dermatology.webp", description: "Визуальное исследование кожных покровов" },
    { id: 7, code: "A01.01.002", name: "Пальпация в дерматологии", price: "530 руб.", image: "/images/yslugi/Dermatology.webp", description: "Пальпаторное исследование кожи" },
    { id: 8, code: "A02.01.007", name: "Определение дермографизма", price: "530 руб.", image: "/images/yslugi/Dermatology.webp", description: "Определение дермографической реакции" },
    { id: 9, code: "A01.01.003", name: "Аускультация в дерматологии", price: "530 руб.", image: "/images/yslugi/Dermatology.webp", description: "Аускультативное исследование в дерматологии" },
    { id: 10, code: "A02.01.008", name: "Определение сальности кожи", price: "530 руб.", image: "/images/yslugi/Dermatology.webp", description: "Определение уровня сальности кожи" },
    { id: 11, code: "A14.01.008", name: "Проведение йодной пробы", price: "530 руб.", image: "/images/yslugi/Dermatology.webp", description: "Проведение йодной пробы для диагностики" },
    { id: 12, code: "A14.01.009", name: "Люминесцентная диагностика (осмотр под лампой Вуда)", price: "1 890 руб.", image: "/images/yslugi/Dermatology.webp", description: "Осмотр кожи под лампой Вуда" },
    { id: 13, code: "A25.01.001", name: "Осмотр кожи под увеличением (дерматоскопия)", price: "1 890 руб.", image: "/images/yslugi/Dermatology.webp", description: "Дерматоскопическое исследование" },
    { id: 14, code: "A25.01.002", name: "Осмотр кожи через стекло при надавливании (витропрессия)", price: "530 руб.", image: "/images/yslugi/Dermatology.webp", description: "Исследование кожи методом витропрессии" },
    { id: 15, code: "A14.01.010", name: "Соскоб кожи", price: "530 руб.", image: "/images/yslugi/Dermatology.webp", description: "Забор материала для лабораторного исследования" },
    { id: 16, code: "A16.01.001", name: "Удаление комедонов кожи", price: "2 500 руб.", image: "/images/yslugi/Dermatology.webp", description: "Удаление комедонов кожи" },
    { id: 17, code: "A16.01.002", name: "Удаление милиумов кожи", price: "2 500 руб.", image: "/images/yslugi/Dermatology.webp", description: "Удаление милиумов (белых угрей)" },
    { id: 18, code: "A16.01.003", name: "Удаление телеангиоэктазий", price: "4 900 руб.", image: "/images/yslugi/Dermatology.webp", description: "Удаление сосудистых звездочек" },
    { id: 19, code: "A16.01.004", name: "Удаление доброкачественных новообразований кожи методом электрокоагуляции", price: "5 150 руб.", image: "/images/yslugi/Dermatology.webp", description: "Удаление новообразований электрокоагуляцией" },
    { id: 20, code: "A16.01.005", name: "Удаление контагиозных моллюсков кожи", price: "2 500 руб.", image: "/images/yslugi/Dermatology.webp", description: "Удаление контагиозных моллюсков" },
    { id: 21, code: "B03.01.001", name: "Назначение лекарственных препаратов при заболеваниях кожи, подкожно-жировой клетчатки, придатков кожи", price: "2 730 руб.", image: "/images/yslugi/Dermatology.webp", description: "Назначение медикаментозной терапии" },
    { id: 22, code: "B03.01.002", name: "Назначение диетического питания при заболеваниях кожи, подкожно-жировой клетчатки, придатков кожи", price: "2 730 руб.", image: "/images/yslugi/Dermatology.webp", description: "Назначение лечебного питания" },
    { id: 23, code: "B03.01.003", name: "Назначение лечебно-оздоровительного режима при заболеваниях кожи, подкожно-жировой клетчатки, придатков кожи", price: "2 730 руб.", image: "/images/yslugi/Dermatology.webp", description: "Назначение лечебного режима" }
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
            <span className="text-gray-900">Дерматология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Дерматология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение кожных заболеваний у взрослых и детей в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/images allergoly/Dermat1ology.webp"
                    alt="Лечение кожных заболеваний"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Лечение кожных заболеваний</div>
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
                  src="/images/images allergoly/Dermat1ology.webp"
                  alt="Лечение кожных заболеваний"
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
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Лечение кожных заболеваний</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед-С»?</h2>
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
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Дерматолог в Одинцово - услуги диагностики и лечения кожных заболеваний
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный спектр услуг дерматологии
              </p>
              <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
                <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">Услуги дерматологии</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dermatologyServices.map((service, index) => (
                      <div 
                        key={service.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                              {service.name}
                            </h4>
                            <div className="text-emerald-600 font-semibold text-lg">
                              {service.price}
                            </div>
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
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Консультация дерматолога в Одинцово - профессиональная диагностика кожных заболеваний
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Дерматолог в Одинцово - это медицинский специалист, который занимается диагностикой, лечением и профилактикой заболеваний кожи, волос и ногтей. 
                  В клинике «Альтамед-с» в Одинцово консультируют высококвалифицированные дерматовенерологи с многолетним стажем работы и глубокими знаниями в области кожных заболеваний. 
                  Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук, активно участвующие в научно-исследовательской деятельности. 
                  Для получения качественной дерматологической помощи в Одинцово и Московской области рекомендуем обратиться именно в «Альтамед-с».
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Консультация дерматолога в Одинцово требуется при появлении высыпаний, изменений кожи, зуда, шелушения или других симптомов кожных заболеваний. 
                  Кожные заболевания требуют профессионального подхода, поэтому самостоятельная диагностика крайне нежелательна. 
                  Наиболее эффективным решением станет обращение к опытному дерматологу в «Альтамед-с» в Одинцово. 
                  Наши специалисты проведут комплексное обследование, включая дерматоскопию, лабораторные анализы, установят точный диагноз, разработают индивидуальную схему терапии и дадут рекомендации по уходу за кожей.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/images allergoly/Dermat1ology.webp" 
                  alt="Дерматология" 
                  className="w-full h-auto rounded-full shadow-lg"
                />
              </div>
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
                Врачи-дерматологи «Альтамед-с» в Одинцово успешно лечат практически весь спектр кожных заболеваний, спровоцированных самыми разными причинами: инфекциями, нарушением обмена веществ, патологиями внутренних органов, влиянием окружающей среды и т. д. Среди них выделяют вирусные и грибковые заболевания кожи и ногтевой пластины, угревую болезнь (в том числе в юношеском возрасте), экземы, дерматозы, экссудативный диатез, фурункулез, чесотку, демодекоз, контагиозный моллюск и другие заболевания.
              </p>
              <p>
                В «Альтамед-с» работают дерматологи высшей категории, кандидаты и доктора наук. Если вам действительно нужен хороший дерматолог в Одинцово, советуем записаться к специалисту в «Альтамед-с».
              </p>
            </div>

            {/* Alphabetical list of conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
                <div className="space-y-1 text-sm">
                  <div>Атопический дерматит</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Б</div>
                <div className="space-y-1 text-sm">
                  <div>Бородавки</div>
                  <div>Буллезный эпидермолиз</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
                <div className="space-y-1 text-sm">
                  <div>Вросший ноготь</div>
                  <div>Выпадение волос</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Г</div>
                <div className="space-y-1 text-sm">
                  <div>Гемангиома</div>
                  <div>Герпес (вирус герпеса 1, 2 типа)</div>
                  <div>Гипергидроз (потливость)</div>
                  <div>Гипергидроз стоп</div>
                  <div>Гиперкератоз</div>
                  <div>Гиперкератоз ногтей</div>
                  <div>Гипертрихоз</div>
                  <div>Грибок ногтей</div>
                  <div>Грибок ногтей (онихомикоз)</div>
                  <div>Грибок стоп</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ж</div>
                <div className="space-y-1 text-sm">
                  <div>Жирные волосы</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">И</div>
                <div className="space-y-1 text-sm">
                  <div>Инсектная аллергия (на укусы насекомых)</div>
                  <div>Ихтиоз</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">К</div>
                <div className="space-y-1 text-sm">
                  <div>Кандидоз</div>
                  <div>Кератома</div>
                  <div>Кератомикоз</div>
                  <div>Кондиломы</div>
                  <div>Контагиозный моллюск</div>
                  <div>Контактный дерматит</div>
                  <div>Крапивница</div>
                  <div>Купероз</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Л</div>
                <div className="space-y-1 text-sm">
                  <div>Лекарственная аллергия</div>
                  <div>Лишай</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">М</div>
                <div className="space-y-1 text-sm">
                  <div>Мозоль</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Н</div>
                <div className="space-y-1 text-sm">
                  <div>Натоптыши</div>
                  <div>Невусы (родинки)</div>
                  <div>Нейродермит</div>
                  <div>Нейрофиброматоз</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">О</div>
                <div className="space-y-1 text-sm">
                  <div>Ониходистрофия</div>
                  <div>Онихолизис</div>
                  <div>Опоясывающий лишай (герпес)</div>
                  <div>Опрелости под грудью</div>
                  <div>Отрубевидный лишай</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">П</div>
                <div className="space-y-1 text-sm">
                  <div>Панникулит</div>
                  <div>Папилломо-вирусная инфекция</div>
                  <div>Папилломы</div>
                  <div>Паронихия</div>
                  <div>Паховая эпидермофития</div>
                  <div>Педикулез</div>
                  <div>Перхоть</div>
                  <div>Пигментация кожи</div>
                  <div>Пигментные пятна</div>
                  <div>Пиодермия</div>
                  <div>Подошвенные бородавки</div>
                  <div>Потеря тонуса и упругости кожи</div>
                  <div>Потница</div>
                  <div>Прыщи</div>
                  <div>Псориаз</div>
                  <div>Псориатический артрит</div>
                  <div>Пузырчатка</div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Р</div>
                <div className="space-y-1 text-sm">
                  <div>Розацеа</div>
                  <div>Розовый лишай</div>
                  <div>Рубцы и приобретенные дефекты</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">С</div>
                <div className="space-y-1 text-sm">
                  <div>Себорейный дерматит</div>
                  <div>Себорея</div>
                  <div>Себорея кожи головы</div>
                  <div>Стрептодермия у взрослых</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Т</div>
                <div className="space-y-1 text-sm">
                  <div>Трещины стоп</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">У</div>
                <div className="space-y-1 text-sm">
                  <div>Угревая болезнь</div>
                  <div>Угри</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ф</div>
                <div className="space-y-1 text-sm">
                  <div>Фавус</div>
                  <div>Фолликулит</div>
                  <div>Фурункул</div>
                  <div>Фурункулез</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ч</div>
                <div className="space-y-1 text-sm">
                  <div>Чесотка</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
                <div className="space-y-1 text-sm">
                  <div>Экзема</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Я</div>
                <div className="space-y-1 text-sm">
                  <div>Ячмень</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons for consultation */}
        <section className="py-16 bg-gray-50" aria-labelledby="reasons-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Когда нужен дерматолог в Одинцово - симптомы кожных заболеваний
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">высыпания на коже;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">зуд и жжение кожи;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">шелушение и сухость;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">изменение цвета кожи;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">новообразования на коже;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">проблемы с волосами;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">проблемы с ногтями;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">акне и угревая сыпь;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">псориаз;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">экзема;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">дерматит;</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">грибковые инфекции.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive sections */}
        <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Часто задаваемые вопросы о дерматологии в Одинцово
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
                    Диагностика кожных заболеваний
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
                        В клинике «Альтамед-с» применяются современные методы диагностики кожных заболеваний:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Дерматоскопия</h4>
                          <p>
                            Осмотр кожи под увеличением для выявления новообразований и диагностики меланомы.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Люминесцентная диагностика</h4>
                          <p>
                            Осмотр под лампой Вуда для диагностики грибковых инфекций и других заболеваний.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Лабораторная диагностика</h4>
                          <p>
                            Соскобы кожи, анализы крови для выявления инфекций и аллергических реакций.
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
                    Лечение кожных заболеваний
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
                        Лечение кожных заболеваний в «Альтамед-с» включает комплексный подход:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Медикаментозная терапия</h4>
                            <p>
                              Назначение современных препаратов для лечения воспалительных процессов, инфекций, аллергических реакций.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Удаление новообразований</h4>
                            <p>
                              Электрокоагуляция, криодеструкция для удаления доброкачественных новообразований кожи.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Косметологические процедуры</h4>
                            <p>
                              Удаление комедонов, милиумов, сосудистых звездочек для улучшения внешнего вида кожи.
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
                    Профилактика кожных заболеваний
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
                        Профилактика кожных заболеваний включает:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Правильный уход за кожей</h4>
                            <p>
                              Подбор подходящих средств для очищения, увлажнения и защиты кожи от внешних факторов.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Защита от солнца</h4>
                            <p>
                              Использование солнцезащитных средств, избегание длительного пребывания на солнце.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Здоровый образ жизни</h4>
                            <p>
                              Правильное питание, отказ от вредных привычек, регулярные физические нагрузки.
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
