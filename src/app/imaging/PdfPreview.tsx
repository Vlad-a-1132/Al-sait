'use client';

import { useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';

// Only loaded in the browser. PDF and worker are same-origin; no external viewer/CDN.
export default function PdfPreview({ url }: { url: string }) {
  const [document, setDocument] = useState<PDFDocumentProxy | null>(null);
  const [page, setPage] = useState(1), [zoom, setZoom] = useState(1), [busy, setBusy] = useState(true), [error, setError] = useState('');
  const canvas = useRef<HTMLCanvasElement>(null), container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(700);

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const observer = new ResizeObserver(entries => setWidth(Math.max(200, entries[0].contentRect.width - 32)));
    observer.observe(node); return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let disposed = false;
    let loading: ReturnType<typeof import('pdfjs-dist').getDocument> | undefined;
    setBusy(true); setError(''); setPage(1); setDocument(null);
    void import('pdfjs-dist/legacy/build/pdf.mjs').then(async pdfjs => {
      if (disposed) return;
      // Serve the unmodified ES module from our authenticated endpoint. Next 14's asset
      // minifier treats new URL(...worker.mjs) as a script and rejects its import.meta.
      pdfjs.GlobalWorkerOptions.workerSrc = '/api/imaging/pdf-assets/worker/pdf.worker.min.mjs';
      loading = pdfjs.getDocument({ url, withCredentials: true, enableXfa: false, disableAutoFetch: true, disableStream: true, rangeChunkSize: 256 * 1024, maxImageSize: 16 * 1024 * 1024, stopAtErrors: true,
        cMapUrl: '/api/imaging/pdf-assets/cmaps/', cMapPacked: true,
        standardFontDataUrl: '/api/imaging/pdf-assets/standard_fonts/', wasmUrl: '/api/imaging/pdf-assets/wasm/',
      });
      const file = await loading.promise;
      if (!disposed) setDocument(file); else await loading.destroy();
    }).catch(() => { if (!disposed) { setError('Не удалось показать PDF. Если файл защищён паролем или повреждён, скачайте его для открытия на компьютере.'); setBusy(false); } });
    return () => { disposed = true; void loading?.destroy(); };
  }, [url]);

  useEffect(() => {
    if (!document) return;
    let disposed = false, rendering: RenderTask | undefined;
    setBusy(true); setError('');
    void document.getPage(page).then(async pdfPage => {
      if (disposed || !canvas.current) return;
      const natural = pdfPage.getViewport({ scale: 1 });
      const outputScale = Math.min(window.devicePixelRatio || 1, 2);
      const scale = Math.min(Math.min(width / natural.width, 2) * zoom, Math.sqrt(8 * 1024 ** 2 / (natural.width * natural.height)) / outputScale, 8192 / Math.max(natural.width, natural.height) / outputScale);
      const viewport = pdfPage.getViewport({ scale });
      const node = canvas.current, context = node.getContext('2d');
      if (!context) throw new Error('canvas_unavailable');
      node.width = Math.floor(viewport.width * outputScale); node.height = Math.floor(viewport.height * outputScale);
      node.style.width = `${Math.floor(viewport.width)}px`; node.style.height = `${Math.floor(viewport.height)}px`;
      rendering = pdfPage.render({ canvas: node, canvasContext: context, viewport, transform: outputScale === 1 ? undefined : [outputScale, 0, 0, outputScale, 0, 0] });
      await rendering.promise;
      if (!disposed) { pdfPage.cleanup(); setBusy(false); }
    }).catch(problem => { if (!disposed && problem?.name !== 'RenderingCancelledException') { setError('Не удалось отобразить эту страницу PDF. Можно скачать оригинал.'); setBusy(false); } });
    return () => { disposed = true; rendering?.cancel(); };
  }, [document, page, zoom, width]);

  return <div className="flex h-full min-h-[360px] flex-col" ref={container}>
    <div className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
      <button className="rounded-lg border border-slate-200 px-3 py-1.5 disabled:opacity-40" disabled={!document || page === 1 || busy} onClick={() => setPage(value => value - 1)}>Предыдущая</button>
      <span aria-live="polite">Страница {page} из {document?.numPages || '…'}</span>
      <button className="rounded-lg border border-slate-200 px-3 py-1.5 disabled:opacity-40" disabled={!document || page >= document.numPages || busy} onClick={() => setPage(value => value + 1)}>Следующая</button>
      <select aria-label="Масштаб PDF" className="rounded-lg border border-slate-200 bg-white px-2 py-1.5" value={zoom} onChange={event => setZoom(Number(event.target.value))}><option value={1}>По ширине</option><option value={1.25}>125%</option><option value={1.5}>150%</option></select>
    </div>
    <div className="relative flex-1 overflow-auto bg-slate-200 p-4">
      {busy && <p role="status" className="mb-3 text-center text-xs text-slate-500">Открываем PDF…</p>}
      {error && <p role="alert" className="mx-auto max-w-lg rounded-xl bg-white p-5 text-sm leading-6 text-slate-700">{error}</p>}
      <canvas ref={canvas} aria-label={`Страница ${page} PDF`} className={`mx-auto bg-white shadow ${error ? 'hidden' : ''}`} />
    </div>
  </div>;
}
