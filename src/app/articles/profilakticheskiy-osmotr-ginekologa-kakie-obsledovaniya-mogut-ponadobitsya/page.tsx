import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Профилактический осмотр у гинеколога: какие обследования могут понадобиться | Альтамед-С',
  description: 'Профилактический осмотр гинеколога: мазки, кольпоскопия, УЗИ — какие обследования входят в стандарт и когда нужны дополнительные.',
  openGraph: {
    title: 'Профилактический осмотр: какие обследования | Альтамед-С',
    description: 'Какие обследования входят в профилактический осмотр гинеколога.',
    url: 'https://altamed-c.ru/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticleProfilakticheskiyOsmotrObsledovaniya() {
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
            <span className="text-gray-900 font-medium">Профилактический осмотр</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Профилактический осмотр у гинеколога: какие обследования могут понадобиться
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Профилактический осмотр — залог раннего выявления изменений и спокойствия за своё здоровье. Стандартный объём включает беседу, осмотр в зеркалах, мазки. При показаниях врач назначает кольпоскопию, УЗИ и другие исследования.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — какие обследования входят в профилактический осмотр, когда нужны дополнительные и как часто проходить осмотр.
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
                <a href="#obyem" className="text-emerald-600 hover:underline py-1">Стандартный объём</a>
                <a href="#kolposkopiya" className="text-emerald-600 hover:underline py-1">Кольпоскопия</a>
                <a href="#chasto" className="text-emerald-600 hover:underline py-1">Как часто</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya'] ?? '/images/images allergoly/ginokologia.webp'} alt="Профилактический осмотр гинеколога" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Стандарт и частота */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Стандартный объём и подготовка</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Стандартный объём</h3>
                <p className="text-gray-700 text-sm mb-0">Беседа, осмотр в зеркалах, мазок на флору, мазок на онкоцитологию. При показаниях — кольпоскопия, УЗИ.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">Раз в год при половой жизни. За 24–48 ч без половых контактов, спринцеваний. Оптимально — первая половина цикла.</p>
              </div>
            </div>
          </section>

          <section id="obyem" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Этапы профилактического осмотра</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Беседа (жалобы, цикл, контрацепция)', 'Осмотр в зеркалах', 'Мазок на флору', 'Мазок на онкоцитологию', 'Рекомендации'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Стандартный объём осмотра</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Беседа</strong> — жалобы, цикл, контрацепция, дата последнего осмотра;</li>
              <li><strong>Осмотр в зеркалах</strong> — оценка шейки матки, слизистых;</li>
              <li><strong>Мазок на флору</strong> — воспаление, микрофлора;</li>
              <li><strong>Мазок на онкоцитологию</strong> — скрининг изменений шейки матки (раз в год при половой жизни).</li>
            </ul>
            <p className="mb-4">
              Подробнее о мазках — в статье <Link href="/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut">«Что показывают мазки у гинеколога»</Link>.
            </p>
          </section>

          <section id="kolposkopiya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда назначают кольпоскопию</h2>
            <p className="mb-4">
              Кольпоскопию назначают при изменениях в мазке на онкоцитологию, видимых изменениях на шейке матки, отягощённом анамнезе (ВПЧ, дисплазия в прошлом). Подробнее — в статье <Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">«Что показывает кольпоскопия»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда назначают УЗИ</h2>
            <p className="mb-4">
              УЗИ органов малого таза — при жалобах на боли, нарушения цикла, подозрении на миому, кисты яичников, при подготовке к беременности. При профилактическом осмотре без жалоб УЗИ может не потребоваться — вопрос решает врач.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Дополнительные анализы</h2>
            <p className="mb-4">
              ПЦР на ИППП — при рисках или планировании беременности. Гормоны — при нарушениях цикла, направлении к гинекологу-эндокринологу. Общий анализ крови и мочи — по показаниям.
            </p>
          </section>

          <section id="chasto" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как часто проходить осмотр</h2>
            <p className="mb-4">
              Рекомендуют не реже раза в год при половой жизни. При наличии факторов риска или хронических заболеваний — чаще. Подробнее о профилактическом осмотре — на странице услуги <Link href={GYNEC_SERVICES.profilaktika}>«Профилактический осмотр гинеколога»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как подготовиться</h2>
            <p className="mb-4">
              За 1–2 дня — без половых контактов, спринцеваний, влагалищных препаратов. Оптимально — первая половина цикла (5–12-й день). Не во время менструации. Подробнее — в статье <Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.
            </p>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Профилактический осмотр в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно записаться на <Link href={GYNEC_SERVICES.profilaktika}>профилактический осмотр</Link>. Мазки, кольпоскопия, УЗИ — в одном месте. Запись — онлайн и по телефону.
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
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр гинеколога</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut">Что показывают мазки у гинеколога</Link></li>
                  <li><Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
                  <li><Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">Как подготовиться к приёму гинеколога</Link></li>
                  <li><Link href="/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov">Когда нужно записаться к гинекологу</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
