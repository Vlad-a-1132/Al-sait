"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICE_SEO_FAQ } from "@/data/service-seo-faq";

export default function ServiceSeoFaq() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const definition = SERVICE_SEO_FAQ[pathname];
  if (!definition) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: definition.questions.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };

  return (
    <section className="border-t border-gray-100 bg-gray-50/70 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl"><p className="font-semibold text-emerald-700">Полезно перед записью</p><h2 className="mt-2 text-3xl font-bold text-gray-950">{definition.title}</h2><p className="mt-3 text-gray-600">{definition.intro}</p></div>
        <div className="mt-7 grid gap-4 md:grid-cols-2">{definition.questions.map((item) => <details key={item.question} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none pr-8 font-bold text-gray-950 marker:hidden">{item.question}</summary><p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p></details>)}</div>
        {definition.articles?.length ? <div className="mt-9"><div className="mb-4 flex flex-wrap items-end justify-between gap-3"><h2 className="text-2xl font-bold text-gray-950">Статьи по теме</h2><Link href="/blog" className="font-semibold text-emerald-700 hover:underline">Все материалы →</Link></div><div className="grid gap-3 md:grid-cols-3">{definition.articles.map((article) => <Link key={article.href} href={article.href} className="rounded-xl border border-emerald-100 bg-white p-4 font-semibold text-gray-900 transition hover:border-emerald-300 hover:text-emerald-700 hover:shadow-sm">{article.title}<span className="ml-2 text-emerald-600">→</span></Link>)}</div></div> : null}
      </div>
    </section>
  );
}
