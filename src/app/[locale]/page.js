'use client';

import Hero from '@/Components/Hero/Hero';
import Services from '@/Components/Services/Services';
import Testimonials from '@/Components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
    </main>
  );
}
