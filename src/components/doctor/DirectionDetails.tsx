"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

const MEDIA_IMAGE = "/images/services/task_01kjc4qc2tf81skh1vp17q188v_1772081647_img_1.webp";
const IMPLANTATION_IMAGE = "/images/services/task_01kjc7717tfbk83k4t6h2wsahz_1772084259_img_0%201.svg";
const BONE_GRAFTING_IMAGE = "/images/services/task_01kjcg6awwf9db6x230qc1yt01_1772093679_img_0.webp";
const SINUS_LIFT_IMAGE = "/images/services/sinus.webp";
const SOFT_TISSUE_IMAGE = "/images/services/plastika.webp";
const IMMEDIATE_IMPLANTATION_IMAGE = "/images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp";
const PROSTHETICS_ON_IMPLANTS_IMAGE = "/images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp";
const VENEERS_CROWNS_IMAGE = "/images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp";

const DIRECTIONS_WITHOUT_DETAIL_IMAGE = [
  "implantation",
  "bone-grafting",
  "sinus-lift",
  "soft-tissue",
  "immediate-implantation",
  "prosthetics-on-implants",
  "veneers-crowns",
  "bite-correction",
  "gnathology-vnjc",
  "jaw-defects",
  "braces",
  "aligners",
  "children-ortho",
  "retention",
];

export function DirectionDetails({
  direction,
  directionPageBasePath,
}: {
  direction: DirectionData;
  /** Базовый путь страниц направлений: показывается кнопка «Читать подробнее» со ссылкой на страницу услуги */
  directionPageBasePath?: string;
}) {
  const reduced = useReducedMotion();
  const v = makeMotionPresets(!!reduced).vReveal;
  const showDetailImage = !DIRECTIONS_WITHOUT_DETAIL_IMAGE.includes(direction.id);
  const detailsHref = directionPageBasePath ? `${directionPageBasePath}/${direction.id}` : null;

  return (
    <div className="space-y-8" id="details">
      <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">{direction.title}</h2>
        <p className="leading-relaxed text-[#475569]">{direction.description}</p>
        {detailsHref && (
          <Link
            href={detailsHref}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-[#21C7FF]/40 bg-[#21C7FF]/10 px-5 py-2.5 font-semibold text-[#0F172A] transition-colors hover:bg-[#21C7FF]/20"
          >
            Читать подробнее
            <span aria-hidden>&rarr;</span>
          </Link>
        )}
      </motion.div>
      <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl p-5 bg-[#f0f7ff] border border-slate-200/60">
          <h3 className="mb-3 font-bold text-[#0F172A]">Показания</h3>
          <ul className="space-y-2 text-sm text-[#475569]">
            {direction.indications.map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-[#21C7FF]">–</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl p-5 bg-[#f0f7ff] border border-slate-200/60">
          <h3 className="mb-3 font-bold text-[#0F172A]">Почему безопасно</h3>
          <ul className="space-y-2 text-sm text-[#475569]">
            {direction.safety.map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-[#21C7FF]">–</span>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="mb-4 font-bold text-[#0F172A]">Как проходит</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {direction.steps.map((step, i) => (
            <div key={i} className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
              <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#21C7FF]/20 text-sm font-bold text-[#21C7FF]">{i + 1}</span>
              <p className="font-semibold text-[#0F172A]">{step.title}</p>
              <p className="mt-1 text-sm text-[#64748B]">{step.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
      {showDetailImage && (
        <motion.div
          variants={v}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`relative w-full overflow-hidden rounded-2xl bg-slate-100 ${direction.id === "sinus-lift" || direction.id === "soft-tissue" || direction.id === "immediate-implantation" || direction.id === "prosthetics-on-implants" || direction.id === "veneers-crowns" ? "min-h-[180px] aspect-video" : "min-h-[260px] md:min-h-[340px] md:aspect-video"}`}
        >
          <Image
            src={direction.id === "bone-grafting" ? BONE_GRAFTING_IMAGE : direction.id === "sinus-lift" ? SINUS_LIFT_IMAGE : direction.id === "soft-tissue" ? SOFT_TISSUE_IMAGE : direction.id === "immediate-implantation" ? IMMEDIATE_IMPLANTATION_IMAGE : direction.id === "prosthetics-on-implants" ? PROSTHETICS_ON_IMPLANTS_IMAGE : direction.id === "veneers-crowns" ? VENEERS_CROWNS_IMAGE : MEDIA_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>
      )}
    </div>
  );
}
