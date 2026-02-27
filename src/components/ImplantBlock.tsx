"use client";

import React from "react";
import Link from "next/link";

type PriceRow = {
  name: string;
  left: string;
  right: string;
  highlightRight?: boolean;
};

const priceRows: PriceRow[] = [
  { name: "Straumann", left: "55.000 ₽", right: "65.000 ₽", highlightRight: true },
  { name: "Nobel", left: "65.000 ₽", right: "45.000 ₽" },
  { name: "NeoDent", left: "45.000 ₽", right: "45.000 ₽" },
];

const perks = [
  {
    title: "Полное восстановление",
    text:
      "Имплант восстанавливает зуб за 1 визит. Можно с последующим временным протезом.",
    icon: "🦷",
    variant: "ice",
  },
  {
    title: "Долговечность",
    text: "Надёжный срок службы, доказанная методика, комфорт и эстетика.",
    icon: "✅",
    variant: "steel",
  },
  {
    title: "Надёжная фиксация",
    text: "Стабильная интеграция и прочное соединение, всё контролируется.",
    icon: "🛡️",
    variant: "ice",
  },
  {
    title: "Эстетичный результат",
    text: "Естественная форма и цвет. Улыбка выглядит натурально.",
    icon: "✨",
    variant: "rose",
  },
] as const;

