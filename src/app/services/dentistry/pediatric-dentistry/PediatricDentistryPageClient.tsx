"use client";

import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type PediatricDentistryServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: PediatricDentistryServiceRow[];
};

function normalizePriceForUi(s: PediatricDentistryServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function PediatricDentistryPageClient({ serviceRows }: Props) {
  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-600">Стоматология</Link>
            <span>/</span>
            <span className="text-gray-900">Детская стоматология</span>
          </nav>
        </div>
      </section>

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Детская стоматология в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Лечение молочных и постоянных зубов у детей с безболезненным подходом в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp" 
                alt="Детская стоматология" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Особенности детской стоматологии в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Наши преимущества</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Адаптация ребенка к стоматологическому лечению
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Безболезненное лечение с современной анестезией
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Доброжелательный и терпеливый персонал
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Игровая форма лечения для детей
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Услуги для детей</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Лечение кариеса молочных и постоянных зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профилактика (герметизация, фторирование)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная гигиена для детей
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Удаление молочных зубов при необходимости
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" aria-labelledby="pediatric-dentistry-prices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="pediatric-dentistry-prices-heading" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Услуги детской стоматологии в Одинцово
          </h2>
          <p className="text-gray-700 mb-2 text-center max-w-3xl mx-auto leading-relaxed">
            Приёмы врача-стоматолога детского — полный прайс ниже.
          </p>
          <p className="text-sm text-gray-500 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            Указанные цены не являются офертой. Актуальную стоимость уточняйте по телефону{" "}
            <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium">
              +7 (495) 255-44-50
            </a>
            .
          </p>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-lg">
              <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
                <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
              </div>
              <div className="overflow-y-auto max-h-[400px] sm:max-h-[520px]">
                <table className="w-full text-sm sm:text-base table-fixed">
                  <thead className="sticky top-0 z-10 bg-gray-100">
                    <tr>
                      <th className="text-left py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">Услуга</th>
                      <th className="text-right py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceRows.map((s, i) => (
                      <tr key={s.key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}>
                        <td className="py-3.5 px-3 sm:px-4 text-gray-800 leading-snug break-words">{s.name}</td>
                        <td className="py-3.5 px-3 sm:px-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                          {normalizePriceForUi(s)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm order-1 lg:order-2">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 relative">
                <Image
                  src="/images/promo/task_01kmc5pqv4egd8vgfksjjp1zzd_1774230180_img_1.webp"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <p className="text-gray-700 text-sm mb-1">Заполните форму</p>
              <h3 className="font-bold text-lg text-gray-900 text-center mb-1">«Записаться в клинику»</h3>
              <p className="text-gray-600 text-sm text-center mb-4">чтобы выбрать время приема и уточнить стоимость услуги.</p>
              <p className="text-gray-700 text-sm mb-4">Администратор подберёт врача и удобное время</p>
              <Link
                href="https://online.altamed-c.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-medium text-sm mb-1 hover:underline"
              >
                Записаться онлайн
              </Link>
              <a href="tel:+74952554450" className="text-gray-700 text-sm mb-6 hover:underline">
                +7 (495) 255-44-50
              </a>
              <Link
                href="https://online.altamed-c.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700"
              >
                Записаться в клинику
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему важно лечить молочные зубы в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Сохранить место для постоянных зубов",
                  text: "Молочные зубы удерживают место для постоянных. Преждевременное удаление может привести к нарушению прикуса. В клинике «Альтамед-с» Одинцово мы стараемся сохранить молочные зубы до естественной смены.",
                  icon: "🦷"
                },
                {
                  title: "Предотвратить осложнения",
                  text: "Кариес молочных зубов может перерасти в пульпит и периодонтит, что негативно влияет на зачатки постоянных зубов. Своевременное лечение в стоматологии Одинцово защищает постоянные зубы.",
                  icon: "🛡️"
                },
                {
                  title: "Заложить основы здоровья",
                  text: "Раннее обучение гигиене и регулярные визиты к детскому стоматологу в Одинцово формируют правильные привычки ухода за зубами на всю жизнь.",
                  icon: "⭐"
                },
                {
                  title: "Избежать страха перед лечением",
                  text: "Доброжелательный подход и адаптация ребенка в «Альтамед-с» Одинцово помогают избежать развития дентофобии и делают лечение комфортным для маленьких пациентов.",
                  icon: "😊"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Когда нужно посетить детского стоматолога в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🦷", title: "Первое посещение", desc: "В возрасте 1-2 лет для знакомства" },
                { icon: "😬", title: "Темные пятна на зубах", desc: "Признаки кариеса требуют лечения" },
                { icon: "😣", title: "Жалобы на боль", desc: "Любая боль в зубах или деснах" },
                { icon: "🦷", title: "Травмы зубов", desc: "После ушибов и падений" },
                { icon: "📅", title: "Профилактика", desc: "Каждые 3-6 месяцев для осмотра" },
                { icon: "😰", title: "Плохие привычки", desc: "Сосание пальца, пустышки" },
                { icon: "🦷", title: "Смена зубов", desc: "Контроль процесса смены молочных на постоянные" },
                { icon: "😬", title: "Неровные зубы", desc: "Для консультации ортодонта" },
                { icon: "🦷", title: "Перед школой", desc: "Профилактический осмотр и лечение" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость детской стоматологии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость детской стоматологии в Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на детскую стоматологию в клинике «Альтамед-с» Одинцово учитывают особенности работы с детьми. Мы используем щадящие методы лечения и специальные материалы для молочных зубов. Детская стоматология в Одинцово включает лечение кариеса, пульпита, профилактику и удаление молочных зубов.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Лечение кариеса у детей в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Лечение кариеса молочных зубов в стоматологии Одинцово важно для сохранения места для постоянных зубов. Мы используем специальные материалы и щадящие методы лечения, чтобы сделать процедуру комфортной для ребенка.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Лечение кариеса молочного зуба от 3000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Восстановление менее 1/3 зуба от 3200₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Эстетическая реставрация от 6900₽
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Профилактика в детской стоматологии Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Профилактические процедуры в стоматологии Одинцово помогают сохранить здоровье молочных зубов и предотвратить развитие кариеса. Герметизация фиссур и фторирование укрепляют эмаль и защищают зубы.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Герметизация фиссур от 1500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Фторирование от 1000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Профессиональная гигиена от 2500₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость детской стоматологии в Одинцово можно узнать после консультации. Мы создаем комфортную атмосферу для детей и используем специальные методы работы с маленькими пациентами. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности детской стоматологии */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Особенности детской стоматологии в Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Психологический подход в детской стоматологии Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Работа с детьми в клинике «Альтамед-с» Одинцово требует особого подхода. Наши детские стоматологи используют методы адаптации и психологической подготовки маленьких пациентов. В стоматологии Одинцово мы создаем дружелюбную атмосферу, чтобы ребенок чувствовал себя комфортно.
                </p>
                <p className="text-gray-700">
                  Первый визит в детскую стоматологию Одинцово обычно проходит без лечения — это знакомство с врачом и клиникой. Такой подход помогает сформировать позитивное отношение к стоматологии и избежать страха перед лечением в будущем.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Лечение молочных зубов в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Молочные зубы в детской стоматологии Одинцово требуют особого внимания, так как они влияют на формирование прикуса и развитие челюстей. Лечение кариеса молочных зубов в клинике «Альтамед-с» Одинцово позволяет сохранить зубы до их естественной смены.
                </p>
                <p className="text-gray-700">
                  В стоматологии Одинцово мы используем специальные материалы для молочных зубов, которые учитывают их особенности. Лечение пульпита в детской стоматологии Одинцово проводится щадящими методами с сохранением зуба.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профилактика в детской стоматологии Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Профилактика в детской стоматологии Одинцово — это основа здоровых зубов в будущем. Герметизация фиссур в клинике «Альтамед-с» Одинцово защищает жевательные зубы от кариеса. Фторирование укрепляет эмаль и снижает риск развития кариеса.
                </p>
                <p className="text-gray-700">
                  Регулярные профилактические осмотры в стоматологии Одинцово рекомендуются каждые 3-4 месяца. Профессиональная гигиена для детей в клинике Одинцово проводится мягкими методами с учетом особенностей детских зубов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Важность детской стоматологии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему важна детская стоматология в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Сохранение молочных зубов</h3>
                <p className="text-gray-700 mb-4">
                  Молочные зубы в детской стоматологии Одинцово играют важную роль: они сохраняют место для постоянных зубов, участвуют в формировании речи и жевании. Ранняя потеря молочных зубов в стоматологии Одинцово может привести к нарушению прикуса.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Предотвращение смещения соседних зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Сохранение правильного прикуса
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Формирование здоровых привычек гигиены
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профилактика заболеваний</h3>
                <p className="text-gray-700 mb-4">
                  Регулярные визиты в детскую стоматологию Одинцово помогают выявить проблемы на ранней стадии. Профилактические процедуры в клинике «Альтамед-с» Одинцово значительно снижают риск развития кариеса и других заболеваний.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Раннее выявление кариеса
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Предотвращение осложнений
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Обучение правильной гигиене полости рта
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-cyan-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Детская стоматология в клинике «Альтамед-с» Одинцово — это забота о здоровье зубов вашего ребенка с раннего возраста. Регулярные визиты в стоматологию Одинцово, правильная гигиена и своевременное лечение молочных зубов формируют основу для здоровых постоянных зубов. Опытные детские стоматологи в Одинцово создают комфортную атмосферу и помогают детям полюбить походы к врачу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Детский стоматолог в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает услуги детской стоматологии в Одинцово — лечение молочных и постоянных
                зубов, профилактику кариеса, безболезненные методы лечения. Мы применяем современные технологии,
                качественные материалы и обеспечиваем комфортную атмосферу для детей.
              </p>
              <p>
                Врач-стоматолог детский проводит лечение кариеса, пульпита, удаление зубов, профессиональную гигиену
                и профилактические процедуры для детей. У нас можно пройти лечение молочных зубов, герметизацию фиссур,
                фторирование и другие процедуры детской стоматологии.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость детской стоматологии в Одинцово
                фиксируется заранее, а родители получают подробную информацию о процедурах.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Безболезненное лечение с использованием современных методов обезболивания.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Комфортную атмосферу для детей и индивидуальный подход к каждому ребенку.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных детских стоматологов, специализирующихся на лечении детей.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Профилактику кариеса с помощью герметизации фиссур и фторирования.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о детской стоматологии в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Родители отмечают безболезненное лечение, комфортную атмосферу
                и внимательное отношение детских стоматологов к детям.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эффективное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После лечения молочных зубов дети чувствуют себя комфортно, что соответствует
                ожиданиям родителей и обеспечивает здоровье постоянных зубов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная атмосфера</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После визита в детскую стоматологию в Одинцове дети не боятся врачей; стоматологи дают
                подробные рекомендации по уходу за зубами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о детской стоматологии в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  С какого возраста нужно водить ребенка к стоматологу?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Первый визит к детскому стоматологу рекомендуется в возрасте 1 года, когда прорезались первые зубы.
                Регулярные осмотры каждые 3-4 месяца помогают выявить проблемы на ранней стадии и приучить ребенка
                к визитам к стоматологу.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Нужно ли лечить молочные зубы?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Да, молочные зубы обязательно нужно лечить. Они сохраняют место для постоянных зубов, участвуют
                в формировании речи и жевании. Преждевременная потеря молочных зубов может привести к нарушению прикуса.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Детский стоматолог в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость детской стоматологии,
                подобрать подходящие процедуры и получить индивидуальный план лечения для вашего ребенка.
              </p>
            </div>
            <Link
              href="https://online.altamed-c.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#4A5568] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Записаться на приём
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Клиника «Альтамед-С» — детская стоматология в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/pediatric-dentistry",
                image: "https://altamed-c.ru/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "320"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Детская стоматология",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Детская стоматология в Одинцово: лечение молочных и постоянных зубов, профилактика кариеса, безболезненные методы. Опытные детские стоматологи в клинике «Альтамед-С».",
                sameAs: [
                  "https://altamed-c.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

