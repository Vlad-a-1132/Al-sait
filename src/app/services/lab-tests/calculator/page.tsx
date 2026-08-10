"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type ServiceItem = { code: string; name: string; price: number };
type LabServicesData = Record<string, ServiceItem[]>;
type ListedItem = ServiceItem & { category: string; key: string };

function money(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

export default function LabCalculatorPage() {
  const [data, setData] = useState<LabServicesData>({});
  const [activeCategory, setActiveCategory] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Record<string, ListedItem>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [basketOpen, setBasketOpen] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/data/lab-services.json")
      .then((response) => {
        if (!response.ok) throw new Error("Не удалось загрузить каталог");
        return response.json();
      })
      .then((result: LabServicesData) => {
        setData(result);
        setActiveCategory(Object.keys(result)[0] ?? "");
      })
      .catch(() => setError("Каталог временно не загрузился. Обновите страницу или позвоните в клинику."))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => Object.keys(data), [data]);
  const allItems = useMemo<ListedItem[]>(() => Object.entries(data).flatMap(([category, items]) => items.map((item) => ({ ...item, category, key: `${item.code}|${item.name}` }))), [data]);
  const visibleItems = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("ru-RU");
    if (normalized) return allItems.filter((item) => `${item.code} ${item.name}`.toLocaleLowerCase("ru-RU").includes(normalized));
    return allItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, allItems, query]);
  const selectedItems = useMemo(() => Object.values(selected), [selected]);
  const total = useMemo(() => selectedItems.reduce((sum, item) => sum + item.price, 0), [selectedItems]);

  function toggle(item: ListedItem) {
    setSelected((current) => {
      const next = { ...current };
      if (next[item.key]) delete next[item.key];
      else next[item.key] = item;
      return next;
    });
  }

  async function downloadPdf() {
    if (!exportRef.current || !selectedItems.length) return;
    const canvas = await html2canvas(exportRef.current, { scale: 2, backgroundColor: "#ffffff", logging: false });
    const image = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = 190;
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(image, "PNG", 10, 10, width, height);
    pdf.save("spisok-analizov-altamed.pdf");
  }

  const Basket = ({ compact = false }: { compact?: boolean }) => (
    <div className={compact ? "" : "sticky top-24 rounded-2xl border border-emerald-100 bg-white p-5 shadow-lg"}>
      <div className="flex items-start justify-between gap-3">
        <div><p className="text-sm font-semibold text-emerald-700">Ваш список</p><h2 className="text-xl font-bold text-gray-950">Выбрано: {selectedItems.length}</h2></div>
        {selectedItems.length > 0 && <button type="button" onClick={() => setSelected({})} className="text-sm font-semibold text-gray-500 hover:text-red-600">Очистить</button>}
      </div>
      {selectedItems.length === 0 ? <div className="mt-5 rounded-xl bg-gray-50 p-5 text-sm leading-relaxed text-gray-600">Добавляйте исследования кнопкой «В список». Здесь появится готовая подборка.</div> : <>
        <div className="mt-4 max-h-[360px] space-y-3 overflow-y-auto pr-1">
          {selectedItems.map((item) => <div key={item.key} className="rounded-xl border border-gray-100 p-3"><div className="flex gap-3"><div className="min-w-0 flex-1"><p className="text-xs text-gray-500">{item.code || "Без кода"}</p><p className="mt-1 text-sm font-medium leading-snug text-gray-900">{item.name}</p><p className="mt-2 font-bold text-emerald-700">{money(item.price)}</p></div><button type="button" onClick={() => toggle(item)} aria-label={`Удалить ${item.name}`} className="h-8 w-8 shrink-0 rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-600">×</button></div></div>)}
        </div>
        <div className="mt-5 border-t border-gray-100 pt-4"><div className="flex items-center justify-between"><span className="font-medium text-gray-600">Предварительно</span><strong className="text-2xl text-gray-950">{money(total)}</strong></div><p className="mt-2 text-xs leading-relaxed text-gray-500">Стоимость в калькуляторе справочная. Уточните итог при оформлении.</p><button type="button" onClick={() => setBasketOpen(true)} className="mt-4 w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">Открыть список</button></div>
      </>}
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-24 text-gray-950 lg:pb-12">
      <div className="border-b border-gray-100 bg-white"><nav className="mx-auto max-w-[1500px] px-4 py-4 text-sm text-gray-600 sm:px-6" aria-label="Хлебные крошки"><Link href="/" className="hover:text-emerald-700">Главная</Link><span className="mx-2">/</span><Link href="/services/lab-tests" className="hover:text-emerald-700">Анализы</Link><span className="mx-2">/</span><span className="font-medium text-gray-900">Калькулятор</span></nav></div>

      <section className="border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
        <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 md:py-14"><p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Каталог лабораторных исследований</p><h1 className="mt-3 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">Большой калькулятор анализов</h1><p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-700">Ищите по названию или коду, просматривайте категории и собирайте все назначенные исследования в один список.</p><div className="mt-7 relative max-w-4xl"><svg className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Например: общий анализ крови, ТТГ или код исследования" className="h-16 w-full rounded-2xl border border-gray-200 bg-white pl-14 pr-12 text-base shadow-lg outline-none transition placeholder:text-gray-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />{query && <button type="button" onClick={() => setQuery("")} className="absolute right-4 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-gray-100 text-xl text-gray-500">×</button>}</div></div>
      </section>

      <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6">
        <div className="mb-6 overflow-x-auto pb-2"><div className="flex min-w-max gap-2">{categories.map((category) => <button key={category} type="button" onClick={() => { setActiveCategory(category); setQuery(""); }} className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${activeCategory === category && !query ? "border-emerald-600 bg-emerald-600 text-white" : "border-gray-200 bg-white text-gray-700 hover:border-emerald-300 hover:bg-emerald-50"}`}>{category}<span className="ml-2 opacity-70">{data[category]?.length ?? 0}</span></button>)}</div></div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-semibold text-emerald-700">{query ? "Результаты поиска" : "Категория"}</p><h2 className="mt-1 text-2xl font-bold">{query ? `Найдено: ${visibleItems.length}` : activeCategory || "Исследования"}</h2></div><p className="text-sm text-gray-500">Всего в каталоге: {allItems.length}</p></div>
            {loading ? <div className="grid gap-3"><div className="h-28 animate-pulse rounded-2xl bg-white"/><div className="h-28 animate-pulse rounded-2xl bg-white"/><div className="h-28 animate-pulse rounded-2xl bg-white"/></div> : error ? <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-red-800">{error}</div> : visibleItems.length === 0 ? <div className="rounded-2xl bg-white p-10 text-center shadow-sm"><h3 className="text-xl font-bold">Ничего не найдено</h3><p className="mt-2 text-gray-600">Проверьте написание, попробуйте часть названия или выберите категорию.</p></div> : <div className="space-y-3">{visibleItems.map((item) => { const checked = Boolean(selected[item.key]); return <article key={item.key} className={`rounded-2xl border bg-white p-5 transition ${checked ? "border-emerald-400 ring-2 ring-emerald-100" : "border-gray-100 hover:border-emerald-200 hover:shadow-sm"}`}><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><div className="min-w-0 flex-1"><div className="flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-600">{item.code || "Без кода"}</span>{query && <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">{item.category}</span>}</div><h3 className="mt-3 font-semibold leading-snug text-gray-950">{item.name}</h3></div><div className="flex items-center justify-between gap-4 sm:justify-end"><strong className="whitespace-nowrap text-lg">{money(item.price)}</strong><button type="button" onClick={() => toggle(item)} className={`min-w-[116px] rounded-xl px-4 py-3 text-sm font-bold transition ${checked ? "bg-emerald-50 text-emerald-800 hover:bg-red-50 hover:text-red-700" : "bg-emerald-600 text-white hover:bg-emerald-700"}`}>{checked ? "Добавлено ✓" : "В список"}</button></div></div></article>; })}</div>}
          </section>
          <aside className="hidden lg:block"><Basket /></aside>
        </div>
      </div>

      {selectedItems.length > 0 && <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white p-3 shadow-[0_-8px_30px_rgba(0,0,0,.12)] lg:hidden"><button type="button" onClick={() => setBasketOpen(true)} className="flex w-full items-center justify-between rounded-xl bg-emerald-600 px-5 py-3.5 font-bold text-white"><span>Выбрано: {selectedItems.length}</span><span>{money(total)} →</span></button></div>}

      {basketOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-0 sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-label="Выбранные анализы"><div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"><div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4"><div><p className="text-sm font-semibold text-emerald-700">Готовый список</p><h2 className="text-2xl font-bold">Выбранные анализы</h2></div><button type="button" onClick={() => setBasketOpen(false)} className="h-11 w-11 rounded-full bg-gray-100 text-2xl text-gray-600">×</button></div><div ref={exportRef} className="bg-white p-5 sm:p-7"><div className="mb-5 hidden border-b-2 border-emerald-600 pb-4 print:block"><h2 className="text-2xl font-bold text-emerald-700">Альтамед-С</h2><p className="text-sm text-gray-600">Список выбранных лабораторных исследований</p></div><div className="space-y-3">{selectedItems.map((item, index) => <div key={item.key} className="grid grid-cols-[28px_1fr_auto] gap-3 rounded-xl border border-gray-100 p-4"><span className="text-sm font-bold text-gray-400">{index + 1}</span><div><p className="text-xs text-gray-500">{item.code || "Без кода"} · {item.category}</p><p className="mt-1 text-sm font-medium leading-snug">{item.name}</p></div><strong className="whitespace-nowrap text-sm">{money(item.price)}</strong></div>)}</div><div className="mt-5 flex items-center justify-between border-t-2 border-gray-900 pt-4"><span className="font-bold">Предварительная стоимость</span><strong className="text-2xl">{money(total)}</strong></div><p className="mt-3 text-xs leading-relaxed text-gray-500">Список сформирован на сайте Альтамед-С. Стоимость справочная и уточняется при оформлении. Перечень не является медицинским назначением.</p></div><div className="grid gap-3 border-t border-gray-100 p-5 sm:grid-cols-3"><button type="button" onClick={downloadPdf} className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">Скачать PDF</button><a href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-emerald-600 px-5 py-3 text-center font-semibold text-emerald-800">Записаться</a><button type="button" onClick={() => setSelected({})} className="rounded-xl bg-gray-100 px-5 py-3 font-semibold text-gray-700 hover:bg-red-50 hover:text-red-700">Очистить список</button></div></div></div>}
    </main>
  );
}
