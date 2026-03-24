"use client";

import Link from "next/link";
import Image from "next/image";

export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      <div className="relative">
        {/* Decorative top accent line */}
        <div className="absolute -top-1 left-6 right-6 h-1 bg-emerald-600 rounded-full opacity-80" />
        {/* Elevated center action */}
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] grid place-items-center">
          <Link
            href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-600 text-white grid place-items-center shadow hover:bg-emerald-700"
            aria-label="Записаться"
          >
            <Image src="/images/icons/zapis.webp" alt="Записаться" width={28} height={28} className="object-contain" />
          </Link>
          {/* Center label */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] font-medium text-emerald-600">Записаться</div>
        </div>
        <div className="bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-3 pt-3 pb-2">
          <ul className="grid grid-cols-5 text-center text-[11px] text-gray-600">
            <li>
              <Link href="/about" className="flex flex-col items-center gap-1 py-1">
                <Image src="/images/icons/klinika 1.webp" alt="О нас" width={24} height={24} className="object-contain" />
                О нас
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="flex flex-col items-center gap-1 py-1">
                <Image src="/images/icons/doctor.webp" alt="Врачи" width={24} height={24} className="object-contain" />
                Врачи
              </Link>
            </li>
            <li>
              <div className="pointer-events-none" />
            </li>
            <li>
              <Link href="/services" className="flex flex-col items-center gap-1 py-1">
                <Image src="/images/icons/yslyga n.webp" alt="Услуги" width={24} height={24} className="object-contain" />
                Услуги
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="flex flex-col items-center gap-1 py-1">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


