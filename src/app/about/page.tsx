'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { GYNEC_ARTICLES_LIST } from '@/data/gynec-articles-images';

/** PDF в `public/images/documents` (кириллическое имя файла). */
const DOC_ZHNVLP_2023_CYRILLIC =
  '/images/documents/' +
  encodeURIComponent('Перечень жнвлп для медицинского применения на 2023 год.pdf');

function PatientInfoSection() {
  const [isRegulatoryOpen, setIsRegulatoryOpen] = useState(false);
  const [isPaidServicesOpen, setIsPaidServicesOpen] = useState(false);
  const [isInformedConsentOpen, setIsInformedConsentOpen] = useState(false);
  const [isTaxDeductionOpen, setIsTaxDeductionOpen] = useState(false);
  const [isPreparationOpen, setIsPreparationOpen] = useState(false);
  const [isSoutOpen, setIsSoutOpen] = useState(false);
  const [isAppointmentMethodsOpen, setIsAppointmentMethodsOpen] = useState(false);
  const [isLateArrivalRulesOpen, setIsLateArrivalRulesOpen] = useState(false);
  const [isServiceScopeOpen, setIsServiceScopeOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Информация для пациентов</h2>
      <div className="space-y-3">
        {/* Нормативные документы - выпадающий список */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setIsRegulatoryOpen(!isRegulatoryOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium">Нормативные документы</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isRegulatoryOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isRegulatoryOpen && (
            <div className="px-4 pb-4 border-t border-gray-200">
              <p className="text-gray-700 mb-4 mt-4">
                Деятельность медицинских учреждений регламентируют более 2000 нормативных документов, с которыми Вы можете ознакомиться на сайтах:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-4">
                <li>
                  <strong>РосМинЗдрав:</strong>{' '}
                  <a href="https://www.rosminzdrav.ru" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">
                    www.rosminzdrav.ru
                  </a>
                  {', '}
                  <a href="https://cr.rosminzdrav.ru/clin_recomend.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">
                    cr.rosminzdrav.ru/clin_recomend.html
                  </a>
                </li>
                <li>
                  <strong>Федеральная служба по надзору в сфере здравоохранения:</strong>{' '}
                  <a href="https://roszdravnadzor.gov.ru" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">
                    roszdravnadzor.gov.ru
                  </a>
                </li>
                <li>
                  <strong>РосПотребНадзор:</strong>{' '}
                  <a href="https://www.rospotrebnadzor.ru" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">
                    www.rospotrebnadzor.ru
                  </a>
                </li>
                <li>
                  <strong>Официальный интернет-портал правовой информации:</strong>{' '}
                  <a href="http://pravo.gov.ru" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">
                    pravo.gov.ru
                  </a>
                  {' '}(актуальные редакции федеральных законов и иных НПА)
                </li>
              </ul>

              <div className="space-y-4">
                {/* Программа государственных гарантий 2026 */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Проект Постановления Правительства Российской Федерации «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2026 год и на плановый период 2027 и 2028 годов»
                      </p>
                    </div>
                    <a 
                      href="/images/documents/sdadasd.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Программа государственных гарантий 2024 */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2024 год и на плановый период 2025 и 2026 годов
                      </p>
                    </div>
                    <a 
                      href="/images/documents/narusheniya (1).docx" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Проект Постановления */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Проект Постановления Правительства Российской Федерации «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2025 год и на плановый период 2026 и 2027 годов» (подготовлен Минздравом России 11.10.2024)
                      </p>
                    </div>
                    <a 
                      href="/images/documents/proekt-postanovleniya-pravitelstva-rf-1.odt" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Постановление Правительства 2023 */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Постановление Правительства Российской Федерации от 29.12.2022 № 2497 «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2023 год и на плановый период 2024 и 2025 годов»
                      </p>
                    </div>
                    <a 
                      href="/images/documents/postanovlenie-pravitelstva-rossijskoj-federacii-ot-29_compressed.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* ФЗ об основах охраны здоровья */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Федеральный закон от 21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в РФ»
                      </p>
                    </div>
                    <a 
                      href="/images/documents/zakon-ob-osnovah-ohrany-zdorovya-grazhdan.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* ФЗ о защите прав потребителей */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Федеральный закон от 07.02.1992 №2300-1 г «О защите прав потребителей»
                      </p>
                    </div>
                    <a 
                      href="/images/documents/zakon-o-zashchite-prav-potrebitelya.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Постановление об утверждении Правил */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Постановление Правительства Российской Федерации от 4.10.2012 № 1006 «Об утверждении Правил предоставления медицинскими организациями платных медицинских услуг»
                      </p>
                    </div>
                    <a 
                      href="/images/documents/postanovlenie-ob-utverzhdenii-pravil-predostavleniya-med-uslug.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* СП 2.1.3678-20 */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        СП 2.1.3678-20 «Санитарно-эпидемиологические требования к эксплуатации помещений, зданий, сооружений, оборудования и транспорта, а также условиям деятельности хозяйствующих субъектов, осуществляющих продажу товаров, выполнение работ или оказание услуг».
                      </p>
                    </div>
                    <a 
                      href="/images/documents/sanehpidem-trebovaniya.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* ТФОМС МО */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Территориальный фонд обязательного медицинского страхования Московской области; сокращенное наименование — ТФОМС МО
                      </p>
                    </div>
                    <a 
                      href="/images/documents/tfoms-mo.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Стандарты оказания медицинских услуг */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Стандарты оказания медицинских услуг на основании клинических рекомендаций Минздрава РФ
                      </p>
                    </div>
                    <a 
                      href="https://cr.minzdrav.gov.ru/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Перейти на сайт
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Перечень ЖНВЛП 18.12.2025 № 3867-р */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Перечень ЖНВЛП  от 18 декабря 2025 г. N 3867-р
                      </p>
                    </div>
                    <a 
                      href="/images/blog/%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B0%20%D0%A0%D0%A4%20%D0%BE%D1%82%2018.12.2025%20N%203867-%D1%80%20%D0%9E%D0%B1%20%D1%83%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%BD%D1%8F%20%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%20%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85%20%D0%B8.rtf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* ФЗ воздействия дыма */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        ФЗ воздействия окружающего табачного дыма и сокращение потребления табака
                      </p>
                    </div>
                    <a 
                      href="/images/documents/fz-vozdejstviya-dyma.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Закон о противодействии коррупции */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Закон о противодействии коррупции
                      </p>
                    </div>
                    <a 
                      href="/images/documents/zakon-o-protivodejstvii-korrupcii.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Перечень ЖНВЛП 2023 */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Перечень жизненно необходимых и важнейших лекарственных препаратов для медицинского применения на 2023 год
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3">
                      <a
                        href="/images/documents/perechen-zhnvlp-dlya-mediczinskogo-primeneniya-na-2023-god.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                      >
                        Скачать файл (латинское имя)
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                      <a
                        href={DOC_ZHNVLP_2023_CYRILLIC}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                      >
                        Скачать копию с сайта (PDF)
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Антикоррупционная политика */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        АНТИКОРРУПЦИОННАЯ ПОЛИТИКА ОБЩЕСТВА С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «АЛЬТАМЕД-С»
                      </p>
                    </div>
                    <a 
                      href="/images/documents/prilozhenie-№1-k-prikazu-21-ot-13.11.23-antikorrupczionnaya-politika-altamed-s.docx" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Выписка из реестра */}
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-1 text-sm">
                        Выписка из реестра 2025
                      </p>
                    </div>
                    <a 
                      href="/images/documents/vypiska-iz-reestra-2025.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Порядок оказания платных услуг - выпадающий список */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setIsPaidServicesOpen(!isPaidServicesOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium">Порядок оказания платных услуг</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isPaidServicesOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isPaidServicesOpen && (
            <div className="px-4 pb-4 border-t border-gray-200 space-y-4">
              {/* Положение о порядке и условиях предоставления платных медицинских услуг */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors mt-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Порядок оказания платных услуг</div>
                    <div className="text-sm text-gray-600">Положение о порядке и условиях предоставления платных медицинских услуг в ООО «Альтамед-С»</div>
                  </div>
                  <a 
                    href="/images/documents/pravila-predostavleniya-platnyh-medicinskih-uslug-2025.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Правила внутреннего распорядка */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Правила внутреннего распорядка для пациентов в ООО «Альтамед-С»</div>
                  </div>
                  <a 
                    href="/images/documents/pravila-vnutrennego-rasporyadka-1.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Договор на оказание платных медицинских услуг */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Договор на оказание платных медицинских услуг</div>
                  </div>
                  <a 
                    href="/images/documents/novejshij-dogovor-a-s.docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Доверенность на несовершеннолетнего */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Доверенность на несовершеннолетнего</div>
                  </div>
                  <a 
                    href="/images/documents/doverennost_na_nesov.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Порядок информирования пациентов */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-gray-700 font-medium mb-2">Порядок информирования пациентов о методах оказания медпомощи, связанных с ними рисках, видах медвмешательства, их последствиях и ожидаемых результатах</div>
                <p className="text-sm text-gray-600">
                  Информация о методах оказания медпомощи, связанных с ними рисках, видах медвмешательства, их последствиях и ожидаемых результатах доводится до пациентов перед ее оказанием в зависимости от вида медицинской помощи, путем подписания между заказчиком (пациентом, его законным исполнителем) и исполнителем информированного добровольного согласия на медицинское вмешательство. Все подробности — в документе, который получает пациент.
                </p>
              </div>

              {/* Положение о гарантийных обязательствах */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Положение о гарантийных обязательствах и сроках службы при оказании платных медицинских услуг</div>
                  </div>
                  <a 
                    href="/images/documents/instrukciya-po-poryadku-zaklyucheniya-dogovora-na-okazanie-platnyh-medicinskih-uslug-2025.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Положение о дисконтных картах */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Положение о порядке выдачи и использования дисконтных карт ООО «Альтамед-С»</div>
                  </div>
                  <a 
                    href="/images/documents/polozhenie-o-diskontnyh-kartah.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Инструкция по порядку заключения договора */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Инструкция по порядку заключения договора на оказание платных медицинских услуг в ООО «Альтамед-С»</div>
                  </div>
                  <a 
                    href="/images/documents/polozheniya-o-garantii-nyh-obyazatelstvah-i-srokah-sluzhby-2025.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ПАМЯТКА ДЛЯ РОДИТЕЛЕЙ */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">ПАМЯТКА ДЛЯ РОДИТЕЛЕЙ несовершеннолетних пациентов</div>
                  </div>
                  <a 
                    href="/images/documents/uvazhaemye-roditeli-nesovershennoletnih-pacientov.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Порядок выдачи справок */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Порядок выдачи справок и медицинских заключений</div>
                  </div>
                  <a 
                    href="/images/documents/poryadk-vydachi-spravok-i-medicinskih-zaklyuchenii.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Сроки ожидания медицинской помощи */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Сроки ожидания медицинской помощи</div>
                  </div>
                  <a 
                    href="/images/documents/sroki-ozhidaniya-medicinskoj-pomoshchi.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Положение о дистанционном способе */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Положение о порядке заключения договоров на оказание платных медицинских услуг дистанционным способом</div>
                  </div>
                  <a 
                    href="/images/documents/polozhenie-o-poryadke-zaklyucheniya-dogovorov-na-okazanie-platnyh-medicinskih-uslug-distancionnym-sposobom.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Памятка об основных правах пациентов */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Памятка об основных правах пациентов в ООО «Альтамед-С»</div>
                  </div>
                  <a 
                    href="/images/documents/pamyatka-o-pravakh-pacientov.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Согласие на передачу сведений врачебной тайны */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Согласие на передачу сведений врачебной тайны</div>
                  </div>
                  <a 
                    href="/images/documents/soglasie-na-peredachu-svedenii-vrachebnoi-tai-ny.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Запрос на ознакомление с медицинскими документами */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Запрос на ознакомление с медицинскими документами</div>
                  </div>
                  <a 
                    href="/images/documents/zapros-na-oznakomlenie-s-medicinskimi-dokumentami.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Памятка для УЗИ */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Памятка «Почему для УЗИ нужно получить направление врача»</div>
                  </div>
                  <a 
                    href="/images/documents/pamyatka-dlya-paczienta.docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Памятка: направление на исследования с 01.09.2026 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Памятка «На какие исследования нужно направление с 1 сентября 2026 года»</div>
                  </div>
                  <a 
                    href="/images/documents/pamyatka-napravlenie-na-issledovaniya-s-01-09-2026.docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Информированное добровольное согласие - выпадающий список */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setIsInformedConsentOpen(!isInformedConsentOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium">Информированное добровольное согласие</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isInformedConsentOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isInformedConsentOpen && (
            <div className="px-4 pb-4 border-t border-gray-200 space-y-4">
              {/* Информированное добровольное согласие на виды медицинских вмешательств */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors mt-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие на виды медицинских вмешательств</div>
                  </div>
                  <a 
                    href="/images/documents/informirovannoe-dobrovolnoe-soglasie-na-medicinskoe-vmeshatelstvo.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ДОБРОВОЛЬНОЕ ИНФОРМИРОВАННОЕ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ПРОФИЛАКТИЧЕСКИХ ПРИВИВОК ДЕТЯМ */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">ДОБРОВОЛЬНОЕ ИНФОРМИРОВАННОЕ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ПРОФИЛАКТИЧЕСКИХ ПРИВИВОК ДЕТЯМ ИЛИ ОТКАЗА ОТ НИХ</div>
                  </div>
                  <a 
                    href="/images/documents/dobrovolnoe-informirovannoe-soglasie-na-privivok-detyam.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ИНФОРМИРОВАННОЕ ДОБРОВОЛЬНОЕ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ПРЕРЫВАНИЯ БЕРЕМЕННОСТИ */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">ИНФОРМИРОВАННОЕ ДОБРОВОЛЬНОЕ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ПРЕРЫВАНИЯ БЕРЕМЕННОСТИ ПО ЖЕЛАНИЮ ЖЕНЩИНЫ</div>
                  </div>
                  <a 
                    href="/images/documents/informirovannoe-dobrovolnoe-soglasie-na-beremennost.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Отказ от видов медицинских вмешательств */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Отказ от видов медицинских вмешательств, включенных в Перечень определенных видов медицинских вмешательств, на которые граждане дают информированное добровольное согласие при выборе врача и медицинской организации для получения первичной медико-санитарной помощи в ООО «Альтамед-С»</div>
                  </div>
                  <a 
                    href="/images/documents/list_of_failure.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие на проведение ЭДГС */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие на проведение эзофагогастродуоденоскопии (ЭДГС)</div>
                  </div>
                  <a 
                    href="/images/documents/informirovannoe-dobrovolnoe-soglasie-na-provedenie-ehzofagogatroduodenoskopii-ehdgs.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие на виды медицинских вмешательств (вариант 2) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие на виды медицинских вмешательств</div>
                  </div>
                  <a 
                    href="/images/documents/informirovannoe-dobrovolnoe-soglasie-na-medicinskoe-vmeshatelstvo (1).pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ДОБРОВОЛЬНОЕ ИНФОРМИРОВАННОЕ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ПРОФИЛАКТИЧЕСКИХ ПРИВИВОК ДЕТЯМ (вариант 2) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">ДОБРОВОЛЬНОЕ ИНФОРМИРОВАННОЕ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ПРОФИЛАКТИЧЕСКИХ ПРИВИВОК ДЕТЯМ ИЛИ ОТКАЗА ОТ НИХ</div>
                  </div>
                  <a 
                    href="/images/documents/dobrovolnoe-informirovannoe-soglasie-na-privivok-detyam (1).pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ИНФОРМИРОВАННОЕ ДОБРОВОЛЬНОЕ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ПРЕРЫВАНИЯ БЕРЕМЕННОСТИ (вариант 2) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">ИНФОРМИРОВАННОЕ ДОБРОВОЛЬНОЕ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ПРЕРЫВАНИЯ БЕРЕМЕННОСТИ ПО ЖЕЛАНИЮ ЖЕНЩИНЫ</div>
                  </div>
                  <a 
                    href="/images/documents/dobrovolnoe-informirovannoe-soglasie-na-privivok-detyam (1).pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Отказ от видов медицинских вмешательств (вариант 2) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Отказ от видов медицинских вмешательств, включенных в Перечень определенных видов медицинских вмешательств, на которые граждане дают информированное добровольное согласие при выборе врача и медицинской организации для получения первичной медико-санитарной помощи в ООО «Альтамед-С»</div>
                  </div>
                  <a 
                    href="/images/documents/list_of_failure (1).pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие на проведение ЭДГС (вариант 2) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие на проведение эзофагогастродуоденоскопии (ЭДГС)</div>
                  </div>
                  <a 
                    href="/images/documents/informirovannoe-dobrovolnoe-soglasie-na-provedenie-ehzofagogatroduodenoskopii-ehdgs (1).pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие на получение результатов по электронной почте */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие на получение результатов медицинских исследований по электронной почте</div>
                  </div>
                  <a 
                    href="/images/documents/informirovannoe-dobrovolnoe-soglasie-na-poluchenie-rezultatov-med-is-po-ehlektronnoj-pochte.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие на процедуру ударно-волновой терапии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие на процедуру ударно-волновой терапии</div>
                  </div>
                  <a 
                    href="/images/documents/informirovannoe-dobrovolnoe-soglasie-uvt-1.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по детской стоматологии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по детской стоматологии</div>
                  </div>
                  <a 
                    href="/images/documents/ids-detstvo-stomatologiya.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по ортопедии (стоматология) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по ортопедии (стоматология)</div>
                  </div>
                  <a 
                    href="/images/documents/ids-detstvo-stomatologiya (1).doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по терапии (стоматология) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по терапии (стоматология)</div>
                  </div>
                  <a 
                    href="/images/documents/ids-po-terapii-stomatologiya.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по хирургии (стоматология) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по хирургии (стоматология)</div>
                  </div>
                  <a 
                    href="/images/documents/ids-hirurgiya-stomatologiya.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по неврологии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по неврологии</div>
                  </div>
                  <a 
                    href="/images/documents/ids-po-nevrologii.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по урологии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по урологии</div>
                  </div>
                  <a 
                    href="/images/documents/ids-po-urologii.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие (ортодонтия) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие (ортодонтия)</div>
                  </div>
                  <a 
                    href="/images/documents/ids-ortodontiya.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по гинекологии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по гинекологии</div>
                  </div>
                  <a 
                    href="/images/documents/ids-po-ginekologii.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по отоларингологии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по отоларингологии</div>
                  </div>
                  <a 
                    href="/images/documents/ids-po-otolaringologii.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Информированное добровольное согласие по офтальмологии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Информированное добровольное согласие по офтальмологии</div>
                  </div>
                  <a 
                    href="/images/documents/ids-po-oftalmologii.doc" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Отказ от видов медицинских вмешательств */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Отказ от видов медицинских вмешательств</div>
                  </div>
                  <a 
                    href="/images/documents/otkaz-ot-vidov-medicinskih-vmeshatelstv.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Получение налогового вычета - выпадающий список */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setIsTaxDeductionOpen(!isTaxDeductionOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium">Получение налогового вычета</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isTaxDeductionOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isTaxDeductionOpen && (
            <div className="px-4 pb-4 border-t border-gray-200 space-y-4">
              {/* Постановление правительства РФ */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors mt-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Постановление правительства РФ от 08.04.2020 N 458 ОБ УТВЕРЖДЕНИИ ПЕРЕЧНЕЙ МЕДИЦИНСКИХ УСЛУГ И ДОРОГОСТОЯЩИХ ВИДОВ ЛЕЧЕНИЯ В МЕДИЦИНСКИХ ОРГАНИЗАЦИЯХ, У ИНДИВИДУАЛЬНЫХ ПРЕДПРИНИМАТЕЛЕЙ, ОСУЩЕСТВЛЯЮЩИХ МЕДИЦИНСКУЮ ДЕЯТЕЛЬНОСТЬ, СУММЫ ОПЛАТЫ КОТОРЫХ ЗА СЧЕТ СОБСТВЕННЫХ СРЕДСТВ НАЛОГОПЛАТЕЛЬЩИКА УЧИТЫВАЮТСЯ ПРИ ОПРЕДЕЛЕНИИ СУММЫ СОЦИАЛЬНОГО НАЛОГОВОГО ВЫЧЕТА</div>
                  </div>
                  <a 
                    href="/images/documents/postanovlenie-pravitelstva-ob-utver.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Получение налогового вычета за лечение зубов */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Получение налогового вычета за лечение зубов</div>
                  </div>
                  <a 
                    href="/images/documents/poluchenie-nalogovogo-vycheta-za-lechenie-zubov.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Как оформить налоговый вычет за лечение 3-НДФЛ */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Как оформить налоговый вычет за лечение 3-НДФЛ</div>
                  </div>
                  <a 
                    href="/images/documents/kak-oformit-nalogovyy-vychet-za-lechenie-v-3_ndfl-_1_.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Кто и как может получить налоговый вычет на лекарства */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Кто и как может получить налоговый вычет на лекарства</div>
                  </div>
                  <a 
                    href="/images/documents/kto-i-kak-mozhet-poluchit-nalogovyy-vychet-na-lekarstva.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Подготовка пациента к исследованиям - выпадающий список */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setIsPreparationOpen(!isPreparationOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium">Подготовка пациента к исследованиям</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isPreparationOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isPreparationOpen && (
            <div className="px-4 pb-4 border-t border-gray-200 space-y-4">
              {/* Подготовка пациента к лабораторным исследованиям */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors mt-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Подготовка пациента к лабораторным исследованиям</div>
                  </div>
                  <a 
                    href="/images/documents/pamyatki-dlya-pacientov-osnovnye-pravila-podgotovki-k-laboratornym-issledovaniyam.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Правила подготовки к диагностическим исследованиям */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Правила подготовки к диагностическим исследованиям</div>
                  </div>
                  <a 
                    href="/images/documents/pravila-podgotovki-k-diagnosticheskim-issledovaniyam.pdf" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Подготовка пациента к холтеровскому мониторированию */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Подготовка пациента к холтеровскому мониторированию</div>
                  </div>
                  <a 
                    href="/images/documents/doc9 (1).docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Подготовка пациента к электрокардиографии (ЭКГ) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Подготовка пациента к электрокардиографии (ЭКГ)</div>
                  </div>
                  <a 
                    href="/images/documents/podgotovka-k-elektrokardiografii-ekg (1).docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Подготовка пациента к спирометрии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Подготовка пациента к спирометрии</div>
                  </div>
                  <a 
                    href="/images/documents/podgotovka-paczienta-k-spirometrii.docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Подготовка пациента к пульсоксиметрии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Подготовка пациента к пульсоксиметрии</div>
                  </div>
                  <a 
                    href="/images/documents/podgotovka-k-pulsoksimetrii.docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Подготовка пациента к ФВД */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Подготовка пациента к ФВД</div>
                  </div>
                  <a 
                    href="/images/documents/podgotovka-k-fvd.docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Подготовка пациента к пикфлоуметрии */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-gray-700 font-medium mb-1">Подготовка пациента к пикфлоуметрии</div>
                  </div>
                  <a 
                    href="/images/documents/podgotovka-k-pikfloumetrii.docx" 
                    target="_blank" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                  >
                    Скачать файл
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Специальная оценка условий труда */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setIsSoutOpen(!isSoutOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium">
              Специальная оценка условий труда
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isSoutOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isSoutOpen && (
            <div className="px-4 pb-4 border-t border-gray-200 space-y-3">
              <p className="text-gray-700 mt-4">
                Сводные ведомости и планы мероприятий по специальной оценке условий труда в клинике «Альтамед-С».
                Документы доступны в формате PDF.
              </p>
              {[
                { label: "Сводная ведомость 2022 года", file: "/images/documents/22g.PDF" },
                { label: "Сводная ведомость 2024 года", file: "/images/documents/24g.PDF" },
                { label: "Сводная ведомость 2019 года", file: "/images/documents/19g.PDF" },
                { label: "План мероприятий по улучшению условий труда 2019 года", file: "/images/documents/plan 19g.PDF" },
                { label: "План мероприятий по улучшению условий труда 2022 года", file: "/images/documents/sout.PDF" },
                { label: "План мероприятий по улучшению условий труда 2024 года", file: "/images/documents/sout24.PDF" }
              ].map((item) => (
                <div key={item.label} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm">{item.label}</p>
                    </div>
                    <a
                      href={item.file}
                      target="_blank"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Способы записи на прием к врачу - выпадающий список */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setIsAppointmentMethodsOpen(!isAppointmentMethodsOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium">Способы записи на прием к врачу</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isAppointmentMethodsOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isAppointmentMethodsOpen && (
            <div className="px-4 pb-4 border-t border-gray-200">
              <div className="pt-4">
                <p className="text-gray-700 mb-6">
                  Для вашего удобства в нашей клинике доступно несколько вариантов записи на прием к медицинскому специалисту:
                </p>
                
                <div className="space-y-6">
                  {/* Телефонная запись */}
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Телефонная запись</h4>
                    <p className="text-gray-700 mb-2">
                      Вы можете записаться на прием, позвонив в нашу регистратуру по номеру{' '}
                      <a href="tel:+74951275118" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                        +8 (495) 127-51-18
                      </a>.
                    </p>
                    <p className="text-gray-700">
                      Наши операторы помогут вам выбрать специалиста и удобное время с <strong>Пн-Вс: 8.00 — 21.00</strong>.
                    </p>
                  </div>

                  {/* Онлайн-запись на сайте */}
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Онлайн-запись на сайте</h4>
                    <p className="text-gray-700 mb-2">
                      Круглосуточно доступна услуга электронной записи через наш официальный сайт{' '}
                      <a 
                        href="https://online.altamed-c.ru/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium underline"
                      >
                        https://online.altamed-c.ru/
                      </a>.
                    </p>
                    <p className="text-gray-700">
                      В соответствующем разделе вы можете выбрать врача, ознакомиться с расписанием и забронировать подходящий временной слот.
                    </p>
                  </div>

                  {/* Личный визит в регистратуру */}
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Личный визит в регистратуру</h4>
                    <p className="text-gray-700 mb-2">
                      Вы можете посетить нашу клинику и обратиться к администратору на стойке регистратуры.
                    </p>
                    <p className="text-gray-700">
                      Наши сотрудники помогут вам записаться к врачу и предоставят всю необходимую информацию.
                    </p>
                  </div>

                  {/* Повторная запись во время визита */}
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Повторная запись во время визита</h4>
                    <p className="text-gray-700">
                      Для вашего удобства планирование следующего визита может быть организовано непосредственно во время приема.
                      Лечащий врач или администратор согласует с вами дату и время следующего посещения.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mt-6 italic">
                  Мы стремимся сделать процесс записи максимально простым и комфортным для вас.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Правила приема пациентов в случае опоздания на прием - выпадающий список */}
        <div className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setIsLateArrivalRulesOpen(!isLateArrivalRulesOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium">Правила приема пациентов в случае опоздания на прием (исследование)</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isLateArrivalRulesOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isLateArrivalRulesOpen && (
            <div className="px-4 pb-4 border-t border-gray-200">
              <div className="pt-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-gray-700 font-medium mb-1">Правила приема пациентов в случае опоздания на прием (исследование)</div>
                    </div>
                    <a 
                      href="/images/documents/pravila-priema-pacientov-v-sluchae-opozdaniya-na-priem.pdf" 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                    >
                      Скачать файл
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Госпитализация, доступная среда, вакцинация, лекарственное обеспечение */}
        <div className="border border-gray-200 rounded-lg">
          <button
            type="button"
            onClick={() => setIsServiceScopeOpen(!isServiceScopeOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-700 group-hover:text-emerald-600 font-medium text-left">
              Госпитализация, доступная среда, вакцинация и лекарственное обеспечение
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-2 ${isServiceScopeOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isServiceScopeOpen && (
            <div className="px-4 pb-4 border-t border-gray-200 text-gray-700 text-sm space-y-6 pt-4">
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Госпитализация</h4>
                <p className="leading-relaxed">
                  ООО «Альтамед-С» оказывает амбулаторную медицинскую помощь. Стационарных услуг и госпитализации на базе клиники нет; отдельные правила и сроки госпитализации к деятельности организации не применяются.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Доступная среда</h4>
                <p className="leading-relaxed mb-2">
                  У входа в здание предусмотрен пандус для маломобильных граждан. Тактильных указателей и специализированных табличек для слепых и слабовидящих на объектах клиники нет.
                </p>
                <p className="leading-relaxed">
                  Порядок сопровождения и дополнительную помощь при посещении уточняйте в регистратуре при записи на приём.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Вакцинация</h4>
                <p className="leading-relaxed">
                  Профилактические прививки на базе клиники не проводятся; календарный график вакцинации не ведётся.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Лекарственное обеспечение</h4>
                <p className="leading-relaxed mb-3">
                  Перечень жизненно необходимых и важнейших лекарственных препаратов для медицинского применения (ЖНВЛП) на 2023 год доступен для скачивания в разделе «Нормативные документы» выше на этой странице и по прямой ссылке:{' '}
                  <a
                    href={DOC_ZHNVLP_2023_CYRILLIC}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-medium underline"
                  >
                    Перечень ЖНВЛП для медицинского применения на 2023 год (PDF)
                  </a>
                  .
                </p>
                <p className="leading-relaxed mb-3">
                  Перечень лекарственных препаратов, предназначенных для лечения редких (орфанных) заболеваний, утверждается уполномоченными органами; актуальную редакцию можно получить из официальных источников или уточнить в регистратуре клиники.
                </p>
                <p className="leading-relaxed">
                  Отпуск лекарственных препаратов бесплатно или со скидкой 50% на базе ООО «Альтамед-С» не осуществляется.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AboutPageContent() {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('photogallery');
  const [pressTab, setPressTab] = useState<'news' | 'articles' | 'media'>('articles');
  
  // Проверяем, есть ли якорь в URL
  useEffect(() => {
    const section = searchParams.get('section');
    if (section === 'reviews') {
      setActiveSection('reviews');
    }
  }, [searchParams]);
  
  const galleryImages = [
    '/images/gino/altamed-c-odintsovo.webp',
    '/images/gino/altamed-c-odintsovo1.webp',
    '/images/gino/altamed-c-odintsovo6.webp',
    ...Array.from({ length: 25 }, (_, i) => `/images/fotogelery/gallery-odintsovo-${String(i + 2).padStart(2, '0')}.webp`),
    '/images/fotogelery/kt-Altamed-C.webp',
    '/images/fotogelery/altamed-gallery-home.webp',
  ];

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">О нас</h1>
            <div className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto space-y-3">
              <p>
                Медицинский центр «Альтамед-С» начал свою деятельность уже более 20 лет назад и с тех нашей основной задачей является развитие и предоставление качественных медицинских, в том числе и стоматологических услуг для детей и взрослых в Одинцово.
                </p>
                <p>
                Наш центр оснащен современным оборудованием, позволяющим проводить максимально точную диагностику и эффективное лечение. У нас работают вежливые, опытные и квалифицированные специалисты. Мы постоянно заботимся о высоком качестве обслуживания и всегда помним, что главная цель нашей деятельности — это Ваше скорейшее выздоровление.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content with sidebar menu */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar menu */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveSection('photogallery')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'photogallery'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Фотогалерея
                  </button>
                  <Link
                    href="/blog"
                    className="w-full block text-left px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
                  >
                    Блог
                  </Link>
                  <button
                    onClick={() => setActiveSection('vacancies')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'vacancies'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Вакансии
                  </button>
                  <button
                    onClick={() => setActiveSection('reviews')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'reviews'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Отзывы
                  </button>
                  <button
                    onClick={() => setActiveSection('branches')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'branches'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Филиалы
                  </button>
                  <button
                    onClick={() => setActiveSection('licenses')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'licenses'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Лицензии
                  </button>
                  <button
                    onClick={() => setActiveSection('regulatory')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'regulatory'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Контакты контролирующих органов
                  </button>
                  <button
                    onClick={() => setActiveSection('vhi')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'vhi'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Обслуживание по договорам ДМС
                  </button>
                  <button
                    onClick={() => setActiveSection('personal-data')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'personal-data'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Персональные данные
                  </button>
                  <button
                    onClick={() => setActiveSection('patient-info')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'patient-info'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Информация для пациентов
                  </button>
                </nav>
              </div>
            </aside>

            {/* Right content area */}
            <main className="flex-1">
              {/* Фотогалерея */}
              {activeSection === 'photogallery' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Фотогалерея</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                        <Image
                          src={image}
                          alt={`Фотография клиники Альтамед-С${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
              </div>
            ))}
          </div>
        </div>
              )}

              {/* Пресс-центр: Новости / Статьи / СМИ */}
              {activeSection === 'news' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Пресс-центр</h2>
                  
                  {/* Навигационные табы */}
                  <div className="flex space-x-3 mb-6">
                    <button
                      type="button"
                      onClick={() => setPressTab('news')}
                      className={`py-2 px-6 rounded-full transition-colors ${pressTab === 'news' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                    >
                      Новости
                    </button>
                    <button
                      type="button"
                      onClick={() => setPressTab('articles')}
                      className={`py-2 px-6 rounded-full transition-colors ${pressTab === 'articles' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                    >
                      Статьи
                    </button>
                    <button
                      type="button"
                      onClick={() => setPressTab('media')}
                      className={`py-2 px-6 rounded-full transition-colors ${pressTab === 'media' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                    >
                      СМИ
                    </button>
                  </div>
                  
                  {pressTab === 'articles' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                      {GYNEC_ARTICLES_LIST.map((a) => (
                        <Link key={a.url} href={a.url} className="group flex flex-col rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md overflow-hidden transition">
                          <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                            <Image src={a.image} alt="" fill className="object-cover group-hover:scale-105 transition duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                          </div>
                          <div className="flex flex-col flex-1 p-4">
                            <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide leading-snug line-clamp-2">{a.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{a.desc}</p>
                            <span className="text-emerald-600 font-medium text-sm hover:underline">
                              Подробнее
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {pressTab === 'news' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                      <div className="bg-gray-50 rounded-[20px] overflow-hidden">
                        <div className="relative">
                          <div className="w-full h-[180px] overflow-hidden">
                            <Image src="/images/news/sert-ivanova-1200x831.jpg" alt="Иванова Ольга Юрьевна" width={400} height={180} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">06.05.2025</div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2 line-clamp-2">Иванова Ольга Юрьевна посетила XXVI Конгресс педиатров России</h3>
                          <p className="text-sm text-gray-700 mb-4 line-clamp-3">ВРАЧ СУРДОЛОГ – ОТОРИНОЛАРИНГОЛОГ. Участвовала в научной программе XXVI Конгресса педиатров России с международным участием «Актуальные проблемы педиатрии»</p>
                          <span className="text-black font-medium">Подробнее</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-[20px] overflow-hidden">
                        <div className="relative">
                          <div className="w-full h-[180px] overflow-hidden">
                            <Image src="/images/news/Интервью с Еленой Будко.webp" alt="Интервью с Еленой Будко" width={400} height={180} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">06.05.2025</div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2 line-clamp-2">Интервью с Еленой Будко</h3>
                          <p className="text-sm text-gray-700 mb-4 line-clamp-3">Прежде всего, профессия врача – это большая ответственность за здоровье и жизнь другого человека. Грамотный врач должен непрерывно развиваться.</p>
                          <span className="text-black font-medium">Подробнее</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-[20px] overflow-hidden">
                        <div className="relative">
                          <div className="w-full h-[180px] overflow-hidden">
                            <Image src="/images/news/11222-1-1.webp" alt="Магнитотерапия SIS" width={400} height={180} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">30.04.2025</div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2 line-clamp-2">Высокоинтенсивная магнитотерапия (SIS)</h3>
                          <p className="text-sm text-gray-700 mb-4 line-clamp-3">Высокоинтенсивная магнитотерапия (SIS) — супериндуктивная система. Помогает облегчить боль, улучшает подвижность суставов, стимулирует заживление.</p>
                          <span className="text-black font-medium">Подробнее</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {pressTab === 'media' && (
                    <div className="py-12 text-center text-gray-500">
                      Раздел в разработке
                    </div>
                  )}
                </div>
              )}

              {/* Вакансии */}
              {activeSection === 'vacancies' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Открытые вакансии:</h2>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span className="text-gray-700">Врач терапевт</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span className="text-gray-700">Врач отоларинголог</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span className="text-gray-700">Медицинская сестра</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span className="text-gray-700">Уборщица</span>
                    </li>
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      Резюме можно отправить по адресу{' '}
                      <a href="mailto:sveta@altamed-c.ru" className="text-emerald-600 hover:text-emerald-700 underline">
                        sveta@altamed-c.ru
                      </a>{' '}
                      или звоните по телефону{' '}
                      <a href="tel:+79265378481" className="text-emerald-600 hover:text-emerald-700">
                        +7 (926) 537-84-81
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Отзывы */}
              {activeSection === 'reviews' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Отзывы наших пациентов</h2>
                  
                  <div className="prose max-w-none space-y-6">
                    <p className="text-gray-700 text-lg">
                      Нам очень важно Ваше мнение о качестве нашей работы! Ваши отзывы помогают нам становиться лучше и улучшать сервис для всех пациентов.
                    </p>
                    
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Оставьте отзыв в Яндекс.Картах</h3>
                      <p className="text-gray-700 mb-4">
                        Нам важно знать, что Вы думаете о нашей клинике. Ваш отзыв поможет другим пациентам узнать о качестве наших услуг.
                      </p>
                      <p className="text-gray-700 mb-4 font-medium">
                        Как оставить отзыв:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Откройте страницу нашей клиники в Яндекс.Картах</li>
                        <li>Нажмите на кнопку "Оставить отзыв" (см. скриншот ниже)</li>
                        <li>Оцените нашу работу и напишите Ваш отзыв</li>
                        <li className="font-medium text-emerald-700">
                          <strong>Это очень важно:</strong> укажите ФИО врача, дату приема и услугу, которую Вы получили. Мы будем очень благодарны за такую подробность!
                        </li>
                        <li>Нажмите "Опубликовать"</li>
                      </ol>
                    </div>

                    <div className="mt-6">
                      <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/images/documents/Screenshot_1749.png"
                          alt="Инструкция: как оставить отзыв в Яндекс.Картах"
                          width={800}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Нажмите на кнопку "Оставить отзыв" (выделена на скриншоте)
            </p>
          </div>
          
                    <div className="mt-6 text-center">
                      <a 
                        href="https://yandex.ru/search/?text=%D0%B0%D0%BB%D1%8C%D1%82%D0%B0%D0%BC%D0%B5%D0%B4+%D1%81+%D0%BE%D0%B4%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D0%BE&lr=121257&src=suggest_Pers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-emerald-500 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-600 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Оставить отзыв в Яндекс.Картах
                      </a>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Почему мы просим отзывы?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <span className="text-emerald-500 mr-3 text-2xl">✓</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Это помогает нам расти</h4>
                            <p className="text-gray-600 text-sm">Ваша обратная связь показывает, что работает хорошо, а что можно улучшить</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-emerald-500 mr-3 text-2xl">✓</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Мы ценим Ваше время</h4>
                            <p className="text-gray-600 text-sm">Ваш отзыв помогает другим пациентам выбрать качественную медицинскую помощь</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-emerald-500 mr-3 text-2xl">✓</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Мы стремимся к совершенству</h4>
                            <p className="text-gray-600 text-sm">Каждый отзыв мотивирует нас становиться еще лучше</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-emerald-500 mr-3 text-2xl">✓</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Мы читаем все отзывы</h4>
                            <p className="text-gray-600 text-sm">Каждый отзыв внимательно изучается, чтобы улучшить наш сервис</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-blue-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-2">
                        <strong>Спасибо за Ваше доверие!</strong>
                      </p>
                      <p className="text-gray-600">
                        Мы очень ценим наших пациентов и всегда готовы помочь Вам и Вашим близким сохранить здоровье. Ваши отзывы помогают нам становиться лучше день ото дня.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Филиалы */}
              {activeSection === 'branches' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Филиалы</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Левая колонка */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-emerald-500">
                          ММЦ «Дубки-Альтамед»
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <p>пос. ВНИИССОК (Дубки), ул. Рябиновая, д. 2</p>
                          <p>
                            Телефон: <a href="tel:+74959785701" className="text-emerald-600 hover:text-emerald-700">+7 (495) 978-57-01</a>
                </p>
                <p>
                            Телефон: <a href="tel:+79852105073" className="text-emerald-600 hover:text-emerald-700">+7 (985) 210-50-73</a>
                          </p>
                        </div>
              </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-emerald-500">
                          ММЦ «Альтамед +»
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <p>г. Одинцово, ул. Союзная, д. 32 Б</p>
                          <p>
                            Телефон: <a href="tel:+74952129003" className="text-emerald-600 hover:text-emerald-700">+7 (495) 212-90-03</a>
                          </p>
          </div>
        </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-emerald-500">
                          ММЦ «Альтамед-Голицино»
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <p>г. Голицыно, ул. Советская, д.58</p>
                          <p>
                            Телефон: <a href="tel:+74959896480" className="text-emerald-600 hover:text-emerald-700">+7 (495) 989-64-80</a>
                </p>
              </div>
            </div>
          </div>
          
                    {/* Правая колонка */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-emerald-500">
                          Клиника «Одинмед»
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <p>г. Одинцово, ул. Комсомольская, д. 16, корп. 3</p>
                          <p>Стоматологическое отделение:</p>
                          <p>
                            <a href="tel:+74952874127" className="text-emerald-600 hover:text-emerald-700">+7 (495) 287-41-27</a>
                            {' '}, <a href="tel:+79268099890" className="text-emerald-600 hover:text-emerald-700">+7 (926) 809-98-90</a>
                          </p>
                          <p>Стационар одного дня: <a href="tel:+74952874134" className="text-emerald-600 hover:text-emerald-700">+7 (495) 287-41-34</a></p>
                          <p>Центр амбулаторной хирургии: <a href="tel:+74952874178" className="text-emerald-600 hover:text-emerald-700">+7 (495) 287-41-78</a></p>
          </div>
        </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-emerald-500">
                          Клиника «Одинмед+»
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <p>г. Одинцово, ул. Маршала Неделина, д. 9</p>
                          <p>
                            Телефон: <a href="tel:+74959262655" className="text-emerald-600 hover:text-emerald-700">+7 (495) 926-26-55</a>
                          </p>
                        </div>
              </div>
            </div>
          </div>
        </div>
              )}

              {/* Лицензии */}
              {activeSection === 'licenses' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Лицензии</h2>
                  <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-800 text-sm space-y-3">
                    <p className="font-semibold text-gray-900">
                      Сведения о лицензии на осуществление медицинской деятельности (по выписке из реестра лицензий)
                    </p>
                    <p className="text-gray-600 text-xs">
                      Дата и время формирования выписки в реестре: 27.02.2025, 15:05. Проверка подлинности электронного документа, двумерный штриховой код и усиленная квалифицированная электронная подпись содержатся в файле PDF «Выписка из реестра Альтамед-С» ниже.
                    </p>
                    <dl className="grid gap-2 sm:grid-cols-1">
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-gray-600 shrink-0 sm:min-w-[220px]">Статус лицензии</dt>
                        <dd className="font-medium text-gray-900">действует (на дату выписки)</dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-gray-600 shrink-0 sm:min-w-[220px]">Регистрационный номер</dt>
                        <dd className="font-medium text-gray-900">Л041-01162-50/00349801</dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-gray-600 shrink-0 sm:min-w-[220px]">Дата предоставления лицензии</dt>
                        <dd className="font-medium text-gray-900">04.09.2020</dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-gray-600 shrink-0 sm:min-w-[220px]">Лицензирующий орган</dt>
                        <dd className="font-medium text-gray-900">Министерство здравоохранения Московской области</dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-gray-600 shrink-0 sm:min-w-[220px]">Лицензиат</dt>
                        <dd className="font-medium text-gray-900">
                          Общество с ограниченной ответственностью «Альтамед-С» (ООО «Альтамед-С»), ИНН 5032035051, ОГРН 1025004063193
                        </dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-gray-600 shrink-0 sm:min-w-[220px]">Адрес в реестре</dt>
                        <dd className="font-medium text-gray-900">
                          143005, Россия, Московская область, г. Одинцово, бульвар Маршала Крылова, д. 23
                        </dd>
                      </div>
                    </dl>
                    <p className="text-gray-600 text-xs pt-1">
                      Срок действия лицензии и полный перечень адресов и видов работ приведены в актуальной выписке из реестра лицензий (PDF). Самостоятельная проверка:{' '}
                      <a
                        href="https://roszdravnadzor.gov.ru/services/licenses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                      >
                        реестр лицензий Росздравнадзора
                      </a>
                      .
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <a href="/images/documents/vypiska-egryul (1).pdf" target="_blank" className="flex items-center justify-between group">
                        <span className="text-gray-700 group-hover:text-emerald-600">Выписка ЕГРЮЛ</span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <a href="/images/documents/ogrn (1).pdf" target="_blank" className="flex items-center justify-between group">
                        <span className="text-gray-700 group-hover:text-emerald-600">Свидетельство о государственной регистрации</span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <a href="/images/documents/vypiska-iz-reestra-altamed-s-2025 (1).pdf" target="_blank" className="flex items-center justify-between group">
                        <span className="text-gray-700 group-hover:text-emerald-600">Выписка из реестра Альтамед-С</span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <a href="/images/documents/sanepid-zaklyuchenie-krylova-23-ot-03.11.2023g (1).pdf" target="_blank" className="flex items-center justify-between group">
                        <span className="text-gray-700 group-hover:text-emerald-600">Санитарно-эпидемиологическое заключение по радиационной безопасности</span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </a>
          </div>
          
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <a href="/images/documents/san_epid_zaklyuchenie_mozhajskoe_sh_141_rentgen (1).pdf" target="_blank" className="flex items-center justify-between group">
                        <span className="text-gray-700 group-hover:text-emerald-600">Санитарно-эпидемиологическое заключение по радиационной безопасности</span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </a>
                    </div>

                    {/* Лицензия Медицинской деятельности */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Лицензия Медицинской деятельности</h3>
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <a href="/images/documents/med deatlenost.pdf" target="_blank" className="flex items-center justify-between group">
                          <span className="text-gray-700 group-hover:text-emerald-600">Лицензия на осуществление медицинской деятельности</span>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
              )}

              {/* Контакты контролирующих органов */}
              {activeSection === 'regulatory' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Контакты контролирующих органов</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Федеральная служба по надзору в сфере здравоохранения</h3>
                      <div className="space-y-2 text-gray-700 ml-4">
                        <p>Справочная Росздравнадзора: <a href="tel:+74956984538" className="text-emerald-600 hover:text-emerald-700">+7 (495) 698-45-38</a>; <a href="tel:+74995780230" className="text-emerald-600 hover:text-emerald-700">+7 (499) 578-02-30</a></p>
                        <p>Адрес: 109074, Москва, Славянская площадь, д.4, стр. 1</p>
          </div>
        </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Управление Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Московской области</h3>
                      <div className="space-y-2 text-gray-700 ml-4">
                        <p className="text-sm text-gray-600">Сокращенное название: Управление Роспотребнадзора по Московской области</p>
                        <p>Адрес: 141014, Московская область, г. Мытищи, ул. Семашко, дом 2</p>
                        <p>Телефоны: <a href="tel:+74955861078" className="text-emerald-600 hover:text-emerald-700">(495) 586-10-78</a>, <a href="tel:+74955861287" className="text-emerald-600 hover:text-emerald-700">(495) 586-12-87</a></p>
                        <p>Факс: (495) 586-12-68</p>
                        <p>E-mail: <a href="mailto:org@50.rospotrebnadzor.ru" className="text-emerald-600 hover:text-emerald-700">org@50.rospotrebnadzor.ru</a></p>
                      </div>
          </div>
          
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Министерство здравоохранения Московской области</h3>
                      <div className="space-y-2 text-gray-700 ml-4">
                        <p>143407, Московская область, г. Красногорск-7, бульвар Строителей, д. 1</p>
                        <p>Телефон: <a href="tel:+74986020301" className="text-emerald-600 hover:text-emerald-700">+7 (498) 602-03-01</a></p>
                        <p>E-mail: <a href="mailto:minzdrav@mosreg.ru" className="text-emerald-600 hover:text-emerald-700">minzdrav@mosreg.ru</a></p>
                      </div>
                      <div className="mt-2 ml-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Пресс-секретарь Министерства здравоохранения Московской области</h4>
                        <div className="space-y-1 text-gray-700">
                          <p>Контактные телефоны: <a href="tel:+74986020420" className="text-emerald-600 hover:text-emerald-700">+7 498 602 04 20 доб. 4 64 92</a></p>
                          <p>Факс: +7 498 602-03-00</p>
                          <p>E-mail: <a href="mailto:pressminzdrav@mosreg.ru" className="text-emerald-600 hover:text-emerald-700">pressminzdrav@mosreg.ru</a></p>
                        </div>
                      </div>
              </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Федеральная служба по надзору в сфере защиты прав потребителей и благополучия человека</h3>
                      <div className="space-y-2 text-gray-700 ml-4">
                        <p className="text-sm text-gray-600">Сокращенное название: Роспотребнадзор</p>
                        <p>Адрес: 127994, г. Москва, Вадковский переулок, дом 18, строение 5 и 7</p>
                        <p>Телефон: <a href="tel:+74999732690" className="text-emerald-600 hover:text-emerald-700">+7 (499) 973-26-90</a></p>
                        <p>Сайт: <a href="https://www.rospotrebnadzor.ru/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">https://www.rospotrebnadzor.ru/</a></p>
          </div>
        </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Главное Управление МВД России по Московской области</h3>
                      <div className="space-y-2 text-gray-700 ml-4">
                        <p>Почтовый адрес: 125009, г. Москва, Никитский пер., д. 3</p>
                        <p>Адрес официального интернет-сайта: <a href="https://50.мвд.рф" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">50.мвд.рф</a></p>
                        <p>Приемная ГУ МВД: <a href="tel:+74956098474" className="text-emerald-600 hover:text-emerald-700">8 (495) 609-84-74</a>; <a href="tel:+74956098502" className="text-emerald-600 hover:text-emerald-700">8 (495) 609-85-02</a></p>
                        <p>Дежурная часть: <a href="tel:+74956094952" className="text-emerald-600 hover:text-emerald-700">8 (495) 609-49-52</a>, ф. <a href="tel:+74956094951" className="text-emerald-600 hover:text-emerald-700">8 (495) 609-49-51</a></p>
                        <p>Телефон доверия: <a href="tel:+74956927066" className="text-emerald-600 hover:text-emerald-700">8 (495) 692-70-66</a></p>
                      </div>
          </div>
          
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">ГУ МЧС России по Московской области</h3>
                      <div className="space-y-2 text-gray-700 ml-4">
                        <p className="text-sm text-gray-600">Руководитель подразделения: Полетыкин Сергей Алексеевич</p>
                        <p>Адрес: г. Москва ул. Обручева д. 46</p>
                        <p>Телефон доверия: <a href="tel:+74997430272" className="text-emerald-600 hover:text-emerald-700">+7(499) 743-02-72</a></p>
                        <p>Сайт: <a href="https://50.mchs.gov.ru/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">https://50.mchs.gov.ru/</a></p>
          </div>
        </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Учредители компании:</h3>
                      <div className="space-y-2 text-gray-700 ml-4">
                        <p>Лебедев Александр Анатольевич</p>
                        <p>ИНН 503204811430</p>
                        <p className="mt-3">Гребцов Сергей Борисович</p>
                        <p>ИНН 503205994105</p>
                      </div>
          </div>
          
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Одинцовский территориальный отдел Управления Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Московской области</h3>
                      <div className="space-y-2 text-gray-700 ml-4">
                        <p>143000, Московская область, г. Одинцово, Можайское шоссе, д.12</p>
                        <p className="text-sm text-gray-600">Начальник отдела Мозгалина Наталья Юрьевна</p>
                        <p>Тел./факс: <a href="tel:+74955935143" className="text-emerald-600 hover:text-emerald-700">495-593-51-43</a></p>
                </div>
              </div>
          </div>
        </div>
              )}

              {/* Обслуживание по договорам ДМС */}
              {activeSection === 'vhi' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Работа с корпоративными клиентами</h2>
                  <div className="prose max-w-none text-gray-700 space-y-4 mb-6">
                    <p>
                      Обеспечение медицинской помощью своих сотрудников — неотъемлемая часть корпоративной культуры. Имея определенный социальный пакет, компания приобретает уважение и авторитет в глазах не только сотрудников, но и деловых партнеров, формирует имидж солидной организации, заинтересованной в повышении работоспособности коллектива.
                    </p>
                    <p>Для реализации этой задачи мы предлагаем.</p>
                    <p>Заключение договора добровольного медицинского страхования (ДМС) через наших партнеров для прикрепления на обслуживание в Альтамед-С:</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                      <li>• АО Альфа Страхование</li>
                      <li>• ОПФ Группа Ренессанс Страхование</li>
                      <li>• СПАО Ингосстрах</li>
                      <li>• ООО Абсолют Страхование</li>
                      <li>• САО ВСК</li>
                      <li>• ПАО Росгосстрах</li>
                      <li>• АО МАКС</li>
                      <li>• АО СК Совкомбанк жизнь</li>
                      <li>• АО СОГАЗ</li>
                      <li>• ООО Зетта Страхование жизни</li>
                      <li>• САО РЕСО-Гарантия</li>
                      <li>• ОО СК Согласие</li>
                      <li>• ООО Регион-Медсервис</li>
                      <li>• САО Медэкспресс</li>
                      <li>• ПАО «САК «Энергогарант»</li>
                      <li>• ООО "Капитал Лайф Страхование жизни"</li>
                      <li>• ПАО САК "Энергогарант столичный филиал"</li>
                      <li>• ООО "ПСБ-страхование"</li>
                      <li>• ООО РСО "ЕВРОИНС"</li>
                      <li>• ООО "Инлайф страхование"</li>
                      <li>• ООО "Бестдоктор"</li>
                      <li>• ООО "Совкомбанк страхование"</li>
                      <li>• АО ГСК "ЮГОРИЯ"</li>
                      <li>• ООО СК "Сбербанк страхование"</li>
                      <li>• АО СК Полис Гарант</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Наши преимущества:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span>Многопрофильность</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span>Сервис и комфорт</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span>Высокий профессионализм специалистов</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span>Гибкая ценовая политика</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span>Оптимальное соотношение цена-качество-сервис</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span>Удобный режим работы: ежедневно 9.00–20.00 без перерыва на обед и выходных</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 bg-emerald-50 rounded-lg p-4">
                    <p className="text-gray-700">Приглашаем всех желающих к сотрудничеству.</p>
                  </div>
                </div>
              )}

              {/* Информация для пациентов */}
              {activeSection === 'personal-data' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Персональные данные</h2>
                  <p className="text-gray-700 mb-6">
                    Документы по обработке и защите персональных данных. Нажмите на название документа, чтобы скачать файл.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: 'Акт оценки возможного вреда', file: '+Акт оценки возможного вреда.docx' },
                      { title: 'Политика оператора в отношении обработки персональных данных (для медицины)', file: '+Политика оператора в отношении обработки персональных данных НОВАЯ ДЛЯ МЕДИЦИНЫ.docx' },
                      { title: 'Журнал проведения инструктажей по обработке ПД', file: 'ЖУРНАЛ проведения инструктажей по обработке пд.docx' },
                      { title: 'Журнал учета запросов субъектов ПД', file: 'ЖУРНАЛ учета запросов субъектов ПД.docx' },
                      { title: 'Журнал учета съёмных носителей', file: 'ЖУРНАЛ учета съемный носителей.docx' },
                      { title: 'Инструкция ответственного за безопасность ПД в организации', file: 'инструкция ответственного за безопасность пд в организации.docx' },
                      { title: 'Инструкция ответственного за организацию обработки ПД', file: 'инструкция ответственного за организацию обработки пд.docx' },
                      { title: 'Инструкция по антивирусной защите ПД', file: 'инструкция по антивирусной защите пд.docx' },
                      { title: 'Инструкция по организации резервного копирования ПД', file: 'инструкция по организации резервного копирования пд.docx' },
                      { title: 'Инструкция по осуществлению внутреннего контроля безопасности', file: 'инструкция по осуществлению внутреннего контроля безопасности.docx' },
                      { title: 'Инструкция по порядку уничтожения персональных данных', file: 'Инструкция по порядку уничтожения персональных данных.docx' },
                      { title: 'Инструкция по проведению инструктажа лиц, допущенных к работе с ПД', file: 'инструкция по проведению инструктажа лиц, допущенных к работе с ПДdocx.docx' },
                      { title: 'Инструкция по учёту и хранению съёмных носителей персональных данных', file: 'Инструкция по учёту и хранению съёмных носителей персональных данных.docx' },
                      { title: 'Инструкция по учету лиц, допущенных к обработке ПД', file: 'инструкция по учету лиц допущенных к обработке пд.docx' },
                      { title: 'Инструкция пользователя информационной системы ПД', file: 'инструкция пользователя информаионной системы пд.docx.docx' },
                      { title: 'Инструкция пользователя информационной системы персональных данных при возникновении нештатных ситуаций', file: 'Инструкция пользователя информационной системы персональных данных при возникновении нештатных ситуаций.docx' },
                      { title: 'Образец. Выгрузка из журнала регистрации событий в информационной системе', file: 'Образец . Выгрузка из журнала регистрации событий в информационной системе.docx' },
                      { title: 'Обязательство о неразглашении ПД', file: 'Обязательство о неразглашении пд.docx' },
                      { title: 'Положение об обработке персональных данных', file: 'Положение об обработке персональных данных.docx' },
                      { title: 'Правила обработки персональных данных без использования средств автоматизации', file: 'ПРАВИЛА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ без использования средств автоматизации.docx' },
                      { title: 'Правила оценки возможного вреда субъектам ПД', file: 'ПРАВИЛА оценки возможного вреда субъектам пд.docx' },
                      { title: 'Правила рассмотрения запросов субъектов', file: 'ПРАВИЛА РАССМОТРЕНИЯ ЗАПРОСОВ СУБЪЕКТОВ.docx' },
                      { title: 'Приказ о назначении лица, ответственного за безопасность ПД', file: 'Приказ  о назначении лица, ответственного за безопасность ПД.docx' },
                      { title: 'Приказ о назначении лица, ответственного за обработку ПД', file: 'Приказ  о назначении лица, ответственного за обработку ПД.docx' },
                      { title: 'Приказ о создании комиссии по обработке ПД и формы актов', file: 'Приказ о создании комиссии по обработке пд и формы актов.docx' },
                      { title: 'Приказ о создании комиссии по уничтожению ПД + Акт об уничтожении', file: 'Приказ о создании комиссии по уничтожению ПД +АКТ об уничтожении.docx' },
                      { title: 'Приказ о хранении материальных носителей и допуска лиц', file: 'приказ о хранении материальных носителей и допуска лиц.docx' },
                      { title: 'Приказ об утверждении границ контролируемой территории', file: 'Приказ об утверждении границ контролируемой территории .docx' },
                      { title: 'Приказ об утверждении и введении в действие инструкций', file: 'Приказ об утверждении и введении в действие инструкций .docx' },
                      { title: 'Приказ об утверждении и введении в действие правил оператора', file: 'Приказ об утверждении и введении в действие правил оператора .docx' },
                      { title: 'Приказ об утверждении перечня информационных систем', file: 'приказ об утверждении перечня информационных систем.docx' },
                      { title: 'Приказ об утверждении перечня обрабатываемых данных', file: 'приказ об утверждении перечня обрабатываемых данных.docx' },
                      { title: 'Приказ об утверждении Политики и Положения по обработке персональных данных', file: 'приказ об утверждении Политики и Положения по обработке персональных данных.docx' },
                      { title: 'Приказ об утверждении форм согласий ПД', file: 'Приказ об утверждении форм согласий пд .docx' },
                      { title: 'Согласие на обработку ПД для сайта', file: 'согласие на обработку пд для сайта.docx' },
                      { title: 'Согласие на обработку персональных данных пациентов', file: 'согласие на обработку персональных данных пациентов.docx' },
                      { title: 'Согласие на обработку персональных данных работников', file: 'согласие на обработку персональных данных работников.docx' },
                      { title: 'Согласие на получение СМС', file: 'Согласие на получение СМС.docx' },
                      { title: 'Согласие на размещение ПД работников на сайте', file: 'Согласие на размещение ПД работников на сайте.docx' },
                      { title: 'Условия обработки ПД неограниченным кругом лиц', file: 'Усливия обработки ПД неограниченным кругом лиц.docx' },
                    ].map((doc, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div className="flex-1">
                            <p className="text-gray-700 text-sm font-medium">{doc.title}</p>
                          </div>
                          <a
                            href={`/images/documents/PD/${encodeURIComponent(doc.file)}`}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap text-sm"
                          >
                            Скачать
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'patient-info' && (
                <PatientInfoSection />
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Загрузка...</div>}>
      <AboutPageContent />
    </Suspense>
  );
}
