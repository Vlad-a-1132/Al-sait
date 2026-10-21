// Run: node --test tests/public-services.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function load(file, overrides = {}, modules = new Map()) {
  file = path.resolve(file);
  if (modules.has(file)) return modules.get(file);
  const module = { exports: {} };
  modules.set(file, module.exports);
  const requireModule = name => {
    if (overrides[name]) return overrides[name];
    if (name.startsWith('.')) return load(path.resolve(path.dirname(file), name + '.ts'), overrides, modules);
    return require(name);
  };
  const javascript = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(javascript, { module, exports: module.exports, require: requireModule, process: overrides.process || process, console,
    setTimeout, clearTimeout, AbortController, fetch: overrides.fetch || fetch }, { filename: file });
  return module.exports;
}

const policy = load('src/lib/public-services.ts');
const allowed = { serviceId: 1, serviceCode: 'A01.001.001', serviceName: 'Приём гинеколога', actualPrice: 3780 };
const unpublished = [
  { serviceCode: 'В03.001.005', serviceName: 'Переименованная услуга' },
  { service_code: 'b03.001.006' },
  { serviceMZCode: 'A08.30.024' },
  { code: 'М.00616' },
  { sku: ' m.00618 ' },
  { service_id: 263066156 },
  { id: '263060769' },
  { serviceName: 'Комплексная услуга по медикаментозному прерыванию беременности' },
  { title: 'Искусственное прерывание\nбеременности' },
  { name: 'Исследование материала абортуса' },
];

test('publication rules recognize source field aliases, Cyrillic codes and new name-only records', () => {
  for (const row of unpublished) assert.equal(policy.isPublicService(row), false, JSON.stringify(row));
  for (const row of [allowed, { name: 'Ведение беременности' }, { name: 'Прерывистая пневмокомпрессия' }]) assert.equal(policy.isPublicService(row), true);
  for (const key of ['data', 'services', 'items', 'results']) {
    const input = { ok: true, source: 'network', [key]: [allowed, ...unpublished] };
    const output = policy.filterPublicServices(input);
    assert.equal(output[key].length, 1);
    assert.equal(output[key][0].serviceCode, allowed.serviceCode);
    assert.equal(input[key].length, unpublished.length + 1, 'must not mutate an upstream payload');
    assert.equal(output.source, 'network');
  }
});

function apiFixture(mode) {
  const payload = { services: [allowed, ...unpublished] };
  const writes = [];
  let requests = 0;
  const api = load('src/lib/price-api.ts', {
    process: { cwd: () => process.cwd(), env: { PRICE_API_BASE_URL: 'https://prices.test', PRICE_API_MEMORY_TTL_MS: '60000' } },
    fs: { promises: {
      mkdir: async () => {},
      writeFile: async (file, text) => writes.push(JSON.parse(text)),
      readFile: async () => JSON.stringify(payload),
    } },
    fetch: async () => {
      requests++;
      if (mode === 'offline') throw new Error('upstream unavailable');
      return { ok: true, text: async () => JSON.stringify(payload) };
    },
  });
  return { api, writes, requests: () => requests };
}

test('fresh upstream services are filtered before the response, persistence and memory cache', async () => {
  const fixture = apiFixture('online');
  const fresh = await fixture.api.fetchPriceServices();
  assert.equal(fresh.source, 'network');
  assert.equal(fresh.data.services.length, 1);
  assert.equal(fixture.writes.length, 1);
  assert.equal(fixture.writes[0].services.length, 1);
  const cached = await fixture.api.fetchPriceServices();
  assert.equal(cached.source, 'memory');
  assert.equal(cached.data.services.length, 1);
  assert.equal(fixture.requests(), 1);
  for (const row of unpublished) assert.equal(fixture.api.normalizeServiceRow(row), null);
  assert.equal(fixture.api.normalizeServiceRow(allowed).name, allowed.serviceName);
});

test('an older fallback file cannot restore unpublished records during an outage', async () => {
  const fixture = apiFixture('offline');
  const result = await fixture.api.fetchPriceServices();
  assert.equal(result.ok, true);
  assert.equal(result.source, 'file');
  assert.equal(result.data.services.length, 1);
  assert.equal(fixture.writes.length, 0);
});
