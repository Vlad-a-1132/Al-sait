"use client";

import { useEffect } from "react";

const CHUNK_ERROR_PATTERN =
  /ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module|Failed to load module script|CSS_CHUNK_LOAD_FAILED/i;

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (!CHUNK_ERROR_PATTERN.test(`${error.name} ${error.message}`)) return;

    const key = `altamed-chunk-reload:${window.location.pathname}`;
    const lastReload = Number(window.sessionStorage.getItem(key) ?? 0);
    if (Date.now() - lastReload > 60_000) {
      window.sessionStorage.setItem(key, String(Date.now()));
      window.location.reload();
    }
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-xl rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">Альтамед-С</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-950">Страница не успела загрузиться</h1>
        <p className="mt-4 leading-7 text-gray-600">
          Обновите страницу или повторите загрузку. Введённые в формы данные не отправляются автоматически.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700">
            Повторить
          </button>
          <button onClick={() => window.location.reload()} className="rounded-xl border border-emerald-600 bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
            Обновить страницу
          </button>
        </div>
      </div>
    </main>
  );
}
