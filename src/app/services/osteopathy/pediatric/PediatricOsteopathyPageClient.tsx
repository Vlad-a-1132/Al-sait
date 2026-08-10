"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const APPOINTMENTS_URL = "https://online.altamed-c.ru/";

const ageGroups = [
  {
    id: "baby",
    short: "0–1 год",
    label: "Младенцы",
    title: "Первый год жизни",
    text: "На встрече можно обсудить вопросы о привычной позе, движениях и заметной родителям асимметрии. Врач учитывает историю беременности и родов, наблюдение педиатра и уже выполненные обследования.",
    points: ["бережная адаптация к осмотру", "родитель находится рядом", "рекомендации понятным языком"],
  },
  {
    id: "preschool",
    short: "1–7 лет",
    label: "Дошкольники",
    title: "Период активного роста",
    text: "Поводом для консультации могут стать вопросы к осанке, симметрии движений или мышечному напряжению. Врач оценивает ситуацию в контексте возраста и повседневной активности ребёнка.",
    points: ["осмотр в комфортном темпе", "оценка движений и осанки", "маршрут к профильному врачу при необходимости"],
  },
  {
    id: "school",
    short: "7–14 лет",
    label: "Школьники",
    title: "Учёба, спорт и нагрузка",
    text: "Можно обсудить дискомфорт после учебной или спортивной нагрузки, особенности осанки и возвращение к активности после завершения острого периода травмы.",
    points: ["учёт спортивной нагрузки", "обсуждение привычек и режима", "индивидуальный план дальнейших действий"],
  },
];

const parentRequests = [
  { number: "01", title: "Осанка и симметрия", text: "Если родители замечают привычный наклон, неравномерную позу или изменения в движениях ребёнка." },
  { number: "02", title: "Движение без дискомфорта", text: "Когда ребёнок жалуется на напряжение в спине или шее после занятий, школы или долгого сидения." },
  { number: "03", title: "Спорт и восстановление", text: "Чтобы обсудить нагрузку и возвращение к тренировкам после завершения лечения и острого этапа травмы." },
  { number: "04", title: "Второе врачебное мнение", text: "Если уже есть заключения педиатра, невролога или ортопеда и нужен понятный дальнейший маршрут." },
  { number: "05", title: "Вопросы о первом годе", text: "Чтобы вместе с врачом-педиатром оценить наблюдения родителей о позе и движениях младенца." },
  { number: "06", title: "Изменения в период роста", text: "Когда хочется профессионально оценить, как ребёнок двигается и справляется с новой нагрузкой." },
];

const visitSteps = [
  { step: "01", title: "Знакомство", text: "Врач разговаривает с родителями, изучает жалобы, историю развития и заключения других специалистов." },
  { step: "02", title: "Осмотр", text: "Оценивает общее состояние, осанку и движения. Ребёнку дают время освоиться, родитель остаётся рядом." },
  { step: "03", title: "Работа врача", text: "Если ручные техники уместны, специалист подбирает их по возрасту, реакции и самочувствию ребёнка." },
  { step: "04", title: "Понятный итог", text: "Родители получают объяснение результатов и следующий шаг: наблюдение, повторную встречу или консультацию другого врача." },
];

const faq = [
  { question: "Можно ли записать новорождённого?", answer: "Да, в клинике принимают детей с рождения. На первом месте — педиатрическая оценка и история наблюдения ребёнка; решение о формате работы врач принимает после осмотра." },
  { question: "Родитель присутствует на приёме?", answer: "Да. Родитель находится рядом, помогает ребёнку адаптироваться и участвует в беседе с врачом." },
  { question: "Что взять с собой?", answer: "Возьмите выписки, результаты уже выполненных обследований, заключения педиатра и профильных специалистов, а также список лекарств. Для малыша пригодится знакомая небольшая игрушка." },
  { question: "Сколько длится консультация?", answer: "Для детей от 0 до 14 лет доступны форматы 30 и 60 минут. Подходящую продолжительность подскажут при записи с учётом возраста и цели визита." },
  { question: "Нужен ли заранее назначенный курс?", answer: "Нет. Количество встреч не определяют одинаково для всех. Врач обсуждает дальнейший план после осмотра и оценки ситуации." },
];

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0"><path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SparkIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6"><path d="M12 2c.7 5.4 3.6 8.3 9 9-5.4.7-8.3 3.6-9 9-.7-5.4-3.6-8.3-9-9 5.4-.7 8.3-3.6 9-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}

