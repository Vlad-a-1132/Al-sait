"use client";

import Image from "next/image";
import Link from "next/link";
import NeurologyPageClient, { type NeurologyServiceRow } from "./NeurologyPageClient";
import { doctors } from "@/data/static-data";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

type Props = {
  serviceRows: NeurologyServiceRow[];
};

export default function NeurologyPageClientV2({ serviceRows }: Props) {
  const neurologists = [
    doctors.find((d) => d.slug === "dmitriev-alexey-olegovich") ?? null,
    doctors.find((d) => d.slug === "pak-larisa-konstantinovna") ?? null,
    doctors.find((d) => d.slug === "pritula-aleksandr-vasilievich") ?? null,
  ].filter(Boolean) as Array<(typeof doctors)[number]>;

  return (
    <div className="neurology-v2">
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="mx-auto px-4 py-10 sm:py-12 md:py-16" style={{ maxWidth: "83rem" }}>
          <nav aria-label="breadcrumb" className="mb-4 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:underline text-emerald-700">
                  Главная
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/services" className="hover:underline text-emerald-700">
                  Услуги
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li aria-current="page" className="text-gray-700">
                Неврология
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Невролог в Одинцово — диагностика и лечение заболеваний нервной системы
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Принимаем с головными болями и мигренью, головокружением, болями в спине и шее, онемением, слабостью, нарушениями сна и тревожностью.
                На консультации врач уточнит симптомы, оценит неврологический статус и подскажет, какие обследования действительно нужны.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <Link
                  href={APPOINTMENTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]"
                >
                  Записаться на приём
                </Link>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]"
                >
                  Позвонить в клинику
                </a>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#neurology-seo" className="text-emerald-600 hover:underline py-1">
                  Подробнее
                </a>
                <a href="#services-heading" className="text-emerald-600 hover:underline py-1">
                  Цены
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/images allergoly/nevrolog.webp"
                  alt="Неврология в Альтамед‑С"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" aria-labelledby="neurology-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neurology-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Врачи-неврологи
          </h2>
          <p className="text-gray-600 mb-6">Специалисты, которые ведут приём по неврологии.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neurologists.map((d) => (
              <Link
                key={d.slug}
                href={`/doctors/${d.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden"
              >
                <div className="flex gap-4 p-5">
                  <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-gray-100 ring-1 ring-black/5">
                    {d.photo ? <Image src={d.photo} alt={d.name} fill className="object-cover" sizes="80px" /> : null}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 leading-snug group-hover:text-emerald-700 transition">
                      {d.name}
                    </div>
                    {d.specialization ? <div className="text-sm text-gray-600 mt-1">{d.specialization}</div> : null}
                    {typeof d.experience === "number" ? (
                      <div className="text-sm text-gray-500 mt-1">Стаж: {d.experience} лет</div>
                    ) : null}
                    <div className="text-sm text-emerald-700 font-medium mt-3">Открыть профиль</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" id="neurology-seo" aria-labelledby="neurology-seo-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 id="neurology-seo-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Консультация невролога в Одинцово — когда стоит обратиться
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
              <div className="space-y-3">
                <p>
                  Невролог занимается заболеваниями нервной системы: головным мозгом, позвоночником, периферическими нервами и мышцами. Часто симптомы
                  выглядят «размыто» — например, головная боль, усталость, шум в ушах, онемение рук или боли в пояснице. На консультации важно собрать
                  детали: как давно, как часто, что усиливает/облегчает, есть ли связь со сном, стрессом и нагрузками.
                </p>
                <p>
                  Мы стараемся идти от простого к нужному: осмотр, неврологические тесты, анализы и инструментальные обследования — только по показаниям.
                  Это помогает быстрее понять причину жалоб и выбрать тактику лечения.
                </p>
                <p>
                  Важная часть приёма — оценка «красных флагов», когда нужно действовать срочно. Если их нет, часто достаточно начать с коррекции режима,
                  лечения боли и воспаления, работы с мышечно‑тоническим синдромом, подбора терапии при тревоге/нарушениях сна и планового обследования.
                </p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-gray-900">Поводы записаться к неврологу:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>головные боли, мигрень, головокружение, обмороки;</li>
                  <li>боль в спине/шее, прострелы, онемение, «мурашки» в конечностях;</li>
                  <li>слабость в руке/ноге, нарушение координации, тремор;</li>
                  <li>нарушения сна, тревожность, снижение концентрации;</li>
                  <li>последствия травм, необходимость наблюдения после инсульта/ТИА (по назначению).</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Если есть острые симптомы (резкая слабость, нарушение речи, асимметрия лица, сильнейшая внезапная головная боль) — это повод вызывать
                  скорую помощь.
                </p>
              </div>
            </div>

            <div className="mt-8 grid lg:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="font-bold text-gray-900 mb-2">Как проходит приём</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>сбор жалоб и истории болезни, уточнение триггеров;</li>
                  <li>неврологический осмотр и тесты (рефлексы, чувствительность, сила, координация);</li>
                  <li>обсуждение диагноза и плана: лечение, наблюдение, обследования по показаниям.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="font-bold text-gray-900 mb-2">Что взять с собой</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>выписки и результаты обследований (МРТ/КТ, УЗДГ, ЭНМГ — если есть);</li>
                  <li>список лекарств и дозировок, которые принимаете сейчас;</li>
                  <li>дневник симптомов: когда возникают, сколько длятся, что помогает.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="font-bold text-gray-900 mb-2">Частые обследования</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>лабораторные анализы (по ситуации);</li>
                  <li>МРТ/КТ головного мозга или позвоночника — по показаниям;</li>
                  <li>УЗДГ сосудов, ЭКГ/АД‑мониторинг при жалобах на головокружение/обмороки.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Как подготовиться к консультации</h3>
              <div className="grid lg:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
                <div className="space-y-3">
                  <p>
                    Если основная жалоба — головная боль, полезно заранее отметить: где болит, как «ощущается» боль, есть ли тошнота/светобоязнь,
                    помогает ли сон, как влияют кофе/алкоголь/стресс. При боли в спине — где именно болит, отдаёт ли в руку/ногу, есть ли онемение,
                    слабость, что усиливает (наклоны, сидение, ходьба).
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    Если есть результаты обследований, лучше принести их на приём (даже если «старые») — это ускоряет принятие решений. Не нужно
                    специально прекращать назначенные препараты перед первичным визитом, если врач заранее не просил об этом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* hide old breadcrumb + old banner above main content */}
      <style jsx global>{`
        .neurology-v2 > div > section.py-4 {
          display: none !important;
        }
        .neurology-v2 > div > main.py-3 {
          display: none !important;
        }
      `}</style>

      <NeurologyPageClient serviceRows={serviceRows} />
    </div>
  );
}

