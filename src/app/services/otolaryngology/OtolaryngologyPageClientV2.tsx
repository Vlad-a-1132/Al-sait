"use client";

import Image from "next/image";
import Link from "next/link";
import OtolaryngologyPageClient, { OtolaryngologyPricesSection, type OtolaryngologyServiceRow } from "./OtolaryngologyPageClient";
import { OTOLARYNGOLOGY_SERVICE_ARTICLES } from "@/data/otolaryngology-service-articles";
import { doctors } from "@/data/static-data";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const PHONE_LINK = "tel:+74952554450";

const LOR_DOCTOR_SLUGS = ["balyan-maria-maisovna", "ryzhov-ivan-nikolaevich", "ivanova-olga-yurievna", "ryzhov-andrey-ivanovich"] as const;

type Props = {
  serviceRows: OtolaryngologyServiceRow[];
};

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

export default function OtolaryngologyPageClientV2({ serviceRows }: Props) {
  const lorDoctors = LOR_DOCTOR_SLUGS.map((slug) => doctors.find((d) => d.slug === slug)).filter(Boolean) as Array<(typeof doctors)[number]>;

  const faqItems = [
    {
      q: "Можно ли прийти к ЛОРу без анализов?",
      a: "Да. На первичном приёме врач проведёт осмотр и решит, нужны ли анализы, мазки или дополнительные исследования.",
    },
    {
      q: "Нужно ли промывать нос перед приёмом?",
      a: "Лучше не делать агрессивных промываний прямо перед визитом. Если вы уже использовали капли или промывания, расскажите об этом врачу.",
    },
    {
      q: "Можно ли удалить серную пробку сразу на приёме?",
      a: "Часто да, если врач после осмотра подтвердит, что причина заложенности — серная пробка и нет противопоказаний.",
    },
    {
      q: "Когда идти к ЛОРу при боли в ухе?",
      a: "Если боль не проходит 2–3 дня, есть высокая температура, выделения из уха, снижение слуха или выраженное ухудшение — лучше обратиться к врачу.",
    },
    {
      q: "Когда обращаться при носовом кровотечении?",
      a: "Если кровотечение не останавливается дольше 20 минут, сильное, сопровождается слабостью, головокружением, затруднением дыхания или возникло после серьёзной травмы — нужна срочная помощь.",
    },
    {
      q: "Что делать, если болит горло и пропал голос?",
      a: "Если боль держится около недели, часто повторяется, есть выраженное ухудшение, затруднение дыхания или глотания — нужна консультация врача. При осиплости ЛОР может провести осмотр гортани.",
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
    <div className="lor-v2">
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
                Отоларингология
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                ЛОР в Одинцово — диагностика и лечение уха, горла и носа
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7 max-w-xl">
                Диагностика и лечение заболеваний ЛОР-органов у взрослых и детей. Помогаем при боли в ухе, насморке, боли в горле, снижении слуха и
                храпе — с понятным планом осмотра и обследований.
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
                <a href="#lor-diagnostics" className="text-emerald-600 hover:underline py-1">
                  Диагностика
                </a>
                <a href="#services" className="text-emerald-600 hover:underline py-1">
                  Цены
                </a>
                <a href="#lor-symptoms" className="text-emerald-600 hover:underline py-1">
                  Симптомы
                </a>
                <a href="#lor-faq" className="text-emerald-600 hover:underline py-1">
                  FAQ
                </a>
                <a href="#lor-articles" className="text-emerald-600 hover:underline py-1">
                  Статьи
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/images allergoly/otolaryngologia.webp"
                  alt="Отоларингология в Альтамед‑С"
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

      <section className="py-12 bg-gray-50" aria-labelledby="lor-why-altamed">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-why-altamed" className="text-3xl font-bold text-gray-900 text-center mb-12">
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

      <section className="py-12 bg-white" aria-labelledby="lor-doctors">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-doctors" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Врачи-отоларингологи
          </h2>
          <p className="text-gray-600 mb-6">Специалисты, которые ведут приём по отоларингологии и сурдологии.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {lorDoctors.map((d) => (
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

      <OtolaryngologyPricesSection serviceRows={serviceRows} />

      {/* 1 */}
      <section id="lor-symptoms" className="py-14 bg-gray-50 scroll-mt-20" aria-labelledby="lor-symptoms-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-symptoms-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            С какими симптомами записываются к отоларингологу
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Боль в ухе", desc: "Дискомфорт, заложенность, выделения, снижение слуха." },
              { title: "Насморк и заложенность носа", desc: "Длительный насморк, синусит, боль в области пазух, нарушение дыхания." },
              { title: "Боль в горле", desc: "Частые ангины, налёт на миндалинах, першение, осиплость голоса." },
              { title: "Снижение слуха", desc: "Заложенность, шум в ушах, необходимость проверки слуха." },
              { title: "Храп и дыхание носом", desc: "Постоянная заложенность, дыхание ртом, подозрение на аденоиды у детей." },
              { title: "Инородные тела и серные пробки", desc: "Пробка в ухе, инородное тело в носу, ухе или горле." },
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

      {/* 2 */}
      <section className="py-14 bg-white" aria-labelledby="lor-urgent-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-urgent-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Когда можно записаться планово, а когда нужна срочная помощь
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Можно планово</h3>
              <PillList
                items={[
                  "заложенность носа",
                  "частый насморк",
                  "храп",
                  "серная пробка",
                  "снижение слуха",
                  "частые ангины",
                  "осиплость голоса",
                  "хронический тонзиллит",
                ]}
              />
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Лучше срочно</h3>
              <PillList
                tone="amber"
                items={[
                  "затруднённое дыхание",
                  "сильная боль в ухе или горле",
                  "выделение гноя или крови из уха",
                  "высокая температура и резкое ухудшение",
                  "носовое кровотечение, которое не останавливается",
                  "инородное тело в ухе, носу или горле",
                  "выраженное головокружение со снижением слуха",
                ]}
              />
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mb-0">
            NHS рекомендует обращаться за медицинской помощью при боли в ухе, если она не проходит 2–3 дня, а раньше — при высокой температуре или
            выделениях из уха. При носовом кровотечении срочная помощь нужна, если кровь не останавливается дольше 20 минут, кровотечение сильное, есть
            слабость, головокружение или затруднение дыхания.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section className="py-14 bg-gray-50" aria-labelledby="lor-regions-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-regions-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Ухо, горло, нос — выберите вашу ситуацию
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ухо",
                bullets: ["боль в ухе", "заложенность", "снижение слуха", "шум в ушах", "серная пробка", "выделения из уха"],
                services: "отоскопия, видеоотоскопия, удаление серы, тимпанометрия, аудиометрия",
              },
              {
                title: "Нос",
                bullets: ["насморк", "заложенность", "боль в области пазух", "кровотечения", "нарушение обоняния", "инородное тело"],
                services: "риноскопия, видеориноскопия, промывание носа, УЗИ пазух, тампонада носа",
              },
              {
                title: "Горло",
                bullets: ["боль в горле", "частые ангины", "пробки в миндалинах", "осиплость", "ощущение кома", "кашель из-за раздражения горла"],
                services: "фарингоскопия, ларингоскопия, промывание лакун миндалин, видеоларингоскопия",
              },
            ].map((block) => (
              <div key={block.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{block.title}</h3>
                <ul className="space-y-2 text-gray-700 text-sm mb-4 flex-1">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-emerald-600 shrink-0">●</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Популярные услуги</p>
                  <p className="text-sm text-gray-600 mb-0">{block.services}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="py-14 bg-white" aria-labelledby="lor-visit-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-visit-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Что происходит на консультации
          </h2>
          <ol className="grid md:grid-cols-2 gap-6 list-none p-0 m-0">
            {[
              {
                t: "Разбор жалоб",
                d: "Врач уточняет, когда появились симптомы, была ли температура, чем лечились, есть ли хронические заболевания.",
              },
              {
                t: "Осмотр ЛОР-органов",
                d: "Проверка носа, горла, ушей, миндалин, барабанных перепонок.",
              },
              {
                t: "Диагностика по показаниям",
                d: "Отоскопия, риноскопия, эндоскопия, аудиометрия, тимпанометрия, мазки или анализы.",
              },
              {
                t: "План лечения",
                d: "Врач объясняет диагноз, назначает лечение, процедуры или дополнительные обследования.",
              },
            ].map((step, i) => (
              <li key={step.t} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 shadow-sm flex gap-4">
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

      {/* 5 */}
      <section className="py-14 bg-gray-50" aria-labelledby="lor-kids-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-kids-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Детский ЛОР: когда показать ребёнка
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-4">
            К ЛОР-врачу ребёнка часто приводят при боли в ухе, затяжном насморке, храпе, дыхании ртом, частых ангинах, снижении слуха, серных пробках
            или подозрении на аденоиды. У маленьких детей боль в ухе может проявляться беспокойством, плачем, отказом от еды и нарушением сна.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8 text-sm sm:text-base">
            NHS отдельно рекомендует обратиться к врачу, если ребёнку меньше 12 месяцев и есть подозрение на ушную инфекцию, а также если боль в ухе не
            проходит через 3 дня или инфекции повторяются.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "боль в ухе",
              "насморк больше обычного",
              "храп и дыхание ртом",
              "частые отиты",
              "частые ангины",
              "снижение слуха",
              "инородное тело в носу или ухе",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="py-14 bg-white" aria-labelledby="lor-hearing-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-hearing-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Проверка слуха и консультация сурдолога-оториноларинголога
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Проверка слуха может понадобиться при снижении слуха, шуме в ушах, заложенности, частых отитах, головокружении или если ребёнок стал хуже
            реагировать на речь. Врач подберёт подходящий метод диагностики: отоскопию, тимпанометрию, аудиометрию или другие исследования по показаниям.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "тональная аудиометрия",
              "тимпанометрия",
              "импедансометрия",
              "отоакустическая эмиссия",
              "консультация сурдолога",
              "проверка слуха у детей",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 */}
      <section className="py-14 bg-gray-50" aria-labelledby="lor-sinus-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-sinus-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Если долго не проходит насморк или заложенность
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-4">
            К ЛОР-врачу стоит обратиться, если насморк и заложенность затянулись, появились боль или давление в области пазух, густые выделения, ухудшение
            обоняния, повторяющиеся эпизоды синусита или нет эффекта от обычного лечения. NHS рекомендует обратиться к врачу при синусите, если симптомы
            не улучшаются после 7 дней лечения у фармацевта или врача, не проходят после 3 недель самостоятельного лечения или часто повторяются.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "заложенность носа",
              "боль в области пазух",
              "густые выделения",
              "нарушение обоняния",
              "частые синуситы",
              "зависимость от сосудосуживающих капель",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-800 text-sm font-medium shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 */}
      <section className="py-14 bg-white" aria-labelledby="lor-throat-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-throat-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Боль в горле, пробки в миндалинах и осиплость
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            ЛОР-врач помогает разобраться с частыми ангинами, хроническим тонзиллитом, пробками в миндалинах, длительным першением, ощущением кома в горле
            и осиплостью голоса. Если боль в горле не проходит около недели, часто повторяется, есть уплотнение в области шеи или язвочка во рту держится
            больше 3 недель — лучше обратиться к врачу.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["боль в горле", "частые ангины", "пробки в миндалинах", "неприятный запах изо рта", "осиплость голоса", "ощущение кома"].map((t) => (
              <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-gray-800 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 */}
      <section className="py-14 bg-gray-50" aria-labelledby="lor-wax-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-wax-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Серная пробка: когда нужно удаление
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Серная пробка может вызывать заложенность, снижение слуха, шум, дискомфорт или ощущение воды в ухе. Не стоит пытаться глубоко чистить ухо
            ватными палочками или острыми предметами — так можно протолкнуть серу глубже или травмировать слуховой проход. ЛОР-врач осмотрит ухо и подберёт
            безопасный способ удаления.
          </p>
          <Link
            href={APPOINTMENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition"
          >
            Записаться на удаление серной пробки
          </Link>
        </div>
      </section>

      {/* 10 — перед прайсом */}
      <section id="lor-diagnostics" className="py-14 bg-white scroll-mt-20" aria-labelledby="lor-diagnostics-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-diagnostics-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Какие обследования может назначить ЛОР
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            Кратко о том, что часто встречается в прайсе — конкретный перечень и объём определяет врач по показаниям.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Отоскопия / видеоотоскопия", d: "Осмотр наружного слухового прохода и барабанной перепонки." },
              { t: "Риноскопия / видеориноскопия", d: "Осмотр полости носа и носоглотки." },
              { t: "Ларингоскопия / видеоларингоскопия", d: "Осмотр гортани и голосовых складок." },
              { t: "Аудиометрия", d: "Проверка слуха." },
              { t: "Тимпанометрия", d: "Оценка состояния среднего уха и слуховой трубы." },
              { t: "Мазки из носа и горла", d: "Назначаются по показаниям для уточнения причины воспаления." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-gray-50 border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{x.t}</h3>
                <p className="text-sm text-gray-600 mb-0">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 */}
      <section className="py-14 bg-gray-50" aria-labelledby="lor-procedures-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-procedures-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Какие процедуры можно выполнить по показаниям
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "удаление серной пробки",
              "промывание лакун миндалин",
              "промывание носа и пазух",
              "мазки из носа и горла",
              "обработка слизистой лекарственными препаратами",
              "удаление инородного тела",
              "остановка носового кровотечения",
              "процедуры при отите и воспалении уха",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 text-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 */}
      <section className="py-14 bg-white" aria-labelledby="lor-bring-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-bring-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Как подготовиться к консультации
          </h2>
          <ul className="max-w-3xl space-y-3 text-gray-700">
            {[
              "результаты прошлых обследований, если есть",
              "список лекарств, которые уже принимали",
              "данные о температуре и длительности симптомов",
              "информацию об аллергиях",
              "снимки/заключения по пазухам, если делали",
              "результаты анализов и мазков",
              "для ребёнка — данные о частоте отитов, ангин, насморка",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-emerald-600 shrink-0">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 14 */}
      <section className="py-14 bg-gray-50" aria-labelledby="lor-dont-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-dont-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Перед визитом к ЛОРу
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-8">
            Не начинайте антибиотики, ушные капли, сосудосуживающие капли или промывания «по совету» без назначения врача, особенно если есть боль,
            выделения из уха, высокая температура или ухудшение состояния. Не пытайтесь самостоятельно удалять серу, глубоко чистить уши, доставать
            инородные тела или прогревать область пазух и уха без осмотра.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "не греть ухо при боли и выделениях",
              "не лезть глубоко ватными палочками",
              "не капать в ухо неизвестные препараты",
              "не злоупотреблять сосудосуживающими каплями",
              "не доставать инородное тело самостоятельно",
              "не начинать антибиотики без осмотра",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 text-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15 FAQ */}
      <section className="py-12 bg-gray-50 scroll-mt-20" id="lor-faq" aria-labelledby="lor-faq-heading">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Часто задаваемые вопросы
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Ответы на популярные вопросы об отоларингологии</p>
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

      {/* 16 Статьи */}
      <section className="py-12 bg-white scroll-mt-20" id="lor-articles" aria-labelledby="lor-articles-heading">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 id="lor-articles-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Полезные статьи
          </h2>
          <p className="text-gray-600 mb-8">Материалы по темам ЛОР — для спокойной подготовки к приёму.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {OTOLARYNGOLOGY_SERVICE_ARTICLES.map((a) => (
              <Link
                key={a.url}
                href={a.url}
                className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md overflow-hidden transition"
              >
                <div className="relative px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-amber-50 via-white to-white">
                  <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-200/35 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-yellow-200/25 blur-2xl" />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        <svg className="h-5 w-5 text-amber-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M12 3c3 2.2 5.2 5 5.2 7.9 0 2.9-2.3 5.1-5.2 5.1S6.8 13.8 6.8 10.9C6.8 8 9 5.2 12 3Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path d="M9.8 20.5c.6-1.6 1.4-2.5 2.2-2.5s1.6.9 2.2 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          <path d="M8.5 17.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-amber-50 text-amber-900 border-amber-100">
                          ЛОР
                        </span>
                        <span className="h-1 w-1 rounded-full bg-amber-300/80" aria-hidden />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-snug line-clamp-2 transition group-hover:text-amber-800">
                        {a.title}
                      </h3>
                    </div>
                    <div className="shrink-0 pt-1 text-gray-400 transition group-hover:text-amber-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                  <span className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-sm rounded-xl transition border border-amber-200 text-amber-900 bg-amber-50/60 hover:bg-amber-100">
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
        .lor-v2 [data-lor-legacy="hide"] {
          display: none !important;
        }
      `}</style>

      <OtolaryngologyPageClient />
    </div>
  );
}
