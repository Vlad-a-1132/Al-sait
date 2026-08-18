"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type DobrotokPageClientProps = {
  doctor: {
    name: string;
    specialization: string;
    photo: string;
  };
};

const directions = [
  {
    number: "01",
    title: "Профилактический приём",
    text: "Комплексная оценка здоровья ребёнка, рекомендации по развитию, питанию, режиму и профилактике заболеваний.",
  },
  {
    number: "02",
    title: "Острые состояния",
    text: "Диагностика и лечение распространённых острых заболеваний детского возраста с опорой на принципы доказательной медицины.",
  },
  {
    number: "03",
    title: "Развитие ребёнка",
    text: "Оценка физического и психомоторного развития с применением современных возрастных шкал.",
  },
  {
    number: "04",
    title: "Наблюдение с рождения",
    text: "Амбулаторное наблюдение детей от рождения до 18 лет и понятный план дальнейших действий для родителей.",
  },
];

const appointmentSteps = [
  {
    label: "Знакомство",
    text: "Спокойный разговор с семьёй, история развития ребёнка и уточнение всех вопросов, которые беспокоят родителей.",
  },
  {
    label: "Осмотр",
    text: "Клиническое обследование по возрасту; при необходимости — отоскопия, риноскопия и контроль сатурации.",
  },
  {
    label: "Понятный маршрут",
    text: "Объяснение результатов простыми словами, персональные рекомендации и план наблюдения или лечения.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Научная работа международного уровня",
    text: "Диплом I степени конференции «Лидеры педиатрии будущего»; участие в конгрессе Педиатрической ассоциации Сербии.",
  },
  {
    year: "2022 — н.в.",
    title: "Научный сотрудник",
    text: "Отдел научных основ гемостаза НИИ педиатрии и охраны здоровья детей НКЦ №2 РНЦХ им. акад. Б. В. Петровского.",
  },
  {
    year: "2022",
    title: "Ординатура по педиатрии",
    text: "РНИМУ им. Н. И. Пирогова. Действующий сертификат по специальности «Педиатрия» — до 2027 года.",
  },
  {
    year: "2020",
    title: "Диплом с отличием",
    text: "Специальность «Педиатрия», Российский национальный исследовательский медицинский университет им. Н. И. Пирогова.",
  },
  {
    year: "2019",
    title: "Международное обучение",
    text: "Ереванский государственный медицинский университет им. Мхитара Гераци — организация оказания медицинской помощи.",
  },
];

const faq = [
  {
    question: "С какого возраста врач принимает детей?",
    answer: "Альбина Витальевна ведёт амбулаторный приём детей с рождения до 18 лет.",
  },
  {
    question: "Можно записаться без острой жалобы?",
    answer: "Да. Профилактический приём помогает оценить развитие ребёнка, обсудить питание и режим, а также сформировать индивидуальные рекомендации по сохранению здоровья.",
  },
  {
    question: "Что желательно взять на консультацию?",
    answer: "Возьмите выписки, результаты предыдущих обследований, прививочный сертификат и список лекарств, которые получает ребёнок. Для младенца пригодится карта развития.",
  },
  {
    question: "Какие обследования проводятся на приёме?",
    answer: "Объём осмотра зависит от возраста и причины обращения. В резюме врача отдельно указаны отоскопия, риноскопия, контроль сатурации и оценка физического и психомоторного развития.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 28" className="h-7 w-7" fill="none">
      <path d="M14 2c.8 7.2 4.8 11.2 12 12-7.2.8-11.2 4.8-12 12-.8-7.2-4.8-11.2-12-12 7.2-.8 11.2-4.8 12-12Z" fill="currentColor" />
    </svg>
  );
}

