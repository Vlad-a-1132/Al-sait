import type { PriceServiceDisplay } from '@/lib/price-api';
import { normalize, type LabItem } from './catalog';

export type PriceMatchStatus = 'matched' | 'missing' | 'name-mismatch' | 'conflict' | 'unpriced';
export type PricedLabItem = LabItem & { priceStatus: PriceMatchStatus; reviewedMatch?: boolean };
export type LabPriceOverride = {
  catalogCode: string;
  catalogName: string;
  sourceCode: string;
  sourceName: string;
  useSourceName: boolean;
  reason: string;
};
export type LabPriceInfo = {
  source: 'network' | 'memory' | 'file' | 'snapshot' | 'unavailable';
  snapshotModifiedAt: string | null;
  matched: number;
  needsReview: number;
  mergedDuplicates?: number;
};
export type PricedCatalogResponse = { items: PricedLabItem[]; prices: LabPriceInfo };

// Cyrillic/Latin lookalikes occur in the same service codes in the two catalogues.
// Never use a partial code: suffixes distinguish methods and biomaterials.
export function priceCode(value: string) {
  const letters: Record<string, string> = { А: 'A', В: 'B', С: 'C', Е: 'E', Н: 'H', К: 'K', М: 'M', О: 'O', Р: 'P', Т: 'T', Х: 'X' };
  return value.toUpperCase().replace(/[АВСЕНКМОРТХ]/g, char => letters[char]).replace(/\s/g, '');
}

// Ignore layout-only differences, not clinical wording, punctuation or numbers.
function priceName(value: string) {
  return value.normalize('NFKC').trim().toLocaleLowerCase('ru-RU').replace(/ё/g, 'е')
    .replace(/^\*+/, '').replace(/[–—‑]/g, '-').replace(/\s/g, '');
}

export function positivePrice(value: unknown): number | null {
  if (typeof value !== 'number' && typeof value !== 'string') return null;
  const raw = typeof value === 'string' ? value.replace(/\s/g, '').replace(',', '.') : value;
  if (typeof raw === 'string' && !/^\d+(?:\.\d{1,2})?$/.test(raw)) return null;
  const amount = Number(raw);
  return Number.isFinite(amount) && amount > 0 ? amount : null;
}

export function reconcileLabPrices(items: LabItem[], services: PriceServiceDisplay[], overrides: LabPriceOverride[] = []): PricedLabItem[] {
  const byCode = new Map<string, PriceServiceDisplay[]>();
  for (const service of services) {
    for (const code of new Set([service.code, service.mzCode].filter((value): value is string => Boolean(value)).map(priceCode))) {
      const rows = byCode.get(code) || [];
      rows.push(service);
      byCode.set(code, rows);
    }
  }
  return items.map(item => {
    const sameCode = byCode.get(priceCode(item.code)) || [];
    let sameTest = sameCode.filter(service => priceName(service.name) === priceName(item.name));
    let reviewed: LabPriceOverride | undefined;
    if (!sameTest.length) {
      const approved = overrides.find(row => priceCode(row.catalogCode) === priceCode(item.code) && priceName(row.catalogName) === priceName(item.name));
      if (approved) {
        const matches = (byCode.get(priceCode(approved.sourceCode)) || []).filter(row => priceName(row.name) === priceName(approved.sourceName));
        // Exact reviewed pair only. Future renames/composition changes fail closed.
        if (matches.length) { sameTest = matches; reviewed = approved; }
      }
    }
    let priceStatus: PriceMatchStatus = 'missing';
    let price = 0;
    if (sameCode.length) priceStatus = 'name-mismatch';
    if (sameTest.length) {
      const amounts = sameTest.map(service => positivePrice(service.price));
      if (amounts.every(amount => amount === null)) priceStatus = 'unpriced';
      else if (amounts.some(amount => amount === null) || new Set(amounts).size !== 1) priceStatus = 'conflict';
      else { price = amounts[0]!; priceStatus = 'matched'; }
    }
    // No legacy-price fallback: an absent, renamed or ambiguous test must be reviewed.
    const code = reviewed ? reviewed.sourceCode : item.code;
    const name = reviewed?.useSourceName ? reviewed.sourceName.replace(/^\*+/, '').trim() : item.name;
    // Keep the stable selection key, but display/search the verified current code.
    return { ...item, code, name, search: `${item.search} ${normalize(`${code} ${name}`)}`, price, priceStatus, ...(reviewed ? { reviewedMatch: true } : {}) };
  });
}

export function priceSourceLabel(info: LabPriceInfo | null): string {
  if (!info || info.source === 'unavailable') return 'Прайс временно недоступен. Стоимость уточните в клинике.';
  if (info.source === 'file') {
    const date = info.snapshotModifiedAt ? new Date(info.snapshotModifiedAt) : null;
    const label = date && !Number.isNaN(date.getTime()) ? ` от ${date.toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' })}` : '';
    return `Резервная копия прайса${label}. Актуальность цен нужно подтвердить в клинике.`;
  }
  if (info.source === 'snapshot') {
    const date = info.snapshotModifiedAt ? new Date(info.snapshotModifiedAt) : null;
    const label = date && !Number.isNaN(date.getTime()) ? ` от ${date.toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' })}` : '';
    return `Цены по сохранённому прайсу клиники${label}.`;
  }
  return 'Цены из того же источника, что и действующий прайс клиники.';
}

/** Same verified service under old/new codes is one selectable study, not two fees. */
export function mergePricedDuplicates(items: PricedLabItem[]): PricedLabItem[] {
  const groups = new Map<string, PricedLabItem[]>();
  for (const item of items) {
    const id = item.priceStatus === 'matched' ? `${priceCode(item.code)}|${priceName(item.name)}|${item.price}` : item.key;
    const group = groups.get(id) || [];
    group.push(item);
    groups.set(id, group);
  }
  return Array.from(groups.values()).map(group => {
    if (group.length === 1) return group[0];
    const canonical = group.find(item => priceCode(item.key.split('|')[0]) === priceCode(item.code)) || group[0];
    return {
      ...canonical,
      search: group.map(item => item.search).join(' '),
      legacyKeys: Array.from(new Set(group.flatMap(item => [item.key, ...(item.legacyKeys || [])]))).filter(key => key !== canonical.key),
    };
  });
}

/** Migrate previously saved choices without losing them or charging duplicates. */
export function remapLabSelection(keys: string[], items: LabItem[]): string[] {
  const canonical = new Map<string, string>();
  for (const item of items) {
    canonical.set(item.key, item.key);
    for (const key of item.legacyKeys || []) canonical.set(key, item.key);
  }
  return Array.from(new Set(keys.map(key => canonical.get(key) || key)));
}
