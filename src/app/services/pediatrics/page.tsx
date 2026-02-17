'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function PediatricsPage() {
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Услуги педиатрии
  const pediatricsServices = [
    {
      category: 'Консультации педиатра',
      services: [
        { code: 'B01.031.001', name: 'Прием (осмотр, консультация) врача-педиатра первичный', price: '3260' },
        { code: 'B01.031.002', name: 'Прием (осмотр, консультация) врача-педиатра повторный', price: '2840' },
        { code: 'B04.031.001', name: 'Диспансерный прием (осмотр, консультация) врача-педиатра', price: '2420' },
        { code: 'B04.031.002', name: 'Профилактический прием (осмотр, консультация) врача-педиатра', price: '1050' },
      ]
    },
    {
      category: 'Вакцинация',
      services: [
        { code: 'B04.014.004', name: 'Вакцинация', price: '530' },
      ]
    }
  ];

  // Заболевания, которые лечит педиатр
  const pediatricConditions = [
    { letter: 'А', conditions: ['Авитаминоз', 'Аллергия', 'Ангина', 'Анемия', 'Астма'] },
    { letter: 'Б', conditions: ['Бронхит', 'Бронхопневмония'] },
    { letter: 'В', conditions: ['Ветряная оспа', 'Воспаление легких'] },
    { letter: 'Г', conditions: ['Гастрит', 'Гайморит', 'Глистные инвазии'] },
    { letter: 'Д', conditions: ['Дисбактериоз', 'Диатез', 'Дистрофия'] },
    { letter: 'З', conditions: ['Задержка развития', 'Задержка роста', 'Запор'] },
    { letter: 'И', conditions: ['Иммунодефицит', 'Инфекционные заболевания'] },
    { letter: 'К', conditions: ['Коклюш', 'Корь', 'Краснуха', 'Кривошея'] },
    { letter: 'Л', conditions: ['Ларингит', 'Ларинготрахеит'] },
    { letter: 'Н', conditions: ['Нарушение сна', 'Нарушение пищеварения', 'Недостаток веса'] },
    { letter: 'О', conditions: ['ОРВИ', 'ОРЗ', 'Отит', 'Ожирение'] },
    { letter: 'П', conditions: ['Пневмония', 'Пиелонефрит', 'Плохой аппетит'] },
    { letter: 'Р', conditions: ['Рахит', 'Ринит', 'Расстройство желудка'] },
    { letter: 'С', conditions: ['Скарлатина', 'Стоматит'] },
    { letter: 'Ф', conditions: ['Фарингит', 'Фурункулез'] },
    { letter: 'Ц', conditions: ['Цистит'] },
    { letter: 'Э', conditions: ['Энтероколит', 'Энурез'] }
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
            <span className="text-gray-900">Педиатрия</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Педиатрия в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Комплексное медицинское обслуживание детей от рождения до 18 лет в Одинцово
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/yslugi/Pediatrician.webp"
                    alt="Педиатрия в Одинцово"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Здоровье детей — наш приоритет</div>
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
                  src="/images/yslugi/Pediatrician.webp"
                  alt="Педиатрия в Одинцово"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Педиатрия в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная медицинская помощь детям от рождения до 18 лет</p>
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
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span></div><p className="text-gray-700 font-medium text-left pt-2">Опытные врачи-педиатры с многолетним стажем работы</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span></div><p className="text-gray-700 font-medium text-left pt-2">Индивидуальный подход к каждому ребенку с учетом возраста и особенностей</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span></div><p className="text-gray-700 font-medium text-left pt-2">Современная диагностика и лечение в соответствии с клиническими рекомендациями</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span></div><p className="text-gray-700 font-medium text-left pt-2">Комфортные условия для детей и родителей, доброжелательная атмосфера</p></div>
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span></div><p className="text-gray-700 font-medium">Опытные врачи-педиатры с многолетним стажем работы</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span></div><p className="text-gray-700 font-medium">Индивидуальный подход к каждому ребенку с учетом возраста и особенностей</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span></div><p className="text-gray-700 font-medium">Современная диагностика и лечение в соответствии с клиническими рекомендациями</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span></div><p className="text-gray-700 font-medium">Комфортные условия для детей и родителей, доброжелательная атмосфера</p></div>
          </div>
        </div>
      </section>

      <div className="flex-1">
        {/* Services Section */}
        <section className="py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Услуги педиатрии
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный спектр медицинских услуг для детей от рождения до 18 лет
              </p>
              <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
                <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
              </p>
            </div>

            <div className="space-y-8">
              {pediatricsServices.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                                {service.name}
                              </h4>
                              <div className="text-emerald-600 font-semibold text-lg">
                                {service.price} ₽
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
              ))}
            </div>
          </div>
        </section>

        {/* What we treat section */}
        <section className="py-16 bg-white" aria-labelledby="what-we-treat-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="what-we-treat-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Заболевания, которые лечит педиатр
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                Врачи-педиатры клиники «Альтамед-С» в Одинцово занимаются диагностикой и лечением широкого спектра заболеваний у детей. 
                Мы оказываем квалифицированную медицинскую помощь детям всех возрастов, используя современные методы диагностики и лечения 
                в соответствии с международными клиническими рекомендациями.
              </p>
            </div>

            {/* Alphabetical list of conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pediatricConditions.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-2">
                  <div className="text-2xl font-bold text-emerald-600 mb-4">{group.letter}</div>
                  <div className="space-y-1 text-sm">
                    {group.conditions.map((condition, idx) => (
                      <div key={idx}>{condition}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Консультация детского педиатра в Одинцово
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Педиатр — это врач, специализирующийся на диагностике, лечении и профилактике заболеваний у детей от рождения до 18 лет. 
                  В клинике «Альтамед-С» в Одинцово работают опытные врачи-педиатры, которые с вниманием и заботой относятся к каждому ребенку.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Регулярные профилактические осмотры у педиатра помогают вовремя выявить проблемы со здоровьем, провести вакцинацию, 
                  получить рекомендации по питанию и режиму дня. Мы создаем комфортные условия для детей и их родителей, обеспечивая 
                  качественное медицинское обслуживание.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/yslugi/Pediatrician.webp" 
                  alt="Педиатрия в Одинцово" 
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Age groups section */}
        <section className="py-16 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Педиатрическая помощь детям разных возрастов
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-[20px] p-6 shadow-md border-l-4 border-blue-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Грудной возраст (0-1 год)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Плановые осмотры и оценка физического развития</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Контроль набора веса, роста, окружности головы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Вакцинация по национальному календарю</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Консультации по грудному вскармливанию и прикорму</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Диагностика и лечение заболеваний новорожденных</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-[20px] p-6 shadow-md border-l-4 border-blue-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Дошкольный возраст (1-6 лет)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Профилактические осмотры перед детским садом</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Диагностика и лечение ОРВИ, простудных заболеваний</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Оценка психомоторного развития</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Вакцинация и ревакцинация</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Консультации по питанию и режиму дня</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-[20px] p-6 shadow-md border-l-4 border-blue-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Школьный возраст (7-18 лет)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Профилактические осмотры перед школой</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Медицинские справки для школы и спортивных секций</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Лечение острых и хронических заболеваний</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Вакцинация подростков</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Консультации по здоровому образу жизни</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-lg text-gray-600">
                Ответы на популярные вопросы о педиатрии
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('when-to-visit')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Когда нужно обращаться к педиатру?</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['when-to-visit'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['when-to-visit'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      К педиатру следует обращаться в следующих случаях:
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Плановые профилактические осмотры по возрасту</li>
                      <li>• Повышение температуры тела выше 38°C</li>
                      <li>• Симптомы простуды: кашель, насморк, боль в горле</li>
                      <li>• Расстройство пищеварения: рвота, диарея, запор</li>
                      <li>• Сыпь на коже неясного происхождения</li>
                      <li>• Боль в животе, головная боль</li>
                      <li>• Вялость, сонливость, отказ от еды</li>
                      <li>• Нарушение сна и поведения</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('vaccination')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Вакцинация детей</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['vaccination'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['vaccination'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Вакцинация — важнейшая часть профилактики инфекционных заболеваний у детей. В клинике «Альтамед-С» проводится:
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Вакцинация по национальному календарю профилактических прививок</li>
                      <li>• Дополнительная вакцинация по желанию родителей</li>
                      <li>• Импортные и отечественные вакцины</li>
                      <li>• Индивидуальный календарь прививок для детей с особенностями здоровья</li>
                      <li>• Консультации перед вакцинацией и наблюдение после прививки</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('examination')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Профилактические осмотры</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['examination'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['examination'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Профилактические осмотры помогают своевременно выявить проблемы со здоровьем и предупредить развитие заболеваний.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Осмотры новорожденных в первые дни жизни</li>
                      <li>• Плановые осмотры в 1, 3, 6, 9, 12 месяцев</li>
                      <li>• Осмотры перед поступлением в детский сад и школу</li>
                      <li>• Ежегодные профилактические осмотры школьников</li>
                      <li>• Оценка физического и нервно-психического развития</li>
                      <li>• Оформление медицинских справок и документов</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('diagnostics')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Диагностика в педиатрии</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['diagnostics'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['diagnostics'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      В клинике «Альтамед-С» доступен полный спектр диагностических исследований для детей:
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Лабораторная диагностика (анализы крови, мочи, кала)</li>
                      <li>• УЗИ органов и систем (брюшная полость, почки, сердце, головной мозг)</li>
                      <li>• Функциональная диагностика (ЭКГ, спирометрия)</li>
                      <li>• Консультации специалистов: невролог, офтальмолог, отоларинголог и др.</li>
                      <li>• Диагностика аллергических заболеваний</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('treatment')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Лечение заболеваний у детей</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['treatment'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['treatment'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Педиатры «Альтамед-С» проводят лечение различных заболеваний у детей с применением современных методов:
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Лечение ОРВИ и простудных заболеваний</li>
                      <li>• Лечение бронхитов, пневмоний, заболеваний ЛОР-органов</li>
                      <li>• Лечение заболеваний желудочно-кишечного тракта</li>
                      <li>• Лечение аллергических заболеваний</li>
                      <li>• Лечение инфекционных заболеваний</li>
                      <li>• Коррекция нарушений роста и развития</li>
                      <li>• Подбор индивидуальной терапии с учетом возраста и веса ребенка</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Reasons to consult section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Когда нужно обратиться к педиатру
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Повышение температуры тела у ребенка</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Кашель, насморк, боль в горле</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Расстройство пищеварения: рвота, диарея, запор</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Сыпь на коже неясного происхождения</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Боль в животе, головная боль</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Вялость, сонливость, отказ от еды</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Нарушение сна и поведения</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Задержка физического или нервно-психического развития</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">Плановые профилактические осмотры</p>
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

