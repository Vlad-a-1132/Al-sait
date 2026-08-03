import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { promises as fs } from "fs";
import path from "path";
import {
  extractArray,
  fetchPriceCategories,
  fetchPriceServices,
  normalizeCategoryRow,
  normalizeServiceRow,
  type PriceCategoryDisplay,
  type PriceServiceDisplay,
} from "@/lib/price-api";
import {
  buildCategoryChildrenMap,
  buildParentIdByCategoryId,
  collectDescendantCategoryIds,
  flattenCategoryTree,
  getRootCategoryIds,
  parseNumericId,
} from "./category-descendants";

export const metadata: Metadata = {
  title: "Прайс (тест API) | Альтамед-С",
  description: "Тестовая страница загрузки прайса через серверный модуль price-api",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type ChatDialogMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  date: string;
};

type ChatDialog = {
  sessionId: string;
  startedAt: string;
  updatedAt: string;
  messages: ChatDialogMessage[];
};

type Appointment = {
  id: string;
  name: string;
  phone: string;
  date: string;
  status?: "pending" | "called" | "not_called";
  message?: string;
  emailStatus?: "pending" | "sent" | "failed";
  emailError?: string;
};

const CHAT_DIALOGS_FILE = path.join(process.cwd(), "data", "chat-dialogs.json");
const APPOINTMENTS_FILE = path.join(process.cwd(), "data", "appointments.json");

async function readChatDialogs(): Promise<ChatDialog[]> {
  try {
    const raw = await fs.readFile(CHAT_DIALOGS_FILE, "utf-8");
    const dialogs = JSON.parse(raw);
    return Array.isArray(dialogs)
      ? dialogs.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
      : [];
  } catch {
    return [];
  }
}

function formatDialogDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleString("ru-RU");
}

function getDialogPreview(dialog: ChatDialog): string {
  return dialog.messages.find((message) => message.role === "user")?.text ?? dialog.messages[0]?.text ?? "Без сообщений";
}

async function readAppointments(): Promise<Appointment[]> {
  try {
    const raw = await fs.readFile(APPOINTMENTS_FILE, "utf-8");
    const appointments = JSON.parse(raw);
    return Array.isArray(appointments)
      ? appointments
          .map((appointment) => ({
            ...appointment,
            status: appointment.status || "pending",
            message: appointment.message || "",
            emailStatus: appointment.emailStatus || "pending",
            emailError: appointment.emailError || "",
          }))
          .sort((a, b) => String(b.id ?? b.date).localeCompare(String(a.id ?? a.date)))
      : [];
  } catch {
    return [];
  }
}

function getAppointmentStatusLabel(status: Appointment["status"]): string {
  if (status === "called") return "Перезвонено";
  if (status === "not_called") return "Не дозвонились";
  return "Новая";
}

function getAppointmentStatusClass(status: Appointment["status"]): string {
  if (status === "called") return "bg-emerald-50 text-emerald-700";
  if (status === "not_called") return "bg-red-50 text-red-700";
  return "bg-amber-50 text-amber-700";
}

function getEmailStatusLabel(status: Appointment["emailStatus"]): string {
  if (status === "sent") return "Письмо отправлено";
  if (status === "failed") return "Почта: ошибка";
  return "Почта: ожидает";
}

function getEmailStatusClass(status: Appointment["emailStatus"]): string {
  if (status === "sent") return "bg-emerald-50 text-emerald-700";
  if (status === "failed") return "bg-red-50 text-red-700";
  return "bg-gray-100 text-gray-600";
}

