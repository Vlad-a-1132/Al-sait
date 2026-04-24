import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Когда ребёнку нужен гастроэнтеролог: симптомы и подготовка к приёму | Альтамед‑С",
  description:
    "Ориентиры для родителей: с какими жалобами дети чаще попадают к гастроэнтерологу, какие наблюдения помогают врачу, что взять на консультацию и почему важно спокойно фиксировать симптомы.",
  openGraph: {
    title: "Когда ребёнку нужен гастроэнтеролог | Альтамед‑С",
    description:
      "Боль в животе, вздутие, нарушения стула и жалобы после еды: что важно обсудить на консультации.",
    url: "https://altamed-c.ru/blog/kogda-rebenku-nuzhen-gastroenterolog",
    siteName: "Альтамед‑С",
    locale: "ru_RU",
    type: "article",
  },
  alternates: { canonical: "https://altamed-c.ru/blog/kogda-rebenku-nuzhen-gastroenterolog" },
};

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const GASTRO_URL = "/services/gastroenterology";
const HERO_IMAGE = "/images/images allergoly/gas.webp";

export default function ArticleKidsGastro() {
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
            <span className="text-gray-900 font-medium">Дети</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Когда ребёнку нужен гастроэнтеролог
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Детские жалобы со стороны ЖКТ часто бывают “смазанными”: ребёнок может говорить просто “болит живот”, отказываться от еды или жаловаться на
                вздутие. Эта статья не ставит диагноз и не заменяет врача. Здесь — спокойные ориентиры для родителей: какие симптомы стоит обсудить на
                консультации и что подготовить к приёму.
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
                <a href="#complaints" className="text-emerald-600 hover:underline py-1">
                  Частые жалобы
                </a>
                <a href="#observe" className="text-emerald-600 hover:underline py-1">
                  Что наблюдать
                </a>
                <a href="#prepare" className="text-emerald-600 hover:underline py-1">
                  Что взять на приём
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
                  alt="Детский гастроэнтеролог"
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
          <section id="complaints" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">С какими жалобами родители приходят чаще всего</h2>
            <ul>
              <li>Повторяющиеся боли в животе.</li>
              <li>Вздутие, метеоризм, урчание.</li>
              <li>Нестабильный стул (запор, диарея, чередование).</li>
              <li>Жалобы после еды: тяжесть, тошнота, отказ от пищи.</li>
            </ul>
            <p className="mb-0">
              Уточнять причины и выбирать обследование лучше вместе с врачом. Если у ребёнка доминируют изменения стула, полезен материал{" "}
              <Link href="/blog/zapor-ili-diareya">«Запор или диарея»</Link>.
            </p>
          </section>

          <section id="observe" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие наблюдения родителей помогают врачу</h2>
            <p className="mb-4">
              Самое ценное — динамика: когда началось и как меняется. Не нужно “угадывать диагноз” — достаточно фактов.
            </p>
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Что можно записать:</p>
              <ul className="mb-0">
                <li>Когда и как часто появляются симптомы.</li>
                <li>Связь с едой (после каких продуктов/объёма пищи хуже).</li>
                <li>Сопутствующие признаки: вздутие, тошнота, изжога (если есть).</li>
                <li>Стул: частота и изменения относительно обычного.</li>
              </ul>
            </div>
            <p className="mb-0">
              Если часто бывает вздутие, может помочь статья <Link href="/blog/vzdutie-zhivota-i-meteorizm">«Вздутие живота и метеоризм»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Почему лучше обсуждать симптомы на консультации, а не “лечить по статьям”</h2>
            <p className="mb-4">
              У детей похожие жалобы могут возникать по разным причинам, а резкие ограничения в питании “на всякий случай” иногда только усложняют ситуацию.
              На приёме врач помогает выбрать безопасную и понятную тактику.
            </p>
            <p className="mb-0">
              Запись и информация об услугах — на странице <Link href={GASTRO_URL}>гастроэнтерологии</Link>.
            </p>
          </section>

          <section id="prepare" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что взять на консультацию</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                "Короткая сводка симптомов (что, когда, как часто)",
                "Дневник питания на 3–7 дней (если получается)",
                "Список препаратов и реакций на них",
                "Результаты обследований (если есть)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-0">
              Если нет обследований — это нормально. Консультация поможет понять, что действительно нужно по показаниям.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Нужно ли сдавать анализы до визита?",
                  a: "Не обязательно. Лучше начать с консультации, чтобы обследование было по показаниям.",
                },
                {
                  q: "Стоит ли исключать продукты заранее?",
                  a: "Резкие ограничения без рекомендаций врача часто не нужны. Обсудите наблюдения на приёме.",
                },
                {
                  q: "Как понять, что пора к врачу?",
                  a: "Если симптомы повторяются, мешают ребёнку жить и учиться, или вы видите устойчивые изменения — консультация поможет разобраться спокойнее.",
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
                Если жалобы повторяются, можно записаться на консультацию гастроэнтеролога. Услуги и цены — на странице{" "}
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

