import { LAB_ROOT, LAB_STUDIES } from '@/data/lab-seo';
import { quickSelection } from '@/app/lab-tests-preview/navigation';
import { priceCode, type PricedCatalogResponse } from '@/app/lab-tests-preview/price-reconciliation';
export function labInitialData(data: PricedCatalogResponse): PricedCatalogResponse {
  // Hydrate only visible quick-selection rows; fetch the rest after mount.
  const keys = new Set(quickSelection(data.items).map(item => item.key));
  return { ...data, items: data.items.filter(item => keys.has(item.key)) };
}
export function labStudyLinks() {
  return Object.fromEntries(LAB_STUDIES.flatMap(study => study.codes.map(code => [priceCode(code), `${LAB_ROOT}/${study.slug}`])));
}