function dedupePriceServices(rows: PriceServiceDisplay[]): PriceServiceDisplay[] {
  const seen = new Set<string>();
  const out: PriceServiceDisplay[] = [];
  for (const r of rows) {
    const sid = r.serviceId ?? r.id ?? r.code ?? r.name;
    const cid = r.categoryId != null ? String(r.categoryId) : "";
    const key = `${String(sid)}|${cid}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(r);
  }
  return out;
}

function collectAllCategoryIds(
  categoriesFlat: unknown[],
  childrenMap: Map<number, number[]>
): Set<number> {
  const ids = new Set<number>();
  for (const n of categoriesFlat) {
    if (!n || typeof n !== "object") continue;
    const o = n as Record<string, unknown>;
    const id = parseNumericId(o.id ?? o.categoryId ?? o.category_id);
    if (id != null && id !== 0) ids.add(id);
  }
  for (const [p, kids] of childrenMap) {
    if (p !== 0) ids.add(p);
    for (const k of kids) if (k !== 0) ids.add(k);
  }
  return ids;
}

function buildIdToName(categoryRows: PriceCategoryDisplay[], childrenMap: Map<number, number[]>): Map<number, string> {
  const map = new Map<number, string>();
  for (const row of categoryRows) {
    if (!row) continue;
    const id = parseNumericId(row.id);
    if (id != null && id !== 0) map.set(id, row.name);
  }
  for (const [p, kids] of childrenMap) {
    if (p !== 0 && !map.has(p)) map.set(p, `Категория ${p}`);
    for (const k of kids) if (k !== 0 && !map.has(k)) map.set(k, `Категория ${k}`);
  }
  return map;
}

function serviceMatchesQuery(s: PriceServiceDisplay, needleLower: string): boolean {
  const hay = [s.name, s.code ?? "", s.mzCode ?? ""].join(" ").toLowerCase();
  return hay.includes(needleLower);
}

/** Сумма длин списков услуг в узле и всех потомках (в пределах branchScope). */
function countServicesInSubtree(
  categoryId: number,
  childrenMap: Map<number, number[]>,
  servicesByCategory: Map<number, PriceServiceDisplay[]>,
  branchScope: Set<number> | null
): number {
  let sum = 0;
  const stack = [categoryId];
  const done = new Set<number>();
  while (stack.length) {
    const id = stack.pop()!;
    if (id === 0 || done.has(id)) continue;
    done.add(id);
    if (branchScope && !branchScope.has(id)) continue;
    sum += (servicesByCategory.get(id) ?? []).length;
    for (const c of childrenMap.get(id) ?? []) {
      if (c !== 0 && (!branchScope || branchScope.has(c))) stack.push(c);
    }
  }
  return sum;
}

/** Категории, где есть своя услуга после фильтра или есть совпадение у потомка. */
function buildVisibleCategoryIdsForSearch(
  rootId: number,
  childrenMap: Map<number, number[]>,
  servicesByCategory: Map<number, PriceServiceDisplay[]>,
  branchScope: Set<number> | null
): Set<number> {
  const visible = new Set<number>();
  function visit(id: number): boolean {
    if (id === 0) return false;
    if (branchScope && !branchScope.has(id)) return false;
    const kids = (childrenMap.get(id) ?? []).filter((k) => k !== 0 && (!branchScope || branchScope.has(k)));
    const anyChild = kids.some((kid) => visit(kid));
    const own = (servicesByCategory.get(id) ?? []).length > 0;
    if (own || anyChild) {
      visible.add(id);
      return true;
    }
    return false;
  }
  visit(rootId);
  return visible;
}

function groupServicesByCategoryId(services: PriceServiceDisplay[]): Map<number, PriceServiceDisplay[]> {
  const m = new Map<number, PriceServiceDisplay[]>();
  for (const s of services) {
    const cid = parseNumericId(s.categoryId);
    if (cid == null || cid === 0) continue;
    const list = m.get(cid);
    if (list) list.push(s);
    else m.set(cid, [s]);
  }
  for (const list of m.values()) {
    list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
  }
  return m;
}

type BranchCtx = {
  childrenMap: Map<number, number[]>;
  servicesByCategory: Map<number, PriceServiceDisplay[]>;
  idToName: Map<number, string>;
  /** При ?cat= — не уходить за пределы ветки */
  branchScope: Set<number> | null;
  /** При поиске / zero: не рендерить ветки без совпадений */
  visibleCategoryIds: Set<number> | null;
};

function renderCategoryBranch(categoryId: number, depth: number, ctx: BranchCtx): ReactNode {
  if (categoryId === 0) return null;
  const { childrenMap, servicesByCategory, idToName, branchScope, visibleCategoryIds } = ctx;
  if (visibleCategoryIds && !visibleCategoryIds.has(categoryId)) return null;
  const name = idToName.get(categoryId) ?? `Категория ${categoryId}`;
  const ownServices = servicesByCategory.get(categoryId) ?? [];
  const branchTotal = countServicesInSubtree(categoryId, childrenMap, servicesByCategory, branchScope);
  let childIds = [...(childrenMap.get(categoryId) ?? [])];
  if (branchScope) {
    childIds = childIds.filter((id) => id !== 0 && branchScope.has(id));
  } else {
    childIds = childIds.filter((id) => id !== 0);
  }
  if (visibleCategoryIds) {
    childIds = childIds.filter((id) => visibleCategoryIds.has(id));
  }
  childIds.sort((a, b) => (idToName.get(a) ?? "").localeCompare(idToName.get(b) ?? "", "ru"));

  const hasChildren = childIds.length > 0;
  const showEmptyNote = ownServices.length === 0 && !hasChildren;

  return (
    <div key={categoryId} className="mb-4 border-l-2 border-emerald-100 pl-3" style={{ marginLeft: depth === 0 ? 0 : 12 }}>
      <div className="mb-2 flex flex-wrap items-baseline gap-2">
        <Link href={`/prices?cat=${categoryId}`} className="text-base font-semibold text-gray-900 hover:text-emerald-700">
          {name}
        </Link>
        <span className="font-mono text-xs text-gray-500">id {categoryId}</span>
        <span className="text-sm text-gray-600">
          своих услуг: {ownServices.length} · всего в ветке: {branchTotal}
        </span>
      </div>

      {ownServices.length > 0 ? (
        <div className="mb-3 overflow-x-auto rounded border border-gray-100 bg-gray-50/50">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-gray-200 text-gray-600">
                <th className="py-1.5 px-2 font-medium">Код</th>
                <th className="py-1.5 px-2 font-medium">Название</th>
                <th className="py-1.5 px-2 font-medium">Цена</th>
              </tr>
            </thead>
            <tbody>
              {ownServices.map((s, i) => (
                <tr
                  key={`${String(s.serviceId ?? s.id ?? s.code ?? i)}-${String(s.categoryId ?? "")}`}
                  className={`border-b border-gray-100 last:border-0 ${s.priceIsZero ? "bg-amber-50" : ""}`}
                >
                  <td className="px-2 py-1 font-mono text-gray-600">{s.code ?? "—"}</td>
                  <td className="px-2 py-1">{s.name}</td>
                  <td className="px-2 py-1 whitespace-nowrap">
                    {s.price != null ? String(s.price) : "—"}
                    {s.priceIsZero ? (
                      <span className="ml-1.5 rounded bg-amber-200 px-1 py-0.5 text-[10px] font-semibold text-amber-900">
                        цена 0
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : showEmptyNote ? (
        <p className="mb-2 text-xs text-gray-400">Нет услуг</p>
      ) : null}

      {childIds.map((cid) => renderCategoryBranch(cid, depth + 1, ctx))}
    </div>
  );
}

type PageProps = {
  searchParams?: { cat?: string | string[]; q?: string | string[]; zero?: string | string[] };
};

export default async function PricesTestPage({ searchParams }: PageProps) {
  const [servicesRes, categoriesRes, chatDialogs, appointments] = await Promise.all([
    fetchPriceServices(),
    fetchPriceCategories(),
    readChatDialogs(),
    readAppointments(),
  ]);

  const catParam = searchParams?.cat;
  const catStr = Array.isArray(catParam) ? catParam[0] : catParam;
  const selectedCategoryId = catStr != null && catStr !== "" ? parseInt(String(catStr), 10) : NaN;
  const hasSelection = Number.isFinite(selectedCategoryId) && selectedCategoryId > 0;

  const qParam = searchParams?.q;
  const qStr = Array.isArray(qParam) ? qParam[0] : qParam;
  const searchNeedle = (qStr ?? "").trim().toLowerCase();
  const hasSearch = hasSelection && searchNeedle.length > 0;

  const zeroParam = searchParams?.zero;
  const zeroStr = Array.isArray(zeroParam) ? zeroParam[0] : zeroParam;
  const hasZeroFilter = hasSelection && zeroStr === "1";

  const categoriesRaw = extractArray(categoriesRes.ok ? categoriesRes.data : undefined);
  const servicesRaw = extractArray(servicesRes.ok ? servicesRes.data : undefined);

  const categoriesFlat = flattenCategoryTree(categoriesRaw);
  const seenCategoryKeys = new Set<string>();
  const categoryRows = categoriesFlat
    .map((n) => normalizeCategoryRow(n))
    .filter((row): row is NonNullable<typeof row> => row != null)
    .filter((row) => {
      const key = row.id != null ? String(row.id) : row.name;
      if (seenCategoryKeys.has(key)) return false;
      seenCategoryKeys.add(key);
      return true;
    });

  const childrenMap = buildCategoryChildrenMap(categoriesRaw);
  const parentByCat = buildParentIdByCategoryId(categoriesRaw);
  const allCategoryIds = collectAllCategoryIds(categoriesFlat, childrenMap);

  const allowedCategoryIds = hasSelection
    ? collectDescendantCategoryIds(selectedCategoryId, childrenMap)
    : null;

  const allServiceRows = servicesRaw
    .map(normalizeServiceRow)
    .filter((row): row is NonNullable<typeof row> => row != null);

  const deduped = dedupePriceServices(allServiceRows);
  const servicesForTree =
    allowedCategoryIds != null
      ? deduped.filter((s) => {
          const cid = parseNumericId(s.categoryId);
          return cid != null && allowedCategoryIds.has(cid);
        })
      : deduped;

  let servicesFiltered = servicesForTree;
  if (hasZeroFilter) {
    servicesFiltered = servicesFiltered.filter((s) => s.priceIsZero === true);
  }
  if (hasSearch) {
    servicesFiltered = servicesFiltered.filter((s) => serviceMatchesQuery(s, searchNeedle));
  }

  const servicesByCategory = groupServicesByCategoryId(servicesFiltered);
  const idToName = buildIdToName(categoryRows, childrenMap);

  let rootIds: number[] = [];
  if (hasSelection) {
    if (allCategoryIds.has(selectedCategoryId)) {
      rootIds = [selectedCategoryId];
    }
  } else {
    rootIds = getRootCategoryIds(allCategoryIds, parentByCat);
    rootIds.sort((a, b) => (idToName.get(a) ?? "").localeCompare(idToName.get(b) ?? "", "ru"));
  }

  const branchScope = hasSelection && allowedCategoryIds ? allowedCategoryIds : null;
  const hasPruneFilters = hasSearch || hasZeroFilter;
  const visibleCategoryIds =
    hasPruneFilters && branchScope && rootIds.length === 1
      ? buildVisibleCategoryIdsForSearch(rootIds[0], childrenMap, servicesByCategory, branchScope)
      : null;
  const ctx: BranchCtx = { childrenMap, servicesByCategory, idToName, branchScope, visibleCategoryIds };

  const noServicesAtAll = servicesRes.ok && servicesRaw.length === 0;
  const noDataCategories = categoriesRes.ok && categoryRows.length === 0 && allCategoryIds.size === 0;
  const noBranch =
    hasSelection && (!allCategoryIds.has(selectedCategoryId) || rootIds.length === 0);
  const noServicesInBranch =
    hasSelection && allCategoryIds.has(selectedCategoryId) && servicesForTree.length === 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">Прайс — тест интеграции</h1>
      <p className="mb-6 text-sm text-gray-600">
        Данные из <code className="rounded bg-gray-100 px-1">price-api</code>. На главной — только{" "}
        <strong>основные разделы</strong>; после выбора раздела открывается его дерево категорий и услуг (
        <code className="rounded bg-gray-100 px-1">?cat=id</code>).
      </p>

      <section className="mb-8 rounded border border-gray-200 bg-white p-4">
        <h2 className="mb-2 text-lg font-semibold">Статус</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-800">
          <li>
            Услуги: {servicesRes.ok ? "OK" : "ошибка"}{" "}
            {servicesRes.ok ? <span className="text-gray-500">(источник: {servicesRes.source})</span> : null}
            {!servicesRes.ok && <span className="block text-red-600">{servicesRes.error}</span>}
          </li>
          <li>
            Категории: {categoriesRes.ok ? "OK" : "ошибка"}{" "}
            {categoriesRes.ok ? <span className="text-gray-500">(источник: {categoriesRes.source})</span> : null}
            {!categoriesRes.ok && <span className="block text-red-600">{categoriesRes.error}</span>}
          </li>
        </ul>
      </section>

      <section className="mb-8 rounded border border-gray-200 bg-white p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold">Заявки на запись</h2>
            <p className="text-xs text-gray-500">Последние заявки с сайта и чат-бота.</p>
          </div>
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
            Всего заявок: {appointments.length}
          </span>
        </div>
        {appointments.length === 0 ? (
          <p className="text-sm text-gray-500">Заявок пока нет.</p>
        ) : (
          <div className="space-y-3">
            {appointments.slice(0, 30).map((appointment) => (
              <article key={appointment.id} className="rounded border border-gray-100 bg-gray-50 p-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="break-words text-sm font-semibold text-gray-900">{appointment.name}</h3>
                      <span
                        className={`rounded px-2 py-0.5 text-xs font-medium ${getAppointmentStatusClass(
                          appointment.status
                        )}`}
                      >
                        {getAppointmentStatusLabel(appointment.status)}
                      </span>
                      <span
                        className={`rounded px-2 py-0.5 text-xs font-medium ${getEmailStatusClass(
                          appointment.emailStatus
                        )}`}
                      >
                        {getEmailStatusLabel(appointment.emailStatus)}
                      </span>
                    </div>
                    <a className="mt-1 inline-block text-sm font-medium text-emerald-700" href={`tel:${appointment.phone}`}>
                      {appointment.phone}
                    </a>
                  </div>
                  <div className="shrink-0 text-right text-xs text-gray-500">
                    <div>{appointment.date}</div>
                    <div className="font-mono">ID: {appointment.id}</div>
                  </div>
                </div>
                {appointment.message ? (
                  <p className="mt-2 whitespace-pre-wrap break-words rounded bg-white p-2 text-sm text-gray-700">
                    {appointment.message}
                  </p>
                ) : null}
                {appointment.emailStatus === "failed" && appointment.emailError ? (
                  <p className="mt-2 whitespace-pre-wrap break-words rounded bg-red-50 p-2 text-xs text-red-700">
                    Ошибка отправки: {appointment.emailError}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mb-8 rounded border border-gray-200 bg-white p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold">Диалоги с ботом</h2>
            <p className="text-xs text-gray-500">Каждая карточка — отдельная сессия посетителя.</p>
          </div>
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
            Всего сессий: {chatDialogs.length}
          </span>
        </div>
        {chatDialogs.length === 0 ? (
          <p className="text-sm text-gray-500">Диалогов пока нет.</p>
        ) : (
          <div className="space-y-3">
            {chatDialogs.slice(0, 30).map((dialog, index) => {
              const preview = getDialogPreview(dialog);

              return (
                <details key={dialog.sessionId} className="rounded border border-gray-100 bg-gray-50 p-3">
                  <summary className="cursor-pointer list-none">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900">
                            Диалог #{chatDialogs.length - index}
                          </span>
                          <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                            сообщений: {dialog.messages.length}
                          </span>
                        </div>
                        <p className="mt-1 break-words text-sm text-gray-600">Первый вопрос: {preview}</p>
                      </div>
                      <div className="shrink-0 text-right text-xs text-gray-500">
                        <div>Начат: {formatDialogDate(dialog.startedAt)}</div>
                        <div>Обновлен: {formatDialogDate(dialog.updatedAt)}</div>
                      </div>
                    </div>
                    <div className="mt-2 break-all font-mono text-[11px] text-gray-400">
                      ID сессии: {dialog.sessionId}
                    </div>
                  </summary>
                  <div className="mt-3 space-y-2">
                    {dialog.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`rounded p-2 text-sm ${
                          message.role === "user"
                            ? "bg-emerald-50 text-emerald-950"
                            : "bg-white text-gray-800"
                        }`}
                      >
                        <div className="mb-1 flex items-center justify-between gap-2 text-xs text-gray-500">
                          <span>{message.role === "user" ? "Пациент" : "Бот"}</span>
                          <span>{formatDialogDate(message.date)}</span>
                        </div>
                        <p className="whitespace-pre-wrap break-words">{message.text}</p>
                      </div>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        )}
      </section>

      <section className="rounded border border-gray-200 bg-white p-4">
        {noDataCategories ? (
          <p className="text-sm text-gray-500">Нет данных категорий или формат не распознан.</p>
        ) : noBranch ? (
          <p className="text-sm text-amber-800">
            Категория <span className="font-mono">{selectedCategoryId}</span> не найдена в дереве.
          </p>
        ) : !hasSelection ? (
          <>
            <h2 className="mb-1 text-lg font-semibold">Основные разделы прайса</h2>
            <p className="mb-4 text-xs text-gray-500">Выберите раздел — откроется дерево категорий и услуг этой ветки.</p>
            {rootIds.length === 0 ? (
              <p className="text-sm text-gray-500">Корневые категории не найдены.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {rootIds.map((id) => (
                  <li key={id} className="border-b border-gray-100 pb-2 last:border-0">
                    <Link href={`/prices?cat=${id}`} className="font-medium text-emerald-700 hover:underline">
                      {idToName.get(id) ?? `Раздел ${id}`}
                    </Link>
                    <span className="ml-2 font-mono text-xs text-gray-400">id {id}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <>
            <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm">
              <Link href="/prices" className="text-emerald-600 hover:underline">
                Все разделы
              </Link>
              <span className="text-gray-300">/</span>
              <span className="font-semibold text-gray-900">
                {idToName.get(selectedCategoryId) ?? `Раздел ${selectedCategoryId}`}
              </span>
            </nav>
            <h2 className="mb-3 text-lg font-semibold">Дерево категорий и услуг</h2>
            <form method="get" action="/prices" className="mb-4 flex flex-wrap items-end gap-4">
              <input type="hidden" name="cat" value={selectedCategoryId} />
              <label className="block text-sm text-gray-700">
                Поиск в разделе
                <input
                  type="search"
                  name="q"
                  defaultValue={typeof qStr === "string" ? qStr : ""}
                  placeholder="Название, код, МЗ…"
                  className="mt-1 block w-full min-w-[200px] max-w-md rounded border border-gray-300 px-2 py-1.5 text-sm"
                />
              </label>
              <label className="flex cursor-pointer items-center gap-2 pb-0.5 text-sm text-gray-700">
                <input type="checkbox" name="zero" value="1" defaultChecked={hasZeroFilter} />
                только цена 0
              </label>
              <button
                type="submit"
                className="rounded bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Применить
              </button>
              {hasSearch || hasZeroFilter ? (
                <Link
                  href={`/prices?cat=${selectedCategoryId}`}
                  className="text-sm text-gray-600 underline underline-offset-2 hover:text-gray-900"
                >
                  Сброс
                </Link>
              ) : null}
            </form>
            {noServicesAtAll ? (
              <p className="mb-3 text-sm text-gray-500">Нет сырых услуг в ответе API (дерево категорий ниже).</p>
            ) : null}
            {hasPruneFilters && servicesFiltered.length === 0 ? (
              <p className="mb-3 text-sm text-amber-800">
                {hasSearch && hasZeroFilter
                  ? "По запросу и фильтру «только цена 0» ничего не найдено в этом разделе."
                  : hasZeroFilter
                    ? "Нет услуг с нулевой ценой в этой ветке (с учётом подкатегорий)."
                    : "По запросу ничего не найдено в этом разделе."}
              </p>
            ) : noServicesInBranch && !hasPruneFilters ? (
              <p className="mb-3 text-sm text-amber-800">В этой ветке нет услуг с известным categoryId.</p>
            ) : (
              <div>{rootIds.map((id) => renderCategoryBranch(id, 0, ctx))}</div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
