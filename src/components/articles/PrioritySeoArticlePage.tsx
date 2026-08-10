import ImmersivePrioritySeoArticlePage from "@/components/articles/ImmersivePrioritySeoArticlePage";
import { PRIORITY_SEO_ARTICLES } from "@/data/priority-seo-articles";

export default function PrioritySeoArticlePage({ slug }: { slug: string }) {
  const article = PRIORITY_SEO_ARTICLES[slug];
  if (!article) return null;

  const canonical = `https://altamed-c.ru/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        headline: article.h1,
        description: article.description,
        url: canonical,
        image: `https://altamed-c.ru${article.image}`,
        dateModified: "2026-08-08",
        author: { "@type": "MedicalOrganization", name: "Альтамед-С" },
        publisher: { "@type": "MedicalOrganization", name: "Альтамед-С", url: "https://altamed-c.ru" },
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <article className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ImmersivePrioritySeoArticlePage article={article} />
    </article>
  );
}
