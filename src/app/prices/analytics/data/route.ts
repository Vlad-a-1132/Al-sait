import { NextResponse } from 'next/server';
import { buildReport, reportCsv } from '@/lib/analytics/report';
import { PRIVATE_HEADERS, pricesAuthorized } from '@/lib/analytics/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: Request) {
  if (!pricesAuthorized(request)) return NextResponse.json({ error: 'Требуется вход' }, { status: 401, headers: { ...PRIVATE_HEADERS, 'WWW-Authenticate': 'Basic realm="Restricted"' } });
  const url = new URL(request.url);
  try {
    const report = await buildReport(url.searchParams.get('from'), url.searchParams.get('to'));
    if (url.searchParams.get('format') === 'csv') return new NextResponse(reportCsv(report), { headers: { ...PRIVATE_HEADERS, 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': `attachment; filename="altamed-analytics-${report.from}-${report.to}.csv"` } });
    return NextResponse.json(report, { headers: PRIVATE_HEADERS });
  } catch (error) {
    if (error instanceof RangeError) return NextResponse.json({ error: error.message }, { status: 400, headers: PRIVATE_HEADERS });
    console.error('Analytics report failed:', error);
    return NextResponse.json({ error: 'Не удалось прочитать статистику. Проверьте доступ приложения к папке аналитики.' }, { status: 503, headers: PRIVATE_HEADERS });
  }
}
