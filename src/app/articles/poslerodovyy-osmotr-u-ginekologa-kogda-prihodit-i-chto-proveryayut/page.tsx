import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Послеродовый осмотр у гинеколога: когда приходить и что проверяют | Альтамед-С',
  description: 'Послеродовый осмотр: когда приходить к гинекологу после родов, что проверяют, какие анализы назначают и зачем это важно.',
  openGraph: {
    title: 'Послеродовый осмотр у гинеколога | Альтамед-С',
    description: 'Когда приходить на послеродовый осмотр и что проверяют.',
    url: 'https://altamed-c.ru/articles/poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticlePoslerodovyyOsmotr() {
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
            <span className="text-gray-900 font-medium">Послеродовый осмотр</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Послеродовый осмотр у гинеколога: когда приходить и что проверяют
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Послеродовый осмотр — важный этап восстановления после родов. Гинеколог оценивает, как заживает матка и родовые пути, исключает воспаление, подбирает контрацепцию и отвечает на вопросы о восстановлении цикла и следующей беременности.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — когда приходить на послеродовый осмотр, что проверяют и какие рекомендации даёт врач.
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
                <a href="#kogda" className="text-emerald-600 hover:underline py-1">Когда приходить</a>
                <a href="#proveryayut" className="text-emerald-600 hover:underline py-1">Что проверяют</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut'] ?? '/images/images allergoly/ginokologia.webp'} alt="Послеродовый осмотр" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Когда приходить + Что проверяют */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Когда приходить и что проверяют</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда приходить</h3>
                <p className="text-gray-700 text-sm mb-0">Через 6–8 недель после родов. При кровотечении, боли, температуре — раньше.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Что проверяют</h3>
                <p className="text-gray-700 text-sm mb-0">Состояние матки, шейки, швов. Мазки. Обсуждение контрацепции, восстановление, ГВ.</p>
              </div>
            </div>
          </section>

          <section id="kogda" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда приходить</h2>
            <p className="mb-4">
              Обычно рекомендуют прийти через 6–8 недель после родов. К этому времени матка сократилась, лохии завершились, швы (если были) зажили. После кесарева сечения — те же сроки, если нет осложнений. При болях, обильных или гнойных выделениях, температуре — обращайтесь раньше.
            </p>
          </section>

          <section id="proveryayut" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что проверяют</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Состояние матки — размер, тонус, исключение субинволюции;</li>
              <li>Шейка матки — заживление, эрозия после родов;</li>
              <li>Швы (если были разрывы, эпизиотомия) — заживление, признаки воспаления;</li>
              <li>Мазок на флору — при подозрении на воспаление;</li>
              <li>Молочные железы — при жалобах на лактацию.</li>
            </ul>
            <p className="mb-4">
              Врач уточнит, как проходят выделения, есть ли боли, как налажено грудное вскармливание. Обсудит контрацепцию — после родов овуляция может вернуться раньше первой менструации.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">УЗИ после родов</h2>
            <p className="mb-4">
              УЗИ органов малого таза назначают для оценки инволюции матки, исключения остатков плаценты, гематом, воспаления. При необходимости — по показаниям раньше 6–8 недель.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Контрацепция и следующая беременность</h2>
            <p className="mb-4">
              ВОЗ рекомендует интервал между родами не менее 18–24 месяцев для снижения рисков. Врач подберёт контрацепцию с учётом грудного вскармливания — ЛКБ, мини-пили, ВМС после полного заживления.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о послеродовом осмотре</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли пройти осмотр в частной клинике?</dt>
                <dd className="text-gray-700 mb-0">Да. Послеродовый осмотр можно пройти у <Link href={GYNEC_SERVICES.akusher}>акушера-гинеколога</Link> в женской консультации или в частной клинике. Важно принести выписку из роддома.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Нужно ли сдавать анализы перед осмотром?</dt>
                <dd className="text-gray-700 mb-0">Обычно анализы назначают при осмотре, если врач видит показания. Подготовки заранее не требуется.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Послеродовый осмотр в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> принимают <Link href={GYNEC_SERVICES.akusher}>акушеры-гинекологи</Link>. Можно записаться на послеродовый осмотр с выпиской из роддома. УЗИ — в клинике.
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
                  <li><Link href="/articles/vedenie-beremennosti-v-odintsovo">Ведение беременности в Одинцово</Link></li>
                  <li><Link href="/articles/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya">Первый приём беременной</Link></li>
                  <li><Link href="/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya">Профилактический осмотр: какие обследования</Link></li>
                  <li><Link href="/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
