import { NextResponse } from 'next/server';
import { getLabCatalog } from '@/lib/lab-catalog';
export const dynamic = 'force-dynamic';
export async function GET() {
  return NextResponse.json(await getLabCatalog(), { headers: { 'Cache-Control': 'public, max-age=60', 'X-Robots-Tag': 'noindex' } });
}
