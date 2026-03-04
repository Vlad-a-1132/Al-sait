"use client";

import { useEffect, useRef } from "react";

const HEART_SCENE_ID = "march8HeartScene";

export default function March8HeartScene() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let tx = 0,
      ty = 0;
    let cx = 0,
      cy = 0;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      tx = Math.max(-1, Math.min(1, x)) * 18;
      ty = Math.max(-1, Math.min(1, y)) * 14;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.setProperty("--px", cx.toFixed(2) + "px");
      el.style.setProperty("--py", cy.toFixed(2) + "px");
      el.style.setProperty("--rx", (cx * 0.02).toFixed(4));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={elRef}
      id={HEART_SCENE_ID}
      className="march8-heart-scene"
      aria-hidden
    >
      <span className="march8-hs-glow march8-hs-g1" />
      <span className="march8-hs-glow march8-hs-g2" />

      <span className="march8-hs-petal march8-hs-p1" />
      <span className="march8-hs-petal march8-hs-p2" />
      <span className="march8-hs-petal march8-hs-p3" />
      <span className="march8-hs-petal march8-hs-p4" />
      <span className="march8-hs-petal march8-hs-p5" />
      <span className="march8-hs-petal march8-hs-p6" />
      <span className="march8-hs-petal march8-hs-p7" />
      <span className="march8-hs-petal march8-hs-p8" />
      <span className="march8-hs-petal march8-hs-p9" />
      <span className="march8-hs-petal march8-hs-p10" />
      <span className="march8-hs-petal march8-hs-p11" />
      <span className="march8-hs-petal march8-hs-p12" />

      <svg className="march8-heart3d" viewBox="0 0 240 220" aria-hidden>
        <defs>
          <radialGradient id="march8Hg3d" cx="30%" cy="22%" r="80%">
            <stop offset="0%" stopColor="rgba(255,255,255,.92)" />
            <stop offset="20%" stopColor="rgba(255,195,210,.95)" />
            <stop offset="55%" stopColor="rgba(255,120,165,.92)" />
            <stop offset="100%" stopColor="rgba(255,70,130,.92)" />
          </radialGradient>

          <radialGradient id="march8HLiquid" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,.85)" />
            <stop offset="35%" stopColor="rgba(255,230,238,.45)" />
            <stop offset="100%" stopColor="rgba(255,230,238,0)" />
          </radialGradient>

          <filter id="march8SoftDepth" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .22 0"
              result="c"
            />
            <feMerge>
              <feMergeNode in="c" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="march8SoftShine" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>

          <path
            id="march8HeartPath"
            d="M120 208 C55 152 14 120 14 70 C14 32 44 12 72 12 C94 12 112 24 120 40 C128 24 146 12 168 12 C196 12 226 32 226 70 C226 120 185 152 120 208 Z"
          />
          <clipPath id="march8HeartClip">
            <use href="#march8HeartPath" />
          </clipPath>
        </defs>

        <use
          href="#march8HeartPath"
          fill="rgba(255,120,150,.18)"
          transform="translate(-10,12) scale(.98)"
        />
        <use
          href="#march8HeartPath"
          fill="url(#march8Hg3d)"
          filter="url(#march8SoftDepth)"
        />
        <ellipse
          cx="76"
          cy="56"
          rx="44"
          ry="34"
          fill="rgba(255,255,255,.55)"
          filter="url(#march8SoftShine)"
          opacity=".55"
        />
        <g clipPath="url(#march8HeartClip)">
          <circle
            className="march8-hs-liquid march8-hs-l1"
            cx="90"
            cy="78"
            r="84"
            fill="url(#march8HLiquid)"
            opacity=".65"
          />
          <circle
            className="march8-hs-liquid march8-hs-l2"
            cx="150"
            cy="130"
            r="92"
            fill="url(#march8HLiquid)"
            opacity=".35"
          />
        </g>
      </svg>
    </div>
  );
}
