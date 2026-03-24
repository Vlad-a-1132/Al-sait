"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

const MEDIA_IMAGE = "/images/services/task_01kjc4qc2tf81skh1vp17q188v_1772081647_img_1.webp";
const IMPLANTATION_IMAGE = "/images/services/Group 83.svg";
const IMPLANTATION_IMAGE_MOBILE = "/images/services/Group 84.svg";
const BONE_GRAFTING_IMAGE = "/images/services/Group 85.png";
const BONE_GRAFTING_IMAGE_MOBILE = "/images/services/task_01kjcgwmb5errt6v65h9kzs8g0_1772094423_img_1.webp";
const SINUS_LIFT_IMAGE = "/images/services/sinus.webp";
const SOFT_TISSUE_IMAGE = "/images/services/plastika.webp";
const IMMEDIATE_IMPLANTATION_IMAGE = "/images/services/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0.webp";
const PROSTHETICS_ON_IMPLANTS_IMAGE = "/images/services/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1.webp";
const VENEERS_CROWNS_IMAGE = "/images/services/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0.webp";
const BITE_CORRECTION_IMAGE = "/images/services/task_01kjedhsx1fr0r6jshty3weha3_1772158013_img_1.webp";
const GNATHOLOGY_VNJC_IMAGE = "/images/services/task_01kjee10vbfzft0p4jwc1jhhy9_1772158514_img_0.webp";
const JAW_DEFECTS_IMAGE = "/images/services/task_01kjeeh8ave6yvj14anr34q620_1772159046_img_0.webp";
const BRACES_IMAGE = "/images/services/task_01kjef6tahe3fb2acdv7jvkhpn_1772159752_img_0.webp";
const ALIGNERS_IMAGE = "/images/services/task_01kjefcfecevgathas0khxayzn_1772159936_img_1.webp";
const CHILDREN_ORTHO_IMAGE = "/images/services/task_01kjefj215evg92prh3rbbcnfk_1772160119_img_1.webp";
const RETENTION_IMAGE = "/images/services/task_01kjefpfnkep6vwvme4h9ydfbt_1772160257_img_0.webp";

