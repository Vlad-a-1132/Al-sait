import 'server-only';

import { firstEventTime, readDay } from './server';
import { BROWSERS, ERROR_LABELS, FORM_LABELS, GOAL_LABELS, goalForEvent, MAX_REPORT_DAYS, moscowDay, RETENTION_DAYS } from './shared';
import type { AnalyticsEvent, AnalyticsForm, AnalyticsGoal, AnalyticsReport, FormFunnelRow, ReportFilters, TrafficRow } from './shared';

const DAY = 86400000;
type Bucket = { views: number; visits: Set<string>; visitors: Set<string>; converted: Set<string>; conversions: number; leads: number; leadVisits: Set<string>; intentVisits: Set<string> };
const bucket = (): Bucket => ({ views: 0, visits: new Set(), visitors: new Set(), converted: new Set(), conversions: 0, leads: 0, leadVisits: new Set(), intentVisits: new Set() });
const rate = (numerator: number, denominator: number) => denominator ? Math.round(numerator / denominator * 10000) / 100 : 0;
type Funnel = { views: Set<string>; clicks: Set<string>; starts: Set<string>; submits: Set<string>; saved: Set<string>; attempts: number; successes: number; errors: number };
const funnel = (): Funnel => ({ views: new Set(), clicks: new Set(), starts: new Set(), submits: new Set(), saved: new Set(), attempts: 0, successes: 0, errors: 0 });

export function reportRange(from?: string | null, to?: string | null, now = new Date()): { from: string; to: string; days: string[] } {
  const today = moscowDay(now), end = to || today, start = from || moscowDay(new Date(now.getTime() - 6 * DAY));
  const valid = (day: string) => /^\d{4}-\d{2}-\d{2}$/.test(day) && Number.isFinite(Date.parse(day)) && new Date(day + 'T00:00:00Z').toISOString().slice(0, 10) === day;
  if (!valid(start) || !valid(end)) throw new RangeError('Укажите корректные даты.');
  if (start > end) throw new RangeError('Начало периода должно быть раньше его окончания.');
  if (end > today) throw new RangeError('Нельзя выбрать будущую дату.');
  const count = Math.round((Date.parse(end) - Date.parse(start)) / DAY) + 1;
  if (count > MAX_REPORT_DAYS) throw new RangeError('Выберите период не длиннее ' + MAX_REPORT_DAYS + ' дней.');
  if (start < moscowDay(new Date(now.getTime() - RETENTION_DAYS * DAY))) throw new RangeError('Доступна статистика за последние ' + RETENTION_DAYS + ' дней.');
  return { from: start, to: end, days: Array.from({ length: count }, (_, index) => new Date(Date.parse(start) + index * DAY).toISOString().slice(0, 10)) };
}
function add(row: Bucket, event: AnalyticsEvent, goal: AnalyticsGoal | null) {
  const session = event.visitorId + '/' + event.sessionId;
  row.visitors.add(event.visitorId); row.visits.add(session);
  if (event.type === 'pageview') row.views++;
  if (goal) {
    row.conversions++; row.converted.add(session);
    if (event.type === 'form_success') { row.leads++; row.leadVisits.add(session); }
    else row.intentVisits.add(session);
  }
}
function traffic(key: string, value: Bucket, label = key, detail?: string): TrafficRow {
  return { key, label, ...(detail ? { detail } : {}), views: value.views, visits: value.visits.size, visitors: value.visitors.size, conversions: value.conversions, conversionRate: rate(value.converted.size, value.visits.size), leads: value.leads, leadVisits: value.leadVisits.size, leadConversionRate: rate(value.leadVisits.size, value.visits.size), intentVisits: value.intentVisits.size, intentConversionRate: rate(value.intentVisits.size, value.visits.size) };
}
function group(map: Map<string, Bucket>, key: string): Bucket {
  const entry = map.get(key) || bucket(); map.set(key, entry); return entry;
}
function sorted(map: Map<string, Bucket>, label?: (key: string) => string): TrafficRow[] {
  return Array.from(map, ([key, value]) => traffic(key, value, label ? label(key) : key)).sort((a, b) => b.views - a.views || b.visits - a.visits).slice(0, 100);
}
function addFunnel(row: Funnel, event: AnalyticsEvent) {
  const session = event.visitorId + '/' + event.sessionId;
  if (event.type === 'form_view') row.views.add(session);
  if (event.type === 'form_click') row.clicks.add(session);
  if (event.type === 'form_start') row.starts.add(session);
  if (event.type === 'form_submit') { row.attempts++; row.submits.add(session); }
  if (event.type === 'form_success') { row.successes++; row.saved.add(session); }
  if (event.type === 'form_error') row.errors++;
}
function funnelRow(form: AnalyticsForm, row: Funnel, extra: { path?: string; placement?: string } = {}): FormFunnelRow {
  const convertedViewers = Array.from(row.saved).filter(session => row.views.has(session)).length;
  return { form, ...extra, views: row.views.size, clicks: row.clicks.size, starts: row.starts.size, attempts: row.attempts, successes: row.successes, submitVisits: row.submits.size, successVisits: row.saved.size, errors: row.errors, completionRate: row.views.size ? rate(convertedViewers, row.views.size) : null };
}

