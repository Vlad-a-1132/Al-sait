"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import CardiologyPageClient, {
  CardiologyAlphabetConditionsSection,
  CardiologyPricesSection,
  type CardiologyServiceRow,
} from "./CardiologyPageClient";
import { CARDIOLOGY_SERVICE_ARTICLES } from "@/data/cardiology-service-articles";
import { doctors } from "@/data/static-data";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

type Props = {
  serviceRows: CardiologyServiceRow[];
};

function SymptomCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:border-emerald-200 hover:shadow-md transition">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-0">{desc}</p>
    </div>
  );
}

function PillList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className="text-emerald-600 shrink-0">●</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm text-gray-800">{children}</span>
  );
}

export default function CardiologyPageClientV2({ serviceRows }: Props) {
  const [showMoreArticles, setShowMoreArticles] = useState(false);

  const cardiologists = [
    doctors.find((d) => d.slug === "belyanko-igor-eduardovich") ?? null,
    doctors.find((d) => d.slug === "molostov-aleksandr-venedikhtovich") ?? null,
    doctors.find((d) => d.slug === "rostovtseva-emilia-veniaminovna") ?? null,
  ].filter(Boolean) as Array<(typeof doctors)[number]>;

  const faqItems = [
    {
      q: "Можно ли прийти к кардиологу без ЭКГ?",
      a: "Да. Врач проведёт осмотр и решит, нужна ли ЭКГ, Холтер или другие обследования.",
    },
    {
      q: "Когда нужен Холтер?",
      a: "Холтер часто назначают при перебоях, приступах сердцебиения, подозрении на нарушения ритма или если обычная ЭКГ не объясняет жалобы.",
    },
    {
      q: "Что делать, если болит грудь?",
      a: "Если боль сильная, давящая, сопровождается одышкой, тошнотой, холодным потом, слабостью, обмороком или отдаёт в руку, шею, челюсть, спину — нужна срочная помощь, а не плановая запись.",
    },
    {
      q: "Когда обращаться при перебоях в сердце?",
      a: "Если перебои повторяются, становятся чаще, длятся дольше нескольких минут, есть заболевание сердца или семейная история сердечных проблем — стоит обратиться к врачу.",
    },
    {
      q: "Нужно ли вести дневник давления?",
      a: "Да, если основная жалоба — давление. Дневник помогает врачу оценить динамику и подобрать лечение точнее.",
    },
    {
      q: "К кардиологу идти при одышке или к терапевту?",
      a: "Можно начать с терапевта или кардиолога. Если одышка связана с болью в груди, обмороком, выраженной слабостью или резким ухудшением — лучше обращаться срочно.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const complaintCards = [
    {
      title: "Повышенное давление",
      desc: "Частые подъёмы давления, головная боль, шум в ушах, необходимость подобрать лечение.",
    },
    {
      title: "Перебои в сердце",
      desc: "Ощущение замирания, толчков, неритмичного пульса, приступов сердцебиения.",
    },
    {
      title: "Боль или дискомфорт в груди",
      desc: "Давление, жжение, сдавление, боль при нагрузке или волнении.",
    },
    {
      title: "Одышка и усталость",
      desc: "Сложнее подниматься по лестнице, появилась слабость, снизилась переносимость нагрузки.",
    },
    {
      title: "Изменения на ЭКГ",
      desc: "Нужно расшифровать ЭКГ, пройти дообследование или получить заключение.",
    },
    {
      title: "Контроль после заболеваний",
      desc: "Наблюдение после инфаркта, операций, нарушений ритма, гипертонических кризов.",
    },
  ];

  return (
    <div className="cardio-v2">
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
                Кардиология
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Кардиолог в Одинцово — диагностика и лечение заболеваний сердца и сосудов
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Помогаем при повышенном давлении, перебоях, боли или дискомфорте в груди, одышке и изменениях на ЭКГ. На приёме врач оценивает симптомы,
                давление, пульс и факторы риска и подбирает обследования по показаниям: ЭКГ, Холтер, анализы и другие методы; при необходимости направит на{" "}
                <Link href="/services/ultrasound" className="text-emerald-700 font-medium hover:underline">
                  эхокардиографию (УЗИ сердца)
                </Link>{" "}
                или иные исследования.
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
                <a href="#cardio-urgency" className="text-emerald-600 hover:underline py-1">
                  Срочность
                </a>
                <a href="#cardio-symptoms" className="text-emerald-600 hover:underline py-1">
                  Жалобы
                </a>
                <a href="#cardio-popular" className="text-emerald-600 hover:underline py-1">
                  ЭКГ и Холтер
                </a>
                <a href="#cardio-prices" className="text-emerald-600 hover:underline py-1">
                  Цены
                </a>
                <a href="#cardio-articles" className="text-emerald-600 hover:underline py-1">
                  Статьи
                </a>
                <a href="#cardio-alphabet" className="text-emerald-600 hover:underline py-1">
                  Заболевания
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/images allergoly/kardiolog.webp"
                  alt="Кардиология в Альтамед‑С"
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

      <section className="py-12 bg-white" aria-labelledby="cardio-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Врачи-кардиологи
          </h2>
          <p className="text-gray-600 mb-6">Специалисты, которые ведут приём по кардиологии.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardiologists.map((d) => (
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
                    <div className="font-bold text-gray-900 leading-snug group-hover:text-emerald-700 transition">{d.name}</div>
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

      {/* 1 Срочно / планово */}
      <section id="cardio-urgency" className="py-14 bg-gray-50 scroll-mt-20" aria-labelledby="cardio-urgency-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-urgency-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Когда к кардиологу планово, а когда нужна срочная помощь
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Можно записаться планово</h3>
              <PillList
                items={[
                  "периодически повышается давление;",
                  "есть перебои в сердце;",
                  "учащённое сердцебиение;",
                  "одышка при нагрузке;",
                  "изменения на ЭКГ;",
                  "нужно проверить сердце перед операцией;",
                  "контроль терапии при гипертонии;",
                  "профилактический осмотр после 40 лет.",
                ]}
              />
            </div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-6 shadow-sm">
              <h3 className="font-bold text-rose-900 mb-4">Нужна срочная помощь</h3>
              <PillList
                items={[
                  "сильная боль или сдавление в груди;",
                  "боль отдаёт в руку, спину, шею или челюсть;",
                  "боль в груди + одышка, тошнота, холодный пот;",
                  "обморок;",
                  "выраженная слабость;",
                  "резкое ухудшение состояния;",
                  "очень высокое давление с болью в груди, одышкой, нарушением речи или слабостью.",
                ]}
              />
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto mt-8 text-center leading-relaxed">
            NHS рекомендует получать медицинскую помощь при боли в груди, а при признаках сердечного приступа — обращаться за экстренной помощью; среди
            тревожных сочетаний указаны боль в груди с тошнотой, одышкой, ощущением перебоев или учащённого или замедленного сердцебиения.
          </p>
        </div>
      </section>

      {/* 2 Жалобы */}
      <section id="cardio-symptoms" className="py-14 bg-white scroll-mt-20" aria-labelledby="cardio-symptoms-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-symptoms-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            С какими жалобами записываются к кардиологу
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {complaintCards.map((c) => (
              <SymptomCard key={c.title} title={c.title} desc={c.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 Давление */}
      <section className="py-14 bg-gray-50" aria-labelledby="cardio-bp-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-bp-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Повышенное давление: когда нужен кардиолог
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
            К кардиологу стоит обратиться, если давление регулярно повышается, препараты помогают нестабильно, появились головные боли, сердцебиение,
            одышка, боль в груди или изменения на ЭКГ. Врач оценит дневник давления, факторы риска, сопутствующие заболевания и подберёт план обследования и
            лечения.
          </p>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mb-8 leading-relaxed">
            American Heart Association относит показатели 130–139/80–89 мм рт. ст. к гипертонии 1 стадии, 140/90 мм рт. ст. и выше — ко 2 стадии, а значения
            выше 180 и/или выше 120 мм рт. ст. — к тяжёлому повышению давления, при котором нужно связаться с врачом, особенно если есть симптомы.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "давление выше обычного",
              "скачки давления",
              "головная боль",
              "шум в ушах",
              "сердцебиение",
              "подбор терапии",
              "контроль уже назначенного лечения",
              "дневник давления",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Перебои */}
      <section className="py-14 bg-white" aria-labelledby="cardio-arr-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-arr-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Перебои в сердце и учащённый пульс
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-4">
            Ощущение перебоев, «замирания», толчков, неритмичного пульса или приступов сердцебиения — частый повод для консультации кардиолога. Врач уточнит,
            когда возникают симптомы, сколько длятся, есть ли связь с нагрузкой, стрессом, кофеином, лекарствами, давлением или заболеваниями щитовидной
            железы.
          </p>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mb-8 leading-relaxed">
            NHS рекомендует обратиться к врачу, если сердцебиения повторяются, становятся чаще, длятся дольше нескольких минут, есть заболевание сердца или
            семейная история сердечных проблем.
          </p>
          <h3 className="font-bold text-gray-900 mb-3">Популярные обследования рядом</h3>
          <div className="flex flex-wrap gap-2 mb-0">
            <Tag>ЭКГ</Tag>
            <Tag>расшифровка ЭКГ</Tag>
            <Tag>Холтер 3-канальный</Tag>
            <Tag>Холтер 12-канальный</Tag>
            <Tag>анализы по назначению</Tag>
            <Tag>консультация кардиолога</Tag>
          </div>
          <p className="text-sm text-gray-500 mt-4 mb-0">
            Стоимость консультаций, ЭКГ и Холтера — в{" "}
            <a href="#cardio-prices" className="text-emerald-700 font-medium hover:underline">
              прайсе ниже
            </a>
            ; анализы — в разделе{" "}
            <Link href="/services/lab-tests" className="text-emerald-700 font-medium hover:underline">
              лабораторной диагностики
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5 ЭКГ / Холтер */}
      <section id="cardio-popular" className="py-14 bg-gray-50 scroll-mt-20" aria-labelledby="cardio-holter-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-holter-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            ЭКГ и Холтер: в чём разница
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: "ЭКГ",
                desc: "Короткая запись электрической активности сердца в момент обследования. Помогает оценить ритм, проводимость и признаки возможных изменений.",
              },
              {
                title: "Расшифровка ЭКГ",
                desc: "Врач описывает результаты ЭКГ и объясняет, нужна ли консультация или дополнительные обследования.",
              },
              {
                title: "Холтер 3-канальный",
                desc: "Суточная запись ЭКГ в обычном режиме дня. Может использоваться при перебоях, сердцебиении, подозрении на нарушения ритма.",
              },
              {
                title: "Холтер 12-канальный",
                desc: "Более расширенный вариант суточного мониторирования ЭКГ по назначению врача.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-0">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto text-center leading-relaxed">
            Mayo Clinic указывает, что Холтер может назначаться, если обычная ЭКГ не даёт достаточно информации о состоянии сердца; устройство записывает
            работу сердца в течение суток или дольше во время обычной активности.
          </p>
        </div>
      </section>

      {/* Популярные услуги — кратко перед прайсом */}
      <section className="py-12 bg-white border-y border-gray-100" aria-labelledby="cardio-popular-services-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-popular-services-heading" className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
            Популярные услуги кардиологии
          </h2>
          <p className="text-gray-600 text-sm text-center max-w-2xl mx-auto mb-6">
            Ниже в прайсе — актуальные цены на консультации, ЭКГ, Холтер и другие позиции ветки «Кардиолог».
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Консультация кардиолога", "ЭКГ", "Расшифровка ЭКГ", "Холтер 3 канала", "Холтер 12 каналов"].map((t) => (
              <a key={t} href="#cardio-prices" className="inline-flex rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-sm text-emerald-900 hover:bg-emerald-100 transition">
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CardiologyPricesSection serviceRows={serviceRows} />

      {/* О клинике — вместо старого SEO */}
      <section className="py-14 bg-white" aria-labelledby="cardio-about-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="cardio-about-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Кардиологическая помощь в «Альтамед‑С»
              </h2>
              <p className="text-gray-700 leading-relaxed mb-0">
                В клинике «Альтамед‑С» кардиологи принимают пациентов с повышенным давлением, перебоями в сердце, болью или дискомфортом в груди, одышкой,
                изменениями на ЭКГ и необходимостью контроля уже назначенного лечения. На приёме врач оценивает симптомы, давление, пульс, факторы риска и
                подбирает обследования по показаниям: ЭКГ, Холтер, анализы или дополнительные методы диагностики; при необходимости врач направит на{" "}
                <Link href="/services/ultrasound" className="text-emerald-700 font-medium hover:underline">
                  эхокардиографию
                </Link>{" "}
                или другие исследования.
              </p>
            </div>
            <div className="relative aspect-[4/3] max-h-[280px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 mx-auto w-full max-w-md">
              <Image src="/images/images allergoly/kardiolog.webp" alt="Кардиология" fill className="object-cover" unoptimized sizes="(max-width: 1024px) 100vw, 400px" />
            </div>
          </div>
        </div>
      </section>

      {/* 7 Одышка */}
      <section className="py-14 bg-white" aria-labelledby="cardio-dyspnea-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-dyspnea-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Одышка, быстрая утомляемость и отёки
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Если стало сложнее переносить обычную нагрузку, появилась одышка при ходьбе или подъёме по лестнице, отёки ног, сердцебиение, слабость или
            дискомфорт в груди — это повод обсудить состояние с кардиологом. Врач оценит давление, пульс, ЭКГ, сопутствующие заболевания и решит, нужны ли
            дополнительные обследования.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "одышка при нагрузке",
              "отёки ног",
              "слабость",
              "быстрая утомляемость",
              "сердцебиение",
              "снижение переносимости нагрузки",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 После 40 */}
      <section className="py-14 bg-gray-50" aria-labelledby="cardio-40-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-40-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Профилактический осмотр сердца и сосудов
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Даже без выраженных жалоб консультация кардиолога может быть полезна при повышенном давлении, лишнем весе, курении, сахарном диабете, высоком
            холестерине, наследственных сердечно-сосудистых заболеваниях или малоподвижном образе жизни. Врач поможет оценить факторы риска и понять, какие
            обследования действительно нужны.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "возраст 40+",
              "повышенное давление",
              "высокий холестерин",
              "сахарный диабет",
              "курение",
              "лишний вес",
              "семейная история инфаркта/инсульта",
              "подготовка к нагрузкам или операции",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Приём */}
      <section className="py-14 bg-white" aria-labelledby="cardio-visit-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-visit-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Что происходит на консультации
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              {
                title: "Разбор жалоб",
                desc: "Врач уточняет давление, пульс, боль, одышку, перебои, лекарства и наследственность.",
              },
              {
                title: "Оценка факторов риска",
                desc: "Возраст, вес, курение, холестерин, диабет, стресс, физическая активность.",
              },
              {
                title: "Осмотр и измерения",
                desc: "Давление, пульс, аускультация, оценка отёков и общего состояния.",
              },
              {
                title: "План обследования",
                desc: "ЭКГ, Холтер, анализы, УЗИ сердца или другие исследования — по показаниям; эхокардиография — в разделе УЗИ по направлению.",
              },
              {
                title: "План лечения и контроля",
                desc: "Врач объясняет, как контролировать давление, пульс, лекарства и когда прийти повторно.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-0">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-6 mb-0 max-w-3xl mx-auto">
            Лабораторные анализы при необходимости — см.{" "}
            <Link href="/services/lab-tests" className="text-emerald-700 hover:underline font-medium">
              лабораторную диагностику
            </Link>
            ; УЗИ сердца — см.{" "}
            <Link href="/services/ultrasound" className="text-emerald-700 hover:underline font-medium">
              УЗИ
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 10 Что взять */}
      <section className="py-14 bg-gray-50" aria-labelledby="cardio-bring-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-bring-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Что поможет кардиологу быстрее разобраться
          </h2>
          <ul className="max-w-3xl space-y-2 text-gray-700">
            {[
              "свежую ЭКГ, если есть;",
              "результаты Холтера;",
              "результаты анализов крови;",
              "список лекарств и дозировки;",
              "дневник давления за 7–14 дней;",
              "данные о пульсе;",
              "выписки после госпитализаций;",
              "заключения УЗИ сердца, если делали;",
              "информацию об инфарктах и инсультах у близких родственников.",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-emerald-600 shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11 Дневник давления */}
      <section className="py-14 bg-white" aria-labelledby="cardio-diary-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-diary-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Дневник давления перед приёмом
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Если вы записываетесь из-за давления, полезно несколько дней фиксировать показатели утром и вечером: давление, пульс, самочувствие, лекарства и
            время их приёма. Это помогает врачу увидеть не разовое значение, а динамику.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left min-w-[520px]">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="p-3 font-semibold border-b border-gray-200">Дата</th>
                  <th className="p-3 font-semibold border-b border-gray-200">Утро</th>
                  <th className="p-3 font-semibold border-b border-gray-200">Вечер</th>
                  <th className="p-3 font-semibold border-b border-gray-200">Пульс</th>
                  <th className="p-3 font-semibold border-b border-gray-200">Самочувствие</th>
                  <th className="p-3 font-semibold border-b border-gray-200">Лекарства</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700">
                  <td className="p-3 border-b border-gray-100">13.04</td>
                  <td className="p-3 border-b border-gray-100">140/90</td>
                  <td className="p-3 border-b border-gray-100">135/85</td>
                  <td className="p-3 border-b border-gray-100">78</td>
                  <td className="p-3 border-b border-gray-100">норма</td>
                  <td className="p-3 border-b border-gray-100">эналаприл 10 мг</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3 mb-0">Добавьте свои строки по дням — чем полнее дневник, тем точнее картина для врача.</p>
        </div>
      </section>

      {/* 13 Расшифровка ЭКГ */}
      <section className="py-14 bg-gray-50" aria-labelledby="cardio-ecg-decode-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-ecg-decode-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Нужна расшифровка ЭКГ?
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Если вы сделали ЭКГ перед операцией, диспансеризацией, спортом, госпитализацией или из-за жалоб, кардиолог может расшифровать результат, объяснить
            изменения простым языком и подсказать, нужно ли дообследование.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["перед операцией", "перед спортивными нагрузками", "при изменениях на ЭКГ", "при боли в груди", "при перебоях", "для контроля лечения"].map(
              (t) => (
                <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                  {t}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 14 После событий */}
      <section className="py-14 bg-white" aria-labelledby="cardio-follow-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-follow-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Наблюдение после сердечно-сосудистых событий
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            После инфаркта, операции на сердце, нарушения ритма, гипертонического криза или инсульта может потребоваться регулярное наблюдение: контроль
            давления, пульса, ЭКГ, лекарств, анализов и переносимости нагрузки. Кардиолог помогает выстроить понятный план контроля и профилактики повторных
            осложнений.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "после инфаркта",
              "после операции",
              "после гипертонического криза",
              "при нарушениях ритма",
              "после инсульта совместно с неврологом",
              "контроль терапии",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6 mb-0 max-w-3xl">
            При неврологических симптомах после инсульта дополнительно может понадобиться{" "}
            <Link href="/services/neurology" className="text-emerald-700 font-medium hover:underline">
              консультация невролога
            </Link>
            .
          </p>
        </div>
      </section>

      <CardiologyAlphabetConditionsSection />

      {/* FAQ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-labelledby="cardio-faq-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="cardio-faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Частые вопросы
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-xl border border-gray-200 bg-gray-50/80 p-4 shadow-sm">
                <summary className="cursor-pointer font-semibold text-gray-900 list-none flex items-center justify-between gap-3">
                  <span>{item.q}</span>
                  <span className="text-emerald-600 text-xl leading-none group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed mb-0">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      {/* Статьи */}
      <section className="py-12 bg-white scroll-mt-20" id="cardio-articles" aria-labelledby="cardio-articles-heading">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 id="cardio-articles-heading" className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Статьи
          </h2>
          <div id="statyi" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scroll-mt-24">
            {(showMoreArticles ? CARDIOLOGY_SERVICE_ARTICLES : CARDIOLOGY_SERVICE_ARTICLES.slice(0, 4)).map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-teal-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-rose-50 via-white to-white">
                  <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-rose-200/35 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-orange-200/25 blur-2xl" />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        <svg className="h-5 w-5 text-rose-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M12 21s-7-4.6-9.2-9.1C1.3 8.5 3.4 5.5 6.6 5.5c1.8 0 3.3.9 4.4 2.3 1.1-1.4 2.6-2.3 4.4-2.3 3.2 0 5.3 3 3.8 6.4C19 16.4 12 21 12 21Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path d="M7.6 12h2.6l1.2-2.4 1.6 5 1.1-2.6H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-rose-50 text-rose-800 border-rose-100">
                          Кардиология
                        </span>
                        <span className="h-1 w-1 rounded-full bg-rose-300/80" aria-hidden />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-snug line-clamp-2 transition group-hover:text-rose-800">
                        {a.title}
                      </h3>
                    </div>
                    <div className="shrink-0 pt-1 text-gray-400 transition group-hover:text-rose-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                  <span className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-sm rounded-xl transition border border-rose-200 text-rose-900 bg-rose-50/60 hover:bg-rose-100">
                    Читать подробнее
                    <span className="transition group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {!showMoreArticles && CARDIOLOGY_SERVICE_ARTICLES.length > 4 && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowMoreArticles(true)}
                className="px-6 py-3 border-2 border-rose-600 text-rose-800 font-medium rounded-xl hover:bg-rose-50 transition"
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>
      </section>

      <CardiologyPageClient />
    </div>
  );
}
