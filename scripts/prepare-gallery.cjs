// Offline only. Originals are read, never overwritten or removed.
// Requires sharp (installed locally or available through NODE_PATH).
// Generated, content-addressed files are committed; production needs no image processing.
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const outputDir = path.join(publicDir, 'images', 'gallery-optimized');
const widths = [480, 960, 1800];

async function main() {
  const entries = JSON.parse(await fs.readFile(path.join(root, 'src/data/clinic-gallery-source.json'), 'utf8'));
  await fs.mkdir(outputDir, { recursive: true });
  const generated = [];
  let originalBytes = 0;
  const totals = Object.fromEntries(widths.map(width => [width, 0]));
  for (const entry of entries) {
    if (!/^[a-z0-9-]+$/.test(entry.id)) throw new Error(`Invalid gallery id: ${entry.id}`);
    const sourcePath = path.resolve(publicDir, `.${entry.source}`);
    if (!sourcePath.startsWith(`${publicDir}${path.sep}`)) throw new Error('Source outside public');
    const original = await fs.readFile(sourcePath);
    const hash = crypto.createHash('sha256').update(original).digest('hex');
    const version = crypto.createHash('sha256').update(`${hash}:gallery-v1-480-960-1800-q78-83`).digest('hex').slice(0, 12);
    const metadata = await sharp(original).metadata();
    originalBytes += original.length;
    const variants = {};
    for (const width of widths) {
      const filename = `${entry.id}-${version}-${width}.webp`;
      const { data, info } = await sharp(original).rotate().resize({ width, withoutEnlargement: true })
        .webp({ quality: width === 1800 ? 83 : 78, effort: 5 }).toBuffer({ resolveWithObject: true });
      await fs.writeFile(path.join(outputDir, filename), data);
      totals[width] += data.length;
      variants[width] = { src: `/images/gallery-optimized/${filename}`, width: info.width, height: info.height, bytes: data.length };
    }
    const blur = await sharp(original).rotate().resize({ width: 16 }).webp({ quality: 30 }).toBuffer();
    generated.push({ ...entry, width: metadata.width, height: metadata.height, originalBytes: original.length,
      originalHash: hash, blur: `data:image/webp;base64,${blur.toString('base64')}`, variants });
    // Guard against any accidental modification of source files during generation.
    if (crypto.createHash('sha256').update(await fs.readFile(sourcePath)).digest('hex') !== hash) {
      throw new Error(`Original changed: ${entry.source}`);
    }
  }
  await fs.writeFile(path.join(root, 'src/data/clinic-gallery.generated.json'), `${JSON.stringify(generated, null, 2)}\n`);
  console.log(JSON.stringify({ photos: generated.length, originalBytes, variantsBytes: totals }, null, 2));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
