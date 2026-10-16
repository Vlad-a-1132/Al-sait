import { ERROR_LABELS, FORM_LABELS } from '@/lib/analytics/shared';
import type { AnalyticsReport, FormFunnelRow } from '@/lib/analytics/shared';

const number = (value: number) => new Intl.NumberFormat('ru-RU').format(value);
const percent = (value: number) => new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2 }).format(value) + '%';
const ACTIONS: Record<string, string> = { button_click: 'Кнопка', phone_click: 'Телефон', email_click: 'Email', messenger_click: 'Мессенджер', download_click: 'Документ', booking_click: 'Переход к записи', internal_link: 'Ссылка по сайту', external_link: 'Внешняя ссылка', lab_add: 'Добавление анализа', lab_remove: 'Удаление анализа', lab_call: 'Звонок из анализов', lab_booking: 'Запись из анализов', lab_copy_list: 'Копирование списка' };
const PLACEMENTS: Record<string, string> = { header: 'Шапка', footer: 'Подвал', content: 'Содержимое страницы', inline_form: 'Форма на странице', appointment_page: 'Страница записи', callback_modal: 'Окно обратного звонка', contact_form: 'Форма контактов', chat: 'Чат', mobile_nav: 'Мобильная панель', unknown: 'Неизвестно' };
const FIELDS: Record<string, string> = { name: 'Имя', phone: 'Телефон', email: 'Email', message: 'Сообщение', consent: 'Согласие', other: 'Другое поле' };
export const placementLabel = (value: string) => PLACEMENTS[value] || value.replace(/^section_/, 'Секция ');
function Empty() { return <p className="px-5 py-12 text-center text-sm text-slate-500">За этот период событий пока нет.</p>; }

export function FunnelTable({ rows, pages = false }: { rows: FormFunnelRow[]; pages?: boolean }) {
  if (!rows.length) return <Empty />;
  return <div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm">
    <thead className="bg-slate-50 text-xs text-slate-500"><tr><th className="px-5 py-3 font-medium">Форма</th>{['Увидели', 'Нажали', 'Начали', 'Отправили', 'Заявки', 'Ошибки', 'Конверсия'].map(label => <th key={label} className="px-3 py-3 text-right font-medium">{label}</th>)}</tr></thead>
    <tbody className="divide-y divide-slate-100">{rows.map(row => <tr key={[row.form, row.path, row.placement].join('|')} className="hover:bg-slate-50"><td className="max-w-xs px-5 py-4"><div className="font-medium">{FORM_LABELS[row.form]}</div>{pages && <><div className="mt-1 break-all text-xs text-slate-400">{row.path}</div><div className="mt-1 text-xs text-slate-500">{placementLabel(row.placement || 'unknown')}</div></>}</td>
      {[row.views, row.clicks, row.starts, row.submitVisits, row.successVisits, row.errors].map((value, index) => <td key={index} className="px-3 py-4 text-right tabular-nums" title={index === 3 ? number(row.attempts) + ' запросов отправки' : index === 4 ? number(row.successes) + ' сохранённых заявок' : undefined}>{number(value)}</td>)}
      <td className="px-3 py-4 text-right tabular-nums font-medium text-emerald-800">{row.completionRate === null ? '—' : percent(row.completionRate)}</td></tr>)}</tbody>
  </table><p className="px-5 py-4 text-xs leading-relaxed text-slate-400">Этапы показаны в уникальных визитах; ошибки — числом событий. Конверсия: доля увидевших форму визитов, в которых сохранилась заявка. Прочерк означает, что нет данных о показах формы. Порядок этапов внутри визита не проверяется.</p></div>;
}

export function ClickTable({ rows }: { rows: AnalyticsReport['clicks'] }) {
  if (!rows.length) return <Empty />;
  return <div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-500"><tr>{['Элемент', 'Действие', 'Размещение', 'Страница', 'Количество'].map(label => <th key={label} className="px-5 py-3 font-medium last:text-right">{label}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{rows.map((row, index) => <tr key={index} className="hover:bg-slate-50"><td className="max-w-xs px-5 py-4"><div className="break-words font-medium">{row.label || ACTIONS[row.action] || row.action}</div><div className="mt-1 break-all text-xs text-slate-400">{row.target}</div></td><td className="px-5 py-4 text-xs text-slate-500">{ACTIONS[row.action] || row.action}</td><td className="px-5 py-4 text-xs text-slate-600"><div>{placementLabel(row.placement)}</div><div className="mt-1 max-w-[190px] break-all text-[11px] text-slate-400">{row.buttonId !== 'unknown' ? row.buttonId : ''}</div></td><td className="max-w-xs break-all px-5 py-4 text-xs text-slate-500">{row.path}</td><td className="px-5 py-4 text-right tabular-nums">{number(row.count)}</td></tr>)}</tbody></table></div>;
}

export function ErrorTable({ rows }: { rows: AnalyticsReport['errors'] }) {
  if (!rows.length) return <Empty />;
  return <div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-500"><tr>{['Форма и страница', 'Ошибка', 'Поле', 'Браузер', 'Количество'].map(label => <th key={label} className="px-5 py-3 font-medium last:text-right">{label}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{rows.map((row, index) => <tr key={index}><td className="max-w-xs px-5 py-4"><div className="font-medium">{FORM_LABELS[row.form]}</div><div className="mt-1 break-all text-xs text-slate-400">{row.path}</div><div className="mt-1 text-xs text-slate-500">{placementLabel(row.placement)}</div></td><td className="px-5 py-4 text-sm text-amber-800">{ERROR_LABELS[row.code]}{row.status ? ' · HTTP ' + row.status : ''}</td><td className="px-5 py-4 text-xs text-slate-500">{FIELDS[row.field] || FIELDS.other}</td><td className="px-5 py-4 text-xs text-slate-500">{row.browser}</td><td className="px-5 py-4 text-right tabular-nums">{number(row.count)}</td></tr>)}</tbody></table></div>;
}
