import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Аллергия у детей: с какими симптомами обращаться к аллергологу | Альтамед-С',
  description:
    'Какие симптомы у ребёнка чаще приводят к аллергологу, на что спокойно обратить внимание родителям и что взять с собой на консультацию.',
  openGraph: {
    title: 'Аллергия у детей: с какими симптомами обращаться | Альтамед-С',
    description:
      'Ориентиры для родителей: кожные и респираторные проявления, сезонность и бытовые триггеры, подготовка к визиту.',
    url: 'https://altamed-c.ru/blog/allergiya-u-detej-s-kakimi-simptomami-obrashchatsya',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/allergiya-u-detej-s-kakimi-simptomami-obrashchatsya' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const ALLERGOLOGY_URL = '/services/allergology';

const HERO_IMAGE = '/images/blog/Allergiya%20u%20detey%20s%20kakimi%20simptomami%20obrashchatsya.webp';

export default function ArticleAllergiyaUDetei() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={ALLERGOLOGY_URL} className="hover:text-emerald-600">Аллерголог в Одинцово</Link>
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
                Аллергия у детей: с какими симптомами обращаться
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                У детей жалобы часто звучат “не по учебнику”: длительный насморк без температуры, зуд кожи, повторяющиеся высыпания,
                кашель после простуды или на фоне нагрузки. Задача консультации — спокойно разложить картину по полочкам и понять,
                что действительно требует аллергологического подхода.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Ниже — ориентиры для родителей: какие симптомы чаще приводят к аллергологу, какие наблюдения реально помогают врачу,
                и что стоит взять на приём.
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
                <a href="#complaints" className="text-emerald-600 hover:underline py-1">Частые жалобы</a>
                <a href="#skin" className="text-emerald-600 hover:underline py-1">Кожа</a>
                <a href="#resp" className="text-emerald-600 hover:underline py-1">Дыхательные</a>
                <a href="#prepare" className="text-emerald-600 hover:underline py-1">Что взять</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={HERO_IMAGE}
                  alt="Аллергия у детей"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                  quality={92}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
          <section id="complaints" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">С какими жалобами родители приходят чаще всего</h2>
            <p className="mb-4">
              Чаще всего на консультацию приводят ребёнка, когда жалобы повторяются или затягиваются, а причины остаются неясными.
              В таких ситуациях полезна структура: что именно происходит, когда, при каких условиях, чем сопровождается.
            </p>
            <ul className="mb-0">
              <li>Длительный насморк/заложенность без температуры.</li>
              <li>Зуд кожи, сухость, покраснение, повторяющиеся высыпания.</li>
              <li>Слезотечение, зуд глаз, “аллергические” проявления в сезон.</li>
              <li>Кашель, эпизоды свистов, “бронхит за бронхитом” — особенно с сезонностью или повторяемостью.</li>
            </ul>
          </section>

          <section id="skin" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Кожные проявления: что важно описать врачу</h2>
            <p className="mb-4">
              Кожа у детей может реагировать на множество факторов: сухость воздуха, пот, ткань, моющие средства, инфекционные эпизоды,
              питание, стресс. Поэтому на приёме важны детали и динамика.
            </p>
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Полезно подготовить:</p>
              <ul className="mb-0">
                <li>Когда впервые появились высыпания и как меняются (дни/недели).</li>
                <li>Где локализуются (лицо, сгибы, туловище), есть ли зуд.</li>
                <li>Что усиливает/уменьшает (после душа, пота, на улице, после смены порошка).</li>
                <li>Фото высыпаний в “пик” — иногда это помогает врачу, если к визиту кожа стала лучше.</li>
              </ul>
            </div>
            <p className="mb-0">
              Если сомневаетесь, когда стоит обращаться, можно начать с общего материала:
              <Link href="/blog/kogda-stoit-obratitsya-k-allergologu">когда стоит обратиться к аллергологу</Link>.
            </p>
          </section>

          <section id="resp" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Респираторные проявления и сезонность</h2>
            <p className="mb-4">
              У детей кашель и заложенность часто списывают на простуды и аденоиды. Иногда это действительно так. Но если есть повторяемость,
              сезонность или связь с условиями (уборка, животные, пыль), консультация аллерголога помогает аккуратно проверить гипотезу.
            </p>
            <ul>
              <li>Симптомы усиливаются в определённый сезон или при определённых контактах.</li>
              <li>Насморк держится долго и “не переходит” в типичную простуду.</li>
              <li>Есть эпизоды свистов/затруднённого дыхания — особенно при нагрузке или ночью.</li>
            </ul>
            <p className="mb-0">
              Если у ребёнка похожая сезонность, посмотрите статью <Link href="/blog/sezonnaya-allergiya-simptomy-i-kogda-zapisyvatsya">про сезонную аллергию</Link> —
              там есть идеи, что наблюдать и что обсудить на приёме.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда лучше показать ребёнка врачу</h2>
            <p className="mb-4">
              В плановой ситуации ориентируются на повторяемость и влияние на качество жизни: сон, концентрация, активность.
              Если вы чувствуете, что “крутитесь по кругу” с симптомами — консультация помогает выстроить понятный маршрут.
            </p>
            <p className="mb-0">
              При выраженном отёке, затруднении дыхания или резко нарастающих симптомах важно обращаться за неотложной помощью.
              В остальных случаях — лучше спокойно обсудить симптомы на консультации, без самодиагностики и самолечения.
            </p>
          </section>

          <section id="prepare" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что взять с собой на консультацию</h2>
            <p className="mb-4">
              Самое ценное — не “идеальная подготовка”, а конкретные наблюдения. Но несколько вещей действительно упрощают разговор.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'Список симптомов и когда они появляются',
                'Список препаратов и реакций на них',
                'Фото высыпаний (если бывают)',
                'Результаты прошлых обследований (если есть)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-0">
              Полный чек‑лист подготовки — в статье <Link href="/blog/kak-podgotovitsya-k-priemu-allergologa">«Как подготовиться к приёму аллерголога»</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Нужны ли аллергопробы ребёнку сразу?',
                  a: 'Не всегда. Обычно начинают с консультации и истории симптомов. Врач объяснит, нужно ли обследование и какое именно.',
                },
                {
                  q: 'Можно ли “на всякий случай” исключить продукты?',
                  a: 'Резкие ограничения без показаний могут быть бесполезны и неудобны. Лучше обсудить подозрения с врачом и выбрать спокойную тактику.',
                },
                {
                  q: 'Если симптомы то появляются, то проходят — это не аллергия?',
                  a: 'Так тоже бывает. Важнее повторяемость и контекст. Консультация помогает разобраться без гаданий.',
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
                Если симптомы повторяются или мешают ребёнку спать и быть активным, можно записаться к аллергологу в Альтамед‑С и обсудить план наблюдения.
                Услуги и цены — на странице <Link href={ALLERGOLOGY_URL}>аллергологии</Link>.
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

