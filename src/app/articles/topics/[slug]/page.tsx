import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_TOPIC_PAGES, BLOG_TOPIC_SLUGS, type BlogTopicSlug } from "@/data/blog-topic-pages";

export function generateStaticParams() {
  return BLOG_TOPIC_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const topic = BLOG_TOPIC_PAGES[params.slug as BlogTopicSlug];
  if (!topic) return {};
  const url = `https://altamed-c.ru/blog/topics/${params.slug}`;
  return {
    title: `${topic.title} | Альтамед-С`,
    description: topic.description,
    alternates: { canonical: url },
    openGraph: { title: topic.title, description: topic.description, url, siteName: "Альтамед-С", locale: "ru_RU", type: "website" },
  };
}

export default function BlogTopicPage({ params }: { params: { slug: string } }) {
  const topic = BLOG_TOPIC_PAGES[params.slug as BlogTopicSlug];
  if (!topic) notFound();

  const canonical = `https://altamed-c.ru/blog/topics/${params.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", name: topic.title, description: topic.description, url: canonical },
      {
        "@type": "ItemList",
        itemListElement: topic.articles.map((article, index) => ({ "@type": "ListItem", position: index + 1, name: article.title, url: `https://altamed-c.ru${article.url}` })),
      },
      {
        "@type": "FAQPage",
        mainEntity: topic.questions.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="border-b border-gray-100 bg-gray-50/60">
        <nav className="mx-auto max-w-7xl px-4 py-4 text-sm text-gray-600 sm:px-6 lg:px-8" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-emerald-700">Главная</Link><span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-emerald-700">Блог</Link><span className="mx-2">/</span>
          <span className="font-medium text-gray-900">{topic.name}</span>
        </nav>
      </div>

      <section className={`bg-gradient-to-br ${topic.accent}`}>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Тематический раздел блога</p>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-gray-950 md:text-5xl">{topic.title}</h1>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-700">{topic.intro}</p>
          </div>
          <aside className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Профильное направление</p>
            <h2 className="mt-2 text-xl font-bold text-gray-950">{topic.serviceLabel}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{topic.serviceDescription}</p>
            <Link href={topic.serviceHref} className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">Перейти к услугам</Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div><p className="text-sm font-semibold text-emerald-700">{topic.articles.length} материалов</p><h2 className="mt-1 text-3xl font-bold text-gray-950">Статьи по теме</h2></div>
          <Link href="/blog" className="font-semibold text-emerald-700 hover:underline">Все направления блога</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topic.articles.map((article) => (
            <Link key={article.url} href={article.url} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <Image src={article.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold leading-snug text-gray-950 group-hover:text-emerald-700">{article.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">{article.desc}</p>
                <span className="mt-4 inline-flex font-semibold text-emerald-700">Читать статью →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-950">Вопросы о разделе</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topic.questions.map((item) => <div key={item.question} className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold text-gray-950">{item.question}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{item.answer}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
