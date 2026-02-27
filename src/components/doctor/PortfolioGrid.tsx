"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

export function PortfolioGrid(props: {
  cases: Array<{ id: string; directionId: string; title: string; tag?: string }>;
  directions: Pick<DirectionData, "id" | "shortTitle">[];
  activeDirectionId: string | null;
  onFilter: (id: string | null) => void;
}) {
  const { cases, directions, activeDirectionId, onFilter } = props;
  const reduced = useReducedMotion();
  const { vReveal, vCard } = makeMotionPresets(!!reduced);
  const filtered = activeDirectionId ? cases.filter((c) => c.directionId === activeDirectionId) : cases;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-[#0F172A]">Примеры работ</h2>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => onFilter(null)} className={"rounded-full px-4 py-2 text-sm " + (activeDirectionId === null ? "bg-[#21C7FF] text-white" : "bg-slate-100")}>Все</button>
          {directions.map((d) => (
            <button key={d.id} type="button" onClick={() => onFilter(d.id)} className={"rounded-full px-4 py-2 text-sm " + (activeDirectionId === d.id ? "bg-[#21C7FF] text-white" : "bg-slate-100")}>{d.shortTitle}</button>
          ))}
        </div>
      </div>
      <Link href="/services/implantation#portfolio" className="mb-6 inline-flex rounded-full bg-[#21C7FF] px-6 py-3 font-semibold text-white">Перейти к примерам работ</Link>
      <motion.div variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <motion.div key={item.id} variants={vCard} initial="rest" whileHover="hover" className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50">
            <p className="border-b border-slate-200/80 px-4 py-3 font-medium text-[#0F172A]">{item.title}</p>
            <div className="flex aspect-[4/3] items-center justify-center bg-slate-100"><span className="text-slate-400 text-xs">До / После</span></div>
            <div className="p-4">
              <Link href="/services/implantation#portfolio" className="block w-full rounded-xl border border-slate-200 bg-white py-2.5 text-center font-semibold text-[#0F172A]">Больше деталей</Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
