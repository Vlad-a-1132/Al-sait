import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Выделения, зуд, жжение: когда нужно идти к гинекологу | Альтамед-С',
  description: 'Когда выделения, зуд и жжение требуют консультации гинеколога, какие симптомы нельзя игнорировать и почему не стоит заниматься самолечением.',
  openGraph: {
    title: 'Выделения, зуд, жжение: когда к гинекологу | Альтамед-С',
    description: 'Какие изменения выделений, зуд и жжение требуют визита к гинекологу.',
    url: 'https://altamed-c.ru/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['vydeleniya-zud-zhzhenie-kogda-k-ginekologu'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleVydeleniyaZudZhzhenie() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={GYNEC_HUB_URL} className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Выделения, зуд, жжение</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Выделения, зуд, жжение: когда нужно обратиться к гинекологу
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Вагинальные выделения — нормальное явление: железы продуцируют слизь для увлажнения и защиты. В норме выделения прозрачные или беловатые, без резкого запаха, количество может меняться в течение цикла. Но изменение цвета, консистенности, запаха, появление зуда или жжения — сигнал для консультации.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — какие выделения считаются нормой, по каким признакам понять, что пора к врачу, что такое бактериальный вагиноз и молочница, почему самолечение опасно, какие анализы назначают и как подготовиться к приёму.
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
                <a href="#norma" className="text-emerald-600 hover:underline py-1">Норма выделений</a>
                <a href="#kandidoz" className="text-emerald-600 hover:underline py-1">Кандидоз</a>
                <a href="#kak-prohodit" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#srochno" className="text-emerald-600 hover:underline py-1">Когда срочно</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Выделения, зуд, жжение" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Норма выделений и когда нужен врач</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Нормальная картина</h3>
                    <p className="text-gray-700 text-sm mb-0">Прозрачные или беловатые выделения без запаха, объём меняется в цикле. Лёгкий кисловатый запах и чуть молочный цвет — допустимы.</p>
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
                    <p className="text-gray-700 text-sm mb-0">Жёлтые, зелёные, творожистые выделения; рыбный или резкий запах; зуд, жжение; кровянистые вне менструации. Не лечитесь «свечами от молочницы» без мазка.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="norma" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие выделения — норма</h2>
            <p className="mb-4">
              Прозрачные или беловатые, однородные или слегка тягучие, без запаха или с лёгким кисловатым. Объём меняется: больше в середине цикла (овуляция), перед месячными, при возбуждении. Цвет может быть чуть молочным — это не патология.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Что должно насторожить</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Цвет: жёлтый, зелёный, серый, творожистый белый;</li>
              <li>Запах: рыбный, кислый, резкий, неприятный;</li>
              <li>Консистенция: творожистая, пенистая, обильная водянистая;</li>
              <li>Объём: резкое увеличение;</li>
              <li>Зуд, жжение, отёк, покраснение;</li>
              <li>Кровянистые выделения вне менструации.</li>
            </ul>
            <p className="mb-4">
              Сравнивайте с вашей обычной нормой. У каждой женщины свой «фон» — важно замечать отклонения.
            </p>
          </section>

          {/* Инфографика: Как проходит консультация */}
          <section id="kak-prohodit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит консультация</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {['Сбор жалоб и анамнеза', 'Осмотр на кресле', 'Мазок на флору и при необходимости ПЦР', 'Оценка результатов', 'Назначение лечения по диагнозу'].map((step, i) => (
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
                'За 24–48 ч: без половых контактов',
                'Без спринцеваний и вагинальных препаратов',
                'Идти лучше в период обострения (мазок информативнее)',
                'Взять результаты прошлых анализов',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700">Подробнее — <Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.</p>
          </section>

          <section id="kandidoz" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Творожистые выделения и зуд: кандидоз</h2>
            <p className="mb-4">
              Классическая картина «молочницы»: белые творожистые выделения, зуд, жжение, иногда отёк. Возбудитель — грибы рода Candida. Провоцирующие факторы: антибиотики, стресс, снижение иммунитета, беременность, избыток сладкого.
            </p>
            <p className="mb-4">
              Похожие симптомы бывают при смешанных инфекциях (кандида + бактерии) и других состояниях. Без мазка легко ошибиться: «стандартные» свечи от молочницы могут не помочь при бактериальном вагинозе или ИППП. Врач возьмёт мазок на флору, при необходимости — ПЦР, и подберёт лечение.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Рыбный запах и жидкие выделения: бактериальный вагиноз</h2>
            <p className="mb-4">
              Сероватые или беловатые жидкие выделения с характерным «рыбным» запахом (усиливается после полового акта или в конце менструации). Зуд не обязателен. Причина — дисбаланс микрофлоры: уменьшение лактобацилл, рост анаэробных бактерий.
            </p>
            <p className="mb-4">
              Лечение — антибактериальные препараты (местно или внутрь) по назначению врача. Спринцевание содой или «народные» методы не восстанавливают флору и могут усугубить дисбаланс.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Зуд и жжение без выраженных выделений</h2>
            <p className="mb-4">
              Причины разнообразны: аллергия на бельё, средства гигиены, стиральный порошок, лубриканты; атрофия слизистой в менопаузе (сухость, истончение); контактный дерматит; недостаточная гигиена или, наоборот, чрезмерное подмывание с мылом. Иногда зуд — единственный симптом инфекции на ранней стадии.
            </p>
            <p className="mb-4">
              Осмотр и мазок помогают отличить инфекцию от аллергии или атрофии. При атрофии может потребоваться консультация <Link href={GYNEC_SERVICES.priem}>гинеколога</Link> и местные эстрогены.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Выделения и дискомфорт после полового контакта</h2>
            <p className="mb-4">
              Если после интимной близости появляются зуд, жжение, необычные выделения — возможны: инфекция (в т.ч. ИППП), аллергия на презерватив или лубрикант, недостаточное увлажнение (механическое раздражение), обострение хронического воспаления. Партнёр может быть носителем инфекции без симптомов — при некоторых ИППП лечат обоих.
            </p>
            <p className="mb-4">
              Врач проведёт осмотр, возьмёт мазки, при необходимости — ПЦР на хламидии, гонорею, трихомониаз, микоплазму. По результатам подберёт терапию и уточнит, нужно ли лечение партнёра.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Почему нельзя лечиться «свечами от молочницы» без осмотра</h2>
            <p className="mb-4">
              Антимикотики (от грибка) не действуют на бактериальный вагиноз и ИППП. Наоборот: длительное использование «на всякий случай» нарушает флору и может привести к рецидивам. Спринцевание, сода, кефир — не лечат причину и вымывают полезные бактерии.
            </p>
            <p className="mb-4">
              Самолечение смазывает картину: после «лечения» мазок может быть неинформативен, а симптомы вернутся. Грамотная тактика: осмотр → мазок на флору → при необходимости ПЦР, бакпосев → целенаправленное лечение по результатам.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие анализы назначают</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Мазок на флору</strong> — лейкоциты, эритроциты, состав микрофлоры, ключевые клетки (при БВ), грибы;</li>
              <li><strong>ПЦР на ИППП</strong> — хламидии, гонококк, трихомонада, микоплазмы, уреаплазмы (по показаниям);</li>
              <li><strong>Бакпосев</strong> — при рецидивирующих инфекциях или неэффективности лечения;</li>
              <li><strong>pH влагалища</strong> — при подозрении на БВ (pH &gt; 4,5).</li>
            </ul>
            <p className="mb-4">
              За 24–48 часов до приёма не использовать свечи, кремы, спринцевания и не иметь половых контактов — иначе мазок будет искажён. Подробнее о подготовке — в статье <Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.
            </p>
          </section>

          <section id="srochno" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда обращаться срочно</h2>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Не откладывайте визит при:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> температура на фоне выделений и/или боли</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> резкое увеличение объёма выделений</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> сильный зуд с повреждением кожи</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> боль внизу живота</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> беременность с необычными выделениями</div>
              </div>
            </div>
            <p className="mb-4">
              Температура на фоне выделений и/или боли; резкое увеличение объёма выделений; сильный зуд с повреждением кожи; боль внизу живота; беременность с необычными выделениями. В таких случаях не ждите «удобного» дня — запишитесь на ближайшее время.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о выделениях и зуде</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли идти к гинекологу во время обострения?</dt>
                <dd className="text-gray-700 mb-0">Да. Обострение — оптимальное время для забора мазков: картина наиболее информативна. Не откладывайте визит «до улучшения».</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Нужно ли лечить партнёра при молочнице?</dt>
                <dd className="text-gray-700 mb-0">При рецидивирующей молочнице иногда рекомендуют лечение партнёра (местно). При бактериальном вагинозе — обычно нет. При ИППП — обязательно обоим. Врач даст точные рекомендации.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Помогает ли спринцевание ромашкой или содой?</dt>
                <dd className="text-gray-700 mb-0">Нет. Спринцевание нарушает pH и вымывает лактобациллы, ухудшая микрофлору. Может «смазать» симптомы перед приёмом и исказить мазок.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Выделения изменились после приёма антибиотиков — это молочница?</dt>
                <dd className="text-gray-700 mb-0">Часто да: антибиотики подавляют бактерии, грибы получают преимущество. Но возможен и бактериальный вагиноз. Мазок уточнит диагноз.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Зуд есть, а выделений почти нет — к кому идти?</dt>
                <dd className="text-gray-700 mb-0">К гинекологу. Причины: атрофия, аллергия, начальная стадия инфекции. Врач проведёт осмотр и при необходимости направит к дерматологу.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Приём гинеколога при выделениях и зуде</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно записаться на приём, сдать мазки и при необходимости — ПЦР. Анализы выполняются в лаборатории клиники. Результаты — в кратчайшие сроки.
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
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/bol-vnizu-zhivota-u-zhenshchin-prichiny">Боль внизу живота у женщин</Link></li>
                  <li><Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">Как подготовиться к приёму гинеколога</Link></li>
                  <li><Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
                  <li><Link href="/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut">Что показывают мазки у гинеколога</Link></li>
                  <li><Link href="/articles/vaginit-simptomy-prichiny-i-kogda-nuzhna-konsultatsiya-ginekologa">Вагинит: симптомы и когда нужна консультация</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
