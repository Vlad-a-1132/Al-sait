import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Радиоволновая биопсия шейки матки: особенности процедуры | Альтамед-С',
  description: 'Радиоволновая биопсия шейки матки аппаратом Сургитрон: как проходит, преимущества, подготовка и что важно знать после процедуры.',
  openGraph: {
    title: 'Радиоволновая биопсия шейки матки | Альтамед-С',
    description: 'Радиоволновая биопсия — особенности процедуры, подготовка и реабилитация.',
    url: 'https://altamed-c.ru/blog/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticleRadiovolnovayaBiopsiyaSheykiMatki() {
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
            <span className="text-gray-900 font-medium">Радиоволновая биопсия</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Радиоволновая биопсия шейки матки: особенности процедуры
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Радиоволновая биопсия — забор образца ткани шейки матки с помощью радиоволнового ножа (аппараты «Сургитрон» и аналоги). Радиоволна режет ткань без механического давления, «запаивает» мелкие сосуды и меньше травмирует окружающие ткани по сравнению с обычным скальпелем.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — как проходит радиоволновая биопсия, каковы преимущества, как подготовиться и что важно знать после процедуры.
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
                <a href="#naznachayut" className="text-emerald-600 hover:underline py-1">Когда назначают</a>
                <a href="#procedura" className="text-emerald-600 hover:underline py-1">Как проходит</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury'] ?? '/images/images allergoly/ginokologia.webp'} alt="Радиоволновая биопсия шейки матки" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          <section id="naznachayut" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Когда назначают и подготовка</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда назначают</h3>
                <p className="text-gray-700 text-sm mb-0">Изменения по кольпоскопии и мазку; уточнение диагноза; удаление полипов, кондилом; лечение дисплазии.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">Первая половина цикла; мазки на флору в норме; за 2 дня — без половых контактов, спринцеваний, вагинальных препаратов.</p>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда назначают</h2>
            <p className="mb-4">
              Радиоволновую биопсию выполняют при изменениях по результатам <Link href="/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">кольпоскопии</Link> и мазка на онкоцитологию — для уточнения диагноза. Также радиоволновой метод используют для удаления полипов, кондилом, лечения дисплазии. Подробнее о биопсии — в статье <Link href="/blog/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto">«Биопсия шейки матки»</Link>.
            </p>
          </section>

          {/* Этапы процедуры */}
          <section id="procedura" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Этапы процедуры</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Осмотр и кольпоскопия', 'Выбор участка для забора', 'Иссечение радиоволновой петлёй', 'Отправка материала на гистологию', 'Результат через 7–14 дней'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Процедуру проводят под контролем кольпоскопа. Врач выбирает участок для забора и иссекает его радиоволновой петлёй или электродом. Длительность — 10–20 минут. Шейка матки малоболезненна — многие женщины чувствуют только дискомфорт. При необходимости применяют местную анестезию.
            </p>
            <p className="mb-4">
              Материал отправляют на гистологию. Результат — через 7–14 дней.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Преимущества радиоволнового метода</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Меньше кровотечений — радиоволна коагулирует сосуды;</li>
              <li>Точное иссечение — минимальное повреждение соседних тканей;</li>
              <li>Быстрое заживление по сравнению с ножевой биопсией;</li>
              <li>Сниженный риск рубцевания.</li>
            </ul>
          </section>

          {/* Подготовка — инфографика */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что взять / подготовка</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {['Первая половина цикла (после месячных)', 'Мазки на флору в норме', 'За 2 дня без половых контактов', 'Результаты кольпоскопии и мазка'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">После процедуры</h2>
            <p className="mb-4">
              2–4 недели без половых контактов, тампонов, бани, бассейна. Возможны кровянистые или сукровичные выделения 5–10 дней.
            </p>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mt-4">
              <p className="font-semibold text-gray-900 mb-2">Когда срочно после процедуры:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> обильное кровотечение</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> температура</span>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Радиоволновая биопсия в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят радиоволновую биопсию и другие методы лечения шейки матки. Запись к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link> — онлайн и по телефону.
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
                  <li><Link href="/blog/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto">Биопсия шейки матки</Link></li>
                  <li><Link href="/blog/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya">Лечение заболеваний шейки матки</Link></li>
                  <li><Link href="/blog/udalenie-kondilom-i-papillom-v-intimnoy-zone-kogda-obraschatsya-k-vrachu">Удаление кондилом и папиллом</Link></li>
                  <li><Link href="/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
                  <li><Link href="/blog/kriodestrukciya-sheyki-matki-kogda-primenyaetsya-i-chto-vazhno-znat">Криодеструкция шейки матки</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
