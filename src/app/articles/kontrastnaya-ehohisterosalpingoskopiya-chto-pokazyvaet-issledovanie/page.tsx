import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Контрастная эхогистеросальпингоскопия: что показывает исследование | Альтамед-С',
  description: 'ЭхоГСГ — УЗИ-исследование проходимости маточных труб с контрастом. Показания, как проходит, подготовка и что показывают результаты.',
  openGraph: {
    title: 'Эхогистеросальпингоскопия: что показывает | Альтамед-С',
    description: 'Контрастная эхогистеросальпингоскопия — оценка проходимости маточных труб.',
    url: 'https://altamed-c.ru/articles/kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleEhohisterosalpingoskopiya() {
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
            <span className="text-gray-900 font-medium">Эхогистеросальпингоскопия</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Контрастная эхогистеросальпингоскопия: что показывает исследование
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Контрастная эхогистеросальпингоскопия (ЭхоГСГ) — УЗИ-метод оценки проходимости маточных труб. В полость матки вводят стерильный контрастный раствор, который при проходимых трубах проходит в брюшную полость. Процедура менее инвазивна, чем рентгеновская гистеросальпингография (ГСГ), и не использует ионизирующее излучение.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — когда назначают ЭхоГСГ, как проходит исследование, как подготовиться и что показывают результаты.
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
                <a href="#provedenie" className="text-emerald-600 hover:underline py-1">Как проходит</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Эхогистеросальпингоскопия" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
                <p className="text-gray-700 text-sm mb-0">Обследование при бесплодии (оценка проходимости труб); подозрение на синехии, аномалии полости матки; подготовка к ЭКО по протоколу.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">5–12-й день цикла; исключить беременность и воспаления; мазки в норме; за 1–2 дня без половых контактов.</p>
              </div>
            </div>
            <p className="mb-4">
              ЭхоГСГ назначают при обследовании по поводу бесплодия — для оценки проходимости маточных труб. Непроходимость труб — одна из частых причин ненаступления беременности. Исследование проводят и при подозрении на внутриматочные синехии (спайки), аномалии полости матки.
            </p>
            <p className="mb-4">
              Обычно ЭхоГСГ делают после базового обследования: гормоны, УЗИ, мазки. При подготовке к ЭКО оценка труб может входить в план или быть необязательной — зависит от протокола клиники.
            </p>
          </section>

          {/* Этапы процедуры */}
          <section id="provedenie" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Этапы исследования</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Осмотр и введение катетера', 'Введение контраста в полость матки', 'УЗИ-контроль распространения', 'Оценка проходимости труб', 'Результат в тот же день'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Процедуру проводят в первую фазу цикла (до овуляции), после окончания менструации. Через катетер в полость матки вводят стерильный физиологический раствор или специальный контраст. Под контролем УЗИ оценивают, как жидкость распространяется по полости матки и трубам, выходит ли в брюшную полость.
            </p>
            <p className="mb-4">
              Процедура занимает 10–20 минут. Ощущения — от лёгкого дискомфорта до спазмоподобных болей (схожи с менструальными). При необходимости возможен приём обезболивающего до исследования.
            </p>
          </section>

          {/* Что взять / подготовка */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что взять / подготовка</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {['5–12-й день цикла', 'Исключить беременность', 'Мазки на флору в норме', 'За 1–2 дня без половых контактов'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700">Подробнее — <Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что показывают результаты</h2>
            <p className="mb-4">
              Обе трубы проходимы — контраст свободно проходит в брюшную полость. Непроходимость одной или обеих труб — жидкость не проходит или накапливается в трубе. Дополнительно оценивают форму полости матки, исключают полипы, синехии.
            </p>
            <p className="mb-4">
              При непроходимости труб врач обсудит дальнейшую тактику: лапароскопия, ЭКО и др.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы об ЭхоГСГ</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Больно ли делать ЭхоГСГ?</dt>
                <dd className="text-gray-700 mb-0">Ощущения индивидуальны. Многие женщины отмечают тянущие или спазматические боли, похожие на менструальные. Длительность — несколько минут. Можно принять обезболивающее за 30–40 минут до процедуры.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Чем ЭхоГСГ отличается от ГСГ?</dt>
                <dd className="text-gray-700 mb-0">ГСГ — рентген с контрастом. ЭхоГСГ — УЗИ с введением жидкости. ЭхоГСГ не использует рентген-излучение, но по точности оценки труб ГСГ иногда считают эталоном. Выбор метода определяет врач.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Эхогистеросальпингоскопия в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят контрастную эхогистеросальпингоскопию. Запись на приём к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link> — онлайн и по телефону.
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
                  <li><Link href={GYNEC_SERVICES.akusher}>Акушер-гинеколог</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                  <li><Link href="/articles/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit">Пайпель-биопсия эндометрия</Link></li>
                  <li><Link href="/articles/endometrioz-simptomy-kogda-obraschatsya-i-kak-prohodit-lechenie">Эндометриоз</Link></li>
                  <li><Link href="/articles/podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa">Подготовка к ЭКО</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
