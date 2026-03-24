import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Подготовка к ЭКО: зачем нужна консультация акушера-гинеколога | Альтамед-С',
  description: 'Подготовка к ЭКО: зачем консультация акушера-гинеколога, какие обследования нужны, что проверить перед программой ВРТ.',
  openGraph: {
    title: 'Подготовка к ЭКО: консультация акушера-гинеколога | Альтамед-С',
    description: 'Зачем консультация акушера-гинеколога при подготовке к ЭКО и какие обследования нужны.',
    url: 'https://altamed-c.ru/articles/podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticlePodgotovkaKEko() {
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
            <span className="text-gray-900 font-medium">Подготовка к ЭКО</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Подготовка к ЭКО: зачем нужна консультация акушера-гинеколога
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Перед программой ЭКО (и другими методами ВРТ) важно пройти базовое гинекологическое обследование. Акушер-гинеколог оценит состояние репродуктивных органов, выявит противопоказания или факторы, которые лучше скорректировать до вступления в протокол.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — зачем консультация акушера-гинеколога при подготовке к ЭКО, какие обследования обычно требуются и что может улучшить исход программы.
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
                <a href="#zachem" className="text-emerald-600 hover:underline py-1">Зачем консультация</a>
                <a href="#obsledovaniya" className="text-emerald-600 hover:underline py-1">Обследования</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['podgotovka-k-eko-zachem-nuzhna-konsultatsiya-akushera-ginekologa'] ?? '/images/images allergoly/ginokologia.webp'} alt="Подготовка к ЭКО" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Зачем консультация + Этапы */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Зачем консультация и этапы подготовки</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Зачем консультация</h3>
                <p className="text-gray-700 text-sm mb-0">Оценка резерва яичников, состояния матки, гормонов. Исключение противопоказаний. План обследований перед протоколом ЭКО.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Этапы подготовки</h3>
                <p className="text-gray-700 text-sm mb-0">Консультация акушера-гинеколога, УЗИ, анализы (гормоны, инфекции), при необходимости — гистероскопия, санация.</p>
              </div>
            </div>
          </section>

          <section id="zachem" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Зачем консультация акушера-гинеколога</h2>
            <p className="mb-4">
              Репродуктолог ведёт программу ЭКО, но гинеколог проверяет: состояние матки и яичников (УЗИ), проходимость труб при необходимости (<Link href="/articles/kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie">эхогистеросальпингоскопия</Link>), мазки на флору и онкоцитологию, исключение полипов и гиперплазии эндометрия (<Link href="/articles/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit">пайпель-биопсия</Link> при показаниях). Выявление и лечение воспалений, патологии шейки матки до протокола снижает риски осложнений.
            </p>
          </section>

          <section id="obsledovaniya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Какие обследования могут понадобиться</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>УЗИ органов малого таза;</li>
              <li>Мазки на флору, онкоцитологию;</li>
              <li>Анализы на ИППП;</li>
              <li>Гормоны (по назначению репродуктолога);</li>
              <li>Оценка состояния эндометрия, при необходимости — пайпель-биопсия;</li>
              <li>Проверка проходимости труб (если не планируется ЭКО с ИКСИ и т.п.);</li>
              <li>Лечение хронических воспалений, патологии шейки матки.</li>
            </ul>
            <p className="mb-4">
              Точный список обследований даёт репродуктолог и клиника ЭКО. Гинеколог выполняет общую подготовку и при необходимости направляет к репродуктологу.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Подготовка к беременности</h2>
            <p className="mb-4">
              Общие принципы подготовки к зачатию — фолиевая кислота, коррекция веса, отказ от вредных привычек — актуальны и для ЭКО. Подробнее — в статье <Link href="/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">«Подготовка к беременности»</Link>.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о подготовке к ЭКО</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Обязательна ли консультация гинеколога перед ЭКО?</dt>
                <dd className="text-gray-700 mb-0">Клиника ЭКО обычно требует заключение гинеколога и результаты обследований. Консультация помогает выявить факторы, которые лучше устранить до протокола.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли пройти подготовку в обычной клинике?</dt>
                <dd className="text-gray-700 mb-0">Да. Часть обследований (осмотр, мазки, УЗИ, пайпель-биопсия, ЭхоГСГ) можно пройти в клинике по месту жительства или в частном центре. Репродуктолог запросит результаты и при необходимости назначит дополнительные анализы.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Подготовка к ЭКО в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно пройти консультацию <Link href={GYNEC_SERVICES.akusher}>акушера-гинеколога</Link>, УЗИ и обследования при подготовке к ЭКО. Запись — онлайн и по телефону.
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
                  <li><Link href={GYNEC_SERVICES.akusher}>Акушер-гинеколог</Link></li>
                  <li><Link href={GYNEC_SERVICES.vedenie}>Ведение беременности</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                  <li><Link href="/articles/kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie">Эхогистеросальпингоскопия</Link></li>
                  <li><Link href="/articles/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit">Пайпель-биопсия эндометрия</Link></li>
                  <li><Link href="/articles/vedenie-beremennosti-v-odintsovo">Ведение беременности в Одинцово</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
