import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Нарушение менструального цикла: когда это норма, а когда нужен врач | Альтамед-С',
  description: 'Сбой цикла, задержки, слишком обильные или скудные месячные — когда стоит записаться к гинекологу и какие обследования могут понадобиться.',
  openGraph: {
    title: 'Нарушение менструального цикла | Альтамед-С',
    description: 'Когда сбой цикла — норма, а когда нужна консультация гинеколога или гинеколога-эндокринолога.',
    url: 'https://altamed-c.ru/blog/narushenie-menstrualnogo-tsikla',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/narushenie-menstrualnogo-tsikla' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['narushenie-menstrualnogo-tsikla'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleNarushenieTsikla() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={GYNEC_HUB_URL} className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Нарушение цикла</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Нарушение менструального цикла: когда это норма, а когда нужен врач
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Менструальный цикл — отражение работы гипоталамо-гипофизарно-яичниковой системы. Норма варьируется: у кого-то цикл стабильно 28 дней, у кого-то — 32 или 35. Важна не только «идеальная» цифра, но и стабильность, отсутствие резких изменений и тревожных симптомов.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — что считается нарушением, задержки и их причины, обильные и скудные менструации, болезненные месячные, когда нужен гинеколог-эндокринолог, список обследований и конкретные критерии «нормы» по дням и объёму кровопотери.
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
                <a href="#norma" className="text-emerald-600 hover:underline py-1">Норма цикла</a>
                <a href="#zaderzhki" className="text-emerald-600 hover:underline py-1">Задержки</a>
                <a href="#srochno" className="text-emerald-600 hover:underline py-1">Когда срочно</a>
                <a href="#kak-prohodit" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Нарушение менструального цикла" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Норма и когда к врачу */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Норма цикла и когда нужен врач</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Нормальная картина</h3>
                    <p className="text-gray-700 text-sm mb-0">Цикл 21–35 дней, менструация 3–7 дней, объём 40–80 мл. Допустимы колебания до 2–3 дней. Разовая задержка на 5–7 дней на фоне стресса — часто вариант нормы.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Когда к врачу</h3>
                    <p className="text-gray-700 text-sm mb-0">Задержки повторяются; обильные или скудные месячные; аменорея 2–3 месяца; болезненные менструации; кровянистые выделения вне цикла.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="norma" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что считается нормой цикла</h2>
            <p className="mb-4">
              Длительность цикла: 21–35 дней от первого дня одной менструации до первого дня следующей. Длительность кровотечения: 3–7 дней. Объём: 40–80 мл за всю менструацию (примерно 3–6 прокладок средней наполняемости в день). Регулярность: допустимы колебания до 2–3 дней от цикла к циклу.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Что считается нарушением</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Цикл короче 21 дня (полименорея) или длиннее 35 дней (олигоменорея);</li>
              <li>Задержка более 7–10 дней при ранее стабильном ритме;</li>
              <li>Аменорея — отсутствие менструации 3 месяца и более;</li>
              <li>Обильные менструации (смена прокладки чаще чем раз в 2 часа, сгустки, длительность более 7 дней);</li>
              <li>Скудные (мазня 1–2 дня или объём менее 20 мл);</li>
              <li>Кровянистые выделения вне менструации;</li>
              <li>Сильная боль, требующая регулярного приёма обезболивающих.</li>
            </ul>
            <p className="mb-4">
              Важен контекст: если ваш цикл всегда был 33 дня, а внезапно стал 45 — это повод для консультации, даже если 45 формально «в пределах» верхней границы.
            </p>
          </section>

          <section id="zaderzhki" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Задержки: причины и тактика</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Когда задержка может быть нормой</h3>
            <p className="mb-4">
              Разовая задержка на 5–7 дней на фоне стресса, смены климата, простуды, резкого изменения веса или интенсивных тренировок — частая реакция организма. В таких случаях цикл обычно восстанавливается сам.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Когда нужен врач</h3>
            <p className="mb-4">
              Задержки повторяются 2–3 цикла подряд; цикл стал нерегулярным после периода стабильности; месячные отсутствуют 2–3 месяца; задержка сочетается с другими симптомами (прибавка веса, рост волос по мужскому типу, акне). Первый шаг — исключить беременность (тест, при необходимости УЗИ и ХГЧ). Далее — осмотр, УЗИ малого таза, анализы на гормоны (ФСГ, ЛГ, эстрадиол, прогестерон, пролактин, ТТГ).
            </p>
            <p className="mb-4">
              При подозрении на гормональную природу гинеколог направляет к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>. Подробнее о выборе специалиста — в статье <Link href="/blog/ginekolog-ili-ginekolog-endokrinolog">«Гинеколог или гинеколог-эндокринолог»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Обильные менструации (меноррагия)</h2>
            <p className="mb-4">
              Критерии: смена прокладки/тампона чаще чем раз в 2 часа; менструация более 7 дней; крупные сгустки; кровопотеря более 80 мл (условно — более 6 прокладок в день). Причины: миома матки, аденомиоз, полипы эндометрия, нарушение свёртываемости, гормональный дисбаланс.
            </p>
            <p className="mb-4">
              Обильные месячные приводят к анемии (слабость, бледность, головокружение). Обратиться к гинекологу стоит при первых признаках: удлинение менструации, усиление кровопотери, появление сгустков.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Скудные менструации (гипоменорея)</h2>
            <p className="mb-4">
              Мазня 1–2 дня или объём менее 20 мл. Возможные причины: низкий вес, резкое похудание, стресс, избыточные нагрузки, дисфункция яичников, гиперпролактинемия, синдром Ашермана (внутриматочные синехии после выскабливаний).
            </p>
            <p className="mb-4">
              При планировании беременности скудные месячные могут указывать на проблему с овуляцией или эндометрием. Консультация гинеколога и при необходимости гинеколога-эндокринолога помогает выявить причину.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Болезненные месячные (дисменорея)</h2>
            <p className="mb-4">
              Лёгкий дискомфорт в первые 1–2 дня — не редкость. Сильная боль, из‑за которой приходится откладывать работу, принимать обезболивающее каждый цикл или лежать — повод для обследования. Первичная дисменорея (с молодости) часто связана с простагландинами; вторичная (появилась со временем) — с эндометриозом, аденомиозом, миомой.
            </p>
            <p className="mb-4">
              Врач может рекомендовать УЗИ, при необходимости — МРТ, лапароскопию. Лечение зависит от причины: НПВС, гормональная терапия, хирургия при выявленной патологии.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие обследования назначают при нарушении цикла</h2>
            <p className="mb-4">
              Минимум: осмотр, УЗИ органов малого таза (обычно 5–7‑й день цикла для оценки эндометрия и яичников). Анализы на гормоны сдаются в определённые дни: ФСГ, ЛГ, эстрадиол — 2–5‑й день; прогестерон — 21–23‑й день (при 28‑дневном цикле); пролактин, ТТГ — любой день, утром натощак. При подозрении на СПКЯ — расширенный гормональный профиль, УЗИ в определённую фазу.
            </p>
            <p className="mb-4">
              Гинеколог определяет объём индивидуально. В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно сдать анализы и пройти УЗИ в день приёма.
            </p>
          </section>

          {/* Rose callout: Когда срочно */}
          <section id="srochno" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда обращаться срочно</h2>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Не откладывайте визит при:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> обильное кровотечение (прокладка заполняется за 1–2 часа)</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> крупные сгустки и анемия (слабость, бледность)</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> кровотечение при подтверждённой беременности</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> аменорея 6+ месяцев без причины</div>
              </div>
            </div>
          </section>

          {/* Инфографика: Как проходит консультация */}
          <section id="kak-prohodit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит консультация</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {['Сбор анамнеза (цикл, жалобы)', 'Осмотр гинеколога', 'УЗИ малого таза (обычно 5–7-й день)', 'Анализы на гормоны по показаниям', 'Рекомендации или направление к эндокринологу'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Подготовка — инфографика */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Подготовка к визиту</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'Вспомнить длительность последних 3 циклов',
                'Отметить даты и объём менструаций',
                'Взять результаты УЗИ и гормонов (если есть)',
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

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда нужен гинеколог-эндокринолог</h2>
            <p className="mb-4">
              К этому специалисту направляют при: нерегулярном цикле, задержках, аменорее; подозрении на СПКЯ (поликистоз яичников); избытке андрогенов (гирсутизм, акне); гиперпролактинемии; проблемах с зачатием на фоне гормональных нарушений; подготовке к беременности при нестабильном цикле; менопаузе с выраженными жалобами.
            </p>
            <p className="mb-4">
              В Альтамед-С приём ведёт <Link href={GYNEC_SERVICES.priem}>гинеколог в Одинцово</Link> — запись через сайт или по телефону.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о менструальном цикле</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">В какой день цикла сдавать ФСГ, ЛГ и эстрадиол?</dt>
                <dd className="text-gray-700 mb-0">Обычно на 2–5‑й день менструального цикла (от первого дня месячных). При аменорее — в любой день, но врач может попросить вызвать кровотечение прогестероном для точности.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли принимать гормоны без анализа?</dt>
                <dd className="text-gray-700 mb-0">Нет. Гормональные препараты (КОК, ЗГТ, стимуляция овуляции) подбираются по результатам обследования. Самолечение может усугубить дисбаланс.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Нестабильный цикл мешает забеременеть?</dt>
                <dd className="text-gray-700 mb-0">Да. Нерегулярная овуляция затрудняет планирование. Консультация гинеколога и при необходимости гинеколога-эндокринолога помогает выявить причину и скорректировать цикл перед зачатием.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Задержка 10 дней, тест отрицательный — что делать?</dt>
                <dd className="text-gray-700 mb-0">Записаться к гинекологу. Возможны поздняя овуляция, гормональный сбой, стресс. Врач проведёт осмотр, при необходимости — УЗИ и анализ ХГЧ для исключения беременности.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Обильные месячные со сгустками — это норма?</dt>
                <dd className="text-gray-700 mb-0">Небольшие сгустки в первые дни могут быть нормой. Крупные сгустки, обильная кровопотеря — повод для осмотра и УЗИ (миома, полипы, аденомиоз).</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Консультация при нарушении цикла</h2>
            <p className="text-gray-700 mb-6">
              В Альтамед-С можно записаться к <Link href={GYNEC_HUB_URL}>гинекологу</Link> или <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>. Врач проведёт осмотр, назначит анализы и УЗИ, составит план обследования и лечения.
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
                  <li><Link href={GYNEC_SERVICES.priem}>Приём гинеколога</Link></li>
                  <li><Link href={GYNEC_SERVICES.vedenie}>Ведение беременности</Link></li>
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/blog/ginekolog-ili-ginekolog-endokrinolog">Гинеколог или гинеколог-эндокринолог</Link></li>
                  <li><Link href="/blog/bol-vnizu-zhivota-u-zhenshchin-prichiny">Боль внизу живота у женщин</Link></li>
                  <li><Link href="/blog/kak-prohodit-vedenie-beremennosti">Ведение беременности в Одинцово</Link></li>
                  <li><Link href="/blog/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov">Когда нужно записаться к гинекологу</Link></li>
                  <li><Link href="/blog/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
