const fs = require("fs");
const path = require("path");

const base = "https://altamed-c.ru";

function uniqSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a.localeCompare(b));
}

function readText(p) {
  return fs.readFileSync(p, "utf8");
}

function extractStaticUserPathsFromSitemapTs(sitemapTs) {
  const m = sitemapTs.match(/const\s+staticUserPaths:\s*string\[\]\s*=\s*\[[\s\S]*?\];/m);
  if (!m) throw new Error("staticUserPaths not found in src/app/sitemap.ts");
  const block = m[0];
  const paths = [];
  for (const mm of block.matchAll(/['"]((?:\/[^'"\n]*)|\/)['"]/g)) {
    paths.push(mm[1]);
  }
  return uniqSorted(paths);
}

function extractDoctorSlugs(staticDataTs) {
  // doctors array uses `slug: "..."` with double quotes in this repo
  const slugs = [...staticDataTs.matchAll(/\bslug:\s*"([^"]+)"/g)].map((m) => m[1]);
  return uniqSorted(slugs);
}

function extractArticlesBlock(staticDataTs) {
  const start = staticDataTs.indexOf("export const articles");
  if (start === -1) return "";
  const rest = staticDataTs.slice(start);
  const next = rest.indexOf("export const", "export const articles".length);
  return next === -1 ? rest : rest.slice(0, next);
}

function extractBlogIds(staticDataTs) {
  const block = extractArticlesBlock(staticDataTs);
  const ids = [...block.matchAll(/\bid:\s*(\d+)/g)].map((m) => Number(m[1]));
  return [...new Set(ids)].sort((a, b) => a - b);
}

function extractBlogSlugsFromGynecList() {
  const gynecPath = path.resolve(process.cwd(), "src/data/gynec-articles-images.ts");
  const txt = readText(gynecPath);
  const urls = [...txt.matchAll(/\burl:\s*'([^']+)'/g)].map((m) => m[1]);
  const blogSlugs = urls
    .filter((u) => u.startsWith("/blog/"))
    .map((u) => u.replace(/^\/blog\//, ""));
  return uniqSorted(blogSlugs);
}

function extractPromoSlugsFromSitemapTs(sitemapTs) {
  const m = sitemapTs.match(/const\s+promoPages:[\s\S]*?\]\.map\(/m);
  if (!m) return [];
  const block = m[0];
  const slugs = [...block.matchAll(/\bslug:\s*'([^']+)'/g)].map((mm) => mm[1]);
  return uniqSorted(slugs);
}

function extractQuotedItemsFromArrayFile(filePath, exportedArrayName) {
  const txt = readText(filePath);
  const re = new RegExp(
    `export\\s+const\\s+${exportedArrayName}[^=]*=\\s*\\[[\\s\\S]*?\\];`,
    "m"
  );
  const m = txt.match(re);
  if (!m) return [];
  const block = m[0];
  const items = [...block.matchAll(/"([^"]+)"/g)].map((mm) => mm[1]);
  return uniqSorted(items);
}

function toUrl(p) {
  return p === "/" ? base : base + p;
}

function main() {
  const repoRoot = process.cwd();
  const sitemapPath = path.resolve(repoRoot, "src/app/sitemap.ts");
  const staticDataPath = path.resolve(repoRoot, "src/data/static-data.ts");
  const outPath = path.resolve(repoRoot, "SITEMAP_URLS.md");

  const sitemapTs = readText(sitemapPath);
  const staticDataTs = readText(staticDataPath);

  const staticPaths = extractStaticUserPathsFromSitemapTs(sitemapTs);
  const staticUrls = staticPaths.map(toUrl);

  const doctorUrls = extractDoctorSlugs(staticDataTs).map((s) => `${base}/doctors/${s}`);
  // Публичный блог: /blog/<slug>
  const blogUrls = extractBlogSlugsFromGynecList().map((slug) => `${base}/blog/${slug}`);
  const promoUrls = extractPromoSlugsFromSitemapTs(sitemapTs).map((s) => `${base}/promo/${s}`);

  const implantologySlugs = extractQuotedItemsFromArrayFile(
    path.resolve(repoRoot, "src/data/abramov/implantologyDirectionPages.ts"),
    "IMPLANTOLOGY_DIRECTION_SLUGS"
  );
  const orthodonticsSlugs = extractQuotedItemsFromArrayFile(
    path.resolve(repoRoot, "src/data/goncharenko/orthoDirectionPages.ts"),
    "ORTHO_DIRECTION_SLUGS"
  );
  const implantologyUrls = implantologySlugs.map((s) => `${base}/services/dentistry/implantology/${s}`);
  const orthodonticsUrls = orthodonticsSlugs.map((s) => `${base}/services/dentistry/orthodontics/${s}`);

  const lines = [];
  lines.push("# Sitemap URLs");
  lines.push("");
  lines.push("Generated from:");
  lines.push(`- \`src/app/sitemap.ts\``);
  lines.push(`- \`src/data/static-data.ts\``);
  lines.push("");

  lines.push(`## Static pages (${staticUrls.length})`);
  lines.push("");
  for (const u of staticUrls) lines.push(`${u}`);
  lines.push("");

  lines.push(`## Doctors (${doctorUrls.length})`);
  lines.push("");
  for (const u of doctorUrls) lines.push(`${u}`);
  lines.push("");

  lines.push(`## Blog (${blogUrls.length})`);
  lines.push("");
  for (const u of blogUrls) lines.push(`${u}`);
  lines.push("");

  lines.push(`## Promo (${promoUrls.length})`);
  lines.push("");
  for (const u of promoUrls) lines.push(`${u}`);
  lines.push("");

  lines.push(`## Dentistry directions (${implantologyUrls.length + orthodonticsUrls.length})`);
  lines.push("");
  for (const u of implantologyUrls) lines.push(`${u}`);
  for (const u of orthodonticsUrls) lines.push(`${u}`);
  lines.push("");

  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  console.log(`Wrote ${path.relative(repoRoot, outPath)} (${lines.length} lines)`);
}

main();

