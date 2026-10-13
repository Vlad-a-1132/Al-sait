import { LabItem, normalize, POPULAR_CODES } from './catalog';

// Navigation is an extra layer over the source catalogue, never a replacement for it.
// Exact codes below were checked against public/data/lab-services.json.
export const CBC_CODES = ['В03.016.003.01', 'В03.016.003.02', 'В03.016.002.01', 'В03.016.002.02'];
const byCodes = (...codes: string[]) => (item: LabItem) => codes.includes(item.code);
const inCategory = (category: string) => (item: LabItem) => item.category === category;
const named = (category: string, pattern: RegExp) => (item: LabItem) => item.category === category && pattern.test(item.name);
const CLINICAL = 'Общеклинические анализы';
const HORMONES = 'Гормональные исследования';
const VITAMINS = 'Витамины, микроэлементы и токсикология';
const ALLERGY = 'Аллергология и иммунология';
const INFECTIONS = 'Инфекции';

export type LabTopic = { id: string; title: string; hint: string; match: (item: LabItem) => boolean };
export type LabDirection = { id: string; title: string; hint: string; symbol: 'drop' | 'spark' | 'filter'; topics: LabTopic[] };

export const DIRECTIONS: LabDirection[] = [
  { id: 'blood', title: 'Кровь и моча', hint: 'Общие анализы, СОЭ, свёртываемость', symbol: 'drop', topics: [
    { id: 'cbc', title: 'Общий анализ крови', hint: 'Выберите вариант из назначения', match: byCodes(...CBC_CODES) },
    { id: 'urine', title: 'Исследования мочи', hint: 'Общий анализ и специальные исследования', match: named(CLINICAL, /мочи|проба реберга/i) },
    { id: 'esr', title: 'СОЭ и ретикулоциты', hint: 'Варианты для венозной и капиллярной крови', match: byCodes('А12.05.001.01', 'А12.05.001.02', 'А08.05.008', 'В03.016.003.059') },
    { id: 'clotting', title: 'Свёртываемость крови', hint: 'Исследования гемостаза', match: inCategory('Гемостаз (свертываемость крови)') },
    { id: 'blood-type', title: 'Группа крови и резус-фактор', hint: 'Найти исследование', match: byCodes('А12.05.005') },
  ] },
  { id: 'biochemistry', title: 'Биохимия', hint: 'Глюкоза, железо, холестерин, ферменты', symbol: 'filter', topics: [
    { id: 'glucose', title: 'Глюкоза и гемоглобин А1с', hint: 'Глюкоза, гликированный гемоглобин, фруктозамин', match: byCodes('А09.05.023', 'А09.05.083', 'А09.05.102', 'А09.05.023.001', 'А09.05.023.008') },
    { id: 'iron', title: 'Железо и ферритин', hint: 'Ферритин, железо, трансферрин и другие показатели', match: byCodes('А09.05.076', 'А09.05.007', 'А09.05.008', 'А12.05.011', 'А12.05.011.001', 'А12.05.019') },
    { id: 'lipids', title: 'Холестерин и липиды', hint: 'Холестерин, липопротеиды, триглицериды', match: byCodes('А09.05.026', 'А09.05.004', 'А09.05.028', 'А09.05.028.002', 'А09.05.025', 'А09.05.027.004', 'М.00671', 'А09.05.027.003') },
    { id: 'enzymes', title: 'Ферменты и билирубин', hint: 'АЛТ, АСТ, ГГТ, билирубин', match: byCodes('А09.05.042', 'А09.05.041', 'А09.05.044', 'А09.05.021', 'А09.05.022', 'А09.05.022.001', 'А09.05.046', 'А09.05.045', 'А09.05.173', 'А09.05.180') },
    { id: 'proteins', title: 'Белки крови', hint: 'Общий белок, альбумин, С-реактивный белок', match: byCodes('А09.05.010', 'А09.05.011', 'А09.05.012', 'А09.05.009', 'А09.05.009.002') },
    { id: 'creatinine', title: 'Креатинин и мочевина', hint: 'Креатинин, мочевина, мочевая кислота', match: byCodes('А09.05.020', 'А09.05.017', 'А09.05.018') },
  ] },
  { id: 'hormones', title: 'Гормоны', hint: 'ТТГ, Т3, Т4 и другие исследования', symbol: 'spark', topics: [
    { id: 'thyroid', title: 'Щитовидная железа', hint: 'ТТГ, Т3, Т4, антитела', match: byCodes('А09.05.065', 'А09.05.064', 'А09.05.063', 'А09.05.060', 'А09.05.061', 'А09.05.117', 'А12.06.045', 'А12.06.046', 'А12.06.017', 'А09.05.097', 'М.00675', 'М.00676') },
    { id: 'reproductive', title: 'Репродуктивные гормоны', hint: 'ФСГ, ЛГ, пролактин, эстрадиол и другие', match: byCodes('А09.05.132', 'А09.05.131', 'А09.05.087', 'А09.05.210', 'А09.05.072', 'А09.05.151', 'А09.05.078', 'А09.05.078.002', 'А09.05.225', 'А09.05.160') },
    { id: 'insulin', title: 'Инсулин и С-пептид', hint: 'В том числе исследования после нагрузки', match: named(HORMONES, /инсулин|[cс]-пептид/i) },
    { id: 'cortisol', title: 'Кортизол и АКТГ', hint: 'Уточните биоматериал в назначении', match: byCodes('А09.05.070', 'А09.05.067', 'А09.28.035', 'А09.07.007') },
  ] },
  { id: 'vitamins', title: 'Витамины и микроэлементы', hint: 'Витамин D, группа B, отдельные элементы', symbol: 'spark', topics: [
    { id: 'vitamin-d', title: 'Витамин D', hint: 'Суммарный и отдельные формы', match: byCodes('А09.05.221.001', 'М.00652', 'М.00594', 'М.00593', 'М.00651') },
    { id: 'vitamin-b', title: 'Витамины группы B', hint: 'B1, B3, B5, B6, B9 и B12', match: byCodes('М.00508', 'М.00697', 'М.00509', 'М.00510', 'А09.05.080', 'А09.05.221.003') },
    { id: 'other-vitamins', title: 'Другие витамины и комплексы', hint: 'A, C, E, K, комплексы витаминов', match: byCodes('М.00507', 'М.00511', 'М.00512', 'М.00576', 'М.00514', 'М.00513', 'М.00515') },
    { id: 'elements', title: 'Отдельные микроэлементы', hint: 'Магний, цинк, селен и другие элементы', match: named(VITAMINS, /^(магний|цинк|селен|медь|кальций|натрий|калий|железо|марганец|кремний|молибден|хром|йод|кобальт) /i) },
  ] },
  { id: 'allergy', title: 'Аллергия', hint: 'Отдельные аллергены и панели', symbol: 'filter', topics: [
    { id: 'panels', title: 'Панели и комплексы', hint: 'Ищите точное название из назначения', match: named(ALLERGY, /панел|комплекс/i) },
    { id: 'animals', title: 'Животные', hint: 'Аллергены кошки, собаки и других животных', match: named(ALLERGY, /^(кошка|собака|кролик|коза|овца|лошадь|морская свинка|крыса|хомяк)/i) },
    { id: 'plants', title: 'Растения и пыльца', hint: 'Берёза, ольха, травы и другие растения', match: named(ALLERGY, /^(бер[её]за|ольха|полынь|амброзия|тимофеевка|тополь|дуб|лещина|подорожник|мятлик|овсяница|крапива)/i) },
    { id: 'food', title: 'Продукты питания', hint: 'Отдельные пищевые аллергены', match: named(ALLERGY, /^(молоко|яичный|арахис|пшеница|соя|треска|креветк|фундук|миндаль|грецкий орех)/i) },
  ] },
  { id: 'infections', title: 'Инфекции', hint: 'Антитела, ПЦР и посевы', symbol: 'drop', topics: [
    { id: 'pcr', title: 'ПЦР, ДНК и РНК', hint: 'Поиск по названию исследования', match: named(INFECTIONS, /пцр|днк|рнк/i) },
    { id: 'antibodies', title: 'Антитела', hint: 'В том числе IgG, IgM, IgA', match: named(INFECTIONS, /антител|Ig[AGM]/i) },
    { id: 'cultures', title: 'Посевы', hint: 'Учитывайте биоматериал и состав исследования', match: named(INFECTIONS, /посев/i) },
  ] },
];

