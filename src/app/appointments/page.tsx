import AppointmentForm from './AppointmentForm';

export const metadata = {
  title: 'Запись на прием к врачу онлайн - Медицинский центр Альтамед-Св Одинцово',
  description: 'Запись на прием к врачу онлайн в медицинском центре Альтамед-Св Одинцово. Выберите врача, дату и время, заполните форму записи. Быстро, удобно, без очередей.',
  keywords: [
    'запись на прием Одинцово',
    'запись к врачу онлайн Одинцово',
    'онлайн запись на прием Одинцово',
    'записаться к врачу Одинцово',
    'запись на прием Альтамед-с',
    'электронная запись к врачу Одинцово',
    'запись через интернет Одинцово',
    'Московская область запись к врачу',
    'Одинцовский район онлайн запись'
  ],
  openGraph: {
    title: 'Запись на прием к врачу онлайн - Медицинский центр Альтамед-Св Одинцово',
    description: 'Запись на прием к врачу онлайн в медицинском центре Альтамед-Св Одинцово. Выберите врача, дату и время, заполните форму записи.',
    url: 'https://altamed-c.ru/appointments',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-c.ru/appointments',
  },
};

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col min-h-full bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Запись на прием</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Заполните форму ниже, и мы свяжемся с вами для подтверждения записи.
              <br className="hidden md:block" />
              <span className="md:inline"> Вы также можете </span>
              <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                записаться на прием, позвонив по телефону
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6 md:p-8 lg:p-10">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">График работы</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
                    <li className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-0">
                      <span>Пн-Вс:</span>
                      <span className="font-semibold text-emerald-700">8.00 - 21.00</span>
                    </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Контакты</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
                <li className="flex flex-col md:flex-row md:items-start gap-1 md:gap-0">
                  <span className="font-medium md:mr-2">Телефон:</span>
                  <a href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 transition font-semibold">+7 (495) 255-44-50</a>
                </li>
                <li className="flex flex-col md:flex-row md:items-start gap-1 md:gap-0">
                  <span className="font-medium md:mr-2">Email:</span>
                  <a href="mailto:info@altamed-c.ru" className="text-emerald-600 hover:text-emerald-700 transition break-all">info@altamed-c.ru</a>
                </li>
                <li className="flex flex-col md:flex-row md:items-start gap-1 md:gap-0">
                  <span className="font-medium md:mr-2">Адрес:</span>
                  <span>г. Одинцово, ул. Можайское шоссе, 55</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Важная информация</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>При посещении клиники обязательно возьмите с собой паспорт</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Для ребенка необходимо свидетельство о рождении и паспорт родителя</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>В случае невозможности прийти на прием, пожалуйста, предупредите нас заранее</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 