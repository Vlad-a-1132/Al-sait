"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

export function PricingByDirection({ direction, priceCta }: { direction: DirectionData; priceCta: { label: string; href: string } }) {
  const reduced = useReducedMotion();
  const { vReveal } = makeMotionPresets(!!reduced);
  const pb = direction.priceBlock;
  const hasPriceList = direction.priceItems && direction.priceItems.length > 0;

  return (
    <motion.div variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
      <h2 className="mb-4 text-xl font-bold text-[#0F172A]">Цены: {direction.title}</h2>
      {hasPriceList ? (
        <>
          {direction.priceBlockIntro && <p className="mb-4 text-sm text-[#64748B]">{direction.priceBlockIntro}</p>}
          <ul className="mb-4 space-y-2">
            {direction.priceItems!.map((item, i) => (
              <li key={i} className="flex flex-col gap-0.5 border-b border-slate-200/80 pb-2 last:border-0 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  {item.code && <span className="text-xs text-slate-400 font-mono">{item.code}</span>}
                  <span className={`text-sm text-[#0F172A] ${item.code ? " block" : ""}`}>{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-[#0F172A] whitespace-nowrap sm:ml-4">{item.price}</span>
              </li>
            ))}
          </ul>
          {direction.priceBlockOutro && <p className="mb-4 text-sm text-[#64748B]">{direction.priceBlockOutro}</p>}
        </>
      ) : (
        <>
          {pb && <p className="mb-4 text-lg font-semibold text-[#21C7FF]">{pb.from} {pb.note && <span className="text-sm font-normal text-[#64748B]">{pb.note}</span>}</p>}
          <p className="mb-4 text-sm text-[#64748B]">{direction.priceBlockOutro ?? "Точная стоимость после осмотра."}</p>
        </>
      )}
      <Link href={priceCta.href} className="inline-flex w-full items-center justify-center rounded-2xl bg-[#21C7FF] py-3 font-semibold text-white">{priceCta.label}</Link>
    </motion.div>
  );
}
