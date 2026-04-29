"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PediatricsPageClient, {
  type PediatricsServiceRow,
  PediatricsPricesSection,
  PediatricsWhyAltamedSection,
} from "./PediatricsPageClient";
import { doctors } from "@/data/static-data";
import { PEDIATRICS_SERVICE_ARTICLES } from "@/data/pediatrics-service-articles";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

const faqPediatricsItems: { q: string; a: string }[] = [
  {
    q: "Нужно ли приходить с ребёнком на приём, если нужна справка?",
    a: "Да. Справка оформляется после осмотра ребёнка и оценки состояния врачом.",
  },
  {
    q: "Можно ли прийти на приём с температурой?",
    a: "Да, но лучше заранее сообщить администратору о симптомах, чтобы вас правильно сориентировали по времени и маршруту обращения.",
  },
  {
    q: "Можно ли обсудить прививки на приёме?",
    a: "Да. Педиатр может посмотреть прививочный анамнез, оценить состояние ребёнка и обсудить дальнейший график по показаниям.",
  },
  {
    q: "Что взять на приём к педиатру?",
    a: "Медицинскую карту, выписки, результаты анализов, данные о прививках, список лекарств и информацию об аллергиях.",
  },
  {
    q: "Когда лучше не ждать записи?",
    a: "При затруднённом дыхании, сильной вялости, судорогах, признаках обезвоживания, отказе от питья, резком ухудшении состояния или температуре у ребёнка младше 3 месяцев лучше обращаться за срочной помощью.",
  },
];

const temperatureChecklist = [
  "когда поднялась температура и как долго держится",
  "максимальные значения",
  "чем измеряли (ртуть, электронный и т. п.)",
  "какие жаропонижающие давали и был ли эффект",
  "кашель, насморк, боль в горле",
  "сыпь, рвота, диарея",
  "боль в ухе, отказ от питья, необычная сонливость",
];

const visitChecklist = [
  "когда начались симптомы",
  "какая была температура",
  "какие лекарства уже давали",
  "были ли аллергии",
  "как ребёнок пьёт и ест",
  "как часто мочится",
  "есть ли рвота, диарея, сыпь",
  "кто болел дома или в саду/школе",
  "какие прививки сделаны",
  "есть ли хронические заболевания",
];

type Props = {
  serviceRows: PediatricsServiceRow[];
};

function CheckRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start text-sm text-gray-700">
      <span className="mt-0.5 shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold" aria-hidden>
        ✓
      </span>
      <span>{children}</span>
    </div>
  );
}

