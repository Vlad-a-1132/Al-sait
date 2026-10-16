export const SESSION_TIMEOUT = 30 * 60 * 1000;
export const VISITOR_LIFETIME = 365 * 24 * 60 * 60 * 1000;
export const MAX_REPORT_DAYS = 93;
export const RETENTION_DAYS = 180;
export const DELIVERY_TTL = 24 * 60 * 60 * 1000;
export const BROWSERS = ['Chrome', 'Safari', 'Yandex', 'Firefox', 'Edge', 'Opera', 'Samsung', 'Other', 'Unknown'] as const;
export type BrowserName = typeof BROWSERS[number];
export const OPERATING_SYSTEMS = ['Android', 'iOS', 'Windows', 'macOS', 'Linux', 'Other', 'Unknown'] as const;
export const ERROR_LABELS = { required: 'Обязательное поле', format: 'Неверный формат', consent: 'Нет согласия', validation: 'Проверка формы', network: 'Ошибка сети', server: 'Ошибка сервера' } as const;
export type FormErrorCode = keyof typeof ERROR_LABELS;
export const FORM_FIELDS = ['name', 'phone', 'email', 'message', 'consent', 'other'] as const;

export const FORM_LABELS = {
  appointment_inline: 'Форма записи на странице',
  appointment_page: 'Страница записи к врачу',
  callback: 'Обратный звонок',
  contact: 'Обратная связь',
  chat: 'Заявка из чата',
} as const;
export type AnalyticsForm = keyof typeof FORM_LABELS;

export const GOAL_LABELS = {
  appointment_sent: 'Заявка на приём сохранена',
  callback_sent: 'Заявка на обратный звонок сохранена',
  contact_sent: 'Обращение из контактов сохранено',
  chat_sent: 'Заявка из чата сохранена',
  phone_click: 'Нажатие на телефон',
  messenger_click: 'Переход в мессенджер',
  booking_click: 'Переход к онлайн-записи',
} as const;
export type AnalyticsGoal = keyof typeof GOAL_LABELS;
export type EventType = 'pageview' | 'click' | 'form_view' | 'form_click' | 'form_start' | 'form_submit' | 'form_error' | 'form_success' | 'custom';
export type DeviceType = 'desktop' | 'mobile' | 'tablet';

export interface Attribution {
  source: string;
  medium: string;
  campaign: string;
  referrer: string;
}
export interface AnalyticsContext extends Attribution {
  visitorId: string;
  sessionId: string;
  path: string;
  device: DeviceType;
  form?: AnalyticsForm;
  browser?: BrowserName;
  browserVersion?: string;
  os?: typeof OPERATING_SYSTEMS[number];
  landingPath?: string;
  placement?: string;
}
export interface AnalyticsEvent extends AnalyticsContext {
  id: string;
  timestamp: string;
  type: EventType;
  action?: string;
  label?: string;
  target?: string;
  buttonId?: string;
  errorCode?: FormErrorCode;
  field?: typeof FORM_FIELDS[number];
  status?: number;
}

export function isPrivatePath(path: string): boolean {
  return /^\/(prices|admin|call-center|api|_next)(\/|$)/i.test(path);
}

/** Only page paths, never query strings, anchors or user-entered search terms. */
export function cleanPath(value: unknown): string | null {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || value.includes('\\') || value.length > 700) return null;
  try {
    const pathname = decodeURIComponent(new URL(value, 'https://altamed-c.ru').pathname);
    if (pathname.startsWith('//') || isPrivatePath(pathname) || /[\\\x00-\x1f@]/.test(pathname)) return null;
    return pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
  } catch {
    return null;
  }
}

export function cleanLabel(value: unknown, maxLength = 100): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\x00-\x1f]/g, ' ')
    .replace(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi, '[email]')
    .replace(/\+?\d[\d\s().-]{7,}\d/g, '[телефон]')
    .replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