export async function buildReport(from?: string | null, to?: string | null, inputFilters: ReportFilters = {}): Promise<AnalyticsReport> {
  const range = reportRange(from, to);
  if (inputFilters.browser && !BROWSERS.includes(inputFilters.browser as typeof BROWSERS[number])) throw new RangeError('Неизвестный браузер.');
  if (inputFilters.device && !['desktop', 'mobile', 'tablet'].includes(inputFilters.device)) throw new RangeError('Неизвестный тип устройства.');
  const filters = { ...(inputFilters.browser ? { browser: inputFilters.browser } : {}), ...(inputFilters.device ? { device: inputFilters.device } : {}) };
  const total = bucket(), daily = new Map(range.days.map(day => [day, bucket()]));
  const pages = new Map<string, Bucket>(), sources = new Map<string, Bucket>(), campaigns = new Map<string, Bucket>(), devices = new Map<string, Bucket>(), browsers = new Map<string, Bucket>(), landings = new Map<string, Bucket>();
  const clickRows = new Map<string, AnalyticsReport['clicks'][number]>();
  const forms = new Map((Object.keys(FORM_LABELS) as AnalyticsForm[]).map(form => [form, funnel()]));
  const formPages = new Map<string, Funnel>(), errors = new Map<string, AnalyticsReport['errors'][number]>();
  const goals = new Map((Object.keys(GOAL_LABELS) as AnalyticsGoal[]).map(goal => [goal, { count: 0, visits: new Set<string>() }]));
  const seen = new Set<string>();
  let clicks = 0, submissions = 0, successfulForms = 0, legacy = 0;
  let lastEventAt: string | null = null;

  for (const day of range.days) {
    for await (const event of readDay(day)) {
      if (seen.has(event.id)) continue;
      seen.add(event.id);
      const eventDay = moscowDay(new Date(event.timestamp)), dailyBucket = daily.get(eventDay);
      if (!dailyBucket || (filters.browser && (event.browser || 'Unknown') !== filters.browser) || (filters.device && event.device !== filters.device)) continue;
      if (!event.browser) legacy++;
      const goal = goalForEvent(event);
      add(total, event, goal); add(dailyBucket, event, goal); add(group(pages, event.path), event, goal);
      add(group(sources, JSON.stringify([event.source, event.medium])), event, goal);
      add(group(devices, event.device), event, goal);
      add(group(browsers, JSON.stringify([event.browser || 'Unknown', event.browserVersion || '', event.os || 'Unknown'])), event, goal);
      add(group(landings, event.landingPath || 'unknown'), event, goal);
      if (event.campaign) add(group(campaigns, JSON.stringify([event.campaign, event.source, event.medium])), event, goal);
      if (!lastEventAt || event.timestamp > lastEventAt) lastEventAt = event.timestamp;
      if (event.type === 'click') clicks++;
      if (event.type === 'click' || event.type === 'custom') {
        const key = JSON.stringify([event.path, event.action, event.label, event.target, event.placement, event.buttonId]);
        const click = clickRows.get(key) || { path: event.path, action: event.action || '', label: event.label || '', target: event.target || '', placement: event.placement || 'unknown', buttonId: event.buttonId || 'unknown', count: 0 };
        click.count++; clickRows.set(key, click);
      }
      if (event.type === 'form_submit') submissions++;
      if (event.type === 'form_success') successfulForms++;
      if (event.form && forms.has(event.form)) {
        addFunnel(forms.get(event.form)!, event);
        const key = JSON.stringify([event.form, event.path, event.placement || 'unknown']);
        const row = formPages.get(key) || funnel(); addFunnel(row, event); formPages.set(key, row);
        if (event.type === 'form_error' && event.errorCode) {
          const key = JSON.stringify([event.form, event.path, event.errorCode, event.field, event.browser, event.placement, event.status]);
          const row = errors.get(key) || { form: event.form, path: event.path, code: event.errorCode, field: event.field || 'other', browser: event.browser || 'Unknown', placement: event.placement || 'unknown', status: event.status || null, count: 0 };
          row.count++; errors.set(key, row);
        }
      }
      if (goal) { const entry = goals.get(goal)!; entry.count++; entry.visits.add(event.visitorId + '/' + event.sessionId); }
    }
  }

  const firstEventAt = await firstEventTime(), warnings: string[] = [];
  if (firstEventAt && moscowDay(new Date(firstEventAt)) > range.from) warnings.push('Сбор статистики начался позже выбранного начала периода. За предыдущие дни данных нет.');
  if (legacy) warnings.push('В периоде есть записи предыдущей версии: браузеры, страницы входа и новые этапы форм для них могут быть неизвестны.');
  return {
    from: range.from, to: range.to, generatedAt: new Date().toISOString(), firstEventAt, lastEventAt, warnings, filters,
    totals: { views: total.views, visits: total.visits.size, visitors: total.visitors.size, clicks, submissions, successfulForms, conversions: total.conversions, convertedVisits: total.converted.size, conversionRate: rate(total.converted.size, total.visits.size), leadVisits: total.leadVisits.size, leadConversionRate: rate(total.leadVisits.size, total.visits.size), intentVisits: total.intentVisits.size, intentConversionRate: rate(total.intentVisits.size, total.visits.size) },
    daily: Array.from(daily, ([key, value]) => traffic(key, value)), pages: sorted(pages),
    sources: sorted(sources).map(row => { const [source, medium] = JSON.parse(row.key) as [string, string]; return { ...row, label: source === 'direct' ? 'Прямые заходы' : source, detail: medium === 'none' ? 'Без источника' : medium }; }),
    campaigns: sorted(campaigns).map(row => { const [campaign, source, medium] = JSON.parse(row.key) as string[]; return { ...row, label: campaign, detail: source + ' / ' + medium }; }),
    devices: sorted(devices, key => ({ desktop: 'Компьютеры', mobile: 'Телефоны', tablet: 'Планшеты' }[key] || key)),
    browsers: sorted(browsers).map(row => { const [browser, version, os] = JSON.parse(row.key) as string[]; return { ...row, label: browser === 'Unknown' ? 'Браузер неизвестен' : browser + (version ? ' ' + version : ''), detail: os === 'Unknown' ? 'ОС неизвестна' : os }; }),
    landings: sorted(landings, key => key === 'unknown' ? 'Страница входа неизвестна' : key),
    clicks: Array.from(clickRows.values()).sort((a, b) => b.count - a.count).slice(0, 100),
    forms: Array.from(forms, ([form, row]) => funnelRow(form, row)),
    formPages: Array.from(formPages, ([key, row]) => { const [form, path, placement] = JSON.parse(key) as [AnalyticsForm, string, string]; return funnelRow(form, row, { path, placement }); }).sort((a, b) => b.successes - a.successes || b.views - a.views).slice(0, 100),
    errors: Array.from(errors.values()).sort((a, b) => b.count - a.count).slice(0, 100),
    goals: Array.from(goals, ([goal, value]) => ({ goal, count: value.count, visits: value.visits.size, conversionRate: rate(value.visits.size, total.visits.size) })),
  };
}

