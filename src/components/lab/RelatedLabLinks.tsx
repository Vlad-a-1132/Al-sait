import Link from 'next/link';
const groups: Record<string, [string,string][]> = {
  endocrinology:[['Анализы щитовидной железы','shchitovidnaya-zheleza'],['Глюкоза крови','glyukoza'],['Инсулин','insulin'],['С-пептид','c-peptid']],
  therapy:[['Биохимия крови','biokhimiya-krovi'],['Общий анализ крови','obshchiy-analiz-krovi'],['Ферритин','ferritin']],
  urology:[['Анализы мочи','analizy-mochi'],['Посев мочи','posev-mochi'],['Анализ по Нечипоренко','mocha-po-nechiporenko'],['Исследования на ИППП','analizy-na-ippp']],
  pediatrics:[['Анализы ребёнку','analizy-rebenku'],['Общий анализ крови','obshchiy-analiz-krovi'],['Общий анализ мочи','obshchiy-analiz-mochi']],
  allergology:[['Анализы на аллергию','analizy-na-allergiyu']],
  gastroenterology:[['Исследования ЖКТ','issledovaniya-zhkt'],['Кальпротектин','kalprotektin'],['Антиген хеликобактера','helicobacter-antigen-kal'],['Панкреатическая эластаза','pankreaticheskaya-elastaza']],
  cardiology:[['Липидный обмен','lipidnyy-obmen'],['Холестерин ЛПНП','lpnp'],['Триглицериды','trigliceridy']],
  gynecology:[['Репродуктивные гормоны','reproduktivnye-gormony'],['АМГ','amg'],['Исследования на ИППП','analizy-na-ippp']],
};
export default function RelatedLabLinks({direction}:{direction:string}) {
  const links = groups[direction]; if(!links)return null;
  return <section className="bg-[#f3f6ed] py-12"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-xs uppercase tracking-widest text-emerald-800">Если врач назначил обследование</p><h2 className="mt-3 text-3xl font-semibold text-[#173e35]">Найдите нужные анализы</h2><p className="mt-3 text-gray-600">Стоимость, подготовка и точные названия. Список исследований определяется на консультации.</p><div className="mt-6 flex flex-wrap gap-3">{links.map(([title,slug])=><Link key={slug} href={`/services/lab-tests/${slug}`} prefetch={false} className="rounded-xl border border-emerald-100 bg-white px-5 py-4 text-sm text-emerald-900 hover:border-emerald-400">{title} →</Link>)}</div></div></section>;
}
