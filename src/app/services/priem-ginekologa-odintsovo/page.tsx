'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctors } from '@/data/static-data';

const PHONE = '+7 (495) 255-44-50';
const PHONE_LINK = 'tel:+74952554450';

const GYNECOLOGISTS = doctors.filter(
  (d) =>
    d.specialization?.toLowerCase().includes('гинеколог') ||
    d.specialization?.toLowerCase().includes('акушер')
);

export default function PriemGinekologaOdintsovoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/ginekolog-v-odintsovo" className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Приём гинеколога</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Приём гинеколога: первичный и повторный — как проходит и что входит
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Как проходит приём гинеколога: первичная и повторная консультация, осмотр, мазки, возможные обследования. Что взять с собой и как подготовиться.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться на приём
                </Link>
                <a href={PHONE_LINK} className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">Первичный приём — от 3 780 ₽ · Повторный — от 2 840 ₽</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#kogda" className="text-emerald-600 hover:underline py-1">Когда обращаться</a>
                <a href="#chto-vhodit" className="text-emerald-600 hover:underline py-1">Что входит</a>
                <a href="#tseny" className="text-emerald-600 hover:underline py-1">Цены</a>
                <a href="#vrachi" className="text-emerald-600 hover:underline py-1">Врачи</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/blog/task_01kmevvzkgedjsr3sqhp1tbp7j_1774320514_img_1.webp" alt="Приём гинеколога в Одинцово" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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

      {/* Что доступно в Альтамед-С */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Что доступно в Альтамед-С</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Консультация и осмотр</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Сбор жалоб, анамнеза, осмотр в зеркалах. Врач оценивает состояние, даёт рекомендации и при необходимости назначает обследования.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Мазки и кольпоскопия</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Взятие мазков на флору и онкоцитологию, кольпоскопия простая и расширенная — в клинике в день приёма.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ и анализы</h3>
              <p className="text-gray-600 text-sm leading-relaxed">УЗИ органов малого таза, лабораторная диагностика — инфекции, гормоны по показаниям. Обследования в одном медцентре.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Подбор контрацепции</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Консультация по методам контрацепции, внутриматочная спираль, подбор препаратов с учётом особенностей здоровья.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Профилактический осмотр</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Регулярный осмотр без жалоб — раннее выявление изменений, контроль женского здоровья, обсуждение вопросов.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Планирование беременности</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Подготовка к зачатию — оценка состояния, рекомендации по обследованиям, при необходимости направление к акушеру-гинекологу.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Чем занимается гинеколог */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Чем занимается гинеколог</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Гинеколог — врач, специализирующийся на женском репродуктивном здоровье. К нему обращаются с широким спектром вопросов: от профилактического осмотра до диагностики и лечения гинекологических заболеваний, нарушений менструального цикла, воспалительных процессов, проблем с зачатием, подбора контрацепции.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            На приёме гинеколог собирает анамнез, проводит осмотр, при необходимости назначает мазки, УЗИ, кольпоскопию, анализы крови на гормоны и инфекции. По результатам даёт рекомендации, составляет план лечения или дополнительного обследования, при показаниях направляет к узким специалистам — гинекологу-эндокринологу, акушеру-гинекологу.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Регулярное наблюдение у гинеколога помогает вовремя заметить изменения, предотвратить развитие заболеваний и сохранить репродуктивное здоровье. Профилактический осмотр рекомендован не реже раза в год даже при отсутствии жалоб.
          </p>
        </div>
      </section>

      {/* Чем приём гинеколога отличается от акушера-гинеколога */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Чем приём гинеколога отличается от акушера-гинеколога</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Обычный приём гинеколога охватывает общие вопросы женского здоровья: профилактические осмотры, боли внизу живота, нарушения цикла, необычные выделения, зуд, жжение, подбор контрацепции, диагностика воспалительных заболеваний, кольпоскопия, УЗИ.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            К акушеру-гинекологу логичнее записаться, когда речь идёт о планировании беременности, уже наступившей беременности, ведении беременности, наблюдении после родов или подготовке к ЭКО. Акушер-гинеколог делает акцент на репродуктивном здоровье и сопровождении на этих этапах.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Если вы не уверены, к кому идти, можно начать с приёма гинеколога — он оценит ситуацию и при необходимости порекомендует акушера-гинеколога или гинеколога-эндокринолога. Либо записаться к нужному специалисту, указав цель визита при записи.
          </p>
        </div>
      </section>

      {/* Кому подходит консультация */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Кому подходит консультация гинеколога</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Боли внизу живота</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Тянущие, острые, схваткообразные боли — врач поможет оценить причину и при необходимости назначит обследование.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Нарушения цикла</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Задержки, нерегулярные месячные, обильные или скудные кровотечения — повод для консультации.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Выделения, зуд, жжение</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Изменение цвета, запаха, консистении выделений, дискомфорт — осмотр и мазки помогут уточнить причину.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Кровянистые выделения вне месячных</h3>
              <p className="text-gray-700 text-sm leading-relaxed">«Мазня» между циклами, после полового акта — требуют оценки специалиста.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Профилактический осмотр</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Регулярная проверка без жалоб — рекомендуется не реже раза в год.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Подбор контрацепции</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Обсуждение методов, установка ВМС, подбор препаратов с учётом здоровья.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Планирование беременности</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Подготовка к зачатию — оценка состояния, рекомендации, при необходимости направление к акушеру-гинекологу.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Контроль после лечения</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Оценка эффективности терапии, контроль результатов мазков, кольпоскопии, УЗИ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Когда стоит записаться */}
      <section id="kogda" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Когда стоит записаться</h2>
          <div className="space-y-6">
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Боли внизу живота</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Любые боли, тянущие ощущения или дискомфорт в нижней части живота могут быть поводом для обращения. Врач поможет оценить причину и при необходимости назначит обследование. Повторяющаяся боль, боль вместе с выделениями или температурой — повод не откладывать визит.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Задержки и сбой цикла</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Нерегулярные месячные, длительные задержки или слишком частые кровотечения — повод для консультации. Гинеколог оценит ситуацию и при гормональной природе может направить к гинекологу-эндокринологу.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Кровянистые выделения вне менструации</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Мажущие или кровянистые выделения между месячными требуют оценки. Специалист поможет определить причину и при необходимости назначит УЗИ, кольпоскопию или анализы.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Зуд, жжение, дискомфорт</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Эти симптомы могут указывать на воспалительный процесс или инфекцию. Осмотр и мазки помогают уточнить диагноз. За 24–48 часов до визита лучше воздержаться от половых контактов и местных препаратов.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Изменения выделений</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Необычный цвет, запах, консистенция — повод для осмотра. Врач назначит анализы при необходимости.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Профилактический визит</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Рекомендуется проходить осмотр не реже раза в год, даже при отсутствии жалоб. Это помогает вовремя выявить изменения, обсудить вопросы контрацепции, цикла и женского здоровья.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Подготовка к беременности</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Перед планированием зачатия полезно пройти консультацию, обсудить обследования и получить рекомендации. При необходимости гинеколог направит к акушеру-гинекологу для ведения беременности.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Что входит в приём */}
      <section id="chto-vhodit" className="py-10 sm:py-12 md:py-14 bg-gray-50/50 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Что входит в приём гинеколога</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Первичный приём строится так, чтобы пациентка получила не только осмотр, но и понятный план дальнейших действий.
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Сбор жалоб и анамнеза</strong> — что беспокоит, длительность симптомов, особенности цикла, перенесённые заболевания;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Консультация</strong> — обсуждение цели визита, ответы на вопросы;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Осмотр</strong> — объём определяется индивидуально (осмотр в зеркалах, бимануальное исследование);</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Мазки</strong> — при необходимости взятие мазков на флору и онкоцитологию;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Рекомендации</strong> — по обследованию (УЗИ, кольпоскопия, анализы), лечению или дальнейшему наблюдению.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Многие обследования — мазки, УЗИ, кольпоскопия — можно пройти в клинике в день приёма. Если у вас есть результаты предыдущих анализов или УЗИ, их стоит взять с собой.
          </p>
        </div>
      </section>

      {/* Как проходит консультация */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Как проходит консультация</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Консультация начинается с беседы: врач уточняет жалобы, длительность симптомов, особенности цикла, перенесённые заболевания, метод контрацепции. Это помогает составить общую картину.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Далее проводится осмотр. Объём обследования определяется индивидуально. При необходимости назначаются мазки, УЗИ органов малого таза, кольпоскопия — многие из этих исследований можно пройти в клинике в тот же день.
          </p>
          <p className="text-gray-700 leading-relaxed">
            По результатам осмотра врач даёт рекомендации и при необходимости составляет план лечения или дополнительного обследования. Консультация проходит деликатно, спокойно и понятно для пациентки.
          </p>
        </div>
      </section>

      {/* Диагностика и обследования */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Диагностика и обследования</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            В зависимости от жалоб и результатов осмотра при необходимости гинеколог может назначить:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Осмотр и мазки</h3>
              <p className="text-gray-600 text-sm">Осмотр в зеркалах, мазки на флору и онкоцитологию. Мазки берут на приёме.</p>
            </div>
            <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Кольпоскопия</h3>
              <p className="text-gray-600 text-sm">Простая и расширенная — исследование шейки матки под увеличением. Проводится в клинике.</p>
            </div>
            <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ</h3>
              <p className="text-gray-600 text-sm">УЗИ органов малого таза — оценка матки, яичников. Доступно в клинике.</p>
            </div>
            <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Лабораторная диагностика</h3>
              <p className="text-gray-600 text-sm">Анализы на инфекции, гормоны по показаниям, общие анализы крови и мочи.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Почему обращаются в Альтамед-С */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Почему обращаются в Альтамед-С</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Приём гинеколога в Одинцово</strong> — не нужно ехать в другой район.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Два филиала клиники</strong> — можно выбрать удобный адрес.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">УЗИ и анализы в клинике</strong> — консультация и обследования в одном месте.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Опытные гинекологи</strong> — врачи со стажем до 43 лет.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Запись онлайн и по телефону</strong> — удобно подобрать время.</div></li>
          </ul>
        </div>
      </section>

      {/* Цены */}
      <section id="tseny" className="py-10 sm:py-12 md:py-14 bg-gray-50/50 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Цены</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Стоимость зависит от типа консультации и объёма обследования. Ниже приведены основные услуги для ориентирования.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm mb-4">
            <table className="w-full text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-4 px-4 font-semibold text-gray-800">Услуга</th>
                  <th className="text-right py-4 px-4 font-semibold text-gray-800 w-28">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Приём акушера-гинеколога первичный</td><td className="py-3 px-4 text-right font-semibold">3 780 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">Приём акушера-гинеколога повторный</td><td className="py-3 px-4 text-right font-semibold">2 840 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Взятие мазков</td><td className="py-3 px-4 text-right font-semibold">530 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">Кольпоскопия</td><td className="py-3 px-4 text-right font-semibold">1 890 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Кольпоскопия расширенная</td><td className="py-3 px-4 text-right font-semibold">2 100 ₽</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-4">Актуальные цены уточняйте при записи. Полный прайс — на странице услуг.</p>
          <Link href="/ginekolog-v-odintsovo#tseny" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Смотреть все цены →
          </Link>
        </div>
      </section>

      {/* Врачи */}
      <section id="vrachi" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Врачи-гинекологи</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            В Альтамед-С ведут приём гинекологи с опытом работы. Выбрать врача можно по филиалу, времени приёма и стажу. Записаться можно к любому специалисту — администратор поможет подобрать удобное время.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {GYNECOLOGISTS.map((d) => (
              <div key={d.id} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4 ring-2 ring-white shadow-md">
                  <Image src={d.photo} alt={d.name} fill className="object-cover" sizes="96px" />
                </div>
                <h3 className="font-bold text-gray-900">{d.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{d.specialization}</p>
                <p className="text-gray-500 text-sm mt-1">Стаж {d.experience} лет</p>
                <div className="mt-4 flex gap-2">
                  <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition">Записаться</Link>
                  <Link href={`/doctors/${d.slug}`} className="py-2.5 px-4 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition">О враче</Link>
                </div>
              </div>
            ))}
          </div>
          <Link href="/ginekolog-v-odintsovo#vrachi" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Наши врачи-гинекологи →
          </Link>
        </div>
      </section>

      {/* Как подготовиться к приёму */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Как подготовиться к приёму</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Особой подготовки не требуется. За 1–2 дня до визита лучше воздержаться от половых контактов и использования местных препаратов (свечи, кремы) — иначе мазок может быть искажён. Приём возможен в любой день цикла, кроме дней менструации. Оптимально — первая половина цикла (5–12-й день).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Что взять с собой: паспорт, при наличии — результаты предыдущих УЗИ, мазков, анализов. Можно записать вопросы, которые хотите задать врачу.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-3">
            {[
              { q: 'Когда нужно записаться к гинекологу?', a: 'При болях, нарушениях цикла, дискомфорте, необычных выделениях, а также для профилактического осмотра и планирования беременности. Любые сомнения — повод для консультации.' },
              { q: 'Можно ли прийти на профилактический осмотр?', a: 'Да. Профилактический осмотр — одно из основных направлений. Рекомендуется проходить его не реже раза в год даже при отсутствии жалоб.' },
              { q: 'Что взять с собой на приём?', a: 'Паспорт, при наличии — результаты предыдущих обследований. Особой подготовки не требуется. За 1–2 дня до визита лучше воздержаться от половых контактов и использования местных препаратов.' },
              { q: 'Можно ли пройти УЗИ и анализы в день приёма?', a: 'Да. В клинике можно сдать анализы и пройти УЗИ. Врач при необходимости назначит обследования, многие из них доступны в том же медцентре.' },
              { q: 'Чем отличается первичный приём от повторного?', a: 'Первичный приём включает сбор анамнеза, осмотр и первичную оценку. Повторный — для контроля лечения, обсуждения результатов обследований и корректировки тактики.' },
              { q: 'Нужен ли гинеколог или акушер-гинеколог?', a: 'Для общего осмотра, болей, нарушений цикла, выделений, контрацепции — гинеколог. Для планирования беременности, ведения беременности, послеродового наблюдения — акушер-гинеколог.' },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm hover:border-emerald-100 transition">
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition" aria-expanded={openFaq === i}>
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <span className={`text-emerald-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                {openFaq === i && <div className="px-4 pb-4 pt-0"><p className="text-gray-700 text-sm leading-relaxed">{f.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Полезные статьи */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Полезные статьи</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
            <li><Link href="/blog/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov" className="text-emerald-600 hover:underline">Когда нужно записаться к гинекологу: 10 симптомов</Link></li>
            <li><Link href="/blog/kak-podgotovitsya-k-priyomu-ginekologa" className="text-emerald-600 hover:underline">Как подготовиться к приёму гинеколога</Link></li>
            <li><Link href="/blog/bol-vnizu-zhivota-u-zhenshchin-prichiny" className="text-emerald-600 hover:underline">Боль внизу живота у женщин</Link></li>
            <li><Link href="/blog/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut" className="text-emerald-600 hover:underline">Что показывает кольпоскопия</Link></li>
            <li><Link href="/blog/vydeleniya-zud-zhzhenie-kogda-k-ginekologu" className="text-emerald-600 hover:underline">Выделения, зуд, жжение</Link></li>
            <li><Link href="/blog/ginekolog-ili-ginekolog-endokrinolog" className="text-emerald-600 hover:underline">Гинеколог или гинеколог-эндокринолог</Link></li>
          </ul>
        </div>
      </section>

      {/* Связанные направления */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Связанные направления</h2>
          <p className="text-gray-600 mb-6">
            Если вы не уверены, какой именно специалист нужен, начните с консультации — врач или администратор помогут выбрать подходящее направление.
          </p>
          <div className="space-y-4">
            <Link href="/ginekolog-v-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Гинеколог в Одинцово</span>
              <p className="text-gray-600 text-sm mt-1">Общее направление — приём гинекологов, диагностика, консультации.</p>
            </Link>
            <Link href="/services/akusher-ginekolog-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Акушер-гинеколог</span>
              <p className="text-gray-600 text-sm mt-1">Планирование беременности, ведение беременности, послеродовое наблюдение.</p>
            </Link>
            <Link href="/services/vedenie-beremennosti-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Ведение беременности</span>
              <p className="text-gray-600 text-sm mt-1">Наблюдение на всех сроках, УЗИ, анализы.</p>
            </Link>
            <Link href="/services/profilakticheskiy-osmotr-ginekologa-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Профилактические осмотры</span>
              <p className="text-gray-600 text-sm mt-1">Регулярный осмотр без жалоб.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Записаться на приём к гинекологу</h2>
          <p className="text-gray-700 mb-4 max-w-xl mx-auto leading-relaxed">
            Врач поможет оценить симптомы, подобрать обследование и определить дальнейшую тактику. Запись онлайн и по телефону ежедневно.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition">
              Записаться онлайн
            </Link>
            <a href={PHONE_LINK} className="inline-flex justify-center px-6 py-3.5 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition">
              {PHONE}
            </a>
          </div>
          <p className="text-gray-600 text-sm">Администратор поможет выбрать врача, филиал и удобное время приёма.</p>
        </div>
      </section>
    </div>
  );
}
