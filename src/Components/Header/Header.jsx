import { useTranslations } from 'next-intl';
import { Link } from '@/navigation'; // Agar navigation konfiguratsiyasi bo'lsa

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">ASSI Tech</div>
        <ul className="menu">
          <li><Link href="/about">{t('about')}</Link></li>
          <li><Link href="/products">{t('products')}</Link></li>
          <li><Link href="/services">{t('services')}</Link></li>
          <li><Link href="/contact">{t('contact')}</Link></li>
          <li><Link href="/install" className="btn-install">{t('install')}</Link></li>
        </ul>
      </nav>
    </header>
  );
}