// src/components/doctor/SectionShell.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";

export function SectionShell({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const { vSection } = makeMotionPresets(!!reduced);

  return (
    <section id={id} className="w-full">
      <motion.div
        variants={vSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={["rounded-[32px] border border-white/60 bg-white/70 shadow-[0_22px_80px_rgba(10,40,80,0.12)] backdrop-blur-xl p-5 md:p-10", className].join(" ")}
      >
        {children}
      </motion.div>
    </section>
  );
}
