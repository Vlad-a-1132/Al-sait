"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import AppointmentForm from "@/components/AppointmentForm";
import { doctors as defaultDoctors } from "@/data/static-data";
import LabDiscountBanner from "@/components/LabDiscountBanner";
import { LAB_PROMOTION } from "@/data/lab-promotion";
import { KDL_PROMOTION } from "@/data/kdl-promotions";
import HomeGallery from "@/components/gallery/HomeGallery";
import winterStyles from "@/components/winter/WinterTheme.module.css";
import WinterOzoneBanner from "@/components/winter/WinterOzoneBanner";
import promoStyles from "@/components/winter/HomePromotionCards.module.css";
import ClinicLocationMap from "@/components/ClinicLocationMap";

function PromotionAction({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`${promoStyles.button} ${compact ? promoStyles.mobileButton : ''}`}>
      Подробнее
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
    </span>
  );
}

interface Schedule {
  start: string;
  end: string;
}

interface DoctorSchedule {
  Monday?: Schedule;
  Tuesday?: Schedule;
  Wednesday?: Schedule;
  Thursday?: Schedule;
  Friday?: Schedule;
  Saturday?: Schedule;
  Sunday?: Schedule;
}

interface DoctorScheduleRowProps {
  name: string;
  specialty: string;
  schedule: DoctorSchedule;
}

function DoctorCardMobile({ name, specialty, schedule }: DoctorScheduleRowProps) {
  const days = [
    { key: 'Monday', label: 'Пн', data: schedule.Monday },
    { key: 'Tuesday', label: 'Вт', data: schedule.Tuesday },
    { key: 'Wednesday', label: 'Ср', data: schedule.Wednesday },
    { key: 'Thursday', label: 'Чт', data: schedule.Thursday },
    { key: 'Friday', label: 'Пт', data: schedule.Friday },
    { key: 'Saturday', label: 'Сб', data: schedule.Saturday },
    { key: 'Sunday', label: 'Вс', data: schedule.Sunday }
  ];

  const hasSchedule = days.some(day => day.data);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
      <div className="mb-3">
        <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
        <p className="text-gray-600 text-xs mt-1">{specialty}</p>
      </div>
      {hasSchedule && (
        <div className="grid grid-cols-2 gap-2">
          {days.map((day) => (
            day.data && (
              <div key={day.key} className="bg-amber-50 rounded-md px-3 py-2">
                <span className="font-semibold text-emerald-700 text-xs">{day.label}</span>
                <span className="block text-emerald-700 font-medium text-xs mt-0.5">
                  {day.data.start}–{day.data.end}
                </span>
              </div>
            )
          ))}
        </div>
      )}
      {!hasSchedule && (
        <p className="text-gray-400 text-xs">В данный момент расписание не доступно</p>
      )}
    </div>
  );
}

function DoctorScheduleRow({ name, specialty, schedule }: DoctorScheduleRowProps) {
  const TimeCell = ({ daySchedule }: { daySchedule?: Schedule }) => {
    if (!daySchedule) {
      return <td className="px-3 py-3 text-center text-gray-300 text-sm">-</td>;
    }
    return (
      <td className="px-3 py-3 text-center bg-amber-50 text-emerald-700 font-medium text-sm rounded-md">
        {daySchedule.start}–{daySchedule.end}
      </td>
    );
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-emerald-50/30 transition-colors">
      <td className="px-4 py-3 text-left font-medium text-gray-900 text-sm">{name}</td>
      <td className="px-4 py-3 text-left text-gray-600 text-sm">{specialty}</td>
      <TimeCell daySchedule={schedule.Monday} />
      <TimeCell daySchedule={schedule.Tuesday} />
      <TimeCell daySchedule={schedule.Wednesday} />
      <TimeCell daySchedule={schedule.Thursday} />
      <TimeCell daySchedule={schedule.Friday} />
      <TimeCell daySchedule={schedule.Saturday} />
      <TimeCell daySchedule={schedule.Sunday} />
    </tr>
  );
}

