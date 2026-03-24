import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Внутриматочная спираль: установка и удаление | Альтамед-С',
  description: 'Кому подходит внутриматочная спираль, как проходит установка и удаление ВМС, больно ли это и когда нужна консультация гинеколога.',
  openGraph: {
    title: 'Внутриматочная спираль: установка и удаление | Альтамед-С',
    description: 'ВМС: кому подходит, как устанавливают и удаляют.',
    url: 'https://altamed-c.ru/articles/vnutrimatochnaya-spiral-ustanovka-i-udalenie',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/vnutrimatochnaya-spiral-ustanovka-i-udalenie' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticleVnutrimatochnayaSpiral() {
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
            <span className="text-gray-900 font-medium">Внутриматочная спираль</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Внутриматочная спираль: установка и удаление
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Внутриматочная спираль (ВМС) — метод обратимой контрацепции с эффективностью более 99%. Один раз установленная спираль работает 3–7 лет (в зависимости от типа), не требуя ежедневного контроля. Подходит женщинам со стабильными отношениями и отсутствием противопоказаний.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — типы ВМС (медьсодержащие и гормональные), кому подходит и противопоказания, этапы установки и удаления, подготовка, ощущения, контроль после установки и когда обращаться к врачу.
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
                <a href="#tipy" className="text-emerald-600 hover:underline py-1">Типы ВМС</a>
                <a href="#ustanovka" className="text-emerald-600 hover:underline py-1">Установка</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['vnutrimatochnaya-spiral-ustanovka-i-udalenie'] ?? '/images/images allergoly/ginokologia.webp'} alt="Внутриматочная спираль" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Когда устанавливают и подготовка</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда назначают</h3>
                <p className="text-gray-700 text-sm mb-0">Надёжная контрацепция на 3–7 лет. Подходит при стабильных отношениях, исключении ИППП. Медьсодержащие и гормональные ВМС.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">Осмотр, мазки для исключения воспаления. Оптимально — конец менструации или сразу после. За 1–2 дня — без половых контактов.</p>
              </div>
            </div>
          </section>

          <section id="tipy" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Типы ВМС и механизм действия</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Медьсодержащие ВМС</h3>
            <p className="mb-4">
              Пластиковая основа с обмоткой из меди. Медь создаёт локальную воспалительную реакцию, губительную для сперматозоидов и яйцеклетки; также влияет на перистальтику маточных труб. Срок действия — 5–10 лет в зависимости от марки. Могут усилить менструальную кровопотерю и болезненность.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Гормональные ВМС (с левоноргестрелом)</h3>
            <p className="mb-4">
              Выделяют гормон локально в полость матки. Сгущают цервикальную слизь (барьер для сперматозоидов), истончают эндометрий, у части женщин подавляют овуляцию. Срок — 3–7 лет. Часто уменьшают менструации или приводят к аменорее — это не опасно при подтверждённой правильной позиции спирали.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Кому может подходить</h2>
            <p className="mb-4">
              ВМС подходит женщинам, которые хотят надёжную контрацепцию без необходимости ежедневного приёма препаратов. Метод удобен при стабильных отношениях, когда исключены инфекции, передающиеся половым путём.
            </p>
            <p className="mb-4">
              Противопоказания определяет гинеколог: воспалительные заболевания органов малого таза, беременность, подозрение на злокачественные процессы, аномалии строения матки и др. Перед установкой нужен осмотр, при необходимости — мазки и УЗИ.
            </p>
          </section>

          {/* Этапы процедуры */}
          <section id="ustanovka" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Этапы установки</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Осмотр на кресле', 'Обработка влагалища', 'Введение ВМС через цервикальный канал', 'Проверка положения', 'Контроль через 1–2 месяца'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Установка выполняется на гинекологическом кресле, в стерильных условиях. Врач проводит осмотр, обрабатывает влагалище, вводит ВМС в полость матки через цервикальный канал с помощью проводника. Процедура обычно занимает несколько минут.
            </p>
            <p>
              Установку проводят в определённые дни цикла — чаще в конце менструации или сразу после неё, когда канал шейки матки немного приоткрыт. В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> установку ВМС выполняют опытные гинекологи.
            </p>
          </section>

          {/* Что взять / подготовка */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что взять / подготовка</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {['Осмотр и мазки на флору', 'УЗИ при необходимости', 'За 1–2 дня без половых контактов', 'Оптимально — конец менструации'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Перед установкой проводят гинекологический осмотр, берут мазки для исключения воспаления и инфекций. При необходимости назначают УЗИ малого таза. За 1–2 дня до процедуры лучше избегать половых контактов.
            </p>
            <p>
              Обезболивание обычно не требуется. При выраженной чувствительности врач может использовать местную анестезию. Спазмы в первые дни после установки — возможная реакция, о ней врач предупреждает заранее.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда удаляют ВМС</h2>
            <p className="mb-4">
              Удаление проводят: по истечении срока действия спирали; при желании женщины; при развитии осложнений (смещение, воспаление, боль); при планировании беременности. Плановую замену выполняют в конце срока или при появлении показаний.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Больно ли удалять</h2>
            <p className="mb-4">
              Удаление обычно менее дискомфортно, чем установка. Врач захватывает нити ВМС в шейке матки и извлекает спираль. При необходимости проводят контроль УЗИ. Процедура занимает 1–2 минуты.
            </p>
            <p>
              Если нити не видны или спираль вросла — потребуется особая тактика. В таких случаях врач объяснит план действий.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда нужно обратиться к врачу</h2>
            <p className="mb-4">
              Обратиться к гинекологу нужно, если: появилась сильная боль внизу живота; увеличилось количество кровянистых выделений; повысилась температура; вы подозреваете смещение или выпадение спирали (нить не прощупывается или стала длиннее); есть признаки воспаления (боли, выделения с запахом).
            </p>
            <p>
              Плановый осмотр после установки ВМС обычно рекомендуют через 1–2 месяца и далее по графику. Записаться на приём к <Link href={GYNEC_HUB_URL}>гинекологу в Одинцово</Link> можно в Альтамед-С.
            </p>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mt-4">
              <p className="font-semibold text-gray-900 mb-2">Когда срочно после установки:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> сильная боль внизу живота</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> обильное кровотечение</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> температура</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> нити не прощупываются или стали длиннее</span>
              </div>
            </div>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о внутриматочной спирали</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Через сколько после удаления можно планировать беременность?</dt>
                <dd className="text-gray-700 mb-0">Фертильность восстанавливается в течение 1–3 циклов. Многие врачи рекомендуют подождать 1 цикл для восстановления эндометрия, но строгих запретов нет. Обсудите с гинекологом.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">ВМС нерожавшим — можно ли?</dt>
                <dd className="text-gray-700 mb-0">Возможно, но выше риск экспульсии (выпадения) из‑за меньшего размера полости матки. Используют маленькие модели (например, GyneFix). Нужен осмотр и УЗИ для оценки анатомии.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Как проверить, что спираль на месте?</dt>
                <dd className="text-gray-700 mb-0">Нити ВМС должны прощупываться во влагалище. Если нитей не чувствуете или они стали длиннее — возможна смещение или экспульсия. Сделайте УЗИ или придите на осмотр.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">После гормональной ВМС нет месячных — это норма?</dt>
                <dd className="text-gray-700 mb-0">Да. Локальный левоноргестрел истончает эндометрий, менструации могут стать скудными или исчезнуть. Это не беременность и не климакс — эффект обратим после удаления.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Установка и удаление ВМС в Альтамед-С</dt>
                <dd className="text-gray-700 mb-0">В клинике выполняют установку и удаление внутриматочной спирали. Цены и запись — на сайте или по телефону +7 (495) 255-44-50.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Установка ВМС в Одинцово</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно записаться на консультацию гинеколога для подбора контрацепции, установки или удаления внутриматочной спирали.
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
                  <li><Link href={GYNEC_SERVICES.priem}>Приём гинеколога</Link></li>
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">Как подготовиться к приёму гинеколога</Link></li>
                  <li><Link href="/articles/ginekolog-ili-ginekolog-endokrinolog">Гинеколог или гинеколог-эндокринолог</Link></li>
                  <li><Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
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
