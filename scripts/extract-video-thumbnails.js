/**
 * Скачивает видео с Яндекс.Диска и извлекает первый кадр как превью.
 * Требуется: ffmpeg в PATH.
 * Запуск: npm run video-thumbnails
 *         или: node scripts/extract-video-thumbnails.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { execSync } = require('child_process');

const VIDEO_ITEMS = [
  { direct: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/JlM9tv0zJ_cZzQ', out: 'video-1.jpg' },
  { direct: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/zcppdLEoP5x5TA', out: 'video-2.jpg' },
  { direct: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/0JSoRE2oYAs2vA', out: 'video-3.jpg' },
  { direct: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/OqP2kvCSU4ZJgA', out: 'video-4.jpg' },
];

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'gino', 'video');
const TMP_DIR = path.join(__dirname, '..', '.tmp-video-thumbnails');

function download(url) {
  return new Promise((resolve, reject) => {
    const file = path.join(TMP_DIR, `video-${Date.now()}-${Math.random().toString(36).slice(2)}.mp4`);
    const f = fs.createWriteStream(file);
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        f.close();
        if (fs.existsSync(file)) fs.unlinkSync(file);
        download(res.headers.location).then(resolve).catch(reject);
        return;
      }
      res.pipe(f);
      f.on('finish', () => {
        f.close();
        resolve(file);
      });
    });
    req.on('error', (err) => {
      f.close();
      if (fs.existsSync(file)) fs.unlinkSync(file);
      reject(err);
    });
  });
}

function extractFrame(videoPath, outPath) {
  execSync('ffmpeg', ['-y', '-i', videoPath, '-vframes', '1', '-q:v', '2', outPath], { stdio: 'inherit' });
}

(async () => {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
  } catch {
    console.error('Ошибка: ffmpeg не найден. Установите ffmpeg и добавьте его в PATH.');
    console.error('Windows: choco install ffmpeg  или скачайте с https://ffmpeg.org/');
    process.exit(1);
  }

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

  for (let i = 0; i < VIDEO_ITEMS.length; i++) {
    const { direct, out } = VIDEO_ITEMS[i];
    const outPath = path.join(OUT_DIR, out);
    console.log(`[${i + 1}/${VIDEO_ITEMS.length}] ${out} ...`);
    try {
      const videoPath = await download(direct);
      extractFrame(videoPath, outPath);
      fs.unlinkSync(videoPath);
      console.log(`  OK -> ${outPath}`);
    } catch (err) {
      console.error(`  Ошибка:`, err.message);
    }
  }

  try {
    fs.rmdirSync(TMP_DIR);
  } catch {}
  console.log('Готово.');
})();
