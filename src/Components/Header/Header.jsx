'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchLanguage = (locale) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    window.location.href = newPathname;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href={`/${currentLocale}`}>
            <span className="logo-text">AssiTech</span>
          </Link>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <Link href={`/${currentLocale}`} className="nav-link">
            {t('navigation.home')}
          </Link>
          <Link href={`/${currentLocale}/about`} className="nav-link">
            {t('navigation.about')}
          </Link>
          <Link href={`/${currentLocale}/services`} className="nav-link">
            {t('navigation.services')}
          </Link>
          <Link href={`/${currentLocale}/portfolio`} className="nav-link">
            {t('navigation.portfolio')}
          </Link>
          <Link href={`/${currentLocale}/blog`} className="nav-link">
            {t('navigation.blog')}
          </Link>
          <Link href={`/${currentLocale}/contact`} className="nav-link">
            {t('navigation.contact')}
          </Link>
        </nav>

        <div className="header-actions">
          <div className="language-switcher">
            <button 
              className={`lang-btn ${currentLocale === 'uz' ? 'active' : ''}`}
              onClick={() => switchLanguage('uz')}
            >
              O'z
            </button>
            <button 
              className={`lang-btn ${currentLocale === 'en' ? 'active' : ''}`}
              onClick={() => switchLanguage('en')}
            >
              En
            </button>
            <button 
              className={`lang-btn ${currentLocale === 'ru' ? 'active' : ''}`}
              onClick={() => switchLanguage('ru')}
            >
              Ru
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
