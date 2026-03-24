import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Пайпель-биопсия эндометрия: что это, когда нужна и как проходит | Альтамед-С',
  description: 'Пайпель-биопсия эндометрия — забор образца ткани из полости матки для диагностики. Показания, противопоказания, подготовка и как проходит процедура.',
  openGraph: {
    title: 'Пайпель-биопсия эндометрия | Альтамед-С',
    description: 'Пайпель-биопсия эндометрия: показания, подготовка, как проходит процедура и что показывают результаты.',
    url: 'https://altamed-c.ru/articles/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticlePajpelBiopsiya() {
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
            <span className="text-gray-900 font-medium">Пайпель-биопсия эндометрия</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Пайпель-биопсия эндометрия: что это, когда нужна и как проходит
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Пайпель-биопсия эндометрия — забор небольшого образца ткани внутренней оболочки матки (эндометрия) с помощью тонкой гибкой трубки (пайпеля). Метод малоинвазивный, не требует расширения канала шейки матки и обычно проводится без анестезии в кабинете гинеколога.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — когда назначают пайпель-биопсию, как к ней подготовиться, как проходит процедура, что показывают результаты и когда этот метод предпочтительнее других.
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
                <a href="#podgotovka" className="text-emerald-600 hover:underline py-1">Подготовка</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Пайпель-биопсия эндометрия" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          <section id="naznachayut" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда назначают пайпель-биопсию</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Кровотечения и изменения</h3>
                <p className="text-gray-700 text-sm mb-0">Маточные кровотечения неясной причины, гиперплазия, полипы, утолщение эндометрия по УЗИ.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">7–11-й день цикла; исключить беременность и воспаления; за 2 дня без половых контактов; мазки на флору в норме.</p>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Маточные кровотечения неясной причины, в т.ч. в менопаузе;</li>
              <li>Подозрение на гиперплазию эндометрия, полипы, эндометриоз;</li>
              <li>Обследование при бесплодии (оценка состояния эндометрия, фазы цикла);</li>
              <li>Подготовка к ЭКО;</li>
              <li>Контроль после лечения гиперплазии;</li>
              <li>Утолщение эндометрия по УЗИ без явной причины.</li>
            </ul>
            <p className="mb-4">
              Пайпель-биопсия не заменяет полное выскабливание при обильном кровотечении или необходимости удаления полипа. Но для диагностики структуры эндометрия часто достаточно именно пайпеля.
            </p>
          </section>

          {/* Инфографика: Этапы процедуры */}
          <section id="procedura" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит процедура</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Осмотр гинеколога', 'Введение пайпеля через шейку', 'Забор материала (1–2 минуты)', 'Обработка и отправка на гистологию', 'Результат через 7–14 дней'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Гинеколог вводит тонкий катетер (пайпель) через канал шейки матки в полость матки. Потягиванием поршня создаётся отрицательное давление, и небольшой участок эндометрия втягивается в канал и отщепляется. Процедура занимает 1–2 минуты.
            </p>
            <p className="mb-4">
              Ощущения — от лёгкого дискомфорта до кратковременной тянущей боли, похожей на спазм при месячных. Многие женщины переносят процедуру легко. При выраженной чувствительности врач может рекомендовать приём обезболивающего за 30–40 минут до визита.
            </p>
          </section>

          <section id="podgotovka" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Подготовка</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {['7–11-й день цикла (при регулярном)', 'Исключить беременность и воспаления', 'Без половых контактов за 2 дня', 'Мазки на флору в норме'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Процедуру проводят в определённые дни цикла — обычно на 7–11-й день (при регулярном цикле). При менопаузе или нерегулярных кровотечениях — по назначению врача. Перед биопсией исключают беременность и острые воспаления. Мазки на флору должны быть в норме.
            </p>
            <p className="mb-4">
              За пару дней до процедуры — без половых контактов, спринцеваний, вагинальных препаратов. В день приёма — лёгкий завтрак, можно принять ибупрофен за 30–40 минут, если планируется обезболивание.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">После процедуры</h2>
            <p className="mb-4">
              Несколько часов или 1–2 дня возможны мажущие кровянистые выделения, лёгкие тянущие ощущения внизу живота. Обычно ограничений немного: в день процедуры — покой, на 2–3 дня — без половых контактов, посещения бани, бассейна.
            </p>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mt-4">
              <p className="font-semibold text-gray-900 mb-2">Когда срочно после процедуры:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> обильное кровотечение</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> температура</span>
                <span className="flex items-center gap-2"><span className="text-rose-500">●</span> сильная боль внизу живота</span>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что показывают результаты</h2>
            <p className="mb-4">
              Гистологическое исследование образца выявляет: фазу цикла и соответствие дню цикла, гиперплазию эндометрия (простая, сложная, с атипией), полипы, хронический эндометрит, аденоматоз, злокачественные изменения. По результату врач определит дальнейшую тактику — наблюдение, гормональная терапия, гистероскопия или выскабливание.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о пайпель-биопсии</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Больно ли делать пайпель-биопсию?</dt>
                <dd className="text-gray-700 mb-0">Ощущения индивидуальны: от лёгкого дискомфорта до кратковременной спазмоподобной боли. Многие сравнивают с ощущениями при месячных. При необходимости можно принять обезболивающее до процедуры.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли при беременности?</dt>
                <dd className="text-gray-700 mb-0">Нет. Пайпель-биопсия противопоказана при беременности — она может её прервать. Перед процедурой обязательно исключают беременность.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Сколько ждать результат?</dt>
                <dd className="text-gray-700 mb-0">Обычно 7–14 дней — гистологическое исследование требует времени. Сроки уточняйте в клинике.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Пайпель-биопсия в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно пройти пайпель-биопсию эндометрия по назначению <Link href={GYNEC_SERVICES.priem}>гинеколога</Link>. Запись на приём — онлайн и по телефону.
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
                  <li><Link href="/articles/endometrioz-simptomy-kogda-obraschatsya-i-kak-prohodit-lechenie">Эндометриоз: симптомы и лечение</Link></li>
                  <li><Link href="/articles/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto">Биопсия шейки матки</Link></li>
                  <li><Link href="/articles/kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie">Контрастная эхогистеросальпингоскопия</Link></li>
                  <li><Link href="/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                  <li><Link href="/articles/polipy-v-ginekologii-kogda-nuzhno-udalenie-i-kak-prohodit-procedura">Полипы в гинекологии</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
