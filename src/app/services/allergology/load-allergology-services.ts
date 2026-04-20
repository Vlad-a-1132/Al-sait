/**
 * Живые услуги и цены для блока аллергологии: те же вызовы fetchPriceServices /
 * fetchPriceCategories из `@/lib/price-api`, что использует страница `/prices`
 * (upstream PRICE_API_BASE_URL → данные из БД через существующую интеграцию).
 */

import {
  extractArray,
  fetchPriceCategories,
  fetchPriceServices,
  normalizeCategoryRow,
  normalizeServiceRow,
  type PriceServiceDisplay,
} from "@/lib/price-api";
import {
  buildCategoryChildrenMap,
  collectDescendantCategoryIds,
  flattenCategoryTree,
  parseNumericId,
} from "@/app/prices/category-descendants";

/** Совпадает с выбором ветки на /prices?cat=5010 */
export const ALLERGOLOGY_PRICE_CATEGORY_ID = 5010;

function dedupePriceServices(rows: PriceServiceDisplay[]): PriceServiceDisplay[] {
  const seen = new Set<string>();
  const out: PriceServiceDisplay[] = [];
  for (const r of rows) {
    const sid = r.serviceId ?? r.id ?? r.code ?? r.name;
    const cid = r.categoryId != null ? String(r.categoryId) : "";
    const key = `${String(sid)}|${cid}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(r);
  }
  return out;
}

function groupServicesByCategoryId(services: PriceServiceDisplay[]): Map<number, PriceServiceDisplay[]> {
  const m = new Map<number, PriceServiceDisplay[]>();
  for (const s of services) {
    const cid = parseNumericId(s.categoryId);
    if (cid == null || cid === 0) continue;
    const list = m.get(cid);
    if (list) list.push(s);
    else m.set(cid, [s]);
  }
  for (const list of m.values()) {
    list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
  }
  return m;
}

function buildIdToNameForSort(categoriesPayload: unknown[]): Map<number, string> {
  const map = new Map<number, string>();
  const flat = flattenCategoryTree(categoriesPayload);
  for (const node of flat) {
    const row = normalizeCategoryRow(node);
    if (!row) continue;
    const id = parseNumericId(row.id);
    if (id != null && id !== 0) map.set(id, row.name);
  }
  return map;
}

/**
 * Тот же порядок обхода, что у блока категории на /prices?cat=5010:
 * услуги узла (по названию), затем подкатегории в порядке имён.
 */
function flattenServicesInPricesBranchOrder(
  rootCategoryId: number,
  childrenMap: Map<number, number[]>,
  servicesByCategory: Map<number, PriceServiceDisplay[]>,
  branchScope: Set<number>,
  idToName: Map<number, string>
): PriceServiceDisplay[] {
  const out: PriceServiceDisplay[] = [];

  function walk(id: number): void {
    if (!branchScope.has(id)) return;
    const own = servicesByCategory.get(id) ?? [];
    out.push(...own);
    let childIds = [...(childrenMap.get(id) ?? [])].filter((c) => c !== 0 && branchScope.has(c));
    childIds.sort((a, b) => (idToName.get(a) ?? "").localeCompare(idToName.get(b) ?? "", "ru"));
    for (const c of childIds) walk(c);
  }

  walk(rootCategoryId);
  return out;
}

/**
 * Услуги той же ветки категории, что и на странице прайса с ?cat=5010
 * (категория 5010 и все потомки в дереве).
 */
export async function loadAllergologyPriceServices(): Promise<PriceServiceDisplay[]> {
  const [servicesRes, categoriesRes] = await Promise.all([fetchPriceServices(), fetchPriceCategories()]);

  const categoriesRaw = extractArray(categoriesRes.ok ? categoriesRes.data : undefined);
  const servicesRaw = extractArray(servicesRes.ok ? servicesRes.data : undefined);

  const childrenMap = buildCategoryChildrenMap(categoriesRaw);
  const allowedCategoryIds = collectDescendantCategoryIds(ALLERGOLOGY_PRICE_CATEGORY_ID, childrenMap);

  const allServiceRows = servicesRaw
    .map(normalizeServiceRow)
    .filter((row): row is PriceServiceDisplay => row != null);

  const deduped = dedupePriceServices(allServiceRows);

  const inBranch = deduped.filter((s) => {
    const cid = parseNumericId(s.categoryId);
    return cid != null && allowedCategoryIds.has(cid);
  });

  const servicesByCategory = groupServicesByCategoryId(inBranch);
  const idToName = buildIdToNameForSort(categoriesRaw);

  return flattenServicesInPricesBranchOrder(
    ALLERGOLOGY_PRICE_CATEGORY_ID,
    childrenMap,
    servicesByCategory,
    allowedCategoryIds,
    idToName
  );
}

export function formatAllergologyPriceLabel(s: PriceServiceDisplay): string {
  const p = s.price;
  if (p === null || p === undefined) return "—";
  if (typeof p === "number" && Number.isFinite(p)) {
    if (Math.abs(p) < 1e-12) return "0 руб.";
    return `${new Intl.NumberFormat("ru-RU").format(p)} руб.`;
  }
  const raw = String(p).trim();
  if (raw === "") return "—";
  if (s.priceIsZero) return "0 руб.";
  const n = parseFloat(raw.replace(/\s/g, "").replace(",", "."));
  if (Number.isFinite(n) && n === 0) return "0 руб.";
  if (Number.isFinite(n)) return `${new Intl.NumberFormat("ru-RU").format(n)} руб.`;
  return raw;
}
