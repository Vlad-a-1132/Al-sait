# Баннер Абрамова — полный код и все анимации

Один MD-файл: весь TSX баннера имплантолога (десктоп 1200×160 + мобильный 580×199) и **все** стили и анимации из `globals.css`.

- **Компонент:** `src/components/DentalPromoBanner.tsx` (слайдер: имплантация + ортодонтия; здесь только блок имплантации).
- **Стили:** блоки `.implantBanner`, `.implantBanner580`, fallback `.implant-banner-wrapper.revealed`, все `@keyframes` и `@media (prefers-reduced-motion)`.

Использование на сайте: импорт `DentalPromoBanner` и подключённый `globals.css` в layout.

---

## 1. TSX — компонент (обёртка + десктоп/мобильный SVG)

Полный код из `DentalPromoBanner.tsx`: обёртка с fallback видимости, `ImplantDesktopSVG`, `ImplantMobile580SVG`. Константа `DOCTOR_IMAGE` и путь к фото врача.

<details>
<summary>Развернуть полный TSX (≈600 строк)</summary>

```tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { OrthoDesktopSVG, OrthoMobileSVG } from './OrthoPromoBanner';

const DOCTOR_IMAGE = "/images/promo/Abramov Yuno Eriilevich 1.webp";
const BANNER_INTERVAL_MS = 10000;
const IMPLANT_REVEAL_FALLBACK_MS = 2000;

export default function DentalPromoBanner() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [implantRevealed, setImplantRevealed] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBanner((i) => (i + 1) % 2);
    }, BANNER_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (activeBanner !== 0) return;
    const t = setTimeout(() => setImplantRevealed(true), IMPLANT_REVEAL_FALLBACK_MS);
    return () => clearTimeout(t);
  }, [activeBanner]);

  return (
    <div className="w-full max-w-[1400px] mx-auto mb-8 px-0 relative">
      {activeBanner === 0 ? (
        <div className={`implant-banner-wrapper ${implantRevealed ? "revealed" : ""}`}>
          <Link href="/doctor/abramov-implantolog" className="block hidden md:block w-full max-w-[1200px] mx-auto">
            <ImplantDesktopSVG />
          </Link>
          <Link href="/doctor/abramov-implantolog" className="block md:hidden w-full max-w-[580px] mx-auto">
            <ImplantMobile580SVG />
          </Link>
        </div>
      ) : (
        <>
          <Link href="/doctor/goncharenko-ortodont" className="block hidden md:block w-full max-w-[1400px] mx-auto">
            <OrthoDesktopSVG />
          </Link>
          <Link href="/doctor/goncharenko-ortodont" className="block md:hidden w-full max-w-[580px] mx-auto">
            <OrthoMobileSVG />
          </Link>
        </>
      )}
      <div className="flex items-center justify-center gap-3 mt-4">
        <button type="button" onClick={() => setActiveBanner((i) => (i === 0 ? 1 : i - 1))} className="p-2 rounded-full text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors" aria-label="Предыдущий баннер">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        {[0, 1].map((index) => (
          <button key={index} type="button" onClick={() => setActiveBanner(index)} className={`h-2.5 rounded-full transition-all ${activeBanner === index ? 'w-8 bg-emerald-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`} aria-label={index === 0 ? 'Баннер: Имплантация' : 'Баннер: Ортодонтия'} aria-pressed={activeBanner === index} />
        ))}
        <button type="button" onClick={() => setActiveBanner((i) => (i + 1) % 2)} className="p-2 rounded-full text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors" aria-label="Следующий баннер">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}

