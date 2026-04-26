import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Боль в животе: когда нужен гастроэнтеролог и что рассказать врачу | Альтамед‑С",
  description:
    "Какие особенности боли в животе важно отмечать, на что обратить внимание (связь с едой, стулом, вздутием), и когда стоит обсудить симптомы с гастроэнтерологом без самодиагностики.",
  openGraph: {
    title: "Боль в животе: когда нужен гастроэнтеролог | Альтамед‑С",
    description:
      "Спокойные ориентиры: какие детали боли важны для врача и как подготовиться к консультации.",
    url: "https://altamed-c.ru/blog/bol-v-zhivote-kogda-nuzhen-gastroenterolog",
    siteName: "Альтамед‑С",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/blog/bol-v-zhivote-kogda-nuzhen-gastroenterolog.webp",
        alt: "Боль в животе: когда нужен гастроэнтеролог",
      },
    ],
  },
  alternates: { canonical: "https://altamed-c.ru/blog/bol-v-zhivote-kogda-nuzhen-gastroenterolog" },
};

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const GASTRO_URL = "/services/gastroenterology";
const HERO_IMAGE = "/images/blog/bol-v-zhivote-kogda-nuzhen-gastroenterolog.webp";

export default function ArticleBolVZhivote() {
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
            <span className="text-gray-900 font-medium">Боль в животе</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Боль в животе: когда нужен гастроэнтеролог
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Боль в животе — очень распространённая жалоба, и причины бывают разными. Важно: статья не заменяет диагностику и не ставит диагноз.
                Её цель — помочь описать симптом так, чтобы консультация была максимально полезной: какие детали боли действительно важны и когда лучше не
                откладывать визит.
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
                <a href="#details" className="text-emerald-600 hover:underline py-1">
                  Какие детали важны
                </a>
                <a href="#links" className="text-emerald-600 hover:underline py-1">
                  Связь с едой и стулом
                </a>
                <a href="#when" className="text-emerald-600 hover:underline py-1">
                  Когда обращаться
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
                  alt="Боль в животе — консультация гастроэнтеролога"
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
          <section id="details" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Какие особенности боли важно отметить</h2>
            <p className="mb-4">
              На приёме гастроэнтерологу помогает “карта симптома”. Чем точнее описание, тем проще выбрать тактику — наблюдение, обследование или
              коррекцию привычек.
            </p>
            <ul>
              <li>
                <strong>Где болит</strong>: верх живота, “под ложечкой”, внизу, справа/слева.
              </li>
              <li>
                <strong>Характер</strong>: ноющая, жгучая, спазм, колющая, распирающая.
              </li>
              <li>
                <strong>Длительность и частота</strong>: сколько длится эпизод, как часто повторяется.
              </li>
              <li>
                <strong>Что усиливает/облегчает</strong>: еда, кофе, физнагрузка, положение тела, стресс.
              </li>
              <li>
                <strong>Что сопровождает</strong>: тошнота, вздутие, изменение стула, изжога.
              </li>
            </ul>
          </section>

          <section id="links" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Связь с едой, временем суток и стулом</h2>
            <p className="mb-4">
              Один из самых практичных вопросов для пациента — “когда болит”. Врач часто уточняет, появляется ли боль натощак или после еды, есть ли
              ночные эпизоды, меняется ли состояние после дефекации, есть ли связь со вздутием.
            </p>
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Что можно заметить заранее:</p>
              <ul className="mb-0">
                <li>Появляется ли боль после конкретных продуктов или объёма пищи.</li>
                <li>Есть ли сочетание с изжогой или отрыжкой.</li>
                <li>Меняется ли боль при вздутии, газообразовании, изменениях стула.</li>
              </ul>
            </div>
            <p className="mb-0">
              Если боль сопровождается изжогой, полезна отдельная статья:{" "}
              <Link href="/blog/izzhoga-i-otryzhka-kogda-pora-zapisatsya-k-gastroenterologu">изжога и отрыжка</Link>.
            </p>
          </section>

          <section id="when" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда лучше не затягивать с визитом</h2>
            <p className="mb-4">
              При повторяющихся болях консультация помогает избежать “кругов” самодиагностики и хаотичных диет. Врач оценит общую картину и объяснит,
              какие обследования уместны.
            </p>
            <div className="rounded-2xl p-6 bg-emerald-50/70 border border-emerald-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Записаться стоит, если:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> боль повторяется или усилилась по сравнению с привычной
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> есть сочетание с изжогой, тошнотой, вздутием
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> изменился стул и это держится
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> симптом мешает повседневной активности
                </div>
              </div>
            </div>
            <p className="mb-0">
              При острых состояниях и быстро нарастающих симптомах требуется очная медицинская помощь. В плановой ситуации — консультация помогает
              спокойно разобраться без “самоназначений”.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Нужно ли терпеть и ждать, пока “само пройдёт”?",
                  a: "Если эпизод единичный и быстро прошёл — возможно, достаточно наблюдения. Если боль повторяется, лучше обсудить это с врачом и не угадывать причину.",
                },
                {
                  q: "Стоит ли сразу делать обследования “на всякий случай”?",
                  a: "Обычно разумнее начать с консультации: врач объяснит, что действительно информативно именно при вашей картине симптомов.",
                },
                {
                  q: "Можно ли подготовиться к приёму?",
                  a: "Да: записать особенности боли, связь с едой и стулом, а также принести список препаратов и результаты прошлых обследований (если есть).",
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
                Если боль в животе повторяется или сочетается с другими симптомами, можно записаться к гастроэнтерологу и обсудить план обследования.
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

