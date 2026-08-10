"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type BlogDirection =
  | "gynecology"
  | "allergology"
  | "gastroenterology"
  | "dermatology"
  | "cardiology"
  | "mammology"
  | "neurology"
  | "otolaryngology"
  | "ophthalmology"
  | "pediatrics"
  | "proctology"
  | "rehabilitation"
  | "endocrinology"
  | "therapy"
  | "traumatology"
  | "dentistry"
  | "urology"
  | "surgery";
export type BlogSort = "default" | "title_asc" | "title_desc";

export type BlogPostCard = {
  direction: BlogDirection;
  title: string;
  desc: string;
  url: string;
  image: string;
};

function directionLabel(d: BlogDirection) {
  if (d === "gynecology") return "Гинекология";
  if (d === "allergology") return "Аллергология";
  if (d === "cardiology") return "Кардиология";
  if (d === "mammology") return "Маммология";
  if (d === "neurology") return "Неврология";
  if (d === "otolaryngology") return "ЛОР";
  if (d === "ophthalmology") return "Офтальмология";
  if (d === "pediatrics") return "Педиатрия";
  if (d === "proctology") return "Проктология";
  if (d === "rehabilitation") return "Восстановление";
  if (d === "endocrinology") return "Эндокринология";
  if (d === "therapy") return "Терапия";
  if (d === "traumatology") return "Травматология";
  if (d === "dentistry") return "Стоматология";
  if (d === "urology") return "Урология";
  if (d === "surgery") return "Хирургия";
  if (d === "dermatology") return "Дерматология";
  return "Гастроэнтерология";
}

function sanitizeDirection(v: string | null): BlogDirection | "all" {
  if (
    v === "gynecology" ||
    v === "allergology" ||
    v === "gastroenterology" ||
    v === "dermatology" ||
    v === "cardiology" ||
    v === "mammology" ||
    v === "neurology" ||
    v === "otolaryngology" ||
    v === "ophthalmology" ||
    v === "pediatrics" ||
    v === "proctology" ||
    v === "rehabilitation" ||
    v === "endocrinology" ||
    v === "therapy" ||
    v === "traumatology" ||
    v === "dentistry"
    || v === "urology"
    || v === "surgery"
  )
    return v;
  return "all";
}

function sanitizeSort(v: string | null): BlogSort {
  if (v === "title_asc" || v === "title_desc" || v === "default") return v;
  return "default";
}

function applySort(posts: BlogPostCard[], sort: BlogSort) {
  if (sort === "default") return posts;
  const next = [...posts];
  next.sort((a, b) => a.title.localeCompare(b.title, "ru"));
  if (sort === "title_desc") next.reverse();
  return next;
}

