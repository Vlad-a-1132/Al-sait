import { NextResponse } from 'next/server';
import { allowBatch, appendEvents, isBot, normalizeEvent, readLimitedJson, sameOrigin } from '@/lib/analytics/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const headers = { 'Cache-Control': 'no-store' };

export async function POST(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers });
  if (isBot(request)) return new NextResponse(null, { status: 204, headers });
  try {
    const body = await readLimitedJson(request);
    const raw = body && typeof body === 'object' ? (body as { events?: unknown }).events : undefined;
    if (!Array.isArray(raw) || raw.length < 1 || raw.length > 20) return NextResponse.json({ error: 'Invalid batch' }, { status: 400, headers });
    if (!allowBatch(request, raw.length)) return NextResponse.json({ error: 'Too many events' }, { status: 429, headers: { ...headers, 'Retry-After': '60' } });
    const events = raw.map(event => normalizeEvent(event)).filter((event): event is NonNullable<typeof event> => event !== null);
    if (!events.length) return NextResponse.json({ error: 'Invalid events' }, { status: 400, headers });
    await appendEvents(events);
    return new NextResponse(null, { status: 204, headers });
  } catch (error) {
    const message = error instanceof Error ? error.message : '';
    if (message === 'payload_too_large') return NextResponse.json({ error: 'Payload too large' }, { status: 413, headers });
    if (error instanceof SyntaxError || message === 'invalid_payload') return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers });
    console.error('Analytics write failed:', error);
    return NextResponse.json({ error: 'Analytics storage unavailable' }, { status: 503, headers });
  }
}
