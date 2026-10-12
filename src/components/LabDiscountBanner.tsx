import Image from 'next/image';
import { LAB_PROMOTION } from '@/data/lab-promotion';
import styles from './LabDiscountBanner.module.css';

type Props = {
  variant?: 'slide' | 'hero' | 'card';
  priority?: boolean;
};

export default function LabDiscountBanner({ variant = 'slide', priority = false }: Props) {
  const Heading = variant === 'hero' ? 'h1' : 'p';

  return (
    <div className={`${styles.banner} ${styles[variant]}`} data-lab-banner={variant}>
      <Image
        src={LAB_PROMOTION.image}
        alt=""
        fill
        priority={priority}
        sizes={variant === 'hero' ? '(max-width: 768px) 100vw, 1296px' : '(max-width: 768px) 100vw, 548px'}
        className={styles.image}
      />
      <div className={styles.shade} />
      <div className={styles.content}>
        <p className={styles.period}>{LAB_PROMOTION.period}</p>
        <Heading className={styles.title}>{LAB_PROMOTION.title}</Heading>
        {variant === 'hero' && (
          <p className={styles.intro}>Выберите свой день для заботы о здоровье.</p>
        )}
        <div className={styles.discounts}>
          {LAB_PROMOTION.discounts.map(({ percent, days, shortDays }) => (
            <div className={styles.discount} key={percent}>
              <span className={styles.percent}>−{percent}<span>%</span></span>
              <span className={styles.days}>
                {variant === 'card' ? <abbr title={days}>{shortDays}</abbr> : days}
              </span>
            </div>
          ))}
        </div>
        <p className={styles.exclusion}>{LAB_PROMOTION.exclusion}</p>
        {variant === 'hero' && (
          <a href="#appointment" className={styles.cta}>
            Записаться на анализы <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
