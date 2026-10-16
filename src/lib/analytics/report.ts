import 'server-only';

import { firstEventTime, readDay } from './server';
import { FORM_LABELS, GOAL_LABELS, goalForEvent, MAX_REPORT_DAYS, moscowDay, RETENTION_DAYS } from './shared';
import type { AnalyticsEvent, AnalyticsForm, AnalyticsGoal, AnalyticsReport, TrafficRow } from './shared';

const DAY = 86400000;
type Bucket = { views: number; visits: Set<string>; visitors: Set<string>; converted: Set<string>; conversions: number };
const bucket = (): Bucket => ({ views: 0, visits: new Set(), visitors: new Set(), converted: new Set(), conversions: 0 });
const rate = (numerator: number, denominator: number) => denominator ? Math.round(numerator / denominator * 10000) / 100 : 0;

export function reportRange(from?: string | null, to?: string | null, now = new Date()): { from: string; to: string; days: string[] } {
  const today = moscowDay(now);
  const end = to || today;
  const start = from || moscowDay(new Date(now.getTime() - 6 * DAY));
  const valid = (day: string) => /^\d{4}-\d{2}-\d{2}$/.test(day) && Number.isFinite(Date.parse(day)) && new Date(`${day}T00:00:00Z`).toISOString().slice(0, 10) === day;
  if (!valid(start) || !valid(end)) throw new RangeError('Укажите корректные даты.');
  if (start > end) throw new RangeError('Начало периода должно быть раньше его окончания.');
  if (end > today) throw new RangeError('Нельзя выбрать будущую дату.');
  const count = Math.round((Date.parse(end) - Date.parse(start)) / DAY) + 1;
  if (count > MAX_REPORT_DAYS) throw new RangeError(`Выберите период не длиннее ${MAX_REPORT_DAYS} дней.`);
  if (start < moscowDay(new Date(now.getTime() - RETENTION_DAYS * DAY))) throw new RangeError(`Доступна статистика за последние ${RETENTION_DAYS} дней.`);
  return { from: start, to: end, days: Array.from({ length: count }, (_, index) => new Date(Date.parse(start) + index * DAY).toISOString().slice(0, 10)) };
}

function add(row: Bucket, event: AnalyticsEvent, goal: AnalyticsGoal | null) {
  const session = `${event.visitorId}/${event.sessionId}`;
  row.visitors.add(event.visitorId);
  row.visits.add(session);
  if (event.type === 'pageview') row.views++;
  if (goal) { row.conversions++; row.converted.add(session); }
}
function traffic(key: string, value: Bucket, label = key, detail?: string): TrafficRow {
  return { key, label, ...(detail ? { detail } : {}), views: value.views, visits: value.visits.size, visitors: value.visitors.size, conversions: value.conversions, conversionRate: rate(value.converted.size, value.visits.size) };
}
function group(map: Map<string, Bucket>, key: string): Bucket {
  const entry = map.get(key) || bucket();
  map.set(key, entry);
  return entry;
}
function sorted(map: Map<string, Bucket>, label?: (key: string) => string): TrafficRow[] {
  return Array.from(map, ([key, value]) => traffic(key, value, label ? label(key) : key)).sort((a, b) => b.views - a.views || b.visits - a.visits).slice(0, 100);
}

