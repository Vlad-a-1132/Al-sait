"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const { vSection } = makeMotionPresets(!!reduced);
  return (
    <section id={id} className="w-full">
      <motion.div
        variants={vSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={
          "overflow-x-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8 " +
          className
        }
      >
        {children}
      </motion.div>
    </section>
  );
}
