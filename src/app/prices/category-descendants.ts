/**
 * Локальные helpers для тестовой страницы /prices: дерево категорий и множество потомков.
 * Не трогает API routes и внешний контракт.
 */

export function parseNumericId(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const n = parseInt(value.trim(), 10);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

/** Собирает все узлы дерева в плоский список (корни + вложенные children и т.п.). */
export function flattenCategoryTree(nodes: unknown): unknown[] {
  const out: unknown[] = [];

  function walk(node: unknown): void {
    if (node == null) return;
    if (Array.isArray(node)) {
      for (const x of node) walk(x);
      return;
    }
    if (typeof node !== "object") return;
    const o = node as Record<string, unknown>;
    out.push(node);
    const ch =
      o.children ??
      o.subCategories ??
      o.subcategories ??
      o.childCategories ??
      o.items;
    if (Array.isArray(ch)) {
      for (const c of ch) walk(c);
    }
  }

  walk(nodes);
  return out;
}

function addChildEdge(map: Map<number, number[]>, parentId: number, childId: number): void {
  /** В API parentCategoryId = 0 означает «нет родителя», не узел с id 0. */
  if (parentId === 0 || childId === 0 || parentId === childId) return;
  const list = map.get(parentId);
  if (list) {
    if (!list.includes(childId)) list.push(childId);
  } else {
    map.set(parentId, [childId]);
  }
}

/** Рёбра parent -> child из вложенных children / subCategories (если API отдаёт дерево так). */
function mergeEdgesFromNestedTree(nodes: unknown[], map: Map<number, number[]>): void {
  function walk(node: unknown, parentId: number | null): void {
    if (node == null) return;
    if (Array.isArray(node)) {
      for (const x of node) walk(x, parentId);
      return;
    }
    if (typeof node !== "object") return;
    const o = node as Record<string, unknown>;
    const id = parseNumericId(o.id ?? o.categoryId ?? o.category_id);
    if (id != null && id !== 0 && parentId != null && parentId !== 0) {
      addChildEdge(map, parentId, id);
    }
    const ch = o.children ?? o.subCategories ?? o.subcategories ?? o.childCategories;
    if (Array.isArray(ch) && id != null && id !== 0) {
      for (const c of ch) walk(c, id);
    }
  }
  for (const root of nodes) walk(root, null);
}

/**
 * parentId -> дочерние categoryId.
 * Учитывает: (1) вложенное дерево children, (2) плоские поля parentCategoryId и алиасы.
 */
export function buildCategoryChildrenMap(categoryNodes: unknown[]): Map<number, number[]> {
  const map = new Map<number, number[]>();
  mergeEdgesFromNestedTree(categoryNodes, map);

  const flat = flattenCategoryTree(categoryNodes);
  for (const node of flat) {
    if (!node || typeof node !== "object") continue;
    const o = node as Record<string, unknown>;
    const id = parseNumericId(o.id ?? o.categoryId ?? o.category_id);
    if (id == null || id === 0) continue;
    const parentRaw =
      o.parentCategoryId ?? o.parentId ?? o.parent_id ?? o.parentCategoryID ?? o.parent_category_id;
    const parentId = parseNumericId(parentRaw);
    if (parentId == null || parentId === 0) continue;
    addChildEdge(map, parentId, id);
  }
  map.delete(0);
  return map;
}

/** Выбранная категория + все потомки по map parent -> children. */
export function collectDescendantCategoryIds(
  rootCategoryId: number,
  childrenByParent: Map<number, number[]>
): Set<number> {
  const set = new Set<number>();
  const stack: number[] = [rootCategoryId];
  while (stack.length) {
    const id = stack.pop()!;
    if (set.has(id)) continue;
    set.add(id);
    const kids = childrenByParent.get(id);
    if (kids) for (const c of kids) stack.push(c);
  }
  return set;
}

/** categoryId -> parentCategoryId (null если корень или родитель не указан). */
export function buildParentIdByCategoryId(categoryNodes: unknown[]): Map<number, number | null> {
  const map = new Map<number, number | null>();
  const flat = flattenCategoryTree(categoryNodes);
  for (const node of flat) {
    if (!node || typeof node !== "object") continue;
    const o = node as Record<string, unknown>;
    const id = parseNumericId(o.id ?? o.categoryId ?? o.category_id);
    if (id == null || id === 0) continue;
    const parentRaw =
      o.parentCategoryId ?? o.parentId ?? o.parent_id ?? o.parentCategoryID ?? o.parent_category_id;
    const parentId = parseNumericId(parentRaw);
    map.set(id, parentId === 0 || parentId == null ? null : parentId);
  }
  return map;
}

/** Корневые категории: нет родителя или родитель отсутствует в множестве id. */
export function getRootCategoryIds(allIds: Set<number>, parentByCat: Map<number, number | null>): number[] {
  const roots: number[] = [];
  for (const id of allIds) {
    if (id === 0) continue;
    const p = parentByCat.has(id) ? parentByCat.get(id)! : null;
    if (p === null || p === 0 || !allIds.has(p)) roots.push(id);
  }
  return roots;
}
