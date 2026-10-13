// Run: node tests/lab-seo.test.cjs (no server or external requests required).
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const modules = new Map();
function load(file) {
  file = path.resolve(file);
  if (modules.has(file)) return modules.get(file);
  const module = {exports:{}};
  modules.set(file,module.exports);
  const req = name => {
    if (name.endsWith('.json')) return require(path.resolve(path.dirname(file),name));
    if (name.startsWith('@/')) return load(path.resolve('src',name.slice(2)+'.ts'));
    if (name.startsWith('.')) return load(path.resolve(path.dirname(file),name+'.ts'));
    return require(name);
  };
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText,{module,exports:module.exports,require:req,process,console,Date,Map,Set,URL,AbortSignal,fetch});
  return module.exports;
}
const {LAB_STUDIES,LAB_HUBS,labImage,hubStudies,childHubs} = load('src/data/lab-seo.ts');
const {LAB_SEO_ARTICLES} = load('src/data/lab-seo-articles.ts');
const {PRIORITY_SEO_ARTICLES,PRIORITY_SEO_ARTICLE_CARDS} = load('src/data/priority-seo-articles.ts');
const {BLOG_TOPIC_PAGES} = load('src/data/blog-topic-pages.ts');
const {prepareCatalog,searchCatalog} = load('src/app/lab-tests-preview/catalog.ts');
const {selectionAdvice} = load('src/app/lab-tests-preview/selection-advice.ts');
const {reconcileLabPrices,mergePricedDuplicates,priceCode,remapLabSelection} = load('src/app/lab-tests-preview/price-reconciliation.ts');
const snapshot = require('../src/app/lab-tests-preview/prices.snapshot.json');
const overrides = require('../src/app/lab-tests-preview/price-name-overrides.json');
const items = mergePricedDuplicates(reconcileLabPrices(prepareCatalog(require('../public/data/lab-services.json')),snapshot.services,overrides));
assert.equal(LAB_STUDIES.length,64); assert.equal(LAB_HUBS.length,14); assert.equal(Object.keys(LAB_SEO_ARTICLES).length,25);
assert.equal(new Set([...LAB_STUDIES,...LAB_HUBS].map(x=>x.slug)).size,78);
assert.equal(BLOG_TOPIC_PAGES['lab-tests'].articles.length,25);
for(const hub of LAB_HUBS) {
  if(hub.parent) assert(LAB_HUBS.some(x=>x.slug===hub.parent),`missing parent ${hub.slug}`);
  assert(hubStudies(hub.slug).length>0 || hub.catalogCategory,`empty hub ${hub.slug}`);
  for(const slug of hub.studySlugs||[]) assert(LAB_STUDIES.some(x=>x.slug===slug),slug);
}
assert(childHubs('biokhimiya-krovi').some(x=>x.slug==='lipidnyy-obmen'));
assert(hubStudies('gormony').some(x=>x.slug==='amg'));
assert(hubStudies('analizy-kala').some(x=>x.slug==='kalprotektin'));
assert.equal(LAB_STUDIES.find(x=>x.slug==='gspg').hub,'gormony');
assert(hubStudies('reproduktivnye-gormony').some(x=>x.slug==='gspg'));
assert.deepEqual(
  Array.from(searchCatalog(items,'витамин Д'),item=>item.key).sort(),
  Array.from(searchCatalog(items,'витамин D'),item=>item.key).sort(),
);
for(const [query,code] of [['АМГ','А09.05.225'],['LDL','А09.05.028'],['С-пептид','А09.05.205'],['Д-димер','А09.20.003'],['витамин Д','А09.05.221.001'],['хламидии пцр','А09.26.004']]) {
  assert(searchCatalog(items,query).some(x=>priceCode(x.code)===priceCode(code)),`missing search ${query}`);
}
assert.equal(selectionAdvice([{code:'А12.05.011'},{code:'А09.05.007'}]).length,1);
assert.equal(selectionAdvice([{code:'А12.05.011'},{code:'А12.05.011.001'}]).length,1);
assert.equal(selectionAdvice([{code:'А09.26.004'},{code:'М.00572'}]).length,1);
assert.equal(selectionAdvice([{code:'А09.05.076'},{code:'А09.05.007'}]).length,0);
assert.equal(selectionAdvice([{code:'А09.05.032'},{code:'А09.05.206'}]).length,0);
let mapped = 0;
for(const study of LAB_STUDIES) {
  assert(LAB_HUBS.some(hub=>hub.slug===study.hub),study.slug);
  for(const code of study.codes) {
    const matches = items.filter(item=>priceCode(item.code)===priceCode(code));
    assert.equal(matches.length,1,`${study.slug}: ${code}`);
    assert.equal(matches[0].priceStatus,'matched',`${study.slug}: price mismatch`);
    assert(matches[0].price>0,`${study.slug}: zero price`); mapped++;
  }
  for(const slug of study.related) assert(LAB_STUDIES.some(row=>row.slug===slug),slug);
}
for(const entry of [...LAB_STUDIES,...LAB_HUBS]) {
  assert(fs.existsSync('public'+labImage(entry.image)),entry.image);
  for(const slug of entry.articles) assert(LAB_SEO_ARTICLES[slug],slug);
}
const articleStats = [];
for(const [slug,article] of Object.entries(LAB_SEO_ARTICLES)) {
  assert.equal(PRIORITY_SEO_ARTICLES[slug],article);
  assert.equal(PRIORITY_SEO_ARTICLE_CARDS.filter(card=>card.url===`/blog/${slug}`).length,1);
  assert(fs.existsSync('public'+article.image),slug);
  assert.equal(article.direction,'lab-tests');
  assert(article.sections.length>=5); assert(article.faq.length>=3);
  assert.equal(new Set(article.sections.map(x=>x.id)).size,article.sections.length);
  const text = [article.h1,...article.intro,article.answer,...article.sections.flatMap(x=>[x.title,...x.paragraphs,...(x.points||[])]),...article.faq.flatMap(x=>[x.question,x.answer])].join(' ');
  const words = text.split(/\s+/).length;
  assert(words>=260,`${slug}: too short (${words})`);
  articleStats.push({slug,words});
}
const knownKey = items.find(item=>item.code==='А09.05.076').key;
assert(remapLabSelection([knownKey],items).includes(knownKey));
const redirect = require('../next.config.js');
redirect.redirects().then(rows=>assert(rows.some(row=>row.source==='/diagnostics/laboratory_research'&&row.destination==='/services/lab-tests'&&row.permanent)));
console.log(JSON.stringify({studies:LAB_STUDIES.length,hubs:LAB_HUBS.length,articles:articleStats,verifiedCodeMappings:mapped,matchedPrices:items.filter(x=>x.priceStatus==='matched').length,catalogRows:items.length},null,2));
