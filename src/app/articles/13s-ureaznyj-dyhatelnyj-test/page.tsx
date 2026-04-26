import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "13С-уреазный дыхательный тест: как проходит и когда назначают | Альтамед‑С",
  description:
    "Что такое 13С-уреазный дыхательный тест простыми словами, как обычно проходит обследование, какие ограничения бывают перед тестом и почему необходимость лучше уточнять у врача.",
  openGraph: {
    title: "13С-уреазный дыхательный тест | Альтамед‑С",
    description:
      "Спокойно о тесте: как проходит, что обсудить на консультации, почему подготовку важно уточнить у врача.",
    url: "https://altamed-c.ru/blog/13s-ureaznyj-dyhatelnyj-test",
    siteName: "Альтамед‑С",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/blog/13s-ureaznyj-dyhatelnyj-test.webp",
        alt: "13С-уреазный дыхательный тест",
      },
    ],
  },
  alternates: { canonical: "https://altamed-c.ru/blog/13s-ureaznyj-dyhatelnyj-test" },
};

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const GASTRO_URL = "/services/gastroenterology";
const HERO_IMAGE = "/images/blog/13s-ureaznyj-dyhatelnyj-test.webp";

export default function Article13CUrease() {
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
            <span className="text-gray-900 font-medium">13С‑тест</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                13С-уреазный дыхательный тест
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                13С‑уреазный дыхательный тест часто обсуждают в контексте Helicobacter pylori. Важно помнить: необходимость теста и правила подготовки
                зависят от вашей ситуации и препаратов. Поэтому правильнее сначала обсудить симптомы с гастроэнтерологом и получить понятные рекомендации.
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
                <a href="#how" className="text-emerald-600 hover:underline py-1">
                  Как проходит
                </a>
                <a href="#prep" className="text-emerald-600 hover:underline py-1">
                  Ограничения
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
                  alt="13С-уреазный дыхательный тест"
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
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Что это за обследование простыми словами</h2>
            <p className="mb-4">
              В общих чертах тест оценивает определённые процессы, связанные с активностью H. pylori. На практике смысл теста — помочь врачу ответить на
              конкретный вопрос обследования и выбрать тактику. Поэтому важно понимать, зачем именно тест назначается.
            </p>
            <p className="mb-0">
              Про то, когда врач обсуждает обследование на H. pylori, читайте отдельный материал:{" "}
              <Link href="/blog/helicobacter-pylori-kogda-vrach-mozhet-rekomendovat-dyhatelnyj-test">когда может быть рекомендован дыхательный тест</Link>.
            </p>
          </section>

          <section id="how" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как обычно проходит тест</h2>
            <p className="mb-4">
              Конкретный протокол зависит от лаборатории и клиники, но логика обычно следующая: выполняются контрольные измерения, затем — измерения после
              приёма тестового раствора/субстрата, после чего результат интерпретируется.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {["Подготовка по инструкции", "Контрольный этап", "Основной этап", "Результат и интерпретация"].map((item, i) => (
                <div key={item} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">{i + 1}.</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-0">
              Важно: результат оценивают вместе с симптомами и клинической задачей. Сам по себе результат не заменяет консультацию.
            </p>
          </section>

          <section id="prep" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие ограничения могут быть перед обследованием</h2>
            <p className="mb-4">
              Ограничения зависят от методики и препаратов, которые вы принимаете. Некоторые лекарства могут повлиять на точность результата. Поэтому
              главное правило — не отменять ничего самостоятельно и заранее уточнить инструкцию.
            </p>
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Практичные шаги:</p>
              <ul className="mb-0">
                <li>Сообщите врачу список препаратов, которые принимаете сейчас или принимали недавно.</li>
                <li>Уточните правила подготовки в клинике заранее.</li>
                <li>Если есть сомнения — начните с консультации гастроэнтеролога.</li>
              </ul>
            </div>
            <p className="mb-0">
              Записаться на консультацию и посмотреть услуги можно на странице <Link href={GASTRO_URL}>гастроэнтерологии</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Тест нужен всем при дискомфорте в желудке?",
                  a: "Нет. Необходимость зависит от симптомов и цели обследования. Решение лучше принимать на консультации.",
                },
                {
                  q: "Можно ли прийти сразу “только на тест”?",
                  a: "Технически — да, но правильнее сначала обсудить показания. Так вы поймёте, действительно ли тест нужен и как подготовиться.",
                },
                {
                  q: "Что важнее: тест или консультация?",
                  a: "Консультация определяет цель обследования и интерпретацию результата. Тест — инструмент, который работает в связке с клинической задачей.",
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
                Если вы хотите понять, нужен ли 13С‑тест в вашей ситуации, начните с консультации гастроэнтеролога. Услуги и цены — на странице{" "}
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

