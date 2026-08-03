'use client'

import { useState, FormEvent } from 'react'

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // Отправляем данные на API
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          formType: 'Страница записи на прием',
          notes: `Источник: страница /appointments\n${formData.notes.trim()}`.trim(),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          phone: '',
          notes: ''
        })
      } else {
        setErrorMessage(data.error || 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
      }
    } catch (error) {
      console.error('Ошибка:', error)
      setErrorMessage('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6 md:py-8">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-10 h-10 md:w-12 md:h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Спасибо за вашу заявку!</h3>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-md mx-auto px-4">
          Мы получили вашу заявку на запись к врачу и свяжемся с вами в ближайшее время для подтверждения.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-8 rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Создать новую заявку
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
            Имя <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 md:py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white placeholder:text-gray-400 text-gray-900 text-base"
            placeholder="Ваше имя"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 md:py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white placeholder:text-gray-400 text-gray-900 text-base"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="notes" className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
          Дополнительная информация
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 md:py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white placeholder:text-gray-400 text-gray-900 text-base resize-none"
          placeholder="Укажите дополнительную информацию, если необходимо"
        ></textarea>
      </div>
      
      {errorMessage && (
        <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm md:text-base">{errorMessage}</span>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 pt-2 md:pt-4">
        <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
          Поля, отмеченные <span className="text-red-500 font-semibold">*</span>, обязательны для заполнения
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-auto px-8 py-3.5 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Отправка...
            </span>
          ) : (
            'Записаться на прием'
          )}
        </button>
      </div>
    </form>
  )
}
