import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helicobacter pylori: когда врач может рекомендовать дыхательный тест | Альтамед‑С",
  description:
    "Что такое Helicobacter pylori простыми словами, почему обследование назначает врач, в каких ситуациях может обсуждаться дыхательный тест и что важно рассказать на приёме.",
  openGraph: {
    title: "Helicobacter pylori: когда обсуждают дыхательный тест | Альтамед‑С",
    description:
      "Спокойно о показаниях: почему тест не нужен всем подряд и зачем важна консультация перед обследованием.",
    url: "https://altamed-c.ru/blog/helicobacter-pylori-kogda-vrach-mozhet-rekomendovat-dyhatelnyj-test",
    siteName: "Альтамед‑С",
    locale: "ru_RU",
    type: "article",
  },
  alternates: {
    canonical: "https://altamed-c.ru/blog/helicobacter-pylori-kogda-vrach-mozhet-rekomendovat-dyhatelnyj-test",
  },
};

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const GASTRO_URL = "/services/gastroenterology";
const HERO_IMAGE = "/images/images allergoly/gas.webp";

export default function ArticleHpyloriBreathTest() {
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
            <span className="text-gray-900 font-medium">H. pylori и тест</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Helicobacter pylori: когда врач может рекомендовать дыхательный тест
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Про Helicobacter pylori (H. pylori) часто читают в интернете и затем пытаются “назначить себе” обследование. Это понятное желание — быстро
                получить ответ. Но в реальности решение о тесте лучше принимать вместе с гастроэнтерологом: важно, какой именно вопрос мы хотим решить и
                как результат повлияет на тактику.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В статье — простое объяснение, что это за бактерия, когда тест обсуждают, и какие наблюдения помогут врачу.
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
                <a href="#what" className="text-emerald-600 hover:underline py-1">
                  Что это
                </a>
                <a href="#when" className="text-emerald-600 hover:underline py-1">
                  Когда обсуждают тест
                </a>
                <a href="#talk" className="text-emerald-600 hover:underline py-1">
                  Что рассказать врачу
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
                  alt="Helicobacter pylori и дыхательный тест"
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
          <section id="what" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Что такое Helicobacter pylori простыми словами</h2>
            <p className="mb-4">
              Helicobacter pylori — бактерия, которая может жить в желудке у части людей. Сам по себе факт наличия бактерии не всегда “объясняет” любые
              симптомы. Врач оценивает общую картину: жалобы, длительность, сопутствующие факторы и цели обследования.
            </p>
            <p className="mb-0">
              Важно: статья не заменяет диагностику. Решение об обследовании и интерпретация результата — задача врача.
            </p>
          </section>

          <section id="when" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Почему решение о тесте принимает врач</h2>
            <p className="mb-4">
              Тест назначают не “всем подряд”, а когда результат поможет выбрать тактику. На консультации гастроэнтеролог уточняет симптомы и решает, есть ли
              смысл обсуждать обследование на H. pylori, и какой метод уместен.
            </p>
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">На приёме обычно обсуждают:</p>
              <ul className="mb-0">
                <li>Какие симптомы есть и как давно они появились.</li>
                <li>Что уже пробовали и какой был эффект.</li>
                <li>Есть ли связь с едой, режимом, стрессом.</li>
                <li>Какой вопрос решаем тестом и что будет дальше в зависимости от результата.</li>
              </ul>
            </div>
            <p className="mb-0">
              Про сам метод и общую логику проведения — отдельная статья: <Link href="/blog/13s-ureaznyj-dyhatelnyj-test">13С‑уреазный дыхательный тест</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">В каких ситуациях может обсуждаться дыхательный тест</h2>
            <p className="mb-4">
              Врач может предложить обследование на H. pylori, когда по клинической картине это оправдано. Конкретные показания и выбор метода зависят от
              ситуации, поэтому правильнее обсуждать это очно.
            </p>
            <p className="mb-0">
              Если у вас основная жалоба — изжога, боль, тяжесть после еды, можно начать с базовой консультации и описания симптомов. Запись доступна на
              странице <Link href={GASTRO_URL}>гастроэнтерологии</Link>.
            </p>
          </section>

          <section id="talk" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что важно рассказать врачу</h2>
            <p className="mb-4">Чтобы обсуждение было предметным, подготовьте короткую “сводку”:</p>
            <ul>
              <li>Какие симптомы беспокоят больше всего и как давно.</li>
              <li>Есть ли ночные эпизоды или связь с приёмами пищи.</li>
              <li>Принимали ли какие‑то препараты и какие (и помогало ли).</li>
              <li>Какие обследования уже выполнялись (если есть результаты).</li>
            </ul>
            <p className="mb-0">
              Если параллельно есть вздутие или нестабильный стул, посмотрите статьи кластера:{" "}
              <Link href="/blog/vzdutie-zhivota-i-meteorizm">вздутие</Link> и <Link href="/blog/zapor-ili-diareya">запор или диарея</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Стоит ли сдавать тест без консультации?",
                  a: "Обычно лучше начать с приёма: врач объяснит, нужен ли тест в вашей ситуации и как результат повлияет на дальнейшие шаги.",
                },
                {
                  q: "Если результат положительный — это всегда причина симптомов?",
                  a: "Не всегда. Результат интерпретируют вместе с симптомами и общей картиной.",
                },
                {
                  q: "Как подготовиться к дыхательному тесту?",
                  a: "Подготовка зависит от методики и препаратов. Её лучше уточнять у врача или в клинике перед обследованием.",
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
                Если вы хотите обсудить симптомы и понять, нужно ли обследование на H. pylori, начните с консультации гастроэнтеролога. Запись и услуги —
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

