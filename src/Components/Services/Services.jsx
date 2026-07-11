'use client';

import { useTranslations } from 'next-intl';
import './Services.css';

export default function Services() {
  const t = useTranslations();

  const services = [
    {
      icon: '🛡️',
      name: t('services.itSupport.name'),
      description: t('services.itSupport.description')
    },
    {
      icon: '💡',
      name: t('services.consulting.name'),
      description: t('services.consulting.description')
    },
    {
      icon: '💻',
      name: t('services.development.name'),
      description: t('services.development.description')
    },
    {
      icon: '☁️',
      name: t('services.cloud.name'),
      description: t('services.cloud.description')
    },
    {
      icon: '🔐',
      name: t('services.security.name'),
      description: t('services.security.description')
    },
    {
      icon: '🔗',
      name: t('services.integration.name'),
      description: t('services.integration.description')
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="section-header">
          <h2>{t('services.title')}</h2>
          <p>Biz sizning biznesini kengaytirish uchun eng yaxshi yechimlarni taqdim etamiz</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">Batafsil →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
