import type { LabItem } from './catalog';
import { priceCode } from './price-reconciliation';

export function selectionAdvice(items: Pick<LabItem,'code'>[]): string[] {
  const codes = new Set(items.map(item => priceCode(item.code)));
  const has = (code: string) => codes.has(priceCode(code));
  const warnings: string[] = [];
  if (has('А12.05.011') && (has('А09.05.007') || has('А12.05.011.001'))) {
    warnings.push('В выбранную ОЖСС уже входят железо и ЛЖСС. Проверьте, нужны ли отдельные повторяющиеся позиции. Мы не удаляем назначения автоматически.');
  }
  const alternatives = [
    ['А08.05.008','В03.016.003.059','Ретикулоциты: выбраны венозный и капиллярный варианты. Уточните, нужны ли оба.'],
    ['А09.26.004','М.00572','Хламидии: выбраны обычный и количественный варианты. Сверьте назначение.'],
    ['А26.20.017.003','М.00573','Mycoplasma genitalium: выбраны обычный и количественный варианты. Сверьте назначение.'],
    ['А26.04.001','М.00574','Гонококк: выбраны обычный и количественный варианты. Сверьте назначение.'],
    ['А26.20.017.001','М.00011','Трихомонада: выбраны обычный и количественный варианты. Сверьте назначение.'],
  ];
  for (const [a,b,message] of alternatives) if (has(a) && has(b)) warnings.push(message);
  return warnings;
}
