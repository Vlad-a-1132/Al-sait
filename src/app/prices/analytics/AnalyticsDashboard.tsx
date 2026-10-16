'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BROWSERS, GOAL_LABELS, moscowDay, RETENTION_DAYS } from '@/lib/analytics/shared';
import type { AnalyticsReport, TrafficRow } from '@/lib/analytics/shared';
import { ClickTable, ErrorTable, FunnelTable } from './AnalyticsTables';

const number = (value: number) => new Intl.NumberFormat('ru-RU').format(value);
const percent = (value: number) => `${new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2 }).format(value)}%`;
const dateLabel = (value: string) => new Date(`${value}T12:00:00+03:00`).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', timeZone: 'Europe/Moscow' });
const timeLabel = (value: string) => new Date(value).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
const TABS = { sources: 'Источники', pages: 'Страницы', clicks: 'Клики', forms: 'Формы', goals: 'Цели', campaigns: 'UTM-кампании', devices: 'Устройства', browsers: 'Браузеры', landings: 'Страницы входа', errors: 'Ошибки форм' } as const;
type Tab = keyof typeof TABS;
type Metric = 'views' | 'visits' | 'visitors' | 'leads';
const METRICS: Record<Metric, string> = { views: 'Просмотры', visits: 'Визиты', visitors: 'Посетители', leads: 'Заявки' };
const DAY = 86400000;

function Empty({ text = 'За этот период событий пока нет.' }: { text?: string }) {
  return <div className="px-6 py-14 text-center text-sm text-slate-500">{text}</div>;
}

function TrafficTable({ rows, pages = false }: { rows: TrafficRow[]; pages?: boolean }) {
  if (!rows.length) return <Empty />;
  return <div className="overflow-x-auto"><table className="w-full min-w-[660px] text-left text-sm">
    <thead className="bg-slate-50 text-xs text-slate-500"><tr><th className="px-5 py-3 font-medium">{pages ? 'Страница' : 'Название'}</th>{['Визиты', 'Посетители', 'Просмотры', 'Заявки', 'Конверсия в заявку'].map(label => <th key={label} className="px-4 py-3 text-right font-medium">{label}</th>)}</tr></thead>
    <tbody className="divide-y divide-slate-100">{rows.map(row => <tr key={row.key} className="hover:bg-slate-50/80">
      <td className="max-w-sm px-5 py-4"><div className="break-words font-medium text-slate-800">{pages ? <a href={encodeURI(row.key)} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline">{row.label}</a> : row.label}</div>{row.detail && <div className="mt-1 text-xs text-slate-500">{row.detail}</div>}</td>
      {[row.visits, row.visitors, row.views, row.leads].map((value, index) => <td key={index} className="px-4 py-4 text-right tabular-nums text-slate-700">{number(value)}</td>)}<td className="px-4 py-4 text-right tabular-nums font-medium text-emerald-800">{percent(row.leadConversionRate)}</td>
    </tr>)}</tbody>
  </table></div>;
}

function TrafficChart({ rows, metric }: { rows: TrafficRow[]; metric: Metric }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [width, setWidth] = useState(1000);
  const svg = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!svg.current) return;
    const observer = new ResizeObserver(entries => setWidth(Math.max(260, Math.round(entries[0].contentRect.width))));
    observer.observe(svg.current);
    return () => observer.disconnect();
  }, []);
  const height = 230, left = 48, right = 22, top = 20, bottom = 30;
  const values = rows.map(row => row[metric]);
  const max = Math.max(4, ...values);
  const chartWidth = width - left - right;
  const chartHeight = height - top - bottom;
  const points = values.map((value, index) => [left + (values.length === 1 ? chartWidth / 2 : index / (values.length - 1) * chartWidth), top + chartHeight * (1 - value / max)]);
  const line = points.map(([x, y], index) => `${index ? 'L' : 'M'}${x},${y}`).join(' ');
  const area = points.length ? `${line} L${points[points.length - 1][0]},${top + chartHeight} L${points[0][0]},${top + chartHeight} Z` : '';
  const active = hovered !== null ? rows[Math.min(hovered, rows.length - 1)] : null;
  const dates = Array.from(new Set(width < 600 ? [0, Math.floor((rows.length - 1) / 2), rows.length - 1] : [0, Math.floor((rows.length - 1) / 4), Math.floor((rows.length - 1) / 2), Math.floor((rows.length - 1) * 3 / 4), rows.length - 1]));
  return <>
    <div className="mb-2 flex h-7 items-center gap-3 text-sm"><span className="font-semibold text-slate-900">{active ? `${dateLabel(active.key)}: ${number(active[metric])}` : METRICS[metric]}</span><span className="text-xs text-slate-400">{active ? METRICS[metric].toLowerCase() : 'Наведите на график для подробностей'}</span></div>
    <svg ref={svg} viewBox={`0 0 ${width} ${height}`} className="h-[230px] w-full" role="img" aria-label={`${METRICS[metric]} по дням. Таблица данных под графиком.`} onPointerMove={event => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width * width;
      setHovered(Math.max(0, Math.min(rows.length - 1, Math.round((x - left) / chartWidth * (rows.length - 1)))));
    }} onPointerLeave={() => setHovered(null)}>
      <defs><linearGradient id="traffic-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.2" /><stop offset="100%" stopColor="#10b981" stopOpacity="0.01" /></linearGradient></defs>
      {[0, 1, 2, 3, 4].map(index => { const y = top + chartHeight * index / 4; return <g key={index}><line x1={left} x2={width - right} y1={y} y2={y} stroke="#e2e8f0" strokeDasharray="4 5" /><text x={left - 10} y={y + 4} textAnchor="end" fill="#94a3b8" fontSize="11">{number(Math.round(max * (1 - index / 4)))}</text></g>; })}
      <path d={area} fill="url(#traffic-fill)" /><path d={line} fill="none" stroke="#059669" strokeWidth="2.5" strokeLinejoin="round" />
      {points.map(([x, y], index) => <circle key={rows[index].key} cx={x} cy={y} r={hovered === index ? 5 : rows.length < 15 ? 3 : 1.5} fill="#059669"><title>{dateLabel(rows[index].key)}: {number(values[index])}</title></circle>)}
      {hovered !== null && points[hovered] && <line x1={points[hovered][0]} x2={points[hovered][0]} y1={top} y2={top + chartHeight} stroke="#059669" strokeDasharray="3 4" opacity="0.3" />}
      {dates.map(index => rows[index] && <text key={index} x={points[index][0]} y={height - 5} textAnchor="middle" fill="#94a3b8" fontSize="11">{dateLabel(rows[index].key)}</text>)}
    </svg>
  </>;
}

