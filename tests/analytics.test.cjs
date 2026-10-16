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
    vm.runInNewContext(code, { module, exports: module.exports, require: localRequire, process, console, Buffer, URL, URLSearchParams, Date, Error, RangeError, SyntaxError, JSON, TextDecoder, Uint8Array, AbortController, Blob, setTimeout, clearTimeout, ...globals }, { filename });
    return module.exports;
  }
  return load;
}

function browserEnvironment(values = new Map()) {
  const scripts = new Map(), requests = [], beacons = [];
  const storage = { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key), key: index => Array.from(values.keys())[index] || null, get length() { return values.size; } };
  const globals = {
    window: {}, crypto, localStorage: storage,
    location: { pathname: '/about', search: '?utm_source=test', hostname: 'altamed-c.ru', href: 'https://altamed-c.ru/about', origin: 'https://altamed-c.ru' },
    document: { referrer: '', getElementById: id => scripts.get(id), createElement: () => ({}), head: { appendChild: script => scripts.set(script.id, script) }, querySelector: () => null, querySelectorAll: () => [], body: { querySelectorAll: () => [] } },
    navigator: { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130.0.0.0 Safari/537.36', webdriver: false, maxTouchPoints: 0, sendBeacon: (_, body) => { beacons.push(body); return true; } },
    fetch: async (_, options) => { requests.push(JSON.parse(options.body)); return new Response(null, { status: 204 }); }, setTimeout: () => 1, clearTimeout: () => {},
  };
  return { globals, values, requests, beacons, scripts };
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

    await t.test('client identity spans tabs, rotates after inactivity, and survives denied storage in memory', async () => {
      const values = new Map();
      let clock = Date.now();
      class Clock extends Date { constructor(...args) { super(...(args.length ? args : [clock])); } static now() { return clock; } }
      const storage = { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value) };
      const batches = [];
      const globals = { ...browserEnvironment().globals, Date: Clock, localStorage: storage, fetch: async (_, options) => { batches.push(JSON.parse(options.body)); return new Response(null, { status: 204 }); } };
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
      await first.flushAnalytics(); await second.flushAnalytics(); await denied.flushAnalytics();
      assert(batches.length >= 3);
    });

    await t.test('browser families, versions, OS and desktop-mode iPad are classified without storing full UA', () => {
      const { technology } = load('src/lib/analytics/technology.ts');
      for (const [ua, browser, os] of [
        ['Mozilla/5.0 (Windows NT 10.0) Chrome/130.0 Safari/537.36 YaBrowser/24.10', 'Yandex', 'Windows'],
        ['Mozilla/5.0 (Windows NT 10.0) Chrome/130.0 Safari/537.36 Edg/130.0', 'Edge', 'Windows'],
        ['Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Version/18.0 Mobile Safari/604.1', 'Safari', 'iOS'],
        ['Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) CriOS/130.0 Mobile Safari/604.1', 'Chrome', 'iOS'],
        ['Mozilla/5.0 (Android 14; Mobile) Chrome/130.0 SamsungBrowser/27.0', 'Samsung', 'Android'],
        ['Mozilla/5.0 (X11; Linux) Firefox/132.0', 'Firefox', 'Linux'],
      ]) { const result = technology(ua); assert.equal(result.browser, browser); assert.equal(result.os, os); assert(!JSON.stringify(result).includes('Mozilla')); }
      assert.equal(technology('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) Version/18.0 Safari/605.1', 5).device, 'tablet');
    });

    await t.test('delivery retries HTTP failures across reloads and only deletes events after acknowledgement', async () => {
      const env = browserEnvironment();
      env.globals.fetch = async (_, options) => { env.requests.push(JSON.parse(options.body)); return new Response(null, { status: 503 }); };
      const delivery = loader(env.globals)('src/lib/analytics/delivery.ts');
      const item = event();
      delivery.queueAnalyticsEvent(item);
      await delivery.flushAnalytics();
      assert(env.values.has('altamed.analytics.pending.' + item.id));
      delivery.flushAnalyticsOnExit();
      assert.equal(env.beacons.length, 1); assert(env.values.has('altamed.analytics.pending.' + item.id));
      const reloaded = browserEnvironment(env.values);
      const retry = loader(reloaded.globals)('src/lib/analytics/delivery.ts');
      await retry.flushAnalytics();
      assert.equal(reloaded.requests[0].events[0].id, item.id);
      assert(!env.values.has('altamed.analytics.pending.' + item.id));
      const oldest = event({ timestamp: new Date(Date.now() - shared.DELIVERY_TTL - 60000).toISOString() });
      env.values.set('altamed.analytics.pending.' + oldest.id, JSON.stringify(oldest));
      const expired = browserEnvironment(env.values);
      await loader(expired.globals)('src/lib/analytics/delivery.ts').flushAnalytics();
      assert.equal(expired.requests.length, 0);
      assert(!env.values.has('altamed.analytics.pending.' + oldest.id));
      const oversize = event({ label: 'x'.repeat(25000) }), small = event();
      env.values.set('altamed.analytics.pending.' + oversize.id, JSON.stringify(oversize));
      env.values.set('altamed.analytics.pending.' + small.id, JSON.stringify(small));
      const recovered = browserEnvironment(env.values);
      await loader(recovered.globals)('src/lib/analytics/delivery.ts').flushAnalytics();
      assert.equal(recovered.requests[0].events[0].id, small.id);
    });

    await t.test('queue keys preserve events from two tabs without overwriting', async () => {
      const values = new Map(), a = browserEnvironment(values), b = browserEnvironment(values);
      const first = loader(a.globals)('src/lib/analytics/delivery.ts');
      const second = loader(b.globals)('src/lib/analytics/delivery.ts');
      const one = event(), two = event();
      first.queueAnalyticsEvent(one); second.queueAnalyticsEvent(two);
      assert.equal(values.size, 2);
      await first.flushAnalytics(); await second.flushAnalytics();
      const ids = new Set([...a.requests, ...b.requests].flatMap(batch => batch.events.map(item => item.id)));
      assert(ids.has(one.id)); assert(ids.has(two.id)); assert.equal(values.size, 0);
    });

    await t.test('Metrika initializes with deferred first hit, queues early events, deduplicates first view and confirmed leads', () => {
      const env = browserEnvironment(), metrika = loader(env.globals)('src/lib/analytics/metrika.ts');
      metrika.trackMetrikaPage('/about', 'q=private&utm_source=test');
      metrika.trackMetrikaPage('/about', 'q=private&utm_source=test');
      let calls = env.globals.window.ym.a;
      assert.equal(calls.filter(call => call[1] === 'init').length, 1);
      assert.equal(calls.find(call => call[1] === 'init')[2].defer, true);
      assert.equal(calls.find(call => call[1] === 'init')[2].webvisor, false);
      assert.equal(calls.filter(call => call[1] === 'hit').length, 1);
      assert(!calls.find(call => call[1] === 'hit')[2].includes('private'));
      metrika.trackMetrikaPage('/prices/analytics', '');
      metrika.trackMetrikaPage('/about', 'q=private&utm_source=test');
      assert.equal(calls.filter(call => call[1] === 'hit').length, 2);
      metrika.confirmMetrikaSubmission(event({ form: 'callback' }), 'saved-001');
      metrika.confirmMetrikaSubmission(event({ form: 'callback' }), 'saved-001');
      assert.equal(calls.filter(call => call[1] === 'reachGoal' && call[2] === 'callback_sent').length, 1);
      assert.equal(env.scripts.size, 1);
      env.globals.location.pathname = '/prices/analytics';
      metrika.trackMetrikaEvent(event({ type: 'click', action: 'phone_click' }));
      assert.equal(calls.filter(call => call[2] === 'phone_click').length, 0);
      const local = browserEnvironment(); local.globals.location.hostname = 'localhost';
      loader(local.globals)('src/lib/analytics/metrika.ts').trackMetrikaPage('/about', '');
      assert.equal(local.scripts.size, 0); assert.equal(local.globals.window.ym, undefined);
    });

    await t.test('form stages are unique per visit, confirmations are not forgeable public events, and booking CTA has placement', async () => {
      const env = browserEnvironment(), client = loader(env.globals)('src/lib/analytics/client.ts');
      client.trackFormStage('callback', 'form_view'); client.trackFormStage('callback', 'form_view');
      client.trackFormStage('callback', 'form_click'); client.trackFormStage('callback', 'form_start');
      const context = client.getAnalyticsContext('callback');
      client.confirmAnalyticsSubmission(context, 'confirmed-0001');
      client.recordFormError('callback', 'required', { field: 'phone' });
      const scope = { querySelectorAll: () => [element] };
      const element = { textContent: 'Записаться онлайн', getAttribute: name => ({ href: 'https://online.altamed-c.ru/', 'data-analytics-id': 'header_booking_desktop' }[name] || null), closest: selector => selector === 'header' ? scope : selector.includes('header,') ? scope : null };
      client.trackClick(element);
      await client.flushAnalytics(); await client.flushAnalytics();
      const events = env.requests.flatMap(batch => batch.events);
      assert.equal(events.filter(row => row.type === 'form_view').length, 1);
      assert(!events.some(row => row.type === 'form_success'));
      const click = events.find(row => row.action === 'booking_click');
      assert.equal(click.buttonId, 'header_booking_desktop'); assert.equal(click.placement, 'header');
      assert.equal(context.browser, 'Chrome'); assert.equal(context.landingPath, '/about');
      assert(env.globals.window.ym.a.some(call => call[2] === 'callback_sent'));
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

    await t.test('reports separate saved leads from booking clicks and filter browser/device across all tables and funnels', async () => {
      const safari = { browser: 'Safari', browserVersion: '18', os: 'iOS', device: 'mobile', visitorId: 'visitor-safari-1', sessionId: 'session-safari-1', path: '/appointments', landingPath: '/services/pediatrics', form: 'appointment_page', placement: 'appointment_page' };
      const second = { ...safari, visitorId: 'visitor-safari-2', sessionId: 'session-safari-2' };
      const firefox = { ...safari, browser: 'Firefox', browserVersion: '132', os: 'Windows', device: 'desktop', visitorId: 'visitor-firefox-1', sessionId: 'session-firefox-1' };
      await server.appendEvents([
        event(safari), event({ ...safari, type: 'form_view' }), event({ ...safari, type: 'form_view' }),
        event({ ...safari, type: 'form_click' }), event({ ...safari, type: 'form_start' }),
        event({ ...safari, type: 'form_submit' }), event({ ...safari, type: 'form_submit' }),
        event(second), event({ ...second, type: 'form_view' }), event({ ...second, type: 'form_start' }),
        event({ ...second, type: 'form_error', errorCode: 'required', field: 'phone' }),
        event(firefox), event({ ...firefox, type: 'click', action: 'booking_click', placement: 'header', buttonId: 'header_booking', target: 'online.altamed-c.ru' }),
        event({ ...firefox, type: 'click', action: 'booking_click', placement: 'footer', buttonId: 'footer_booking', target: 'online.altamed-c.ru' }),
      ]);
      await server.recordSavedForm(safari, 'safari-saved-001');
      const report = await reports.buildReport(shared.moscowDay(), shared.moscowDay(), { browser: 'Safari', device: 'mobile' });
      assert.equal(report.totals.visits, 2); assert.equal(report.totals.successfulForms, 1);
      assert.equal(report.totals.leadConversionRate, 50); assert.equal(report.totals.intentVisits, 0);
      const form = report.forms.find(row => row.form === 'appointment_page');
      assert.equal(form.views, 2); assert.equal(form.starts, 2); assert.equal(form.attempts, 2); assert.equal(form.submitVisits, 1);
      assert.equal(form.successes, 1); assert.equal(form.completionRate, 50); assert.equal(form.errors, 1);
      assert.equal(report.errors[0].field, 'phone'); assert.equal(report.browsers[0].label, 'Safari 18');
      assert.equal(report.landings[0].key, '/services/pediatrics'); assert.equal(report.formPages[0].placement, 'appointment_page');
      const intent = await reports.buildReport(shared.moscowDay(), shared.moscowDay(), { browser: 'Firefox' });
      assert.equal(intent.totals.leadConversionRate, 0); assert.equal(intent.totals.intentConversionRate, 100);
      assert.equal(intent.clicks.length, 2); assert.equal(intent.goals.find(row => row.goal === 'booking_click').count, 2);
      await assert.rejects(reports.buildReport(null, null, { browser: 'untrusted-browser' }));
      const delayed = new Date(Date.now() - 6 * 3600000).toISOString();
      assert.equal(server.normalizeEvent(event({ timestamp: delayed })).timestamp, delayed);
      assert.equal(server.normalizeEvent(event({ type: 'form_error', form: 'callback', errorCode: 'raw private message' })), null);
      assert(!reports.reportCsv(report).includes('visitor-safari'));
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
