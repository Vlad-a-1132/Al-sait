import { cache } from 'react';
import rawCatalog from '../../public/data/lab-services.json';
import snapshot from '@/app/lab-tests-preview/prices.snapshot.json';
import overrides from '@/app/lab-tests-preview/price-name-overrides.json';
import { prepareCatalog } from '@/app/lab-tests-preview/catalog';
import { mergePricedDuplicates, reconcileLabPrices, type PricedCatalogResponse } from '@/app/lab-tests-preview/price-reconciliation';
import { extractArray, normalizeServiceRow, type PriceServiceDisplay } from '@/lib/price-api';

// The upstream URL/key never enter client props. Do not hold page requests
// for the shared price API's 15-second timeout when the upstream is offline.
const catalog = prepareCatalog(rawCatalog);
function response(services: PriceServiceDisplay[], live: boolean): PricedCatalogResponse {
  const reconciled = reconcileLabPrices(catalog, services, overrides);
  const items = mergePricedDuplicates(reconciled);
  const matched = items.filter(item => item.priceStatus === 'matched').length;
  return { items, prices: { source: live ? 'network' : 'snapshot', snapshotModifiedAt: live ? null : snapshot.savedAt, matched, needsReview: items.length - matched, mergedDuplicates: reconciled.length - items.length } };
}
let saved = response(snapshot.services, false);
let freshUntil = 0;
let pending: Promise<PricedCatalogResponse> | null = null;
let lastLiveAt: string | null = null;

async function refresh() {
  const base = process.env.PRICE_API_BASE_URL?.trim().replace(/\/+$/, '');
  if (!base) { freshUntil = Date.now() + 300_000; return saved; }
  try {
    const key = process.env.PRICE_API_KEY?.trim();
    const res = await fetch(`${base}/api/prices/services`, { cache: 'no-store', signal: AbortSignal.timeout(1800), headers: key ? { 'X-Api-Key': key } : undefined });
    if (!res.ok) throw new Error('price source unavailable');
    const services = extractArray(await res.json()).map(normalizeServiceRow).filter((item): item is PriceServiceDisplay => item !== null);
    if (!services.length) throw new Error('empty price source');
    saved = response(services, true);
    lastLiveAt = new Date().toISOString();
    freshUntil = Date.now() + 300_000;
  } catch {
    // Retain the last available source. Missing/conflicting item prices stay unknown.
    if (lastLiveAt) saved = {...saved, prices: {...saved.prices, source: 'file', snapshotModifiedAt: lastLiveAt}};
    freshUntil = Date.now() + 60_000;
  }
  return saved;
}

export const getLabCatalog = cache(async (): Promise<PricedCatalogResponse> => {
  if (Date.now() < freshUntil) return saved;
  if (!pending) pending = refresh().finally(() => { pending = null; });
  return pending;
});
