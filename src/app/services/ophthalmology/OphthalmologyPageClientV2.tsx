"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import OphthalmologyPageClient, {
  OphthalmologyPriceAndBookingSection,
  OphthalmologyWhyAltamedSection,
  type OphthalmologyServiceRow,
} from "./OphthalmologyPageClient";
import { doctors } from "@/data/static-data";
import { OPHTHALMOLOGY_SERVICE_ARTICLES } from "@/data/ophthalmology-service-articles";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

type Props = {
  serviceRows: OphthalmologyServiceRow[];
};

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 [&>svg]:h-6 [&>svg]:w-6">
      {children}
    </div>
  );
}

const faqItems: { q: string; a: string }[] = [
  {
    q: "Нужно ли снимать контактные линзы перед приёмом?",
    a: "Да, для части обследований это может быть важно. Лучше уточнить у администратора при записи, особенно если планируется подбор коррекции или осмотр роговицы.",
  },
  {
    q: "Можно ли прийти только для подбора очков?",
    a: "Да, офтальмолог может проверить зрение и подобрать очковую коррекцию. Если врач увидит признаки заболевания глаз, он предложит дополнительное обследование.",
  },
  {
    q: "Больно ли измерять внутриглазное давление?",
    a: "Обычно процедура занимает немного времени и переносится спокойно. Метод измерения зависит от оборудования и показаний.",
  },
  {
    q: "Можно ли садиться за руль после приёма?",
    a: "После обычного осмотра — чаще да. Но если использовались капли для расширения зрачка, зрение может быть временно мутным и чувствительным к свету, поэтому вождение лучше не планировать.",
  },
  {
    q: "Когда нужно срочно к врачу?",
    a: "При резком снижении зрения, внезапных вспышках, большом количестве новых «мушек», тёмной «занавеске», сильной боли или травме глаза лучше обращаться срочно.",
  },
];

const conditionCards = [
  { title: "Снижение зрения и нарушение рефракции", desc: "Подбор очков и линз, оценка динамики, направление на обследования по показаниям." },
  { title: "Синдром сухого глаза", desc: "Слёзная плёнка, воспаление поверхности глаза, подбор терапии и режима нагрузки." },
  { title: "Конъюнктивит и воспаление век", desc: "Покраснение, выделения, отёк век — осмотр и тактика лечения после уточнения причины." },
  { title: "Глаукома и контроль давления", desc: "Тонометрия в контексте осмотра дна глаза и полей зрения по назначению врача." },
  { title: "Катаракта и возрастные изменения", desc: "Оценка прозрачности хрусталика, влияния на зрение и план наблюдения." },
  { title: "Изменения сетчатки при диабете", desc: "Осмотр глазного дна, при необходимости — расширение зрачка или фото сетчатки." },
  { title: "«Мушки», вспышки, подозрение на проблемы сетчатки", desc: "Срочные и плановые сценарии — врач подскажет, насколько ситуация срочная." },
  { title: "Подбор очков и контактных линз", desc: "Рефракция, переносимость линз, рекомендации по режиму ношения." },
];