export function DirectionsNavigator({
  directions,
  activeId,
  onChange,
  activeDirection,
  directionPageBasePath,
}: {
  directions: DirectionData[];
  activeId: string;
  onChange: (id: string) => void;
  activeDirection: DirectionData;
  /** Базовый путь страниц направлений: ссылка «Подробнее» ведёт на /basePath/activeId */
  directionPageBasePath?: string;
}) {
  const reduced = useReducedMotion();
  const { vSwap, vCard, vBtn, vIcon } = makeMotionPresets(!!reduced);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-8 overflow-x-hidden lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h2 className="mb-2 text-2xl font-bold text-[#0F172A]">Направления лечения</h2>
        <p className="mb-4 text-sm text-[#64748B] lg:mb-6">
          Выберите направление — блоки ниже обновятся.
        </p>
        {/* Mobile: кнопка выше слайдера */}
        <div className="flex flex-col gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="self-start rounded-full bg-slate-100 px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-slate-200 transition-colors"
          >
            {showAll ? "Свернуть" : "Показать все"}
          </button>
          {showAll ? (
            <div className="flex flex-col gap-2">
              {directions.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <motion.button
                    key={d.id}
                    type="button"
                    onClick={() => onChange(d.id)}
                    variants={vCard}
                    initial="rest"
                    whileHover="hover"
                    className={
                      isActive
                        ? "flex w-full items-center gap-3 rounded-[18px] border border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10 px-4 py-3 text-left"
                        : "flex w-full items-center gap-3 rounded-[18px] border border-slate-200/80 bg-white/50 px-4 py-3 text-left hover:border-[#21C7FF]/30"
                    }
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-200/80 text-lg">
                      &#9670;
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-[#0F172A]">{d.shortTitle}</p>
                      {d.subtitle && (
                        <p className="truncate text-sm text-[#64748B]">{d.subtitle}</p>
                      )}
                    </div>
                    <span className="text-[#64748B]">&rarr;</span>
                  </motion.button>
                );
              })}
            </div>
          ) : (
            <div
              className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
              {directions.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <motion.button
                    key={d.id}
                    type="button"
                    onClick={() => onChange(d.id)}
                    variants={vCard}
                    initial="rest"
                    whileHover="hover"
                    className={
                      "flex flex-shrink-0 snap-start items-center gap-2 rounded-[18px] border px-3 py-2.5 text-left whitespace-nowrap " +
                      (isActive
                        ? "border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10"
                        : "border-slate-200/80 bg-white/50 hover:border-[#21C7FF]/30")
                    }
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-sm">
                      &#9670;
                    </span>
                    <span className="font-semibold text-[#0F172A] text-sm">{d.shortTitle}</span>
                    <span className="text-[#64748B] text-sm">&rarr;</span>
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>
        {/* Desktop: vertical list */}
        <div className="hidden flex-col gap-2 lg:flex">
          {directions.map((d) => {
            const isActive = d.id === activeId;
            return (
              <motion.button
                key={d.id}
                type="button"
                onClick={() => onChange(d.id)}
                variants={vCard}
                initial="rest"
                whileHover="hover"
                className={
                  isActive
                    ? "flex w-full items-center gap-4 rounded-[18px] border border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10 px-4 py-3 text-left"
                    : "flex w-full items-center gap-4 rounded-[18px] border border-slate-200/80 bg-white/50 px-4 py-3 text-left hover:border-[#21C7FF]/30"
                }
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200/80 text-lg">
                  &#9670;
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-[#0F172A]">{d.shortTitle}</p>
                  {d.subtitle && (
                    <p className="truncate text-sm text-[#64748B]">{d.subtitle}</p>
                  )}
                </div>
                <motion.span
                  variants={vIcon}
                  initial="rest"
                  whileHover="hover"
                  className="text-[#64748B]"
                >
                  &rarr;
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="min-h-[320px] min-w-0 lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            variants={vSwap}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50/80 to-white p-5 md:p-6"
          >
            <h3 className="text-xl font-bold text-[#0F172A]">{activeDirection.title}</h3>
            <p className="leading-relaxed text-[#475569]">{activeDirection.description}</p>
            {activeDirection.badges && activeDirection.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeDirection.badges.map((b) => (
                  <span
                    key={b.label}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold text-[#0F172A]">Показания</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-[#475569]">
                  {activeDirection.indications.slice(0, 4).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-[#0F172A]">Что вы получаете</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-[#475569]">
                  {activeDirection.whatYouGet.slice(0, 4).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {activeDirection.id === "sinus-lift" || activeDirection.id === "soft-tissue" || activeDirection.id === "immediate-implantation" || activeDirection.id === "prosthetics-on-implants" || activeDirection.id === "veneers-crowns" || activeDirection.id === "bite-correction" || activeDirection.id === "gnathology-vnjc" || activeDirection.id === "jaw-defects" || activeDirection.id === "braces" || activeDirection.id === "aligners" || activeDirection.id === "children-ortho" || activeDirection.id === "retention" ? (
              <>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    href={activeDirection.cta.primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={vBtn}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex rounded-2xl bg-[#21C7FF] px-6 py-3 font-semibold text-white"
                  >
                    {activeDirection.cta.primaryLabel}
                  </motion.a>
                  <Link
                    href={directionPageBasePath ? `${directionPageBasePath}/${activeDirection.id}` : "#details"}
                    className="text-sm font-medium text-[#21C7FF] hover:underline"
                  >
                    Подробнее &rarr;
                  </Link>
                </div>
                <div className="relative w-full min-w-0 min-h-[160px] aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={activeDirection.id === "sinus-lift" ? SINUS_LIFT_IMAGE : activeDirection.id === "soft-tissue" ? SOFT_TISSUE_IMAGE : activeDirection.id === "immediate-implantation" ? IMMEDIATE_IMPLANTATION_IMAGE : activeDirection.id === "prosthetics-on-implants" ? PROSTHETICS_ON_IMPLANTS_IMAGE : activeDirection.id === "veneers-crowns" ? VENEERS_CROWNS_IMAGE : activeDirection.id === "bite-correction" ? BITE_CORRECTION_IMAGE : activeDirection.id === "gnathology-vnjc" ? GNATHOLOGY_VNJC_IMAGE : activeDirection.id === "jaw-defects" ? JAW_DEFECTS_IMAGE : activeDirection.id === "braces" ? BRACES_IMAGE : activeDirection.id === "aligners" ? ALIGNERS_IMAGE : activeDirection.id === "children-ortho" ? CHILDREN_ORTHO_IMAGE : RETENTION_IMAGE}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </>
            ) : (
              <>
                <div className={`relative h-[160px] min-w-0 overflow-hidden rounded-2xl bg-slate-100 md:h-[200px] ${activeDirection.id === "bone-grafting" ? "-mx-5 w-[calc(100%+2.5rem)] md:mx-0 md:w-full" : "w-full max-w-full"}`}>
                  {activeDirection.id === "implantation" ? (
                    <>
                      <Image
                        src={IMPLANTATION_IMAGE_MOBILE}
                        alt=""
                        fill
                        className="object-contain object-center md:hidden"
                        sizes="100vw"
                      />
                      <Image
                        src={IMPLANTATION_IMAGE}
                        alt=""
                        fill
                        className="object-contain object-center hidden md:block"
                        sizes="400px"
                      />
                    </>
                  ) : activeDirection.id === "bone-grafting" ? (
                    <>
                      <Image
                        src={BONE_GRAFTING_IMAGE_MOBILE}
                        alt=""
                        fill
                        className="object-cover object-center scale-110 md:hidden"
                        sizes="100vw"
                      />
                      <Image
                        src={BONE_GRAFTING_IMAGE}
                        alt=""
                        fill
                        className="object-contain object-center hidden md:block"
                        sizes="400px"
                      />
                    </>
                  ) : (
                    <Image
                      src={MEDIA_IMAGE}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    href={activeDirection.cta.primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={vBtn}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex rounded-2xl bg-[#21C7FF] px-6 py-3 font-semibold text-white"
                  >
                    {activeDirection.cta.primaryLabel}
                  </motion.a>
                  <Link
                    href={directionPageBasePath ? `${directionPageBasePath}/${activeDirection.id}` : "#details"}
                    className="text-sm font-medium text-[#21C7FF] hover:underline"
                  >
                    Подробнее &rarr;
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
