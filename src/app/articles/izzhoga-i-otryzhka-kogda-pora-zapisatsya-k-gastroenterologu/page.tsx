import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Изжога и отрыжка: когда пора записаться к гастроэнтерологу | Альтамед‑С",
  description:
    "Когда изжога и отрыжка бывают эпизодическими, а когда повторяемость стоит обсудить с гастроэнтерологом. Что полезно отследить до приёма и какие вопросы подготовить.",
  openGraph: {
    title: "Изжога и отрыжка: когда пора к гастроэнтерологу | Альтамед‑С",
    description:
      "Ориентиры по повторяемости симптомов и подготовке к консультации без самодиагностики и самолечения.",
    url: "https://altamed-c.ru/blog/izzhoga-i-otryzhka-kogda-pora-zapisatsya-k-gastroenterologu",
    siteName: "Альтамед‑С",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/blog/izzhoga-i-otryzhka-kogda-pora-zapisatsya-k-gastroenterologu.webp",
        alt: "Изжога и отрыжка: когда пора записаться к гастроэнтерологу",
      },
    ],
  },
  alternates: {
    canonical: "https://altamed-c.ru/blog/izzhoga-i-otryzhka-kogda-pora-zapisatsya-k-gastroenterologu",
  },
};

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const GASTRO_URL = "/services/gastroenterology";
const HERO_IMAGE = "/images/blog/izzhoga-i-otryzhka-kogda-pora-zapisatsya-k-gastroenterologu.webp";

export default function ArticleIzzhogaIOtryzhka() {
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
            <span className="text-gray-900 font-medium">Изжога и отрыжка</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Изжога и отрыжка: когда пора записаться к гастроэнтерологу
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Эпизодическая изжога бывает у многих — например, после позднего ужина или “тяжёлой” еды. Но если симптом повторяется и начинает
                влиять на привычный ритм, его стоит обсудить с гастроэнтерологом. Эта статья не ставит диагноз, а помогает оценить повторяемость и
                подготовить наблюдения к приёму.
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
                <a href="#episodes" className="text-emerald-600 hover:underline py-1">
                  Эпизоды и повторяемость
                </a>
                <a href="#track" className="text-emerald-600 hover:underline py-1">
                  Что отследить
                </a>
                <a href="#questions" className="text-emerald-600 hover:underline py-1">
                  Вопросы врачу
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
                  alt="Изжога и отрыжка — консультация гастроэнтеролога"
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
          <section id="episodes" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Когда симптом бывает эпизодическим</h2>
            <p className="mb-4">
              У многих изжога возникает время от времени — например, после переедания, позднего ужина, кофе или острой пищи. Если эпизоды редкие и вы
              понимаете триггер, иногда достаточно наблюдения.
            </p>
            <p className="mb-0">
              Но если симптом стал повторяться, “закрепился” в расписании или сопровождается другими жалобами, полезно обсудить ситуацию с врачом.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда повторяемость уже важна</h2>
            <p className="mb-4">
              На консультации врач оценивает не только наличие симптома, но и частоту, длительность, связь с едой и образом жизни. Повторяемость — один
              из главных ориентиров для планового визита.
            </p>
            <div className="rounded-2xl p-6 bg-emerald-50/70 border border-emerald-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Повод записаться, если:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> изжога/отрыжка повторяются неделями
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> симптом мешает спать или тренироваться
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> приходится часто принимать препараты “по ситуации”
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> добавились боль, тошнота, вздутие, изменения стула
                </div>
              </div>
            </div>
            <p className="mb-0">
              Если основной симптом — боль в животе, начните с отдельного материала:{" "}
              <Link href="/blog/bol-v-zhivote-kogda-nuzhen-gastroenterolog">«Боль в животе: когда нужен гастроэнтеролог»</Link>.
            </p>
          </section>

          <section id="track" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что полезно отследить до визита</h2>
            <p className="mb-4">
              Несколько простых наблюдений помогают врачу быстрее понять картину — без “самостоятельных диагнозов”.
            </p>
            <ul>
              <li>Как часто возникает симптом и сколько длится.</li>
              <li>Связь с едой: натощак/после, какие продукты чаще “запускают”.</li>
              <li>Есть ли связь с положением тела (например, в горизонтальном положении).</li>
              <li>Что помогает и что не помогает (и какие препараты пробовали).</li>
            </ul>
            <p className="mb-0">
              На странице направления <Link href={GASTRO_URL}>гастроэнтерологии</Link> можно посмотреть услуги и записаться на консультацию.
            </p>
          </section>

          <section id="questions" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие вопросы можно подготовить</h2>
            <p className="mb-4">Примеры вопросов, которые помогают получить понятный план:</p>
            <ul>
              <li>На что похожа моя картина симптомов и какие версии рассматриваем?</li>
              <li>Нужно ли обследование и какое именно (и зачем)?</li>
              <li>Какие привычки в питании и режиме стоит обсудить в первую очередь?</li>
              <li>Какие признаки — повод обратиться раньше повторного визита?</li>
            </ul>
            <p className="mb-0">
              Если врач обсуждает обследование на H. pylori, полезны статьи:{" "}
              <Link href="/blog/helicobacter-pylori-kogda-vrach-mozhet-rekomendovat-dyhatelnyj-test">когда может быть рекомендован дыхательный тест</Link> и{" "}
              <Link href="/blog/13s-ureaznyj-dyhatelnyj-test">про 13С‑уреазный тест</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Если симптом редко — можно не идти к врачу?",
                  a: "Если эпизоды единичные и вы понимаете триггер, часто достаточно наблюдения. Если повторяемость растёт или симптом мешает — лучше обсудить это с гастроэнтерологом.",
                },
                {
                  q: "Можно ли “погасить” симптом и забыть?",
                  a: "Иногда да, но важно не игнорировать повторяемость. На консультации врач помогает понять, нужен ли план обследования и наблюдения.",
                },
                {
                  q: "Нужно ли приносить анализы?",
                  a: "Если результатов нет — это нормально. Начать можно с консультации и описания симптомов.",
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
                Если изжога или отрыжка повторяются, можно записаться к гастроэнтерологу в Альтамед‑С и обсудить причины и план действий. Услуги и цены —
                на странице <Link href={GASTRO_URL}>гастроэнтерологии</Link>.
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

