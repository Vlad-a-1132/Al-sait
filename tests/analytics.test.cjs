// node --test tests/analytics.test.cjs — isolated storage, no appointments, SMTP or external traffic.
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const ts = require('typescript');

function loader(globals = {}) {
  const modules = new Map();
  function load(filename) {
    filename = path.resolve(filename);
    if (modules.has(filename)) return modules.get(filename).exports;
    const module = { exports: {} };
    modules.set(filename, module);
    const localRequire = name => {
      if (name === 'server-only') return {};
      if (name.startsWith('@/')) return load(path.resolve('src', name.slice(2) + '.ts'));
      if (name.startsWith('.')) return load(path.resolve(path.dirname(filename), name + '.ts'));
      return require(name);
    };
    const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
    vm.runInNewContext(code, { module, exports: module.exports, require: localRequire, process, console, Buffer, URL, URLSearchParams, Date, Error, RangeError, SyntaxError, JSON, TextDecoder, Uint8Array, setTimeout, clearTimeout, ...globals }, { filename });
    return module.exports;
  }
  return load;
}

test('site analytics: attribution, identity, storage, reports and authentication', async t => {
  const directory = await fsp.mkdtemp(path.join(os.tmpdir(), 'altamed-analytics-test-'));
  const original = { directory: process.env.ANALYTICS_DATA_DIR, user: process.env.PRICES_TEST_USER, pass: process.env.PRICES_TEST_PASS };
  process.env.ANALYTICS_DATA_DIR = directory;
  process.env.PRICES_TEST_USER = 'analytics-test';
  process.env.PRICES_TEST_PASS = crypto.randomBytes(24).toString('hex');
  const load = loader();
  const shared = load('src/lib/analytics/shared.ts');
  const server = load('src/lib/analytics/server.ts');
  const reports = load('src/lib/analytics/report.ts');
  const collect = load('src/app/api/site-analytics/route.ts');
  const data = load('src/app/prices/analytics/data/route.ts');
  const event = (overrides = {}) => ({ id: crypto.randomUUID(), visitorId: 'visitor-0001', sessionId: 'session-0001', path: '/about', timestamp: new Date().toISOString(), type: 'pageview', source: 'yandex', medium: 'organic', campaign: '', referrer: 'yandex.ru', device: 'mobile', ...overrides });
  const request = (body, overrides = {}) => new Request('https://altamed-c.ru/api/site-analytics', { method: 'POST', headers: { origin: 'https://altamed-c.ru', host: 'altamed-c.ru', 'user-agent': 'Mozilla/5.0', 'content-type': 'application/json', ...overrides }, body: typeof body === 'string' ? body : JSON.stringify(body) });

  try {
    await t.test('paths and metadata omit search, contacts and private areas', () => {
      assert.equal(shared.cleanPath('/services/?q=private#anchor'), '/services');
      for (const value of ['/prices', '/prices/analytics', '/admin/dashboard', '/%70rices/analytics', '/%2fprices', '/\\evil.example', '/api/appointment', '//evil.example', 'https://evil.example', '/test%0a']) assert.equal(shared.cleanPath(value), null, value);
      assert.equal(shared.cleanPath('/prices-public'), '/prices-public');
      assert(!shared.cleanLabel('Позвонить +7 (495) 255-44-50 или test@example.ru').includes('255'));
      assert(!shared.cleanLabel('Позвонить +7 (495) 255-44-50 или test@example.ru').includes('test@'));
    });

    await t.test('search, advertising, UTM, referrals and own domain attribution', () => {
      assert.equal(shared.getAttribution('', 'https://yandex.ru/search?text=secret', 'altamed-c.ru').medium, 'organic');
      assert.equal(shared.getAttribution('?yclid=private', '', 'altamed-c.ru').medium, 'cpc');
      const utm = shared.getAttribution('?utm_source=vk&utm_medium=paid_social&utm_campaign=autumn&email=private', 'https://vk.com/path?private=1', 'altamed-c.ru');
      assert.equal(utm.source, 'vk'); assert.equal(utm.campaign, 'autumn'); assert.equal(utm.referrer, 'vk.com');
      assert.equal(shared.getAttribution('', 'https://www.altamed-c.ru/about', 'altamed-c.ru').source, 'direct');
      assert.equal(shared.getAttribution('', 'https://partner.ru/path?q=secret', 'altamed-c.ru').source, 'partner.ru');
      assert(!JSON.stringify(utm).includes('private'));
    });

    await t.test('client identity spans tabs, rotates after inactivity, and survives denied storage in memory', () => {
      const values = new Map();
      let clock = Date.now();
      class Clock extends Date { constructor(...args) { super(...(args.length ? args : [clock])); } static now() { return clock; } }
      const storage = { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value) };
      const batches = [];
      const globals = { window: {}, Date: Clock, crypto, localStorage: storage, location: { pathname: '/about', search: '?utm_source=test', hostname: 'altamed-c.ru', href: 'https://altamed-c.ru/about', origin: 'https://altamed-c.ru' }, document: { referrer: '' }, navigator: { userAgent: 'Mozilla/5.0', webdriver: false, sendBeacon: (_, body) => { batches.push(body); return true; } }, Blob, fetch: () => Promise.resolve({}), setTimeout: () => 1, clearTimeout: () => {} };
      const first = loader(globals)('src/lib/analytics/client.ts');
      const second = loader(globals)('src/lib/analytics/client.ts');
      const a = first.getAnalyticsContext('callback');
      const b = second.getAnalyticsContext('callback');
      assert.equal(a.visitorId, b.visitorId); assert.equal(a.sessionId, b.sessionId);
      clock += shared.SESSION_TIMEOUT + 1;
      const c = first.getAnalyticsContext('callback');
      assert.equal(c.visitorId, a.visitorId); assert.notEqual(c.sessionId, a.sessionId);
      const denied = loader({ ...globals, localStorage: { getItem() { throw Error('denied'); }, setItem() { throw Error('denied'); } } })('src/lib/analytics/client.ts');
      const d = denied.getAnalyticsContext('contact'); const e = denied.getAnalyticsContext('contact');
      assert.equal(d.visitorId, e.visitorId); assert.equal(d.sessionId, e.sessionId);
      const bot = loader({ ...globals, navigator: { ...globals.navigator, webdriver: true } })('src/lib/analytics/client.ts');
      assert.equal(bot.getAnalyticsContext('callback'), undefined);
      assert(batches.length >= 5);
    });

    await t.test('validation removes arbitrary payloads and rejects forged successes', () => {
      const valid = server.normalizeEvent(event({ name: 'private name', email: 'private@example.ru', phone: '+71234567890', path: '/about?q=secret', timestamp: '1990-01-01T00:00:00Z' }));
      assert.equal(valid.path, '/about');
      assert(!JSON.stringify(valid).includes('private'));
      assert.equal(valid.timestamp.slice(0, 10), new Date().toISOString().slice(0, 10));
      assert.equal(server.normalizeEvent(event({ type: 'form_success', form: 'callback' })), null);
      assert.equal(server.normalizeEvent(event({ type: 'form_submit', form: '__proto__' })), null);
      assert.equal(server.normalizeEvent(event({ path: '/prices/analytics' })), null);
      assert.equal(server.normalizeEvent(event({ type: 'click', action: 'phone_click', target: 'tel:+71234567890' })).target, 'tel:');
    });

    await t.test('report dates use Moscow and reject invalid, future, reversed and oversized ranges', () => {
      const now = new Date('2026-10-15T22:30:00Z');
      assert.equal(shared.moscowDay(now), '2026-10-16');
      assert.equal(reports.reportRange(null, null, now).to, '2026-10-16');
      for (const [from, to] of [['2026-02-31', '2026-03-01'], ['2026-10-17', '2026-10-16'], ['2026-10-15', '2026-10-17'], ['2026-06-01', '2026-10-16']]) assert.throws(() => reports.reportRange(from, to, now));
    });

    await t.test('daily append storage preserves concurrent batches and report deduplicates delivery', async () => {
      const batches = Array.from({ length: 20 }, () => Array.from({ length: 5 }, () => event()));
      await Promise.all(batches.map(batch => server.appendEvents(batch)));
      await server.appendEvents([batches[0][0]]);
      const before = await reports.buildReport(shared.moscowDay(), shared.moscowDay());
      assert.equal(before.totals.views, 100);
      assert.equal(before.totals.visits, 1); assert.equal(before.totals.visitors, 1);
      const list = [];
      for await (const row of server.readDay(shared.moscowDay())) list.push(row);
      assert.equal(list.length, 101);
    });

    await t.test('conversion rate uses unique converted visits, attempts do not imply success', async () => {
      await server.appendEvents([
        event({ visitorId: 'visitor-0002', sessionId: 'session-0002', path: '/contacts', source: 'direct', medium: 'none' }),
        event({ type: 'click', action: 'phone_click', target: 'tel:', label: 'Позвонить' }),
        event({ type: 'click', action: 'messenger_click', target: 't.me', label: 'Telegram' }),
        event({ type: 'form_submit', form: 'callback' }),
      ]);
      await server.recordSavedForm(event({ form: 'callback' }), 'test-submission-1');
      await server.recordSavedForm(event({ form: 'callback' }), 'test-submission-1');
      const report = await reports.buildReport(shared.moscowDay(), shared.moscowDay());
      assert.equal(report.totals.conversions, 3);
      assert.equal(report.totals.visits, 2); assert.equal(report.totals.visitors, 2);
      assert.equal(report.totals.conversionRate, 50);
      assert.equal(report.totals.successfulForms, 1);
      assert.equal(report.forms.find(row => row.form === 'callback').attempts, 1);
      assert.equal(report.forms.find(row => row.form === 'callback').successes, 1);
      assert.equal(report.pages.find(row => row.key === '/about').conversions, 3);
      assert.equal(report.goals.find(row => row.goal === 'phone_click').visits, 1);
    });

    await t.test('collection rejects foreign origin, forged goals, malformed and oversized payloads; bots are ignored', async () => {
      assert.equal((await collect.POST(request({ events: [event()] }, { origin: 'https://evil.example' }))).status, 403);
      assert.equal((await collect.POST(request({ events: [event({ type: 'form_success', form: 'callback' })] }))).status, 400);
      assert.equal((await collect.POST(request('not json'))).status, 400);
      assert.equal((await collect.POST(request('x'.repeat(25000)))).status, 413);
      assert.equal((await collect.POST(request({ events: [event()] }, { 'user-agent': 'Googlebot' }))).status, 204);
      const previous = (await reports.buildReport(shared.moscowDay(), shared.moscowDay())).totals.views;
      assert.equal((await collect.POST(request({ events: [event()] }))).status, 204);
      assert.equal((await reports.buildReport(shared.moscowDay(), shared.moscowDay())).totals.views, previous + 1);
    });

    await t.test('JSON and CSV require server authentication and never use public caching', async () => {
      const url = 'https://altamed-c.ru/prices/analytics/data';
      assert.equal((await data.GET(new Request(url))).status, 401);
      assert.equal((await data.GET(new Request(url, { headers: { authorization: 'Basic ' + Buffer.from('wrong:wrong').toString('base64') } }))).status, 401);
      const authorization = 'Basic ' + Buffer.from(`${process.env.PRICES_TEST_USER}:${process.env.PRICES_TEST_PASS}`).toString('base64');
      const response = await data.GET(new Request(url, { headers: { authorization } }));
      assert.equal(response.status, 200); assert(response.headers.get('cache-control').includes('no-store'));
      assert.equal(response.headers.get('x-robots-tag'), 'noindex, nofollow, noarchive');
      assert.equal((await data.GET(new Request(url + '?from=invalid', { headers: { authorization } }))).status, 400);
      const csv = await data.GET(new Request(url + '?format=csv', { headers: { authorization } }));
      assert.equal(csv.status, 200); assert(csv.headers.get('content-type').includes('text/csv'));
      assert((await csv.text()).includes('Посетители'));
      delete process.env.PRICES_TEST_PASS;
      assert.equal((await data.GET(new Request(url, { headers: { authorization } }))).status, 401);
      process.env.PRICES_TEST_PASS = original.pass || 'test-pass';
      assert.equal(reports.csvCell('=HYPERLINK("x")'), '"\'=HYPERLINK(""x"")"');
    });
  } finally {
    for (const [key, value] of [['ANALYTICS_DATA_DIR', original.directory], ['PRICES_TEST_USER', original.user], ['PRICES_TEST_PASS', original.pass]]) { if (value === undefined) delete process.env[key]; else process.env[key] = value; }
    assert(path.resolve(directory).startsWith(path.join(path.resolve(os.tmpdir()), 'altamed-analytics-test-')));
    await fsp.rm(directory, { recursive: true, force: true });
  }
});
