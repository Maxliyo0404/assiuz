import { createNavigation } from 'next-intl/navigation';

export const locales = ['uz', 'en', 'ru'];
export const localePrefix = 'as-needed'; // yoki 'always'

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix,
  defaultLocale: 'uz' // Mana shu qator yetishmayotgan edi
});