export async function buildReport(from?: string | null, to?: string | null): Promise<AnalyticsReport> {
  const range = reportRange(from, to);
  const total = bucket();
  const daily = new Map(range.days.map(day => [day, bucket()]));
  const pages = new Map<string, Bucket>();
  const sources = new Map<string, Bucket>();
  const campaigns = new Map<string, Bucket>();
  const devices = new Map<string, Bucket>();
  const clickRows = new Map<string, { path: string; action: string; label: string; target: string; count: number }>();
  const forms = new Map((Object.keys(FORM_LABELS) as AnalyticsForm[]).map(form => [form, { form, attempts: 0, successes: 0 }]));
  const goals = new Map((Object.keys(GOAL_LABELS) as AnalyticsGoal[]).map(goal => [goal, { count: 0, visits: new Set<string>() }]));
  const seen = new Set<string>();
  let clicks = 0, submissions = 0, successfulForms = 0;
  let lastEventAt: string | null = null;

  for (const day of range.days) {
    for await (const event of readDay(day)) {
      if (seen.has(event.id)) continue;
      seen.add(event.id);
      const eventDay = moscowDay(new Date(event.timestamp));
      const dailyBucket = daily.get(eventDay);
      if (!dailyBucket) continue;
      const goal = goalForEvent(event);
      add(total, event, goal);
      add(dailyBucket, event, goal);
      add(group(pages, event.path), event, goal);
      add(group(sources, JSON.stringify([event.source, event.medium])), event, goal);
      add(group(devices, event.device), event, goal);
      if (event.campaign) add(group(campaigns, JSON.stringify([event.campaign, event.source, event.medium])), event, goal);
      if (!lastEventAt || event.timestamp > lastEventAt) lastEventAt = event.timestamp;
      if (event.type === 'click') clicks++;
      if (event.type === 'click' || event.type === 'custom') {
        const key = JSON.stringify([event.path, event.action, event.label, event.target]);
        const click = clickRows.get(key) || { path: event.path, action: event.action || '', label: event.label || '', target: event.target || '', count: 0 };
        click.count++; clickRows.set(key, click);
      }
      if (event.type === 'form_submit') { submissions++; if (event.form) forms.get(event.form)!.attempts++; }
      if (event.type === 'form_success') { successfulForms++; if (event.form) forms.get(event.form)!.successes++; }
      if (goal) {
        const entry = goals.get(goal)!;
        entry.count++; entry.visits.add(`${event.visitorId}/${event.sessionId}`);
      }
    }
  }

  const firstEventAt = await firstEventTime();
  return {
    from: range.from, to: range.to, generatedAt: new Date().toISOString(), firstEventAt, lastEventAt,
    warnings: firstEventAt && moscowDay(new Date(firstEventAt)) > range.from ? ['Сбор статистики начался позже выбранного начала периода. За предыдущие дни данных нет.'] : [],
    totals: { views: total.views, visits: total.visits.size, visitors: total.visitors.size, clicks, submissions, successfulForms, conversions: total.conversions, convertedVisits: total.converted.size, conversionRate: rate(total.converted.size, total.visits.size) },
    daily: Array.from(daily, ([key, value]) => traffic(key, value)),
    pages: sorted(pages),
    sources: sorted(sources).map(row => { const [source, medium] = JSON.parse(row.key) as [string, string]; return { ...row, label: source === 'direct' ? 'Прямые заходы' : source, detail: medium === 'none' ? 'Без источника' : medium }; }),
    campaigns: sorted(campaigns).map(row => { const [campaign, source, medium] = JSON.parse(row.key) as string[]; return { ...row, label: campaign, detail: `${source} / ${medium}` }; }),
    devices: sorted(devices, key => ({ desktop: 'Компьютеры', mobile: 'Телефоны', tablet: 'Планшеты' }[key] || key)),
    clicks: Array.from(clickRows.values()).sort((a, b) => b.count - a.count).slice(0, 100),
    forms: Array.from(forms.values()),
    goals: Array.from(goals, ([goal, value]) => ({ goal, count: value.count, visits: value.visits.size, conversionRate: rate(value.visits.size, total.visits.size) })),
  };
}

/** Protect spreadsheet exports from formula injection in UTM labels and page paths. */
export function csvCell(value: string | number): string {
  const text = String(value);
  return `"${(/^[\s]*[=+@-]/.test(text) ? "'" : '') + text.replace(/"/g, '""')}"`;
}

export function reportCsv(report: AnalyticsReport): string {
  const rows: (string | number)[][] = [
    ['Альтамед-С — статистика сайта', report.from, report.to],
    ['Показатель', 'Значение'],
    ['Посетители', report.totals.visitors], ['Визиты', report.totals.visits], ['Просмотры', report.totals.views],
    ['Клики', report.totals.clicks], ['Отправки форм', report.totals.submissions], ['Сохранённые заявки', report.totals.successfulForms],
    ['Достижения целей', report.totals.conversions], ['Конверсия, %', report.totals.conversionRate], [],
    ['Дата', 'Посетители', 'Визиты', 'Просмотры', 'Цели', 'Конверсия, %'],
    ...report.daily.map(row => [row.key, row.visitors, row.visits, row.views, row.conversions, row.conversionRate]), [],
  ];
  for (const [title, entries] of [['Источники', report.sources], ['Страницы', report.pages], ['UTM-кампании', report.campaigns], ['Устройства', report.devices]] as const) {
    rows.push([title, 'Канал', 'Посетители', 'Визиты', 'Просмотры', 'Цели', 'Конверсия, %'], ...entries.map(row => [row.label, row.detail || '', row.visitors, row.visits, row.views, row.conversions, row.conversionRate]), []);
  }
  rows.push(['Форма', 'Отправки', 'Сохранено'], ...report.forms.map(row => [FORM_LABELS[row.form], row.attempts, row.successes]), [], ['Цель', 'Достижения', 'Визиты', 'Конверсия, %'], ...report.goals.map(row => [GOAL_LABELS[row.goal], row.count, row.visits, row.conversionRate]), [], ['Страница', 'Действие', 'Элемент', 'Назначение', 'Количество'], ...report.clicks.map(row => [row.path, row.action, row.label, row.target, row.count]));
  return '\uFEFF' + rows.map(row => row.map(csvCell).join(';')).join('\r\n');
}
