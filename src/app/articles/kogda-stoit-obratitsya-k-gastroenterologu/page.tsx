import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Когда стоит обратиться к гастроэнтерологу: симптомы и подготовка | Альтамед‑С",
  description:
    "Какие жалобы чаще всего становятся поводом для консультации гастроэнтеролога: боль в животе, изжога, вздутие, нарушения стула. Что подготовить к приёму и как проходит консультация.",
  openGraph: {
    title: "Когда стоит обратиться к гастроэнтерологу | Альтамед‑С",
    description:
      "Ориентиры по симптомам и ситуациям, когда консультация гастроэнтеролога помогает быстрее понять причины и выбрать тактику.",
    url: "https://altamed-c.ru/blog/kogda-stoit-obratitsya-k-gastroenterologu",
    siteName: "Альтамед‑С",
    locale: "ru_RU",
    type: "article",
  },
  alternates: { canonical: "https://altamed-c.ru/blog/kogda-stoit-obratitsya-k-gastroenterologu" },
};

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const GASTRO_URL = "/services/gastroenterology";
const DOCTOR_URL = "/doctors/budko-elena-anatolyevna";
const HERO_IMAGE = "/images/images allergoly/gas.webp";

export default function ArticleKogdaKGasroenterologu() {
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
            <span className="text-gray-900 font-medium">Когда обращаться</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Когда стоит обратиться к гастроэнтерологу
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Симптомы со стороны желудка и кишечника часто “плавают”: сегодня изжога, завтра тяжесть после еды, затем — вздутие или
                нестабильный стул. Статья не заменяет консультацию и не ставит диагноз, но помогает понять, какие признаки стоит обсудить с врачом и
                что подготовить к приёму.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Если жалобы повторяются и мешают жить, консультация гастроэнтеролога помогает собрать картину, уточнить факторы и выбрать понятный план
                наблюдения и обследований.
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
                <a href="#symptoms" className="text-emerald-600 hover:underline py-1">
                  Частые симптомы
                </a>
                <a href="#when" className="text-emerald-600 hover:underline py-1">
                  Когда не откладывать
                </a>
                <a href="#prepare" className="text-emerald-600 hover:underline py-1">
                  Подготовка к приёму
                </a>
                <a href="#visit" className="text-emerald-600 hover:underline py-1">
                  Как проходит консультация
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
                  alt="Гастроэнтеролог в Альтамед‑С"
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
          <section id="symptoms" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Какие жалобы чаще всего приводят к гастроэнтерологу</h2>
            <p className="mb-4">
              В гастроэнтерологии важна не только “одна точка боли”, а сочетание симптомов, их повторяемость и связь с привычками — питанием, режимом,
              стрессом, физической активностью. На консультации врач собирает картину целиком.
            </p>
            <ul>
              <li>
                <strong>Боль или дискомфорт в животе</strong> — особенно если эпизоды повторяются.
              </li>
              <li>
                <strong>Изжога и отрыжка</strong>, чувство жжения за грудиной, неприятный привкус.
              </li>
              <li>
                <strong>Тяжесть после еды, тошнота</strong>, ощущение “переполнения”.
              </li>
              <li>
                <strong>Вздутие и метеоризм</strong>, особенно если мешают повседневной активности.
              </li>
              <li>
                <strong>Нарушения стула</strong> (запор/диарея/нестабильность), изменения привычного ритма.
              </li>
            </ul>
            <p className="mb-0">
              Если у вас доминирует конкретный симптом, можно начать с более узкого материала:{" "}
              <Link href="/blog/bol-v-zhivote-kogda-nuzhen-gastroenterolog">боль в животе</Link>,{" "}
              <Link href="/blog/izzhoga-i-otryzhka-kogda-pora-zapisatsya-k-gastroenterologu">изжога и отрыжка</Link>,{" "}
              <Link href="/blog/vzdutie-zhivota-i-meteorizm">вздутие</Link>,{" "}
              <Link href="/blog/zapor-ili-diareya">запор или диарея</Link>.
            </p>
          </section>

          <section id="when" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда симптомы стоит обсудить с врачом</h2>
            <p className="mb-4">
              Ключевой ориентир — повторяемость и влияние на качество жизни. Если вы регулярно “подстраиваете” питание и планы под симптом, это уже повод
              обсудить ситуацию на консультации.
            </p>
            <div className="rounded-2xl p-6 bg-emerald-50/70 border border-emerald-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Записаться к гастроэнтерологу стоит, если:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> симптомы повторяются неделями или волнами
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> есть связь с едой, но “правильная диета” не помогает
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> приходится часто принимать препараты “по ситуации”
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> симптом мешает сну, работе или тренировкам
                </div>
              </div>
            </div>
            <p className="mb-0">
              При острых и быстро нарастающих состояниях нужна не статья, а очная медицинская помощь. Если сомневаетесь, как поступить, можно позвонить в
              клинику и описать ситуацию.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Почему не стоит долго заниматься самодиагностикой</h2>
            <p className="mb-4">
              У похожих жалоб бывают разные причины. “Списки симптомов” из интернета часто приводят к хаотичным ограничениям в питании, покупке
              ненужных анализов и потере времени. На консультации врач помогает выстроить приоритеты: что действительно важно уточнить и с чего начать.
            </p>
            <p className="mb-0">
              Если вам важно понять, какие услуги доступны и как записаться, страница направления — здесь: <Link href={GASTRO_URL}>гастроэнтерология</Link>.
            </p>
          </section>

          <section id="prepare" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что подготовить к приёму</h2>
            <p className="mb-4">
              Для гастроэнтеролога ценны наблюдения. Не нужно “идеально подготовиться”, но несколько пунктов помогут сделать консультацию предметнее.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                "Кратко: какие симптомы и как давно",
                "Связь с едой (натощак/после), временем суток",
                "Частота стула и изменения привычного ритма",
                "Список препаратов и результаты обследований (если есть)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-0">
              Если врач будет обсуждать обследования, включая дыхательные тесты, это обычно делается по показаниям. Смотрите связанные материалы:{" "}
              <Link href="/blog/helicobacter-pylori-kogda-vrach-mozhet-rekomendovat-dyhatelnyj-test">когда обсуждают H. pylori</Link> и{" "}
              <Link href="/blog/13s-ureaznyj-dyhatelnyj-test">что такое 13С‑уреазный дыхательный тест</Link>.
            </p>
          </section>

          <section id="visit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как обычно проходит консультация гастроэнтеролога</h2>
            <p className="mb-4">
              Обычно консультация начинается со сбора жалоб и анамнеза: врач уточняет динамику симптомов, питание, режим, перенесённые заболевания и
              лекарства. Далее — осмотр и обсуждение плана: наблюдение, корректировка привычек и/или обследования по показаниям.
            </p>
            <p className="mb-0">
              Записаться на приём можно через страницу направления <Link href={GASTRO_URL}>гастроэнтерологии</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Нужно ли приносить анализы, если их нет?",
                  a: "Нет. Можно начать с консультации и описания симптомов. Врач объяснит, что действительно уместно именно в вашей ситуации.",
                },
                {
                  q: "Стоит ли заранее резко менять питание?",
                  a: "Резкие ограничения без понимания причин часто не помогают. Лучше обсудить наблюдения с врачом и выбрать спокойную тактику.",
                },
                {
                  q: "Всегда ли назначают обследования?",
                  a: "Не всегда. Иногда достаточно наблюдения и уточнения факторов. Объём обследования зависит от симптомов и их динамики.",
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
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Запись на консультацию</h2>
            <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
              <p className="text-gray-800 mb-4">
                Если симптомы повторяются и мешают, можно записаться к гастроэнтерологу в Альтамед‑С. На странице направления — услуги и цены:{" "}
                <Link href={GASTRO_URL}>гастроэнтерология</Link>.
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
                <Link
                  href={DOCTOR_URL}
                  className="inline-flex justify-center px-5 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition"
                >
                  Врач гастроэнтеролог
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

