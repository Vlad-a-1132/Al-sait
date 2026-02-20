'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function ProctologyPage() {
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Услуги проктологии, организованные по категориям
  const proctologyServices = [
    {
      category: 'Консультации проктолога',
      services: [
        { name: 'Прием(осмотр, консультация) врача-колопроктолога к.м.н. первичный', price: '5000' },
        { name: 'Прием(осмотр, консультация) врача-колопроктолога к.м.н. повторный', price: '4100' },
        { name: 'Прием(осмотр, консультация) врача-колопроктолога первичный', price: '4700' },
        { name: 'Прием(осмотр, консультация) врача-колопроктолога повторный', price: '3400' }
      ]
    },
    {
      category: 'Диагностические процедуры',
      services: [
        { name: 'Ректороманоскопия', price: '3600' },
        { name: 'Ректороманоскопия с биопсией', price: '5900' },
        { name: 'Аноректальная манометрия (сфинктерометрия)', price: '1300' },
        { name: 'Биопсия из ануса и перианальной области', price: '3100' },
        { name: 'Биопсия опухоли, опухолевидных образований мягких тканей', price: '2400' }
      ]
    },
    {
      category: 'Лечебные процедуры',
      services: [
        { name: 'Постановка сифонной клизмы', price: '3600' },
        { name: 'Подкожное введение лекарственных препаратов (введение метиленового синего в ткани перианальной области)', price: '8200' },
        { name: 'Внутримышечное введение лекарственных препаратов – введение ботулинического токсина типа А (ксеомина) в зону анального сфинктера', price: '4700' },
        { name: 'Введение лекарственных препаратов с помощью клизмы', price: '2000' },
        { name: 'Воздействие инфракрасным или лазерным излучением (терапевтическое)', price: '1800' },
        { name: 'Плазмодинамическое воздействие (анальный плазмалифтинг -локальная инъекция тромбоцитарной аутоплазмы пациента)', price: '11600' }
      ]
    },
    {
      category: 'Хирургические операции',
      services: [
        { name: 'Удаление доброкачественных образований кожи (до 2см.)', price: '9100' },
        { name: 'Удаление доброкачественных образований кожи (более 2см.)', price: '14900' },
        { name: 'Удаление доброкачественных образований подкожной клетчатки крестцово-копчиковой зоны', price: '14900' },
        { name: 'Ушивание открытой раны крестцово-копчиковой зоны', price: '6000' },
        { name: 'Вскрытие и дренирование флегмоны (абсцесса) крестцово-копчиковой зоны', price: '12300' },
        { name: 'Сшивание кожи и подкожной клетчатки крестцово-копчиковой зоны', price: '1300' },
        { name: 'Наложение вторичных швов крестцово-копчиковой зоны', price: '2900' },
        { name: 'Разрез и иссечение ткани перианальной области, анальной крипты', price: '5600' },
        { name: 'Иссечение анальной бахромки', price: '8200' }
      ]
    },
    {
      category: 'Операции на полипах',
      services: [
        { name: 'Удаление полипа прямой кишки через ректоскоп', price: '4700' },
        { name: 'Удаление полипа прямой кишки через ректоскоп (больше трех)', price: '13900' },
        { name: 'Удаление полипа анального канала и прямой кишки', price: '3100' },
        { name: 'Удаление полипа толстой кишки', price: '3700' },
        { name: 'Иссечение гипертрофированного анального сосочка', price: '4700' },
        { name: 'Лазерное иссечение анальных полипов и гипертрофированных анальных сосочков', price: '11600' }
      ]
    },
    {
      category: 'Лечение геморроя',
      services: [
        { name: 'Латексное лигирование внутреннего геморроидального узла (1 узел)', price: '8200' },
        { name: 'Шовное лигирование кровоточащего геморроидального сосуда', price: '11600' },
        { name: 'Воздействие инфракрасным излучением на внутренние геморроидальные узлы', price: '5900' },
        { name: 'Склеротерапия геморроидальных узлов', price: '10900' },
        { name: 'Тромбэктомия из геморроидального узла', price: '8200' },
        { name: 'Иссечение тромбированного (наружного или внутреннего) геморроидального узла', price: '14900' },
        { name: 'Дезартеризация одного внутреннего г/узла, дополненная мукопексией', price: '20800' },
        { name: 'Геморроидэктомия по Ferguson (один узел)', price: '24400' },
        { name: 'Иссечение наружных узлов с помощью лазера', price: '29000' },
        { name: 'Удаление геморроидальных узлов', price: '23900' },
        { name: 'Лазерная деструкция внутренних геморроидальных узлов (LGP – лазерная геморроидопластика)', price: '34800' }
      ]
    },
    {
      category: 'Лечение анальных трещин',
      services: [
        { name: 'Лазерная вапоризация анальной трещины', price: '29000' },
        { name: 'Иссечение анальной трещины', price: '19100' }
      ]
    },
    {
      category: 'Лечение эпителиального копчикового хода',
      services: [
        { name: 'Иссечение эпителиального копчикового хода с ушиванием раны наглухо', price: '25200' },
        { name: 'Иссечение эпителиального копчикового хода в фазу острого воспаления', price: '26700' },
        { name: 'Вскрытие нагноившегося эпителиального копчикового хода', price: '13900' },
        { name: 'Иссечение эпителиального копчикового хода с использованием кожнопластических методик', price: '46400' },
        { name: 'Иссечение ЭКХ методом Баскома (удаление ЭКХ под кожей)', price: '40600' },
        { name: 'Иссечение ЭКХ методом Каридакиса', price: '46400' },
        { name: 'Абляция эпителиально копчикового свищевого хода лазерным излучение (методика FilaC)', price: '24400' },
        { name: 'Чрезраневая коагуляция пилонидальной кисты- синусэтомия', price: '24400' },
        { name: 'Вскрытие и санация нагноения пилонидальной кисты с лазерной коагуляцией полости абсцесса', price: '31300' },
        { name: 'Лазерная деструкция первичных свищевых эпителиальных копчиковых ходов (методика Pit Picking)', price: '23300' }
      ]
    },
    {
      category: 'Лечение парапроктита и свищей',
      services: [
        { name: 'Вскрытие и дренирование абсцесса стенки прямой кишки', price: '5900' },
        { name: 'Вскрытие острого гнойного парапроктита', price: '20800' },
        { name: 'Вскрытие острого гнойного подкожно-подслизистого парапроктита с ликвидацией внутреннего свищевого отверстия', price: '40600' },
        { name: 'Вскрытие острого гнойного парапроктита с наложением дренирующей лигатуры (Loose Seton)', price: '32500' },
        { name: 'Вскрытие и дренирование гнойного парапроктита с лазерной обработкой стенок абсцесса', price: '34800' },
        { name: 'Иссечение подкожно-подслизистого свища прямой кишки (операция Габриэля)', price: '33800' },
        { name: 'Иссечение свища с первичной сфинктеропластикой', price: '42900' },
        { name: 'Иссечение свища с закрытием внутреннего свищевого отверстия смещаемым лоскутом стенки прямой кишки', price: '54500' },
        { name: 'Иссечение свища с проведением свободно лежащей (Loose Seton) или режущей (метод Гиппократа) лигатуры', price: '47600' },
        { name: 'Иссечение свища с использованием ауто- или аллотрансплантата или биологического клея', price: '46400' },
        { name: 'Перевязка свищевого хода в межсфинктерном пространстве (операция LIFT)', price: '57900' },
        { name: 'Лазерное лечение анального свища (методика FILAC–Fistula Laser Closure)', price: '38300' },
        { name: 'Лазерное лечение анального свища (методика FILAC), дополненное лоскутным закрытием внутреннего свищевого хода', price: '42900' },
        { name: 'Подтягивание резинового сетона при лигатурном методе лечения анального свища', price: '3600' }
      ]
    },
    {
      category: 'Другие операции',
      services: [
        { name: 'Иссечение перианальной (пресакральной) кисты', price: '38300' },
        { name: 'Удаление кисты параректальной клетчатки', price: '30900' },
        { name: 'Удаление инородного тела прямой кишки без разреза', price: '12000' },
        { name: 'Удаление инородного тела прямой кишки с помощью разреза', price: '15600' },
        { name: 'Удаление калового камня прямой кишки', price: '13900' },
        { name: 'Обучение по уходу за стомой', price: '2400' },
        { name: 'Услуги по медицинской реабилитации пациента, перенесшего колопроктологическую операцию', price: '4700' },
        { name: 'Бужирование стеноза анального канала или прямой кишки, колостомы (одна процедура)', price: '2400' },
        { name: 'Реконструкция колостомы простая', price: '23300' },
        { name: 'Иссечение новообразований перианальной области (доброкачественные, остроконечные кондиломы)', price: '11300' },
        { name: 'Иссечение остроконечных кондилом перианальной области и анального канала', price: '31300' },
        { name: 'Гемостаз с помощью электро- или фотокоагуляции, лазерного излучения', price: '3600' },
        { name: 'Прижигание слизистой прямой кишки', price: '3100' }
      ]
    },
    {
      category: 'Перевязки и уход',
      services: [
        { name: 'Наложение повязки при гнойных заболеваниях кожи и подкожной клетчатки', price: '2900' },
        { name: 'Наложение повязки при нарушении целостности кожных покровов (послеоперационная чистая)', price: '2400' },
        { name: 'Вскрытие гематомы мягких тканей', price: '5900' }
      ]
    }
  ];

  // Заболевания по алфавиту
  const proctologyConditions = [
    { letter: 'А', conditions: ['Анальная трещина', 'Анальные бахромки'] },
    { letter: 'Б', conditions: ['Болезнь Крона', 'Боль в заднем проходе'] },
    { letter: 'В', conditions: ['Выпадение прямой кишки'] },
    { letter: 'Г', conditions: ['Геморрой'] },
    { letter: 'З', conditions: ['Запор'] },
    { letter: 'К', conditions: ['Кондиломы', 'Копчиковый ход', 'Кровь в кале'] },
    { letter: 'Л', conditions: ['Лечение парапроктита'] },
    { letter: 'П', conditions: ['Проктит'] },
    { letter: 'Р', conditions: ['Ректовагинальный свищ'] },
    { letter: 'С', conditions: ['Свищ прямой кишки', 'Синдром хронической тазовой боли'] },
    { letter: 'Э', conditions: ['Энкопрез'] },
    { letter: 'Я', conditions: ['Язвенный колит'] }
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
            <span className="text-gray-900">Проктология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Проктология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний прямой кишки и анальной области в Одинцово
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/images allergoly/proktolog.webp"
                    alt="Диагностика заболеваний прямой кишки"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Диагностика заболеваний прямой кишки</div>
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
                  src="/images/images allergoly/proktolog.webp"
                  alt="Проктология в Одинцово"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Проктология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная диагностика и лечение заболеваний прямой кишки</p>
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
                Услуги проктологии
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный спектр диагностических и лечебных процедур для здоровья прямой кишки и анальной области
              </p>
            </div>

            <div className="space-y-8">
              {proctologyServices.map((category, categoryIndex) => (
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
              Что мы лечим
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                Врачи-колопроктологи «Альтамед-с» успешно занимаются диагностикой, профилактикой и лечением заболеваний промежности, а также толстой, прямой и ободочной кишки, в том числе полипов, анальных трещин и геморроя, используя в своей работе современные методы диагностики.
              </p>
            </div>

            {/* Alphabetical list of conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
                <div className="space-y-1 text-sm">
                  <div>Анальная трещина</div>
                  <div>Анальные бахромки</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Б</div>
                <div className="space-y-1 text-sm">
                  <div>Болезнь Крона</div>
                  <div>Боль в заднем проходе</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
                <div className="space-y-1 text-sm">
                  <div>Выпадение прямой кишки</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Г</div>
                <div className="space-y-1 text-sm">
                  <div>Геморрой</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">З</div>
                <div className="space-y-1 text-sm">
                  <div>Запор</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">К</div>
                <div className="space-y-1 text-sm">
                  <div>Кондиломы</div>
                  <div>Копчиковый ход</div>
                  <div>Кровь в кале</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Л</div>
                <div className="space-y-1 text-sm">
                  <div>Лечение парапроктита</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">П</div>
                <div className="space-y-1 text-sm">
                  <div>Проктит</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Р</div>
                <div className="space-y-1 text-sm">
                  <div>Ректовагинальный свищ</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">С</div>
                <div className="space-y-1 text-sm">
                  <div>Свищ прямой кишки</div>
                  <div>Синдром хронической тазовой боли</div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Э</div>
                <div className="space-y-1 text-sm">
                  <div>Энкопрез</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Я</div>
                <div className="space-y-1 text-sm">
                  <div>Язвенный колит</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons to consult section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Поводы обращения к врачу-колопроктологу
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">боль и зуд в области заднего прохода, прямой кишке;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">ощущение инородного тела в прямой кишке;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">недержание кала, газов, каломазание и т.д.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">кровотечение, выделения гноя и слизи из заднего прохода;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">хронический запор либо понос;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">появление уплотнений, так называемых «шишек» в области заднего прохода;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">вздутие живота;</p>
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
                  Консультация хорошего врача-колопроктолога в Одинцово
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Проктологические заболевания могут длительное время протекать бессимптомно, а беспокоить начинают уже в запущенной, трудно поддающейся излечению стадии. 
                  Вот почему так важно ежегодно проходить профилактический осмотр у проктолога, а не откладывать визит до тех пор, пока нарушения в работе кишечника становятся очевидными: выпадают геморроидальные узлы, начинается кровотечение, появляется сильная боль.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Основными симптомами проктологических заболеваний являются дискомфортные ощущения в области кишечника и заднего прохода. 
                  В клинике «Альтамед-с» ведут прием опытные колопроктологи, которые занимаются диагностикой и лечением заболеваний прямой кишки и анальной области. 
                  Мы используем современное оборудование и передовые методики для обеспечения качественной медицинской помощи.
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
                  src="/images/images allergoly/proktolog.webp" 
                  alt="Проктология" 
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
                Ответы на популярные вопросы о проктологии
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('preparation')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Подготовка к приему у проктолога</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['preparation'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['preparation'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Правильная подготовка к приему проктолога обеспечивает качественную диагностику и комфорт пациента.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Очистительная клизма за 2-3 часа до приема</li>
                      <li>• Легкий завтрак в день приема</li>
                      <li>• Прием слабительных препаратов по назначению врача</li>
                      <li>• Соблюдение диеты за 2-3 дня до обследования</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('consultation')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Консультация проктолога</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['consultation'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['consultation'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Консультация проктолога включает комплексное обследование и постановку точного диагноза.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Сбор анамнеза и анализ жалоб</li>
                      <li>• Внешний осмотр перианальной области</li>
                      <li>• Пальцевое ректальное исследование</li>
                      <li>• Аноскопия и ректороманоскопия при необходимости</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('diagnostics')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Диагностика проктологических заболеваний</h3>
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
                      Современная диагностика проктологических заболеваний включает комплексное обследование с использованием высокотехнологичного оборудования.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Аноскопия и ректороманоскопия</li>
                      <li>• ирригоскопия</li>
                      <li>• УЗИ органов малого таза</li>
                      <li>• МРТ и КТ при необходимости</li>
                      <li>• Лабораторные исследования</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('treatment')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Лечение проктологических заболеваний</h3>
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
                      Лечение проктологических заболеваний включает консервативные и хирургические методы с использованием современных технологий.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Консервативное лечение медикаментами</li>
                      <li>• Малоинвазивные хирургические методы</li>
                      <li>• Лазерные технологии лечения</li>
                      <li>• Радиоволновая хирургия</li>
                      <li>• Реабилитация после операций</li>
                    </ul>
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
