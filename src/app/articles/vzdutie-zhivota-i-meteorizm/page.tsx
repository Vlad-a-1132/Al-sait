import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Вздутие живота и метеоризм: когда стоит обсудить с гастроэнтерологом | Альтамед‑С",
  description:
    "Вздутие и метеоризм: когда симптом бывает эпизодическим, какие наблюдения помогают врачу, как связаны питание и режим, и когда стоит записаться к гастроэнтерологу.",
  openGraph: {
    title: "Вздутие живота и метеоризм | Альтамед‑С",
    description:
      "Ориентиры по симптомам и подготовке к консультации: без самодиагностики и резких диет.",
    url: "https://altamed-c.ru/blog/vzdutie-zhivota-i-meteorizm",
    siteName: "Альтамед‑С",
    locale: "ru_RU",
    type: "article",
  },
  alternates: { canonical: "https://altamed-c.ru/blog/vzdutie-zhivota-i-meteorizm" },
};

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const GASTRO_URL = "/services/gastroenterology";
const HERO_IMAGE = "/images/images allergoly/gas.webp";

export default function ArticleVzdutie() {
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
            <span className="text-gray-900 font-medium">Вздутие</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Вздутие живота и метеоризм
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Вздутие и газообразование бывают эпизодически — на фоне питания, смены режима, стресса. Но если симптом повторяется и заметно влияет на
                самочувствие, лучше обсудить его с гастроэнтерологом. Статья не ставит диагноз, а помогает подготовить наблюдения и вопросы к приёму.
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
                <a href="#observe" className="text-emerald-600 hover:underline py-1">
                  Что наблюдать
                </a>
                <a href="#when" className="text-emerald-600 hover:underline py-1">
                  Когда к врачу
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
                  alt="Вздутие живота — консультация гастроэнтеролога"
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
              Иногда вздутие связано с конкретным эпизодом: непривычная еда, нарушение режима, быстрый приём пищи, стресс. Если симптом редкий и быстро
              проходит, бывает достаточно наблюдения и мягкой коррекции привычек.
            </p>
            <p className="mb-0">
              Если вздутие повторяется, держится долго или сопровождается другими жалобами (боль, нестабильный стул, тошнота), стоит обсудить это с врачом.
            </p>
          </section>

          <section id="observe" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие наблюдения реально помогают врачу</h2>
            <p className="mb-4">
              В гастроэнтерологии работает “контекст”: питание, режим, стресс, повторяемость. Полезно фиксировать несколько простых вещей без попыток
              поставить диагноз.
            </p>
            <ul>
              <li>Когда возникает вздутие: после еды, вечером, в определённые дни.</li>
              <li>Есть ли связь с быстрым приёмом пищи, перееданием, газировкой, “перекусами на бегу”.</li>
              <li>Сопровождается ли симптом болью, урчанием, изменением стула.</li>
              <li>Что помогает: движение, изменение режима, уменьшение объёма порции.</li>
            </ul>
            <p className="mb-0">
              Если основной вопрос — стул, посмотрите материал <Link href="/blog/zapor-ili-diareya">«Запор или диарея»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Почему важна общая картина, а не один симптом</h2>
            <p className="mb-4">
              Вздутие может идти “в связке” с изжогой, болью, тошнотой или изменениями стула. Именно сочетание симптомов помогает врачу понять, что
              приоритетно: что наблюдать, что обсудить и нужны ли обследования.
            </p>
            <p className="mb-0">
              Если у вас повторяющаяся изжога, может быть полезна статья{" "}
              <Link href="/blog/izzhoga-i-otryzhka-kogda-pora-zapisatsya-k-gastroenterologu">«Изжога и отрыжка: когда пора записаться к гастроэнтерологу»</Link>.
            </p>
          </section>

          <section id="when" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда стоит обсудить симптомы на консультации</h2>
            <div className="rounded-2xl p-6 bg-emerald-50/70 border border-emerald-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Записаться стоит, если:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> вздутие повторяется и мешает активности
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> появились боль, тошнота или выраженная тяжесть
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> есть устойчивые изменения стула
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> симптом держится неделями “волнами”
                </div>
              </div>
            </div>
            <p className="mb-0">
              Записаться к гастроэнтерологу можно на странице направления: <Link href={GASTRO_URL}>гастроэнтерология</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Нужно ли сразу исключать много продуктов?",
                  a: "Резкие ограничения без понимания причин часто не помогают. Лучше обсудить симптомы с врачом и выбрать спокойную тактику.",
                },
                {
                  q: "Вздутие — это всегда “что‑то серьёзное”?",
                  a: "Не обязательно. Важно оценивать длительность, повторяемость и сочетание с другими симптомами. Это и делает врач на консультации.",
                },
                {
                  q: "Какая подготовка нужна к приёму?",
                  a: "Достаточно записать симптомы, их связь с едой/режимом, изменения стула и список препаратов (если принимаете).",
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
                Если вздутие и метеоризм повторяются, можно записаться к гастроэнтерологу и обсудить причины и план наблюдения. Услуги и цены — на странице{" "}
                <Link href={GASTRO_URL}>гастроэнтерологии</Link>.
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

