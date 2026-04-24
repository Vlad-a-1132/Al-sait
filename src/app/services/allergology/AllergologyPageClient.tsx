"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CONTACT_PHONE, CONTACT_PHONE_LINK, ODINTSOVO_BRANCHES } from "@/data/branches";

export type AllergologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: AllergologyServiceRow[];
  lysenko: { name: string; slug: string; specialization?: string; experience?: number; photo?: string; description?: string } | null;
};

export default function AllergologyPageClient({ serviceRows, lysenko }: Props) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [showMoreArticles, setShowMoreArticles] = useState(false);

  function normalizePriceForUi(row: AllergologyServiceRow): string {
    // Для аллергологии на странице не показываем "0 руб." — воспринимается как мусор.
    if (row.priceIsZero || row.priceLabel === "0 руб.") return "Цена по запросу";
    return row.priceLabel;
  }

  function parseRubPrice(value: string): number | null {
    const raw = value.replace(/руб\.?/gi, "").replace("₽", "").trim();
    const m = raw.match(/(\d[\d\s]*)/);
    if (!m) return null;
    const n = parseInt(m[1].replace(/\s/g, ""), 10);
    return Number.isFinite(n) ? n : null;
  }

  /**
   * Ключевые услуги под этот лендинг.
   * Важно: цены НЕ хардкодим — только выбираем строки из live-прайса (ветка 5010).
   */
  const preferredKeyCodes: Array<string> = [
    "В01.002.001", // первичный
    "В01.002.002", // повторный
    "А12.06.006", // накожные исследования
    "А12.09.002.002", // провокация физ. нагрузкой
    "В04.002.001", // диспансерный прием
    "А12.09.002.001", // с применением лекарственных препаратов
  ];

  const keyPrices: AllergologyServiceRow[] = [];
  for (const code of preferredKeyCodes) {
    const found = serviceRows.find((s) => s.code === code);
    if (found && !found.priceIsZero) keyPrices.push(found);
  }

  // Fallback: если по кодам что-то не нашлось, добираем эвристикой и общим списком (без 0-цен).
  const keyPriceNeedles: Array<(s: AllergologyServiceRow) => boolean> = [
    (s) => /первичн/i.test(s.name),
    (s) => /повторн/i.test(s.name),
    (s) => /накожн|кожн/i.test(s.name),
    (s) => /функциональн/i.test(s.name) || /спирометр/i.test(s.name) || /дыхательн/i.test(s.name),
  ];
  for (const pick of keyPriceNeedles) {
    if (keyPrices.length >= 6) break;
    const found = serviceRows.find((s) => pick(s) && !keyPrices.includes(s) && !s.priceIsZero);
    if (found) keyPrices.push(found);
  }
  for (const s of serviceRows) {
    if (keyPrices.length >= 6) break;
    if (keyPrices.includes(s)) continue;
    if (s.priceIsZero) continue;
    keyPrices.push(s);
  }

  const articleTopics = [
    {
      title: "Когда стоит обратиться к аллергологу",
      desc: "Типичные симптомы и ситуации, когда консультация помогает быстрее понять причину.",
      image: "/images/blog/Kogda%20stoit%20obratitsya%20k%20allergologu.webp",
      url: "/blog/kogda-stoit-obratitsya-k-allergologu",
    },
    {
      title: "Аллергопробы: как проходят и когда нужны",
      desc: "Что такое кожные тесты, как готовиться и какие ограничения могут быть перед обследованием.",
      image: "/images/blog/Allergoproby%20kak%20prokhodyat%20i%20kogda%20nuzhny.webp",
      url: "/blog/allergoproby-kak-prohodyat-i-kogda-nuzhny",
    },
    {
      title: "Сезонная аллергия: симптомы и когда записываться",
      desc: "Поллиноз, реакции на пыльцу и что обсудить с врачом на приёме.",
      image: "/images/blog/Sezonnaya%20allergiya%20simptomy%20i%20kogda%20zapisyvatsya.webp",
      url: "/blog/sezonnaya-allergiya-simptomy-i-kogda-zapisyvatsya",
    },
    {
      title: "Аллергия у детей: с какими симптомами обращаться",
      desc: "Безопасные ориентиры для родителей и что взять на консультацию.",
      image: "/images/blog/Allergiya%20u%20detey%20s%20kakimi%20simptomami%20obrashchatsya.webp",
      url: "/blog/allergiya-u-detej-s-kakimi-simptomami-obrashchatsya",
    },
    {
      title: "Как подготовиться к приёму аллерголога",
      desc: "Какие наблюдения и документы помогут сделать приём более предметным.",
      image: "/images/blog/Kak%20podgotovitsya%20k%20priyemu%20allergologa.webp",
      url: "/blog/kak-podgotovitsya-k-priemu-allergologa",
    },
  ] as const;

  const anchors = [
    { id: "symptoms", label: "Симптомы" },
    { id: "conditions", label: "Что лечим" },
    { id: "prices", label: "Цены" },
    { id: "doctor", label: "Врач" },
    { id: "diagnostics", label: "Диагностика" },
    { id: "articles", label: "Статьи" },
    { id: "addresses", label: "Адреса" },
    { id: "faq", label: "FAQ" },
  ] as const;

  const primaryVisit =
    serviceRows.find((s) => s.code === "В01.002.001" && !s.priceIsZero) ??
    serviceRows.find((s) => /первичн/i.test(s.name) && !s.priceIsZero) ??
    null;
  const primaryRub = primaryVisit ? parseRubPrice(normalizePriceForUi(primaryVisit)) : null;
  const primaryLine =
    primaryRub != null ? `Первичный приём — от ${new Intl.NumberFormat("ru-RU").format(primaryRub)} ₽` : null;

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* HERO */}
      <main className="min-h-screen pt-20 md:pt-0">
        <section className="relative bg-gradient-to-br from-emerald-50 via-white to-white overflow-hidden">
          {/* мягкие декоративные пятна, как на сильных страницах */}
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
                <li aria-current="page" className="text-gray-700">
                  Аллергология
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  Аллерголог в Одинцово — приём, диагностика и запись в Альтамед-С
                </h1>
                <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                  Помогаем разобраться с причинами кашля, насморка, высыпаний и сезонных реакций. На приёме врач
                  оценит симптомы, возможные триггеры и подскажет, какие обследования действительно нужны.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                  <Link
                    href="https://online.altamed-c.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]"
                  >
                    Записаться на приём
                  </Link>
                  <a
                    href={CONTACT_PHONE_LINK}
                    className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]"
                  >
                    Позвонить в клинику
                  </a>
                </div>

                {primaryLine ? (
                  <p className="text-gray-800 font-semibold mb-3 sm:mb-4">
                    {primaryLine}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {anchors.map((a) => (
                    <a key={a.id} href={`#${a.id}`} className="text-emerald-600 hover:underline py-1">
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative order-first lg:order-none">
                <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <Image
                    src="/images/images allergoly/allergoly (2).webp"
                    alt="Аллерголог-иммунолог в Альтамед-С"
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

      {/* Почему Альтамед-С*/}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед-С»?</h2>
          {/* Мобильная версия - вертикальный список */}
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>

          {/* Десктопная версия - 4 колонки */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">Комплексная оценка заболевания и прогноза лечения</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">Высокий уровень сервиса и взвешенная ценовая политика</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices: key + full */}
      <section id="prices" className="py-8 sm:py-12 scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Услуги и цены</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Ключевые услуги</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyPrices.map((s) => (
                <div key={s.key} className="rounded-xl p-4 bg-white border border-gray-100 shadow-sm">
                  <p className="text-gray-800 font-medium leading-snug mb-1">{s.name}</p>
                  <p className="text-gray-900 font-bold mb-0">{normalizePriceForUi(s)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white">
              <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
                <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
              </div>
              <div className="overflow-y-auto max-h-[480px] sm:max-h-[480px]">
                <table className="w-full text-sm sm:text-base table-fixed">
                  <thead className="sticky top-0 z-10 bg-gray-100">
                    <tr>
                      <th className="text-left py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">
                        Услуга
                      </th>
                      <th className="text-right py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">
                        Цена
                      </th>
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
              <p className="text-gray-600 mt-4 text-sm p-4 border-t border-gray-100">
                Актуальные цены уточняйте при записи. Состав услуг и цены берутся из базы через server-side интеграцию
                прайса.
              </p>
            </div>

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
              <p className="text-gray-600 text-sm text-center mb-4">
                чтобы выбрать время приема и уточнить стоимость услуги.
              </p>
              <p className="text-gray-700 text-sm mb-4">Администратор подберёт врача и удобное время</p>
              <Link
                href="https://online.altamed-c.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-medium text-sm mb-1 hover:underline"
              >
                Записаться онлайн
              </Link>
              <a href={CONTACT_PHONE_LINK} className="text-gray-700 text-sm mb-6 hover:underline">
                {CONTACT_PHONE}
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

      {/* Symptoms */}
      <section id="symptoms" className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Когда стоит обратиться к аллергологу</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-3xl">
            Если симптомы повторяются, усиливаются сезонно или мешают сну и привычной активности — консультация помогает
            понять возможные причины и выбрать тактику обследования.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Дыхательные симптомы",
                items: ["затяжной кашель", "одышка", "свистящее дыхание", "заложенность носа"],
              },
              {
                title: "Кожные проявления",
                items: ["сыпь", "зуд кожи", "покраснение", "отёки"],
              },
              {
                title: "Сезонные реакции",
                items: ["обострения весной/летом", "слезотечение", "чихание", "зуд глаз"],
              },
              {
                title: "Пищевые и бытовые реакции",
                items: ["симптомы после еды", "реакции на пыль/животных", "обострения дома", "контактные реакции"],
              },
              {
                title: "Детские проявления",
                items: ["частые риниты", "кожные реакции", "кашель без простуды", "подозрение на аллерген"],
              },
            ].map((b) => (
              <div key={b.title} className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <p className="text-gray-900 font-semibold mb-2">{b.title}</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {b.items.map((x) => (
                        <li key={x} className="leading-snug">
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we treat */}
      <section id="conditions" className="py-8 sm:py-12 bg-white scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Что лечит аллерголог-иммунолог</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "сезонные аллергические реакции (поллиноз)",
              "аллергический ринит и конъюнктивит",
              "кожные реакции (крапивница, зуд, дерматит)",
              "подозрение на пищевую аллергию",
              "реакции на бытовые аллергены (пыль, шерсть, плесень)",
              "кашель/бронхоспазм с возможной аллергической составляющей",
            ].map((s) => (
              <div key={s} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-emerald-600">✓</span>
                <span className="text-gray-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How visit goes */}
      <section id="visit" className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Как проходит приём</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "сбор жалоб и анамнеза",
              "уточнение возможных триггеров и условий, когда симптомы усиливаются",
              "осмотр и оценка текущего состояния",
              "рекомендации по обследованию по показаниям",
              "план дальнейшей диагностики и наблюдения",
            ].map((s) => (
              <div key={s} className="flex gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <span className="text-emerald-600">✓</span>
                <span className="text-gray-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section id="doctor" className="py-8 sm:py-12 bg-white scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Врач аллерголог-иммунолог</h2>
          {lysenko ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-[160px,1fr] items-start">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-gray-100">
                  {lysenko.photo ? (
                    <Image src={lysenko.photo} alt={lysenko.name} fill className="object-cover" sizes="160px" />
                  ) : null}
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Врач клиники «Альтамед-С»</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{lysenko.name}</h3>
                  <p className="text-gray-700 mb-3">
                    {lysenko.specialization ?? "Аллерголог-иммунолог"}
                    {lysenko.experience ? ` · стаж ${lysenko.experience} лет` : ""}
                  </p>
                  {lysenko.description ? (
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{lysenko.description}</p>
                  ) : null}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="https://online.altamed-c.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition"
                    >
                      Записаться
                    </Link>
                    <Link
                      href={`/doctors/${lysenko.slug}`}
                      className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition"
                    >
                      Подробнее о враче
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Информация о враче временно недоступна.</p>
          )}
        </div>
      </section>

      {/* Diagnostics */}
      <section id="diagnostics" className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Диагностика и обследования</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-3xl">
            Перечень обследований подбирается индивидуально — по симптомам и клинической картине. Ниже — примеры
            направлений, которые чаще всего обсуждаются на консультации.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "консультация аллерголога-иммунолога",
              "накожные исследования реакции на аллергены",
              "исследования функции внешнего дыхания (по показаниям)",
              "подбор плана обследований при сезонных реакциях",
              "оценка возможных бытовых/пищевых триггеров",
            ].map((s) => (
              <div key={s} className="rounded-xl p-4 bg-white border border-gray-100 shadow-sm">
                <p className="text-gray-800 font-medium leading-snug mb-0">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles mock */}
      <section id="articles" className="py-8 sm:py-12 bg-white scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Статьи</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(showMoreArticles ? articleTopics : articleTopics.slice(0, 4)).map((a) => (
              <Link
                key={a.title}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-teal-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide leading-snug line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">{a.desc}</p>
                  <span className="w-full py-2.5 px-4 text-center border-2 border-teal-700 text-teal-700 font-medium text-sm rounded-lg hover:bg-teal-50 transition">
                    Читать подробнее
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {!showMoreArticles && articleTopics.length > 4 && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowMoreArticles(true)}
                className="px-6 py-3 border-2 border-teal-700 text-teal-700 font-medium rounded-xl hover:bg-teal-50 transition"
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Addresses */}
      <section id="addresses" className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Адреса клиники</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {ODINTSOVO_BRANCHES.map((b) => (
              <div key={b.title} className="rounded-2xl p-5 bg-white border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{b.address}</p>
                <p className="text-gray-600 text-sm mb-4">{b.hours}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://online.altamed-c.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center px-5 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition"
                  >
                    Записаться
                  </Link>
                  <a
                    href={b.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center px-5 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition"
                  >
                    Маршрут
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Консультация хорошего врача-аллерголога в Одинцово
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Специалист по аллергологии - это медицинский эксперт, который занимается выявлением, предупреждением и терапией различных форм аллергических патологий. В клинике «Альтамед-с» консультируют высококвалифицированные аллергологи с многолетним стажем работы и глубокими знаниями в области иммунологии. Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук, активно участвующие в научно-исследовательской деятельности.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наши специалисты проведут комплексное обследование, включая лабораторные анализы и аллергопробы, установят точный диагноз, разработают индивидуальную схему терапии и дадут рекомендации по предотвращению обострений.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/images allergoly/allergoly (2).webp"
                alt="Аллергология"
                className="w-full h-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for consultation */}
      <section className="py-16 bg-white" aria-labelledby="reasons-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
            Поводы обращения к врачу-аллергологу в Одинцово
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">постоянное или периодическое слезотечение;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">затяжной кашель;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">зуд кожи;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">затрудненное дыхание;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">заложенность носа;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">зуд и покраснение глаз;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">воспаления, отеки, высыпания на коже;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">сезонный насморк;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">выделения из носа;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">резь в глазах;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">периодическая одышка;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">рецидивирующие кожные высыпания.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive sections */}
      <section id="faq" className="py-16 bg-gray-50 scroll-mt-20" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
            <div
              className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                aria-expanded={openAccordion === 1}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenAccordion(openAccordion === 1 ? null : 1)}
              >
                <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                  Когда стоит записаться к аллергологу?
                </h3>
                <div
                  className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 1 ? "rotate-45" : ""}`}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {openAccordion === 1 && (
                <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="space-y-4 text-gray-700" itemProp="text">
                    <p>
                      Если симптомы повторяются, мешают повседневной активности, усиливаются сезонно или вы не понимаете, что именно провоцирует реакцию. На приёме врач поможет структурировать симптомы и определить, какие обследования действительно нужны.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div
              className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
                aria-expanded={openAccordion === 2}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenAccordion(openAccordion === 2 ? null : 2)}
              >
                <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                  Что входит в приём аллерголога-иммунолога?
                </h3>
                <div
                  className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 2 ? "rotate-45" : ""}`}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {openAccordion === 2 && (
                <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="space-y-4 text-gray-700" itemProp="text">
                    <p>
                      Обычно это сбор жалоб и анамнеза, уточнение возможных триггеров, осмотр, обсуждение обследований по показаниям и план дальнейших действий. Точный набор шагов зависит от симптомов и ситуации.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div
              className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
                aria-expanded={openAccordion === 3}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenAccordion(openAccordion === 3 ? null : 3)}
              >
                <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                  Нужны ли анализы заранее?
                </h3>
                <div
                  className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === 3 ? "rotate-45" : ""}`}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {openAccordion === 3 && (
                <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="space-y-4 text-gray-700" itemProp="text">
                    <p>
                      Обычно — нет. В большинстве случаев достаточно прийти с описанием симптомов: когда начались, что усиливает/ослабляет, есть ли сезонность, какие лекарства уже пробовали. При необходимости врач назначит обследования по показаниям.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
}
