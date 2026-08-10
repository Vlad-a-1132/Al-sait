import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { REHABILITATION_ARTICLE_PAGES } from "@/data/rehabilitation-article-pages";

const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";

export function makeRehabilitationArticleMetadata(slug: string): Metadata {
  const article = REHABILITATION_ARTICLE_PAGES[slug];
  if (!article) return { title: "Статья | Альтамед-С" };
  const url = `https://altamed-c.ru/blog/${slug}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "Альтамед-С",
      locale: "ru_RU",
      type: "article",
      images: [{ url: `https://altamed-c.ru${article.image}`, alt: article.h1 }],
    },
  };
}

export default function RehabilitationArticlePage({ slug }: { slug: string }) {
  const article = REHABILITATION_ARTICLE_PAGES[slug];
  if (!article) return <main className="min-h-[50vh] grid place-items-center">Материал не найден.</main>;

  const url = `https://altamed-c.ru/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        headline: article.h1,
        description: article.description,
        url,
        image: `https://altamed-c.ru${article.image}`,
        dateModified: "2026-08-08",
        author: { "@type": "Organization", name: "Медицинский центр Альтамед-С" },
        publisher: { "@type": "MedicalOrganization", name: "Альтамед-С", url: "https://altamed-c.ru" },
        about: article.serviceLabel,
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

      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/topics/rehabilitation" className="hover:text-emerald-600">Восстановление</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">{article.breadcrumb}</span>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-7 lg:gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
                <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-800">{article.category}</span>
                <span className="text-gray-500">Материал для пациентов · {article.readingTime}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{article.h1}</h1>
              {article.intro.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">{paragraph}</p>
              ))}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-5">
                <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-700">Записаться онлайн</a>
                <a href={PHONE_LINK} className="inline-flex min-h-[46px] items-center justify-center rounded-xl border-2 border-emerald-600 px-6 py-3 font-medium text-emerald-700 transition hover:bg-emerald-50">Позвонить в клинику</a>
                <Link href={article.serviceHref} className="inline-flex min-h-[46px] items-center justify-center px-3 py-3 font-semibold text-emerald-700 hover:underline">{article.serviceLabel}</Link>
              </div>
              <nav aria-label="Содержание статьи" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {article.sections.slice(0, 6).map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="py-1 text-emerald-700 hover:underline">{section.navTitle ?? section.title}</a>
                ))}
                <a href="#faq" className="py-1 text-emerald-700 hover:underline">FAQ</a>
              </nav>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] max-h-[300px] sm:max-h-[380px] lg:max-h-none overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                <Image src={article.image} alt={article.imageAlt} fill priority className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" quality={92} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-72 rounded-xl border border-gray-100 bg-white/95 p-4 shadow-lg backdrop-blur">
                <p className="mb-1 text-sm font-semibold text-gray-900">Приём в Альтамед-С</p>
                <p className="mb-0 text-xs leading-relaxed text-gray-600">На странице собраны ответы на частые вопросы, этапы приёма и удобные способы записи в клинику.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <section className="mb-12" aria-label="Кратко о главном">
          <div className="grid md:grid-cols-3 gap-4">
            {article.highlights.map((item) => (
              <div key={item.title} className={`rounded-2xl border p-6 ${item.tone === "rose" ? "border-rose-100 bg-rose-50" : item.tone === "amber" ? "border-amber-100 bg-amber-50" : "border-emerald-100 bg-emerald-50"}`}>
                <h2 className="text-base font-bold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-11 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0 mb-4">{section.title}</h2>
              {section.lead ? <p className="text-lg font-medium text-gray-800 mb-4">{section.lead}</p> : null}
              {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}

              {section.cards?.length ? (
                <div className={`not-prose grid sm:grid-cols-2 gap-4 my-6 ${section.cards.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                  {section.cards.map((card) => (
                    <div key={card.title} className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-0">{card.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.bullets?.length ? (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}

              {section.subsections?.map((subsection) => (
                <div key={subsection.title} className="mt-7">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{subsection.title}</h3>
                  {subsection.paragraphs?.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
                  {subsection.bullets?.length ? <ul className="list-disc pl-6 mb-4 space-y-2">{subsection.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                </div>
              ))}
            </section>
          ))}

          <section id="faq" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0 mb-5">Частые вопросы</h2>
            <dl className="not-prose grid md:grid-cols-2 gap-4">
              {article.faq.map((item) => (
                <div key={item.question} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <dt className="font-semibold text-gray-900 mb-2">{item.question}</dt>
                  <dd className="text-sm text-gray-700 leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="not-prose rounded-2xl bg-emerald-50 p-6 sm:p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Запись на консультацию в Одинцово</h2>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-6">Выберите удобное время онлайн или позвоните в клинику. Администратор подскажет доступных специалистов, продолжительность приёма и ответит на организационные вопросы.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <a href={APPOINTMENTS_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-emerald-600 px-8 py-3.5 font-medium text-white hover:bg-emerald-700">Записаться онлайн</a>
              <a href={PHONE_LINK} className="rounded-xl border-2 border-emerald-600 px-8 py-3.5 font-medium text-emerald-700 hover:bg-white">+7 (495) 255-44-50</a>
              <Link href={article.serviceHref} className="rounded-xl px-5 py-3.5 font-semibold text-emerald-700 hover:underline">{article.serviceLabel}</Link>
            </div>
          </section>

          <section className="not-prose border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Полезные материалы и направления</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Связанные услуги</h3>
                <ul className="space-y-2 text-gray-700">
                  {article.relatedServices.map((item) => <li key={item.href}><Link href={item.href} className="text-emerald-700 hover:underline">{item.title}</Link></li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Читайте также</h3>
                <ul className="space-y-2 text-gray-700">
                  {article.related.map((relatedSlug) => {
                    const related = REHABILITATION_ARTICLE_PAGES[relatedSlug];
                    return related ? <li key={relatedSlug}><Link href={`/blog/${relatedSlug}`} className="text-emerald-700 hover:underline">{related.h1}</Link></li> : null;
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
