"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const DOCTOR_IMAGE = "/images/promo/Abramov Yuno Eriilevich 1.webp";
const ORTHO_DOCTOR_IMAGE = "/images/doctors/Goncharenko Elena Borisovna (2)-Photoroom 1.png";
const BANNER_INTERVAL_MS = 10000;

export default function DentalPromoBanner() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveBanner((i) => (i + 1) % 2), BANNER_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-[1400px] mx-auto mb-8 px-0">
      {activeBanner === 0 && (
        <>
          {/* Implant: Desktop 1200x160 — сцена с имплантом и CTA */}
          <Link href="/doctor/abramov-implantolog" className="block hidden md:block w-full max-w-[1200px] mx-auto">
        <ImplantDesktopSVG />
      </Link>

      {/* Mobile: 580x199 — только на узких экранах */}
      <Link href="/doctor/abramov-implantolog" className="block md:hidden w-full max-w-[580px] mx-auto">
        <svg
          className="dentMob580v14 w-full h-auto"
          width="580"
          height="199"
          viewBox="0 0 580 199"
          role="img"
          aria-label="Имплантация и лечение зубов — качественно, быстро, под ключ"
        >
          <defs>
            <filter id="glow580v14" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow580v14" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="7.5" result="sb" />
              <feColorMatrix in="sb" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .75 0" result="sb2" />
              <feMerge>
                <feMergeNode in="sb2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glassBlur580v14" x="-30%" y="-60%" width="160%" height="220%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .9 0" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="bg580v14" cx="20%" cy="42%" r="95%">
              <stop offset="0" stopColor="#0E2730" />
              <stop offset="0.55" stopColor="#0A1620" />
              <stop offset="1" stopColor="#060C12" />
            </radialGradient>
            <linearGradient id="accent580v14" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#21C7FF" />
              <stop offset="0.55" stopColor="#5EF3C4" />
              <stop offset="1" stopColor="#21C7FF" />
            </linearGradient>
            <pattern id="grid580v14" width="18" height="18" patternUnits="userSpaceOnUse">
              <path d="M18 0H0V18" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
            </pattern>
            <pattern id="xrayGrid580v14" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0V28" fill="none" stroke="rgba(33,199,255,.09)" strokeWidth="1" />
              <path d="M14 0V28 M0 14H28" fill="none" stroke="rgba(94,243,196,.06)" strokeWidth="1" />
            </pattern>
            <linearGradient id="sweep580v14" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="rgba(255,255,255,0)" />
              <stop offset="0.5" stopColor="rgba(255,255,255,.16)" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <radialGradient id="spot580v14" cx="50%" cy="50%" r="55%">
              <stop offset="0" stopColor="rgba(94,243,196,.34)" />
              <stop offset="1" stopColor="rgba(94,243,196,0)" />
            </radialGradient>
            <linearGradient id="photoGloss580v14" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(255,255,255,.26)" />
              <stop offset="0.45" stopColor="rgba(255,255,255,.10)" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="chipBg580v14" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(255,255,255,.12)" />
              <stop offset="1" stopColor="rgba(255,255,255,.05)" />
            </linearGradient>
            <radialGradient id="enamel580v14" cx="35%" cy="28%" r="78%">
              <stop offset="0" stopColor="rgba(255,255,255,.96)" />
              <stop offset="0.50" stopColor="rgba(210,245,255,.34)" />
              <stop offset="1" stopColor="rgba(33,199,255,.12)" />
            </radialGradient>
            <radialGradient id="enamelShade580v14" cx="65%" cy="80%" r="80%">
              <stop offset="0" stopColor="rgba(0,0,0,.00)" />
              <stop offset="0.70" stopColor="rgba(0,0,0,.16)" />
              <stop offset="1" stopColor="rgba(0,0,0,.26)" />
            </radialGradient>
            <clipPath id="docClip580v14">
              <circle cx="498" cy="76" r="56" />
            </clipPath>
            <clipPath id="cardClip580v14">
              <rect x="10" y="10" width="560" height="179" rx="24" />
            </clipPath>
            <radialGradient id="spark580v14" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#ffffff" stopOpacity={1} />
              <stop offset="1" stopColor="#ffffff" stopOpacity={0} />
            </radialGradient>
            <linearGradient id="badgeGloss580v14" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(255,255,255,.18)" />
              <stop offset="0.35" stopColor="rgba(255,255,255,.06)" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="580" height="199" rx="28" fill="url(#bg580v14)" />

          <g clipPath="url(#cardClip580v14)">
            <rect x="10" y="10" width="560" height="179" rx="24" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.10)" />
            <rect x="10" y="10" width="560" height="179" rx="24" fill="url(#grid580v14)" opacity={0.75} />
            <rect className="sweep" x={-180} y={10} width={180} height={179} rx={24} fill="url(#sweep580v14)" opacity={0.9} />
            <g className="xrayWin">
              <rect x={215} y={82} width={230} height={70} rx={16} fill="url(#xrayGrid580v14)" opacity={0.55} />
              <rect className="xraySweep" x={215} y={82} width={230} height={70} rx={16} fill="rgba(33,199,255,.05)" opacity={0} />
              <path className="xrayLine" d="M215 117 H445" stroke="rgba(94,243,196,.20)" strokeWidth={2} opacity={0.7} />
            </g>
            <g className="orbits" opacity={0.85}>
              <path d="M165 36 C255 10, 360 10, 470 36" fill="none" stroke="rgba(255,255,255,.09)" strokeWidth={2} />
              <path d="M155 52 C255 20, 390 20, 480 52" fill="none" stroke="rgba(33,199,255,.11)" strokeWidth={2} />
            </g>
          </g>

          <g className="flipBadge" transform="translate(325 46)">
            <rect x={-74} y={-33} width={148} height={66} rx={33} fill="rgba(94,243,196,.12)" filter="url(#softGlow580v14)" opacity={0.75} />
            <rect x={-72} y={-31} width={144} height={62} rx={31} fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.16)" />
            <rect x={-72} y={-31} width={144} height={62} rx={31} fill="none" stroke="url(#accent580v14)" strokeWidth={2.8} filter="url(#glow580v14)" />
            <rect x={-60} y={-23} width={120} height={46} rx={23} fill="rgba(0,0,0,.10)" stroke="rgba(255,255,255,.08)" />
            <rect x={-72} y={-31} width={144} height={62} rx={31} fill="url(#badgeGloss580v14)" opacity={0.9} />
            <g className="badgeSpin">
              <path d="M-48 -28 A60 60 0 0 1 48 -28" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth={2} strokeLinecap="round" />
              <path d="M48 28 A60 60 0 0 1 -48 28" fill="none" stroke="rgba(33,199,255,.18)" strokeWidth={2} strokeLinecap="round" />
            </g>
            <g className="badgeContent">
              <g className="state a">
                <g transform="translate(0,-8)">
                  <path d="M-10 0 L-4 6 L10 -10" fill="none" stroke="rgba(94,243,196,.98)" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <text className="badgeT" x={0} y={16} textAnchor="middle">стаж 7 лет</text>
              </g>
              <g className="state b">
                <path d="M0 -18 L3 -10 L12 -10 L5 -4 L7 6 L0 1 L-7 6 L-5 -4 L-12 -10 L-3 -10 Z" fill="rgba(255,255,255,.94)" filter="url(#glow580v14)" />
                <text className="badgeT" x={0} y={16} textAnchor="middle">рейтинг 4.9</text>
              </g>
            </g>
            <g className="sparkles">
              <circle className="sp s1" cx={-66} cy={-20} r={11} fill="url(#spark580v14)" />
              <circle className="sp s2" cx={62} cy={-24} r={13} fill="url(#spark580v14)" />
              <circle className="sp s3" cx={64} cy={26} r={13} fill="url(#spark580v14)" />
            </g>
          </g>

          <g className="doc">
            <circle cx={498} cy={76} r={82} fill="url(#spot580v14)" />
            <circle cx={498} cy={76} r={68} fill="rgba(255,255,255,.06)" filter="url(#glassBlur580v14)" />
            <circle cx={498} cy={76} r={68} fill="none" stroke="rgba(255,255,255,.12)" />
            <circle className="ring" cx={498} cy={76} r={56} fill="none" stroke="url(#accent580v14)" strokeWidth={3.4} filter="url(#glow580v14)" />
            <g clipPath="url(#docClip580v14)">
              <image href={DOCTOR_IMAGE} x={425} y={2} width={146} height={174} preserveAspectRatio="xMidYMid slice" />
              <rect x={425} y={2} width={146} height={146} fill="rgba(0,0,0,.10)" />
              <rect x={425} y={2} width={146} height={146} fill="url(#photoGloss580v14)" />
            </g>
            <g className="badge" transform="translate(540 122)">
              <circle r={8} fill="#5EF3C4" filter="url(#glow580v14)" />
              <circle r={12} fill="none" stroke="rgba(94,243,196,.35)" strokeWidth={2} />
            </g>
          </g>

          <g className="pulseBlock">
            <path className="pulse shadow" d="M205 112 L240 112 L254 99 L267 126 L282 110 L296 112 L332 112 L345 104 L357 121 L372 112 L402 112 L416 110 L430 112" fill="none" stroke="rgba(33,199,255,.14)" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" pathLength={1000} />
            <path className="pulse glow" d="M205 112 L240 112 L254 99 L267 126 L282 110 L296 112 L332 112 L345 104 L357 121 L372 112 L402 112 L416 110 L430 112" fill="none" stroke="url(#accent580v14)" strokeWidth={3.8} strokeLinecap="round" strokeLinejoin="round" pathLength={1000} filter="url(#glow580v14)" />
            <circle className="dot" r={4.8} cx={205} cy={112} />
          </g>

          <g className="tooth" transform="translate(320 86)">
            <path d="M0 -18 C-12 -18 -20 -10 -20 0 C-20 6 -17 11 -15 15 C-11 21 -12 35 -3 36 C3 37 4 27 9 27 C14 27 15 37 21 36 C30 35 29 21 33 15 C35 11 40 6 40 0 C40 -10 32 -18 20 -18 C14 -18 10 -15 10 -15 C10 -15 6 -18 0 -18 Z" fill="url(#enamel580v14)" opacity={0.88} filter="url(#glow580v14)" />
            <path d="M0 -18 C-12 -18 -20 -10 -20 0 C-20 6 -17 11 -15 15 C-11 21 -12 35 -3 36 C3 37 4 27 9 27 C14 27 15 37 21 36 C30 35 29 21 33 15 C35 11 40 6 40 0 C40 -10 32 -18 20 -18 C14 -18 10 -15 10 -15 C10 -15 6 -18 0 -18 Z" fill="url(#enamelShade580v14)" opacity={0.48} />
            <path className="toothStroke" d="M0 -18 C-12 -18 -20 -10 -20 0 C-20 6 -17 11 -15 15 C-11 21 -12 35 -3 36 C3 37 4 27 9 27 C14 27 15 37 21 36 C30 35 29 21 33 15 C35 11 40 6 40 0 C40 -10 32 -18 20 -18 C14 -18 10 -15 10 -15 C10 -15 6 -18 0 -18 Z" fill="none" stroke="url(#accent580v14)" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" filter="url(#glow580v14)" pathLength={1000} />
            <path className="scan" d="M-26 -4 H26" stroke="url(#accent580v14)" strokeWidth={2.6} strokeLinecap="round" filter="url(#glow580v14)" />
          </g>

          <g className="leftCol">
            <text className="h1" x={28} y={56}>Имплантация</text>
            <text className="h1b" x={28} y={80}>и лечение</text>
            <g className="roles" transform="translate(28 114)">
              <g transform="translate(0 0)">
                <rect x={0} y={-12} width={162} height={24} rx={12} fill="rgba(33,199,255,.10)" stroke="rgba(33,199,255,.28)" />
                <path d="M10 2 L18 -6 L20 -4 L12 4 Z" fill="rgba(255,255,255,.78)" />
                <text className="chipText" x={30} y={4} textLength={124} lengthAdjust="spacingAndGlyphs">Стоматолог-хирург</text>
              </g>
              <g transform="translate(0 32)">
                <rect x={0} y={-12} width={128} height={24} rx={12} fill="rgba(94,243,196,.10)" stroke="rgba(94,243,196,.28)" />
                <path d="M14 -6 C10 -4 10 2 14 4 C18 2 18 -4 14 -6 Z" fill="none" stroke="rgba(255,255,255,.74)" strokeWidth={2} />
                <path d="M14 4 V8" stroke="rgba(255,255,255,.74)" strokeWidth={2} strokeLinecap="round" />
                <text className="chipText" x={34} y={4} textLength={82} lengthAdjust="spacingAndGlyphs">Имплантолог</text>
              </g>
            </g>
          </g>

          <g className="pillsRow" transform="translate(215 154)">
            <g transform="translate(0 0)">
              <rect x={0} y={-12} width={120} height={24} rx={12} fill="url(#chipBg580v14)" stroke="rgba(255,255,255,.14)" />
              <path d="M12 0 L16 4 L23 -4" fill="none" stroke="rgba(94,243,196,.95)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
              <text className="pillText" x={32} y={4} textLength={76} lengthAdjust="spacingAndGlyphs">качественно</text>
            </g>
            <g transform="translate(132 0)">
              <rect x={0} y={-12} width={84} height={24} rx={12} fill="url(#chipBg580v14)" stroke="rgba(255,255,255,.14)" />
              <path d="M12 0 L16 4 L23 -4" fill="none" stroke="rgba(94,243,196,.95)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
              <text className="pillText" x={32} y={4} textLength={44} lengthAdjust="spacingAndGlyphs">быстро</text>
            </g>
            <g transform="translate(224 0)">
              <rect x={0} y={-12} width={96} height={24} rx={12} fill="url(#chipBg580v14)" stroke="rgba(255,255,255,.14)" />
              <path d="M12 0 L16 4 L23 -4" fill="none" stroke="rgba(94,243,196,.95)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
              <text className="pillText" x={32} y={4} textLength={56} lengthAdjust="spacingAndGlyphs">под ключ</text>
            </g>
          </g>
        </svg>
      </Link>
        </>
      )}

      {activeBanner === 1 && (
        <>
          {/* Ortho: Desktop 1400x200 */}
          <Link href="/doctor/goncharenko-ortodont" className="block hidden md:block w-full max-w-[1400px] mx-auto">
            <OrthoDesktopSVG />
          </Link>
          {/* Ortho: Mobile 580x199 */}
          <Link href="/doctor/goncharenko-ortodont" className="block md:hidden w-full max-w-[580px] mx-auto">
            <OrthoMobileSVG />
          </Link>
        </>
      )}
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
          <feMerge>
            <feMergeNode /><feMergeNode in="s" />
          </feMerge>
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
          {[
            { w: 120, t: "качественно" },
            { w: 92, t: "быстро" },
            { w: 104, t: "под ключ" },
          ].map((p, i) => (
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
            <g transform="translate(403,0) scale(-1,1)">
              <use href="#upperSideL" />
            </g>
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
            <g transform="translate(403,0) scale(-1,1)">
              <use href="#lowerSideL" />
            </g>
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
            <g transform="translate(0,-8)">
              <path d="M-10 0 L-4 6 L10 -10" fill="none" stroke="rgba(94,243,196,.98)" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
            </g>
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

function OrthoDesktopSVG() {
  return (
    <svg className="orthoPro w-full h-auto" width="1400" height="200" viewBox="0 0 1400 200" role="img" aria-label="Ортодонтия и гнатология — брекеты, выравнивание прикуса">
      <defs>
        <radialGradient id="orthoBgRad" cx="18%" cy="52%" r="92%">
          <stop offset="0" stopColor="#0F2B34" />
          <stop offset="0.52" stopColor="#081821" />
          <stop offset="1" stopColor="#050B10" />
        </radialGradient>
        <linearGradient id="orthoAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#21C7FF" />
          <stop offset="0.55" stopColor="#5EF3C4" />
          <stop offset="1" stopColor="#21C7FF" />
        </linearGradient>
        <linearGradient id="orthoGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.10)" />
          <stop offset="0.6" stopColor="rgba(255,255,255,.05)" />
          <stop offset="1" stopColor="rgba(255,255,255,.02)" />
        </linearGradient>
        <pattern id="orthoGrid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
        </pattern>
        <pattern id="orthoXrayGrid" width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke="rgba(33,199,255,.08)" strokeWidth="1" />
          <path d="M17 0V34 M0 17H34" fill="none" stroke="rgba(94,243,196,.06)" strokeWidth="1" />
        </pattern>
        <linearGradient id="orthoSweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.5" stopColor="rgba(255,255,255,.16)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="orthoEnamel" cx="35%" cy="28%" r="75%">
          <stop offset="0" stopColor="rgba(255,255,255,.98)" />
          <stop offset="0.45" stopColor="rgba(210,245,255,.30)" />
          <stop offset="1" stopColor="rgba(33,199,255,.10)" />
        </radialGradient>
        <radialGradient id="orthoEnamelShade" cx="65%" cy="78%" r="80%">
          <stop offset="0" stopColor="rgba(0,0,0,.00)" />
          <stop offset="0.70" stopColor="rgba(0,0,0,.14)" />
          <stop offset="1" stopColor="rgba(0,0,0,.26)" />
        </radialGradient>
        <filter id="orthoGlow" x="-50%" y="-50%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orthoSoftGlow" x="-50%" y="-50%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" result="b2" />
          <feMerge>
            <feMergeNode in="b2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orthoGlassBlur" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .9 0" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="orthoCardClip">
          <rect x="18" y="16" width="1364" height="168" rx="26" />
        </clipPath>
        <clipPath id="orthoPhotoClip">
          <circle cx="1260" cy="100" r="64" />
        </clipPath>
        <linearGradient id="orthoPhotoGloss" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.22)" />
          <stop offset="0.45" stopColor="rgba(255,255,255,.08)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="orthoParticle" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity={1} />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1400" height="200" rx="30" fill="url(#orthoBgRad)" />
      <g clipPath="url(#orthoCardClip)">
        <rect x="18" y="16" width="1364" height="168" rx="26" fill="url(#orthoGlass)" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
        <rect x="18" y="16" width="1364" height="168" rx="26" fill="url(#orthoGrid)" opacity={0.75} />
        <rect className="sweep" x={-280} y={16} width={280} height={168} rx={26} fill="url(#orthoSweep)" opacity={0.9} />
        <g className="xray">
          <rect x={420} y={44} width={760} height={120} rx={22} fill="url(#orthoXrayGrid)" opacity={0.46} />
          <rect className="xraySweep" x={420} y={44} width={760} height={120} rx={22} fill="rgba(33,199,255,.06)" opacity={0} />
          <path className="xrayLine" d="M420 104 H1180" stroke="rgba(94,243,196,.18)" strokeWidth={2} opacity={0.65} />
        </g>
        <g className="orbits" opacity={0.95}>
          <path d="M420 52 C660 8, 940 8, 1180 52" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={2} />
          <path d="M400 74 C660 24, 960 24, 1200 74" fill="none" stroke="rgba(33,199,255,.10)" strokeWidth={2} />
          <path d="M450 44 C700 10, 940 18, 1200 48" fill="none" stroke="rgba(94,243,196,.08)" strokeWidth={2} />
        </g>
      </g>

      <g className="txt">
        <text className="t1" x="74" y="74">Ортодонтия и гнатология</text>
        <text className="t2" x="74" y="104">исправление аномалий прикуса • челюстные дефекты • ВНЧС</text>
        <g className="chips" transform="translate(74 144)">
          <g className="chip" transform="translate(0 0)">
            <rect x="0" y={-14} width={152} height={28} rx={14} fill="rgba(33,199,255,.08)" stroke="rgba(33,199,255,.22)" />
            <path d="M14 4 L22 -4 L24 -2 L16 6 Z" fill="rgba(255,255,255,.78)" />
            <text className="chipText" x={36} y={5}>Врач-ортодонт</text>
          </g>
          <g className="chip" transform="translate(166 0)">
            <rect x="0" y={-14} width={112} height={28} rx={14} fill="rgba(94,243,196,.08)" stroke="rgba(94,243,196,.22)" />
            <path d="M18 -4 C14 -2 14 2 18 4 C22 2 22 -2 18 -4 Z" fill="none" stroke="rgba(255,255,255,.72)" strokeWidth={2} />
            <path d="M18 4 V10" stroke="rgba(255,255,255,.72)" strokeWidth={2} strokeLinecap="round" />
            <text className="chipText" x={38} y={5}>Гнатолог</text>
          </g>
          <g className="chip" transform="translate(292 0)">
            <rect x="0" y={-14} width={226} height={28} rx={14} fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.14)" />
            <path d="M18 -6 h10 v12 h-10 z M22 -6 v12" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth={2} />
            <text className="chipText" x={44} y={5}>металл / керамика • брекеты</text>
          </g>
        </g>
      </g>

      <g className="orthoScene" transform="translate(860 112)">
        <rect x={-290} y={-78} width={580} height={128} rx={26} fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.10)" />
        <path className="jawHint" d="M-250 -18 C-140 -88, 140 -88, 250 -18" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth={2} />
        <path className="jawHint" d="M-250 18 C-140 88, 140 88, 250 18" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={2} />
        <path className="upperLip" d="M-276 -56 C-210 -92, -128 -102, -40 -100 C48 -102, 130 -98, 206 -86 C242 -80, 262 -72, 276 -64" fill="none" stroke="rgba(255,255,255,.13)" strokeWidth={2.6} strokeLinecap="round" filter="url(#orthoSoftGlow)" pathLength={1000} />
        <path className="upperLip2" d="M-268 -56 C-206 -86, -126 -96, -40 -94 C46 -96, 126 -92, 200 -80 C236 -74, 254 -68, 268 -62" fill="none" stroke="rgba(33,199,255,.18)" strokeWidth={1.8} strokeLinecap="round" filter="url(#orthoGlow)" pathLength={1000} />
        <path className="lowerLip" d="M-272 44 C-190 88, -120 96, -40 92 C40 96, 120 96, 202 84 C238 78, 258 68, 272 58" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth={3.2} strokeLinecap="round" filter="url(#orthoSoftGlow)" pathLength={1000} />
        <path className="lowerLip2" d="M-264 44 C-186 82, -118 90, -40 86 C40 90, 120 90, 196 78 C232 72, 252 64, 266 56" fill="none" stroke="rgba(94,243,196,.20)" strokeWidth={2} strokeLinecap="round" filter="url(#orthoGlow)" pathLength={1000} />

        <g className="teeth upper" transform="translate(-220 -10)">
          {[
            { id: 't1', d: "M0 0 C0 -22 26 -24 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -24 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [7, 7] },
            { id: 't2', d: "M0 0 C0 -23 28 -25 28 0 C28 11 24 18 22 26 C20 40 10 46 8 30 C7 22 6 18 5 14 C4 18 3 22 2 26 C0 46 -12 40 -14 26 C-16 18 -20 11 -20 0 C-20 -25 0 -23 0 0 Z", br: [-10, -2, 40, 18], lig: [10, 7] },
            { id: 't3', d: "M0 0 C0 -22 26 -26 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -26 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [8, 7] },
            { id: 't4', d: "M0 0 C0 -22 26 -24 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -24 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [7, 7] },
            { id: 't5', d: "M0 0 C0 -23 28 -25 28 0 C28 11 24 18 22 26 C20 40 10 46 8 30 C7 22 6 18 5 14 C4 18 3 22 2 26 C0 46 -12 40 -14 26 C-16 18 -20 11 -20 0 C-20 -25 0 -23 0 0 Z", br: [-10, -2, 40, 18], lig: [10, 7] },
            { id: 't6', d: "M0 0 C0 -22 26 -26 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -26 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [8, 7] },
            { id: 't7', d: "M0 0 C0 -22 26 -24 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -24 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [7, 7] },
            { id: 't8', d: "M0 0 C0 -23 28 -25 28 0 C28 11 24 18 22 26 C20 40 10 46 8 30 C7 22 6 18 5 14 C4 18 3 22 2 26 C0 46 -12 40 -14 26 C-16 18 -20 11 -20 0 C-20 -25 0 -23 0 0 Z", br: [-10, -2, 40, 18], lig: [10, 7] },
          ].map((t) => (
            <g key={t.id} className={`tooth ${t.id}`}>
              <path className="en" d={t.d} fill="url(#orthoEnamel)" opacity={0.92} filter="url(#orthoGlassBlur)" />
              <path className="shade" d={t.d} fill="url(#orthoEnamelShade)" opacity={0.55} />
              <rect className="br" x={t.br[0]} y={t.br[1]} width={t.br[2]} height={t.br[3]} rx={6} />
              <circle className="lig" cx={t.lig[0]} cy={t.lig[1]} r={2.3} />
            </g>
          ))}
        </g>
        <path className="wire" d="M-220 -6 C-160 -40, -80 -48, 0 -40 C80 -48, 160 -40, 220 -6" fill="none" stroke="url(#orthoAccent)" strokeWidth={4.2} strokeLinecap="round" strokeLinejoin="round" filter="url(#orthoGlow)" pathLength={1000} />
        <g className="mountSpark" transform="translate(0,-38)">
          <path d="M0 -16 L3 -6 L14 -6 L5 0 L8 12 L0 5 L-8 12 L-5 0 L-14 -6 L-3 -6 Z" fill="rgba(255,255,255,.92)" opacity={0} filter="url(#orthoGlow)" />
        </g>
      </g>

      <g className="doc">
        <circle cx={1260} cy={100} r={86} fill="rgba(94,243,196,.18)" filter="url(#orthoSoftGlow)" />
        <circle cx={1260} cy={100} r={72} fill="rgba(255,255,255,.06)" filter="url(#orthoGlassBlur)" />
        <circle cx={1260} cy={100} r={72} fill="none" stroke="rgba(255,255,255,.12)" />
        <circle className="docRing" cx={1260} cy={100} r={64} fill="none" stroke="url(#orthoAccent)" strokeWidth={3.2} filter="url(#orthoGlow)" />
        <g clipPath="url(#orthoPhotoClip)">
          <image href={ORTHO_DOCTOR_IMAGE} x={1188} y={24} width={144} height={176} preserveAspectRatio="xMidYMid slice" />
          <rect x={1188} y={24} width={144} height={176} fill="rgba(0,0,0,.10)" />
          <rect x={1188} y={24} width={144} height={176} fill="url(#orthoPhotoGloss)" opacity={0.9} />
        </g>
        <g className="online" transform="translate(1310 148)">
          <circle r={7.5} fill="#5EF3C4" filter="url(#orthoGlow)" />
          <circle r={12} fill="none" stroke="rgba(94,243,196,.35)" strokeWidth={2} />
        </g>
      </g>

      <g className="particles" opacity={0.85}>
        <circle className="p p1" cx={470} cy={66} r={10} fill="url(#orthoParticle)" />
        <circle className="p p2" cx={612} cy={160} r={12} fill="url(#orthoParticle)" />
        <circle className="p p3" cx={990} cy={62} r={12} fill="url(#orthoParticle)" />
        <circle className="p p4" cx={1160} cy={144} r={14} fill="url(#orthoParticle)" />
      </g>
    </svg>
  );
}

function OrthoMobileSVG() {
  return (
    <svg className="orthoProM w-full h-auto" width="580" height="199" viewBox="0 0 580 199" role="img" aria-label="Ортодонтия и гнатология — брекеты (mobile)">
      <defs>
        <radialGradient id="bgRadM" cx="20%" cy="52%" r="92%">
          <stop offset="0" stopColor="#0F2B34" />
          <stop offset="0.52" stopColor="#081821" />
          <stop offset="1" stopColor="#050B10" />
        </radialGradient>
        <linearGradient id="accentM" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#21C7FF" />
          <stop offset="0.55" stopColor="#5EF3C4" />
          <stop offset="1" stopColor="#21C7FF" />
        </linearGradient>
        <linearGradient id="glassM" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.11)" />
          <stop offset="0.6" stopColor="rgba(255,255,255,.05)" />
          <stop offset="1" stopColor="rgba(255,255,255,.02)" />
        </linearGradient>
        <pattern id="gridM" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M18 0H0V18" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
        </pattern>
        <pattern id="xrayGridM" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="rgba(33,199,255,.09)" strokeWidth="1" />
          <path d="M14 0V28 M0 14H28" fill="none" stroke="rgba(94,243,196,.07)" strokeWidth="1" />
        </pattern>
        <linearGradient id="sweepM" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.5" stopColor="rgba(255,255,255,.18)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="enamelM" cx="35%" cy="28%" r="75%">
          <stop offset="0" stopColor="rgba(255,255,255,.985)" />
          <stop offset="0.45" stopColor="rgba(210,245,255,.30)" />
          <stop offset="1" stopColor="rgba(33,199,255,.10)" />
        </radialGradient>
        <radialGradient id="enamelShadeM" cx="65%" cy="78%" r="80%">
          <stop offset="0" stopColor="rgba(0,0,0,.00)" />
          <stop offset="0.70" stopColor="rgba(0,0,0,.14)" />
          <stop offset="1" stopColor="rgba(0,0,0,.26)" />
        </radialGradient>
        <filter id="glowM" x="-50%" y="-50%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softGlowM" x="-50%" y="-50%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7.2" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" result="b2" />
          <feMerge><feMergeNode in="b2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glassBlurM" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .9 0" result="blur2" />
          <feMerge><feMergeNode in="blur2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="cardClipM"><rect x="12" y="12" width="556" height="175" rx="22" /></clipPath>
        <clipPath id="photoClipM"><circle cx="520" cy="60" r="44" /></clipPath>
        <linearGradient id="photoGlossM" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.22)" />
          <stop offset="0.45" stopColor="rgba(255,255,255,.08)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="particleM" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity={1} />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="580" height="199" rx="26" fill="url(#bgRadM)" />
      <g clipPath="url(#cardClipM)">
        <rect x="12" y="12" width="556" height="175" rx="22" fill="url(#glassM)" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
        <rect x="12" y="12" width="556" height="175" rx="22" fill="url(#gridM)" opacity={0.75} />
        <rect className="sweep" x={-220} y={12} width={220} height={175} rx={22} fill="url(#sweepM)" opacity={0.9} />
        <g className="xray">
          <rect x={46} y={86} width={488} height={92} rx={18} fill="url(#xrayGridM)" opacity={0.46} />
          <rect className="xraySweep" x={46} y={86} width={488} height={92} rx={18} fill="rgba(33,199,255,.06)" opacity={0} />
          <path className="xrayLine" d="M46 132 H534" stroke="rgba(94,243,196,.18)" strokeWidth={2} opacity={0.65} />
        </g>
        <g className="orbits" opacity={0.95}>
          <path d="M46 106 C170 74, 410 74, 534 106" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={2} />
          <path d="M36 122 C170 88, 430 88, 544 122" fill="none" stroke="rgba(33,199,255,.10)" strokeWidth={2} />
          <path d="M58 94 C190 66, 410 72, 544 98" fill="none" stroke="rgba(94,243,196,.08)" strokeWidth={2} />
        </g>
      </g>

      <g className="txt">
        <text className="t1" x="22" y="52">Ортодонтия и гнатология</text>
        <text className="t2" x="22" y="74">аномалии прикуса • дефекты челюсти • ВНЧС</text>
        <g className="chips" transform="translate(22 98)">
          <g className="chip" transform="translate(0 0)">
            <rect x="0" y={-13} width={152} height={26} rx={13} fill="rgba(33,199,255,.09)" stroke="rgba(33,199,255,.24)" />
            <path d="M14 4 L22 -4 L24 -2 L16 6 Z" fill="rgba(255,255,255,.80)" />
            <text className="chipText" x={36} y={5}>Врач-ортодонт</text>
          </g>
          <g className="chip" transform="translate(166 0)">
            <rect x="0" y={-13} width={108} height={26} rx={13} fill="rgba(94,243,196,.09)" stroke="rgba(94,243,196,.24)" />
            <path d="M18 -4 C14 -2 14 2 18 4 C22 2 22 -2 18 -4 Z" fill="none" stroke="rgba(255,255,255,.72)" strokeWidth={2} />
            <path d="M18 4 V10" stroke="rgba(255,255,255,.72)" strokeWidth={2} strokeLinecap="round" />
            <text className="chipText" x={38} y={5}>Гнатолог</text>
          </g>
          <g className="chip" transform="translate(0 32)">
            <rect x="0" y={-13} width={258} height={26} rx={13} fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.14)" />
            <path d="M18 -6 h10 v12 h-10 z M22 -6 v12" fill="none" stroke="rgba(255,255,255,.76)" strokeWidth={2} />
            <text className="chipText" x={44} y={5}>металл / керамика • брекеты</text>
          </g>
        </g>
      </g>

      <g className="orthoScene" transform="translate(290 128) scale(0.62)">
        <rect x={-290} y={-78} width={580} height={128} rx={26} fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.10)" />
        <path className="jawHint" d="M-250 -18 C-140 -88, 140 -88, 250 -18" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth={2} />
        <path className="jawHint" d="M-250 18 C-140 88, 140 88, 250 18" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={2} />
        <path className="upperLip" d="M-276 -56 C-210 -92, -128 -102, -40 -100 C48 -102, 130 -98, 206 -86 C242 -80, 262 -72, 276 -64" fill="none" stroke="rgba(255,255,255,.13)" strokeWidth={2.6} strokeLinecap="round" filter="url(#softGlowM)" pathLength={1000} />
        <path className="upperLip2" d="M-268 -56 C-206 -86, -126 -96, -40 -94 C46 -96, 126 -92, 200 -80 C236 -74, 254 -68, 268 -62" fill="none" stroke="rgba(33,199,255,.18)" strokeWidth={1.8} strokeLinecap="round" filter="url(#glowM)" pathLength={1000} />
        <path className="lowerLip" d="M-272 44 C-190 88, -120 96, -40 92 C40 96, 120 96, 202 84 C238 78, 258 68, 272 58" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth={3.2} strokeLinecap="round" filter="url(#softGlowM)" pathLength={1000} />
        <path className="lowerLip2" d="M-264 44 C-186 82, -118 90, -40 86 C40 90, 120 90, 196 78 C232 72, 252 64, 266 56" fill="none" stroke="rgba(94,243,196,.20)" strokeWidth={2} strokeLinecap="round" filter="url(#glowM)" pathLength={1000} />
        <g className="teeth upper" transform="translate(-220 -24)">
          {[
            { id: 't1', d: "M0 0 C0 -22 26 -24 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -24 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [7, 7] },
            { id: 't2', d: "M0 0 C0 -23 28 -25 28 0 C28 11 24 18 22 26 C20 40 10 46 8 30 C7 22 6 18 5 14 C4 18 3 22 2 26 C0 46 -12 40 -14 26 C-16 18 -20 11 -20 0 C-20 -25 0 -23 0 0 Z", br: [-10, -2, 40, 18], lig: [10, 7] },
            { id: 't3', d: "M0 0 C0 -22 26 -26 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -26 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [8, 7] },
            { id: 't4', d: "M0 0 C0 -22 26 -24 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -24 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [7, 7] },
            { id: 't5', d: "M0 0 C0 -23 28 -25 28 0 C28 11 24 18 22 26 C20 40 10 46 8 30 C7 22 6 18 5 14 C4 18 3 22 2 26 C0 46 -12 40 -14 26 C-16 18 -20 11 -20 0 C-20 -25 0 -23 0 0 Z", br: [-10, -2, 40, 18], lig: [10, 7] },
            { id: 't6', d: "M0 0 C0 -22 26 -26 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -26 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [8, 7] },
            { id: 't7', d: "M0 0 C0 -22 26 -24 26 0 C26 10 22 18 20 26 C18 40 8 44 6 30 C5 22 4 18 3 14 C2 18 1 22 0 26 C-2 44 -12 40 -14 26 C-16 18 -20 10 -20 0 C-20 -24 0 -22 0 0 Z", br: [-12, -2, 38, 18], lig: [7, 7] },
            { id: 't8', d: "M0 0 C0 -23 28 -25 28 0 C28 11 24 18 22 26 C20 40 10 46 8 30 C7 22 6 18 5 14 C4 18 3 22 2 26 C0 46 -12 40 -14 26 C-16 18 -20 11 -20 0 C-20 -25 0 -23 0 0 Z", br: [-10, -2, 40, 18], lig: [10, 7] },
          ].map((t) => (
            <g key={t.id} className={`tooth ${t.id}`}>
              <path className="en" d={t.d} fill="url(#enamelM)" opacity={0.92} filter="url(#glassBlurM)" />
              <path className="shade" d={t.d} fill="url(#enamelShadeM)" opacity={0.55} />
              <rect className="br" x={t.br[0]} y={t.br[1]} width={t.br[2]} height={t.br[3]} rx={6} />
              <circle className="lig" cx={t.lig[0]} cy={t.lig[1]} r={2.3} />
            </g>
          ))}
        </g>
        <path className="wire" d="M-220 -20 C-160 -54, -80 -62, 0 -54 C80 -62, 160 -54, 220 -20" fill="none" stroke="url(#accentM)" strokeWidth={4.2} strokeLinecap="round" strokeLinejoin="round" filter="url(#glowM)" pathLength={1000} />
        <g className="mountSpark" transform="translate(0,-52)">
          <path d="M0 -16 L3 -6 L14 -6 L5 0 L8 12 L0 5 L-8 12 L-5 0 L-14 -6 L-3 -6 Z" fill="rgba(255,255,255,.92)" opacity={0} filter="url(#glowM)" />
        </g>
      </g>

      <g className="doc">
        <circle cx={520} cy={60} r={56} fill="rgba(94,243,196,.18)" filter="url(#softGlowM)" />
        <circle cx={520} cy={60} r={46} fill="rgba(255,255,255,.06)" filter="url(#glassBlurM)" />
        <circle cx={520} cy={60} r={46} fill="none" stroke="rgba(255,255,255,.12)" />
        <circle className="docRing" cx={520} cy={60} r={40} fill="none" stroke="url(#accentM)" strokeWidth={3} filter="url(#glowM)" />
        <g clipPath="url(#photoClipM)">
          <image href={ORTHO_DOCTOR_IMAGE} x={476} y={12} width={88} height={108} preserveAspectRatio="xMidYMid slice" />
          <rect x={476} y={12} width={88} height={108} fill="rgba(0,0,0,.10)" />
          <rect x={476} y={12} width={88} height={108} fill="url(#photoGlossM)" opacity={0.9} />
        </g>
        <g className="online" transform="translate(548 92)">
          <circle r={5.8} fill="#5EF3C4" filter="url(#glowM)" />
          <circle r={9.6} fill="none" stroke="rgba(94,243,196,.35)" strokeWidth={2} />
        </g>
      </g>

      <g className="particles" opacity={0.85}>
        <circle className="p p1" cx={70} cy={124} r={9} fill="url(#particleM)" />
        <circle className="p p2" cx={160} cy={182} r={10} fill="url(#particleM)" />
        <circle className="p p3" cx={350} cy={120} r={10} fill="url(#particleM)" />
        <circle className="p p4" cx={500} cy={176} r={12} fill="url(#particleM)" />
      </g>
    </svg>
  );
}
