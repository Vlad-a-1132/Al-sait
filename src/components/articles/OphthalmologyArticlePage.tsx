import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OPHTHALMOLOGY_ARTICLE_PAGE_DEFS } from "@/data/ophthalmology-article-pages";

const SERVICE_URL = "/services/ophthalmology";
const HERO = "/images/images allergoly/oftalmologia.webp";
const PHONE_LINK = "tel:+74952554450";
const APPOINTMENTS_URL = "https://online.altamed-c.ru/";
const BLOG_URL = "/blog";

export function makeOphthalmologyArticleMetadata(slug: string): Metadata {
  const def = OPHTHALMOLOGY_ARTICLE_PAGE_DEFS[slug];
  if (!def) {
    return { title: "Статья | Альтамед‑С" };
  }
  const url = `https://altamed-c.ru/blog/${slug}`;
  return {
    title: def.title,
    description: def.description,
    openGraph: {
      title: def.title,
      description: def.description,
      url,
      siteName: "Альтамед‑С",
      locale: "ru_RU",
      type: "article",
      images: [{ url: `https://altamed-c.ru${HERO}`, alt: def.h1 }],
    },
    alternates: { canonical: url },
  };
}

export default function OphthalmologyArticlePage({ slug }: { slug: string }) {
  const def = OPHTHALMOLOGY_ARTICLE_PAGE_DEFS[slug];
  if (!def) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <p className="text-gray-600">Материал не найден.</p>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link href={SERVICE_URL} className="hover:text-emerald-600">
              Офтальмология
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Статья</span>
          </nav>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{def.h1}</h1>
              {def.intro.map((p, i) => (
                <p key={i} className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
                <a
                  href={APPOINTMENTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-5 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition min-h-[44px]"
                >
                  Записаться на приём
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex justify-center items-center px-5 py-3.5 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]"
                >
                  Позвонить в клинику
                </a>
                <Link href={SERVICE_URL} className="inline-flex justify-center items-center px-5 py-3.5 text-emerald-700 font-medium hover:underline min-h-[44px]">
                  Услуги офтальмологии
                </Link>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                Полезные ссылки:{" "}
                <Link href={`${SERVICE_URL}#ophthalmology-doctors`} className="text-emerald-700 font-medium hover:underline">
                  врачи
                </Link>
                ,{" "}
                <Link href={`${SERVICE_URL}#services-heading`} className="text-emerald-700 font-medium hover:underline">
                  цены
                </Link>
                ,{" "}
                <Link href={BLOG_URL} className="text-emerald-700 font-medium hover:underline">
                  все статьи
                </Link>
                .
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 max-h-[320px] lg:max-h-none">
              <Image src={HERO} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 560px" priority unoptimized />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            {def.sections.map((s) => (
              <section key={s.h2} className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{s.h2}</h2>
                {s.tone === "rose" ? (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                    {s.paragraphs?.map((p) => (
                      <p key={p} className="text-gray-800 text-sm sm:text-base leading-relaxed mb-3">
                        {p}
                      </p>
                    ))}
                    {s.bullets?.length ? (
                      <ul className="space-y-2 text-gray-900 text-sm sm:text-base">
                        {s.bullets.map((t) => (
                          <li key={t} className="flex gap-2">
                            <span className="text-rose-600 shrink-0">●</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <>
                    {s.paragraphs?.map((p) => (
                      <p key={p} className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                        {p}
                      </p>
                    ))}
                    {s.bullets?.length ? (
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        {s.bullets.map((t) => (
                          <li key={t} className="flex gap-2">
                            <span className="text-emerald-600 shrink-0">●</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Запишитесь к офтальмологу в Одинцово</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Если зрение изменилось, появились боль, покраснение, сухость, дискомфорт в линзах, «мушки» или вспышки, запишитесь на консультацию
              офтальмолога в клинику «Альтамед‑С». Врач проведёт осмотр и подскажет, какие обследования действительно нужны по показаниям.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={APPOINTMENTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-5 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition min-h-[44px]"
              >
                Записаться на приём
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex justify-center items-center px-5 py-3.5 border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition min-h-[44px]"
              >
                Позвонить в клинику
              </a>
              <Link href={`${SERVICE_URL}#services-heading`} className="inline-flex justify-center items-center px-5 py-3.5 text-emerald-700 font-medium hover:underline min-h-[44px]">
                Прайс офтальмологии
              </Link>
            </div>
            <div className="mt-5 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Материал носит информационный характер и не заменяет консультацию врача. При боли в глазу, резком ухудшении зрения, травме, вспышках, внезапном
              появлении большого количества мушек или ощущении «занавески» перед глазом обратитесь к офтальмологу как можно скорее.
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {def.faq.map((f) => (
              <div key={f.q} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-0">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {def.relatedSlugs?.length ? (
        <section className="py-10 sm:py-12 bg-gray-50/60 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Читайте также</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {def.relatedSlugs.map((s) => {
                const r = OPHTHALMOLOGY_ARTICLE_PAGE_DEFS[s];
                if (!r) return null;
                return (
                  <Link
                    key={s}
                    href={`${BLOG_URL}/${s}`}
                    className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-emerald-200 hover:shadow-md transition"
                  >
                    <div className="text-xs text-gray-500 mb-2">Офтальмология</div>
                    <div className="font-bold text-gray-900 mb-2 leading-snug">{r.h1}</div>
                    <div className="text-sm text-gray-600 leading-relaxed line-clamp-2">{r.description}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
