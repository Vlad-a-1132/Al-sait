// Publication rules apply to fresh price feeds and saved copies alike.
const excludedCodes = new Set(['B03.001.005', 'B03.001.006', 'A08.30.024', 'M.00616', 'M.00618']);
const excludedIds = new Set(['263066156', '263066157', '263060769', '263065781', '263065783']);
const excludedName = /аборт|прерыва[а-яё]*\s+(?:[а-яё-]+\s+){0,3}беремен/iu;

function normalizeCode(value: unknown): string {
  return String(value ?? '').trim().toUpperCase().replace(/А/g, 'A').replace(/В/g, 'B').replace(/М/g, 'M');
}

export function isPublicService(item: unknown): boolean {
  if (!item || typeof item !== 'object' || Array.isArray(item)) return true;
  const row = item as Record<string, unknown>;
  const codes = ['serviceCode', 'service_code', 'code', 'sku', 'serviceMZCode', 'service_mz_code', 'serviceMzCode', 'mzCode'];
  if (codes.some(key => excludedCodes.has(normalizeCode(row[key])))) return false;
  if (['serviceId', 'service_id', 'id'].some(key => excludedIds.has(String(row[key] ?? '')))) return false;
  return !['serviceName', 'service_name', 'name', 'title'].some(key =>
    typeof row[key] === 'string' && excludedName.test((row[key] as string).replace(/\s+/g, ' '))
  );
}

/** Preserve supported API envelopes while excluding unpublished service rows. */
export function filterPublicServices(payload: unknown): unknown {
  if (Array.isArray(payload)) return payload.filter(isPublicService).map(filterPublicServices);
  if (!payload || typeof payload !== 'object') return payload;
  return Object.fromEntries(Object.entries(payload).map(([key, value]) => [key, filterPublicServices(value)]));
}
