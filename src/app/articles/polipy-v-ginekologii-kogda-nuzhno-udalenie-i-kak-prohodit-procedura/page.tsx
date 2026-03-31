import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Полипы в гинекологии: когда нужно удаление и как проходит процедура | Альтамед-С',
  description: 'Полипы эндометрия и шейки матки: симптомы, когда нужно удаление, как проходит процедура и что важно знать после операции.',
  openGraph: {
    title: 'Полипы в гинекологии: когда удаление | Альтамед-С',
    description: 'Полипы — когда нужно удаление, как проходит процедура и реабилитация.',
    url: 'https://altamed-c.ru/blog/polipy-v-ginekologii-kogda-nuzhno-udalenie-i-kak-prohodit-procedura',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/polipy-v-ginekologii-kogda-nuzhno-udalenie-i-kak-prohodit-procedura' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticlePolipyVGinekologii() {
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
            <span className="text-gray-900 font-medium">Полипы в гинекологии</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Полипы в гинекологии: когда нужно удаление и как проходит процедура
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Полипы — доброкачественные образования на ножке или широком основании. В гинекологии встречаются полипы эндометрия (полость матки), шейки матки, цервикального канала. Часто обнаруживаются случайно при УЗИ или осмотре. Часть полипов требует удаления.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — какие полипы бывают, когда нужно удаление, как проходит процедура и что важно знать после операции.
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
                <a href="#tipy" className="text-emerald-600 hover:underline py-1">Типы полипов</a>
                <a href="#udalenie" className="text-emerald-600 hover:underline py-1">Когда удаление</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['polipy-v-ginekologii-kogda-nuzhno-udalenie-i-kak-prohodit-procedura'] ?? '/images/images allergoly/ginokologia.webp'} alt="Полипы в гинекологии" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Когда нужно удаление и подготовка</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда назначают удаление</h3>
                <p className="text-gray-700 text-sm mb-0">Кровотечения, межменструальные выделения, полип более 1 см, подозрение на атипию, бесплодие, перед ЭКО.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
                <p className="text-gray-700 text-sm mb-0">Осмотр, УЗИ, мазки в норме. Первая половина цикла. За 1–2 дня без половых контактов.</p>
              </div>
            </div>
          </section>

          <section id="tipy" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Типы полипов</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Полип эндометрия</strong> — в полости матки, может вызывать кровотечения, мешать зачатию;</li>
              <li><strong>Полип шейки матки</strong> — виден при осмотре в зеркалах, может кровить при контакте;</li>
              <li><strong>Полип цервикального канала</strong> — в канале шейки матки.</li>
            </ul>
            <p className="mb-4">
              После удаления материал отправляют на гистологию — исключают атипию и злокачественные изменения.
            </p>
          </section>

          <section id="udalenie" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда нужно удаление</h2>
            <p className="mb-4">
              Удаление рекомендуют при кровотечениях, межменструальных выделениях, размере полипа более 1 см, подозрении на атипию, бесплодии (полип может мешать имплантации), перед ЭКО. Небольшие бессимптомные полипы шейки матки иногда наблюдают, но решение принимает врач.
            </p>
          </section>

          {/* Этапы процедуры */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Этапы удаления</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Осмотр и УЗИ', 'Выбор метода (радиоволна/гистероскопия)', 'Удаление полипа', 'Отправка на гистологию', 'Контроль через 3–6 месяцев'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="mb-4">
              Полипы шейки матки и цервикального канала удаляют амбулаторно — радиоволновым методом, петлёй или щипцами. Полипы эндометрия — гистероскопия под контролем зрения: в полость матки вводят гистероскоп, полип удаляют и отправляют на гистологию. Процедуру проводят под местной анестезией или кратковременным наркозом.
            </p>
            <p className="mb-4">
              Восстановление — несколько дней лёгких выделений, 2–4 недели без половых контактов, бани, бассейна. Подробнее о методах лечения шейки матки — в статье <Link href="/blog/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya">«Лечение заболеваний шейки матки»</Link>.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {['Результаты УЗИ и мазков', 'Первая половина цикла', 'За 1–2 дня без половых контактов', 'Пустой мочевой пузырь для УЗИ'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о полипах</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Больно ли удалять полип?</dt>
                <dd className="text-gray-700 mb-0">Полип шейки матки — обычно под местной анестезией, ощущения минимальны. Гистероскопия — под наркозом, боли во время процедуры нет. После — возможны тянущие ощущения, как при месячных.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Могут ли полипы вырасти снова?</dt>
                <dd className="text-gray-700 mb-0">Да, рецидивы возможны. После удаления рекомендуют контрольный осмотр и УЗИ через 3–6 месяцев. При рецидивирующих полипах может потребоваться гормональная коррекция.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Удаление полипов в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят удаление полипов женских половых органов. Запись на консультацию к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link> — онлайн и по телефону.
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
                  <li><Link href="/blog/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya">Лечение заболеваний шейки матки</Link></li>
                  <li><Link href="/blog/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto">Биопсия шейки матки</Link></li>
                  <li><Link href="/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
                  <li><Link href="/blog/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit">Пайпель-биопсия эндометрия</Link></li>
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
