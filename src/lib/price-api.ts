import { promises as fs } from "fs";
import path from "path";

const FETCH_TIMEOUT_MS = 15_000;

/**
 * In-memory TTL (ms) after a successful upstream response.
 * Env `PRICE_API_MEMORY_TTL_MS`: non-negative integer; unset or invalid → 0 (refetch every time).
 */
function getMemoryTtlMs(): number {
  const raw = process.env.PRICE_API_MEMORY_TTL_MS?.trim();
  if (!raw) return 0;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.floor(n);
}

const SERVICES_FILE = path.join(process.cwd(), "data", "price-api-services.json");
const CATEGORIES_FILE = path.join(process.cwd(), "data", "price-api-categories.json");

export type PriceApiSource = "memory" | "network" | "file";

export type PriceApiResult =
  | { ok: true; source: PriceApiSource; data: unknown }
  | { ok: false; error: string };

type MemorySlot = {
  data: unknown;
  /** Timestamp until which we skip live fetch (only extended on successful network). */
  freshUntil: number;
};

const memory = {
  services: null as MemorySlot | null,
  categories: null as MemorySlot | null,
};

function requireBaseUrl(): string {
  const raw = process.env.PRICE_API_BASE_URL?.trim();
  if (!raw) {
    throw new Error("PRICE_API_BASE_URL is not set");
  }
  return raw.replace(/\/+$/, "");
}

async function fetchWithTimeout(url: string): Promise<Response> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  const apiKey = process.env.PRICE_API_KEY?.trim();
  const init: RequestInit = {
    signal: controller.signal,
    cache: "no-store",
  };
  if (apiKey) {
    init.headers = { "X-Api-Key": apiKey };
  }
  try {
    return await fetch(url, init);
  } finally {
    clearTimeout(t);
  }
}

async function readJsonFile(filePath: string): Promise<unknown | null> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as unknown;
  } catch {
    return null;
  }
}

function errorMessage(err: unknown): string {
  if (err instanceof Error) {
    if (err.name === "AbortError") return `Request timed out after ${FETCH_TIMEOUT_MS}ms`;
    return err.message;
  }
  return String(err);
}

/** Persist last successful upstream payload; failures must not break the API response. */
async function tryPersistFallback(filePath: string, data: unknown): Promise<void> {
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.warn("[price-api] fallback file write failed:", path.basename(filePath), errorMessage(err));
  }
}

async function loadFromUpstream(relativePath: string): Promise<unknown> {
  const base = requireBaseUrl();
  const url = `${base}${relativePath.startsWith("/") ? relativePath : `/${relativePath}`}`;
  const res = await fetchWithTimeout(url);
  if (!res.ok) {
    throw new Error(`Upstream ${relativePath} returned ${res.status} ${res.statusText}`);
  }
  const text = await res.text();
  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new Error(`Upstream ${relativePath} returned non-JSON body`);
  }
}

async function resolveResource(
  key: "services" | "categories",
  upstreamPath: string,
  filePath: string
): Promise<PriceApiResult> {
  const now = Date.now();
  const slot = memory[key];

  if (slot && now < slot.freshUntil) {
    return { ok: true, source: "memory", data: slot.data };
  }

  try {
    const data = await loadFromUpstream(upstreamPath);
    memory[key] = { data, freshUntil: now + getMemoryTtlMs() };
    await tryPersistFallback(filePath, data);
    return { ok: true, source: "network", data };
  } catch (err) {
    const fromDisk = await readJsonFile(filePath);
    if (fromDisk !== null) {
      memory[key] = { data: fromDisk, freshUntil: 0 };
      return {
        ok: true,
        source: "file",
        data: fromDisk,
      };
    }
    return {
      ok: false,
      error: `Live API and file fallback failed for ${key}: ${errorMessage(err)}`,
    };
  }
}

export async function fetchPriceServices(): Promise<PriceApiResult> {
  return resolveResource("services", "/api/prices/services", SERVICES_FILE);
}

export async function fetchPriceCategories(): Promise<PriceApiResult> {
  return resolveResource("categories", "/api/prices/categories", CATEGORIES_FILE);
}

/** Minimal shape for rows we show on the test page (external API may use other field names). */
export type PriceServiceDisplay = {
  id?: unknown;
  /** Явный id услуги из API (для дедупликации вместе с categoryId). */
  serviceId?: unknown;
  name: string;
  code?: string;
  /** Код МЗ и т.п., для поиска на /prices. */
  mzCode?: string;
  price?: unknown;
  categoryId?: unknown;
  categoryName?: string;
  /** actualPrice (или итоговое поле цены) равно нулю — для подсветки на /prices. */
  priceIsZero?: boolean;
};

export type PriceCategoryDisplay = {
  id?: unknown;
  name: string;
};

function pickString(o: Record<string, unknown>, keys: string[]): string | undefined {
  for (const k of keys) {
    const v = o[k];
    if (typeof v === "string" && v.trim()) return v;
    if (typeof v === "number" && Number.isFinite(v)) return String(v);
  }
  return undefined;
}

function isZeroPriceValue(v: unknown): boolean {
  if (v === 0 || v === "0" || v === "0.0" || v === "0,00" || v === "0.00") return true;
  if (typeof v === "number" && Number.isFinite(v) && Math.abs(v) < 1e-12) return true;
  if (typeof v === "string") {
    const n = parseFloat(v.replace(/\s/g, "").replace(",", "."));
    return Number.isFinite(n) && n === 0;
  }
  return false;
}

export function normalizeServiceRow(item: unknown): PriceServiceDisplay | null {
  if (!item || typeof item !== "object") return null;
  const o = item as Record<string, unknown>;
  const name = pickString(o, ["serviceName", "service_name", "name", "title"]);
  if (!name) return null;
  const serviceId = o.serviceId ?? o.service_id;
  const ap = o.actualPrice ?? o.actual_price;
  const displayPrice = ap ?? o.price ?? o.cost ?? o.amount;
  return {
    id: serviceId ?? o.id,
    serviceId,
    name,
    code: pickString(o, ["serviceCode", "service_code", "code", "sku"]),
    mzCode: pickString(o, ["serviceMZCode", "service_mz_code", "serviceMzCode", "mzCode"]),
    price: displayPrice,
    categoryId: o.categoryId ?? o.category_id ?? o.categoryID,
    categoryName: pickString(o, ["categoryName", "category_name"]),
    priceIsZero: ap !== undefined && ap !== null ? isZeroPriceValue(ap) : isZeroPriceValue(displayPrice),
  };
}

export function normalizeCategoryRow(item: unknown): PriceCategoryDisplay | null {
  if (!item || typeof item !== "object") return null;
  const o = item as Record<string, unknown>;
  const name = pickString(o, ["name", "title", "categoryName", "category_name"]);
  if (!name) return null;
  return {
    id: o.id ?? o.categoryId ?? o.category_id,
    name,
  };
}

/** If API returns { data: [...] } or raw array, extract the array for listing. */
export function extractArray(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;
  if (payload && typeof payload === "object") {
    const o = payload as Record<string, unknown>;
    const candidates = ["data", "services", "items", "results", "categories"] as const;
    for (const k of candidates) {
      const v = o[k];
      if (Array.isArray(v)) return v;
    }
  }
  return [];
}