function ImplantDesktopSVG() {
  return (
    <svg className="implantBanner w-full h-auto" width="1200" height="160" viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Имплантация — установка импланта">
      <defs>
        <filter id="impGlow" x="-50%" y="-50%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="impSoftGlow" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 .45 0" result="b2" />
          <feMerge><feMergeNode in="b2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="impGlassBlur" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .9 0" result="blur2" />
          <feMerge><feMergeNode in="blur2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="toothXray" x="-60%" y="-80%" width="220%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="s" />
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#21C7FF" floodOpacity={0.22} />
          <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#FFFFFF" floodOpacity={0.1} />
          <feMerge><feMergeNode /><feMergeNode in="s" /></feMerge>
        </filter>
        <filter id="contactBlur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6.5" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .75 0" result="b2" />
          <feMerge><feMergeNode in="b2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="impBgRad" cx="18%" cy="50%" r="90%">
          <stop offset="0" stopColor="#0E2730" />
          <stop offset="0.55" stopColor="#0A1620" />
          <stop offset="1" stopColor="#060C12" />
        </radialGradient>
        <linearGradient id="impAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#21C7FF" />
          <stop offset="0.55" stopColor="#5EF3C4" />
          <stop offset="1" stopColor="#21C7FF" />
        </linearGradient>
        <linearGradient id="impSweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.5" stopColor="rgba(255,255,255,.14)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <pattern id="impGrid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
        </pattern>
        <pattern id="impXrayGrid" width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke="rgba(33,199,255,.08)" strokeWidth="1" />
          <path d="M17 0V34 M0 17H34" fill="none" stroke="rgba(94,243,196,.06)" strokeWidth="1" />
        </pattern>
        <radialGradient id="impSpot" cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor="rgba(94,243,196,.32)" />
          <stop offset="1" stopColor="rgba(94,243,196,0)" />
        </radialGradient>
        <linearGradient id="impPhotoGloss" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.24)" />
          <stop offset="0.45" stopColor="rgba(255,255,255,.08)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <clipPath id="impCardClip"><rect x="18" y="14" width="1164" height="132" rx="22" /></clipPath>
        <clipPath id="impDocClipAbs"><circle cx="1088" cy="80" r="58" /></clipPath>
        <radialGradient id="toothMini" cx="35%" cy="30%" r="85%">
          <stop offset="0" stopColor="rgba(255,255,255,.90)" />
          <stop offset="0.40" stopColor="rgba(210,245,255,.20)" />
          <stop offset="1" stopColor="rgba(33,199,255,.12)" />
        </radialGradient>
        <radialGradient id="toothShadeMini" cx="70%" cy="85%" r="90%">
          <stop offset="0" stopColor="rgba(0,0,0,0)" />
          <stop offset="0.68" stopColor="rgba(0,0,0,.10)" />
          <stop offset="1" stopColor="rgba(0,0,0,.22)" />
        </radialGradient>
        <radialGradient id="sockMini" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(0,0,0,.45)" />
          <stop offset="100%" stopColor="rgba(0,0,0,.70)" />
        </radialGradient>
        <linearGradient id="screwMini" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#16C4DC" />
          <stop offset="45%" stopColor="#50DDF0" />
          <stop offset="100%" stopColor="#0898B8" />
        </linearGradient>
        <linearGradient id="abutMini" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#36336A" />
          <stop offset="50%" stopColor="#5652A0" />
          <stop offset="100%" stopColor="#28264A" />
        </linearGradient>
        <linearGradient id="collarMini" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEEEFF" />
          <stop offset="100%" stopColor="#C0C4FF" />
        </linearGradient>
        <filter id="glowMini">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#16C4DC" floodOpacity={0.85} />
        </filter>
        <filter id="softGlowCTA" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7.5" result="sb" />
          <feColorMatrix in="sb" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .75 0" result="sb2" />
          <feMerge><feMergeNode in="sb2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="sparkCTA" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffffff" stopOpacity={1} />
          <stop offset="1" stopColor="#ffffff" stopOpacity={0} />
        </radialGradient>
        <linearGradient id="badgeGlossCTA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.18)" />
          <stop offset="0.35" stopColor="rgba(255,255,255,.06)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="160" rx="26" fill="url(#impBgRad)" />
      <g clipPath="url(#impCardClip)">
        <rect x="18" y="14" width="1164" height="132" rx="22" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.10)" strokeWidth="1" />
        <rect x="18" y="14" width="1164" height="132" rx="22" fill="url(#impGrid)" opacity={0.75} />
        <rect className="sweep" x={-240} y={14} width={240} height={132} rx={22} fill="url(#impSweep)" opacity={0.9} />
        <g className="xray">
          <rect x={320} y={22} width={640} height={116} rx={18} fill="url(#impXrayGrid)" opacity={0.52} />
          <rect className="xraySweep" x={320} y={22} width={640} height={116} rx={18} fill="rgba(33,199,255,.05)" opacity={0} />
          <path className="xrayLine" d="M320 80 H960" stroke="rgba(94,243,196,.18)" strokeWidth={2} opacity={0.65} />
        </g>
        <g className="orbits" opacity={0.9}>
          <path d="M300 38 C520 10, 760 10, 980 38" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={2} />
          <path d="M280 54 C520 20, 780 20, 1000 54" fill="none" stroke="rgba(33,199,255,.10)" strokeWidth={2} />
          <path d="M320 26 C560 2, 760 8, 980 30" fill="none" stroke="rgba(94,243,196,.08)" strokeWidth={2} />
        </g>
      </g>
      <g className="txt">
        <text className="t1" x="70" y="60">Имплантация и лечение</text>
        <g className="pills" transform="translate(70 86)">
          {[{ w: 120, t: "качественно" }, { w: 92, t: "быстро" }, { w: 104, t: "под ключ" }].map((p, i) => (
            <g key={p.t} className="pill" transform={`translate(${i === 0 ? 0 : i === 1 ? 136 : 244} 0)`}>
              <rect x={0} y={-12} width={p.w} height={24} rx={12} fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.12)" />
              <path d="M12 0 L16 4 L23 -4" fill="none" stroke="rgba(94,243,196,.95)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
              <text className="pillText" x={32} y={4}>{p.t}</text>
            </g>
          ))}
        </g>
        <g className="chips" transform="translate(70 120)">
          <g className="chip" transform="translate(0 0)">
            <rect x={0} y={-12} width={156} height={24} rx={12} fill="rgba(33,199,255,.08)" stroke="rgba(33,199,255,.22)" />
            <path d="M10 2 L18 -6 L20 -4 L12 4 Z" fill="rgba(255,255,255,.75)" />
            <text className="chipText" x={30} y={4}>Стоматолог-хирург</text>
          </g>
          <g className="chip" transform="translate(168 0)">
            <rect x={0} y={-12} width={128} height={24} rx={12} fill="rgba(94,243,196,.08)" stroke="rgba(94,243,196,.22)" />
            <path d="M16 -6 C12 -4 12 2 16 4 C20 2 20 -4 16 -6 Z" fill="none" stroke="rgba(255,255,255,.70)" strokeWidth={2} />
            <path d="M16 4 V8" stroke="rgba(255,255,255,.70)" strokeWidth={2} strokeLinecap="round" />
            <text className="chipText" x={36} y={4}>Имплантолог</text>
          </g>
        </g>
      </g>
      <g className="midScene">
        <g className="teethPack" transform="translate(40 10) scale(1.65)">
          <g filter="url(#toothXray)">
            <g id="upperSideL">
              <path d="M 10,158 L 10,138 Q 10,126 28,126 Q 46,126 46,138 L 46,158 Z" fill="url(#toothMini)" />
              <path d="M 10,158 L 10,138 Q 10,126 28,126 Q 46,126 46,138 L 46,158 Z" fill="url(#toothShadeMini)" opacity={0.55} />
              <rect x={12} y={138} width={6} height={20} fill="#fff" opacity={0.14} rx={3} />
              <path d="M 47,158 L 47,130 Q 47,116 67,116 Q 87,116 87,130 L 87,158 Z" fill="url(#toothMini)" />
              <path d="M 47,158 L 47,130 Q 47,116 67,116 Q 87,116 87,130 L 87,158 Z" fill="url(#toothShadeMini)" opacity={0.55} />
              <rect x={49} y={130} width={7} height={28} fill="#fff" opacity={0.14} rx={3} />
              <path d="M 88,158 L 88,121 Q 88,105 110,105 Q 132,105 132,121 L 132,158 Z" fill="url(#toothMini)" />
              <path d="M 88,158 L 88,121 Q 88,105 110,105 Q 132,105 132,121 L 132,158 Z" fill="url(#toothShadeMini)" opacity={0.55} />
              <rect x={90} y={122} width={8} height={36} fill="#fff" opacity={0.16} rx={3} />
            </g>
            <g id="sockEl2">
              <path d="M 133,158 L 133,110 Q 133,90 167,90 Q 201,90 201,110 L 201,158 Z" fill="url(#sockMini)" />
              <path d="M 133,158 L 133,110 Q 133,90 167,90 Q 201,90 201,110 L 201,158 Z" fill="none" stroke="rgba(33,199,255,.30)" strokeWidth={3} strokeDasharray="10,8" opacity={0.55} />
            </g>
            <path d="M 202,158 L 202,101 Q 202,83 236,83 Q 270,83 270,101 L 270,158 Z" fill="url(#toothMini)" />
            <path d="M 202,158 L 202,101 Q 202,83 236,83 Q 270,83 270,101 L 270,158 Z" fill="url(#toothShadeMini)" opacity={0.55} />
            <rect x={204} y={102} width={10} height={56} fill="#fff" opacity={0.18} rx={4} />
            <g transform="translate(403,0) scale(-1,1)"><use href="#upperSideL" /></g>
          </g>
          <g id="crwEl2" filter="url(#toothXray)">
            <path d="M 133,158 L 133,110 Q 133,90 167,90 Q 201,90 201,110 L 201,158 Z" fill="url(#toothMini)" />
            <path d="M 133,158 L 133,110 Q 133,90 167,90 Q 201,90 201,110 L 201,158 Z" fill="url(#toothShadeMini)" opacity={0.55} />
            <rect x={135} y={111} width={9} height={47} fill="#fff" opacity={0.18} rx={4} />
          </g>
          <g filter="url(#toothXray)">
            <g id="lowerSideL">
              <path d="M 10,170 L 46,170 L 46,191 Q 46,203 28,203 Q 10,203 10,191 Z" fill="url(#toothMini)" />
              <path d="M 10,170 L 46,170 L 46,191 Q 46,203 28,203 Q 10,203 10,191 Z" fill="url(#toothShadeMini)" opacity={0.55} />
              <rect x={12} y={170} width={6} height={21} fill="#fff" opacity={0.12} rx={2} />
              <path d="M 47,170 L 87,170 L 87,196 Q 87,210 67,210 Q 47,210 47,196 Z" fill="url(#toothMini)" />
              <path d="M 47,170 L 87,170 L 87,196 Q 87,210 67,210 Q 47,210 47,196 Z" fill="url(#toothShadeMini)" opacity={0.55} />
              <rect x={49} y={170} width={7} height={26} fill="#fff" opacity={0.12} rx={2} />
              <path d="M 88,170 L 132,170 L 132,201 Q 132,217 110,217 Q 88,217 88,201 Z" fill="url(#toothMini)" />
              <path d="M 88,170 L 132,170 L 132,201 Q 132,217 110,217 Q 88,217 88,201 Z" fill="url(#toothShadeMini)" opacity={0.55} />
              <rect x={90} y={170} width={8} height={31} fill="#fff" opacity={0.12} rx={3} />
            </g>
            <path d="M 133,170 L 201,170 L 201,205 Q 201,223 167,223 Q 133,223 133,205 Z" fill="url(#toothMini)" />
            <path d="M 133,170 L 201,170 L 201,205 Q 201,223 167,223 Q 133,223 133,205 Z" fill="url(#toothShadeMini)" opacity={0.55} />
            <rect x={135} y={170} width={10} height={35} fill="#fff" opacity={0.12} rx={3} />
            <path d="M 202,170 L 270,170 L 270,205 Q 270,223 236,223 Q 202,223 202,205 Z" fill="url(#toothMini)" />
            <path d="M 202,170 L 270,170 L 270,205 Q 270,223 236,223 Q 202,223 202,205 Z" fill="url(#toothShadeMini)" opacity={0.55} />
            <rect x={204} y={170} width={10} height={35} fill="#fff" opacity={0.12} rx={3} />
            <g transform="translate(403,0) scale(-1,1)"><use href="#lowerSideL" /></g>
          </g>
          <g id="impEl2" filter="url(#glowMini)">
            <g transform="translate(165,128) scale(.5)">
              <rect x={-19} y={6} width={38} height={80} rx={19} fill="url(#screwMini)" stroke="#0898B8" strokeWidth={2} />
              <line x1={-19} y1={19} x2={19} y2={19} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
              <line x1={-19} y1={30} x2={19} y2={30} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
              <line x1={-19} y1={41} x2={19} y2={41} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
              <line x1={-19} y1={52} x2={19} y2={52} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
              <line x1={-19} y1={63} x2={19} y2={63} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
              <line x1={-19} y1={74} x2={19} y2={74} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
              <path d="M -19 84 Q 0 96 19 84" fill="#0898B8" />
              <rect x={-11} y={8} width={7} height={76} rx={3.5} fill="#fff" opacity={0.2} />
              <rect x={-23} y={-2} width={46} height={12} rx={6} fill="url(#collarMini)" stroke="#8888CC" strokeWidth={1.5} />
              <rect x={-23} y={2} width={46} height={5} rx={2.5} fill="#16C4DC" opacity={0.8} />
              <path d="M -14,-2 L -16,-48 Q -16,-58 -6,-60 L 6,-60 Q 16,-58 16,-48 L 14,-2 Z" fill="url(#abutMini)" stroke="#201E3A" strokeWidth={2} />
              <path d="M -8,-48 L -7,-4 L -4,-4 L -5,-48 Z" fill="#9080C8" opacity={0.3} />
              <ellipse cx={0} cy={-60} rx={9} ry={4.5} fill="#4C489A" stroke="#201E3A" strokeWidth={1.5} />
              <ellipse cx={-1} cy={-61} rx={4.5} ry={2} fill="#7870B8" opacity={0.55} />
            </g>
          </g>
        </g>
      </g>
      <g className="ctaBadge" transform="translate(900 50) scale(.88)">
        <rect x={-74} y={-33} width={148} height={66} rx={33} fill="rgba(94,243,196,.12)" filter="url(#softGlowCTA)" opacity={0.75} />
        <rect x={-72} y={-31} width={144} height={62} rx={31} fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.16)" />
        <rect x={-72} y={-31} width={144} height={62} rx={31} fill="none" stroke="url(#impAccent)" strokeWidth={2.8} filter="url(#impGlow)" />
        <rect x={-60} y={-23} width={120} height={46} rx={23} fill="rgba(0,0,0,.10)" stroke="rgba(255,255,255,.08)" />
        <rect x={-72} y={-31} width={144} height={62} rx={31} fill="url(#badgeGlossCTA)" opacity={0.9} />
        <g className="ctaBadgeSpin">
          <path d="M-48 -28 A60 60 0 0 1 48 -28" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth={2} strokeLinecap="round" />
          <path d="M48 28 A60 60 0 0 1 -48 28" fill="none" stroke="rgba(33,199,255,.18)" strokeWidth={2} strokeLinecap="round" />
        </g>
        <g className="ctaBadgeContent">
          <g className="ctaStateA">
            <g transform="translate(0,-8)"><path d="M-10 0 L-4 6 L10 -10" fill="none" stroke="rgba(94,243,196,.98)" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" /></g>
            <text className="ctaBadgeT" x={0} y={16} textAnchor="middle">стаж 7 лет</text>
          </g>
          <g className="ctaStateB">
            <path d="M0 -18 L3 -10 L12 -10 L5 -4 L7 6 L0 1 L-7 6 L-5 -4 L-12 -10 L-3 -10 Z" fill="rgba(255,255,255,.94)" filter="url(#impGlow)" />
            <text className="ctaBadgeT" x={0} y={16} textAnchor="middle">рейтинг 4.9</text>
          </g>
        </g>
        <g className="ctaSparkles">
          <circle className="ctaSp c1" cx={-66} cy={-20} r={11} fill="url(#sparkCTA)" />
          <circle className="ctaSp c2" cx={62} cy={-24} r={13} fill="url(#sparkCTA)" />
          <circle className="ctaSp c3" cx={64} cy={26} r={13} fill="url(#sparkCTA)" />
        </g>
      </g>
      <g className="ctaBtn" transform="translate(900 122)">
        <rect x={-95} y={-16} width={190} height={32} rx={16} fill="rgba(94,243,196,.08)" stroke="rgba(94,243,196,.55)" strokeWidth={1.4} />
        <text x={0} y={5} textAnchor="middle" fill="rgba(255,255,255,.92)" fontSize="12.5" fontWeight="700">Записаться</text>
      </g>
      <g className="docMain">
        <circle cx={1088} cy={80} r={88} fill="url(#impSpot)" />
        <circle cx={1088} cy={80} r={74} fill="rgba(255,255,255,.06)" filter="url(#impGlassBlur)" />
        <circle cx={1088} cy={80} r={74} fill="none" stroke="rgba(255,255,255,.12)" />
        <circle className="ring" cx={1088} cy={80} r={64} fill="none" stroke="url(#impAccent)" strokeWidth={3.2} filter="url(#impGlow)" />
        <g clipPath="url(#impDocClipAbs)">
          <image href={DOCTOR_IMAGE} x={1008} y={-8} width={160} height={196} preserveAspectRatio="xMidYMid slice" />
          <rect x={1030} y={22} width={116} height={116} fill="rgba(0,0,0,.12)" />
          <rect className="gloss" x={1008} y={0} width={160} height={160} fill="url(#impPhotoGloss)" />
        </g>
        <g className="badge" transform="translate(1132 124)">
          <circle r={8} fill="#5EF3C4" filter="url(#impGlow)" />
          <circle r={12} fill="none" stroke="rgba(94,243,196,.35)" strokeWidth={2} />
        </g>
      </g>
    </svg>
  );
}
```

</details>

В том же файле есть `ImplantMobile580SVG()` — мобильный SVG 580×199. Полный код ниже (функция `ImplantMobile580SVG` из `DentalPromoBanner.tsx`).

<details>
<summary>Развернуть полный мобильный SVG ImplantMobile580SVG (≈230 строк)</summary>

```tsx
function ImplantMobile580SVG() {
  return (
    <svg className="implantBanner580 w-full h-auto" width="580" height="199" viewBox="0 0 580 199" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Имплантация — установка импланта (mobile)">
      <defs>
        <filter id="glow580" x="-50%" y="-50%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softGlow580" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 .55 0" result="b2" />
          <feMerge><feMergeNode in="b2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glassBlur580" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .9 0" result="blur2" />
          <feMerge><feMergeNode in="blur2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="toothXray580" x="-60%" y="-80%" width="220%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="s" />
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#21C7FF" floodOpacity={0.22} />
          <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#FFFFFF" floodOpacity={0.1} />
          <feMerge><feMergeNode /><feMergeNode in="s" /></feMerge>
        </filter>
        <filter id="glowMini580">
          <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#16C4DC" floodOpacity={0.85} />
        </filter>
        <radialGradient id="bgRad580" cx="20%" cy="42%" r="95%">
          <stop offset="0" stopColor="#0E2730" />
          <stop offset="0.55" stopColor="#0A1620" />
          <stop offset="1" stopColor="#060C12" />
        </radialGradient>
        <linearGradient id="accent580" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#21C7FF" />
          <stop offset="0.55" stopColor="#5EF3C4" />
          <stop offset="1" stopColor="#21C7FF" />
        </linearGradient>
        <linearGradient id="sweep580" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.5" stopColor="rgba(255,255,255,.16)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <pattern id="grid580" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M18 0H0V18" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
        </pattern>
        <pattern id="xrayGrid580" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="rgba(33,199,255,.09)" strokeWidth="1" />
          <path d="M14 0V28 M0 14H28" fill="none" stroke="rgba(94,243,196,.06)" strokeWidth="1" />
        </pattern>
        <radialGradient id="spot580" cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor="rgba(94,243,196,.34)" />
          <stop offset="1" stopColor="rgba(94,243,196,0)" />
        </radialGradient>
        <linearGradient id="photoGloss580" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.26)" />
          <stop offset="0.45" stopColor="rgba(255,255,255,.10)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="toothMini580" cx="35%" cy="30%" r="85%">
          <stop offset="0" stopColor="rgba(255,255,255,.90)" />
          <stop offset="0.40" stopColor="rgba(210,245,255,.20)" />
          <stop offset="1" stopColor="rgba(33,199,255,.12)" />
        </radialGradient>
        <radialGradient id="toothShadeMini580" cx="70%" cy="85%" r="90%">
          <stop offset="0" stopColor="rgba(0,0,0,0)" />
          <stop offset="0.68" stopColor="rgba(0,0,0,.10)" />
          <stop offset="1" stopColor="rgba(0,0,0,.22)" />
        </radialGradient>
        <radialGradient id="sockMini580" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(0,0,0,.45)" />
          <stop offset="100%" stopColor="rgba(0,0,0,.70)" />
        </radialGradient>
        <linearGradient id="screwMini580" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#16C4DC" />
          <stop offset="45%" stopColor="#50DDF0" />
          <stop offset="100%" stopColor="#0898B8" />
        </linearGradient>
        <linearGradient id="abutMini580" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#36336A" />
          <stop offset="50%" stopColor="#5652A0" />
          <stop offset="100%" stopColor="#28264A" />
        </linearGradient>
        <linearGradient id="collarMini580" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEEEFF" />
          <stop offset="100%" stopColor="#C0C4FF" />
        </linearGradient>
        <clipPath id="cardClip580"><rect x="10" y="10" width="560" height="179" rx="24" /></clipPath>
        <clipPath id="docClip580"><circle cx="498" cy="76" r="56" /></clipPath>
      </defs>
      <rect x="0" y="0" width="580" height="199" rx="28" fill="url(#bgRad580)" />
      <g clipPath="url(#cardClip580)">
        <rect x="10" y="10" width="560" height="179" rx="24" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.10)" strokeWidth={1} />
        <rect x="10" y="10" width="560" height="179" rx="24" fill="url(#grid580)" opacity={0.75} />
        <rect className="sweep" x={-180} y={10} width={180} height={179} rx={24} fill="url(#sweep580)" opacity={0.9} />
        <g className="xrayWin">
          <rect x={180} y={46} width={250} height={118} rx={18} fill="url(#xrayGrid580)" opacity={0.52} />
          <rect className="xraySweep" x={180} y={46} width={250} height={118} rx={18} fill="rgba(33,199,255,.05)" opacity={0} />
          <path className="xrayLine" d="M180 105 H430" stroke="rgba(94,243,196,.18)" strokeWidth={2} opacity={0.7} />
        </g>
        <g className="orbits">
          <path d="M140 36 C230 12, 350 12, 460 36" fill="none" stroke="rgba(255,255,255,.09)" strokeWidth={2} />
          <path d="M130 52 C230 20, 380 20, 470 52" fill="none" stroke="rgba(33,199,255,.11)" strokeWidth={2} />
        </g>
      </g>
      <g className="leftCol">
        <text className="t1" x={28} y={56}>Имплантация</text>
        <text className="t1b" x={28} y={80}>и лечение</text>
        <g className="roles" transform="translate(28 114)">
          <g transform="translate(0 0)">
            <rect x={0} y={-12} width={162} height={24} rx={12} fill="rgba(33,199,255,.10)" stroke="rgba(33,199,255,.28)" />
            <path d="M10 2 L18 -6 L20 -4 L12 4 Z" fill="rgba(255,255,255,.78)" />
            <text className="chipText" x={30} y={4}>Стоматолог-хирург</text>
          </g>
          <g transform="translate(0 32)">
            <rect x={0} y={-12} width={128} height={24} rx={12} fill="rgba(94,243,196,.10)" stroke="rgba(94,243,196,.28)" />
            <path d="M14 -6 C10 -4 10 2 14 4 C18 2 18 -4 14 -6 Z" fill="none" stroke="rgba(255,255,255,.74)" strokeWidth={2} />
            <path d="M14 4 V8" stroke="rgba(255,255,255,.74)" strokeWidth={2} strokeLinecap="round" />
            <text className="chipText" x={34} y={4}>Имплантолог</text>
          </g>
        </g>
      </g>
      <g className="midScene">
        <g className="midPos" transform="translate(240 94) scale(0.35)">
          <g className="midFloat">
            <g className="teethPack" transform="translate(-70 -56) scale(1.25)">
              <g filter="url(#toothXray580)">
                <g id="upperSideL_580">
                  <path d="M 10,158 L 10,138 Q 10,126 28,126 Q 46,126 46,138 L 46,158 Z" fill="url(#toothMini580)" />
                  <path d="M 10,158 L 10,138 Q 10,126 28,126 Q 46,126 46,138 L 46,158 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                  <rect x={12} y={138} width={6} height={20} fill="#fff" opacity={0.14} rx={3} />
                  <path d="M 47,158 L 47,130 Q 47,116 67,116 Q 87,116 87,130 L 87,158 Z" fill="url(#toothMini580)" />
                  <path d="M 47,158 L 47,130 Q 47,116 67,116 Q 87,116 87,130 L 87,158 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                  <rect x={49} y={130} width={7} height={28} fill="#fff" opacity={0.14} rx={3} />
                  <path d="M 88,158 L 88,121 Q 88,105 110,105 Q 132,105 132,121 L 132,158 Z" fill="url(#toothMini580)" />
                  <path d="M 88,158 L 88,121 Q 88,105 110,105 Q 132,105 132,121 L 132,158 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                  <rect x={90} y={122} width={8} height={36} fill="#fff" opacity={0.16} rx={3} />
                </g>
                <g id="sockEl2_580">
                  <path d="M 133,158 L 133,110 Q 133,90 167,90 Q 201,90 201,110 L 201,158 Z" fill="url(#sockMini580)" />
                  <path d="M 133,158 L 133,110 Q 133,90 167,90 Q 201,90 201,110 L 201,158 Z" fill="none" stroke="rgba(33,199,255,.30)" strokeWidth={3} strokeDasharray="10,8" opacity={0.55} />
                </g>
                <path d="M 202,158 L 202,101 Q 202,83 236,83 Q 270,83 270,101 L 270,158 Z" fill="url(#toothMini580)" />
                <path d="M 202,158 L 202,101 Q 202,83 236,83 Q 270,83 270,101 L 270,158 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                <rect x={204} y={102} width={10} height={56} fill="#fff" opacity={0.18} rx={4} />
                <g transform="translate(403,0) scale(-1,1)"><use href="#upperSideL_580" /></g>
              </g>
              <g id="crwEl2_580" filter="url(#toothXray580)">
                <path d="M 133,158 L 133,110 Q 133,90 167,90 Q 201,90 201,110 L 201,158 Z" fill="url(#toothMini580)" />
                <path d="M 133,158 L 133,110 Q 133,90 167,90 Q 201,90 201,110 L 201,158 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                <rect x={135} y={111} width={9} height={47} fill="#fff" opacity={0.18} rx={4} />
              </g>
              <g filter="url(#toothXray580)">
                <g id="lowerSideL_580">
                  <path d="M 10,170 L 46,170 L 46,191 Q 46,203 28,203 Q 10,203 10,191 Z" fill="url(#toothMini580)" />
                  <path d="M 10,170 L 46,170 L 46,191 Q 46,203 28,203 Q 10,203 10,191 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                  <rect x={12} y={170} width={6} height={21} fill="#fff" opacity={0.12} rx={2} />
                  <path d="M 47,170 L 87,170 L 87,196 Q 87,210 67,210 Q 47,210 47,196 Z" fill="url(#toothMini580)" />
                  <path d="M 47,170 L 87,170 L 87,196 Q 87,210 67,210 Q 47,210 47,196 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                  <rect x={49} y={170} width={7} height={26} fill="#fff" opacity={0.12} rx={2} />
                  <path d="M 88,170 L 132,170 L 132,201 Q 132,217 110,217 Q 88,217 88,201 Z" fill="url(#toothMini580)" />
                  <path d="M 88,170 L 132,170 L 132,201 Q 132,217 110,217 Q 88,217 88,201 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                  <rect x={90} y={170} width={8} height={31} fill="#fff" opacity={0.12} rx={3} />
                </g>
                <path d="M 133,170 L 201,170 L 201,205 Q 201,223 167,223 Q 133,223 133,205 Z" fill="url(#toothMini580)" />
                <path d="M 133,170 L 201,170 L 201,205 Q 201,223 167,223 Q 133,223 133,205 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                <rect x={135} y={170} width={10} height={35} fill="#fff" opacity={0.12} rx={3} />
                <path d="M 202,170 L 270,170 L 270,205 Q 270,223 236,223 Q 202,223 202,205 Z" fill="url(#toothMini580)" />
                <path d="M 202,170 L 270,170 L 270,205 Q 270,223 236,223 Q 202,223 202,205 Z" fill="url(#toothShadeMini580)" opacity={0.55} />
                <rect x={204} y={170} width={10} height={35} fill="#fff" opacity={0.12} rx={3} />
                <g transform="translate(403,0) scale(-1,1)"><use href="#lowerSideL_580" /></g>
              </g>
              <g id="impEl2_580" filter="url(#glowMini580)">
                <g transform="translate(165,128) scale(0.5)">
                  <rect x={-19} y={6} width={38} height={80} rx={19} fill="url(#screwMini580)" stroke="#0898B8" strokeWidth={2} />
                  <line x1={-19} y1={19} x2={19} y2={19} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
                  <line x1={-19} y1={30} x2={19} y2={30} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
                  <line x1={-19} y1={41} x2={19} y2={41} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
                  <line x1={-19} y1={52} x2={19} y2={52} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
                  <line x1={-19} y1={63} x2={19} y2={63} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
                  <line x1={-19} y1={74} x2={19} y2={74} stroke="#0888A8" strokeWidth={3.5} opacity={0.55} />
                  <path d="M -19 84 Q 0 96 19 84" fill="#0898B8" />
                  <rect x={-11} y={8} width={7} height={76} rx={3.5} fill="#fff" opacity={0.2} />
                  <rect x={-23} y={-2} width={46} height={12} rx={6} fill="url(#collarMini580)" stroke="#8888CC" strokeWidth={1.5} />
                  <rect x={-23} y={2} width={46} height={5} rx={2.5} fill="#16C4DC" opacity={0.8} />
                  <path d="M -14,-2 L -16,-48 Q -16,-58 -6,-60 L 6,-60 Q 16,-58 16,-48 L 14,-2 Z" fill="url(#abutMini580)" stroke="#201E3A" strokeWidth={2} />
                  <path d="M -8,-48 L -7,-4 L -4,-4 L -5,-48 Z" fill="#9080C8" opacity={0.3} />
                  <ellipse cx={0} cy={-60} rx={9} ry={4.5} fill="#4C489A" stroke="#201E3A" strokeWidth={1.5} />
                  <ellipse cx={-1} cy={-61} rx={4.5} ry={2} fill="#7870B8" opacity={0.55} />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g transform="translate(305 70)">
        <g className="ctaBtn">
          <rect x={-110} y={-16} width={220} height={32} rx={16} fill="rgba(94,243,196,.08)" stroke="rgba(94,243,196,.55)" strokeWidth={1.4} />
          <text x={0} y={5} textAnchor="middle" fill="rgba(255,255,255,.92)" fontSize="12.5" fontWeight="800">Записаться</text>
        </g>
      </g>
      <g className="docMain">
        <circle cx={498} cy={76} r={82} fill="url(#spot580)" />
        <circle cx={498} cy={76} r={68} fill="rgba(255,255,255,.06)" filter="url(#glassBlur580)" />
        <circle cx={498} cy={76} r={68} fill="none" stroke="rgba(255,255,255,.12)" />
        <circle cx={498} cy={76} r={56} fill="none" stroke="url(#accent580)" strokeWidth={3.4} filter="url(#glow580)" />
        <g clipPath="url(#docClip580)">
          <image href={DOCTOR_IMAGE} x={425} y={2} width={146} height={174} preserveAspectRatio="xMidYMid slice" />
          <rect x={425} y={2} width={146} height={146} fill="rgba(0,0,0,.10)" />
          <rect className="gloss" x={425} y={2} width={146} height={146} fill="url(#photoGloss580)" />
        </g>
        <g className="badgeDot" transform="translate(540 122)">
          <circle r={8} fill="#5EF3C4" filter="url(#glow580)" />
          <circle r={12} fill="none" stroke="rgba(94,243,196,.35)" strokeWidth={2} />
        </g>
      </g>
    </svg>
  );
}
```

</details>

---

## 2. CSS — все стили и анимации

Ниже — **полный** блок из `globals.css`: от «Десктоп баннер имплантолога» до конца блока «Мобильный баннер имплантации 580×199» включительно (все ключевые кадры и `prefers-reduced-motion`).

Скопируйте весь блок в ваш глобальный CSS (или отдельный файл, подключённый на странице с баннером).

```css
/* ========== Десктоп баннер имплантолога (implantBanner) ========== */
.implantBanner {
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
}
.implantBanner .t1 {
  fill: rgba(255, 255, 255, 0.96);
  font-size: 22px;
  font-weight: 760;
  letter-spacing: 0.25px;
  opacity: 0;
  animation: implantFadeOnly 0.85s ease forwards;
}
.implantBanner .pillText {
  fill: rgba(255, 255, 255, 0.86);
  font-size: 12.4px;
  font-weight: 700;
  letter-spacing: 0.22px;
}
.implantBanner .chipText {
  fill: rgba(255, 255, 255, 0.78);
  font-size: 12.1px;
  font-weight: 650;
  letter-spacing: 0.18px;
}
.implantBanner .pills {
  opacity: 0;
  animation: implantFadeOnly 0.85s ease 0.14s forwards;
}
.implantBanner .chips {
  opacity: 0;
  animation: implantFadeOnly 0.85s ease 0.26s forwards;
}
@keyframes implantFadeOnly {
  from { opacity: 0; }
  to { opacity: 1; }
}
.implantBanner .sweep {
  animation: implantSweep 3.2s ease-in-out 0.4s infinite;
  transform: skewX(-12deg);
  mix-blend-mode: screen;
}
@keyframes implantSweep {
  0% { transform: translateX(0) skewX(-12deg); opacity: 0; }
  12% { opacity: 0.9; }
  50% { opacity: 0.55; }
  88% { opacity: 0.9; }
  100% { transform: translateX(1560px) skewX(-12deg); opacity: 0; }
}
.implantBanner .xrayLine {
  animation: implantXrayLine 2.4s ease-in-out 1.2s infinite;
}
@keyframes implantXrayLine {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.75; }
}
.implantBanner .xraySweep {
  animation: implantXraySweep 3s ease-in-out 1s infinite;
  mix-blend-mode: screen;
}
@keyframes implantXraySweep {
  0% { opacity: 0; transform: translateX(-680px); }
  15% { opacity: 0.75; }
  55% { opacity: 0.25; }
  100% { opacity: 0; transform: translateX(680px); }
}
.implantBanner .orbits {
  animation: implantOrbits 6s ease-in-out 1.2s infinite;
  transform-origin: 700px 60px;
}
@keyframes implantOrbits {
  0%, 100% { opacity: 0.9; transform: translateY(0); }
  50% { opacity: 0.65; transform: translateY(2px); }
}
.implantBanner .teethPack {
  animation: implantTeethPolish 6.2s ease-in-out 1.15s infinite;
}
@keyframes implantTeethPolish {
  0%, 60% { opacity: 0.85; }
  74% { opacity: 1; }
  100% { opacity: 0.95; }
}
.implantBanner #sockEl2 {
  animation: implantSockA2 7s ease-in-out infinite;
}
@keyframes implantSockA2 {
  0%, 52% { opacity: 1; }
  62% { opacity: 0; }
  88% { opacity: 0; }
  96%, 100% { opacity: 1; }
}
.implantBanner #impEl2 {
  animation: implantImpA2 7s ease-in-out infinite;
  transform-origin: 165px 130px;
}
@keyframes implantImpA2 {
  0% { opacity: 0; transform: translateY(-150px) rotate(0deg); }
  8% { opacity: 1; transform: translateY(-110px) rotate(0deg); }
  43% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  46% { opacity: 1; transform: translateY(-5px) rotate(1092deg); }
  49% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  60% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  70% { opacity: 0; transform: translateY(0) rotate(1080deg); }
  100% { opacity: 0; transform: translateY(-150px) rotate(0deg); }
}
.implantBanner #crwEl2 {
  animation: implantCrwA2 7s ease-in-out infinite;
  transform-origin: 165px 145px;
}
@keyframes implantCrwA2 {
  0%, 52% { opacity: 0; transform: translateY(-120px); }
  65% { opacity: 1; transform: translateY(0); }
  67% { opacity: 1; transform: translateY(-4px); }
  70% { opacity: 1; transform: translateY(0); }
  88% { opacity: 1; }
  95%, 100% { opacity: 0; transform: translateY(-120px); }
}
.implantBanner .ctaBadgeT {
  fill: rgba(255, 255, 255, 0.96);
  font-size: 12.2px;
  font-weight: 940;
  letter-spacing: 0.08px;
}
.implantBanner .ctaBadge {
  opacity: 0;
  animation: implantFadeOnly 0.6s ease 1.02s forwards, implantCtaBadgeFloat 2.8s ease-in-out 2.1s infinite;
}
@keyframes implantCtaBadgeFloat {
  0%, 100% { transform: translate(900px, 50px) scale(0.88) translateY(0); }
  50% { transform: translate(900px, 50px) scale(0.88) translateY(-2px); }
}
.implantBanner .ctaBadgeSpin {
  transform-origin: 0 0;
  animation: implantCtaSpin 3.6s cubic-bezier(0.3, 1, 0.3, 1) 1.4s infinite;
  opacity: 0.95;
}
@keyframes implantCtaSpin {
  0% { transform: rotate(0deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-8deg); }
  100% { transform: rotate(360deg); }
}
.implantBanner .ctaStateA {
  opacity: 1;
  animation: implantCtaShowA 4.2s ease-in-out 1.25s infinite;
}
.implantBanner .ctaStateB {
  opacity: 0;
  animation: implantCtaShowB 4.2s ease-in-out 1.25s infinite;
}
@keyframes implantCtaShowA {
  0%, 42% { opacity: 1; }
  50%, 92% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes implantCtaShowB {
  0%, 42% { opacity: 0; }
  50%, 92% { opacity: 1; }
  100% { opacity: 0; }
}
.implantBanner .ctaSp {
  opacity: 0;
  transform-origin: center;
}
.implantBanner .ctaSp.c1 {
  animation: implantCtaSpark 3.4s ease-in-out 1.7s infinite;
}
.implantBanner .ctaSp.c2 {
  animation: implantCtaSpark 3.8s ease-in-out 2s infinite;
}
.implantBanner .ctaSp.c3 {
  animation: implantCtaSpark 4.1s ease-in-out 2.3s infinite;
}
@keyframes implantCtaSpark {
  0% { opacity: 0; transform: scale(0.7); }
  20% { opacity: 0.85; transform: scale(1); }
  55% { opacity: 0.25; transform: scale(1.18); }
  100% { opacity: 0; transform: scale(0.7); }
}
.implantBanner .midScene {
  opacity: 0;
  transform-origin: -8px -118px;
  animation: implantMidIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.85s forwards, implantMidFloat 3.2s ease-in-out 1.8s infinite;
}
@keyframes implantMidIn {
  from { opacity: 0; transform: translate(420px, 12px) translateY(6px) scale(0.504); }
  to { opacity: 1; transform: translate(420px, 12px) translateY(0) scale(0.504); }
}
@keyframes implantMidFloat {
  0%, 100% { transform: translate(420px, 12px) translateY(0) scale(0.504); }
  50% { transform: translate(420px, 12px) translateY(-2px) scale(0.504); }
}
.implantBanner .ctaBtn {
  cursor: pointer;
  opacity: 0;
  animation: implantFadeOnly 0.6s ease 1.12s forwards, implantCtaFloat 2.6s ease-in-out 2s infinite;
}
@keyframes implantCtaFloat {
  0%, 100% { transform: translate(900px, 122px) translateY(0); }
  50% { transform: translate(900px, 122px) translateY(-2px); }
}
.implantBanner .ctaBtn:hover rect {
  fill: rgba(94, 243, 196, 0.18);
  stroke: rgba(94, 243, 196, 0.95);
}
.implantBanner .docMain {
  opacity: 0;
  animation: implantDocIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.95s forwards, implantDocFloat 2.6s ease-in-out 2s infinite;
}
@keyframes implantDocIn {
  from { opacity: 0; transform: translateY(6px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes implantDocFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.implantBanner .gloss {
  mix-blend-mode: screen;
  opacity: 0.92;
}
.implantBanner .badge {
  opacity: 0.95;
  animation: implantBadgePulse 1.4s ease-in-out 2.2s infinite;
}
@keyframes implantBadgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
@media (prefers-reduced-motion: reduce) {
  .implantBanner .sweep,
  .implantBanner .xrayLine,
  .implantBanner .xraySweep,
  .implantBanner .orbits,
  .implantBanner .midScene,
  .implantBanner .docMain,
  .implantBanner .badge,
  .implantBanner .teethPack,
  .implantBanner .ctaBtn,
  .implantBanner .ctaBadge {
    animation: none !important;
  }
  .implantBanner .t1,
  .implantBanner .pills,
  .implantBanner .chips,
  .implantBanner .midScene,
  .implantBanner .docMain,
  .implantBanner .ctaBtn,
  .implantBanner .ctaBadge {
    opacity: 1;
  }
}

/* Fallback: если анимация не сработала (стили не загрузились), через 2 с центральная сцена и CTA становятся видимыми */
.implant-banner-wrapper.revealed .implantBanner .midScene,
.implant-banner-wrapper.revealed .implantBanner .ctaBtn,
.implant-banner-wrapper.revealed .implantBanner .docMain,
.implant-banner-wrapper.revealed .implantBanner580 .midScene,
.implant-banner-wrapper.revealed .implantBanner580 .ctaBtn,
.implant-banner-wrapper.revealed .implantBanner580 .docMain {
  opacity: 1;
}

/* ========== Мобильный баннер имплантации 580×199 (implantBanner580) ========== */
.implantBanner580 {
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
}
.implantBanner580 .t1,
.implantBanner580 .t1b {
  fill: rgba(255, 255, 255, 0.96);
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.12px;
  opacity: 0;
}
.implantBanner580 .t1 {
  animation: imp580Fade 0.75s ease 0.05s forwards;
}
.implantBanner580 .t1b {
  animation: imp580Fade 0.75s ease 0.1s forwards;
}
.implantBanner580 .chipText {
  fill: rgba(255, 255, 255, 0.86);
  font-size: 12px;
  font-weight: 740;
  letter-spacing: 0.05px;
}
.implantBanner580 .roles {
  opacity: 0;
  animation: imp580Fade 0.75s ease 0.18s forwards;
}
.implantBanner580 .sweep {
  animation: imp580Sweep 3.2s ease-in-out 0.4s infinite;
  transform: skewX(-12deg);
  mix-blend-mode: screen;
}
@keyframes imp580Sweep {
  0% { transform: translateX(0) skewX(-12deg); opacity: 0; }
  14% { opacity: 0.9; }
  50% { opacity: 0.55; }
  86% { opacity: 0.9; }
  100% { transform: translateX(920px) skewX(-12deg); opacity: 0; }
}
.implantBanner580 .xrayLine {
  animation: imp580XrayLine 2.2s ease-in-out 1.1s infinite;
}
@keyframes imp580XrayLine {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.82; }
}
.implantBanner580 .xraySweep {
  animation: imp580XraySweep 2.8s ease-in-out 1s infinite;
  mix-blend-mode: screen;
}
@keyframes imp580XraySweep {
  0% { opacity: 0; transform: translateX(-260px); }
  15% { opacity: 0.85; }
  55% { opacity: 0.25; }
  100% { opacity: 0; transform: translateX(260px); }
}
.implantBanner580 .orbits {
  animation: imp580Orbits 5.5s ease-in-out 1s infinite;
  transform-origin: 320px 40px;
  opacity: 0.85;
}
@keyframes imp580Orbits {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(2px); }
}
@keyframes imp580Fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
.implantBanner580 .teethPack {
  animation: imp580TeethPolish 6.2s ease-in-out 1.05s infinite;
}
@keyframes imp580TeethPolish {
  0%, 60% { opacity: 0.85; }
  74% { opacity: 1; }
  100% { opacity: 0.95; }
}
.implantBanner580 #sockEl2_580 {
  animation: imp580SockA2 7s ease-in-out infinite;
}
@keyframes imp580SockA2 {
  0%, 52% { opacity: 1; }
  62% { opacity: 0; }
  88% { opacity: 0; }
  96%, 100% { opacity: 1; }
}
.implantBanner580 #impEl2_580 {
  animation: imp580ImpA2 7s ease-in-out infinite;
  transform-origin: 165px 130px;
}
@keyframes imp580ImpA2 {
  0% { opacity: 0; transform: translateY(-120px) rotate(0deg); }
  8% { opacity: 1; transform: translateY(-88px) rotate(0deg); }
  43% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  46% { opacity: 1; transform: translateY(-4px) rotate(1092deg); }
  49% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  60% { opacity: 1; transform: translateY(0) rotate(1080deg); }
  70% { opacity: 0; transform: translateY(0) rotate(1080deg); }
  100% { opacity: 0; transform: translateY(-120px) rotate(0deg); }
}
.implantBanner580 #crwEl2_580 {
  animation: imp580CrwA2 7s ease-in-out infinite;
  transform-origin: 165px 145px;
}
@keyframes imp580CrwA2 {
  0%, 52% { opacity: 0; transform: translateY(-95px); }
  65% { opacity: 1; transform: translateY(0); }
  67% { opacity: 1; transform: translateY(-3px); }
  70% { opacity: 1; transform: translateY(0); }
  88% { opacity: 1; }
  95%, 100% { opacity: 0; transform: translateY(-95px); }
}
.implantBanner580 .midScene {
  opacity: 0;
  animation: imp580Fade 0.65s ease 0.55s forwards;
}
.implantBanner580 .midFloat {
  animation: imp580MidFloat 3s ease-in-out 1.5s infinite;
}
@keyframes imp580MidFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
.implantBanner580 .ctaBtn {
  cursor: pointer;
  opacity: 0;
  animation: imp580Fade 0.6s ease 1.02s forwards, imp580CtaFloat 2.6s ease-in-out 2s infinite;
}
@keyframes imp580CtaFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
.implantBanner580 .ctaBtn:hover rect {
  fill: rgba(94, 243, 196, 0.18);
  stroke: rgba(94, 243, 196, 0.95);
}
.implantBanner580 .docMain {
  opacity: 0;
  animation: imp580Fade 0.65s ease 0.65s forwards, imp580DocFloat 2.6s ease-in-out 1.8s infinite;
  transform-origin: 498px 76px;
}
@keyframes imp580DocFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.implantBanner580 .gloss {
  mix-blend-mode: screen;
  opacity: 0.92;
}
.implantBanner580 .badgeDot {
  opacity: 0.95;
  animation: imp580BadgePulse 1.3s ease-in-out 1.9s infinite;
}
@keyframes imp580BadgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.14); }
}
@media (prefers-reduced-motion: reduce) {
  .implantBanner580 .sweep,
  .implantBanner580 .xrayLine,
  .implantBanner580 .xraySweep,
  .implantBanner580 .orbits,
  .implantBanner580 .midFloat,
  .implantBanner580 .docMain,
  .implantBanner580 .teethPack,
  .implantBanner580 .ctaBtn,
  .implantBanner580 .badgeDot {
    animation: none !important;
  }
  .implantBanner580 .midScene,
  .implantBanner580 .docMain,
  .implantBanner580 .ctaBtn,
  .implantBanner580 .roles {
    opacity: 1;
  }
}
```

---

## Список анимаций (ключевые кадры)

| Имя | Элемент | Описание |
|-----|--------|----------|
| `implantFadeOnly` | t1, pills, chips, midScene, ctaBtn, docMain, ctaBadge | Появление (opacity 0→1). |
| `implantSweep` | .sweep | Световая полоса слева направо. |
| `implantXrayLine` | .xrayLine | Пульс opacity линии в «рентген»-зоне. |
| `implantXraySweep` | .xraySweep | Свечение по «рентген»-зоне. |
| `implantOrbits` | .orbits | Лёгкое покачивание орбит. |
| `implantTeethPolish` | .teethPack | Лёгкое мерцание зубов. |
| `implantSockA2` | #sockEl2 | Появление/исчезновение лунки. |
| `implantImpA2` | #impEl2 | Вкручивание импланта (движение + вращение). |
| `implantCrwA2` | #crwEl2 | Появление коронки. |
| `implantCtaBadgeFloat` | .ctaBadge | Плавание бейджа «стаж/рейтинг». |
| `implantCtaSpin` | .ctaBadgeSpin | Вращение декора бейджа. |
| `implantCtaShowA` / `implantCtaShowB` | .ctaStateA, .ctaStateB | Переключение «стаж 7 лет» / «рейтинг 4.9». |
| `implantCtaSpark` | .ctaSp.c1/.c2/.c3 | Мерцание искр на бейдже. |
| `implantMidIn` | .midScene | Въезд центральной сцены. |
| `implantMidFloat` | .midScene | Плавание сцены. |
| `implantCtaFloat` | .ctaBtn | Плавание кнопки «Записаться». |
| `implantDocIn` | .docMain | Появление блока врача. |
| `implantDocFloat` | .docMain | Плавание блока врача. |
| `implantBadgePulse` | .badge | Пульс точки у фото. |

Для мобильного баннера (`.implantBanner580`) те же идеи реализованы ключевыми кадрами с префиксом `imp580*`: `imp580Fade`, `imp580Sweep`, `imp580XrayLine`, `imp580XraySweep`, `imp580Orbits`, `imp580TeethPolish`, `imp580SockA2`, `imp580ImpA2`, `imp580CrwA2`, `imp580MidFloat`, `imp580CtaFloat`, `imp580DocFloat`, `imp580BadgePulse`.

Готово: в одном месте и весь код баннера, и все анимации.
