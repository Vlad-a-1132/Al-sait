import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Ведение беременности в Одинцово: как проходит наблюдение | Альтамед-С',
  description: 'Как проходит ведение беременности в Одинцово, какие обследования и консультации нужны будущей маме, когда вставать на наблюдение.',
  openGraph: {
    title: 'Ведение беременности в Одинцово | Альтамед-С',
    description: 'Наблюдение беременности: консультации, УЗИ, анализы, когда вставать на учёт.',
    url: 'https://altamed-c.ru/articles/vedenie-beremennosti-v-odintsovo',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/vedenie-beremennosti-v-odintsovo' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['vedenie-beremennosti-v-odintsovo'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleVedenieBeremennosti() {
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
            <span className="text-gray-900 font-medium">Ведение беременности</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Ведение беременности в Одинцово: как проходит наблюдение будущей мамы
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Ведение беременности — это комплекс консультаций, анализов и исследований, позволяющий контролировать развитие плода, состояние будущей мамы и вовремя корректировать тактику при выявлении рисков. Регулярное наблюдение снижает частоту осложнений и помогает подготовиться к родам.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — оптимальные сроки постановки на учёт, график визитов по триместрам, скрининговые УЗИ и анализы (с конкретными сроками), когда обращаться вне плана, возможность вести беременность в платной клинике и рожать в роддоме по выбору.
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
                <a href="#nablyudenie" className="text-emerald-600 hover:underline py-1">Зачем наблюдение</a>
                <a href="#kogda" className="text-emerald-600 hover:underline py-1">Когда обращаться</a>
                <a href="#grafik" className="text-emerald-600 hover:underline py-1">График визитов</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Ведение беременности" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Оптимальные сроки + Когда вне плана */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Оптимальные сроки и когда обращаться вне плана</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Оптимальные сроки</h3>
                    <p className="text-gray-700 text-sm mb-0">Постановка на учёт — до 12 недель (лучше 6–8). Первый скрининг в 11–14 недель. УЗИ по триместрам, анализы по графику.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Когда обращаться вне плана</h3>
                    <p className="text-gray-700 text-sm mb-0">Кровянистые выделения, боль внизу живота, отёки, головная боль, подтекание вод, снижение шевелений, температура.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="nablyudenie" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Зачем нужно наблюдение во время беременности</h2>
            <p className="mb-4">
              Ведение беременности — это не формальность, а система консультаций, анализов и исследований, которые позволяют оценивать развитие плода, состояние здоровья будущей мамы и при необходимости корректировать тактику.
            </p>
            <p>
              Регулярные визиты к <Link href={GYNEC_SERVICES.akusher}>акушеру-гинекологу</Link> помогают выявлять возможные осложнения на ранних стадиях, контролировать течение беременности и готовиться к родам.
            </p>
          </section>

          <section id="kogda" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда впервые обращаться</h2>
            <p className="mb-4">
              Оптимальный срок постановки на учёт — до 12 недель (лучше 6–8). Первый скрининг (УЗИ + биохимия) проводится в 11–14 недель; если встать на учёт позже, можно пропустить окно для этого исследования. Раннее обращение также позволяет выявить внематочную беременность, скорректировать приём лекарств при хронических заболеваниях и при необходимости назначить прогестерон.
            </p>
            <p>
              Если вы только узнали о беременности — запишитесь на приём в ближайшие 1–2 недели. <Link href={GYNEC_SERVICES.akusher}>Акушер-гинеколог</Link> подтвердит маточную беременность, определит срок и составит план наблюдения.
            </p>
          </section>

          {/* График визитов — step badges */}
          <section id="grafik" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">График визитов по триместрам</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['До 20 нед — раз в 4 нед', '20–30 нед — раз в 2 нед', 'После 30 нед — раз в 1–2 нед', 'На каждом приёме: давление, вес, высота дна матки', 'Сердцебиение плода с 18–20 нед'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              До 20 недель — раз в 4 недели; 20–30 недель — раз в 2 недели; после 30 недель — раз в 1–2 недели. При наличии рисков или осложнений визиты проводятся чаще. На каждом приёме: измерение артериального давления, веса, окружности живота, высоты дна матки, аускультация сердцебиения плода (с 18–20 недель), осмотр на кресле по показаниям.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие консультации и обследования входят</h2>
            <p className="mb-4">
              Программа ведения беременности включает плановые визиты к акушеру-гинекологу (частота зависит от срока и особенностей течения), анализы крови и мочи, мазки, скрининговые исследования, УЗИ по триместрам.
            </p>
            <p>
              Объём и график определяются индивидуально с учётом возраста, анамнеза и результатов обследований. В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно оформить ведение беременности и проходить все необходимые процедуры в одной клинике.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">УЗИ по триместрам: сроки и цели</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">I триместр (11–14 недель)</h3>
            <p className="mb-4">
              Подтверждение маточной беременности, расчёт срока, оценка воротникового пространства и носовой кости (скрининг хромосомных аномалий). В этот же период — биохимический скрининг (РАРР-А, ХГЧ).
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">II триместр (18–21 неделя)</h3>
            <p className="mb-4">
              Анатомия плода, скрининг пороков развития, оценка плаценты, количества вод. Тройной тест (АФП, ХГЧ, эстриол) — по показаниям.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">III триместр (30–34 недели)</h3>
            <p className="mb-4">
              Размеры плода, положение, предлежание плаценты, количество вод, допплерометрия кровотока при необходимости.
            </p>
            <p className="mb-4">
              В Альтамед-С УЗИ при беременности проводят специалисты с опытом акушерской ультразвуковой диагностики.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Анализы при ведении беременности</h2>
            <p className="mb-4">
              Общий анализ крови и мочи — при каждом визите или по графику. В первом триместре: группа крови и резус-фактор, ОАК, биохимия, коагулограмма, TORCH-инфекции, гепатиты B и C, сифилис, ВИЧ, ТТГ. Глюкозотолерантный тест — в 24–28 недель для скрининга гестационного диабета. При резус-отрицательной крови — антирезусные антитела и иммунопрофилактика по протоколу.
            </p>
            <p>
              Полный перечень анализов и даты сдачи определяет <Link href={GYNEC_SERVICES.akusher}>акушер-гинеколог</Link> в зависимости от срока и индивидуальных рисков.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Наблюдение у акушера-гинеколога</h2>
            <p className="mb-4">
              На каждом приёме врач измеряет давление, вес, высоту дна матки, слушает сердцебиение плода (начиная с определённого срока), уточняет жалобы и даёт рекомендации.
            </p>
            <p>
              Важно задавать вопросы, сообщать о любых необычных ощущениях и соблюдать график визитов. Ведение беременности в Альтамед-С ведут опытные <Link href={GYNEC_SERVICES.akusher}>акушеры-гинекологи</Link> в Одинцово.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда обращаться вне планового визита</h2>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Связаться с врачом или прийти на приём вне графика нужно, если:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> кровянистые выделения</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> боль внизу живота</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> выраженные отёки, головная боль, мелькание «мушек» перед глазами</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> подозрение на подтекание вод</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> снижение или отсутствие шевелений (на поздних сроках)</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> температура</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> любое резкое ухудшение самочувствия</div>
              </div>
            </div>
            <p className="mb-4">
              Связаться с врачом или прийти на приём вне графика нужно, если появились: кровянистые выделения; боль внизу живота; выраженные отёки, головная боль, мелькание «мушек» перед глазами; подозрение на подтекание вод; снижение или отсутствие шевелений (на поздних сроках); температура; любое резкое ухудшение самочувствия.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о ведении беременности</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Платная клиника + роддом — как это работает?</dt>
                <dd className="text-gray-700 mb-0">Вы ведёте беременность в Альтамед-С, получаете обменную карту и выписку. Рожать можно в любом роддоме. Уточните заранее, принимает ли выбранный роддом пациенток из платных центров; обычно документы достаточно передать при поступлении.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Пропустила первый скрининг (11–14 недель) — что делать?</dt>
                <dd className="text-gray-700 mb-0">Сообщите врачу. Возможны альтернативы: УЗИ во втором триместре с оценкой маркеров, при необходимости — консультация генетика. План составит акушер-гинеколог.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Обязателен ли глюкозотолерантный тест?</dt>
                <dd className="text-gray-700 mb-0">Рекомендован всем беременным в 24–28 недель для выявления гестационного диабета. При отказе — индивидуальное решение с врачом с учётом факторов риска.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Когда ехать в роддом при схватках?</dt>
                <dd className="text-gray-700 mb-0">При регулярных схватках (каждые 5–7 минут) и раскрытии шейки матки. При отхождении вод — сразу. Врач на последних приёмах даст конкретные рекомендации.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Что входит в программу ведения в Альтамед-С?</dt>
                <dd className="text-gray-700 mb-0">Консультации акушера-гинеколога, УЗИ по триместрам, анализы, ведение обменной карты. Уточните состав и стоимость при оформлении программы.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ведение беременности в Одинцово</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_SERVICES.vedenie}>Альтамед-С</Link> можно оформить ведение беременности, проходить консультации акушера-гинеколога, УЗИ и анализы. Запишитесь на приём для оформления программы наблюдения.
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

          <section className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Полезные материалы</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Направления</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href={GYNEC_HUB_URL}>Гинеколог в Одинцово</Link></li>
                  <li><Link href={GYNEC_SERVICES.akusher}>Акушер-гинеколог</Link></li>
                  <li><Link href={GYNEC_SERVICES.vedenie}>Ведение беременности</Link></li>
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie">УЗИ при беременности</Link></li>
                  <li><Link href="/articles/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya">Первый приём беременной</Link></li>
                  <li><Link href="/articles/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet">Допплерометрия при беременности</Link></li>
                  <li><Link href="/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                  <li><Link href="/articles/poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut">Послеродовый осмотр</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
