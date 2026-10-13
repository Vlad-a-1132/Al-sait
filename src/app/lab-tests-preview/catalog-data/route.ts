import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { extractArray, fetchPriceServices, normalizeServiceRow, type PriceServiceDisplay } from '@/lib/price-api';
import { prepareCatalog } from '../catalog';
import { mergePricedDuplicates, reconcileLabPrices, type PricedCatalogResponse } from '../price-reconciliation';
import snapshot from '../prices.snapshot.json';
import overrides from '../price-name-overrides.json';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    const [catalog, prices] = await Promise.all([
      fs.readFile(path.join(process.cwd(), 'public/data/lab-services.json'), 'utf8'),
      fetchPriceServices(),
    ]);
    const services = extractArray(prices.ok ? prices.data : null)
      .map(normalizeServiceRow).filter((row): row is PriceServiceDisplay => row !== null);
    // A successful live response wins. Otherwise use the user's explicitly supplied
    // October snapshot, never silently fall back to the older shared April export.
    const live = prices.ok && prices.source !== 'file' && services.length > 0;
    const reconciled = reconcileLabPrices(prepareCatalog(JSON.parse(catalog)), live ? services : snapshot.services, overrides);
    const items = mergePricedDuplicates(reconciled);
    const matched = items.filter(item => item.priceStatus === 'matched').length;
    const response: PricedCatalogResponse = {
      items,
      prices: {
        source: live && prices.ok ? prices.source : 'snapshot',
        snapshotModifiedAt: live ? null : snapshot.savedAt,
        matched,
        needsReview: items.length - matched,
        mergedDuplicates: reconciled.length - items.length,
      },
    };
    return NextResponse.json(response, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ message: 'Не удалось загрузить каталог исследований.' }, { status: 503 });
  }
}
