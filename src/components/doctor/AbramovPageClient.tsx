"use client";

import React, { useMemo, useState } from "react";
import type { PageDataBundle } from "./types";
import { SectionShell } from "./SectionShell";
import { DoctorHero } from "./DoctorHero";
import { DirectionsNavigator } from "./DirectionsNavigator";
import { DirectionDetails } from "./DirectionDetails";
import { AdvantagesBlock } from "./AdvantagesBlock";
import { OrthoSeoBlocks } from "./OrthoSeoBlocks";
import { PricingByDirection } from "./PricingByDirection";
import { FaqByDirection } from "./FaqByDirection";
import { ReviewsStrip } from "./ReviewsStrip";
import { PortfolioGrid } from "./PortfolioGrid";
import { FinalCtaCard } from "./FinalCtaCard";
import { getOrthodonticsSeoContent } from "@/data/goncharenko/orthodonticsSeo";

/** Пока скрыт; вернуть блок «Примеры работ» — поставить true */
const SHOW_PORTFOLIO = false;

function DoctorPageClient({ data }: { data: PageDataBundle }) {
  const initial = data.directions[0]?.id ?? "";
  const [activeId, setActiveId] = useState(initial);
  const [portfolioFilter, setPortfolioFilter] = useState<string | null>(null);

  const activeDirection = useMemo(
    () => data.directions.find((d) => d.id === activeId) ?? data.directions[0],
    [data.directions, activeId]
  );

  const faqForFaq = useMemo(
    () => data.faq.map((f) => ({ id: f.id, q: f.q, a: f.a })),
    [data.faq]
  );

  if (!activeDirection) return null;

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <DoctorHero
        doctor={data.doctor}
        directions={data.directions}
        onPickDirection={setActiveId}
        bannerStyleBackground
      />
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
        <div className="h-10 md:h-14" />
        <SectionShell id="directions">
          <DirectionsNavigator
            directions={data.directions}
            activeId={activeId}
            onChange={setActiveId}
            activeDirection={activeDirection}
            directionPageBasePath={data.directionPageBasePath}
          />
        </SectionShell>
        <div className="h-10 md:h-14" />
        <SectionShell>
          <DirectionDetails direction={activeDirection} directionPageBasePath={data.directionPageBasePath} />
        </SectionShell>
        <div className="h-10 md:h-14" />
        <SectionShell>
          <AdvantagesBlock direction={activeDirection} />
        </SectionShell>
        {data.directionPageBasePath === "/services/dentistry/orthodontics" && (() => {
          const orthoSeo = getOrthodonticsSeoContent(activeDirection.id as import("@/data/goncharenko/directions").DirectionId);
          return orthoSeo ? (
            <>
              <div className="h-10 md:h-14" />
              <SectionShell>
                <OrthoSeoBlocks seoContent={orthoSeo} />
              </SectionShell>
            </>
          ) : null;
        })()}
        <div className="h-10 md:h-14" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionShell>
              <FaqByDirection direction={activeDirection} generalFaq={faqForFaq} />
            </SectionShell>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <SectionShell>
              <PricingByDirection direction={activeDirection} priceCta={data.priceCta} />
            </SectionShell>
            <SectionShell>
              <ReviewsStrip reviews={data.reviews} activeDirectionId={activeId} reviewsSource={data.reviewsSource} reviewsSources={data.reviewsSources} />
            </SectionShell>
          </div>
        </div>
        <div className="h-10 md:h-14" />
        {SHOW_PORTFOLIO && (
          <SectionShell>
            <PortfolioGrid
              cases={data.cases}
              directions={data.directions.map((d) => ({ id: d.id, shortTitle: d.shortTitle }))}
              activeDirectionId={portfolioFilter}
              onFilter={setPortfolioFilter}
            />
          </SectionShell>
        )}
        <div className="h-10 md:h-14" />
        <FinalCtaCard cta={{ label: "Записаться на приём", href: "/appointments" }} />
        <div className="h-16" />
      </div>
    </main>
  );
}

export { DoctorPageClient };
export default DoctorPageClient;
