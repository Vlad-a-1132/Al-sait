import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Что показывает кольпоскопия и когда её назначают | Альтамед-С',
  description: 'Что такое кольпоскопия, когда она нужна, как проходит исследование, больно ли это и что показывает обследование шейки матки.',
  openGraph: {
    title: 'Кольпоскопия: что показывает и когда назначают | Альтамед-С',
    description: 'Подробно об исследовании шейки матки и показаниях к процедуре.',
    url: 'https://altamed-c.ru/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleKolposkopiya() {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href={GYNEC_HUB_URL} className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Кольпоскопия</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Что показывает кольпоскопия и когда её назначают
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Кольпоскопия — осмотр шейки матки и влагалища под увеличением (обычно 5–40×) с помощью кольпоскопа. Позволяет увидеть изменения слизистой, невидимые при обычном осмотре, и при необходимости взять прицельную биопсию. Входит в стандарт скрининга патологии шейки матки наряду с мазком на онкоцитологию.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — устройство и виды кольпоскопии, показания по приказам Минздрава, проба с уксусной кислотой и раствором Люголя, что видит врач, подготовка, длительность, ощущения при процедуре и при биопсии.
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
                <a href="#chto-takoe" className="text-emerald-600 hover:underline py-1">Что такое кольпоскопия</a>
                <a href="#pokazaniya" className="text-emerald-600 hover:underline py-1">Показания</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Кольпоскопия" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          <section id="chto-takoe" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что такое кольпоскопия и как она устроена</h2>
            <p className="mb-4">
              Кольпоскоп — оптический прибор с осветителем, который устанавливается напротив гинекологического кресла. Врач вводит зеркало и направляет пучок света на шейку матки, рассматривая её через окуляр или видеокамеру с увеличением 5–40×. Положение пациентки — стандартное, как при обычном осмотре.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Простая и расширенная кольпоскопия</h3>
            <p className="mb-4">
              Простая — осмотр без дополнительных веществ. Расширенная — с обработкой 3% уксусной кислотой и раствором Люголя (йод). Уксусная кислота вызывает кратковременный спазм сосудов: атипичные участки выглядят белыми (ацетобелый эпителий). Йод окрашивает здоровый многослойный эпителий в коричневый цвет; участки с изменёнными клетками остаются неокрашенными. Расширенная кольпоскопия информативнее — в Альтамед-С выполняют именно её.
            </p>
          </section>

          {/* Инфографика: Когда назначают кольпоскопию */}
          <section id="pokazaniya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Показания к кольпоскопии</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Скрининг и контроль</h3>
                <p className="text-gray-700 text-sm mb-0">Мазок с атипией, ВПЧ высокого риска, эрозия/эктопия при осмотре, контактные кровянистые выделения. Контроль после лечения шейки матки.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">За 24–48 ч без половых контактов, спринцеваний, вагинальных препаратов. Оптимально — 5–12‑й день цикла. Не во время менструации.</p>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Мазок на онкоцитологию (ПАП-тест) показал атипию или другие отклонения;</li>
              <li>При визуальном осмотре видны эрозия, эктопия, лейкоплакия, подозрительные участки;</li>
              <li>Контактные кровянистые выделения (после полового акта);</li>
              <li>Выявление ВПЧ высокого онкогенного риска при сохранной цитологии;</li>
              <li>Подготовка к установке <Link href="/blog/vnutrimatochnaya-spiral-ustanovka-i-udalenie">внутриматочной спирали</Link>;</li>
              <li>Контроль после лечения (диатермокоагуляция, криодеструкция, конизация);</li>
              <li>Профилактический осмотр по рекомендации врача.</li>
            </ul>
            <p>
              По приказу Минздрава РФ кольпоскопия рекомендуется при скрининге патологии шейки матки в определённых клинических ситуациях. Точный объём обследования определяет <Link href={GYNEC_HUB_URL}>гинеколог</Link>.
            </p>
          </section>

          {/* Инфографика: Этапы процедуры */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Этапы процедуры</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Осмотр в зеркалах', 'Установка кольпоскопа', 'Простая кольпоскопия', 'Проба уксусной кислотой', 'Проба Люголем', 'Биопсия при необходимости'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что оценивает врач при кольпоскопии</h2>
            <p className="mb-4">
              Оцениваются: цвет и рельеф слизистой; сосудистый рисунок (атипичные сосуды — пунктация, мозаика); зона стыка многослойного и цилиндрического эпителия; реакция на уксусную кислоту (ацетобелый эпителий) и на йод (йоднегативные зоны). Врач фиксирует эрозию, эктопию, кисты наботовых желёз, лейкоплакию, полипы, участки, подозрительные на дисплазию.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Биопсия при кольпоскопии</h3>
            <p className="mb-4">
              Если выявлены участки, подозрительные на CIN (цервикальную интраэпителиальную неоплазию), врач берёт прицельную биопсию — маленький фрагмент ткани для гистологии. Биопсия выполняется специальными щипцами, под контролем кольпоскопа. Результат гистологии — через 7–14 дней; по нему планируют дальнейшую тактику (наблюдение, конизация и т.д.).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Подготовка, длительность, ощущения</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {['Без половых контактов за 24–48 ч', 'Без спринцеваний и вагинальных препаратов', 'Оптимально: 5–12-й день цикла', 'Диета не нужна'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Подготовка</h3>
            <p className="mb-4">
              За 24–48 часов: без половых контактов, спринцеваний, вагинальных свечей и кремов. Оптимальный день — 5–12‑й день цикла (первая половина, после месячных). Диета не нужна. Подробнее о подготовке к приёму — в статье <Link href="/blog/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Длительность</h3>
            <p className="mb-4">
              Осмотр с пробами — 10–20 минут. С биопсией — до 30 минут. Заключение врач озвучивает в тот же день; результат биопсии — через 7–14 дней.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Больно ли это</h3>
            <p className="mb-4">
              Осмотр сопоставим с обычным приёмом гинеколога. Уксусная кислота может вызвать лёгкое пощипывание в течение нескольких секунд. Биопсия — кратковременный дискомфорт или «щипок» в момент забора; иногда используют местную анестезию. Кровянистые выделения 1–3 дня после биопсии — норма.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда кольпоскопия не проводится</h2>
            <p className="mb-4">
              Во время менструации кольпоскопия не проводится: кровь закрывает обзор. Острый воспалительный процесс (кольпит) — сначала лечение, потом исследование. После биопсии — ограничения 1–2 дня (без половых контактов, спринцеваний, тампонов). При беременности кольпоскопия возможна по показаниям, но биопсия — с осторожностью.
            </p>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mt-4">
              <p className="font-semibold text-gray-900 mb-2">Когда срочно после биопсии:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> обильное кровотечение</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> температура</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> сильные боли</span>
              </div>
            </div>
          </section>

          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о кольпоскопии</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Как часто делать кольпоскопию при отсутствии изменений?</dt>
                <dd className="text-gray-700 mb-0">Обычно раз в 1–3 года в сочетании с цитологией. При выявлении CIN или ВПЧ высокого риска — чаще, по рекомендации врача.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Что значит «ацетобелый эпителий» в заключении?</dt>
                <dd className="text-gray-700 mb-0">Участки, побелевшие после обработки уксусной кислотой. Могут указывать на изменённый эпителий. Требуют оценки в комплексе с другими признаками; при подозрении — биопсия.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Кольпоскопия при беременности — безопасно?</dt>
                <dd className="text-gray-700 mb-0">Осмотр — да. Биопсию при беременности выполняют только по строгим показаниям; врач взвешивает риски.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">После биопсии идут кровянистые выделения — это норма?</dt>
                <dd className="text-gray-700 mb-0">Небольшие выделения или мазня 1–5 дней — нормально. Обильное кровотечение, температура — повод связаться с клиникой.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли делать кольпоскопию после установки ВМС?</dt>
                <dd className="text-gray-700 mb-0">Да. Спираль находится в полости матки, кольпоскопия оценивает шейку — процедуры не мешают друг другу.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Кольпоскопия в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В клинике выполняют расширенную кольпоскопию. Запись к <Link href={GYNEC_HUB_URL}>гинекологу</Link> — через сайт или по телефону <a href={PHONE_LINK} className="text-emerald-600 hover:underline">+7 (495) 255-44-50</a>. Исследование можно пройти в день первичного приёма при наличии показаний.
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
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр</Link> (кольпоскопия)</li>
                  <li><Link href={GYNEC_SERVICES.priem}>Приём гинеколога</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/blog/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">Выделения, зуд, жжение: когда к гинекологу</Link></li>
                  <li><Link href="/blog/vnutrimatochnaya-spiral-ustanovka-i-udalenie">Внутриматочная спираль: установка и удаление</Link></li>
                  <li><Link href="/blog/kak-podgotovitsya-k-priyomu-ginekologa">Как подготовиться к приёму гинеколога</Link></li>
                  <li><Link href="/blog/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov">Когда нужно записаться к гинекологу</Link></li>
                  <li><Link href="/blog/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto">Биопсия шейки матки</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