export function cleanTag(value: unknown): string {
  return cleanLabel(value, 80).replace(/[^\p{L}\p{N} ._:/-]/gu, '');
}

export function getAttribution(search: string, referrer: string, currentHost: string): Attribution {
  const params = new URLSearchParams(search);
  let host = '';
  try { host = new URL(referrer).hostname.replace(/^www\./, '').toLowerCase(); } catch { /* no referrer */ }
  const ownHost = currentHost.replace(/^www\./, '').toLowerCase();
  if (host === ownHost || /^(www\.)?altamed-c\.ru$/.test(host)) host = '';
  let source = host || 'direct';
  let medium = host ? 'referral' : 'none';
  if (/(^|\.)(yandex\.[a-z.]+|ya\.ru)$/.test(host)) { source = 'yandex'; medium = 'organic'; }
  else if (/(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|search\.mail\.ru)$/.test(host)) { source = host.includes('google.') ? 'google' : host; medium = 'organic'; }
  else if (/(^|\.)(vk\.com|vk\.ru|t\.co|t\.me|telegram\.org|ok\.ru|instagram\.com|facebook\.com)$/.test(host)) medium = 'social';
  if (params.has('yclid')) { source = 'yandex'; medium = 'cpc'; }
  if (params.has('gclid')) { source = 'google'; medium = 'cpc'; }
  const utmSource = cleanTag(params.get('utm_source'));
  const utmMedium = cleanTag(params.get('utm_medium'));
  return { source: utmSource || source, medium: utmMedium || medium, campaign: cleanTag(params.get('utm_campaign')), referrer: host };
}

export function goalForEvent(event: AnalyticsEvent): AnalyticsGoal | null {
  if (event.type === 'click' && (event.action === 'phone_click' || event.action === 'messenger_click' || event.action === 'booking_click')) return event.action;
  if (event.type !== 'form_success') return null;
  if (event.form === 'callback') return 'callback_sent';
  if (event.form === 'contact') return 'contact_sent';
  if (event.form === 'chat') return 'chat_sent';
  return 'appointment_sent';
}

export function moscowDay(date = new Date()): string {
  return new Date(date.getTime() + 3 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export interface TrafficRow {
  key: string;
  label: string;
  detail?: string;
  views: number;
  visits: number;
  visitors: number;
  conversions: number;
  conversionRate: number;
  leads: number;
  leadVisits: number;
  leadConversionRate: number;
  intentVisits: number;
  intentConversionRate: number;
}
export interface FormFunnelRow {
  form: AnalyticsForm;
  path?: string;
  placement?: string;
  views: number;
  clicks: number;
  starts: number;
  attempts: number;
  successes: number;
  submitVisits: number;
  successVisits: number;
  errors: number;
  completionRate: number | null;
}
export interface ReportFilters { browser?: string; device?: string }
export interface AnalyticsReport {
  from: string;
  to: string;
  generatedAt: string;
  firstEventAt: string | null;
  lastEventAt: string | null;
  warnings: string[];
  totals: { views: number; visits: number; visitors: number; clicks: number; submissions: number; successfulForms: number; conversions: number; convertedVisits: number; conversionRate: number; leadVisits: number; leadConversionRate: number; intentVisits: number; intentConversionRate: number };
  daily: TrafficRow[];
  sources: TrafficRow[];
  pages: TrafficRow[];
  campaigns: TrafficRow[];
  devices: TrafficRow[];
  browsers: TrafficRow[];
  landings: TrafficRow[];
  filters: ReportFilters;
  clicks: { path: string; action: string; label: string; target: string; placement: string; buttonId: string; count: number }[];
  forms: FormFunnelRow[];
  formPages: FormFunnelRow[];
  errors: { form: AnalyticsForm; path: string; code: FormErrorCode; field: string; browser: string; placement: string; status: number | null; count: number }[];
  goals: { goal: AnalyticsGoal; count: number; visits: number; conversionRate: number }[];
}
