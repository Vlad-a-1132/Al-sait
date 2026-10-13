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

// Search synonyms identify the same test, never prescribe a broader diagnostic panel.
const codeAliases: Record<string, string> = {
  'А12.05.027.001':'achtv aptt ачтв', 'А09.20.003':'d dimer д димер ддимер',
  'А09.05.050':'fibrinogen', 'А12.05.028':'thrombin time тв', 'А09.05.047':'antithrombin ат iii',
  'А09.05.008':'transferrin', 'А12.05.011':'tibc ожсс', 'А12.05.011.001':'uibc лжсс',
  'А08.05.008':'reticulocytes ретикулоциты', 'В03.016.003.059':'reticulocytes ретикулоциты',
  'А09.05.028':'ldl лпнп', 'А09.05.004':'hdl лпвп', 'А09.05.025':'triglycerides',
  'А09.05.027.001':'apoa1 apo a1 апо а1', 'А09.05.027.002':'apob apo b апо в', 'А09.05.027.003':'lpa lp a лп а',
  'А09.05.225':'amh амг антимюллеров', 'А09.05.151':'progesterone', 'А09.05.072':'estradiol e2',
  'А09.05.070':'cortisol кортизол кровь', 'А09.05.056':'insulin', 'А09.05.205':'c peptide с пептид спептид',
  'А09.05.160':'shbg гспг', 'А09.19.013':'calprotectin фекальный кальпротектин',
  'А09.19.010':'elastase эластаза', 'А26.19.016.002':'хеликобактер хеликобактера антиген кал',
  'А09.05.127':'magnesium', 'А09.05.045.002':'zinc', 'А09.05.032':'calcium кальций кровь',
  'А09.05.206':'ionized calcium кальций свободный', 'А26.21.008.001':'hpv впч 16 18 пцр',
  'А09.26.004':'хламидии пцр', 'М.00572':'хламидии пцр',
  'А26.20.017.003':'микоплазма гениталиум пцр', 'М.00573':'микоплазма гениталиум пцр',
  'А26.04.001':'гонорея гонококк пцр', 'М.00574':'гонорея гонококк пцр',
  'А26.20.017.001':'трихомонада пцр', 'М.00011':'трихомонада пцр',
};

export function prepareCatalog(data: unknown): LabItem[] {
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Неверный формат каталога');
  return Object.entries(data).flatMap(([category, rows]) => {
    if (!Array.isArray(rows)) throw new Error('Неверный формат категории');
    return rows.map((row: { code: string; name: string; price: number }) => {
      if (typeof row.code !== 'string' || typeof row.name !== 'string' || !Number.isFinite(row.price)) throw new Error('Неверный формат исследования');
      const name = row.name.replace(/^\*+/, '').replace(/\s+/g, ' ').trim();
      let aliases = codeAliases[row.code] || '';
      if (/^клинический анализ крови/i.test(name)) aliases += ' общий анализ крови оак гемограмма cbc';
      if (name === 'Общий анализ мочи') aliases += ' оам';
      if (name.includes('(ТТГ)')) aliases += ' tsh ттг';
      if (/витамин/i.test(name) && /\bd(?:2|3)?\b/i.test(name)) aliases += ' витамин д vitamin d';
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
  const term = normalize(query);
  const tokens = term.split(' ').filter(Boolean);
  const abbreviations = new Set(['оак', 'оам', 'ттг', 'tsh', 'алт', 'аст', 'alt', 'ast', 'cbc', 'd', 'д']);
  return items.filter(item => tokens.every(token => abbreviations.has(token) ? item.search.split(' ').includes(token) : item.search.includes(token))).sort((a, b) => {
    const rank = (item: LabItem) => normalize(item.name) === term || normalize(item.code) === term ? 0 : normalize(item.name).startsWith(term) ? 1 : 2;
    return rank(a) - rank(b) || Number(POPULAR_CODES.includes(b.code)) - Number(POPULAR_CODES.includes(a.code)) || a.name.length - b.name.length;
  });
}

export const money = (price: number) => `${price.toLocaleString('ru-RU')} ₽`;
