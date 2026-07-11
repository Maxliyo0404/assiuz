import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './about.css';

export default function About() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>{t('about.title')}</h1>
          <p>{t('about.description')}</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-item">
              <div className="icon">🎯</div>
              <h3>Missiya</h3>
              <p>{t('about.mission')}</p>
            </div>
            <div className="about-item">
              <div className="icon">👥</div>
              <h3>Jamoa</h3>
              <p>{t('about.team')}</p>
            </div>
            <div className="about-item">
              <div className="icon">🏆</div>
              <h3>Muvaffaqiyat</h3>
              <p>1000+ loyihani muvaffaqiyatli tugatdik va 500+ qaniqalash kliyent mavjud.</p>
            </div>
          </div>

          <div className="team-section">
            <h2>Bizning Jamoa</h2>
            <div className="team-grid">
              {[
                { name: 'Shavkat Mirziyoyev', role: 'Asoschi va CEO', avatar: '👨‍💼' },
                { name: 'Gulnoza Turaeva', role: 'CTO', avatar: '👩‍💻' },
                { name: 'Alisher Karimov', role: 'Lead Developer', avatar: '👨‍💻' },
                { name: 'Dilfuza Xusainova', role: 'Project Manager', avatar: '👩‍💼' }
              ].map((member, i) => (
                <div key={i} className="team-member">
                  <div className="member-avatar">{member.avatar}</div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