export default function AnalyticsDashboard() {
  const today = moscowDay();
  const initialFrom = moscowDay(new Date(Date.now() - 6 * DAY));
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(today);
  const [range, setRange] = useState({ from: initialFrom, to: today });
  const [browser, setBrowser] = useState('');
  const [device, setDevice] = useState('');
  const [report, setReport] = useState<AnalyticsReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tab, setTab] = useState<Tab>('sources');
  const [metric, setMetric] = useState<Metric>('views');
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [revision, setRevision] = useState(0);
  const pending = useRef<AbortController | null>(null);
  const refresh = useCallback(() => setRevision(current => current + 1), []);

  useEffect(() => {
    const controller = new AbortController();
    pending.current?.abort(); pending.current = controller;
    setLoading(true); setError('');
    const params = new URLSearchParams({ ...range, ...(browser ? { browser } : {}), ...(device ? { device } : {}) });
    const endpoint = new URL(`/prices/analytics/data?${params}`, window.location.origin).href;
    void fetch(endpoint, { credentials: 'same-origin', cache: 'no-store', signal: controller.signal })
      .then(async response => {
        if (response.status === 401) throw new Error('Сеанс входа завершён. Обновите страницу и введите логин и пароль от /prices.');
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Не удалось загрузить статистику.');
        if (!controller.signal.aborted) setReport(data as AnalyticsReport);
      })
      .catch(reason => { if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : 'Ошибка загрузки.'); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [range, revision, browser, device]);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => { if (document.visibilityState === 'visible') refresh(); }, 60000);
    return () => clearInterval(interval);
  }, [autoRefresh, refresh]);

  function preset(days: number, yesterday = false) {
    const end = yesterday ? moscowDay(new Date(Date.now() - DAY)) : moscowDay();
    const start = moscowDay(new Date(Date.now() - (yesterday ? 1 : days - 1) * DAY));
    setFrom(start); setTo(end); setRange({ from: start, to: end });
  }

  const stats = report?.totals;
  const cards = stats ? [
    { label: 'Посетители', value: number(stats.visitors), note: 'Уникальные браузеры', accent: false },
    { label: 'Визиты', value: number(stats.visits), note: 'Перерыв между визитами — 30 мин', accent: false },
    { label: 'Просмотры', value: number(stats.views), note: 'Открытия страниц сайта', accent: false },
    { label: 'Конверсия в заявку', value: percent(stats.leadConversionRate), note: `${number(stats.leadVisits)} визитов с сохранённой заявкой`, accent: true },
    { label: 'Клики', value: number(stats.clicks), note: 'Ссылки и кнопки', accent: false },
    { label: 'Отправки форм', value: number(stats.submissions), note: 'Запросы на отправку заявки', accent: false },
    { label: 'Сохранённые заявки', value: number(stats.successfulForms), note: 'Подтверждено сервером', accent: false },
    { label: 'Интерес к обращению', value: percent(stats.intentConversionRate), note: `${number(stats.intentVisits)} визитов: телефон, мессенджер, запись`, accent: false },
  ] : [];
  const showingCurrentRange = report?.from === range.from && report?.to === range.to && (report?.filters.browser || '') === browser && (report?.filters.device || '') === device;
  const stale = !!report && !showingCurrentRange;
  const csvParams = new URLSearchParams({ from: report?.from || range.from, to: report?.to || range.to, browser: report?.filters.browser || '', device: report?.filters.device || '', format: 'csv' });

  return <div className="min-h-screen bg-[#f4f7f6] text-slate-800">
    <header className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-800 text-white" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8"><path d="M4 18V12m8 6V5m8 13V9" strokeLinecap="round" /></svg></div><div><div className="text-base font-bold tracking-tight text-slate-900">Альтамед-С</div><div className="text-xs text-slate-500">Статистика сайта</div></div></div>
        <div className="flex items-center gap-5 text-sm"><span className="hidden items-center gap-1.5 text-xs text-slate-500 sm:inline-flex"><svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor"><rect x="4" y="8" width="12" height="9" rx="2" /><path d="M7 8V5a3 3 0 016 0v3" /></svg>Закрытый раздел</span><Link href="/prices" className="font-medium text-emerald-800 hover:underline">← К управлению сайтом</Link><a href="/" className="text-slate-500 hover:text-emerald-800">На сайт ↗</a></div>
      </div>
    </header>

    <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div><h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Посещения и обращения</h1><p className="mt-2 text-sm text-slate-500">Как находят сайт, какие страницы смотрят и что приводит к обращению.</p></div>
        <div className="flex items-center gap-2"><button type="button" onClick={refresh} disabled={loading} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium hover:bg-slate-50 disabled:opacity-50">{loading ? 'Загрузка…' : 'Обновить'}</button>{report && <a href={`/prices/analytics/data?${csvParams}`} className="rounded-lg bg-emerald-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-900">Скачать CSV</a>}</div>
      </div>

      <section aria-label="Период отчёта" className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1">{[{ label: 'Сегодня', days: 1 }, { label: 'Вчера', days: 1, yesterday: true }, { label: '7 дней', days: 7 }, { label: '30 дней', days: 30 }, { label: '90 дней', days: 90 }].map(item => <button key={item.label} type="button" onClick={() => preset(item.days, item.yesterday)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-800">{item.label}</button>)}</div>
          <form className="flex flex-wrap items-end gap-2" onSubmit={event => { event.preventDefault(); setRange({ from, to }); }}>
            <label className="text-xs text-slate-500">С<input type="date" aria-label="Начало периода" value={from} min={moscowDay(new Date(Date.now() - RETENTION_DAYS * DAY))} max={to || today} required onChange={event => setFrom(event.target.value)} className="mt-1 block rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-800" /></label>
            <label className="text-xs text-slate-500">По<input type="date" aria-label="Окончание периода" value={to} min={from} max={today} required onChange={event => setTo(event.target.value)} className="mt-1 block rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-800" /></label>
            <button type="submit" className="rounded-lg bg-slate-100 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-200">Показать</button>
          </form>
        </div>
        <div className="mt-4 flex flex-wrap items-end gap-4 border-t border-slate-100 pt-4">
          <label className="text-xs text-slate-500">Браузер<select aria-label="Фильтр по браузеру" value={browser} onChange={event => setBrowser(event.target.value)} className="mt-1 block min-w-[160px] rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800"><option value="">Все браузеры</option>{BROWSERS.map(name => <option key={name} value={name}>{name === 'Unknown' ? 'Неизвестен' : name}</option>)}</select></label>
          <label className="text-xs text-slate-500">Устройство<select aria-label="Фильтр по устройству" value={device} onChange={event => setDevice(event.target.value)} className="mt-1 block min-w-[160px] rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800"><option value="">Все устройства</option><option value="mobile">Телефоны</option><option value="desktop">Компьютеры</option><option value="tablet">Планшеты</option></select></label>
          {(browser || device) && <button type="button" onClick={() => { setBrowser(''); setDevice(''); }} className="py-2 text-xs text-emerald-800 underline">Сбросить фильтры</button>}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs text-slate-400"><span>Часовой пояс: Москва (UTC+3) · до 93 дней в одном отчёте</span><label className="flex cursor-pointer items-center gap-2 text-slate-500"><input type="checkbox" checked={autoRefresh} onChange={event => setAutoRefresh(event.target.checked)} className="accent-emerald-700" />Обновлять каждую минуту</label></div>
      </section>

      {error && <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800">{error}<button type="button" className="ml-3 underline" onClick={refresh}>Повторить</button>{report && <p className="mt-2">Ниже показан предыдущий успешно загруженный отчёт: {dateLabel(report.from)} — {dateLabel(report.to)}.</p>}</div>}
      {loading && !report && <div role="status" className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4"><span className="sr-only">Загружаем статистику</span>{Array.from({ length: 8 }, (_, index) => <div key={index} className="h-32 animate-pulse rounded-2xl bg-white" />)}</div>}

      {report && <div className={loading || stale ? 'opacity-60 transition-opacity' : 'transition-opacity'} aria-busy={loading}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500"><span className="font-medium">{dateLabel(report.from)} — {dateLabel(report.to)} {new Date(`${report.to}T12:00:00+03:00`).getFullYear()}</span><span>Обновлено {timeLabel(report.generatedAt)}</span></div>
        {report.warnings.map(warning => <p key={warning} className="mb-4 text-sm text-amber-800">{warning}</p>)}
        <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">{cards.map(card => <div key={card.label} className={`rounded-2xl border p-4 sm:p-5 ${card.accent ? 'border-emerald-800 bg-emerald-800 text-white' : 'border-slate-200/80 bg-white'}`}><div className={`text-xs font-medium sm:text-sm ${card.accent ? 'text-emerald-100' : 'text-slate-500'}`}>{card.label}</div><div className="my-2 text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">{card.value}</div><div className={`text-[11px] sm:text-xs ${card.accent ? 'text-emerald-100/80' : 'text-slate-400'}`}>{card.note}</div></div>)}</div>

        {!report.firstEventAt && <div className="mb-6 rounded-2xl border border-emerald-200 bg-white p-6"><h2 className="font-semibold text-emerald-900">Аналитика подключена, ждём первые посещения</h2><p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">После публикации события начнут появляться при открытии публичных страниц сайта обычными посетителями. История до подключения не загружается. Этот закрытый раздел в статистику не попадает.</p></div>}

        <section className="mb-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6" aria-label="Динамика по дням">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><h2 className="text-base font-semibold text-slate-900">Динамика по дням</h2><div className="flex flex-wrap gap-1 rounded-lg bg-slate-50 p-1">{(Object.keys(METRICS) as Metric[]).map(key => <button key={key} type="button" aria-pressed={metric === key} onClick={() => setMetric(key)} className={`rounded-md px-3 py-1.5 text-xs font-medium ${metric === key ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>{METRICS[key]}</button>)}</div></div>
          <TrafficChart rows={report.daily} metric={metric} />
          <details className="mt-5 border-t border-slate-100 pt-3"><summary className="cursor-pointer text-xs font-medium text-slate-500">Показать данные графика таблицей</summary><TrafficTable rows={report.daily.map(row => ({ ...row, label: dateLabel(row.key) }))} /></details>
        </section>

        <section className="mb-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
          <div role="tablist" aria-label="Разделы статистики" className="flex overflow-x-auto border-b border-slate-200 px-3 pt-2">{(Object.keys(TABS) as Tab[]).map(key => <button key={key} role="tab" id={`tab-${key}`} aria-selected={tab === key} aria-controls={`panel-${key}`} onClick={() => setTab(key)} className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium ${tab === key ? 'border-emerald-700 text-emerald-800' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>{TABS[key]}</button>)}</div>
          <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
            <div className="border-b border-slate-100 px-5 py-4"><h2 className="font-semibold text-slate-900">{{ sources: 'Откуда приходят посетители', pages: 'Популярные страницы', clicks: 'На что нажимают', forms: 'Отправки и сохранение заявок', goals: 'Достижения целей', campaigns: 'Результаты рекламных кампаний', devices: 'Устройства посетителей', browsers: 'Браузеры, ОС и конверсия в заявки', landings: 'Страницы начала визита', errors: 'Что мешает отправить заявку' }[tab]}</h2><p className="mt-1 text-xs text-slate-400">{{ sources: 'Источник закрепляется при начале визита. Учитываются UTM-метки и внешний сайт перехода.', pages: 'Страницы отсортированы по числу просмотров. Адреса показаны без параметров поиска.', clicks: 'Элементы различаются по странице, размещению и ID. Онлайн-запись считается отдельным действием.', forms: 'Наблюдаемые этапы: увидел → нажал → начал → отправил → заявка сохранена. Сохранение подтверждает сервер.', goals: 'Конверсия — доля визитов с этой целью. Клик по телефону не подтверждает состоявшийся звонок.', campaigns: 'В отчёт попадают визиты с utm_campaign. Список пуст, если метка не использовалась.', devices: 'Тип устройства определяется по браузеру.', browsers: 'Семейство браузера, основная версия и ОС. Выберите браузер в фильтре, чтобы сравнить все этапы форм.', landings: 'Страница, с которой начался визит. Старые записи могут не содержать эту информацию.', errors: 'Код ошибки и тип поля. Содержимое полей, сообщения посетителей и тексты ошибок сюда не передаются.' }[tab]}</p></div>
            {tab === 'sources' && <TrafficTable rows={report.sources} />}
            {tab === 'pages' && <TrafficTable rows={report.pages} pages />}
            {tab === 'campaigns' && <TrafficTable rows={report.campaigns} />}
            {tab === 'devices' && <TrafficTable rows={report.devices} />}
            {tab === 'browsers' && <TrafficTable rows={report.browsers} />}
            {tab === 'landings' && <TrafficTable rows={report.landings} />}
            {tab === 'errors' && <ErrorTable rows={report.errors} />}
            {tab === 'clicks' && <ClickTable rows={report.clicks} />}
            {tab === 'forms' && <><FunnelTable rows={report.forms} /><details className="border-t border-slate-100 p-4"><summary className="cursor-pointer text-sm font-medium text-emerald-800">По страницам и размещению</summary><FunnelTable rows={report.formPages} pages /></details></>}
            {tab === 'goals' && <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-500"><tr>{['Цель', 'Достижения', 'Визиты', 'Конверсия'].map(label => <th key={label} className="px-5 py-3 text-right font-medium first:text-left">{label}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{report.goals.map(row => <tr key={row.goal}><td className="px-5 py-4 font-medium">{GOAL_LABELS[row.goal]}</td><td className="px-5 py-4 text-right tabular-nums">{number(row.count)}</td><td className="px-5 py-4 text-right tabular-nums">{number(row.visits)}</td><td className="px-5 py-4 text-right font-medium tabular-nums text-emerald-800">{percent(row.conversionRate)}</td></tr>)}</tbody></table></div>}
          </div>
          {['pages', 'sources', 'campaigns'].includes(tab) && <div className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">До 100 строк с наибольшим числом просмотров. Итоговые показатели рассчитаны по всем событиям.</div>}
        </section>

        <details className="rounded-xl border border-slate-200/80 bg-white px-5 py-4 text-sm text-slate-500"><summary className="cursor-pointer font-medium text-slate-700">Как считаются показатели</summary><div className="mt-4 grid gap-4 text-xs leading-relaxed sm:grid-cols-2"><p><strong>Посетитель</strong> — браузер с анонимным идентификатором. Другой браузер, устройство или очистка хранилища создают нового посетителя. Если хранилище браузера недоступно, подсчёт менее точный.</p><p><strong>Визит</strong> — активность с перерывами менее 30 минут. Вкладки одного браузера делят визит. В отчёте считаются визиты с событиями в выбранном периоде.</p><p><strong>Конверсия в заявку</strong> — доля визитов с заявкой, сохранённой сервером. <strong>Интерес к обращению</strong> — отдельная доля визитов с кликом по телефону, мессенджеру или переходом к онлайн-записи; она не подтверждает звонок или запись. Повторные события одного визита не увеличивают эти доли.</p><p><strong>Данные</strong> поступают с момента подключения. Известные боты и служебные страницы исключаются. Поля форм, поисковые запросы, IP-адреса и записи действий посетителей в журнал аналитики не сохраняются.</p></div></details>
        <footer className="mt-5 flex flex-wrap justify-between gap-2 text-xs text-slate-400"><span>{report.firstEventAt ? `Первые сохранённые данные: ${timeLabel(report.firstEventAt)}` : 'Первые события ещё не поступили'}{report.lastEventAt ? ` · Последнее событие в периоде: ${timeLabel(report.lastEventAt)}` : ''}</span><span>Хранение событий: {RETENTION_DAYS} дней</span></footer>
      </div>}
    </div>
  </div>;
}
