"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ProctologyPageClient, { type ProctologyServiceRow, ProctologyPricesSection } from "./ProctologyPageClient";
import { doctors } from "@/data/static-data";
import { PROCTOLOGY_SERVICE_ARTICLES } from "@/data/proctology-service-articles";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

const faqProctologyItems: { q: string; a: string }[] = [
  {
    q: "Когда нужно обращаться к колопроктологу?",
    a: "При боли, крови, дискомфорте, зуде, изменении стула, выпадении узлов, гнойных выделениях или других симптомах со стороны прямой кишки, а также для профилактического осмотра при факторах риска.",
  },
  {
    q: "Больно ли проходить осмотр у проктолога?",
    a: "Обычно врач проводит осмотр максимально деликатно и объясняет каждый этап. Если есть сильная боль, обязательно скажите об этом до начала осмотра.",
  },
  {
    q: "Нужна ли клизма перед приёмом?",
    a: "Не всегда. Подготовку лучше уточнить при записи. Не стоит делать клизмы или использовать свечи без рекомендации врача.",
  },
  {
    q: "Можно ли прийти с кровью после стула?",
    a: "Да, это один из частых поводов для консультации. Повторяющуюся кровь лучше не списывать на геморрой без осмотра.",
  },
  {
    q: "Геморрой всегда лечится операцией?",
    a: "Нет. Тактика зависит от стадии и симптомов: иногда достаточно консервативного лечения, иногда нужны малоинвазивные процедуры, иногда операция.",
  },
  {
    q: "Когда нужно обращаться срочно?",
    a: "При обильном кровотечении, сильной боли, температуре, гнойных выделениях, резком ухудшении самочувствия, чёрном или тёмно-красном стуле лучше не ждать планового визита.",
  },
];

const constipationChecklist = ["стул (частота, консистенция)", "питание и клетчатка", "вода / питьевой режим", "лекарства, которые принимаете", "боль и её связь со стулом", "кровь или слизь в стуле"];

const bringChecklist = [
  "результаты анализов",
  "заключения колоноскопии/ректороманоскопии, если были",
  "список лекарств",
  "данные о хронических заболеваниях",
  "информацию о кровотечении, боли, стуле",
  "фото или названия препаратов, которые уже использовали",
  "список вопросов врачу",
];

type Props = {
  serviceRows: ProctologyServiceRow[];
};

function CheckRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start text-sm text-gray-700">
      <span
        className="mt-0.5 shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold"
        aria-hidden
      >
        ✓
      </span>
      <span>{children}</span>
    </div>
  );
}

