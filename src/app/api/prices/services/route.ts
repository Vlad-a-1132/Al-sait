import { NextResponse } from "next/server";
import { fetchPriceServices } from "@/lib/price-api";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await fetchPriceServices();
  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: result.error,
        message: "Не удалось получить прайс услуг: внешний API недоступен и локальный fallback отсутствует.",
      },
      { status: 503 }
    );
  }
  return NextResponse.json({
    ok: true,
    source: result.source,
    data: result.data,
  });
}