export default function BlogIndexClient({ posts }: { posts: BlogPostCard[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialDir = sanitizeDirection(searchParams.get("dir"));
  const initialSort = sanitizeSort(searchParams.get("sort"));

  const [dir, setDir] = useState<BlogDirection | "all">(initialDir);
  const [sort, setSort] = useState<BlogSort>(initialSort);

  const filtered = useMemo(() => {
    const base = dir === "all" ? posts : posts.filter((p) => p.direction === dir);
    return applySort(base, sort);
  }, [posts, dir, sort]);

  const counts = useMemo(() => {
    const gynecology = posts.filter((p) => p.direction === "gynecology").length;
    const allergology = posts.filter((p) => p.direction === "allergology").length;
    const gastroenterology = posts.filter((p) => p.direction === "gastroenterology").length;
    const dermatology = posts.filter((p) => p.direction === "dermatology").length;
    const cardiology = posts.filter((p) => p.direction === "cardiology").length;
    const mammology = posts.filter((p) => p.direction === "mammology").length;
    const neurology = posts.filter((p) => p.direction === "neurology").length;
    const otolaryngology = posts.filter((p) => p.direction === "otolaryngology").length;
    const ophthalmology = posts.filter((p) => p.direction === "ophthalmology").length;
    const pediatrics = posts.filter((p) => p.direction === "pediatrics").length;
    const proctology = posts.filter((p) => p.direction === "proctology").length;
    const rehabilitation = posts.filter((p) => p.direction === "rehabilitation").length;
    const endocrinology = posts.filter((p) => p.direction === "endocrinology").length;
    const therapy = posts.filter((p) => p.direction === "therapy").length;
    const traumatology = posts.filter((p) => p.direction === "traumatology").length;
    const dentistry = posts.filter((p) => p.direction === "dentistry").length;
    const urology = posts.filter((p) => p.direction === "urology").length;
    const surgery = posts.filter((p) => p.direction === "surgery").length;
    return { all: posts.length, gynecology, allergology, gastroenterology, dermatology, cardiology, mammology, neurology, otolaryngology, ophthalmology, pediatrics, proctology, rehabilitation, endocrinology, therapy, traumatology, dentistry, urology, surgery };
  }, [posts]);

  const updateQuery = (nextDir: BlogDirection | "all", nextSort: BlogSort) => {
    const qp = new URLSearchParams(searchParams.toString());
    if (nextDir === "all") qp.delete("dir");
    else qp.set("dir", nextDir);
    if (nextSort === "default") qp.delete("sort");
    else qp.set("sort", nextSort);
    const qs = qp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const onDir = (nextDir: BlogDirection | "all") => {
    setDir(nextDir);
    updateQuery(nextDir, sort);
  };

  const onSort = (nextSort: BlogSort) => {
    setSort(nextSort);
    updateQuery(dir, nextSort);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: "all", label: `Все (${counts.all})` },
                { id: "gynecology", label: `Гинекология (${counts.gynecology})` },
                { id: "allergology", label: `Аллергология (${counts.allergology})` },
                { id: "gastroenterology", label: `Гастроэнтеролог (${counts.gastroenterology})` },
                { id: "dermatology", label: `Дерматология (${counts.dermatology})` },
                { id: "cardiology", label: `Кардиология (${counts.cardiology})` },
                { id: "mammology", label: `Маммология (${counts.mammology})` },
                { id: "neurology", label: `Неврология (${counts.neurology})` },
                { id: "otolaryngology", label: `ЛОР (${counts.otolaryngology})` },
                { id: "ophthalmology", label: `Офтальмология (${counts.ophthalmology})` },
                { id: "pediatrics", label: `Педиатрия (${counts.pediatrics})` },
                { id: "proctology", label: `Проктология (${counts.proctology})` },
                { id: "rehabilitation", label: `Восстановление (${counts.rehabilitation})` },
                { id: "endocrinology", label: `Эндокринология (${counts.endocrinology})` },
                { id: "therapy", label: `Терапия (${counts.therapy})` },
                { id: "traumatology", label: `Травматология (${counts.traumatology})` },
                { id: "dentistry", label: `Стоматология (${counts.dentistry})` },
                { id: "urology", label: `Урология (${counts.urology})` },
                { id: "surgery", label: `Хирургия (${counts.surgery})` },
              ] as const
            ).map((t) => {
              const active = dir === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onDir(t.id)}
                  className={[
                    "px-4 py-2 rounded-full border text-sm font-medium transition",
                    active
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-emerald-200 hover:bg-emerald-50",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Сортировка</span>
            <select
              value={sort}
              onChange={(e) => onSort(e.target.value as BlogSort)}
              className="h-10 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              aria-label="Сортировка статей"
            >
              <option value="default">По умолчанию</option>
              <option value="title_asc">По названию (А–Я)</option>
              <option value="title_desc">По названию (Я–А)</option>
            </select>
          </div>
        </div>

        {dir !== "all" && (
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
            <p className="text-sm text-gray-600">
              Раздел: <span className="font-semibold text-gray-900">{directionLabel(dir)}</span>
            </p>
            <Link href={`/blog/topics/${dir}`} className="text-sm font-semibold text-emerald-700 hover:underline">
              Открыть тематический раздел →
            </Link>
          </div>
        )}

        <div id="statyi" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scroll-mt-24">
          {filtered.map((a) => (
            <Link
              key={a.url}
              href={a.url}
              className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-teal-200 hover:shadow-md overflow-hidden transition"
            >
              {a.direction === "dermatology" ||
              a.direction === "cardiology" ||
              a.direction === "mammology" ||
              a.direction === "neurology" ||
              a.direction === "otolaryngology" ||
              a.direction === "ophthalmology" ||
              a.direction === "pediatrics" ||
              a.direction === "proctology" ? (
                <div
                  className={[
                    "relative px-5 pt-5 pb-4 border-b border-gray-100",
                    a.direction === "dermatology"
                      ? "bg-gradient-to-br from-emerald-50 via-white to-white"
                      : a.direction === "cardiology"
                        ? "bg-gradient-to-br from-rose-50 via-white to-white"
                        : a.direction === "mammology"
                          ? "bg-gradient-to-br from-pink-50 via-white to-white"
                          : a.direction === "neurology"
                            ? "bg-gradient-to-br from-sky-50 via-white to-white"
                            : a.direction === "otolaryngology"
                              ? "bg-gradient-to-br from-amber-50 via-white to-white"
                          : a.direction === "ophthalmology"
                            ? "bg-gradient-to-br from-violet-50 via-white to-white"
                            : a.direction === "pediatrics"
                              ? "bg-gradient-to-br from-lime-50 via-white to-white"
                              : "bg-gradient-to-br from-stone-50 via-white to-white",
                  ].join(" ")}
                >
                  <div
                    aria-hidden
                    className={[
                      "pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl",
                      a.direction === "dermatology"
                        ? "bg-emerald-200/30"
                        : a.direction === "cardiology"
                          ? "bg-rose-200/35"
                          : a.direction === "mammology"
                            ? "bg-pink-200/35"
                            : a.direction === "neurology"
                              ? "bg-sky-200/35"
                              : a.direction === "otolaryngology"
                                ? "bg-amber-200/35"
                          : a.direction === "ophthalmology"
                            ? "bg-violet-200/35"
                            : a.direction === "pediatrics"
                              ? "bg-lime-200/35"
                              : "bg-stone-200/35",
                    ].join(" ")}
                  />
                  <div
                    aria-hidden
                    className={[
                      "pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full blur-2xl",
                      a.direction === "dermatology"
                        ? "bg-teal-200/25"
                        : a.direction === "cardiology"
                          ? "bg-orange-200/25"
                          : a.direction === "mammology"
                            ? "bg-fuchsia-200/25"
                            : a.direction === "neurology"
                              ? "bg-indigo-200/25"
                              : a.direction === "otolaryngology"
                                ? "bg-yellow-200/25"
                          : a.direction === "ophthalmology"
                            ? "bg-indigo-200/25"
                            : a.direction === "pediatrics"
                              ? "bg-emerald-200/25"
                              : "bg-stone-200/25",
                    ].join(" ")}
                  />
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-black/5 shadow-sm flex items-center justify-center transition group-hover:shadow-md">
                        {a.direction === "dermatology" ? (
                          <svg className="h-5 w-5 text-emerald-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M12 2c3.8 2.9 6.6 6.6 6.6 10.3A6.6 6.6 0 1 1 5.4 12.3C5.4 8.6 8.2 4.9 12 2Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path d="M9.2 13.1c1.4.7 3.1.7 4.5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        ) : a.direction === "cardiology" ? (
                          <svg className="h-5 w-5 text-rose-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M12 21s-7-4.6-9.2-9.1C1.3 8.5 3.4 5.5 6.6 5.5c1.8 0 3.3.9 4.4 2.3 1.1-1.4 2.6-2.3 4.4-2.3 3.2 0 5.3 3 3.8 6.4C19 16.4 12 21 12 21Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path d="M7.6 12h2.6l1.2-2.4 1.6 5 1.1-2.6H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : a.direction === "mammology" ? (
                          <svg className="h-5 w-5 text-pink-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M12 4.2c1.6-1.7 3.8-2.7 6-2 2.1.7 3.4 2.5 3.4 4.8 0 4.8-4.4 8-9.4 12.2C7 14.9 2.6 11.8 2.6 7c0-2.3 1.3-4.1 3.4-4.8 2.2-.7 4.4.3 6 2Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path d="M8.6 10.4c.9 1.1 2.1 1.6 3.4 1.6 1.3 0 2.5-.5 3.4-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        ) : a.direction === "neurology" ? (
                          <svg className="h-5 w-5 text-sky-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M8.5 7.3c-1.8 0-3.3 1.5-3.3 3.3v2.6c0 1.8 1.5 3.3 3.3 3.3h.9c.6 1.4 1.9 2.3 3.4 2.3 2.1 0 3.8-1.7 3.8-3.8v-1.2h.7c1.8 0 3.3-1.5 3.3-3.3v-1.9c0-1.8-1.5-3.3-3.3-3.3h-1.1C15.7 5.1 14.4 4 12.7 4c-1.6 0-3 1.1-3.4 2.6H8.5Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.1 10.2c.6-.7 1.5-1.1 2.4-1.1 1 0 1.8.4 2.4 1.1"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : a.direction === "otolaryngology" ? (
                          <svg className="h-5 w-5 text-amber-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M12 3c3 2.2 5.2 5 5.2 7.9 0 2.9-2.3 5.1-5.2 5.1S6.8 13.8 6.8 10.9C6.8 8 9 5.2 12 3Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path d="M9.8 20.5c.6-1.6 1.4-2.5 2.2-2.5s1.6.9 2.2 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <path d="M8.5 17.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        ) : a.direction === "ophthalmology" ? (
                          <svg className="h-5 w-5 text-violet-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M12 6.2c4.2 0 7.8 3.1 9.2 5.8-1.4 2.7-5 5.8-9.2 5.8S4.2 14.7 2.8 12C4.2 9.3 7.8 6.2 12 6.2Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : a.direction === "pediatrics" ? (
                          <svg className="h-5 w-5 text-lime-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M12 3.2c3.3 0 6 2.7 6 6v.8c0 3.3-2.7 6-6 6s-6-2.7-6-6v-.8c0-3.3 2.7-6 6-6Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path d="M9.2 10.6c.6-.7 1.6-1.1 2.8-1.1s2.2.4 2.8 1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <path d="M9.4 20.6c.7-1.8 1.6-2.6 2.6-2.6s1.9.8 2.6 2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-stone-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M8.2 6.3A3.8 3.8 0 0 1 12 3.2a3.8 3.8 0 0 1 3.8 3.1"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                            <path
                              d="M6.2 13.2c0-2.5 2.6-4.5 5.8-4.5s5.8 2 5.8 4.5v.6c0 2.5-2.6 4.5-5.8 4.5s-5.8-2-5.8-4.5v-.6Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <path d="M9.2 13.4h5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={[
                            "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase",
                            a.direction === "dermatology"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-100"
                              : a.direction === "cardiology"
                                ? "bg-rose-50 text-rose-800 border-rose-100"
                                : a.direction === "mammology"
                                  ? "bg-pink-50 text-pink-800 border-pink-100"
                                  : a.direction === "neurology"
                                    ? "bg-sky-50 text-sky-800 border-sky-100"
                                    : a.direction === "otolaryngology"
                                      ? "bg-amber-50 text-amber-900 border-amber-100"
                              : a.direction === "ophthalmology"
                                ? "bg-violet-50 text-violet-900 border-violet-100"
                                : a.direction === "pediatrics"
                                  ? "bg-lime-50 text-lime-900 border-lime-100"
                                  : "bg-stone-50 text-stone-900 border-stone-200",
                          ].join(" ")}
                        >
                          {a.direction === "dermatology"
                            ? "Дерматология"
                            : a.direction === "cardiology"
                              ? "Кардиология"
                              : a.direction === "mammology"
                                ? "Маммология"
                                : a.direction === "neurology"
                                  ? "Неврология"
                                  : a.direction === "otolaryngology"
                                    ? "ЛОР"
                                    : a.direction === "ophthalmology"
                                      ? "Офтальмология"
                                      : a.direction === "pediatrics"
                                        ? "Педиатрия"
                                        : "Проктология"}
                        </span>
                        <span
                          className={[
                            "h-1 w-1 rounded-full",
                            a.direction === "dermatology"
                              ? "bg-emerald-300/80"
                              : a.direction === "cardiology"
                                ? "bg-rose-300/80"
                                : a.direction === "mammology"
                                  ? "bg-pink-300/80"
                                  : a.direction === "neurology"
                                    ? "bg-sky-300/80"
                                    : a.direction === "otolaryngology"
                                      ? "bg-amber-300/80"
                                : a.direction === "ophthalmology"
                                  ? "bg-violet-300/80"
                                  : a.direction === "pediatrics"
                                    ? "bg-lime-300/80"
                                    : "bg-stone-400/80",
                          ].join(" ")}
                          aria-hidden
                        />
                        <span className="text-[11px] text-gray-500">Полезный материал</span>
                      </div>
                      <h2
                        className={[
                          "font-bold text-gray-900 text-sm uppercase tracking-wide leading-snug line-clamp-2 transition",
                          a.direction === "dermatology"
                            ? "group-hover:text-emerald-800"
                            : a.direction === "cardiology"
                              ? "group-hover:text-rose-800"
                              : a.direction === "mammology"
                                ? "group-hover:text-pink-800"
                                : a.direction === "neurology"
                                  ? "group-hover:text-sky-800"
                                  : a.direction === "otolaryngology"
                                    ? "group-hover:text-amber-800"
                                    : a.direction === "ophthalmology"
                                      ? "group-hover:text-violet-800"
                                      : a.direction === "pediatrics"
                                        ? "group-hover:text-lime-800"
                                        : "group-hover:text-stone-800",
                        ].join(" ")}
                      >
                        {a.title}
                      </h2>
                    </div>
                    <div
                      className={[
                        "shrink-0 pt-1 text-gray-400 transition",
                        a.direction === "dermatology"
                          ? "group-hover:text-emerald-600"
                          : a.direction === "cardiology"
                            ? "group-hover:text-rose-600"
                            : a.direction === "mammology"
                              ? "group-hover:text-pink-600"
                              : a.direction === "neurology"
                                ? "group-hover:text-sky-600"
                                : a.direction === "otolaryngology"
                                  ? "group-hover:text-amber-600"
                            : a.direction === "ophthalmology"
                              ? "group-hover:text-violet-600"
                              : a.direction === "pediatrics"
                                ? "group-hover:text-lime-600"
                                : "group-hover:text-stone-600",
                      ].join(" ")}
                      aria-hidden
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-5">
                {a.direction === "dermatology" ||
                a.direction === "cardiology" ||
                a.direction === "mammology" ||
                a.direction === "neurology" ||
                a.direction === "otolaryngology" ||
                a.direction === "ophthalmology" ||
                a.direction === "pediatrics" ||
                a.direction === "proctology" ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{a.desc}</p>
                    <span
                      className={[
                        "w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-sm rounded-xl transition border",
                        a.direction === "dermatology"
                          ? "border-emerald-200 text-emerald-900 bg-emerald-50/60 hover:bg-emerald-100"
                          : a.direction === "cardiology"
                            ? "border-rose-200 text-rose-900 bg-rose-50/60 hover:bg-rose-100"
                            : a.direction === "mammology"
                              ? "border-pink-200 text-pink-900 bg-pink-50/60 hover:bg-pink-100"
                              : a.direction === "neurology"
                                ? "border-sky-200 text-sky-900 bg-sky-50/60 hover:bg-sky-100"
                                : a.direction === "otolaryngology"
                                  ? "border-amber-200 text-amber-900 bg-amber-50/60 hover:bg-amber-100"
                            : a.direction === "ophthalmology"
                              ? "border-violet-200 text-violet-900 bg-violet-50/60 hover:bg-violet-100"
                              : a.direction === "pediatrics"
                                ? "border-lime-200 text-lime-900 bg-lime-50/60 hover:bg-lime-100"
                                : "border-stone-200 text-stone-900 bg-stone-50/60 hover:bg-stone-100",
                      ].join(" ")}
                    >
                      Читать подробнее
                      <span className="transition group-hover:translate-x-0.5" aria-hidden>
                        →
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <div className="mb-2">
                      <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 text-[11px] font-semibold">
                        {directionLabel(a.direction)}
                      </span>
                    </div>
                    <h2 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide leading-snug line-clamp-2">{a.title}</h2>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">{a.desc}</p>
                    <span className="w-full py-2.5 px-4 text-center border-2 border-teal-700 text-teal-700 font-medium text-sm rounded-lg hover:bg-teal-50 transition">
                      Читать подробнее
                    </span>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <p className="text-gray-700 mb-0">Пока нет статей по выбранному фильтру.</p>
          </div>
        )}
      </div>
    </section>
  );
}
