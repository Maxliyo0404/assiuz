import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'uz';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h1 style={{ fontSize: '5rem', margin: 0 }}>404</h1>
        <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Sahifa topilmadi</p>
        <p style={{ opacity: 0.8 }}>Siz izlayotgan sahifa mavjud emas.</p>
      </div>
      <Link 
        href={`/${currentLocale}`}
        style={{
          padding: '1rem 2rem',
          background: 'white',
          color: '#667eea',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
