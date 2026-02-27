"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DoctorCore, DirectionData } from "./types";

export function DoctorHero({
  doctor,
  directions,
  onPickDirection,
  bannerStyleBackground,
}: {
  doctor: DoctorCore;
  directions: DirectionData[];
  onPickDirection: (id: string) => void;
  /** Включить фоновую анимацию в стиле баннера (сетка + sweep + orbits). Откат: передать false или убрать проп. */
  bannerStyleBackground?: boolean;
}) {
  const reduced = useReducedMotion();
  const { vStagger, vCard } = makeMotionPresets(!!reduced);
  const directionsLine = directions.map((d) => d.shortTitle).join(" \u2022 ");
  const bgStyle = bannerStyleBackground
    ? { background: "radial-gradient(ellipse 92% 80% at 18% 52%, #0E2730 0%, #0A1620 55%, #060C12 100%)" }
    : { background: "radial-gradient(ellipse 92% 80% at 18% 52%, #0F2B34 0%, #081821 52%, #050B10 100%)" };
  return (
    <div
      className="relative overflow-hidden text-white"
      style={bgStyle}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {bannerStyleBackground && (
        <>
          <div className="heroBannerBg-sweep absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div
              className="heroBannerBg-sweep-inner absolute left-0 top-0 w-[240px] h-full"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.14) 50%, rgba(255,255,255,0) 100%)",
              }}
            />
          </div>
          <svg
            className="heroBannerBg-orbits absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 160"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <g className="heroBannerBg-orbits-g" opacity={0.9}>
              <path d="M300 38 C520 10, 760 10, 980 38" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={2} />
              <path d="M280 54 C520 20, 780 20, 1000 54" fill="none" stroke="rgba(33,199,255,.10)" strokeWidth={2} />
              <path d="M320 26 C560 2, 760 8, 980 30" fill="none" stroke="rgba(94,243,196,.08)" strokeWidth={2} />
            </g>
          </svg>
          <svg
            className="heroBannerBg-particles absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 160"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <radialGradient id="heroParticleGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#FFFFFF" stopOpacity={1} />
                <stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
              </radialGradient>
            </defs>
            <g className="heroBannerBg-particles-g" opacity={0.85}>
              <circle className="heroBannerBg-p heroBannerBg-p1" cx={280} cy={50} r={10} fill="url(#heroParticleGrad)" />
              <circle className="heroBannerBg-p heroBannerBg-p2" cx={520} cy={120} r={12} fill="url(#heroParticleGrad)" />
              <circle className="heroBannerBg-p heroBannerBg-p3" cx={720} cy={45} r={11} fill="url(#heroParticleGrad)" />
              <circle className="heroBannerBg-p heroBannerBg-p4" cx={950} cy={130} r={14} fill="url(#heroParticleGrad)" />
              <circle className="heroBannerBg-p heroBannerBg-p5" cx={180} cy={100} r={9} fill="url(#heroParticleGrad)" />
            </g>
          </svg>
        </>
      )}
      <div className="relative mx-auto w-full max-w-[1240px] px-4 py-12 md:px-6 md:py-16">
        <div
          className={
            bannerStyleBackground
              ? "heroBannerBg-card rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:p-8 lg:p-10"
              : ""
          }
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:grid-rows-[1fr_auto]">
            {/* Мобильный порядок: 1) заголовок и направления 2) фото 3) теги и кнопки. На lg: колонка 1. */}
            <div className="order-1 lg:col-start-1 lg:row-start-1">
              <motion.p
                className="mb-2 font-semibold tracking-wide text-[#5EF3C4]"
                variants={vStagger}
                initial="hidden"
                animate="show"
                custom={0}
              >
                Врач клиники «{doctor.clinicName}»
              </motion.p>
              <motion.h1
                className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
                variants={vStagger}
                initial="hidden"
                animate="show"
                custom={1}
              >
                {doctor.fullName}
              </motion.h1>
              <motion.p
                className="mb-2 text-xl text-white/90"
                variants={vStagger}
                initial="hidden"
                animate="show"
                custom={2}
              >
                {doctor.tagline}
              </motion.p>
              <motion.p
                className="mb-6 text-sm text-white/75 md:text-base"
                variants={vStagger}
                initial="hidden"
                animate="show"
                custom={3}
              >
                {directionsLine}
              </motion.p>
            </div>
            {/* Фото: на мобильной — после списка направлений (order 2), на lg — справа. */}
            <div className="order-2 flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:items-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-[#5EF3C4]/20 blur-xl" />
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#21C7FF]/50 shadow-2xl md:h-80 md:w-80">
                  <Image
                    src={doctor.photoSrc}
                    alt={doctor.fullName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Теги, стаж, рейтинг, кнопки: на мобильной — после фото (order 3), на lg — колонка 1. */}
            <div className="order-3 lg:col-start-1 lg:row-start-2">
              <div className="mb-6 flex flex-wrap gap-3">
                {doctor.chips.map((c) => (
                  <motion.span
                    key={c.label}
                    variants={vCard}
                    initial="rest"
                    whileHover="hover"
                    className={
                      "inline-flex rounded-full border px-4 py-2 text-sm font-medium " +
                      (c.color === "cyan"
                        ? "border-[rgba(33,199,255,.3)] bg-[rgba(33,199,255,.12)]"
                        : c.color === "mint"
                          ? "border-[rgba(94,243,196,.3)] bg-[rgba(94,243,196,.12)]"
                          : "border-white/20 bg-white/10")
                    }
                  >
                    {c.label}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                {doctor.trustBadges.slice(0, 2).map((b) => (
                  <span key={b.label} className="flex items-center gap-2">
                    {b.short === "7 лет" && <span className="h-2 w-2 rounded-full bg-[#5EF3C4]" />}
                    {b.short === "4.9" && <span className="text-amber-400">&#9733;</span>}
                    {b.label}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={doctor.ctas.primary.href}
                  className="inline-flex items-center justify-center rounded-xl bg-[#5EF3C4] px-6 py-3 font-semibold text-[#050B10] transition-colors hover:bg-[#21C7FF]"
                >
                  {doctor.ctas.primary.label}
                </Link>
                <a
                  href={doctor.ctas.secondary.href}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {doctor.ctas.secondary.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
