"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from '@/components/AppointmentForm';

export default function GastroenterologyPage() {
  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Данные услуг гастроэнтерологии
  const gastroenterologyServices = [
    {
      id: 1,
      code: "B01.004.001.001",
      name: "Прием (осмотр, консультация) врача гастроэнтеролога к.м.н. первичный",
      price: "4 830 руб.",
      image: "/images/yslugi/Gastroenterology.webp",
      description: "Первичная консультация и осмотр у врача-гастроэнтеролога кандидата медицинских наук"
    },
    {
      id: 2,
      code: "B01.004.001",
      name: "Прием (осмотр, консультация) врача гастроэнтеролога первичный",
      price: "4 310 руб.",
      image: "/images/yslugi/Gastroenterology.webp",
      description: "Первичная консультация и осмотр у врача-гастроэнтеролога"
    },
    {
      id: 3,
      code: "B01.004.002",
      name: "Прием (осмотр, консультация) врача гастроэнтеролога повторный",
      price: "3 360 руб.",
      image: "/images/yslugi/Gastroenterology.webp",
      description: "Повторная консультация у врача-гастроэнтеролога"
    },
    {
      id: 4,
      code: "B01.004.002.001",
      name: "Прием (осмотр, консультация) врача гастроэнтеролога к.м.н. повторный",
      price: "4 310 руб.",
      image: "/images/yslugi/Gastroenterology.webp",
      description: "Повторная консультация у врача-гастроэнтеролога кандидата медицинских наук"
    },
    {
      id: 5,
      code: "A07.16.006",
      name: "13С-уреазный дыхательный тест на HELICOBACTER PYLORI",
      price: "2 420 руб.",
      image: "/images/yslugi/Gastroenterology.webp",
      description: "Диагностический тест для выявления бактерии Helicobacter pylori"
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-800">Гастроэнтерология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Гастроэнтерология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний желудочно-кишечного тракта у взрослых и детей в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/images allergoly/gas.webp"
                    alt="Лечение заболеваний ЖКТ"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Лечение заболеваний ЖКТ</div>
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
                  src="/images/images allergoly/gas.webp"
                  alt="Лечение заболеваний ЖКТ"
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
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Лечение заболеваний ЖКТ</h2>
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

      {/* Services Section */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Гастроэнтеролог в Одинцово - услуги диагностики и лечения ЖКТ
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг гастроэнтерологии
            </p>
            <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
              <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">Услуги гастроэнтерологии</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gastroenterologyServices.map((service, index) => (
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
                Консультация гастроэнтеролога в Одинцово - профессиональная диагностика ЖКТ
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Гастроэнтеролог в Одинцово - это медицинский эксперт, который занимается диагностикой, лечением и профилактикой заболеваний желудочно-кишечного тракта. 
                В клинике «Альтамед-с» в Одинцово консультируют высококвалифицированные гастроэнтерологи с многолетним стажем работы и глубокими знаниями в области заболеваний пищеварительной системы. 
                Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук, активно участвующие в научно-исследовательской деятельности. 
                Для получения качественной гастроэнтерологической помощи в Одинцово и Московской области рекомендуем обратиться именно в «Альтамед-с».
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Консультация гастроэнтеролога в Одинцово требуется при обнаружении симптомов заболеваний органов пищеварения, когда есть нарушения в работе желудочно-кишечного тракта. 
                Заболевания ЖКТ требуют профессионального подхода, поэтому самостоятельная диагностика крайне нежелательна. 
                Наиболее эффективным решением станет обращение к опытному гастроэнтерологу в «Альтамед-с» в Одинцово. 
                Наши специалисты проведут комплексное обследование, включая лабораторные анализы и инструментальные методы диагностики, установят точный диагноз, разработают индивидуальную схему терапии и дадут рекомендации по предотвращению обострений.
              </p>
            </div>
              <div className="relative">
                <img 
                  src="/images/images allergoly/gas.webp" 
                  alt="Гастроэнтерология" 
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
            Когда нужен гастроэнтеролог в Одинцово - симптомы заболеваний ЖКТ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">боли в животе различной локализации;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">тошнота и рвота;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">изжога и отрыжка;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">нарушения стула (запоры, диарея);</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">вздутие живота и метеоризм;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">потеря аппетита;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">изменение вкусовых ощущений;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">чувство тяжести в желудке;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">неприятный запах изо рта;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">изменение цвета кала;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">боли при глотании;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">рецидивирующие желудочные расстройства.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive sections */}
      <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Часто задаваемые вопросы о гастроэнтерологии в Одинцово
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
                  Диагностика заболеваний пищеварительной системы
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
                      В клинике «Альтамед-с» используется передовое диагностическое оборудование последнего поколения для комплексного обследования желудочно-кишечного тракта. Наши специалисты применяют инновационные методики ультразвуковой, эндоскопической, рентгенологической и функциональной диагностики:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Гастроскопия</h4>
                        <p>
                          Визуальное обследование верхних отделов пищеварительного тракта с использованием тонкого эндоскопа - ключевой метод выявления воспалительных процессов, эрозий, язв, новообразований. 
                          В «Альтамед-с» процедура выполняется под седацией, что обеспечивает полный комфорт пациента. 
                          Дополнительно возможно проведение быстрого теста на Helicobacter pylori (результат через 5 минут) и взятие образцов ткани для гистологического анализа при подозрении на онкологические процессы.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Гастропанель</h4>
                        <p>
                          Инновационный лабораторный метод оценки состояния желудочной слизистой через анализ специфических маркеров в крови. 
                          Данное исследование помогает врачу определиться с тактикой лечения или принять решение о необходимости более детального инструментального обследования.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Компьютерная и магнитно-резонансная томография брюшной полости (КТ и МРТ)</h4>
                        <p>
                          Высокоточные методы послойного сканирования органов брюшной полости с использованием новейших томографов. 
                          Технология позволяет обнаружить минимальные патологические изменения размером от нескольких миллиметров, обеспечивая врачу исчерпывающую диагностическую информацию.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Капсульная эндоскопия</h4>
                        <p>
                          Революционная технология обследования кишечника с помощью миниатюрной камеры в специальной капсуле, которая проходит через весь пищеварительный тракт, передавая детальные изображения.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Лабораторные анализы</h4>
                        <p>
                          Наша лаборатория выполняет комплексные исследования для точной диагностики: биохимические показатели крови, функциональные пробы печени, выявление паразитарных инвазий, диагностика аутоиммунных патологий ЖКТ, определение онкологических маркеров и специфических показателей воспалительных заболеваний кишечника, оценка ферментативной активности поджелудочной железы.
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
                  Консервативные методы лечения
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
                      Лечение заболеваний ЖКТ в «Альтамед-с» базируется на комплексном подходе с использованием современных терапевтических методик:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Медикаментозная терапия</h4>
                          <p>
                            Применение современных фармакологических препаратов для устранения симптомов и купирования воспалительных процессов в органах пищеварения, а также для предотвращения рецидивов хронических патологий.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Нелекарственные методы лечения</h4>
                          <p>
                            Альтернативные методы воздействия на пищеварительную систему: аппаратная физиотерапия, методы очищения организма, озонотерапия и другие передовые технологии восстановления.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Диететика</h4>
                          <p>
                            Персонализированный подход к составлению рациона питания с учетом специфики заболевания, индивидуальных особенностей организма и образа жизни пациента.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Фитотерапия</h4>
                          <p>
                            Использование природных компонентов и растительных экстрактов в качестве дополнения к основной терапии для мягкого воздействия на пищеварительную систему.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Разгрузочно-диетическая терапия</h4>
                          <p>
                            Контролируемое ограничение питания под медицинским наблюдением для стимуляции восстановительных процессов при хронических воспалительных заболеваниях пищеварительной системы.
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
                  Оперативное (хирургическое) лечение
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
                      Хирургическое отделение «Альтамед-с» выполняет оперативные вмешательства любой сложности с применением инновационных технологий и оборудования. 
                      Оперативное лечение показано при осложненных формах патологий и неэффективности консервативной терапии:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Заболевания пищевода</h4>
                          <p>
                            Диафрагмальные грыжи, гастроэзофагеальная рефлюксная болезнь, метаплазия слизистой, новообразования различной этиологии, злокачественные опухоли.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Заболевания желудка и двенадцатиперстной кишки</h4>
                          <p>
                            Пептические язвы с осложнениями, злокачественные новообразования желудка, стенозы, перфорации и другие критические состояния.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Заболевания поджелудочной железы</h4>
                          <p>
                            Осложненные формы воспалительных процессов, кистозные образования, неопластические процессы, требующие радикального лечения.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Заболевания толстой кишки</h4>
                          <p>
                            Дивертикулярная болезнь, полипоз, злокачественные новообразования толстого кишечника, воспалительные заболевания с осложнениями.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Заболевания печени и желчного пузыря</h4>
                          <p>
                            Холелитиаз с осложнениями, новообразования печени и желчевыводящих путей, цирротические изменения, требующие хирургической коррекции.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                      <p className="text-gray-700">
                        Оперативные вмешательства выполняются командой высококлассных специалистов: хирургов, анестезиологов-реаниматологов, операционных медсестер. 
                        В «Альтамед-с» созданы оптимальные условия для проведения операций: современные операционные блоки и комфортные палаты для послеоперационного наблюдения.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}
