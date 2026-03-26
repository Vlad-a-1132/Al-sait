const fs = require("fs");
const path = require("path");

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function norm(p) {
  const x = p.replace(/\/+/g, "/").replace(/\/$/, "");
  return x === "" ? "/" : x;
}

function getActualStaticRoutes() {
  const root = path.resolve("src/app");
  const files = walk(root);
  const pages = files.filter(
    (f) => f.endsWith(path.sep + "page.tsx") || f.endsWith(path.sep + "page.ts")
  );
  const routes = pages.map((f) => {
    const rel = path.relative(root, f).split(path.sep).join("/");
    const dir = rel.replace(/\/page\.(tsx|ts)$/, "");
    const r = norm("/" + dir);
    return r;
  });
  const unique = [...new Set(routes)].sort((a, b) => a.localeCompare(b));

  const disallowedPrefixes = ["/admin", "/search", "/call-center"];
  const isDisallowed = (r) =>
    disallowedPrefixes.some((p) => r === p || r.startsWith(p + "/"));
  const isDynamic = (r) => r.includes("[") || r.includes("]");
  const isBogus = (r) => r === "/page.tsx";

  return unique.filter((r) => !isDisallowed(r) && !isDynamic(r) && !isBogus(r));
}

function getListedStaticPathsFromSitemapTs() {
  const sitemap = fs.readFileSync(path.resolve("src/app/sitemap.ts"), "utf8");
  const m = sitemap.match(
    /const\s+staticUserPaths:\s*string\[\]\s*=\s*\[[\s\S]*?\];/m
  );
  if (!m) throw new Error("staticUserPaths not found in src/app/sitemap.ts");
  const block = m[0];
  const paths = [...block.matchAll(/['"]((?:\/[^'"\n]*)|\/)['"]/g)].map(
    (mm) => mm[1]
  );
  return [...new Set(paths.map(norm))].sort((a, b) => a.localeCompare(b));
}

function main() {
  const actual = getActualStaticRoutes().map(norm);
  const listed = getListedStaticPathsFromSitemapTs().map(norm);

  const A = new Set(actual);
  const L = new Set(listed);
  const missing = [...A].filter((x) => !L.has(x)).sort((a, b) => a.localeCompare(b));
  const extra = [...L].filter((x) => !A.has(x)).sort((a, b) => a.localeCompare(b));

  console.log("ACTUAL", A.size);
  console.log("LISTED", L.size);
  console.log("MISSING_COUNT", missing.length);
  if (missing.length) console.log(missing.join("\n"));
  console.log("EXTRA_COUNT", extra.length);
  if (extra.length) console.log(extra.join("\n"));
}

main();

