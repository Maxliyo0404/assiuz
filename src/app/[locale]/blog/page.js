import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './blog.css';

export default function Blog() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const blogPosts = [
    {
      id: 1,
      title: 'Cloud Computing nima va nima uchun muhim?',
      excerpt: 'Bugungi dunyoda cloud computing bizneslar uchun asosiy rol o\'ynamoqda. Biz bu mavzu haqida batafsil gaplamiz.',
      date: '2024-07-10',
      category: 'Texnologiya',
      author: 'Shavkat Mirziyoyev',
      image: '☁️'
    },
    {
      id: 2,
      title: 'Kiberxavfsizlik: Sizning biznesni himoya qiling',
      excerpt: 'Kiberxavfsizlik hujumlardan qanday saqlaning va sizning ma\'lumotlaringizni qanday himoya qiling.',
      date: '2024-07-08',
      category: 'Xavfsizlik',
      author: 'Gulnoza Turaeva',
      image: '🔐'
    },
    {
      id: 3,
      title: 'AI va Machine Learning: Kelajakni yaratish',
      excerpt: 'Artificial Intelligence texnologiyasi biznesni qanday o\'zgartiryapti? Amaliy misollar va tahlil.',
      date: '2024-07-05',
      category: 'AI',
      author: 'Alisher Karimov',
      image: '🤖'
    },
    {
      id: 4,
      title: 'Web Development: 2024 yilning trendalari',
      excerpt: 'React, Next.js, Vue.js - qaysi framework hozir eng populyar va nima uchun?',
      date: '2024-07-01',
      category: 'Development',
      author: 'Dilfuza Xusainova',
      image: '💻'
    },
    {
      id: 5,
      title: 'Digital Transformation: Haqiqat va Xayollar',
      excerpt: 'Raqamli transformatsiya nima va kompaniyalar buni qanday amalga oshirishlari kerak?',
      date: '2024-06-28',
      category: 'Biznes',
      author: 'Shavkat Mirziyoyev',
      image: '🚀'
    },
    {
      id: 6,
      title: 'DevOps: Tez deployment va reliability',
      excerpt: 'DevOps amaliyotlari qanday tez deployment va yuqori sifatni ta\'minlab beradi?',
      date: '2024-06-25',
      category: 'DevOps',
      author: 'Alisher Karimov',
      image: '⚙️'
    }
  ];

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Blog</h1>
          <p>Eng so'ngi texnologiya yangiliklari va maslahatlar</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">{post.image}</div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="category">{post.category}</span>
                    <span className="date">{new Date(post.date).toLocaleDateString('uz-UZ')}</span>
                  </div>
                  <h3>
                    <Link href={`/${currentLocale}/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="author">By {post.author}</span>
                    <Link href={`/${currentLocale}/blog/${post.id}`} className="read-more">
                      O'qish →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
