import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'УЗИ при беременности: когда делать и что показывает исследование | Альтамед-С',
  description: 'УЗИ плода при беременности: плановые скрининги в I, II и III триместрах, что смотрят, когда делать и что показывает исследование.',
  openGraph: {
    title: 'УЗИ при беременности: когда делать | Альтамед-С',
    description: 'УЗИ плода — плановые скрининги, что показывают и когда проходить исследование.',
    url: 'https://altamed-c.ru/articles/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleUziPriBeremennosti() {
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
            <span className="text-gray-900 font-medium">УЗИ при беременности</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                УЗИ при беременности: когда делать и что показывает исследование
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                УЗИ при беременности — основной метод оценки развития плода, состояния матки и плаценты. Исследование безопасно для матери и ребёнка, проводится по плану скринингов и по показаниям. В России приняты три плановых УЗИ-скрининга в каждом триместре.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — когда делать УЗИ при беременности, что смотрят на каждом сроке, что показывает исследование и когда могут назначить дополнительное УЗИ.
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
                <a href="#trimestr1" className="text-emerald-600 hover:underline py-1">I триместр</a>
                <a href="#trimestr2" className="text-emerald-600 hover:underline py-1">II триместр</a>
                <a href="#trimestr3" className="text-emerald-600 hover:underline py-1">III триместр</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="УЗИ при беременности" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Плановые скрининги + Когда вне плана */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Плановые скрининги и когда вне плана</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Плановые УЗИ</h3>
                <p className="text-gray-700 text-sm mb-0">I триместр 11–14 нед; II триместр 18–21 нед; III триместр 30–34 нед. Скрининги развития плода, плаценты, вод.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда вне плана</h3>
                <p className="text-gray-700 text-sm mb-0">Боли, кровянистые выделения, подозрение на внематочную; неясный срок; подтекание вод; снижение шевелений.</p>
              </div>
            </div>
          </section>

          <section id="trimestr1" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">УЗИ в I триместре (до 14 недель)</h2>
            <p className="mb-4">
              Первое плановое УЗИ — в 11–14 недель. Подтверждают маточную беременность, уточняют срок, считают сердцебиение плода, оценивают копчико-теменной размер (КТР), толщину воротникового пространства (ТВП) — маркер хромосомных аномалий. Смотрят место прикрепления плаценты, исключают грубые пороки. При многоплодной беременности определяют тип двойни.
            </p>
            <p className="mb-4">
              Раньше 11 недель УЗИ делают по показаниям: боли, кровянистые выделения, неясный срок, подозрение на внематочную беременность. Подробнее о первом визите — в статье <Link href="/articles/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya">«Первый приём беременной»</Link>.
            </p>
          </section>

          <section id="trimestr2" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">УЗИ во II триместре (18–22 недели)</h2>
            <p className="mb-4">
              Второй скрининг — анатомия плода: головной мозг, сердце, позвоночник, конечности, внутренние органы. Оценивают количество околоплодных вод, расположение плаценты, длину шейки матки. Устанавливают пол ребёнка (если родители хотят знать). Выявляют многие пороки развития, что позволяет планировать дальнейшее ведение или лечение после рождения.
            </p>
          </section>

          <section id="trimestr3" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">УЗИ в III триместре (30–34 недели)</h2>
            <p className="mb-4">
              Третий скрининг — размеры плода, предлежание, положение плаценты, зрелость плаценты, количество вод. Оценивают рост и пропорции. При необходимости проводят допплерометрию — исследование кровотока в сосудах плода и матки. Подробнее — в статье <Link href="/articles/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet">«Допплерометрия при беременности»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Дополнительное УЗИ</h2>
            <p className="mb-4">
              Вне плановых скринингов УЗИ назначают при болях, кровянистых выделениях, подозрении на задержку развития плода, многоводии или маловодии, резус-конфликте, наличии рубца на матке и других показаниях. Количество исследований не лимитировано — УЗИ безопасно.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы об УЗИ при беременности</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Вредно ли УЗИ для плода?</dt>
                <dd className="text-gray-700 mb-0">Нет. УЗИ использует звуковые волны, не ионизирующее излучение. За десятилетия применения не выявлено негативного влияния на плод при соблюдении стандартной методики.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Нужна ли подготовка к УЗИ?</dt>
                <dd className="text-gray-700 mb-0">На ранних сроках (до 12 недель) иногда просят наполнить мочевой пузырь. Позже — обычно не требуется. Трансвагинальное УЗИ на ранних сроках не требует наполнения пузыря.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Где можно сделать УЗИ при беременности?</dt>
                <dd className="text-gray-700 mb-0">В женской консультации по месту жительства или в частной клинике. В <Link href={GYNEC_SERVICES.vedenie}>Альтамед-С</Link> проводят УЗИ плода на всех сроках. Запись — онлайн и по телефону.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">УЗИ при беременности в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят УЗИ плода на всех сроках. <Link href={GYNEC_SERVICES.vedenie}>Ведение беременности</Link> включает плановые скрининги и допплерометрию по показаниям.
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
                  <li><Link href="/articles/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet">Допплерометрия при беременности</Link></li>
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
