import Image from 'next/image';
import Link from 'next/link';

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  buttonColor?: string;
  doctorImage?: string;
  /** Когда указан, весь баннер оборачивается в ссылку (без оверлея кнопки) */
  bannerLink?: string;
}

export default function PromoBanner({ 
  title, 
  subtitle, 
  image, 
  buttonText = 'Подробнее', 
  buttonLink = '/services',
  buttonColor = '#13AB7B',
  doctorImage,
  bannerLink
}: PromoBannerProps) {
  const content = (
    <div className="w-full rounded-[20px] overflow-hidden shadow-lg mb-8 relative">
      <Image
        src={image}
        alt={subtitle ? `${title} - ${subtitle}` : title}
        width={1200}
        height={400}
        className="w-full h-auto object-cover"
        priority
      />
      
      {/* Изображение врача или кнопка "Подробнее" — скрыты при bannerLink (картинка уже содержит всё) */}
      {!bannerLink && doctorImage ? (
        <div className="absolute bottom-0 right-4">
          <Image
            src={doctorImage}
            alt="Врач"
            width={150}
            height={200}
            className="object-cover"
            style={{ maxHeight: '200px', width: 'auto', display: 'block' }}
          />
        </div>
      ) : !bannerLink && buttonText ? (
        <div className="absolute bottom-4 right-4">
          <Link 
            href={buttonLink}
            className="px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl text-white"
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </Link>
        </div>
      ) : null}
    </div>
  );

  if (bannerLink) {
    return (
      <Link href={bannerLink} className="block">
        {content}
      </Link>
    );
  }
  return content;
}
