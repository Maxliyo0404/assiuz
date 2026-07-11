'use client';

import { useTranslations } from 'next-intl';
import './Testimonials.css';

export default function Testimonials() {
  const t = useTranslations();

  const testimonials = [
    {
      name: 'Alisher Karimov',
      company: 'Tech Startup',
      text: t('testimonials.client1'),
      avatar: '👨‍💼'
    },
    {
      name: 'Dilfuza Turaeva',
      company: 'Finance Corp',
      text: t('testimonials.client2'),
      avatar: '👩‍💼'
    },
    {
      name: 'Aziz Xolmatov',
      company: 'Manufacturing',
      text: t('testimonials.client3'),
      avatar: '👨‍💼'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>{t('testimonials.title')}</h2>
          <p>Bizning kliyentlarimiz bizning xizmatlari haqida nima deyishadi</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <span className="author-avatar">{testimonial.avatar}</span>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
