import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Гинеколог или гинеколог-эндокринолог: к кому записаться | Альтамед-С',
  description: 'Чем отличается гинеколог от гинеколога-эндокринолога, при каких симптомах нужен каждый специалист и как понять, к кому лучше записаться.',
  openGraph: {
    title: 'Гинеколог или гинеколог-эндокринолог | Альтамед-С',
    description: 'К кому записаться: гинеколог или гинеколог-эндокринолог.',
    url: 'https://altamed-c.ru/articles/ginekolog-ili-ginekolog-endokrinolog',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/ginekolog-ili-ginekolog-endokrinolog' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['ginekolog-ili-ginekolog-endokrinolog'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleGinekologEndokrinolog() {
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
            <span className="text-gray-900 font-medium">Гинеколог или гинеколог-эндокринолог</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Гинеколог или гинеколог-эндокринолог: к кому записаться и в чём разница
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Гинеколог и гинеколог-эндокринолог — оба работают с женским репродуктивным здоровьем, но круг задач и глубина работы с гормонами различаются. Неправильный выбор специалиста ведёт к лишним визитам; правильный — к быстрой диагностике и адекватному лечению.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — чем отличаются специалисты по подготовке и практике, конкретные жалобы для каждого, сценарии «сначала гинеколог, потом эндокринолог», СПКЯ и менопауза, планирование беременности и как понять, к кому идти, если сомневаетесь.
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
                <a href="#otlichiya" className="text-emerald-600 hover:underline py-1">Отличия специалистов</a>
                <a href="#kogda-endokrinolog" className="text-emerald-600 hover:underline py-1">Когда эндокринолог</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Гинеколог или гинеколог-эндокринолог" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: К кому записаться */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">К кому записаться</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Гинеколог (первый визит)</h3>
                <p className="text-gray-700 text-sm mb-0">Осмотры, воспаления, кольпоскопия, мазки, УЗИ, беременность, контрацепция. Базовые анализы на гормоны. При сложных нарушениях направит к эндокринологу.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Гинеколог-эндокринолог</h3>
                <p className="text-gray-700 text-sm mb-0">Сбой цикла, СПКЯ, бесплодие гормонального генеза, менопауза, ЗГТ, подготовка к ЭКО. По направлению гинеколога или при известных гормональных проблемах.</p>
              </div>
            </div>
          </section>

          <section id="otlichiya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Чем отличаются специалисты</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Гинеколог (акушер-гинеколог)</h3>
            <p className="mb-4">
              Широкий профиль: осмотры, воспалительные заболевания, кольпоскопия, мазки, УЗИ, ведение беременности, подбор контрацепции, лечение миомы, эндометриоза (в т.ч. хирургия). Может назначать базовые анализы на гормоны (ФСГ, ЛГ, эстрадиол, прогестерон, пролактин, ТТГ) и при выявлении сложных нарушений направить к гинекологу-эндокринологу.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Гинеколог-эндокринолог</h3>
            <p className="mb-4">
              Углублённая подготовка по репродуктивной эндокринологии. Специализируется на: нарушениях цикла, СПКЯ, гиперпролактинемии, гиперандрогении, бесплодии гормонального генеза, пременопаузе и менопаузе, подборе и коррекции ЗГТ, подготовке к ЭКО. Интерпретирует расширенный гормональный профиль и строит долгосрочную тактику коррекции.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Кому подходит обычный гинеколог</h2>
            <p className="mb-4">
              К гинекологу стоит записаться при: профилактическом осмотре; болях внизу живота; воспалительных заболеваниях, выделениях, зуде, жжении; подборе контрацепции (в том числе <Link href="/articles/vnutrimatochnaya-spiral-ustanovka-i-udalenie">внутриматочной спирали</Link>); ведении беременности; необходимости кольпоскопии, мазков, УЗИ; большинстве «стандартных» гинекологических жалоб.
            </p>
            <p>
              Обычный гинеколог — это первый специалист, к которому обращаются при любых вопросах женского здоровья. При необходимости он направит к гинекологу-эндокринологу.
            </p>
          </section>

          <section id="kogda-endokrinolog" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда нужен гинеколог-эндокринолог</h2>
            <p className="mb-4">
              К гинекологу-эндокринологу направляют или записываются напрямую при: нерегулярном менструальном цикле, задержках; подозрении на гормональное бесплодие; СПКЯ (поликистоз яичников); избытке андрогенов (рост волос по мужскому типу, акне); нарушениях функции щитовидной железы, влияющих на цикл; пременопаузе и менопаузе с выраженными жалобами; необходимости подбора или коррекции гормональной терапии.
            </p>
            <p>
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> ведёт приём гинеколог-эндокринолог в Одинцово.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Цикл, гормоны, менопауза</h2>
            <p className="mb-4">
              Если основная жалоба — нарушение цикла, задержки, слишком обильные или скудные месячные, болезненность — часто начинают с консультации гинеколога. Он при необходимости назначит анализы на гормоны и направит к гинекологу-эндокринологу для углублённой оценки и подбора терапии.
            </p>
            <p>
              В период пременопаузы и менопаузы при выраженных приливах, нерегулярных кровотечениях, сухости, остеопорозе гинеколог-эндокринолог помогает подобрать гормональную или негормональную коррекцию.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Планирование беременности</h2>
            <p className="mb-4">
              При планировании беременности первой обычно идёт консультация гинеколога или <Link href={GYNEC_SERVICES.akusher}>акушера-гинеколога</Link>. Врач оценивает состояние, назначает обследования, при необходимости — анализы на гормоны. Если выявляются гормональные нарушения, может понадобиться гинеколог-эндокринолог.
            </p>
            <p>
              При длительном ненаступлении беременности (больше года регулярной половой жизни без контрацепции) оба специалиста могут участвовать в обследовании.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как выбрать маршрут, если не уверен</h2>
            <p className="mb-4">
              Если сомневаетесь, начните с приёма гинеколога. Он проведёт осмотр, соберёт анамнез и при необходимости направит к гинекологу-эндокринологу или другому специалисту. Это оптимальный путь при большинстве жалоб.
            </p>
            <p>
              Прямая запись к гинекологу-эндокринологу имеет смысл, если вы уже знаете, что проблема связана с циклом, гормонами или вам ранее рекомендовали этого специалиста.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о выборе специалиста</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Задержка месячных, тест отрицательный — к кому?</dt>
                <dd className="text-gray-700 mb-0">К гинекологу. Он исключит беременность (в т.ч. внематочную), проведёт осмотр, УЗИ. При подозрении на гормональный сбой направит на анализы и к гинекологу-эндокринологу.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">СПКЯ — лечит гинеколог или эндокринолог?</dt>
                <dd className="text-gray-700 mb-0">Чаще гинеколог-эндокринолог: нужна гормональная коррекция, контроль веса, метаболизма. Оба могут участвовать в ведении — зависит от протоколов клиники.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Менопауза, приливы — к кому?</dt>
                <dd className="text-gray-700 mb-0">К гинекологу-эндокринологу. Он подбирает ЗГТ или негормональную терапию с учётом противопоказаний, рисков и предпочтений пациентки.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Не получается забеременеть год — к кому первым?</dt>
                <dd className="text-gray-700 mb-0">К гинекологу или акушеру-гинекологу. Он проведёт базовое обследование (УЗИ, мазки, гормоны). При выявлении гормональных нарушений подключится гинеколог-эндокринолог.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Гинеколог-эндокринолог в Альтамед-С — как записаться?</dt>
                <dd className="text-gray-700 mb-0">Через форму на сайте или по телефону +7 (495) 255-44-50. Приём ведётся в Одинцово, в обоих филиалах.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Записаться к гинекологу в Одинцово</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно записаться на приём к <Link href={GYNEC_HUB_URL}>гинекологу</Link> или <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>. Врач поможет оценить симптомы и определить дальнейшую тактику.
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
                  <li><Link href={GYNEC_SERVICES.vedenie}>Ведение беременности</Link></li>
                  <li><Link href={GYNEC_SERVICES.profilaktika}>Профилактический осмотр</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Статьи</p>
                <ul className="space-y-1 text-gray-700">
                  <li><Link href="/articles/narushenie-menstrualnogo-tsikla">Нарушение менструального цикла</Link></li>
                  <li><Link href="/articles/vedenie-beremennosti-v-odintsovo">Ведение беременности в Одинцово</Link></li>
                  <li><Link href="/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov">Когда нужно записаться к гинекологу</Link></li>
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
