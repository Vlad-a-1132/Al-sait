import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Как подготовиться к приёму гинеколога: что можно и нельзя перед визитом | Альтамед-С',
  description: 'Как подготовиться к приёму гинеколога? Рассказываем, что можно и нельзя перед визитом, что взять с собой, когда лучше записываться и как проходит консультация.',
  openGraph: {
    title: 'Как подготовиться к приёму гинеколога | Альтамед-С',
    description: 'Что можно и нельзя перед визитом к гинекологу, как подготовиться, что взять с собой.',
    url: 'https://altamed-c.ru/articles/kak-podgotovitsya-k-priyomu-ginekologa',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/kak-podgotovitsya-k-priyomu-ginekologa' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['kak-podgotovitsya-k-priyomu-ginekologa'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleKakPodgotovitsya() {
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
            <span className="text-gray-900 font-medium">Подготовка к приёму</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Как подготовиться к приёму гинеколога: что можно и нельзя перед визитом
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Тревога перед визитом к гинекологу — одна из самых частых причин откладывать профилактический осмотр. Пациентки беспокоятся о том, что «сделают что‑то не так», как пройдёт осмотр и не будет ли неудобно. На практике подготовка к обычному приёму проста, а соблюдение нескольких правил помогает и вам, и врачу получить максимум пользы от консультации.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — пошаговые рекомендации: оптимальный день цикла, ограничения за 24–48 часов до визита, список документов и анализов, этапы приёма, а также что делать при срочных симптомах.
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
                <a href="#podgotovka" className="text-emerald-600 hover:underline py-1">Нужна ли подготовка</a>
                <a href="#cikl" className="text-emerald-600 hover:underline py-1">Когда записываться</a>
                <a href="#vziat" className="text-emerald-600 hover:underline py-1">Что взять с собой</a>
                <a href="#priem" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Подготовка к приёму гинеколога" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Плановый приём + Подготовка */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Плановый приём и когда подготовка нужна</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Для планового осмотра</h3>
                <p className="text-gray-700 text-sm mb-0">Специальная подготовка не требуется. Оптимально — 5–14-й день цикла. За 24–48 ч без половых контактов, спринцеваний, вагинальных препаратов.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда подготовка нужна</h3>
                <p className="text-gray-700 text-sm mb-0">Трансабдоминальное УЗИ — полный мочевой пузырь. Анализы — натощак, определённый день цикла. Врач или администратор предупредят.</p>
              </div>
            </div>
          </section>

          <section id="podgotovka" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Нужна ли подготовка к обычному приёму</h2>
            <p className="mb-4">
              Для планового осмотра или консультации по типичным жалобам (боль внизу живота, нарушения цикла, выделения) специальная подготовка не требуется. Врач оценивает состояние в условиях стандартной гигиены и при необходимости берёт мазки прямо на приёме.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Когда подготовка действительно нужна</h3>
            <p className="mb-4">
              Ограничения актуальны только для отдельных исследований: трансабдоминальное УЗИ органов малого таза (нужен наполненный мочевым пузырь — за час до исследования выпивают около литра воды); некоторые виды анализов (натощак, определённый день цикла). Администратор или врач предупредят при записи.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Питание, режим и физическая активность</h2>
            <p className="mb-4">
              Перед обычной консультацией можно завтракать, пить воду и кофе, заниматься спортом, ходить на работу. Ограничений по еде нет. Единственное «но» — если планируется УЗИ малого таза через живот в тот же день, уточните при записи, нужно ли пить воду и не мочиться до исследования.
            </p>
          </section>

          <section id="cikl" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда лучше записываться по циклу</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Оптимальный период: 5–14‑й день</h3>
            <p className="mb-4">
              Идеальное окно — первая половина цикла: после окончания менструации и до овуляции. В эти дни шейка матки лучше видна, мазки информативнее, а при необходимости можно сразу провести <Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">кольпоскопию</Link>.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Когда записываться вне зависимости от цикла</h3>
            <p className="mb-4">
              При задержке, кровянистых выделениях вне месячных, острой боли, подозрении на беременность или ухудшении самочувствия визит не откладывают. Врач проведёт осмотр и при необходимости предложит прийти ещё раз в «удобную» фазу для дополнительных мазков или УЗИ.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Можно ли идти во время месячных</h2>
            <p className="mb-4">
              Для планового осмотра — нежелательно. Кровь мешает оценке шейки матки и забору мазков на флору и онкоцитологию. Первичный приём по жалобам возможен, но если цель — профилактика или дообследование, лучше подождать окончания менструации.
            </p>
            <p className="mb-4">
              Исключение — экстренные ситуации: обильное кровотечение, сильная боль, температура, подозрение на выкидыш или внематочную беременность. В таких случаях обращаться нужно немедленно.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Гигиена: что делать и чего избегать</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Достаточно</h3>
            <p className="mb-4">
              Обычное подмывание тёплой водой, утром или накануне вечером. Без гелей с антибактериальным эффектом и без спринцеваний. Врачу важно видеть естественную картину — состав микрофлоры, характер выделений — чтобы корректно интерпретировать мазки.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Чего избегать</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Половые контакты за 24–48 часов до приёма — изменяют микрофлору и цитологию;</li>
              <li>Вагинальные свечи, кремы, таблетки за 24–48 часов — искажают результат мазков;</li>
              <li>Спринцевания, интимные дезодоранты, антисептики — нарушают pH и флору;</li>
              <li>Частое подмывание в день визита — достаточно одного раза утром.</li>
            </ul>
          </section>

          <section id="vziat" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что взять с собой</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {['Паспорт, полис ОМС', 'Результаты прошлых мазков и УЗИ', 'Список принимаемых препаратов', 'Записанные вопросы для врача'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Минимум: паспорт, полис ОМС (если применимо). Очень полезно: результаты прошлых мазков, УЗИ, анализов на гормоны, выписки — особенно при первичном обращении по конкретной проблеме или при смене врача. Список препаратов, которые принимаете постоянно. Записанные вопросы, чтобы не забыть обсудить.
            </p>
            <p className="mb-4">
              Заранее вспомните дату последней менструации. Если цикл нерегулярный — примерные даты последних 2–3 месячных. Это сэкономит время на приёме и поможет врачу с выбором обследований.
            </p>
          </section>

          <section id="priem" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит приём: этапы консультации</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {['Беседа', 'Осмотр', 'Назначения'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Беседа</h3>
            <p className="mb-4">
              Врач уточняет жалобы, задаёт вопросы о цикле, перенесённых заболеваниях, беременностях и родах, методах контрацепции. Отвечайте честно — это влияет на объём обследования и рекомендации.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Осмотр</h3>
            <p className="mb-4">
              Проводится на гинекологическом кресле. Врач оценивает наружные половые органы, состояние шейки матки в зеркалах, пальпирует матку и придатки. При необходимости берёт мазки на флору, онкоцитологию, скрытые инфекции.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Назначения</h3>
            <p className="mb-4">
              По результатам осмотра может быть рекомендовано УЗИ, анализ крови на гормоны, <Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">кольпоскопия</Link>, консультация <Link href="/services/priem-ginekologa-odintsovo">гинеколога</Link> или <Link href="/services/akusher-ginekolog-odintsovo">акушера-гинеколога</Link>. План озвучивается в конце приёма.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как справиться с тревогой перед осмотром</h2>
            <p className="mb-4">
              Многие пациентки чувствуют стеснение или страх. Врачи Альтамед-С в Одинцово регулярно ведут такой приём и ориентированы на спокойную, уважительную атмосферу. Можно заранее сказать администратору или врачу о волнении — тогда специалист будет объяснять каждый шаг и даст время привыкнуть к обстановке.
            </p>
            <p className="mb-4">
              Осмотр длится обычно 5–10 минут. Если какая‑то манипуляция вызывает дискомфорт — можно попросить остановиться. При сильном страхе или негативном опыте в прошлом обсудите это с врачом: иногда достаточно более мягкого подхода и другого положения на кресле.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда записываться срочно</h2>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Не откладывайте визит при:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> острая боль внизу живота, которая нарастает</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> обильное кровотечение (прокладка за 1–2 часа)</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> температура на фоне боли или выделений</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> подозрение на беременность с болью или кровянистыми выделениями</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> травма промежности</div>
              </div>
            </div>
            <p className="mb-4">
              Не откладывайте визит при: острой боли внизу живота, которая нарастает; обильном кровотечении (прокладка заполняется за 1–2 часа); температуре на фоне боли или выделений; резком ухудшении самочувствия; подозрении на беременность с болью или кровянистыми выделениями; травме промежности.
            </p>
            <p className="mb-4">
              В Альтамед-С клиника работает ежедневно с 8:00 до 21:00. Позвоните по телефону <a href={PHONE_LINK} className="text-emerald-600 hover:underline">+7 (495) 255-44-50</a>, опишите симптомы — администратор подскажет, как лучше поступить.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о подготовке к приёму</h2>
            <div className="space-y-4">
              {[
                { q: 'За сколько дней до приёма нужно воздержаться от половых контактов?', a: 'Оптимально — 24–48 часов. Это нужно для точности мазков на флору и онкоцитологию.' },
                { q: 'Можно ли идти к гинекологу после УЗИ в тот же день?', a: 'Да. Если УЗИ было транвагинальное, осмотр гинеколога тоже возможен. Если трансабдоминальное с полным мочевым пузырём — после опорожнения. Порядок обследований уточните при записи.' },
                { q: 'Сколько длится первичная консультация гинеколога?', a: 'Обычно 20–30 минут. Если нужен забор анализов и детальный сбор анамнеза — до 40 минут. Повторный приём короче — около 15–20 минут.' },
                { q: 'Больно ли брать мазки?', a: 'Забор мазков обычно вызывает лишь лёгкий дискомфорт — щеточка или шпатель слегка касаются шейки матки. Длится несколько секунд. При выраженной чувствительности можно предупредить врача.' },
                { q: 'Нужно ли мочиться перед приёмом?', a: 'Опорожнение мочевого пузыря перед осмотром — норма. Исключение: если в тот же день запланировано УЗИ через живот, мочевой пузырь должен быть наполнен. Уточните в регистратуре при записи.' },
                { q: 'Можно ли прийти к гинекологу с задержкой месячных?', a: 'Да, задержка — как раз повод для консультации. Врач проведёт осмотр, при необходимости направит на УЗИ и анализы на гормоны для выяснения причины.' },
              ].map((f, i) => (
                <div key={i} className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                  <dt className="font-semibold text-gray-900 mb-1">{f.q}</dt>
                  <dd className="text-gray-700 mb-0">{f.a}</dd>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Запись на приём гинеколога в Одинцово</h2>
            <p className="text-gray-700 mb-6">
              В Альтамед-С приём ведут гинекологи со стажем до 43 лет. Можно записаться к <Link href={GYNEC_HUB_URL}>гинекологу</Link>, <Link href={GYNEC_SERVICES.akusher}>акушеру-гинекологу</Link> или <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>. <Link href={`${GYNEC_SERVICES.priem}#tseny`}>Актуальные цены</Link> и расписание — на сайте и по телефону.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700">
                Записаться онлайн
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
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov">Когда нужно записаться к гинекологу: 10 симптомов</Link></li>
                  <li><Link href="/articles/bol-vnizu-zhivota-u-zhenshchin-prichiny">Боль внизу живота у женщин: причины</Link></li>
                  <li><Link href="/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">Выделения, зуд, жжение: когда к гинекологу</Link></li>
                  <li><Link href="/articles/ginekolog-ili-ginekolog-endokrinolog">Гинеколог или гинеколог-эндокринолог: к кому записаться</Link></li>
                  <li><Link href="/articles/vedenie-beremennosti-v-odintsovo">Ведение беременности в Одинцово</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
