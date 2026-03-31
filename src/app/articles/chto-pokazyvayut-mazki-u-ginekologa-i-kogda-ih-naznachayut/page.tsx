import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Что показывают мазки у гинеколога и когда их назначают | Альтамед-С',
  description: 'Мазки на флору и онкоцитологию: что исследуют, когда назначают, как подготовиться. Зачем нужна кольпоскопия и когда мазки недостаточно.',
  openGraph: {
    title: 'Мазки у гинеколога: что показывают и когда назначают | Альтамед-С',
    description: 'Мазки на флору и онкоцитологию — зачем нужны, как подготовиться и когда обращаться.',
    url: 'https://altamed-c.ru/blog/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleMazkiUGinekologa() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={GYNEC_HUB_URL} className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Мазки у гинеколога</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Что показывают мазки у гинеколога и когда их назначают
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Мазки — стандартный метод диагностики в гинекологии. Врач берёт материал с поверхности шейки матки, из канала шейки и влагалища для исследования. Разные виды мазков решают разные задачи: оценка микрофлоры, выявление воспаления, скрининг изменений клеток шейки матки.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — какие мазки бывают, когда их назначают, что показывают результаты, как подготовиться и почему мазок иногда дополняют кольпоскопией или другими исследованиями.
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
                <a href="#vidy" className="text-emerald-600 hover:underline py-1">Виды мазков</a>
                <a href="#podgotovka" className="text-emerald-600 hover:underline py-1">Подготовка</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Мазки у гинеколога" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Когда назначают + Подготовка */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Когда назначают мазки и подготовка</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда назначают</h3>
                <p className="text-gray-700 text-sm mb-0">Жалобы на выделения, зуд; профилактический осмотр; онкоцитология — раз в год при половой жизни; перед операциями, при подготовке к беременности.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">За 1–2 дня без половых контактов, спринцеваний, вагинальных препаратов. Оптимально — 5–12-й день цикла, не во время менструации.</p>
              </div>
            </div>
          </section>

          <section id="vidy" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие мазки берёт гинеколог</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Мазок на флору</strong> — оценка состава микрофлоры влагалища, лейкоцитов (признак воспаления), наличие грибов, бактерий. Назначают при жалобах на выделения, зуд, при профилактическом осмотре;</li>
              <li><strong>Мазок на онкоцитологию (ПАП-тест)</strong> — выявление изменений клеток шейки матки. Скрининг предраковых состояний и рака шейки матки. Рекомендуют не реже раза в год при половой жизни;</li>
              <li><strong>Мазок на ИППП (ПЦР)</strong> — обнаружение возбудителей инфекций (хламидии, гонококк, трихомонады, микоплазмы и др.) по показаниям.</li>
            </ul>
            <p className="mb-4">
              Мазки на флору и онкоцитологию часто берут одновременно — на одном приёме. Процедура занимает несколько секунд и почти не ощущается.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда назначают мазки</h2>
            <p className="mb-4">
              Мазок на флору назначают при жалобах на выделения, зуд, жжение, при профилактическом осмотре, перед плановыми операциями, при подготовке к беременности. Подробнее — в статье <Link href="/blog/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">«Выделения, зуд, жжение: когда к гинекологу»</Link>.
            </p>
            <p className="mb-4">
              Мазок на онкоцитологию входит в стандарт <Link href={GYNEC_SERVICES.profilaktika}>профилактического осмотра</Link> — рекомендуется раз в год при половой жизни. При изменениях в мазке врач может назначить <Link href="/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">кольпоскопию</Link> для детального осмотра шейки матки.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что показывают результаты</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Мазок на флору</h3>
            <p className="mb-4">
              Лаборант оценивает степень чистоты (I–IV), количество лейкоцитов, наличие палочек Додерлейна (лактобацилл), дрожжеподобных грибов, кокков, ключевых клеток. Повышенные лейкоциты — признак воспаления. Нарушение соотношения микрофлоры — бактериальный вагиноз или инфекция.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Мазок на онкоцитологию</h3>
            <p className="mb-4">
              Результат описывают по системе Bethesda или цитологическому заключению. NILM — норма. ASC-US, LSIL, HSIL — изменения разной степени, требующие дообследования (часто кольпоскопия, при необходимости биопсия). Врач объяснит значение результата и план действий.
            </p>
          </section>

          {/* Этапы забора */}
          <section id="kak-prohodit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит забор мазков</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {['Осмотр на кресле', 'Введение зеркала', 'Забор с шейки, канала, влагалища', 'Нанесение на стекло / в пробирку', 'Результат через 1–3 дня'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Подготовка — инфографика */}
          <section id="podgotovka" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как подготовиться</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'За 1–2 дня без половых контактов',
                'Без спринцеваний и вагинальных средств',
                'Оптимально: 5–12-й день цикла',
                'Не во время менструации',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              За 1–2 дня до визита воздержаться от половых контактов, спринцеваний, влагалищных свечей и кремов. Оптимально — не во время менструации. Лучше — первая половина цикла (5–12-й день). Подробнее о подготовке — в статье <Link href="/blog/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда мазка недостаточно</h2>
            <p className="mb-4">
              При изменениях в мазке на онкоцитологию или подозрительных участках на шейке матки врач назначает кольпоскопию — осмотр под увеличением. При необходимости — биопсию. Для оценки состояния полости матки и эндометрия может потребоваться УЗИ или пайпель-биопсия.
            </p>
            <p className="mb-4">
              Мазки — важный, но не единственный инструмент. Объём обследования определяет <Link href={GYNEC_SERVICES.priem}>гинеколог</Link> по результатам осмотра и анамнеза.
            </p>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о мазках</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Больно ли сдавать мазки?</dt>
                <dd className="text-gray-700 mb-0">Забор материала практически безболезненный. Ощущается лёгкий дискомфорт при прикосновении инструмента — секунды.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Как часто сдавать мазок на онкоцитологию?</dt>
                <dd className="text-gray-700 mb-0">При половой жизни — не реже раза в год. При наличии факторов риска или изменений в анамнезе врач может рекомендовать чаще.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли брать мазки при беременности?</dt>
                <dd className="text-gray-700 mb-0">Да. Мазок на флору и онкоцитологию при необходимости берут и при беременности — это безопасно.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Сколько ждать результат?</dt>
                <dd className="text-gray-700 mb-0">Обычно 1–3 рабочих дня. Сроки уточняйте в лаборатории клиники.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Мазки и осмотр в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно записаться на приём гинеколога, пройти осмотр и сдать мазки. При необходимости — кольпоскопию. Результаты — в кратчайшие сроки.
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
                  <li><Link href="/blog/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">Выделения, зуд, жжение: когда к гинекологу</Link></li>
                  <li><Link href="/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
                  <li><Link href="/blog/kak-podgotovitsya-k-priyomu-ginekologa">Как подготовиться к приёму гинеколога</Link></li>
                  <li><Link href="/blog/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto">Биопсия шейки матки</Link></li>
                  <li><Link href="/blog/bol-vnizu-zhivota-u-zhenshchin-prichiny">Боль внизу живота у женщин</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
