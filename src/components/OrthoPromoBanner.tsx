"use client";

const ORTHO_DOCTOR_IMAGE = "/images/doctors/Goncharenko Elena Borisovna (2)-Photoroom 1.png";

export function OrthoDesktopSVG() {
  return (
    <svg className="orthoPro w-full h-auto" width="1400" height="200" viewBox="0 0 1400 200" role="img" aria-label="Ортодонтия — брекеты, выравнивание прикуса">
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
        <text className="t1" x="74" y="74">Ортодонтия</text>
        <text className="t2" x="74" y="104">исправление аномалий прикуса • брекеты • элайнеры</text>
        <g className="chips" transform="translate(74 144)">
          <g className="chip" transform="translate(0 0)">
            <rect x="0" y={-14} width={152} height={28} rx={14} fill="rgba(33,199,255,.08)" stroke="rgba(33,199,255,.22)" />
            <path d="M14 4 L22 -4 L24 -2 L16 6 Z" fill="rgba(255,255,255,.78)" />
            <text className="chipText" x={36} y={5}>Врач-ортодонт</text>
          </g>
          <g className="chip" transform="translate(166 0)">
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

export function OrthoMobileSVG() {
  return (
    <svg className="orthoProM w-full h-auto" width="580" height="199" viewBox="0 0 580 199" role="img" aria-label="Ортодонтия — брекеты (mobile)">
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
        <text className="t1" x="22" y="52">Ортодонтия</text>
        <text className="t2" x="22" y="74">аномалии прикуса • брекеты • элайнеры</text>
        <g className="chips" transform="translate(22 98)">
          <g className="chip" transform="translate(0 0)">
            <rect x="0" y={-13} width={152} height={26} rx={13} fill="rgba(33,199,255,.09)" stroke="rgba(33,199,255,.24)" />
            <path d="M14 4 L22 -4 L24 -2 L16 6 Z" fill="rgba(255,255,255,.80)" />
            <text className="chipText" x={36} y={5}>Врач-ортодонт</text>
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