export default function ImplantBlock() {
  return (
    <div className="ib-wrap">
      <div className="ib-panel">
        <div className="ib-cornerShine" aria-hidden />

        <div className="ib-titleRow">
          <h2 className="ib-h2">Преимущества имплантации зубов</h2>
        </div>

        <div className="ib-perks">
          {perks.map((p, idx) => (
            <div key={idx} className={`ib-perkCard ib-perk-${p.variant}`}>
              <div className="ib-perkMedia">
                <div className="ib-perkImg" aria-hidden />
                <div className="ib-perkGlow" aria-hidden />
              </div>
              <div className="ib-perkBody">
                <div className="ib-perkRow">
                  <span className="ib-icon" aria-hidden>
                    {p.icon}
                  </span>
                  <h3 className="ib-perkTitle">{p.title}</h3>
                </div>
                <p className="ib-perkText">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ib-mid">
          <div className="ib-bigCard">
            <div className="ib-bigMedia">
              <div className="ib-bigImg" aria-hidden />
              <div className="ib-bubbles" aria-hidden>
                <span className="ib-bubble b1" />
                <span className="ib-bubble b2" />
                <span className="ib-bubble b3" />
                <span className="ib-bubble b4" />
              </div>
            </div>
            <div className="ib-bigAction">
              <Link href="/services/implantation#portfolio" className="ib-pillBtn">
                Смотреть портфолио
              </Link>
            </div>
          </div>

          <div className="ib-priceCard">
            <div className="ib-priceHeader">
              <h3 className="ib-priceTitle">Цены на импланты</h3>

              <div className="ib-toggle" title="Пример переключателя (как на макете)">
                <span className="ib-toggleLabel">Nobel</span>
                <span className="ib-check" aria-hidden />
              </div>
            </div>

            <div className="ib-table">
              {priceRows.map((r, i) => (
                <div key={i} className="ib-row">
                  <div className="ib-cellName">{r.name}</div>
                  <div className="ib-cellLeft">{r.left}</div>
                  <div className={`ib-cellRight ${r.highlightRight ? "isHi" : ""}`}>{r.right}</div>
                </div>
              ))}
            </div>

            <p className="ib-note">Цены указаны за 1 имплант с установкой под ключ.</p>
            <Link href="/services/implantation#prices" className="ib-primaryBtn">
              Посмотреть полный прайс
            </Link>
          </div>
        </div>

        <div className="ib-faq">
          <div className="ib-faqHead">
            <h3 className="ib-faqTitle">Часто задаваемые вопросы</h3>
            <span className="ib-arrow" aria-hidden>
              →
            </span>
          </div>
          <div className="ib-faqItem">
            <span>Какой срок службы зубных имплантатов?</span>
            <span className="ib-arrowSmall" aria-hidden>
              →
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* ===== page section wrapper ===== */
        .ib-wrap {
          display: grid;
          place-items: center;
          padding: 36px 20px;
          background:
            radial-gradient(1100px 600px at 20% 10%, rgba(255,255,255,0.9), rgba(255,255,255,0.25) 55%, rgba(240,245,255,0.15) 100%),
            linear-gradient(180deg, #eef4ff 0%, #e7efff 45%, #f3f7ff 100%);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Helvetica Neue", sans-serif;
        }

        /* ===== Outer panel — 1400px ===== */
        .ib-panel {
          position: relative;
          width: min(1400px, 100%);
          border-radius: 34px;
          padding: 26px;
          background:
            radial-gradient(1500px 750px at 20% 10%, rgba(255,255,255,0.86), rgba(255,255,255,0.56) 45%, rgba(240,246,255,0.56) 100%),
            linear-gradient(180deg, rgba(240,247,255,0.78), rgba(234,241,255,0.72));
          box-shadow:
            0 36px 96px rgba(17, 24, 39, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.78);
          overflow: hidden;
        }

        .ib-cornerShine {
          position: absolute;
          inset: -58px -84px auto auto;
          width: 480px;
          height: 300px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.88), rgba(255,255,255,0) 70%);
          filter: blur(2px);
          pointer-events: none;
        }

        .ib-titleRow { padding: 8px 12px 10px 12px; }
        .ib-h2 {
          margin: 0;
          font-weight: 780;
          font-size: 26px;
          color: rgba(15, 23, 42, 0.92);
          letter-spacing: -0.02em;
        }

        /* ===== 4 perk cards ===== */
        .ib-perks {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .ib-perkCard {
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.56));
          box-shadow:
            0 22px 50px rgba(15, 23, 42, 0.10),
            inset 0 1px 0 rgba(255,255,255,0.78);
          overflow: hidden;
          position: relative;
          min-height: 208px;
        }

        .ib-perkMedia { position: relative; height: 100px; padding: 12px 12px 0 12px; }
        .ib-perkImg {
          height: 88px;
          border-radius: 18px;
          background:
            radial-gradient(128px 76px at 35% 30%, rgba(255,255,255,0.96), rgba(255,255,255,0.0) 70%),
            linear-gradient(135deg, rgba(210,226,246,0.92), rgba(245,250,255,0.66));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.82);
          border: 1px solid rgba(255,255,255,0.58);
        }
        .ib-perkGlow {
          position: absolute;
          inset: -38px -26px auto auto;
          width: 152px;
          height: 114px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.78), rgba(255,255,255,0) 70%);
          filter: blur(1px);
        }

        .ib-perkBody { padding: 10px 16px 16px 16px; }
        .ib-perkRow { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .ib-icon {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(255,255,255,0.66);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.74);
          font-size: 18px;
        }
        .ib-perkTitle { margin: 0; font-size: 18px; font-weight: 780; color: rgba(15, 23, 42, 0.92); }
        .ib-perkText { margin: 0; font-size: 14px; line-height: 1.4; color: rgba(51, 65, 85, 0.86); }

        .ib-perk-ice .ib-perkImg {
          background:
            radial-gradient(140px 90px at 30% 25%, rgba(255,255,255,0.96), rgba(255,255,255,0) 70%),
            linear-gradient(135deg, rgba(196,218,244,0.94), rgba(246,250,255,0.68));
        }
        .ib-perk-steel .ib-perkImg {
          background:
            radial-gradient(140px 90px at 30% 25%, rgba(255,255,255,0.94), rgba(255,255,255,0) 70%),
            linear-gradient(135deg, rgba(210,216,228,0.90), rgba(247,250,255,0.68));
        }
        .ib-perk-rose .ib-perkImg {
          background:
            radial-gradient(140px 90px at 30% 25%, rgba(255,255,255,0.94), rgba(255,255,255,0) 70%),
            linear-gradient(135deg, rgba(235,214,222,0.90), rgba(247,250,255,0.68));
        }

        /* ===== middle row ===== */
        .ib-mid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 20px;
          margin-top: 18px;
        }

        .ib-bigCard {
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.80), rgba(255,255,255,0.54));
          box-shadow:
            0 26px 72px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.78);
          overflow: hidden;
          position: relative;
          min-height: 242px;
        }
        .ib-bigMedia { position: relative; padding: 18px; }
        .ib-bigImg {
          height: 154px;
          border-radius: 22px;
          background:
            radial-gradient(178px 114px at 30% 30%, rgba(255,255,255,0.94), rgba(255,255,255,0) 70%),
            linear-gradient(135deg, rgba(205,220,242,0.90), rgba(248,251,255,0.64));
          border: 1px solid rgba(255,255,255,0.58);
          box-shadow:
            0 22px 50px rgba(15, 23, 42, 0.08),
            inset 0 1px 0 rgba(255,255,255,0.78);
        }
        .ib-bigAction { display: flex; justify-content: center; padding: 0 18px 18px 18px; }

        .ib-pillBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 999px;
          padding: 12px 22px;
          font-weight: 740;
          font-size: 16px;
          color: rgba(30, 64, 175, 0.92);
          background: linear-gradient(180deg, rgba(255,255,255,0.88), rgba(240,246,255,0.74));
          box-shadow:
            0 16px 42px rgba(37, 99, 235, 0.16),
            inset 0 1px 0 rgba(255,255,255,0.82);
          cursor: pointer;
          transition: transform 120ms ease;
          text-decoration: none;
        }
        .ib-pillBtn:hover { transform: translateY(-1px); }
        .ib-pillBtn:active { transform: translateY(0); }

        .ib-bubbles { position: absolute; inset: 0; pointer-events: none; }
        .ib-bubble {
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          background:
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.92), rgba(255,255,255,0.26) 60%, rgba(255,255,255,0.06) 100%);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.10);
          backdrop-filter: blur(6px);
          opacity: 0.85;
        }
        .b1 { left: 22px; bottom: 22px; width: 46px; height: 46px; }
        .b2 { left: 80px; bottom: 32px; width: 26px; height: 26px; opacity: 0.65; }
        .b3 { left: 52px; top: 28px; width: 20px; height: 20px; opacity: 0.55; }
        .b4 { right: 28px; top: 20px; width: 28px; height: 28px; opacity: 0.60; }

        .ib-priceCard {
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.80), rgba(255,255,255,0.54));
          box-shadow:
            0 26px 72px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.78);
          padding: 18px;
          position: relative;
          overflow: hidden;
        }
        .ib-priceHeader { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 14px; }
        .ib-priceTitle { margin: 0; font-size: 20px; font-weight: 820; color: rgba(15, 23, 42, 0.92); letter-spacing: -0.02em; }

        .ib-toggle {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.64);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.78);
          border: 1px solid rgba(255,255,255,0.58);
        }
        .ib-toggleLabel { font-size: 15px; font-weight: 780; color: rgba(30, 64, 175, 0.85); }
        .ib-check {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: linear-gradient(180deg, rgba(59,130,246,0.98), rgba(37,99,235,0.94));
          box-shadow: 0 12px 26px rgba(37,99,235,0.25);
          position: relative;
        }
        .ib-check::after {
          content: "";
          position: absolute;
          left: 5px;
          top: 4px;
          width: 8px;
          height: 11px;
          border-right: 2px solid white;
          border-bottom: 2px solid white;
          transform: rotate(40deg);
        }

        .ib-table {
          border-radius: 20px;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(255,255,255,0.58);
          overflow: hidden;
        }
        .ib-row {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr 0.9fr;
          gap: 12px;
          padding: 12px 16px;
          align-items: center;
        }
        .ib-row + .ib-row { border-top: 1px solid rgba(148, 163, 184, 0.25); }
        .ib-cellName { font-weight: 780; font-size: 16px; color: rgba(15, 23, 42, 0.90); }
        .ib-cellLeft { text-align: right; font-weight: 650; font-size: 16px; color: rgba(51, 65, 85, 0.86); }
        .ib-cellRight { text-align: right; font-weight: 860; font-size: 16px; color: rgba(15, 23, 42, 0.92); }
        .ib-cellRight.isHi { color: rgba(29, 78, 216, 0.96); }

        .ib-note { margin: 12px 4px 12px 4px; font-size: 14px; color: rgba(71, 85, 105, 0.75); }

        .ib-primaryBtn {
          display: block;
          width: 100%;
          text-align: center;
          border: none;
          border-radius: 999px;
          padding: 14px 18px;
          font-weight: 860;
          font-size: 16px;
          color: rgba(255,255,255,0.96);
          background: linear-gradient(180deg, rgba(59,130,246,0.98), rgba(37,99,235,0.95));
          box-shadow: 0 22px 54px rgba(37,99,235,0.25);
          cursor: pointer;
          transition: transform 120ms ease;
          text-decoration: none;
        }
        .ib-primaryBtn:hover { transform: translateY(-1px); }
        .ib-primaryBtn:active { transform: translateY(0); }

        /* ===== FAQ ===== */
        .ib-faq {
          margin-top: 20px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.80), rgba(255,255,255,0.54));
          box-shadow:
            0 24px 64px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.78);
          overflow: hidden;
        }
        .ib-faqHead { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; }
        .ib-faqTitle { margin: 0; font-size: 20px; font-weight: 860; color: rgba(15, 23, 42, 0.92); letter-spacing: -0.02em; }
        .ib-arrow { font-size: 22px; color: rgba(51, 65, 85, 0.7); }
        .ib-faqItem {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px 20px 20px;
          color: rgba(51, 65, 85, 0.90);
          font-weight: 700;
          font-size: 16px;
          border-top: 1px solid rgba(148,163,184,0.22);
        }
        .ib-arrowSmall { color: rgba(51, 65, 85, 0.65); }

        /* ===== responsive ===== */
        @media (max-width: 980px) {
          .ib-perks { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .ib-mid { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .ib-panel { padding: 18px; border-radius: 28px; }
          .ib-perks { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