export default function OphthalmologyPageClientV2({ serviceRows }: Props) {
  const [showMoreArticles, setShowMoreArticles] = useState(false);
  const ophthalmologists = [doctors.find((d) => d.slug === "yablokova-inna-valerievna") ?? null].filter(
    Boolean,
  ) as Array<(typeof doctors)[number]>;

  return (
    <div className="ophthalmology-v2">
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
                Офтальмология
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Офтальмолог в Одинцово — диагностика и лечение заболеваний глаз
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Принимаем при снижении зрения, сухости и усталости глаз, покраснении, слезотечении, перед подбором очков и линз, а также для планового
                осмотра при сахарном диабете и других хронических состояниях. Врач уточнит жалобы, проведёт осмотр и подскажет, какие обследования нужны.
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
                <a href="#ophthalmology-urgent" className="text-emerald-600 hover:underline py-1">
                  Срочно или планово
                </a>
                <a href="#ophthalmology-seo" className="text-emerald-600 hover:underline py-1">
                  Подробнее
                </a>
                <a href="#ophthalmology-faq" className="text-emerald-600 hover:underline py-1">
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
                  src="/images/images allergoly/oftalmologia.webp"
                  alt="Офтальмология в Альтамед‑С"
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

      <OphthalmologyWhyAltamedSection />

      <section className="py-12 bg-white" aria-labelledby="ophthalmology-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="ophthalmology-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Врачи-офтальмологи
          </h2>
          <p className="text-gray-600 mb-6">Специалисты, которые ведут приём по офтальмологии.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ophthalmologists.map((d) => (
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

      <OphthalmologyPriceAndBookingSection serviceRows={serviceRows} />

      {/* 1. Срочно или планово */}
      <section className="py-12 bg-gradient-to-b from-amber-50/40 to-white" id="ophthalmology-urgent" aria-labelledby="ophthalmology-urgent-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="ophthalmology-urgent-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Когда нужно обратиться срочно
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Часть симптомов нельзя откладывать на «удобную неделю» — ниже коротко разделяем плановый и срочный сценарии.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 sm:p-8 shadow-sm ring-1 ring-emerald-500/5">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                Можно планово
              </div>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  <span>Постепенное снижение зрения, усталость от экрана, сухость без резкого ухудшения.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  <span>Подбор или замена очков и контактных линз, плановый контроль при хронических заболеваниях.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  <span>Регулярный осмотр при диабете и возрасте по рекомендации врача, даже если «всё видно хорошо».</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50/80 to-white p-6 sm:p-8 shadow-sm">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-900">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-600" aria-hidden />
                Лучше срочно
              </div>
              <ul className="space-y-3 text-gray-800 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" aria-hidden />
                  <span>Резкая потеря зрения, внезапные вспышки, большое количество новых «мушек», тёмная «занавеска» в поле зрения.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" aria-hidden />
                  <span>Сильная боль в глазу, травма, химическое попадание в глаз — обращайтесь за неотложной помощью.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 sm:p-6 text-sm text-gray-700 leading-relaxed">
            <p>
              Плановый приём подходит при постепенном снижении зрения, сухости, усталости глаз, подборе очков или линз. Но если появились резкая потеря
              зрения, вспышки, внезапное большое количество «мушек», тёмная «занавеска» перед глазом, сильная боль или травма глаза — лучше не ждать плановой
              записи и обратиться за неотложной помощью. Такие симптомы могут быть связаны с состояниями сетчатки, где важно быстрое обследование. Национальный
              институт глаза (National Eye Institute, США) отдельно относит внезапные вспышки, новые «мушки» и «занавес» в поле зрения к тревожным симптомам,
              требующим срочной оценки (в т.ч. в контексте отслойки сетчатки).
            </p>
          </div>
        </div>
      </section>

      {/* 2. Что проверяет врач */}
      <section className="py-12 bg-white" id="ophthalmology-exam" aria-labelledby="ophthalmology-exam-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="ophthalmology-exam-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Что врач оценивает во время осмотра
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Набор шагов зависит от жалоб и анамнеза; ниже — типичные блоки консультации, которые помогают составить целостную картину.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Острота зрения",
                d: "Проверка зрения вдаль и вблизи, подбор или уточнение коррекции.",
              },
              {
                t: "Передний отдел глаза",
                d: "Осмотр век, конъюнктивы, роговицы, признаков воспаления и сухости.",
              },
              {
                t: "Внутриглазное давление",
                d: "Важно при подозрении на глаукому и для планового контроля по показаниям.",
              },
              {
                t: "Сетчатка и зрительный нерв",
                d: "Оценка глазного дна, особенно при диабете, возрастных изменениях и жалобах на «мушки».",
              },
              {
                t: "Дополнительные тесты",
                d: "Периметрия, авторефрактометрия, офтальмоскопия и другие исследования — по показаниям.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-emerald-50/30 p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-emerald-100/50 blur-2xl" aria-hidden />
                <h3 className="relative text-lg font-bold text-gray-900 mb-2">{c.t}</h3>
                <p className="relative text-sm text-gray-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Регулярный осмотр */}
      <section className="py-12 bg-gray-50" aria-labelledby="ophthalmology-regular-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="ophthalmology-regular-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Кому стоит проходить осмотр регулярно
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Офтальмолог нужен не только при жалобах. Плановый контроль особенно важен пациентам с сахарным диабетом, высокой близорукостью, глаукомой или
            катарактой в анамнезе, людям старшего возраста, а также тем, кто постоянно носит контактные линзы или много работает за экраном. При диабете
            глазные изменения могут долго протекать без заметных симптомов, поэтому ADA рекомендует регулярные комплексные осмотры глаз; при диабете 2 типа
            первичный осмотр нужен уже при постановке диагноза, при диабете 1 типа — в течение 5 лет от начала заболевания (ориентиры для обсуждения с врачом).
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                label: "Диабет",
                text: "Контроль сетчатки даже без жалоб на зрение.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M12 21a7 7 0 0 0 7-7c0-2-1-3.5-2-5l-5-5-5 5c-1 1.5-2 3-2 5a7 7 0 0 0 7 7Z" />
                  </svg>
                ),
              },
              {
                label: "Возраст 40+ или 60+",
                text: "Возрастные изменения хрусталика и риски для сетчатки.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                ),
              },
              {
                label: "Контактные линзы",
                text: "Роговица, слёзная плёнка, переносимость.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                  </svg>
                ),
              },
              {
                label: "Высокая близорукость",
                text: "Индивидуальный график наблюдения по рекомендации врача.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                  </svg>
                ),
              },
              {
                label: "Работа за экраном",
                text: "Сухость, спазм аккомодации, нагрузка на фокус.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                ),
              },
            ].map((x) => (
              <div key={x.label} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <IconCircle>{x.icon}</IconCircle>
                <h3 className="mt-4 font-bold text-gray-900">{x.label}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Сухость глаз */}
      <section className="py-12 bg-white" aria-labelledby="ophthalmology-dry-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="ophthalmology-dry-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Сухость, жжение и усталость глаз
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ощущение песка, жжение, покраснение, слезотечение и усталость к вечеру часто усиливаются при работе за компьютером, ношении контактных
                линз, нахождении в сухом или кондиционируемом помещении. Такие симптомы могут быть связаны с синдромом сухого глаза, воспалением век,
                нарушением слёзной плёнки или неправильно подобранной коррекцией.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                NHS среди факторов сухости глаз отдельно указывает контактные линзы, длительную работу за экраном и сухой или кондиционируемый воздух.
              </p>
            </div>
            <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Если симптомы не проходят или мешают работе, офтальмолог подскажет, что проверить в первую очередь и какой режим нагрузки и ухода разумен.
              </p>
              <Link
                href={APPOINTMENTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition shadow-md"
              >
                Записаться на консультацию офтальмолога
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Очки и линзы */}
      <section className="py-12 bg-gray-50" aria-labelledby="ophthalmology-correction-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="ophthalmology-correction-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Подбор очков и контактных линз
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl leading-relaxed">
            Если зрение стало хуже, появились головные боли, двоение, усталость глаз или старые очки перестали быть комфортными, врач проверит остроту
            зрения, рефракцию и подберёт подходящую коррекцию. При контактных линзах важно учитывать не только «минус» или «плюс», но и состояние роговицы,
            слёзной плёнки, режим ношения и переносимость линз.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Очки для дали и чтения", d: "Один или два фокуса — по потребностям и привычкам чтения." },
              { t: "Контактные линзы", d: "Подбор по кривизне, диаметру, режиму замены и переносимости." },
              { t: "Проверка старой коррекции", d: "Сравнение с текущими потребностями и комфортом в течение дня." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-white bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{x.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Диабет */}
      <section className="py-12 bg-white" id="ophthalmology-diabetes" aria-labelledby="ophthalmology-diabetes-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50/90 via-white to-white shadow-sm">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 p-6 sm:p-10">
                <h2 id="ophthalmology-diabetes-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Осмотр глаз при сахарном диабете
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  При сахарном диабете важно проверять не только остроту зрения, но и состояние сетчатки. Диабетические изменения могут развиваться без
                  заметных жалоб, поэтому регулярный осмотр помогает вовремя заметить риски и определить частоту дальнейшего наблюдения. ADA указывает, что
                  диабетическое поражение глаз часто не даёт очевидных симптомов, а комплексный осмотр с расширением зрачка или фото сетчатки помогает выявить
                  проблему раньше.
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center border-t border-emerald-100 bg-emerald-600/5 p-6 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-lg font-semibold text-emerald-900 leading-snug">
                  Даже если зрение не беспокоит — осмотр может быть нужен планово.
                </p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Сроки и перечень обследований согласуются с врачом индивидуально.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Сжатый SEO-блок (без дублирования карточек осмотра) */}
      <section className="py-12 bg-gray-50" id="ophthalmology-seo" aria-labelledby="ophthalmology-seo-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 id="ophthalmology-seo-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Консультация офтальмолога в Одинцово — когда стоит обратиться
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
              <div className="space-y-3">
                <p>
                  Офтальмолог занимается здоровьем глаз и зрения: от усталости от экрана до глаукомы, катаракты, воспалений и изменений сетчатки. На приёме
                  важно понять, связано ли это с рефракцией, сухостью, воспалением или нужна более глубокая диагностика.
                </p>
                <p>
                  Мы ориентируемся на показания: осмотр на щели, измерение внутриглазного давления, оценка сетчатки и зрительного нерва, при необходимости —
                  дополнительные методы.
                </p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-gray-900">Поводы записаться к офтальмологу:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>снижение зрения, необходимость подбора очков/линз;</li>
                  <li>сухость, жжение, ощущение инородного тела, слезотечение;</li>
                  <li>покраснение, отёк век, выделения, боль в глазу;</li>
                  <li>«мушки», вспышки, «занавес», появление двоения;</li>
                  <li>плановый осмотр при диабете, возрастные изменения, подготовка к операции (по назначению).</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Как подготовиться к консультации</h3>
              <div className="grid lg:grid-cols-2 gap-6 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Если носите мягкие контактные линзы, уточните у администратора, нужно ли снять их заранее: для части обследований важно прийти без линз
                  определённое время. Не вводите в глаза капли перед визитом без назначения врача — это может исказить картину осмотра.
                </p>
                <p>
                  После расширения зрачка зрение на близь может быть временно мутным и чувствительным к свету — см. блок «Важно знать перед осмотром глазного
                  дна» ниже по странице, перед формой записи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Состояния */}
      <section className="py-12 bg-white" id="ophthalmology-conditions" aria-labelledby="ophthalmology-conditions-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="ophthalmology-conditions-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            С какими состояниями помогает офтальмолог
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Направления приёма — для ориентира; тактика всегда подбирается врачом индивидуально.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conditionCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50/80 to-white p-5 shadow-sm hover:border-emerald-200/80 transition"
              >
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{c.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-12 bg-gray-50" id="ophthalmology-faq" aria-labelledby="ophthalmology-faq-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="ophthalmology-faq-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Частые вопросы
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Коротко о приёме, линзах и безопасности — без замены консультации врача.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 w-full items-start">
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
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3 max-w-4xl">
                    {item.a}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Статьи */}
      <section className="py-12 bg-white scroll-mt-20" id="ophthalmology-articles" aria-labelledby="ophthalmology-articles-title">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="ophthalmology-articles-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Полезные материалы
          </h2>
          <p className="text-gray-600 mb-8">Статьи по темам офтальмологии — для спокойной подготовки к приёму.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(showMoreArticles ? OPHTHALMOLOGY_SERVICE_ARTICLES : OPHTHALMOLOGY_SERVICE_ARTICLES.slice(0, 4)).map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-violet-50 via-white to-white">
                  <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-violet-200/35 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-indigo-200/25 blur-2xl" />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        <svg className="h-5 w-5 text-violet-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M12 6.2c4.2 0 7.8 3.1 9.2 5.8-1.4 2.7-5 5.8-9.2 5.8S4.2 14.7 2.8 12C4.2 9.3 7.8 6.2 12 6.2Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-violet-50 text-violet-900 border-violet-100">
                          Офтальмология
                        </span>
                        <span className="h-1 w-1 rounded-full bg-violet-300/80" aria-hidden />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-snug line-clamp-2 transition group-hover:text-violet-800">
                        {a.title}
                      </h3>
                    </div>
                    <div className="shrink-0 pt-1 text-gray-400 transition group-hover:text-violet-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                  <span className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-sm rounded-xl transition border border-violet-200 text-violet-900 bg-violet-50/60 hover:bg-violet-100">
                    Читать подробнее
                    <span className="transition group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {!showMoreArticles && OPHTHALMOLOGY_SERVICE_ARTICLES.length > 4 ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowMoreArticles(true)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-violet-600 text-violet-800 font-medium hover:bg-violet-50 transition"
              >
                Показать ещё
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <style jsx global>{`
        .ophthalmology-v2 > div > section.py-4 {
          display: none !important;
        }
        .ophthalmology-v2 > div > main.py-3 {
          display: none !important;
        }
      `}</style>

      <OphthalmologyPageClient serviceRows={serviceRows} />
    </div>
  );
}
