import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';

export default async function RootLayout({ children, params }) {
  const { locale } = await params;  // ← AWAIT qo'shini
const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="AssiTech - IT Xizmatlari" />
        <title>AssiTech</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}