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

const AKUSHER_DOCTOR_SLUGS = ['panova-olga-yurievna', 'peregudova-nina-alekseevna', 'brigadirova-elena-mikhailovna'] as const;
const akusherGynecologists = AKUSHER_DOCTOR_SLUGS.map((slug) => GYNECOLOGISTS.find((d) => d.slug === slug)).filter(
  (d): d is (typeof GYNECOLOGISTS)[number] => Boolean(d)
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
                Акушер-гинеколог в Одинцово — специалист по репродуктивному здоровью
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Планирование зачатия, ранняя беременность, акушерские вопросы и послеродовый период. Регулярное наблюдение по срокам и графику — на странице{' '}
                <Link href="/services/vedenie-beremennosti-odintsovo" className="text-emerald-700 font-medium hover:underline">ведения беременности</Link>. В Альтамед-С — приём, УЗИ и анализы в одном медцентре.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-6">
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20 min-h-[44px]">
                  Записаться на приём
                </Link>
                <a href={PHONE_LINK} className="inline-flex justify-center items-center px-5 py-3.5 sm:px-6 sm:py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]">
                  Позвонить в клинику
                </a>
              </div>
              <p className="text-gray-700 font-semibold mb-3 sm:mb-4">Консультация акушера-гинеколога: первичный — от 3 780 ₽ · повторный — от 2 840 ₽ · приём беременной — от 3 150 ₽ / 2 630 ₽</p>
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
                <div className="space-y-2 text-sm text-gray-800">
                  <p className="font-medium leading-snug">Планирование, ранняя беременность, послеродовый период</p>
                  <p className="text-gray-600 leading-snug">УЗИ и анализы в клинике по показаниям</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Краткий оффер под hero */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">С какими запросами к акушеру-гинекологу</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Планирование беременности</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Консультация до зачатия, оценка состояния здоровья, рекомендации по обследованиям и подготовке к зачатию (включая обсуждение цикла и факторов, влияющих на вынашивание).</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Положительный тест и ранняя беременность</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Первый визит после подтверждения беременности: срок, самочувствие, маршрут обследований на ближайшие недели.</p>
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
              <h3 className="font-semibold text-gray-900 mb-2">УЗИ и анализы по показаниям</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Исследования в клинике на этапе консультации. Полный график УЗИ по триместрам и программа наблюдения — на странице{' '}
                <Link href="/services/vedenie-beremennosti-odintsovo" className="text-emerald-700 font-medium hover:underline">ведения беременности</Link>.</p>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 bg-gray-50/80 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Наблюдение по графику на всех сроках</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Это отдельная услуга с планом визитов и обследований — не дублируем её здесь подробно.</p>
              <Link href="/services/vedenie-beremennosti-odintsovo" className="text-emerald-700 font-medium text-sm hover:underline">Перейти к программе ведения →</Link>
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
            Обращаются при планировании семьи, подготовке к зачатию, на ранних сроках беременности, при вопросах по самочувствию и обследованиям, после родов, при подготовке к ЭКО. Систематическое наблюдение по триместрам и плану визитов оформляется в рамках услуги <Link href="/services/vedenie-beremennosti-odintsovo" className="text-emerald-700 font-medium hover:underline">ведения беременности</Link>.
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
            К акушеру-гинекологу логичнее записаться, когда речь о планировании зачатия, ранней беременности, акушерских вопросах, послеродовом периоде, подготовке к ЭКО или трудностях с зачатием. Регулярное ведение по графику на всех сроках — отдельный маршрут: <Link href="/services/vedenie-beremennosti-odintsovo" className="text-emerald-700 font-medium hover:underline">программа ведения беременности</Link>.
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
              <h3 className="font-semibold text-gray-900 mb-2">Программа ведения по графику</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Нужны плановые визиты по срокам и согласованный маршрут — услуга <Link href="/services/vedenie-beremennosti-odintsovo" className="text-emerald-700 font-medium hover:underline">ведения беременности</Link>.</p>
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

      {/* 10. Наблюдение по срокам — ссылка на программу ведения */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Наблюдение по срокам беременности</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Подробный разбор визитов, УЗИ и обследований по триместрам — на странице программы ведения. Здесь акцент на роли акушера-гинеколога и первичных консультациях; дальнейший график вы согласуете с врачом в рамках ведения.
          </p>
          <Link href="/services/vedenie-beremennosti-odintsovo" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Программа ведения беременности в Одинцово →
          </Link>
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
            В Альтамед-С доступны УЗИ по срокам, допплерометрия по показаниям и лабораторная диагностика. На консультации акушера-гинеколога врач подскажет, какие исследования уместны сейчас; полный маршрут по триместрам описан на странице{' '}
            <Link href="/services/vedenie-beremennosti-odintsovo" className="text-emerald-700 font-medium hover:underline">ведения беременности</Link>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Объём УЗИ и анализов определяется индивидуально — с учётом срока, жалоб и динамики.
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
            На этом направлении важны врачи, которые регулярно ведут вопросы планирования, ранней беременности и послеродового периода — и могут назначить обследования в той же клинике.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Акушерско-гинекологический приём</strong> — планирование, ранняя беременность, послеродовье, репродуктивные вопросы.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">УЗИ и анализы в клинике</strong> — по показаниям на этапе консультации.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Два филиала в Одинцово</strong> — выбор адреса.</div></li>
            <li className="flex items-start gap-3"><span className="text-emerald-600 flex-shrink-0">✓</span><div><strong className="text-gray-900">Запись онлайн и по телефону</strong> — ежедневно.</div></li>
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
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Приём акушера-гинеколога первичный</td><td className="py-3 px-4 text-right font-semibold">3 780 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">Приём акушера-гинеколога повторный</td><td className="py-3 px-4 text-right font-semibold">2 840 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">Приём беременной первичный</td><td className="py-3 px-4 text-right font-semibold">от 3 150 ₽</td></tr>
                <tr className="bg-gray-50/50"><td className="py-3 px-4 text-gray-800">Приём беременной повторный</td><td className="py-3 px-4 text-right font-semibold">от 2 630 ₽</td></tr>
                <tr className="bg-white"><td className="py-3 px-4 text-gray-800">УЗИ плода в I триместре</td><td className="py-3 px-4 text-right font-semibold">от 1 890 ₽</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Стоимость ведения беременности по программе — на странице{' '}
            <Link href="/services/vedenie-beremennosti-odintsovo#tseny" className="text-emerald-700 font-medium hover:underline">ведения беременности</Link>. Актуальные цены уточняйте при записи; полный прайс — в общем разделе.
          </p>
          <Link href="/ginekolog-v-odintsovo#tseny" className="inline-flex items-center px-5 py-2.5 bg-emerald-100 text-emerald-700 font-medium rounded-xl hover:bg-emerald-200 transition">
            Смотреть все цены →
          </Link>
        </div>
      </section>

      {/* 20. Врачи-акушеры-гинекологи */}
      <section id="vrachi" className="py-10 sm:py-12 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Врачи для акушерско-гинекологического приёма</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ниже — порядок, удобный для типичных запросов этой страницы: планирование и репродуктивные вопросы, ранняя беременность и послеродовый период. Полный список — на странице направления «Гинеколог в Одинцово».
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Регулярное наблюдение по срокам оформляют в рамках{' '}
            <Link href="/services/vedenie-beremennosti-odintsovo" className="text-emerald-700 font-medium hover:underline">программы ведения беременности</Link>. Администратор поможет подобрать врача с учётом цели визита.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {akusherGynecologists.map((d) => (
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
              { q: 'Чем акушер-гинеколог отличается от гинеколога?', a: 'Гинеколог общего профиля — жалобы, цикл, воспаления, контрацепция, диагностика вне акушерского сценария. Акушер-гинеколог — планирование, ранняя беременность, акушерские вопросы, послеродовый период. Регулярное наблюдение по графику на всех сроках — страница «Ведение беременности».' },
              { q: 'Когда приходить при беременности?', a: 'Первый визит — в течение 1–2 недель после подтверждения: срок, самочувствие, старт маршрута. Дальнейший график визитов и обследований — в программе ведения беременности.' },
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
              <span className="font-semibold text-emerald-600">Ведение беременности (программа по срокам)</span>
              <p className="text-gray-600 text-sm mt-1">График визитов, УЗИ по триместрам, анализы.</p>
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
