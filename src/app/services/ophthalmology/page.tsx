'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function OphthalmologyPage() {
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Услуги офтальмологии по прайсу (коды и цены актуальны)
  const ophthalmologyServices = [
    {
      category: 'Консультации офтальмолога',
      services: [
        { code: 'B01.029.001', name: 'Прием (осмотр, консультация) врача-офтальмолога первичный', price: '3260' },
        { code: 'B01.029.002', name: 'Прием (осмотр, консультация) врача-офтальмолога повторный', price: '3050' },
        { code: 'B01.029.003', name: 'Консультация врача после проведенного аппаратного лечения', price: '740' }
      ]
    },
    {
      category: 'Диагностические исследования',
      services: [
        { code: 'A02.26.003', name: 'Офтальмоскопия', price: '840' },
        { code: 'A02.26.004', name: 'Скиаскопия', price: '530' },
        { code: 'A02.26.005', name: 'Офтальмотонометрия', price: '740' },
        { code: 'A02.26.006', name: 'Исследование аккомодации', price: '420' },
        { code: 'A02.26.007', name: 'Биомикроскопия глаза', price: '530' },
        { code: 'A02.26.008', name: 'Тонография глаз', price: '1370' },
        { code: 'A02.26.009', name: 'Компьютерная периметрия', price: '1470' },
        { code: 'A02.26.010', name: 'Авторефрактометрия с узким зрачком', price: '420' }
      ]
    },
    {
      category: 'Инъекции и процедуры',
      services: [
        { code: 'A11.26.001', name: 'Пара- и ретробульбарные инъекции', price: '740' },
        { code: 'A11.26.002', name: 'Субконъюнктивальная инъекция', price: '740' },
        { code: 'A16.26.001', name: 'Удаление инородного тела из переднего сегмента глаза', price: '2840' },
        { code: 'A22.26.001', name: 'Лазерная стимуляция цилиарной мышцы', price: '1370' }
      ]
    },
    {
      category: 'Коррекция зрения',
      services: [
        { code: 'B03.026.001', name: 'Подбор очковой коррекции зрения', price: '740' },
        { code: 'B03.026.002', name: 'Подбор контактной коррекции зрения', price: '1890' },
        { code: 'B03.026.003', name: 'МКЛ "SAUFLON CLARITI 1 day" (30 шт.)', price: '3050' },
        { code: 'B03.026.004', name: 'МКЛ "SAUFLON CLARITI 1day TORIC" (30 шт.)', price: '3680' },
        { code: 'B03.026.005', name: 'МКЛ "Biofiniti" (3бл)', price: '3780' },
        { code: 'B03.026.006', name: 'МКЛ "Biofiniti toric" (3бл)', price: '4200' },
        { code: 'B03.026.007', name: 'Раствор "Unica Avizor Sensitiv" 350 мл', price: '1050' },
        { code: 'B03.026.008', name: 'МКЛ "Avaira Vitality" (6бл)', price: '3890' },
        { code: 'B03.026.009', name: 'МКЛ "Avaira Vitality toric" (6бл)', price: '4200' }
      ]
    },
    {
      category: 'Физиотерапия и массаж',
      services: [
        { code: 'A21.26.001', name: 'Массаж век медицинский', price: '1050' },
        { code: 'A21.26.002', name: 'Низкочастотная магнитотерапия на орган зрения', price: '840' },
        { code: 'A21.26.003', name: 'Электростимуляция зрительного нерва', price: '840' },
        { code: 'A21.26.004', name: 'Электростимуляция цилиарного тела', price: '840' },
        { code: 'A21.26.005', name: 'Рефлексотерапия при заболеваниях органа зрения', price: '2210' }
      ]
    },
    {
      category: 'Тренировки и упражнения',
      services: [
        { code: 'A22.26.002', name: 'Упражнения для восстановления и укрепления бинокулярного зрения', price: '2520' },
        { code: 'A22.26.003', name: 'Упражнения для восстановления и укрепления бинокулярного зрения на аппарате Синоптофор', price: '840' },
        { code: 'A22.26.004', name: 'Упражнения для тренировки цилиарной мышцы', price: '2420' }
      ]
    }
  ];

  // Заболевания по алфавиту
  const eyeConditions = [
    { letter: 'А', conditions: ['Амблиопия', 'Анизокория', 'Астигматизм', 'Атрофия зрительного нерва'] },
    { letter: 'Б', conditions: ['Бельмо', 'Блефарит', 'Близорукость'] },
    { letter: 'В', conditions: ['Вирусный конъюктивит'] },
    { letter: 'Г', conditions: ['Гемианопсия', 'Герпес на глазу', 'Глазная мигрень', 'Глаукома'] },
    { letter: 'Д', conditions: ['Дакриоцистит', 'Дальнозоркость', 'Дальтонизм', 'Дерматит век', 'Деструкция стекловидного тела', 'Диабетическая ретинопатия'] },
    { letter: 'И', conditions: ['Иридоциклит'] },
    { letter: 'К', conditions: ['Катаракта', 'Кератит', 'Кератоконус', 'Колобома глаза', 'Конъюнктивит', 'Косоглазие', 'Куриная слепота'] },
    { letter: 'М', conditions: ['Мейбомит', 'Миопический астигматизм'] },
    { letter: 'Н', conditions: ['Непроходимость носослезного канала', 'Нистагм'] },
    { letter: 'О', conditions: ['Ожог глаза', 'Отслоение сетчатки'] },
    { letter: 'П', conditions: ['Пингвекула', 'Пресбиопия', 'Птеригиум', 'Птоз верхнего века'] },
    { letter: 'Р', conditions: ['Разрыв сетчатки глаза', 'Ретинопатия'] },
    { letter: 'С', conditions: ['Синдром Элерса-Данлоса', 'Синдром сухого глаза', 'Синдрома Горнера', 'Слепота'] },
    { letter: 'Т', conditions: ['Трахома'] },
    { letter: 'У', conditions: ['Увеит'] },
    { letter: 'Х', conditions: ['Халязион'] },
    { letter: 'Э', conditions: ['Экзофтальм', 'Энофтальм', 'Эпикантус', 'Эписклерит глаза'] },
    { letter: 'Я', conditions: ['Ячмень'] }
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
            <span className="text-gray-900">Офтальмология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Офтальмология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний глаз у взрослых и детей в Одинцово
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/images allergoly/oftalmologia.webp"
                    alt="Диагностика заболеваний глаз"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Диагностика заболеваний глаз</div>
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
                  src="/images/images allergoly/oftalmologia.webp"
                  alt="Офтальмология в Одинцово"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Офтальмология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная диагностика и лечение заболеваний глаз</p>
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
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Услуги офтальмологии
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный спектр диагностических и лечебных процедур для здоровья глаз
              </p>
              <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
                <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
              </p>
            </div>

            <div className="space-y-8">
              {ophthalmologyServices.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service) => (
                        <div 
                          key={service.code}
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
              Что мы лечим
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                Уже много лет мы успешно занимаемся лечением заболеваний и травм глаз и зрительной системы. Мы возвращаем пациентам радость жизни, способность видеть мир во всех его красках, избавляем от проблем, страхов и комплексов, связанных с плохим зрением.
              </p>
            </div>

            {/* Alphabetical list of conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
                <div className="space-y-1 text-sm">
                  <div>Амблиопия</div>
                  <div>Анизокория</div>
                  <div>Астигматизм</div>
                  <div>Атрофия зрительного нерва</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Б</div>
                <div className="space-y-1 text-sm">
                  <div>Бельмо</div>
                  <div>Блефарит</div>
                  <div>Близорукость</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
                <div className="space-y-1 text-sm">
                  <div>Вирусный конъюктивит</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Г</div>
                <div className="space-y-1 text-sm">
                  <div>Гемианопсия</div>
                  <div>Герпес на глазу</div>
                  <div>Глазная мигрень</div>
                  <div>Глаукома</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Д</div>
                <div className="space-y-1 text-sm">
                  <div>Дакриоцистит</div>
                  <div>Дальнозоркость</div>
                  <div>Дальтонизм</div>
                  <div>Дерматит век</div>
                  <div>Деструкция стекловидного тела</div>
                  <div>Диабетическая ретинопатия</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">И</div>
                <div className="space-y-1 text-sm">
                  <div>Иридоциклит</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">К</div>
                <div className="space-y-1 text-sm">
                  <div>Катаракта</div>
                  <div>Кератит</div>
                  <div>Кератоконус</div>
                  <div>Колобома глаза</div>
                  <div>Конъюнктивит</div>
                  <div>Косоглазие</div>
                  <div>Куриная слепота</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">М</div>
                <div className="space-y-1 text-sm">
                  <div>Мейбомит</div>
                  <div>Миопический астигматизм</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Н</div>
                <div className="space-y-1 text-sm">
                  <div>Непроходимость носослезного канала</div>
                  <div>Нистагм</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">О</div>
                <div className="space-y-1 text-sm">
                  <div>Ожог глаза</div>
                  <div>Отслоение сетчатки</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">П</div>
                <div className="space-y-1 text-sm">
                  <div>Пингвекула</div>
                  <div>Пресбиопия</div>
                  <div>Птеригиум</div>
                  <div>Птоз верхнего века</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Р</div>
                <div className="space-y-1 text-sm">
                  <div>Разрыв сетчатки глаза</div>
                  <div>Ретинопатия</div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">С</div>
                <div className="space-y-1 text-sm">
                  <div>Синдром Элерса-Данлоса</div>
                  <div>Синдром сухого глаза</div>
                  <div>Синдрома Горнера</div>
                  <div>Слепота</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Т</div>
                <div className="space-y-1 text-sm">
                  <div>Трахома</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">У</div>
                <div className="space-y-1 text-sm">
                  <div>Увеит</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Х</div>
                <div className="space-y-1 text-sm">
                  <div>Халязион</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
                <div className="space-y-1 text-sm">
                  <div>Экзофтальм</div>
                  <div>Энофтальм</div>
                  <div>Эпикантус</div>
                  <div>Эписклерит глаза</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Я</div>
                <div className="space-y-1 text-sm">
                  <div>Ячмень</div>
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
                  Консультация хорошего врача-офтальмолога в Одинцово
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Офтальмолог - это врач, который занимается лечением заболеваний и травм глаз и зрительной системы. 
                  При лечении глазных заболеваний выбор грамотного специалиста особенно важен: от этого зависит качество жизни и наша физическая полноценность. 
                  Ищете опытного практикующего врача-офтальмолога с отличной репутацией? Вам нужен офтальмолог «Альтамед-с»! 
                  В нашем медицинском центре вы сможете начать лечение у грамотных высококвалифицированных специалистов в любой день, включая выходные и праздники.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Многие откладывают визит к окулисту, если нарушения зрения не доставляют особого дискомфорта. 
                  Специалисты «Альтамед-с» напоминают: чем раньше вы обратитесь к офтальмологу, тем быстрее и с меньшим врачебным вмешательством будет достигнут положительный результат. 
                  Записаться на прием к офтальмологу необходимо сразу при появлении любого из тревожных симптомов.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#appointment"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 text-center"
                  >
                    Записаться на прием
                  </Link>
                  <Link 
                    href="tel:+74952554450"
                    className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-300 text-center"
                  >
                    Позвонить
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/images allergoly/oftalmologia.webp" 
                  alt="Офтальмология" 
                  className="w-full h-auto rounded-full shadow-lg"
                />
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
                Ответы на популярные вопросы об офтальмологии
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('diseases')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Какие заболевания лечит врач-офтальмолог</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['diseases'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['diseases'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Офтальмологи в «Альтамед-с» лечат широкий спектр заболеваний глаз и зрительной системы.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Заболевания сетчатки и зрительного нерва</li>
                      <li>• Катаракта, глаукома, близорукость, дальнозоркость</li>
                      <li>• Воспалительные заболевания глаз</li>
                      <li>• Травмы и повреждения глаз</li>
                      <li>• Нарушения бинокулярного зрения</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('diagnostics')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Диагностика в офтальмологии</h3>
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
                      Современная диагностика глазных заболеваний включает комплексное обследование с использованием высокотехнологичного оборудования.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Биомикроскопия глаза и офтальмоскопия</li>
                      <li>• Тонометрия и периметрия</li>
                      <li>• Авторефрактометрия и скиаскопия</li>
                      <li>• УЗИ глаза и оптическая когерентная томография</li>
                      <li>• Исследование полей зрения и цветоощущения</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('treatment')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Консервативное лечение</h3>
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
                      Консервативное лечение глазных заболеваний включает медикаментозную терапию, физиотерапевтические процедуры и специальные упражнения.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Медикаментозная терапия с применением современных препаратов</li>
                      <li>• Физиотерапевтические процедуры и массаж</li>
                      <li>• Аппаратное лечение и тренировки зрения</li>
                      <li>• Коррекция зрения очками и контактными линзами</li>
                      <li>• Профилактические мероприятия</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('laser')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Лазерное лечение</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['laser'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['laser'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Лазерные методы лечения в офтальмологии позволяют эффективно решать многие проблемы зрения с минимальным вмешательством.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Лазерная коррекция зрения (LASIK, ФРК)</li>
                      <li>• Лазерная коагуляция сетчатки</li>
                      <li>• Лазерная трабекулопластика при глаукоме</li>
                      <li>• Лазерная капсулотомия при катаракте</li>
                      <li>• Лазерная стимуляция и лечение</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('surgery')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Глазная хирургия - хирургическое лечение</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['surgery'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['surgery'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Хирургическое лечение глазных заболеваний проводится при необходимости радикального решения проблемы.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Факоэмульсификация катаракты</li>
                      <li>• Антиглаукоматозные операции</li>
                      <li>• Витрэктомия и операции на сетчатке</li>
                      <li>• Кератопластика и трансплантация роговицы</li>
                      <li>• Операции при косоглазии и птозе</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('correction')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Коррекция зрения</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['correction'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['correction'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Современные методы коррекции зрения позволяют вернуть четкое зрение пациентам с различными нарушениями рефракции.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Подбор очков для коррекции зрения</li>
                      <li>• Подбор и адаптация контактных линз</li>
                      <li>• Лазерная коррекция зрения</li>
                      <li>• Имплантация интраокулярных линз</li>
                      <li>• Ортокератология (ночные линзы)</li>
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
              Поводы обращения к врачу-офтальмологу
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">сухость в глазах, быстрая утомляемость глаз;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">снижение остроты зрения, ограничение поля зрения;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">отечность и покраснение слизистых оболочек глаза, век;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">ощущение инородного тела, жжение, зуд, резь;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">слезотечение, прозрачные, гнойные, пенистые выделения;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">боли в глазу, области лба, висков;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">радужные круги в глазах, двоение, мушки, искры и т.п.;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">снижение способности различать цвета, светобоязнь;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">травма, ожог глаз.</p>
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
