"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PrioritySeoArticle } from "@/data/priority-seo-articles";

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ImmersivePrioritySeoArticlePage({ article }: { article: PrioritySeoArticle }) {
  const reduceMotion = Boolean(useReducedMotion());
  const heroRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("scenarii");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 115, damping: 28, mass: 0.2 });
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(heroProgress, [0, 1], [0, reduceMotion ? 0 : 56]);

  const navItems = useMemo(
    () => [
      ...(article.scenarios?.length ? [{ id: "scenarii", title: "Частые сценарии" }] : []),
      ...article.sections.map((section) => ({ id: section.id, title: section.title })),
      { id: "faq", title: "Вопросы и ответы" },
    ],
    [article.scenarios, article.sections],
  );

  useEffect(() => {
    const nodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [navItems]);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const [headingLead, ...headingRest] = article.h1.split(":");
  const headingAccent = headingRest.join(":").trim();
  const hasHeadingAccent = headingAccent.length > 0;

  return (
    <div className="relative overflow-hidden bg-[#f8fbf9] text-slate-950">
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-emerald-600 to-teal-400"
        style={{ scaleX: progress }}
      />

      <div className="border-b border-emerald-950/[0.06] bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6">
          <nav className="flex min-w-0 items-center gap-2 overflow-hidden text-sm text-slate-500" aria-label="Хлебные крошки">
            <Link href="/" className="shrink-0 transition hover:text-emerald-700">Главная</Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <Link href="/blog" className="shrink-0 transition hover:text-emerald-700">Блог</Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <Link href={`/blog/topics/${article.direction}`} className="shrink-0 transition hover:text-emerald-700">{article.category}</Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="truncate font-medium text-slate-800">{headingLead}</span>
          </nav>
        </div>
      </div>

      <section ref={heroRef} className="relative isolate overflow-hidden bg-[#eff8f3]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,116,81,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(14,116,81,.045) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />
        <div aria-hidden="true" className="absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-24 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-200/25 blur-3xl" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              <Link href={`/blog/topics/${article.direction}`} className="rounded-full border border-emerald-800/15 bg-white/75 px-4 py-2 backdrop-blur transition hover:border-emerald-700/30 hover:bg-white">
                {article.category}
              </Link>
              <span className="normal-case tracking-normal text-slate-500">Материал для пациентов · {article.readingTime}</span>
            </div>

            <h1 className="max-w-4xl text-[2.5rem] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[4.25rem]">
              <span className="block">{headingLead}{hasHeadingAccent ? ":" : ""}</span>
              {hasHeadingAccent && (
                <span className="mt-2 block bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  {headingAccent}
                </span>
              )}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {article.intro[0]}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={APPOINTMENTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-emerald-700 px-7 font-bold text-white shadow-[0_18px_45px_rgba(4,120,87,.23)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-[0_22px_55px_rgba(4,120,87,.3)]"
              >
                {article.primaryCtaLabel ?? "Записаться онлайн"}
                <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href={article.serviceHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-emerald-800/15 bg-white/80 px-7 font-bold text-emerald-900 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-emerald-700/30 hover:bg-white"
              >
                {article.secondaryCtaLabel ?? article.serviceLabel}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 28 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[7px] border-white bg-white shadow-[0_35px_90px_rgba(15,69,52,.18)] sm:rounded-[2.6rem]">
              <Image
                src={article.image}
                alt={article.imageAlt ?? article.h1}
                fill
                priority
                quality={92}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-transparent to-white/5" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">На консультации</div>
                  <div className="mt-1 text-lg font-bold sm:text-xl">{article.heroCaption ?? article.category}</div>
                </div>
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur sm:flex">
                  <ArrowIcon className="h-5 w-5 -rotate-45" />
                </div>
              </div>
            </motion.div>

            <motion.div
              aria-hidden="true"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-white/70 bg-white/85 px-5 py-4 shadow-xl shadow-emerald-900/10 backdrop-blur-xl sm:block lg:-left-7"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Цель приёма</div>
              <div className="mt-1 font-bold text-slate-900">Понять причину и следующий шаг</div>
            </motion.div>
          </motion.div>
        </div>

        <div className="border-t border-emerald-950/[0.07] bg-white/55 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-4 py-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(article.heroChips ?? article.scenarios?.map((item) => item.title) ?? []).map((label) => (
              <a key={label} href="#scenarii" className="whitespace-nowrap rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-700/25 hover:text-emerald-800">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <motion.div {...reveal()} className="grid overflow-hidden rounded-[2rem] border border-emerald-950/[0.08] bg-white shadow-[0_28px_90px_rgba(16,70,52,.08)] lg:grid-cols-[1.18fr_.82fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Короткий ответ</div>
              <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl">
                {article.summaryTitle ?? "Главное по теме"}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{article.answer}</p>
            </div>
            <div className="grid border-t border-emerald-950/[0.07] bg-[#eff8f3] p-6 sm:p-8 lg:border-l lg:border-t-0">
              {(article.overviewSteps ?? [
                { title: "Уточняем жалобу", text: "Когда появился симптом, как меняется и что уже предпринимали." },
                { title: "Проводим осмотр", text: "Врач оценивает профильные признаки и результаты выполненных исследований." },
                { title: "Выбираем маршрут", text: "Следующий шаг определяется после консультации, а не по готовой схеме." },
              ]).map(({ title, text }, index) => (
                <div key={title} className={`grid grid-cols-[46px_1fr] gap-3 py-4 ${index ? "border-t border-emerald-900/10" : ""}`}>
                  <span className="font-mono text-sm font-bold text-emerald-700">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {article.scenarios?.length ? (
          <section id="scenarii" className="scroll-mt-24 border-y border-emerald-950/[0.06] bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
              <motion.div {...reveal()} className="grid gap-6 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Частые сценарии</div>
                  <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">{article.scenariosTitle ?? "Как может проявляться жалоба"}</h2>
                </div>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
                  {article.scenariosLead ?? "Выберите ближайший сценарий — так будет проще сформулировать жалобу при записи и на консультации."}
                </p>
              </motion.div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {article.scenarios.map((scenario, index) => (
                  <motion.article
                    key={scenario.title}
                    {...reveal(index * 0.045)}
                    whileHover={reduceMotion ? undefined : { y: -7 }}
                    className="group relative min-h-[250px] overflow-hidden rounded-[1.65rem] border border-emerald-950/[0.08] bg-[#f7fbf8] p-7 transition-colors duration-300 hover:bg-emerald-950"
                  >
                    <div aria-hidden="true" className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-300/30 blur-2xl transition duration-500 group-hover:scale-150 group-hover:bg-emerald-400/25" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-emerald-800/10 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700 transition group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-emerald-200">
                          {scenario.accent}
                        </span>
                        <span className="font-mono text-sm text-slate-400 transition group-hover:text-emerald-200/70">0{index + 1}</span>
                      </div>
                      <h3 className="mt-8 text-2xl font-bold tracking-[-0.025em] text-slate-950 transition group-hover:text-white">{scenario.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 transition group-hover:text-emerald-50/80">{scenario.text}</p>
                      <ArrowIcon className="mt-auto h-6 w-6 translate-y-3 text-emerald-700 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:text-emerald-300 group-hover:opacity-100" />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-14">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 rounded-[1.5rem] border border-emerald-950/[0.08] bg-white p-5 shadow-[0_18px_55px_rgba(16,70,52,.06)]">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Навигация по статье</div>
              <nav aria-label="Содержание статьи" className="space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`grid grid-cols-[28px_1fr] gap-2 rounded-xl px-3 py-2.5 text-sm leading-5 transition ${
                      activeSection === item.id ? "bg-emerald-50 font-semibold text-emerald-900" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className={`font-mono text-[11px] ${activeSection === item.id ? "text-emerald-700" : "text-slate-300"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="line-clamp-2">{item.title}</span>
                  </a>
                ))}
              </nav>
              <a href={PHONE_LINK} className="mt-5 flex items-center justify-between rounded-xl bg-emerald-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">
                Позвонить
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-9">
            {article.sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                {...reveal()}
                className="relative scroll-mt-24 border-b border-emerald-950/[0.08] py-12 first:pt-0 sm:py-16"
              >
                <div className="grid gap-5 sm:grid-cols-[70px_1fr] sm:gap-7">
                  <div className="font-mono text-sm font-bold text-emerald-700">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">{section.title}</h2>
                    <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-[1.08rem]">
                      {section.paragraphs.map((text) => <p key={text}>{text}</p>)}
                    </div>

                    {section.points?.length ? (
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {section.points.map((point) => (
                          <div key={point} className="flex items-start gap-3 rounded-2xl border border-emerald-900/[0.08] bg-white p-4 text-sm leading-6 text-slate-700 shadow-[0_10px_30px_rgba(16,70,52,.045)] transition hover:border-emerald-700/20 hover:shadow-[0_15px_35px_rgba(16,70,52,.08)]">
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><CheckIcon /></span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.section>
            ))}

            <motion.section id="faq" {...reveal()} className="scroll-mt-24 py-14 sm:py-20">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">FAQ</div>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">{article.faqTitle ?? "Вопросы по теме"}</h2>
              <div className="mt-8 divide-y divide-emerald-950/[0.08] border-y border-emerald-950/[0.08]">
                {article.faq.map((item, index) => (
                  <details key={item.question} open={index === 0} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left text-lg font-bold text-slate-900 transition marker:hidden hover:text-emerald-800 sm:text-xl [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-900/10 bg-emerald-50 text-xl font-normal text-emerald-800 transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-6 text-base leading-8 text-slate-600">{item.answer}</p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </motion.section>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 sm:pb-28">
          <motion.div {...reveal()} className="relative isolate overflow-hidden rounded-[2rem] bg-emerald-950 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div aria-hidden="true" className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-40 left-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Альтамед-С · Одинцово</div>
                <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-[-0.035em] sm:text-5xl">{article.finalCtaTitle ?? "Перейти от симптома к понятному плану"}</h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-emerald-50/75 sm:text-lg">{article.finalCtaText ?? "Выберите удобное время онлайн. При записи назовите основную жалобу — администратор поможет подобрать профильного специалиста."}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-50">
                  Записаться онлайн
                  <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={PHONE_LINK} className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 px-7 font-bold text-white transition hover:border-white/50 hover:bg-white/10">+7 (495) 255-44-50</a>
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal(0.08)} className="mt-14">
            <div className="flex items-end justify-between gap-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Продолжить чтение</div>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950 sm:text-3xl">Связанные материалы и услуги</h2>
              </div>
              <Link href={`/blog/topics/${article.direction}`} className="hidden font-bold text-emerald-800 hover:underline sm:block">Все материалы: {article.category} →</Link>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {article.related.map((item, index) => (
                <Link key={item.href} href={item.href} className="group flex min-h-[170px] flex-col justify-between rounded-[1.5rem] border border-emerald-950/[0.08] bg-white p-6 shadow-[0_12px_40px_rgba(16,70,52,.045)] transition duration-300 hover:-translate-y-1 hover:border-emerald-700/20 hover:shadow-[0_20px_55px_rgba(16,70,52,.09)]">
                  <span className="font-mono text-xs font-bold text-emerald-700">0{index + 1}</span>
                  <span className="flex items-end justify-between gap-4 text-lg font-bold text-slate-900">
                    {item.title}
                    <ArrowIcon className="h-5 w-5 shrink-0 text-emerald-700 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
