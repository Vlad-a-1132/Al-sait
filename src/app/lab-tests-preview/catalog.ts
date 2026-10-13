export type LabItem = { code: string; name: string; price: number; category: string; key: string; search: string; legacyKeys?: string[] };
export const STORAGE_KEY = 'altamed:lab-preview:selection:v1';
export const PAGE_SIZE = 12;
export const POPULAR_CODES = ['В03.016.003.01', 'А09.05.076', 'А09.05.065', 'А09.05.221.001', 'А09.28.001', 'А09.05.023', 'А09.05.083', 'А09.05.026', 'А09.05.042', 'А09.05.041', 'А09.05.020', 'А09.05.009'];

export const categoryNames: Record<string, string> = {
  'Общеклинические анализы': 'Клинические анализы',
  'Гормональные исследования': 'Гормоны',
  'Витамины, микроэлементы и токсикология': 'Витамины и микроэлементы',
  'Аллергология и иммунология': 'Аллергология и иммунология',
  'Инфекции': 'Инфекции',
  'Гемостаз (свертываемость крови)': 'Свёртываемость крови',
  'Диагностика в гинекологии и урологии': 'Гинекология и урология',
  'Аутоиммунные заболевания': 'Аутоиммунные исследования',
  'Генетические исследования': 'Генетика',
  'Гистология (анализ тканей)': 'Гистология',
  'Онкология и онкогематология': 'Онкология и онкогематология',
  'Прочие специализированные исследования': 'Другие исследования',
};

export function normalize(value: string) {
  return value.toLocaleLowerCase('ru-RU').replace(/ё/g, 'е').replace(/[–—-]/g, ' ').replace(/[^\p{L}\p{N}.]+/gu, ' ').trim().replace(/\s+/g, ' ');
}

export function prepareCatalog(data: unknown): LabItem[] {
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Неверный формат каталога');
  return Object.entries(data).flatMap(([category, rows]) => {
    if (!Array.isArray(rows)) throw new Error('Неверный формат категории');
    return rows.map((row: { code: string; name: string; price: number }) => {
      if (typeof row.code !== 'string' || typeof row.name !== 'string' || !Number.isFinite(row.price)) throw new Error('Неверный формат исследования');
      const name = row.name.replace(/^\*+/, '').replace(/\s+/g, ' ').trim();
      let aliases = '';
      if (/^клинический анализ крови/i.test(name)) aliases += ' общий анализ крови оак гемограмма cbc';
      if (name === 'Общий анализ мочи') aliases += ' оам';
      if (name.includes('(ТТГ)')) aliases += ' tsh ттг';
      if (/витамин\s*d(?:2|3)?\b/i.test(name)) aliases += ' витамин д vitamin d';
      if (name === 'Ферритин') aliases += ' ferritin';
      if (name.includes('(АЛТ)')) aliases += ' alt';
      if (name.includes('(АСТ)')) aliases += ' ast';
      if (/^гликированный гемоглобин/i.test(name)) aliases += ' hba1c';
      // Keep clinically different tests separate; aliases only help discovery.
      return { code: row.code, name, price: row.price, category, key: `${row.code}|${row.name}`, search: normalize(`${row.code} ${name} ${aliases}`) };
    });
  });
}

export function searchCatalog(items: LabItem[], query: string) {
  const term = normalize(query).split(' ').map(token => token === 'д' ? 'd' : token).join(' ');
  const tokens = term.split(' ').filter(Boolean);
  const abbreviations = new Set(['оак', 'оам', 'ттг', 'tsh', 'алт', 'аст', 'alt', 'ast', 'cbc', 'd', 'д']);
  return items.filter(item => tokens.every(token => abbreviations.has(token) ? item.search.split(' ').includes(token) : item.search.includes(token))).sort((a, b) => {
    const rank = (item: LabItem) => normalize(item.name) === term || normalize(item.code) === term ? 0 : normalize(item.name).startsWith(term) ? 1 : 2;
    return rank(a) - rank(b) || Number(POPULAR_CODES.includes(b.code)) - Number(POPULAR_CODES.includes(a.code)) || a.name.length - b.name.length;
  });
}

export const money = (price: number) => `${price.toLocaleString('ru-RU')} ₽`;
