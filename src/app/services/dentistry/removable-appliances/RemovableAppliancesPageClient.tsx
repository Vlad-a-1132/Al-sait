"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type DentistryRemovableAppliancesServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

export type DentistryRemovableAppliancesPriceSectionUi = {
  sectionKey: string;
  title: string;
  rows: DentistryRemovableAppliancesServiceRow[];
};

type Props = {
  priceSections: DentistryRemovableAppliancesPriceSectionUi[];
};

function normalizePriceForUi(s: DentistryRemovableAppliancesServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function RemovableAppliancesPageClient({ priceSections }: Props) {

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
            <Link href="/services/dentistry/orthodontics" className="hover:text-emerald-600">Ортодонтия</Link>
            <span>/</span>
            <span className="text-gray-900">Съемные аппараты</span>
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
                Съемные ортодонтические аппараты в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Прозрачные элайнеры для исправления прикуса в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb5hmq28fn0stdqj9ta6kefj_1764344227_img_0.webp" 
                alt="Съемные аппараты" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Съемные аппараты в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает лечение съемными ортодонтическими аппаратами в Одинцово — элайнеры
                для исправления прикуса простого и сложного случая. Мы применяем современные технологии, качественные
                материалы и учитываем индивидуальные особенности каждого пациента, чтобы обеспечить эффективное
                исправление прикуса.
              </p>
              <p>
                Врач-стоматолог-ортодонт составляет персональный план лечения, учитывая особенности прикуса
                и пожелания пациента. У нас можно пройти лечение элайнерами для простого или сложного случая
                на одну или две челюсти.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость лечения съемными аппаратами в Одинцово
                фиксируется заранее, а пациенты получают подробную информацию о лечении.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Лечение элайнерами для простого и сложного случая с предсказуемым результатом.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Незаметные съемные аппараты для комфортного исправления прикуса.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных ортодонтов, специализирующихся на лечении элайнерами.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Регулярные визиты для контроля процесса исправления прикуса.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества съемных аппаратов в «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные ортодонты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-ортодонты с опытом более 15 лет проводят лечение элайнерами и работают
                с современными технологиями для эффективного исправления прикуса.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Незаметные элайнеры</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Элайнеры практически незаметны на зубах, что делает лечение комфортным и эстетичным
                для пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эффективное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Элайнеры позволяют исправить прикус простого и сложного случая с предсказуемым результатом
                и долговечным эффектом.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед лечением — пациент знает стоимость элайнеров до начала лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Регулярное обслуживание</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Регулярные визиты для контроля процесса исправления прикуса и замены элайнеров.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от установки до завершения лечения и рекомендаций
                по ношению ретейнеров.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Съемные аппараты в Одинцово: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед-С» — клиника, где лечение съемными аппаратами в Одинцове проводится
              по международным протоколам. Мы принимаем пациентов из Одинцово и всего Одинцовского городского округа.
            </p>
            <p>
              Наши пациенты отмечают эффективность исправления прикуса и комфорт при ношении элайнеров. Если вы ищете стоматологию,
              где «элайнеры одинцово» — это не просто слоган, а качественная услуга, записывайтесь
              на консультацию ортодонта или ознакомьтесь с другими направлениями на{" "}
              <Link href="/services/dentistry" className="text-emerald-600 hover:text-emerald-700 underline">
                странице стоматологии
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" aria-labelledby="dentistry-removable-appliances-prices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-6 md:p-10">
            <h2
              id="dentistry-removable-appliances-prices-heading"
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center"
            >
              Цены на съемные аппараты в Одинцово
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

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о съемных аппаратах в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают эффективность исправления прикуса, комфорт при ношении элайнеров
                и незаметность аппаратов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Исправление прикуса проходит успешно, зубы выравниваются, что соответствует ожиданиям
                пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После установки элайнеров в Одинцове пациенты отмечают комфорт; врачи дают
                подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о съемных аппаратах в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Что такое элайнеры?
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
                Элайнеры — это прозрачные съемные каппы для исправления прикуса. Они практически незаметны
                на зубах и позволяют исправить прикус простого и сложного случая с комфортом для пациента.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько времени нужно носить элайнеры?
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
                Срок ношения элайнеров зависит от сложности случая и составляет от 6 месяцев до 2 лет.
                Врач-ортодонт определит точный срок после диагностики и составления плана лечения.
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
                Съемные аппараты в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость лечения элайнерами,
                подобрать подходящий вариант и получить индивидуальный план исправления прикуса.
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
                name: "Клиника «Альтамед-С» — съемные аппараты в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/removable-appliances",
                image: "https://altamed-c.ru/images/dentisrty/task_01kb5hmq28fn0stdqj9ta6kefj_1764344227_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "267"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Съемные аппараты",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Съемные аппараты в Одинцово: лечение элайнерами простого и сложного случая, исправление прикуса незаметными съемными аппаратами.",
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

