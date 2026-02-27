"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { DirectionData } from "@/components/doctor/types";
import type { OrthoDirectionContent } from "@/data/goncharenko/orthoDirectionContent";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  direction: DirectionData;
  content: OrthoDirectionContent | null;
  imageSrc: string;
  hasPriceList: boolean;
};

export function OrthoPageContent({ direction, content, imageSrc, hasPriceList }: Props) {
  const introLong = content?.introLong ?? direction.description;
  const benefitsLead = content?.benefitsLead;
  const benefitsList = content?.benefitsList ?? direction.whatYouGet;
  const forWhom = content?.forWhom;
  const clinicNote = content?.clinicNote;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                {direction.title} в клинике «Альтамед-С»
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-emerald-100 md:text-xl">
                {direction.description}
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-emerald-800 shadow-lg transition hover:bg-emerald-50 hover:shadow-xl"
                >
                  Записаться на приём
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20"
            >
              <Image
                src={imageSrc}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* О направлении + чем полезна */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
              className="space-y-6 lg:col-span-2"
            >
              <motion.h2 variants={item} className="text-3xl font-bold text-gray-900">
                {direction.title} в Одинцово: почему выбирают нас
              </motion.h2>
              <motion.p variants={item} className="leading-relaxed text-gray-700">
                {introLong}
              </motion.p>
              {clinicNote && (
                <motion.p variants={item} className="rounded-xl bg-emerald-50/80 p-4 text-gray-700">
                  {clinicNote}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-l-4 border-emerald-600 bg-gradient-to-br from-slate-50 to-emerald-50/30 p-6 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Что вы получаете</h3>
              <ul className="space-y-3 text-gray-700">
                {direction.whatYouGet.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Чем полезна услуга */}
      {benefitsLead && (
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
          <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-3xl font-bold text-gray-900"
            >
              Чем полезна услуга
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-700"
            >
              {benefitsLead}
            </motion.p>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {benefitsList.map((point, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
            {forWhom && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 rounded-2xl bg-emerald-50/60 p-5 text-gray-700"
              >
                <p className="font-medium text-emerald-900">Для кого подходит</p>
                <p className="mt-1">{forWhom}</p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Преимущества */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-3xl font-bold text-gray-900"
          >
            Преимущества в «Альтамед-С»
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {direction.safety.map((point, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-6 shadow-sm transition hover:border-emerald-200 hover:bg-white hover:shadow-md"
              >
                <p className="leading-relaxed text-gray-700">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Как проходит + Показания */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-3xl font-bold text-gray-900"
              >
                Как проходит лечение
              </motion.h2>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {direction.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600 font-bold text-white shadow">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-gray-600">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm lg:self-start"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Показания</h3>
              <ul className="space-y-3 text-gray-700">
                {direction.indications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                    {ind}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Цены */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-gray-900"
          >
            Цены в Одинцово
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-gray-600"
          >
            Стоимость зависит от выбранной методики и плана. Точную сумму назовёт врач на консультации.
          </motion.p>
          {hasPriceList ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-8"
            >
              {direction.priceBlockIntro && (
                <p className="mb-5 text-gray-600">{direction.priceBlockIntro}</p>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                {direction.priceItems!.map((row, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow"
                  >
                    {row.code && (
                      <span className="mb-1 block text-xs font-mono text-slate-400">{row.code}</span>
                    )}
                    <div className="mb-2 text-sm font-medium text-gray-900 md:text-base">
                      {row.name}
                    </div>
                    <div className="text-lg font-bold text-emerald-700">{row.price}</div>
                  </div>
                ))}
              </div>
              {direction.priceBlockOutro && (
                <p className="mt-5 text-sm text-gray-600">{direction.priceBlockOutro}</p>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
            >
              {direction.priceBlock?.from && (
                <p className="text-lg font-semibold text-emerald-700">
                  {direction.priceBlock.from}
                  {direction.priceBlock.note && (
                    <span className="ml-2 text-gray-600">{direction.priceBlock.note}</span>
                  )}
                </p>
              )}
              <p className="mt-3 text-gray-600">
                {direction.priceBlockOutro ?? "Точная стоимость после осмотра и составления плана."}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-bold text-gray-900"
          >
            Частые вопросы
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {direction.faq.map((faqItem, i) => (
              <motion.details
                key={i}
                variants={item}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-emerald-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-left">
                  <span className="font-semibold text-gray-900 group-open:text-emerald-700">
                    {faqItem.q}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-180 group-open:bg-emerald-100 group-open:text-emerald-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-6 pb-4 pt-2 text-gray-600">
                  {faqItem.a}
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-8 text-white shadow-xl md:p-12 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold md:text-3xl">
                {direction.title} в Одинцово — запишитесь на консультацию
              </h2>
              <p className="mt-3 text-white/90">
                Врач-ортодонт проведёт осмотр, составит план лечения и ответит на вопросы. Запись по
                телефону или через форму на сайте.
              </p>
            </div>
            <Link
              href="/appointments"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-emerald-800 shadow-lg transition hover:bg-emerald-50"
            >
              Записаться на приём
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
