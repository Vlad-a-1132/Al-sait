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

export default function VedenieBeremennostiOdintsovoPage() {
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
            <span className="text-gray-900 font-medium">Ведение беременности</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Планирование и ведение беременности в Одинцово
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Программа ведения беременности в Альтамед-С — наблюдение у акушера-гинеколога на всех сроках. Консультации по графику, УЗИ по триместрам, анализы и подготовка к родам в одном медцентре.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться на приём
                </Link>
                <a href={PHONE_LINK} className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">Ведение беременности — от 2 630 ₽ за визит · УЗИ — от 1 890 ₽</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a href="#kogda" className="text-emerald-600 hover:underline py-1">Когда обращаться</a>
                <a href="#programma" className="text-emerald-600 hover:underline py-1">Что входит</a>
                <a href="#tseny" className="text-emerald-600 hover:underline py-1">Цены</a>
                <a href="#vrachi" className="text-emerald-600 hover:underline py-1">Врачи</a>
                <a href="#faq" className="text-emerald-600 hover:underline py-1">FAQ</a>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[280px] sm:max-h-[340px] lg:max-h-none rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/blog/Screenshot_1559.png" alt="Ведение беременности в Одинцово" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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

      {/* Что доступно */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Что входит в программу ведения беременности</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Подготовка к зачатию</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Консультация до беременности, оценка здоровья, рекомендации по обследованиям и приёму фолиевой кислоты.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Плановые консультации</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Регулярные визиты по графику — частота зависит от срока и особенностей течения беременности.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ по триместрам</h3>
              <p className="text-gray-600 text-sm leading-relaxed">УЗИ плода в I, II и III триместрах, допплерометрия по показаниям — в клинике.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Лабораторная диагностика</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Анализы крови и мочи, мазки по плану ведения — сдача в клинике.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Контроль в динамике</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Наблюдение у одного врача — оценка состояния матери и плода по срокам.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Подготовка к родам</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Обсуждение родоразрешения, выбор роддома, рекомендации на поздних сроках.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Чем ведение беременности в платной клинике удобно */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Чем ведение беременности в платной клинике удобно</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ведение беременности в Альтамед-С — это наблюдение у акушера-гинеколога по индивидуальному графику. Будущая мама может выбрать врача, наблюдаться у одного специалиста на всех сроках и проходить обследования в одной клинике, без очередей и потери времени.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Программа ведения строится с учётом срока беременности, анамнеза и особенностей течения. Врач определяет график визитов, объём обследований и при необходимости корректирует тактику. Можно оформить ведение в платной клинике и рожать в выбранном роддоме — это распространённая практика.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Консультации, УЗИ, анализы — всё в одном месте. Это удобно для работающих женщин и тех, кто ценит комфорт и понятный маршрут наблюдения.
          </p>
        </div>
      </section>

      {/* Когда стоит встать на учёт */}
      <section id="kogda" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Когда стоит встать на учёт по беременности</h2>
          <div className="space-y-6">
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Сразу после положительного теста</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Рекомендуется записаться в течение 1–2 недель. Врач подтвердит маточную беременность, определит срок, исключит внематочную и выстроит план наблюдения. Раннее обращение позволяет пройти первый скрининг (11–14 недель) в нужное окно.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">До 12 недель — оптимально</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Постановка на учёт до 12 недель даёт возможность пройти все скрининговые исследования в срок. Первый скрининг (УЗИ + биохимия) проводится в 11–14 недель — если встать позже, можно пропустить важное окно.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">При планировании — до зачатия</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Консультация до беременности помогает оценить состояние, обсудить обследования и подготовиться к зачатию. Врач порекомендует приём фолиевой кислоты, при необходимости — анализы на инфекции, УЗИ органов малого таза.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Программа: что входит */}
      <section id="programma" className="py-10 sm:py-12 md:py-14 bg-gray-50/50 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Что входит в программу ведения</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Программа ведения беременности включает плановые визиты к акушеру-гинекологу, обследования по срокам и контроль в динамике. Объём определяется индивидуально.
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Плановые консультации</strong> — по графику в зависимости от срока (в I триместре реже, во II и III — чаще);</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Осмотр</strong> — измерение давления, веса, окружности живота, высоты дна матки, аускультация сердцебиения плода;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">УЗИ по триместрам</strong> — I триместр (11–14 нед), II триместр (18–21 нед), III триместр (30–34 нед);</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Анализы</strong> — кровь, моча, мазки по плану ведения;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Допплерометрия</strong> — по показаниям для оценки кровотока у плода;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Контроль в динамике</strong> — оценка результатов, корректировка тактики при необходимости.</li>
          </ul>
        </div>
      </section>

      {/* Наблюдение по триместрам */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Наблюдение по триместрам</h2>
          <div className="space-y-5">
            <div className="rounded-2xl p-5 sm:p-6 bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">I триместр (до 14 недель)</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Подтверждение маточной беременности, расчёт срока, УЗИ в 11–14 недель (скрининг хромосомных аномалий), биохимия (РАРР-А, ХГЧ). На этом этапе важно оценить самочувствие, обсудить жалобы и выстроить план наблюдения.
              </p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">II триместр (14–28 недель)</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                УЗИ в 18–21 неделю (анатомия плода, скрининг пороков). Плановые визиты по графику, контроль анализов, общее самочувствие. Тройной тест по показаниям.
              </p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">III триместр (с 28 недель)</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                УЗИ в 30–34 недели (размеры плода, положение, плацента, допплерометрия по показаниям). Учащение визитов, подготовка к родам, выбор роддома, контроль отёков и давления.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* УЗИ и диагностика в клинике */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">УЗИ и диагностика в клинике</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            В Альтамед-С выполняют УЗИ плода во всех триместрах, допплерометрию, лабораторную диагностику. Консультации и обследования — в одном месте, без необходимости ехать в разные учреждения.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ I триместр</h3>
              <p className="text-gray-600 text-sm">Подтверждение беременности, срок, воротниковое пространство, носовая кость. 11–14 недель.</p>
            </div>
            <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ II триместр</h3>
              <p className="text-gray-600 text-sm">Анатомия плода, скрининг пороков, плацента, воды. 18–21 неделя.</p>
            </div>
            <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ III триместр</h3>
              <p className="text-gray-600 text-sm">Размеры, положение, предлежание плаценты, допплерометрия. 30–34 недели.</p>
            </div>
            <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Анализы и мазки</h3>
              <p className="text-gray-600 text-sm">Кровь, моча, мазки по плану ведения. Сдача в клинике.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Почему обращаются в Альтамед-С */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Почему обращаются в Альтамед-С</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Ведение беременности в Одинцово</strong> — не нужно ехать в другой район.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Два филиала</strong> — выбор удобного адреса.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">УЗИ и анализы в клинике</strong> — всё в одном месте.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Опытные акушеры-гинекологи</strong> — врачи со стажем до 43 лет.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Наблюдение у одного врача</strong> — удобно и понятно.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Запись онлайн и по телефону</strong> — ежедневно.</div></li>
          </ul>
        </div>
      </section>

      {/* Цены */}
      <section id="tseny" className="py-10 sm:py-12 md:py-14 bg-gray-50/50 scroll-mt-20">
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
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Приём беременной первичный</td><td className="py-3 px-4 text-right font-semibold">3 150 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">Приём беременной повторный</td><td className="py-3 px-4 text-right font-semibold">2 630 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Ведение беременности</td><td className="py-3 px-4 text-right font-semibold">от 2 630 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">УЗИ плода I триместр</td><td className="py-3 px-4 text-right font-semibold">1 890 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">УЗИ плода II триместр</td><td className="py-3 px-4 text-right font-semibold">2 210 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">УЗИ плода III триместр</td><td className="py-3 px-4 text-right font-semibold">2 420 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Допплерометрия</td><td className="py-3 px-4 text-right font-semibold">2 630 ₽</td></tr>
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
      <section id="vrachi" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Врачи-акушеры-гинекологи</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            В Альтамед-С ведут приём акушеры-гинекологи, которые помогают на этапе планирования, во время беременности и после родов. Наблюдаться у одного врача всю беременность удобно — специалист видит картину в динамике.
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

      {/* Как подготовиться к первому визиту */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Как подготовиться к первому визиту</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Взять с собой: паспорт, дату последней менструации, при наличии — результаты предыдущих УЗИ и анализов. Можно записать вопросы к врачу. Подготовки к приёму не требуется.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Врач уточнит особенности цикла, предыдущие беременности, хронические заболевания, принимаемые препараты. Обсудит УЗИ для подтверждения маточной беременности, анализы и план наблюдения.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-12 md:py-14 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-3">
            {[
              { q: 'Когда впервые обращаться после положительного теста?', a: 'Рекомендуется в течение 1–2 недель. Врач подтвердит маточную беременность, определит срок и составит план наблюдения.' },
              { q: 'Что включает ведение беременности?', a: 'Регулярные визиты по графику, осмотры, УЗИ по триместрам, анализы и мазки. Объём определяется индивидуально с учётом срока и анамнеза.' },
              { q: 'Можно ли пройти УЗИ в клинике?', a: 'Да. В клинике выполняют УЗИ плода в I, II и III триместрах, а также допплерометрию.' },
              { q: 'Как часто нужны визиты?', a: 'График определяет врач. Обычно в I триместре — реже, во II и III — чаще. При осложнениях частота может быть увеличена.' },
              { q: 'Можно ли рожать в выбранном роддоме?', a: 'Да. Ведение в платной клинике не обязывает рожать в определённом месте. Можно выбрать роддом по желанию.' },
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
            <li><Link href="/articles/vedenie-beremennosti-v-odintsovo" className="text-emerald-600 hover:underline">Ведение беременности в Одинцово</Link></li>
            <li><Link href="/articles/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya" className="text-emerald-600 hover:underline">Первый приём беременной</Link></li>
            <li><Link href="/articles/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie" className="text-emerald-600 hover:underline">УЗИ при беременности</Link></li>
            <li><Link href="/articles/dopplerometriya-pri-beremennosti-kogda-naznachayut-i-chto-pokazyvaet" className="text-emerald-600 hover:underline">Допплерометрия при беременности</Link></li>
            <li><Link href="/articles/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya" className="text-emerald-600 hover:underline">Подготовка к беременности</Link></li>
          </ul>
        </div>
      </section>

      {/* Связанные направления */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Связанные направления</h2>
          <div className="space-y-4">
            <Link href="/services/akusher-ginekolog-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Акушер-гинеколог</span>
              <p className="text-gray-600 text-sm mt-1">Планирование, беременность, послеродовое наблюдение.</p>
            </Link>
            <Link href="/ginekolog-v-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Гинеколог в Одинцово</span>
              <p className="text-gray-600 text-sm mt-1">Общее направление гинекологии.</p>
            </Link>
            <Link href="/articles/vedenie-beremennosti-v-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Ведение беременности в Одинцово — статья</span>
              <p className="text-gray-600 text-sm mt-1">Подробно о программе наблюдения.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Записаться на ведение беременности</h2>
          <p className="text-gray-700 mb-4 max-w-xl mx-auto leading-relaxed">
            Оформите программу ведения беременности в Альтамед-С. Врач поможет оценить состояние, составить план наблюдения и ответить на вопросы.
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
