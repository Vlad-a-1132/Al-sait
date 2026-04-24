import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Сезонная аллергия: симптомы и когда записываться к аллергологу | Альтамед-С',
  description:
    'Поллиноз простыми словами: типичные симптомы, как заметить сезонность, когда стоит записаться к аллергологу и что подготовить к приёму.',
  openGraph: {
    title: 'Сезонная аллергия: симптомы и когда записываться | Альтамед-С',
    description:
      'Как понять, что симптомы могут быть сезонными, и что обсудить с врачом на консультации.',
    url: 'https://altamed-c.ru/blog/sezonnaya-allergiya-simptomy-i-kogda-zapisyvatsya',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/sezonnaya-allergiya-simptomy-i-kogda-zapisyvatsya' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const ALLERGOLOGY_URL = '/services/allergology';

const HERO_IMAGE = '/images/blog/Sezonnaya%20allergiya%20simptomy%20i%20kogda%20zapisyvatsya.webp';

export default function ArticleSezonnayaAllergiya() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={ALLERGOLOGY_URL} className="hover:text-emerald-600">Аллерголог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Сезонная аллергия</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Сезонная аллергия: симптомы и когда записываться
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Сезонную аллергию часто называют поллинозом: симптомы появляются в определённое время года и могут повторяться из сезона в сезон.
                Иногда её путают с “затянувшейся простудой”, особенно если основная жалоба — насморк и заложенность носа.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В статье — спокойные ориентиры: какие признаки обычно встречаются, как заметить сезонность и что обсудить с аллергологом на приёме.
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
                <a href="#what" className="text-emerald-600 hover:underline py-1">Что это</a>
                <a href="#symptoms" className="text-emerald-600 hover:underline py-1">Симптомы</a>
                <a href="#when" className="text-emerald-600 hover:underline py-1">Когда записываться</a>
                <a href="#visit" className="text-emerald-600 hover:underline py-1">Что обсудить</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={HERO_IMAGE}
                  alt="Сезонная аллергия"
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
          <section id="what" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Что такое сезонная аллергия (поллиноз)</h2>
            <p className="mb-4">
              Поллиноз — это аллергическая реакция, которая чаще связана с пыльцой растений и повторяется в определённые периоды.
              Главная “подсказка” — похожие симптомы в одно и то же время года.
            </p>
            <p className="mb-0">
              При этом сезонность не всегда очевидна: иногда симптомы начинаются мягко, “накладываются” на простуды или усиливаются в конкретную погоду.
              Поэтому полезно смотреть на повторяемость и контекст.
            </p>
          </section>

          <section id="symptoms" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Типичные симптомы</h2>
            <p className="mb-4">
              Наиболее частые проявления — со стороны носа и глаз. У кого‑то симптоматика ограничивается насморком, у кого‑то добавляется кашель
              или неприятные ощущения в горле.
            </p>
            <ul>
              <li><strong>Заложенность носа</strong>, водянистый насморк, частое чихание.</li>
              <li><strong>Зуд в носу</strong> и першение, ощущение раздражения.</li>
              <li><strong>Слезотечение</strong>, зуд и покраснение глаз.</li>
              <li><strong>Кашель</strong> или ощущение “комка”/раздражения в горле, особенно на улице.</li>
              <li><strong>Утомляемость</strong> и снижение концентрации — как следствие постоянных симптомов и плохого сна.</li>
            </ul>
            <p className="mb-0">
              Похожие симптомы бывают и при других состояниях, поэтому важна консультация. Общие ориентиры “когда обратиться” — в статье
              <Link href="/blog/kogda-stoit-obratitsya-k-allergologu">«Когда стоит обратиться к аллергологу»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как заметить сезонность и триггеры</h2>
            <p className="mb-4">
              Иногда помогает простой дневник: где были, что делали, что изменилось. Даже 1–2 недели заметок могут дать полезные подсказки.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'Когда начались симптомы и как менялись',
                'Где сильнее: дома или на улице',
                'Есть ли облегчение в дождь/после умывания',
                'Что повторяется из года в год',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-0">
              Такие наблюдения не заменяют диагностику, но помогают врачу быстрее понять картину и выбрать тактику.
            </p>
          </section>

          <section id="when" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда стоит записаться к аллергологу</h2>
            <p className="mb-4">
              Записаться имеет смысл, если симптомы повторяются каждый сезон, мешают работе/учёбе или если вы не уверены, чем именно они вызваны.
              Часто консультация нужна не “в самый пик”, а когда есть время спокойно выстроить план на сезон.
            </p>
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Повод обратиться:</p>
              <ul className="mb-0">
                <li>насморк и заложенность держатся долго и плохо контролируются</li>
                <li>появляются глазные симптомы (зуд/слезотечение)</li>
                <li>есть кашель, свисты или эпизоды “нехватки воздуха”</li>
                <li>симптомы повторяются ежегодно в похожий период</li>
              </ul>
            </div>
            <p className="mb-0">
              Записаться и посмотреть услуги/цены можно на странице направления: <Link href={ALLERGOLOGY_URL}>аллергология</Link>.
            </p>
          </section>

          <section id="visit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что полезно обсудить на приёме</h2>
            <p className="mb-4">
              Чем точнее вы опишете динамику, тем проще выбрать следующий шаг — наблюдение, обследование или уточняющие вопросы.
            </p>
            <ul>
              <li>Когда начались симптомы и сколько длятся.</li>
              <li>Что помогает и что не помогает (без самостоятельной отмены назначений).</li>
              <li>Где хуже: дома, на улице, на даче, в машине, в определённых районах.</li>
              <li>Есть ли сезонность и повторяемость по годам.</li>
              <li>Какие препараты принимаете сейчас или принимали недавно.</li>
            </ul>
            <p className="mb-0">
              Для подготовки можно использовать чек‑лист: <Link href="/blog/kak-podgotovitsya-k-priemu-allergologa">«Как подготовиться к приёму аллерголога»</Link>.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Можно ли отличить поллиноз от простуды “по симптомам”?',
                  a: 'Иногда помогают сезонность и повторяемость, но гарантированного признака нет. Лучше обсудить историю симптомов с врачом.',
                },
                {
                  q: 'Нужно ли сразу делать аллергопробы?',
                  a: 'Не всегда. Решение зависит от вашей ситуации и цели обследования. Обычно начинают с консультации.',
                },
                {
                  q: 'Если симптомы только “весной”, можно не лечиться?',
                  a: 'Если симптомы мешают или нарастают из года в год, консультация полезна: вы получите понятный план действий на сезон.',
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
                Если симптомы повторяются сезонно или мешают в повседневной жизни, можно записаться к аллергологу в Альтамед‑С и обсудить план на сезон.
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

