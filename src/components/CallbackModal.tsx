"use client";

import { useEffect, useState, FormEvent } from "react";
import Image from "next/image";

const CALLBACK_DISMISSED_KEY = "altamed-callback-dismissed";

function isCallbackDismissed() {
  try {
    return window.sessionStorage.getItem(CALLBACK_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberCallbackDismissal() {
  try {
    window.sessionStorage.setItem(CALLBACK_DISMISSED_KEY, "1");
  } catch {
    // Safari can deny storage access; closing the modal must still work.
  }
}

export default function CallbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) return;
    if (isCallbackDismissed()) return;

    const timer = setTimeout(() => setIsOpen(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    rememberCallbackDismissal();
    setIsOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!phone.trim()) {
      setSubmitStatus({ type: 'error', message: 'Пожалуйста, укажите телефон' });
      return;
    }

    if (!consent) {
      setSubmitStatus({ type: 'error', message: 'Необходимо согласие на обработку персональных данных' });
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
          formType: 'Обратный звонок для записи',
          message: `Источник: попап обратного звонка для записи\nСтраница: ${window.location.pathname}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' });
        setName("");
        setPhone("");
        setConsent(false);
        // Закрываем модальное окно через 2 секунды
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/40 px-3 pb-[calc(0.75rem_+_env(safe-area-inset-bottom))] pt-[calc(0.75rem_+_env(safe-area-inset-top))] md:items-center md:p-6">
      {/* Modal */}
      <div className="callback-modal-panel relative w-full max-w-[680px] overflow-y-auto rounded-2xl bg-white shadow-2xl md:rounded-3xl">
        {/* Close */}
        <button
          aria-label="Закрыть"
          onClick={closeModal}
          className="absolute right-3 top-3 md:right-4 md:top-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 grid place-items-center"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header line with logo imitation */}
        <div className="flex items-center gap-3 md:gap-4 px-5 md:px-8 pt-5 md:pt-7">
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg overflow-hidden grid place-items-center">
            <Image src="/images/icons/S.webp" alt="Альтамед-С" width={48} height={48} className="h-full w-full object-contain" />
          </div>
          <div className="font-extrabold text-2xl md:text-3xl text-[#13AB7B]">Альтамед-С</div>
        </div>

        <div className="px-5 md:px-8 pb-6 md:pb-10">
          <div className="mx-auto mt-5 md:mt-7 bg-emerald-50/60 rounded-3xl p-5 md:p-8 max-w-[580px]">
            <h3 className="text-center text-xl md:text-2xl font-bold text-gray-900 leading-snug">
              Заказать обратный звонок
              <br className="hidden md:block" /> для записи
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              {submitStatus.type && (
                <div className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 w-full rounded-full border border-emerald-100 bg-white px-4 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:h-12"
              />
              <input
                type="tel"
                placeholder="Ваш номер телефона *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="h-11 w-full rounded-full border border-emerald-100 bg-white px-4 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:h-12"
              />
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input 
                  type="checkbox" 
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="rounded border-gray-300" 
                />
                Я согласен(а), на обработку
                <a className="underline" href="#">персональных данных</a>
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 md:h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base md:text-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Жду звонка'}
              </button>
            </form>

          

            <div className="my-4 text-center text-gray-500 text-sm">или</div>

            <div className="mx-auto max-w-sm bg-white rounded-2xl p-4 md:p-5 text-center border border-emerald-100">
              <div className="font-semibold text-gray-900 mb-3 md:mb-4 text-lg">Записаться по телефону</div>
              <a
                href="tel:+74952554450"
                className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +7 (495) 255-44-50
              </a>
              <div className="mt-2 text-xs text-gray-500">Пн–Вс: 08:00 — 21:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


