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

export default function AkusherGinekologOdintsovoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/ginekolog-v-odintsovo" className="hover:text-emerald-600">Гинеколог в Одинцово</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Акушер-гинеколог</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Акушер-гинеколог в Одинцово — планирование беременности, наблюдение и ведение
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Консультации акушера-гинеколога по планированию беременности, подготовке к зачатию, ведению беременности и наблюдению после родов. В Альтамед-С — приём, УЗИ при беременности, анализы и рекомендации в одном медцентре.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться на приём
                </Link>
                <a href={PHONE_LINK} className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">Приём беременной первичный — от 3 150 ₽ · Ведение беременности — от 2 630 ₽</p>
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
                <Image src="/images/blog/task_01kmevwgw4fjf8d6qepyfbdfnm_1774320530_img_0.webp" alt="Акушер-гинеколог в Одинцово" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
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

      {/* 2. Краткий оффер под hero */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Что доступно в Альтамед-С</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Планирование беременности</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Консультация до зачатия, оценка состояния здоровья, рекомендации по обследованиям и подготовке к зачатию.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Наблюдение во время беременности</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Регулярные консультации, контроль самочувствия и ведение беременности на разных сроках.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ и анализы</h3>
              <p className="text-gray-600 text-sm leading-relaxed">УЗИ плода по триместрам, допплерометрия и лабораторная диагностика в клинике.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Послеродовый контроль</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Оценка восстановления, обсуждение цикла, самочувствия и дальнейшего наблюдения после родов.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Консультации по репродуктивному здоровью</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Вопросы зачатия, трудностей с наступлением беременности и подготовки к ЭКО.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Помощь на этапе подготовки к зачатию</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Обсуждение цикла, хронических состояний и факторов, влияющих на вынашивание.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Чем занимается акушер-гинеколог */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Чем занимается акушер-гинеколог</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Акушер-гинеколог — это врач, который специализируется на вопросах женского репродуктивного здоровья, планирования беременности, наблюдения во время беременности и восстановления после родов. В отличие от общего приёма гинеколога, консультация акушера-гинеколога особенно важна в ситуациях, когда требуется сопровождение на этапе подготовки к зачатию, контроль развития беременности и оценка состояния женщины в разные периоды.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            К этому специалисту обращаются не только после подтверждения беременности. Консультация может быть полезна ещё до зачатия, если женщина хочет подготовиться к беременности, пройти обследования, обсудить цикл, хронические заболевания, перенесённые состояния и факторы, которые могут повлиять на вынашивание.
          </p>
          <p className="text-gray-700 leading-relaxed">
            На каких этапах жизни женщины нужен акушер-гинеколог: при планировании семьи, на этапе подготовки к зачатию, при уже наступившей беременности, во время ведения беременности по триместрам и в послеродовом периоде. При каких запросах к нему обращаются: планирование беременности, положительный тест на беременность, необходимость выбора врача для наблюдения, вопросы по срокам и обследованиям, нестабильный цикл при планировании зачатия, контроль состояния после родов, подготовка к ЭКО, оценка репродуктивного здоровья.
          </p>
        </div>
      </section>

      {/* 4. Чем акушер-гинеколог отличается от гинеколога */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Чем акушер-гинеколог отличается от гинеколога</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Обычного приёма гинеколога бывает достаточно, когда женщина обращается с общими вопросами женского здоровья: профилактический осмотр, нарушения цикла без связи с беременностью, боли, выделения, подбор контрацепции, диагностика гинекологических заболеваний.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            К акушеру-гинекологу логичнее записаться, когда речь идёт о планировании беременности, уже наступившей беременности, ведении беременности, наблюдении после родов, подготовке к ЭКО или трудностях с зачатием. Врач акушер-гинеколог делает акцент на репродуктивном здоровье и сопровождении на этих этапах.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Если пациентка не уверена, к кому идти, можно начать с общей консультации гинеколога — он оценит ситуацию и при необходимости порекомендует акушера-гинеколога. Либо записаться напрямую к акушеру-гинекологу, указав при записи цель визита — администратор поможет подобрать специалиста.
          </p>
        </div>
      </section>

      {/* 5. Кому подходит консультация */}
      <section className="py-10 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Кому подходит консультация</h2>
          <div className="space-y-4">
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Планирование беременности</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Вы хотите подготовиться к зачатию — консультация поможет оценить состояние, обсудить обследования и выстроить план подготовки.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Положительный тест</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Беременность подтверждена — нужен первый визит для оценки срока, самочувствия и составления маршрута наблюдения.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Ведение беременности</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Требуется регулярное наблюдение — плановые визиты по графику, контроль обследований и самочувствия.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Подготовка к ЭКО</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Перед программой вспомогательных репродуктивных технологий — оценка состояния, обсуждение обследований и маршрута.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Послеродовый осмотр</h3>
              <p className="text-gray-700 text-sm leading-relaxed">После родов — оценка восстановления, обсуждение самочувствия, цикла и дальнейшего наблюдения.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Вопросы репродуктивного здоровья</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Трудности с зачатием, длительное ненаступление беременности — консультация может стать первым шагом к диагностике.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Нестабильный цикл при планировании</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Цикл нерегулярен, и вы хотите подготовиться к беременности — врач поможет оценить причину и рекомендовать обследования.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-50 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Жалобы во время беременности</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Боли, дискомфорт, необычные выделения или сомнения по самочувствию — повод для консультации.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Когда стоит записаться */}
      <section id="kogda" className="py-10 sm:py-12 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Когда стоит записаться</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Планирование беременности</h3>
              <p className="text-gray-700 leading-relaxed">Если вы хотите подготовиться к зачатию, консультация акушера-гинеколога помогает подойти к этому этапу более осознанно. На приёме можно обсудить особенности цикла, перенесённые заболевания, результаты прошлых обследований, хронические состояния и факторы, которые могут иметь значение при планировании. Врач может рекомендовать обследования, лабораторную диагностику, УЗИ и общий план подготовки.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Уже беременны</h3>
              <p className="text-gray-700 leading-relaxed">После положительного теста или подтверждения беременности важно не откладывать первый визит к врачу. Консультация помогает оценить срок, самочувствие, текущие жалобы и выстроить маршрут дальнейшего наблюдения. Врач подскажет, какие обследования актуальны на данном этапе, какие УЗИ планируются по срокам и на что стоит обратить внимание в ближайшее время.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Нужен плановый контроль</h3>
              <p className="text-gray-700 leading-relaxed">Даже если беременность протекает спокойно, регулярные визиты к акушеру-гинекологу остаются важной частью наблюдения. На плановых приёмах оценивается самочувствие, результаты анализов, данные УЗИ и любые изменения в динамике.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Есть жалобы во время беременности</h3>
              <p className="text-gray-700 leading-relaxed">Любые тревожные симптомы — боли, кровянистые выделения, заметное ухудшение самочувствия, отёки, необычные ощущения — могут быть поводом для обращения. При необходимости специалист может рекомендовать обследование раньше планового визита.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">После родов</h3>
              <p className="text-gray-700 leading-relaxed">Послеродовая консультация помогает оценить восстановление организма, обсудить самочувствие, цикл, вопросы контрацепции и дальнейшего наблюдения. Даже если серьёзных жалоб нет, такой визит позволяет спокойно обсудить изменения и определить дальнейшую тактику.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Проблемы с зачатием</h3>
              <p className="text-gray-700 leading-relaxed">Если беременность не наступает в течение длительного времени, цикл нестабилен или есть вопросы по репродуктивному здоровью, консультация акушера-гинеколога может стать первым шагом к более понятной диагностике и маршруту наблюдения. Тактика определяется индивидуально.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Подготовка к беременности */}
      <section className="py-10 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Подготовка к беременности</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Подготовка к беременности — это не только приём витаминов и ожидание положительного теста. На этом этапе важно оценить общее состояние здоровья, обсудить цикл, перенесённые заболевания, привычные жалобы и результаты прошлых обследований. Консультация акушера-гинеколога помогает понять, нужен ли дополнительный контроль и как лучше подойти к зачатию.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Зачем приходить до зачатия: врач может рекомендовать базовые обследования, оценить совместимость хронических заболеваний с беременностью, обсудить приём фолиевой кислоты и других препаратов, выявить факторы, которые могут потребовать внимания позже. На приёме можно задать вопросы о цикле, перенесённых операциях, воспалительных состояниях, гормональных нарушениях и образе жизни.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Подготовка полезна даже если жалоб нет — она даёт спокойствие и понимание, что подходите к зачатию осознанно. Врач поможет оценить состояние и при необходимости назначить обследования до наступления беременности.
          </p>
        </div>
      </section>

      {/* 8. Планирование беременности: что обсуждают на приёме */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Планирование беременности: что обсуждают на приёме</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            На консультации по планированию врач уделяет внимание конкретным темам, которые могут повлиять на зачатие и вынашивание.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">·</span><strong className="text-gray-900">Цикл</strong> — регулярность, длительность, характер менструаций;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">·</span><strong className="text-gray-900">Перенесённые заболевания</strong> — гинекологические операции, воспаления, инфекции;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">·</span><strong className="text-gray-900">Прошлые беременности</strong> — если были, как протекали, чем закончились;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">·</span><strong className="text-gray-900">Хронические состояния</strong> — заболевания, требующие постоянного приёма препаратов, и их совместимость с беременностью;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">·</span><strong className="text-gray-900">Результаты прошлых анализов</strong> — УЗИ, мазки, анализы на инфекции, при их наличии;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">·</span><strong className="text-gray-900">Вопросы образа жизни</strong> — питание, нагрузки, вредные привычки;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">·</span><strong className="text-gray-900">Подготовка к зачатию</strong> — приём фолиевой кислоты, витаминов, необходимость дополнительных обследований.</li>
          </ul>
        </div>
      </section>

      {/* 9. Первый визит при беременности */}
      <section className="py-10 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Первый визит при беременности</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Записываться к акушеру-гинекологу стоит в течение 1–2 недель после положительного теста или подтверждения беременности. Не рекомендуется затягивать с первым визитом — врач поможет оценить срок, исключить внематочную беременность и выстроить план наблюдения.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Что врач может уточнить: дату последней менструации, особенности цикла, предыдущие беременности и роды, хронические заболевания, принимаемые препараты, жалобы и самочувствие. Могут обсуждаться УЗИ для подтверждения маточной беременности, анализы крови и мочи, дополнительные обследования по показаниям.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Что взять с собой: паспорт, при наличии — результаты предыдущих УЗИ и анализов, список вопросов. Если визит связан с беременностью, желательно взять все уже имеющиеся результаты обследований, чтобы врач мог оценить их в динамике.
          </p>
        </div>
      </section>

      {/* 10. Наблюдение по триместрам */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Наблюдение по триместрам</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ведение беременности — это регулярное наблюдение за состоянием женщины и развитием беременности на разных сроках. Объём и частота консультаций определяются индивидуально.
          </p>
          <div className="space-y-5">
            <div className="rounded-xl p-5 bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Первый триместр</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                На ранних сроках особенно важно подтвердить беременность, оценить самочувствие, обсудить жалобы и выстроить план наблюдения. В этот период часто возникает больше всего вопросов: какие обследования нужны, когда делать УЗИ, на что обращать внимание и в каких случаях лучше связаться с врачом раньше планового визита.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Могут обсуждаться УЗИ для подтверждения маточной беременности, скрининг первого триместра, анализы по сроку.
              </p>
            </div>
            <div className="rounded-xl p-5 bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Второй триместр</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Во втором триместре наблюдение обычно становится более плановым и спокойным, но при этом остаётся важным контроль состояния женщины и данных обследований. На этом этапе могут обсуждаться результаты УЗИ второго триместра, скрининга, общее самочувствие, образ жизни и динамика беременности.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Врач оценивает развитие плода, состояние будущей мамы и при необходимости рекомендует дополнительные обследования.
              </p>
            </div>
            <div className="rounded-xl p-5 bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Третий триместр</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                На поздних сроках особенно важно наблюдать изменения самочувствия, контролировать результаты исследований и своевременно обсуждать вопросы, связанные с предстоящими родами и завершением беременности.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Регулярный контакт с врачом помогает лучше понимать своё состояние. Могут назначаться УЗИ третьего триместра, допплерометрия по показаниям.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Какие жалобы и изменения самочувствия важно обсуждать с врачом */}
      <section className="py-10 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Какие жалобы и изменения самочувствия важно обсуждать с врачом</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Любые сомнения по самочувствию во время беременности, а также после родов — повод для консультации. Ниже перечислены ситуации, которые важно обсуждать с акушером-гинекологом.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Боли</h4>
              <p className="text-gray-600 text-sm">Боли внизу живота, пояснице или в других областях могут быть поводом для обращения. Врач поможет оценить причину.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Необычные выделения</h4>
              <p className="text-gray-600 text-sm">Изменение цвета, консистении, запаха выделений — повод обсудить с врачом.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Кровянистые выделения</h4>
              <p className="text-gray-600 text-sm">Любые кровянистые выделения во время беременности требуют скорейшей оценки. При их появлении стоит связаться с клиникой.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Отёки</h4>
              <p className="text-gray-600 text-sm">Выраженные отёки рук, ног, лица — повод обсудить с врачом, особенно на поздних сроках.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Изменения самочувствия</h4>
              <p className="text-gray-600 text-sm">Резкая слабость, головные боли, тошнота и рвота, подъём давления — могут потребовать внимания.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Дискомфорт</h4>
              <p className="text-gray-600 text-sm">Зуд, жжение, неприятные ощущения — стоит обсудить на приёме.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Вопросы по течению беременности</h4>
              <p className="text-gray-600 text-sm">Любые сомнения, тревоги, необычные ощущения — можно обсудить с врачом.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Восстановление после родов</h4>
              <p className="text-gray-600 text-sm">Изменения цикла, самочувствия, дискомфорт — повод для послеродовой консультации.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Что входит в консультацию акушера-гинеколога */}
      <section id="chto-vhodit" className="py-10 sm:py-12 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Что входит в консультацию акушера-гинеколога</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Приём строится так, чтобы пациентка получила не только осмотр, но и понятный план дальнейших действий. Консультация акушера-гинеколога включает несколько этапов.
          </p>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Сбор анамнеза</strong> — жалобы, особенности цикла, информация о перенесённых заболеваниях, предыдущих беременностях, результатах обследований;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Обсуждение цели визита</strong> — что привело на приём, какие вопросы важны;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Оценка цикла или срока беременности</strong> — в зависимости от ситуации;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Осмотр</strong> — объём определяется индивидуально;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Оценка уже имеющихся обследований</strong> — УЗИ, анализы, если пациентка принесла результаты;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Рекомендации</strong> — по анализам, диагностике, при необходимости назначение УЗИ по показаниям;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 flex-shrink-0">✓</span><strong className="text-gray-900">Дальнейший маршрут</strong> — определение тактики наблюдения, дата следующего визита.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Если вы уже проходили обследования, сдавали анализы или делали УЗИ, результаты лучше взять с собой. Это помогает врачу быстрее увидеть картину в динамике и не повторять лишние этапы.
          </p>
        </div>
      </section>

      {/* 13. Какие обследования могут понадобиться */}
      <section className="py-10 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Какие обследования могут понадобиться</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Объём диагностики зависит от ситуации: срока беременности, жалоб, анамнеза и целей визита. Не всем пациенткам нужен одинаковый объём обследований — врач определяет тактику индивидуально на консультации.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            В зависимости от ситуации могут быть актуальны: лабораторные анализы (кровь, моча, мазки); УЗИ по сроку беременности; контрольные исследования в динамике; обследования на этапе планирования (анализы на инфекции, УЗИ органов малого таза, гормоны по показаниям); оценка ранее полученных результатов; дополнительные консультации по показаниям.
          </p>
          <p className="text-gray-700 leading-relaxed">
            При необходимости специалист может рекомендовать обследование. Конкретный план формируется после осмотра и беседы.
          </p>
        </div>
      </section>

      {/* 14. УЗИ и диагностика во время беременности */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">УЗИ и диагностика во время беременности</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Для многих пациенток важно, чтобы консультация и диагностика были доступны в одной клинике. Это упрощает ведение беременности и помогает не растягивать маршрут обследований.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            В Альтамед-С доступны: УЗИ плода в I триместре; УЗИ плода во II триместре; УЗИ плода в III триместре; допплерометрия — оценка кровотока у плода по показаниям; лабораторная диагностика — анализы крови, мочи, мазки по плану ведения; консультации в динамике.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            УЗИ при беременности позволяют отслеживать развитие плода, состояние матки и плаценты. Конкретный объём обследований определяется врачом с учётом срока беременности, жалоб и текущей клинической ситуации.
          </p>
        </div>
      </section>

      {/* 15. Послеродовое наблюдение */}
      <section className="py-10 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Послеродовое наблюдение</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            После родов женский организм проходит этап восстановления, и в этот период важно наблюдение у специалиста. Послеродовый осмотр помогает оценить, как идёт восстановление, обсудить самочувствие и определить дальнейшую тактику.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Какие вопросы обсуждают: восстановление организма; изменения цикла и сроки возобновления менструаций; самочувствие, включая возможный дискомфорт или болезненность; контрацепция — подбор метода после родов; дальнейшее наблюдение — как часто посещать врача, на что обращать внимание.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Даже если жалобы кажутся незначительными, консультация даёт возможность спокойно обсудить изменения, которые произошли после родов, и не оставаться с вопросами один на один.
          </p>
        </div>
      </section>

      {/* 16. Подготовка к ЭКО и репродуктивные вопросы */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Подготовка к ЭКО и репродуктивные вопросы</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Отдельным направлением работы акушера-гинеколога может быть подготовка к программам вспомогательных репродуктивных технологий, включая ЭКО. На этом этапе особенно важно внимательно подойти к оценке состояния здоровья, результатам обследований, особенностям цикла и общему репродуктивному анамнезу.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Консультация может быть полезна, если вы готовитесь к ЭКО, хотите пройти предварительную оценку состояния, есть длительные трудности с зачатием, нужно обсудить уже имеющиеся результаты обследований или требуется определить, какие шаги логичны дальше.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Если у вас уже есть результаты обследований из других клиник или центров репродукции, их стоит принести на приём. Врач оценит их в динамике и поможет выстроить маршрут подготовки или дальнейшего наблюдения. Тактика определяется индивидуально.
          </p>
        </div>
      </section>

      {/* 17. Почему важно наблюдение в динамике */}
      <section className="py-10 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Почему важно наблюдение в динамике</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Один визит к акушеру-гинекологу полезен для первичной оценки и понимания ситуации. Но именно регулярное наблюдение помогает врачу видеть изменения по срокам, оценивать результаты обследований в динамике и лучше понимать состояние пациентки.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Наблюдение у одного врача удобно тем, что специалист знает историю, особенности течения беременности или подготовки к ней. Динамика даёт больше информации, чем разовые визиты в разные места — врач может сравнить показатели, заметить тенденции и своевременно скорректировать тактику.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Это особенно важно во время беременности, когда ситуация может меняться. Своевременный контроль помогает женщине чувствовать себя спокойнее и не оставаться с тревогами без ответов.
          </p>
        </div>
      </section>

      {/* 18. Почему обращаются в Альтамед-С */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Почему обращаются в Альтамед-С</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Консультация акушера-гинеколога — это не только вопрос цены приёма, но и удобства, доверия и понятного маршрута. Для пациентки важно, чтобы в одном месте можно было получить консультацию, пройти обследования и при необходимости продолжить наблюдение.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Приём акушера-гинеколога в Одинцово</strong> — не нужно ехать в другой район.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Два филиала клиники</strong> — можно выбрать удобный адрес.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">УЗИ и лабораторная диагностика в клинике</strong> — консультация и обследования в одном месте.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Опытные специалисты</strong> — врачи с опытом ведения беременности и планирования.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Запись онлайн и по телефону</strong> — удобно подобрать время.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Наблюдение на разных этапах</strong> — до беременности, во время и после родов.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Удобный маршрут пациента</strong> — возможность подобрать врача и филиал, наблюдение в динамике.</div></li>
          </ul>
        </div>
      </section>

      {/* 19. Цены */}
      <section id="tseny" className="py-10 sm:py-12 bg-gray-50/50 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Цены</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Стоимость зависит от типа консультации, срока беременности и объёма обследований. Ниже приведены основные услуги, связанные с направлением акушера-гинеколога, для быстрого ориентирования.
          </p>
          <h3 className="font-semibold text-gray-900 mb-3">Популярные услуги и цены</h3>
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-4 px-4 font-semibold text-gray-800">Услуга</th>
                  <th className="text-right py-4 px-4 font-semibold text-gray-800 w-28">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Приём беременной первичный</td><td className="py-3 px-4 text-right font-semibold">от 3 150 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">Приём беременной повторный</td><td className="py-3 px-4 text-right font-semibold">от 2 630 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Ведение беременности</td><td className="py-3 px-4 text-right font-semibold">от 2 630 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">УЗИ плода в I триместре</td><td className="py-3 px-4 text-right font-semibold">от 1 890 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">УЗИ плода во II триместре</td><td className="py-3 px-4 text-right font-semibold">от 2 210 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">УЗИ плода в III триместре</td><td className="py-3 px-4 text-right font-semibold">от 2 420 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Допплерометрия</td><td className="py-3 px-4 text-right font-semibold">от 2 630 ₽</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-4">Актуальные цены уточняйте при записи. Полный прайс доступен на странице услуг.</p>
          <Link href="/ginekolog-v-odintsovo#tseny" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Смотреть все цены →
          </Link>
        </div>
      </section>

      {/* 20. Врачи-акушеры-гинекологи */}
      <section id="vrachi" className="py-10 sm:py-12 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Врачи-акушеры-гинекологи</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            В Альтамед-С ведут приём акушеры-гинекологи, которые помогают пациенткам на этапе планирования беременности, во время вынашивания ребёнка и после родов. Выбрать врача можно по филиалу, времени приёма, стажу и профилю работы.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Наблюдаться у одного врача всю беременность удобно — специалист видит картину в динамике и лучше понимает особенности течения. Если вы не уверены, к какому врачу записаться, администратор поможет подобрать специалиста с учётом вашей ситуации и цели визита.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {GYNECOLOGISTS.map((d) => (
              <div key={d.id} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
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
      <section className="py-10 sm:py-12 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Как подготовиться к приёму</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Чтобы консультация была более продуктивной, полезно заранее подготовить: дату последней менструации; результаты предыдущих УЗИ и анализов; список жалоб или вопросов; сведения о ранее перенесённых беременностях, если были; информацию о хронических заболеваниях и принимаемых препаратах.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Если визит связан с беременностью, желательно взять с собой все уже имеющиеся результаты обследований. Можно прийти без анализов — врач на консультации определит объём обследования.
          </p>
        </div>
      </section>

      {/* 21. FAQ */}
      <section id="faq" className="py-10 sm:py-12 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-3">
            {[
              { q: 'Чем акушер-гинеколог отличается от гинеколога?', a: 'Акушер-гинеколог делает акцент на репродуктивном здоровье, планировании беременности, наблюдении во время беременности и послеродовом периоде. Гинеколог общего профиля занимается более широким кругом вопросов женского здоровья — профилактические осмотры, нарушения цикла, боли, выделения, диагностика заболеваний.' },
              { q: 'Когда приходить при беременности?', a: 'После подтверждения беременности лучше не откладывать первый визит — желательно в течение 1–2 недель. Врач поможет определить срок, оценить самочувствие и выстроить маршрут дальнейшего наблюдения.' },
              { q: 'Можно ли наблюдаться у одного врача всю беременность?', a: 'Да. Во многих случаях это удобно, потому что врач видит картину в динамике и лучше понимает особенности течения беременности у конкретной пациентки.' },
              { q: 'Какие обследования могут понадобиться?', a: 'Объём зависит от ситуации. Врач может рекомендовать УЗИ по триместрам, лабораторные анализы, допплерометрию и другие обследования по показаниям. Конкретный план определяется на консультации.' },
              { q: 'Нужен ли послеродовый визит?', a: 'Да. Послеродовая консультация помогает оценить восстановление, обсудить самочувствие, цикл, контрацепцию и определить дальнейшую тактику наблюдения.' },
              { q: 'Когда приходить на этапе планирования?', a: 'Консультация до зачатия может быть полезна в любой момент, когда вы решили подготовиться к беременности. Врач оценит состояние, обсудит обследования и даст рекомендации по подготовке.' },
              { q: 'Что взять с собой на приём?', a: 'Паспорт, дату последней менструации, при наличии — результаты предыдущих УЗИ и анализов, список вопросов. При беременности — все имеющиеся результаты обследований.' },
              { q: 'Когда обращаться срочно?', a: 'При острой боли, кровянистых выделениях, заметном ухудшении самочувствия, подозрении на внематочную беременность — стоит как можно быстрее связаться с клиникой.' },
              { q: 'Можно ли прийти без анализов?', a: 'Да. Анализы не обязательны заранее. Врач на консультации определит объём обследования и при необходимости назначит нужные исследования.' },
              { q: 'Помогает ли врач при трудностях с зачатием?', a: 'Да. Консультация акушера-гинеколога может стать первым шагом: врач оценит состояние, обсудит анамнез и при необходимости порекомендует обследования или направление к профильным специалистам.' },
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
            <li><Link href="/blog/kak-prohodit-vedenie-beremennosti" className="text-emerald-600 hover:underline">Ведение беременности в Одинцово</Link></li>
            <li><Link href="/blog/pervyy-priem-beremennoy-kak-prohodit-konsultatsiya" className="text-emerald-600 hover:underline">Первый приём беременной</Link></li>
            <li><Link href="/blog/podgotovka-k-beremennosti-kakie-obsledovaniya-mogut-ponadobitsya" className="text-emerald-600 hover:underline">Подготовка к беременности</Link></li>
            <li><Link href="/blog/uzi-pri-beremennosti-kogda-delat-i-chto-pokazyvaet-issledovanie" className="text-emerald-600 hover:underline">УЗИ при беременности</Link></li>
            <li><Link href="/blog/poslerodovyy-osmotr-u-ginekologa-kogda-prihodit-i-chto-proveryayut" className="text-emerald-600 hover:underline">Послеродовый осмотр</Link></li>
          </ul>
        </div>
      </section>

      {/* 22. Связанные направления */}
      <section className="py-10 sm:py-12 bg-gray-50/50">
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
            <Link href="/services/priem-ginekologa-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Приём гинеколога</span>
              <p className="text-gray-600 text-sm mt-1">Консультация, осмотр, первичная диагностика по вопросам женского здоровья.</p>
            </Link>
            <Link href="/services/vedenie-beremennosti-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Планирование и ведение беременности</span>
              <p className="text-gray-600 text-sm mt-1">Подготовка к зачатию, наблюдение на разных сроках беременности.</p>
            </Link>
            <Link href="/services/profilakticheskiy-osmotr-ginekologa-odintsovo" className="block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition">
              <span className="font-semibold text-emerald-600">Профилактические осмотры</span>
              <p className="text-gray-600 text-sm mt-1">Регулярный осмотр у гинеколога без выраженных жалоб.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 23. Финальный CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Записаться на приём</h2>
          <p className="text-gray-700 mb-4 max-w-xl mx-auto leading-relaxed">
            Если вы планируете беременность, уже беременны, хотите пройти наблюдение или обсудить вопросы репродуктивного здоровья, запишитесь на консультацию акушера-гинеколога в Альтамед-С. Врач поможет оценить состояние, подобрать обследования и определить дальнейшую тактику наблюдения.
          </p>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto leading-relaxed text-sm">
            Консультация доступна в удобное время. Администратор поможет выбрать врача, филиал и подходящее время приёма.
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
