"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import MammologyPageClient, { MammologyPricesSection, type MammologyServiceRow } from "./MammologyPageClient";
import { MAMMOLOGY_SERVICE_ARTICLES } from "@/data/mammology-service-articles";
import { doctors } from "@/data/static-data";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

type Props = {
  serviceRows: MammologyServiceRow[];
};

function SymptomCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:border-emerald-200 hover:shadow-md transition">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-0">{desc}</p>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm text-gray-800">{children}</span>
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

export default function MammologyPageClientV2({ serviceRows }: Props) {
  const mammologists = [
    doctors.find((d) => d.slug === "gromova-elena-anatolyevna") ?? null,
    doctors.find((d) => d.slug === "yutanin-sergey-nikolaevich") ?? null,
  ].filter(Boolean) as Array<(typeof doctors)[number]>;

  const maxStaj = Math.max(...mammologists.map((d) => (typeof d.experience === "number" ? d.experience : 0)), 0);

  const faqItems = [
    {
      q: "Можно ли прийти к маммологу без УЗИ или маммографии?",
      a: "Да. Врач проведёт осмотр и решит, какие обследования нужны именно в вашей ситуации.",
    },
    {
      q: "Что делать, если я нашла уплотнение?",
      a: "Не пытаться ставить диагноз самостоятельно. Запишитесь к маммологу: врач проведёт осмотр и назначит УЗИ, маммографию или другие исследования по показаниям.",
    },
    {
      q: "Боль в груди — это всегда опасно?",
      a: "Нет, боль может быть связана с циклом, гормональными изменениями, кистами, воспалением и другими причинами. Но если боль появилась впервые, усиливается, локализуется в одном месте или сопровождается уплотнением или выделениями — лучше обратиться к врачу.",
    },
    {
      q: "Когда идти к маммологу — до или после месячных?",
      a: "Для планового осмотра часто выбирают первую фазу цикла. Но при тревожных симптомах ждать не нужно.",
    },
    {
      q: "Нужно ли проверять грудь, если ничего не болит?",
      a: "Да, профилактический осмотр и скрининг важны, особенно с возрастом и при факторах риска. Конкретную частоту обследований лучше обсудить с врачом.",
    },
    {
      q: "Какие симптомы нельзя игнорировать?",
      a: "Новое уплотнение, кровянистые выделения, втяжение соска, изменение кожи, ямочки, покраснение, сыпь на соске, увеличение лимфоузлов в подмышке. Эти признаки перечисляются среди симптомов, требующих медицинской оценки.",
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

  const symptomCards = [
    {
      title: "Уплотнение в груди",
      desc: "Новое образование, «шарик», участок плотности, изменение структуры ткани.",
    },
    {
      title: "Боль или дискомфорт",
      desc: "Боль перед месячными, постоянная боль, болезненность при касании.",
    },
    {
      title: "Выделения из соска",
      desc: "Особенно если выделения кровянистые, односторонние или появились вне беременности и лактации.",
    },
    {
      title: "Изменения кожи груди",
      desc: "Покраснение, втяжение, «апельсиновая корка», шелушение, язвочки.",
    },
    {
      title: "Изменение формы груди или соска",
      desc: "Втяжение соска, асимметрия, изменение размера или формы.",
    },
    {
      title: "Профилактический осмотр",
      desc: "Контроль при наследственных рисках, после 40 лет, после лечения или по рекомендации врача.",
    },
  ];

  return (
    <div className="mammology-v2">
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
                Маммология
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Маммолог в Одинцово — диагностика и лечение заболеваний молочных желез
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Принимаем с профилактическими вопросами и симптомами: боль, уплотнения, выделения, изменения кожи и формы. На приёме врач оценит жалобы и
                при необходимости направит на УЗИ, маммографию, лабораторные анализы или другие обследования и объяснит план действий.
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
                <a href="#mamm-symptoms" className="text-emerald-600 hover:underline py-1">
                  Симптомы
                </a>
                <a href="#mamm-urgency" className="text-emerald-600 hover:underline py-1">
                  Срочность
                </a>
                <a href="#mamm-prices" className="text-emerald-600 hover:underline py-1">
                  Цены
                </a>
                <a href="#mamm-articles" className="text-emerald-600 hover:underline py-1">
                  Статьи
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/images allergoly/mamalogy.webp"
                  alt="Маммология в Альтамед‑С"
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

      <section className="py-12 bg-white" aria-labelledby="mammology-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mammology-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Врачи-маммологи
          </h2>
          <p className="text-gray-600 mb-6">Специалисты, которые ведут приём по маммологии.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {mammologists.map((d) => (
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

      <MammologyPricesSection serviceRows={serviceRows} />

      <section className="py-12 bg-gray-50 border-y border-gray-100" aria-labelledby="mamm-trust-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-trust-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Приём ведут врачи со стажем до {maxStaj || 48} лет
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl mb-0">
            Консультации при уплотнениях, боли, выделениях из соска, изменениях кожи и формы молочной железы, а также профилактические осмотры и разбор
            результатов обследований.
          </p>
        </div>
      </section>

      {/* 1 Симптомы */}
      <section id="mamm-symptoms" className="py-14 bg-white scroll-mt-20" aria-labelledby="mamm-symptoms-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-symptoms-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            С какими симптомами записываются к маммологу
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-sm sm:text-base">
            CDC среди тревожных признаков заболеваний молочной железы указывает новое уплотнение в груди или подмышке, утолщение или отёк части груди,
            втяжение соска, выделения не грудного молока, изменение формы груди, боль и изменения кожи.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {symptomCards.map((c) => (
              <SymptomCard key={c.title} title={c.title} desc={c.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* 2 Срочность */}
      <section id="mamm-urgency" className="py-14 bg-gray-50 scroll-mt-20" aria-labelledby="mamm-urgency-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-urgency-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Когда можно записаться планово, а когда лучше не откладывать
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Можно планово</h3>
              <PillList
                items={[
                  "профилактический осмотр;",
                  "периодическая болезненность перед циклом;",
                  "контроль ранее найденной кисты или фиброаденомы;",
                  "подбор плана наблюдения;",
                  "консультация после УЗИ или маммографии.",
                ]}
              />
            </div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-6 shadow-sm">
              <h3 className="font-bold text-rose-900 mb-4">Лучше записаться в ближайшее время</h3>
              <PillList
                items={[
                  "новое уплотнение в груди или подмышке;",
                  "кровянистые выделения из соска;",
                  "втяжение соска;",
                  "изменение кожи груди;",
                  "заметная асимметрия, которая появилась недавно;",
                  "уплотнение не проходит несколько недель.",
                ]}
              />
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto mt-8 text-center leading-relaxed">
            Mayo Clinic рекомендует обратиться к врачу, если уплотнение новое, плотное или фиксированное, не проходит 4–6 недель, меняется, сопровождается
            изменениями кожи, выделениями из соска, втяжением соска или новым увеличением в подмышке.
          </p>
        </div>
      </section>

      {/* 3 Уплотнение SEO */}
      <section className="py-14 bg-white" aria-labelledby="mamm-lump-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-lump-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Нашли уплотнение в груди? Не гадайте по ощущениям
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Уплотнение может быть связано с разными причинами: кистой, фиброаденомой, воспалением, гормональными изменениями или другими состояниями. По
            ощущениям невозможно надёжно определить причину, поэтому правильный путь — осмотр маммолога и обследования по показаниям. Врач оценит жалобы,
            возраст, семейный анамнез, результаты УЗИ и маммографии и подскажет, нужен ли контроль в динамике или дообследование.
          </p>
          <Link
            href={APPOINTMENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition min-h-[44px]"
          >
            Записаться к маммологу
          </Link>
        </div>
      </section>

      {/* 4 Возраст */}
      <section className="py-14 bg-gray-50" aria-labelledby="mamm-age-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-age-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Маммологический осмотр в разном возрасте
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                title: "До 30 лет",
                desc: "Боль, уплотнения, выделения, вопросы после родов и лактации, доброкачественные образования.",
              },
              {
                title: "30–40 лет",
                desc: "Контроль жалоб, УЗИ по показаниям, оценка факторов риска, наблюдение в динамике.",
              },
              {
                title: "После 40 лет",
                desc: "Профилактические осмотры, скрининг, маммография по возрасту и показаниям.",
              },
              {
                title: "После лечения или операций",
                desc: "Контроль состояния, наблюдение, разбор результатов обследований.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-0">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            Американское онкологическое общество указывает, что женщины 40–44 лет могут начать ежегодную маммографию по желанию, 45–54 лет — проходить
            маммографию ежегодно, а после 55 лет можно перейти на обследование раз в 2 года или продолжать ежегодно. Это не жёсткое правило для всех: врач
            адаптирует ориентир под ваши риски и локальные рекомендации.
          </p>
        </div>
      </section>

      {/* 5 Обследования */}
      <section className="py-14 bg-white" aria-labelledby="mamm-exam-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-exam-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Какие обследования может назначить маммолог
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: "Осмотр маммолога",
                desc: "Оценка жалоб, пальпация молочных желёз и подмышечных областей, сбор анамнеза.",
              },
              {
                title: "УЗИ молочных желёз",
                desc: "Часто используется у молодых пациенток, при жалобах, кистах, уплотнениях и динамическом наблюдении.",
              },
              {
                title: "Маммография",
                desc: "Метод скрининга и диагностики, особенно актуальный в более старшем возрасте и по показаниям.",
              },
              {
                title: "Лабораторные анализы",
                desc: "Назначаются не всем, а только если есть клиническая необходимость.",
              },
              {
                title: "Пункция / биопсия",
                desc: "Проводится по показаниям, если нужно уточнить характер образования.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-0">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Врач при необходимости направит на нужное обследование — УЗИ, маммографию, лабораторные анализы или другие исследования по показаниям.
          </p>
        </div>
      </section>

      {/* 6 Выделения */}
      <section className="py-14 bg-gray-50" aria-labelledby="mamm-discharge-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-discharge-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Выделения из соска: когда нужен врач
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Выделения могут появляться по разным причинам, но особенно важно обратиться к врачу, если они кровянистые, односторонние, возникают
            самостоятельно, сопровождаются уплотнением, болью, изменением кожи или формы соска. NHS относит выделения из соска вне беременности и грудного
            вскармливания, особенно с кровью, к симптомам, которые требуют медицинской оценки.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "кровянистые выделения",
              "выделения из одной груди",
              "выделения без надавливания",
              "выделения + уплотнение",
              "выделения + втяжение соска",
              "выделения + изменение кожи",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Боль */}
      <section className="py-14 bg-white" aria-labelledby="mamm-pain-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-pain-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Боль в молочной железе
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
            Боль может быть связана с циклом, гормональными изменениями, кистами, воспалением, травмой, лактацией или другими причинами. На приёме врач
            уточнит, связана ли боль с менструальным циклом, где именно болит, есть ли уплотнение, выделения, температура, покраснение или изменения кожи.
            Если боль появилась впервые, усиливается, локализуется в одном месте или сопровождается другими симптомами — лучше записаться на осмотр.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag>Болит перед циклом</Tag>
            <Tag>Болит постоянно</Tag>
            <Tag>Болит в одном месте</Tag>
            <Tag>Боль + уплотнение</Tag>
            <Tag>Боль + покраснение</Tag>
          </div>
        </div>
      </section>

      {/* 8 Кожа */}
      <section className="py-14 bg-gray-50" aria-labelledby="mamm-skin-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-skin-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Изменения кожи груди и соска
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Поводом для консультации могут быть втяжение соска, покраснение, шелушение, язвочка, «апельсиновая корка», изменение формы груди или новая
            асимметрия. NHS среди симптомов рака груди указывает изменения кожи, изменение размера или формы груди, втяжение соска, сыпь на соске и
            выделения.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["втяжение соска", "покраснение", "шелушение", "ямочки на коже", "изменение формы груди", "сыпь или корочки на соске"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Лактация */}
      <section className="py-14 bg-white" aria-labelledby="mamm-lact-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-lact-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Молочные железы после родов и во время лактации
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            К маммологу можно обратиться при боли, уплотнении, покраснении, подозрении на лактостаз, воспалении, болезненности сосков или других изменениях
            во время грудного вскармливания. Врач оценит состояние, подскажет безопасную тактику и при необходимости направит на обследование.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "болезненное уплотнение",
              "покраснение",
              "боль при кормлении",
              "подозрение на лактостаз",
              "температура и ухудшение состояния",
              "вопросы после завершения лактации",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Риски */}
      <section className="py-14 bg-gray-50" aria-labelledby="mamm-risk-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-risk-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Кому особенно важно наблюдаться у маммолога
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 max-w-5xl mx-auto">
            {[
              "рак молочной железы у близких родственников",
              "ранее выявленные образования",
              "перенесённые операции на молочной железе",
              "возраст старше 40 лет",
              "изменения по УЗИ или маммографии",
              "гормональная терапия или сопутствующие гинекологические вопросы",
              "выделения, уплотнения или изменения кожи в анамнезе",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Наличие факторов риска не означает диагноз, но помогает врачу определить индивидуальный план наблюдения.
          </p>
        </div>
      </section>

      {/* 11 Приём */}
      <section className="py-14 bg-white" aria-labelledby="mamm-visit-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-visit-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Что происходит на консультации
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Разбор жалоб",
                desc: "Врач уточняет боль, выделения, уплотнения, цикл, беременность, лактацию, операции и семейный анамнез.",
              },
              {
                title: "Осмотр и пальпация",
                desc: "Оцениваются молочные железы, кожа, соски, подмышечные области.",
              },
              {
                title: "Назначение обследований",
                desc: "УЗИ, маммография, анализы или дополнительные исследования — только по показаниям; при необходимости выдаётся направление.",
              },
              {
                title: "План наблюдения или лечения",
                desc: "Врач объясняет, что делать дальше: лечение, контроль в динамике, консультация смежного специалиста или дообследование.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Что взять */}
      <section className="py-14 bg-gray-50" aria-labelledby="mamm-bring-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-bring-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Что взять на приём к маммологу
          </h2>
          <ul className="max-w-3xl space-y-2 text-gray-700">
            {[
              "результаты УЗИ молочных желёз;",
              "маммографию, если делали;",
              "заключения биопсии или пункции, если были;",
              "выписки после операций;",
              "список лекарств и гормональных препаратов;",
              "данные о беременности, родах, лактации;",
              "информацию о семейном анамнезе;",
              "вопросы, которые хотите задать врачу.",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-emerald-600 shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13 День цикла */}
      <section className="py-14 bg-white" aria-labelledby="mamm-cycle-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-cycle-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            В какой день цикла лучше идти к маммологу
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-0">
            Если ситуация плановая, часто удобнее записываться в первую фазу цикла, когда молочные железы менее напряжены. Но если есть уплотнение,
            кровянистые выделения, изменение кожи, втяжение соска, боль или резкое ухудшение — не стоит ждать «идеального дня цикла», лучше записаться раньше.
          </p>
        </div>
      </section>

      {/* Маммолог / онколог */}
      <section className="py-14 bg-gray-50" aria-labelledby="mamm-onco-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-onco-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Маммолог и онколог-маммолог: в чём разница для пациента
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-0">
            На практике пациент записывается к врачу, который занимается диагностикой заболеваний молочных желёз: болью, уплотнениями, выделениями,
            изменениями кожи, профилактическими осмотрами и разбором результатов УЗИ или маммографии. Если в прайсе услуга указана как приём онколога,
            администратор при записи уточнит, что консультация нужна именно по маммологии.
          </p>
        </div>
      </section>

      {/* Текст про клинику вместо старого SEO */}
      <section className="py-14 bg-white border-t border-gray-100" aria-labelledby="mamm-about-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="mamm-about-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Маммологическая помощь в «Альтамед‑С»
              </h2>
              <p className="text-gray-700 leading-relaxed mb-0">
                В клинике «Альтамед‑С» маммологи консультируют пациентов с болью, уплотнениями, выделениями из сосков, изменениями кожи и формы молочных желёз,
                а также помогают разобраться с результатами УЗИ, маммографии и других обследований. На приёме врач проводит осмотр, оценивает жалобы и
                факторы риска, после чего объясняет дальнейший план: наблюдение, лечение или дообследование.
              </p>
            </div>
            <div className="relative aspect-[4/3] max-h-[280px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 mx-auto w-full max-w-md">
              <Image src="/images/images allergoly/mamalogy.webp" alt="Маммология" fill className="object-cover" unoptimized sizes="(max-width: 1024px) 100vw, 400px" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50" aria-labelledby="mamm-faq-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Частые вопросы
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
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
      <section className="py-12 bg-white scroll-mt-20" id="mamm-articles" aria-labelledby="mamm-articles-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="mamm-articles-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Полезные статьи
          </h2>
          <p className="text-gray-600 mb-8">Материалы по темам маммологии — для спокойной подготовки к приёму.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MAMMOLOGY_SERVICE_ARTICLES.map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-pink-50 via-white to-white">
                  <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-pink-200/35 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-fuchsia-200/25 blur-2xl" />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        <svg className="h-5 w-5 text-pink-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M12 4.2c1.6-1.7 3.8-2.7 6-2 2.1.7 3.4 2.5 3.4 4.8 0 4.8-4.4 8-9.4 12.2C7 14.9 2.6 11.8 2.6 7c0-2.3 1.3-4.1 3.4-4.8 2.2-.7 4.4.3 6 2Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path d="M8.6 10.4c.9 1.1 2.1 1.6 3.4 1.6 1.3 0 2.5-.5 3.4-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-pink-50 text-pink-800 border-pink-100">
                          Маммология
                        </span>
                        <span className="h-1 w-1 rounded-full bg-pink-300/80" aria-hidden />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-snug line-clamp-2 transition group-hover:text-pink-800">
                        {a.title}
                      </h3>
                    </div>
                    <div className="shrink-0 pt-1 text-gray-400 transition group-hover:text-pink-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                  <span className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-sm rounded-xl transition border border-pink-200 text-pink-900 bg-pink-50/60 hover:bg-pink-100">
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

      <MammologyPageClient />
    </div>
  );
}
