import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Первый приём беременной: как проходит консультация | Альтамед-С',
  description: 'Первый приём беременной у акушера-гинеколога: когда идти, как проходит осмотр, какие анализы назначают и что взять с собой.',
  openGraph: {
    title: 'Первый приём беременной: как проходит | Альтамед-С',
    description: 'Первый приём беременной — когда идти, как проходит консультация и что назначит врач.',
    url: 'https://altamed-c.ru/blog/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['pervyy-priem-beremennoy-kak-prohodit-konsultatsiya'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticlePervyyPriemBeremennoy() {
  return (
    <article className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={GYNEC_HUB_URL} className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Первый приём беременной</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Первый приём беременной: как проходит консультация
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Первый приём у акушера-гинеколога после положительного теста на беременность — важный шаг. Врач подтвердит маточную беременность, определит срок, соберёт анамнез, проведёт осмотр и составит план наблюдения.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — когда лучше записаться, как проходит первый приём, какие вопросы задаст врач, что он проверит и какие обследования назначит.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться онлайн
                </a>
                <a href={PHONE_LINK} className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">Первичный приём — от 3 780 ₽ · Ежедневно 8:00–21:00</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#kogda" className="text-emerald-600 hover:underline py-1">Когда записываться</a>
                <a href="#priem" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Первый приём беременной" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 sm:left-0 sm:right-auto sm:w-64 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-sm">
                  <div><span className="text-amber-500 font-bold">4.8</span> рейтинг</div>
                  <div>3 врача-гинеколога</div>
                  <div>2 филиала</div>
                  <div className="text-emerald-600 font-medium">Приём на неделе</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
          {/* Инфографика: Когда записываться + Этапы консультации */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Когда записываться и этапы консультации</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда записываться</h3>
                <p className="text-gray-700 text-sm mb-0">В ближайшие 1–2 недели после задержки или положительного теста. Оптимально — до 12 недель для первого скрининга.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Этапы первого приёма</h3>
                <p className="text-gray-700 text-sm mb-0">Беседа, осмотр, УЗИ (подтверждение маточной беременности, срок), план наблюдения, направления на анализы.</p>
              </div>
            </div>
          </section>

          <section id="kogda" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда записываться</h2>
            <p className="mb-4">
              Запишитесь в ближайшие 1–2 недели после положительного теста. Оптимально — на 6–8-й неделе по акушерскому сроку (от первого дня последних месячных). На этом сроке УЗИ уже покажет сердцебиение плода и позволит исключить внематочную беременность.
            </p>
            <p className="mb-4">
              При болях, кровянистых выделениях, предыдущих выкидышах или ЭКО — запишитесь как можно раньше. Подробнее о ведении беременности — в статье <Link href="/blog/kak-prohodit-vedenie-beremennosti">«Ведение беременности в Одинцово»</Link>.
            </p>
          </section>

          <section id="priem" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит приём</h2>
            <p className="mb-4">
              Врач уточнит дату последних месячных, цикл, хронические заболевания, аллергии, приём препаратов, предыдущие беременности и роды. Проведёт осмотр на кресле — оценка состояния шейки матки, берёт мазки. Назначит УЗИ (если ещё не делали) для подтверждения маточной беременности и срока.
            </p>
            <p className="mb-4">
              По результатам осмотра и УЗИ составит план наблюдения, назначит анализы (общий анализ крови и мочи, биохимия, группа крови и резус-фактор, TORCH, инфекции и др.), даст рекомендации по питанию, витаминам, образу жизни.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что взять с собой</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Паспорт;</li>
              <li>Результаты предыдущих обследований (УЗИ, анализы), если есть;</li>
              <li>Список принимаемых препаратов;</li>
              <li>Фото теста на беременность (по желанию) — на первом приёме могут спросить.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Можно ли делать осмотр и УЗИ при первой явке</h2>
            <p className="mb-4">
              Да. Осмотр на кресле и забор мазков — стандартная часть первого приёма. УЗИ могут сделать в тот же день (если аппарат в клинике) или записать на ближайшее время. В <Link href={GYNEC_SERVICES.vedenie}>Альтамед-С</Link> УЗИ проводят в день приёма.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о первом приёме беременной</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Нужна ли подготовка к первому приёму?</dt>
                <dd className="text-gray-700 mb-0">Специальной подготовки нет. Лучше прийти натощак, если планируют сдать кровь в тот же день. Для осмотра — не нужна наполненность мочевого пузыря.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли наблюдаться в частной клинике, а не в ЖК?</dt>
                <dd className="text-gray-700 mb-0">Да. Частная клиника может вести беременность полностью или в дополнение к ЖК. Обменная карта и родовой сертификат оформляются по месту жительства. Уточните в клинике, как они сотрудничают с роддомами.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Сколько стоит первый приём беременной?</dt>
                <dd className="text-gray-700 mb-0">Стоимость зависит от клиники. В Альтамед-С приём беременной первичный — от 3 150 ₽. Анализы и УЗИ — отдельно. Актуальные цены уточняйте при записи.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Первый приём беременной в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> принимают <Link href={GYNEC_SERVICES.akusher}>акушеры-гинекологи</Link>. Первичный приём беременной, УЗИ, анализы — в одном месте. Запись онлайн и по телефону.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700">
                Записаться на приём
              </a>
              <a href={PHONE_LINK} className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50">
                +7 (495) 255-44-50
              </a>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Полезные материалы</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Направления</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href={GYNEC_HUB_URL}>Гинеколог в Одинцово</Link></li>
                  <li><Link href={GYNEC_SERVICES.akusher}>Акушер-гинеколог</Link></li>
                  <li><Link href={GYNEC_SERVICES.vedenie}>Ведение беременности</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/blog/kak-prohodit-vedenie-beremennosti">Ведение беременности в Одинцово</Link></li>
                  <li><Link href="/blog/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                  <li><Link href="/blog/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie">УЗИ при беременности</Link></li>
                  <li><Link href="/blog/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet">Допплерометрия при беременности</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
