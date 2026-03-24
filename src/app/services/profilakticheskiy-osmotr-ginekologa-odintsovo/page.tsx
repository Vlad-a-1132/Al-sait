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

export default function ProfilakticheskiyOsmotrGinekologaOdintsovoPage() {
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
            <span className="text-gray-900 font-medium">Профилактический осмотр</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Профилактический осмотр гинеколога в Одинцово
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Профилактический осмотр у гинеколога — важная часть заботы о женском здоровье даже при отсутствии жалоб. Регулярная консультация помогает вовремя заметить изменения. В Альтамед-С — осмотр, мазки, кольпоскопия и УЗИ в день приёма.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться на приём
                </Link>
                <a href={PHONE_LINK} className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">Первичный приём — от 3 780 ₽</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#kogda" className="text-emerald-600 hover:underline py-1">Когда проходить</a>
                <a href="#chto-vhodit" className="text-emerald-600 hover:underline py-1">Что входит</a>
                <a href="#tseny" className="text-emerald-600 hover:underline py-1">Цены</a>
                <a href="#vrachi" className="text-emerald-600 hover:underline py-1">Врачи</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/blog/task_01kmewx9vpem3tg59gafhbr63m_1774321601_img_1.webp" alt="Профилактический осмотр гинеколога в Одинцово" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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

      {/* Что входит в профилактический осмотр */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Что входит в профилактический осмотр</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Беседа с врачом</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Уточнение жалоб, особенностей цикла, метода контрацепции. Возможность задать вопросы о женском здоровье.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Осмотр в зеркалах</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Визуальная оценка состояния шейки матки и слизистых. Выявление изменений на ранней стадии.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Мазки на флору и онкоцитологию</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Скрининг воспалительных процессов и изменений клеток шейки матки. Взятие на приёме.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Кольпоскопия по показаниям</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Исследование шейки матки под увеличением при необходимости. Проводится в клинике.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ по рекомендации</h3>
              <p className="text-gray-600 text-sm leading-relaxed">УЗИ органов малого таза при показаниях. Доступно в клинике в день приёма.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Рекомендации</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Дата следующего визита, советы по контрацепции, образу жизни, при необходимости — дообследование.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Зачем нужен профилактический осмотр */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Зачем нужен профилактический осмотр</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Многие гинекологические заболевания на ранних стадиях протекают бессимптомно. Профилактический осмотр позволяет вовремя выявить изменения шейки матки, воспалительные процессы, нарушения и при необходимости провести дообследование или лечение.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Регулярное наблюдение даёт женщине уверенность в состоянии здоровья и возможность обсудить с врачом любые вопросы — от контрацепции до изменений цикла. Даже если кажется, что «всё в порядке», осмотр раз в год — разумная профилактика.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Мазок на онкоцитологию (ПАП-тест) входит в стандарт профилактического осмотра и помогает выявить изменения клеток шейки матки на ранней стадии. Кольпоскопия назначается при показаниях по результатам осмотра и мазка.
          </p>
        </div>
      </section>

      {/* Когда проходить осмотр */}
      <section id="kogda" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Когда проходить профилактический осмотр</h2>
          <div className="space-y-6">
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Регулярно — раз в год</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Рекомендуется проходить профилактический осмотр не реже одного раза в год, даже при отсутствии жалоб. При наличии факторов риска или хронических заболеваний врач может рекомендовать чаще.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Давно не были у гинеколога</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Если прошло больше года с последнего осмотра — повод запланировать визит. Не стоит откладывать из-за «некогда» или «ничего не беспокоит».</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Перед планированием беременности</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Подготовка к зачатию часто включает профилактический осмотр и базовые обследования. Врач оценит состояние и даст рекомендации.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Незначительные изменения цикла</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Даже незначительные изменения цикла можно обсудить на профилактическом приёме. Врач поможет понять, нужны ли дополнительные обследования.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Что входит в приём */}
      <section id="chto-vhodit" className="py-10 sm:py-12 md:py-14 bg-gray-50/50 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Как проходит профилактический приём</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Приём начинается с беседы. Врач уточняет, есть ли жалобы, как проходят месячные, какой метод контрацепции используется, когда был последний осмотр.
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Осмотр в зеркалах</strong> — оценка шейки матки и слизистых;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Взятие мазков</strong> — на флору и онкоцитологию;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Кольпоскопия</strong> — по показаниям (при изменениях на осмотре или в анамнезе);</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">УЗИ</strong> — при необходимости по рекомендации врача;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Рекомендации</strong> — дата следующего визита, ответы на вопросы.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Объём обследования определяет врач индивидуально. Мазки берут на приёме — сдавать анализы заранее не нужно.
          </p>
        </div>
      </section>

      {/* Подготовка к приёму */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Как подготовиться к приёму</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            За 1–2 дня до визита лучше воздержаться от половых контактов, спринцеваний и использования местных препаратов (свечи, кремы) — иначе мазок может быть искажён. Приём возможен в любой день цикла, кроме дней менструации. Оптимально — первая половина цикла (5–12-й день).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Что взять с собой: паспорт, при наличии — результаты предыдущих обследований. Особой подготовки не требуется.
          </p>
        </div>
      </section>

      {/* Почему обращаются в Альтамед-С */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Почему обращаются в Альтамед-С</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Профилактический осмотр в Одинцово</strong> — не нужно ехать в другой район.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Два филиала</strong> — выбор удобного адреса.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Мазки и кольпоскопия в клинике</strong> — всё в одном месте.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Опытные гинекологи</strong> — врачи со стажем до 43 лет.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Запись ежедневно</strong> — онлайн и по телефону с 8:00 до 21:00.</div></li>
          </ul>
        </div>
      </section>

      {/* Цены */}
      <section id="tseny" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Цены</h2>
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
          <p className="text-gray-600 text-sm mb-4">Актуальные цены уточняйте при записи.</p>
          <Link href="/ginekolog-v-odintsovo#tseny" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Смотреть все цены →
          </Link>
        </div>
      </section>

      {/* Врачи */}
      <section id="vrachi" className="py-10 sm:py-12 md:py-14 bg-gray-50/50 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Врачи-гинекологи</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            В Альтамед-С ведут приём гинекологи с опытом работы. Записаться на профилактический осмотр можно к любому специалисту.
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

      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-3">
            {[
              { q: 'Нужно ли идти к гинекологу без жалоб?', a: 'Да. Профилактический осмотр рекомендован не реже раза в год даже при отсутствии жалоб. Это позволяет вовремя выявить изменения.' },
              { q: 'Как часто проходить профилактический осмотр?', a: 'Не реже одного раза в год. При наличии факторов риска или хронических заболеваний врач может рекомендовать чаще.' },
              { q: 'Что входит в консультацию?', a: 'Беседа, осмотр в зеркалах, взятие мазков. При необходимости — кольпоскопия, УЗИ. Объём определяет врач.' },
              { q: 'Нужно ли сдавать анализы заранее?', a: 'Нет. Мазки берут на приёме. Дополнительные анализы врач назначит при необходимости.' },
              { q: 'Можно ли записаться просто для проверки?', a: 'Да. Профилактический осмотр — одна из основных причин обращения. Запись доступна онлайн и по телефону.' },
              { q: 'В какой день цикла лучше записываться?', a: 'Оптимально — первая половина цикла (5–12-й день), после месячных. Но приём возможен в любой день, кроме менструации.' },
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
            <li><Link href="/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov" className="text-emerald-600 hover:underline">Когда нужно записаться к гинекологу: 10 симптомов</Link></li>
            <li><Link href="/articles/profilakticheskiy-osmotr-ginekologa-kakie-obsledovaniya-mogut-ponadobitsya" className="text-emerald-600 hover:underline">Профилактический осмотр: какие обследования</Link></li>
            <li><Link href="/articles/chto-pokazyvaet-kolposkopiya-i-kogda-ee-naznachayut" className="text-emerald-600 hover:underline">Что показывает кольпоскопия</Link></li>
            <li><Link href="/articles/chto-pokazyvayut-mazki-u-ginekologa-i-kogda-ih-naznachayut" className="text-emerald-600 hover:underline">Что показывают мазки у гинеколога</Link></li>
            <li><Link href="/articles/kak-podgotovitsya-k-priyomu-ginekologa" className="text-emerald-600 hover:underline">Как подготовиться к приёму гинеколога</Link></li>
          </ul>
        </div>
      </section>

      {/* Связанные направления */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Связанные направления</h2>
          <div className="space-y-4">
            <Link href="/services/priem-ginekologa-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Приём гинеколога</span>
              <p className="text-gray-600 text-sm mt-1">Консультация, осмотр, диагностика при жалобах.</p>
            </Link>
            <Link href="/ginekolog-v-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Гинеколог в Одинцово</span>
              <p className="text-gray-600 text-sm mt-1">Общее направление.</p>
            </Link>
            <Link href="/articles/kogda-nuzhno-zapisatsya-k-ginekologu-10-simptomov" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Когда записаться к гинекологу — 10 симптомов</span>
              <p className="text-gray-600 text-sm mt-1">Признаки, при которых нужна консультация.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Записаться на профилактический осмотр</h2>
          <p className="text-gray-700 mb-4 max-w-xl mx-auto leading-relaxed">
            Регулярный осмотр — залог женского здоровья. Запись онлайн и по телефону ежедневно.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition">
              Записаться онлайн
            </Link>
            <a href={PHONE_LINK} className="inline-flex justify-center px-6 py-3.5 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition">
              {PHONE}
            </a>
          </div>
          <p className="text-gray-600 text-sm">Администратор поможет выбрать врача и удобное время.</p>
        </div>
      </section>
    </div>
  );
}
