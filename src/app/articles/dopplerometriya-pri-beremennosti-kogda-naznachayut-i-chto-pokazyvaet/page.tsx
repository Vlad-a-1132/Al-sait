import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GYNEC_ARTICLE_IMAGES, GYNEC_HUB_URL, GYNEC_SERVICES } from '@/data/gynec-articles-images';

export const metadata: Metadata = {
  title: 'Допплерометрия при беременности: когда назначают и что показывает | Альтамед-С',
  description: 'Допплерометрия плода при беременности — оценка кровотока в сосудах матки и плода. Показания, когда назначают, что показывает исследование.',
  openGraph: {
    title: 'Допплерометрия при беременности | Альтамед-С',
    description: 'Допплерометрия при беременности: показания, когда назначают и что показывает исследование.',
    url: 'https://altamed-c.ru/blog/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet',
    siteName: 'Альтамед-С',
    locale: 'ru_RU',
    type: 'article',
  },
  alternates: { canonical: 'https://altamed-c.ru/blog/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet' },
};

const PHONE_LINK = 'tel:+74952554450';
const APPOINTMENTS_URL = 'https://online.altamed-c.ru/';
const HERO_IMAGE = GYNEC_ARTICLE_IMAGES['dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet'] ?? '/images/images allergoly/ginokologia.webp';

export default function ArticleDopplerometriyaPriBeremennosti() {
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
            <span className="text-gray-900 font-medium">Допплерометрия при беременности</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Допплерометрия при беременности: когда назначают и что показывает
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Допплерометрия — метод УЗИ-диагностики, оценивающий кровоток в сосудах матки, плаценты и плода. Позволяет выявить нарушения снабжения ребёнка кислородом и питательными веществами, оценить состояние плаценты и выявить группы риска по гипоксии плода.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                В материале — когда назначают допплерометрию, что она показывает, как проходит исследование и что означают результаты.
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
                <a href="#pokazyvaet" className="text-emerald-600 hover:underline py-1">Что показывает</a>
                <a href="#voprosy" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src={HERO_IMAGE} alt="Допплерометрия при беременности" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-6">Когда назначают и что оценивают</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-emerald-50 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Когда назначают</h3>
                <p className="text-gray-700 text-sm mb-0">Обычно с 24 недель. Плацентарная недостаточность, ЗВУР, гестоз, многоплодие, резус-конфликт.</p>
              </div>
              <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Что оценивают</h3>
                <p className="text-gray-700 text-sm mb-0">Кровоток в маточных артериях, пуповине, сосудах плода. ИРИ, ПИ, СДО — показатели.</p>
              </div>
            </div>
          </section>

          <section id="naznachayut" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Когда назначают допплерометрию</h2>
            <p className="mb-4">
              Допплерометрию обычно проводят после 18–20 недель, когда сформирована плацента. Планово — в III триместре (30–34 недели) в рамках третьего скрининга или как отдельное исследование. По показаниям назначают раньше или чаще.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Задержка развития плода;</li>
              <li>Многоводие или маловодие;</li>
              <li>Гестоз, артериальная гипертензия у матери;</li>
              <li>Резус-конфликт;</li>
              <li>Многоплодная беременность;</li>
              <li>Рубец на матке;</li>
              <li>Сахарный диабет, заболевания почек у матери.</li>
            </ul>
          </section>

          <section id="pokazyvaet" className="mb-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Что показывает допплерометрия</h2>
            <p className="mb-4">
              Исследуют кровоток в маточных артериях, артериях пуповины, средней мозговой артерии плода. По индексам сопротивления (ИР, ПИ, СДО) оценивают, достаточно ли крови получает плод. Нарушения могут указывать на плацентарную недостаточность, гипоксию, риск задержки развития.
            </p>
            <p className="mb-4">
              Результаты допплера интерпретирует врач. Отклонения от нормы не всегда означают патологию — важно учитывать срок, анамнез и данные обычного УЗИ.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Как проходит исследование</h2>
            <p className="mb-4">
              Допплерометрию проводят так же, как УЗИ при беременности — трансабдоминально, датчиком по животу. Никакой особой подготовки не требуется. Процедура занимает 15–30 минут. Безопасна для матери и плода.
            </p>
            <p className="mb-4">
              В <Link href={GYNEC_SERVICES.vedenie}>Альтамед-С</Link> проводят УЗИ плода и допплерометрию. Подробнее об УЗИ при беременности — в статье <Link href="/blog/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie">«УЗИ при беременности»</Link>.
            </p>
          </section>

          <section id="voprosy" className="mb-12 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Вопросы о допплерометрии</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Вредна ли допплерометрия?</dt>
                <dd className="text-gray-700 mb-0">Нет. Используются ультразвуковые волны. Допплер-режим — часть стандартного УЗИ-аппарата. При разумном использовании безопасен.</dd>
              </div>
              <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-1">Обязательно ли делать допплерометрию?</dt>
                <dd className="text-gray-700 mb-0">При нормально протекающей беременности допплерометрию могут включить в третий скрининг или назначить по усмотрению врача. При рисках (гестоз, задержка роста плода и др.) — исследование показано.</dd>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Допплерометрия в Альтамед-С</h2>
            <p className="text-gray-700 mb-6">
              В <Link href={GYNEC_HUB_URL}>Альтамед-С</Link> проводят УЗИ плода и допплерометрию при беременности. Запись на приём — онлайн и по телефону.
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
                  <li><Link href="/blog/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie">УЗИ при беременности</Link></li>
                  <li><Link href="/blog/kak-prohodit-vedenie-beremennosti">Ведение беременности в Одинцово</Link></li>
                  <li><Link href="/blog/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya">Первый приём беременной</Link></li>
                  <li><Link href="/blog/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya">Подготовка к беременности</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
