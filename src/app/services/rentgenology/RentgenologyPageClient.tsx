'use client';

import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export type RentgenologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: RentgenologyServiceRow[];
};

function normalizePriceForUi(s: RentgenologyServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

export default function RentgenologyPageClient({ serviceRows }: Props) {
  return (
    <div className="flex flex-col min-h-full bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link
                    href="/services"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2"
                  >
                    Услуги
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Рентгенология</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Рентгенология в клинике «<span className="italic">Альтамед-С</span>» в Одинцово
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Расширенная цифровая рентгенодиагностика: экспертные обследования для стоматологии, травматологии,
              неврологии и терапии в одном центре.
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-[#4A5568] relative overflow-hidden">
                <img src="/images/yslugi/rentgen.webp" alt="Рентгенология в Одинцово" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Цифровая рентгенология</div>
                <Link
                  href="https://online.altamed-c.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4A5568] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-[#3d4454] transition-colors"
                >
                  Записаться
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-[#4A5568] relative overflow-hidden rounded-[20px] shadow-lg">
              <img
                src="/images/yslugi/rentgen.webp"
                alt="Рентгенологическое отделение Альтамед-С"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Рентгенология: Услуги рентгенографии</h2>
                <p className="text-lg md:text-xl mb-6 max-w-xl">
                  Полный спектр рентгенологических исследований в клинике «Альтамед-С» в Одинцово: специализированные протоколы,
                  экспертное описание и моментальная выдача снимков.
                </p>
                <Link
                  href="https://online.altamed-c.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4A5568] text-white rounded-full px-8 py-3 font-medium hover:bg-[#3d4454] transition-colors"
                >
                  Записаться на рентген
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Что такое рентгенология в «Альтамед-С»</h2>
              <p>
                Мы объединили классический рентген и современные методики обработки данных, чтобы врачи разных специальностей —
                от ортопедов и травматологов до стоматологов и неврологов — получали исчерпывающую информацию. Каждый протокол
                обследования сопровождается консультацией рентгенолога, рекомендациями по подготовке и возможностью получить снимки
                в цифровом и печатном виде.
              </p>
              <p>
                В отличие от стандартного отделения рентгена, рентгенология в «Альтамед-С» включает расширенный спектр исследований,
                дополнительные серии проекций, функциональные пробы и комплексные отчёты. Мы работаем на низкодозных цифровых
                аппаратах, соблюдая принципы ALARA — минимально достаточная лучевая нагрузка для пациента.
              </p>
              <p>
                Рентгенологические данные по запросу могут быть переданы лечащему специалисту через защищённые каналы: это ускоряет
                постановку диагноза и помогает избегать повторных исследований.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Почему выбирают наше рентгенологическое отделение</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персональные протоколы для каждого отдела: от нейрорентгенологии до травматологии и гнатологии.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Цифровой архив и удобная выдача результатов: снимки на плёнке, в формате DICOM и с экспертным описанием.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Отдельные временные окна для пациентов с травмами, детей и тех, кому требуется особый комфорт.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Врачи-рентгенологи с опытом более 10 лет и постоянные курсы повышения квалификации в области рентгенологии.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Каталоги рентгенологических исследований</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-4 leading-relaxed">
            Ниже — подробное описание услуг рентгенологического отделения. Для записи выберите услугу и нажмите кнопку «Записаться».
          </p>
          <p className="text-gray-600 text-sm text-center max-w-2xl mx-auto mb-10">
            Цены носят справочный характер. Актуальную стоимость уточняйте в регистратуре или по телефону{" "}
            <a href="tel:+74952554450" className="text-[#4A5568] hover:underline font-medium">
              +7 (495) 255-44-50
            </a>
            .
          </p>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white">
              <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
                <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
              </div>
              <div className="overflow-y-auto max-h-[560px] sm:max-h-[640px]">
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

            {/* CTA — как на гинекологии */}
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
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Дополнительные возможности рентгенологии</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стоматологические протоколы</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Экстраоральные снимки, оценка ВНЧС, планирование имплантации и ортодонтии. Результаты синхронизируются с отделениями
                стоматологии и гнатологии клиники.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Травматологическая поддержка</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Экстренные окна для пациентов с травмами и спортивными повреждениями, оперативное описание и передача снимков лечащему хирургу
                или реабилитологу.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комплексные отчёты</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                При необходимости формируем расширенный протокол с динамикой состояния, рекомендациями по дополнительным исследованиям и
                цифровым архивом для наблюдения в других клиниках.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Нужна рентгенологическая диагностика в Одинцово?</h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь в клинику «Альтамед-С», чтобы выбрать удобное время, получить подготовку к обследованию и забрать результаты в день
                исследования. Наши администраторы подскажут, какие документы и снимки понадобятся вашему врачу.
              </p>
            </div>
            <Link
              href="https://online.altamed-c.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#4A5568] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Записаться на рентгенологию
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Клиника «Альтамед-С» — рентгенология в Одинцово",
                url: "https://altamed-c.ru/services/rentgenology",
                image: "https://altamed-c.ru/images/yslugi/rentgen.webp",
                medicalSpecialty: "RadiationTherapy",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9",
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Рентгенологические исследования",
                description:
                  "Цифровая рентгенология в клинике «Альтамед-С»: исследования головы, позвоночника, конечностей, органов грудной клетки и дополнительные услуги с экспертным описанием.",
                sameAs: ["https://altamed-c.ru", "https://yandex.ru/maps/org/altamed_s/1919839667"],
              }),
            }}
          />
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