const sourceForDirection: Record<string, string> = { hormones: HORMONES, vitamins: VITAMINS, allergy: ALLERGY, infections: INFECTIONS };

export function getTopics(direction: LabDirection): LabTopic[] {
  const source = sourceForDirection[direction.id];
  if (!source) return direction.topics;
  // Verified code-based shortcuts may cross source sections (e.g. separate D2/D3
  // tests are stored under specialized studies). Keep them discoverable here too.
  const topics = direction.topics;
  return [...topics, {
    id: 'other', title: 'Другие исследования раздела', hint: 'Если нужного названия нет в этих подгруппах',
    match: (item: LabItem) => item.category === source && item.code !== 'А12.05.005' && !topics.some(topic => topic.match(item)),
  }];
}

export const CBC_VARIANT_LABELS: Record<string, { title: string; description: string }> = {
  'В03.016.003.01': { title: 'Венозная кровь · с формулой', description: 'Лейкоцитарная формула (5DIFF)' },
  'В03.016.003.02': { title: 'Капиллярная кровь · с формулой', description: 'Подсчёт лейкоцитарной формулы врачом КЛД' },
  'В03.016.002.01': { title: 'Венозная кровь · без формулы', description: 'Без лейкоцитарной формулы' },
  'В03.016.002.02': { title: 'Капиллярная кровь · без формулы', description: 'Без лейкоцитарной формулы' },
};

export type CatalogEntry = { kind: 'test'; key: string; item: LabItem } | { kind: 'variants'; key: string; title: string; items: LabItem[] };
export function groupEntries(items: LabItem[], query = ''): CatalogEntry[] {
  const exactCode = query.trim() && items.some(item => normalize(item.code) === normalize(query));
  const cbc = items.filter(item => CBC_CODES.includes(item.code));
  let grouped = false;
  return items.flatMap<CatalogEntry>(item => {
    if (!exactCode && cbc.length > 1 && CBC_CODES.includes(item.code)) {
      if (grouped) return [];
      grouped = true;
      return [{ kind: 'variants', key: 'cbc-variants', title: 'Общий анализ крови', items: cbc }];
    }
    return [{ kind: 'test', key: item.key, item }];
  });
}

export function quickSelection(items: LabItem[]) {
  return [...CBC_CODES, ...POPULAR_CODES.slice(1, 8)].flatMap(code => items.filter(item => item.code === code).slice(0, 1));
}

export const QUICK_LABELS: Record<string, { title: string; hint: string }> = {
  'А09.05.221.001': { title: 'Витамин D, суммарный', hint: '25-OH · метод ВЭЖХ МС' },
  'А09.05.065': { title: 'ТТГ', hint: 'Тиреотропный гормон' },
  'А09.05.083': { title: 'Гликированный гемоглобин', hint: 'Гемоглобин А1с' },
};