export default function DobrotokPageClient({ doctor }: DobrotokPageClientProps) {
  const reducedMotion = useReducedMotion();
  const motionProps = reducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.16 },
        variants: reveal,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  return (
    <main className="overflow-hidden bg-[#f7faf7] text-[#112526]">
      <section className="relative isolate border-b border-[#dce9e2] bg-[#edf7f1]">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.95),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(146,216,187,0.34),transparent_30%),linear-gradient(135deg,#f7fbf8_0%,#e8f5ee_54%,#f7f0e6_100%)]" />
        <div className="absolute -left-24 top-36 -z-10 h-72 w-72 rounded-full border border-white/90" />
        <div className="absolute -left-12 top-48 -z-10 h-40 w-40 rounded-full border border-[#a8d9c4]/60" />

        <div className="mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.03fr_0.97fr] lg:px-12 lg:py-16 xl:px-20">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-3xl"
          >
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#acd7c4] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#17694f] shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#16a879]" />
                Педиатр · дети 0–18 лет
              </span>
              <span className="rounded-full border border-white/90 bg-white/50 px-4 py-2 text-xs font-medium text-[#48615a] backdrop-blur">
                Альтамед-С · Одинцово
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#16815f]">Врач, которому доверяют самое важное</p>
            <h1 aria-label={doctor.name} className="max-w-3xl text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#102b2a]">
              Альбина{" "}
              <span className="block font-serif font-normal italic text-[#198365]">Доброток</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#405b56] sm:text-xl sm:leading-9">
              Педиатрия, в которой клиническая точность сочетается с бережным отношением к ребёнку и понятным разговором с родителями.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointments"
                className="group mr-14 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#0d8e69] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(13,142,105,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#087a5a] sm:mr-0"
              >
                Записаться на приём
                <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
              </Link>
              <a
                href="tel:+74952554450"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#91bbaa] bg-white/70 px-7 py-4 text-sm font-semibold text-[#174b3e] transition duration-300 hover:border-[#0d8e69] hover:bg-white"
              >
                +7 (495) 255-44-50
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-[#a8c9bb]/70 pt-6">
              {[
                ["0–18", "возраст пациентов"],
                ["10+", "научных публикаций"],
                ["до 2027", "сертификат"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-xl font-semibold tracking-[-0.03em] text-[#113f35] sm:text-2xl">{value}</div>
                  <div className="mt-1 text-[11px] leading-4 text-[#61736e] sm:text-xs">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[610px] lg:mx-0 lg:justify-self-end"
          >
            <div className="absolute -inset-5 rounded-[3.3rem] border border-white/80 sm:-inset-7" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.8rem] bg-[#dce9e2] shadow-[0_35px_90px_rgba(35,78,65,0.2)]">
              <Image
                src={doctor.photo}
                alt={`${doctor.name}, врач-педиатр`}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 43vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0e312a]/65 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Научный профиль</p>
                  <p className="mt-2 max-w-[310px] text-lg font-medium leading-6">Исследовательская работа в области детской гематологии</p>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur sm:flex"><SparkIcon /></span>
              </div>
            </div>
            <div className="absolute -left-4 top-[18%] rounded-2xl border border-white/90 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-12">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1b7458]">Диплом</div>
              <div className="mt-1 text-sm font-semibold text-[#153f35]">с отличием</div>
            </div>
            <div className="absolute -right-3 top-[8%] h-20 w-20 rounded-full bg-[#f3a87c]/80 blur-[1px] sm:-right-8 sm:h-28 sm:w-28" />
          </motion.div>
        </div>
      </section>

      <nav aria-label="Навигация по странице врача" className="sticky top-0 z-30 border-b border-[#dce7e1] bg-[#f8fbf9]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] gap-7 overflow-x-auto px-5 py-4 text-sm font-medium text-[#4e635e] sm:px-8 lg:px-12">
          <a href="#approach" className="whitespace-nowrap transition hover:text-[#087858]">Подход</a>
          <a href="#directions" className="whitespace-nowrap transition hover:text-[#087858]">Направления</a>
          <a href="#appointment" className="whitespace-nowrap transition hover:text-[#087858]">Как проходит приём</a>
          <a href="#education" className="whitespace-nowrap transition hover:text-[#087858]">Образование и наука</a>
          <a href="#faq" className="whitespace-nowrap transition hover:text-[#087858]">Вопросы</a>
        </div>
      </nav>

      <motion.section id="approach" {...motionProps} className="mx-auto grid max-w-[1280px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-32">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#138060]">Подход к маленькому пациенту</p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#102d2a] sm:text-5xl">
            Сначала — доверие.
            <span className="block font-serif font-normal italic text-[#268a6c]">Потом всё остальное.</span>
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[#49605a] sm:text-xl sm:leading-9">
          <p>
            Альбина Витальевна выстраивает контакт не только с ребёнком, но и со всей семьёй. На приёме важно услышать родителей, объективно оценить состояние пациента и объяснить дальнейшие шаги без сложных формулировок.
          </p>
          <p>
            Научная работа помогает врачу глубже разбираться в нестандартных клинических ситуациях, а индивидуальный подход — учитывать возраст, темп развития и особенности конкретного ребёнка.
          </p>
          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            {["Член Союза педиатров России", "Принципы доказательной медицины", "Внимание к физическому развитию", "Понятные рекомендации семье"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#dce9e2] bg-white px-4 py-4 text-sm font-medium text-[#284c43] shadow-[0_12px_30px_rgba(43,81,67,0.05)]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#14a476]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="directions" className="bg-[#102d2b] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <motion.div {...motionProps} className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#75d3af]">С чем можно обратиться</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Здоровье ребёнка — целостная история</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/60">От первого профилактического осмотра до наблюдения в подростковом возрасте.</p>
          </motion.div>

          <div className="grid border-l border-t border-white/15 md:grid-cols-2">
            {directions.map((direction, index) => (
              <motion.article
                key={direction.title}
                initial={reducedMotion ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: reducedMotion ? 0 : index * 0.08 }}
                className="group min-h-[280px] border-b border-r border-white/15 p-7 transition duration-500 hover:bg-white/[0.06] sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold text-[#77d6b1]">{direction.number}</span>
                  <span className="h-10 w-10 rounded-full border border-white/20 transition duration-500 group-hover:scale-110 group-hover:border-[#77d6b1] group-hover:bg-[#77d6b1] group-hover:text-[#102d2b]">
                    <span className="flex h-full items-center justify-center"><ArrowIcon /></span>
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.025em]">{direction.title}</h3>
                <p className="mt-4 max-w-lg leading-7 text-white/60">{direction.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <motion.section id="appointment" {...motionProps} className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#138060]">Приём без лишней тревоги</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl">Три шага к понятному решению</h2>
            <p className="mt-6 max-w-md leading-7 text-[#5a6c67]">Последовательный приём помогает ребёнку освоиться, а родителям — получить ответы на главные вопросы.</p>
          </div>

          <div className="divide-y divide-[#cfe1d8] border-y border-[#cfe1d8]">
            {appointmentSteps.map((step, index) => (
              <div key={step.label} className="grid gap-5 py-9 sm:grid-cols-[80px_1fr] sm:py-11">
                <span className="font-serif text-4xl italic text-[#8bbbaa]">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#153d35]">{step.label}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[#5a6c67]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="education" className="relative bg-[#eef5f0] py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#f1b58f]/25 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <motion.div {...motionProps} className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#138060]">Образование и научная работа</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl">Знания, которые продолжают развиваться</h2>
            </div>
            <p className="max-w-xl leading-7 text-[#5a6c67]">Альбина Витальевна регулярно участвует в научно-практических конференциях и занимается исследованиями в области детской гематологии.</p>
          </motion.div>

          <div className="mt-16 border-t border-[#bcd3c8]">
            {milestones.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={reducedMotion ? false : { opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.05 }}
                className="grid gap-4 border-b border-[#bcd3c8] py-7 sm:grid-cols-[150px_0.9fr_1.2fr] sm:gap-8 sm:py-9"
              >
                <div className="text-sm font-semibold text-[#16805f]">{item.year}</div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#163d35]">{item.title}</h3>
                <p className="leading-7 text-[#596d67]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section {...motionProps} className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f4b18c] px-6 py-12 text-[#35251f] sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/40" />
          <div className="absolute -right-4 top-4 h-40 w-40 rounded-full border border-white/40" />
          <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#75402d]">Научный фокус</p>
              <div className="mt-5 font-serif text-7xl italic leading-none sm:text-8xl">10+</div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#6c4435]">научных статей и тезисов в отечественных и зарубежных медицинских изданиях</p>
            </div>
            <p className="text-2xl font-medium leading-snug tracking-[-0.025em] sm:text-3xl lg:text-4xl">
              Исследовательская работа помогает видеть за отдельным симптомом всю клиническую картину и внимательнее относиться к деталям.
            </p>
          </div>
        </div>
      </motion.section>

      <section id="faq" className="mx-auto max-w-[1040px] px-5 pb-24 sm:px-8 lg:pb-32">
        <motion.div {...motionProps} className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#138060]">Перед визитом</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Ответы для родителей</h2>
        </motion.div>
        <div className="mt-12 divide-y divide-[#cfe1d8] border-y border-[#cfe1d8]">
          {faq.map((item, index) => (
            <details key={item.question} className="group py-6 sm:py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-semibold text-[#173f37] sm:text-xl">
                <span className="flex items-center gap-4"><span className="text-xs font-bold text-[#19906a]">0{index + 1}</span>{item.question}</span>
                <span className="relative h-8 w-8 shrink-0 rounded-full border border-[#a9c8ba] transition group-open:rotate-45 group-open:bg-[#0d8e69] group-open:text-white">
                  <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                </span>
              </summary>
              <p className="max-w-3xl pb-2 pl-10 pr-12 pt-4 leading-7 text-[#5a6c67]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <motion.div {...motionProps} className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.8rem] bg-[#0d8e69] px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2),transparent_30%)]" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full border border-white/20" />
          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Запись к педиатру</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">Познакомьтесь с врачом, который слышит и ребёнка, и родителей</h2>
              <p className="mt-5 text-white/70">Доступное время приёма уточняется при записи.</p>
            </div>
            <Link href="/appointments" className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b7658] transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
              Выбрать время
              <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
