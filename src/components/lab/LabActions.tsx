'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { STORAGE_KEY } from '@/app/lab-tests-preview/catalog';
import { labEvent } from '@/lib/lab-events';
import s from './lab.module.css';
export function AddLabTest({ itemKey, name }: { itemKey: string; name: string }) {
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => { try { setAdded(JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]').includes(itemKey)); } catch { /* optional storage */ } }, [itemKey]);
  function toggle() {
    try {
      const raw: unknown = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]');
      const keys = Array.isArray(raw) ? raw.filter((key): key is string => typeof key === 'string') : [];
      const exists = keys.includes(itemKey);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(exists ? keys.filter(key => key !== itemKey) : [...keys, itemKey]));
      setAdded(!exists); setError(false); labEvent(exists ? 'lab_remove' : 'lab_add');
    } catch { setError(true); }
  }
  return <div className={s.add}><button onClick={toggle} aria-pressed={added} aria-label={`${added ? 'Удалить' : 'Добавить'}: ${name}`}>{added ? '✓ В моём списке' : '+ В мой список'}</button>{added && <Link href="/services/lab-tests/calculator#lab-catalog" prefetch={false}>Посмотреть список →</Link>}{error && <span role="status">Браузер запретил сохранение. Откройте калькулятор и выберите анализ там.</span>}</div>;
}
export function LabCall({ children = 'Уточнить и записаться' }: { children?: React.ReactNode }) {
  return <a className={s.button} href="tel:+74952554450" onClick={() => labEvent('lab_call')}>{children}<span aria-hidden="true">↗</span></a>;
}
