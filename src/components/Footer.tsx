import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О клинике */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/icons/S.webp" 
                alt="Альтамед-С" 
                width={32}
                height={32}
                className="object-contain"
              />
              <h3 className="text-xl font-bold">Альтамед-С</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Сеть современных медицинских центров в Одинцово, предоставляющих качественные медицинские услуги и современную диагностику.
            </p>
          </div>
          
          {/* Услуги */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/diagnostics" className="text-gray-300 hover:text-[#13AB7B] transition">
                  Диагностика
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#13AB7B] transition">
                  Все услуги
                </Link>
              </li>
              <li>
                <Link href="/services/dentistry" className="text-gray-300 hover:text-[#13AB7B] transition">
                  Стоматология
                </Link>
              </li>
              <li>
                <Link href="/services/lab-tests" className="text-gray-300 hover:text-[#13AB7B] transition">
                  Анализы
                </Link>
              </li>
              <li>
                <Link href="/promo" className="text-gray-300 hover:text-[#13AB7B] transition">
                  Акции и спецпредложения
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Информация для пациентов */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Информация для пациентов</h3>
            <ul className="space-y-2">
              <li>
                <a href="/images/documents/privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#13AB7B] transition">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/images/documents/terms.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#13AB7B] transition">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="/images/documents/personal_data.docx" download className="text-gray-300 hover:text-[#13AB7B] transition">
                  Согласие на обработку персональных данных
                </a>
              </li>
              <li>
                <a href="/images/documents/sogl.docx" download className="text-gray-300 hover:text-[#13AB7B] transition">
                  Политика обработки персональных данных
                </a>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <svg className="h-5 w-5 text-[#13AB7B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-300 text-sm">
                  <div>г. Одинцово,</div>
                  <div>бульвар Маршала Крылова, д.23</div>
                  <div className="mt-1">ул. Можайское шоссе, д.141</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="h-5 w-5 text-[#13AB7B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+74951275106" className="text-gray-300 hover:text-[#13AB7B] transition">
                  +7 (495) 255-44-50
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="h-5 w-5 text-[#13AB7B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 text-sm">Пн-Вс: 8.00 - 21.00</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="h-5 w-5 text-[#13AB7B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@altamed-c.ru" className="text-gray-300 hover:text-[#13AB7B] transition text-sm">
                  info@altamed-c.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">© {currentYear} Медицинский центр «Альтамед-С». Все права защищены.</p>
        </div>
      </div>
      <Script id="b24u-loader" strategy="lazyOnload">
        {`(function(){var s=document.createElement('script');s.src='https://i.b24u.ru/altamed-c.ru';s.defer=true;s.onload=function(){if(window.B24U){B24U.init();}};document.body.appendChild(s);})();`}
      </Script>
    </footer>
  )
} 