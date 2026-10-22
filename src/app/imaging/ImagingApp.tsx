'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { sha256 } from '@noble/hashes/sha256';
import dynamic from 'next/dynamic';
import type { FileList, ImagingFile, ImagingToken, ImagingUser, UploadResult } from '@/lib/imaging/types';

const API = '/api/imaging';
const MAX_SIZE = 400 * 1024 * 1024;
const CHUNK = 4 * 1024 * 1024;
const PdfPreview = dynamic(() => import('./PdfPreview'), { ssr: false, loading: () => <p className="p-8 text-center text-sm text-slate-500">Открываем просмотр PDF…</p> });
const field = 'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 disabled:opacity-50';
const primary = 'inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-wait disabled:opacity-50';
const secondary = 'inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50';

class ApiError extends Error { constructor(message: string, public status: number) { super(message); } }
async function api<T>(route: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  if (options.method && !['GET', 'HEAD'].includes(options.method)) headers.set('X-Imaging-Request', '1');
  const controller = new AbortController();
  const abort = () => controller.abort(options.signal?.reason);
  if (options.signal?.aborted) abort(); else options.signal?.addEventListener('abort', abort, { once: true });
  const timer = setTimeout(() => controller.abort(new DOMException('Время ожидания истекло.', 'TimeoutError')), 120000);
  try {
    const response = await fetch(API + route, { ...options, signal: controller.signal, headers, credentials: 'same-origin', cache: 'no-store' });
    if (!response.ok) {
      const body = await response.json().catch(() => null);
      throw new ApiError(body?.error?.message || 'Не удалось выполнить запрос.', response.status);
    }
    return response.status === 204 ? undefined as T : await response.json();
  } finally { clearTimeout(timer); options.signal?.removeEventListener('abort', abort); }
}
async function uploadRequest<T>(route: string, options: RequestInit): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try { return await api<T>(route, options); }
    catch (problem) {
      options.signal?.throwIfAborted();
      if (attempt >= 4 || (problem instanceof ApiError && ![423, 429, 503].includes(problem.status))) throw problem;
      await new Promise<void>((resolve, reject) => {
        const abort = () => { clearTimeout(timer); reject(options.signal?.reason); };
        const timer = setTimeout(() => { options.signal?.removeEventListener('abort', abort); resolve(); }, Math.min(8000, 500 * 2 ** attempt));
        options.signal?.addEventListener('abort', abort, { once: true });
      });
    }
  }
}
const post = (body: unknown) => ({ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
function size(bytes: number) { return bytes < 1024 ? `${bytes} Б` : bytes < 1024 ** 2 ? `${(bytes / 1024).toFixed(1)} КиБ` : bytes < 1024 ** 3 ? `${(bytes / 1024 ** 2).toFixed(1)} МиБ` : `${(bytes / 1024 ** 3).toFixed(1)} ГиБ`; }
function date(value: string) { return new Date(value).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow', day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
function previewable(file: ImagingFile) { return file.mime.startsWith('image/') || file.mime === 'application/pdf'; }
function Icon({ name, className = 'h-5 w-5' }: { name: 'lock' | 'file' | 'upload' | 'search' | 'download' | 'close' | 'arrow'; className?: string }) {
  const paths = { lock: 'M5 11h14v10H5z M8 11V7a4 4 0 018 0v4 M12 15v2', file: 'M6 3h8l4 4v14H6z M14 3v5h5 M9 13h6 M9 17h4', upload: 'M12 16V3 M7 8l5-5 5 5 M4 15v5h16v-5', search: 'M21 21l-5-5 M18 10a8 8 0 11-16 0 8 8 0 0116 0', download: 'M12 3v13 M7 11l5 5 5-5 M4 17v4h16v-4', close: 'M6 6l12 12 M18 6L6 18', arrow: 'M5 12h14 M14 7l5 5-5 5' };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
type Progress = { name: string; index: number; count: number; percent: number; stage: string };

export default function ImagingApp({ testMode }: { testMode: boolean }) {
  const [user, setUser] = useState<ImagingUser | null>(null), [checking, setChecking] = useState(true);
  const [login, setLogin] = useState(''), [password, setPassword] = useState(''), [signing, setSigning] = useState(false);
  const [error, setError] = useState(''), [notice, setNotice] = useState('');
  const [tab, setTab] = useState<'files' | 'access'>('files');
  const [listing, setListing] = useState<FileList | null>(null), [query, setQuery] = useState(''), [page, setPage] = useState(1), [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<Progress | null>(null), [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState<ImagingFile | null>(null);
  const [staff, setStaff] = useState<ImagingUser[]>([]), [tokens, setTokens] = useState<ImagingToken[]>([]);
  const [staffLogin, setStaffLogin] = useState(''), [staffPassword, setStaffPassword] = useState(''), [staffRole, setStaffRole] = useState('staff');
  const [tokenLabel, setTokenLabel] = useState(''), [newToken, setNewToken] = useState(''), [saving, setSaving] = useState(false);
  const input = useRef<HTMLInputElement>(null), uploadController = useRef<AbortController | null>(null);
  const listRequest = useRef(0);
  const report = useCallback((problem: unknown) => {
    if (problem instanceof ApiError && problem.status === 401) { setUser(null); setListing(null); setSelected(null); setStaff([]); setTokens([]); setNewToken(''); }
    setError(problem instanceof Error ? problem.message : 'Не удалось выполнить запрос.');
  }, []);

  useEffect(() => {
    let active = true;
    api<{ user: ImagingUser }>('/session').then(result => { if (active) setUser(result.user); }).catch(problem => { if (active && !(problem instanceof ApiError && problem.status === 401)) report(problem); }).finally(() => { if (active) setChecking(false); });
    return () => { active = false; uploadController.current?.abort(); };
  }, [report]);

  const loadFiles = useCallback(async (search = query, targetPage = page) => {
    const request = ++listRequest.current;
    setLoading(true);
    try { const result = await api<FileList>(`/files?q=${encodeURIComponent(search)}&page=${targetPage}`); if (request === listRequest.current) setListing(result); }
    catch (problem) { if (request === listRequest.current) report(problem); }
    finally { if (request === listRequest.current) setLoading(false); }
  }, [query, page, report]);

  useEffect(() => {
    if (!user || tab !== 'files') return;
    const timer = setTimeout(() => { void loadFiles(); }, 250);
    return () => clearTimeout(timer);
  }, [user, tab, loadFiles]);

  const loadAccess = useCallback(async () => {
    try { const [people, devices] = await Promise.all([api<{ users: ImagingUser[] }>('/staff'), api<{ tokens: ImagingToken[] }>('/tokens')]); setStaff(people.users); setTokens(devices.tokens); }
    catch (problem) { report(problem); }
  }, [report]);
  useEffect(() => { if (user?.role === 'admin' && tab === 'access') void loadAccess(); }, [user, tab, loadAccess]);
  useEffect(() => {
    if (!selected) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null); };
    document.addEventListener('keydown', escape); return () => document.removeEventListener('keydown', escape);
  }, [selected]);

  async function signIn(event: React.FormEvent) {
    event.preventDefault(); setSigning(true); setError('');
    try { const result = await api<{ user: ImagingUser }>('/session', post({ username: login, password })); setUser(result.user); setPassword(''); }
    catch (problem) { report(problem); } finally { setSigning(false); }
  }
  async function signOut() {
    try {
      uploadController.current?.abort(); await api('/session', { method: 'DELETE' });
      setUser(null); setListing(null); setStaff([]); setTokens([]); setNewToken(''); setSelected(null); setNotice(''); setError(''); setTab('files');
    } catch (problem) { report(problem); }
  }

  async function uploadFiles(files: File[]) {
    if (!files.length || uploadController.current) return;
    setError(''); setNotice('');
    if (files.some(file => !file.size || file.size > MAX_SIZE)) { setError('Каждый файл должен быть от 1 байта до 400 МиБ. Пустые и более крупные файлы не приняты.'); return; }
    const controller = new AbortController(); uploadController.current = controller;
    let added = 0, duplicates = 0;
    try {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const update = (stage: string, percent: number) => setProgress({ name: file.name, index: index + 1, count: files.length, stage, percent });
        const hash = sha256.create();
        update('Проверка файла', 0);
        for (let offset = 0; offset < file.size; offset += CHUNK) {
          controller.signal.throwIfAborted();
          hash.update(new Uint8Array(await file.slice(offset, offset + CHUNK).arrayBuffer()));
          update('Проверка файла', Math.round(Math.min(file.size, offset + CHUNK) / file.size * 100));
          await new Promise(resolve => setTimeout(resolve, 0));
        }
        const checksum = Array.from(hash.digest(), byte => byte.toString(16).padStart(2, '0')).join('');
        let upload = await uploadRequest<UploadResult>('/uploads', { ...post({ name: file.name, size: file.size, sha256: checksum }), signal: controller.signal });
        if (upload.status === 'complete') { duplicates++; continue; }
        let offset = upload.offset, failures = 0;
        while (offset < file.size) {
          controller.signal.throwIfAborted();
          update(offset ? 'Передача / продолжение' : 'Передача', Math.round(offset / file.size * 100));
          try {
            const part = file.slice(offset, Math.min(offset + CHUNK, file.size));
            await api(`/uploads/${upload.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/offset+octet-stream', 'Upload-Offset': String(offset) }, body: part, signal: controller.signal });
            offset += part.size; failures = 0;
          } catch (problem) {
            controller.signal.throwIfAborted();
            if (problem instanceof ApiError && ![409, 423, 429, 503].includes(problem.status)) throw problem;
            if (++failures > 5) throw problem;
            update('Соединение прервалось. Повторяем…', Math.round(offset / file.size * 100));
            await new Promise<void>((resolve, reject) => {
              const abort = () => { clearTimeout(timer); reject(new DOMException('Paused', 'AbortError')); };
              const timer = setTimeout(() => { controller.signal.removeEventListener('abort', abort); resolve(); }, Math.min(8000, 500 * 2 ** failures));
              controller.signal.addEventListener('abort', abort, { once: true });
            });
            upload = await uploadRequest<UploadResult>(`/uploads/${upload.id}`, { signal: controller.signal });
            offset = upload.offset;
          }
        }
        update('Проверка целостности на сервере', 100);
        const result = await uploadRequest<UploadResult>(`/uploads/${upload.id}/complete`, { method: 'POST', signal: controller.signal });
        result.duplicate ? duplicates++ : added++;
      }
      setNotice(`Готово. Добавлено: ${added}.${duplicates ? ` Уже были в архиве: ${duplicates}.` : ''}`);
      setQuery(''); setPage(1); await loadFiles('', 1);
    } catch (problem) {
      if (controller.signal.aborted) setNotice('Передача приостановлена. Выберите тот же файл ещё раз — загрузка продолжится с сохранённого места.');
      else report(problem);
      await loadFiles();
    } finally { uploadController.current = null; setProgress(null); if (input.current) input.current.value = ''; }
  }

  async function addStaff(event: React.FormEvent) {
    event.preventDefault(); setSaving(true); setError('');
    try { await api('/staff', post({ username: staffLogin, password: staffPassword, role: staffRole })); setStaffLogin(''); setStaffPassword(''); setNotice('Учётная запись создана.'); await loadAccess(); }
    catch (problem) { report(problem); } finally { setSaving(false); }
  }
  async function toggleStaff(person: ImagingUser) {
    setSaving(true); setError('');
    try { await api(`/staff/${person.id}`, { ...post({ disabled: !person.disabled }), method: 'PATCH' }); await loadAccess(); }
    catch (problem) { report(problem); } finally { setSaving(false); }
  }
  async function addToken(event: React.FormEvent) {
    event.preventDefault(); setSaving(true); setError('');
    try { const result = await api<{ token: string }>('/tokens', post({ label: tokenLabel })); setNewToken(result.token); setTokenLabel(''); await loadAccess(); }
    catch (problem) { report(problem); } finally { setSaving(false); }
  }
  async function revokeToken(id: string) {
    setSaving(true); setError('');
    try { await api(`/tokens/${id}`, { method: 'DELETE' }); setNewToken(''); await loadAccess(); }
    catch (problem) { report(problem); } finally { setSaving(false); }
  }

  if (checking) return <div className="grid min-h-screen place-items-center bg-slate-50 text-slate-500" role="status">Проверяем вход…</div>;

  if (!user) return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f6f5] p-5 sm:p-10">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl border border-white bg-white shadow-xl shadow-slate-200/50 md:grid-cols-2">
        <div className="relative flex flex-col justify-between overflow-hidden bg-emerald-950 p-9 text-white sm:p-12">
          <div className="absolute -right-28 top-24 h-80 w-80 rounded-full border-[42px] border-emerald-900/60" aria-hidden="true" />
          <div className="relative"><a href="/" className="text-xl font-semibold tracking-tight">Альтамед-С<span className="ml-2 text-xs font-normal text-emerald-300">ДЛЯ СОТРУДНИКОВ</span></a>
            <div className="mb-6 mt-14 inline-flex rounded-2xl border border-emerald-800 bg-emerald-900/50 p-4"><Icon name="lock" className="h-7 w-7 text-emerald-300" /></div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight">Архив<br />исследований</h1>
            <p className="mt-5 max-w-xs text-sm leading-7 text-emerald-100/75">Файлы КТ и рентгена в одном месте. Доступ к архиву — по вашей учётной записи.</p>
          </div>
          <p className="relative mt-16 text-xs text-emerald-300/75">Закрытое рабочее пространство</p>
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Вход в архив</h2><p className="mb-8 mt-2 text-sm leading-6 text-slate-500">Введите логин и пароль сотрудника.</p>
          {testMode && <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900">Тестовый режим. Используйте только тестовые файлы без данных пациентов.</p>}
          <form onSubmit={signIn} className="space-y-5">
            <label className="block text-sm font-medium text-slate-700">Логин<input autoComplete="username" required maxLength={50} value={login} onChange={event => setLogin(event.target.value)} className={`${field} mt-2`} /></label>
            <label className="block text-sm font-medium text-slate-700">Пароль<input autoComplete="current-password" type="password" required maxLength={256} value={password} onChange={event => setPassword(event.target.value)} className={`${field} mt-2`} /></label>
            {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
            <button className={`${primary} w-full`} disabled={signing}>{signing ? 'Входим…' : 'Войти'}<Icon name="arrow" className="h-4 w-4" /></button>
          </form>
          <a href="/" className="mt-8 text-center text-xs text-slate-500 hover:text-emerald-700">Вернуться на сайт клиники</a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f7f8] text-slate-800">
      <header className="border-b border-slate-200/80 bg-white"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a href="/imaging" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-700 text-white"><Icon name="lock" /></span><span><span className="block text-lg font-semibold tracking-tight">Альтамед-С</span><span className="block text-xs text-slate-500">Архив исследований</span></span></a>
        <div className="flex items-center gap-4"><div className="text-right"><p className="text-sm font-semibold">{user.username}</p><p className="text-xs text-slate-500">{user.role === 'admin' ? 'Администратор' : 'Сотрудник'}</p></div><button onClick={() => void signOut()} className={secondary}>Выйти</button></div>
      </div></header>
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-7 sm:px-8">
        {testMode && <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"><Icon name="lock" className="mt-0.5 h-4 w-4 shrink-0" /><p><strong className="font-semibold">Тестовый архив.</strong> Загружайте только тестовые файлы без данных пациентов.</p></div>}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Рабочее пространство</p><h1 className="text-3xl font-semibold tracking-tight text-slate-900">{tab === 'files' ? 'Файлы исследований' : 'Управление доступом'}</h1><p className="mt-2 text-sm text-slate-500">{tab === 'files' ? 'Загрузка, просмотр и скачивание файлов клиники.' : 'Отдельные учётные записи и ключи для программ-передатчиков.'}</p></div>
          {user.role === 'admin' && <nav aria-label="Разделы архива" className="flex rounded-xl border border-slate-200 bg-white p-1"><button className={`rounded-lg px-4 py-2 text-sm font-medium ${tab === 'files' ? 'bg-emerald-50 text-emerald-800' : 'text-slate-500'}`} onClick={() => setTab('files')}>Файлы</button><button className={`rounded-lg px-4 py-2 text-sm font-medium ${tab === 'access' ? 'bg-emerald-50 text-emerald-800' : 'text-slate-500'}`} onClick={() => setTab('access')}>Сотрудники и передатчики</button></nav>}
        </div>
        {error && <div role="alert" className="mb-5 flex items-start justify-between gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"><span>{error}</span><button aria-label="Закрыть ошибку" onClick={() => setError('')}><Icon name="close" className="h-4 w-4" /></button></div>}
        {notice && <div role="status" className="mb-5 flex items-start justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"><span>{notice}</span><button aria-label="Закрыть уведомление" onClick={() => setNotice('')}><Icon name="close" className="h-4 w-4" /></button></div>}
        {tab === 'files' ? <>
          <div className="mb-6 grid gap-4 sm:grid-cols-3">{[
            { title: 'Файлов в архиве', value: listing ? String(listing.archiveCount) : '—', detail: 'Только завершённые загрузки' },
            { title: 'Занято в архиве', value: listing ? size(listing.totalBytes) : '—', detail: listing ? `Квота: ${size(listing.quotaBytes)}` : 'Загружаем данные…' },
            { title: 'Максимальный размер', value: '400 МиБ', detail: 'Любой формат файла' },
          ].map(card => <div key={card.title} className="rounded-2xl border border-slate-200/80 bg-white px-5 py-5"><p className="text-xs font-medium text-slate-500">{card.title}</p><p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{card.value}</p><p className="mt-2 text-xs text-slate-400">{card.detail}</p></div>)}</div>
          <section aria-label="Загрузка файлов" onDragOver={event => { event.preventDefault(); setDragging(true); }} onDragLeave={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setDragging(false); }} onDrop={event => { event.preventDefault(); setDragging(false); void uploadFiles(Array.from(event.dataTransfer.files)); }} className={`mb-7 rounded-2xl border-2 border-dashed px-6 py-7 transition ${dragging ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div className="flex items-center gap-4"><span className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Icon name="upload" className="h-6 w-6" /></span><div><h2 className="text-sm font-semibold text-slate-800">Перетащите файлы сюда</h2><p className="mt-1 text-xs leading-5 text-slate-500">Или выберите на компьютере. Повторная отправка не создаст копию.</p></div></div><button className={primary} onClick={() => input.current?.click()} disabled={Boolean(progress)}><Icon name="upload" className="h-4 w-4" />Выбрать файлы</button></div>
            <input ref={input} type="file" multiple className="sr-only" aria-label="Выберите файлы исследований" disabled={Boolean(progress)} onChange={event => void uploadFiles(Array.from(event.target.files || []))} />
            {progress && <div className="mt-6 border-t border-slate-100 pt-5" aria-live="polite"><div className="flex justify-between gap-3 text-xs"><span className="min-w-0 truncate">{progress.index}/{progress.count} · {progress.name}</span><span className="shrink-0 font-medium text-emerald-700">{progress.percent}%</span></div><div className="my-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-600 transition-all" style={{ width: `${progress.percent}%` }} /></div><div className="flex items-center justify-between gap-3"><span className="text-xs text-slate-500">{progress.stage}</span><button className="text-xs font-medium text-slate-600 underline" onClick={() => uploadController.current?.abort()}>Приостановить</button></div></div>}
          </section>
          <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white" aria-label="Список файлов"><div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 p-5"><div><h2 className="font-semibold">Все файлы</h2><p className="mt-1 text-xs text-slate-400">{listing ? `Найдено: ${listing.total}` : 'Загрузка списка…'}</p></div><div className="relative w-full sm:w-80"><span className="pointer-events-none absolute left-3 top-3 text-slate-400"><Icon name="search" className="h-4 w-4" /></span><input type="search" value={query} maxLength={180} onChange={event => { setQuery(event.target.value); setPage(1); }} placeholder="Найти по имени файла" aria-label="Поиск по имени файла" className={`${field} pl-10`} /></div></div>
            {!listing?.files.length ? <div className="px-5 py-16 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 text-slate-400"><Icon name="file" className="h-7 w-7" /></span><h3 className="mt-4 text-sm font-semibold">{loading ? 'Загружаем список…' : query ? 'Ничего не найдено' : 'В архиве пока нет файлов'}</h3><p className="mt-2 text-xs text-slate-500">{query ? 'Попробуйте другое имя или очистите поиск.' : 'Загрузите первый тестовый файл через поле выше.'}</p></div> : <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs font-medium text-slate-500"><tr><th className="px-5 py-3 font-medium">Файл</th><th className="whitespace-nowrap px-4 py-3 font-medium">Дата загрузки</th><th className="px-4 py-3 font-medium">Размер</th><th className="px-5 py-3 text-right font-medium">Действия</th></tr></thead><tbody className="divide-y divide-slate-100">{listing.files.map(file => <tr key={file.id} className="hover:bg-slate-50/60"><td className="max-w-[360px] px-5 py-4"><div className="flex items-center gap-3"><span className={`shrink-0 rounded-xl p-2.5 ${file.mime === 'application/pdf' ? 'bg-rose-50 text-rose-600' : file.mime.startsWith('image/') ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}><Icon name="file" /></span><div className="min-w-0"><p className="truncate font-medium text-slate-800" title={file.name}>{file.name}</p><p className="mt-1 text-[11px] text-slate-400">{file.mime === 'application/pdf' ? 'PDF' : file.mime.startsWith('image/') ? 'Изображение' : 'Файл'} · SHA-256 {file.sha256.slice(0, 10)}…</p></div></div></td><td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">{date(file.createdAt)}</td><td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">{size(file.size)}</td><td className="px-5 py-4"><div className="flex items-center justify-end gap-3">{previewable(file) && <button className="text-xs font-semibold text-emerald-700 hover:text-emerald-900" aria-label={`Просмотр: ${file.name}`} onClick={() => setSelected(file)}>Просмотр</button>}<a href={`${API}/files/${file.id}/content?download=1`} download={file.name} className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-100" aria-label={`Скачать: ${file.name}`}><Icon name="download" className="h-4 w-4" /></a></div></td></tr>)}</tbody></table></div>}
            {listing && listing.pages > 1 && <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4 text-xs text-slate-500"><span>Страница {listing.page} из {listing.pages}</span><div className="flex gap-2"><button className={secondary} disabled={listing.page === 1 || loading} onClick={() => setPage(listing.page - 1)}>Назад</button><button className={secondary} disabled={listing.page === listing.pages || loading} onClick={() => setPage(listing.page + 1)}>Далее</button></div></div>}
          </section>
          <p className="mt-5 text-xs leading-6 text-slate-400">Просмотр доступен для PNG, JPEG, GIF, WebP и PDF. Остальные форматы можно скачать. Просмотр DICOM пока не подключён.</p>
        </> : <div className="grid items-start gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-lg font-semibold">Сотрудники</h2><p className="mb-6 mt-2 text-sm leading-6 text-slate-500">Каждый сотрудник входит под своим логином. Отключение учётной записи сразу закрывает доступ.</p>
            <form onSubmit={addStaff} className="space-y-4"><label className="block text-xs font-medium text-slate-600">Логин сотрудника<input required minLength={3} maxLength={50} pattern="[a-zA-Z0-9_.\-]+" autoComplete="off" className={`${field} mt-2`} value={staffLogin} onChange={event => setStaffLogin(event.target.value)} /></label><label className="block text-xs font-medium text-slate-600">Пароль, не менее 10 символов<input required minLength={10} maxLength={256} type="password" autoComplete="new-password" className={`${field} mt-2`} value={staffPassword} onChange={event => setStaffPassword(event.target.value)} /></label><label className="block text-xs font-medium text-slate-600">Права<select className={`${field} mt-2`} value={staffRole} onChange={event => setStaffRole(event.target.value)}><option value="staff">Сотрудник — просмотр, скачивание, загрузка</option><option value="admin">Администратор — также управление доступом</option></select></label><button disabled={saving} className={primary}>Добавить сотрудника</button></form>
            <ul className="mt-7 divide-y divide-slate-100 border-t border-slate-100">{staff.map(person => <li key={person.id} className="flex items-center justify-between gap-3 py-4"><div><p className="text-sm font-semibold">{person.username}{person.id === user.id ? ' (вы)' : ''}</p><p className="mt-1 text-xs text-slate-500">{person.role === 'admin' ? 'Администратор' : 'Сотрудник'} · {person.disabled ? 'Отключён' : 'Активен'}</p></div>{person.id !== user.id && <button disabled={saving} className="text-xs font-medium text-slate-500 underline" onClick={() => void toggleStaff(person)}>{person.disabled ? 'Включить' : 'Отключить'}</button>}</li>)}</ul>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-lg font-semibold">Передатчики</h2><p className="mb-6 mt-2 text-sm leading-6 text-slate-500">Отдельный токен для каждого ПК. Он позволяет отправлять файлы и продолжать свои загрузки. Доступа к просмотру архива у него нет.</p>
            <form onSubmit={addToken} className="space-y-4"><label className="block text-xs font-medium text-slate-600">Название компьютера или передатчика<input required maxLength={100} autoComplete="off" placeholder="Например, КТ — кабинет 2" className={`${field} mt-2`} value={tokenLabel} onChange={event => setTokenLabel(event.target.value)} /></label><button disabled={saving} className={primary}>Создать токен</button></form>
            {newToken && <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4"><p className="text-xs font-semibold text-blue-900">Сохраните токен — он показан только сейчас</p><code className="mt-3 block break-all rounded-lg bg-white p-3 text-xs text-blue-900">{newToken}</code><button className="mt-3 text-xs font-semibold text-blue-800 underline" onClick={() => { void navigator.clipboard.writeText(newToken).then(() => setNotice('Токен скопирован.')).catch(() => setError('Выделите и скопируйте токен вручную.')); }}>Скопировать токен</button></div>}
            <ul className="mt-7 divide-y divide-slate-100 border-t border-slate-100">{tokens.map(token => <li key={token.id} className="flex items-center justify-between gap-3 py-4"><div className="min-w-0"><p className="truncate text-sm font-semibold">{token.label}</p><p className="mt-1 text-xs text-slate-500">{token.revoked ? 'Отозван' : 'Только загрузка'} · {date(token.createdAt)}</p></div>{!token.revoked && <button disabled={saving} className="text-xs font-medium text-red-600 underline" onClick={() => void revokeToken(token.id)}>Отозвать</button>}</li>)}</ul>
          </section>
        </div>}
        <footer className="mt-10 flex flex-wrap justify-between gap-3 border-t border-slate-200 pt-5 text-[11px] text-slate-400"><span>Альтамед-С · Закрытый архив исследований</span><span>Файлы доступны только после входа</span></footer>
      </div>
      {selected && <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 p-3 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="imaging-preview-title"><div className="mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"><div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4"><div className="min-w-0"><h2 id="imaging-preview-title" className="truncate text-sm font-semibold">{selected.name}</h2><p className="mt-1 text-xs text-slate-400">{size(selected.size)} · {date(selected.createdAt)}</p></div><div className="flex items-center gap-3"><a className={secondary} href={`${API}/files/${selected.id}/content?download=1`} download={selected.name}><Icon name="download" className="h-4 w-4" />Скачать</a><button aria-label="Закрыть просмотр" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100" onClick={() => setSelected(null)} autoFocus><Icon name="close" /></button></div></div><div className="min-h-0 flex-1 overflow-auto bg-slate-100">{selected.mime === 'application/pdf' ? <PdfPreview url={`${API}/files/${selected.id}/content`} /> : <div className="grid min-h-full place-items-center p-6">{/* Protected original: never use Next Image's public optimization cache. */}<img alt={selected.name} className="max-h-[72vh] max-w-full object-contain" src={`${API}/files/${selected.id}/content`} /></div>}</div></div></div>}
    </div>
  );
}
