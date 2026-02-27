"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { OrthodonticsSeoContent } from "@/data/goncharenko/orthodonticsSeo";

export function OrthoSeoBlocks({ seoContent }: { seoContent: OrthodonticsSeoContent }) {
  const reduced = useReducedMotion();
  const { vReveal } = makeMotionPresets(!!reduced);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  return (
    <div className="space-y-10">
      <motion.section variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">Диагностика перед началом лечения</h2>
        <ul className="list-inside space-y-2 text-[#475569]">
          {seoContent.diagnosisItems.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#21C7FF]">–</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">Сроки лечения</h2>
        <p className="mb-4 text-[#475569]">
          Сколько носить брекеты или элайнеры, сколько длится исправление прикуса — зависит от сложности случая. Ориентиры:
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/80">
                <th className="px-4 py-3 font-semibold text-[#0F172A]">Ситуация</th>
                <th className="px-4 py-3 font-semibold text-[#0F172A]">Средний срок</th>
              </tr>
            </thead>
            <tbody>
              {seoContent.treatmentDurationTable.map((row, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="px-4 py-3 text-[#475569]">{row.situation}</td>
                  <td className="px-4 py-3 text-[#0F172A] font-medium">{row.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      <motion.section variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">Подготовка к установке</h2>
        <ul className="list-inside space-y-2 text-[#475569]">
          {seoContent.preparationItems.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#21C7FF]">–</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">Ретенция и сохранение результата</h2>
        <div className="space-y-3 text-[#475569]">
          {seoContent.retentionParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.section>

      <motion.section variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">До какого возраста можно исправить прикус?</h2>
        <div className="space-y-3 text-[#475569]">
          {seoContent.ageBlockParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.section>

      <motion.section variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">Совместная работа ортодонта и гнатолога</h2>
        <div className="space-y-3 text-[#475569]">
          {seoContent.orthodontGnathologistParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.section>

      {seoContent.extraSections.map((sec, idx) => (
        <motion.section key={idx} variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">{sec.h2}</h2>
          {sec.paragraphs && (
            <div className="space-y-3 text-[#475569]">
              {sec.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          {sec.subs && (
            <div className="space-y-4">
              {sec.subs.map((sub, i) => (
                <div key={i}>
                  <h3 className="mb-2 font-semibold text-[#0F172A]">{sub.h3}</h3>
                  <p className="text-[#475569]">{sub.text}</p>
                </div>
              ))}
            </div>
          )}
        </motion.section>
      ))}

      {seoContent.localSearches.length > 0 && (
        <motion.section variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="mb-2 text-2xl font-bold text-[#0F172A] md:text-3xl">Люди также ищут</h2>
          <p className="mb-4 text-sm text-[#64748B]">Частые поисковые запросы — короткие ответы.</p>
          <ul className="space-y-3">
            {seoContent.localSearches.map((item, i) => {
              const isOpen = openFaqId === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-4 text-left transition-colors hover:bg-slate-100/50"
                  >
                    <span className="font-medium text-[#0F172A] text-sm md:text-base">{item.q}</span>
                    <span className="shrink-0 text-[#64748B]">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <p className="mt-2 rounded-xl bg-white p-4 text-sm text-[#475569]">{item.a}</p>}
                </li>
              );
            })}
          </ul>
        </motion.section>
      )}
    </div>
  );
}
