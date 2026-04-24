"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type BlogDirection = "gynecology" | "allergology" | "gastroenterology";
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
  return "Гастроэнтерология";
}

function sanitizeDirection(v: string | null): BlogDirection | "all" {
  if (v === "gynecology" || v === "allergology" || v === "gastroenterology") return v;
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
    return { all: posts.length, gynecology, allergology, gastroenterology };
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
          <p className="text-sm text-gray-500 mb-4">
            Раздел: <span className="font-medium text-gray-800">{directionLabel(dir)}</span>
          </p>
        )}

        <div id="statyi" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scroll-mt-24">
          {filtered.map((a) => (
            <Link
              key={a.url}
              href={a.url}
              className="group flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:border-teal-200 hover:shadow-md overflow-hidden transition"
            >
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="mb-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 text-[11px] font-semibold">
                    {directionLabel(a.direction)}
                  </span>
                </div>
                <h2 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide leading-snug line-clamp-2">
                  {a.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">{a.desc}</p>
                <span className="w-full py-2.5 px-4 text-center border-2 border-teal-700 text-teal-700 font-medium text-sm rounded-lg hover:bg-teal-50 transition">
                  Читать подробнее
                </span>
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

