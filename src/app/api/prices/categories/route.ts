import { NextResponse } from "next/server";
import { fetchPriceCategories } from "@/lib/price-api";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await fetchPriceCategories();
  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: result.error,
        message: "Не удалось получить категории прайса: внешний API недоступен и локальный fallback отсутствует.",
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
