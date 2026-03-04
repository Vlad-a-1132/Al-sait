"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, FormEvent } from 'react';
import DentalPromoBanner from "@/components/DentalPromoBanner";

export default function ContactsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Пожалуйста, заполните все обязательные поля' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Отправляем данные на API
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: email.trim(), // Для формы контактов используем email как телефон (обязательное поле)
          email: email.trim(), // Передаем email отдельно
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.' });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Произошла ошибка при отправке' });
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setSubmitStatus({ type: 'error', message: 'Произошла ошибка при отправке. Попробуйте позже.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  const addresses = [
    {
      title: 'Клиника на бульваре Маршала Крылова',
      address: '143005, Московская область, Одинцовский городской округ, г.Одинцово, бульвар Маршала Крылова, д.23, пом.I',
      mapLink: 'https://yandex.ru/maps/?rtext=~55.680564,37.291079&rtt=auto',
    },
    {
      title: 'Клиника на Можайском шоссе',
      address: '143005, Московская область, Одинцовский городской округ, г.Одинцово, ул. Можайское шоссе, д.141, пом.4',
      mapLink: 'https://yandex.ru/maps/?rtext=~55.676321,37.306184&rtt=auto',
    },
  ];

  const contactInfo = {
    phone: '+7 (495) 255-44-50',
    email: 'info@altamed-c.ru',
    workingHours: 'Пн-Вс: 8.00 - 21.00',
  };

  const managementSchedule = [
    { position: 'Генеральный директор', day: 'Понедельник', time: '13:00-15:00' },
    { position: 'Главный врач', day: 'Среда', time: '10:00-13:00' },
  ];

  // Load Yandex Maps script
  useEffect(() => {
    const loadMapScript = () => {
      const container = document.getElementById('yandex-map-contacts');
      const innerContainer = document.getElementById('yandex-map-contacts-inner');
      if (!container || !innerContainer || innerContainer.querySelector('script')) {
        return; // Container doesn't exist or script already loaded
      }

      // Get container width for proper map sizing
      const containerWidth = container.offsetWidth || 500;
      const containerHeight = container.offsetHeight || 384; // h-96 = 384px
      
      // Create and load the script for this specific container
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A45b2f50250d7120a4c2242f7d1dffcb1e5024476e057fef53a1c87499479b853&width=${containerWidth}&height=${containerHeight}&lang=ru_RU&scroll=true`;
      script.id = 'yandex-map-script-contacts';
      
      innerContainer.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadMapScript();
    }, 100);

    // Handle window resize
    const handleResize = () => {
      const innerContainer = document.getElementById('yandex-map-contacts-inner');
      if (innerContainer && !innerContainer.querySelector('script')) {
        loadMapScript();
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      {/* Баннеры с страницы услуг (имплантация / ортодонтия) */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DentalPromoBanner />
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-blue-600">
                {contactInfo.phone}
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-600">
                {contactInfo.email}
              </a>
            </div>

            {/* Working Hours */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">График работы</h3>
              <p className="text-gray-600">{contactInfo.workingHours}</p>
            </div>

            {/* Location */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Адреса</h3>
              <p className="text-gray-600 text-sm">2 медицинских центра</p>
            </div>
          </div>
        </div>
      </section>

      {/* Addresses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {addresses.map((address, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{address.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{address.address}</p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-blue-600">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600">
                      {contactInfo.email}
                    </a>
                  </div>
                  <a
                    href={address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    проложить маршрут
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Как нас найти</h2>
            <div className="relative h-96 w-full mb-4 overflow-hidden rounded-lg" id="yandex-map-contacts">
              <div id="yandex-map-contacts-inner" style={{ width: '100%', height: '100%' }}></div>
            </div>
          </div>

          {/* Working Hours and Management Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Working Hours */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">График работы</h2>
              <div className="space-y-4">
                <div className="flex items-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-semibold">{contactInfo.workingHours}</p>
                  </div>
                </div>
                <Link href="/appointments" className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition inline-block">
                  Записаться на прием
                </Link>
              </div>
            </div>

            {/* Management Schedule */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                График приема граждан руководителями:
                <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
              </h2>
              <div className="space-y-4">
                {managementSchedule.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <p className="text-gray-900 font-semibold mb-1">{item.position}</p>
                    <p className="text-gray-600">
                      {item.day} {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Остались вопросы? Отправьте их нам</h2>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Как Вас зовут? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ваше сообщение"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-teal-500 text-white rounded-md font-medium hover:bg-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Поля, отмеченные <span className="text-red-500">*</span>, обязательны для заполнения
                  </p>
                </form>
              </div>
            </div>

            {/* Company Details */}
            <div className="bg-blue-600 text-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Банковские реквизиты:</h2>
              <div className="space-y-4 mb-8">
                <p className="text-sm">р/с 40702810040000425309</p>
                <p className="text-sm">к/с 30101810400000000225</p>
                <p className="text-sm">БИК 044525225</p>
                <p className="text-sm">ПАО Сбербанк</p>
                <p className="text-sm">г.Москва</p>
                <p className="text-sm">ОКОНХ 86.21</p>
                <p className="text-sm">ОКПО 42239956</p>
                <p className="text-sm">ОГРН 1025004063193</p>
                <p className="text-sm mt-4">Ген.директор Лебедев Александр Анатольевич</p>
                <p className="text-sm">Гл.бухгалтер Кузьмина Ирина Евгеньевна</p>
              </div>

              <h2 className="text-2xl font-bold mb-6 mt-8">Наши реквизиты:</h2>
              <div className="space-y-4 mb-8">
                <p className="text-sm">ООО «Альтамед-С»</p>
                <p className="text-sm">143005, Московская область, г. Одинцово, б-р М. Крылова, д.23</p>
                <p className="text-sm">ИНН 5032035051</p>
                <p className="text-sm">КПП 503201001</p>
              </div>

              <h2 className="text-2xl font-bold mb-6 mt-8">Почтовый адрес:</h2>
              <div className="space-y-4">
                <p className="text-sm">143005, Московская область, г. Одинцово, б-р М. Крылова, д.23</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
