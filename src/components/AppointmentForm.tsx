"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

interface AppointmentFormProps {
  doctorImage?: string;
  doctorAlt?: string;
}

export default function AppointmentForm({ 
  doctorImage = "/images/yslugi/promo dok.webp",
  doctorAlt = "Врач"
}: AppointmentFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!phone.trim()) {
      setSubmitStatus({ type: 'error', message: 'Пожалуйста, укажите телефон' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          formType: 'Форма записи на прием',
          message: `Источник: форма записи на странице\nСтраница: ${window.location.pathname}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' });
        setName("");
        setPhone("");
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

  return (
    <section className="py-6 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="relative overflow-hidden rounded-[30px]" style={{
          background: 'linear-gradient(135deg, #4A9B8E 0%, #3A8D7F 25%, #2E7A6D 50%, #25685C 75%, #1A5247 100%)',
          backgroundImage: `url('/images/yslugi/fon form.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl"></div>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
            <div className="w-full lg:w-2/3 p-6 lg:p-8 z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Записаться на прием</h2>
              <p className="text-white/90 mb-6 text-sm lg:text-base">поля, отмеченные * необходимы к заполнению</p>

              <form onSubmit={handleSubmit} className="mb-4 max-w-2xl">
                {submitStatus.type && (
                  <div className={`mb-4 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
                      : 'bg-red-500/20 text-red-100 border border-red-400/30'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className="hidden lg:flex gap-4 mb-4 items-end">
                  <div className="flex-1">
                    <label className="block text-white text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      placeholder="Имя" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" 
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                    <input 
                      type="tel" 
                      placeholder="+7 (___) ____" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-14 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
                  </button>
                </div>

                <div className="lg:hidden space-y-4 mb-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      placeholder="Имя" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" 
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                    <input 
                      type="tel" 
                      placeholder="+7 (___) ____" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-14 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
                  </button>
                </div>

                <p className="text-white/80 text-xs italic mb-2">
                  Нажимая на кнопку, вы даете согласие на{' '}
                  <a href="/privacy-policy" className="underline cursor-pointer hover:text-white" onClick={(e) => { e.preventDefault(); window.location.href = '/privacy-policy'; }}>
                    обработку своих персональных данных
                  </a>
                </p>
              </form>

              <div className="text-white/85 text-sm space-y-1">
                <p>Запись через сайт является предварительной. Наш сотрудник свяжется с Вами для подтверждения записи к специалисту.</p>
                <p>Мы гарантируем неразглашение персональных данных и отсутствие рекламных рассылок. Ваши данные нужны для обратной связи и организации записи.</p>
              </div>
            </div>

            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 lg:w-1/3 z-0">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl transform scale-150 -right-20 -top-20"></div>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-125 right-10 top-10"></div>
              <div className="absolute inset-0 bg-white/15 rounded-full blur-xl transform scale-100 right-20 top-20"></div>
              <Image
                src={doctorImage}
                alt={doctorAlt}
                fill
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

