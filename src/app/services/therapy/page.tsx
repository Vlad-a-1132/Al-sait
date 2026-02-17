"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import AppointmentForm from '@/components/AppointmentForm';

export default function TherapyPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const therapyServices = [
    {
      code: "В01.047.001",
      name: "Прием (осмотр, консультация) врача-терапевта первичный",
      price: 3260,
      description: "Первичная консультация и осмотр у врача-терапевта с постановкой диагноза и назначением лечения"
    },
    {
      code: "В01.047.002",
      name: "Прием (осмотр, консультация) врача-терапевта повторный",
      price: 2840,
      description: "Повторная консультация у врача-терапевта для контроля лечения и корректировки назначений"
    }
  ];

  const reasonsForConsultation = [
    "Общая слабость, недомогание, быстрая утомляемость",
    "Кашель, хрипы в легких, боли в горле",
    "Выделения из носа, ушной раковины, кровохарканье",
    "Онемение или покалывание в конечностях",
    "Бессонница, депрессия, безосновательное чувство тревоги",
    "Признаки простуды, гриппа",
    "Затрудненное дыхание, одышка",
    "Боль или шум в ушах, потеря слуха",
    "Боли в желудке, чрезмерная икота, изжога, тошнота, нарушение стула",
    "Высыпания на коже, изменение ее пигментации",
    "Высокая температура, лихорадка",
    "Ухудшение или потеря зрения",
    "Боли за грудиной, в области сердца",
    "Существенные изменения артериального давления",
    "Воспаление слизистых оболочек глаз, ротовой полости и т. п."
  ];

  const medicalDocuments = [
    "Справка для посещения бассейна.",
    "Санаторно-курортная карта.",
    "Справка формы 070/у для получения путевки.",
    "Справка о наличии (отсутствии) контактов с больными инфекционными заболеваниями."
  ];

  const faqItems = [
    {
      question: "Какие заболевания лечит врач-терапевт",
      answer: "Терапевт лечит широкий спектр заболеваний внутренних органов: сердечно-сосудистые заболевания, болезни органов дыхания, желудочно-кишечного тракта, эндокринные нарушения, инфекционные заболевания и многое другое."
    },
    {
      question: "Диагностика в терапии",
      answer: "В терапии используются современные методы диагностики: лабораторные анализы, инструментальные исследования, функциональная диагностика, УЗИ, рентгенологические исследования и другие методы."
    },
    {
      question: "Методы лечения терапевтических заболеваний",
      answer: "Лечение включает медикаментозную терапию, физиотерапию, диетотерапию, лечебную физкультуру, санаторно-курортное лечение и другие консервативные методы лечения."
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Терапия</span>
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
              Терапия в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Консультация хорошего врача-терапевта в Москве
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/yslugi/terapiay 1.webp"
                    alt="Общая терапия и лечение"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Общая терапия и лечение</div>
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
                  src="/images/yslugi/terapiay 1.webp"
                  alt="Терапия в Одинцово"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Терапия в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная диагностика и лечение заболеваний внутренних органов</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Следование международным стандартам медицинской помощи
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
                Полная диагностика и индивидуальный подход к лечению
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
                Новейшее оборудование и собственная диагностическая лаборатория
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
                Качественный сервис и доступные цены на медицинские услуги
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Что мы лечим */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Что мы лечим
          </h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Терапевт - это врач, занимающийся диагностикой, лечением и профилактикой широкого круга заболеваний внутренних органов. Также консультация терапевта необходима перед предстоящей операцией, при беременности, планируемой записи в спортивные и оздоровительные клубы и секции, а также при хронических заболеваниях.
            </p>
            <p className="text-gray-600">
              Решение записаться к терапевту в «Альтамед-с» гарантирует вам медицинскую помощь лучших специалистов Москвы – врачей высшей категории, кандидатов наук, ведущих активную практическую и научно-исследовательскую деятельность.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1">А</h3>
              <div className="text-gray-700 space-y-1">
                <div>Авитаминоз</div>
                <div>Анемия</div>
                <div>Артериальная гипертензия</div>
                <div>Астения</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">Д</h3>
              <div className="text-gray-700 space-y-1">
                <div>Диатез</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">О</h3>
              <div className="text-gray-700 space-y-1">
                <div>Острая респираторная вирусная инфекция (ОРВИ)</div>
                <div>Острые респираторные заболевания (ОРЗ)</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">Х</h3>
              <div className="text-gray-700 space-y-1">
                <div>Хронический гастрит</div>
                <div>Хронический холецистит</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1">Б</h3>
              <div className="text-gray-700 space-y-1">
                <div>Бронхит</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">З</h3>
              <div className="text-gray-700 space-y-1">
                <div>Золотистый стафилококк</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">П</h3>
              <div className="text-gray-700 space-y-1">
                <div>Пневмония</div>
                <div>Простуда</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">Э</h3>
              <div className="text-gray-700 space-y-1">
                <div>Энтеровирусная инфекция</div>
                <div>Энтеровирусные заболевания</div>
                <div>Эрозивный гастрит</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1">В</h3>
              <div className="text-gray-700 space-y-1">
                <div>Ветрянка у взрослых</div>
                <div>Вирусная инфекция</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">К</h3>
              <div className="text-gray-700 space-y-1">
                <div>Корь у взрослых</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">С</h3>
              <div className="text-gray-700 space-y-1">
                <div>Скарлатина у взрослых</div>
                <div>Солнечный удар</div>
                <div>Сухой кашель</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1">Г</h3>
              <div className="text-gray-700 space-y-1">
                <div>Гемофильная инфекция</div>
                <div>Гипертензия</div>
                <div>Гипертонический криз</div>
                <div>Гипертония</div>
                <div>Гиперфибриногенемия</div>
                <div>Гиперхолестеринемия</div>
                <div>Грипп</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">Н</h3>
              <div className="text-gray-700 space-y-1">
                <div>Низкий гемоглобин</div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-1 mt-6">Т</h3>
              <div className="text-gray-700 space-y-1">
                <div>Тепловой удар</div>
                <div>Трахеит</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Услуги терапевта в Одинцово
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг терапии
            </p>
            <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Обратите внимание: цены на услуги могут меняться. Мы стараемся своевременно обновлять прайс-лист на сайте, но рекомендуем уточнять актуальную стоимость в регистратуре или по телефону контакт-центра{' '}
              <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">+7 (495) 255-44-50</a>. Указанные на сайте цены не являются офертой. Медицинская помощь оказывается на основании заключенного договора.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">Услуги терапии</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {therapyServices.map((service, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                            {service.name}
                          </h4>
                          <div className="text-emerald-600 font-semibold text-lg">
                            {service.price.toLocaleString('ru-RU')} ₽
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

      {/* Записаться на прием */}
      <section className="py-6 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="relative overflow-hidden rounded-[30px]" style={{
            background: 'linear-gradient(135deg, #4A9B8E 0%, #3A8D7F 25%, #2E7A6D 50%, #25685C 75%, #1A5247 100%)',
            backgroundImage: `url('/images/dentisrty/фон.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
              <div className="w-full lg:w-2/3 p-6 lg:p-8 z-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Записаться на прием</h2>
                <p className="text-white/90 mb-6 text-sm lg:text-base">поля, отмеченные * необходимы к заполнению</p>

                <form className="mb-4 max-w-2xl">
                  <div className="hidden lg:flex gap-4 mb-4 items-end">
                    <div className="flex-1">
                      <label className="block text-white text-sm font-medium mb-2">Имя</label>
                      <input type="text" placeholder="Имя" className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                      <input type="tel" placeholder="+7 (___) ____" className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" />
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-14 flex-shrink-0">Заказать звонок</button>
                  </div>

                  <div className="lg:hidden space-y-4 mb-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Имя</label>
                      <input type="text" placeholder="Имя" className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                      <input type="tel" placeholder="+7 (___) ____" className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-14">Заказать звонок</button>
                  </div>

                  <p className="text-white/80 text-xs italic mb-2">Нажимая на кнопку, вы даете согласие на <span className="underline cursor-pointer hover:text-white">обработку своих персональных данных</span></p>
                </form>

                <div className="text-white/85 text-sm space-y-1">
                  <p>Запись через сайт является предварительной. Наш сотрудник свяжется с Вами для подтверждения записи к специалисту.</p>
                  <p>Мы гарантируем неразглашение персональных данных и отсутствие рекламных рассылок. Ваши данные нужны для обратной связи и организации записи.</p>
                </div>
              </div>
              
              {/* Doctor Image - integrated into background */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-1/3 z-0">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl transform scale-150 -right-20 -top-20"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-125 right-10 top-10"></div>
                <div className="absolute inset-0 bg-white/15 rounded-full blur-xl transform scale-100 right-20 top-20"></div>
                <NextImage
                  src="/images/yslugi/NEW DOC2.webp"
                  alt="Врач терапевт"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Поводы обращения */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Поводы обращения к врачу-терапевту
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasonsForConsultation.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Выдача справок */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden">
                <img
                  src="/images/yslugi/terapiay 1.webp"
                  alt="Выдача справок"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Выдача справок и оформление медицинских документов
              </h2>
              <p className="text-gray-600 mb-4">
                Люди часто обращаются к терапевту для получения различных медицинских справок и документов для трудоустройства, поступления в учебные заведения, посещения спортивных секций или бассейнов и в других ситуациях.
              </p>
              <p className="text-gray-600 mb-6">
                «Альтамед-с» выдает все справки после необходимых медицинских осмотров, диагностических исследований и анализов. Все медицинские справки и документы оформляются в строгом соответствии с российским законодательством, документы заверяются необходимыми печатями и штампами.
              </p>
              <div>
                <p className="text-gray-700 font-medium mb-4">
                  Частный терапевт «Альтамед-с» оформляет и выдает следующие документы:
                </p>
                <ul className="space-y-2">
                  {medicalDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center justify-between w-full text-left py-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <div className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    expandedItems.includes(index) ? 'rotate-45' : ''
                  }`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>
                {expandedItems.includes(index) && (
                  <div className="pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}
