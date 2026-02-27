"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";

export function ReviewsStrip({
  reviews,
  activeDirectionId,
  reviewsSource,
  reviewsSources,
}: {
  reviews: Array<{ id: string; directionId?: string; name: string; rating: number; text: string }>;
  activeDirectionId: string | null;
  /** Одна ссылка на отзывы (например ПроДокторов). */
  reviewsSource?: { url: string; label: string };
  /** Несколько сервисов с отзывами (НаПоправку, Яндекс, 32top). */
  reviewsSources?: { url: string; label: string }[];
}) {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const { vReveal } = makeMotionPresets(!!reduced);
  const sources = reviewsSources?.length ? reviewsSources : reviewsSource ? [reviewsSource] : [];

  return (
    <motion.div variants={vReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h2 className="text-2xl font-bold text-[#0F172A]">Отзывы пациентов</h2>
        {sources.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#21C7FF] hover:underline"
          >
            {s.label} →
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {reviews.map((r) => (
          <div key={r.id} className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#21C7FF]/20 text-lg font-semibold text-[#0F172A]">{r.name.charAt(0)}</div>
              <div>
                <p className="font-semibold text-[#0F172A]">{r.name}</p>
                <p className="text-amber-500 text-sm">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
              </div>
            </div>
            <p
              className={`text-sm leading-relaxed text-[#64748B] ${!expanded ? "line-clamp-3" : ""}`}
            >
              {r.text}
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="mt-4 w-full rounded-xl border-2 border-slate-200 bg-white py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:border-[#21C7FF]/50 hover:bg-slate-50"
      >
        {expanded ? "Свернуть" : "Развернуть отзывы"}
      </button>
    </motion.div>
  );
}
