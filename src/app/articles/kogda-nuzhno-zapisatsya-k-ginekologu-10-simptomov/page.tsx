import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Когда нужно записаться к гинекологу: 10 симптомов, которые нельзя игнорировать | Альтамед-С',
  description: 'Когда нужно идти к гинекологу в Одинцово? Разбираем 10 симптомов, при которых нужна консультация врача: боли, сбой цикла, выделения, зуд, кровянистые выделения, гормональные нарушения и другие признаки.',
  openGraph: {
    title: 'Когда нужно записаться к гинекологу: 10 симптомов | Альтамед-С',
    description: 'Разбираем 10 симптомов, при которых нужна консультация гинеколога: боли, нарушения цикла, выделения, зуд и другие признаки.',
    url: 'https://altamed-c.ru/blog/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticleGinekolog10Simptomov() {
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
            <span className="text-gray-900 font-medium">Когда записаться к гинекологу</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Когда нужно записаться к гинекологу: 10 симптомов, которые нельзя игнорировать
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Многие гинекологические заболевания на ранних стадиях дают смазанную картину или протекают бессимптомно. Понимание того, какие признаки требуют консультации, помогает не пропустить важный момент.
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
                <a href="#simptomy" className="text-emerald-600 hover:underline py-1">10 симптомов</a>
                <a href="#srochno" className="text-emerald-600 hover:underline py-1">Когда срочно</a>
                <a href="#kak-prohodit" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov'] ?? '/images/images allergoly/ginokologia.webp'} alt="Когда нужно записаться к гинекологу" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Профилактика и красные флаги */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Профилактический осмотр и «красные флаги»</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Профилактика раз в год</h3>
                    <p className="text-gray-700 text-sm mb-0">Даже без жалоб осмотр раз в год рекомендуется каждой женщине. Мазок на онкоцитологию, осмотр и УЗИ помогают выявить изменения на ранней стадии.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Срочно к врачу</h3>
                    <p className="text-gray-700 text-sm mb-0">Острая боль внизу живота, обильное кровотечение, температура на фоне боли, подозрение на беременность с кровянистыми выделениями.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-0">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> приём ведут <Link href={GYNEC_SERVICES.akusher}>акушеры-гинекологи</Link> — запись ежедневно с 8:00 до 21:00.
            </p>
          </section>

          {/* 10 симптомов — инфографика карточками */}
          <section id="simptomy" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-6">10 симптомов, при которых нужно записаться к гинекологу</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { n: 1, title: 'Боли внизу живота', desc: 'Тянущие, острые, схваткообразные. Если боль повторяется, усилилась или с выделениями.', link: '/articles/bol-vnizu-zhivota-u-zhenshchin-prichiny' },
                { n: 2, title: 'Нарушения цикла', desc: 'Задержки, нерегулярность, обильные или скудные месячные, болезненные менструации.', link: '/articles/narushenie-menstrualnogo-tsikla' },
                { n: 3, title: 'Необычные выделения', desc: 'Изменение цвета, запаха, консистенности. Жёлтые, зелёные, творожистые.', link: '/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu' },
                { n: 4, title: 'Зуд, жжение, раздражение', desc: 'Часто с выделениями. Самолечение без мазка может смазать картину.', link: null },
                { n: 5, title: 'Кровянистые выделения вне месячных', desc: 'Любая «мазня» или кровотечение — повод для осмотра и обследования.', link: '/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut' },
                { n: 6, title: 'Боль при половом контакте', desc: 'Боль, жжение, сухость или дискомфорт во время интимной близости.', link: null },
                { n: 7, title: 'Трудности с зачатием', desc: 'Беременность не наступает — повод для обследования и консультации.', link: '/services/vedenie-beremennosti-odintsovo' },
                { n: 8, title: 'Симптомы менопаузы', desc: 'Приливы, нерегулярные кровотечения, сухость и дискомфорт.', link: '/services/priem-ginekologa-odintsovo' },
                { n: 9, title: 'Рекомендация кольпоскопии', desc: 'Контроль после лечения, мазок с атипией, ВПЧ — нужна кольпоскопия.', link: '/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut' },
                { n: 10, title: '«Что-то не так»', desc: 'Любые изменения, которые настораживают — достаточный повод для визита.', link: null },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-200 bg-white shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-lg">{s.n}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                      <p className="text-gray-600 text-sm mb-0">{s.desc}</p>
                      {s.link && <Link href={s.link} className="text-emerald-600 text-sm font-medium mt-2 inline-block">Подробнее →</Link>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Инфографика: Когда срочно */}
          <section id="srochno" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда нужно обратиться срочно</h2>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Не откладывайте визит, если:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> боль внизу живота выраженная и усиливается</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> появилось обильное кровотечение</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> температура на фоне боли и выделений</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> самочувствие резко ухудшилось</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> сильная слабость, головокружение</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> беременность + боль или кровянистые выделения</div>
              </div>
            </div>
            <p className="text-gray-700 mb-0">В подобных ситуациях лучше как можно быстрее связаться с клиникой.</p>
          </section>

          {/* Инфографика: Как проходит консультация */}
          <section id="kak-prohodit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит консультация гинеколога</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {['Сбор жалоб и симптомов', 'Вопросы о цикле и самочувствии', 'Осмотр', 'Назначение анализов при необходимости', 'Рекомендации по наблюдению'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-0">Результаты предыдущих обследований лучше взять с собой.</p>
          </section>

          {/* Подготовка — инфографика */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как подготовиться к визиту</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'Вспомнить дату последней менструации',
                'Отметить, когда появились жалобы',
                'Взять результаты прошлых обследований',
                'Записать вопросы для врача',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700">Подробнее — <Link href="/blog/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.</p>
          </section>

          {/* Самолечение */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Почему не стоит заниматься самолечением</h2>
            <p className="mb-4">
              Похожие жалобы могут возникать при разных состояниях. Самолечение может смазать клиническую картину и отсрочить нужную диагностику. Гораздо безопаснее вовремя записаться к гинекологу.
            </p>
          </section>

          {/* Профилактика */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Профилактический осмотр тоже важен</h2>
            <p className="mb-0">
              Даже без выраженных жалоб профилактический визит остаётся важной частью заботы о женском здоровье. Если вы давно не были у гинеколога — профилактический приём уже достаточный повод для записи.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о визите к гинекологу</h2>
            <dl className="space-y-6">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Как часто нужен профилактический осмотр?</dt>
                <dd className="text-gray-700 mb-0">Раз в год — мазок на онкоцитологию и осмотр. При наличии рисков — чаще по рекомендации врача.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">К кому идти — гинекологу или гинекологу-эндокринологу?</dt>
                <dd className="text-gray-700 mb-0">При большинстве жалоб — к гинекологу. Он при необходимости направит к эндокринологу. Подробнее — <Link href="/blog/ginekolog-ili-ginekolog-endokrinolog">«Гинеколог или гинеколог-эндокринолог»</Link>.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли прийти без жалоб, «просто провериться»?</dt>
                <dd className="text-gray-700 mb-0">Да. Профилактический осмотр — полноценная причина для визита.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Нужно ли готовиться к приёму?</dt>
                <dd className="text-gray-700 mb-0">За 24–48 часов — без половых контактов, спринцеваний и вагинальных препаратов. Оптимально — первая половина цикла.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Задержка при отрицательном тесте — к гинекологу?</dt>
                <dd className="text-gray-700 mb-0">Да. Задержка может быть связана с гормональным сбоем, стрессом. Врач проведёт осмотр и при необходимости назначит анализы.</dd>
              </div>
            </dl>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Записаться к гинекологу в Одинцово</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Если вас беспокоят боли, нарушения цикла, необычные выделения, зуд или вопросы планирования беременности — не откладывайте визит. В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно записаться к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>. Цены уточняйте при записи.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700">
                Записаться онлайн
              </a>
              <a href={PHONE_LINK} className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50">
                Позвонить
              </a>
            </div>
          </section>

          {/* Полезные материалы */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Полезные материалы</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Направления</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href={GYNEC_HUB_URL}>Гинеколог в Одинцово</Link></li>
                  <li><Link href={GYNEC_SERVICES.priem}>Приём гинеколога</Link></li>
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/blog/bol-vnizu-zhivota-u-zhenshchin-prichiny">Боль внизу живота у женщин</Link></li>
                  <li><Link href="/blog/narushenie-menstrualnogo-tsikla">Нарушение менструального цикла</Link></li>
                  <li><Link href="/blog/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">Выделения, зуд, жжение</Link></li>
                  <li><Link href="/blog/kak-podgotovitsya-k-priyomu-ginekologa">Как подготовиться к приёму гинеколога</Link></li>
                  <li><Link href="/blog/kak-prohodit-vedenie-beremennosti">Ведение беременности в Одинцово</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
