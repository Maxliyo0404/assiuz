import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './services.css';

export default function Services() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const serviceDetails = [
    {
      id: 'it-support',
      icon: '🛡️',
      name: t('services.itSupport.name'),
      description: t('services.itSupport.description'),
      benefits: ['24/7 Qo\'llab-quvvatlash', 'Tezkor javob', 'Mutaxassislar jamoa']
    },
    {
      id: 'consulting',
      icon: '💡',
      name: t('services.consulting.name'),
      description: t('services.consulting.description'),
      benefits: ['Strategik rejalar', 'Auditi va tahlil', 'Takliflar']
    },
    {
      id: 'development',
      icon: '💻',
      name: t('services.development.name'),
      description: t('services.development.description'),
      benefits: ['Modern texnologiya', 'Zamonaviy dizayn', 'Tez delivery']
    },
    {
      id: 'cloud',
      icon: '☁️',
      name: t('services.cloud.name'),
      description: t('services.cloud.description'),
      benefits: ['Masштаб', 'Xavfsizlik', 'Samaradorlik']
    },
    {
      id: 'security',
      icon: '🔐',
      name: t('services.security.name'),
      description: t('services.security.description'),
      benefits: ['Himoya', 'Monitoring', 'Intsidents javob']
    },
    {
      id: 'integration',
      icon: '🔗',
      name: t('services.integration.name'),
      description: t('services.integration.description'),
      benefits: ['API integratsiyasi', 'Avtomatsiyalash', 'Mas'uliyatli']
    }
  ];

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>{t('services.title')}</h1>
          <p>Biz har qanday biznesning ehtiyojlari uchun maxsus yechimlar taqdim etamiz</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-list">
            {serviceDetails.map((service) => (
              <div key={service.id} className="service-detail-card">
                <div className="service-detail-icon">{service.icon}</div>
                <div className="service-detail-content">
                  <h3>{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="benefits">
                    <h4>Afzalliklari:</h4>
                    <ul>
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>✓ {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={`/${currentLocale}/contact`} className="service-cta">
                    Batafsil ma\'lumot →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
