'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './contact.css';

export default function Contact() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Xabar yuboring</h2>
              {submitted && (
                <div className="success-message">✓ Xabar muvaffaqiyatli yuborildi!</div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contact.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  {t('contact.submit')}
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Manzil</h3>
                <p>{t('contact.address')}</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Telefon</h3>
                <p><a href="tel:+998712000000">{t('contact.phone_display')}</a></p>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h3>Email</h3>
                <p><a href="mailto:info@assitech.uz">{t('contact.email_display')}</a></p>
              </div>

              <div className="info-card">
                <div className="info-icon">⏰</div>
                <h3>Ish vaqti</h3>
                <p>Dushanba - Juma: 09:00 - 18:00<br/>Shanba - Yakshanba: Yopiq</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