export function csvCell(value: string | number): string {
  const text = String(value);
  return '"' + (/^[\s]*[=+@-]/.test(text) ? "'" : '') + text.replace(/"/g, '""') + '"';
}
export function reportCsv(report: AnalyticsReport): string {
  const rows: (string | number)[][] = [
    ['Альтамед-С — статистика сайта', report.from, report.to], ['Фильтр: браузер', report.filters.browser || 'Все'], ['Фильтр: устройство', report.filters.device || 'Все'],
    ['Показатель', 'Значение'], ['Посетители', report.totals.visitors], ['Визиты', report.totals.visits], ['Просмотры', report.totals.views],
    ['Клики', report.totals.clicks], ['Отправки форм', report.totals.submissions], ['Сохранённые заявки', report.totals.successfulForms],
    ['Конверсия в заявку, %', report.totals.leadConversionRate], ['Визиты с интересом к обращению', report.totals.intentVisits], ['Конверсия в интерес, %', report.totals.intentConversionRate], [],
    ['Дата', 'Посетители', 'Визиты', 'Просмотры', 'Заявки', 'Конверсия в заявку, %'],
    ...report.daily.map(row => [row.key, row.visitors, row.visits, row.views, row.leads, row.leadConversionRate]), [],
  ];
  for (const [title, entries] of [['Источники', report.sources], ['Страницы', report.pages], ['Страницы входа', report.landings], ['Браузеры', report.browsers], ['UTM-кампании', report.campaigns], ['Устройства', report.devices]] as const) {
    rows.push([title, 'Канал / ОС', 'Посетители', 'Визиты', 'Просмотры', 'Заявки', 'Конверсия в заявку, %'], ...entries.map(row => [row.label, row.detail || '', row.visitors, row.visits, row.views, row.leads, row.leadConversionRate]), []);
  }
  for (const [label, entries] of [['Формы', report.forms], ['Формы по страницам', report.formPages]] as const) {
    rows.push([label, 'Страница', 'Размещение', 'Увидели (визиты)', 'Нажали (визиты)', 'Начали (визиты)', 'Отправки', 'Сохранено', 'Ошибки', 'Конверсия увидевших, %'], ...entries.map(row => [FORM_LABELS[row.form], row.path || '', row.placement || '', row.views, row.clicks, row.starts, row.attempts, row.successes, row.errors, row.completionRate ?? '']), []);
  }
  rows.push(['Цель', 'Достижения', 'Визиты', 'Конверсия, %'], ...report.goals.map(row => [GOAL_LABELS[row.goal], row.count, row.visits, row.conversionRate]), [],
    ['Страница', 'Размещение', 'ID кнопки', 'Действие', 'Элемент', 'Назначение', 'Количество'], ...report.clicks.map(row => [row.path, row.placement, row.buttonId, row.action, row.label, row.target, row.count]), [],
    ['Форма', 'Страница', 'Размещение', 'Ошибка', 'Поле', 'Браузер', 'HTTP статус', 'Количество'], ...report.errors.map(row => [FORM_LABELS[row.form], row.path, row.placement, ERROR_LABELS[row.code], row.field, row.browser, row.status || '', row.count]));
  return '\uFEFF' + rows.map(row => row.map(csvCell).join(';')).join('\r\n');
}
