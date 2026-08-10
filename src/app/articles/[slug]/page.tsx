import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrioritySeoArticlePage from "@/components/articles/PrioritySeoArticlePage";
import { PRIORITY_SEO_ARTICLES } from "@/data/priority-seo-articles";

export function generateStaticParams() {
  return Object.keys(PRIORITY_SEO_ARTICLES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = PRIORITY_SEO_ARTICLES[params.slug];
  if (!article) return {};
  const url = `https://altamed-c.ru/blog/${params.slug}`;
  return { title: article.title, description: article.description, alternates: { canonical: url }, openGraph: { title: article.h1, description: article.description, url, siteName: "Альтамед-С", locale: "ru_RU", type: "article", images: [{ url: `https://altamed-c.ru${article.image}` }] } };
}

export default function PriorityArticleRoute({ params }: { params: { slug: string } }) {
  if (!PRIORITY_SEO_ARTICLES[params.slug]) notFound();
  return <PrioritySeoArticlePage slug={params.slug} />;
}
