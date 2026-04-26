import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Запор или диарея: когда стоит обратиться к гастроэнтерологу | Альтамед‑С",
  description:
    "Когда запор или диарея становятся поводом для консультации гастроэнтеролога, какие вопросы врач обычно уточняет, какие привычки и наблюдения важно описать, что взять на приём.",
  openGraph: {
    title: "Запор или диарея: когда к гастроэнтерологу | Альтамед‑С",
    description:
      "Ориентиры по длительности и повторяемости симптомов, подготовка к консультации без самоназначений.",
    url: "https://altamed-c.ru/blog/zapor-ili-diareya",
    siteName: "Альтамед‑С",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/blog/zapor-ili-diareya.webp",
        alt: "Запор или диарея: когда стоит обратиться к гастроэнтерологу",
      },
    ],
  },
  alternates: { canonical: "https://altamed-c.ru/blog/zapor-ili-diareya" },
};

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const GASTRO_URL = "/services/gastroenterology";
const HERO_IMAGE = "/images/blog/zapor-ili-diareya.webp";

export default function ArticleZaporIliDiareya() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link href={GASTRO_URL} className="hover:text-emerald-600">
              Гастроэнтеролог в Одинцово
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Стул</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Запор или диарея: когда стоит обратиться к гастроэнтерологу
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Нестабильный стул — тема, о которой не всегда удобно говорить, но для врача это важная часть общей картины. Статья не ставит диагноз и не
                предлагает самолечение. Здесь — ориентиры: когда жалобы стоит обсудить с гастроэнтерологом и какие наблюдения помогут на консультации.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <a
                  href={APPOINTMENTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]"
                >
                  Записаться онлайн
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]"
                >
                  Позвонить в клинику
                </a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#when" className="text-emerald-600 hover:underline py-1">
                  Когда к врачу
                </a>
                <a href="#questions" className="text-emerald-600 hover:underline py-1">
                  Что уточняет врач
                </a>
                <a href="#prepare" className="text-emerald-600 hover:underline py-1">
                  Что подготовить
                </a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">
                  FAQ
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={HERO_IMAGE}
                  alt="Запор или диарея — консультация гастроэнтеролога"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                  quality={92}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
          <section id="when" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Когда жалобы становятся поводом для консультации</h2>
            <p className="mb-4">
              Важно смотреть на длительность, повторяемость и влияние на качество жизни. Если симптом “встраивается” в быт и вы регулярно подстраиваете
              питание и планы под него — это повод обсудить ситуацию.
            </p>
            <div className="rounded-2xl p-6 bg-emerald-50/70 border border-emerald-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Записаться к гастроэнтерологу стоит, если:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> изменения стула держатся или повторяются “волнами”
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> есть боль, вздутие, тошнота
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> приходится часто принимать препараты “по ситуации”
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> симптом мешает работе, учёбе или сну
                </div>
              </div>
            </div>
            <p className="mb-0">
              При острых и быстро нарастающих состояниях нужна очная медицинская помощь. В плановой ситуации — консультация помогает спокойно разобраться без
              самоназначений.
            </p>
          </section>

          <section id="questions" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие вопросы гастроэнтеролог обычно уточняет</h2>
            <p className="mb-4">
              У врача “карта” симптома строится из деталей: частоты, динамики, сопутствующих факторов. Примеры вопросов:
            </p>
            <ul>
              <li>Как часто бывает стул и как изменилось по сравнению с привычным.</li>
              <li>Есть ли связь с едой, стрессом, поездками, сменой режима.</li>
              <li>Есть ли боли, вздутие, ложные позывы, дискомфорт после еды.</li>
              <li>Какие лекарства принимаете сейчас или принимали недавно.</li>
            </ul>
            <p className="mb-0">
              Если вместе со стулом беспокоит вздутие, полезна статья <Link href="/blog/vzdutie-zhivota-i-meteorizm">«Вздутие живота и метеоризм»</Link>.
            </p>
          </section>

          <section id="prepare" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что полезно подготовить к приёму</h2>
            <p className="mb-4">
              Подготовка может быть простой: цель — не “разобраться самому”, а дать врачу точные исходные данные.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                "Как давно начались изменения и как менялись",
                "Связь с едой и режимом (по возможности)",
                "Сопутствующие симптомы (боль, вздутие, изжога)",
                "Результаты прошлых обследований и список препаратов",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-0">
              Записаться и посмотреть услуги можно на странице <Link href={GASTRO_URL}>гастроэнтерологии</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Нужно ли сразу садиться на строгую диету?",
                  a: "Резкие ограничения без понимания причин часто не помогают. Лучше обсудить ситуацию с врачом и выбрать спокойную тактику.",
                },
                {
                  q: "Можно ли прийти без обследований?",
                  a: "Да. Консультация начинается с разговора и осмотра. Врач объяснит, какие обследования действительно нужны по показаниям.",
                },
                {
                  q: "Что делать, если симптом появляется “волнами”?",
                  a: "Это типичная ситуация. Важно фиксировать повторяемость и сопутствующие факторы — это помогает врачу понять общую картину.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl p-5 bg-gray-50 border border-gray-100">
                  <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                  <p className="text-gray-700 mb-0">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-2">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Мягкий CTA</h2>
            <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
              <p className="text-gray-800 mb-4">
                Если запор или диарея повторяются или сопровождаются другими симптомами, можно записаться к гастроэнтерологу и обсудить план обследования.
                Услуги и цены — на странице <Link href={GASTRO_URL}>гастроэнтерологии</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={APPOINTMENTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center px-5 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition"
                >
                  Записаться онлайн
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex justify-center px-5 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition"
                >
                  Позвонить в клинику
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

