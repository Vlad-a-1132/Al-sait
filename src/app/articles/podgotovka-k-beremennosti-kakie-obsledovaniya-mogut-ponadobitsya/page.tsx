import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Подготовка к беременности: какие обследования могут понадобиться | Альтамед-С',
  description: 'Подготовка к зачатию: анализы, УЗИ, консультация гинеколога. Какие обследования проходят женщина и мужчина перед планированием беременности.',
  openGraph: {
    title: 'Подготовка к беременности: какие обследования | Альтамед-С',
    description: 'Какие обследования нужны при подготовке к беременности — анализы, УЗИ, консультации.',
    url: 'https://altamed-c.ru/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticlePodgotovkaKBeremennosti() {
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
            <span className="text-gray-900 font-medium">Подготовка к беременности</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Подготовка к беременности: какие обследования могут понадобиться
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Подготовка к зачатию помогает выявить факторы риска, скорректировать здоровье до беременности и повысить шансы на благоприятный исход. Объём обследований зависит от возраста, анамнеза и сопутствующих заболеваний. Базовый минимум — консультация акушера-гинеколога, анализы и УЗИ.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — какие обследования обычно назначают при подготовке к беременности, что сдаёт женщина и что — партнёр, когда нужны дополнительные исследования.
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
                <a href="#konsultaciya" className="text-emerald-600 hover:underline py-1">Консультация</a>
                <a href="#analizy" className="text-emerald-600 hover:underline py-1">Анализы</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Подготовка к беременности" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Первый шаг + Обследования */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">С чего начать и что обследовать</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Первый шаг</h3>
                <p className="text-gray-700 text-sm mb-0">Приём акушера-гинеколога: анамнез, осмотр, мазки. При необходимости — УЗИ, анализы на гормоны, направления к специалистам.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Основные обследования</h3>
                <p className="text-gray-700 text-sm mb-0">Мазки, УЗИ малого таза, TORCH, гормоны щитовидной железы, фолиевая кислота. Индивидуальный план — по результатам.</p>
              </div>
            </div>
          </section>

          <section id="konsultaciya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Консультация акушера-гинеколога</h2>
            <p className="mb-4">
              Первый шаг — приём у <Link href={GYNEC_SERVICES.akusher}>акушера-гинеколога</Link>. Врач соберёт анамнез (цикл, предыдущие беременности, хронические болезни, операции), проведёт осмотр, возьмёт мазки. При необходимости направит к терапевту, эндокринологу, генетику.
            </p>
          </section>

          <section id="analizy" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Анализы для женщины</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Общий анализ крови и мочи;</li>
              <li>Биохимия крови (глюкоза, печень, почки);</li>
              <li>Группа крови и резус-фактор;</li>
              <li>TORCH-инфекции (токсоплазма, краснуха, цитомегаловирус, герпес);</li>
              <li>ИППП (мазки, ПЦР по показаниям);</li>
              <li>Гормоны щитовидной железы (ТТГ);</li>
              <li>Мазок на флору, онкоцитологию.</li>
            </ul>
            <p className="mb-4">
              При нерегулярном цикле, предыдущих выкидышах или бесплодии — расширенная панель гормонов, УЗИ органов малого таза, при необходимости — оценка проходимости труб (например, <Link href="/articles/kontrastnaya-ehohisterosalpingoskopiya-chto-pokazyvaet-issledovanie">эхогистеросальпингоскопия</Link>). При подготовке к ЭКО — отдельный план обследований.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Обследования для партнёра</h2>
            <p className="mb-4">
              Мужчине рекомендуют сдать общий анализ крови и мочи, анализы на ИППП при наличии рисков. При длительном ненаступлении беременности — спермограмму и консультацию андролога/уролога.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">УЗИ и дополнительные методы</h2>
            <p className="mb-4">
              УЗИ органов малого таза — оценка матки, яичников, выявление миом, кист, аномалий. При подозрении на полипы или гиперплазию эндометрия — <Link href="/articles/pajpel-biopsiya-endometriya-chto-eto-kogda-nuzhna-i-kak-prohodit">пайпель-биопсия</Link>. При бесплодии — проверка проходимости маточных труб.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Витамины и образ жизни</h2>
            <p className="mb-4">
              Фолиевая кислота — за 2–3 месяца до зачатия и в первом триместре (снижает риск пороков развития). Дозировку подбирает врач. Рекомендуют отказаться от алкоголя, курения, скорректировать вес при его отклонениях. При хронических заболеваниях — достичь компенсации до беременности.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о подготовке к беременности</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">За сколько месяцев начинать подготовку?</dt>
                <dd className="text-gray-700 mb-0">Оптимально — за 3–6 месяцев до планируемого зачатия. За это время можно пройти обследования, скорректировать терапию и начать приём фолиевой кислоты.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Обязательна ли подготовка, если беременность уже наступила?</dt>
                <dd className="text-gray-700 mb-0">Подготовка повышает шансы на благоприятный исход, но не является обязательной. Если беременность наступила без предварительного обследования — вставайте на учёт и проходите плановые анализы по назначению врача.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Подготовка к беременности в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно пройти обследование при подготовке к беременности: консультация <Link href={GYNEC_SERVICES.akusher}>акушера-гинеколога</Link>, УЗИ, анализы. Запись — онлайн и по телефону.
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
                  <li><Link href="/articles/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya">Первый приём беременной</Link></li>
                  <li><Link href="/articles/vedenie-beremennosti-v-odintsovo">Ведение беременности в Одинцово</Link></li>
                  <li><Link href="/articles/ginekolog-ili-ginekolog-endokrinolog">Гинеколог или гинеколог-эндокринолог</Link></li>
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
