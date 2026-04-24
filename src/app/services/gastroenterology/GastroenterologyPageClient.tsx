"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CONTACT_PHONE_LINK, ODINTSOVO_BRANCHES } from "@/data/branches";

export type GastroenterologyServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: GastroenterologyServiceRow[];
  doctors: Array<{ name: string; slug: string; specialization?: string; experience?: number; photo?: string; description?: string }>;
};

function normalizePriceForUi(s: GastroenterologyServiceRow): string {
  if (s.priceIsZero) return "Цена по запросу";
  const raw = String(s.priceLabel ?? "").trim();
  if (!raw || raw === "—") return "Цена по запросу";
  if (/^0\s*руб\.?$/i.test(raw)) return "Цена по запросу";
  return raw;
}

function parseRubPrice(s: string): number | null {
  const digits = s.replace(/[^\d]/g, "");
  if (!digits) return null;
  const n = Number(digits);
  return Number.isFinite(n) ? n : null;
}

export default function GastroenterologyPageClient({ serviceRows, doctors }: Props) {
  const [showMoreArticles, setShowMoreArticles] = useState(false);

  const preferredKeyCodes: Array<string> = [
    "В01.004.001", // первичный
    "В01.004.002", // повторный
    "В01.004.001.001", // первичный к.м.н.
    "В01.004.002.001", // повторный к.м.н.
    "А07.16.006", // 13С-уреазный дыхательный тест
  ];

  const keyPrices: GastroenterologyServiceRow[] = [];
  for (const code of preferredKeyCodes) {
    const found = serviceRows.find((s) => s.code === code);
    if (found && !found.priceIsZero) keyPrices.push(found);
  }

  for (const s of serviceRows) {
    if (keyPrices.length >= 6) break;
    if (keyPrices.includes(s)) continue;
    if (s.priceIsZero) continue;
    keyPrices.push(s);
  }

  const primaryVisit =
    serviceRows.find((s) => s.code === "В01.004.001" && !s.priceIsZero) ??
    serviceRows.find((s) => /первичн/i.test(s.name) && !s.priceIsZero) ??
    null;
  const primaryRub = primaryVisit ? parseRubPrice(normalizePriceForUi(primaryVisit)) : null;
  const primaryLine =
    primaryRub != null ? `Первичный приём — от ${new Intl.NumberFormat("ru-RU").format(primaryRub)} ₽` : null;

  const anchors = [
    { id: "symptoms", label: "Симптомы" },
    { id: "conditions", label: "С чем обращаются" },
    { id: "prices", label: "Цены" },
    { id: "doctor", label: "Врач" },
    { id: "diagnostics", label: "Диагностика" },
    { id: "articles", label: "Статьи" },
    { id: "addresses", label: "Адреса" },
    { id: "faq", label: "FAQ" },
  ] as const;

  const articleTopics = [
    {
      title: "Когда стоит обратиться к гастроэнтерологу",
      desc: "Какие жалобы чаще всего становятся поводом для консультации и как подготовиться к приёму.",
      url: "/blog/kogda-stoit-obratitsya-k-gastroenterologu",
      image: "/images/images allergoly/gas.webp",
    },
    {
      title: "Боль в животе: когда нужен гастроэнтеролог",
      desc: "На что обратить внимание в симптомах и когда лучше не затягивать с визитом.",
      url: "/blog/bol-v-zhivote-kogda-nuzhen-gastroenterolog",
      image: "/images/images allergoly/gas.webp",
    },
    {
      title: "Изжога и отрыжка: когда пора записаться к гастроэнтерологу",
      desc: "Как понять, что симптомы повторяются, и что полезно отследить до консультации.",
      url: "/blog/izzhoga-i-otryzhka-kogda-pora-zapisatsya-k-gastroenterologu",
      image: "/images/images allergoly/gas.webp",
    },
    {
      title: "Helicobacter pylori: когда врач может рекомендовать дыхательный тест",
      desc: "Что важно обсудить на приёме и почему обследование назначает врач, а не интернет.",
      url: "/blog/helicobacter-pylori-kogda-vrach-mozhet-rekomendovat-dyhatelnyj-test",
      image: "/images/images allergoly/gas.webp",
    },
    {
      title: "Вздутие живота и метеоризм",
      desc: "Когда симптом бывает эпизодическим, а когда нужен план обследования и наблюдения.",
      url: "/blog/vzdutie-zhivota-i-meteorizm",
      image: "/images/images allergoly/gas.webp",
    },
    {
      title: "Запор или диарея",
      desc: "Какие вопросы гастроэнтеролог обычно уточняет и какие привычки важно описать.",
      url: "/blog/zapor-ili-diareya",
      image: "/images/images allergoly/gas.webp",
    },
    {
      title: "13С-уреазный дыхательный тест",
      desc: "Что это за обследование простыми словами, как обычно проходит и какие ограничения возможны.",
      url: "/blog/13s-ureaznyj-dyhatelnyj-test",
      image: "/images/images allergoly/gas.webp",
    },
    {
      title: "Когда ребёнку нужен гастроэнтеролог",
      desc: "Ориентиры для родителей: какие жалобы обсудить и что взять на консультацию.",
      url: "/blog/kogda-rebenku-nuzhen-gastroenterolog",
      image: "/images/images allergoly/gas.webp",
    },
  ] as const;

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      <main className="min-h-screen pt-20 md:pt-0">
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
                  Гастроэнтерология
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  Гастроэнтеролог в Одинцово — приём, диагностика и запись в Альтамед‑С
                </h1>
                <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                  Помогаем разобраться с симптомами со стороны ЖКТ и выстроить понятный план обследования. На консультации врач уточняет жалобы,
                  особенности питания и образа жизни, перенесённые заболевания и подбирает тактику наблюдения.
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

                {primaryLine ? <p className="text-gray-800 font-semibold mb-3 sm:mb-4">{primaryLine}</p> : null}

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
                    src="/images/images allergoly/gas.webp"
                    alt="Гастроэнтеролог в Альтамед‑С"
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

        {/* Почему Альтамед-С */}
        <section className="py-12 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед‑С»?</h2>
            <div className="md:hidden space-y-6">
              {[
                "Лечение в соответствии с клиническими рекомендациями",
                "Комплексная оценка симптомов и факторов риска",
                "Современная диагностика и лабораторные исследования",
                "Понятный план наблюдения и обследований",
              ].map((t, i) => (
                <div key={t} className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 relative">
                    <img src="/images/yslugi/star 1.webp" alt={`Звезда ${i + 1}`} className="w-full h-full object-contain" />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium text-left pt-2">{t}</p>
                </div>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Лечение в соответствии с клиническими рекомендациями",
                "Комплексная оценка симптомов и факторов риска",
                "Современная диагностика и лабораторные исследования",
                "Понятный план наблюдения и обследований",
              ].map((t, i) => (
                <div key={t} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <img src="/images/yslugi/star 1.webp" alt={`Звезда ${i + 1}`} className="w-full h-full object-contain" />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Симптомы */}
        <section id="symptoms" className="py-8 sm:py-12 bg-white scroll-mt-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Симптомы, с которыми часто приходят</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "боль или дискомфорт в животе",
                "изжога, отрыжка, чувство жжения за грудиной",
                "вздутие и метеоризм",
                "тошнота, тяжесть после еды",
                "запор или диарея",
                "изменение аппетита и переносимости продуктов",
              ].map((s) => (
                <div key={s} className="rounded-xl p-4 bg-white border border-gray-100 shadow-sm">
                  <p className="text-gray-800 font-medium leading-snug mb-0">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* С чем обращаются */}
        <section id="conditions" className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">С чем гастроэнтеролог помогает разобраться</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "повторяющиеся симптомы со стороны желудка и кишечника",
                "подбор плана обследования при изжоге и болях",
                "уточнение возможных пищевых триггеров (по показаниям)",
                "подбор тактики при функциональных нарушениях",
                "контроль состояния при хронических заболеваниях ЖКТ",
                "обсуждение тестов, включая дыхательные (по показаниям)",
              ].map((s) => (
                <div key={s} className="rounded-xl p-4 bg-white border border-gray-100 shadow-sm">
                  <p className="text-gray-800 font-medium leading-snug mb-0">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Цены */}
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
                <a href={CONTACT_PHONE_LINK} className="text-gray-700 text-sm mb-6 hover:underline">
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

        {/* Врачи — как на /ginekolog-v-odintsovo */}
        <section id="doctor" className="py-12 bg-gray-50/50 scroll-mt-8">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Врачи-гастроэнтерологи в Одинцово</h2>

            {doctors.length ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {doctors.map((d) => (
                    <div key={d.slug} className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gray-100 ring-4 ring-white shadow-md">
                          <Image
                            src={d.photo ?? "/images/doctors/doctor.webp"}
                            alt={d.name}
                            fill
                            className="object-cover object-center"
                            sizes="112px"
                            quality={92}
                            unoptimized
                          />
                        </div>
                        <h3 className="mt-5 font-bold text-lg text-gray-900">{d.name}</h3>
                        <p className="mt-1 text-gray-600 text-sm leading-snug">{d.specialization ?? "Врач"}</p>
                        {d.experience ? <p className="mt-1.5 text-gray-500 text-sm">Стаж {d.experience} лет</p> : null}
                        <div className="mt-5 flex gap-3 w-full">
                          <Link
                            href="https://online.altamed-c.ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition text-center"
                          >
                            Записаться
                          </Link>
                          <Link
                            href={`/doctors/${d.slug}`}
                            className="py-3 px-5 text-gray-600 text-sm font-medium rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition text-center"
                          >
                            О враче
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    href="https://online.altamed-c.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition text-center"
                  >
                    Записаться к врачу
                  </Link>
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-gray-700 mb-0">Информация о врачах будет добавлена.</p>
              </div>
            )}
          </div>
        </section>

        {/* Диагностика */}
        <section id="diagnostics" className="py-8 sm:py-12 bg-white scroll-mt-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Диагностика</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "лабораторные анализы по показаниям",
                "УЗИ органов брюшной полости (по показаниям)",
                "эндоскопические исследования (по показаниям)",
                "дыхательные тесты (по показаниям)",
                "оценка питания и симптомов в динамике",
              ].map((s) => (
                <div key={s} className="rounded-xl p-4 bg-white border border-gray-100 shadow-sm">
                  <p className="text-gray-800 font-medium leading-snug mb-0">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Статьи (без страниц пока) */}
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

        {/* Адреса */}
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

        {/* FAQ */}
        <section id="faq" className="py-8 sm:py-12 bg-white scroll-mt-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">FAQ</h2>
            <div className="grid lg:grid-cols-2 gap-4">
              {[
                {
                  q: "Нужно ли готовиться к первому приёму гастроэнтеролога?",
                  a: "Желательно записать симптомы и их связь с едой/режимом, взять результаты прошлых обследований и список препаратов. Если данных нет — это нормально, врач подскажет план.",
                },
                {
                  q: "Всегда ли нужны анализы и обследования?",
                  a: "Не всегда. Объём обследования зависит от жалоб, длительности и “красных флагов”. На консультации врач объясняет, что и зачем нужно именно в вашей ситуации.",
                },
                {
                  q: "Можно ли “самому подобрать диету” до визита?",
                  a: "Резкие ограничения без понимания причин симптомов часто не помогают. Лучше обсудить питание с врачом и выбрать спокойный план.",
                },
                {
                  q: "Когда может назначаться 13С‑уреазный дыхательный тест?",
                  a: "По показаниям — когда врачу важно уточнить роль Helicobacter pylori. Решение о тесте принимается после обсуждения симптомов и анамнеза.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl p-5 bg-gray-50 border border-gray-100">
                  <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                  <p className="text-gray-700 mb-0">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

