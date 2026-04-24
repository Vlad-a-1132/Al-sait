"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type DentistryPeriodonticsServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

export type DentistryPeriodonticsPriceSectionUi = {
  sectionKey: string;
  title: string;
  rows: DentistryPeriodonticsServiceRow[];
};

type Props = {
  priceSections: DentistryPeriodonticsPriceSectionUi[];
};

function normalizePriceForUi(s: DentistryPeriodonticsServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function PeriodonticsPageClient({ priceSections }: Props) {
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
            <span className="text-gray-900">Пародонтология</span>
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
                Пародонтология в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Диагностика и лечение заболеваний десен у взрослых и детей в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/image (1) 2.webp" 
                alt="Пародонтология" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое пародонтология в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Заболевания пародонта</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Гингивит — воспаление десен
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Пародонтит — воспаление тканей вокруг зуба
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Пародонтоз — дистрофическое заболевание
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Рецессия десны — оголение корней зубов
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Методы лечения в «Альтамед-с»</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная гигиена и удаление зубного камня
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Кюретаж пародонтальных карманов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Хирургические операции (лоскутные операции)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Шинирование подвижных зубов
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" aria-labelledby="dentistry-periodontics-prices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-6 md:p-10">
            <h2 id="dentistry-periodontics-prices-heading" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Услуги пародонтологии в Одинцово
            </h2>
            <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Полный прайс по разделам ниже. Указанные цены не являются офертой; актуальную стоимость уточняйте по телефону{" "}
              <a href="tel:+74952554450" className="text-emerald-700 font-medium hover:underline">
                +7 (495) 255-44-50
              </a>
              .
            </p>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-lg">
                <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
                  <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
                </div>
                <div className="overflow-y-auto max-h-[min(70vh,720px)]">
                  <table className="w-full text-sm sm:text-base table-fixed">
                    <thead className="sticky top-0 z-10 bg-gray-100">
                      <tr>
                        <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">Услуга</th>
                        <th className="text-right py-3 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceSections.map((sec) => (
                        <Fragment key={sec.sectionKey}>
                          <tr className="bg-emerald-50/90">
                            <td colSpan={2} className="py-3 px-3 sm:px-4 font-semibold text-gray-900 border-t border-emerald-100">
                              {sec.title}
                            </td>
                          </tr>
                          {sec.rows.map((s, i) => (
                            <tr key={s.key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}>
                              <td className="py-3 px-3 sm:px-4 text-gray-800 leading-snug break-words">{s.name}</td>
                              <td className="py-3 px-3 sm:px-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                                {normalizePriceForUi(s)}
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col items-center rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm order-1 lg:order-2 h-fit">
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
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Симптомы заболеваний пародонта в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🩸", title: "Кровоточивость десен", desc: "Особенно при чистке зубов" },
                { icon: "😣", title: "Болезненность десен", desc: "Дискомфорт при жевании" },
                { icon: "🦷", title: "Подвижность зубов", desc: "Расшатывание зубов" },
                { icon: "😰", title: "Отек и покраснение", desc: "Воспаление десен" },
                { icon: "🤢", title: "Неприятный запах", desc: "Стойкий запах изо рта" },
                { icon: "🦷", title: "Оголение корней", desc: "Рецессия десны" },
                { icon: "😬", title: "Зубной камень", desc: "Образование отложений" },
                { icon: "💔", title: "Карманы между зубами", desc: "Углубления в деснах" },
                { icon: "😣", title: "Боль при надавливании", desc: "Дискомфорт при прикосновении" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
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

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему важно лечить пародонтит в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Предотвратить потерю зубов",
                  text: "Запущенный пародонтит приводит к расшатыванию и выпадению зубов. Своевременное лечение в стоматологии Одинцово позволяет сохранить зубы и восстановить здоровье десен.",
                  icon: "🦷"
                },
                {
                  title: "Улучшить общее здоровье",
                  text: "Заболевания пародонта связаны с риском сердечно-сосудистых заболеваний, диабета. Лечение в «Альтамед-с» Одинцово положительно влияет на весь организм.",
                  icon: "❤️"
                },
                {
                  title: "Восстановить эстетику",
                  text: "Здоровые десны — важная часть красивой улыбки. Лечение пародонтита в Одинцово восстанавливает естественный вид десен и зубов.",
                  icon: "✨"
                },
                {
                  title: "Избавиться от дискомфорта",
                  text: "Воспаление десен вызывает боль, кровоточивость, неприятный запах. Профессиональное лечение в клинике Одинцово устраняет все эти симптомы.",
                  icon: "😊"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость пародонтологии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость лечения заболеваний пародонта в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на пародонтологическое лечение в клинике «Альтамед-с» Одинцово зависят от стадии заболевания и выбранного метода лечения. Пародонтология в Одинцово включает лечение гингивита, пародонтита, профессиональную гигиену и хирургические методы.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Консервативное лечение в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Консервативное лечение заболеваний пародонта в стоматологии Одинцово включает профессиональную гигиену, кюретаж пародонтальных карманов и медикаментозную терапию. Эти методы эффективны на ранних стадиях заболеваний.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Профессиональная гигиена от 6000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Закрытый кюретаж от 1500₽ за зуб
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Лечение пародонтита от 8000₽
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Хирургическое лечение в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Хирургические методы в пародонтологии Одинцово применяются при запущенных формах заболеваний. Открытый кюретаж, лоскутные операции и закрытие рецессий позволяют восстановить здоровье десен.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Открытый кюретаж от 3000₽ за зуб
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Лоскутная операция от 4500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Закрытие рецессии от 10000₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость пародонтологического лечения в стоматологии Одинцово можно узнать после консультации и диагностики. Мы предлагаем комплексные программы лечения с учетом стадии заболевания. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Заболевания пародонта подробно */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Заболевания пародонта в стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Гингивит в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Гингивит — это начальная стадия заболевания пародонта, проявляющаяся воспалением десен. Лечение гингивита в стоматологии Одинцово включает профессиональную гигиену, удаление зубного налета и камня. В клинике «Альтамед-с» Одинцово лечение гингивита проводится на ранних стадиях, что предотвращает развитие пародонтита.
                </p>
                <p className="text-gray-700">
                  Симптомы гингивита: кровоточивость десен, покраснение, отечность. При своевременном лечении в стоматологии Одинцово гингивит полностью излечим. Регулярная профессиональная гигиена в клинике Одинцово помогает предотвратить развитие заболевания.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Пародонтит в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Пародонтит — это воспаление тканей пародонта с образованием пародонтальных карманов и разрушением костной ткани. Лечение пародонтита в стоматологии Одинцово требует комплексного подхода: профессиональная гигиена, кюретаж карманов, медикаментозная терапия.
                </p>
                <p className="text-gray-700">
                  При запущенных формах пародонтита в клинике «Альтамед-с» Одинцово применяются хирургические методы: открытый кюретаж, лоскутные операции. Лечение пародонтита в стоматологии Одинцово направлено на остановку разрушения тканей и сохранение зубов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Пародонтоз в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Пародонтоз — это дистрофическое заболевание пародонта, характеризующееся убылью костной ткани без воспаления. Лечение пародонтоза в стоматологии Одинцово включает комплекс мер: профессиональную гигиену, физиотерапию, медикаментозное лечение.
                </p>
                <p className="text-gray-700">
                  В клинике «Альтамед-с» Одинцово лечение пародонтоза направлено на замедление процесса разрушения тканей. Регулярные поддерживающие курсы лечения в стоматологии Одинцово помогают сохранить зубы и замедлить прогрессирование заболевания.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Профилактика заболеваний пародонта */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Профилактика заболеваний пародонта в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Домашний уход</h3>
                <p className="text-gray-700 mb-4">
                  Правильный домашний уход в пародонтологии Одинцово — это основа профилактики заболеваний десен. Регулярная чистка зубов, использование зубной нити и ирригатора помогают удалять налет и предотвращать воспаление десен.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Чистка зубов дважды в день правильной техникой
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование зубной нити для межзубных промежутков
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Применение ирригатора для массажа десен
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профессиональная профилактика</h3>
                <p className="text-gray-700 mb-4">
                  Регулярная профессиональная гигиена в пародонтологии Одинцово необходима для удаления зубного камня и налета, которые невозможно удалить в домашних условиях. В клинике «Альтамед-с» Одинцово мы рекомендуем профессиональную чистку каждые 6 месяцев.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная гигиена раз в 6 месяцев
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Вектор-терапия для лечения пародонтита
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярные осмотры пародонтолога в Одинцово
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-green-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Профилактика заболеваний пародонта в клинике «Альтамед-с» Одинцово — это комплекс мер, направленных на сохранение здоровья десен. Регулярная профессиональная гигиена в стоматологии Одинцово в сочетании с правильным домашним уходом позволяет предотвратить развитие гингивита и пародонтита. Специалисты пародонтологии Одинцово обучают пациентов правильным техникам ухода и подбирают индивидуальные программы профилактики.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Пародонтолог в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает услуги пародонтологии в Одинцово — лечение заболеваний десен,
                пародонтита, гингивита. Мы применяем современные технологии, качественные препараты и обеспечиваем
                эффективное лечение заболеваний пародонта.
              </p>
              <p>
                Врач-пародонтолог проводит лечение заболеваний десен, введение лекарственных препаратов,
                наложение лечебных повязок и шинирование зубов. У нас можно пройти лечение пародонтита,
                гингивита и другие процедуры пародонтологии.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость пародонтологии в Одинцово
                фиксируется заранее, а пациенты получают подробную информацию о процедурах.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Лечение заболеваний десен с использованием современных методов и препаратов.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Профилактику заболеваний пародонта с помощью профессиональной гигиены.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных пародонтологов, специализирующихся на лечении заболеваний десен.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Шинирование зубов для стабилизации при заболеваниях пародонта.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о пародонтологе в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают эффективность лечения заболеваний десен, улучшение состояния
                и внимательное отношение пародонтологов к процессу лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После лечения заболеваний пародонта пациенты получают здоровые десны, что соответствует
                ожиданиям и обеспечивает сохранение зубов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После лечения в Одинцове пациенты отмечают отсутствие дискомфорта; пародонтологи дают
                подробные рекомендации по уходу за деснами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о пародонтологе в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Какие симптомы указывают на заболевания пародонта?
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
                Симптомы заболеваний пародонта включают кровоточивость десен, неприятный запах изо рта,
                оголение корней зубов, расшатывание зубов, образование пародонтальных карманов. При появлении
                этих симптомов необходимо обратиться к пародонтологу.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Можно ли вылечить пародонтит полностью?
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
                Пародонтит — хроническое заболевание, но при правильном лечении и регулярной профилактике
                можно достичь стабильной ремиссии и сохранить зубы. Важно соблюдать рекомендации пародонтолога
                и регулярно проходить профессиональную гигиену.
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
                Пародонтолог в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость лечения заболеваний десен,
                подобрать подходящие процедуры и получить индивидуальный план лечения.
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
                name: "Клиника «Альтамед-С» — пародонтология в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/periodontics",
                image: "https://altamed-c.ru/images/dentisrty/image (1) 2.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "240"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Пародонтология",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Пародонтология в Одинцово: лечение заболеваний десен, пародонтита, гингивита. Профессиональная чистка, шинирование зубов. Опытные пародонтологи в клинике «Альтамед-С».",
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

