import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Боль внизу живота у женщин: причины и когда нужен гинеколог | Альтамед-С',
  description: 'Почему болит низ живота у женщин, когда это может быть связано с гинекологией и в каких случаях нужно срочно обратиться к врачу.',
  openGraph: {
    title: 'Боль внизу живота у женщин: причины | Альтамед-С',
    description: 'Когда боль внизу живота связана с гинекологией и когда нужна консультация врача.',
    url: 'https://altamed-c.ru/articles/bol-vnizu-zhivota-u-zhenshchin-prichiny',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/bol-vnizu-zhivota-u-zhenshchin-prichiny' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['bol-vnizu-zhivota-u-zhenshchin-prichiny'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleBolVnizuZhivota() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={GYNEC_HUB_URL} className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Боль внизу живота</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Боль внизу живота у женщин: возможные причины и когда нужен гинеколог
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Боль внизу живота — одна из самых частых жалоб на приёме гинеколога. По данным разных исследований, до 20% обращений к специалисту связаны с этим симптомом. Причины варьируются от естественных процессов (овуляция, менструация) до острых состояний, требующих быстрой диагностики и лечения.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале разберём типы болей, связь с фазами цикла, «красные флаги» для срочного визита, сочетание с выделениями и температурой, боль при беременности и после полового контакта, а также почему самодиагностика опасна.
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
                <a href="#tipy" className="text-emerald-600 hover:underline py-1">Типы болей</a>
                <a href="#krasnye-flagi" className="text-emerald-600 hover:underline py-1">Красные флаги</a>
                <a href="#kak-prohodit" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Боль внизу живота у женщин" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Норма и когда нужен врач</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Норма и типичная картина</h3>
                    <p className="text-gray-700 text-sm mb-0">Овуляция (кратковременная боль в середине цикла), лёгкий дискомфорт перед месячными и в первые дни — часто вариант нормы. Тянущие ощущения при растяжении связок при беременности — возможны.</p>
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
                    <p className="text-gray-700 text-sm mb-0">Боль повторяется, усилилась или сочетается с выделениями; обильное кровотечение; температура на фоне боли; беременность с болью или кровянистыми выделениями.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="tipy" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Типы болей и о чём они могут говорить</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">По характеру</h3>
            <p className="mb-4">
              Тянущая, ноющая боль чаще ассоциирована с хроническими процессами: спайки, эндометриоз, воспаление придатков в стадии ремиссии. Острая, режущая — с острыми состояниями (апоплексия яичника, разрыв кисты, перекрут). Схваткообразная — с сокращениями матки (менструация, выкидыш, роды).
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">По локализации</h3>
            <p className="mb-4">
              Боль по центру (над лобком) чаще связана с маткой или мочевым пузырём. Справа или слева — с яичником, маточной трубой или аппендиксом. Двусторонняя — с воспалением придатков или эндометриозом. Иррадиация в поясницу, пах, промежность уточняет картину для врача при осмотре.
            </p>
            <p className="mb-4">
              Важно: одинаковые по описанию боли бывают при разных заболеваниях. Аппендицит может симулировать гинекологическую патологию, и наоборот. Поэтому осмотр и при необходимости УЗИ, анализы — обязательный этап.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Боль и фазы менструального цикла</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Овуляция (примерно 12–14‑й день)</h3>
            <p className="mb-4">
              Кратковременная (от нескольких минут до 1–2 часов) боль с одной стороны, иногда с небольшими кровянистыми выделениями — известный признак овуляции. Если ощущения терпимы и не повторяются циклически с нарастанием — часто вариант нормы.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Предменструальный синдром и менструация</h3>
            <p className="mb-4">
              Умеренная тянущая боль за 1–2 дня до месячных и в первые дни — распространённое явление. Связана с сокращениями матки и действием простагландинов. Если боль резко усилилась по сравнению с прежними циклами, длится дольше или не снимается привычными средствами — стоит обратиться к врачу.
            </p>
            <p className="mb-4">
              Сильная дисменорея (болезненные месячные) может указывать на эндометриоз, аденомиоз, миому. <Link href={GYNEC_SERVICES.priem}>гинеколог</Link> при необходимости подключается к обследованию, особенно при сочетании с <Link href="/articles/narushenie-menstrualnogo-tsikla">нарушениями цикла</Link>.
            </p>
          </section>

          <section id="krasnye-flagi" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">«Красные флаги»: когда обращаться срочно</h2>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Связаться с клиникой или вызвать скорую нужно при:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> острая, нарастающая боль</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> обильное кровотечение</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> температура выше 37,5 °C на фоне боли</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> подозрение на беременность с болью или кровянистыми выделениями</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> тошнота, рвота, головокружение</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> внезапная слабость, бледность</div>
              </div>
            </div>
            <p className="mb-4">
              Связаться с клиникой или вызвать скорую нужно при: острой, нарастающей боли, не снимающейся обычными обезболивающими; обильном кровотечении (прокладка заполняется за 1–2 часа); температуре выше 37,5 °C на фоне боли или выделений; тошноте, рвоте, головокружении; подозрении на беременность с болью и/или кровянистыми выделениями; внезапной слабости, бледности.
            </p>
            <p className="mb-4">
              При таких симптомах не откладывают визит «до завтра». В Альтамед-С клиника работает ежедневно с 8:00 до 21:00 — позвоните <a href={PHONE_LINK} className="text-emerald-600 hover:underline">+7 (495) 255-44-50</a> и опишите ситуацию.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Боль в сочетании с выделениями</h2>
            <p className="mb-4">
              Боль внизу живота + изменение выделений (цвет, запах, количество) — типичная картина воспаления: аднексит, эндометрит, обострение хронической инфекции. Мазки, ПЦР на ИППП, УЗИ помогают уточнить диагноз. Самолечение свечами «от воспаления» без обследования маскирует картину и может привести к хронизации и осложнениям.
            </p>
            <p>
              Подробнее о том, какие выделения требуют консультации, читайте в статье <Link href="/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">«Выделения, зуд, жжение: когда к гинекологу»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Боль и температура</h2>
            <p className="mb-4">
              Температура 37,5 °C и выше на фоне боли внизу живота — признак острой воспалительной реакции. Возможные причины: острый аднексит, пиосальпинкс, абсцесс, обострение хронического воспаления. Требуется осмотр, УЗИ, анализы (ОАК, СРБ, мазки). Иногда — госпитализация. Откладывать визит опасно.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Боль при беременности</h2>
            <p className="mb-4">
              Лёгкий дискомфорт при растяжении связок, росте матки — возможен. Но любая боль, особенно в сочетании с кровянистыми выделениями, требует оценки <Link href={GYNEC_SERVICES.akusher}>акушером-гинекологом</Link>. Необходимо исключить угрозу прерывания, внематочную беременность, отслойку плаценты (на поздних сроках).
            </p>
            <p className="mb-4">
              При подтверждённой или предполагаемой беременности с болью или кровотечением — обратитесь в клинику или вызывайте скорую. Программа <Link href={GYNEC_SERVICES.vedenie}>ведения беременности</Link> в Альтамед-С включает экстренные консультации.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Боль после полового контакта</h2>
            <p className="mb-4">
              Кратковременный дискомфорт из‑за мышечного напряжения или недостаточного увлажнения — не редкость. Если боль регулярная, интенсивная, сопровождается кровянистыми выделениями — нужен осмотр. Возможные причины: воспаление, эндометриоз, спайки, недостаточная эластичность тканей (например, после родов или при атрофии в менопаузе).
            </p>
            <p className="mb-4">
              При подозрении на патологию шейки матки врач может назначить <Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">кольпоскопию</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Может ли боль быть не гинекологической</h2>
            <p className="mb-4">
              Да. Причины вне гинекологии: аппендицит, цистит, пиелонефрит, синдром раздражённого кишечника, колит, мочекаменная болезнь, неврологические боли (корешковый синдром). Гинеколог при осмотре оценит состояние органов малого таза и при необходимости направит к терапевту, урологу или хирургу.
            </p>
          </section>

          {/* Инфографика: Как проходит консультация */}
          <section id="kak-prohodit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит консультация гинеколога</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {['Сбор жалоб и анамнеза', 'Осмотр на кресле', 'УЗИ органов малого таза (по показаниям)', 'Мазки и анализы при необходимости', 'Рекомендации и план наблюдения'].map((step, i) => (
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
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Подготовка к визиту</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'Вспомнить дату последней менструации',
                'Отметить, когда появились боли и как они менялись',
                'Взять результаты прошлых обследований',
                'Записать вопросы для врача',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700">Подробнее — <Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Объём обследования при боли внизу живота</h2>
            <p className="mb-4">
              Стандартный минимум: осмотр, мазки на флору. По показаниям — УЗИ органов малого таза (транвагинальное и/или трансабдоминальное), общий анализ крови, СРБ, ПЦР на ИППП, анализы мочи. При подозрении на эндометриоз — МРТ, лапароскопия. Объём определяет врач после сбора анамнеза и осмотра.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о боли внизу живота</h2>
            <div className="space-y-4">
              {[
                { q: 'Боль терпимая, но повторяется каждый цикл — что делать?', a: 'Записаться на приём. Регулярная боль, даже умеренная, может указывать на эндометриоз, миому, хроническое воспаление. Ранняя диагностика упрощает лечение.' },
                { q: 'Можно ли пить обезболивающее перед визитом к гинекологу?', a: 'При сильной боли — да, одна доза нестероидного противовоспалительного (ибупрофен, напроксен) допустима. Сообщите врачу, что принимали. Не отменяйте постоянно назначенные препараты без согласования.' },
                { q: 'Всегда ли при боли делают УЗИ?', a: 'Не всегда. При остром состоянии или подозрении на кисту, миому, внематочную беременность — УЗИ обычно входит в план. При типичной дисменорее без «красных флагов» врач может ограничиться осмотром и рекомендациями.' },
                { q: 'Почему нельзя ставить диагноз по симптомам из интернета?', a: 'Похожие боли бывают при десятках состояний. Без осмотра, анамнеза и при необходимости — УЗИ и анализов — невозможно отличить, например, апоплексию яичника от аппендицита или воспаление придатков от эндометриоза.' },
                { q: 'Боль в середине цикла — это норма?', a: 'Краткая (до 1–2 часов) односторонняя боль в период овуляции часто бывает нормой. Если боль сильная, длительная или сопровождается обильными выделениями — нужен осмотр.' },
              ].map((f, i) => (
                <div key={i} className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                  <dt className="font-semibold text-gray-900 mb-1">{f.q}</dt>
                  <dd className="text-gray-700 mb-0">{f.a}</dd>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Консультация гинеколога при боли внизу живота</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> приём ведут опытные гинекологи. В клинике можно пройти осмотр, УЗИ органов малого таза, сдать мазки и анализы — всё в одном месте. Два филиала в Одинцово, запись ежедневно.
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
                  <li><Link href="/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">Выделения, зуд, жжение: когда к гинекологу</Link></li>
                  <li><Link href="/articles/narushenie-menstrualnogo-tsikla">Нарушение менструального цикла</Link></li>
                  <li><Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">Как подготовиться к приёму гинеколога</Link></li>
                  <li><Link href="/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov">Когда нужно записаться к гинекологу: 10 симптомов</Link></li>
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
