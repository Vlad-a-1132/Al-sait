"use client";

import Image from "next/image";
import Link from "next/link";
import NeurologyPageClient, { NeurologyPricesSection, type NeurologyServiceRow } from "./NeurologyPageClient";
import { NEUROLOGY_SERVICE_ARTICLES } from "@/data/neurology-service-articles";
import { doctors } from "@/data/static-data";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

type Props = {
  serviceRows: NeurologyServiceRow[];
};

function PillList({ items, tone = "emerald" }: { items: string[]; tone?: "emerald" | "rose" }) {
  const dot = tone === "rose" ? "text-rose-600" : "text-emerald-600";
  return (
    <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className={`${dot} shrink-0`}>●</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function NeurologyPageClientV2({ serviceRows }: Props) {
  const neurologists = [
    doctors.find((d) => d.slug === "dmitriev-alexey-olegovich") ?? null,
    doctors.find((d) => d.slug === "pak-larisa-konstantinovna") ?? null,
    doctors.find((d) => d.slug === "pritula-aleksandr-vasilievich") ?? null,
  ].filter(Boolean) as Array<(typeof doctors)[number]>;

  const faqItems = [
    {
      q: "Можно ли прийти к неврологу без МРТ?",
      a: "Да. Часто сначала нужен осмотр, а уже после него врач решает, нужно ли МРТ, КТ или другое обследование.",
    },
    {
      q: "Когда головная боль требует срочной помощи?",
      a: "Если боль внезапная и очень сильная, сопровождается слабостью, нарушением речи, зрения, сознания, судорогами, высокой температурой или онемением — нужна срочная помощь, а не плановая запись.",
    },
    {
      q: "Что делает невролог на приёме?",
      a: "Уточняет жалобы, проверяет рефлексы, чувствительность, силу, координацию, походку и по результатам составляет план лечения или обследования.",
    },
    {
      q: "Нужно ли делать МРТ при боли в спине?",
      a: "Не всегда. Решение зависит от симптомов, неврологического осмотра, длительности боли, наличия онемения, слабости и других признаков.",
    },
    {
      q: "К кому идти при головокружении — к лору или неврологу?",
      a: "Зависит от симптомов. Если есть снижение слуха, боль или заложенность уха — разумно сначала обсудить приём у лор-врача. Если есть онемение, слабость, нарушение речи, координации или выраженная шаткость — нужен невролог и оценка срочности.",
    },
    {
      q: "Можно ли обращаться при тревожности и нарушениях сна?",
      a: "Да, если есть головные боли, напряжение, усталость, нарушения сна, снижение концентрации или подозрение, что симптомы связаны с нервной системой. Иногда дополнительно нужна консультация психотерапевта или другого специалиста.",
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
                <a href="#neuro-urgent" className="text-emerald-600 hover:underline py-1">
                  Планово и срочно
                </a>
                <a href="#neuro-complaints" className="text-emerald-600 hover:underline py-1">
                  Жалобы
                </a>
                <a href="#services-heading" className="text-emerald-600 hover:underline py-1">
                  Цены
                </a>
                <a href="#neuro-diagnostics" className="text-emerald-600 hover:underline py-1">
                  Обследования
                </a>
                <a href="#neuro-faq" className="text-emerald-600 hover:underline py-1">
                  FAQ
                </a>
                <a href="#neuro-articles" className="text-emerald-600 hover:underline py-1">
                  Статьи
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

      <section className="py-12 bg-gray-50" aria-labelledby="neuro-why-altamed">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-why-altamed" className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему «Альтамед-С»?
          </h2>
          <div className="md:hidden space-y-6">
            {[
              "Лечение в соответствии с мировыми клиническими рекомендациями",
              "Комплексная оценка заболевания и прогноза лечения",
              "Современное диагностическое оборудование и собственная диагностическая лаборатория",
              "Высокий уровень сервиса и взвешенная ценовая политика",
            ].map((text, idx) => (
              <div key={text} className="flex items-start gap-4">
                <div className="w-16 h-16 shrink-0 relative">
                  <img src="/images/yslugi/star 1.webp" alt="" className="w-full h-full object-contain" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <p className="text-gray-700 font-medium text-left pt-2">{text}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Лечение в соответствии с мировыми клиническими рекомендациями",
              "Комплексная оценка заболевания и прогноза лечения",
              "Современное диагностическое оборудование и собственная диагностическая лаборатория",
              "Высокий уровень сервиса и взвешенная ценовая политика",
            ].map((text, idx) => (
              <div key={text} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <img src="/images/yslugi/star 1.webp" alt="" className="w-full h-full object-contain" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
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
                    <div className="font-bold text-gray-900 leading-snug group-hover:text-emerald-700 transition">{d.name}</div>
                    {d.specialization ? <div className="text-sm text-gray-600 mt-1">{d.specialization}</div> : null}
                    {typeof d.experience === "number" ? <div className="text-sm text-gray-500 mt-1">Стаж: {d.experience} лет</div> : null}
                    <div className="text-sm text-emerald-700 font-medium mt-3">Открыть профиль</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NeurologyPricesSection serviceRows={serviceRows} />

      {/* 1 Планово / срочно */}
      <section id="neuro-urgent" className="py-14 bg-white scroll-mt-20" aria-labelledby="neuro-urgent-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-urgent-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Когда к неврологу планово, а когда нужна срочная помощь
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Можно планово</h3>
              <PillList
                items={[
                  "периодические головные боли",
                  "боль в шее или пояснице",
                  "онемение, «мурашки»",
                  "головокружение без резкого ухудшения",
                  "нарушения сна",
                  "тревожность, усталость, снижение концентрации",
                  "восстановление после травм и заболеваний",
                ]}
              />
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Нужна срочная помощь</h3>
              <PillList
                tone="rose"
                items={[
                  "внезапная слабость в руке или ноге",
                  "перекос лица",
                  "нарушение речи",
                  "внезапная потеря зрения",
                  "сильнейшая внезапная головная боль",
                  "судороги",
                  "боль в спине + нарушение мочеиспускания/стула",
                  "онемение в области промежности",
                ]}
              />
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mb-0">
            NHS описывает FAST-признаки инсульта: слабость лица, слабость руки и нарушение речи; при таких симптомах нужно вызывать экстренную помощь,
            даже если они прошли. При боли в спине тревожными признаками считаются слабость или онемение в обеих ногах, потеря чувствительности в области
            гениталий/ануса и нарушения мочеиспускания или стула.
          </p>
        </div>
      </section>

      {/* 2 Жалобы */}
      <section id="neuro-complaints" className="py-14 bg-gray-50 scroll-mt-20" aria-labelledby="neuro-complaints-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-complaints-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            С чем вы хотите обратиться к неврологу?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Головная боль и мигрень", desc: "Частые приступы, светобоязнь, тошнота, изменение характера боли." },
              { title: "Боль в спине и шее", desc: "Прострелы, мышечное напряжение, боль после нагрузки или сидячей работы." },
              { title: "Онемение и слабость", desc: "«Мурашки», снижение чувствительности, слабость в руке или ноге." },
              { title: "Головокружение и шаткость", desc: "Неустойчивость, ощущение вращения, предобморочные состояния." },
              { title: "Нарушения сна и тревожность", desc: "Бессонница, частые пробуждения, напряжение, усталость." },
              { title: "Восстановление после инсульта/травм", desc: "Наблюдение, реабилитация, контроль симптомов и терапии." },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:border-emerald-200 hover:shadow-md transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-0">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Головная боль */}
      <section className="py-14 bg-white" aria-labelledby="neuro-headache-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-headache-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Головная боль: когда нужен невролог
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            К неврологу стоит обратиться, если головные боли повторяются, стали чаще или сильнее, мешают работе и сну, плохо снимаются обычными
            средствами или изменили привычный характер. При подозрении на мигрень полезно вести дневник приступов: когда болит, где именно, есть ли
            тошнота, светобоязнь, аура, какие лекарства помогают. Mayo Clinic рекомендует обратиться к врачу, если головные боли стали чаще, сильнее,
            ухудшаются, не проходят на фоне обычных средств или мешают повседневной жизни.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "боль стала чаще",
              "появилась тошнота или светобоязнь",
              "приступы мешают работе",
              "изменился характер боли",
              "обезболивающие помогают хуже",
              "есть подозрение на мигрень",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Спина */}
      <section className="py-14 bg-white" aria-labelledby="neuro-back-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-back-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Боль в спине, шее и пояснице
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Невролог помогает разобраться, связана ли боль с мышечным напряжением, корешковым синдромом, раздражением нерва, последствиями травмы или
            другими причинами. На приёме врач проверяет силу, чувствительность, рефлексы, локализацию боли и решает, нужны ли МРТ, КТ, УЗДГ, ЭНМГ или
            консультация другого специалиста.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "боль в пояснице",
              "боль в шее",
              "прострел в ногу или руку",
              "онемение пальцев",
              "мышечный спазм",
              "боль после сидячей работы",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Онемение */}
      <section className="py-14 bg-gray-50" aria-labelledby="neuro-numb-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-numb-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Онемение и слабость в руках или ногах
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Онемение, покалывание, «мурашки», слабость в кисти, стопе, руке или ноге могут быть связаны с позвоночником, периферическими нервами,
            обменными нарушениями или другими причинами. Врач оценивает, где именно нарушена чувствительность, есть ли слабость, боль, связь с положением
            тела и нагрузкой.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "немеют пальцы рук",
              "немеет нога",
              "слабость в кисти",
              "«мурашки»",
              "боль отдаёт в руку/ногу",
              "ухудшение после нагрузки",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Головокружение */}
      <section className="py-14 bg-white" aria-labelledby="neuro-vertigo-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-vertigo-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Головокружение, шаткость и шум в ушах
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Головокружение может быть связано с вестибулярной системой, давлением, сердечно-сосудистыми причинами, тревожностью, заболеваниями уха или
            неврологическими нарушениями. Невролог уточняет характер головокружения: вращение, шаткость, предобморочное состояние, связь с поворотом головы,
            тошнотой, шумом в ушах или снижением слуха.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              "вращается комната",
              "шатает при ходьбе",
              "кружится при повороте головы",
              "есть шум в ушах",
              "бывает предобморочное состояние",
              "есть тошнота",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mb-0">
            Если есть боль в ухе, снижение слуха или выделения — может потребоваться{" "}
            <Link href="/services/otolaryngology" className="text-emerald-700 font-medium hover:underline">
              консультация лор-врача
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 7 Сон и тревога */}
      <section className="py-14 bg-gray-50" aria-labelledby="neuro-sleep-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-sleep-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Сон, тревожность и хроническое напряжение
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Нарушения сна, тревожность, ощущение постоянного напряжения, усталость, снижение концентрации и головные боли часто усиливают друг друга.
            Невролог помогает оценить, нет ли неврологических причин жалоб, уточняет режим сна, уровень нагрузки, лекарства, сопутствующие заболевания и при
            необходимости рекомендует дополнительные обследования или консультацию смежного специалиста.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["бессонница", "частые пробуждения", "напряжение в теле", "головные боли от стресса", "снижение концентрации", "усталость"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Реабилитация */}
      <section className="py-14 bg-white" aria-labelledby="neuro-rehab-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-rehab-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Наблюдение и восстановление после неврологических заболеваний
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Невролог может сопровождать пациента после инсульта, черепно-мозговой травмы, нейрохирургической операции, заболеваний периферической нервной
            системы или длительного болевого синдрома. На консультации врач оценивает неврологический статус, текущие ограничения, терапию, динамику
            восстановления и при необходимости корректирует план реабилитации.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "после инсульта",
              "после ЧМТ",
              "после нейрохирургической операции",
              "при заболеваниях периферических нервов",
              "при хронической боли",
              "контроль терапии",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Рефлексотерапия */}
      <section className="py-14 bg-gray-50" aria-labelledby="neuro-reflex-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-reflex-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Рефлексотерапия по назначению врача
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Рефлексотерапия может применяться как дополнительный метод в составе индивидуального плана лечения, если врач видит показания и нет
            противопоказаний. Перед курсом важно пройти консультацию: специалист уточнит диагноз, жалобы, сопутствующие заболевания и объяснит, какой
            результат можно ожидать реалистично.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["консультация рефлексотерапевта", "курс процедур по показаниям", "сочетание с основной терапией", "контроль динамики"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 text-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Обследования */}
      <section id="neuro-diagnostics" className="py-14 bg-white scroll-mt-20" aria-labelledby="neuro-diagnostics-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-diagnostics-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Обследования по показаниям
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">Конкретный перечень определяет врач после осмотра.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                t: "МРТ/КТ",
                d: "При подозрении на изменения головного мозга, позвоночника, травмы или осложнения.",
              },
              { t: "УЗДГ сосудов", d: "При жалобах на головокружение, шум, сосудистые факторы риска — по назначению." },
              { t: "ЭНМГ", d: "При онемении, слабости, подозрении на поражение периферических нервов." },
              { t: "Лабораторные анализы", d: "Если нужно исключить дефициты, воспаление, обменные нарушения." },
              { t: "ЭКГ / мониторинг давления", d: "Если жалобы похожи на предобморочные состояния или связаны с давлением." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-gray-50 border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{x.t}</h3>
                <p className="text-sm text-gray-600 mb-0">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Что взять */}
      <section className="py-14 bg-gray-50" aria-labelledby="neuro-bring-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-bring-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Что поможет врачу быстрее разобраться
          </h2>
          <ul className="max-w-3xl space-y-3 text-gray-700">
            {[
              "результаты МРТ/КТ, если делали",
              "заключения УЗДГ, ЭНМГ, ЭЭГ",
              "выписки из стационара",
              "список лекарств и дозировки",
              "дневник головной боли или давления",
              "описание боли: где, как болит, куда отдаёт",
              "данные о травмах, операциях, инсультах",
              "список вопросов врачу",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-emerald-600 shrink-0">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 12 Перед визитом */}
      <section className="py-14 bg-white" aria-labelledby="neuro-dont-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-dont-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Перед консультацией невролога
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-0">
            Не стоит самостоятельно начинать сильные обезболивающие, миорелаксанты, сосудистые препараты или отменять назначенную терапию без врача. Если
            боль сильная или появились новые симптомы — лучше сообщить об этом при записи, чтобы вас сориентировали по срочности. Если уже сделали МРТ или
            КТ, принесите не только заключение, но и снимки/диск, если они есть.
          </p>
        </div>
      </section>

      {/* 13 FAQ */}
      <section className="py-12 bg-gray-50 scroll-mt-20" id="neuro-faq" aria-labelledby="neuro-faq-heading">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Часто задаваемые вопросы
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Ответы на популярные вопросы о неврологии</p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 w-full items-start max-w-5xl mx-auto">
            {faqItems.map((item, index) => {
              const isLastOdd = index === faqItems.length - 1 && faqItems.length % 2 === 1;
              return (
                <details
                  key={item.q}
                  className={`group h-fit rounded-2xl border border-gray-200 bg-white shadow-sm open:shadow-md open:border-emerald-200 transition min-w-0 self-start ${
                    isLastOdd ? "sm:col-span-2" : ""
                  }`}
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 font-semibold text-gray-900 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 pr-2">{item.q}</span>
                    <span className="shrink-0 text-emerald-600 text-xl leading-none group-open:rotate-180 transition" aria-hidden>
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{item.a}</div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14 Статьи */}
      <section className="py-12 bg-white scroll-mt-20" id="neuro-articles" aria-labelledby="neuro-articles-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="neuro-articles-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Полезные статьи
          </h2>
          <p className="text-gray-600 mb-8">Материалы по темам неврологии — для спокойной подготовки к приёму.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {NEUROLOGY_SERVICE_ARTICLES.map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-sky-50 via-white to-white">
                  <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-sky-200/35 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-indigo-200/25 blur-2xl" />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        <svg className="h-5 w-5 text-sky-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M8.5 7.3c-1.8 0-3.3 1.5-3.3 3.3v2.6c0 1.8 1.5 3.3 3.3 3.3h.9c.6 1.4 1.9 2.3 3.4 2.3 2.1 0 3.8-1.7 3.8-3.8v-1.2h.7c1.8 0 3.3-1.5 3.3-3.3v-1.9c0-1.8-1.5-3.3-3.3-3.3h-1.1C15.7 5.1 14.4 4 12.7 4c-1.6 0-3 1.1-3.4 2.6H8.5Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.1 10.2c.6-.7 1.5-1.1 2.4-1.1 1 0 1.8.4 2.4 1.1"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-sky-50 text-sky-800 border-sky-100">
                          Неврология
                        </span>
                        <span className="h-1 w-1 rounded-full bg-sky-300/80" aria-hidden />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-snug line-clamp-2 transition group-hover:text-sky-800">
                        {a.title}
                      </h3>
                    </div>
                    <div className="shrink-0 pt-1 text-gray-400 transition group-hover:text-sky-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                  <span className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-sm rounded-xl transition border border-sky-200 text-sky-900 bg-sky-50/60 hover:bg-sky-100">
                    Читать подробнее
                    <span className="transition group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .neurology-v2 > div > section.py-4 {
          display: none !important;
        }
        .neurology-v2 > div > main.py-3 {
          display: none !important;
        }
      `}</style>

      <NeurologyPageClient />
    </div>
  );
}
