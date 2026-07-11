import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Loyihangizdagi tillar ro'yxati
  locales: ['uz', 'en', 'ru'],
  // Agar foydalanuvchi til tanlamasa, standart til
  defaultLocale: 'uz'
});

export const config = {
  // Middleware barcha sahifalarda ishlashi uchun
  // Bu yerda '/' va til bilan boshlanadigan barcha yo'llar ko'rsatilgan
  matcher: ['/', '/(uz|en|ru)/:path*']
};