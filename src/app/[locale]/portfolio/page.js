import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './portfolio.css';

export default function Portfolio() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Zamonaviy e-commerce platformasi - React + Node.js + PostgreSQL',
      client: 'Tech Startup',
      image: '🛍️',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Xavfsiz mobile banking ilova - iOS va Android uchun',
      client: 'Finance Corp',
      image: '📱',
      technologies: ['Flutter', 'Firebase', 'Security']
    },
    {
      id: 3,
      name: 'Cloud Infrastructure',
      category: 'Cloud Services',
      description: 'Scalable cloud infrastructure - AWS + Docker + Kubernetes',
      client: 'Manufacturing Ltd',
      image: '☁️',
      technologies: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 4,
      name: 'AI Analytics Dashboard',
      category: 'AI/ML',
      description: 'Real-time analytics dashboard - Machine Learning powered',
      client: 'Data Analytics Co',
      image: '📊',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js']
    },
    {
      id: 5,
      name: 'CRM System',
      category: 'Enterprise Software',
      description: 'Korporativ CRM tizimi - tekin qidirish va reporting',
      client: 'Sales Company',
      image: '📈',
      technologies: ['Vue.js', 'Laravel', 'MySQL']
    },
    {
      id: 6,
      name: 'Security Audit Platform',
      category: 'Cybersecurity',
      description: 'Avtomatlashtirilgan security audit platforma',
      client: 'Security Firm',
      image: '🔐',
      technologies: ['Python', 'Scanning Tools', 'Reporting']
    }
  ];

  return (
    <main className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1>Portfolio</h1>
          <p>Biz yaratgan muvaffaq loyihalar</p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-intro">
            <h2>Bizning Ishimiz</h2>
            <p>Biz turli yo'nalishdagi 100+ dan ortiq loyihani muvaffaqiyatli tugatdik. Quyida ba'zi asosiy proyektlarni ko'rishingiz mumkin.</p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-card-image">{project.image}</div>
                <div className="portfolio-card-content">
                  <div className="portfolio-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="portfolio-footer">
                    <span className="portfolio-client">Client: {project.client}</span>
                    <Link href={`/${currentLocale}/contact`} className="portfolio-cta">
                      Batafsil →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Tayyor Loyihalar</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Qaniqalash Kliyent</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Mutaxassislar Jamoa</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
