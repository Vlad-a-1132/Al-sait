"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

const universalAdvantages = [
  { title: "Безопасность", desc: "Проверенные материалы и протоколы, минимальные риски." },
  { title: "Точность", desc: "Современная диагностика и планирование лечения." },
  { title: "Прогнозируемость", desc: "Понятный план и сроки, контроль на каждом этапе." },
  { title: "Комфорт", desc: "Анестезия и бережный подход, без лишнего стресса." },
];

export function AdvantagesBlock({
  direction,
}: {
  direction: DirectionData;
}) {
  const reduced = useReducedMotion();
  const { vReveal } = makeMotionPresets(!!reduced);

  return (
    <div className="space-y-8">
      <motion.h2
        variants={vReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-bold text-[#0F172A] md:text-3xl"
      >
        Преимущества: {direction.title}
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={vReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-semibold text-[#0F172A]">Преимущества подхода врача</h3>
          <div className="space-y-4">
            {universalAdvantages.map((a, i) => (
              <div key={i} className="border-b border-slate-100 pb-4 last:border-0">
                <p className="font-bold text-[#0F172A]">{a.title}</p>
                <p className="text-sm text-[#64748B] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={vReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-semibold text-[#0F172A]">Что вы получаете в этом направлении</h3>
          <ul className="space-y-2 text-sm text-[#475569]">
            {direction.whatYouGet.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#21C7FF]">–</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
