"use client";

import { useEffect } from "react";

const CHUNK_ERROR_PATTERN =
  /ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module|Failed to load module script|CSS_CHUNK_LOAD_FAILED/i;

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (!CHUNK_ERROR_PATTERN.test(`${error.name} ${error.message}`)) return;

    const key = `altamed-global-reload:${window.location.pathname}`;
    const lastReload = Number(window.sessionStorage.getItem(key) ?? 0);
    if (Date.now() - lastReload > 60_000) {
      window.sessionStorage.setItem(key, String(Date.now()));
      window.location.reload();
    }
  }, [error]);

  return (
    <html lang="ru">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f7faf9", color: "#0f172a" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
          <section style={{ width: "100%", maxWidth: 560, borderRadius: 28, background: "white", padding: 36, textAlign: "center", boxShadow: "0 20px 60px rgba(15, 23, 42, .08)" }}>
            <div style={{ color: "#047857", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", fontSize: 13 }}>Альтамед-С</div>
            <h1 style={{ margin: "14px 0 0", fontSize: 30 }}>Не удалось загрузить страницу</h1>
            <p style={{ margin: "16px 0 0", color: "#475569", lineHeight: 1.65 }}>Повторите попытку или обновите страницу.</p>
            <div style={{ marginTop: 26, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <button onClick={reset} style={{ border: 0, borderRadius: 12, background: "#059669", color: "white", padding: "13px 22px", fontWeight: 700, cursor: "pointer" }}>Повторить</button>
              <button onClick={() => window.location.reload()} style={{ border: "1px solid #059669", borderRadius: 12, background: "white", color: "#047857", padding: "13px 22px", fontWeight: 700, cursor: "pointer" }}>Обновить</button>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
