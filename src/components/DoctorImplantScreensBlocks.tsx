"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const faqQuestions = [
  "Какой срок службы зубных имплантатов?",
  "На сколько времени делается имплантация зубов?",
  "Через сколько времени после имплантации можно жевать?",
  "Какие заболевания являются противопоказанием к имплантации?",
];

const reviews = [
  { name: "Брайште Петухова", stars: 5, text: "Очень довольна результатом. Врач внимательный, всё объяснил. Рекомендую." },
  { name: "Светлана Иодина", stars: 3, text: "Установили имплант аккуратно, без лишней боли. Спасибо за профессионализм." },
];

const advantagesList = [
  { title: "Полное восстановление", desc: "Имплант восстанавливает функцию и эстетику зубного ряда на долгие годы." },
  { title: "Быстрое приживление", desc: "Современные системы и методики ускоряют остеоинтеграцию." },
  { title: "Долговечность", desc: "Надёжный срок службы при правильном уходе и регулярных осмотрах." },
  { title: "Безопасность", desc: "Проверенные материалы и протоколы, минимальные риски." },
  { title: "Функциональность", desc: "Имплант интегрируется в кость и обеспечивает стабильную опору для коронки." },
  { title: "Эстетичный результат", desc: "Коронки на имплантах неотличимы от естественных зубов." },
];

const indications = [
  "Отсутствие одного зуба",
  "Отсутствие нескольких зубов подряд",
  "Полное отсутствие зубов (даёт возможность провести протезирование зубного ряда)",
];

const contraindications = [
  "Абсолютные – имплантацию проводить нельзя",
  "При относительных противопоказаниях – можно после решения проблемы",
  "И социальные – вопрос обсуждается с врачом, решение принимается исходя из образа жизни пациента.",
];

const portfolioItems = [
  { label: "Пример имплантации All-on-4", id: 1 },
  { label: "Пример имплантации All-on-6", id: 2 },
  { label: "Пример имплантации All-on-4", id: 3 },
  { label: "Пример имплантации All-on-4", id: 4 },
  { label: "Пример имплантации All-on-6", id: 5 },
  { label: "Пример имплантации All-on-4", id: 6 },
];

export default function DoctorImplantScreensBlocks() {
  return (
    <div className="bg-[#eef4ff]/50">
      {/* Блок 1: FAQ (слева) + Цены/Отзывы (справа) */}
      <section className="mx-auto px-4 py-12 md:py-16" style={{ maxWidth: "1400px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <div className="rounded-[28px] p-6 md:p-8 bg-white/90 shadow-[0_30px_80px_rgba(17,24,39,0.08)] border border-white/80">
              <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-6 flex items-center justify-between">
                Часто задаваемые вопросы
                <span className="text-[#64748B] text-2xl">→</span>
              </h2>
              <ul className="space-y-3">
                {faqQuestions.map((q, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className="w-full text-left flex items-center justify-between gap-4 py-4 px-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-[#21C7FF]/30 transition-colors"
                    >
                      <span className="font-medium text-[#0F172A] text-sm md:text-base">{q}</span>
                      <span className="text-[#64748B] shrink-0">→</span>
                    </button>
                  </li>
                ))}
              </ul>
              <Link
                href="/#contacts"
                className="mt-6 flex items-center justify-center w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 transition-all"
              >
                Задать вопрос доктору
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-[28px] p-6 md:p-8 bg-white/90 shadow-[0_30px_80px_rgba(17,24,39,0.08)] border border-white/80">
              <p className="text-center text-[#64748B] text-sm md:text-base mb-4">
                Цены указаны за 1 имплант с установкой под ключ.
              </p>
              <Link
                href="/services/implantation#prices"
                className="flex items-center justify-center w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 transition-all"
              >
                Посмотреть полный прайс
              </Link>
            </div>
            <div className="rounded-[28px] p-6 md:p-8 bg-white/90 shadow-[0_30px_80px_rgba(17,24,39,0.08)] border border-white/80 relative overflow-hidden min-h-[320px]">
              <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-6">Отзывы пациентов</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-0 sm:pr-44">
                {reviews.map((r) => (
                  <div key={r.name} className="rounded-2xl p-4 bg-[#f8fafc] border border-slate-200/80">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-[#21C7FF]/20 flex items-center justify-center text-[#0F172A] font-semibold text-lg">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F172A]">{r.name}</p>
                        <p className="text-amber-400 text-sm">
                          {"★".repeat(r.stars)}
                          {"☆".repeat(5 - r.stars)}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#64748B] text-sm leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
              <div className="absolute right-0 bottom-0 w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden">
                <Image
                  src="/images/promo/Abramov Yuno Eriilevich 1.webp"
                  alt="Врач"
                  fill
                  className="object-cover object-top"
                  sizes="176px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 2: Преимущества + Показания + Противопоказания + 3D */}
      <section className="mx-auto px-4 py-12 md:py-16" style={{ maxWidth: "1400px" }}>
        <div className="rounded-[28px] p-6 md:p-10 bg-white/90 shadow-[0_30px_80px_rgba(17,24,39,0.08)] border border-white/80 overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8">
            Преимущества имплантации зубов
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {advantagesList.map((a, i) => (
                  <div key={i} className="border-b border-slate-200/80 pb-4 last:border-0">
                    <h3 className="font-bold text-[#0F172A] mb-1">{a.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-2xl p-5 bg-[#f0f7ff] border border-slate-200/60">
                  <h3 className="font-bold text-[#0F172A] mb-3">Показания к имплантации</h3>
                  <ul className="space-y-2 text-sm text-[#475569]">
                    {indications.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#21C7FF]">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl p-5 bg-[#f0f7ff] border border-slate-200/60">
                  <h3 className="font-bold text-[#0F172A] mb-3">Противопоказания</h3>
                  <ul className="space-y-2 text-sm text-[#475569]">
                    {contraindications.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#21C7FF]">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <div
                className="w-full aspect-[4/3] max-w-md rounded-2xl bg-gradient-to-br from-[#c4daf4] to-[#e8f0fa] flex items-center justify-center border border-white/60 shadow-inner"
                aria-hidden
              >
                <span className="text-[#0F172A]/40 text-sm font-medium">3D имплант</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 3: Портфолио — сетка до/после */}
      <section className="mx-auto px-4 py-12 md:py-16" style={{ maxWidth: "1400px" }}>
        <div className="rounded-[28px] p-6 md:p-10 bg-white/90 shadow-[0_30px_80px_rgba(17,24,39,0.08)] border border-white/80">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">Портфолио</h2>
            <Link
              href="/services/implantation#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 transition-all shrink-0"
            >
              Перейти в портфолио
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden border border-slate-200/80 bg-[#f8fafc]">
                <p className="px-4 py-3 font-medium text-[#0F172A] text-sm md:text-base border-b border-slate-200/80">
                  {item.label}
                </p>
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center relative">
                  <span className="text-slate-400 text-xs">До / После</span>
                </div>
                <div className="p-4">
                  <Link
                    href="/services/implantation#portfolio"
                    className="block w-full text-center py-2.5 rounded-xl font-semibold text-[#0F172A] bg-white border border-slate-200 hover:border-[#21C7FF]/50 transition-colors"
                  >
                    Больше деталей
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
