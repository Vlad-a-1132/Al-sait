"use client";

import Image from "next/image";
import Link from "next/link";

const PHONE = "+7 (495) 255-44-50";
const PHONE_LINK = "tel:+74952554450";

export type ImplantationServiceRow = {
  key: string;
  name: string;
  priceLabel: string;
};

type Props = {
  rows: ImplantationServiceRow[];
};

export default function ImplantationFullPriceClient({ rows }: Props) {
  return (
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
      <div className="lg:col-span-2 order-2 lg:order-1 rounded-2xl border border-gray-200 overflow-hidden bg-white">
        <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-100 bg-white">
          <p className="font-semibold text-gray-900 mb-0">Полный прайс</p>
        </div>

        <div className="overflow-y-auto max-h-[480px] sm:max-h-[480px]">
          <table className="w-full text-sm sm:text-base table-fixed">
            <thead className="sticky top-0 z-10 bg-gray-100">
              <tr>
                <th className="text-left py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[60%] sm:w-auto">
                  Услуга
                </th>
                <th className="text-right py-4 px-3 sm:px-4 font-semibold text-gray-800 w-[40%] sm:w-28">
                  Цена
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s, i) => (
                <tr key={s.key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}>
                  <td className="py-3.5 px-3 sm:px-4 text-gray-800 leading-snug break-words">{s.name}</td>
                  <td className="py-3.5 px-3 sm:px-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                    {s.priceLabel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm order-1 lg:order-2">
        <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 relative">
          <Image
            src="/images/promo/task_01kmc5pqv4egd8vgfksjjp1zzd_1774230180_img_1.webp"
            alt=""
            fill
            className="object-contain"
            sizes="128px"
          />
        </div>
        <p className="text-gray-700 text-sm mb-1">Заполните форму</p>
        <h3 className="font-bold text-lg text-gray-900 text-center mb-1">«Записаться в клинику»</h3>
        <p className="text-gray-600 text-sm text-center mb-4">чтобы выбрать время приема и уточнить стоимость услуги.</p>
        <p className="text-gray-700 text-sm mb-4">Администратор подберёт врача и удобное время</p>
        <Link
          href="https://online.altamed-c.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 font-medium text-sm mb-1 hover:underline"
        >
          Записаться онлайн
        </Link>
        <a href={PHONE_LINK} className="text-gray-700 text-sm mb-6 hover:underline">
          {PHONE}
        </a>
        <Link
          href="https://online.altamed-c.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700"
        >
          Записаться в клинику
        </Link>
      </div>
    </div>
  );
}

