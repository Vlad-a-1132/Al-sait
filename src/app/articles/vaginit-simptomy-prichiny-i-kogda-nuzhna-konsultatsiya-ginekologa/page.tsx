import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Вагинит: симптомы, причины и когда нужна консультация гинеколога | Альтамед-С',
  description: 'Вагинит — воспаление влагалища. Симптомы, причины (инфекции, аллергия, атрофия), когда обращаться к гинекологу и как проходит лечение.',
  openGraph: {
    title: 'Вагинит: симптомы и когда к гинекологу | Альтамед-С',
    description: 'Вагинит — симптомы, причины, когда нужна консультация гинеколога и лечение.',
    url: 'https://altamed-c.ru/articles/vaginit-simptomy-prichiny-i-kogda-nuzhna-konsultatsiya-ginekologa',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/vaginit-simptomy-prichiny-i-kogda-nuzhna-konsultatsiya-ginekologa' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticleVaginit() {
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
            <span className="text-gray-900 font-medium">Вагинит</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Вагинит: симптомы, причины и когда нужна консультация гинеколога
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Вагинит — воспаление слизистой оболочки влагалища. Проявляется выделениями, зудом, жжением, дискомфортом. Причины разнообразны: инфекции (бактерии, грибы, ИППП), нарушение микрофлоры (бактериальный вагиноз), аллергия, атрофия в менопаузе.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — какие симптомы бывают при вагините, основные причины, когда обращаться к гинекологу и почему самолечение опасно.
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
                <a href="#simptomy" className="text-emerald-600 hover:underline py-1">Симптомы</a>
                <a href="#srochno" className="text-emerald-600 hover:underline py-1">Когда срочно</a>
                <a href="#kak-prohodit" className="text-emerald-600 hover:underline py-1">Как проходит приём</a>
                <a href="#obrashchatsya" className="text-emerald-600 hover:underline py-1">Когда обращаться</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['vaginit-simptomy-prichiny-i-kogda-nuzhna-konsultatsiya-ginekologa'] ?? '/images/images allergoly/ginokologia.webp'} alt="Вагинит" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Типичная картина и когда к врачу */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Типичная картина и когда нужен врач</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Типичные проявления</h3>
                    <p className="text-gray-700 text-sm mb-0">Выделения, зуд, жжение, дискомфорт при половом акте. Причины: инфекции, бактериальный вагиноз, аллергия, атрофия в менопаузе.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Когда к врачу</h3>
                    <p className="text-gray-700 text-sm mb-0">Любые необычные выделения, зуд, жжение. Не лечитесь «свечами от молочницы» без мазка — это смажет картину.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rose callout: Когда срочно */}
          <section id="srochno" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда обращаться срочно</h2>
            <div className="rounded-2xl p-6 bg-rose-50/80 border-2 border-rose-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Не откладывайте визит при:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> температура на фоне выделений и боли</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> сильный зуд с повреждением кожи</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> беременность с необычными выделениями</div>
                <div className="flex items-center gap-2"><span className="text-rose-500">●</span> боль внизу живота</div>
              </div>
            </div>
          </section>

          {/* Инфографика: Как проходит консультация */}
          <section id="kak-prohodit" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит консультация</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {['Сбор жалоб и анамнеза', 'Осмотр на кресле', 'Мазок на флору и при необходимости ПЦР', 'Оценка результатов', 'Назначение лечения по причине'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Подготовка — инфографика */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Подготовка к визиту</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                'За 24–48 ч: без половых контактов',
                'Без спринцеваний и вагинальных препаратов',
                'Идти лучше в период обострения',
                'Взять результаты прошлых мазков',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl p-4 bg-emerald-50/70 border border-emerald-100">
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700">Подробнее — <Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">«Как подготовиться к приёму гинеколога»</Link>.</p>
          </section>

          <section id="simptomy" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Симптомы вагинита</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Необычные выделения (по цвету, запаху, количеству);</li>
              <li>Зуд, жжение во влагалище и в области входа;</li>
              <li>Дискомфорт при половом акте;</li>
              <li>Покраснение, отёк;</li>
              <li>Иногда — боль при мочеиспускании.</li>
            </ul>
            <p className="mb-4">
              Симптомы могут быть выражены по-разному. Иногда вагинит протекает почти незаметно. Подробнее о выделениях и зуде — в статье <Link href="/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">«Выделения, зуд, жжение: когда к гинекологу»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Основные причины</h2>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Инфекции</h3>
            <p className="mb-4">
              Кандидоз (молочница), бактериальный вагиноз, трихомониаз, хламидии, гонококк и другие ИППП. Каждая инфекция требует своего лечения. «Универсальные» свечи от молочницы не помогут при бактериальном вагинозе или ИППП.
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Неинфекционные причины</h3>
            <p className="mb-4">
              Аллергия на средства гигиены, бельё, лубриканты; атрофический вагинит в менопаузе (истончение и сухость слизистой); раздражение от частого подмывания с мылом. Важно отличить от инфекции — мазки и осмотр помогут.
            </p>
          </section>

          <section id="obrashchatsya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда обращаться</h2>
            <p className="mb-4">
              Запишитесь к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>, если появились необычные выделения, зуд, жжение или дискомфорт. Не начинайте лечение «свечами от молочницы» или спринцеванием без осмотра — это может смазать картину и усложнить диагностику.
            </p>
            <p className="mb-4">
              Врач возьмёт мазок на флору, при необходимости — ПЦР на ИППП, и подберёт лечение по результатам. Подробнее о мазках — в статье <Link href="/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut">«Что показывают мазки у гинеколога»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит лечение</h2>
            <p className="mb-4">
              Лечение зависит от причины: антимикотики при кандидозе, антибактериальные препараты при бактериальном вагинозе и ИППП, местные эстрогены при атрофии. При аллергии — выявление триггера и исключение контакта. Схему назначает врач по результатам анализов.
            </p>
            <p className="mb-4">
              При рецидивирующем вагините врач может рекомендовать дообследование (бакпосев, ПЦР), лечение партнёра, коррекцию образа жизни.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о вагините</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Можно ли лечить вагинит самостоятельно?</dt>
                <dd className="text-gray-700 mb-0">Нежелательно. Без мазка невозможно узнать причину. Лечение «наугад» часто неэффективно и приводит к хронизации или дисбактериозу. Лучше один визит к врачу.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Вагинит и беременность?</dt>
                <dd className="text-gray-700 mb-0">Некоторые инфекции при беременности требуют лечения (в т.ч. для предотвращения осложнений). Схему подбирает врач с учётом срока беременности.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Лечение вагинита в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> можно записаться на приём к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link>, сдать мазки и при необходимости ПЦР. Лечение — по результатам анализов.
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
                  <li><Link href="/articles/vydeleniya-zud-zhzhenie-kogda-k-ginekologu">Выделения, зуд, жжение: когда к гинекологу</Link></li>
                  <li><Link href="/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut">Что показывают мазки у гинеколога</Link></li>
                  <li><Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa">Как подготовиться к приёму гинеколога</Link></li>
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