export default function PediatricOsteopathyPageClient() {
  const [activeAge, setActiveAge] = useState(ageGroups[0]);
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 38]);
  const fadeUp = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <div className="overflow-hidden bg-[#fbfdfc] text-slate-950">
      <section ref={heroRef} className="relative border-b border-emerald-950/10 bg-[radial-gradient(circle_at_9%_14%,rgba(167,243,208,.46),transparent_28%),radial-gradient(circle_at_90%_2%,rgba(254,215,170,.5),transparent_26%),linear-gradient(135deg,#fbfffd_0%,#f4fbf8_52%,#fffaf5_100%)]">
        <div aria-hidden="true" className="absolute -left-20 top-28 h-64 w-64 rounded-full border border-emerald-200/70" />
        <div aria-hidden="true" className="absolute -left-7 top-40 h-40 w-40 rounded-full border border-emerald-200/60" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-7 sm:px-8 lg:px-12 lg:pb-28 lg:pt-10">
          <nav aria-label="Хлебные крошки" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-emerald-700">Главная</Link><span aria-hidden="true">/</span>
            <Link href="/services" className="transition hover:text-emerald-700">Услуги</Link><span aria-hidden="true">/</span>
            <Link href="/services/osteopathy" className="transition hover:text-emerald-700">Остеопатия</Link><span aria-hidden="true">/</span>
            <span className="text-slate-800">Детский остеопат</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr] lg:gap-16">
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-emerald-800 shadow-sm backdrop-blur">
                <SparkIcon /> Детская остеопатия · 0–14 лет
              </div>
              <h1 className="max-w-[820px] text-[clamp(2.7rem,6vw,5.75rem)] font-black leading-[.92] tracking-[-.065em] text-slate-950">
                Детский остеопат <span className="text-emerald-700">в Одинцово</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                Спокойная консультация для ребёнка и понятный разговор с родителями. Приём ведёт врач-педиатр и остеопат — с учётом возраста, истории развития и текущей нагрузки.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-emerald-700 px-7 font-bold text-white shadow-[0_18px_45px_rgba(4,120,87,.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800">
                  Записать ребёнка <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <Link href="/doctors/stachenkova-svetlana-valerievna" className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-300 bg-white/70 px-7 font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-800">
                  Познакомиться с врачом
                </Link>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2 text-emerald-800"><CheckIcon /> родитель рядом</span>
                <span className="flex items-center gap-2 text-emerald-800"><CheckIcon /> 30 или 60 минут</span>
                <span className="flex items-center gap-2 text-emerald-800"><CheckIcon /> без заранее заданного курса</span>
              </div>
            </motion.div>

            <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .1, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[650px] lg:mr-0">
              <div className="absolute -inset-4 rotate-2 rounded-[3rem] border border-emerald-700/15 bg-white/40" />
              <div className="relative overflow-hidden rounded-[2.4rem] bg-emerald-950 shadow-[0_34px_90px_rgba(15,23,42,.22)]">
                <motion.div style={{ y: imageY }} className="relative aspect-[4/4.25] scale-[1.08]">
                  <Image src="/images/yslugi/Pediatrician.webp" alt="Врач беседует с ребёнком на приёме" fill priority sizes="(max-width: 1024px) 92vw, 45vw" className="object-cover" />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-white/5" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-5">
                    <div className="text-white"><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">Формат консультации</p><p className="mt-2 max-w-sm text-xl font-bold leading-tight sm:text-2xl">Беседа → осмотр → понятный следующий шаг</p></div>
                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-emerald-800 sm:flex"><ArrowIcon /></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 pr-5 shadow-xl backdrop-blur sm:-left-7 sm:p-4 sm:pr-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-emerald-50 sm:h-14 sm:w-14"><Image src="/images/doctors/Stachenkova Svetlana Valerievna.webp" alt="Стаченкова Светлана Валериевна" fill sizes="56px" className="object-cover object-top" /></div>
                <div><p className="text-xs font-semibold text-emerald-700">Приём ведёт</p><p className="max-w-[190px] text-sm font-bold leading-tight text-slate-900 sm:max-w-none">Светлана Стаченкова</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <motion.div {...fadeUp} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Две специальности", "Педиатрический взгляд и остеопатический приём у одного врача."],
            ["В комфортном темпе", "У ребёнка есть время познакомиться с кабинетом и врачом."],
            ["Родители участвуют", "Можно задать вопросы и получить объяснение без сложных терминов."],
            ["План после осмотра", "Следующий шаг определяют по ситуации, а не по готовой схеме."],
          ].map(([title, text], index) => (
            <article key={title} className={`rounded-[2rem] border p-6 sm:p-7 ${index === 0 ? "border-emerald-200 bg-emerald-950 text-white" : "border-slate-200 bg-white"}`}>
              <span className={`text-xs font-black tracking-[.18em] ${index === 0 ? "text-emerald-300" : "text-emerald-700"}`}>0{index + 1}</span>
              <h2 className="mt-8 text-xl font-black tracking-tight">{title}</h2>
              <p className={`mt-3 leading-7 ${index === 0 ? "text-emerald-50/75" : "text-slate-600"}`}>{text}</p>
            </article>
          ))}
        </motion.div>
      </section>

      <section className="bg-emerald-950 py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:px-12">
          <motion.div {...fadeUp} className="lg:sticky lg:top-32">
            <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-300">Приём с учётом возраста</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.02] tracking-[-.045em] sm:text-5xl">Разные этапы детства — разные вопросы родителей</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-emerald-50/70">Выберите возраст ребёнка: покажем, на чём будет сосредоточен разговор с врачом.</p>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Возраст ребёнка">
              {ageGroups.map((group) => (
                <button key={group.id} type="button" role="tab" aria-selected={activeAge.id === group.id} data-age-tab={group.id} onClick={() => setActiveAge(group)} className={`rounded-full border px-4 py-3 text-sm font-bold transition ${activeAge.id === group.id ? "border-white bg-white text-emerald-950" : "border-white/20 text-white hover:border-white/50 hover:bg-white/5"}`}>
                  {group.short}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div key={activeAge.id} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .42 }} role="tabpanel" className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[.07] p-7 sm:p-10 lg:p-12">
            <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-200/10 blur-3xl" />
            <p className="relative text-sm font-bold text-emerald-300">{activeAge.label}</p>
            <h3 className="relative mt-3 text-3xl font-black tracking-tight sm:text-4xl">{activeAge.title}</h3>
            <p className="relative mt-6 max-w-2xl text-lg leading-8 text-emerald-50/75">{activeAge.text}</p>
            <div className="relative mt-9 grid gap-3 sm:grid-cols-3">
              {activeAge.points.map((point) => <div key={point} className="rounded-2xl border border-white/10 bg-white/[.06] p-4 text-sm font-semibold leading-6 text-white"><span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300"><CheckIcon /></span>{point}</div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <motion.div {...fadeUp} className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div><p className="text-xs font-black uppercase tracking-[.22em] text-emerald-700">Сценарии обращения</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-.045em] sm:text-5xl lg:text-6xl">С чем родители приходят на консультацию</h2></div>
          <p className="max-w-md text-lg leading-8 text-slate-600">Не обязательно формулировать медицинский диагноз. Достаточно рассказать врачу, что именно вы замечаете.</p>
        </motion.div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {parentRequests.map((item) => (
            <motion.article key={item.title} {...fadeUp} className="group min-h-[260px] bg-white p-7 transition duration-300 hover:bg-emerald-50/70 sm:p-9">
              <div className="flex items-start justify-between"><span className="text-sm font-black text-emerald-700">{item.number}</span><span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-emerald-500 group-hover:bg-emerald-700 group-hover:text-white"><ArrowIcon className="h-4 w-4 -rotate-45" /></span></div>
              <h3 className="mt-12 text-2xl font-black tracking-tight">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-500">Если ребёнок сейчас болеет или недавно получил травму, сначала выберите педиатра или травматолога; плановую консультацию остеопата можно перенести.</p>
      </section>

      <section className="border-y border-slate-200 bg-[#f2f8f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-700">Первый визит</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.03] tracking-[-.045em] sm:text-5xl">Как проходит встреча с детским остеопатом</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">Без спешки и неожиданностей: родители понимают последовательность приёма ещё до записи.</p>
            </div>
            <div className="space-y-3">
              {visitSteps.map((item) => (
                <article key={item.step} className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[74px_1fr] sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-black text-emerald-800">{item.step}</div>
                  <div><h3 className="text-xl font-black tracking-tight">{item.title}</h3><p className="mt-2 leading-7 text-slate-600">{item.text}</p></div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <motion.div {...fadeUp} className="relative overflow-hidden rounded-[2.75rem] bg-[linear-gradient(120deg,#064e3b_0%,#065f46_58%,#047857_100%)] p-7 text-white sm:p-10 lg:p-14">
          <div aria-hidden="true" className="absolute right-[-8%] top-[-30%] h-[480px] w-[480px] rounded-full border-[70px] border-white/[.04]" />
          <div className="relative grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[350px] overflow-hidden rounded-[2rem] bg-emerald-100 shadow-2xl lg:mx-0">
              <Image src="/images/doctors/Stachenkova Svetlana Valerievna.webp" alt="Врач-педиатр и остеопат Стаченкова Светлана Валериевна" fill sizes="(max-width: 1024px) 80vw, 350px" className="object-cover object-top" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-300">Врач детского приёма</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-.045em] sm:text-5xl">Стаченкова Светлана Валериевна</h2>
              <p className="mt-5 text-xl font-semibold leading-8 text-emerald-50">Врач-педиатр, врач-остеопат, кандидат медицинских наук</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[.07] p-5"><p className="text-sm text-emerald-200">Врачебный стаж</p><p className="mt-2 text-xl font-black">с 1995 года</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/[.07] p-5"><p className="text-sm text-emerald-200">Практическая работа</p><p className="mt-2 text-xl font-black">более 20 лет с детьми</p></div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-50">Записаться к врачу <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a>
                <Link href="/doctors/stachenkova-svetlana-valerievna" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 px-7 font-bold transition hover:bg-white/10">Профиль врача</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12 lg:pb-28">
        <motion.div {...fadeUp}>
          <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-700">Подготовка без лишнего</p>
          <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-.045em] sm:text-5xl">Что пригодится на консультации</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Не нужно проходить обследования специально. Возьмите то, что уже есть, и коротко вспомните историю вопроса.</p>
        </motion.div>
        <motion.div {...fadeUp} className="grid gap-3 sm:grid-cols-2">
          {["Выписки и заключения врачей", "Результаты выполненных обследований", "Список лекарств и сведения об аллергиях", "Удобная одежда и знакомая игрушка"].map((item) => <div key={item} className="flex min-h-[110px] items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800"><CheckIcon /></span><p className="pt-1 font-bold leading-7 text-slate-800">{item}</p></div>)}
        </motion.div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <motion.div {...fadeUp} className="text-center"><p className="text-xs font-black uppercase tracking-[.22em] text-emerald-300">Ответы для родителей</p><h2 className="mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl">Частые вопросы</h2></motion.div>
          <div className="mt-12 space-y-3">
            {faq.map((item, index) => (
              <motion.details key={item.question} {...fadeUp} className="group rounded-2xl border border-white/10 bg-white/[.05] open:bg-white/[.08]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-bold sm:p-7 sm:text-lg"><span><span className="mr-4 text-sm text-emerald-300">0{index + 1}</span>{item.question}</span><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-xl font-light transition duration-300 group-open:rotate-45 group-open:bg-white group-open:text-slate-950">+</span></summary>
                <div className="px-6 pb-7 pl-6 pr-16 text-base leading-8 text-slate-300 sm:px-7 sm:pl-[78px] sm:pr-20">{item.answer}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <motion.div {...fadeUp} className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-black uppercase tracking-[.22em] text-emerald-700">Продолжить маршрут</p><h2 className="mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl">Полезные разделы</h2></div><Link href="/services" className="group flex items-center gap-2 font-bold text-emerald-800">Все услуги <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link></motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Педиатрия", "Плановые консультации и наблюдение ребёнка.", "/services/pediatrics"],
            ["Остеопатия", "Подробно о направлении и формате приёма.", "/services/osteopathy"],
            ["Как проходит первый приём", "Статья для спокойной подготовки родителей.", "/blog/detskiy-osteopat-kak-prohodit-priem"],
          ].map(([title, text, href]) => <Link key={title} href={href} className="group rounded-[2rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"><div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-black tracking-tight">{title}</h3><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-emerald-700 group-hover:text-white"><ArrowIcon className="h-4 w-4 -rotate-45" /></span></div><p className="mt-8 leading-7 text-slate-600">{text}</p></Link>)}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <motion.div {...fadeUp} className="mx-auto max-w-[1344px] overflow-hidden rounded-[2.75rem] bg-[linear-gradient(135deg,#d1fae5_0%,#f0fdf4_54%,#ffedd5_100%)] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.22em] text-emerald-700">Альтамед‑С · Одинцово</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-.05em] sm:text-5xl lg:text-6xl">Запишите ребёнка на спокойную консультацию</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Выберите удобное время онлайн или уточните формат приёма у администратора.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-emerald-700 px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800">Записаться онлайн <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a><a href="tel:+74952554450" className="inline-flex min-h-14 items-center justify-center rounded-full border border-emerald-800/20 bg-white/70 px-7 font-bold text-emerald-950 transition hover:bg-white">+7 (495) 255-44-50</a></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
