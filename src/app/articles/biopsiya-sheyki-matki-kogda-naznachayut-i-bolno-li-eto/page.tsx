import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Биопсия шейки матки: когда назначают и больно ли это | Альтамед-С',
  description: 'Биопсия шейки матки — забор образца ткани для гистологии. Показания после кольпоскопии, как проходит, подготовка и больно ли процедура.',
  openGraph: {
    title: 'Биопсия шейки матки: когда назначают и больно ли | Альтамед-С',
    description: 'Биопсия шейки матки — показания, подготовка, как проходит и что показывают результаты.',
    url: 'https://altamed-c.ru/articles/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleBiopsiyaSheykiMatki() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={GYNEC_HUB_URL} className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Биопсия шейки матки</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Биопсия шейки матки: когда назначают и больно ли это
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Биопсия шейки матки — забор небольшого фрагмента ткани с подозрительного участка для гистологического исследования. Это следующий шаг после кольпоскопии и мазка на онкоцитологию, когда нужно уточнить характер изменений.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — когда назначают биопсию, как она проходит, больно ли это, как подготовиться и что означают результаты.
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
                <a href="#kogda" className="text-emerald-600 hover:underline py-1">Когда назначают</a>
                <a href="#procedura" className="text-emerald-600 hover:underline py-1">Как проходит</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Биопсия шейки матки" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Когда назначают */}
          <section id="kogda" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда назначают биопсию</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">После кольпоскопии</h3>
                <p className="text-gray-700 text-sm mb-0">Атипичные участки, ацетобелый эпителий, йоднегативные зоны — прицельный забор для гистологии.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">Первая половина цикла; за 2 дня — без половых контактов, спринцеваний, вагинальных препаратов; мазки на флору в норме.</p>
              </div>
            </div>
            <p className="mb-4">
              Биопсию назначают, если при <Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">кольпоскопии</Link> или по результатам мазка на онкоцитологию выявлены изменения, требующие уточнения. Например: атипичные участки при кольпоскопии, ASC-US, LSIL, HSIL в цитологии, подозрительные полипы, лейкоплакия.
            </p>
            <p className="mb-4">
              Биопсия даёт точный диагноз — доброкачественные изменения, дисплазия (предрак) разной степени, рак. От этого зависит дальнейшая тактика: наблюдение, лечение шейки матки, консультация онколога.
            </p>
          </section>

          {/* Инфографика: Этапы процедуры */}
          <section id="procedura" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит процедура</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Осмотр и кольпоскопия', 'Выбор участка для забора', 'Забор материала (щипцы/нож/радиоволна)', 'Обработка участка', 'Результат через 7–14 дней'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Биопсию выполняют под контролем кольпоскопа. Врач выбирает участок (или несколько) для забора. Методы: ножевая биопсия (иссечение скальпелем), радиоволновая (аппарат «Сургитрон» и аналоги), пункционная (специальными щипцами). Объём и метод выбирает врач.
            </p>
            <p className="mb-4">
              Процедура занимает 10–20 минут. Шейка матки малочувствительна — многие женщины отмечают скорее дискомфорт, чем боль. При необходимости применяют местную анестезию. После забора материала возможны необильные кровянистые выделения 3–7 дней.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Подготовка</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {['Первая половина цикла (после месячных)', 'Без половых контактов за 2 дня', 'Без спринцеваний и вагинальных препаратов', 'Мазки на флору в норме'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Биопсию проводят в первой половине цикла (после месячных, до овуляции). За 2 дня — без половых контактов, спринцеваний, вагинальных препаратов. Мазки на флору должны быть в норме; при воспалении сначала проводят лечение.
            </p>
            <p className="mb-4">
              О подготовке к гинекологическим процедурам — в статье <Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">После биопсии</h2>
            <p className="mb-4">
              Рекомендации: 2–4 недели без половых контактов, тампонов, посещения бани, бассейна, интенсивных физических нагрузок. Следующую менструацию обычно разрешают.
            </p>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mt-4">
              <p className="font-semibold text-gray-900 mb-2">Когда срочно после биопсии:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> обильное кровотечение</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> температура</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> сильные боли внизу живота</span>
              </div>
            </div>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о биопсии шейки матки</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Больно ли делать биопсию?</dt>
                <dd className="text-gray-700 mb-0">Шейка матки содержит мало болевых рецепторов. Большинство женщин описывают ощущения как дискомфорт или кратковременную тянущую боль. При необходимости используют местную анестезию.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Сколько ждать результат?</dt>
                <dd className="text-gray-700 mb-0">Гистологическое исследование занимает обычно 7–14 дней. Результат выдаёт врач на приёме с рекомендациями.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Обязательно ли делать биопсию при изменённых результатах мазка?</dt>
                <dd className="text-gray-700 mb-0">Решение принимает врач. При некоторых результатах цитологии достаточно повторного мазка и кольпоскопии. При подозрении на дисплазию или более серьёзные изменения биопсия — стандартный этап диагностики.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Биопсия и кольпоскопия в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят кольпоскопию и биопсию шейки матки. Запись на приём к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link> — онлайн и по телефону.
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
                  <li><Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
                  <li><Link href="/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut">Что показывают мазки у гинеколога</Link></li>
                  <li><Link href="/articles/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury">Радиоволновая биопсия шейки матки</Link></li>
                  <li><Link href="/articles/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya">Лечение заболеваний шейки матки</Link></li>
                  <li><Link href="/articles/kriodestrukciya-sheyki-matki-kogda-primenyaetsya-i-chto-vazhno-znat">Криодеструкция шейки матки</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
