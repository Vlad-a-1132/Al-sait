"use client";

import Image from "next/image";
import Link from "next/link";
import DermatologyPageClient, { DermatologyPricesSection, type DermatologyServiceRow } from "./DermatologyPageClient";
import DermatologyAlphabetSection from "./DermatologyAlphabetSection";
import { DERMATOLOGY_SERVICE_ARTICLES } from "@/data/dermatology-service-articles";
import { doctors } from "@/data/static-data";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

type Props = {
  serviceRows: DermatologyServiceRow[];
};

function CardGrid({
  items,
  className = "",
}: {
  items: { title: string; desc?: string }[];
  className?: string;
}) {
  return (
    <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {items.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:border-emerald-200 hover:shadow-md transition"
        >
          <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
          {c.desc ? <p className="text-sm text-gray-600 leading-relaxed mb-0">{c.desc}</p> : null}
        </div>
      ))}
    </div>
  );
}

function PillList({ items, tone = "emerald" }: { items: string[]; tone?: "emerald" | "amber" }) {
  const dot = tone === "amber" ? "text-amber-600" : "text-emerald-600";
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

export default function DermatologyPageClientV2({ serviceRows }: Props) {
  const dermatologists = [
    doctors.find((d) => d.slug === "emelyanova-anna-igorevna") ?? null,
    doctors.find((d) => d.slug === "poluektova-oksana-nikolaevna") ?? null,
  ].filter(Boolean) as Array<(typeof doctors)[number]>;

  const faqItems = [
    {
      q: "Можно ли прийти к дерматологу без анализов?",
      a: "Да. На первичном приёме врач осмотрит кожу и решит, нужны ли анализы или дополнительные обследования.",
    },
    {
      q: "Нужно ли смывать косметику перед приёмом?",
      a: "Если жалобы на кожу лица, лучше прийти без плотного тонального средства, чтобы врач мог оценить кожу.",
    },
    {
      q: "Можно ли удалить родинку сразу на приёме?",
      a: "Решение принимает врач после осмотра. Некоторые образования требуют предварительной оценки и выбора безопасной тактики.",
    },
    {
      q: "Чем дерматоскопия отличается от обычного осмотра?",
      a: "Дерматоскопия позволяет врачу осмотреть образование под увеличением и оценить дополнительные признаки.",
    },
    {
      q: "Когда нужно показать родинку врачу?",
      a: "Если она растёт, меняет форму или цвет, кровит, зудит, травмируется или заметно отличается от остальных родинок. AAD относит изменение родинки и «непохожее на остальные» пятно к признакам, которые требуют внимания.",
    },
    {
      q: "Можно ли лечить грибок ногтей самостоятельно?",
      a: "Лучше сначала подтвердить причину изменений. Ноготь может менять цвет и толщину не только из-за грибка.",
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
    <div className="derm-v2">
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
                Дерматология
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Дерматолог в Одинцово — диагностика и лечение кожных заболеваний
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Диагностика и лечение кожных заболеваний у взрослых и детей. Помогаем разобраться с высыпаниями, зудом, шелушением, изменениями кожи и
                ногтей — без самодиагностики и лишних процедур.
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
                <a href="#derm-diagnostics" className="text-emerald-600 hover:underline py-1">
                  Диагностика
                </a>
                <a href="#services-heading" className="text-emerald-600 hover:underline py-1">
                  Цены
                </a>
                <a href="#derm-complaints" className="text-emerald-600 hover:underline py-1">
                  Жалобы
                </a>
                <a href="#derm-disease-groups" className="text-emerald-600 hover:underline py-1">
                  Заболевания
                </a>
                <a href="#derm-faq" className="text-emerald-600 hover:underline py-1">
                  FAQ
                </a>
                <a href="#derm-articles" className="text-emerald-600 hover:underline py-1">
                  Статьи
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/images allergoly/Dermat1ology.webp"
                  alt="Дерматология в Альтамед‑С"
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

      <section className="py-12 bg-gray-50" aria-labelledby="derm-why-altamed">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-why-altamed" className="text-3xl font-bold text-gray-900 text-center mb-12">
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

      <section className="py-12 bg-white" aria-labelledby="derm-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 id="derm-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900">
                Врачи-дерматологи
              </h2>
              <p className="text-gray-600 mt-2">Специалисты, которые ведут приём по дерматологии и дерматовенерологии.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {dermatologists.map((d) => (
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

      {/* Диагностика — перед прайсом */}
      <section id="derm-diagnostics" className="py-14 bg-gray-50 scroll-mt-20" aria-labelledby="derm-diagnostics-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-diagnostics-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Какие обследования может провести дерматолог
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            В прайсе встречаются специализированные названия — кратко поясняем, что за ними стоит. Конкретный набор назначает врач по показаниям.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Дерматоскопия", d: "Осмотр кожи и образований под увеличением." },
              { t: "Лампа Вуда", d: "Люминесцентная диагностика при отдельных кожных состояниях." },
              { t: "Витропрессия", d: "Осмотр кожи через стекло при надавливании." },
              { t: "Оценка дермографизма", d: "Проверка реакции кожи на механическое раздражение." },
              { t: "Лабораторные анализы", d: "Назначаются по показаниям, если нужно уточнить причину симптомов." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{x.t}</h3>
                <p className="text-sm text-gray-600 mb-0">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DermatologyPricesSection serviceRows={serviceRows} />

      {/* 1. Жалобы */}
      <section id="derm-complaints" className="py-14 bg-white scroll-mt-20" aria-labelledby="derm-complaints-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-complaints-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            С какими жалобами обращаются к дерматологу
          </h2>
          <CardGrid
            items={[
              { title: "Высыпания и зуд", desc: "Сыпь, пятна, волдыри, покраснение, жжение, шелушение." },
              { title: "Акне и воспаления кожи", desc: "Прыщи, комедоны, болезненные воспаления, следы после акне." },
              { title: "Родинки и новообразования", desc: "Невусы, папилломы, кератомы, бородавки, изменения кожи." },
              { title: "Грибок кожи и ногтей", desc: "Зуд стоп, шелушение, изменение цвета и толщины ногтя." },
              { title: "Проблемы кожи головы", desc: "Перхоть, зуд, себорея, выпадение волос." },
              { title: "Кожные заболевания у детей", desc: "Сыпь, атопический дерматит, контагиозный моллюск, раздражение кожи." },
            ]}
          />
        </div>
      </section>

      {/* 2. Срочно */}
      <section className="py-14 bg-gray-50" aria-labelledby="derm-urgent-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-urgent-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Когда лучше не откладывать визит
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
            Планово можно обратиться при акне, шелушении, сухости, подозрении на грибок, бородавках, папилломах или хронических высыпаниях. Но если сыпь
            быстро распространяется, сопровождается температурой, отёком лица или губ, сильной болью, гноем, пузырями около глаз/рта/гениталий, ухудшением
            самочувствия — лучше обратиться за медицинской помощью срочно. NHS отдельно выделяет опасные ситуации у детей с сыпью: выраженная сонливость,
            затруднённое дыхание, ригидность шеи, холодные конечности и сыпь, которая не бледнеет при надавливании.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Можно планово</h3>
              <PillList items={["акне", "зуд", "шелушение", "перхоть", "грибок ногтей", "бородавки", "папилломы"]} />
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Лучше срочно</h3>
              <PillList
                tone="amber"
                items={[
                  "сыпь + температура",
                  "отёк лица",
                  "гной",
                  "сильная боль",
                  "быстрое распространение",
                  "пузыри около глаз/рта/гениталий",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Родинки */}
      <section className="py-14 bg-white" aria-labelledby="derm-moles-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-moles-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Проверка родинок и новообразований кожи
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Если родинка изменила размер, форму, цвет, стала асимметричной, начала кровить, зудеть или заметно отличается от других образований на коже —
            её лучше показать дерматологу. Американская академия дерматологии описывает тревожные признаки меланомы как изменяющуюся родинку, пятно с
            неровной границей, несколькими цветами или ростом; правило ABCDE помогает обратить внимание на асимметрию, границы, цвет, диаметр и
            изменения.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {[
              "изменилась форма",
              "изменилась окраска",
              "родинка растёт",
              "кровит или травмируется",
              "появилась новая необычная родинка",
              "образование отличается от остальных",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
          <Link
            href={APPOINTMENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition"
          >
            Записаться на дерматоскопию
          </Link>
        </div>
      </section>

      {/* 4. Акне */}
      <section className="py-14 bg-gray-50" aria-labelledby="derm-acne-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-acne-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Акне и воспаления кожи
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            К дерматологу стоит обратиться, если высыпания повторяются, воспаления болезненные, появляются узлы или кисты, остаются пятна и рубцы, а
            домашний уход не помогает. AAD отмечает, что к дерматологу можно обращаться не только при тяжёлом акне: консультация полезна, если акне не
            проходит на средствах без рецепта, вызывает дискомфорт или появляются глубокие воспаления, которые могут оставлять рубцы.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["подростковое акне", "акне у взрослых", "комедоны", "болезненные воспаления", "постакне", "подбор ухода и лечения"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Грибок */}
      <section className="py-14 bg-white" aria-labelledby="derm-fungus-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-fungus-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Грибок стоп и ногтей
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
            Изменение цвета, утолщение, ломкость или крошение ногтя могут быть признаками грибковой инфекции. NHS указывает, что грибковая инфекция ногтей
            обычно не опасна, но лечится долго; ноготь может становиться более толстым, ломким и изменять цвет.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              "зуд и шелушение стоп",
              "трещины между пальцами",
              "изменение цвета ногтя",
              "утолщение ногтя",
              "ломкость ногтя",
              "подозрение на онихомикоз",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 max-w-3xl">
            <p className="font-semibold text-gray-900 mb-2">Важно</p>
            <p className="text-gray-700 text-sm sm:text-base mb-0">
              Не начинать лечение «наугад»: похожие изменения ногтей могут быть не только грибком.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Удаление */}
      <section className="py-14 bg-gray-50" aria-labelledby="derm-removal-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-removal-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Удаление доброкачественных образований кожи
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Дерматолог осматривает образование, оценивает показания к удалению и подбирает подходящий метод. Удалять родинки, папилломы, бородавки,
            кератомы или другие образования самостоятельно опасно: перед процедурой важно понять, что это за образование и можно ли его удалять выбранным
            способом.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {["папилломы", "бородавки", "кератомы", "милиумы", "контагиозный моллюск", "доброкачественные образования кожи"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
          <Link
            href={APPOINTMENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-emerald-600 text-emerald-700 font-medium rounded-xl hover:bg-emerald-50 transition"
          >
            Уточнить возможность удаления
          </Link>
        </div>
      </section>

      {/* 7. Дети */}
      <section className="py-14 bg-white" aria-labelledby="derm-kids-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-kids-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Детский дерматолог: когда показать ребёнка
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            К дерматологу можно обратиться при сыпи, зуде, атопическом дерматите, шелушении, мокнутии, подозрении на грибок, контагиозный моллюск,
            бородавки или кожные реакции после укусов. У детей важно не заниматься самолечением гормональными мазями и антибиотиками без назначения врача.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["сыпь и зуд", "атопический дерматит", "раздражение кожи", "бородавки", "контагиозный моллюск", "грибковые поражения"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Как проходит приём */}
      <section className="py-14 bg-gray-50" aria-labelledby="derm-visit-flow-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-visit-flow-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Как проходит консультация дерматолога
          </h2>
          <ol className="grid md:grid-cols-2 gap-6 list-none p-0 m-0">
            {[
              {
                t: "Разбор жалоб",
                d: "Когда появились симптомы, что усиливает, какие средства уже использовали.",
              },
              {
                t: "Осмотр кожи, волос или ногтей",
                d: "Врач оценивает внешний вид, локализацию, распространённость и характер изменений.",
              },
              {
                t: "Диагностика по показаниям",
                d: "Дерматоскопия, лампа Вуда, анализы или направление на дополнительные исследования.",
              },
              {
                t: "План лечения",
                d: "Врач объясняет диагноз, лечение, уход, ограничения и сроки контрольного осмотра.",
              },
            ].map((step, i) => (
              <li key={step.t} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.t}</h3>
                  <p className="text-sm text-gray-600 mb-0">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 10. Что взять */}
      <section className="py-14 bg-white" aria-labelledby="derm-bring-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-bring-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Что взять на консультацию
          </h2>
          <ul className="max-w-3xl space-y-3 text-gray-700">
            {[
              "список мазей, кремов и таблеток, которые уже использовали",
              "результаты анализов, если есть",
              "фото высыпаний в разные дни, если симптомы меняются",
              "информацию об аллергиях",
              "список хронических заболеваний",
              "данные о лекарствах, которые принимаете постоянно",
              "вопросы, которые хотите задать врачу",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-emerald-600 shrink-0">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. Чего не делать */}
      <section className="py-14 bg-gray-50" aria-labelledby="derm-dont-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-dont-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Перед визитом к дерматологу
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Не стоит самостоятельно начинать гормональные мази, антибиотики, противогрибковые препараты или агрессивные косметические процедуры без
            назначения врача. Такие средства могут временно изменить картину заболевания и усложнить диагностику. Если вы уже что-то применяли — лучше
            сфотографировать упаковку или записать название.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "не прижигать образования самостоятельно",
              "не выдавливать воспаления",
              "не сдирать корки",
              "не начинать сильные мази без назначения",
              "не маскировать высыпания плотным тоном перед осмотром",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 text-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Группы заболеваний */}
      <section id="derm-disease-groups" className="py-14 bg-white scroll-mt-20" aria-labelledby="derm-disease-groups-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-disease-groups-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Какие заболевания лечит дерматолог
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Воспалительные заболевания", body: "дерматит, экзема, псориаз, себорейный дерматит." },
              { title: "Инфекционные заболевания", body: "грибок кожи и ногтей, герпес, лишай, пиодермия." },
              { title: "Высыпания и акне", body: "угревая болезнь, комедоны, фолликулит, постакне." },
              { title: "Новообразования кожи", body: "родинки, папилломы, бородавки, кератомы." },
              { title: "Кожа головы, волосы и ногти", body: "перхоть, выпадение волос, ониходистрофия, грибок ногтей." },
              { title: "Детская дерматология", body: "атопический дерматит, потница, контагиозный моллюск, сыпь у детей." },
            ].map((g) => (
              <div key={g.title} className="rounded-2xl border border-gray-100 bg-gray-50/80 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-0">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DermatologyAlphabetSection />

      {/* FAQ — как на странице проктологии */}
      <section className="py-12 bg-gray-50 scroll-mt-20" id="derm-faq" aria-labelledby="derm-faq-heading">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Часто задаваемые вопросы
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Ответы на популярные вопросы о дерматологии</p>
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

      {/* Статьи — как на странице проктологии */}
      <section className="py-12 bg-white scroll-mt-20" id="derm-articles" aria-labelledby="derm-articles-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="derm-articles-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Полезные статьи
          </h2>
          <p className="text-gray-600 mb-8">Материалы по темам дерматологии — для спокойной подготовки к приёму.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DERMATOLOGY_SERVICE_ARTICLES.map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group relative flex flex-col rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-lg overflow-hidden transition"
              >
                <div className="relative px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-emerald-50 via-white to-white">
                  <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-emerald-200/30 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-teal-200/25 blur-2xl" />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        <svg className="h-5 w-5 text-emerald-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M12 2c3.8 2.9 6.6 6.6 6.6 10.3A6.6 6.6 0 1 1 5.4 12.3C5.4 8.6 8.2 4.9 12 2Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.2 13.1c1.4.7 3.1.7 4.5 0"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase">
                          Дерматология
                        </span>
                        <span className="h-1 w-1 rounded-full bg-emerald-300/80" aria-hidden />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-emerald-800 transition">
                        {a.title}
                      </h3>
                    </div>
                    <div className="shrink-0 pt-1 text-gray-400 group-hover:text-emerald-600 transition" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                  <div className="mt-auto">
                    <span className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center border border-emerald-200 text-emerald-900 bg-emerald-50/60 font-semibold text-sm rounded-xl hover:bg-emerald-100 transition">
                      Читать подробнее
                      <span className="transition group-hover:translate-x-0.5" aria-hidden>
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .derm-v2 > div > section.py-4 {
          display: none !important;
        }
        .derm-v2 > div > main.py-3 {
          display: none !important;
        }
      `}</style>

      <DermatologyPageClient />
    </div>
  );
}
