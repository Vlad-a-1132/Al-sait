'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAccessibility } from '../contexts/AccessibilityContext'

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { isAccessibilityMode, toggleAccessibilityMode } = useAccessibility()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  return (
    <>
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-white pt-[env(safe-area-inset-top)] shadow-sm">
      {/* Верхний уровень: логотип, телефон и кнопки */}
      <div className="border-b border-gray-100 py-2 md:py-3">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '83rem' }}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Логотип */}
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/icons/S.webp" 
                  alt="Альтамед-с" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div className="text-[#13AB7B] font-semibold ml-2 text-xl">Альтамед-С</div>
              </Link>
              
              {/* Телефон - скрываем на мобильных */}
              <div className="hidden lg:flex items-center ml-10">
                <svg className="w-5 h-5 text-gray-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-900 font-medium">+7 (495) 255-44-50</span>
              </div>
            </div>
            
            {/* Кнопки справа - адаптируем для мобильных */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={toggleAccessibilityMode}
                className={`hidden md:flex items-center transition text-sm border rounded px-3 py-1.5 ${
                  isAccessibilityMode
                    ? 'bg-yellow-400 text-black border-yellow-600 font-bold'
                    : 'text-gray-600 hover:text-[#13AB7B] border-gray-300'
                }`}
                aria-label="Версия для слабовидящих"
                title={isAccessibilityMode ? 'Выключить версию для слабовидящих' : 'Включить версию для слабовидящих'}
              >
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                </svg>
                Версия для слабовидящих
              </button>
              <Link href="https://lk.altamed-c.ru/login" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center bg-[#13AB7B] text-white hover:bg-[#10a070] transition-colors text-sm border border-[#13AB7B] rounded px-3 py-1.5 shadow-sm">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                </svg>
                Личный кабинет
              </Link>
              {/* Мобильные кнопки */}
              <div className="md:hidden flex items-center space-x-2">
                <Link 
                  href="https://online.altamed-c.ru/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-3 py-1.5 rounded-md hover:bg-orange-600 transition-colors text-xs font-medium shadow-sm"
                >
                  Запись
                </Link>
              </div>
              
              {/* Десктопная кнопка записи */}
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition text-sm">
                Записаться онлайн
              </Link>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  aria-expanded="false"
                >
                  <span className="sr-only">Открыть меню</span>
                  <svg
                    className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Второй уровень: поиск и навигация - скрываем на мобильных */}
      <div className="flex h-9 items-center justify-between border-b border-gray-100 bg-emerald-50/70 px-4 text-[11px] font-medium text-gray-700 md:hidden">
        <Link href="/contacts" className="inline-flex min-w-0 items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="truncate">Можайское ш., 141</span>
        </Link>
        <a href="tel:+74952554450" className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-emerald-800">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72" />
          </svg>
          Позвонить
        </a>
      </div>

      <div className="border-b border-gray-200 hidden md:block">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '83rem' }}>
          <div className="flex items-center py-3">
            {/* Блок поиска */}
            <div className="w-[270px] h-[42px] relative mr-8">
              <form onSubmit={handleSearchSubmit} className="flex items-center h-full">
                <input 
                  type="text"
                  placeholder="Поиск по сайту"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-full border border-gray-200 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
                <button 
                  type="submit"
                  className="absolute right-3 text-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>
            
            {/* Меню навигации */}
            <div className="flex-1">
              <nav className="flex space-x-6">
                <Link href="/doctors" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Врачи
                </Link>
                <Link href="/services" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Услуги
                </Link>
                <Link href="/services/dentistry" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Стоматология
                </Link>
                <Link href="/diagnostics" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Диагностика
                </Link>
                <Link href="/services/lab-tests" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Анализы
                </Link>
                <Link href="/rehabilitation" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Реабилитация
                </Link>
                <Link href="/promo" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Акции
                </Link>
                <Link href="/schedule" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Расписание
                </Link>
                <Link href="/about" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  О нас
                </Link>
                <Link href="/about?section=reviews" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Отзывы
                </Link>
                <Link href="/contacts" className="text-gray-800 hover:text-[#13AB7B] transition py-2 text-sm font-medium">
                  Контакты
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} max-h-[calc(var(--app-viewport-height,100dvh)_-_92px_-_env(safe-area-inset-top))] overflow-y-auto overscroll-contain border-b border-gray-200 md:hidden`}>
        {/* Поиск в мобильном меню */}
        <div className="px-4 py-3 border-b border-gray-100">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input 
              type="text"
              placeholder="Поиск по сайту"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-2 pr-10 text-base focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
        
        {/* Телефон в мобильном меню */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href="tel:+74952554450" className="text-gray-900 font-medium">+7 (495) 255-44-50</a>
          </div>
        </div>
        
        {/* Меню навигации */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={toggleAccessibilityMode}
            className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${
              isAccessibilityMode
                ? 'bg-yellow-400 text-black font-bold'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            }`}
            aria-label="Версия для слабовидящих"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
            </svg>
            Версия для слабовидящих
          </button>
          <Link href="https://lk.altamed-c.ru/login" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
            </svg>
            Личный кабинет
          </Link>
          <Link href="/doctors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Врачи
          </Link>
          <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Услуги
          </Link>
          <Link href="/services/dentistry" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Стоматология
          </Link>
          <Link href="/diagnostics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Диагностика
          </Link>
          <Link href="/services/lab-tests" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Анализы
          </Link>
          <Link href="/rehabilitation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Реабилитация
          </Link>
          <Link href="/promo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Акции
          </Link>
          <Link href="/schedule" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Расписание
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            О нас
          </Link>
          <Link href="/about?section=reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Отзывы
          </Link>
          <Link href="/contacts" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Контакты
          </Link>
        </div>
      </div>
    </header>
    {/* Spacer to offset fixed header height */}
    <div className="h-[calc(92px_+_env(safe-area-inset-top))] md:h-[calc(128px_+_env(safe-area-inset-top))]"></div>
    </>
  )
}
