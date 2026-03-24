"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";

export function FinalCtaCard({ cta }: { cta: { label: string; href: string } }) {
  const reduced = useReducedMotion();
  const { vReveal, vBtn } = makeMotionPresets(!!reduced);

  return (
    <motion.div
      variants={vReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-3xl border-2 border-[#21C7FF]/30 bg-gradient-to-br from-[#21C7FF]/10 to-[#5EF3C4]/10 p-8 text-center md:p-12"
    >
      <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">
        Записаться на консультацию
      </h2>
      <p className="mb-6 text-[#64748B]">
        Оставьте заявку — мы подберём удобное время и ответим на вопросы.
      </p>
      <motion.div variants={vBtn} initial="rest" whileHover="hover" whileTap="tap">
        <Link
          href={cta.href}
          target={cta.href.startsWith("http") ? "_blank" : undefined}
          rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex rounded-2xl bg-[#21C7FF] px-8 py-4 font-semibold text-white shadow-lg shadow-[#21C7FF]/25 transition hover:opacity-90"
        >
          {cta.label}
        </Link>
      </motion.div>
    </motion.div>
  );
}
