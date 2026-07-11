'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Footer.css';

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section">
            <h3>AssiTech</h3>
            <p>Raqamli transformatsiya uchun sizning hamkoringiz</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.links')}</h4>
            <ul>
              <li><Link href={`/${currentLocale}`}>{t('navigation.home')}</Link></li>
              <li><Link href={`/${currentLocale}/about`}>{t('navigation.about')}</Link></li>
              <li><Link href={`/${currentLocale}/services`}>{t('navigation.services')}</Link></li>
              <li><Link href={`/${currentLocale}/contact`}>{t('navigation.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.support')}</h4>
            <ul>
              <li><Link href={`/${currentLocale}`}>{t('footer.privacyPolicy')}</Link></li>
              <li><Link href={`/${currentLocale}`}>{t('footer.terms')}</Link></li>
              <li><a href="mailto:info@assitech.uz">Email</a></li>
              <li><a href="tel:+998712000000">+998 (71) 200-00-00</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Eng so'ngi yangiliklarni bilib oling</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email" required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