export default function ProctologyPageClientV2({ serviceRows }: Props) {
  const proctologists = [doctors.find((d) => d.slug === "rusinovich-valery-mikhailovich") ?? null].filter(
    Boolean
  ) as Array<(typeof doctors)[number]>;

  return (
    <div className="proctology-v2">
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
                Проктология
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Проктолог в Одинцово — диагностика и лечение заболеваний прямой кишки
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Консультации при боли, крови в стуле, зуде, геморрое, трещинах, свищах и других симптомах. Врач уточнит анамнез, проведёт осмотр и
                подскажет, какие обследования и лечение уместны в вашей ситуации.
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
                <a href="#proctology-seo" className="text-emerald-600 hover:underline py-1">
                  Подробнее
                </a>
                <a href="#proctology-faq" className="text-emerald-600 hover:underline py-1">
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
                  src="/images/images allergoly/proktolog.webp"
                  alt="Проктология в Альтамед‑С"
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

      {/* 1. Деликатная проблема */}
      <section className="py-10 bg-slate-50 border-y border-slate-100" aria-labelledby="proctology-delicate-title">
        <div className="mx-auto px-4 max-w-4xl text-center">
          <h2 id="proctology-delicate-title" className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Деликатная проблема — обычная врачебная ситуация
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Боль, зуд, кровь после стула, дискомфорт, геморрой или трещина — частые причины обращения к колопроктологу. Врач ежедневно работает с такими
            жалобами, поэтому на приёме не нужно стесняться или откладывать визит «до последнего». Чем раньше понятна причина симптомов, тем проще
            подобрать лечение и не запускать проблему.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white" aria-labelledby="proctology-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Врачи-колопроктологи
          </h2>
          <p className="text-gray-600 mb-6">Специалисты, которые ведут приём по проктологии.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proctologists.map((d) => (
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

      <ProctologyPricesSection serviceRows={serviceRows} />

      {/* 2. Срочно / планово */}
      <section className="py-12 bg-gray-50" aria-labelledby="proctology-urgent-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-urgent-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Когда можно записаться планово, а когда лучше срочно
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Можно планово</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
                <li>зуд, жжение, дискомфорт;</li>
                <li>периодическая боль после стула;</li>
                <li>подозрение на геморрой;</li>
                <li>запоры;</li>
                <li>анальная трещина;</li>
                <li>бахромки, кондиломы;</li>
                <li>профилактический осмотр.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Лучше срочно</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
                <li>обильное кровотечение;</li>
                <li>чёрный или тёмно-красный стул;</li>
                <li>кровавая диарея;</li>
                <li>сильная боль, отёк, температура;</li>
                <li>гнойные выделения;</li>
                <li>резкое ухудшение состояния.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 max-w-4xl leading-relaxed">
            Кровь из прямой кишки нельзя автоматически списывать на геморрой: NHS отдельно указывает, что ректальное кровотечение иногда бывает признаком
            рака кишечника, поэтому его важно проверять у врача. Чёрный/тёмно-красный стул и кровавая диарея относятся к поводам для срочного обращения.
          </p>
        </div>
      </section>

      {/* 3. Кровь в стуле */}
      <section className="py-12 bg-white" aria-labelledby="proctology-blood-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-blood-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Кровь после стула: почему не стоит ждать
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-4xl">
            Кровь на туалетной бумаге, в кале или в унитазе может появляться при геморрое, трещине, воспалении и других состояниях. Но по внешнему виду
            крови невозможно надёжно понять причину без осмотра. Особенно важно обратиться к врачу, если кровь повторяется, есть изменение стула, боль,
            слабость, потеря веса или симптомы держатся несколько недель.
          </p>
          <p className="text-sm text-gray-600 max-w-4xl leading-relaxed border-l-4 border-emerald-200 pl-4">
            NHS рекомендует обратиться к врачу, если симптомы, похожие на признаки рака кишечника, сохраняются 3 недели и более; среди таких симптомов
            указаны кровь в стуле, изменение привычного стула, боль или вздутие живота, похудение и усталость.
          </p>
        </div>
      </section>

      {/* 4. Как проходит осмотр */}
      <section className="py-12 bg-gray-50" aria-labelledby="proctology-exam-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-exam-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Как проходит приём и осмотр
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                t: "Разговор с врачом",
                d: "Врач уточняет жалобы, длительность симптомов, характер стула, боль, кровь, лекарства и перенесённые заболевания.",
              },
              {
                t: "Деликатный осмотр",
                d: "Осмотр проводится спокойно, с объяснением каждого этапа. При необходимости врач оценивает область заднего прохода и прямой кишки.",
              },
              {
                t: "План обследования",
                d: "По показаниям могут быть назначены анализы, ректороманоскопия, биопсия или консультации смежных специалистов.",
              },
              {
                t: "План лечения",
                d: "После осмотра врач объясняет, можно ли начать с консервативной терапии или нужна процедура/оперативное лечение.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Подготовка — плашка + запись */}
      <section className="py-8 bg-white" aria-labelledby="proctology-prep-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50/80 to-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 id="proctology-prep-title" className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Нужна ли подготовка перед консультацией проктолога
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
                На обычный первичный приём чаще всего достаточно прийти в удобной одежде и взять результаты прошлых обследований, если они есть.
                Специальная подготовка нужна не всегда — её лучше уточнить при записи, особенно если планируется инструментальное исследование. Не
                используйте самостоятельно клизмы, свечи или обезболивающие «для подготовки», если врач этого не назначал.
              </p>
            </div>
            <Link
              href={APPOINTMENTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition text-center min-h-[44px]"
            >
              Записаться на приём
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Частые причины */}
      <section className="py-12 bg-gray-50" aria-labelledby="proctology-scenarios-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-scenarios-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Частые причины обращения
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Геморрой", d: "Кровь, зуд, дискомфорт, выпадение узлов, боль при обострении." },
              { t: "Анальная трещина", d: "Резкая боль во время или после стула, следы крови, спазм." },
              { t: "Запор и болезненный стул", d: "Натуживание, плотный стул, ощущение неполного опорожнения." },
              { t: "Свищ или парапроктит", d: "Боль, припухлость, гнойные выделения, повторяющиеся воспаления." },
              { t: "Копчиковый ход", d: "Боль, уплотнение, выделения или воспаление в межъягодичной складке." },
              { t: "Кондиломы и образования", d: "Наросты, дискомфорт, зуд, эстетические и медицинские жалобы." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Геморрой */}
      <section className="py-12 bg-white" aria-labelledby="proctology-hemorrhoid-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-hemorrhoid-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Геморрой: от консервативного лечения до процедур
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Тактика зависит от стадии, жалоб, кровотечения, выпадения узлов и сопутствующих заболеваний. В одних случаях достаточно режима, препаратов и
            коррекции стула, в других врач может рекомендовать малоинвазивные процедуры или хирургическое лечение. Важно не выбирать процедуру по прайсу
            самостоятельно, а сначала пройти осмотр.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "консультация и диагностика",
              "лечение обострения",
              "латексное лигирование",
              "склеротерапия",
              "лазерное лечение",
              "хирургическое лечение по показаниям",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-emerald-100/80 bg-emerald-50/30 px-4 py-3 text-center text-sm font-medium text-gray-800">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Запор */}
      <section className="py-12 bg-gray-50" aria-labelledby="proctology-constipation-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-constipation-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Запор и болезненный стул
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-4xl">
            Запор может усиливать боль, трещины, геморрой и дискомфорт. На приёме врач уточняет частоту стула, плотность, питание, питьевой режим, лекарства
            и хронические заболевания. NIDDK среди частых факторов запора указывает недостаток клетчатки, жидкости и физической активности; при лечении
            взрослым часто рекомендуют увеличить количество клетчатки в рационе постепенно и пить достаточно жидкости.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 max-w-2xl">
            <p className="font-semibold text-gray-900 mb-3">Чек-лист для разговора с врачом</p>
            <div className="grid gap-2">
              {constipationChecklist.map((line) => (
                <CheckRow key={line}>{line}</CheckRow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Парапроктит */}
      <section className="py-12 bg-white" aria-labelledby="proctology-abscess-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-abscess-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Боль, отёк, температура или гнойные выделения
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
            Такие симптомы могут быть связаны с воспалением, абсцессом или свищом. Это не та ситуация, где стоит долго лечиться мазями самостоятельно.
            ASCRS описывает для аноректального абсцесса боль, покраснение или отёк около ануса, слабость, температуру и озноб; для свища характерны
            повторяющиеся симптомы и выделения из отверстия рядом с анусом.
          </p>
          <Link
            href={APPOINTMENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition min-h-[44px]"
          >
            Записаться к колопроктологу
          </Link>
        </div>
      </section>

      {/* 10. Копчиковый ход */}
      <section className="py-12 bg-gray-50" aria-labelledby="proctology-pilonidal-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-pilonidal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Копчиковый ход: боль и воспаление в межъягодичной области
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Если в области копчика или межъягодичной складки появляется боль, припухлость, покраснение, выделения или повторяющиеся воспаления, стоит
            обратиться к врачу. При пилонидальном синусе возможны разные варианты лечения — от дренирования воспаления до хирургического удаления при
            рецидивах; NHS указывает, что при крупном или повторно воспаляющемся синусе может потребоваться операция.
          </p>
        </div>
      </section>

      {/* 12. Методы лечения */}
      <section className="py-12 bg-white" aria-labelledby="proctology-methods-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-methods-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Какие методы лечения может предложить врач
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                t: "Консервативное лечение",
                d: "Рекомендации по режиму, стулу, препаратам и наблюдению.",
              },
              {
                t: "Малоинвазивные процедуры",
                d: "Лигирование, склеротерапия, инфракрасное или лазерное воздействие — по показаниям.",
              },
              {
                t: "Хирургическое лечение",
                d: "Применяется при состояниях, где процедура или медикаменты не решают проблему.",
              },
              {
                t: "Послеоперационное наблюдение",
                d: "Перевязки, контроль заживления, рекомендации по уходу.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{c.t}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Что взять */}
      <section className="py-12 bg-gray-50" aria-labelledby="proctology-bring-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-bring-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Что взять на приём
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 max-w-3xl">
            <div className="grid sm:grid-cols-2 gap-3">
              {bringChecklist.map((line) => (
                <CheckRow key={line}>{line}</CheckRow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. После процедуры */}
      <section className="py-12 bg-white" aria-labelledby="proctology-after-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-after-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            После лечения и процедур
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            После некоторых процедур могут понадобиться перевязки, контрольный осмотр, ограничения по нагрузке, уход за областью вмешательства и коррекция
            стула. Врач заранее объяснит, как проходит восстановление, когда прийти повторно и при каких симптомах нужно связаться с клиникой раньше.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["контрольный осмотр", "уход и гигиена", "стул без натуживания", "когда обращаться раньше срока"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-center text-sm font-medium text-gray-800">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Обзор + id для якоря «Подробнее» */}
      <section className="py-12 bg-gray-50 scroll-mt-20" id="proctology-seo" aria-labelledby="proctology-seo-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 id="proctology-seo-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Консультация проктолога в Одинцово — когда стоит обратиться
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
              <div className="space-y-3">
                <p>
                  Колопроктолог занимается заболеваниями прямой кишки и анальной области: от функциональных жалоб и геморроя до воспалительных процессов
                  и состояний, требующих уточняющей диагностики. На приёме важно понять характер боли, наличие крови или слизи в стуле, изменения стула,
                  зуд и дискомфорт — это помогает выстроить безопасный план обследования.
                </p>
                <p>
                  Мы ориентируемся на доказательный подход: осмотр и сбор жалоб, при необходимости — инструментальные и лабораторные исследования по
                  показаниям, с понятным объяснением шагов.
                </p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-gray-900">Поводы записаться к проктологу:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>боль, зуд или жжение в заднем проходе;</li>
                  <li>кровь или слизь в кале, изменение привычного стула;</li>
                  <li>геморрой, трещина, выпадение, кондиломы;</li>
                  <li>свищ, подозрение на парапроктит (по симптомам);</li>
                  <li>профилактический осмотр при факторах риска или после перенесённых заболеваний.</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Точный диагноз и лечение определяются только после очной консультации и при необходимости — обследований.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="py-12 bg-gray-50 scroll-mt-20" id="proctology-faq" aria-labelledby="proctology-faq-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Часто задаваемые вопросы
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Ответы на популярные вопросы о колопроктологии</p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 w-full items-start max-w-5xl mx-auto">
            {faqProctologyItems.map((item, index) => {
              const isLastOdd = index === faqProctologyItems.length - 1 && faqProctologyItems.length % 2 === 1;
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

      {/* 16. Статьи */}
      <section className="py-12 bg-white scroll-mt-20" id="proctology-articles" aria-labelledby="proctology-articles-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="proctology-articles-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Полезные статьи
          </h2>
          <p className="text-gray-600 mb-8">Материалы по темам проктологии — для спокойной подготовки к приёму.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PROCTOLOGY_SERVICE_ARTICLES.map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-stone-50 via-white to-white">
                  <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-stone-200/35 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-stone-200/25 blur-2xl" />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        <svg className="h-5 w-5 text-stone-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M8.2 6.3A3.8 3.8 0 0 1 12 3.2a3.8 3.8 0 0 1 3.8 3.1"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6.2 13.2c0-2.5 2.6-4.5 5.8-4.5s5.8 2 5.8 4.5v.6c0 2.5-2.6 4.5-5.8 4.5s-5.8-2-5.8-4.5v-.6Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path d="M9.2 13.4h5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-stone-50 text-stone-900 border-stone-200">
                          Проктология
                        </span>
                        <span className="h-1 w-1 rounded-full bg-stone-400/80" aria-hidden />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-snug line-clamp-2 transition group-hover:text-stone-800">
                        {a.title}
                      </h3>
                    </div>
                    <div className="shrink-0 pt-1 text-gray-400 transition group-hover:text-stone-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                  <span className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-sm rounded-xl transition border border-stone-200 text-stone-900 bg-stone-50/60 hover:bg-stone-100">
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
        .proctology-v2 > div > section.py-4 {
          display: none !important;
        }
        .proctology-v2 > div > main.py-3 {
          display: none !important;
        }
      `}</style>

      <ProctologyPageClient />
    </div>
  );
}
