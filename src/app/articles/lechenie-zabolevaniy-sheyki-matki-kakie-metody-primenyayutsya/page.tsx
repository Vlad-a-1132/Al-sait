import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Лечение заболеваний шейки матки: какие методы применяются | Альтамед-С',
  description: 'Лечение эрозии, дисплазии, лейкоплакии шейки матки: криодеструкция, радиоволновая хирургия, лазер. Когда какой метод выбирают.',
  openGraph: {
    title: 'Лечение заболеваний шейки матки | Альтамед-С',
    description: 'Какие методы применяются при лечении заболеваний шейки матки.',
    url: 'https://altamed-c.ru/articles/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/articles/lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';

export default function ArticleLechenieZabolevaniySheykiMatki() {
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
            <span className="text-gray-900 font-medium">Лечение шейки матки</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Лечение заболеваний шейки матки: какие методы применяются
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Заболевания шейки матки — эрозия, эктопия, дисплазия, лейкоплакия, полипы — требуют точной диагностики перед лечением. После кольпоскопии и при необходимости биопсии врач выбирает метод: деструкция патологического очага, иссечение или конизация.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — какие методы применяются при лечении шейки матки, когда что выбирают и как проходит реабилитация.
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
                <a href="#kriodestrukciya" className="text-emerald-600 hover:underline py-1">Криодеструкция</a>
                <a href="#radiovolnovaya" className="text-emerald-600 hover:underline py-1">Радиоволновая</a>
                <a href="#metod" className="text-emerald-600 hover:underline py-1">Выбор метода</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={GYNEC_ARTICLE_IMAGES['lechenie-zabolevaniy-sheyki-matki-kakie-metody-primenyayutsya'] ?? '/images/images allergoly/ginokologia.webp'} alt="Лечение заболеваний шейки матки" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
          {/* Инфографика: Методы лечения */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Методы лечения шейки матки</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Доброкачественные изменения</h3>
                <p className="text-gray-700 text-sm mb-0">Криодеструкция, радиоволновой метод, химические препараты. После кольпоскопии и биопсии — выбор тактики.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Дисплазия и предрак</h3>
                <p className="text-gray-700 text-sm mb-0">Конизация (иссечение), радиоволновая эксцизия. Гистология обязательна. Контроль после лечения.</p>
              </div>
            </div>
          </section>

          <section id="kriodestrukciya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Криодеструкция</h2>
            <p className="mb-4">
              Воздействие жидким азотом — ткань замораживается и отторгается. Метод подходит для доброкачественных изменений (эрозия, эктопия без дисплазии). Подробнее — в статье <Link href="/articles/kriodestrukciya-sheyki-matki-kogda-primenyaetsya-i-chto-vazhno-znat">«Криодеструкция шейки матки»</Link>.
            </p>
          </section>

          <section id="radiovolnovaya" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Радиоволновая хирургия</h2>
            <p className="mb-4">
              Аппараты «Сургитрон» и аналоги — бесконтактное иссечение радиоволной. Применяют для удаления полипов, кондилом, биопсии, лечения дисплазии. Меньше кровотечений, более точное иссечение. Подробнее — в статье <Link href="/articles/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury">«Радиоволновая биопсия шейки матки»</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Лазерная вапоризация и конизация</h2>
            <p className="mb-4">
              Лазер выпаривает патологическую ткань или иссекает конусообразный участок. Используют при дисплазии, небольших изменениях. Требует оборудования и опыта врача.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Электрокоагуляция</h2>
            <p className="mb-4">
              Воздействие электрическим током. Метод доступен, но может оставлять рубцы и укорачивать шейку. Чаще применяют при ограниченных возможностях или по показаниям.
            </p>
          </section>

          <section id="metod" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда какой метод</h2>
            <p className="mb-4">
              Выбор зависит от диагноза (доброкачественное изменение, дисплазия, полип), возраста, планов на беременность. При дисплазии высокой степени может потребоваться конизация с гистологией. Тактику определяет врач после <Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">кольпоскопии</Link> и <Link href="/articles/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto">биопсии</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">После лечения</h2>
            <p className="mb-4">
              Обычно рекомендуют 3–4 недели без половых контактов, тампонов, бани, бассейна. Возможны водянистые или кровянистые выделения. Контрольный осмотр — через 1–2 месяца. При дисплазии — наблюдение по протоколу.
            </p>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Лечение шейки матки в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят лечение заболеваний шейки матки. Запись на консультацию к <Link href={GYNEC_SERVICES.priem}>гинекологу</Link> — онлайн и по телефону.
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
                  <li><Link href="/articles/kriodestrukciya-sheyki-matki-kogda-primenyaetsya-i-chto-vazhno-znat">Криодеструкция шейки матки</Link></li>
                  <li><Link href="/articles/radiovolnovaya-biopsiya-sheyki-matki-osobennosti-procedury">Радиоволновая биопсия шейки матки</Link></li>
                  <li><Link href="/articles/polipy-v-ginekologii-kogda-nuzhno-udalenie-i-kak-prohodit-procedura">Полипы в гинекологии</Link></li>
                  <li><Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut">Что показывает кольпоскопия</Link></li>
                  <li><Link href="/articles/biopsiya-sheyki-matki-kogda-naznachayut-i-bolno-li-eto">Биопсия шейки матки</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
