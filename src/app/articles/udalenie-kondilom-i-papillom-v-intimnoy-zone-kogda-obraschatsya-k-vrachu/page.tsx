import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Удаление кондилом и папиллом в интимной зоне: когда обращаться к врачу | Альтамед-С',
  description: 'Кондиломы и папилломы в интимной зоне: причины ВПЧ, когда нужно удаление, как проходит процедура и почему важно обратиться к гинекологу.',
  openGraph: {
    title: 'Удаление кондилом и папиллом в интимной зоне | Альтамед-С',
    description: 'Когда обращаться к врачу при кондиломах и папилломах, как проходит удаление.',
    url: 'https://altamed-c.ru/articles/udalenie-kondilom-i-papillom-v-intimnoy-zone-kogda-obraschatsya-k-vrachu',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/udalenie-kondilom-i-papillom-v-intimnoy-zone-kogda-obraschatsya-k-vrachu' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticleUdalenieKondilomIPapillom() {
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
            <span className="text-gray-900 font-medium">Удаление кондилом и папиллом</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Удаление кондилом и папиллом в интимной зоне: когда обращаться к врачу
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Кондиломы и папилломы — образования на коже и слизистых, вызванные вирусом папилломы человека (ВПЧ). В интимной зоне они появляются на половых губах, во влагалище, на шейке матки, в промежности. Могут вызывать дискомфорт, кровоточить при травме, беспокоить косметически. Часть типов ВПЧ связана с риском изменений шейки матки.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — когда обращаться к врачу, как проходит удаление и что важно знать после процедуры.
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
                <a href="#obrashchatsya" className="text-emerald-600 hover:underline py-1">Когда обращаться</a>
                <a href="#metody" className="text-emerald-600 hover:underline py-1">Методы удаления</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['udalenie-kondilom-i-papillom-v-intimnoy-zone-kogda-obraschatsya-k-vrachu'] ?? '/images/images allergoly/ginokologia.webp'} alt="Удаление кондилом и папиллом" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Когда обращаться и подготовка</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда назначают удаление</h3>
                <p className="text-gray-700 text-sm mb-0">Бородавчатые выросты, «цветная капуста», уплотнения в интимной зоне. Даже без дискомфорта нужен осмотр — мазок на онкоцитологию, кольпоскопия.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">Осмотр, мазки. Оптимально — первая половина цикла. За 1–2 дня без половых контактов, спринцеваний.</p>
              </div>
            </div>
          </section>

          <section id="obrashchatsya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда обращаться</h2>
            <p className="mb-4">
              Обратитесь к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>, если заметили бородавчатые выросты, «цветную капусту», мелкие уплотнения в интимной зоне. Даже при отсутствии дискомфорта важно пройти осмотр — врач оценит распространённость, возьмёт мазок на онкоцитологию, при необходимости назначит кольпоскопию и определит тактику лечения.
            </p>
            <p className="mb-4">
              Не удаляйте кондиломы самостоятельно — это опасно кровотечением, инфицированием и неправильной диагностикой.
            </p>
          </section>

          <section id="metody" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Методы удаления</h2>
            <p className="mb-4">
              Радиоволновой метод (аппарат «Сургитрон»), лазер, криодеструкция, электрокоагуляция. Выбор зависит от количества, размера, локализации. При множественных кондиломах иногда сочетают удаление с противовирусной терапией. Подробнее о радиоволновом методе — в статье <Link href="/articles/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury">«Радиоволновая биопсия шейки матки»</Link>.
            </p>
          </section>

          {/* Этапы процедуры */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Этапы процедуры</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Осмотр и оценка образований', 'Местная анестезия (при необходимости)', 'Удаление (радиоволна, лазер, крио)', 'Обработка участка', 'Гистология при необходимости'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Удаление проводят амбулаторно. При единичных небольших образованиях — под местной анестезией или без неё. При обширных — может потребоваться более длительная процедура. Материал при необходимости отправляют на гистологию.
            </p>
          </section>

          {/* Что взять / подготовка */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что взять / подготовка</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {['Результаты осмотра и мазков', 'Первая половина цикла', 'За 1–2 дня без половых контактов', 'Свободное бельё'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">После удаления</h2>
            <p className="mb-4">
              Заживление — 1–2 недели. Рекомендуют избегать половых контактов, тесного белья, раздражающих средств до заживления. ВПЧ остаётся в организме — возможны рецидивы. Регулярный осмотр и мазок на онкоцитологию помогут контролировать состояние.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о кондиломах и папилломах</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">ВПЧ и рак шейки матки — есть связь?</dt>
                <dd className="text-gray-700 mb-0">Часть типов ВПЧ (16, 18 и др.) — фактор риска изменений шейки матки. Не все носители ВПЧ заболевают. Регулярный мазок на онкоцитологию и кольпоскопия по показаниям снижают риски.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Нужно ли лечить партнёра?</dt>
                <dd className="text-gray-700 mb-0">ВПЧ передаётся половым путём. Партнёру рекомендуют осмотр уролога/дерматовенеролога при наличии проявлений. Обязательность лечения для партнёра врач определяет индивидуально.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Удаление кондилом в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят удаление остроконечных кондилом, папиллом и полипов в интимной зоне. Запись к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link> — онлайн и по телефону.
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
                  <li><Link href="/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut">Что показывают мазки у гинеколога</Link></li>
                  <li><Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
                  <li><Link href="/articles/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya">Лечение заболеваний шейки матки</Link></li>
                  <li><Link href="/articles/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury">Радиоволновая биопсия шейки матки</Link></li>
                  <li><Link href="/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">Выделения, зуд, жжение: когда к гинекологу</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
