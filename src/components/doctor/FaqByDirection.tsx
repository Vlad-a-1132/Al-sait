"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

interface FaqItem { id: string; q: string; a: string; }

export function FaqByDirection({ direction, generalFaq }: { direction: DirectionData; generalFaq: FaqItem[] }) {
  const reduced = useReducedMotion();
  const { vReveal } = makeMotionPresets(!!reduced);
  const [openId, setOpenId] = useState<string | null>(null);
  const directionFaq = direction.faq.map((f, i) => ({ id: "dir-" + i, q: f.q, a: f.a }));
  const all = [...generalFaq, ...directionFaq];

  return (
    <motion.div variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <h2 className="mb-6 text-2xl font-bold text-[#0F172A]">Часто задаваемые вопросы</h2>
      <ul className="space-y-3">
        {all.map((item) => {
          const isOpen = openId === item.id;
          return (
            <li key={item.id}>
              <button type="button" onClick={() => setOpenId(isOpen ? null : item.id)} className="flex w-full items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-4 text-left">
                <span className="font-medium text-[#0F172A] text-sm md:text-base">{item.q}</span>
                <span className="shrink-0 text-[#64748B]">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="mt-2 rounded-xl bg-white p-4 text-sm text-[#475569]">{item.a}</p>}
            </li>
          );
        })}
      </ul>
      <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="mt-6 flex w-full items-center justify-center rounded-2xl bg-[#21C7FF] py-4 font-semibold text-white">Записаться на консультацию</Link>
    </motion.div>
  );
}
