"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CONTACT_PHONE, CONTACT_PHONE_LINK, ODINTSOVO_BRANCHES } from "@/data/branches";

export type UltrasoundServiceRow = {
  key: string;
  code: string | null;
  name: string;
  priceLabel: string;
  priceIsZero: boolean;
};

type Props = {
  serviceRows: UltrasoundServiceRow[];
  doctors: Array<{
    name: string;
    slug: string;
    specialization?: string;
    experience?: number;
    photo?: string;
    description?: string;
  }>;
};

function normalizePriceForUi(row: UltrasoundServiceRow): string {
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

export default function UltrasoundPageClient({ serviceRows, doctors }: Props) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [showMoreArticles, setShowMoreArticles] = useState(false);

  const preferredKeyCodes: Array<string> = [
    "А04.10.002",
    "А04.12.006.002",
    "А04.12.005.003",
    "А04.30.010",
    "А04.14.001.003",
    "А04.20.002",
  ];

  const keyPrices: UltrasoundServiceRow[] = [];
  for (const code of preferredKeyCodes) {
    const found = serviceRows.find((s) => s.code === code);
    if (found && !found.priceIsZero) keyPrices.push(found);
  }

  const keyPriceNeedles: Array<(s: UltrasoundServiceRow) => boolean> = [
    (s) => /эхокардиограф/i.test(s.name),
    (s) => /вен нижних конечностей/i.test(s.name),
    (s) => /БЦА|брахиоцефал/i.test(s.name),
    (s) => /малый таз/i.test(s.name) && /комплекс/i.test(s.name),
    (s) => /гепатобиллиарн/i.test(s.name),
    (s) => /молочн/i.test(s.name) && !/комплекс/i.test(s.name),
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

  const minPriceRub = serviceRows.reduce<number | null>((min, s) => {
    if (s.priceIsZero) return min;
    const rub = parseRubPrice(normalizePriceForUi(s));
    if (rub == null) return min;
    return min == null ? rub : Math.min(min, rub);
  }, null);

  const primaryLine =
    minPriceRub != null
      ? `УЗИ в Одинцово — от ${new Intl.NumberFormat("ru-RU").format(minPriceRub)} ₽`
      : null;

  const anchors = [
    { id: "symptoms", label: "Показания" },
    { id: "conditions", label: "Виды УЗИ" },
    { id: "prices", label: "Цены" },
    { id: "doctor", label: "Врачи" },
    { id: "preparation", label: "Подготовка" },
    { id: "articles", label: "Статьи" },
    { id: "addresses", label: "Адреса" },
    { id: "faq", label: "FAQ" },
  ] as const;

  const articleTopics = [
    {
      title: "УЗИ при беременности",
      desc: "Когда делать плановые скрининги, что показывает исследование на каждом сроке.",
      image: "/images/blog/Screenshot_1559.png",
      url: "/blog/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie",
    },
    {
      title: "УЗИ молочных желёз: когда назначают",
      desc: "Что показывает исследование и в каких ситуациях его рекомендуют.",
      image: "/images/blog/image (8).jpg",
      url: "/blog/uzi-molochnyh-zhelez-kogda-naznachayut",
    },
    {
      title: "Допплерометрия при беременности",
      desc: "Когда назначают и что показывает исследование кровотока плода и плаценты.",
      image: "/images/blog/task_01kmeveepzeqb88nyjw8wkw5n0_1774320063_img_1.webp",
      url: "/blog/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet",
    },
    {
      title: "Подготовка к беременности",
      desc: "Какие обследования могут понадобиться при планировании зачатия.",
      image: "/images/blog/image (8).jpg",
      url: "/blog/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya",
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
                  УЗИ
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  УЗИ в Одинцово — диагностика и запись в Альтамед‑С
                </h1>
                <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                  Современная ультразвуковая диагностика на оборудовании экспертного класса. Безопасно, безболезненно
                  и с выдачей результатов сразу после исследования.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                  <Link
                    href="https://online.altamed-c.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]"
                  >
                    Записаться на УЗИ
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
                    src="/images/img diagnostika/yzi.webp"
                    alt="УЗИ в Альтамед‑С"
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

        <section className="py-12 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед‑С»?</h2>
            <div className="md:hidden space-y-6">
              {[
                "Оборудование экспертного класса с высокой разрешающей способностью",
                "Врачи-диагносты с большим опытом ультразвуковых исследований",
                "Более 60 видов УЗИ — от органов брюшной полости до допплерографии сосудов",
                "Результаты и описание сразу после процедуры",
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
                "Оборудование экспертного класса с высокой разрешающей способностью",
                "Врачи-диагносты с большим опытом ультразвуковых исследований",
                "Более 60 видов УЗИ — от органов брюшной полости до допплерографии сосудов",
                "Результаты и описание сразу после процедуры",
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

        <section id="prices" className="py-8 sm:py-12 scroll-mt-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Услуги и цены</h2>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Популярные исследования</h3>
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
                  чтобы выбрать время исследования и уточнить стоимость услуги.
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

        <section id="symptoms" className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Показания к УЗИ</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-3xl">
              Ультразвуковая диагностика назначается врачом по показаниям или выполняется для профилактического
              обследования. Ниже — типичные ситуации, когда исследование помогает уточнить диагноз.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Органы брюшной полости и почки",
                  items: ["боли в животе", "подозрение на патологию печени и желчного пузыря", "контроль после лечения"],
                },
                {
                  title: "Органы малого таза",
                  items: ["гинекологические и урологические жалобы", "планирование беременности", "контроль лечения"],
                },
                {
                  title: "Щитовидная и молочные железы",
                  items: ["уплотнения и болезненность", "скрининг", "динамическое наблюдение"],
                },
                {
                  title: "Сосуды и сердце",
                  items: ["головные боли и головокружения", "варикоз и отёки ног", "контроль сердечной функции"],
                },
                {
                  title: "Беременность",
                  items: ["подтверждение беременности", "скрининги плода", "оценка кровотока плода и плаценты"],
                },
                {
                  title: "Детям",
                  items: ["нейросонография", "УЗИ тазобедренных суставов", "обследование внутренних органов"],
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

        <section id="conditions" className="py-8 sm:py-12 bg-white scroll-mt-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Виды ультразвуковых исследований</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "дуплексное сканирование сосудов шеи, конечностей и брюшной аорты",
                "эхокардиография (УЗИ сердца)",
                "УЗИ органов брюшной полости и забрюшинного пространства",
                "УЗИ органов малого таза (трансабдоминальное, трансвагинальное, трансректальное)",
                "УЗИ щитовидной, молочных и слюнных желез",
                "УЗИ при беременности и допплерография плода",
                "нейросонография и комплексные исследования для детей",
                "эластография печени, почек, молочных желёз и мягких тканей",
                "УЗИ суставов, мягких тканей и лимфатических узлов",
              ].map((s) => (
                <div key={s} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-700">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="doctor" className="py-12 bg-gray-50/50 scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Врачи УЗИ в Одинцово</h2>
            {doctors.length ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                        <p className="mt-1 text-gray-600 text-sm leading-snug">{d.specialization ?? "Врач УЗИ"}</p>
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
                    Записаться на УЗИ
                  </Link>
                </div>
              </>
            ) : (
              <p className="text-gray-600">Информация о врачах временно недоступна.</p>
            )}
          </div>
        </section>

        <section id="preparation" className="py-8 sm:py-12 bg-white scroll-mt-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Подготовка к УЗИ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "УЗИ брюшной полости",
                  items: ["голод 6–8 часов", "за 3 дня исключить газообразующие продукты", "приём ферментов — по назначению врача"],
                },
                {
                  title: "УЗИ органов малого таза",
                  items: ["наполненный мочевой пузырь", "выпить 1–1,5 л воды за час до исследования", "трансвагинальное — без подготовки"],
                },
                {
                  title: "УЗИ почек и мочевого пузыря",
                  items: ["наполненный мочевой пузырь", "выпить воду за час до исследования"],
                },
                {
                  title: "УЗИ щитовидной железы и сосудов",
                  items: ["без специальной подготовки", "голод не требуется"],
                },
              ].map((block) => (
                <div key={block.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{block.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="articles" className="py-8 sm:py-12 bg-gray-50/50 scroll-mt-20">
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

        <section id="addresses" className="py-8 sm:py-12 bg-white scroll-mt-20">
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

        <section className="py-16 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">УЗИ в Одинцово: современная безопасная диагностика</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ультразвуковое исследование — безопасный, безболезненный и высокоинформативный метод диагностики.
                  В медицинском центре «Альтамед‑С» УЗИ выполняется на оборудовании экспертного класса, что обеспечивает
                  точность исследования и качественные изображения.
                </p>
                <p className="text-lg text-gray-600 mb-0">
                  Преимущества метода — отсутствие излучения, немедленное получение результатов и возможность
                  многократного исследования. В клинике проводятся все основные виды ультразвуковой диагностики для
                  взрослых и детей.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/services/yzi%20new.png"
                  alt="УЗИ в Одинцово"
                  className="w-full h-auto rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-white scroll-mt-20" aria-labelledby="faq-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  id: 1,
                  q: "Как подготовиться к УЗИ?",
                  a: "Подготовка зависит от типа исследования. Для УЗИ брюшной полости нужен голод 6–8 часов, для УЗИ малого таза — наполненный мочевой пузырь. Для УЗИ щитовидной железы и сосудов подготовка обычно не требуется. Подробную инструкцию вы получите при записи.",
                },
                {
                  id: 2,
                  q: "Сколько длится процедура УЗИ?",
                  a: "Обычно исследование занимает 15–30 минут в зависимости от области и сложности случая. Комплексные исследования могут длиться до 45 минут. Результаты с описанием выдаются сразу после процедуры.",
                },
                {
                  id: 3,
                  q: "Безопасно ли УЗИ при беременности?",
                  a: "Да, ультразвуковое исследование безопасно для беременных и плода. В клинике проводятся все необходимые УЗИ-скрининги: определение беременности, исследование плода, допплерография сосудов плода и маточно-плацентарного кровотока.",
                },
                {
                  id: 4,
                  q: "С какого возраста можно делать УЗИ детям?",
                  a: "УЗИ можно делать детям с самого рождения. Это один из самых безопасных методов диагностики. В клинике проводят нейросонографию, УЗИ тазобедренных суставов и обследование внутренних органов.",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border-l-4 border-emerald-500 overflow-hidden"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    aria-expanded={openAccordion === item.id}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setOpenAccordion(openAccordion === item.id ? null : item.id)}
                  >
                    <h3 className="text-lg font-semibold text-emerald-600" itemProp="name">
                      {item.q}
                    </h3>
                    <div
                      className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform ${openAccordion === item.id ? "rotate-45" : ""}`}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                  {openAccordion === item.id && (
                    <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <div className="space-y-4 text-gray-700" itemProp="text">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