export default function PediatricsPageClientV2({ serviceRows }: Props) {
  const pediatricians = [
    doctors.find((d) => d.slug === "loria-olga-viktorovna") ?? null,
    doctors.find((d) => d.slug === "stachenkova-svetlana-valerievna") ?? null,
  ].filter(Boolean) as Array<(typeof doctors)[number]>;

  return (
    <div className="pediatrics-v2">
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
                Педиатрия
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Педиатр в Одинцово — наблюдение и лечение детей от рождения до 18 лет
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Плановые осмотры, острые состояния, вакцинация, консультации по питанию и развитию. Врач задаст вопросы родителям и ребёнку с учётом
                возраста, оценит общее состояние и подскажет, какие обследования уместны.
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
                <a href="#pediatrics-seo" className="text-emerald-600 hover:underline py-1">
                  Срочно или планово
                </a>
                <a href="#pediatrics-faq" className="text-emerald-600 hover:underline py-1">
                  Вопросы
                </a>
                <a href="#services-heading" className="text-emerald-600 hover:underline py-1">
                  Цены
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/yslugi/Pediatrician.webp"
                  alt="Педиатрия в Альтамед‑С"
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

      <PediatricsWhyAltamedSection />

      <section className="py-12 bg-white" aria-labelledby="pediatrics-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Врачи-педиатры
          </h2>
          <p className="text-gray-600 mb-6">Специалисты, которые ведут приём по педиатрии.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pediatricians.map((d) => (
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
                    {d.slug === "stachenkova-svetlana-valerievna" ? (
                      <div className="text-sm text-gray-600 mt-1">Педиатр, врач-остеопат</div>
                    ) : d.specialization ? (
                      <div className="text-sm text-gray-600 mt-1">{d.specialization}</div>
                    ) : null}
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

      <PediatricsPricesSection serviceRows={serviceRows} />

      {/* 1. Срочно или планово */}
      <section className="py-12 bg-gray-50 scroll-mt-20" id="pediatrics-seo" aria-labelledby="pediatrics-urgent-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 id="pediatrics-urgent-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Когда педиатр нужен срочно, а когда можно записаться планово
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
              Плановый приём подходит для профилактического осмотра, справок, вакцинации, вопросов по питанию, сну и развитию. Но если ребёнок тяжело
              дышит, выраженно вялый, отказывается пить, редко мочится, есть признаки обезвоживания, судороги, повторная рвота или температура у малыша
              до 3 месяцев — лучше не ждать плановой записи и обращаться за срочной медицинской помощью. AAP отдельно указывает, что температура 38°C и
              выше у ребёнка младше 3 месяцев — повод связаться с врачом без ожидания.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Можно планово</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
                  <li>осмотр, справка, вакцинация;</li>
                  <li>частые ОРВИ (без признаков тяжёлого состояния);</li>
                  <li>питание, сон, развитие.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Лучше срочно</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
                  <li>затруднённое дыхание, сильная вялость;</li>
                  <li>отказ от питья, редкое мочеиспускание;</li>
                  <li>судороги, температура у младенца.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. По возрасту */}
      <section className="py-12 bg-white" aria-labelledby="pediatrics-age-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-age-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            С чем обращаются к педиатру в разном возрасте
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Клиника работает не только с острыми состояниями, но и с плановым наблюдением и консультациями для родителей.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                t: "0–1 год",
                d: "Плановые осмотры, набор веса, питание, сон, колики, срыгивания, вакцинация, развитие.",
              },
              {
                t: "1–3 года",
                d: "Частые ОРВИ, адаптация к детскому саду, питание, речь, аллергические реакции, справки.",
              },
              {
                t: "4–7 лет",
                d: "Подготовка к саду и школе, профилактические осмотры, инфекции, кашель, боли в животе.",
              },
              {
                t: "7–18 лет",
                d: "Школьные нагрузки, частые простуды, справки, спорт, рост, питание, подростковые жалобы.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50/80 to-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Температура */}
      <section className="py-12 bg-gray-50" aria-labelledby="pediatrics-fever-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-fever-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Если у ребёнка температура
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
            Перед приёмом полезно записать: когда поднялась температура, какие были максимальные значения, чем измеряли, какие жаропонижающие давали и был
            ли эффект. Врачу также важно знать, есть ли кашель, насморк, боль в горле, сыпь, рвота, диарея, боль в ухе, отказ от питья или необычная
            сонливость. У детей младше 3 месяцев температура 38°C и выше требует особенно внимательной оценки.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="font-semibold text-gray-900 mb-4">Чек-лист перед визитом</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {temperatureChecklist.map((line) => (
                <CheckRow key={line}>{line}</CheckRow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Справки */}
      <section className="py-12 bg-white" aria-labelledby="pediatrics-certs-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-certs-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Справки для детского сада, школы и занятий
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Педиатр проводит осмотр ребёнка, уточняет жалобы, перенесённые заболевания и при необходимости направляет на дополнительные обследования.
            После осмотра врач подскажет, какие документы можно оформить в вашей ситуации и нужны ли заключения других специалистов. Конкретный набор
            справок определяется только после осмотра и по медицинским показаниям — мы не обещаем оформление «любой» справки без оценки состояния.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {["справка в детский сад", "справка в школу", "справка после болезни", "справка для секции", "профилактический осмотр"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 text-center text-sm font-medium text-gray-800">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Развитие */}
      <section className="py-12 bg-gray-50" aria-labelledby="pediatrics-dev-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-dev-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Вопросы роста и развития
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            К педиатру можно обратиться не только при болезни. На приёме родители часто обсуждают набор веса, питание, сон, речь, двигательную активность,
            адаптацию к саду и поведение ребёнка. CDC описывает возрастные этапы развития как навыки в движении, речи, общении, игре и обучении; если у
            родителей есть сомнения, лучше обсудить их с врачом, не дожидаясь выраженной проблемы.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["рост и вес", "речь", "сон", "питание", "моторное развитие", "поведение и адаптация"].map((t) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Симптомы */}
      <section className="py-12 bg-white" aria-labelledby="pediatrics-symptoms-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-symptoms-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            С какими симптомами чаще всего обращаются
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "температура",
              "кашель и насморк",
              "боль в горле",
              "боль в ухе",
              "сыпь",
              "боль в животе",
              "рвота и диарея",
              "слабость и отказ от еды",
              "аллергические реакции",
              "частые ОРВИ",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-emerald-100/80 bg-emerald-50/30 px-3 py-3 text-center text-sm font-medium text-gray-800">
                {t}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 max-w-3xl">
            Не занимайтесь самолечением антибиотиками. Решение о лекарствах врач принимает после осмотра ребёнка и оценки симптомов.
          </p>
        </div>
      </section>

      {/* 8. Питание */}
      <section className="py-12 bg-gray-50" aria-labelledby="pediatrics-nutrition-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-nutrition-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Питание, прикорм и набор веса
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Педиатр поможет разобраться, достаточно ли ребёнок ест, нормально ли набирает вес, когда и как вводить прикорм, что делать при избирательном
            аппетите, частых болях в животе, запорах или пищевых реакциях. На приём полезно взять данные о весе, росте, рационе и реакциях на продукты.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["прикорм", "плохой аппетит", "запоры", "боли в животе", "пищевая аллергия", "набор или потеря веса"].map((t) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Что рассказать */}
      <section className="py-12 bg-white" aria-labelledby="pediatrics-tell-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-tell-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Что рассказать педиатру на приёме
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">Памятка — можно просто отметить пункты перед визитом.</p>
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {visitChecklist.map((line) => (
                <CheckRow key={line}>{line}</CheckRow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Плановые осмотры */}
      <section className="py-12 bg-gray-50" aria-labelledby="pediatrics-wellness-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-wellness-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Плановые осмотры у педиатра
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Профилактические визиты помогают оценивать рост, вес, развитие, питание, сон, вакцинацию и общее состояние ребёнка. AAP/Bright Futures описывает
            регулярные well-child visits как систему осмотров и скринингов от младенчества до подросткового возраста; в России порядок профилактических
            медицинских осмотров несовершеннолетних регулируется отдельными приказами Минздрава.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {["первый год жизни", "перед детским садом", "перед школой", "школьный возраст", "подростковый возраст"].map((t) => (
              <div key={t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm text-center">
                <h3 className="font-bold text-gray-900 text-sm">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-12 bg-white scroll-mt-20" id="pediatrics-faq" aria-labelledby="pediatrics-faq-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-faq-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Частые вопросы
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Коротко о приёме и справках — без замены консультации врача.</p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 w-full items-start">
            {faqPediatricsItems.map((item, index) => {
              const isLastOdd = index === faqPediatricsItems.length - 1 && faqPediatricsItems.length % 2 === 1;
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
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3 max-w-4xl">{item.a}</div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Статьи */}
      <section className="py-12 bg-gray-50 scroll-mt-20" id="pediatrics-articles" aria-labelledby="pediatrics-articles-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="pediatrics-articles-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Полезные статьи
          </h2>
          <p className="text-gray-600 mb-8">Материалы по темам педиатрии — для спокойной подготовки к приёму.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PEDIATRICS_SERVICE_ARTICLES.map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-lime-50 via-white to-white">
                  <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-lime-200/35 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-emerald-200/25 blur-2xl" />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        <svg className="h-5 w-5 text-lime-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M12 3.2c3.3 0 6 2.7 6 6v.8c0 3.3-2.7 6-6 6s-6-2.7-6-6v-.8c0-3.3 2.7-6 6-6Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path d="M9.2 10.6c.6-.7 1.6-1.1 2.8-1.1s2.2.4 2.8 1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          <path d="M9.4 20.6c.7-1.8 1.6-2.6 2.6-2.6s1.9.8 2.6 2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-lime-50 text-lime-900 border-lime-100">
                          Педиатрия
                        </span>
                        <span className="h-1 w-1 rounded-full bg-lime-300/80" aria-hidden />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-snug line-clamp-2 transition group-hover:text-lime-800">
                        {a.title}
                      </h3>
                    </div>
                    <div className="shrink-0 pt-1 text-gray-400 transition group-hover:text-lime-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                  <span className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-sm rounded-xl transition border border-lime-200 text-lime-900 bg-lime-50/60 hover:bg-lime-100">
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
        .pediatrics-v2 > div > section.py-4 {
          display: none !important;
        }
        .pediatrics-v2 > div > main.py-3 {
          display: none !important;
        }
      `}</style>

      <PediatricsPageClient />
    </div>
  );
}