export default function Home() {
  // State for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlidePaused, setIsSlidePaused] = useState(false);
  // State for tracking current promotion slide (mobile)
  const [currentPromoSlide, setCurrentPromoSlide] = useState(0);
  
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // Slides data - используем нейтральные пути чтобы избежать блокировки рекламы
  const slides = [
    {
      title: "Зимнее меню озонотерапии",
      buttonText: "Об услуге",
      buttonLink: "/services/ozone-therapy",
      buttonColor: "#13735A",
      image: "/images/yslugi/ozone-therapy.webp"
    },
    {
      title: KDL_PROMOTION.title,
      buttonText: "Подробнее",
      buttonLink: KDL_PROMOTION.href,
      buttonColor: "#13AB7B",
      image: KDL_PROMOTION.image
    },
    {
      title: LAB_PROMOTION.title,
      buttonText: "Подробнее",
      buttonLink: LAB_PROMOTION.href,
      buttonColor: "#13AB7B",
      image: LAB_PROMOTION.image
    },
    {
      title: "Понедельник и Пятница – специальные скидки до 25%",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-7",
      buttonColor: "#13AB7B",
      image: "/images/yslugi/task_01kcqtjckffxmbccp30z65x6yy_1766031210_img_0.webp"
    },
    {
      title: "Скидки на компьютерную томографию",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-1",
      buttonColor: "#13AB7B",
      image: "/images/slides/1-kt.webp"
    },
    {
      title: "Комплексное ультразвуковое исследование для женщин",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-2",
      buttonColor: "#13AB7B",
      image: "/images/slides/yzi.webp"
    },
    {
      title: "Скидки для пенсионеров и многодетных",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-3",
      buttonColor: "#13AB7B",
      image: "/images/slides/2-pensia.webp"
    },
    {
      title: "При первичном приёме врача акушера-гинеколога",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-5",
      buttonColor: "#13AB7B",
      image: "/images/slides/kolpos.webp"
    },
    {
      title: "Скидка 30% на общий массаж медицинский",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-6",
      buttonColor: "#13AB7B",
      image: "/images/promo/task_01kbdkwa0xftb9wh0jek05ksz3_1764615024_img_0.webp"
    }
  ];

  const isLabSlide = slides[currentSlide].buttonLink === LAB_PROMOTION.href;
  const isWinterSlide = slides[currentSlide].buttonLink === '/services/ozone-therapy';

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Functions for promotion slider
  const nextPromoSlide = () => {
    setCurrentPromoSlide((prev) => (prev === 2 ? 0 : prev + 1)); // 3 slides total
  };

  const prevPromoSlide = () => {
    setCurrentPromoSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const goToPromoSlide = (index: number) => {
    setCurrentPromoSlide(index);
  };
  // Load doctors from localStorage or use default
  const [doctors, setDoctors] = useState(defaultDoctors);
  
  useEffect(() => {
    // Загрузка данных из localStorage
    const saved = localStorage.getItem('admin_doctors_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setDoctors(parsed);
      } catch (e) {
        // Если ошибка парсинга, используем дефолтные данные
      }
    }
  }, []);

  // Shuffled doctors array for slider - only shuffle on client after hydration
  const [shuffledDoctors, setShuffledDoctors] = useState(doctors);
  
  useEffect(() => {
    // Shuffle only on client side after hydration
    const doctorsCopy = [...doctors];
    // Shuffle using Fisher–Yates algorithm
    for (let i = doctorsCopy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = doctorsCopy[i];
      doctorsCopy[i] = doctorsCopy[j];
      doctorsCopy[j] = temp;
    }
    setShuffledDoctors(doctorsCopy);
  }, [doctors]);
  
  // Интересы для нижней секции
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const interests = [
    { title: "Специалисты", icon: "👨‍⚕️", link: "/doctors" },
    { title: "Анализы", icon: "🧪", link: "/analyses" },
    { title: "Заболевания", icon: "🩺", link: "/diseases" },
    { title: "Симптомы", icon: "🤒", link: "/symptoms" },
  ];

  // Автоматическое переключение слайдов (только на клиенте)
  useEffect(() => {
    if (isSlidePaused) return;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, isWinterSlide || currentSlide === 1 || isLabSlide ? 8000 : 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, isSlidePaused, slides.length, isLabSlide, isWinterSlide]);

  // Function to scroll doctors slider left
  const scrollDoctorsLeft = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  // Function to scroll doctors slider right
  const scrollDoctorsRight = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // CSS for hiding scrollbars
  useEffect(() => {
    // Add CSS to head to hide scrollbars globally on the slider
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-full bg-white mx-auto ${winterStyles.page}`} data-winter-page="home">
      {/* Основной раздел с заголовком */}
      <section className={`py-3 ${winterStyles.hero}`}>
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Сеть медицинских центров «<span className="italic">Альтамед-С</span>»
            </h1>
          </div>

          <div className={`flex flex-col md:flex-row gap-4 md:gap-8 justify-center mx-auto px-4 md:px-0 ${winterStyles.heroLayout}`}>
            {/* Левая колонка с семейной картинкой и блоком для взрослых и детей - теперь слайдер */}
            <div className={`w-full md:w-[548px] flex-shrink-0 mx-auto md:mx-0 ${winterStyles.heroSliderColumn}`}>
              <div
                className={`min-h-[380px] md:min-h-[445px] flex flex-col rounded-[20px] overflow-hidden shadow-md ${winterStyles.promotionFrame} ${isWinterSlide ? winterStyles.posterFrame : ''}`}
                onMouseEnter={() => setIsSlidePaused(true)}
                onMouseLeave={() => setIsSlidePaused(false)}
                onFocusCapture={() => setIsSlidePaused(true)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setIsSlidePaused(false);
                }}
              >
                {/* Слайдер */}
                <div className={`h-[300px] md:h-[358px] bg-emerald-500 relative overflow-hidden ${winterStyles.slideImage} ${isWinterSlide ? winterStyles.posterSlide : ''}`}>
                  {/* Условия акции остаются читаемым текстом на любом экране. */}
                  <div className="w-full h-full relative">
                    {isWinterSlide ? (
                      <Link href="/services/ozone-therapy" className="block h-full" aria-label="Озонотерапия в Альтамед-С — об услуге">
                        <WinterOzoneBanner />
                      </Link>
                    ) : isLabSlide ? (
                      <Link href={LAB_PROMOTION.href} className="block h-full" aria-label="Скидки на анализы — условия акции">
                        <LabDiscountBanner priority />
                      </Link>
                    ) : slides[currentSlide].buttonLink === KDL_PROMOTION.href ? (
                      <Link href={KDL_PROMOTION.href} className="block h-full bg-[#a20c5c]" aria-label="Акции на анализы KDL — все предложения">
                        <Image src={KDL_PROMOTION.image} alt="Акции на анализы KDL в Альтамед-С" fill priority sizes="(max-width: 767px) calc(100vw - 64px), 548px" className="object-contain" />
                      </Link>
                    ) : <img
                      src={slides[currentSlide]?.image || slides[0].image}
                      alt={slides[currentSlide]?.title || slides[0].title}
                      className="w-full h-full object-cover"
                      style={{ display: 'block' }}
                      onError={(e) => {
                        console.error('Failed to load image:', (slides[currentSlide]?.image || slides[0].image));
                      }}
                    />}
                  </div>
                  
                  {/* Навигационные стрелки - скрываем на мобильных */}
                  <button 
                    onClick={prevSlide} 
                    aria-label="Предыдущий баннер"
                    className={`hidden md:block absolute left-3 ${isWinterSlide ? 'bottom-0' : isLabSlide ? 'bottom-2' : 'top-1/2 -translate-y-1/2'} bg-white/70 rounded-full p-2 shadow-md hover:bg-white`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide} 
                    aria-label="Следующий баннер"
                    className={`hidden md:block absolute right-3 ${isWinterSlide ? 'bottom-0' : isLabSlide ? 'bottom-2' : 'top-1/2 -translate-y-1/2'} bg-white/70 rounded-full p-2 shadow-md hover:bg-white`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Прогресс-бар в виде точек */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" suppressHydrationWarning>
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Баннер ${index + 1}: ${slides[index].title}`}
                        aria-pressed={currentSlide === index}
                        className={`w-3 h-3 rounded-full ${
                          isLabSlide
                            ? (currentSlide === index ? "bg-emerald-700" : "bg-emerald-700/25")
                            : (currentSlide === index ? "bg-white" : "bg-white/50")
                        }`}
                        suppressHydrationWarning
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Нижняя часть - белый блок с текстом и кнопкой, меняется в зависимости от текущего слайда */}
                <div className="bg-white p-3 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0" suppressHydrationWarning>
                  <div className="text-black font-medium text-sm md:text-base flex-1" suppressHydrationWarning>{slides[currentSlide]?.title || slides[0].title}</div>
                  <Link 
                    href={slides[currentSlide]?.buttonLink || slides[0].buttonLink} 
                    className="text-white rounded-full flex items-center justify-center px-4 py-2 md:w-[185px] md:h-[46px] h-[36px] text-xs md:text-base"
                    style={{ backgroundColor: slides[currentSlide]?.buttonColor || slides[0].buttonColor }}
                    suppressHydrationWarning
                  >
                    <span suppressHydrationWarning>{slides[currentSlide]?.buttonText || slides[0].buttonText}</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Правая колонка с услугами */}
            {/* Мобильная версия - цветные блоки 2x6 */}
            <div className={`md:hidden grid grid-cols-2 gap-3 w-full max-w-sm mx-auto ${winterStyles.serviceTiles} ${winterStyles.mobileTiles}`}>
              <Link href="/services/allergology" className="bg-[#E8F4FD] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Аллерго<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/gastroenterology" className="bg-[#FFE8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Гастро<wbr />энтерология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/ginekolog-v-odintsovo" className="bg-[#E8F5E8] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Гинеко<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dermatology" className="bg-[#FFF8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Дермато<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/cardiology" className="bg-[#E8F4FD] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Кардио<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry" className="bg-[#FFE8F0] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Стомато<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/mammology" className="bg-[#FFE8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Маммо<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/neurology" className="bg-[#F0E8FF] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Невро<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/otolaryngology" className="bg-[#F2F6D6] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Отоларинго<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/ophthalmology" className="bg-[#E2F5F0] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Офтальмо<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/pediatrics" className="bg-[#EEE0EE] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Педиатрия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/proctology" className="bg-[#DFDBF0] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <span className="font-medium text-sm text-gray-800">Прокто<wbr />логия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Кнопка "Все услуги" для мобильной версии */}
            <div className="md:hidden mt-4 flex justify-center w-full max-w-sm mx-auto">
              <Link 
                href="/services" 
                className="text-white rounded-full py-3 px-8 flex items-center justify-center font-medium text-sm transition-colors w-full"
                style={{ backgroundColor: '#5E0D0C' }}
              >
                Все услуги
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Десктопная версия - оригинальные серые блоки */}
            <div className={`hidden md:flex flex-col space-y-4 md:space-y-6 ${winterStyles.serviceTiles} ${winterStyles.desktopTiles}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/allergology" className="bg-[#EDF8F4] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Аллергология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/gastroenterology" className="bg-[#FFDCC7] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Гастроэнтерология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/ginekolog-v-odintsovo" className="bg-[#F6F8F7] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Гинекология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/dermatology" className="bg-[#F2F6D6] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Дерматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/cardiology" className="bg-[#E2F5F0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Кардиология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry" className="bg-[#FDE3E2] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Стоматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/mammology" className="bg-[#EBD8C9] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Маммология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/neurology" className="bg-[#EEE0EE] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Неврология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/otolaryngology" className="bg-[#DBF0E9] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Отоларингология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/ophthalmology" className="bg-[#DBF0E1] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Офтальмология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/pediatrics" className="bg-[#DBE5F0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Педиатрия</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/proctology" className="bg-[#DFDBF0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <span className="font-medium text-sm md:text-base">Проктология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Кнопка "Все услуги" для десктопа */}
              <div className="flex justify-center">
                <Link 
                  href="/services" 
                  className="text-white rounded-full py-3 px-12 flex items-center justify-center font-medium text-sm transition-colors"
                  style={{ backgroundColor: '#5E0D0C' }}
                >
                  Все услуги
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
          </div>
         
            </div>
          </div>
        </div>
      </section>

      {/* Что Вас интересует с картой */}
      <section id="home-clinics" className="pt-0 pb-4 scroll-mt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Что Вас интересует?
          </h2>

          <div className="flex flex-col lg:flex-row w-full justify-center gap-6">


            {/* Мобильная версия - блоки интересов */}
            <div className="lg:hidden flex flex-col gap-6 w-full px-4">
              {/* Блок Специалисты с изображением врача */}
              <Link href="/doctors" className="bg-gray-50 rounded-[20px] p-4 h-[125px] flex relative overflow-hidden w-full">
                <div className="flex flex-col justify-start flex-1 pr-4">
                  <span className="text-2xl font-bold mb-3">Специалисты</span>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute transform -translate-y-1/2" style={{ top: '58%', right: '2px' }}>
                  <div className="w-[100px] h-[100px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/doctors/doctor.png"
                      alt="Доктор"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      priority
                    />
                  </div>
                </div>
              </Link>

              {/* Блоки Диагностика и Анализы в ряд */}
              <div className="grid grid-cols-2 gap-4">
                <Link href="/diagnostics" className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Диагностика</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link href="/services/lab-tests" className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Анализы</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Блоки Реабилитация и Акции в ряд */}
              <div className="grid grid-cols-2 gap-4">
                <Link href="/rehabilitation" className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Реабилитация</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link href="/promo" className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Акции</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Мобильная карта */}
              <div className="w-full md:hidden">
                <div className="w-full h-[250px] rounded-[20px] overflow-hidden mb-4" id="clinic-map-mobile">
                  <ClinicLocationMap />
                </div>
              </div>
            </div>

            {/* Десктопная версия - оригинальные блоки */}
            <div className="hidden lg:flex flex-col lg:flex-row w-[574px] flex-shrink-0 justify-center gap-6">
            {/* Левая колонка с блоками */}
              <div className="flex flex-col gap-[15px] w-full lg:w-[574px] flex-shrink-0 mx-auto lg:mx-0 px-4 lg:px-0">
              {/* Блок Специалисты */}
              <Link href="/doctors" className="bg-gray-50 rounded-[20px] p-4 w-full h-[140px] flex items-center relative overflow-hidden">
                <div className="flex flex-col max-w-[60%] z-10">
                    <div className="text-lg md:text-xl font-semibold mb-2">Специалисты</div>
                    <p className="text-gray-600 text-sm md:text-base">
                    Найдите подходящего врача в нашей клинике
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </p>
                </div>
                <div className="absolute right-4 top-0 h-[140px] overflow-hidden">
                  <Image
                    src="/images/doctors/doctor.png"
                    alt="Доктор"
                    width={150}
                    height={140}
                    style={{ objectFit: "cover", height: "100%" }}
                    priority
                  />
                </div>
              </Link>

              {/* Два блока в ряд: Диагностика и Анализы */}
                <div className="flex flex-col md:flex-row gap-4">
                  <Link href="/diagnostics" className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Диагностика</div>
                    <p className="text-gray-600 text-sm md:text-base">Современное оборудование</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                
                  <Link href="/services/lab-tests" className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Анализы</div>
                    <p className="text-gray-600 text-sm md:text-base">Быстро и точно</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Два блока в ряд: Реабилитация и Акции */}
                <div className="flex flex-col md:flex-row gap-4">
                  <Link href="/rehabilitation" className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Реабилитация</div>
                    <p className="text-gray-600 text-sm md:text-base">Восстановление здоровья</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                
                  <Link href="/promo" className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Акции</div>
                    <p className="text-gray-600 text-sm md:text-base">Специальные предложения</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

            {/* Статистика удалена по запросу */}
            </div>

            {/* Закрываем левую колонку (desktop) */}
            </div>

            {/* Правая колонка */}
              <div className="hidden md:flex flex-col w-full min-w-0 lg:flex-1 mx-auto px-4 lg:px-0">
              {/* Локальная схема с переходом в карточку выбранного филиала. */}
                <div className="w-full h-[404px] rounded-[20px] overflow-hidden mb-8" id="clinic-map-desktop">
                  <ClinicLocationMap />
                </div>

            </div>
          </div>
          {/* Лёгкие адаптивные фотографии; автопоказ только в видимой области. */}
          <div className="-mx-5 sm:-mx-8 lg:-mx-12 xl:-mx-16 mt-6">
            <HomeGallery />
          </div>
        </div>
      </section>

      {/* Акции и специальные предложения */}
      <section id="home-promotions" className="py-8 scroll-mt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left px-4 md:px-0 max-w-full overflow-hidden text-ellipsis">
            Акции и специальные предложения
          </h2>
          
          {/* Контейнер для акций */}
          {/* Мобильная версия - 3 блока без слайдера */}
          <div className="md:hidden px-4">
            <div className="flex flex-col gap-4">
              {/* Блок "Скидки на анализы!" */}
              <Link href={LAB_PROMOTION.href} className={`bg-[#DAF2FF] rounded-[20px] p-5 h-auto min-h-[160px] flex flex-col justify-between ${winterStyles.promoCard} ${promoStyles.card} ${promoStyles.lab}`}>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Скидки на анализы!</h3>
                    <p className="text-sm text-emerald-800 mb-2">{LAB_PROMOTION.period}</p>
                    {LAB_PROMOTION.discounts.map(({ days, percent }) => {
                      const lastComma = days.lastIndexOf(',');
                      const prefix = lastComma >= 0 ? `${days.slice(0, lastComma + 1)} ` : '';
                      const lastDay = days.slice(lastComma + 1).trim();
                      return <p key={percent} className="text-base text-gray-700 mb-1">{prefix}<span className={promoStyles.discountTail}>{lastDay} — <strong className={promoStyles.mobilePercent}>{percent}%</strong></span></p>;
                    })}
                    <p className="text-xs text-gray-700 mt-2">{LAB_PROMOTION.exclusion}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-4 h-5">
                  <PromotionAction compact />
                </div>
              </Link>

              {/* Блок "Скидки пенсионерам" */}
              <Link href="/promo" className={`bg-[#FADFFF] rounded-[20px] p-5 h-auto min-h-[140px] flex flex-col justify-between ${winterStyles.promoCard} ${promoStyles.card} ${promoStyles.seniors}`}>
                <div>
                  <h3 className="text-xl font-bold mb-2">Скидки пенсионерам</h3>
                  <p className="text-base text-gray-700 h-6"><span className={promoStyles.badge}>Специальные условия</span></p>
                </div>
                <div className="flex items-center justify-end mt-4 h-5">
                  <PromotionAction compact />
                </div>
              </Link>

              {/* Блок "Скидки на КТ до 25%" */}
              <Link href="/promo" className={`bg-[#FFF6C1] rounded-[20px] p-5 h-auto min-h-[140px] flex flex-col justify-between ${winterStyles.promoCard} ${promoStyles.card} ${promoStyles.ct}`}>
                <div>
                  <h3 className="text-xl font-bold mb-2">Скидки на КТ до <span className={promoStyles.mobilePercent}>25%</span></h3>
                  <p className="text-base text-gray-700">для взрослых и детей</p>
                </div>
                <div className="flex items-center justify-end mt-4 h-5">
                  <PromotionAction compact />
                </div>
              </Link>
            </div>

            {/* Кнопка "Все акции и спецпредложения" для мобильной версии */}
            <Link href="/promo" className="w-full bg-white border border-gray-200 text-black rounded-[20px] h-[46px] shadow-sm flex items-center justify-center font-medium text-sm mt-4 hover:bg-gray-50 transition-colors">
              Все акции и спецпредложения &gt;
            </Link>
          </div>

          {/* Десктопная версия - оригинальные блоки */}
          <div className="hidden md:flex flex-col lg:flex-row gap-6 justify-center max-w-[1300px] mx-auto px-4 lg:px-0">
            {/* Левый большой блок */}
            <Link href={LAB_PROMOTION.href} data-promo-art-card="lab" className={`bg-[#DAF2FF] rounded-[20px] w-full lg:w-[593px] h-[300px] md:h-[374px] flex flex-shrink-0 relative overflow-hidden cursor-pointer ${winterStyles.promoCard} ${promoStyles.card} ${promoStyles.lab}`}>
              <div className={promoStyles.labCopy}>
                <div>
                  <p className={promoStyles.eyebrow}>Лабораторная диагностика</p>
                  <h3 className={promoStyles.labHeading}>Скидки на<br />анализы!</h3>
                  <p className={promoStyles.period}>{LAB_PROMOTION.period}</p>
                  <div className={promoStyles.discounts}>
                    {LAB_PROMOTION.discounts.map(({ days, shortDays, percent }) => (
                      <div key={percent} className={promoStyles.discountOption} aria-label={`${days} — скидка ${percent}%`}>
                        <p className={promoStyles.percent}>−{percent}<span>%</span></p>
                        <p className={promoStyles.days}>{shortDays}</p>
                      </div>
                    ))}
                  </div>
                  <p className={promoStyles.exclusion}>{LAB_PROMOTION.exclusion}</p>
                </div>
                <PromotionAction />
              </div>
              
              <div className={`absolute bottom-0 right-1 h-[92%] w-[40%] pointer-events-none ${promoStyles.art} ${promoStyles.labArt}`}>
                <Image 
                  src="/images/seasonal/promo-lab-winter.webp"
                  alt="Лабораторные пробирки и стеклянные колбы"
                  fill
                  sizes="(min-width: 1024px) 240px, 40vw"
                  className="object-contain object-bottom"
                />
              </div>
            </Link>
            
            {/* Правая колонка с 4 блоками */}
            <div className="flex flex-col gap-4 md:gap-6 flex-1">
              {/* Верхний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 2 */}
                <Link href="/promo" data-promo-art-card="seniors" className={`bg-[#FADFFF] rounded-[20px] w-full md:w-full h-[175px] p-4 md:p-6 flex items-center relative overflow-hidden cursor-pointer ${winterStyles.promoCard} ${promoStyles.card} ${promoStyles.seniors}`}>
                  <div className={promoStyles.smallCopy}>
                    <span className={promoStyles.badge}>Специальные условия</span>
                    <h3 className={promoStyles.smallHeading}>Скидки пенсионерам</h3>
                    <PromotionAction />
                  </div>
                  
                  <div className={`absolute right-1 bottom-0 h-full w-[34%] pointer-events-none ${promoStyles.art}`}>
                    <Image 
                      src="/images/seasonal/promo-seniors-winter.webp"
                      alt="Улыбающаяся пожилая пара"
                      fill
                      sizes="(min-width: 1280px) 185px, (min-width: 1024px) 110px, 220px"
                      className="object-contain object-bottom"
                    />
                  </div>
                </Link>
              </div>
              
              {/* Нижний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 4 */}
                <Link href="/promo" data-promo-art-card="ct" className={`bg-[#FFF6C1] rounded-[20px] w-full md:w-full h-[175px] p-4 md:p-6 flex items-center relative overflow-hidden cursor-pointer ${winterStyles.promoCard} ${promoStyles.card} ${promoStyles.ct}`}>
                  <div className={`${promoStyles.smallCopy} ${promoStyles.ctCopy}`}>
                    <h3 className={promoStyles.ctHeading}>КТ для взрослых и детей</h3>
                    <p className={promoStyles.ctPercent}><span>до</span> −25%</p>
                    <PromotionAction />
                  </div>
                  
                  <div className={`absolute right-1 bottom-0 h-full w-[34%] pointer-events-none ${promoStyles.art}`}>
                    <Image
                      src="/images/seasonal/promo-ct-winter.webp"
                      alt="Компьютерный томограф с кушеткой"
                      fill
                      sizes="(min-width: 1280px) 185px, (min-width: 1024px) 110px, 220px"
                      className="object-contain object-bottom"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Кнопка "Все акции и спецпредложения" */}
          <div className="hidden md:flex mt-6 justify-center md:justify-start px-4 md:px-0">
            <Link href="/promo" className="bg-white border border-gray-200 text-black rounded-[40px] w-full md:w-[316.63px] h-[46px] shadow-sm flex items-center justify-center font-medium text-sm md:text-base hover:bg-gray-50 transition-colors">
              Все акции и спецпредложения&gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Специалисты слайдер */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Наши специалисты
          </h2>
          
          {/* Контейнер с врачами - единый слайдер для всех устройств */}
          <div className="relative mx-auto">
            {/* Горизонтальный слайдер для всех устройств */}
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-4 md:gap-6 pb-6 md:pb-10 w-full overflow-x-auto scrollbar-hide" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                ref={doctorsSliderRef}
                suppressHydrationWarning
              >
                {shuffledDoctors.map((doctor) => (
                  <div 
                    key={doctor.id} 
                    className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0"
                  >
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image 
                        src={doctor.photo} 
                        alt={doctor.name} 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                        <h3 className="font-bold text-lg text-black mb-2">{doctor.name}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{doctor.specialization}</p>
                    </div>
                      <Link 
                        href={`/doctors/${doctor.slug}`}
                        className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center"
                      >
                      Записаться онлайн
                      </Link>
                  </div>
                </div>
                ))}
              </div>
            </div>
            
            {/* Навигационные кнопки для слайдера */}
            <button 
              onClick={scrollDoctorsLeft} 
              className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollDoctorsRight} 
              className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Индикаторы слайдера для мобильных */}
            <div className="md:hidden flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Кнопка "Все врачи" */}
          <div className="mt-6 flex justify-center">
            <Link href="/doctors" className="bg-gray-100 text-black py-2 px-6 rounded-full flex items-center text-sm md:text-base hover:bg-gray-200 transition-colors">
              Все врачи
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Пресс-центр */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-black mb-6 self-start max-w-full overflow-hidden text-ellipsis">
            Пресс-центр
          </h2>
          
          {/* Навигационные табы */}
          <div className="flex space-x-3 mb-6">
            <button className="bg-emerald-500 text-white py-2 px-6 rounded-full">
              Новости
            </button>
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full">
              Статьи
            </button>
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full">
              СМИ
            </button>
          </div>
          
          {/* Карточки новостей */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Новость 1 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src="/images/news/sert-ivanova-1200x831.jpg"
                    alt="День донора в СМ-Клиника"
                    width={400}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  06.05.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Иванова Ольга Юрьевна посетила XXVI Конгресс педиатров России</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                ВРАЧ СУРДОЛОГ – ОТОРИНОЛАРИНГОЛОГ
Участвовала в научной программе XXVI Конгресса педиатров России с международным участием
«Актуальные проблемы педиатрии»

                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
            
            {/* Новость 2 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src={encodeURI("/images/news/Интервью с Еленой Будко.webp")}
                    alt="Интервью с Еленой Будко"
                    width={400}
                    height={180}
                    className="w-full object-cover"
                    style={{ height: '341px' }}
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  06.05.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Интервью с Еленой Будко</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Прежде всего, профессия врача – это большая ответственность за здоровье и жизнь другого человека. Грамотный врач должен непрерывно развиваться и расширять свои знания в различных областях медицины
                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
            
            {/* Новость 3 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src="/images/news/11222-1-1.webp"
                    alt="Интервью с Еленой Будко"
                    width={400}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  30.04.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Высокоинтенсивная магнитотерапия (SIS)</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Высокоинтенсивная магнитотерапия (SIS) — это супериндуктивная система, которая состоит из блока управления и специальной катушки. Аппарат создает магнитное поле частотой до 150 Гц. Это запатентованная и уже проверенная в США и западных странах процедура, которая сегодня нашла применение в медицине, реабилитации и спорте. Высокоинтенсивная магнитотерапия помогает облегчить боль, улучшает подвижность суставов, стимулирует заживление переломов костей, вызывает мышечные сокращения и миорелаксацию. Во время процедуры происходят повторяющиеся сокращения мышечных волокон, которые:
                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
          
          {/* Кнопка "Смотреть все" */}
          <div className="mt-6">
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full flex items-center">
              Смотреть все
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Форма записи на прием */}
      <AppointmentForm />
      
    </div>
  );
}
