'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Hero.css';

export default function Hero() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-buttons">
            <Link href={`/${currentLocale}/contact`} className="btn btn-primary">
              {t('hero.cta')}
            </Link>
            <Link href={`/${currentLocale}/services`} className="btn btn-secondary">
              Xizmatlar
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="tech-icon">💻</div>
          </div>
        </div>
      </div>
    </section>
  );
}
